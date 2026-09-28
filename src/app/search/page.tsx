'use client';

import React, { useState, useMemo, Suspense } from 'react';
import { useSearchParams } from 'next/navigation';
import { Search, SlidersHorizontal, Star, X, ChevronLeft, ChevronRight, Filter } from 'lucide-react';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { CourseCard } from '@/components/CourseCard';
import { MOCK_COURSES, MOCK_CATEGORIES } from '@/data/mockData';

function SearchPageContent() {
  const searchParams = useSearchParams();
  const initialQuery = searchParams.get('q') || '';
  const initialCategory = searchParams.get('category') || 'all';

  const [query, setQuery] = useState(initialQuery);
  const [selectedCategory, setSelectedCategory] = useState(initialCategory);
  const [selectedLevel, setSelectedLevel] = useState<string>('all');
  const [selectedRating, setSelectedRating] = useState<number>(0);
  const [sortBy, setSortBy] = useState<string>('popular');
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [showMobileFilters, setShowMobileFilters] = useState<boolean>(false);

  const coursesPerPage = 6;

  // Filter logic
  const filteredCourses = useMemo(() => {
    return MOCK_COURSES.filter((course) => {
      // Text query search
      const matchesQuery =
        !query ||
        course.title.toLowerCase().includes(query.toLowerCase()) ||
        course.description.toLowerCase().includes(query.toLowerCase()) ||
        course.creator.name.toLowerCase().includes(query.toLowerCase());

      // Category filter
      const matchesCategory =
        selectedCategory === 'all' ||
        course.category.toLowerCase().includes(selectedCategory.toLowerCase()) ||
        (selectedCategory === 'development' && course.category.includes('Web')) ||
        (selectedCategory === 'design' && course.category.includes('UI/UX')) ||
        (selectedCategory === 'data-ai' && course.category.includes('Data')) ||
        (selectedCategory === 'marketing' && course.category.includes('Marketing'));

      // Level filter
      const matchesLevel = selectedLevel === 'all' || course.level === selectedLevel;

      // Rating filter
      const matchesRating = selectedRating === 0 || course.rating >= selectedRating;

      return matchesQuery && matchesCategory && matchesLevel && matchesRating;
    }).sort((a, b) => {
      if (sortBy === 'popular') return b.students - a.students;
      if (sortBy === 'rating') return b.rating - a.rating;
      if (sortBy === 'price-low') return a.price - b.price;
      if (sortBy === 'price-high') return b.price - a.price;
      return 0;
    });
  }, [query, selectedCategory, selectedLevel, selectedRating, sortBy]);

  // Pagination slice
  const totalPages = Math.ceil(filteredCourses.length / coursesPerPage) || 1;
  const paginatedCourses = useMemo(() => {
    const start = (currentPage - 1) * coursesPerPage;
    return filteredCourses.slice(start, start + coursesPerPage);
  }, [filteredCourses, currentPage]);

  const clearFilters = () => {
    setQuery('');
    setSelectedCategory('all');
    setSelectedLevel('all');
    setSelectedRating(0);
    setSortBy('popular');
    setCurrentPage(1);
  };

  return (
    <div className="min-h-screen flex flex-col bg-slate-50">
      <Header />

      <main className="flex-grow py-8 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full space-y-8">
        
        {/* Top Search Hero */}
        <div className="bg-gradient-to-r from-brand-blue to-indigo-700 rounded-3xl p-8 sm:p-10 text-white shadow-xl space-y-6">
          <div className="max-w-2xl space-y-2">
            <h1 className="text-3xl font-black tracking-tight">Explore Courses & Tech Assets</h1>
            <p className="text-xs sm:text-sm text-blue-100">
              Discover step-by-step masterclasses, UI kits, and instructor guides.
            </p>
          </div>

          {/* Search Input Bar */}
          <div className="relative max-w-xl">
            <input
              type="text"
              placeholder="Search by topic, skill, or instructor (e.g. Next.js, Figma, Python)..."
              value={query}
              onChange={(e) => {
                setQuery(e.target.value);
                setCurrentPage(1);
              }}
              className="w-full pl-11 pr-10 py-3.5 rounded-2xl bg-white text-slate-900 text-sm font-medium shadow-md focus:outline-none focus:ring-4 focus:ring-brand-accent/40"
            />
            <Search className="w-5 h-5 text-slate-400 absolute left-4 top-1/2 -translate-y-1/2" />
            {query && (
              <button
                onClick={() => setQuery('')}
                className="absolute right-3.5 top-1/2 -translate-y-1/2 p-1 rounded-full text-slate-400 hover:text-slate-600 hover:bg-slate-100"
              >
                <X className="w-4 h-4" />
              </button>
            )}
          </div>

          {/* Category Chips Bar */}
          <div className="flex flex-wrap items-center gap-2 pt-2">
            <span className="text-xs font-bold text-blue-200 mr-2">Categories:</span>
            <button
              onClick={() => {
                setSelectedCategory('all');
                setCurrentPage(1);
              }}
              className={`px-3.5 py-1.5 rounded-full text-xs font-bold transition-all ${
                selectedCategory === 'all'
                  ? 'bg-[#d2ff00] text-slate-950 shadow-md'
                  : 'bg-white/10 hover:bg-white/20 text-white border border-white/20'
              }`}
            >
              All Categories
            </button>

            {MOCK_CATEGORIES.map((cat) => (
              <button
                key={cat.id}
                onClick={() => {
                  setSelectedCategory(cat.slug);
                  setCurrentPage(1);
                }}
                className={`px-3.5 py-1.5 rounded-full text-xs font-bold transition-all ${
                  selectedCategory === cat.slug
                    ? 'bg-[#d2ff00] text-slate-950 shadow-md'
                    : 'bg-white/10 hover:bg-white/20 text-white border border-white/20'
                }`}
              >
                {cat.name}
              </button>
            ))}
          </div>
        </div>

        {/* Main Content Layout (Sidebar + Course Grid) */}
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          
          {/* Filters Sidebar (Desktop) */}
          <aside className="hidden lg:block space-y-6 bg-white p-6 rounded-2xl border border-slate-200 card-shadow h-fit">
            <div className="flex items-center justify-between border-b border-slate-100 pb-4">
              <div className="flex items-center gap-2 font-bold text-sm text-slate-900">
                <SlidersHorizontal className="w-4 h-4 text-brand-blue" />
                <span>Filters</span>
              </div>
              <button
                onClick={clearFilters}
                className="text-xs font-semibold text-brand-blue hover:underline"
              >
                Reset All
              </button>
            </div>

            {/* Level Filter */}
            <div className="space-y-2">
              <label className="text-xs font-bold uppercase tracking-wider text-slate-500">Skill Level</label>
              <div className="space-y-1.5">
                {['all', 'Beginner', 'Intermediate', 'Advanced'].map((lvl) => (
                  <label key={lvl} className="flex items-center gap-2 text-xs font-medium text-slate-700 cursor-pointer hover:text-brand-blue">
                    <input
                      type="radio"
                      name="level"
                      checked={selectedLevel === lvl}
                      onChange={() => {
                        setSelectedLevel(lvl);
                        setCurrentPage(1);
                      }}
                      className="text-brand-blue focus:ring-brand-blue"
                    />
                    <span>{lvl === 'all' ? 'All Levels' : lvl}</span>
                  </label>
                ))}
              </div>
            </div>

            {/* Rating Filter */}
            <div className="space-y-2 border-t border-slate-100 pt-4">
              <label className="text-xs font-bold uppercase tracking-wider text-slate-500">Minimum Rating</label>
              <div className="space-y-1.5">
                {[0, 4.5, 4.0].map((rating) => (
                  <label key={rating} className="flex items-center gap-2 text-xs font-medium text-slate-700 cursor-pointer hover:text-brand-blue">
                    <input
                      type="radio"
                      name="rating"
                      checked={selectedRating === rating}
                      onChange={() => {
                        setSelectedRating(rating);
                        setCurrentPage(1);
                      }}
                      className="text-brand-blue focus:ring-brand-blue"
                    />
                    {rating === 0 ? (
                      <span>Any Rating</span>
                    ) : (
                      <span className="flex items-center gap-1">
                        <Star className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                        <span>{rating} & Up</span>
                      </span>
                    )}
                  </label>
                ))}
              </div>
            </div>
          </aside>

          {/* Course Grid Area */}
          <div className="lg:col-span-3 space-y-6">
            
            {/* Header bar: Count & Sort */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 bg-white p-4 rounded-2xl border border-slate-200 card-shadow">
              <div className="text-xs font-bold text-slate-700">
                Showing <span className="text-brand-blue font-extrabold">{filteredCourses.length}</span> courses
                {query && <span> for "{query}"</span>}
              </div>

              <div className="flex items-center gap-3">
                <button
                  onClick={() => setShowMobileFilters(!showMobileFilters)}
                  className="lg:hidden flex items-center gap-1.5 px-3 py-1.5 rounded-xl border border-slate-200 text-xs font-bold text-slate-700"
                >
                  <Filter className="w-3.5 h-3.5" />
                  <span>Filters</span>
                </button>

                <div className="flex items-center gap-2">
                  <span className="text-xs text-slate-500 font-semibold">Sort by:</span>
                  <select
                    value={sortBy}
                    onChange={(e) => setSortBy(e.target.value)}
                    className="px-3 py-1.5 rounded-xl border border-slate-200 text-xs font-bold text-slate-800 bg-slate-50 focus:outline-none focus:border-brand-blue"
                  >
                    <option value="popular">Most Popular</option>
                    <option value="rating">Highest Rated</option>
                    <option value="price-low">Price: Low to High</option>
                    <option value="price-high">Price: High to Low</option>
                  </select>
                </div>
              </div>
            </div>

            {/* Mobile Filter Modal */}
            {showMobileFilters && (
              <div className="lg:hidden p-4 rounded-2xl bg-white border border-slate-200 space-y-4">
                <div className="flex justify-between items-center">
                  <span className="font-bold text-sm">Filters</span>
                  <button onClick={() => setShowMobileFilters(false)}>
                    <X className="w-4 h-4" />
                  </button>
                </div>
                <div className="space-y-2">
                  <span className="text-xs font-bold">Level</span>
                  <div className="flex gap-2">
                    {['all', 'Beginner', 'Intermediate', 'Advanced'].map((l) => (
                      <button
                        key={l}
                        onClick={() => setSelectedLevel(l)}
                        className={`px-3 py-1 rounded-lg text-xs font-bold ${
                          selectedLevel === l ? 'bg-brand-blue text-white' : 'bg-slate-100 text-slate-700'
                        }`}
                      >
                        {l}
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            )}

            {/* Grid */}
            {paginatedCourses.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {paginatedCourses.map((course) => (
                  <CourseCard key={course.id} course={course} />
                ))}
              </div>
            ) : (
              <div className="bg-white rounded-3xl p-12 text-center border border-slate-200 space-y-4">
                <Search className="w-12 h-12 text-slate-300 mx-auto" />
                <h3 className="text-lg font-bold text-slate-800">No courses match your search criteria</h3>
                <p className="text-xs text-slate-500 max-w-sm mx-auto">
                  Try clearing your search query or adjusting your level and category filters.
                </p>
                <button
                  onClick={clearFilters}
                  className="px-5 py-2.5 rounded-full bg-brand-blue text-white text-xs font-bold"
                >
                  Reset Filters
                </button>
              </div>
            )}

            {/* Pagination Controls */}
            {totalPages > 1 && (
              <div className="flex items-center justify-center gap-2 pt-6">
                <button
                  onClick={() => setCurrentPage((p) => Math.max(p - 1, 1))}
                  disabled={currentPage === 1}
                  className="p-2 rounded-xl border border-slate-200 text-slate-700 hover:bg-slate-100 disabled:opacity-40"
                >
                  <ChevronLeft className="w-4 h-4" />
                </button>

                {[...Array(totalPages)].map((_, i) => {
                  const p = i + 1;
                  return (
                    <button
                      key={p}
                      onClick={() => setCurrentPage(p)}
                      className={`w-9 h-9 rounded-xl text-xs font-bold transition-all ${
                        currentPage === p
                          ? 'bg-brand-blue text-white shadow-md'
                          : 'bg-white border border-slate-200 text-slate-700 hover:bg-slate-100'
                      }`}
                    >
                      {p}
                    </button>
                  );
                })}

                <button
                  onClick={() => setCurrentPage((p) => Math.min(p + 1, totalPages))}
                  disabled={currentPage === totalPages}
                  className="p-2 rounded-xl border border-slate-200 text-slate-700 hover:bg-slate-100 disabled:opacity-40"
                >
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>
            )}

          </div>

        </div>
      </main>

      <Footer />
    </div>
  );
}

export default function SearchPage() {
  return (
    <Suspense fallback={<div className="p-8 text-center text-sm font-bold text-slate-600">Loading Search...</div>}>
      <SearchPageContent />
    </Suspense>
  );
}
