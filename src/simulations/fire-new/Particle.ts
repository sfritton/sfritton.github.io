import P5 from 'p5';
import { randomFromTo } from '../util/helpers';
import { Coordinates } from '../util/types';
import {
  PARTICLE_MIN_LIFE,
  PARTICLE_MAX_LIFE,
  PARTICLE_DIAMETER,
  EMIT_RADIUS,
  PARTICLE_SPEED,
  COLOR_SPEED,
  GRAVITY,
} from './constants';

interface Color {
  r: number;
  g: number;
  b: number;
}

export class Particle {
  p5: P5;
  center: Coordinates;
  position: Coordinates;
  velocity: Coordinates;
  life: number;
  remainingLife: number;
  color: Color = {
    r: 255,
    g: 255,
    b: 255,
  };

  constructor(p5: P5, center: Coordinates) {
    this.p5 = p5;
    this.center = center;
    this.position = this.randomPosition();
    this.velocity = this.randomVelocity();
    this.life = randomFromTo(PARTICLE_MIN_LIFE, PARTICLE_MAX_LIFE);
    this.remainingLife = this.life;
  }

  render() {
    this.p5.strokeWeight(this.size);
    this.p5.stroke(this.color.r, this.color.g, this.color.b);
    this.p5.point(this.position.x, this.position.y);
  }

  /** Choose a random position inside a circle */
  randomPosition(): Coordinates {
    const randomAngle = Math.random() * 2 * this.p5.PI;
    const randomRadius = EMIT_RADIUS * Math.sqrt(Math.random());

    return {
      x: this.center.x + randomRadius * this.p5.cos(randomAngle),
      y: this.center.y + randomRadius * this.p5.sin(randomAngle),
    };
  }

  randomVelocity(): Coordinates {
    const randomX = randomFromTo(-1, 1);
    const randomY = Math.random();

    const magnitude = Math.sqrt(randomX * randomX + randomY * randomY);

    const unitVector = {
      x: randomX / magnitude,
      y: randomY / magnitude,
    };

    const randomSpeed = Math.random();

    return {
      x: unitVector.x * randomSpeed * PARTICLE_SPEED,
      y: (unitVector.y * randomSpeed * PARTICLE_SPEED) / 4,
    };
  }

  update(deltaT: number) {
    this.updatePosition(deltaT);
    this.updateColor(deltaT);
    this.updateLife(deltaT);
  }

  get isDead() {
    return this.remainingLife <= 0;
  }

  get size() {
    const percent = this.remainingLife / this.life;
    return this.p5.sin(this.p5.PI * percent) * PARTICLE_DIAMETER;
  }

  updateLife(deltaT: number) {
    this.remainingLife -= deltaT;
  }

  updatePosition(deltaT: number) {
    // update velocity
    this.velocity.y += GRAVITY * deltaT;

    // update position
    this.position.x += this.velocity.x * deltaT;
    this.position.y += this.velocity.y * deltaT;
  }

  updateColor(deltaT: number) {
    const percent = this.remainingLife / this.life;

    if (percent >= 0.95) return;

    this.color.g = Math.floor(this.color.g - COLOR_SPEED * deltaT);
    this.color.b = Math.floor(this.color.b - 10 * COLOR_SPEED * deltaT);
  }
}
