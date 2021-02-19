import React from 'react';
import styles from '../techstack.module.css';

const TechNode: React.FC = () => {
  return (
    <li className={styles.tech}>
      <img src="/images/nodejs.png" className={`${styles.techImage} ${styles.nodeImage}`} alt="" />
      NodeJS
    </li>
  );
};

export default TechNode;
