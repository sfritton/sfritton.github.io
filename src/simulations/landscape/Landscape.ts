import { Simulation } from '../util/Simulation';
import { TileGrid } from './TileGrid';
import { MapType } from './types';

export class Landscape extends Simulation {
  tileGrid!: TileGrid;
  mapType: MapType = 'elevation';

  setup() {
    super.setup();
    this.createWorld();
    this.render();
  }

  createWorld() {
    this.tileGrid = new TileGrid(this.p5);
  }

  render() {
    this.tileGrid.render(this.mapType);
  }

  updateMapType(newMapType: MapType) {
    this.mapType = newMapType;
    this.render();
  }
}
