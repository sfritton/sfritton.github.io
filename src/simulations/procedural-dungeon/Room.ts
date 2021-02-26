import P5 from 'p5';
import {
  COLOR_DOOR_LOCKED,
  COLOR_ENTRANCE,
  COLOR_EXIT,
  COLOR_PATH,
  COLOR_ROOM,
  COLOR_WALL,
  DOOR_HALF_WIDTH,
  MARGIN,
  MIN_WALL_LENGTH,
  SHOW_LEVELS,
  SHOW_PATH,
} from './constants';
import { Direction, Coordinates } from './types';
import { randomFromTo } from './util';

export class Room {
  x1 = 0;
  x2 = 0;
  y1 = 0;
  y2 = 0;
  exits: Door[] = [];
  entrance?: Door;
  level = 0;
  maxLevel = 0;
  onPath = false;
  hasKey = false;
  p5: P5;

  constructor(p5: P5, x1: number, x2: number, y1: number, y2: number) {
    this.p5 = p5;
    this.x1 = x1;
    this.x2 = x2;
    this.y1 = y1;
    this.y2 = y2;
    this.hasKey = Math.random() > 0.85;
  }

  render() {
    if (this.level === 0) {
      this.p5.fill(COLOR_ENTRANCE);
    } else if (this.onPath && this.exits.length === 0) {
      this.p5.fill(COLOR_EXIT);
    } else if (SHOW_PATH && this.onPath) {
      this.p5.fill(COLOR_PATH);
    } else {
      this.p5.fill(COLOR_ROOM);
    }

    this.p5.beginShape();
    this.p5.vertex(this.x1 + MARGIN, this.y1 + MARGIN);
    this.p5.vertex(this.x2 - MARGIN, this.y1 + MARGIN);
    this.p5.vertex(this.x2 - MARGIN, this.y2 - MARGIN);
    this.p5.vertex(this.x1 + MARGIN, this.y2 - MARGIN);
    this.p5.endShape();

    this.renderText();

    this.exits.forEach((exit) => exit.render());
  }

  renderText() {
    if (!SHOW_LEVELS && !this.hasKey) return;

    this.p5.fill(COLOR_WALL);

    this.p5.textSize(19);
    this.p5.textAlign(this.p5.CENTER, this.p5.CENTER);
    this.p5.text(
      this.hasKey ? 'key' : this.level + '',
      this.x1 + (this.x2 - this.x1) / 2,
      this.y1 + (this.y2 - this.y1) / 2,
    );
  }

  isNeighbor(other: Room): Direction | undefined {
    // north
    if (
      this.y1 === other.y2 &&
      other.x2 - this.x1 > MIN_WALL_LENGTH &&
      this.x2 - other.x1 > MIN_WALL_LENGTH
    )
      return 'north';

    // east
    if (
      this.x2 === other.x1 &&
      other.y2 - this.y1 > MIN_WALL_LENGTH &&
      this.y2 - other.y1 > MIN_WALL_LENGTH
    )
      return 'east';

    // south
    if (
      this.y2 === other.y1 &&
      other.x2 - this.x1 > MIN_WALL_LENGTH &&
      this.x2 - other.x1 > MIN_WALL_LENGTH
    )
      return 'south';

    // west
    if (
      this.x1 === other.x2 &&
      other.y2 - this.y1 > MIN_WALL_LENGTH &&
      this.y2 - other.y1 > MIN_WALL_LENGTH
    )
      return 'west';

    return undefined;
  }

  findExits(candidates: Room[]) {
    if (candidates.length === 0) return this.level;

    candidates.forEach((candidate) => {
      const direction = this.isNeighbor(candidate);

      // ignore non-neighbors and rooms that have already been claimed
      if (!direction || candidate.entrance) {
        return;
      }

      const door = new Door(this.p5, this, candidate);
      this.exits.push(door);
      candidate.entrance = door;
      candidate.level = this.level + 1;
    });

    this.maxLevel = this.level;

    this.exits.forEach((exit) => {
      const exitLevel = exit.to.findExits(candidates);
      if (exitLevel > this.maxLevel) this.maxLevel = exitLevel;
    });

    return this.maxLevel;
  }

  findPath(maxLevel: number) {
    if (this.maxLevel !== maxLevel) return;

    this.onPath = true;

    if (this.entrance) this.entrance.onPath = true;

    this.exits.forEach((exit) => exit.to.findPath(this.maxLevel));
  }
}

export class Door {
  isVertical = false;
  position: Coordinates;
  from: Room;
  to: Room;
  onPath = false;
  locked = false;
  p5: P5;

  constructor(p5: P5, from: Room, to: Room) {
    this.p5 = p5;
    this.from = from;
    this.to = to;
    this.locked = Math.random() > 0.85;

    const direction = from.isNeighbor(to);
    let b = 0;

    // use the direction to set isVertical and the secondary axis
    switch (direction) {
      case 'north':
        this.isVertical = false;
        b = from.y1;
        break;
      case 'east':
        this.isVertical = true;
        b = from.x2;
        break;
      case 'south':
        this.isVertical = false;
        b = from.y2;
        break;
      case 'west':
        this.isVertical = true;
        b = from.x1;
        break;
    }

    if (this.isVertical) {
      const a1 = Math.max(from.y1, to.y1);
      const a2 = Math.min(from.y2, to.y2);
      const a = randomFromTo(a1 + DOOR_HALF_WIDTH + MARGIN, a2 - DOOR_HALF_WIDTH - MARGIN);
      this.position = { x: b, y: a };
    } else {
      const a1 = Math.max(from.x1, to.x1);
      const a2 = Math.min(from.x2, to.x2);
      const a = randomFromTo(a1 + DOOR_HALF_WIDTH + MARGIN, a2 - DOOR_HALF_WIDTH - MARGIN);
      this.position = { x: a, y: b };
    }
  }

  render() {
    if (this.locked) {
      this.p5.fill(COLOR_DOOR_LOCKED);
    } else if (SHOW_PATH && this.onPath) {
      this.p5.fill(COLOR_PATH);
    } else {
      this.p5.fill(COLOR_ROOM);
    }

    if (this.isVertical) {
      this.p5.beginShape();
      this.p5.vertex(this.position.x - MARGIN * 2, this.position.y - DOOR_HALF_WIDTH);
      this.p5.vertex(this.position.x + MARGIN * 2, this.position.y - DOOR_HALF_WIDTH);
      this.p5.vertex(this.position.x + MARGIN * 2, this.position.y + DOOR_HALF_WIDTH);
      this.p5.vertex(this.position.x - MARGIN * 2, this.position.y + DOOR_HALF_WIDTH);
      this.p5.endShape();
    } else {
      this.p5.beginShape();
      this.p5.vertex(this.position.x - DOOR_HALF_WIDTH, this.position.y - MARGIN * 2);
      this.p5.vertex(this.position.x + DOOR_HALF_WIDTH, this.position.y - MARGIN * 2);
      this.p5.vertex(this.position.x + DOOR_HALF_WIDTH, this.position.y + MARGIN * 2);
      this.p5.vertex(this.position.x - DOOR_HALF_WIDTH, this.position.y + MARGIN * 2);
      this.p5.endShape();
    }

    this.to.render();
  }
}
