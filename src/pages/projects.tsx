import React from 'react';
import { PageProps } from 'gatsby';
import Layout from '../components/Layout';
import ProjectsView from '../views/projects';

const ProjectsPage: React.FC<PageProps> = () => {
  return (
    <Layout title="Projects">
      <ProjectsView isStandalone />
    </Layout>
  );
};

export default ProjectsPage;
