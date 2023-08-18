const header = document.querySelector('header') as HTMLElement;

const setHeaderHeight = (height: number) => (header ? (header.style.height = `${height}vh`) : '');

let ticking = false;

const updateHeaderBasedOnScrollPosition = () => {
  const lastKnownScrollPosition = window.scrollY;
  const windowHeight = window.innerHeight;

  if (!ticking) {
    window.requestAnimationFrame(() => {
      const percentOfHeight = Math.max(1 - lastKnownScrollPosition / windowHeight, 0) * 100;
      const distanceToHeaderBottom = windowHeight - lastKnownScrollPosition;

      setHeaderHeight(percentOfHeight);

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
      ticking = false;
    });

    ticking = true;
  }
};

updateHeaderBasedOnScrollPosition();

document.addEventListener('scroll', updateHeaderBasedOnScrollPosition);
