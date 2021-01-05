import React from 'react';
import { PageProps } from 'gatsby';
import { Helmet } from 'react-helmet';
import styles from './home.module.css';

const Home: React.FC<PageProps> = () => {
  return (
    <>
      <Helmet>
        <link rel="shortcut icon" type="image/svg" href="/images/logo2.svg" />
        <title>Sam Fritton</title>
      </Helmet>
      <h1>Sam Fritton</h1>

      <div style={{ color: '#ccc' }}>
        Someday, this will be a place to show off all the cool stuff I've made. For now, enjoy
        whatever this is.
      </div>
      <div className={styles.waveWrapper}>
        <div className={styles.screenReaderOnly}>(A pulsating orb made with pure CSS)</div>
        <div className={styles.wave}></div>
        <div className={styles.wave} style={{ '--n': 1 }}></div>
        <div className={styles.wave} style={{ '--n': 2 }}></div>
        <div className={styles.wave} style={{ '--n': 3 }}></div>
      </div>
    </>
  );
};

export default Home;
