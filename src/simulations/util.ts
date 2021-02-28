export const canvasDimensions = (maxWidth = 700) => {
  const width = Math.min(document.body.clientWidth - 100, maxWidth);
  // if the width is less than 662, assume we're on a vertical screen
  const height = width < 662 ? (width * 4) / 3 : (width * 3) / 4;

  return [width, height] as const;
};
