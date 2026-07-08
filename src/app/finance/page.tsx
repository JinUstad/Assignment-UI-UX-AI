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
import { PieChart, TrendingDown, FileText, Bot, DollarSign, Calendar, Filter, AlertCircle, CheckCircle } from 'lucide-react';
import styles from './page.module.css';

export default function FinanceDomain() {
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

  const BUDGET_DATA = {
    labels: ['Engineering', 'Sales', 'Marketing', 'Operations', 'HR'],
    datasets: [
      {
        label: 'Budget ($M)',
        data: [2.5, 1.8, 1.2, 0.9, 0.5],
        backgroundColor: '#E2E8F0', // Light gray for budget baseline
        borderRadius: 4,
      },
      {
        label: 'Actual Spend ($M)',
        data: [2.3, 1.9, 1.0, 0.85, 0.45],
        backgroundColor: '#3B82F6', // Blue for actuals
        borderRadius: 4,
      }
    ],
  };

  const CASHFLOW_DATA = {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
    datasets: [
      {
        label: 'Cash Inflow',
        data: [4.2, 4.8, 4.5, 5.1, 5.8, 6.2],
        borderColor: '#10B981',
        tension: 0.4,
      },
      {
        label: 'Cash Outflow',
        data: [3.8, 4.1, 3.9, 4.2, 4.5, 4.8],
        borderColor: '#EF4444',
        tension: 0.4,
      }
    ],
  };

  const INVOICE_COLUMNS: Column[] = [
    { key: 'vendor', header: 'Vendor' },
    { key: 'amount', header: 'Amount', render: (row) => <span className="font-semibold">{row.amount}</span> },
    { key: 'ai_check', header: 'AI Verification', render: (row) => <Badge variant={row.ai_check === 'Passed' ? 'success' : 'danger'}>{row.ai_check}</Badge> },
    { key: 'status', header: 'Status' },
  ];

  const INVOICES = [
    { vendor: 'AWS Cloud Services', amount: '$45,230.00', ai_check: 'Passed', status: 'Paid' },
    { vendor: 'Salesforce CRM', amount: '$12,500.00', ai_check: 'Passed', status: 'Pending Approval' },
    { vendor: 'Acme Marketing Agency', amount: '$8,450.00', ai_check: 'Anomaly Detected', status: 'Flagged' },
    { vendor: 'WeWork Office Space', amount: '$22,100.00', ai_check: 'Passed', status: 'Paid' },
  ];

  return (
    <div className={styles.layout}>
      <Sidebar />
      <div className={styles.mainContent}>
        <Navbar />
        <main className={styles.content}>
          
          <div className={styles.header}>
            <h1 className={styles.title}>Finance AI Domain</h1>
            <div className={styles.filters}>
              <Button variant="ghost"><Calendar size={16} style={{marginRight: '8px'}}/> Q2 2026</Button>
              <Button variant="outline"><Filter size={16} style={{marginRight: '8px'}}/> Filters</Button>
              <Button variant="primary">Export Ledger</Button>
            </div>
          </div>

          <div className={styles.kpiGrid}>
            <Card>
              <div style={{ color: 'var(--text-secondary)', fontSize: '14px', fontWeight: 600, marginBottom: '8px', textTransform: 'uppercase' }}>Total Expenses</div>
              <div style={{ fontSize: '32px', fontWeight: 700, marginBottom: '8px', color: 'var(--text-primary)' }}>$6.5M</div>
              <Badge variant="success">4.2% under budget</Badge>
            </Card>
            <Card>
              <div style={{ color: 'var(--text-secondary)', fontSize: '14px', fontWeight: 600, marginBottom: '8px', textTransform: 'uppercase' }}>Operating Margin</div>
              <div style={{ fontSize: '32px', fontWeight: 700, marginBottom: '8px', color: 'var(--text-primary)' }}>22.4%</div>
              <Badge variant="success">+1.5% YoY</Badge>
            </Card>
            <Card>
              <div style={{ color: 'var(--text-secondary)', fontSize: '14px', fontWeight: 600, marginBottom: '8px', textTransform: 'uppercase' }}>Invoice Proc. Time</div>
              <div style={{ fontSize: '32px', fontWeight: 700, marginBottom: '8px', color: 'var(--text-primary)' }}>1.2 Days</div>
              <Badge variant="info">-85% via Invoice AI</Badge>
            </Card>
            <Card>
              <div style={{ color: 'var(--text-secondary)', fontSize: '14px', fontWeight: 600, marginBottom: '8px', textTransform: 'uppercase' }}>AI Anomalies Found</div>
              <div style={{ fontSize: '32px', fontWeight: 700, marginBottom: '8px', color: 'var(--text-primary)' }}>14</div>
              <Badge variant="warning">$124k prevented</Badge>
            </Card>
          </div>

          <div className={styles.mainGrid}>
            <Card>
              <div className={styles.cardHeader}>
                <div className={styles.cardTitle}><PieChart size={20} color="var(--primary)" /> Budget vs Actual Dashboard</div>
              </div>
              <Chart type="bar" data={BUDGET_DATA} height={320} />
            </Card>

            <Card>
              <div className={styles.cardHeader}>
                <div className={styles.cardTitle}><TrendingDown size={20} color="var(--success)" /> Cashflow Analytics</div>
              </div>
              <Chart type="line" data={CASHFLOW_DATA} height={320} />
            </Card>
          </div>

          <div className={styles.bottomGrid}>
            <Card>
              <div className={styles.cardHeader}>
                <div className={styles.cardTitle}><FileText size={20} color="var(--warning)" /> Invoice AI Automation</div>
                <Button variant="ghost" size="sm">View Queue</Button>
              </div>
              <Table columns={INVOICE_COLUMNS} data={INVOICES} />
            </Card>

            <Card>
              <div className={styles.cardHeader}>
                <div className={styles.cardTitle}><Bot size={20} color="var(--primary)" /> Finance Copilot Insights</div>
              </div>
              <div className={styles.activityList}>
                <div className={styles.activityItem}>
                  <div className={styles.activityIcon} style={{ backgroundColor: 'rgba(239, 68, 68, 0.1)', color: 'var(--danger)' }}><AlertCircle size={16} /></div>
                  <div className={styles.activityContent}>
                    <h4>Duplicate Invoice Detected</h4>
                    <p>Blocked a duplicate $4,500 invoice from "Office Supplies Co" that was already paid on May 12th.</p>
                  </div>
                </div>
                <div className={styles.activityItem}>
                  <div className={styles.activityIcon} style={{ backgroundColor: 'rgba(59, 130, 246, 0.1)', color: 'var(--primary)' }}><TrendingDown size={16} /></div>
                  <div className={styles.activityContent}>
                    <h4>Budget Optimization</h4>
                    <p>Software subscription spend is up 15%. Copilot suggests consolidating licenses across Engineering and Sales.</p>
                  </div>
                </div>
                <div className={styles.activityItem}>
                  <div className={styles.activityIcon} style={{ backgroundColor: 'rgba(16, 185, 129, 0.1)', color: 'var(--success)' }}><CheckCircle size={16} /></div>
                  <div className={styles.activityContent}>
                    <h4>Tax Compliance Check</h4>
                    <p>All Q2 international transactions have been successfully audited and categorized by AI for compliance.</p>
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
