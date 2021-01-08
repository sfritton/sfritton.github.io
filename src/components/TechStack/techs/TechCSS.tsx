import React from 'react';
import styles from '../techstack.module.css';

const TechCSS: React.FC = () => {
  return (
    <li className={styles.tech}>
      <div className={`${styles.techImage} ${styles.cssBox}`} aria-hidden="true">
        {'{}'}
      </div>
      CSS
    </li>
  );
};

export default TechCSS;
