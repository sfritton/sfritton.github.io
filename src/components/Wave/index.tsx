import React from 'react';
import styles from './wave.module.css';
import { cssCustomProperties } from '../../util';

const Wave: React.FC = () => {
  return (
    <div className={styles.msBorder}>
      <div className={styles.waveWrapper}>
        <div className={styles.wave}></div>
        <div className={styles.wave} style={cssCustomProperties({ '--n': 1 })}></div>
        <div className={styles.wave} style={cssCustomProperties({ '--n': 2 })}></div>
        <div className={styles.wave} style={cssCustomProperties({ '--n': 3 })}></div>
      </div>
    </div>
  );
};

export default Wave;
