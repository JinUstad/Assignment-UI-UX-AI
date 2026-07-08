'use client';

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { Activity, Mail, Lock } from 'lucide-react';
import { Card } from '@/components/ui/Card';
import { Button } from '@/components/ui/Button';
import { Input } from '@/components/ui/Input';
import styles from './page.module.css';

export default function LoginPage() {
  const router = useRouter();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Check mocked users from localStorage
    const savedUsers = JSON.parse(localStorage.getItem('portal_users') || '[]');
    const user = savedUsers.find((u: any) => u.email === email && u.password === password);

    if (user) {
      document.cookie = `auth=true; path=/;`;
      document.cookie = `role=${user.role}; path=/;`; // Store role in cookie for SSR layout if needed
      document.cookie = `name=${user.name}; path=/;`;
      router.push('/');
    } else if (email === 'gulm@gmail.com' && password === '1234') {
      // Default fallback account
      document.cookie = "auth=true; path=/;";
      document.cookie = "role=Sales; path=/;";
      document.cookie = "name=Gulm; path=/;";
      router.push('/');
    } else {
      setError('Invalid credentials.');
    }
  };

  const handleSSO = (provider: string) => {
    alert(`SSO Login with ${provider} is mocked for this demo.`);
  };

  return (
    <div className={styles.container}>
      <Card className={styles.card}>
        <div className={styles.header}>
          <div style={{ display: 'flex', justifyContent: 'center', margin: '0 auto 16px' }}>
            <Activity size={48} color="var(--primary)" />
          </div>
          <h1 className={styles.title}>Welcome back</h1>
          <p className={styles.subtitle}>Enter your details to access the AI Portal.</p>
        </div>

        <div className={styles.ssoButtons}>
          <Button variant="secondary" fullWidth onClick={() => handleSSO('Microsoft')}>
            <span className={styles.ssoIcon}>
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 21 21"><path fill="#f25022" d="M1 1h9v9H1z"/><path fill="#00a4ef" d="M1 11h9v9H1z"/><path fill="#7fba00" d="M11 1h9v9h-9z"/><path fill="#ffb900" d="M11 11h9v9h-9z"/></svg>
              Sign in with Microsoft
            </span>
          </Button>
          <Button variant="secondary" fullWidth onClick={() => handleSSO('Google')}>
            <span className={styles.ssoIcon}>
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 48 48"><path fill="#EA4335" d="M24 9.5c3.54 0 6.71 1.22 9.21 3.6l6.85-6.85C35.9 2.38 30.47 0 24 0 14.62 0 6.51 5.38 2.56 13.22l7.98 6.19C12.43 13.7 17.74 9.5 24 9.5z"/><path fill="#4285F4" d="M46.98 24.55c0-1.57-.15-3.09-.38-4.55H24v9.02h12.94c-.58 2.96-2.26 5.48-4.78 7.18l7.73 6c4.51-4.18 7.09-10.36 7.09-17.65z"/><path fill="#FBBC05" d="M10.53 28.59c-.48-1.45-.76-2.99-.76-4.59s.27-3.14.76-4.59l-7.98-6.19C.92 16.46 0 20.12 0 24c0 3.88.92 7.54 2.56 10.78l7.97-6.19z"/><path fill="#34A853" d="M24 48c6.48 0 11.93-2.13 15.89-5.81l-7.73-6c-2.15 1.45-4.92 2.3-8.16 2.3-6.26 0-11.57-4.22-13.47-9.91l-7.98 6.19C6.51 42.62 14.62 48 24 48z"/></svg>
              Sign in with Google
            </span>
          </Button>
        </div>

        <div className={styles.divider}>Or continue with email</div>

        <form className={styles.form} onSubmit={handleLogin}>
          {error && <div className={styles.error}>{error}</div>}
          
          <div className={styles.formGroup}>
            <label className={styles.label}>Email</label>
            <Input 
              type="email" 
              placeholder="name@company.com" 
              icon={<Mail size={18} />} 
              fullWidth 
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>

          <div className={styles.formGroup}>
            <label className={styles.label}>Password</label>
            <Input 
              type="password" 
              placeholder="••••••••" 
              icon={<Lock size={18} />} 
              fullWidth 
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>

          <Button type="submit" fullWidth size="lg" style={{ marginTop: '8px' }}>
            Sign in
          </Button>
        </form>

        <div className={styles.registerPrompt}>
          Don't have an account? <Link href="/register" className={styles.registerLink}>Register here</Link>
        </div>
      </Card>
    </div>
  );
}
