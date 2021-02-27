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
  isDungeonEntrance = false;
  isDungeonExit = false;
  p5: P5;

  constructor(p5: P5, x1: number, x2: number, y1: number, y2: number) {
    this.p5 = p5;
    this.x1 = x1;
    this.x2 = x2;
    this.y1 = y1;
    this.y2 = y2;
  }

  render() {
    if (this.level === 0) {
      this.p5.fill(COLOR_ENTRANCE);
    } else if (this.isDungeonExit) {
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

    if (this.hasKey) {
      this.p5.translate(this.x1 + (this.x2 - this.x1) / 2, this.y1 + (this.y2 - this.y1) / 2);
      this.p5.rotate((this.p5.PI * 3) / 4);
      this.p5.text('F', 1, -5);
      this.p5.text('O', -1, 7);
      this.p5.resetMatrix();
    } else {
      this.p5.text(
        this.level,
        this.x1 + (this.x2 - this.x1) / 2,
        this.y1 + (this.y2 - this.y1) / 2,
      );
    }
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

  findDungeonExit() {
    if (!this.isDungeonEntrance) return;

    const exit = this.findMaxLevelDescendent();
    exit.isDungeonExit = true;
    return exit;
  }

  findMaxLevelDescendent(): Room {
    if (this.exits.length === 0) return this;

    let maxChild = this.exits[0].to;

    this.exits.forEach((exit) => {
      const candidate = exit.to;

      if (candidate.maxLevel > maxChild.maxLevel) maxChild = candidate;
    });

    return maxChild.findMaxLevelDescendent();
  }

  findPath() {
    if (!this.isDungeonExit) return;

    let nextEntrance = this.entrance;

    while (nextEntrance) {
      nextEntrance.onPath = true;
      nextEntrance.from.onPath = true;

      nextEntrance = nextEntrance.from.entrance;
    }
  }

  findNonPathExit() {
    let maxLevelExit: Door | undefined;

    this.exits.forEach((exit) => {
      if (exit.onPath) return;

      if (!maxLevelExit || exit.to.maxLevel > maxLevelExit.to.maxLevel) {
        maxLevelExit = exit;
      }
    });

    return maxLevelExit;
  }

  findPathExit() {
    return this.exits.find((exit) => exit.onPath);
  }

  /** Returns `true` if a key was successfully placed, `false` otherwise. */
  placeKey() {
    if (!this.isDungeonExit) return false;

    const distance = Math.floor(randomFromTo(1, this.level));

    let room: Room | undefined = this;

    // walk up the tree for distance levels
    for (let i = distance; i > 0; i--) {
      room = room?.entrance?.from;
    }

    let nonPathExit: Door | undefined = undefined;

    while (!nonPathExit) {
      nonPathExit = room?.findNonPathExit();

      if (!nonPathExit) {
        if (!room?.entrance) return false;

        // walk up another level
        room = room.entrance.from;
      }
    }

    // place the lock
    const pathExit = room?.findPathExit();

    if (!pathExit) return false;

    pathExit.isLocked = true;

    const keyRoom = nonPathExit.to.findMaxLevelDescendent();

    // place the key
    keyRoom.hasKey = true;

    return true;
  }
}

export class Door {
  isVertical = false;
  position: Coordinates;
  from: Room;
  to: Room;
  onPath = false;
  isLocked = false;
  p5: P5;

  constructor(p5: P5, from: Room, to: Room) {
    this.p5 = p5;
    this.from = from;
    this.to = to;

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
    if (this.isLocked) {
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
