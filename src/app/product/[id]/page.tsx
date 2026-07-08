'use client';
import React, { useEffect, useState } from 'react';
import { useRouter, useParams } from 'next/navigation';
import Link from 'next/link';
import { Sidebar } from '@/components/layout/Sidebar';
import { Navbar } from '@/components/layout/Navbar';
import { Card } from '@/components/ui/Card';
import { Button } from '@/components/ui/Button';
import { Badge } from '@/components/ui/Badge';
import { Chart } from '@/components/ui/Chart';
import { Play, FileCode, History, BarChart2, BookOpen, ChevronRight, Activity, Terminal, ExternalLink } from 'lucide-react';
import styles from './page.module.css';

export default function ProductDetail() {
  const router = useRouter();
  const params = useParams();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!document.cookie.includes('auth=true')) {
      router.push('/login');
    } else {
      setLoading(false);
    }
  }, [router]);

  if (loading) return null;

  // Mock product data based on ID or fallback
  const productTitle = params?.id === 'copilot' ? 'Copilot for Sales v2.0' : 'Sentiment Analysis AI';
  const productDept = params?.id === 'copilot' ? 'Sales' : 'Marketing';

  const USAGE_DATA = {
    labels: ['12am', '4am', '8am', '12pm', '4pm', '8pm'],
    datasets: [
      {
        fill: true,
        label: 'API Requests (k)',
        data: [12, 8, 45, 89, 72, 34],
        borderColor: '#2563EB',
        backgroundColor: 'rgba(37, 99, 235, 0.1)',
        tension: 0.4,
      }
    ],
  };

  return (
    <div className={styles.layout}>
      <Sidebar />
      <div className={styles.mainContent}>
        <Navbar />
        <main className={styles.content}>
          
          {/* Breadcrumb */}
          <div className={styles.breadcrumb}>
            <Link href="/">Home</Link>
            <ChevronRight size={14} />
            <Link href={`/${productDept.toLowerCase()}`}>{productDept}</Link>
            <ChevronRight size={14} />
            <span style={{ color: 'var(--text-primary)', fontWeight: 500 }}>{productTitle}</span>
          </div>

          {/* Large Header */}
          <div className={styles.header}>
            <div className={styles.titleGroup}>
              <div className={styles.titleRow}>
                <h1 className={styles.title}>{productTitle}</h1>
                <Badge variant="success">Active</Badge>
                <Badge variant="info">v2.1.4</Badge>
              </div>
              <p className={styles.description}>
                An enterprise-grade generative AI model fine-tuned for {productDept.toLowerCase()} workflows. It provides real-time predictive insights, semantic search capabilities, and automated reporting.
              </p>
            </div>
            <div className={styles.headerActions}>
              <Button variant="outline"><Terminal size={16} style={{marginRight: '8px'}}/> API Keys</Button>
              <Button variant="primary"><Play size={16} style={{marginRight: '8px'}}/> Launch Dashboard</Button>
            </div>
          </div>

          <div className={styles.topGrid}>
            {/* Meta Info */}
            <Card>
              <div className={styles.cardHeader}>
                <div className={styles.cardTitle}><Activity size={20} color="var(--primary)" /> Product Details</div>
              </div>
              <div className={styles.metaList}>
                <div className={styles.metaItem}>
                  <span className={styles.metaLabel}>Product Owner</span>
                  <span className={styles.metaValue}>Dr. Sarah Jenkins</span>
                </div>
                <div className={styles.metaItem}>
                  <span className={styles.metaLabel}>Department</span>
                  <span className={styles.metaValue}>{productDept} Data Science</span>
                </div>
                <div className={styles.metaItem}>
                  <span className={styles.metaLabel}>Current Version</span>
                  <span className={styles.metaValue}>2.1.4 (Stable)</span>
                </div>
                <div className={styles.metaItem}>
                  <span className={styles.metaLabel}>Last Updated</span>
                  <span className={styles.metaValue}>July 4, 2026</span>
                </div>
                <div className={styles.metaItem}>
                  <span className={styles.metaLabel}>Deployment Target</span>
                  <span className={styles.metaValue}>AWS us-east-1 (EKS)</span>
                </div>
              </div>
            </Card>

            {/* Documentation Links */}
            <Card>
              <div className={styles.cardHeader}>
                <div className={styles.cardTitle}><BookOpen size={20} color="var(--success)" /> Documentation</div>
              </div>
              <div className={styles.docList}>
                <Link href="#" className={styles.docLink}>
                  <FileCode size={18} color="var(--primary)" />
                  API Integration Guide (Swagger)
                  <ExternalLink size={14} style={{ marginLeft: 'auto', color: 'var(--text-secondary)' }} />
                </Link>
                <Link href="#" className={styles.docLink}>
                  <FileCode size={18} color="var(--primary)" />
                  Model Architecture & Weights (.pdf)
                  <ExternalLink size={14} style={{ marginLeft: 'auto', color: 'var(--text-secondary)' }} />
                </Link>
                <Link href="#" className={styles.docLink}>
                  <FileCode size={18} color="var(--primary)" />
                  Data Privacy & Compliance Audit
                  <ExternalLink size={14} style={{ marginLeft: 'auto', color: 'var(--text-secondary)' }} />
                </Link>
              </div>
            </Card>
          </div>

          <div className={styles.middleGrid}>
            {/* Usage Analytics */}
            <Card>
              <div className={styles.cardHeader}>
                <div className={styles.cardTitle}><BarChart2 size={20} color="var(--warning)" /> Usage Analytics (24h)</div>
                <Button variant="ghost" size="sm">View Full Logs</Button>
              </div>
              <Chart type="line" data={USAGE_DATA} height={300} />
            </Card>

            {/* Recent Updates */}
            <Card>
              <div className={styles.cardHeader}>
                <div className={styles.cardTitle}><History size={20} color="var(--primary)" /> Recent Updates</div>
              </div>
              <div className={styles.timeline}>
                <div className={styles.timelineItem}>
                  <div className={styles.timelineDate}>v2.1.4 - July 4, 2026</div>
                  <div className={styles.timelineContent}>Optimized inference latency by 12%.</div>
                </div>
                <div className={styles.timelineItem}>
                  <div className={styles.timelineDate}>v2.1.3 - June 28, 2026</div>
                  <div className={styles.timelineContent}>Patched minor security vulnerability in API gateway.</div>
                </div>
                <div className={styles.timelineItem}>
                  <div className={styles.timelineDate}>v2.1.0 - June 15, 2026</div>
                  <div className={styles.timelineContent}>Major release: Support for multi-lingual input added.</div>
                </div>
                <div className={styles.timelineItem}>
                  <div className={styles.timelineDate}>v2.0.0 - May 1, 2026</div>
                  <div className={styles.timelineContent}>Initial V2 launch with new transformer architecture.</div>
                </div>
              </div>
            </Card>
          </div>

          {/* Related Products */}
          <section>
            <h2 style={{ fontSize: '20px', fontWeight: 700, marginBottom: '16px', color: 'var(--text-primary)' }}>Related Products</h2>
            <div className={styles.relatedGrid}>
              {[
                { name: 'Lead Scoring AI', dept: 'Sales' },
                { name: 'Churn Predictor', dept: 'Sales' },
                { name: 'Fraud Detection Net', dept: 'Finance' },
                { name: 'Resume Parser', dept: 'HR' },
              ].map((p, i) => (
                <div key={i} className={styles.relatedCard}>
                  <Activity size={24} color="var(--primary)" />
                  <div className={styles.relatedTitle}>{p.name}</div>
                  <div style={{ fontSize: '12px', color: 'var(--text-secondary)', marginTop: '4px' }}>{p.dept} Domain</div>
                </div>
              ))}
            </div>
          </section>

        </main>
      </div>
    </div>
  );
}
