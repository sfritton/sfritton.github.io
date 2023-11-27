import { Cell } from './Cell';
import { CAVE_TILES, SocketTileName } from './Tile';
import { WaveFunctionCollapse } from './WaveFunctionCollapse';

const CANVAS_SIZE = 1000;
const CELL_SIZE = 40;
const CELL_COUNT = Math.floor(CANVAS_SIZE / CELL_SIZE);
const GRAYS = Object.keys(CAVE_TILES).map((_, i) => {
  const brightness = 255 - i * 10;

  return `rgb(${brightness} ${brightness} ${brightness})`;
});

const canvas = document.querySelector<HTMLCanvasElement>('canvas.wfc');
const context = canvas?.getContext('2d');

const image_bottom = document.getElementById('bottom');
const image_bottom_left = document.getElementById('bottom_left');
const image_bottom_right = document.getElementById('bottom_right');
const image_floor = document.getElementById('floor');
const image_left = document.getElementById('left');
const image_right = document.getElementById('right');
const image_top = document.getElementById('top');
const image_top_left = document.getElementById('top_left');
const image_top_right = document.getElementById('top_right');
const image_wall = document.getElementById('wall');
const image_pillar_top_left = document.getElementById('pillar_top_left');
const image_pillar_top_right = document.getElementById('pillar_top_right');
const image_pillar_bottom_left = document.getElementById('pillar_bottom_left');
const image_pillar_bottom_right = document.getElementById('pillar_bottom_right');

const FILL_STYLES: Record<SocketTileName, HTMLElement | null> = {
  BOTTOM: image_bottom,
  BOTTOM_LEFT: image_bottom_left,
  BOTTOM_RIGHT: image_bottom_right,
  FLOOR: image_floor,
  LEFT: image_left,
  RIGHT: image_right,
  TOP: image_top,
  TOP_LEFT: image_top_left,
  TOP_RIGHT: image_top_right,
  WALL: image_wall,
  PILLAR_TOP_LEFT: image_pillar_top_left,
  PILLAR_TOP_RIGHT: image_pillar_top_right,
  PILLAR_BOTTOM_LEFT: image_pillar_bottom_left,
  PILLAR_BOTTOM_RIGHT: image_pillar_bottom_right,
};

const drawCell = (cell: Cell) => {
  if (!context) return;
  const x = cell.x * CELL_SIZE;
  const y = cell.y * CELL_SIZE;

  if (cell.isCollapsed) {
    context.drawImage(FILL_STYLES[CAVE_TILES[cell.domain[0]].name], x, y, CELL_SIZE, CELL_SIZE);
    return;
  }

  context.fillStyle = GRAYS[cell.domain.length - 1];
  context.fillRect(x, y, CELL_SIZE, CELL_SIZE);

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
