import React, { HTMLAttributes } from 'react';
import styles from './Card.module.css';

export const Card: React.FC<HTMLAttributes<HTMLDivElement>> = ({ children, className = '', ...props }) => (
  <div className={`${styles.card} ${className}`} {...props}>
    {children}
  </div>
);
