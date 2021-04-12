import React, { useRef } from 'react';
import { PageProps } from 'gatsby';
import Layout from '../../../components/Layout';
import { Simulation } from '../../../components/Simulation';
import { gravity } from '../../../simulations/gravity';
import { allScenarios } from '../../../simulations/gravity/scenarios';
import { Select } from '../../../components/Select';

const GravityPage: React.FC<PageProps> = () => {
  const selectRef = useRef<HTMLSelectElement>(null);

  return (
    <Layout title="Gravity Simulation">
      <h1>Gravity Simulation</h1>
      <Simulation sketch={gravity(selectRef)} />
      <Select label="Scenarios" ref={selectRef}>
        {allScenarios.map(({ name }) => (
          <option key={name} value={name}>
            {name}
          </option>
        ))}
      </Select>
    </Layout>
  );
};

// ts-unused-exports:disable-next-line
export default GravityPage;
