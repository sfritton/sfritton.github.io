import P5 from 'p5';
import { ProceduralDungeon } from './ProceduralDungeon';

export const proceduralDungeon = (p5: P5) => {
  const dungeon = new ProceduralDungeon(p5);
  const width = Math.min(document.body.clientWidth - 100, 1000);
  const height = (width * 3) / 4;

  p5.setup = function () {
    p5.createCanvas(width, height);
    p5.noStroke();

    dungeon.generateDungeon();
    dungeon.renderDungeon();
  };

  p5.keyPressed = function () {
    switch (p5.key) {
      case ' ':
        dungeon.generateDungeon();
        break;
      default:
        return;
    }

    dungeon.renderDungeon();
  };
};
