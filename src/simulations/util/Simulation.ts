import P5 from 'p5';

export class Simulation {
  /** The p5.js instance. */
  p5: P5;
  is3D = false;

  constructor(p5: P5) {
    this.p5 = p5;
  }

  /** Create the canvas */
  setup() {
    this.p5.createCanvas(...this.canvasDimensions(), this.is3D ? this.p5.WEBGL : this.p5.P2D);
  }

  canvasDimensions(maxWidth = 700) {
    const width = Math.min(document.body.clientWidth - 100, maxWidth);
    // if the width is less than 662, assume we're on a vertical screen
    const height = width < 662 ? (width * 4) / 3 : (width * 3) / 4;

    return [width, height] as const;
  }

  /** Only return true if the mouse is pressed inside the canvas */
  isMousePressed() {
    // The mouse is not pressed
    if (!this.p5.mouseIsPressed || this.p5.mouseButton !== this.p5.LEFT) return false;

    // The mouse is outside the canvas
    if (
      this.p5.mouseX < 0 ||
      this.p5.mouseX > this.p5.width ||
      this.p5.mouseY < 0 ||
      this.p5.mouseY > this.p5.height
    )
      return false;

    // The mouse was pressed inside the canvas
    return true;
  }
}
