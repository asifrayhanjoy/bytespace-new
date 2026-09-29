'use client';

import React, { useState } from 'react';
import { useParams } from 'next/navigation';
import { SlidersHorizontal, BarChart2, Layers, ChevronDown } from 'lucide-react';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { CourseCard } from '@/components/CourseCard';
import { MOCK_COURSES } from '@/data/mockData';

export default function CreatorProfilePage() {
  const params = useParams();
  const [following, setFollowing] = useState(false);

  return (
    <div className="min-h-screen flex flex-col bg-white text-slate-900 font-sans selection:bg-[#CCFF00] selection:text-slate-950">
      {/* 1. HERO HEADER SECTION (Royal Blue Grid Background) */}
      <section className="relative bg-[#0022FF] text-white pb-16 lg:pb-20 overflow-hidden">
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

        {/* Creator Info Header Container */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 sm:pt-12 relative z-10 space-y-6">
          {/* Creator Profile Row */}
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
            <div className="flex items-center gap-5">
              {/* Circular Creator Avatar */}
              <img
                src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=200"
                alt="PurePearl Studio"
                className="w-20 h-20 sm:w-24 sm:h-24 rounded-full object-cover border-2 border-white/80 shadow-xl shrink-0"
              />

              <div className="space-y-1">
                <div className="flex items-center gap-3">
                  <h1 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
                    PurePearl Studio
                  </h1>
                  <span className="px-3.5 py-1 rounded-full bg-[#CCFF00] text-slate-950 font-extrabold text-xs shadow-xs">
                    Creator
                  </span>
                </div>
                <p className="text-xs sm:text-sm text-blue-100 font-medium">
                  Passionate UI/UX, Web designer
                </p>
              </div>
            </div>
          </div>

          {/* Creator Bio Paragraphs */}
          <div className="space-y-2 max-w-5xl text-xs sm:text-sm text-white/90 leading-relaxed font-normal">
            <p>
              Welcome to the creative world of PurePearl Studio. Here, you&apos;ll discover the passion, expertise, and inspiration that drive my creative journey. Let&apos;s explore and learn together!
            </p>
            <p>
              ive into my creative portfolio, showcasing a glimpse of my artistic endeavors. From digital designs to multimedia projects, each piece tells a unique story. Explore the world of creativity with me.
            </p>
          </div>

          {/* Stats Badges & Follow Button Row */}
          <div className="flex items-center justify-between gap-4 pt-2">
            <div className="flex items-center gap-3">
              <span className="px-5 py-2 rounded-full bg-white text-slate-900 font-bold text-xs shadow-sm">
                3 Products
              </span>
              <span className="px-5 py-2 rounded-full bg-white text-slate-900 font-bold text-xs shadow-sm">
                12 Followers
              </span>
            </div>

            <button
              onClick={() => setFollowing(!following)}
              className={`px-7 py-2.5 rounded-full text-xs font-extrabold transition-all shadow-md ${
                following
                  ? 'bg-white text-slate-950'
                  : 'bg-[#CCFF00] hover:bg-[#b8e600] text-slate-950'
              }`}
            >
              {following ? 'Following' : 'Follow'}
            </button>
          </div>
        </div>
      </section>

      {/* 2. FILTER & CREATOR'S COURSE GRID SECTION */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 w-full flex-grow space-y-8">
        {/* Filters & Sorting Bar */}
        <div className="flex flex-wrap items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <button className="px-5 py-2 rounded-full border border-slate-200 text-xs font-bold text-slate-700 bg-white hover:bg-slate-50 flex items-center gap-2 shadow-xs transition-colors">
              <SlidersHorizontal className="w-3.5 h-3.5 text-slate-600 stroke-[2]" />
              <span>Filter</span>
            </button>

            <button className="px-5 py-2 rounded-full border border-slate-200 text-xs font-bold text-slate-700 bg-white hover:bg-slate-50 flex items-center gap-2 shadow-xs transition-colors">
              <BarChart2 className="w-3.5 h-3.5 text-slate-600 stroke-[2]" />
              <span>Level</span>
            </button>

            <button className="px-5 py-2 rounded-full border border-slate-200 text-xs font-bold text-slate-700 bg-white hover:bg-slate-50 flex items-center gap-2 shadow-xs transition-colors">
              <Layers className="w-3.5 h-3.5 text-slate-600 stroke-[2]" />
              <span>Category</span>
            </button>
          </div>

          <div>
            <button className="px-5 py-2 rounded-full border border-slate-200 text-xs font-bold text-slate-700 bg-white hover:bg-slate-50 flex items-center gap-2 shadow-xs transition-colors">
              <span>Most relevant</span>
              <ChevronDown className="w-3.5 h-3.5 text-slate-600 stroke-[2]" />
            </button>
          </div>
        </div>

        {/* Course Grid (6 Cards) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {MOCK_COURSES.slice(0, 6).map((course) => (
            <CourseCard key={course.id} course={course} />
          ))}
        </div>
      </main>

      {/* 3. FOOTER */}
      <Footer />
    </div>
  );
}
