import { Cell } from './Cell';
import { TILES } from './Tile';
import { WaveFunctionCollapse } from './WaveFunctionCollapse';

const CANVAS_SIZE = 1000;
const CELL_SIZE = 40;
const CELL_COUNT = Math.floor(CANVAS_SIZE / CELL_SIZE);
const GRAYS = ['#fff', '#eee', '#ddd', '#ccc', '#bbb'].reverse();

const canvas = document.querySelector<HTMLCanvasElement>('canvas.wfc');
const context = canvas?.getContext('2d');

const drawCell = (cell: Cell) => {
  if (!context) return;
  const x = cell.x * CELL_SIZE;
  const y = cell.y * CELL_SIZE;

  context.fillStyle = cell.isCollapsed
    ? TILES[cell.domain[0]].color
    : GRAYS[cell.domain.length - 1];
  context.strokeStyle = '#d6d6d6';
  context.beginPath();
  context.rect(x, y, CELL_SIZE, CELL_SIZE);
  context.fill();
  context.stroke();

  if (cell.isCollapsed) return;

  context.fillStyle = '#000';
  context.fillText(`${cell.domain.length}`, x + CELL_SIZE / 2, y + CELL_SIZE / 2);
};

const drawGrid = (cells: Cell[]) => {
  if (!context) return;
  context.textAlign = 'center';
  context.clearRect(0, 0, CANVAS_SIZE, CANVAS_SIZE);

  cells.forEach((cell) => drawCell(cell));
};

const wfc = new WaveFunctionCollapse(drawGrid, CELL_COUNT);

wfc.run();
