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
import { Users, FileSearch, UserCheck, TrendingUp, Calendar, Filter, Clock, AlertTriangle, ShieldCheck } from 'lucide-react';
import styles from './page.module.css';

export default function HRDomain() {
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

  const RECRUITMENT_DATA = {
    labels: ['Applied', 'Screened (AI)', 'Interview', 'Offer', 'Hired'],
    datasets: [
      {
        label: 'Candidates (Last 30 Days)',
        data: [1250, 420, 115, 32, 28],
        backgroundColor: '#8B5CF6',
        borderRadius: 4,
      }
    ],
  };

  const PERFORMANCE_DATA = {
    labels: ['Q1', 'Q2', 'Q3', 'Q4'],
    datasets: [
      {
        fill: true,
        label: 'Employee Satisfaction Score',
        data: [7.2, 7.5, 7.8, 8.4],
        borderColor: '#10B981',
        backgroundColor: 'rgba(16, 185, 129, 0.1)',
        tension: 0.4,
      },
      {
        fill: false,
        label: 'Retention Rate (%)',
        data: [92, 91.5, 93, 95],
        borderColor: '#3B82F6',
        borderDash: [5, 5],
        tension: 0.4,
      }
    ],
  };

  const RESUME_COLUMNS: Column[] = [
    { key: 'candidate', header: 'Candidate Name', render: (row) => <span className="font-semibold">{row.candidate}</span> },
    { key: 'role', header: 'Applied Role' },
    { key: 'match_score', header: 'AI Match Score', render: (row) => <Badge variant={row.match_score > 90 ? 'success' : row.match_score > 75 ? 'warning' : 'danger'}>{row.match_score}%</Badge> },
    { key: 'status', header: 'Status' },
  ];

  const RESUMES = [
    { candidate: 'Alexander Chen', role: 'Senior Data Scientist', match_score: 96, status: 'Fast-Tracked' },
    { candidate: 'Maria Garcia', role: 'Product Manager', match_score: 88, status: 'Screening' },
    { candidate: 'James Wilson', role: 'Frontend Developer', match_score: 72, status: 'Rejected by AI' },
    { candidate: 'Priya Patel', role: 'Marketing Director', match_score: 92, status: 'Interview Scheduled' },
  ];

  return (
    <div className={styles.layout}>
      <Sidebar />
      <div className={styles.mainContent}>
        <Navbar />
        <main className={styles.content}>
          
          <div className={styles.header}>
            <h1 className={styles.title}>HR & Talent AI Domain</h1>
            <div className={styles.filters}>
              <Button variant="ghost"><Calendar size={16} style={{marginRight: '8px'}}/> This Month</Button>
              <Button variant="outline"><Filter size={16} style={{marginRight: '8px'}}/> Filters</Button>
              <Button variant="primary">Export HR Report</Button>
            </div>
          </div>

          <div className={styles.kpiGrid}>
            <Card>
              <div style={{ color: 'var(--text-secondary)', fontSize: '14px', fontWeight: 600, marginBottom: '8px', textTransform: 'uppercase' }}>Total Employees</div>
              <div style={{ fontSize: '32px', fontWeight: 700, marginBottom: '8px', color: 'var(--text-primary)' }}>1,248</div>
              <Badge variant="success">+12 this month</Badge>
            </Card>
            <Card>
              <div style={{ color: 'var(--text-secondary)', fontSize: '14px', fontWeight: 600, marginBottom: '8px', textTransform: 'uppercase' }}>Open Requisitions</div>
              <div style={{ fontSize: '32px', fontWeight: 700, marginBottom: '8px', color: 'var(--text-primary)' }}>34</div>
              <Badge variant="warning">5 critical roles</Badge>
            </Card>
            <Card>
              <div style={{ color: 'var(--text-secondary)', fontSize: '14px', fontWeight: 600, marginBottom: '8px', textTransform: 'uppercase' }}>Time to Hire</div>
              <div style={{ fontSize: '32px', fontWeight: 700, marginBottom: '8px', color: 'var(--text-primary)' }}>18 Days</div>
              <Badge variant="success">-12 days via AI</Badge>
            </Card>
            <Card>
              <div style={{ color: 'var(--text-secondary)', fontSize: '14px', fontWeight: 600, marginBottom: '8px', textTransform: 'uppercase' }}>AI Screening Accuracy</div>
              <div style={{ fontSize: '32px', fontWeight: 700, marginBottom: '8px', color: 'var(--text-primary)' }}>94.2%</div>
              <Badge variant="success">Highly reliable</Badge>
            </Card>
          </div>

          <div className={styles.mainGrid}>
            <Card>
              <div className={styles.cardHeader}>
                <div className={styles.cardTitle}><Users size={20} color="var(--primary)" /> Recruitment Dashboard</div>
              </div>
              <Chart type="bar" data={RECRUITMENT_DATA} height={320} />
            </Card>

            <Card>
              <div className={styles.cardHeader}>
                <div className={styles.cardTitle}><TrendingUp size={20} color="var(--success)" /> Performance Analytics</div>
              </div>
              <Chart type="line" data={PERFORMANCE_DATA} height={320} />
            </Card>
          </div>

          <div className={styles.bottomGrid}>
            <Card>
              <div className={styles.cardHeader}>
                <div className={styles.cardTitle}><FileSearch size={20} color="var(--warning)" /> Resume Screening AI</div>
                <Button variant="ghost" size="sm">View All Candidates</Button>
              </div>
              <Table columns={RESUME_COLUMNS} data={RESUMES} />
            </Card>

            <Card>
              <div className={styles.cardHeader}>
                <div className={styles.cardTitle}><UserCheck size={20} color="var(--primary)" /> Employee Dashboard & Attendance</div>
              </div>
              <div className={styles.activityList}>
                <div className={styles.activityItem}>
                  <div className={styles.activityIcon} style={{ backgroundColor: 'rgba(239, 68, 68, 0.1)', color: 'var(--danger)' }}><AlertTriangle size={16} /></div>
                  <div className={styles.activityContent}>
                    <h4>Flight Risk Detected</h4>
                    <p>Performance AI flagged a high flight risk for 3 senior engineers based on recent engagement metrics.</p>
                  </div>
                </div>
                <div className={styles.activityItem}>
                  <div className={styles.activityIcon} style={{ backgroundColor: 'rgba(245, 158, 11, 0.1)', color: 'var(--warning)' }}><Clock size={16} /></div>
                  <div className={styles.activityContent}>
                    <h4>Attendance Anomaly</h4>
                    <p>Unusual login patterns detected for remote workers in the EMEA region. Auto-generating attendance report.</p>
                  </div>
                </div>
                <div className={styles.activityItem}>
                  <div className={styles.activityIcon} style={{ backgroundColor: 'rgba(16, 185, 129, 0.1)', color: 'var(--success)' }}><ShieldCheck size={16} /></div>
                  <div className={styles.activityContent}>
                    <h4>Compliance Training Complete</h4>
                    <p>98% of employees have completed the mandatory Q2 security training. HR Bot is following up with the remaining 2%.</p>
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
