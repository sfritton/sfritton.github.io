import { PhysicsSimulation } from '../util/PhysicsSimulation';
import { Particle } from './Particle';
import { EMIT_CENTER, PARTICLES_PER_SECOND } from './constants';
import { Coordinates } from '../util/types';

export class Fire extends PhysicsSimulation {
  particles: Particle[] = [];

  /**
   * A place to store partial particles between frames.
   * After this reaches a value of 1,
   * an extra particle will be added, and this counter will be reset.
   */
  particleFraction = 0;
  center: Coordinates = { x: 0, y: 0 };

  setup() {
    super.setup();
    this.center = {
      x: this.p5.width * EMIT_CENTER.x,
      y: this.p5.height * EMIT_CENTER.y,
    };

    // start out with a few particles
    this.emitParticles(1);
  }

  simulate() {
    const deltaT = this.calculateTime();
    if (this.verbose) {
      console.log(`${this.particles.length} particles`);
    }

    // emit new particles
    this.emitParticles(deltaT);

    // update existing particles
    this.updateParticles(deltaT);

    // remove dead particles
    this.killParticles();
  }

  render() {
    this.p5.background(0);

    for (let i = 0; i < this.particles.length; i++) {
      this.particles[i].render();
    }
  }

  emitParticles(deltaT: number) {
    const numNewParticles = PARTICLES_PER_SECOND * deltaT;
    let numWholeParticles = Math.floor(numNewParticles);
    this.particleFraction += numNewParticles - numWholeParticles;

    if (this.particleFraction >= 1) {
      this.particleFraction--;
      numWholeParticles++;
    }

    for (let i = 0; i < numWholeParticles; i++) {
      this.particles.push(new Particle(this.p5, this.center));
    }
  }

  updateParticles(deltaT: number) {
    for (let i = 0; i < this.particles.length; i++) {
      this.particles[i].update(deltaT);
    }
  }

  killParticles() {
    this.particles = this.particles.filter((particle) => !particle.isDead);
  }
}
