import React, { useContext } from 'react';
import Button from '../../Button';
import NavContext, { Tool } from '../NavContext';
import styles from './nav.module.css';

interface Props {
  label: string;
  value: Tool;
}

const NavButton: React.FC<Props> = ({ label, value }) => {
  const { currentTool, setCurrentTool } = useContext(NavContext);

  return (
    <Button
      color={value === currentTool ? 'blue' : 'orange-light'}
      className={styles.navButton}
      onClick={() => setCurrentTool(value)}
    >
      {label}
    </Button>
  );
};

export default NavButton;
