import React from 'react';
import { PageProps } from 'gatsby';
import Layout from '../../../components/Layout';
import { Simulation } from '../../../components/Simulation';
import { proceduralLandscape } from '../../../simulations/landscape';

const LandscapePage: React.FC<PageProps> = () => (
  <Layout title="Landscape Generator">
    <h1>Landscape Generator</h1>
    <Simulation sketch={proceduralLandscape} />
  </Layout>
);

export default LandscapePage;
