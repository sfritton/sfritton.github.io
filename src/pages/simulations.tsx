import React from 'react';
import { PageProps } from 'gatsby';
import P5 from 'p5';
import Layout from '../components/Layout';
import { Simulation } from '../components/Simulation';

const sketch = (p5: P5) => {
  let x = 100;
  let y = 100;

  p5.setup = function () {
    p5.createCanvas(700, 410);
  };

  p5.draw = function () {
    p5.background(0);
    p5.fill(255);
    p5.rect(x, y, 50, 50);
  };
};

const SimulationsPage: React.FC<PageProps> = () => {
  return (
    <Layout title="Simulations">
      <Simulation sketch={sketch} />
    </Layout>
  );
};

export default SimulationsPage;
