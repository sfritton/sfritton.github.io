export type TileName = 'FOREST' | 'GRASS' | 'BEACH' | 'WATER' | 'DEEP_WATER';

export interface Tile {
  name: TileName;
  weight: number;
  color: string;
  validNeighbors: TileName[];
}

export const TILES: Record<TileName, Tile> = {
  FOREST: {
    name: 'FOREST',
    color: '#227700',
    weight: 2,
    validNeighbors: ['FOREST', 'GRASS'],
  },
  GRASS: {
    name: 'GRASS',
    color: '#88aa22',
    weight: 4,
    validNeighbors: ['FOREST', 'GRASS', 'BEACH'],
  },
  BEACH: {
    name: 'BEACH',
    color: '#ddcc88',
    weight: 2,
    validNeighbors: ['GRASS', 'BEACH', 'WATER'],
  },
  WATER: {
    name: 'WATER',
    color: '#8888ff',
    weight: 3,
    validNeighbors: ['BEACH', 'WATER', 'DEEP_WATER'],
  },
  DEEP_WATER: {
    name: 'DEEP_WATER',
    color: '#4466cc',
    weight: 1,
    validNeighbors: ['WATER', 'DEEP_WATER'],
  },
};
