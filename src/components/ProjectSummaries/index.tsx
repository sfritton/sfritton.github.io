import React from 'react';
import styles from './projectsummary.module.css';

const ProjectSummaries: React.FC = ({ children }) => (
  <div className={styles.projectSummaries}>{children}</div>
);

export default ProjectSummaries;
