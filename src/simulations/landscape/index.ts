import P5 from 'p5';
import { Landscape } from './Landscape';

export const proceduralLandscape = (p5: P5) => {
  const landscape = new Landscape(p5);

  p5.setup = function () {
    landscape.setup();
  };
};
