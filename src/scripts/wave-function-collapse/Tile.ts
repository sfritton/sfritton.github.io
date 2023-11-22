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
    weight: 3,
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
    weight: 4,
    validNeighbors: ['GRASS', 'BEACH', 'WATER'],
  },
  WATER: {
    name: 'WATER',
    color: '#8888ff',
    weight: 1,
    validNeighbors: ['BEACH', 'WATER', 'DEEP_WATER'],
  },
  DEEP_WATER: {
    name: 'DEEP_WATER',
    color: '#4466cc',
    weight: 3,
    validNeighbors: ['WATER', 'DEEP_WATER'],
  },
};

export type SocketTileName =
  | 'FLOOR'
  | 'WALL'
  | 'TOP_LEFT'
  | 'TOP'
  | 'TOP_RIGHT'
  | 'RIGHT'
  | 'BOTTOM_RIGHT'
  | 'BOTTOM'
  | 'BOTTOM_LEFT'
  | 'LEFT'
  | 'PILLAR_TOP_LEFT'
  | 'PILLAR_TOP_RIGHT'
  | 'PILLAR_BOTTOM_LEFT'
  | 'PILLAR_BOTTOM_RIGHT';

export type SocketNameVertical = 'WALL' | 'FLOOR' | 'WALL_BOTTOM' | 'WALL_TOP';
export type SocketNameHorizontal = 'WALL' | 'FLOOR' | 'WALL_LEFT' | 'WALL_RIGHT';
export interface SocketTile {
  name: SocketTileName;
  weight: number;
  sockets: {
    top: SocketNameHorizontal;
    bottom: SocketNameHorizontal;
    left: SocketNameVertical;
    right: SocketNameVertical;
  };
}

export const CAVE_TILES: Record<SocketTileName, SocketTile> = {
  TOP_LEFT: {
    name: 'TOP_LEFT',
    weight: 1,
    sockets: {
      top: 'WALL',
      bottom: 'WALL_LEFT',
      left: 'WALL',
      right: 'WALL_TOP',
    },
  },
  TOP: {
    name: 'TOP',
    weight: 1,
    sockets: {
      top: 'WALL',
      bottom: 'FLOOR',
      left: 'WALL_TOP',
      right: 'WALL_TOP',
    },
  },
  TOP_RIGHT: {
    name: 'TOP_RIGHT',
    weight: 1,
    sockets: {
      top: 'WALL',
      bottom: 'WALL_RIGHT',
      left: 'WALL_TOP',
      right: 'WALL',
    },
  },
  LEFT: {
    name: 'LEFT',
    weight: 1,
    sockets: {
      top: 'WALL_LEFT',
      bottom: 'WALL_LEFT',
      left: 'WALL',
      right: 'FLOOR',
    },
  },
  FLOOR: {
    name: 'FLOOR',
    weight: 10,
    sockets: {
      top: 'FLOOR',
      bottom: 'FLOOR',
      left: 'FLOOR',
      right: 'FLOOR',
    },
  },
  RIGHT: {
    name: 'RIGHT',
    weight: 1,
    sockets: {
      top: 'WALL_RIGHT',
      bottom: 'WALL_RIGHT',
      left: 'FLOOR',
      right: 'WALL',
    },
  },
  BOTTOM_LEFT: {
    name: 'BOTTOM_LEFT',
    weight: 1,
    sockets: {
      top: 'WALL_LEFT',
      bottom: 'WALL',
      left: 'WALL',
      right: 'WALL_BOTTOM',
    },
  },
  BOTTOM: {
    name: 'BOTTOM',
    weight: 1,
    sockets: {
      top: 'FLOOR',
      bottom: 'WALL',
      left: 'WALL_BOTTOM',
      right: 'WALL_BOTTOM',
    },
  },
  BOTTOM_RIGHT: {
    name: 'BOTTOM_RIGHT',
    weight: 1,
    sockets: {
      top: 'WALL_RIGHT',
      bottom: 'WALL',
      left: 'WALL_BOTTOM',
      right: 'WALL',
    },
  },
  WALL: {
    name: 'WALL',
    weight: 10,
    sockets: {
      top: 'WALL',
      bottom: 'WALL',
      left: 'WALL',
      right: 'WALL',
    },
  },
  PILLAR_BOTTOM_LEFT: {
    name: 'PILLAR_BOTTOM_LEFT',
    weight: 1,
    sockets: {
      top: 'FLOOR',
      bottom: 'WALL_LEFT',
      left: 'WALL_BOTTOM',
      right: 'FLOOR',
    },
  },
  PILLAR_BOTTOM_RIGHT: {
    name: 'PILLAR_BOTTOM_RIGHT',
    weight: 1,
    sockets: {
      top: 'FLOOR',
      bottom: 'WALL_RIGHT',
      left: 'FLOOR',
      right: 'WALL_BOTTOM',
    },
  },
  PILLAR_TOP_LEFT: {
    name: 'PILLAR_TOP_LEFT',
    weight: 1,
    sockets: {
      top: 'WALL_LEFT',
      bottom: 'FLOOR',
      left: 'WALL_TOP',
      right: 'FLOOR',
    },
  },
  PILLAR_TOP_RIGHT: {
    name: 'PILLAR_TOP_RIGHT',
    weight: 1,
    sockets: {
      top: 'WALL_RIGHT',
      bottom: 'FLOOR',
      left: 'FLOOR',
      right: 'WALL_TOP',
    },
  },
};
