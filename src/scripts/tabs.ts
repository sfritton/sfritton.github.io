import { confetti, canvas } from './confetti';
import { paperCleanup } from './folded-note';

const tabs = document.getElementById('css-exploration');

// TODO: mobile
const TAB_HEIGHT = 600;
const HEADER_HEIGHT = 64;
const SELECTED_CLASS_NAME = 'selected';

interface Tab {
  init?: () => void;
  cleanup?: () => void;
}

const TABS: Record<string, Tab | undefined> = {
  // Folded Note
  '1': {
    cleanup: () => paperCleanup(),
  },
  // Confetti
  '2': {
    init: () => {
      if (canvas) {
        canvas.width = canvas.parentElement?.clientWidth ?? 300;
        canvas.height = canvas.parentElement?.clientHeight ?? 400;
      }
      confetti?.createConfettis();
      confetti?.start();
    },
    cleanup: () => confetti?.dispose(),
  },
};

let tabIndex = -1;

export const updateSelectedTabBasedOnScrollPosition = (scrollPosition: number) => {
  if (!tabs) return;

  const tabTitles = Array.from(tabs.querySelectorAll('.tab-title'));
  const tabContents = Array.from(tabs.querySelectorAll('.tab-content'));

  const previousTabIndex = tabIndex;

  const tabListStart = tabs.offsetTop;
  // TODO: how can we get this transition to happen between tabs?
  const scrollDistance = scrollPosition - tabListStart + HEADER_HEIGHT; // + TAB_HEIGHT / 2;
  tabIndex = Math.floor(scrollDistance / TAB_HEIGHT);

  const selectedTabTitle = tabTitles[tabIndex];
  const selectedTabContent = tabContents[tabIndex];

  // If we can't find the tab, or if it's already selected, do nothing
  if (
    !selectedTabTitle ||
    selectedTabTitle.classList.contains(SELECTED_CLASS_NAME) ||
    tabIndex === previousTabIndex
  )
    return;

  // Update the tab & content
  Array.from(tabs.children).forEach((tab) => tab.classList.remove(SELECTED_CLASS_NAME));
  selectedTabTitle.classList.add(SELECTED_CLASS_NAME);
  selectedTabContent.classList.add(SELECTED_CLASS_NAME);

  // Run init & cleanup
  TABS[String(previousTabIndex)]?.cleanup?.();
  TABS[String(tabIndex)]?.init?.();
};
