import React from 'react';
import Heading from '../../components/Heading';
import { ViewProps } from '../types';
import styles from './about.module.css';

const AboutView: React.FC<ViewProps> = ({ isStandalone = false }) => {
  return (
    <div>
      <div className={styles.aspectRatio}>
        <img className={styles.image} src="/images/me.jpg" alt="" />
      </div>
      <div>
        <Heading level={isStandalone ? 1 : 2}>About Me</Heading>
        I'm a front-end web developer from Minneapolis, MN. I'm currently working full-time with a
        talented team of engineers at Target, but I'm always busy with a side project or two. My
        passions include building responsive, accessible websites, designing &amp; developing games,
        and exploring new ideas through simulations.
      </div>
    </div>
  );
};

export default AboutView;
