import P5 from 'p5';
import { Gravity } from './Gravity';

export const gravity = (p5: P5) => {
  const gravitySim = new Gravity(p5);

  p5.setup = function () {
    gravitySim.setup();
  };

  p5.draw = function () {
    gravitySim.simulateFrame();
    gravitySim.render();
  };
};
