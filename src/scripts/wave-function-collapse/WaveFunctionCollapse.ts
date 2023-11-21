import { Cell } from './Cell';

const ZONE_SIZE = 20;

export class WaveFunctionCollapse {
  gridWidth: number;
  gridHeight: number;
  startTime = 0;
  draw: () => void;
  cells: Cell[];
  uncollapsedCells: Cell[];
  currentZone: Cell[];
  drawSteps = false;

  constructor(draw: (cells: Cell[]) => void, gridWidth: number, gridHeight = gridWidth) {
    this.draw = () => draw(this.cells);
    this.gridWidth = gridWidth;
    this.gridHeight = gridHeight;
    this.cells = [...new Array(gridWidth * gridHeight)].map(
      (_, i) => new Cell(i % gridWidth, Math.floor(i / gridWidth)),
    );
    this.cells.forEach((cell) => cell.setNeighbors(this.cells, gridWidth, gridHeight));
    this.setCurrentZone(0, 0);
  }

  setCurrentZone(x: number, y: number) {
    this.currentZone = this.cells.filter(
      (cell) => cell.x >= x && cell.x < x + ZONE_SIZE && cell.y >= y && cell.y < y + ZONE_SIZE,
      [],
    );
    this.uncollapsedCells = this.currentZone.filter((cell) => !cell.isCollapsed);
  }

  // TODO: the asyc/await slows it down by 20-30%, but is only necessary for when `drawSteps` is true
  run = async (drawSteps = false) => {
    this.drawSteps = drawSteps;
    console.log(
      `Generating a ${this.gridWidth}x${this.gridHeight} grid (${
        this.gridWidth * this.gridHeight
      } cells) ...`,
    );
    this.startTime = new Date().getTime();

    for (let y = 0; y < this.gridHeight; y += ZONE_SIZE - 1) {
      for (let x = 0; x < this.gridWidth; x += ZONE_SIZE - 1) {
        await this.runZone(x, y);
      }
    }
    console.log(`Finished in ${new Date().getTime() - this.startTime}ms`);
    this.draw();
  };

  runZone = async (x: number, y: number) => {
    this.setCurrentZone(x, y);
    // choose random cell and collapse
    const cell = this.currentZone[Math.floor(Math.random() * this.currentZone.length)];
    cell.collapse();

    // Step through the zone until all of its cells are collapsed
    await this.step();
  };

  step = async () => {
    const lowestEntropyCell = this.findLowestEntropyCell();

    // There are no more cells to collapse
    if (!lowestEntropyCell) return;

    lowestEntropyCell.collapse();

    if (this.drawSteps) {
      this.draw();
      await new Promise((resolve) => requestAnimationFrame(() => resolve(this.step())));
    } else {
      await this.step();
    }
  };

  findLowestEntropyCell = () => {
    this.uncollapsedCells = this.uncollapsedCells
      .filter((cell) => !cell.isCollapsed)
      .sort(() => Math.random() - 0.5); // add some randomness

    if (this.uncollapsedCells.length === 0) return undefined;

    let lowestEntropyCell = this.uncollapsedCells[0];

    for (let i = 0; i < this.uncollapsedCells.length && lowestEntropyCell.entropy > 2; i++) {
      const cell = this.uncollapsedCells[i];

      if (cell.entropy < lowestEntropyCell.entropy) {
        lowestEntropyCell = cell;
      }
    }

    return lowestEntropyCell;
  };
}
