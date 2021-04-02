import { Coordinates } from './types';

class ScreenUtils {
  pixelsPerMeter: number = 0;
  screenHeight: number = 0;
  screenWidth: number = 0;

  init(pxpm: number, h: number, w = h) {
    this.pixelsPerMeter = pxpm;
    this.screenHeight = h;
    this.screenWidth = w;
  }

  transformCoordinates({ x, y }: Coordinates) {
    return {
      x: x * this.pixelsPerMeter + this.screenWidth / 2,
      y: -y * this.pixelsPerMeter + this.screenHeight / 2,
    };
  }

  transformScalar(n: number) {
    return n * this.pixelsPerMeter;
  }
}

export const screenUtils = new ScreenUtils();
