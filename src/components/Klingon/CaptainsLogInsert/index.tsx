import React from 'react';
import styles from './loginsert.module.css';

const CaptainsLogInsert: React.FC = ({ children }) => {
  return (
    <div className={styles.container}>
      <h2>Captain's Log</h2>
      {children}
    </div>
  );
};

export default CaptainsLogInsert;
