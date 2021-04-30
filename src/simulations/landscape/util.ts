import P5 from 'p5';

/**
 * Takes a percent and an array of colors.
 * Returns the color at that percent along a gradient across the array of colors.
 */
export const gradient = (p5: P5, percent: number, colors: string[]): P5.Color => {
  if (colors.length === 0) return p5.color('#000000');

  if (colors.length === 1) return p5.color(colors[0]);

  if (colors.length === 2) {
    const diffRed = p5.red(colors[1]) - p5.red(colors[0]);
    const diffGreen = p5.green(colors[1]) - p5.green(colors[0]);
    const diffBlue = p5.blue(colors[1]) - p5.blue(colors[0]);

    return p5.color(
      p5.red(colors[0]) + diffRed * percent,
      p5.green(colors[0]) + diffGreen * percent,
      p5.blue(colors[0]) + diffBlue * percent,
    );
  }

  for (let i = 0; i < colors.length - 1; i++) {
    const max = (1.0 / (colors.length - 1)) * (i + 1);
    const min = (1.0 / (colors.length - 1)) * i;

    if (percent < max) {
      return gradient(p5, (percent - min) / (max - min), colors.slice(i, i + 2));
    }
  }

  return p5.color(colors[colors.length - 1]);
};

/**
 * Takes a number of steps, a percent, and an array of colors.
 * Returns the color at that percent along a stepped gradient across the array of colors.
 */
export const step = (p5: P5, steps: number, percent: number, colors: string[]) => {
  for (let i = 0; i < steps; i++) {
    const step = (1 / steps) * (i + 1);
    if (percent < step) {
      return gradient(p5, step, colors);
    }
  }

  return p5.color(colors[colors.length - 1]);
};
