import { MULTIPLIER } from './constants';

export const randomFromTo = (min: number, max: number) => (max - min) * Math.random() + min;

export const randomMiddle = (min: number, max: number) =>
  min + (max - min) * (0.5 + randomFromTo(-MULTIPLIER, MULTIPLIER));
