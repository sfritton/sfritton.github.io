import React from 'react';
import styles from './techstack.module.css';

interface TechProps {
  className?: string;
  src: string;
}

export const Tech: React.FC<TechProps> = ({ className = '', src, children }) => {
  return (
    <li className={`${className} ${styles.tech}`}>
      <img src={src} className={styles.techImage} alt="" />
      {children}
    </li>
  );
};

const TechStack: React.FC = ({ children }) => {
  return <ul className={styles.techStack}>{children}</ul>;
};

export default TechStack;
