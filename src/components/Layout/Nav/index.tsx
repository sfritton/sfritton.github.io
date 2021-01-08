import React from 'react';
import styles from './nav.module.css';
import { InternalLink } from '../../Link';

const Nav: React.FC = () => {
  return (
    <header className={styles.header}>
      <nav className={styles.nav}>
        <ul>
          <li className={styles.homeLink}>
            <InternalLink to="/">
              <img className={styles.icon} src="/images/logo.svg" alt="" aria-hidden="true" />
              <span className="sr-only">Home</span>
            </InternalLink>
          </li>
          <li>
            <InternalLink to="/about">About</InternalLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Nav;
