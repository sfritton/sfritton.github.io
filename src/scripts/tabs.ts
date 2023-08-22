const tabList = document.querySelector('.tablist') as HTMLElement | undefined;
const demo = document.querySelector('.demo') as HTMLElement | undefined;
const TAB_HEIGHT = 600;
const HEADER_HEIGHT = 64;
const SELECTED_CLASS_NAME = 'selected';

export const updateSelectedTabBasedOnScrollPosition = (scrollPosition: number) => {
  if (!tabList || !demo) return;

  const areTabsVisible = window.getComputedStyle(tabList, null).display !== 'none';
  if (!areTabsVisible) return;

  const tabListStart = tabList.offsetTop;
  const scrollDistance = scrollPosition - tabListStart + HEADER_HEIGHT + TAB_HEIGHT / 2;
  const tabIndex = Math.floor(scrollDistance / TAB_HEIGHT);

  const selectedTab = tabList.children.item(tabIndex);
  const selectedDemo = demo.children.item(tabIndex);

  if (selectedTab && !selectedTab.classList.contains(SELECTED_CLASS_NAME)) {
    Array.from(tabList.children).forEach((tab) => tab.classList.remove(SELECTED_CLASS_NAME));
    Array.from(demo.children).forEach((child) => child.classList.remove(SELECTED_CLASS_NAME));
    selectedTab.classList.add(SELECTED_CLASS_NAME);
    selectedDemo?.classList.add(SELECTED_CLASS_NAME);
  }
};
