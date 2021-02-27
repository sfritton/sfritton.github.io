import React, { forwardRef } from 'react';
import styles from './button.module.css';

export const Button = forwardRef<HTMLButtonElement, React.ButtonHTMLAttributes<HTMLButtonElement>>(
  ({ children, ...props }, ref) => {
    return (
      <button ref={ref} type="button" {...props} className={styles.button}>
        {children}
      </button>
    );
  },
);
