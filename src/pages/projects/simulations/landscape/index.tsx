import React, { useRef, useState } from 'react';
import { PageProps } from 'gatsby';
import Layout from '../../../../components/Layout';
import { Simulation } from '../../../../components/Simulation';
import { proceduralLandscape } from '../../../../simulations/landscape';
import { allMapTypes } from '../../../../simulations/landscape/constants';
import { Select } from '../../../../components/Select';
import { Button } from '../../../../components/Button';
import styles from './landscape.module.css';
import { MapType } from '../../../../simulations/landscape/types';
import { MapLegend } from '../../../../simulations/landscape/MapLegend';
import { ExternalLink } from '../../../../components/Link';

const LandscapePage: React.FC<PageProps> = ({ location }) => {
  const [mapType, setMapType] = useState<MapType>('elevation');
  const buttonRef = useRef<HTMLButtonElement>(null);
  const selectRef = useRef<HTMLSelectElement>(null);

  const queryParams = location.search
    .replace('?', '')
    .split('&')
    .map((paramPair) => paramPair.split('='));
  const tileSizeString = queryParams.find(([paramName]) => paramName === 'tileSize')?.[1];
  const tileSize = tileSizeString ? Number(tileSizeString) : undefined;

  return (
    <Layout title="Landscape Generator">
      <h1>Landscape Generator</h1>
      <div>
        A procedural landscape generator that uses two-dimensional{' '}
        <ExternalLink href="https://en.wikipedia.org/wiki/Perlin_noise">Perlin noise</ExternalLink>{' '}
        to create a grid of tiles with elevation, precipitation, and climate values. The temperature
        for each tile is determined by both its elevation and its climate. From there, each tile is
        assigned to a biome (Rainforest, Desert, etc.) based on its temperature and its
        precipitation.
      </div>
      <h2>Demo</h2>
      <Simulation sketch={proceduralLandscape(buttonRef, selectRef, tileSize)} />
      <MapLegend mapType={mapType} />
      <div className={styles.controls}>
        <div>
          <Select
            label="Map Type"
            ref={selectRef}
            onChange={(e) => {
              setMapType(e.target.value as MapType);
            }}
          >
            {allMapTypes.map((mapType) => (
              <option key={mapType} value={mapType}>
                {mapType}
              </option>
            ))}
          </Select>
        </div>
        <Button ref={buttonRef}>Generate a new landscape</Button>
      </div>
    </Layout>
  );
};

export default LandscapePage;
