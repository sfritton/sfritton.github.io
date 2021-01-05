import React from 'react';
import { PageProps } from 'gatsby';
import Layout from '../components/Layout';
import Link from '../components/Link';
import styles from './home.module.css';

const NotFoundPage: React.FC<PageProps> = () => {
  return (
    <Layout.Grid>
      <Layout.Header title="Page not found" stardate="46251.3" />
      <Layout.Content disableNav>
        <div className={styles.wrapper}>
          <h2>Hmm, that page doesn't exist</h2>
          Try going back to the homepage or restarting the puzzle.
          <div className={styles.buttonWrapper}>
            <Link href="/" isRound>
              Go to the homepage
            </Link>
            <Link href="/01-distress-signal" color="blue" isRound>
              Restart the puzzle
            </Link>
          </div>
        </div>
      </Layout.Content>
    </Layout.Grid>
  );
};

export default NotFoundPage;
