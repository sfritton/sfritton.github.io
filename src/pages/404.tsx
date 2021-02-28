import React from 'react';
import { PageProps } from 'gatsby';
import Layout from '../components/Layout';
import { FourOhFour } from '../views/404';

const FourOhFourPage: React.FC<PageProps> = () => {
  return (
    <Layout title="Page not found">
      <FourOhFour />
    </Layout>
  );
};

export default FourOhFourPage;
