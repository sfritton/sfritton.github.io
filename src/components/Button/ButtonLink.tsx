import React from 'react';
import { GatsbyLinkProps, Link as GatsbyLink } from 'gatsby';
import styles from './button.module.css';

/** Internal links only */
export const ButtonLink: React.FC<Omit<GatsbyLinkProps<{}>, 'ref'>> = (props) => {
  return <GatsbyLink {...props} className={`${props.className ?? ''} ${styles.button}`} />;
};
