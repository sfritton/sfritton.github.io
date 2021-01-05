import React, { useContext } from 'react';
import NavButton from './NavButton';
import styles from './nav.module.css';

const Nav: React.FC = () => {
  return (
    <nav className={styles.container}>
      <NavButton label="Captain's Log" value="log" />
      <NavButton label="Universal Translator" value="translator" />
      <NavButton label="Personal Library" value="library" />
      <NavButton label="Subspace Comms" value="subspace" />
      <NavButton label="Ship-to-Ship Comms" value="comms" />
    </nav>
  );
};

export default Nav;
