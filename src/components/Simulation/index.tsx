import React from 'react';
import { SimulationProps } from './Simulation';
import loadable from '@loadable/component';

const LoadableSimulation = loadable(() => import('./Simulation'));

export const Simulation: React.FC<SimulationProps> = (props) => <LoadableSimulation {...props} />;
