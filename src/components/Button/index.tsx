import React from 'react';
import styles from './button.module.css';

interface Props {
  color?: 'orange' | 'orange-light' | 'blue';
  isRound?: boolean;
  className?: string;
  onClick?: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
  disabled?: boolean;
}

const Button: React.FC<Props> = ({
  children,
  color = 'orange',
  isRound = false,
  className = '',
  onClick,
  disabled = false,
}) => {
  return (
    <button
      data-color={color}
      data-is-round={isRound}
      className={`${styles.button} ${className}`}
      type="button"
      onClick={onClick}
      disabled={disabled}
    >
      {children}
    </button>
  );
};

export default Button;
