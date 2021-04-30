import { Simulation } from '../util/Simulation';
import { TileGrid } from './TileGrid';

export class Landscape extends Simulation {
  tileGrid!: TileGrid;

  setup() {
    super.setup();
    this.createWorld();
    this.render();
  }

  createWorld() {
    this.tileGrid = new TileGrid(this.p5);
  }

  render() {
    this.tileGrid.render('elevation');
  }
}
