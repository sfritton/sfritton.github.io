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
      <div>A simple physics simulation. Try throwing the ball by clicking and dragging it.</div>
      <div style={{ marginTop: 'var(--space-md)' }}>
        <b>Note:</b> This doesn't work the best on touchscreens.
      </div>
    </Layout>
  );
};

export default ProceduralDungeonPage;
