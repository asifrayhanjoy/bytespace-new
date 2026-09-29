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
    <div className="min-h-screen bg-[#0022FF] text-white flex flex-col justify-between relative overflow-hidden font-sans selection:bg-[#CCFF00] selection:text-slate-950">
      {/* Background Royal Blue Grid Overlay */}
      <div
        className="absolute inset-0 opacity-20 pointer-events-none"
        style={{
          backgroundImage:
            'linear-gradient(rgba(255, 255, 255, 0.2) 1px, transparent 1px), linear-gradient(90deg, rgba(255, 255, 255, 0.2) 1px, transparent 1px)',
          backgroundSize: '75px 75px',
        }}
      ></div>

      {/* Top Left Logo Header (Clean without bounding box) */}
      <div className="p-6 sm:p-8 relative z-20">
        <Link href="/" className="inline-flex items-center gap-2">
          <div className="w-10 h-10 rounded-2xl bg-[#CCFF00] flex items-center justify-center text-slate-950 font-black text-2xl shadow-lg hover:scale-105 transition-transform">
            <span>b</span>
          </div>
        </Link>
      </div>

      {/* Main Workspace (Left Graphic Showcase + Right Form Card) */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full py-6 relative z-10 flex-grow flex items-center">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center w-full">
          {/* Left Column: Title, Description & Layered Card Showcase */}
          <div className="lg:col-span-6 space-y-8">
            <div className="space-y-3">
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight leading-tight">
                Sign in with ease
              </h1>
              <p className="text-xs sm:text-sm text-blue-100/90 max-w-md font-medium leading-relaxed">
                Experience a seamless and efficient sign-in process that grants you instant access to a world of knowledge.
              </p>
            </div>

            {/* Layered Cards Showcase Container */}
            <div className="relative pt-4 pb-16 min-h-[420px] flex items-center">
              {/* 3D Yellow Torus/Loop Shape Top Left */}
              <div className="absolute top-2 left-6 z-30 pointer-events-none">
                <svg width="70" height="70" viewBox="0 0 100 100" fill="none" className="drop-shadow-xl animate-pulse">
                  <path
                    d="M30,50 C30,25 70,25 70,50 C70,75 30,75 30,50 Z"
                    stroke="#CCFF00"
                    strokeWidth="20"
                    strokeLinecap="round"
                    fill="none"
                  />
                </svg>
              </div>

              {/* Back Card: Build Digital Asset */}
              <div className="absolute top-12 left-0 w-64 sm:w-80 bg-white rounded-3xl p-3.5 sm:p-4 text-slate-900 shadow-xl opacity-90 -rotate-6 border border-slate-100">
                <div className="relative aspect-[16/10] rounded-2xl overflow-hidden bg-slate-100 mb-2">
                  <img
                    src="https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&q=80&w=400"
                    alt="Build Digital Asset"
                    className="w-full h-full object-cover"
                  />
                  <span className="absolute bottom-2 left-2 px-2 py-0.5 rounded-full text-[9px] font-semibold bg-white/90 text-slate-800">
                    17 Lessons
                  </span>
                </div>
                <h4 className="font-extrabold text-xs sm:text-sm text-slate-900">Build Digital Asset</h4>
                <p className="text-[10px] sm:text-xs text-blue-600 font-semibold">by purepearl studio</p>
                <div className="flex items-center justify-between pt-1 text-[10px] sm:text-xs">
                  <span className="px-2 py-0.5 rounded bg-slate-100 text-slate-600 font-medium">Beginner</span>
                  <span className="font-black text-blue-600">$25<span className="text-slate-400 font-normal text-[9px] sm:text-xs">/lifetime</span></span>
                </div>
              </div>

              {/* Front Main Card: the Power of Big Data */}
              <div className="absolute top-4 left-6 sm:left-16 lg:left-24 w-[calc(100vw-80px)] max-w-xs sm:w-96 bg-white rounded-3xl p-3.5 sm:p-5 text-slate-900 shadow-2xl border border-slate-200 z-20 space-y-2.5 sm:space-y-3">
                <div className="relative aspect-[16/10] rounded-2xl overflow-hidden bg-slate-900">
                  <img
                    src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=500"
                    alt="the Power of Big Data"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute bottom-2 left-2 right-2 sm:bottom-2.5 sm:left-2.5 sm:right-2.5 flex items-center justify-between gap-1 text-[8px] sm:text-[10px] font-semibold bg-slate-900/80 backdrop-blur-md px-2.5 py-0.5 sm:px-3 sm:py-1 rounded-full text-white">
                    <span>17 Lessons</span>
                    <span>2 hours 16 mins</span>
                    <span className="hidden sm:inline">59 Comments</span>
                  </div>
                </div>

                <div className="flex justify-between items-start pt-1">
                  <div>
                    <h4 className="font-extrabold text-xs sm:text-base text-slate-900 tracking-tight">
                      the Power of Big Data
                    </h4>
                    <p className="text-[10px] sm:text-xs text-blue-600 font-semibold">
                      by <span className="hover:underline">purepearl studio</span>
                    </p>
                  </div>
                  <div className="flex items-center gap-1 text-xs font-bold text-slate-700">
                    <span>4.5</span>
                    <Star className="w-3 h-3 sm:w-3.5 sm:h-3.5 fill-[#CCFF00] text-[#CCFF00]" />
                  </div>
                </div>

                <div className="flex items-center justify-between pt-1 border-t border-slate-100 text-[10px] sm:text-xs">
                  <span className="px-2 py-0.5 sm:px-3 sm:py-1 rounded-lg bg-slate-100 text-slate-600 font-medium flex items-center gap-1">
                    <BarChart2 className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-slate-500" /> Beginner
                  </span>

                  <div className="flex items-center -space-x-1.5">
                    <img src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=40" alt="User" className="w-4 h-4 sm:w-5 sm:h-5 rounded-full border border-white object-cover" />
                    <img src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=40" alt="User" className="w-4 h-4 sm:w-5 sm:h-5 rounded-full border border-white object-cover" />
                    <img src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=40" alt="User" className="w-4 h-4 sm:w-5 sm:h-5 rounded-full border border-white object-cover" />
                    <img src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=40" alt="User" className="w-4 h-4 sm:w-5 sm:h-5 rounded-full border border-white object-cover" />
                    <span className="w-4 h-4 sm:w-5 sm:h-5 rounded-full bg-[#CCFF00] text-slate-950 font-extrabold text-[8px] sm:text-[9px] flex items-center justify-center border border-white">26+</span>
                  </div>

                  <span className="font-extrabold text-blue-600 text-xs sm:text-sm">$25<span className="text-slate-400 font-normal text-[9px] sm:text-xs">/lifetime</span></span>
                </div>
              </div>

              {/* Green 3D Pyramid Shape Bottom Left */}
              <div className="absolute bottom-0 left-0 z-30 pointer-events-none transform -rotate-12">
                <svg width="100" height="110" viewBox="0 0 100 110" fill="none" className="drop-shadow-2xl">
                  <path d="M50,10 L90,80 L50,105 Z" fill="#b4e600" />
                  <path d="M50,10 L10,80 L50,105 Z" fill="#CCFF00" />
                  <path d="M10,80 L90,80 L50,105 Z" fill="#88cc00" />
                </svg>
              </div>

              {/* White 3D Ribbon Shape Right */}
              <div className="absolute top-32 right-0 sm:-right-4 z-30 pointer-events-none opacity-90">
                <svg width="60" height="90" viewBox="0 0 60 90" fill="none" className="drop-shadow-lg">
                  <path
                    d="M10 10 C 30 10, 50 30, 30 50 C 10 70, 40 80, 50 85"
                    stroke="#FFFFFF"
                    strokeWidth="14"
                    strokeLinecap="round"
                    fill="none"
                  />
                </svg>
              </div>

              {/* Floating Bottom Badge Card: Happy Students */}
              <div className="absolute bottom-2 left-36 sm:left-48 bg-[#CCFF00] text-slate-950 p-4 rounded-2xl shadow-2xl z-30 border border-white/60 w-56 space-y-1">
                <span className="text-xs font-extrabold block tracking-tight">Happy Students</span>
                <span className="text-xs font-bold text-slate-900 flex items-center gap-1">
                  4.5 (240) <Star className="w-3.5 h-3.5 fill-blue-600 text-blue-600" />
                </span>
                <div className="flex items-center -space-x-1.5 pt-1">
                  <img src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=40" alt="Student" className="w-6 h-6 rounded-full border border-slate-950 object-cover" />
                  <img src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=40" alt="Student" className="w-6 h-6 rounded-full border border-slate-950 object-cover" />
                  <img src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=40" alt="Student" className="w-6 h-6 rounded-full border border-slate-950 object-cover" />
                  <img src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=40" alt="Student" className="w-6 h-6 rounded-full border border-slate-950 object-cover" />
                  <img src="https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&q=80&w=40" alt="Student" className="w-6 h-6 rounded-full border border-slate-950 object-cover" />
                  <span className="w-6 h-6 rounded-full bg-slate-950 text-[#CCFF00] font-black text-[10px] flex items-center justify-center border border-[#CCFF00]">2K+</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: White Card Login Form */}
          <div className="lg:col-span-6 flex justify-center lg:justify-end">
            <div className="bg-white rounded-[32px] p-8 sm:p-12 shadow-2xl max-w-lg w-full text-slate-900 border border-slate-100 space-y-6">
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
                  <label className="text-xs font-extrabold text-slate-700">Email</label>
                  <input
                    type="email"
                    required
                    placeholder="designer@example.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full px-4 py-3.5 rounded-2xl border border-slate-200 text-xs text-slate-900 placeholder-slate-400 focus:outline-none focus:border-blue-600 bg-white"
                  />
                </div>

                <div className="space-y-1.5">
                  <label className="text-xs font-extrabold text-slate-700">Password</label>
                  <input
                    type="password"
                    required
                    placeholder="********"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="w-full px-4 py-3.5 rounded-2xl border border-slate-200 text-xs text-slate-900 placeholder-slate-400 focus:outline-none focus:border-blue-600 bg-white"
                  />
                </div>

                {/* Right-aligned Pill Button "Sign In" */}
                <div className="pt-2 flex justify-end">
                  <button
                    type="submit"
                    className="px-8 py-3.5 rounded-full bg-[#CCFF00] text-slate-950 font-extrabold text-xs shadow-md hover:bg-[#b8e600] transition-colors"
                  >
                    Sign In
                  </button>
                </div>
              </form>

              {/* Divider Line with 'or' */}
              <div className="relative flex items-center justify-center my-6">
                <div className="border-t border-slate-200 w-full"></div>
                <span className="bg-white px-4 text-xs text-slate-400 font-medium shrink-0">or</span>
                <div className="border-t border-slate-200 w-full"></div>
              </div>

              {/* Social Login Circle Buttons */}
              <div className="flex items-center justify-center gap-4">
                <button
                  type="button"
                  aria-label="Sign in with Facebook"
                  className="w-12 h-12 rounded-full border border-slate-200 flex items-center justify-center text-slate-900 font-black text-lg hover:bg-slate-50 transition-colors shadow-xs"
                >
                  f
                </button>
                <button
                  type="button"
                  aria-label="Sign in with Google"
                  className="w-12 h-12 rounded-full border border-slate-200 flex items-center justify-center text-slate-900 font-black text-lg hover:bg-slate-50 transition-colors shadow-xs"
                >
                  G
                </button>
              </div>

              {/* New user link */}
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
      <footer className="py-4 text-center text-[10px] text-blue-100/60 relative z-10">
        © 2023 ByteSpace. All rights reserved.
      </footer>
    </div>
  );
}
