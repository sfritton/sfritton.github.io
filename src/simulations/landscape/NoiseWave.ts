import P5 from 'p5';
import { randomFromTo } from '../util/helpers';
import { Coordinates } from '../util/types';

/** A wrapper around the P5 noise function to allow for the use of wave-like parameters. */
export class NoiseWave {
  p5: P5;
  seed: Coordinates;
  frequency: number;
  amplitude: number;

  constructor(p5: P5, seed: Coordinates, frequency: number, amplitude: number) {
    this.p5 = p5;
    this.seed = seed;
    this.frequency = frequency;
    this.amplitude = amplitude;
  }

  getValueAt(row: number, column: number) {
    return (
      this.amplitude *
      this.p5.noise((this.seed.x + column) * this.frequency, (this.seed.y + row) * this.frequency)
    );
  }
}

export class NoiseWaveStack {
  p5: P5;
  waves: NoiseWave[];

  constructor(p5: P5, seed: Coordinates, scale: number, numWaves: number) {
    this.p5 = p5;
    this.waves = [];

    for (let i = 0; i < numWaves; i++) {
      const layer = Math.pow(2, i);
      const waveSeed = {
        x: seed.x + randomFromTo(layer - 1, layer),
        y: seed.y + randomFromTo(layer - 1, layer),
      };

      this.waves.push(new NoiseWave(this.p5, waveSeed, scale / layer, layer));
    }
  }

  getValueAt(row: number, column: number) {
    const { result, max } = this.waves.reduce(
      (acc, wave) => ({
        result: acc.result + wave.getValueAt(row, column),
        max: acc.max + wave.amplitude,
      }),
      { result: 0, max: 0 },
    );

    return max > 0 ? this.p5.norm(result, 0, max) : 0;
  }
}
