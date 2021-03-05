import { randomFromTo } from '../util/helpers';
import { MULTIPLIER } from './constants';

export const randomMiddle = (min: number, max: number) =>
  min + (max - min) * (0.5 + randomFromTo(-MULTIPLIER, MULTIPLIER));
