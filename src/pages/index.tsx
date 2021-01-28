import React from 'react';
import { PageProps } from 'gatsby';
import Layout from '../components/Layout';
import Wave from '../components/Wave';

const Home: React.FC<PageProps> = () => {
  return (
    <Layout>
      <h1>Sam Fritton</h1>

      <div>
        Someday, this will be a place to show off all the cool stuff I've made. For now, enjoy
        whatever this is.
        <div className="sr-only">(A pulsating orb made with pure CSS)</div>
      </div>
      <Wave />
    </Layout>
  );
};

export default Home;
