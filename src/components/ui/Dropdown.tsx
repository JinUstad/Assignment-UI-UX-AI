import React, { SelectHTMLAttributes } from 'react';
import { ChevronDown } from 'lucide-react';
import styles from './Dropdown.module.css';

interface DropdownProps extends SelectHTMLAttributes<HTMLSelectElement> {
  label?: string;
  options: { value: string; label: string }[];
}

export const Dropdown: React.FC<DropdownProps> = ({ label, options, className = '', ...props }) => {
  return (
    <div className={`${styles.dropdownWrapper} ${className}`}>
      {label && <label className={styles.label}>{label}</label>}
      <div className={styles.selectContainer}>
        <select className={styles.select} {...props}>
          {options.map((opt) => (
            <option key={opt.value} value={opt.value}>
              {opt.label}
            </option>
          ))}
        </select>
        <ChevronDown size={16} className={styles.icon} />
      </div>
    </div>
  );
};
