import React from 'react';
import { PageProps } from 'gatsby';
import Layout from '../components/Layout';
import AboutView from '../views/about';
import TechView from '../views/tech';

const AboutPage: React.FC<PageProps> = () => {
  return (
    <Layout title="About">
      <AboutView isStandalone />
      <TechView />
    </Layout>
  );
};

export default AboutPage;
