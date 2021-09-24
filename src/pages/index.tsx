import React from 'react';
import { PageProps } from 'gatsby';
import Layout from '../components/Layout';
import ProjectSummaries from '../components/ProjectSummaries';
import ProjectSummaryWide from '../components/ProjectSummaries/ProjectSummaryWide';
import { picardGeocache } from '../projects/picard-geocache';
import { dungeonGenerator } from '../projects/dungeon-generator';
import { ButtonLink } from '../components/Button/ButtonLink';
import { landscapeGenerator } from '../projects/landscape';

const Home: React.FC<PageProps> = () => {
  return (
    <Layout isFullWidth>
      <h1>Sam Fritton</h1>
      Hi there! I'm a web developer from Minneapolis, MN. I built this site to show off some of the
      cool stuff I've made.
      <h2>My latest projects</h2>
      <ProjectSummaries>
        <ProjectSummaryWide {...picardGeocache} headingLevel={3} />
      </ProjectSummaries>
      <ProjectSummaries>
        <ProjectSummaryWide {...dungeonGenerator} headingLevel={3} />
      </ProjectSummaries>
      <ProjectSummaries>
        <ProjectSummaryWide {...landscapeGenerator} headingLevel={3} />
      </ProjectSummaries>
      <div style={{ textAlign: 'center', marginBottom: 'var(--space-xl)' }}>
        <ButtonLink to="/projects">See all my projects</ButtonLink>
      </div>
    </Layout>
  );
};

export default Home;
