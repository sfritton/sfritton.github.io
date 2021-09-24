import { MapType } from './types';

export const ELEVATION_SCALE = 0.07;
export const CLIMATE_SCALE = 0.007;
export const PRECIPITATION_SCALE = 0.002;
/** The elevation below which to render water. Elevation ranges from 0 to 1. */
export const SEA_LEVEL = 0.4;
/** Width/height of each tile in pixels */
export const TILE_SIZE = 10;

// Colors
export const WATER_COLOR = '#6485dc';
export const ELEVATION_COLORS = ['#005000', '#005000', '#aab432', '#d2e66e'];
export const TEMPERATURE_COLORS = ['#0000ff', '#ffffff', '#ff0000'];
export const PRECIPITATION_COLORS = [
  '#960000',
  '#960000',
  '#fa9600',
  '#ffffff',
  '#009600',
  '#00ffff',
  '#00ffff',
];

export const allMapTypes: MapType[] = ['elevation', 'temperature', 'precipitation', 'biome'];
