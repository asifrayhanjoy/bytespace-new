import React from 'react';
import Link from 'next/link';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-white text-slate-700 pt-16 pb-12 border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Top Newsletter & Brand & Link Columns */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          
          {/* Brand & Newsletter Column */}
          <div className="lg:col-span-5 space-y-5">
            <Link href="/" className="flex items-center gap-2 group">
              <div className="w-8 h-8 rounded-xl bg-[#ccff00] flex items-center justify-center text-slate-950 font-black text-lg">
                <span>b</span>
              </div>
              <span className="font-extrabold text-2xl tracking-tight text-slate-900">
                ByteSpace
              </span>
            </Link>

            <p className="text-xs text-slate-600 leading-relaxed max-w-sm font-medium">
              Stay Up to date with our latest features and releases by joining our newsletter.
            </p>

            {/* Newsletter Input */}
            <form onSubmit={(e) => e.preventDefault()} className="max-w-md space-y-2">
              <div className="relative flex items-center">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="w-full pl-4 pr-28 py-3 rounded-full border border-slate-300 text-xs text-slate-900 placeholder-slate-400 focus:outline-none focus:border-blue-600 bg-white"
                />
                <button
                  type="submit"
                  className="absolute right-1.5 top-1/2 -translate-y-1/2 px-6 py-2 rounded-full bg-[#ccff00] text-slate-950 font-bold text-xs hover:bg-[#b8e600] transition-colors shadow-xs"
                >
                  Search
                </button>
              </div>
              <p className="text-[10px] text-slate-400 leading-tight">
                By subscribing, you agree to our Privacy Policy and consent to receive updates from our company.
              </p>
            </form>
          </div>

          {/* Links Columns (3 Columns) */}
          <div className="lg:col-span-7 grid grid-cols-2 sm:grid-cols-3 gap-8">
            {/* Column 1 */}
            <div className="space-y-3">
              <ul className="space-y-2.5 text-xs font-semibold text-slate-600">
                <li><Link href="/search" className="hover:text-blue-600 transition-colors">Featured Courses</Link></li>
                <li><Link href="/search" className="hover:text-blue-600 transition-colors">Featured Categories</Link></li>
                <li><Link href="/search?category=business" className="hover:text-blue-600 transition-colors">Business</Link></li>
                <li><Link href="/search?category=it-software" className="hover:text-blue-600 transition-colors">IT</Link></li>
                <li><Link href="/search?category=design" className="hover:text-blue-600 transition-colors">Design</Link></li>
              </ul>
            </div>

            {/* Column 2 */}
            <div className="space-y-3">
              <ul className="space-y-2.5 text-xs font-semibold text-slate-600">
                <li><Link href="/search?category=development" className="hover:text-blue-600 transition-colors">Development</Link></li>
                <li><Link href="/search?category=marketing" className="hover:text-blue-600 transition-colors">Marketing</Link></li>
                <li><Link href="/search?category=photography" className="hover:text-blue-600 transition-colors">Photography</Link></li>
                <li><Link href="/search" className="hover:text-blue-600 transition-colors">Finance</Link></li>
                <li><Link href="/search" className="hover:text-blue-600 transition-colors">Sport</Link></li>
              </ul>
            </div>

            {/* Column 3 */}
            <div className="space-y-3">
              <ul className="space-y-2.5 text-xs font-semibold text-slate-600">
                <li><Link href="/register" className="hover:text-blue-600 transition-colors">Become a Creator</Link></li>
                <li><Link href="/" className="hover:text-blue-600 transition-colors">Affiliate Program</Link></li>
                <li><Link href="/" className="hover:text-blue-600 transition-colors">Contact</Link></li>
                <li><Link href="/" className="hover:text-blue-600 transition-colors">Help</Link></li>
                <li><Link href="/" className="hover:text-blue-600 transition-colors">About</Link></li>
              </ul>
            </div>
          </div>

        </div>

        {/* Bottom Copyright Bar */}
        <div className="pt-8 border-t border-slate-200 flex flex-col sm:flex-row items-center justify-between text-[11px] text-slate-500 gap-4">
          <p>@ 2023 ByteSpace. All rights reserved.</p>
          <div className="flex items-center gap-6 font-medium">
            <Link href="/" className="hover:text-slate-900">Privacy Policy</Link>
            <Link href="/" className="hover:text-slate-900">Terms of Service</Link>
            <Link href="/" className="hover:text-slate-900">Cookies Settings</Link>
          </div>
        </div>

      </div>
    </footer>
  );
};
