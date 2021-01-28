import React from 'react';
import ProjectSummaryWide from '../../components/ProjectSummaries/ProjectSummaryWide';
import ProjectSummaries from '../../components/ProjectSummaries';
import ProjectSummary from '../../components/ProjectSummaries/ProjectSummary';
import { ViewProps } from '../types';
import Heading from '../../components/Heading';

const ProjectsView: React.FC<ViewProps> = ({ isStandalone = false }) => {
  return (
    <>
      <Heading level={isStandalone ? 1 : 2}>Projects</Heading>
      <Heading level={isStandalone ? 2 : 3}>Websites</Heading>
      <ProjectSummaryWide
        title="Star Trek Puzzle"
        href="https://sfritton.github.io/picard-geocache/"
        image="/images/picard-geocache.png"
        headingLevel={isStandalone ? 3 : 4}
      >
        Step into the world of Star Trek as Captain Jean-Luc Picard in command of the USS
        Enterprise. Help your crew decipher a mysterious distress signal that will eventually lead
        you to a real-world geocache.
      </ProjectSummaryWide>
      <Heading level={isStandalone ? 2 : 3}>CSS Fun</Heading>
      <ProjectSummaries>
        <ProjectSummary
          title="Light Switch"
          image="/images/light_switch.png"
          href="https://codepen.io/sfritton/full/MWyYPKK"
          headingLevel={isStandalone ? 3 : 4}
        >
          A functioning light switch.
        </ProjectSummary>
        <ProjectSummary
          title="Keyboard"
          image="/images/keyboard.png"
          href="https://codepen.io/sfritton/full/yLemgqB"
          headingLevel={isStandalone ? 3 : 4}
        >
          An interactive keyboard.
        </ProjectSummary>
        <ProjectSummary
          title="Wave"
          image="/images/wave.png"
          href="https://codepen.io/sfritton/full/WNvxMMX"
          headingLevel={isStandalone ? 3 : 4}
        >
          A calming pile of circles.
        </ProjectSummary>
        <ProjectSummary
          title="Pinwheel"
          image="/images/pinwheel.png"
          href="https://codepen.io/sfritton/full/wvadJdr"
          headingLevel={isStandalone ? 3 : 4}
        >
          A beautiful spinning mess of curves.
        </ProjectSummary>
      </ProjectSummaries>
    </>
  );
};

export default ProjectsView;
