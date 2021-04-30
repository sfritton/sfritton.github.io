import P5 from 'p5';
import { Tile, MapType } from './types';
import {
  ELEVATION_COLORS,
  PRECIPITATION_COLORS,
  SEA_LEVEL,
  TEMPERATURE_COLORS,
  TILE_SIZE,
  WATER_COLOR,
} from './constants';
import { step } from './util';

export class TileGrid {
  p5: P5;
  tiles: Tile[][];

  constructor(p5: P5) {
    this.p5 = p5;
    const rows = Math.floor(this.p5.height / TILE_SIZE);
    const columns = Math.floor(this.p5.width / TILE_SIZE);

    this.tiles = new Array(rows);

    for (let r = 0; r < rows; r++) {
      this.tiles[r] = new Array(columns);
      for (let c = 0; c < columns; c++) {
        this.tiles[r][c] = {
          elevation: (r + c) / (rows + columns),
          precipitation: (r + c) / (rows + columns),
          temperature: (r + c) / (rows + columns),
        };
      }
    }
  }

  render(mapType: MapType) {
    this.p5.noStroke();
    this.tiles.forEach((row, r) =>
      row.forEach((tile, c) => {
        this.setTileFill(mapType, tile);
        this.p5.rect(c * TILE_SIZE, r * TILE_SIZE, TILE_SIZE, TILE_SIZE);
      }),
    );
  }

  setTileFill(mapType: MapType, tile: Tile) {
    if (tile.elevation < SEA_LEVEL) {
      this.p5.fill(WATER_COLOR);
      return;
    }

    switch (mapType) {
      case 'elevation':
        this.p5.fill(step(this.p5, 15, tile.elevation, ELEVATION_COLORS));
        break;
      case 'temperature':
        this.p5.fill(step(this.p5, 15, tile.temperature, TEMPERATURE_COLORS));
        break;
      case 'precipitation':
        this.p5.fill(step(this.p5, 15, tile.precipitation, PRECIPITATION_COLORS));
        break;
    }
  }
}
