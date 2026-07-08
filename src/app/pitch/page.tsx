'use client';
import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { Sidebar } from '@/components/layout/Sidebar';
import { Button } from '@/components/ui/Button';
import { ChevronLeft, ChevronRight, Shield, TrendingUp, Zap, Target, Lock, Users, Activity, Crosshair } from 'lucide-react';
import styles from './page.module.css';

export default function PitchDeck() {
  const router = useRouter();
  const [loading, setLoading] = useState(true);
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    if (!document.cookie.includes('auth=true')) {
      router.push('/login');
    } else {
      setLoading(false);
    }
  }, [router]);

  if (loading) return null;

  const SLIDES = [
    // Slide 1: Cover
    () => (
      <div className={styles.slideCover}>
        <div style={{ marginBottom: '40px' }}>
          <Activity size={64} color="#60A5FA" />
        </div>
        <h1 className={styles.coverTitle}>Enterprise AI Portal</h1>
        <p className={styles.coverSubtitle}>Unifying Business Intelligence and Generative AI into a Single Pane of Glass.</p>
        <div style={{ marginTop: 'auto', fontSize: '14px', color: 'rgba(255,255,255,0.5)', textTransform: 'uppercase', letterSpacing: '2px' }}>
          Confidential Pitch Deck
        </div>
      </div>
    ),
    // Slide 2: Problem
    () => (
      <div className={styles.slideStandard}>
        <div className={styles.slideHeader}>
          <h2 className={styles.slideTitle}>The Problem</h2>
        </div>
        <div className={styles.slideContent}>
          <div className={styles.grid2}>
            <div className={styles.iconBlock}>
              <div className={styles.iconWrapper} style={{ color: '#EF4444', backgroundColor: 'rgba(239, 68, 68, 0.1)' }}><Crosshair size={24} /></div>
              <h3 className={styles.iconBlockTitle}>Siloed Intelligence</h3>
              <p>Sales, HR, Marketing, and Finance operate using fragmented, disconnected AI tools, leading to duplicated efforts and data silos.</p>
            </div>
            <div className={styles.iconBlock}>
              <div className={styles.iconWrapper} style={{ color: '#F59E0B', backgroundColor: 'rgba(245, 158, 11, 0.1)' }}><Lock size={24} /></div>
              <h3 className={styles.iconBlockTitle}>Security & Access Risk</h3>
              <p>Lack of unified Role-Based Access Control (RBAC) increases compliance risks and makes auditing nearly impossible across distributed shadow AI tools.</p>
            </div>
          </div>
        </div>
        <div className={styles.slideFooter}>
          <span>Enterprise AI Portal</span>
          <span>02 / 09</span>
        </div>
      </div>
    ),
    // Slide 3: Vision
    () => (
      <div className={styles.slideStandard} style={{ background: 'var(--background)' }}>
        <div className={styles.slideHeader}>
          <h2 className={styles.slideTitle}>Our Vision</h2>
        </div>
        <div className={styles.slideContent} style={{ alignItems: 'center', justifyContent: 'center', textAlign: 'center', flexDirection: 'column' }}>
          <Target size={64} color="var(--primary)" style={{ marginBottom: '32px' }} />
          <p style={{ fontSize: '28px', fontWeight: 300, color: 'var(--text-primary)', maxWidth: '800px', lineHeight: 1.4 }}>
            "To empower every department with state-of-the-art AI through a single, secure, and intuitive enterprise platform."
          </p>
        </div>
        <div className={styles.slideFooter}>
          <span>Enterprise AI Portal</span>
          <span>03 / 09</span>
        </div>
      </div>
    ),
    // Slide 4: Solution
    () => (
      <div className={styles.slideStandard}>
        <div className={styles.slideHeader}>
          <h2 className={styles.slideTitle}>The Solution</h2>
        </div>
        <div className={styles.slideContent}>
          <div className={styles.grid2}>
            <div>
              <p style={{ marginBottom: '24px' }}>A unified Next.js Enterprise AI Portal featuring:</p>
              <ul style={{ display: 'flex', flexDirection: 'column', gap: '16px', paddingLeft: '24px' }}>
                <li><strong>Centralized Access:</strong> One login for all AI tools.</li>
                <li><strong>Tailored Domains:</strong> Dedicated hubs for Sales, Marketing, HR, and Finance.</li>
                <li><strong>Enterprise RBAC:</strong> Strict permissions ensuring users only see what they are authorized to access.</li>
              </ul>
            </div>
            <div style={{ backgroundColor: 'var(--background)', borderRadius: '12px', border: '1px solid var(--border)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <div style={{ textAlign: 'center' }}>
                <Users size={48} color="var(--primary)" style={{ marginBottom: '16px' }} />
                <div style={{ fontWeight: 700 }}>One Portal. Unlimited Potential.</div>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.slideFooter}>
          <span>Enterprise AI Portal</span>
          <span>04 / 09</span>
        </div>
      </div>
    ),
    // Slide 5: Features
    () => (
      <div className={styles.slideStandard}>
        <div className={styles.slideHeader}>
          <h2 className={styles.slideTitle}>Core Features</h2>
        </div>
        <div className={styles.slideContent}>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: '32px', width: '100%' }}>
            <div className={styles.iconBlock}>
              <div className={styles.iconWrapper}><Zap size={24} /></div>
              <h3 className={styles.iconBlockTitle} style={{ fontSize: '20px' }}>AI Copilots</h3>
              <p style={{ fontSize: '16px' }}>Domain-specific autonomous agents automating workflows.</p>
            </div>
            <div className={styles.iconBlock}>
              <div className={styles.iconWrapper}><TrendingUp size={24} /></div>
              <h3 className={styles.iconBlockTitle} style={{ fontSize: '20px' }}>Dynamic Dashboards</h3>
              <p style={{ fontSize: '16px' }}>Real-time dual-axis charts and custom KPIs for every department.</p>
            </div>
            <div className={styles.iconBlock}>
              <div className={styles.iconWrapper}><Activity size={24} /></div>
              <h3 className={styles.iconBlockTitle} style={{ fontSize: '20px' }}>Product Catalog</h3>
              <p style={{ fontSize: '16px' }}>An internal app store for discovering new AI capabilities.</p>
            </div>
          </div>
        </div>
        <div className={styles.slideFooter}>
          <span>Enterprise AI Portal</span>
          <span>05 / 09</span>
        </div>
      </div>
    ),
    // Slide 6: Security
    () => (
      <div className={styles.slideStandard} style={{ background: 'var(--background)' }}>
        <div className={styles.slideHeader}>
          <h2 className={styles.slideTitle}>Enterprise Security & Compliance</h2>
        </div>
        <div className={styles.slideContent}>
          <div className={styles.grid2}>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <Shield size={120} color="var(--success)" />
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', gap: '20px' }}>
              <div style={{ borderLeft: '4px solid var(--success)', paddingLeft: '16px' }}>
                <strong>SSO Integration</strong><br/>
                <span style={{ fontSize: '16px' }}>Seamless integration with Microsoft Entra ID and Google Workspace.</span>
              </div>
              <div style={{ borderLeft: '4px solid var(--success)', paddingLeft: '16px' }}>
                <strong>Granular RBAC</strong><br/>
                <span style={{ fontSize: '16px' }}>Zero-trust architecture with read/write/delete permission matrices.</span>
              </div>
              <div style={{ borderLeft: '4px solid var(--success)', paddingLeft: '16px' }}>
                <strong>Immutable Audit Logs</strong><br/>
                <span style={{ fontSize: '16px' }}>Comprehensive tracking of all authentication and system events.</span>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.slideFooter}>
          <span>Enterprise AI Portal</span>
          <span>06 / 09</span>
        </div>
      </div>
    ),
    // Slide 7: Business Benefits
    () => (
      <div className={styles.slideStandard}>
        <div className={styles.slideHeader}>
          <h2 className={styles.slideTitle}>Business Benefits</h2>
        </div>
        <div className={styles.slideContent}>
           <div className={styles.grid2}>
            <div className={styles.iconBlock}>
              <h3 className={styles.iconBlockTitle}>Cost Reduction</h3>
              <p>Consolidating AI vendors into a single internal platform reduces licensing overhead by an estimated 35% annually.</p>
            </div>
            <div className={styles.iconBlock}>
              <h3 className={styles.iconBlockTitle}>Operational Efficiency</h3>
              <p>Employees save 4-6 hours weekly by eliminating app switching and leveraging domain-specific Copilot automations.</p>
            </div>
          </div>
        </div>
        <div className={styles.slideFooter}>
          <span>Enterprise AI Portal</span>
          <span>07 / 09</span>
        </div>
      </div>
    ),
    // Slide 8: Success Metrics
    () => (
      <div className={styles.slideStandard}>
        <div className={styles.slideHeader}>
          <h2 className={styles.slideTitle}>Projected Success Metrics</h2>
        </div>
        <div className={styles.slideContent}>
          <div style={{ display: 'flex', justifyContent: 'space-around', width: '100%', alignItems: 'center' }}>
            <div style={{ textAlign: 'center' }}>
              <div style={{ fontSize: '64px', fontWeight: 800, color: 'var(--primary)', marginBottom: '8px' }}>40%</div>
              <div style={{ fontSize: '16px', fontWeight: 600, color: 'var(--text-primary)', textTransform: 'uppercase' }}>Reduction in App Switching</div>
            </div>
            <div style={{ textAlign: 'center' }}>
              <div style={{ fontSize: '64px', fontWeight: 800, color: 'var(--success)', marginBottom: '8px' }}>95%</div>
              <div style={{ fontSize: '16px', fontWeight: 600, color: 'var(--text-primary)', textTransform: 'uppercase' }}>AI Screening Accuracy</div>
            </div>
            <div style={{ textAlign: 'center' }}>
              <div style={{ fontSize: '64px', fontWeight: 800, color: 'var(--warning)', marginBottom: '8px' }}>3x</div>
              <div style={{ fontSize: '16px', fontWeight: 600, color: 'var(--text-primary)', textTransform: 'uppercase' }}>Faster Report Generation</div>
            </div>
          </div>
        </div>
        <div className={styles.slideFooter}>
          <span>Enterprise AI Portal</span>
          <span>08 / 09</span>
        </div>
      </div>
    ),
    // Slide 9: Future Roadmap
    () => (
      <div className={styles.slideStandard} style={{ background: 'var(--background)' }}>
        <div className={styles.slideHeader}>
          <h2 className={styles.slideTitle}>Future Roadmap</h2>
        </div>
        <div className={styles.slideContent}>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '32px', width: '100%' }}>
            <div style={{ display: 'flex', gap: '24px', alignItems: 'center' }}>
              <div style={{ width: '80px', fontWeight: 700, color: 'var(--primary)' }}>Q3 2026</div>
              <div style={{ flex: 1, padding: '20px', backgroundColor: 'var(--surface)', border: '1px solid var(--border)', borderRadius: '8px' }}>
                Finance Copilot autonomous insights and automated tax compliance auditing.
              </div>
            </div>
            <div style={{ display: 'flex', gap: '24px', alignItems: 'center' }}>
              <div style={{ width: '80px', fontWeight: 700, color: 'var(--primary)' }}>Q4 2026</div>
              <div style={{ flex: 1, padding: '20px', backgroundColor: 'var(--surface)', border: '1px solid var(--border)', borderRadius: '8px' }}>
                Advanced Predictive Models (Churn & Supply Chain) deployed to production.
              </div>
            </div>
            <div style={{ display: 'flex', gap: '24px', alignItems: 'center' }}>
              <div style={{ width: '80px', fontWeight: 700, color: 'var(--primary)' }}>2027</div>
              <div style={{ flex: 1, padding: '20px', backgroundColor: 'var(--surface)', border: '1px solid var(--border)', borderRadius: '8px' }}>
                Multi-modal AI support (Video Gen AI) and unified global rollout.
              </div>
            </div>
          </div>
        </div>
        <div className={styles.slideFooter}>
          <span>Enterprise AI Portal</span>
          <span>09 / 09</span>
        </div>
      </div>
    ),
  ];

  const handleNext = () => {
    if (currentSlide < SLIDES.length - 1) {
      setCurrentSlide(prev => prev + 1);
    }
  };

  const handlePrev = () => {
    if (currentSlide > 0) {
      setCurrentSlide(prev => prev - 1);
    }
  };

  const CurrentSlideComponent = SLIDES[currentSlide];

  return (
    <div className={styles.layout}>
      <Sidebar />
      <div className={styles.mainContent}>
        <main className={styles.content}>
          <div className={styles.presentationContainer}>
            <div className={styles.slide}>
              <CurrentSlideComponent />
            </div>
            <div className={styles.controls}>
              <Button variant="ghost" onClick={handlePrev}>
                <ChevronLeft size={20} style={{ marginRight: '8px' }} /> Previous
              </Button>
              <div className={styles.indicators}>
                {SLIDES.map((_, i) => (
                  <div 
                    key={i} 
                    className={`${styles.dot} ${i === currentSlide ? styles.active : ''}`} 
                    onClick={() => setCurrentSlide(i)}
                    style={{ cursor: 'pointer' }}
                  />
                ))}
              </div>
              <Button variant="primary" onClick={handleNext}>
                Next <ChevronRight size={20} style={{ marginLeft: '8px' }} />
              </Button>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
