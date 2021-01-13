import React from 'react';
import { PageProps } from 'gatsby';
import Layout from '../../components/Layout';
import ProjectSummaryWide from '../../components/ProjectSummaries/ProjectSummaryWide';

const ProjectsPage: React.FC<PageProps> = () => {
  return (
    <Layout title="Projects">
      <h1>Projects</h1>
      <h2>Web Dev</h2>
      <ProjectSummaryWide
        title="Star Trek Puzzle"
        href="https://sfritton.github.io/picard-geocache/"
        image="/images/picard-geocache.png"
      >
        Step into the world of Star Trek as Captain Jean-Luc Picard in command of the USS
        Enterprise. Help your crew decipher a mysterious distress signal that will eventually lead
        you to a real-world geocache.
      </ProjectSummaryWide>
    </Layout>
  );
};

export default ProjectsPage;
