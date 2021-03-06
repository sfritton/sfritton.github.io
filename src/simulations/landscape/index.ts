import P5 from 'p5';
import { RefObject } from 'react';
import { Landscape } from './Landscape';

export const proceduralLandscape = (
  buttonRef: RefObject<HTMLButtonElement>,
  selectRef: RefObject<HTMLSelectElement>,
) => (p5: P5) => {
  const landscape = new Landscape(p5);

  p5.setup = function () {
    landscape.setup();
  };

  // TODO: there's got to be a better way to do this
  buttonRef.current?.addEventListener('click', (e) => {
    e.preventDefault();

    landscape.createWorld();
    landscape.render();
  });

  // TODO: there's got to be a better way to do this
  selectRef.current?.addEventListener('change', (e) => {
    e.preventDefault();

    // @ts-expect-error
    const mapType = e.target?.value;

    landscape.updateMapType(mapType);
  });
};
