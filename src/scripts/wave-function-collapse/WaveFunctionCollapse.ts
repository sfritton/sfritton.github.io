import { Cell } from './Cell';

export class WaveFunctionCollapse {
  gridWidth: number;
  gridHeight: number;
  startTime: number = 0;
  draw: () => void;
  cells: Cell[];
  uncollapsedCells: Cell[];

  constructor(draw: (cells: Cell[]) => void, gridWidth: number, gridHeight = gridWidth) {
    this.draw = () => draw(this.cells);
    this.gridWidth = gridWidth;
    this.gridHeight = gridHeight;
    this.cells = [...new Array(gridWidth * gridHeight)].map(
      (_, i) => new Cell(i % gridWidth, Math.floor(i / gridWidth)),
    );
    this.cells.forEach((cell) => cell.setNeighbors(this.cells, gridWidth, gridHeight));
    this.uncollapsedCells = [...this.cells];
  }

  run = (drawSteps = false) => {
    console.log(
      `Generating a ${this.gridWidth}x${this.gridHeight} grid (${
        this.gridWidth * this.gridHeight
      } cells) ...`,
    );
    this.startTime = new Date().getTime();
    // choose random cell and collapse
    const cell = this.cells[Math.floor(Math.random() * this.cells.length)];
    cell.collapse();

    // While there are still uncollapsed cells
    this.step(drawSteps);
  };

  step = (drawSteps: boolean) => {
    const lowestEntropyCell = this.findLowestEntropyCell();
    // There are no more cells to collapse
    if (!lowestEntropyCell) {
      console.log(`finished in ${new Date().getTime() - this.startTime}ms`);
      this.draw();
      return;
    }

    lowestEntropyCell.collapse();

    if (drawSteps) {
      this.draw();
      setTimeout(() => this.step(drawSteps), 0);
    } else {
      this.step(drawSteps);
    }
  };

  findLowestEntropyCell = () => {
    this.uncollapsedCells = this.uncollapsedCells.filter((cell) => !cell.isCollapsed);

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
