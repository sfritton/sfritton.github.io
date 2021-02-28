import { RefObject } from 'react';
import P5 from 'p5';
import { ProceduralDungeon } from './ProceduralDungeon';

export const proceduralDungeon = (buttonRef: RefObject<HTMLButtonElement>) => (p5: P5) => {
  const dungeon = new ProceduralDungeon(p5);
  const width = Math.min(document.body.clientWidth - 100, 700);
  // if the width is less than 662, assume we're on a vertical screen
  const height = width < 662 ? (width * 4) / 3 : (width * 3) / 4;

  p5.setup = function () {
    p5.createCanvas(width, height);
    p5.noStroke();

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
