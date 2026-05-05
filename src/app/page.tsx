'use client';

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import { login } from '@/lib/auth';

export default function LoginPage() {
  const [email, setEmail] = useState('mayor@cityhall.gov');
  const [password, setPassword] = useState('password');
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setIsLoading(true);

    try {
      const user = await login(email, password);
      if (user) {
        localStorage.setItem('mayor_session', JSON.stringify(user));
        router.push('/dashboard');
      } else {
        setError('Invalid credentials. Access denied.');
      }
    } catch {
      setError('A secure connection could not be established.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="bg-[#0A0A0A] font-body text-on-surface min-h-screen flex items-center justify-center relative overflow-hidden">
      <div className="absolute inset-0 city-overlay z-0"></div>
      <div className="absolute inset-0 bg-radial-gradient from-transparent to-[#0A0A0A] z-0"></div>

      <div className="relative z-10 w-full max-w-[440px] px-lg">
        <div className="text-center mb-xl">
          <div className="flex justify-center mb-md">
            <span
              className="material-symbols-outlined text-primary text-[48px]"
              style={{ fontVariationSettings: "'FILL' 1" }}
            >
              shield_person
            </span>
          </div>
          <h1 className="font-display text-primary uppercase tracking-widest mb-xs" style={{ fontSize: '14px', fontWeight: 900 }}>
            Mayor Intelligence Dashboard
          </h1>
          <p className="font-body text-on-surface-variant/60 tracking-tight text-sm">
            Secure Executive Portal
          </p>
        </div>

        <div className="login-card rounded-xl p-xl flex flex-col gap-lg">
          <div className="space-y-sm">
            <h2 className="text-2xl font-semibold text-on-surface">Executive Login</h2>
            <p className="text-sm text-on-surface-variant">Please authenticate to access city insights.</p>
          </div>

          {error && (
            <div className="bg-error-container/20 border border-error/30 text-error text-xs p-md rounded-lg flex items-center gap-sm">
              <span className="material-symbols-outlined text-sm">error</span>
              {error}
            </div>
          )}

          <form className="flex flex-col gap-md" onSubmit={handleSubmit}>
            <div className="space-y-xs">
              <label className="text-[10px] font-bold uppercase tracking-wider text-on-surface-variant block">Email Address</label>
              <div className="relative">
                <span className="material-symbols-outlined absolute left-md top-1/2 -translate-y-1/2 text-on-surface-variant text-base">mail</span>
                <input
                  className="w-full bg-[#080808] border border-outline-variant/30 rounded-lg py-md pl-xl pr-md text-on-surface placeholder:text-on-surface-variant/30 focus:border-primary/50 focus:ring-0 transition-all input-glow text-sm"
                  placeholder="mayor@cityhall.gov"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  disabled={isLoading}
                  required
                />
              </div>
            </div>
            <div className="space-y-xs">
              <label className="text-[10px] font-bold uppercase tracking-wider text-on-surface-variant block">Security Credentials</label>
              <div className="relative">
                <span className="material-symbols-outlined absolute left-md top-1/2 -translate-y-1/2 text-on-surface-variant text-base">lock</span>
                <input
                  className="w-full bg-[#080808] border border-outline-variant/30 rounded-lg py-md pl-xl pr-md text-on-surface placeholder:text-on-surface-variant/30 focus:border-primary/50 focus:ring-0 transition-all input-glow text-sm"
                  placeholder="••••••••"
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  disabled={isLoading}
                  required
                />
              </div>
            </div>
            <div className="flex items-center justify-between mt-xs">
              <label className="flex items-center gap-sm cursor-pointer">
                <input className="w-4 h-4 rounded border-outline-variant/50 bg-transparent text-primary focus:ring-0 focus:ring-offset-0" type="checkbox" />
                <span className="text-sm text-on-surface-variant/80">Remember device</span>
              </label>
              <a className="text-sm text-primary-container hover:text-primary transition-colors" href="#">
                Recover Access
              </a>
            </div>
            <button
              className="bg-gold-gradient w-full py-md rounded-lg font-semibold text-on-primary shadow-lg hover:brightness-110 active:scale-[0.98] transition-all flex items-center justify-center gap-sm disabled:opacity-50 disabled:cursor-not-allowed"
              type="submit"
              disabled={isLoading}
            >
              <span>{isLoading ? 'Authenticating...' : 'Login'}</span>
              {!isLoading && <span className="material-symbols-outlined text-[20px]">login</span>}
            </button>
          </form>

          <div className="relative flex items-center py-sm">
            <div className="flex-grow border-t border-outline-variant/20"></div>
            <span className="flex-shrink mx-md text-[10px] font-bold uppercase tracking-widest text-on-surface-variant/40">Secure SSO</span>
            <div className="flex-grow border-t border-outline-variant/20"></div>
          </div>

          <button className="w-full py-md rounded-lg border border-primary-container/30 hover:border-primary-container/60 bg-transparent text-sm text-on-surface transition-all flex items-center justify-center gap-md hover:bg-white/5 active:scale-[0.98]">
            <img
              alt="Google Logo"
              className="w-5 h-5"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuDWVA_IU2Mt7rG4RtyhVand8z0LyJVwStgzYs_FChtE1PbdrQI6mj3k4Arm8kyqvfW_fIkHrXUfef5_1hfLNHyhvBXJNtv7ksCngsCxjPArRjjiHBSYxQ_m_U8Pi6uim7vcYfVjkdNfSKAM2dscRO2J5z_VZoMzNJpeCX6BAntVvZlYQ0FCd1DThqYCZBcEeO_TVMO3xUpSqEmhbuzfNllkDun1uZV_rYV1p3GLY0R_sAvnOkBj6dLpIYtYOC8K6ecOOgQ6QyoVfgRE"
            />
            <span>Continue with Google</span>
          </button>
        </div>

        <div className="mt-xl flex justify-center gap-8">
          <a className="text-[10px] font-bold uppercase tracking-wider text-on-surface-variant/40 hover:text-on-surface transition-colors" href="#">
            Privacy Protocol
          </a>
          <a className="text-[10px] font-bold uppercase tracking-wider text-on-surface-variant/40 hover:text-on-surface transition-colors" href="#">
            Support Desk
          </a>
          <a className="text-[10px] font-bold uppercase tracking-wider text-on-surface-variant/40 hover:text-on-surface transition-colors" href="#">
            Terms
          </a>
        </div>
      </div>

      <div className="fixed bottom-lg right-lg flex items-center gap-sm bg-white/5 backdrop-blur-sm px-md py-xs rounded-full border border-white/10">
        <div className="w-2 h-2 rounded-full bg-primary animate-pulse"></div>
        <span className="font-mono-data text-[10px] text-on-surface-variant/60 uppercase tracking-widest">System Status: Operational</span>
      </div>
    </div>
  );
}
