import { TILES, TileName } from './Tile';

export class Cell {
  x: number;
  y: number;
  domain: TileName[];
  top?: Cell;
  bottom?: Cell;
  left?: Cell;
  right?: Cell;

  constructor(x: number, y: number) {
    this.x = x;
    this.y = y;
    this.domain = Object.keys(TILES) as TileName[];
  }

  get isCollapsed() {
    return this.domain.length === 1;
  }

  get entropy() {
    return this.domain.length;
  }

  get neighbors(): Cell[] {
    return [this.top, this.bottom, this.left, this.right].filter((neighbor) =>
      Boolean(neighbor),
    ) as Cell[];
  }

  get validNeighbors() {
    const thing = [
      // Use the set to remove duplicate
      ...new Set(
        this.domain.reduce<TileName[]>((acc, tile) => [...acc, ...TILES[tile].validNeighbors], []),
      ),
    ];

    return thing;
  }

  setNeighbors = (cells: Cell[], gridWidth: number, gridHeight = gridWidth) => {
    this.top = this.y === 0 ? undefined : cells[this.x + gridWidth * (this.y - 1)];
    this.bottom = this.y === gridHeight - 1 ? undefined : cells[this.x + gridWidth * (this.y + 1)];
    this.left = this.x === 0 ? undefined : cells[this.x - 1 + gridWidth * this.y];
    this.right = this.x === gridWidth - 1 ? undefined : cells[this.x + 1 + gridWidth * this.y];
  };

  updateDomain = (forceUpdateNeighbors = false) => {
    if (this.isCollapsed && !forceUpdateNeighbors) return;

    const initialDomainSize = this.domain.length;

    const validTileSet = new Set(
      this.neighbors.reduce<TileName[]>(
        (validTiles, neighbor) =>
          validTiles.filter((tile) => neighbor.validNeighbors.includes(tile)),
        this.neighbors[0].validNeighbors,
      ),
    );

    this.domain = this.domain.filter((tile) => validTileSet.has(tile));

    // update neighbors if this cell changed
    if (forceUpdateNeighbors || this.domain.length !== initialDomainSize)
      this.neighbors.forEach((neighbor) => neighbor.updateDomain());
  };

  collapse = () => {
    // Choose a random tile from the domain, based on the weight of each tile
    const randomNumber = Math.random();
    const totalWeight = this.domain.reduce((sum, tile) => sum + TILES[tile].weight, 0);
    let chosenTile: TileName | undefined = undefined;
    let runningSum = 0;

    this.domain.forEach((tile) => {
      if (chosenTile) return;
      runningSum += TILES[tile].weight;
      if (randomNumber < runningSum / totalWeight) chosenTile = tile;
    });
    this.domain = [chosenTile ?? this.domain[0]];

    // Update neighbors
    this.updateDomain(true);
  };
}
