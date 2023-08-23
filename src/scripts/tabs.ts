import { confetti } from './confetti';
import { paperCleanup } from './folded-note';

const tabList = document.querySelector<HTMLElement>('.tablist');
const demo = document.querySelector<HTMLElement>('.demo');
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
      confetti?.createConfettis();
      confetti?.start();
    },
    cleanup: () => confetti?.dispose(),
  },
};

let tabIndex = -1;

export const updateSelectedTabBasedOnScrollPosition = (scrollPosition: number) => {
  if (!tabList || !demo) return;

  const areTabsVisible = window.getComputedStyle(tabList, null).display !== 'none';
  if (!areTabsVisible) return;

  const previousTabIndex = tabIndex;

  const tabListStart = tabList.offsetTop;
  const scrollDistance = scrollPosition - tabListStart + HEADER_HEIGHT + TAB_HEIGHT / 2;
  tabIndex = Math.floor(scrollDistance / TAB_HEIGHT);

  const selectedTab = tabList.children.item(tabIndex);
  const selectedDemo = demo.children.item(tabIndex);

  // If we can't find the tab, or if it's already selected, do nothing
  if (
    !selectedTab ||
    selectedTab.classList.contains(SELECTED_CLASS_NAME) ||
    tabIndex === previousTabIndex
  )
    return;

  // Update the tab
  Array.from(tabList.children).forEach((tab) => tab.classList.remove(SELECTED_CLASS_NAME));
  selectedTab.classList.add(SELECTED_CLASS_NAME);

  // Update the content
  Array.from(demo.children).forEach((child, index) => {
    child.classList.remove(SELECTED_CLASS_NAME);

    if (index === previousTabIndex) {
      TABS[String(index)]?.cleanup?.();
    }
  });

  selectedDemo?.classList.add(SELECTED_CLASS_NAME);
  TABS[String(tabIndex)]?.init?.();
};
