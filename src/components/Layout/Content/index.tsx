import React from 'react';
import styles from './content.module.css';

interface Props {
  isFullWidth?: boolean;
}

const Content: React.FC<Props> = ({ children, isFullWidth }) => {
  return (
    <main className={styles.main}>
      <div className={styles.maxWidthDiv} data-is-full-width={isFullWidth}>
        {children}
      </div>
    </main>
  );
};

export default Content;
