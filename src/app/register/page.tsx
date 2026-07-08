'use client';

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { Activity, Mail, Lock, User } from 'lucide-react';
import { Card } from '@/components/ui/Card';
import { Button } from '@/components/ui/Button';
import { Input } from '@/components/ui/Input';
import { Dropdown } from '@/components/ui/Dropdown';
import styles from './page.module.css';

export default function RegisterPage() {
  const router = useRouter();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [role, setRole] = useState('Sales');

  const handleRegister = (e: React.FormEvent) => {
    e.preventDefault();
    const newUser = { name, email, password, role };
    
    // Save to localStorage
    const savedUsers = JSON.parse(localStorage.getItem('portal_users') || '[]');
    // Check if email already exists
    if (savedUsers.find((u: any) => u.email === email)) {
        alert('Email already registered!');
        return;
    }

    savedUsers.push(newUser);
    localStorage.setItem('portal_users', JSON.stringify(savedUsers));

    alert('Registration successful! Please log in.');
    router.push('/login');
  };

  return (
    <div className={styles.container}>
      <Card className={styles.card}>
        <div className={styles.header}>
          <div style={{ display: 'flex', justifyContent: 'center', margin: '0 auto 16px' }}>
            <Activity size={48} color="var(--primary)" />
          </div>
          <h1 className={styles.title}>Create an Account</h1>
          <p className={styles.subtitle}>Join the Enterprise AI Portal</p>
        </div>

        <form className={styles.form} onSubmit={handleRegister}>
          
          <div className={styles.formGroup}>
            <label className={styles.label}>Full Name</label>
            <Input 
              type="text" 
              placeholder="John Doe" 
              icon={<User size={18} />} 
              fullWidth 
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </div>

          <div className={styles.formGroup}>
            <label className={styles.label}>Email Address</label>
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
            <label className={styles.label}>Business Domain</label>
            <Dropdown 
              options={[
                { value: 'Sales', label: 'Sales' },
                { value: 'Marketing', label: 'Marketing' },
                { value: 'Finance', label: 'Finance' },
                { value: 'HR', label: 'Human Resources' },
              ]}
              value={role}
              onChange={(e) => setRole(e.target.value)}
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
              minLength={4}
            />
          </div>

          <Button type="submit" fullWidth size="lg" style={{ marginTop: '16px' }}>
            Register
          </Button>
        </form>

        <div className={styles.loginPrompt}>
          Already have an account? <Link href="/login" className={styles.loginLink}>Sign in here</Link>
        </div>
      </Card>
    </div>
  );
}
