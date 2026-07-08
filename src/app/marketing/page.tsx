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
import { Megaphone, SearchCode, PenTool, LineChart, Target, Calendar, Filter, Lightbulb, Zap } from 'lucide-react';
import styles from './page.module.css';

export default function MarketingDomain() {
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

  const CAMPAIGN_DATA = {
    labels: ['Social Media', 'Email Drip', 'Paid Search', 'Webinars', 'Affiliate'],
    datasets: [
      {
        label: 'ROI (%)',
        data: [180, 240, 110, 320, 150],
        backgroundColor: '#3B82F6',
        borderRadius: 4,
      },
      {
        label: 'Conversion Rate (%)',
        data: [12, 28, 8, 45, 15],
        backgroundColor: '#10B981',
        borderRadius: 4,
      }
    ],
  };

  const ENGAGEMENT_DATA = {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
    datasets: [
      {
        fill: true,
        label: 'Organic Traffic (k)',
        data: [45, 52, 58, 65, 78, 92],
        borderColor: '#8B5CF6',
        backgroundColor: 'rgba(139, 92, 246, 0.1)',
        tension: 0.4,
      }
    ],
  };

  const CONTENT_COLUMNS: Column[] = [
    { key: 'title', header: 'Content Title', render: (row) => <span className="font-semibold">{row.title}</span> },
    { key: 'type', header: 'Type' },
    { key: 'ai_score', header: 'AI Quality Score', render: (row) => <Badge variant={row.ai_score > 90 ? 'success' : 'warning'}>{row.ai_score}%</Badge> },
    { key: 'status', header: 'Status', render: (row) => <Badge variant="info">{row.status}</Badge> },
  ];

  const CONTENT = [
    { title: 'The Future of AI in Enterprise', type: 'Blog Post', ai_score: 94, status: 'Published' },
    { title: 'Q3 Product Roadmap Announcement', type: 'Email Campaign', ai_score: 88, status: 'Drafting' },
    { title: 'Customer Success Story: Acme Corp', type: 'Case Study', ai_score: 96, status: 'In Review' },
    { title: 'Top 5 Machine Learning Trends', type: 'Social Video', ai_score: 91, status: 'Published' },
  ];

  return (
    <div className={styles.layout}>
      <Sidebar />
      <div className={styles.mainContent}>
        <Navbar />
        <main className={styles.content}>
          
          <div className={styles.header}>
            <h1 className={styles.title}>Marketing AI Domain</h1>
            <div className={styles.filters}>
              <Button variant="ghost"><Calendar size={16} style={{marginRight: '8px'}}/> This Quarter</Button>
              <Button variant="outline"><Filter size={16} style={{marginRight: '8px'}}/> Filters</Button>
              <Button variant="primary">New Campaign</Button>
            </div>
          </div>

          <div className={styles.kpiGrid}>
            <Card>
              <div style={{ color: 'var(--text-secondary)', fontSize: '14px', fontWeight: 600, marginBottom: '8px', textTransform: 'uppercase' }}>Active Campaigns</div>
              <div style={{ fontSize: '32px', fontWeight: 700, marginBottom: '8px', color: 'var(--text-primary)' }}>12</div>
              <Badge variant="success">3 AI-Optimized</Badge>
            </Card>
            <Card>
              <div style={{ color: 'var(--text-secondary)', fontSize: '14px', fontWeight: 600, marginBottom: '8px', textTransform: 'uppercase' }}>SEO Traffic</div>
              <div style={{ fontSize: '32px', fontWeight: 700, marginBottom: '8px', color: 'var(--text-primary)' }}>92.4k</div>
              <Badge variant="success">+15.2% vs last month</Badge>
            </Card>
            <Card>
              <div style={{ color: 'var(--text-secondary)', fontSize: '14px', fontWeight: 600, marginBottom: '8px', textTransform: 'uppercase' }}>AI Content Gen</div>
              <div style={{ fontSize: '32px', fontWeight: 700, marginBottom: '8px', color: 'var(--text-primary)' }}>45 pcs</div>
              <Badge variant="info">Saving 120 hours</Badge>
            </Card>
            <Card>
              <div style={{ color: 'var(--text-secondary)', fontSize: '14px', fontWeight: 600, marginBottom: '8px', textTransform: 'uppercase' }}>Average ROI</div>
              <div style={{ fontSize: '32px', fontWeight: 700, marginBottom: '8px', color: 'var(--text-primary)' }}>214%</div>
              <Badge variant="success">Exceeding target</Badge>
            </Card>
          </div>

          <div className={styles.mainGrid}>
            <Card>
              <div className={styles.cardHeader}>
                <div className={styles.cardTitle}><Megaphone size={20} color="var(--primary)" /> Campaign Dashboard</div>
              </div>
              <Chart type="bar" data={CAMPAIGN_DATA} height={320} />
            </Card>

            <Card>
              <div className={styles.cardHeader}>
                <div className={styles.cardTitle}><LineChart size={20} color="var(--warning)" /> Customer Analytics</div>
              </div>
              <Chart type="line" data={ENGAGEMENT_DATA} height={320} />
            </Card>
          </div>

          <div className={styles.bottomGrid}>
            <Card>
              <div className={styles.cardHeader}>
                <div className={styles.cardTitle}><PenTool size={20} color="var(--success)" /> Content AI Gen Dashboard</div>
                <Button variant="ghost" size="sm">Generate New</Button>
              </div>
              <Table columns={CONTENT_COLUMNS} data={CONTENT} />
            </Card>

            <Card>
              <div className={styles.cardHeader}>
                <div className={styles.cardTitle}><Lightbulb size={20} color="var(--warning)" /> Marketing Insights & SEO</div>
              </div>
              <div className={styles.activityList}>
                <div className={styles.activityItem}>
                  <div className={styles.activityIcon}><SearchCode size={16} /></div>
                  <div className={styles.activityContent}>
                    <h4>SEO Ranking Alert</h4>
                    <p>Keyword "Enterprise AI Platform" reached #3 on Google. Traffic increased by 45%.</p>
                  </div>
                </div>
                <div className={styles.activityItem}>
                  <div className={styles.activityIcon} style={{ backgroundColor: 'rgba(245, 158, 11, 0.1)', color: 'var(--warning)' }}><Target size={16} /></div>
                  <div className={styles.activityContent}>
                    <h4>Audience Shift Detected</h4>
                    <p>Customer Analytics AI detected a 20% increase in enterprise engagement. Consider reallocating ad spend.</p>
                  </div>
                </div>
                <div className={styles.activityItem}>
                  <div className={styles.activityIcon} style={{ backgroundColor: 'rgba(16, 185, 129, 0.1)', color: 'var(--success)' }}><Zap size={16} /></div>
                  <div className={styles.activityContent}>
                    <h4>Campaign Optimization</h4>
                    <p>Email Drip AI successfully optimized subject lines, boosting open rates to 28%.</p>
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
