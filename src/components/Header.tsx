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
    <header className="w-full bg-[#0022FF] text-white relative z-50 border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 sm:gap-2.5 group shrink-0">
            <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-xl bg-[#CCFF00] flex items-center justify-center text-slate-950 font-black text-lg sm:text-xl shadow-md group-hover:scale-105 transition-transform">
              <span>b</span>
            </div>
            <span className="font-extrabold text-lg sm:text-2xl tracking-tight text-white flex items-center">
              ByteSpace
            </span>
          </Link>

          {/* Navigation Links - Centered (Desktop) */}
          <nav className="hidden md:flex items-center gap-8">
            <Link
              href="/"
              className={`text-sm sm:text-base font-medium transition-colors ${
                isHome ? 'text-white font-semibold' : 'text-white/80 hover:text-white'
              }`}
            >
              Home
            </Link>
            <Link
              href="/search"
              className={`text-sm sm:text-base font-medium transition-colors ${
                isSearch ? 'text-white font-semibold' : 'text-white/80 hover:text-white'
              }`}
            >
              Courses
            </Link>
            <Link
              href="/creator/purepearl-studio"
              className={`text-sm sm:text-base font-medium transition-colors ${
                isCreators ? 'text-white font-semibold' : 'text-white/80 hover:text-white'
              }`}
            >
              Creators
            </Link>
          </nav>

          {/* Right Action Buttons */}
          <div className="flex items-center gap-2.5 sm:gap-4 md:gap-6 shrink-0">
            <Link
              href="/login"
              className="text-xs sm:text-sm md:text-base font-medium text-white hover:text-white/80 transition-colors whitespace-nowrap"
            >
              Sign In
            </Link>
            <Link
              href="/register"
              className="text-xs sm:text-sm md:text-base font-medium text-white hover:text-white/80 transition-colors whitespace-nowrap"
            >
              Join Us
            </Link>
            <Link
              href="/search"
              aria-label="Shopping Cart"
              className="relative p-1 text-white hover:text-[#CCFF00] transition-colors shrink-0"
            >
              <ShoppingBag className="w-5 h-5 stroke-[1.8]" />
              {cart.length > 0 && (
                <span className="absolute -top-1 -right-1 w-4 h-4 rounded-full bg-[#CCFF00] text-slate-950 text-[10px] font-bold flex items-center justify-center">
                  {cart.length}
                </span>
              )}
            </Link>

            {/* Mobile menu toggle */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-1.5 rounded-lg text-white hover:bg-white/10 shrink-0"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5 sm:w-6 sm:h-6" /> : <Menu className="w-5 h-5 sm:w-6 sm:h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Nav Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#0022FF] border-t border-white/10 px-4 pt-3 pb-6 space-y-3 text-white animate-in slide-in-from-top-2">
          <Link
            href="/"
            onClick={() => setMobileMenuOpen(false)}
            className="block px-3 py-2 rounded-lg text-sm font-bold hover:bg-white/10"
          >
            Home
          </Link>
          <Link
            href="/search"
            onClick={() => setMobileMenuOpen(false)}
            className="block px-3 py-2 rounded-lg text-sm font-bold hover:bg-white/10"
          >
            Courses
          </Link>
          <Link
            href="/creator/purepearl-studio"
            onClick={() => setMobileMenuOpen(false)}
            className="block px-3 py-2 rounded-lg text-sm font-semibold hover:bg-white/10"
          >
            Creators
          </Link>
        </div>
      )}
    </header>
  );
};
