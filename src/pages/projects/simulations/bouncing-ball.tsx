import React from 'react';
import { PageProps } from 'gatsby';
import Layout from '../../../components/Layout';
import { Simulation } from '../../../components/Simulation';
import { bouncingBall } from '../../../simulations/bouncing-ball';

const ProceduralDungeonPage: React.FC<PageProps> = () => {
  return (
    <Layout title="Bouncing Ball">
      <h1>Bouncing Ball</h1>
      <Simulation sketch={bouncingBall} />
    </Layout>
  );
};

export default ProceduralDungeonPage;
