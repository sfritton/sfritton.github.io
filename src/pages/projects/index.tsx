import React from 'react';
import { PageProps } from 'gatsby';
import Layout from '../../components/Layout';
import ProjectSummaryWide from '../../components/ProjectSummaries/ProjectSummaryWide';
import ProjectSummaries from '../../components/ProjectSummaries';
import ProjectSummary from '../../components/ProjectSummaries/ProjectSummary';

const ProjectsPage: React.FC<PageProps> = () => {
  return (
    <Layout title="Projects">
      <h1>Projects</h1>
      <h2>Websites</h2>
      <ProjectSummaryWide
        title="Star Trek Puzzle"
        href="https://sfritton.github.io/picard-geocache/"
        image="/images/picard-geocache.png"
      >
        Step into the world of Star Trek as Captain Jean-Luc Picard in command of the USS
        Enterprise. Help your crew decipher a mysterious distress signal that will eventually lead
        you to a real-world geocache.
      </ProjectSummaryWide>
      <h2>CSS Fun</h2>
      <ProjectSummaries>
        <ProjectSummary
          title="Light Switch"
          image="/images/light_switch.png"
          href="https://codepen.io/sfritton/pen/MWyYPKK"
        >
          A functioning light switch.
        </ProjectSummary>
        <ProjectSummary
          title="Keyboard"
          image="/images/keyboard.png"
          href="https://codepen.io/sfritton/pen/yLemgqB"
        >
          An interactive keyboard.
        </ProjectSummary>
        <ProjectSummary
          title="Wave"
          image="/images/wave.png"
          href="https://codepen.io/sfritton/pen/WNvxMMX"
        >
          A calming pile of circles.
        </ProjectSummary>
        <ProjectSummary
          title="Pinwheel"
          image="/images/pinwheel.png"
          href="https://codepen.io/sfritton/pen/wvadJdr"
        >
          A beautiful spinning mess of curves.
        </ProjectSummary>
      </ProjectSummaries>
    </Layout>
  );
};

export default ProjectsPage;
