import { updateHeaderBasedOnScrollPosition } from './header';
import { updateSelectedTabBasedOnScrollPosition } from './tabs';

let ticking = false;

const handleScroll = () => {
  const lastKnownScrollPosition = window.scrollY;

  if (!ticking) {
    window.requestAnimationFrame(() => {
      updateHeaderBasedOnScrollPosition(lastKnownScrollPosition);
      updateSelectedTabBasedOnScrollPosition(lastKnownScrollPosition);
      ticking = false;
    });

    ticking = true;
  }
};

handleScroll();

document.addEventListener('scroll', handleScroll);
