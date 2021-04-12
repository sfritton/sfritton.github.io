import React from 'react';
import { PageProps } from 'gatsby';
import Layout from '../../components/Layout';
import ProjectsView from '../../views/projects';

const ProjectsPage: React.FC<PageProps> = () => {
  return (
    <Layout title="Projects" isFullWidth>
      <ProjectsView isStandalone />
    </Layout>
  );
};

// ts-unused-exports:disable-next-line
export default ProjectsPage;
