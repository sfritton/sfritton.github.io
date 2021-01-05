import React from 'react';
import Nav from '../Nav';
import styles from './content.module.css';

interface Props {
  disableNav?: boolean;
}

const Content: React.FC<Props> = ({ children, disableNav = false }) => {
  return (
    <div className={styles.contentBorder}>
      <div className={styles.content}>
        {!disableNav && <Nav />}
        {children}
      </div>
      <div className={`${styles.borderBlock} ${styles.borderBlock1}`}></div>
      <div className={`${styles.borderBlock} ${styles.borderBlock2}`}></div>
      <div className={`${styles.borderBlock} ${styles.borderBlock3}`}></div>
      <div className={`${styles.borderBlock} ${styles.borderBlock4}`}></div>
    </div>
  );
};

export default Content;
