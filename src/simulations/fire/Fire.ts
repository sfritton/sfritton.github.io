import { PhysicsSimulation3D } from '../util/PhysicsSimulation3D';
import { Particle } from './Particle';
import { EMIT_RADIUS, PARTICLES_PER_SECOND } from './constants';
import P5 from 'p5';

export class Fire extends PhysicsSimulation3D {
  particles: Particle[] = [];
  emitCenter: P5.Vector = new P5.Vector();

  setup() {
    super.setup();

    this.emitCenter = this.p5.createVector(
      this.cameraTarget.x,
      this.cameraTarget.y + this.p5.height / 8,
      this.cameraTarget.z,
    );
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
    this.renderCore();

    for (let i = 0; i < this.particles.length; i++) {
      this.particles[i].render();
    }
  }

  renderCore() {
    this.p5.fill(255);
    this.p5.noStroke();
    this.p5.translate(this.emitCenter);
    this.p5.sphere(EMIT_RADIUS);
    this.p5.translate(P5.Vector.mult(this.emitCenter, -1));
  }

  emitParticles(deltaT: number) {
    const numNewParticles = Math.floor(PARTICLES_PER_SECOND * deltaT);

    for (let i = 0; i < numNewParticles; i++) {
      this.particles.push(new Particle(this.p5, this.emitCenter));
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
