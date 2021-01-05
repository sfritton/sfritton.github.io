import React from 'react';
import styles from './log.module.css';

interface Props {
  stardate: string;
}

const LogEntry: React.FC<Props> = ({ children, stardate }) => {
  const stardateNumber = Number(stardate);
  return (
    <section className={styles.section}>
      <h3>{isNaN(stardateNumber) ? stardate : `Stardate ${stardate}`}</h3>
      {children}
    </section>
  );
};

export default LogEntry;
