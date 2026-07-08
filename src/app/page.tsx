'use client';
import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { Sidebar } from '@/components/layout/Sidebar';
import { Navbar } from '@/components/layout/Navbar';
import { Card } from '@/components/ui/Card';
import { Button } from '@/components/ui/Button';
import { Badge } from '@/components/ui/Badge';
import { Briefcase, FileText, PieChart, Users, Star, ArrowRight, Activity, Calendar, Map } from 'lucide-react';
import styles from './page.module.css';

export default function Dashboard() {
  const router = useRouter();
  const [loading, setLoading] = useState(true);
  const [name, setName] = useState('User');

  useEffect(() => {
    if (!document.cookie.includes('auth=true')) {
      router.push('/login');
    } else {
      const cookies = document.cookie.split(';');
      const nameCookie = cookies.find(c => c.trim().startsWith('name='));
      if (nameCookie) setName(nameCookie.split('=')[1]);
      setLoading(false);
    }
  }, [router]);

  if (loading) return null;

  return (
    <div className={styles.layout}>
      <Sidebar />
      <div className={styles.mainContent}>
        <Navbar />
        <main className={styles.content}>
          
          {/* Hero Section */}
          <section className={styles.hero}>
            <h1 className={styles.heroTitle}>Welcome back, {name}</h1>
            <p className={styles.heroSubtitle}>Here's what's happening with your AI infrastructure today.</p>
          </section>

          {/* Spotlights */}
          <section className={styles.spotlightGrid}>
            <Card className={styles.spotlightCard} style={{ padding: '32px' }}>
              <Badge variant="warning" style={{ alignSelf: 'flex-start', marginBottom: '16px' }}>Product of the Month</Badge>
              <h2 style={{ fontSize: '24px', marginBottom: '8px' }}>Copilot for Sales v2.0</h2>
              <p style={{ color: 'var(--text-secondary)', marginBottom: '24px', lineHeight: '1.6' }}>
                The next generation of sales intelligence is here. Automatically draft emails, predict deal closures, and analyze customer sentiment in real-time.
              </p>
              <Button style={{ alignSelf: 'flex-start' }}>Explore Model <ArrowRight size={16} style={{ marginLeft: '8px' }}/></Button>
            </Card>

            <Card className={styles.spotlightCard2} style={{ padding: '32px' }}>
              <Badge variant="success" style={{ alignSelf: 'flex-start', marginBottom: '16px' }}>Team of the Month</Badge>
              <h2 style={{ fontSize: '24px', marginBottom: '8px' }}>Data Science Core</h2>
              <p style={{ color: 'var(--text-secondary)', marginBottom: '24px', lineHeight: '1.6' }}>
                Awarded for successfully deploying the Customer Sentiment engine which processed over 2.1M interactions with 99.9% uptime this month.
              </p>
              <Button variant="secondary" style={{ alignSelf: 'flex-start' }}>View Team Profile</Button>
            </Card>
          </section>

          {/* Product Catalog */}
          <section>
            <h2 className={styles.sectionTitle}><Activity size={24} /> Product Catalog</h2>
            <div style={{ display: 'flex', gap: '8px', marginBottom: '24px' }}>
              <Button variant="primary">All</Button>
              <Button variant="ghost">Sales</Button>
              <Button variant="ghost">Marketing</Button>
              <Button variant="ghost">Finance</Button>
              <Button variant="ghost">HR</Button>
            </div>
            <div className={styles.catalogGrid}>
              {[
                { n: 'Sentiment Analysis', d: 'Marketing', s: 'Active', i: <FileText size={20}/> },
                { n: 'Lead Scoring AI', d: 'Sales', s: 'Active', i: <Briefcase size={20}/> },
                { n: 'Fraud Detection Net', d: 'Finance', s: 'Training', i: <PieChart size={20}/> },
                { n: 'Resume Parser v3', d: 'HR', s: 'Active', i: <Users size={20}/> },
                { n: 'Expense Predictor', d: 'Finance', s: 'Active', i: <PieChart size={20}/> },
                { n: 'Churn Predictor', d: 'Sales', s: 'Beta', i: <Briefcase size={20}/> },
              ].map((p, i) => (
                <Card 
                  key={i} 
                  className={styles.productCard} 
                  onClick={() => router.push(`/product/${p.n.toLowerCase().replace(/\s+/g, '-')}`)}
                >
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
                    <div style={{ padding: '12px', backgroundColor: 'var(--background)', borderRadius: '8px', color: 'var(--primary)' }}>
                      {p.i}
                    </div>
                    <Star size={20} color={i === 1 || i === 3 ? "var(--warning)" : "var(--text-secondary)"} style={{ cursor: 'pointer', fill: i === 1 || i === 3 ? "var(--warning)" : "none" }} />
                  </div>
                  <h3 style={{ marginTop: '16px', fontSize: '18px' }}>{p.n}</h3>
                  <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '16px', alignItems: 'center' }}>
                    <span style={{ fontSize: '14px', color: 'var(--text-secondary)' }}>{p.d}</span>
                    <Badge variant={p.s === 'Active' ? 'success' : p.s === 'Training' ? 'warning' : 'info'}>{p.s}</Badge>
                  </div>
                </Card>
              ))}
            </div>
          </section>

          {/* Product Roadmap */}
          <section>
            <h2 className={styles.sectionTitle}><Map size={24} /> Product Roadmap</h2>
            <div className={styles.kanban}>
              <div className={styles.kanbanCol}>
                <div className={styles.kanbanColTitle}>Planned</div>
                <div className={styles.kanbanItem}>Contract Analyzer 2.0 (Legal)</div>
                <div className={styles.kanbanItem}>Supply Chain AI (Ops)</div>
              </div>
              <div className={styles.kanbanCol}>
                <div className={styles.kanbanColTitle}>In Progress</div>
                <div className={styles.kanbanItem}>Fraud Detection Net (Finance)</div>
                <div className={styles.kanbanItem}>Video Generation AI (Marketing)</div>
              </div>
              <div className={styles.kanbanCol}>
                <div className={styles.kanbanColTitle}>Beta</div>
                <div className={styles.kanbanItem}>Churn Predictor (Sales)</div>
              </div>
              <div className={styles.kanbanCol}>
                <div className={styles.kanbanColTitle}>Released (June)</div>
                <div className={styles.kanbanItem}>Copilot for Sales v2.0</div>
                <div className={styles.kanbanItem}>Resume Parser v3 (HR)</div>
              </div>
            </div>
          </section>

          {/* What's New Timeline */}
          <section>
            <h2 className={styles.sectionTitle}><Calendar size={24} /> What's New</h2>
            <div className={styles.timeline}>
              <div className={styles.timelineItem}>
                <div style={{ fontSize: '12px', fontWeight: 'bold', color: 'var(--primary)', marginBottom: '4px', textTransform: 'uppercase' }}>Today</div>
                <Card style={{ padding: '24px' }}>
                  <h4 style={{ marginBottom: '8px', fontSize: '18px' }}>Updated Marketing Datasets</h4>
                  <p style={{ fontSize: '14px', color: 'var(--text-secondary)', lineHeight: '1.5' }}>New sentiment analysis weights have been deployed to production successfully. All dependent applications will see improved latency and accuracy.</p>
                </Card>
              </div>
              <div className={styles.timelineItem}>
                <div style={{ fontSize: '12px', fontWeight: 'bold', color: 'var(--primary)', marginBottom: '4px', textTransform: 'uppercase' }}>Yesterday</div>
                <Card style={{ padding: '24px' }}>
                  <h4 style={{ marginBottom: '8px', fontSize: '18px' }}>Sales Predictor Beta Launch</h4>
                  <p style={{ fontSize: '14px', color: 'var(--text-secondary)', lineHeight: '1.5' }}>The beta program is now open for top sales executives. Opt-in via Settings to get early access to revenue forecasting.</p>
                </Card>
              </div>
              <div className={styles.timelineItem}>
                <div style={{ fontSize: '12px', fontWeight: 'bold', color: 'var(--primary)', marginBottom: '4px', textTransform: 'uppercase' }}>July 1st, 2026</div>
                <Card style={{ padding: '24px' }}>
                  <h4 style={{ marginBottom: '8px', fontSize: '18px' }}>Enterprise Portal v3.0</h4>
                  <p style={{ fontSize: '14px', color: 'var(--text-secondary)', lineHeight: '1.5' }}>Welcome to the fully redesigned Enterprise AI Portal featuring Dark Mode, a centralized Catalog, and unified UI!</p>
                </Card>
              </div>
            </div>
          </section>

        </main>
      </div>
    </div>
  );
}
