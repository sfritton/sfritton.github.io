import React from 'react';
import loadable from '@loadable/component';
import { SimulationProps } from './Simulation';
import styles from './simulation.module.css';

const LoadableSimulation = loadable(() => import('./Simulation'));

export const Simulation: React.FC<SimulationProps> = (props) => (
  <div className={styles.simulation}>
    <LoadableSimulation {...props} />
  </div>
);
