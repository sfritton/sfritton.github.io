import React from 'react';
import { PageProps } from 'gatsby';
import Layout from '../../../components/Layout';
import styles from './rolling-background.module.css';

const RollingBackgroundPage: React.FC<PageProps> = () => {
  return (
    <Layout title="Rolling Background" isFullWidth>
      <h1 className={styles.title}>Rolling Background</h1>
      <div className={styles.area}>
        <div className={styles.bg}></div>
        <div className={styles.mid}></div>
        <div className={styles.fore}></div>
        <div className={styles.subject}></div>
      </div>
    </Layout>
  );
};

export default RollingBackgroundPage;
