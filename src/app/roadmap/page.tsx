'use client';
import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { Sidebar } from '@/components/layout/Sidebar';
import { Navbar } from '@/components/layout/Navbar';
import { Button } from '@/components/ui/Button';
import { Plus, Calendar, List, Columns, CheckCircle2, Clock, Circle, ArrowRightCircle } from 'lucide-react';
import styles from './page.module.css';

export default function Roadmap() {
  const router = useRouter();
  const [loading, setLoading] = useState(true);
  const [quarter, setQuarter] = useState('Q3');

  useEffect(() => {
    if (!document.cookie.includes('auth=true')) {
      router.push('/login');
    } else {
      setLoading(false);
    }
  }, [router]);

  if (loading) return null;

  const KANBAN_DATA = {
    planned: [
      { id: 1, title: 'Contract Analyzer 2.0', desc: 'Next-gen legal document parsing and risk assessment.', domain: 'Finance', date: 'Aug 15', avatars: ['SJ', 'MR'] },
      { id: 2, title: 'Supply Chain AI', desc: 'Predictive modeling for inventory and logistics optimization.', domain: 'Sales', date: 'Sep 01', avatars: ['AK'] },
    ],
    inProgress: [
      { id: 3, title: 'Fraud Detection Net', desc: 'Real-time transaction monitoring using graph neural networks.', domain: 'Finance', date: 'Jul 20', avatars: ['LW', 'TJ', 'RB'] },
      { id: 4, title: 'Video Gen AI', desc: 'Automated video asset generation for ad campaigns.', domain: 'Marketing', date: 'Jul 30', avatars: ['SJ'] },
      { id: 8, title: 'Document OCR v4', desc: 'Upgrading the optical character recognition model for hand-written notes.', domain: 'HR', date: 'Aug 05', avatars: ['AK'] },
    ],
    beta: [
      { id: 5, title: 'Churn Predictor', desc: 'Identifying at-risk accounts before they cancel subscriptions.', domain: 'Sales', date: 'Jul 12', avatars: ['MR', 'LW'] },
    ],
    released: [
      { id: 6, title: 'Copilot for Sales v2.0', desc: 'Email drafting and sentiment analysis directly in CRM.', domain: 'Sales', date: 'Jun 28', avatars: ['AK', 'TJ'] },
      { id: 7, title: 'Resume Parser v3', desc: 'Unbiased screening and skill matching for engineering roles.', domain: 'HR', date: 'Jun 15', avatars: ['SJ'] },
    ]
  };

  const getDomainClass = (domain: string) => {
    switch (domain) {
      case 'Sales': return styles.domainSales;
      case 'HR': return styles.domainHR;
      case 'Finance': return styles.domainFinance;
      case 'Marketing': return styles.domainMarketing;
      default: return '';
    }
  };

  return (
    <div className={styles.layout}>
      <Sidebar />
      <div className={styles.mainContent}>
        <Navbar />
        <main className={styles.content}>
          
          <div className={styles.header}>
            <div className={styles.titleGroup}>
              <h1 className={styles.title}>Product Roadmap</h1>
              <p className={styles.subtitle}>Enterprise timeline and delivery schedule for all AI applications.</p>
            </div>
            
            <div className={styles.controls}>
              <Button variant="primary" style={{ marginLeft: '8px' }}><Plus size={16} style={{marginRight: '8px'}}/> Add Item</Button>
            </div>
          </div>

          <div className={styles.board}>
            
            {/* Planned Column */}
            <div className={styles.column}>
              <div className={styles.columnHeader}>
                <div className={styles.columnTitle}><Circle size={16} color="var(--text-secondary)" /> Planned</div>
                <div className={styles.columnCount}>{KANBAN_DATA.planned.length}</div>
              </div>
              <div className={styles.cardList}>
                {KANBAN_DATA.planned.map(item => (
                  <div key={item.id} className={styles.taskCard}>
                    <div className={styles.taskHeader}>
                      <span className={`${styles.taskDomain} ${getDomainClass(item.domain)}`}>{item.domain}</span>
                    </div>
                    <h4 className={styles.taskTitle}>{item.title}</h4>
                    <p className={styles.taskDesc}>{item.desc}</p>
                    <div className={styles.taskFooter}>
                      <div className={styles.taskDate}><Calendar size={12} /> {item.date}</div>
                      <div className={styles.taskAvatars}>
                        {item.avatars.map((av, i) => <div key={i} className={styles.avatar}>{av}</div>)}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* In Progress Column */}
            <div className={styles.column}>
              <div className={styles.columnHeader}>
                <div className={styles.columnTitle}><Clock size={16} color="var(--warning)" /> In Progress</div>
                <div className={styles.columnCount}>{KANBAN_DATA.inProgress.length}</div>
              </div>
              <div className={styles.cardList}>
                {KANBAN_DATA.inProgress.map(item => (
                  <div key={item.id} className={styles.taskCard}>
                    <div className={styles.taskHeader}>
                      <span className={`${styles.taskDomain} ${getDomainClass(item.domain)}`}>{item.domain}</span>
                    </div>
                    <h4 className={styles.taskTitle}>{item.title}</h4>
                    <p className={styles.taskDesc}>{item.desc}</p>
                    {/* Progress Bar */}
                    <div style={{ height: '4px', backgroundColor: 'var(--border)', borderRadius: '2px', marginBottom: '16px', overflow: 'hidden' }}>
                      <div style={{ width: '60%', height: '100%', backgroundColor: 'var(--primary)' }}></div>
                    </div>
                    <div className={styles.taskFooter}>
                      <div className={styles.taskDate}><Calendar size={12} /> {item.date}</div>
                      <div className={styles.taskAvatars}>
                        {item.avatars.map((av, i) => <div key={i} className={styles.avatar}>{av}</div>)}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Beta Column */}
            <div className={styles.column}>
              <div className={styles.columnHeader}>
                <div className={styles.columnTitle}><ArrowRightCircle size={16} color="var(--primary)" /> Beta</div>
                <div className={styles.columnCount}>{KANBAN_DATA.beta.length}</div>
              </div>
              <div className={styles.cardList}>
                {KANBAN_DATA.beta.map(item => (
                  <div key={item.id} className={styles.taskCard}>
                    <div className={styles.taskHeader}>
                      <span className={`${styles.taskDomain} ${getDomainClass(item.domain)}`}>{item.domain}</span>
                    </div>
                    <h4 className={styles.taskTitle}>{item.title}</h4>
                    <p className={styles.taskDesc}>{item.desc}</p>
                    <div className={styles.taskFooter}>
                      <div className={styles.taskDate}><Calendar size={12} /> {item.date}</div>
                      <div className={styles.taskAvatars}>
                        {item.avatars.map((av, i) => <div key={i} className={styles.avatar}>{av}</div>)}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Released Column */}
            <div className={styles.column}>
              <div className={styles.columnHeader}>
                <div className={styles.columnTitle}><CheckCircle2 size={16} color="var(--success)" /> Released</div>
                <div className={styles.columnCount}>{KANBAN_DATA.released.length}</div>
              </div>
              <div className={styles.cardList}>
                {KANBAN_DATA.released.map(item => (
                  <div key={item.id} className={styles.taskCard}>
                    <div className={styles.taskHeader}>
                      <span className={`${styles.taskDomain} ${getDomainClass(item.domain)}`}>{item.domain}</span>
                    </div>
                    <h4 className={styles.taskTitle}>{item.title}</h4>
                    <p className={styles.taskDesc}>{item.desc}</p>
                    <div className={styles.taskFooter}>
                      <div className={styles.taskDate}><Calendar size={12} /> {item.date}</div>
                      <div className={styles.taskAvatars}>
                        {item.avatars.map((av, i) => <div key={i} className={styles.avatar} style={{ backgroundColor: 'var(--success)' }}>{av}</div>)}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

          </div>

        </main>
      </div>
    </div>
  );
}
