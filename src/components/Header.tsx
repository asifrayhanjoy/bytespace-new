'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { Search, ShoppingBag, User as UserIcon, LogOut, BookOpen, Layers, Menu, X, Sparkles } from 'lucide-react';
import { useApp } from '@/context/AppContext';

export const Header: React.FC = () => {
  const router = useRouter();
  const { user, cart, searchQuery, setSearchQuery, logout } = useApp();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [userDropdownOpen, setUserDropdownOpen] = useState(false);

  const handleSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      router.push(`/search?q=${encodeURIComponent(searchQuery)}`);
    } else {
      router.push('/search');
    }
  };

  return (
    <header className="sticky top-0 z-50 glass-header border-b border-slate-200/80 transition-all">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-20 gap-4">
          
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2.5 group">
            <div className="w-10 h-10 rounded-xl bg-brand-blue flex items-center justify-center text-white font-bold text-xl shadow-md group-hover:scale-105 transition-transform">
              <span className="text-[#d2ff00] font-extrabold">B</span>
            </div>
            <div className="flex flex-col">
              <span className="font-extrabold text-xl tracking-tight text-slate-900 group-hover:text-brand-blue transition-colors flex items-center gap-1">
                ByteSpace
                <span className="inline-block w-2 h-2 rounded-full bg-[#d2ff00] border border-blue-600"></span>
              </span>
              <span className="text-[10px] font-semibold tracking-wider text-slate-500 uppercase -mt-1">
                Learning Platform
              </span>
            </div>
          </Link>

          {/* Search Bar */}
          <form onSubmit={handleSearchSubmit} className="hidden md:flex flex-1 max-w-md relative">
            <div className="relative w-full">
              <input
                type="text"
                placeholder="Search courses, skills, creators..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-24 py-2.5 rounded-full bg-slate-100/90 border border-slate-200 text-sm focus:outline-none focus:ring-2 focus:ring-brand-blue/30 focus:border-brand-blue transition-all"
              />
              <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
              <button
                type="submit"
                className="absolute right-1.5 top-1/2 -translate-y-1/2 px-4 py-1.5 rounded-full bg-brand-blue text-white text-xs font-semibold hover:bg-blue-700 transition-colors"
              >
                Search
              </button>
            </div>
          </form>

          {/* Nav Links & Actions */}
          <nav className="hidden lg:flex items-center gap-6">
            <Link href="/" className="text-sm font-semibold text-slate-700 hover:text-brand-blue transition-colors">
              Home
            </Link>
            <Link href="/search" className="text-sm font-semibold text-slate-700 hover:text-brand-blue transition-colors">
              Explore Courses
            </Link>
            <Link href="/creator/purepixel-studio" className="text-sm font-semibold text-slate-700 hover:text-brand-blue transition-colors">
              Creators
            </Link>
          </nav>

          {/* User & Cart Actions */}
          <div className="flex items-center gap-3">
            <Link
              href="/search"
              aria-label="View Cart"
              className="relative p-2.5 rounded-full text-slate-700 hover:bg-slate-100 transition-colors"
            >
              <ShoppingBag className="w-5 h-5" />
              {cart.length > 0 && (
                <span className="absolute top-1 right-1 w-4 h-4 rounded-full bg-brand-blue text-white text-[10px] font-bold flex items-center justify-center animate-pulse">
                  {cart.length}
                </span>
              )}
            </Link>

            {user ? (
              <div className="relative">
                <button
                  onClick={() => setUserDropdownOpen(!userDropdownOpen)}
                  className="flex items-center gap-2 p-1.5 rounded-full hover:bg-slate-100 transition-colors border border-slate-200"
                >
                  <img
                    src={user.avatar}
                    alt={user.name}
                    className="w-8 h-8 rounded-full object-cover border border-brand-blue"
                  />
                  <span className="hidden sm:inline-block text-xs font-bold text-slate-800 pr-1">
                    {user.name.split(' ')[0]}
                  </span>
                </button>

                {userDropdownOpen && (
                  <div className="absolute right-0 mt-2 w-56 bg-white rounded-2xl shadow-xl border border-slate-100 py-2 z-50 animate-in fade-in slide-in-from-top-2">
                    <div className="px-4 py-2 border-b border-slate-100">
                      <p className="text-xs font-bold text-slate-900">{user.name}</p>
                      <p className="text-[11px] text-slate-500 truncate">{user.email}</p>
                    </div>
                    <Link
                      href="/courses/build-digital-asset/learn"
                      onClick={() => setUserDropdownOpen(false)}
                      className="flex items-center gap-2.5 px-4 py-2 text-xs font-medium text-slate-700 hover:bg-slate-50 hover:text-brand-blue"
                    >
                      <BookOpen className="w-4 h-4" />
                      My Learning
                    </Link>
                    <Link
                      href="/creator/purepixel-studio"
                      onClick={() => setUserDropdownOpen(false)}
                      className="flex items-center gap-2.5 px-4 py-2 text-xs font-medium text-slate-700 hover:bg-slate-50 hover:text-brand-blue"
                    >
                      <Layers className="w-4 h-4" />
                      Creator Studio
                    </Link>
                    <button
                      onClick={() => {
                        logout();
                        setUserDropdownOpen(false);
                      }}
                      className="w-full flex items-center gap-2.5 px-4 py-2 text-xs font-medium text-red-600 hover:bg-red-50 text-left"
                    >
                      <LogOut className="w-4 h-4" />
                      Log Out
                    </button>
                  </div>
                )}
              </div>
            ) : (
              <div className="flex items-center gap-2">
                <Link
                  href="/login"
                  className="px-4 py-2 text-xs font-bold text-slate-700 hover:text-brand-blue transition-colors"
                >
                  Log In
                </Link>
                <Link
                  href="/register"
                  className="px-4.5 py-2 text-xs font-bold rounded-full bg-brand-blue text-white shadow-md hover:bg-blue-700 transition-all hover:shadow-blue-500/25"
                >
                  Register
                </Link>
              </div>
            )}

            {/* Mobile menu button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 rounded-lg text-slate-700 hover:bg-slate-100"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-t border-slate-200 bg-white px-4 pt-3 pb-6 space-y-3">
          <form onSubmit={handleSearchSubmit} className="relative">
            <input
              type="text"
              placeholder="Search courses..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-2 rounded-lg bg-slate-100 text-sm focus:outline-none"
            />
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
          </form>
          <div className="flex flex-col gap-2 pt-2">
            <Link
              href="/"
              onClick={() => setMobileMenuOpen(false)}
              className="px-3 py-2 rounded-lg text-sm font-semibold text-slate-700 hover:bg-slate-100"
            >
              Home
            </Link>
            <Link
              href="/search"
              onClick={() => setMobileMenuOpen(false)}
              className="px-3 py-2 rounded-lg text-sm font-semibold text-slate-700 hover:bg-slate-100"
            >
              Search Courses
            </Link>
            <Link
              href="/creator/purepixel-studio"
              onClick={() => setMobileMenuOpen(false)}
              className="px-3 py-2 rounded-lg text-sm font-semibold text-slate-700 hover:bg-slate-100"
            >
              Creator Profile
            </Link>
            {!user && (
              <div className="flex flex-col gap-2 pt-2 border-t border-slate-100">
                <Link
                  href="/login"
                  onClick={() => setMobileMenuOpen(false)}
                  className="w-full text-center py-2 rounded-lg border border-slate-200 text-xs font-bold text-slate-800"
                >
                  Log In
                </Link>
                <Link
                  href="/register"
                  onClick={() => setMobileMenuOpen(false)}
                  className="w-full text-center py-2 rounded-lg bg-brand-blue text-white text-xs font-bold"
                >
                  Sign Up Free
                </Link>
              </div>
            )}
          </div>
        </div>
      )}
    </header>
  );
};
