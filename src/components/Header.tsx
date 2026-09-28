'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { ShoppingBag, Menu, X } from 'lucide-react';
import { useApp } from '@/context/AppContext';

export const Header: React.FC = () => {
  const pathname = usePathname();
  const { cart } = useApp();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const isHome = pathname === '/';
  const isSearch = pathname === '/search';
  const isCreators = pathname?.startsWith('/creator');

  return (
    <header className="w-full bg-[#0038ff] border-b border-blue-500/40 sticky top-0 z-50 backdrop-blur-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 group">
            <div className="w-9 h-9 rounded-xl bg-[#ccff00] flex items-center justify-center text-slate-950 font-black text-xl shadow-md group-hover:scale-105 transition-transform">
              <span>b</span>
            </div>
            <span className="font-extrabold text-2xl tracking-tight text-white flex items-center">
              ByteSpace
            </span>
          </Link>

          {/* Navigation Links - Centered */}
          <nav className="hidden md:flex items-center gap-8">
            <Link
              href="/"
              className={`text-sm font-semibold transition-all ${
                isHome
                  ? 'text-white px-3 py-1 rounded-lg bg-white/10 border border-white/20 font-bold'
                  : 'text-blue-100 hover:text-white'
              }`}
            >
              Home
            </Link>
            <Link
              href="/search"
              className={`text-sm transition-all ${
                isSearch
                  ? 'text-slate-950 px-3.5 py-1 rounded-full bg-[#ccff00] font-black shadow-xs'
                  : 'text-blue-100 font-semibold hover:text-white'
              }`}
            >
              Courses
            </Link>
            <Link
              href="/creator/purepearl-studio"
              className={`text-sm transition-all ${
                isCreators
                  ? 'text-slate-950 px-3 py-1 rounded-full bg-[#ccff00] font-black shadow-xs'
                  : 'text-blue-100 font-semibold hover:text-white'
              }`}
            >
              Creators
            </Link>
          </nav>

          {/* Right Action Buttons */}
          <div className="flex items-center gap-5">
            <Link
              href="/login"
              className="text-sm font-semibold text-white hover:text-blue-200 transition-colors"
            >
              Sign In
            </Link>
            <Link
              href="/register"
              className="px-5 py-2 rounded-full bg-white/10 hover:bg-white/20 text-white text-xs font-bold border border-white/30 backdrop-blur-md transition-all"
            >
              Join Us
            </Link>
            <Link
              href="/search"
              aria-label="Shopping Cart"
              className="relative p-2 text-white hover:text-[#ccff00] transition-colors"
            >
              <ShoppingBag className="w-5 h-5" />
              {cart.length > 0 && (
                <span className="absolute top-0 right-0 w-4 h-4 rounded-full bg-[#ccff00] text-slate-950 text-[10px] font-bold flex items-center justify-center">
                  {cart.length}
                </span>
              )}
            </Link>

            {/* Mobile menu toggle */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 rounded-lg text-white hover:bg-blue-700"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Nav Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#0038ff] border-t border-blue-500/40 px-4 pt-3 pb-6 space-y-3 text-white">
          <Link
            href="/"
            onClick={() => setMobileMenuOpen(false)}
            className="block px-3 py-2 rounded-lg text-sm font-bold hover:bg-blue-700"
          >
            Home
          </Link>
          <Link
            href="/search"
            onClick={() => setMobileMenuOpen(false)}
            className="block px-3 py-2 rounded-lg text-sm font-bold bg-[#ccff00] text-slate-950"
          >
            Courses
          </Link>
          <Link
            href="/creator/purepearl-studio"
            onClick={() => setMobileMenuOpen(false)}
            className="block px-3 py-2 rounded-lg text-sm font-semibold text-blue-100 hover:bg-blue-700"
          >
            Creators
          </Link>
        </div>
      )}
    </header>
  );
};
