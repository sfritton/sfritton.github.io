import { PhysicsSimulation3D } from '../util/PhysicsSimulation3D';
import { Particle } from './Particle';
import { PARTICLES_PER_SECOND } from './constants';

export class Fire extends PhysicsSimulation3D {
  particles: Particle[] = [];

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
    const numNewParticles = Math.floor(PARTICLES_PER_SECOND * deltaT);

    for (let i = 0; i < numNewParticles; i++) {
      this.particles.push(new Particle(this.p5, this.cameraTarget));
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
