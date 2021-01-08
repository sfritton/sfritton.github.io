import React from 'react';
import styles from './content.module.css';

const Content: React.FC = ({ children }) => {
  return <main className={styles.main}>{children}</main>;
};

export default Content;
