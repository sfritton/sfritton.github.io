import React from 'react';
import { ExternalLink } from '../../Link';
import styles from './footer.module.css';

const Footer: React.FC = () => {
  return (
    <footer className={styles.footer}>
      <address className={styles.address}>
        <ExternalLink href="https://github.com/sfritton">GitHub</ExternalLink>
        <ExternalLink href="https://codepen.io/sfritton">CodePen</ExternalLink>
        <ExternalLink href="https://www.linkedin.com/in/samuel-fritton">LinkedIn</ExternalLink>
        <ExternalLink href="mailto:sfritton94+webdev@gmail.com">
          sfritton94+webdev@gmail.com
        </ExternalLink>
      </address>
    </footer>
  );
};

export default Footer;
