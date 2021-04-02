import P5 from 'p5';
import { Coordinates } from '../util/types';
import { Planet } from './Planet';

export class StationaryPlanet extends Planet {
  constructor(p5: P5, mass: number, radius: number, position: Coordinates) {
    super(p5, mass, radius, position, { x: 0, y: 0 });
  }

  updatePosition(deltaT: number) {
    return;
  }

  setColor() {
    this.p5.stroke(255, 220, 50);
  }
}
