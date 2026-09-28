'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { useParams } from 'next/navigation';
import { SlidersHorizontal, BarChart2, Layers, ChevronDown } from 'lucide-react';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { CourseCard } from '@/components/CourseCard';
import { MOCK_COURSES } from '@/data/mockData';

export default function CreatorProfilePage() {
  const params = useParams();
  const creatorId = (params.id as string) || 'purepearl-studio';

  const [following, setFollowing] = useState(false);

  return (
    <div className="min-h-screen flex flex-col bg-white text-slate-900 font-sans selection:bg-[#ccff00] selection:text-slate-950">
      
      {/* 1. Royal Blue Grid Hero Banner */}
      <section className="relative bg-[#0038ff] text-white pb-16 overflow-hidden">
        {/* Grid Background Overlay */}
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

        {/* Creator Info Section */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-10 pb-4 relative z-10 space-y-6">
          
          <div className="flex flex-col md:flex-row items-start justify-between gap-6">
            
            <div className="flex flex-col sm:flex-row items-start gap-5">
              {/* Creator Avatar */}
              <img
                src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=200"
                alt="PurePearl Studio"
                className="w-20 h-20 sm:w-24 sm:h-24 rounded-2xl object-cover border-2 border-white shadow-xl shrink-0"
              />

              <div className="space-y-1">
                <div className="flex items-center gap-3">
                  <h1 className="text-2xl sm:text-3xl font-extrabold text-white">PurePearl Studio</h1>
                  <span className="px-3 py-0.5 rounded-full bg-[#ccff00] text-slate-950 font-bold text-xs shadow-xs">
                    Creator
                  </span>
                </div>
                <p className="text-xs text-blue-100 font-semibold">Passionate UI/UX, Web designer</p>
              </div>
            </div>

            {/* Follow Action Button */}
            <div className="shrink-0">
              <button
                onClick={() => setFollowing(!following)}
                className={`px-7 py-2.5 rounded-full text-xs font-black transition-all shadow-md ${
                  following
                    ? 'bg-white text-slate-900'
                    : 'bg-[#ccff00] text-slate-950 hover:bg-[#b8e600]'
                }`}
              >
                {following ? 'Following' : 'Follow'}
              </button>
            </div>

          </div>

          {/* Description Paragraph */}
          <p className="text-xs sm:text-sm text-blue-100/90 leading-relaxed max-w-4xl font-normal">
            Welcome to the creative world of PurePearl Studio. Here, you'll discover the passion, expertise, and inspiration that drive my creative journey. Let's explore and learn together!
            <br />
            Dive into my creative portfolio, showcasing a glimpse of my artistic endeavors. From digital designs to multimedia projects, each piece tells a unique story. Explore the world of creativity with me.
          </p>

          {/* Stats Badges */}
          <div className="flex items-center gap-3 pt-2">
            <span className="px-4 py-1.5 rounded-full bg-white text-slate-900 font-bold text-xs shadow-xs">
              3 Products
            </span>
            <span className="px-4 py-1.5 rounded-full bg-white text-slate-900 font-bold text-xs shadow-xs">
              12 Followers
            </span>
          </div>

        </div>
      </section>


      {/* 2. Filter & Course Grid Section (White Background) */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 w-full flex-grow space-y-8">
        
        {/* Filter Bar */}
        <div className="flex flex-wrap items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <button className="px-4 py-1.5 rounded-full border border-slate-200 text-xs font-semibold text-slate-700 bg-white hover:bg-slate-50 flex items-center gap-1.5 shadow-xs">
              <SlidersHorizontal className="w-3.5 h-3.5 text-slate-500" />
              <span>Filter</span>
            </button>

            <button className="px-4 py-1.5 rounded-full border border-slate-200 text-xs font-semibold text-slate-700 bg-white hover:bg-slate-50 flex items-center gap-1.5 shadow-xs">
              <BarChart2 className="w-3.5 h-3.5 text-slate-500" />
              <span>Level</span>
            </button>

            <button className="px-4 py-1.5 rounded-full border border-slate-200 text-xs font-semibold text-slate-700 bg-white hover:bg-slate-50 flex items-center gap-1.5 shadow-xs">
              <Layers className="w-3.5 h-3.5 text-slate-500" />
              <span>Category</span>
            </button>
          </div>

          <div>
            <button className="px-4 py-1.5 rounded-full border border-slate-200 text-xs font-semibold text-slate-700 bg-white hover:bg-slate-50 flex items-center gap-1.5 shadow-xs">
              <span>Most relevant</span>
              <ChevronDown className="w-3.5 h-3.5 text-slate-500" />
            </button>
          </div>
        </div>

        {/* 6 Course Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {MOCK_COURSES.map((course) => (
            <CourseCard key={course.id} course={course} />
          ))}
        </div>

      </main>

      {/* 3. Footer */}
      <Footer />

    </div>
  );
}
