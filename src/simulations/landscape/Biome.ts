import { WATER_COLOR } from './constants';

class Biome {
  title: string;
  color: string;

  constructor(title: string, biomeColor: string) {
    this.title = title;
    this.color = biomeColor;
  }

  toString() {
    return this.title;
  }
}

// Loosely based on the Koppen climate classification
const WATER = new Biome('Water', WATER_COLOR);

const TUNDRA = new Biome('Tundra', '#cdccf1'); // low  temp, low  precip
const MOUNTAIN = new Biome('Mountain', '#6d65b2'); // low  temp, mid  precip
const SNOWY = new Biome('Snowy', '#d4ffff'); // low  temp, high precip

const ROCKY = new Biome('Rocky', '#556973'); // mid  temp, low  precip
const TEMPERATE = new Biome('Temperate', '#126341'); // mid  temp, mid  precip
const MARSH = new Biome('Marsh', '#a8dd75'); // mid  temp, high precip

const DESERT = new Biome('Desert', '#e3b365'); // high temp, low  precip
const PRAIRIE = new Biome('Prairie', '#48a32f'); // high temp, mid  precip
const RAINFOREST = new Biome('Rainforest', '#e33d00'); // high temp, high precip

const LOW_MAX = 0.45;
const MID_MAX = 0.55;

export const getBiome = (temp: number, precip: number) => {
  if (temp < LOW_MAX) {
    if (precip < LOW_MAX) return TUNDRA;

    if (precip < MID_MAX) return MOUNTAIN;

    return SNOWY;
  }

  if (temp < MID_MAX) {
    if (precip < LOW_MAX) return ROCKY;

    if (precip < MID_MAX) return TEMPERATE;

    return MARSH;
  }

  if (precip < LOW_MAX) return DESERT;

  if (precip < MID_MAX) return PRAIRIE;

  return RAINFOREST;
};

export const allBiomes = [
  WATER,
  TUNDRA,
  MOUNTAIN,
  SNOWY,
  ROCKY,
  TEMPERATE,
  MARSH,
  DESERT,
  PRAIRIE,
  RAINFOREST,
];
