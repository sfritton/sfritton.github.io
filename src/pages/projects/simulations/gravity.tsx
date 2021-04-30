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
      <Select label="Scenario" ref={selectRef}>
        {allScenarios.map(({ name }) => (
          <option key={name} value={name}>
            {name}
          </option>
        ))}
      </Select>
      <div style={{ marginTop: 'var(--space-lg)' }}>
        This system takes a set of planets and simulates their interactions. Each planet has a mass,
        an initial position, and an initial velocity. From there, the system simulates physical
        forces from gravity to determine the planets' movement. The orbits you see are not
        pre-programmed, they arise the same way they do in real life: a balance between the planet's
        momentum and the force of gravity from a larger body.
      </div>
    </Layout>
  );
};

export default GravityPage;
