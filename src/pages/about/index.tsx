import React from 'react';
import { PageProps } from 'gatsby';
import { Helmet } from 'react-helmet';
import Link from '../../components/Link';
import styles from './about.module.css';
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

const AboutPage: React.FC<PageProps> = () => {
  return (
    <>
      <Helmet>
        <link rel="shortcut icon" type="image/svg" href="/images/logo2.svg" />
        <title>Sam Fritton | About</title>
      </Helmet>
      <div className={styles.layout}>
        <img className={styles.image} src="/images/me.jpg" alt="" />
        <div>
          <h1>About Me</h1>
          <div>
            I’m a front-end web developer from Minneapolis, MN. I’m currently working full-time with
            a talented team of engineers at Target, but I’m always busy with a side project or two.
            My passions include building responsive, accessible websites, designing &amp; developing
            games, and exploring new ideas through simulations.
          </div>
          <div className={styles.findMe}>
            Find me on <Link href="https://github.com/sfritton">GitHub</Link> |{' '}
            <Link href="https://codepen.io/sfritton">CodePen</Link> |{' '}
            <Link href="https://www.linkedin.com/in/samuel-fritton">LinkedIn</Link> or email me at{' '}
            <Link href="mailto:sfritton94+webdev@gmail.com">sfritton94+webdev@gmail.com</Link>
          </div>
        </div>
      </div>

      <h2>Technologies &amp; Tools</h2>
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

export default AboutPage;
