'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { Mail, Lock, ArrowRight, Sparkles } from 'lucide-react';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { useApp } from '@/context/AppContext';

export default function LoginPage() {
  const router = useRouter();
  const { login } = useApp();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !password) {
      setError('Please enter your email and password.');
      return;
    }

    setLoading(true);
    setTimeout(() => {
      login(email);
      router.push('/');
    }, 600);
  };

  return (
    <div className="min-h-screen flex flex-col bg-slate-50">
      <Header />

      <main className="flex-grow flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
        <div className="w-full max-w-4xl bg-white rounded-3xl border border-slate-200 card-shadow overflow-hidden grid grid-cols-1 md:grid-cols-2">
          
          {/* Left Panel */}
          <div className="bg-gradient-to-br from-slate-900 via-blue-950 to-brand-blue p-8 lg:p-12 text-white flex flex-col justify-between relative overflow-hidden">
            <div className="space-y-4 relative z-10">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/10 text-[#d2ff00] text-xs font-bold border border-white/20">
                <Sparkles className="w-3.5 h-3.5" />
                <span>Welcome Back</span>
              </div>
              <h2 className="text-3xl font-black leading-tight">
                Resume Your Mastery & Continue Learning
              </h2>
              <p className="text-xs text-blue-100 leading-relaxed">
                Access your enrolled video modules, downloadable asset packages, and instructor reviews.
              </p>
            </div>

            <div className="pt-8 relative z-10">
              <div className="p-4 rounded-2xl bg-white/10 backdrop-blur-md border border-white/20 space-y-2">
                <span className="text-[10px] font-bold text-[#d2ff00] uppercase tracking-wider">Demo Account</span>
                <p className="text-xs font-semibold text-white">Email: shafin@bytespace.com</p>
                <p className="text-xs font-semibold text-white">Password: any password</p>
              </div>
            </div>
          </div>

          {/* Right Form Panel */}
          <div className="p-8 sm:p-12 flex flex-col justify-center space-y-6">
            <div>
              <h1 className="text-2xl font-black text-slate-900 tracking-tight">Sign in to ByteSpace</h1>
              <p className="text-xs text-slate-500 mt-1">
                Don't have an account?{' '}
                <Link href="/register" className="font-bold text-brand-blue hover:underline">
                  Register free
                </Link>
              </p>
            </div>

            {error && (
              <div className="p-3 rounded-xl bg-red-50 border border-red-200 text-red-600 text-xs font-medium">
                {error}
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="space-y-1">
                <label className="text-xs font-bold text-slate-700">Email Address</label>
                <div className="relative">
                  <input
                    type="email"
                    required
                    placeholder="shafin@bytespace.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-slate-200 text-xs text-slate-900 focus:outline-none focus:ring-2 focus:ring-brand-blue/30 focus:border-brand-blue"
                  />
                  <Mail className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
                </div>
              </div>

              <div className="space-y-1">
                <div className="flex items-center justify-between">
                  <label className="text-xs font-bold text-slate-700">Password</label>
                  <Link href="/" className="text-[11px] text-brand-blue hover:underline font-semibold">
                    Forgot password?
                  </Link>
                </div>
                <div className="relative">
                  <input
                    type="password"
                    required
                    placeholder="••••••••"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-slate-200 text-xs text-slate-900 focus:outline-none focus:ring-2 focus:ring-brand-blue/30 focus:border-brand-blue"
                  />
                  <Lock className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
                </div>
              </div>

              <button
                type="submit"
                disabled={loading}
                className="w-full py-3 rounded-xl bg-brand-blue text-white font-bold text-xs shadow-md hover:bg-blue-700 transition-all flex items-center justify-center gap-2"
              >
                {loading ? (
                  <span>Signing In...</span>
                ) : (
                  <>
                    <span>Sign In</span>
                    <ArrowRight className="w-4 h-4" />
                  </>
                )}
              </button>
            </form>
          </div>

        </div>
      </main>

      <Footer />
    </div>
  );
}
