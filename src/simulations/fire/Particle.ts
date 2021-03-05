import { randomFromTo } from '../util/helpers';
import { Coordinates3D } from '../util/types';

interface Color {
  r: number;
  g: number;
  b: number;
}

export class Particle {
  position: Coordinates3D;
  velocity: Coordinates3D;
  remainingLife: number;
  color: Color = {
    r: 255,
    g: 255,
    b: 255,
  };

  constructor(center: Coordinates3D) {
    this.position = this.randomPosition(center);
    this.velocity = this.randomVelocity();
    this.remainingLife = randomFromTo(PARTICLE_MIN_LIFE, PARTICLE_MAX_LIFE);
  }

  randomPosition(center: Coordinates3D): Coordinates3D {
    const randomDirection: Coordinates3D = {
      x: randomFromTo(-1, 1),
      y: randomFromTo(-1, 1),
      z: randomFromTo(-1, 1),
    };

    const denom = Math.sqrt(
      randomDirection.x * randomDirection.x +
        randomDirection.y * randomDirection.y +
        randomDirection.z * randomDirection.z,
    );

    return {
      x: center.x + (EMIT_RADIUS * randomDirection.x) / denom,
      y: center.y + (EMIT_RADIUS * randomDirection.y) / denom,
      z: center.z + (EMIT_RADIUS * randomDirection.z) / denom,
    };
  }

  randomVelocity(): Coordinates3D {
    const randomDirection: Coordinates3D = {
      x: randomFromTo(-1, 1),
      y: randomFromTo(-1, 0), // only let particles move up
      z: randomFromTo(-1, 1),
    };

    const randomSpeed = Math.random();

    const denom = Math.sqrt(
      randomDirection.x * randomDirection.x +
        randomDirection.y * randomDirection.y +
        randomDirection.z * randomDirection.z,
    );

    return {
      x: ((randomDirection.x / denom) * randomSpeed * PARTICLE_SPEED) / 4,
      y: (randomDirection.y / denom) * randomSpeed * PARTICLE_SPEED, // particles should move faster in the y direction
      z: ((randomDirection.z / denom) * randomSpeed * PARTICLE_SPEED) / 4,
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

  updateLife(deltaT: number) {
    this.remainingLife -= deltaT;
  }

  updatePosition(deltaT: number) {
    this.velocity.y += GRAVITY * deltaT;

    this.position = {
      x: this.position.x + this.velocity.x * deltaT,
      y: this.position.y + this.velocity.y * deltaT,
      z: this.position.z + this.velocity.z * deltaT,
    };
  }

  updateColor(deltaT: number) {
    this.color.g = Math.floor(this.color.g - COLOR_SPEED * deltaT);
    this.color.b = Math.floor(this.color.b - COLOR_SPEED * deltaT);
  }
}
