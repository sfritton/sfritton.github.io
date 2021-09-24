import P5 from 'p5';
import { Tile, MapType } from './types';
import {
  CLIMATE_SCALE,
  ELEVATION_COLORS,
  ELEVATION_SCALE,
  PRECIPITATION_COLORS,
  PRECIPITATION_SCALE,
  SEA_LEVEL,
  TEMPERATURE_COLORS,
  WATER_COLOR,
} from './constants';
import { step } from './util';
import { NoiseWaveStack } from './NoiseWave';
import { randomFromTo } from '../util/helpers';
import { getBiome } from './Biome';

export class TileGrid {
  rows: number;
  columns: number;
  p5: P5;
  tiles: Tile[][];
  tileSize: number;

  constructor(p5: P5, tileSize: number) {
    this.p5 = p5;
    this.tileSize = tileSize;
    this.rows = Math.floor(this.p5.height / this.tileSize);
    this.columns = Math.floor(this.p5.width / this.tileSize);
    const elevationNoiseStack = new NoiseWaveStack(
      this.p5,
      this.randomSeed(400),
      ELEVATION_SCALE * this.tileSize,
      4,
    );
    const precipitationNoiseStack = new NoiseWaveStack(
      this.p5,
      this.randomSeed(800),
      PRECIPITATION_SCALE * this.tileSize,
      2,
    );
    const climateNoiseStack = new NoiseWaveStack(
      this.p5,
      this.randomSeed(800),
      CLIMATE_SCALE * this.tileSize,
      2,
    );
    const multiplier = 0.75;

    this.tiles = new Array(this.rows);

    for (let r = 0; r < this.rows; r++) {
      this.tiles[r] = new Array(this.columns);
      for (let c = 0; c < this.columns; c++) {
        const elevation = elevationNoiseStack.getValueAt(r, c);
        this.tiles[r][c] = {
          elevation,
          precipitation: precipitationNoiseStack.getValueAt(r, c),
          temperature: this.p5.norm(
            climateNoiseStack.getValueAt(r, c) - multiplier * (elevation - 0.5),
            multiplier * -0.5,
            1 + multiplier * 0.5,
          ),
        };
      }
    }
  }

  render(mapType: MapType) {
    this.p5.noStroke();
    this.tiles.forEach((row, r) =>
      row.forEach((tile, c) => {
        this.setTileFill(mapType, tile);
        this.p5.rect(c * this.tileSize, r * this.tileSize, this.tileSize, this.tileSize);
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
      case 'biome':
        const biome = getBiome(tile.temperature, tile.precipitation);
        this.p5.fill(biome.color);
        break;
    }
  }

  randomSeed(scale = 1) {
    return {
      x: randomFromTo(0, this.columns) * scale,
      y: randomFromTo(0, this.rows) * scale,
    };
  }
}
