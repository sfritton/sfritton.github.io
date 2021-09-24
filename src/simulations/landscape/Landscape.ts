import P5 from 'p5';
import { Simulation } from '../util/Simulation';
import { TileGrid } from './TileGrid';
import { MapType } from './types';

export class Landscape extends Simulation {
  tileGrid!: TileGrid;
  mapType: MapType = 'elevation';
  tileSize: number;

  constructor(p5: P5, tileSize: number) {
    super(p5);
    this.tileSize = tileSize;
  }

  setup() {
    super.setup();
    this.createWorld();
    this.render();
  }

  createWorld() {
    this.tileGrid = new TileGrid(this.p5, this.tileSize);
  }

  render() {
    this.tileGrid.render(this.mapType);
  }

  updateMapType(newMapType: MapType) {
    this.mapType = newMapType;
    this.render();
  }
}
