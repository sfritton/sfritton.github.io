import debounce from 'debounce';

import { confetti, canvas } from './confetti';
import { paperCleanup } from './folded-note';

const MIN_WIDTH = 668;
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
let observer: IntersectionObserver | undefined;

const tabs = document.getElementById('css-exploration');
const tabContents = Array.from(tabs?.querySelectorAll<HTMLDivElement & Tab>('.tab-content') ?? []);

tabContents?.forEach((tab, index) => {
  tab.init = TABS[String(index)]?.init;
  tab.cleanup = TABS[String(index)]?.cleanup;
});

const getIsMobile = () => {
  const viewportWidth = Math.max(document.documentElement.clientWidth ?? 0, window.innerWidth ?? 0);
  return viewportWidth < MIN_WIDTH;
};

export const updateSelectedTabBasedOnScrollPosition = (scrollPosition: number) => {
  if (!tabs || getIsMobile()) return;

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

const setupIntersectionObserver = () => {
  if (observer || !getIsMobile()) return;

  observer = new IntersectionObserver(
    (entries: IntersectionObserverEntry[]) => {
      if (!getIsMobile()) return;

      entries.forEach((entry) => {
        const tab = entry.target as Element & Tab;

        const isTabVisible = tab.classList.contains(SELECTED_CLASS_NAME);

        // tab is visible for the first time
        if (entry.isIntersecting && !isTabVisible) {
          tab.classList.add(SELECTED_CLASS_NAME);
          tab.init?.();
        }

        // tab is invisible for the first time
        else if (!entry.isIntersecting && isTabVisible) {
          tab.classList.remove(SELECTED_CLASS_NAME);
          tab.cleanup?.();
        }
      });
    },
    { threshold: 0.75 },
  );

  tabContents?.forEach((tab) => {
    observer?.observe(tab);
  });
};

setupIntersectionObserver();
window.addEventListener('resize', debounce(setupIntersectionObserver, 200));
