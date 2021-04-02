import P5 from 'p5';
import { Coordinates } from '../util/types';
import { screenUtils } from '../util/ScreenUtils';

export class Planet {
  p5: P5;
  mass: number;
  radius: number;
  position: Coordinates;
  velocity: Coordinates;
  netForces: Coordinates = { x: 0, y: 0 };
  customColor?: string;

  constructor(
    p5: P5,
    mass: number,
    radius: number,
    position: Coordinates,
    velocity: Coordinates,
    customColor?: string,
  ) {
    this.p5 = p5;
    this.mass = mass;
    this.radius = radius;
    this.position = position;
    this.velocity = velocity;
    this.customColor = customColor;
  }

  clearForces() {
    this.netForces = { x: 0, y: 0 };
  }

  addForce(force: Coordinates) {
    this.netForces = {
      x: this.netForces.x + force.x,
      y: this.netForces.y + force.y,
    };
  }

  updatePosition(deltaT: number) {
    const acceleration = {
      x: this.netForces.x / this.mass,
      y: this.netForces.y / this.mass,
    };

    this.velocity.x += acceleration.x * deltaT;
    this.velocity.y += acceleration.y * deltaT;

    this.position.x += this.velocity.x * deltaT;
    this.position.y += this.velocity.y * deltaT;
  }

  // TODO
  manageCollisions(otherPlanets: Planet[]) {
    otherPlanets.forEach((otherPlanet) => {
      if (otherPlanet === this) return;

      const norm = {
        x: this.position.x - otherPlanet.position.x,
        y: this.position.y - otherPlanet.position.y,
      };
      const magnitude = Math.sqrt(norm.x * norm.x + norm.y * norm.y);

      // The planets are not touching
      if (magnitude >= this.radius + otherPlanet.radius) return;

      this.position = {
        x: otherPlanet.position.x + (norm.x / magnitude) * this.radius + otherPlanet.radius,
        y: otherPlanet.position.y + (norm.y / magnitude) * this.radius + otherPlanet.radius,
      };

      // TODO - need a dot product here
      this.velocity = {
        x: this.velocity.x,
        y: this.velocity.y,
      };
    });
  }

  render() {
    this.setColor();
    const renderedDiameter = Math.max(5, screenUtils.transformScalar(this.radius * 2));
    const renderedPosition = screenUtils.transformCoordinates(this.position);

    this.p5.strokeWeight(renderedDiameter);
    this.p5.point(renderedPosition.x, renderedPosition.y);
  }

  setColor() {
    if (this.customColor) {
      this.p5.stroke(this.customColor);
      return;
    }

    const maxMass = 500;
    const cappedMass = Math.min(this.mass, maxMass);
    const color = (cappedMass / maxMass) * 255;

    this.p5.stroke(color, 200, 255 - color);
  }
}
