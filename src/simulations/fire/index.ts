import P5 from 'p5';
import { Fire } from './Fire';

export const fire = (p5: P5) => {
  const fire = new Fire(p5, true);

  p5.setup = function () {
    fire.setup();
  };

  p5.draw = function () {
    fire.simulate();
    fire.render();
  };
};
