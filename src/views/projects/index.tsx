import React from 'react';
import ProjectSummaryWide from '../../components/ProjectSummaries/ProjectSummaryWide';
import ProjectSummaries from '../../components/ProjectSummaries';
import ProjectSummary from '../../components/ProjectSummaries/ProjectSummary';
import { ViewProps } from '../types';
import Heading from '../../components/Heading';
import { picardGeocache } from '../../projects/picard-geocache';
import { dungeonGenerator } from '../../projects/dungeon-generator';
import { lightSwitch } from '../../projects/light-switch';
import { keyboard } from '../../projects/keyboard';
import { wave } from '../../projects/wave';
import { pinwheel } from '../../projects/pinwheel';
import { bouncingBall } from '../../projects/bouncing-ball';
import { gravity } from '../../projects/gravity';
import { fire } from '../../projects/fire';

const ProjectsView: React.FC<ViewProps> = ({ isStandalone = false }) => {
  return (
    <>
      <Heading level={isStandalone ? 1 : 2}>Projects</Heading>
      <Heading level={isStandalone ? 2 : 3}>Websites</Heading>
      <ProjectSummaries>
        <ProjectSummaryWide {...picardGeocache} headingLevel={isStandalone ? 3 : 4} />
      </ProjectSummaries>
      <Heading level={isStandalone ? 2 : 3}>Simulations</Heading>
      <ProjectSummaries>
        <ProjectSummaryWide {...dungeonGenerator} headingLevel={isStandalone ? 3 : 4} />
      </ProjectSummaries>
      <ProjectSummaries>
        <ProjectSummary {...gravity} headingLevel={isStandalone ? 3 : 4} />
        <ProjectSummary {...fire} headingLevel={isStandalone ? 3 : 4} />
        <ProjectSummary {...bouncingBall} headingLevel={isStandalone ? 3 : 4} />
      </ProjectSummaries>
      <Heading level={isStandalone ? 2 : 3}>CSS Fun</Heading>
      <ProjectSummaries>
        <ProjectSummary {...lightSwitch} headingLevel={isStandalone ? 3 : 4} />
        <ProjectSummary {...keyboard} headingLevel={isStandalone ? 3 : 4} />
        <ProjectSummary {...wave} headingLevel={isStandalone ? 3 : 4} />
        <ProjectSummary {...pinwheel} headingLevel={isStandalone ? 3 : 4} />
      </ProjectSummaries>
    </>
  );
};

export default ProjectsView;
