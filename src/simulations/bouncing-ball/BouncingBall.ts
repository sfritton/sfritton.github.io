import { PhysicsSimulation } from '../util/PhysicsSimulation';
import { COR, COF, GRAVITY, RADIUS } from './constants';
import { Coordinates } from '../util/types';

export class BouncingBall extends PhysicsSimulation {
  position: Coordinates = { x: 0, y: 0 };
  velocity: Coordinates = { x: 0, y: 0 };

  setup() {
    super.setup();

    // Place the ball in the center of the canvas
    this.position = {
      x: this.p5.width / 2,
      y: this.p5.height / 2,
    };
  }

  simulateFrame() {
    const deltaT = this.calculateTime();
    this.bounce();
    this.updatePosition(deltaT);
    this.handleUserInput(deltaT);
  }

  render() {
    this.p5.noStroke();
    this.p5.background('#008060');
    this.p5.fill('#65ffda');
    this.p5.ellipse(this.position.x, this.position.y, RADIUS * 2, RADIUS * 2);
  }

  /** If the ball is too close to an edge, reset it and reverse its velocity. */
  bounce() {
    // floor
    if (this.position.y + RADIUS >= this.p5.height && this.velocity.y >= 0) {
      this.position.y = this.p5.height - RADIUS;
      this.velocity.x *= COF;
      this.velocity.y *= -COR;
    }

    // ceiling
    if (this.position.y - RADIUS <= 0 && this.velocity.y <= 0) {
      this.position.y = RADIUS;
      this.velocity.x *= COF;
      this.velocity.y *= -COR;
    }

    // right wall
    if (this.position.x + RADIUS >= this.p5.width && this.velocity.x >= 0) {
      this.position.x = this.p5.width - RADIUS;
      this.velocity.x *= -COR;
      this.velocity.y *= COF;
    }

    // left wall
    if (this.position.x - RADIUS <= 0 && this.velocity.x <= 0) {
      this.position.x = RADIUS;
      this.velocity.x *= -COR;
      this.velocity.y *= COF;
    }
  }

  /** Moves the ball based on its velocity. */
  updatePosition(deltaT: number) {
    this.velocity.y += GRAVITY * deltaT;

    this.position.x += this.velocity.x * deltaT;
    this.position.y += this.velocity.y * deltaT;
  }

  /** Let the user pick up and throw the ball */
  handleUserInput(deltaT: number) {
    this.p5.cursor(this.p5.HAND);

    // Do nothing if the mouse is not pressed
    if (!this.isMousePressed()) return;

    this.p5.cursor(this.p5.MOVE);
    this.position.x = this.p5.mouseX;
    this.position.y = this.p5.mouseY;

    this.velocity.x = (this.p5.mouseX - this.p5.pmouseX) / deltaT;
    this.velocity.y = (this.p5.mouseY - this.p5.pmouseY) / deltaT;
  }
}
