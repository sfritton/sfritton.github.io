import P5 from 'p5';
import { Planet } from './Planet';
import { StationaryPlanet } from './StationaryPlanet';

type GravityScenario = (p5: P5) => { planets: Planet[]; name: string };

export const ourSolarSystem: GravityScenario = (p5) => ({
  name: 'Our Solar System',
  planets: [
    new StationaryPlanet(p5, 3330, 1.1, { x: 0, y: 0 }), // Sun
    new Planet(p5, 0.0005, 0.1, { x: 0, y: -2 }, { x: 8.5, y: 0 }, '#d7955f'), // Mercury
    new Planet(p5, 0.008, 0.1, { x: 0, y: 3.5 }, { x: -7.5, y: 0 }, '#ef9d5c'), // Venus
    new Planet(p5, 0.01, 0.1, { x: 0, y: -5 }, { x: 7.75, y: 0 }, '#5dacdb'), // Earth
    new Planet(p5, 0.001, 0.1, { x: 0, y: 6.5 }, { x: -8, y: 0 }, '#bd3206'), // Mars
    new Planet(p5, 3.17, 0.6, { x: 0, y: -9 }, { x: 8, y: 0 }, '#E4D0B1'), // Jupiter
    new Planet(p5, 0.95, 0.5, { x: 0, y: 12 }, { x: -8, y: 0 }, '#c4cf9f'), // Saturn
    new Planet(p5, 0.15, 0.3, { x: 0, y: -14 }, { x: 8, y: 0 }, '#b1e5e8'), // Uranus
    new Planet(p5, 0.17, 0.3, { x: 0, y: 16 }, { x: -8, y: 0 }, '#4793BF'), // Neptune
  ],
});

export const binarySolarSystem: GravityScenario = (p5) => ({
  name: 'Binary Solar System',
  planets: [
    // Stars
    new Planet(p5, 3330, 1.1, { x: -5, y: 0 }, { x: 0, y: 5 }, '#ff8822'),
    new Planet(p5, 3330, 1.5, { x: 5, y: 0 }, { x: 0, y: -5 }),

    // Planets
    new Planet(p5, 0.01, 0.3, { x: 0, y: 8 }, { x: -10, y: 0 }, '#ef9d5c'),
    new Planet(p5, 0.01, 0.1, { x: 0, y: -10 }, { x: 11, y: 0 }, '#d7955f'),
    new Planet(p5, 0.01, 0.1, { x: 0, y: 12 }, { x: -11, y: 0 }, '#5dacdb'),
    new Planet(p5, 0.01, 0.5, { x: 0, y: -16 }, { x: 11, y: 0 }, '#c4cf9f'),
  ],
});
