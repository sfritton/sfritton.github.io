import React from 'react';
import { Link as GatsbyLink } from 'gatsby';
import styles from './button.module.css';

interface Props {
  disabled?: boolean;
  href: string;
}

const KlingonButton: React.FC<Props> = ({ children, disabled, href }) => (
  <GatsbyLink
    type="button"
    className={styles.button}
    aria-hidden={disabled}
    to={href}
    tabIndex={disabled ? -1 : 0}
  >
    {children}
  </GatsbyLink>
);

export default KlingonButton;
