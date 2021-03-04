import P5 from 'p5';
import { Simulation } from './Simulation';

export class PhysicsSimulation extends Simulation {
  /** Enable additional console logging. Just average FPS for now. */
  verbose = false;
  /** A timestamp of the simulation start time. */
  startMS = 0;
  /** A timestamp of the beginning of the current frame. */
  currMS = 0;
  /** A timestamp of the beginning of the previous frame. */
  prevMS = 0;
  /** The total number of frames that have been rendered. */
  frames = 0;

  /** Pass the verbose flag to show the average FPS */
  constructor(p5: P5, verbose?: boolean) {
    super(p5);
    this.verbose = verbose ?? false;
  }

  /** Call during p5.setup to create the canvas and initialize the timing. */
  setup() {
    // create the canvas
    super.setup();

    // Initialize the timing
    this.currMS = this.p5.millis();
    this.startMS = this.currMS;
    this.prevMS = this.currMS;
  }

  /** Determine how many seconds have passed since the previous frame. */
  calculateTime() {
    this.frames++;
    this.prevMS = this.currMS;
    this.currMS = this.p5.millis();

    if (this.verbose) {
      const fps = Math.floor((this.frames / (this.currMS - this.startMS)) * 1000);
      console.log(`Running at ${fps} FPS`);
    }

    return (this.currMS - this.prevMS) / 1000;
  }
}
