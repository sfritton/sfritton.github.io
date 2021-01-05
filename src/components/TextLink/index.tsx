import React from 'react';
import styles from './link.module.css';

const TextLink: React.FC<React.AnchorHTMLAttributes<HTMLAnchorElement>> = (props) => {
  return <a {...props} className={`${props.className ?? ''} ${styles.textLink}`} />;
};

export default TextLink;
