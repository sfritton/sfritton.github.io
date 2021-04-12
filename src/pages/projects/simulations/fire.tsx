import React from 'react';
import { PageProps } from 'gatsby';
import Layout from '../../../components/Layout';
import { Simulation } from '../../../components/Simulation';
import { fire } from '../../../simulations/fire';

const FirePage: React.FC<PageProps> = () => {
  return (
    <Layout title="Fire Particle System">
      <h1>Fire Particle System</h1>
      <Simulation sketch={fire} />
    </Layout>
  );
};

// ts-unused-exports:disable-next-line
export default FirePage;
