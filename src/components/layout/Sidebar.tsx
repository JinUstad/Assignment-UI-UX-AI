import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Home, Briefcase, FileText, PieChart, Users, Map, Star, FileBarChart, Settings, Activity, LogOut, Radio } from 'lucide-react';
import styles from './Sidebar.module.css';

export const Sidebar = () => {
  const pathname = usePathname();

  return (
    <aside className={styles.sidebar}>
      <div className={styles.logo}>
        <Activity size={24} color="var(--primary)" />
        <span style={{ color: 'var(--text-primary)' }}>AI Portal</span>
      </div>
      
      <nav className={styles.nav}>
        <Link href="/" style={{ textDecoration: 'none' }}>
          <div className={`${styles.navItem} ${pathname === '/' ? styles.active : ''}`}>
            <Home size={20} />
            Home
          </div>
        </Link>
        
        <div style={{ padding: '16px 16px 8px', fontSize: '12px', fontWeight: 'bold', color: 'var(--text-secondary)', textTransform: 'uppercase', letterSpacing: '0.5px' }}>
          Domains
        </div>
        <Link href="/sales" style={{ textDecoration: 'none' }}>
          <div className={`${styles.navItem} ${pathname === '/sales' ? styles.active : ''}`}>
            <Briefcase size={20} /> Sales
          </div>
        </Link>
        <Link href="/marketing" style={{ textDecoration: 'none' }}>
          <div className={`${styles.navItem} ${pathname === '/marketing' ? styles.active : ''}`}>
            <FileText size={20} /> Marketing
          </div>
        </Link>
        <Link href="/finance" style={{ textDecoration: 'none' }}>
          <div className={`${styles.navItem} ${pathname === '/finance' ? styles.active : ''}`}>
            <PieChart size={20} /> Finance
          </div>
        </Link>
        <Link href="/hr" style={{ textDecoration: 'none' }}>
          <div className={`${styles.navItem} ${pathname === '/hr' ? styles.active : ''}`}>
            <Users size={20} /> HR
          </div>
        </Link>

        <div style={{ padding: '16px 16px 8px', fontSize: '12px', fontWeight: 'bold', color: 'var(--text-secondary)', textTransform: 'uppercase', letterSpacing: '0.5px' }}>
          Discover
        </div>
        <Link href="/whats-new" style={{ textDecoration: 'none' }}>
          <div className={`${styles.navItem} ${pathname === '/whats-new' ? styles.active : ''}`}>
            <Radio size={20} /> What's New
          </div>
        </Link>
        <Link href="/pitch" style={{ textDecoration: 'none' }}>
          <div className={`${styles.navItem} ${pathname === '/pitch' ? styles.active : ''}`}>
            <FileBarChart size={20} /> Pitch Deck
          </div>
        </Link>
        <Link href="/roadmap" style={{ textDecoration: 'none' }}>
          <div className={`${styles.navItem} ${pathname === '/roadmap' ? styles.active : ''}`}>
            <Map size={20} /> Roadmap
          </div>
        </Link>
        <div className={styles.navItem}><Star size={20} /> Favorites</div>
        <div className={styles.navItem}><FileBarChart size={20} /> Reports</div>

        <div style={{ padding: '16px 16px 8px', fontSize: '12px', fontWeight: 'bold', color: 'var(--text-secondary)', textTransform: 'uppercase', letterSpacing: '0.5px' }}>
          Administration
        </div>
        <Link href="/admin" style={{ textDecoration: 'none' }}>
          <div className={`${styles.navItem} ${pathname === '/admin' ? styles.active : ''}`}>
            <Settings size={20} /> Admin Console
          </div>
        </Link>
      </nav>

      <div className={styles.footer}>
        <div className={styles.navItem} onClick={() => {
          document.cookie = "auth=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
          document.cookie = "role=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
          document.cookie = "name=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
          window.location.href = '/login';
        }}>
          <LogOut size={20} />
          Logout
        </div>
      </div>
    </aside>
  );
};
