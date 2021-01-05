import React from 'react';
import styles from './library.module.css';

interface Props {
  lineNumber: number;
}

const Line: React.FC<Props> = ({ children, lineNumber }) => {
  const isFive = lineNumber % 5 === 0;

  return (
    <div className={styles.line}>
      <div className={styles.lineNumber} data-is-five={isFive}>
        {lineNumber}
      </div>
      {children}
    </div>
  );
};

export default Line;
