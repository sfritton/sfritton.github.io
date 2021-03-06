import P5 from 'p5';
import { UNIT, MIN_WALL_LENGTH, DEPTH } from './constants';
import { randomFromTo } from '../util/helpers';
import { randomMiddle } from './util';
import { Room } from './Room';
import { Simulation } from '../util/Simulation';

export class ProceduralDungeon extends Simulation {
  dungeonEntrance?: Room;
  dungeonExit?: Room;
  maxLevel = 0;

  generateDungeon() {
    // divide the canvas into rooms
    const rooms = this.divide(DEPTH);

    this.dungeonEntrance = rooms[0];
    this.dungeonEntrance.isDungeonEntrance = true;

    // connect those rooms with doors, storing the longest path
    this.maxLevel = this.dungeonEntrance.findExits(rooms.slice(1));

    // choose an exit
    this.dungeonExit = this.dungeonEntrance.findDungeonExit();

    // find the path from the entrance to the exit
    this.dungeonExit?.findPath();

    const numKeys = Math.floor(randomFromTo(1, 4));

    // place locks on doors along the path
    for (let i = 0; i < numKeys; i++) {
      this.dungeonExit?.placeKey();
    }
  }

  renderDungeon() {
    this.p5.noStroke();
    this.p5.background(0);
    this.dungeonEntrance?.render();
  }

  divide(depth: number, room?: Room, results?: Room[]): Room[] {
    if (!room || !results) {
      return this.divide(
        depth,
        new Room(this.p5, UNIT, this.p5.width - UNIT, UNIT, this.p5.height - UNIT),
        [],
      );
    }

    if (depth === 0) {
      return [...results, room];
    }

    const flip = Math.random() > 0.85; // 15% of the time, break from the normal pattern
    const isEven = depth % 2 === 0;
    const isVertical = flip ? isEven : !isEven;

    if (isVertical) {
      const middleX = randomMiddle(room.x1, room.x2);

      if (room.x2 - (middleX + UNIT) < MIN_WALL_LENGTH || middleX - room.x1 < MIN_WALL_LENGTH) {
        return this.divide(depth - 1, room, results);
      }

      return [
        ...this.divide(depth - 1, new Room(this.p5, room.x1, middleX, room.y1, room.y2), results),
        ...this.divide(
          depth - 1,
          new Room(this.p5, middleX + UNIT, room.x2, room.y1, room.y2),
          results,
        ),
      ];
    }

    const middleY = randomMiddle(room.y1, room.y2);

    if (room.y2 - (middleY + UNIT) < MIN_WALL_LENGTH || middleY - room.y1 < MIN_WALL_LENGTH) {
      return this.divide(depth - 1, room, results);
    }

    return [
      ...this.divide(depth - 1, new Room(this.p5, room.x1, room.x2, room.y1, middleY), results),
      ...this.divide(
        depth - 1,
        new Room(this.p5, room.x1, room.x2, middleY + UNIT, room.y2),
        results,
      ),
    ];
  }
}
