import React from 'react';
import styles from './input.module.css';

interface Props {
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  value?: string;
}

const Input: React.FC<Props> = ({ value, onChange }) => {
  return (
    <div className={styles.container}>
      <input className={styles.input} spellCheck={false} value={value} onChange={onChange} />
    </div>
  );
};

export default Input;
