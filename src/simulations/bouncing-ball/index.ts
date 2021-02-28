import P5 from 'p5';
import { BouncingBall } from './BouncingBall';

export const bouncingBall = (p5: P5) => {
  const ball = new BouncingBall(p5);
  const width = Math.min(document.body.clientWidth - 100, 700);
  // if the width is less than 662, assume we're on a vertical screen
  const height = width < 662 ? (width * 4) / 3 : (width * 3) / 4;

  p5.setup = function () {
    p5.createCanvas(width, height);

    // initialize the ball
    ball.setup();
  };

  p5.draw = function () {
    ball.simulateFrame();
    ball.render();
  };
};
