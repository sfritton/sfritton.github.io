import React, { useState } from 'react';
import NavContext, { Tool } from '../NavContext';
import styles from './grid.module.css';

const Grid: React.FC = ({ children }) => {
  const [currentTool, setCurrentTool] = useState<Tool>('log');

  return (
    <NavContext.Provider value={{ currentTool, setCurrentTool }}>
      <div className={styles.grid}>{children}</div>
    </NavContext.Provider>
  );
};

export default Grid;
