import React, { forwardRef } from 'react';
import styles from './select.module.css';

interface SelectProps extends React.SelectHTMLAttributes<HTMLSelectElement> {
  label: string;
}

export const Select = forwardRef<HTMLSelectElement, SelectProps>(
  ({ children, label, ...props }, ref) => {
    return (
      <label className={styles.select}>
        <span className={styles.label}>{label}</span>
        <select ref={ref} {...props}>
          {children}
        </select>
      </label>
    );
  },
);
