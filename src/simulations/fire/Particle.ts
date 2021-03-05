import P5 from 'p5';
import { randomFromTo } from '../util/helpers';
import {
  PARTICLE_MIN_LIFE,
  PARTICLE_MAX_LIFE,
  PARTICLE_DIAMETER,
  EMIT_RADIUS,
  PARTICLE_SPEED,
  COLOR_SPEED,
  GRAVITY,
  SPIRAL_STRENGTH,
} from './constants';

interface Color {
  r: number;
  g: number;
  b: number;
}

export class Particle {
  p5: P5;
  center: P5.Vector;
  position: P5.Vector;
  velocity: P5.Vector;
  remainingLife: number;
  color: Color = {
    r: 255,
    g: 255,
    b: 255,
  };

  constructor(p5: P5, center: P5.Vector) {
    this.p5 = p5;
    this.center = center.copy();
    this.position = this.randomPosition();
    this.velocity = this.randomVelocity();
    this.remainingLife = randomFromTo(PARTICLE_MIN_LIFE, PARTICLE_MAX_LIFE);
  }

  render() {
    this.p5.strokeWeight(PARTICLE_DIAMETER * this.remainingLife);
    this.p5.stroke(this.color.r, this.color.g, this.color.b);
    this.p5.point(this.position.x, this.position.y, this.position.z);
  }

  /** Choose a random position on the surface of a sphere */
  randomPosition(): P5.Vector {
    const randomDirection = P5.Vector.random3D();

    return P5.Vector.add(this.center, randomDirection.mult(EMIT_RADIUS));
  }

  randomVelocity(): P5.Vector {
    const randomDirection = this.p5
      .createVector(
        randomFromTo(-1, 1),
        randomFromTo(-1, 0), // only let particles move up
        randomFromTo(-1, 1),
      )
      .normalize();

    const randomSpeed = Math.random();

    return this.p5.createVector(
      (randomDirection.x * randomSpeed * PARTICLE_SPEED) / 4,
      randomDirection.y * randomSpeed * PARTICLE_SPEED, // particles should move faster in the y direction
      (randomDirection.z * randomSpeed * PARTICLE_SPEED) / 4,
    );
  }

  update(deltaT: number) {
    this.updatePosition(deltaT);
    this.updateColor(deltaT);
    this.updateLife(deltaT);
  }

  computeSpiralForce() {
    const fromCenter = P5.Vector.sub(this.position, this.center);
    const centerDirection = this.p5.createVector(fromCenter.x, 0, fromCenter.z).normalize();

    // A handy trick to get a perpendicular vector
    const spiralDirection = this.p5.createVector(fromCenter.z, 0, -fromCenter.x).normalize();

    return spiralDirection.sub(centerDirection.mult(2)).mult(SPIRAL_STRENGTH);
  }

  get isDead() {
    return this.remainingLife <= 0;
  }

  updateLife(deltaT: number) {
    this.remainingLife -= deltaT;
  }

  updatePosition(deltaT: number) {
    // compute forces
    const gravityForce = this.p5.createVector(0, -1, 0).mult(GRAVITY * deltaT);
    const spiralForce = this.computeSpiralForce();

    // update velocity
    this.velocity.add(gravityForce).add(spiralForce.mult(deltaT));

    // update position
    this.position.add(P5.Vector.mult(this.velocity, deltaT));
  }

  updateColor(deltaT: number) {
    this.color.g = Math.floor(this.color.g - COLOR_SPEED * deltaT);
    this.color.b = Math.floor(this.color.b - 10 * COLOR_SPEED * deltaT);
  }
}
