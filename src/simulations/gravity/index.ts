import P5 from 'p5';
import { RefObject } from 'react';
import { Gravity } from './Gravity';

export const gravity = (selectRef: RefObject<HTMLSelectElement>) => (p5: P5) => {
  const gravitySim = new Gravity(p5);

  p5.setup = function () {
    gravitySim.setup();
  };

  p5.draw = function () {
    gravitySim.simulateFrame();
    gravitySim.render();
  };

  // TODO: there's got to be a better way to do this
  selectRef.current?.addEventListener('change', (e) => {
    e.preventDefault();

    // @ts-expect-error
    const scenario = e.target?.value;

    gravitySim.loadScenario(scenario);
  });
};
