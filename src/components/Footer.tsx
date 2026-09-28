import React from 'react';
import Link from 'next/link';
import { ArrowRight, Heart, Globe, ExternalLink } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-950 text-slate-300 pt-16 pb-12 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-12 border-b border-slate-800/80">
          
          {/* Brand Info */}
          <div className="lg:col-span-2 space-y-4">
            <Link href="/" className="flex items-center gap-2.5">
              <div className="w-10 h-10 rounded-xl bg-brand-blue flex items-center justify-center text-white font-bold text-xl">
                <span className="text-[#d2ff00] font-extrabold">B</span>
              </div>
              <span className="font-extrabold text-2xl tracking-tight text-white flex items-center gap-1">
                ByteSpace
                <span className="w-2 h-2 rounded-full bg-[#d2ff00]"></span>
              </span>
            </Link>
            <p className="text-sm text-slate-400 max-w-sm leading-relaxed">
              ByteSpace is the modern learning and creator ecosystem empowering developers, designers, and innovators to build and monetize world-class digital assets.
            </p>
            <div className="flex items-center gap-3 pt-2">
              <a href="https://twitter.com" target="_blank" rel="noreferrer" aria-label="Twitter" className="p-2.5 rounded-full bg-slate-900 hover:bg-brand-blue hover:text-white transition-colors text-slate-400">
                <Globe className="w-4 h-4" />
              </a>
              <a href="https://github.com" target="_blank" rel="noreferrer" aria-label="GitHub" className="p-2.5 rounded-full bg-slate-900 hover:bg-brand-blue hover:text-white transition-colors text-slate-400">
                <ExternalLink className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-100">Popular Categories</h4>
            <ul className="space-y-2 text-xs font-medium text-slate-400">
              <li><Link href="/search?category=development" className="hover:text-[#d2ff00] transition-colors">Web Development</Link></li>
              <li><Link href="/search?category=design" className="hover:text-[#d2ff00] transition-colors">UI/UX & Product Design</Link></li>
              <li><Link href="/search?category=data-ai" className="hover:text-[#d2ff00] transition-colors">Data Science & AI</Link></li>
              <li><Link href="/search?category=marketing" className="hover:text-[#d2ff00] transition-colors">Digital Marketing</Link></li>
              <li><Link href="/search?category=business" className="hover:text-[#d2ff00] transition-colors">Business & Strategy</Link></li>
            </ul>
          </div>

          {/* Navigation */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-100">Platform</h4>
            <ul className="space-y-2 text-xs font-medium text-slate-400">
              <li><Link href="/search" className="hover:text-[#d2ff00] transition-colors">Browse Courses</Link></li>
              <li><Link href="/courses/build-digital-asset" className="hover:text-[#d2ff00] transition-colors">Featured Asset Guide</Link></li>
              <li><Link href="/creator/purepixel-studio" className="hover:text-[#d2ff00] transition-colors">PurePixel Creator Studio</Link></li>
              <li><Link href="/register" className="hover:text-[#d2ff00] transition-colors">Become an Instructor</Link></li>
              <li><Link href="/login" className="hover:text-[#d2ff00] transition-colors">Student Sign In</Link></li>
            </ul>
          </div>

          {/* Newsletter */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-100">Stay Updated</h4>
            <p className="text-xs text-slate-400">Get weekly course drops, design tips, and exclusive discounts directly in your inbox.</p>
            <form onSubmit={(e) => e.preventDefault()} className="space-y-2">
              <div className="relative">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="w-full pl-3 pr-10 py-2 rounded-xl bg-slate-900 border border-slate-800 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-brand-blue"
                />
                <button
                  type="submit"
                  aria-label="Subscribe to newsletter"
                  className="absolute right-1 top-1/2 -translate-y-1/2 p-1.5 rounded-lg bg-brand-blue text-white hover:bg-blue-600 transition-colors"
                >
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </form>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-500 gap-4">
          <p>© 2026 ByteSpace platform. Crafted with passion for global creators.</p>
          <div className="flex items-center gap-6 font-medium">
            <Link href="/" className="hover:text-slate-300">Privacy Policy</Link>
            <Link href="/" className="hover:text-slate-300">Terms of Service</Link>
            <Link href="/" className="hover:text-slate-300">Cookie Settings</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};
