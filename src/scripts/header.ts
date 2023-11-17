const header = document.querySelector<HTMLElement>('header');

const setHeaderHeight = (height: number) => {
  if (!header) return;

  const unit = CSS.supports('height', '100svh') ? 'svh' : 'vh';

  header.style.height = `${height}${unit}`;
};

export const updateHeaderBasedOnScrollPosition = (scrollPosition: number) => {
  const windowHeight = document.documentElement.clientHeight;
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
