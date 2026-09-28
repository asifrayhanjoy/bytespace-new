'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { Star, BarChart2 } from 'lucide-react';
import { useApp } from '@/context/AppContext';

export default function LoginPage() {
  const router = useRouter();
  const { login } = useApp();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    login(email || 'designer@example.com');
    router.push('/');
  };

  return (
    <div className="min-h-screen bg-[#0038ff] text-white flex flex-col justify-between relative overflow-hidden font-sans selection:bg-[#ccff00] selection:text-slate-950">
      
      {/* Background Grid Pattern Overlay */}
      <div
        className="absolute inset-0 opacity-15 pointer-events-none"
        style={{
          backgroundImage:
            'linear-gradient(#ffffff 1px, transparent 1px), linear-gradient(90deg, #ffffff 1px, transparent 1px)',
          backgroundSize: '40px 40px',
        }}
      ></div>

      {/* Top Left Logo Header */}
      <div className="p-6 sm:p-8 relative z-10">
        <Link href="/" className="inline-flex items-center gap-2">
          <div className="w-9 h-9 rounded-xl bg-[#ccff00] flex items-center justify-center text-slate-950 font-black text-xl shadow-md">
            <span>b</span>
          </div>
        </Link>
      </div>

      {/* Main Workspace (Left Graphic Showcase + Right Form Card) */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full py-8 relative z-10 flex-grow flex items-center">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center w-full">
          
          {/* Left Column: Title, Description & Layered Card Showcase */}
          <div className="lg:col-span-6 space-y-8">
            <div className="space-y-3">
              <h1 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
                Sign in with ease
              </h1>
              <p className="text-xs sm:text-sm text-blue-100 max-w-sm font-medium leading-relaxed">
                Experience a seamless and efficient sign-in process that grants you instant access to a world of knowledge.
              </p>
            </div>

            {/* Layered Cards Showcase */}
            <div className="relative pt-6 pb-12 min-h-[360px] flex items-center">
              
              {/* Back Card: Build Digital Asset */}
              <div className="absolute top-0 left-0 w-72 bg-white rounded-3xl p-4 text-slate-900 shadow-lg opacity-85 transform -rotate-6">
                <div className="aspect-video rounded-xl bg-slate-100 overflow-hidden mb-2">
                  <img
                    src="https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&q=80&w=400"
                    alt="Build Digital Asset"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="flex gap-1.5 text-[9px] text-slate-500 mb-1">
                  <span>17 Lessons</span>
                </div>
                <h4 className="font-extrabold text-xs text-slate-900">Build Digital Asset</h4>
                <p className="text-[10px] text-blue-600 font-semibold">by purepearl studio</p>
              </div>

              {/* Front Main Card: the Power of Big Data */}
              <div className="absolute top-8 left-12 w-80 bg-white rounded-3xl p-4 text-slate-900 shadow-2xl border border-slate-100 z-20 space-y-2">
                <div className="relative aspect-video rounded-2xl overflow-hidden bg-slate-900">
                  <img
                    src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=400"
                    alt="the Power of Big Data"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute bottom-2 left-2 flex gap-1 text-[9px] font-semibold bg-white/80 backdrop-blur-md px-2 py-0.5 rounded-full text-slate-800">
                    <span>17 Lessons</span>
                    <span>2 hours 16 mins</span>
                    <span>59 Comments</span>
                  </div>
                </div>

                <div className="flex justify-between items-start">
                  <div>
                    <h4 className="font-extrabold text-xs text-slate-900">the Power of Big Data</h4>
                    <p className="text-[10px] text-blue-600 font-semibold">by purepearl studio</p>
                  </div>
                  <div className="flex items-center gap-0.5 text-xs font-bold text-slate-700">
                    <span>4.5</span>
                    <Star className="w-3 h-3 fill-amber-400 text-amber-400" />
                  </div>
                </div>

                <div className="flex items-center justify-between pt-1 border-t border-slate-100 text-[10px]">
                  <span className="px-2 py-0.5 rounded bg-slate-100 text-slate-600 font-semibold flex items-center gap-1">
                    <BarChart2 className="w-3 h-3" /> Beginner
                  </span>
                  <div className="flex items-center -space-x-1">
                    <img src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=40" alt="User" className="w-4 h-4 rounded-full border border-white" />
                    <img src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=40" alt="User" className="w-4 h-4 rounded-full border border-white" />
                    <span className="w-4 h-4 rounded-full bg-[#ccff00] text-slate-950 font-bold text-[8px] flex items-center justify-center">26+</span>
                  </div>
                  <span className="font-extrabold text-blue-600">$25<span className="text-slate-400 font-normal">/lifetime</span></span>
                </div>
              </div>

              {/* Floating Bottom Card: Happy Students 4.5 (240) ★ */}
              <div className="absolute bottom-0 left-28 bg-[#ccff00] text-slate-950 p-3 rounded-2xl shadow-xl z-30 space-y-1 border border-white/50 w-44">
                <span className="text-[10px] font-extrabold block">Happy Students</span>
                <span className="text-[10px] font-bold text-slate-800 flex items-center gap-1">
                  4.5 (240) <Star className="w-3 h-3 fill-slate-950 text-slate-950" />
                </span>
                <div className="flex items-center -space-x-1 pt-1">
                  <img src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=40" alt="User" className="w-5 h-5 rounded-full border border-slate-950" />
                  <img src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=40" alt="User" className="w-5 h-5 rounded-full border border-slate-950" />
                  <img src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=40" alt="User" className="w-5 h-5 rounded-full border border-slate-950" />
                  <span className="w-5 h-5 rounded-full bg-slate-950 text-[#ccff00] font-black text-[9px] flex items-center justify-center">2K+</span>
                </div>
              </div>

              {/* 3D Decorative Shape */}
              <div className="absolute bottom-4 left-0 w-16 h-16 bg-[#ccff00] rounded-xl transform rotate-45 border-2 border-slate-950 opacity-90 pointer-events-none"></div>

            </div>
          </div>

          {/* Right Column: White Card Login Form */}
          <div className="lg:col-span-6 flex justify-center lg:justify-end">
            <div className="bg-white rounded-3xl p-8 sm:p-12 shadow-2xl max-w-md w-full text-slate-900 border border-slate-100 space-y-6">
              
              <div>
                <span className="text-xs font-semibold text-blue-600 block mb-1">
                  Sign In
                </span>
                <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
                  Welcome Back
                </h2>
              </div>

              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="space-y-1.5">
                  <label className="text-xs font-bold text-slate-700">Email</label>
                  <input
                    type="email"
                    required
                    placeholder="designer@example.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full px-4 py-3 rounded-2xl border border-slate-200 text-xs text-slate-900 placeholder-slate-400 focus:outline-none focus:border-blue-600 bg-white"
                  />
                </div>

                <div className="space-y-1.5">
                  <label className="text-xs font-bold text-slate-700">Password</label>
                  <input
                    type="password"
                    required
                    placeholder="********"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="w-full px-4 py-3 rounded-2xl border border-slate-200 text-xs text-slate-900 placeholder-slate-400 focus:outline-none focus:border-blue-600 bg-white"
                  />
                </div>

                <div className="pt-2">
                  <button
                    type="submit"
                    className="w-full py-3.5 rounded-full bg-[#ccff00] text-slate-950 font-extrabold text-xs shadow-md hover:bg-[#b8e600] transition-colors"
                  >
                    Sign In
                  </button>
                </div>
              </form>

              {/* Divider: or */}
              <div className="relative flex items-center justify-center my-6">
                <div className="border-t border-slate-200 w-full"></div>
                <span className="bg-white px-3 text-xs text-slate-400 font-medium shrink-0">or</span>
                <div className="border-t border-slate-200 w-full"></div>
              </div>

              {/* Social Auth Buttons (Facebook & Google) */}
              <div className="flex items-center justify-center gap-4">
                <button
                  type="button"
                  aria-label="Sign in with Facebook"
                  className="w-12 h-12 rounded-full border border-slate-200 flex items-center justify-center text-slate-900 font-black text-base hover:bg-slate-50 transition-colors shadow-xs"
                >
                  f
                </button>
                <button
                  type="button"
                  aria-label="Sign in with Google"
                  className="w-12 h-12 rounded-full border border-slate-200 flex items-center justify-center text-slate-900 font-black text-base hover:bg-slate-50 transition-colors shadow-xs"
                >
                  G
                </button>
              </div>

              <div className="text-center pt-2">
                <p className="text-xs text-slate-500 font-medium">
                  New user?{' '}
                  <Link href="/register" className="font-bold text-blue-600 hover:underline">
                    Create an account
                  </Link>
                </p>
              </div>

            </div>
          </div>

        </div>
      </main>

      {/* Footer copyright */}
      <footer className="py-4 text-center text-[10px] text-blue-200/60 relative z-10">
        © 2023 ByteSpace. All rights reserved.
      </footer>

    </div>
  );
}
