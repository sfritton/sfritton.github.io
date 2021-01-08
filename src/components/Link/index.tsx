import React from 'react';
import { GatsbyLinkProps, Link as GatsbyLink } from 'gatsby';
import styles from './link.module.css';

export const ExternalLink: React.FC<React.AnchorHTMLAttributes<HTMLAnchorElement>> = (props) => {
  return <a {...props} className={`${props.className ?? ''} ${styles.link}`} />;
};

export const InternalLink: React.FC<Omit<GatsbyLinkProps<{}>, 'ref'>> = (props) => {
  return <GatsbyLink {...props} className={`${props.className ?? ''} ${styles.link}`} />;
};
