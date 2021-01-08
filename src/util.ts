import { CSSProperties } from 'react';

export const cssCustomProperties = (style: Record<string, string | number>) =>
  style as CSSProperties;
