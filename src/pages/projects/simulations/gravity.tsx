import React from 'react';
import { PageProps } from 'gatsby';
import Layout from '../../../components/Layout';
import { Simulation } from '../../../components/Simulation';
import { gravity } from '../../../simulations/gravity';

const GravityPage: React.FC<PageProps> = () => {
  return (
    <Layout title="Gravity Simulation">
      <h1>Gravity Simulation</h1>
      <Simulation sketch={gravity} />
    </Layout>
  );
};

export default GravityPage;
