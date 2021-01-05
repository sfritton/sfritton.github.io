import React from 'react';
import { PageProps } from 'gatsby';
import Layout from '../components/Layout';
import Link from '../components/Link';
import styles from './home.module.css';
import TextLink from '../components/TextLink';
import Button from '../components/Button';

const Home: React.FC<PageProps> = () => {
  return (
    <Layout.Grid>
      <Layout.Header title="Star Trek Geocache Puzzle" stardate="46251.3" />
      <Layout.Content disableNav>
        <div className={styles.wrapper}>
          <h2>The Puzzle</h2>
          Step into the world of Star Trek as Captain Jean-Luc Picard in command of the USS
          Enterprise. Help your crew decipher a mysterious distress signal that will eventually lead
          you to a real-world geocache:{' '}
          <TextLink href="https://www.geocaching.com/geocache/GC94M12">GC94M12</TextLink>.
          <div className={styles.sectionWithButton}>
            <div>
              This puzzle is split into multiple steps. At the beginning of each step, check the
              latest log entry for a clue on what to do next. When you've solved a step, a blue
              "Continue" button will appear that will advance you to the next step:
            </div>
            <div>
              <Button color="blue" disabled>
                Continue
              </Button>
            </div>
          </div>
          <div className={styles.section}>
            <b>Note:</b> While the puzzle does have a geocache at the end, it can still be enjoyed
            by non-geocachers.
          </div>
          <div className={styles.buttonWrapper}>
            <Link href="/01-distress-signal" color="blue" isRound>
              Start the puzzle
            </Link>
          </div>
        </div>
      </Layout.Content>
    </Layout.Grid>
  );
};

export default Home;
