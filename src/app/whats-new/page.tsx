'use client';
import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { Sidebar } from '@/components/layout/Sidebar';
import { Navbar } from '@/components/layout/Navbar';
import { Button } from '@/components/ui/Button';
import { Badge } from '@/components/ui/Badge';
import { Star, Bug, Rocket, Megaphone, Clock } from 'lucide-react';
import styles from './page.module.css';

export default function WhatsNew() {
  const router = useRouter();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!document.cookie.includes('auth=true')) {
      router.push('/login');
    } else {
      setLoading(false);
    }
  }, [router]);

  if (loading) return null;

  const UPDATES = [
    {
      id: 1,
      type: 'release',
      date: 'July 8, 2026',
      title: 'Enterprise AI Portal v3.0 is Live!',
      tag: 'Major Release',
      content: (
        <>
          <p>We are thrilled to announce the biggest update to the Enterprise AI Portal yet. This release completely unifies our isolated domain apps into a single, cohesive ecosystem featuring a premium Microsoft Fluent inspired design system.</p>
          <ul>
            <li><strong>Dark Mode:</strong> Available everywhere, toggled instantly from the Navbar.</li>
            <li><strong>Unified Navigation:</strong> A new dynamic sidebar adapts to your RBAC permissions while keeping discovery tools like Roadmap and Reports accessible.</li>
            <li><strong>Domain Dashboards:</strong> Beautiful new layouts for Sales, Marketing, Finance, and HR complete with custom KPI tracking and dual-axis charts.</li>
          </ul>
        </>
      )
    },
    {
      id: 2,
      type: 'feature',
      date: 'July 5, 2026',
      title: 'Finance Copilot Integration',
      tag: 'New Feature',
      content: (
        <>
          <p>The Finance Domain now features a fully autonomous Finance Copilot capable of providing proactive insights.</p>
          <ul>
            <li>Automatically flags duplicate invoices across multiple vendors.</li>
            <li>Suggests cross-department budget optimizations based on historical spend analysis.</li>
            <li>Runs background compliance checks on international transactions.</li>
          </ul>
        </>
      )
    },
    {
      id: 3,
      type: 'bug',
      date: 'July 2, 2026',
      title: 'Resume Screening AI False Positives',
      tag: 'Hotfix',
      content: (
        <p>Resolved an issue where the HR Resume Screening model was incorrectly flagging internal candidates as missing prerequisite certifications. The AI match score calibration has been patched and back-tested across all Q2 applications.</p>
      )
    },
    {
      id: 4,
      type: 'announce',
      date: 'June 28, 2026',
      title: 'Upcoming Deprecation of Legacy V1 APIs',
      tag: 'Announcement',
      content: (
        <p>Please note that all legacy V1 AI endpoints will be officially deprecated by August 1st. Developers should migrate all apps to the V2 architecture available via the Product Detail pages. The V2 architecture offers a 40% reduction in latency and improved multi-lingual support.</p>
      )
    },
  ];

  const getIcon = (type: string) => {
    switch (type) {
      case 'feature': return <div className={`${styles.timelineIcon} ${styles.iconFeature}`}><Star size={16} /></div>;
      case 'release': return <div className={`${styles.timelineIcon} ${styles.iconRelease}`}><Rocket size={16} /></div>;
      case 'bug': return <div className={`${styles.timelineIcon} ${styles.iconBug}`}><Bug size={16} /></div>;
      case 'announce': return <div className={`${styles.timelineIcon} ${styles.iconAnnounce}`}><Megaphone size={16} /></div>;
      default: return <div className={styles.timelineIcon}><Star size={16} /></div>;
    }
  };

  const getBadgeVariant = (type: string): any => {
    switch (type) {
      case 'feature': return 'info';
      case 'release': return 'success';
      case 'bug': return 'danger';
      case 'announce': return 'warning';
      default: return 'info';
    }
  };

  return (
    <div className={styles.layout}>
      <Sidebar />
      <div className={styles.mainContent}>
        <Navbar />
        <main className={styles.content}>
          
          <div className={styles.header}>
            <h1 className={styles.title}>What's New</h1>
            <p className={styles.subtitle}>Stay updated with the latest releases, features, and improvements to the Enterprise AI Portal.</p>
          </div>

          <div className={styles.filterBar}>
            <Button variant="primary">All Updates</Button>
            <Button variant="ghost">Product Releases</Button>
            <Button variant="ghost">Feature Updates</Button>
            <Button variant="ghost">Bug Fixes</Button>
            <Button variant="ghost">Announcements</Button>
          </div>

          <div className={styles.timelineContainer}>
            <div className={styles.timeline}>
              {UPDATES.map(update => (
                <div key={update.id} className={styles.timelineItem}>
                  {getIcon(update.type)}
                  <div className={styles.dateBlock}>
                    <Clock size={14} /> {update.date}
                  </div>
                  <div className={styles.itemCard}>
                    <div className={styles.itemHeader}>
                      <h3 className={styles.itemTitle}>{update.title}</h3>
                      <Badge variant={getBadgeVariant(update.type)}>{update.tag}</Badge>
                    </div>
                    <div className={styles.itemContent}>
                      {update.content}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </main>
      </div>
    </div>
  );
}
