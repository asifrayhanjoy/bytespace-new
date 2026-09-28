'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { Search, Home, ArrowLeft, HelpCircle } from 'lucide-react';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';

export default function NotFound() {
  const router = useRouter();
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      router.push(`/search?q=${encodeURIComponent(searchQuery)}`);
    } else {
      router.push('/search');
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-slate-950 text-white font-sans">
      <Header />

      <main className="flex-grow flex items-center justify-center py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
        
        {/* Glow Effects */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 rounded-full bg-brand-blue/20 blur-3xl pointer-events-none"></div>
        <div className="absolute top-1/4 right-1/4 w-64 h-64 rounded-full bg-[#d2ff00]/10 blur-2xl pointer-events-none"></div>

        <div className="max-w-2xl w-full text-center space-y-8 relative z-10">
          
          {/* Big 404 Visual */}
          <div className="relative inline-block">
            <span className="text-8xl sm:text-9xl font-black tracking-widest bg-gradient-to-r from-[#d2ff00] via-yellow-200 to-brand-blue bg-clip-text text-transparent drop-shadow-2xl">
              404
            </span>
            <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full bg-slate-900 border border-slate-700 text-xs font-extrabold text-[#d2ff00] shadow-lg whitespace-nowrap">
              The page you are looking for doesn't exist
            </div>
          </div>

          <div className="space-y-3 pt-2">
            <h1 className="text-2xl sm:text-3xl font-extrabold text-white">
              Oops! Page Not Found
            </h1>
            <p className="text-xs sm:text-sm text-slate-400 max-w-md mx-auto leading-relaxed">
              We couldn't find the page or course URL you were looking for. Try searching for a course or return to the main landing page.
            </p>
          </div>

          {/* Quick Search on 404 */}
          <form onSubmit={handleSearch} className="max-w-md mx-auto relative">
            <input
              type="text"
              placeholder="Search courses on ByteSpace..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-11 pr-24 py-3 rounded-2xl bg-slate-900 border border-slate-800 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-brand-blue"
            />
            <Search className="w-4 h-4 text-slate-400 absolute left-4 top-1/2 -translate-y-1/2" />
            <button
              type="submit"
              className="absolute right-1.5 top-1/2 -translate-y-1/2 px-4 py-1.5 rounded-xl bg-brand-blue text-white font-bold text-xs hover:bg-blue-600"
            >
              Search
            </button>
          </form>

          {/* Navigation Action Buttons */}
          <div className="flex flex-wrap items-center justify-center gap-4 pt-4">
            <Link
              href="/"
              className="px-7 py-3 rounded-full bg-[#d2ff00] text-slate-950 font-extrabold text-xs shadow-xl hover:bg-yellow-300 transition-all flex items-center gap-2"
            >
              <Home className="w-4 h-4" />
              <span>Back to Home</span>
            </Link>

            <Link
              href="/search"
              className="px-7 py-3 rounded-full bg-slate-900 border border-slate-700 text-white font-bold text-xs hover:bg-slate-800 transition-all flex items-center gap-2"
            >
              <ArrowLeft className="w-4 h-4" />
              <span>Explore All Courses</span>
            </Link>
          </div>

        </div>
      </main>

      <Footer />
    </div>
  );
}
