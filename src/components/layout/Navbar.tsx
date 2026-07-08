'use client';
import React, { useEffect, useState } from 'react';
import { Bell, Search, MessageSquare, Moon, Sun } from 'lucide-react';
import { Input } from '../ui/Input';
import styles from './Navbar.module.css';

export const Navbar = () => {
  const [name, setName] = useState('Gulm');
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    const cookies = document.cookie.split(';');
    const nameCookie = cookies.find(c => c.trim().startsWith('name='));
    if (nameCookie) {
      setName(nameCookie.split('=')[1]);
    }

    if (document.body.classList.contains('dark')) {
      setIsDark(true);
    }
  }, []);

  const toggleDarkMode = () => {
    if (isDark) {
      document.body.classList.remove('dark');
      setIsDark(false);
    } else {
      document.body.classList.add('dark');
      setIsDark(true);
    }
  };

  return (
    <header className={styles.navbar}>
      <div className={styles.search}>
        <Input placeholder="AI Search: Find models, data, reports..." icon={<Search size={18} />} fullWidth />
      </div>
      
      <div className={styles.actions}>
        <button onClick={toggleDarkMode} className={styles.iconBtn} title="Toggle Dark Mode">
          {isDark ? <Sun size={20} /> : <Moon size={20} />}
        </button>
        <button className={styles.iconBtn} title="Messages">
          <MessageSquare size={20} />
        </button>
        <button className={styles.iconBtn} title="Notifications">
          <Bell size={20} />
        </button>
        <div className={styles.profile}>
          <div className={styles.avatar}>{name.substring(0, 2).toUpperCase()}</div>
          {name}
        </div>
      </div>
    </header>
  );
};
