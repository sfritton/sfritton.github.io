import React from 'react';

export const cssCustomProperties = (style: Record<string, string | number>) =>
  style as React.CSSProperties;
