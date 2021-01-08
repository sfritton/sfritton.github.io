import React from 'react';
import { PageProps } from 'gatsby';
import styles from './home.module.css';
import { cssCustomProperties } from '../util';
import Layout from '../components/Layout';

const Home: React.FC<PageProps> = () => {
  return (
    <Layout>
      <h1>Sam Fritton</h1>

      <div style={{ color: '#ccc' }}>
        Someday, this will be a place to show off all the cool stuff I've made. For now, enjoy
        whatever this is.
      </div>
      <div className={styles.waveWrapper}>
        <div className="sr-only">(A pulsating orb made with pure CSS)</div>
        <div className={styles.wave}></div>
        <div className={styles.wave} style={cssCustomProperties({ '--n': 1 })}></div>
        <div className={styles.wave} style={cssCustomProperties({ '--n': 2 })}></div>
        <div className={styles.wave} style={cssCustomProperties({ '--n': 3 })}></div>
      </div>
    </Layout>
  );
};

export default Home;
