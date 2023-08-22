const header = document.querySelector('header') as HTMLElement | undefined;

const setHeaderHeight = (height: number) => (header ? (header.style.height = `${height}vh`) : '');

export const updateHeaderBasedOnScrollPosition = (scrollPosition: number) => {
  const windowHeight = window.innerHeight;
  const percentOfHeight = Math.max(1 - scrollPosition / windowHeight, 0) * 100;
  const distanceToHeaderBottom = windowHeight - scrollPosition;

  setHeaderHeight(percentOfHeight);

  if (!header) return;

  if (percentOfHeight < 100) {
    header.classList.add('has-scrolled');
  } else {
    header.classList.remove('has-scrolled');
  }

  if (distanceToHeaderBottom <= 64) {
    header.classList.add('as-nav');
  } else {
    header.classList.remove('as-nav');
  }
};
