import React from 'react';
import { PageProps } from 'gatsby';
import Layout from '../../../components/Layout';
import { Simulation } from '../../../components/Simulation';
import { fireNew } from '../../../simulations/fire-new';

const FirePage: React.FC<PageProps> = () => {
  return (
    <Layout title="Fire Particle System">
      <h1>Fire Particle System</h1>
      <Simulation sketch={fireNew} />
    </Layout>
  );
};

export default FirePage;
