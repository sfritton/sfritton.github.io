import React, { useCallback, useState } from 'react';
import styles from './pin.module.css';

interface Props {
  value: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const PinInput: React.FC<Props> = ({ value, onChange }) => (
  <div className={styles.container}>
    <Digit wide hasFocus={value.length < 5}>
      {value.slice(0, 5)}
    </Digit>
    <Digit hasFocus={value.length === 5}>{value.slice(5, 6)}</Digit>
    <Digit hasFocus={value.length === 6}>{value.slice(6, 7)}</Digit>
    <Digit hasFocus={value.length === 7}>{value.slice(7, 8)}</Digit>
    <Digit hasFocus={value.length > 7}>{value.slice(8, 9)}</Digit>
    <input className={styles.input} onChange={onChange} value={value} />
  </div>
);
interface DigitProps {
  wide?: boolean;
  hasFocus?: boolean;
}

const Digit: React.FC<DigitProps> = ({ children, wide, hasFocus }) => {
  return (
    <div data-wide={wide} data-has-focus={hasFocus} className={styles.digit} aria-hidden="true">
      {children}
    </div>
  );
};

export default PinInput;
