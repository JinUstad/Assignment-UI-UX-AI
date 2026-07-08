import React, { HTMLAttributes } from 'react';
import styles from './Badge.module.css';

interface BadgeProps extends HTMLAttributes<HTMLSpanElement> {
  variant?: 'success' | 'warning' | 'danger' | 'info';
}

export const Badge: React.FC<BadgeProps> = ({ children, variant = 'info', className = '', ...props }) => (
  <span className={`${styles.badge} ${styles[variant]} ${className}`} {...props}>
    {children}
  </span>
);
