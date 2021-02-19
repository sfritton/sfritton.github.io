import React from 'react';
import styles from './nav.module.css';
import { InternalLink } from '../../Link';
import { ThemeToggle } from '../../ThemeToggle';

const NavLink: React.FC<{ to: string }> = ({ to, children }) => (
  <li>
    <InternalLink to={to}>{children}</InternalLink>
  </li>
);

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
          <NavLink to="/about">About</NavLink>
          <NavLink to="/projects">Projects</NavLink>
        </ul>
        <ThemeToggle />
      </nav>
    </header>
  );
};

export default Nav;
