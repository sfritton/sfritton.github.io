import P5 from 'p5';
import { PhysicsSimulation } from './PhysicsSimulation';
import { Coordinates3D } from './types';

export class PhysicsSimulation3D extends PhysicsSimulation {
  /** The coordinates that the camera points towards. */
  cameraTarget: Coordinates3D = { x: 0, y: 0, z: 0 };
  /** The camera's location */
  cameraPosition: Coordinates3D = { x: 0, y: 0, z: 0 };
  /** The distance from the camera to the it's target */
  cameraRadius: number;
  /** The camera's angle around the Y axis. */
  cameraTheta = 0;

  constructor(p5: P5, verbose?: boolean, cameraRadius = 150) {
    super(p5, verbose);
    this.cameraRadius = cameraRadius;
    this.is3D = true;
  }

  /** Initialize timing and camera */
  setup() {
    // init timing
    super.setup();

    // init camera
    this.placeCamera();
  }

  moveCamera() {
    if (this.isMousePressed()) {
      this.cameraTheta = (2 * this.p5.PI * (this.p5.mouseX - this.p5.width / 2)) / this.p5.width;
      this.p5.cursor(this.p5.MOVE);
    } else {
      this.p5.cursor(this.p5.HAND);
    }

    this.placeCamera();
  }

  placeCamera() {
    this.cameraPosition = {
      x: this.cameraTarget.x + this.cameraRadius * this.p5.cos(this.cameraTheta),
      y: this.cameraTarget.y - 100,
      z: this.cameraTarget.z + this.cameraRadius * this.p5.sin(this.cameraTheta),
    };

    this.p5.camera(
      this.cameraPosition.x,
      this.cameraPosition.y,
      this.cameraPosition.z,
      this.cameraTarget.x,
      this.cameraTarget.y,
      this.cameraTarget.z,
      0,
      1,
      0,
    );
  }
}
