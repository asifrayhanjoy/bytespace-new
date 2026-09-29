'use client';

import React from 'react';
import Link from 'next/link';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col bg-white text-slate-900 font-sans selection:bg-[#CCFF00] selection:text-slate-950">
      {/* Royal Blue Grid Error Hero Section */}
      <section className="relative bg-[#0022FF] text-white flex-grow flex flex-col justify-between overflow-hidden pb-16 sm:pb-24">
        {/* Royal Blue Grid Background Overlay */}
        <div
          className="absolute inset-0 pointer-events-none opacity-20"
          style={{
            backgroundImage:
              'linear-gradient(rgba(255, 255, 255, 0.2) 1px, transparent 1px), linear-gradient(90deg, rgba(255, 255, 255, 0.2) 1px, transparent 1px)',
            backgroundSize: '75px 75px',
          }}
        ></div>

        {/* Global Navigation Header */}
        <Header />

        {/* Central 404 Hero Content */}
        <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 my-auto text-center py-12 space-y-6 sm:space-y-8">
          {/* Giant Lime-Green Gradient 404 Text */}
          <div className="relative select-none">
            <h1 className="text-[140px] sm:text-[220px] md:text-[280px] lg:text-[340px] font-black leading-none bg-gradient-to-b from-[#CCFF00] via-[#b6ea00] to-[#7dbb00] bg-clip-text text-transparent tracking-tighter">
              404
            </h1>
          </div>

          {/* Error Title, Subtitle, & Button Container */}
          <div className="space-y-4 max-w-3xl mx-auto -mt-12 sm:-mt-20 relative z-20">
            <h2 className="text-3xl sm:text-5xl md:text-6xl font-extrabold text-white tracking-tight leading-tight">
              The page you are looking for doesn&apos;t exist
            </h2>

            <p className="text-xs sm:text-sm md:text-base text-blue-100/90 font-medium">
              Try to use a correct url or go back to homepage to start again
            </p>

            <div className="pt-4">
              <Link
                href="/"
                className="inline-block px-8 py-3.5 rounded-full bg-[#CCFF00] hover:bg-[#b8e600] text-slate-950 font-extrabold text-xs sm:text-sm transition-all shadow-lg hover:shadow-xl hover:scale-105"
              >
                Back to Home
              </Link>
            </div>
          </div>
        </div>

        {/* Bottom Spacer */}
        <div></div>
      </section>

      {/* Global Footer */}
      <Footer />
    </div>
  );
}
