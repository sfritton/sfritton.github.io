import React from 'react';
import Wave from '../../components/Wave';
import { InternalLink } from '../../components/Link';
import styles from './404.module.css';

export const FourOhFour: React.FC = () => {
  return (
    <div className={styles.content}>
      <h1>Page not found</h1>

      <div>
        Whoops, that&#39;s not a real page. Try checking out my{' '}
        <InternalLink to="/projects">projects</InternalLink> or head back to the{' '}
        <InternalLink to="/">home page</InternalLink>.
        <div className={styles.line2}>
          Or if you want, stay here for a bit and watch this calming circle.
        </div>
        <div className="sr-only">(A pulsating orb made with pure CSS)</div>
      </div>
      <Wave />
    </div>
  );
};
