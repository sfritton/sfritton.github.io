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
      <div>
        Particle systems are always a fun project. A few simple rules, plus some randomness, and
        some really cool behaviors emerge. Each particle in this system starts out small and white,
        then grows and fades to red before shrinking again. Multiply that by 100 particles with
        random variations, and you have a nice little flame. It was an interesting challenge to get
        a decent-looking fire with so few particles. The original version of this system ran in Java
        and had nearly 10,000 particles. Unfortunately, JavaScript just isn't fast enough to run a
        massive system.
      </div>
    </Layout>
  );
};

export default FirePage;
