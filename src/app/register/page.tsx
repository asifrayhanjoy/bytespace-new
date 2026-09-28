'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { Mail, Lock, User as UserIcon, ArrowRight, CheckCircle2, Sparkles } from 'lucide-react';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { useApp } from '@/context/AppContext';

export default function RegisterPage() {
  const router = useRouter();
  const { register } = useApp();

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [agreeTerms, setAgreeTerms] = useState(false);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !email || !password) {
      setError('Please fill in all required fields.');
      return;
    }
    if (!agreeTerms) {
      setError('Please agree to the Terms of Service.');
      return;
    }

    setLoading(true);
    setTimeout(() => {
      register(name, email);
      router.push('/');
    }, 600);
  };

  return (
    <div className="min-h-screen flex flex-col bg-slate-50">
      <Header />

      <main className="flex-grow flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
        <div className="w-full max-w-4xl bg-white rounded-3xl border border-slate-200 card-shadow overflow-hidden grid grid-cols-1 md:grid-cols-2">
          
          {/* Left Promo Branding Panel */}
          <div className="bg-gradient-to-br from-brand-blue via-blue-700 to-indigo-900 p-8 lg:p-12 text-white flex flex-col justify-between relative overflow-hidden">
            <div className="absolute top-0 right-0 -mr-12 -mt-12 w-64 h-64 rounded-full bg-[#d2ff00]/10 blur-2xl"></div>
            
            <div className="space-y-4 relative z-10">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/10 text-[#d2ff00] text-xs font-bold border border-white/20">
                <Sparkles className="w-3.5 h-3.5" />
                <span>Welcome to ByteSpace</span>
              </div>
              <h2 className="text-3xl font-black leading-tight">
                Start Your Tech & Design Journey Today
              </h2>
              <p className="text-xs text-blue-100 leading-relaxed">
                Join over 15,000+ creators and learners building high-value digital products and mastering modern development.
              </p>
            </div>

            <div className="space-y-3 pt-6 relative z-10 border-t border-white/10">
              <div className="flex items-center gap-2.5 text-xs text-blue-100 font-medium">
                <CheckCircle2 className="w-4 h-4 text-[#d2ff00]" />
                <span>Access 100+ masterclass video courses</span>
              </div>
              <div className="flex items-center gap-2.5 text-xs text-blue-100 font-medium">
                <CheckCircle2 className="w-4 h-4 text-[#d2ff00]" />
                <span>Download source code & Figma UI kits</span>
              </div>
              <div className="flex items-center gap-2.5 text-xs text-blue-100 font-medium">
                <CheckCircle2 className="w-4 h-4 text-[#d2ff00]" />
                <span>Connect with top verified creator studios</span>
              </div>
            </div>

            <div className="pt-6 relative z-10">
              <div className="flex items-center gap-3">
                <img
                  src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=120"
                  alt="PurePixel Studio"
                  className="w-10 h-10 rounded-full border-2 border-[#d2ff00] object-cover"
                />
                <div>
                  <p className="text-xs font-bold text-white">PurePixel Studio</p>
                  <p className="text-[10px] text-blue-200">Verified Creator Studio</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Form Panel */}
          <div className="p-8 sm:p-12 flex flex-col justify-center space-y-6">
            <div>
              <h1 className="text-2xl font-black text-slate-900 tracking-tight">Create your account</h1>
              <p className="text-xs text-slate-500 mt-1">
                Already have an account?{' '}
                <Link href="/login" className="font-bold text-brand-blue hover:underline">
                  Sign in
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
                <label className="text-xs font-bold text-slate-700">Full Name</label>
                <div className="relative">
                  <input
                    type="text"
                    required
                    placeholder="Shafin Ahmed"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-slate-200 text-xs text-slate-900 focus:outline-none focus:ring-2 focus:ring-brand-blue/30 focus:border-brand-blue"
                  />
                  <UserIcon className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
                </div>
              </div>

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
                <label className="text-xs font-bold text-slate-700">Password</label>
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

              <div className="flex items-center gap-2 pt-1">
                <input
                  type="checkbox"
                  id="terms"
                  checked={agreeTerms}
                  onChange={(e) => setAgreeTerms(e.target.checked)}
                  className="rounded border-slate-300 text-brand-blue focus:ring-brand-blue"
                />
                <label htmlFor="terms" className="text-xs text-slate-600">
                  I agree to the{' '}
                  <Link href="/" className="text-brand-blue underline">
                    Terms of Service
                  </Link>{' '}
                  and Privacy Policy.
                </label>
              </div>

              <button
                type="submit"
                disabled={loading}
                className="w-full py-3 rounded-xl bg-brand-blue text-white font-bold text-xs shadow-md hover:bg-blue-700 transition-all flex items-center justify-center gap-2"
              >
                {loading ? (
                  <span>Creating Account...</span>
                ) : (
                  <>
                    <span>Create Account</span>
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
