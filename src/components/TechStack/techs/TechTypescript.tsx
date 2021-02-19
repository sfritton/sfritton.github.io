import React from 'react';
import styles from '../techstack.module.css';

const TechTypescript: React.FC = () => {
  return (
    <li className={styles.tech}>
      <img
        src="/images/typescript.png"
        className={`${styles.techImage} ${styles.tsImage}`}
        alt=""
      />
      Typescript
    </li>
  );
};

export default TechTypescript;
