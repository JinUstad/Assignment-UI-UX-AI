'use client';
import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { Sidebar } from '@/components/layout/Sidebar';
import { Navbar } from '@/components/layout/Navbar';
import { Card } from '@/components/ui/Card';
import { Button } from '@/components/ui/Button';
import { Badge } from '@/components/ui/Badge';
import { Table, Column } from '@/components/ui/Table';
import { Chart } from '@/components/ui/Chart';
import { Briefcase, TrendingUp, Users, Target, Activity, DollarSign, Calendar, Filter } from 'lucide-react';
import styles from './page.module.css';

export default function SalesDomain() {
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

  const REVENUE_DATA = {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
    datasets: [
      {
        fill: true,
        label: 'Actual Revenue ($M)',
        data: [1.2, 1.4, 1.3, 1.8, 2.1, 2.4],
        borderColor: '#2563EB',
        backgroundColor: 'rgba(37, 99, 235, 0.1)',
        tension: 0.4,
      },
      {
        fill: false,
        label: 'Forecast AI ($M)',
        data: [1.1, 1.3, 1.5, 1.7, 2.0, 2.5],
        borderColor: '#10B981',
        borderDash: [5, 5],
        tension: 0.4,
      }
    ],
  };

  const PIPELINE_DATA = {
    labels: ['Discovery', 'Proposal', 'Negotiation', 'Closed Won'],
    datasets: [
      {
        label: 'Pipeline Value ($M)',
        data: [4.5, 3.2, 1.8, 2.4],
        backgroundColor: ['#3B82F6', '#8B5CF6', '#F59E0B', '#10B981'],
        borderRadius: 4,
      },
    ],
  };

  const LEAD_COLUMNS: Column[] = [
    { key: 'name', header: 'Account Name', render: (row) => <span className="font-semibold">{row.name}</span> },
    { key: 'score', header: 'AI Score', render: (row) => <Badge variant={row.score > 90 ? 'success' : 'warning'}>{row.score}%</Badge> },
    { key: 'value', header: 'Est. Value' },
    { key: 'owner', header: 'Owner' },
  ];

  const LEADS = [
    { name: 'Acme Corp Global', score: 95, value: '$125k', owner: 'Sarah J.' },
    { name: 'TechFlow Systems', score: 91, value: '$85k', owner: 'Mike T.' },
    { name: 'CloudScale Inc', score: 78, value: '$240k', owner: 'Sarah J.' },
    { name: 'Nexus Dynamics', score: 72, value: '$45k', owner: 'David W.' },
  ];

  return (
    <div className={styles.layout}>
      <Sidebar />
      <div className={styles.mainContent}>
        <Navbar />
        <main className={styles.content}>
          
          <div className={styles.header}>
            <h1 className={styles.title}>Sales AI Domain</h1>
            <div className={styles.filters}>
              <Button variant="ghost"><Calendar size={16} style={{marginRight: '8px'}}/> This Quarter</Button>
              <Button variant="outline"><Filter size={16} style={{marginRight: '8px'}}/> Filters</Button>
              <Button variant="primary">Generate Report</Button>
            </div>
          </div>

          <div className={styles.kpiGrid}>
            <Card>
              <div style={{ color: 'var(--text-secondary)', fontSize: '14px', fontWeight: 600, marginBottom: '8px', textTransform: 'uppercase' }}>Total Revenue</div>
              <div style={{ fontSize: '32px', fontWeight: 700, marginBottom: '8px', color: 'var(--text-primary)' }}>$2.4M</div>
              <Badge variant="success">+18.2% vs last quarter</Badge>
            </Card>
            <Card>
              <div style={{ color: 'var(--text-secondary)', fontSize: '14px', fontWeight: 600, marginBottom: '8px', textTransform: 'uppercase' }}>Pipeline Value</div>
              <div style={{ fontSize: '32px', fontWeight: 700, marginBottom: '8px', color: 'var(--text-primary)' }}>$11.9M</div>
              <Badge variant="success">+5.4% vs last quarter</Badge>
            </Card>
            <Card>
              <div style={{ color: 'var(--text-secondary)', fontSize: '14px', fontWeight: 600, marginBottom: '8px', textTransform: 'uppercase' }}>AI Win Prediction</div>
              <div style={{ fontSize: '32px', fontWeight: 700, marginBottom: '8px', color: 'var(--text-primary)' }}>64%</div>
              <Badge variant="warning">Trending flat</Badge>
            </Card>
            <Card>
              <div style={{ color: 'var(--text-secondary)', fontSize: '14px', fontWeight: 600, marginBottom: '8px', textTransform: 'uppercase' }}>Lead Conversion</div>
              <div style={{ fontSize: '32px', fontWeight: 700, marginBottom: '8px', color: 'var(--text-primary)' }}>28.5%</div>
              <Badge variant="success">+2.1% from AI Scoring</Badge>
            </Card>
          </div>

          <div className={styles.mainGrid}>
            <Card>
              <div className={styles.cardHeader}>
                <div className={styles.cardTitle}><TrendingUp size={20} color="var(--primary)" /> Revenue Dashboard & Forecast AI</div>
              </div>
              <Chart type="line" data={REVENUE_DATA} height={320} />
            </Card>

            <Card>
              <div className={styles.cardHeader}>
                <div className={styles.cardTitle}><Target size={20} color="var(--warning)" /> Pipeline Dashboard</div>
              </div>
              <Chart type="bar" data={PIPELINE_DATA} height={320} />
            </Card>
          </div>

          <div className={styles.bottomGrid}>
            <Card>
              <div className={styles.cardHeader}>
                <div className={styles.cardTitle}><Activity size={20} color="var(--success)" /> Lead Prediction AI</div>
                <Button variant="ghost" size="sm">View All</Button>
              </div>
              <Table columns={LEAD_COLUMNS} data={LEADS} />
            </Card>

            <Card>
              <div className={styles.cardHeader}>
                <div className={styles.cardTitle}><Users size={20} color="var(--primary)" /> CRM Recent Activity</div>
              </div>
              <div className={styles.activityList}>
                <div className={styles.activityItem}>
                  <div className={styles.activityIcon}><Briefcase size={16} /></div>
                  <div className={styles.activityContent}>
                    <h4>Deal Closed: Acme Corp Global</h4>
                    <p>Sarah J. closed the $125k deal. AI predicted this closure with 95% confidence.</p>
                    <span style={{ fontSize: '11px', color: 'var(--text-secondary)', marginTop: '4px', display: 'block' }}>2 hours ago</span>
                  </div>
                </div>
                <div className={styles.activityItem}>
                  <div className={styles.activityIcon} style={{ backgroundColor: 'rgba(245, 158, 11, 0.1)', color: 'var(--warning)' }}><Activity size={16} /></div>
                  <div className={styles.activityContent}>
                    <h4>Risk Alert: CloudScale Inc</h4>
                    <p>Sentiment AI detected negative signals in the latest email thread.</p>
                    <span style={{ fontSize: '11px', color: 'var(--text-secondary)', marginTop: '4px', display: 'block' }}>5 hours ago</span>
                  </div>
                </div>
                <div className={styles.activityItem}>
                  <div className={styles.activityIcon} style={{ backgroundColor: 'rgba(16, 185, 129, 0.1)', color: 'var(--success)' }}><DollarSign size={16} /></div>
                  <div className={styles.activityContent}>
                    <h4>New High-Value Lead</h4>
                    <p>Lead Scoring AI identified Nexus Dynamics as a top priority target.</p>
                    <span style={{ fontSize: '11px', color: 'var(--text-secondary)', marginTop: '4px', display: 'block' }}>Yesterday</span>
                  </div>
                </div>
              </div>
            </Card>
          </div>

        </main>
      </div>
    </div>
  );
}
