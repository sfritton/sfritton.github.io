import React from 'react';
import TechStack from '../../components/TechStack';
import TechCSS from '../../components/TechStack/techs/TechCSS';
import TechHTML from '../../components/TechStack/techs/TechHTML';
import TechJavascript from '../../components/TechStack/techs/TechJavascript';
import TechTypescript from '../../components/TechStack/techs/TechTypescript';
import TechBlender from '../../components/TechStack/techs/TechBlender';
import TechNode from '../../components/TechStack/techs/TechNode';
import TechReact from '../../components/TechStack/techs/TechReact';
import TechRedux from '../../components/TechStack/techs/TechRedux';
import TechNext from '../../components/TechStack/techs/TechNext';
import TechVsCode from '../../components/TechStack/techs/TechVsCode';
import TechUnity from '../../components/TechStack/techs/TechUnity';
import { ViewProps } from '../types';
import Heading from '../../components/Heading';

const TechView: React.FC<ViewProps> = ({ isStandalone = false }) => {
  return (
    <>
      <Heading level={isStandalone ? 1 : 2}>Technologies &amp; Tools</Heading>
      <TechStack>
        <TechCSS />
        <TechHTML />
        <TechJavascript />
        <TechTypescript />
        <TechNode />
        <TechReact />
        <TechRedux />
        <TechNext />
        <TechVsCode />
        <TechBlender />
        <TechUnity />
      </TechStack>
    </>
  );
};

export default TechView;
