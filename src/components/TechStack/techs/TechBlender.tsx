import React from 'react';
import styles from '../techstack.module.css';

const TechBlender: React.FC = () => {
  return (
    <li className={styles.tech}>
      <img
        src="/images/blender.png"
        className={`${styles.techImage} ${styles.blenderImage}`}
        alt=""
      />
      Blender
    </li>
  );
};

export default TechBlender;
