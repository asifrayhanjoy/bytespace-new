'use client';

import React from 'react';
import Link from 'next/link';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col bg-white text-slate-900 font-sans selection:bg-[#ccff00] selection:text-slate-950">
      
      {/* Royal Blue Grid Error Banner */}
      <section className="relative bg-[#0038ff] text-white py-20 overflow-hidden flex-grow flex flex-col justify-between">
        
        {/* Subtle Grid Background */}
        <div
          className="absolute inset-0 opacity-15 pointer-events-none"
          style={{
            backgroundImage:
              'linear-gradient(#ffffff 1px, transparent 1px), linear-gradient(90deg, #ffffff 1px, transparent 1px)',
            backgroundSize: '40px 40px',
          }}
        ></div>

        {/* Global Header */}
        <Header />

        {/* Central Error Content */}
        <div className="max-w-4xl mx-auto px-4 sm:px-6 relative z-10 text-center space-y-6 my-auto py-12">
          
          {/* Giant Gradient 404 Text */}
          <h1 className="text-8xl sm:text-[140px] font-black leading-none bg-gradient-to-b from-[#ccff00] to-[#88dd00] bg-clip-text text-transparent drop-shadow-2xl">
            404
          </h1>

          {/* Main Heading */}
          <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white underline decoration-blue-400/40 underline-offset-8">
            The page you are looking for doesn't exist
          </h2>

          {/* Subtext */}
          <p className="text-xs sm:text-sm text-blue-100 font-medium max-w-md mx-auto">
            Try to use a correct url or go back to homepage to start again
          </p>

          {/* Back to Home Button */}
          <div className="pt-4">
            <Link
              href="/"
              className="inline-block px-8 py-3.5 rounded-full bg-[#ccff00] text-slate-950 font-black text-xs hover:bg-[#b8e600] transition-colors shadow-xl"
            >
              Back to Home
            </Link>
          </div>

        </div>

        <div></div>
      </section>

      {/* Footer */}
      <Footer />

    </div>
  );
}
