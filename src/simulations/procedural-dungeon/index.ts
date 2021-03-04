import { RefObject } from 'react';
import P5 from 'p5';
import { ProceduralDungeon } from './ProceduralDungeon';

export const proceduralDungeon = (buttonRef: RefObject<HTMLButtonElement>) => (p5: P5) => {
  const dungeon = new ProceduralDungeon(p5);

  p5.setup = function () {
    dungeon.setup();
    dungeon.generateDungeon();
    dungeon.renderDungeon();
  };

  // TODO: there's got to be a better way to do this
  buttonRef.current?.addEventListener('click', (e) => {
    e.preventDefault();

    dungeon.generateDungeon();
    dungeon.renderDungeon();
  });
};
