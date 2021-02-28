import P5 from 'p5';
import { canvasDimensions } from '../util';
import { BouncingBall } from './BouncingBall';

export const bouncingBall = (p5: P5) => {
  const ball = new BouncingBall(p5);

  p5.setup = function () {
    p5.createCanvas(...canvasDimensions());

    // initialize the ball
    ball.setup();
  };

  p5.draw = function () {
    ball.simulateFrame();
    ball.render();
  };
};
