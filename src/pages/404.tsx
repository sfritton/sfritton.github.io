import React from 'react';
import { PageProps } from 'gatsby';
import Layout from '../components/Layout';
import Wave from '../components/Wave';
import { InternalLink } from '../components/Link';

const FourOhFourPage: React.FC<PageProps> = () => {
  return (
    <Layout title="Page not found">
      <h1>Page not found</h1>

      <div>
        Whoops, that's not a real page. Try checking out my{' '}
        <InternalLink to="/projects">projects</InternalLink> or head back to the{' '}
        <InternalLink to="/">home page</InternalLink>.
        <div style={{ marginTop: 'var(--space-md)' }}>
          Or if you want, stay here for a bit and watch this calming circle.
        </div>
        <div className="sr-only">(A pulsating orb made with pure CSS)</div>
      </div>
      <Wave />
    </Layout>
  );
};

// ts-unused-exports:disable-next-line
export default FourOhFourPage;
