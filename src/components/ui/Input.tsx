import React, { InputHTMLAttributes, ReactNode } from 'react';
import styles from './Input.module.css';

export interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  icon?: ReactNode;
  fullWidth?: boolean;
}

export const Input: React.FC<InputProps> = ({ 
  icon, 
  fullWidth = false, 
  className = '', 
  disabled, 
  ...props 
}) => {
  return (
    <div 
      className={`
        ${styles.inputWrapper} 
        ${disabled ? styles.disabled : ''} 
        ${fullWidth ? styles.fullWidth : ''} 
        ${className}
      `.trim()}
    >
      {icon && <span className={styles.icon}>{icon}</span>}
      <input className={styles.input} disabled={disabled} {...props} />
    </div>
  );
};
