import React, { useRef } from 'react';
import { PageProps } from 'gatsby';
import Layout from '../../../../components/Layout';
import { Simulation } from '../../../../components/Simulation';
import { proceduralLandscape } from '../../../../simulations/landscape';
import { allMapTypes } from '../../../../simulations/landscape/constants';
import { Select } from '../../../../components/Select';
import { Button } from '../../../../components/Button';
import styles from './landscape.module.css';

const LandscapePage: React.FC<PageProps> = () => {
  const buttonRef = useRef<HTMLButtonElement>(null);
  const selectRef = useRef<HTMLSelectElement>(null);

  return (
    <Layout title="Landscape Generator">
      <h1>Landscape Generator</h1>
      <Simulation sketch={proceduralLandscape(buttonRef, selectRef)} />
      <div className={styles.controls}>
        <div>
          <Select label="Map Type" ref={selectRef}>
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
