import React from 'react';
import { Helmet } from 'react-helmet';
import styles from './header.module.css';

interface Props {
  title: string;
  stardate: string;
}

const Header: React.FC<Props> = ({ title, stardate }) => {
  return (
    <div className={styles.headerBorder}>
      <Helmet>
        <link rel="shortcut icon" type="image/svg" href="/picard-geocache/images/starfleet.svg" />
        <title>{title}</title>
      </Helmet>
      <div className={styles.header}>
        <h1>{title}</h1>
      </div>
      <div className={styles.borderBlockLeft}>{stardate}</div>
      <div className={`${styles.borderBlock} ${styles.borderBlock1}`}></div>
      <div className={`${styles.borderBlock} ${styles.borderBlock2}`}></div>
      <div className={`${styles.borderBlock} ${styles.borderBlock3}`}></div>
      <div className={`${styles.borderBlock} ${styles.borderBlock4}`}></div>
    </div>
  );
};

export default Header;
