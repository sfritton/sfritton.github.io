import React from 'react';
import styles from '../techstack.module.css';

const TechHTML: React.FC = () => {
  return (
    <li className={styles.tech}>
      <div className={`${styles.techImage} ${styles.htmlBox}`} aria-hidden="true">
        {'</>'}
      </div>
      HTML
    </li>
  );
};

export default TechHTML;
