import React from 'react';
import styles from './link.module.css';

const Link: React.FC<React.AnchorHTMLAttributes<HTMLAnchorElement>> = (props) => {
  return <a {...props} className={`${props.className ?? ''} ${styles.link}`} />;
};

export default Link;
