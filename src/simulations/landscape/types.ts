export interface Tile {
  elevation: number;
  temperature: number;
  precipitation: number;
}

export type MapType = 'elevation' | 'temperature' | 'precipitation' | 'biome';
