'use client';

import React, { useState, Suspense } from 'react';
import { useSearchParams } from 'next/navigation';
import { Search, ChevronDown, SlidersHorizontal, BarChart2, Layers, ChevronLeft, ChevronRight } from 'lucide-react';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { CourseCard } from '@/components/CourseCard';
import { MOCK_COURSES } from '@/data/mockData';

const SEARCH_PILLS = [
  { name: 'Featured', slug: 'featured', active: true },
  { name: 'Music', slug: 'music' },
  { name: 'Drawing & Painting', slug: 'drawing' },
  { name: 'Marketing', slug: 'marketing' },
  { name: 'Animation', slug: 'animation' },
  { name: 'Social Media', slug: 'social-media' },
  { name: 'UI/UX Design', slug: 'ui-ux' },
  { name: 'Creative Marketing', slug: 'creative-marketing' },
  { name: 'Cooking', slug: 'cooking' },
];

function SearchPageContent() {
  const searchParams = useSearchParams();
  const initialQuery = searchParams.get('q') || '';

  const [query, setQuery] = useState(initialQuery);
  const [activeCategory, setActiveCategory] = useState('featured');
  const [currentPage, setCurrentPage] = useState(2); // Default active page 2 matching Figma screenshot!

  // Duplicate 6 mock courses to display a full 12-card grid (4 rows of 3 cards)
  const searchResults = [...MOCK_COURSES, ...MOCK_COURSES].filter((course) => {
    if (!query) return true;
    return (
      course.title.toLowerCase().includes(query.toLowerCase()) ||
      course.category.toLowerCase().includes(query.toLowerCase())
    );
  });

  return (
    <div className="min-h-screen flex flex-col bg-white text-slate-900 font-sans selection:bg-[#ccff00] selection:text-slate-950">
      
      {/* 1. Navigation Header */}
      <Header />

      <main className="flex-grow">
        
        {/* 2. Hero Search Banner */}
        <section className="relative bg-[#0038ff] text-white py-16 overflow-hidden">
          {/* Grid Background Overlay */}
          <div
            className="absolute inset-0 opacity-15 pointer-events-none"
            style={{
              backgroundImage:
                'linear-gradient(#ffffff 1px, transparent 1px), linear-gradient(90deg, #ffffff 1px, transparent 1px)',
              backgroundSize: '40px 40px',
            }}
          ></div>

          <div className="max-w-4xl mx-auto px-4 sm:px-6 relative z-10 text-center space-y-6">
            <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white">
              Find Your Next Course
            </h1>

            {/* Search Input Bar */}
            <form
              onSubmit={(e) => e.preventDefault()}
              className="max-w-xl mx-auto flex items-center bg-white rounded-full p-1.5 shadow-2xl border border-blue-400/30"
            >
              <div className="flex items-center pl-4 flex-grow">
                <Search className="w-5 h-5 text-slate-400 mr-2 shrink-0" />
                <input
                  type="text"
                  placeholder="Search"
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                  className="w-full text-slate-900 placeholder-slate-400 text-sm bg-transparent focus:outline-none font-medium"
                />
              </div>
              <button
                type="button"
                className="px-5 py-2.5 rounded-full bg-[#ccff00] text-slate-950 font-bold text-xs flex items-center gap-1 hover:bg-[#b8e600] transition-colors shadow-xs"
              >
                <span>Courses</span>
                <ChevronDown className="w-3.5 h-3.5" />
              </button>
            </form>
          </div>
        </section>


        {/* 3. Filter & Sort Section */}
        <section className="py-8 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
          
          {/* Top Row Filter Buttons & Sorting Dropdown */}
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

            {/* Sort Dropdown */}
            <div>
              <button className="px-4 py-1.5 rounded-full border border-slate-200 text-xs font-semibold text-slate-700 bg-white hover:bg-slate-50 flex items-center gap-1.5 shadow-xs">
                <span>Most relevant</span>
                <ChevronDown className="w-3.5 h-3.5 text-slate-500" />
              </button>
            </div>

          </div>

          {/* Category Filter Pills */}
          <div className="flex flex-wrap items-center gap-2 pt-1">
            {SEARCH_PILLS.map((pill) => {
              const isActive = activeCategory === pill.slug;
              return (
                <button
                  key={pill.slug}
                  onClick={() => setActiveCategory(pill.slug)}
                  className={`px-4 py-1.5 rounded-full text-xs font-semibold transition-all ${
                    isActive
                      ? 'bg-[#ccff00] text-slate-950 font-extrabold shadow-xs'
                      : 'bg-slate-100 hover:bg-slate-200 text-slate-700'
                  }`}
                >
                  {pill.name}
                </button>
              );
            })}
          </div>

        </section>


        {/* 4. Course Cards Grid (12 items in 3-column layout) */}
        <section className="pb-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {searchResults.map((course, idx) => (
              <CourseCard key={`${course.id}-${idx}`} course={course} />
            ))}
          </div>

          {/* 5. Pagination Section */}
          <div className="flex items-center justify-center gap-3 pt-12">
            <button
              onClick={() => setCurrentPage((p) => Math.max(p - 1, 1))}
              className="w-9 h-9 rounded-full border border-slate-200 flex items-center justify-center text-slate-600 hover:bg-slate-100 transition-colors"
            >
              <ChevronLeft className="w-4 h-4" />
            </button>

            {[1, 2, 3, 4, 5].map((p) => (
              <button
                key={p}
                onClick={() => setCurrentPage(p)}
                className={`w-8 h-8 rounded-full text-xs transition-all ${
                  currentPage === p
                    ? 'text-slate-950 font-black text-sm'
                    : 'text-slate-400 font-medium hover:text-slate-700'
                }`}
              >
                {p}
              </button>
            ))}

            <button
              onClick={() => setCurrentPage((p) => Math.min(p + 1, 5))}
              className="w-9 h-9 rounded-full border border-slate-200 flex items-center justify-center text-slate-600 hover:bg-slate-100 transition-colors"
            >
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>

        </section>

      </main>

      {/* 6. Footer */}
      <Footer />

    </div>
  );
}

export default function SearchPage() {
  return (
    <Suspense fallback={<div className="p-8 text-center text-xs font-bold text-slate-600">Loading Search...</div>}>
      <SearchPageContent />
    </Suspense>
  );
}
