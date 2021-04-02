import { PhysicsSimulation } from '../util/PhysicsSimulation';
import { Planet } from './Planet';
import { screenUtils } from '../util/ScreenUtils';
import { GravityScenario, allScenarios } from './scenarios';

const GRAVITY = 0.02;

export class Gravity extends PhysicsSimulation {
  planets: Planet[] = [];
  simulationTitle: string = '';
  scenario!: GravityScenario;

  setup() {
    super.setup();
    screenUtils.init(this.p5.height / 35, this.p5.height, this.p5.width);

    this.loadScenario(allScenarios[0].name);
  }

  loadScenario(scenarioName: string) {
    const newScenario = allScenarios.find((s) => s.name === scenarioName);
    if (!newScenario) return;

    this.scenario = newScenario;
    this.planets = this.scenario.generatePlanets(this.p5);
    this.simulationTitle = this.scenario.name;
    this.p5.background(0);
  }

  simulateFrame() {
    this.calculateForces();
    this.updatePositions();
  }

  render() {
    this.p5.background(0, 5);
    this.planets.forEach((planet) => planet.render());
    this.renderSimulationTitle();
  }

  renderSimulationTitle() {
    this.p5.textSize(16);
    this.p5.textFont('monospace');
    this.p5.fill(255);
    this.p5.stroke(0);
    this.p5.text(this.simulationTitle, 15, 25);
  }

  calculateForces() {
    this.planets.forEach((planet) => planet.clearForces());

    for (let i = 0; i < this.planets.length; i++) {
      const planet1 = this.planets[i];

      for (let j = i + 1; j < this.planets.length; j++) {
        const planet2 = this.planets[j];
        const force = this.calculateGravity(planet1, planet2);
        planet1.addForce(force);
        planet2.addForce({ x: -force.x, y: -force.y });
      }
    }
  }

  calculateGravity(planet1: Planet, planet2: Planet) {
    const norm = {
      x: planet2.position.x - planet1.position.x,
      y: planet2.position.y - planet1.position.y,
    };

    const magnitude = Math.sqrt(norm.x * norm.x + norm.y * norm.y);

    if (magnitude === 0) return { x: 0, y: 0 };

    const strength = (GRAVITY * planet1.mass * planet2.mass) / (magnitude * magnitude);

    return {
      x: norm.x * strength,
      y: norm.y * strength,
    };
  }

  updatePositions() {
    const deltaT = this.calculateTime();
    this.planets.forEach((planet) => planet.updatePosition(deltaT));
  }
}
