'use client';
import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { Sidebar } from '@/components/layout/Sidebar';
import { Navbar } from '@/components/layout/Navbar';
import { Card } from '@/components/ui/Card';
import { Button } from '@/components/ui/Button';
import { Badge } from '@/components/ui/Badge';
import { Table, Column } from '@/components/ui/Table';
import { Input } from '@/components/ui/Input';
import { Users, Shield, Server, Box, Activity, Sliders, ShieldAlert, FileKey, HardDrive } from 'lucide-react';
import styles from './page.module.css';

export default function AdminConsole() {
  const router = useRouter();
  const [loading, setLoading] = useState(true);
  const [activeTab, setActiveTab] = useState('users');

  useEffect(() => {
    if (!document.cookie.includes('auth=true')) {
      router.push('/login');
    } else {
      setLoading(false);
    }
  }, [router]);

  if (loading) return null;

  const USER_COLUMNS: Column[] = [
    { key: 'name', header: 'Name', render: (row) => <span className="font-semibold">{row.name}</span> },
    { key: 'email', header: 'Email' },
    { key: 'department', header: 'Department' },
    { key: 'role', header: 'System Role', render: (row) => <Badge variant={row.role === 'Admin' ? 'danger' : 'info'}>{row.role}</Badge> },
  ];

  const USERS = [
    { name: 'Dr. Sarah Jenkins', email: 's.jenkins@enterprise.com', department: 'Data Science', role: 'Admin' },
    { name: 'Mike Thomas', email: 'm.thomas@enterprise.com', department: 'Sales', role: 'Editor' },
    { name: 'Priya Patel', email: 'p.patel@enterprise.com', department: 'Marketing', role: 'Editor' },
    { name: 'David Wong', email: 'd.wong@enterprise.com', department: 'Finance', role: 'Viewer' },
    { name: 'Gulm Admin', email: 'gulm@gmail.com', department: 'IT Operations', role: 'Admin' },
  ];

  const ROLE_COLUMNS: Column[] = [
    { key: 'role', header: 'Role Name', render: (row) => <span className="font-semibold">{row.role}</span> },
    { key: 'domains', header: 'Domain Access' },
    { key: 'permissions', header: 'Permissions', render: (row) => (
      <div style={{ display: 'flex', gap: '4px' }}>
        {row.permissions.map((p: string) => <Badge key={p} variant="outline">{p}</Badge>)}
      </div>
    )},
  ];

  const ROLES = [
    { role: 'Admin', domains: 'All Domains', permissions: ['Read', 'Write', 'Delete', 'Manage Users'] },
    { role: 'Data Scientist', domains: 'Assigned Only', permissions: ['Read', 'Write', 'Deploy Models'] },
    { role: 'Editor', domains: 'Assigned Only', permissions: ['Read', 'Write'] },
    { role: 'Viewer', domains: 'Assigned Only', permissions: ['Read'] },
  ];

  const RENDER_TAB_CONTENT = () => {
    switch (activeTab) {
      case 'users':
        return (
          <>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '16px' }}>
              <h2 className={styles.sectionTitle} style={{ marginBottom: 0 }}>User Management</h2>
              <Button variant="primary">Invite User</Button>
            </div>
            <Card>
              <Table columns={USER_COLUMNS} data={USERS} />
            </Card>
          </>
        );
      case 'rbac':
        return (
          <>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '16px' }}>
              <h2 className={styles.sectionTitle} style={{ marginBottom: 0 }}>Role-Based Access Control (RBAC)</h2>
              <Button variant="primary">Create Role</Button>
            </div>
            <Card>
              <Table columns={ROLE_COLUMNS} data={ROLES} />
            </Card>
          </>
        );
      case 'departments':
        return (
          <>
            <h2 className={styles.sectionTitle}>Department & Product Mapping</h2>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px' }}>
              {['Sales', 'Marketing', 'Finance', 'HR'].map(dept => (
                <Card key={dept}>
                  <h3 style={{ fontSize: '18px', marginBottom: '12px' }}>{dept} Domain</h3>
                  <div style={{ color: 'var(--text-secondary)', fontSize: '14px', marginBottom: '16px' }}>Active Products: 3</div>
                  <Button variant="outline" size="sm">Manage Assignments</Button>
                </Card>
              ))}
            </div>
          </>
        );
      case 'audit':
        return (
          <>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '16px' }}>
              <h2 className={styles.sectionTitle} style={{ marginBottom: 0 }}>System Audit Logs</h2>
              <Button variant="outline">Export CSV</Button>
            </div>
            <Card>
              <div className={styles.logList}>
                <div className={styles.logItem}>
                  <div className={styles.logTime}>2026-07-08 14:32:01</div>
                  <div className={styles.logEvent}>Changed role for <span className={styles.logUser}>David Wong</span> from Viewer to Editor.</div>
                  <Badge variant="warning">Auth Event</Badge>
                </div>
                <div className={styles.logItem}>
                  <div className={styles.logTime}>2026-07-08 11:15:44</div>
                  <div className={styles.logEvent}>Deployed new model <span className={styles.logUser}>Copilot for Sales v2.0</span> to production.</div>
                  <Badge variant="success">System Event</Badge>
                </div>
                <div className={styles.logItem}>
                  <div className={styles.logTime}>2026-07-07 09:05:12</div>
                  <div className={styles.logEvent}>API Key generated for <span className={styles.logUser}>Marketing API</span>.</div>
                  <Badge variant="info">Security</Badge>
                </div>
                <div className={styles.logItem}>
                  <div className={styles.logTime}>2026-07-06 18:45:00</div>
                  <div className={styles.logEvent}>Failed login attempt for <span className={styles.logUser}>admin@enterprise.com</span> (IP: 192.168.1.45).</div>
                  <Badge variant="danger">Security Alert</Badge>
                </div>
              </div>
            </Card>
          </>
        );
      case 'settings':
        return (
          <>
            <h2 className={styles.sectionTitle}>Global System Settings</h2>
            <Card>
              <div className={styles.formGroup}>
                <label className={styles.formLabel}>Maximum API Requests per Min (Rate Limit)</label>
                <div className={styles.formDesc}>Applies to all domains unless overridden by specific RBAC policies.</div>
                <Input placeholder="1000" fullWidth />
              </div>
              <div className={styles.formGroup}>
                <label className={styles.formLabel}>Audit Log Retention Period</label>
                <div className={styles.formDesc}>Number of days to keep security and auth logs.</div>
                <Input placeholder="90" fullWidth />
              </div>
              <div className={styles.formGroup}>
                <label className={styles.formLabel}>Default Domain Layout</label>
                <div className={styles.formDesc}>The default dashboard layout for new users without a specified domain.</div>
                <Input placeholder="Home / Discover" fullWidth />
              </div>
              <Button variant="primary">Save Changes</Button>
            </Card>
          </>
        );
      default:
        return null;
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
              <h1 className={styles.title}>Admin Console</h1>
              <p className={styles.subtitle}>Enterprise system configuration, access control, and audit logs.</p>
            </div>
            <Badge variant="danger" style={{ padding: '8px 16px', fontSize: '14px' }}>Super Admin Access</Badge>
          </div>

          <div className={styles.adminLayout}>
            <aside className={styles.adminSidebar}>
              <button className={`${styles.adminTab} ${activeTab === 'users' ? styles.active : ''}`} onClick={() => setActiveTab('users')}>
                <Users size={18} /> User Management
              </button>
              <button className={`${styles.adminTab} ${activeTab === 'rbac' ? styles.active : ''}`} onClick={() => setActiveTab('rbac')}>
                <Shield size={18} /> Role Based Access (RBAC)
              </button>
              <button className={`${styles.adminTab} ${activeTab === 'departments' ? styles.active : ''}`} onClick={() => setActiveTab('departments')}>
                <Box size={18} /> Dept & Products
              </button>
              <button className={`${styles.adminTab} ${activeTab === 'audit' ? styles.active : ''}`} onClick={() => setActiveTab('audit')}>
                <Activity size={18} /> System Audit Logs
              </button>
              <button className={`${styles.adminTab} ${activeTab === 'settings' ? styles.active : ''}`} onClick={() => setActiveTab('settings')}>
                <Sliders size={18} /> Global Settings
              </button>
            </aside>
            
            <div className={styles.adminContent}>
              {RENDER_TAB_CONTENT()}
            </div>
          </div>

        </main>
      </div>
    </div>
  );
}
