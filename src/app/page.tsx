'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import {
  Search,
  CheckCircle2,
  Scissors,
  Code,
  Monitor,
  Building2,
  Megaphone,
  Camera,
  Star,
  ChevronLeft,
  ChevronRight,
} from 'lucide-react';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { CourseCard } from '@/components/CourseCard';
import {
  MOCK_COURSES,
  MOCK_CATEGORIES_FILTER,
  MOCK_PATH_CATEGORIES,
  MOCK_TESTIMONIALS,
} from '@/data/mockData';
import {
  LimeWavyShape,
  WhiteWavyShape,
  WhiteTorusShape,
  LimeCylinderShape,
  WhitePyramidShape,
} from '@/components/Hero3DShapes';

export default function HomePage() {
  const router = useRouter();
  const [searchQuery, setSearchQuery] = useState('');
  const [activeFilter, setActiveFilter] = useState('featured');
  const [currentPage, setCurrentPage] = useState(1);

  const handleSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      router.push(`/search?q=${encodeURIComponent(searchQuery)}`);
    } else {
      router.push('/search');
    }
  };

  const renderPathIcon = (iconName: string) => {
    switch (iconName) {
      case 'Scissors':
        return <Scissors className="w-6 h-6 text-slate-950" />;
      case 'Code':
        return <Code className="w-6 h-6 text-slate-950" />;
      case 'Monitor':
        return <Monitor className="w-6 h-6 text-slate-950" />;
      case 'Building':
        return <Building2 className="w-6 h-6 text-slate-950" />;
      case 'Megaphone':
        return <Megaphone className="w-6 h-6 text-slate-950" />;
      case 'Camera':
        return <Camera className="w-6 h-6 text-slate-950" />;
      default:
        return <Code className="w-6 h-6 text-slate-950" />;
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-white text-slate-900 font-sans selection:bg-[#ccff00] selection:text-slate-950">
      
      {/* 1. HEADER & NAVIGATION */}
      <Header />

      <main className="flex-grow">
        
        {/* ================= 2. HERO SECTION ================= */}
        <section className="relative bg-[#0022FF] text-white pt-6 sm:pt-12 pb-12 sm:pb-16 overflow-hidden flex flex-col justify-center">
          {/* Subtle Grid Background Overlay */}
          <div
            className="absolute inset-0 pointer-events-none opacity-15"
            style={{
              backgroundImage:
                'linear-gradient(rgba(255, 255, 255, 0.2) 1px, transparent 1px), linear-gradient(90deg, rgba(255, 255, 255, 0.2) 1px, transparent 1px)',
              backgroundSize: '65px 65px',
            }}
          ></div>

          {/* Abstract 3D Shapes & Elements Placement */}
          {/* Left Side Shapes */}
          <LimeWavyShape className="absolute top-[1%] -left-8 sm:left-1 lg:left-3 w-16 sm:w-36 md:w-44 h-auto pointer-events-none z-10 opacity-30 sm:opacity-100" />
          <WhiteWavyShape className="absolute top-[48%] left-4 sm:left-20 lg:left-28 w-12 sm:w-20 md:w-24 h-auto pointer-events-none z-10 opacity-30 sm:opacity-100" />
          <WhiteTorusShape className="absolute bottom-4 left-0 sm:left-4 lg:left-8 w-16 sm:w-36 md:w-44 h-auto pointer-events-none z-10 opacity-30 sm:opacity-100" />

          {/* Right Side Shapes */}
          <LimeCylinderShape className="absolute top-1 -right-8 sm:right-2 lg:right-6 w-16 sm:w-36 md:w-44 h-auto pointer-events-none z-10 opacity-30 sm:opacity-100" />
          <WhitePyramidShape className="absolute top-[44%] right-4 sm:right-24 lg:right-36 w-12 sm:w-24 md:w-28 h-auto pointer-events-none z-10 opacity-30 sm:opacity-100" />
          <WhiteWavyShape className="absolute bottom-4 right-1 sm:right-6 lg:right-10 w-14 sm:w-28 md:w-34 h-auto pointer-events-none z-10 opacity-30 sm:opacity-100" />

          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-20 w-full">
            
            {/* Centered Typography */}
            <div className="text-center max-w-3xl mx-auto space-y-3">
              
              {/* Main Headline */}
              <h1 className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-tight text-center drop-shadow-xs px-2 sm:px-0">
                Get Access to Hundreds <br className="hidden sm:inline" />
                Courses Available
              </h1>

              {/* Subtext */}
              <p className="text-xs sm:text-sm md:text-base text-white/90 max-w-xl mx-auto font-normal text-center leading-relaxed px-4 pt-1">
                Unlock your creativity, gain valuable knowledge, and grow your business with our wide range of courses.
              </p>

              {/* Search Bar Component */}
              <form
                onSubmit={handleSearchSubmit}
                className="max-w-xl mx-auto pt-3 sm:pt-4 flex flex-col sm:flex-row items-center justify-center gap-2.5 sm:gap-4 relative z-30 px-2 sm:px-0"
              >
                {/* 1. Main Search Input Pill Box */}
                <div className="flex items-center w-full flex-grow bg-white rounded-full px-4 sm:px-5 py-2.5 sm:py-3.5 shadow-lg border border-white/20">
                  <Search className="w-4 h-4 sm:w-5 sm:h-5 text-slate-400 shrink-0 mr-2.5 sm:mr-3 stroke-[1.8]" />
                  <input
                    type="text"
                    placeholder="Course, topic, creator"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="w-full text-slate-900 placeholder-slate-400 text-xs sm:text-base bg-transparent border-none outline-none focus:outline-none font-medium"
                  />
                </div>

                {/* 2. Separate Lime-Yellow Search Button Pill */}
                <button
                  type="submit"
                  className="w-full sm:w-auto px-7 sm:px-8 py-2.5 sm:py-3.5 rounded-full bg-[#CCFF00] hover:bg-[#b5e600] text-slate-950 font-extrabold text-xs sm:text-base transition-all shadow-lg shrink-0"
                >
                  Search
                </button>
              </form>

            </div>

            {/* Central Hero Image & Floating Cards */}
            <div className="mt-8 sm:mt-10 relative flex justify-center items-center">
              
              {/* Bright Lime-Yellow Circular Background Glow */}
              <div className="w-[240px] h-[240px] sm:w-[360px] sm:h-[360px] md:w-[420px] md:h-[420px] rounded-full bg-[#CCFF00] absolute bottom-0 left-1/2 -translate-x-1/2 z-0"></div>

              {/* Central Student Portrait Image */}
              <div className="relative z-10 max-w-[250px] sm:max-w-[340px] md:max-w-[380px]">
                <img
                  src="/hero_student.jpg"
                  alt="Smiling Student with Laptop"
                  className="w-full h-auto object-contain drop-shadow-xl rounded-b-[30px]"
                />

                {/* Top-Left Card: UI/UX Design */}
                <div className="absolute top-2 sm:top-6 -left-3 sm:-left-6 lg:-left-12 bg-white text-slate-900 p-2 sm:p-4 rounded-xl shadow-xl border border-slate-100/90 flex flex-col space-y-0.5 z-20 min-w-[130px] sm:min-w-[200px]">
                  <span className="text-[10px] sm:text-sm font-extrabold text-slate-900">UI/UX Design</span>
                  <span className="text-[8px] sm:text-[11px] font-semibold text-slate-500">200 Courses • 1000+ Students</span>
                </div>

                {/* Top-Right Card: Learning Progress 55% */}
                <div className="absolute top-4 sm:top-8 -right-3 sm:-right-6 lg:-right-12 bg-white text-slate-900 p-2 sm:p-4 rounded-xl shadow-xl border border-slate-100/90 space-y-0.5 sm:space-y-1 z-20 w-32 sm:w-48">
                  <span className="text-[8px] sm:text-[10px] font-bold text-slate-400 uppercase tracking-wider block">
                    Learning Progress
                  </span>
                  <span className="text-xl sm:text-3xl font-black text-slate-900 block">55%</span>
                  <div className="w-full h-1.5 sm:h-2 rounded-full bg-slate-100 overflow-hidden mt-1">
                    <div className="w-[55%] h-full bg-[#CCFF00] rounded-full"></div>
                  </div>
                </div>

                {/* Bottom-Left Card: Happy Students */}
                <div className="absolute bottom-4 sm:bottom-6 -left-3 sm:-left-4 lg:-left-8 bg-white text-slate-900 p-2 sm:p-4 rounded-xl shadow-xl border border-slate-100/90 space-y-1 sm:space-y-1.5 z-20 min-w-[150px] sm:min-w-[220px]">
                  <span className="text-[10px] sm:text-sm font-extrabold text-slate-900 block">Happy Students</span>
                  <div className="text-[9px] sm:text-[11px] font-bold text-slate-700 flex items-center gap-1">
                    4.5 (240) <span className="text-amber-400">★</span>
                  </div>
                  <div className="flex items-center -space-x-1.5 sm:-space-x-2 pt-0.5">
                    <img
                      src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=80"
                      alt="Student Avatar"
                      className="w-5 h-5 sm:w-7 sm:h-7 rounded-full border-2 border-white object-cover"
                    />
                    <img
                      src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=80"
                      alt="Student Avatar"
                      className="w-5 h-5 sm:w-7 sm:h-7 rounded-full border-2 border-white object-cover"
                    />
                    <img
                      src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=80"
                      alt="Student Avatar"
                      className="w-5 h-5 sm:w-7 sm:h-7 rounded-full border-2 border-white object-cover"
                    />
                    <img
                      src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=80"
                      alt="Student Avatar"
                      className="w-5 h-5 sm:w-7 sm:h-7 rounded-full border-2 border-white object-cover"
                    />
                    <span className="w-5 h-5 sm:w-7 sm:h-7 rounded-full bg-[#CCFF00] text-slate-950 font-black text-[8px] sm:text-[10px] flex items-center justify-center border-2 border-white shadow-xs">
                      +2K+
                    </span>
                  </div>
                </div>

              </div>
            </div>

          </div>
        </section>


        {/* ================= 3. BRAND PARTNERS / LOGOS ================= */}
        <section className="bg-[#F4F4F6] py-8 sm:py-10 border-y border-slate-200/60">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-8 items-center justify-items-center">
              
              {/* Logo 1: Wavy Lines Circle */}
              <div className="flex items-center gap-2.5 font-extrabold text-base sm:text-lg text-slate-700 tracking-tight select-none">
                <svg width="28" height="28" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" className="shrink-0">
                  <circle cx="16" cy="16" r="16" fill="#64748B"/>
                  <path d="M 5 11 C 10 8, 14 14, 18 11 C 22 8, 27 12, 27 12" stroke="#F4F4F6" strokeWidth="2.5" strokeLinecap="round" fill="none"/>
                  <path d="M 5 16 C 10 13, 14 19, 18 16 C 22 13, 27 17, 27 17" stroke="#F4F4F6" strokeWidth="2.5" strokeLinecap="round" fill="none"/>
                  <path d="M 6 21 C 11 18, 15 24, 19 21 C 23 18, 26 21, 26 21" stroke="#F4F4F6" strokeWidth="2.5" strokeLinecap="round" fill="none"/>
                </svg>
                <span>Logoipsum</span>
              </div>

              {/* Logo 2: Sunburst Circle */}
              <div className="flex items-center gap-2.5 font-extrabold text-base sm:text-lg text-slate-700 tracking-tight select-none">
                <svg width="28" height="28" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" className="shrink-0">
                  <circle cx="16" cy="16" r="5" stroke="#64748B" strokeWidth="2.5"/>
                  <line x1="16" y1="2" x2="16" y2="7" stroke="#64748B" strokeWidth="2.5" strokeLinecap="round"/>
                  <line x1="16" y1="25" x2="16" y2="30" stroke="#64748B" strokeWidth="2.5" strokeLinecap="round"/>
                  <line x1="2" y1="16" x2="7" y2="16" stroke="#64748B" strokeWidth="2.5" strokeLinecap="round"/>
                  <line x1="25" y1="16" x2="30" y2="16" stroke="#64748B" strokeWidth="2.5" strokeLinecap="round"/>
                  <line x1="6.1" y1="6.1" x2="9.6" y2="9.6" stroke="#64748B" strokeWidth="2.5" strokeLinecap="round"/>
                  <line x1="22.4" y1="22.4" x2="25.9" y2="25.9" stroke="#64748B" strokeWidth="2.5" strokeLinecap="round"/>
                  <line x1="6.1" y1="25.9" x2="9.6" y2="22.4" stroke="#64748B" strokeWidth="2.5" strokeLinecap="round"/>
                  <line x1="22.4" y1="9.6" x2="25.9" y2="6.1" stroke="#64748B" strokeWidth="2.5" strokeLinecap="round"/>
                </svg>
                <span>Logoipsum</span>
              </div>

              {/* Logo 3: Lightning Bolt Circle */}
              <div className="flex items-center gap-2.5 font-extrabold text-base sm:text-lg text-slate-700 tracking-tight select-none">
                <svg width="28" height="28" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" className="shrink-0">
                  <circle cx="16" cy="16" r="16" fill="#64748B"/>
                  <path d="M 18 6 L 10 17 L 16 17 L 14 26 L 22 15 L 16 15 Z" fill="#F4F4F6"/>
                </svg>
                <span>Logoipsum</span>
              </div>

              {/* Logo 4: Four Petal Flower Dots Circle */}
              <div className="flex items-center gap-2.5 font-extrabold text-base sm:text-lg text-slate-700 tracking-tight select-none">
                <svg width="28" height="28" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" className="shrink-0">
                  <circle cx="16" cy="16" r="16" fill="#64748B"/>
                  <circle cx="11.5" cy="11.5" r="3.2" fill="#F4F4F6"/>
                  <circle cx="20.5" cy="11.5" r="3.2" fill="#F4F4F6"/>
                  <circle cx="11.5" cy="20.5" r="3.2" fill="#F4F4F6"/>
                  <circle cx="20.5" cy="20.5" r="3.2" fill="#F4F4F6"/>
                </svg>
                <span>Logoipsum</span>
              </div>

              {/* Logo 5: Concentric Ripple Spiral Circle */}
              <div className="flex items-center gap-2.5 font-extrabold text-base sm:text-lg text-slate-700 tracking-tight select-none">
                <svg width="28" height="28" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" className="shrink-0">
                  <circle cx="16" cy="16" r="16" fill="#64748B"/>
                  <circle cx="11" cy="16" r="2" fill="#F4F4F6"/>
                  <circle cx="11" cy="16" r="5" stroke="#F4F4F6" strokeWidth="1.2" fill="none"/>
                  <circle cx="11" cy="16" r="8" stroke="#F4F4F6" strokeWidth="1.2" fill="none"/>
                  <circle cx="11" cy="16" r="11" stroke="#F4F4F6" strokeWidth="1.2" fill="none"/>
                </svg>
                <span>Logoipsum</span>
              </div>

            </div>
          </div>
        </section>


        {/* ================= 4. DISCOVER YOUR PASSION SECTION & PILLS ================= */}
        <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto space-y-4 mb-12">
            <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-slate-900">
              Discover Your Passion, <br className="hidden sm:inline" />
              Build Your Skills
            </h2>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
              At Bytespace Courses, we bring you closer to life-changing knowledge. Explore a variety of courses across different fields, from technology to the arts, and make a difference in your career and life.
            </p>
          </div>

          {/* Filter Category Pills */}
          <div className="flex flex-wrap items-center justify-center gap-2.5 max-w-5xl mx-auto">
            {MOCK_CATEGORIES_FILTER.map((cat) => {
              const isActive = activeFilter === cat.slug;
              return (
                <button
                  key={cat.slug}
                  onClick={() => setActiveFilter(cat.slug)}
                  className={`px-4.5 py-2 rounded-full text-xs font-semibold transition-all ${
                    isActive
                      ? 'bg-[#ccff00] text-slate-950 font-extrabold shadow-sm'
                      : 'bg-slate-100 hover:bg-slate-200 text-slate-700'
                  }`}
                >
                  {cat.name}
                </button>
              );
            })}
            <Link
              href="/search"
              className="px-4.5 py-2 rounded-full text-xs font-bold text-blue-600 hover:underline"
            >
              + More
            </Link>
          </div>
        </section>


        {/* ================= 5. COURSE CARDS GRID & PAGINATION ================= */}
        <section className="pb-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          {/* 3x2 Grid of 6 Course Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {MOCK_COURSES.slice(0, 6).map((course, idx) => (
              <CourseCard key={`${course.id}-${idx}`} course={course} />
            ))}
          </div>

          {/* Centered Pagination Control Bar */}
          <div className="flex items-center justify-center gap-3 pt-4">
            <button
              onClick={() => setCurrentPage((p) => Math.max(p - 1, 1))}
              aria-label="Previous Page"
              className="w-10 h-10 rounded-full border border-slate-200 flex items-center justify-center text-slate-700 hover:bg-slate-100 transition-colors shadow-xs"
            >
              <ChevronLeft className="w-4 h-4 stroke-[2]" />
            </button>

            {[1, 2, 3, 4, 5].map((p) => (
              <button
                key={p}
                onClick={() => setCurrentPage(p)}
                className={`w-9 h-9 rounded-full text-xs transition-all ${
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
              aria-label="Next Page"
              className="w-10 h-10 rounded-full border border-slate-200 flex items-center justify-center text-slate-700 hover:bg-slate-100 transition-colors shadow-xs"
            >
              <ChevronRight className="w-4 h-4 stroke-[2]" />
            </button>
          </div>
        </section>


        {/* ================= 6. EXPLORE DIVERSE LEARNING PATHS SECTION ================= */}
        <section className="py-20 bg-slate-50/60 border-t border-slate-200">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
            <div className="text-center max-w-3xl mx-auto space-y-4">
              <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-900">
                Explore Diverse Learning Paths at Bytespace
              </h2>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
                At Bytespace, we believe in empowering individuals through knowledge. Our diverse range of courses spans various fields, ensuring there&apos;s something for everyone. Unleash your potential and explore our carefully curated categories.
              </p>
            </div>

            {/* 6 Category Icon Cards */}
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-6">
              {MOCK_PATH_CATEGORIES.map((item) => (
                <Link
                  key={item.id}
                  href={`/search?category=${item.id}`}
                  className="bg-white p-6 rounded-[24px] border border-slate-200/90 shadow-xs hover:shadow-lg hover:-translate-y-1 transition-all duration-300 flex flex-col items-center text-center space-y-4 group"
                >
                  <div className="w-14 h-14 rounded-full bg-[#CCFF00] flex items-center justify-center shadow-xs group-hover:scale-110 transition-transform shrink-0">
                    {renderPathIcon(item.icon)}
                  </div>
                  <span className="font-extrabold text-sm text-slate-900 group-hover:text-blue-600 transition-colors">
                    {item.name}
                  </span>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* ================= 7. FEATURE SECTIONS: PROFESSIONAL GROWTH & CREATE/MANAGE ================= */}
        <section className="bg-gradient-to-r from-lime-50/60 via-white to-blue-50/60 py-24 border-t border-slate-200/60 overflow-hidden">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-32">
            
            {/* TOP BLOCK: Your Path to Professional Growth Starts Here! */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
              {/* Left Content */}
              <div className="lg:col-span-6 space-y-6">
                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 leading-[1.15] tracking-tight max-w-lg">
                  Your Path to Professional Growth Starts Here!
                </h2>

                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed max-w-md font-normal">
                  Explore our curated selection of courses tailored to enhance your capabilities and accelerate your career journey. Whether you are looking to sharpen specific skills, gain industry expertise, or embark on a new career path entirely, we have the resources you need.
                </p>

                {/* Key Stats Row */}
                <div className="flex items-center gap-10 pt-4 border-t border-slate-200/60">
                  <div>
                    <p className="text-3xl font-extrabold text-blue-600 tracking-tight">12K</p>
                    <p className="text-xs font-medium text-slate-500">Students</p>
                  </div>
                  <div>
                    <p className="text-3xl font-extrabold text-blue-600 tracking-tight">70+</p>
                    <p className="text-xs font-medium text-slate-500">Courses</p>
                  </div>
                  <div>
                    <p className="text-3xl font-extrabold text-blue-600 tracking-tight">16</p>
                    <p className="text-xs font-medium text-slate-500">Creators</p>
                  </div>
                </div>
              </div>

              {/* Right Visuals Container */}
              <div className="lg:col-span-6 relative flex justify-center">
                <div className="relative w-full max-w-lg min-h-[400px] flex items-center justify-center">
                  
                  {/* Background Card Preview: Learn Figma from Basic */}
                  <div className="absolute top-4 left-2 sm:left-6 w-72 sm:w-80 bg-white rounded-3xl p-4 shadow-xl border border-slate-200/90 z-10 space-y-3 opacity-95 -rotate-3">
                    <div className="relative aspect-[16/10] rounded-2xl overflow-hidden bg-slate-100">
                      <img
                        src="https://images.unsplash.com/photo-1581291518633-83b4ebd1d83e?auto=format&fit=crop&q=80&w=500"
                        alt="Learn Figma from Basic"
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute bottom-2 left-2 flex gap-1 text-[9px] font-semibold bg-white/80 backdrop-blur-md px-2 py-0.5 rounded-full text-slate-800">
                        <span>17 Lessons</span>
                        <span>2 hours 16 mins</span>
                      </div>
                    </div>
                    <div>
                      <h4 className="font-extrabold text-xs sm:text-sm text-slate-900">Learn Figma from Basic</h4>
                      <p className="text-[10px] text-blue-600 font-semibold">by purepearl studio</p>
                    </div>
                    <div className="flex items-center justify-between pt-1 border-t border-slate-100 text-[10px]">
                      <span className="px-2 py-0.5 rounded bg-slate-100 text-slate-600 font-semibold">Beginner</span>
                      <span className="font-black text-blue-600">$25<span className="text-slate-400 font-normal">/lifetime</span></span>
                    </div>
                  </div>

                  {/* Floating Learning Progress 55% Badge */}
                  <div className="absolute top-24 right-0 sm:right-4 bg-white p-4 rounded-2xl shadow-2xl border border-slate-200/90 z-30 w-48 space-y-1">
                    <span className="text-[10px] font-bold text-slate-400 block">Learning Progress</span>
                    <span className="text-3xl font-black text-slate-900 block">55%</span>
                    <div className="w-full h-2 rounded-full bg-slate-100 overflow-hidden mt-1">
                      <div className="w-[55%] h-full bg-[#CCFF00]"></div>
                    </div>
                  </div>

                  {/* Lime 3D Spring Decoration top right */}
                  <div className="absolute top-6 right-2 z-20 pointer-events-none">
                    <LimeWavyShape className="w-24 h-auto" />
                  </div>

                  {/* Cutout Portrait of Young Man (Shoaib Rahman Rian) */}
                  <div className="relative z-20 mt-12">
                    <img
                      src="https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?auto=format&fit=crop&q=80&w=700"
                      alt="Shoaib Rahman Rian"
                      className="w-72 sm:w-80 h-80 sm:h-96 object-cover rounded-3xl shadow-2xl border-4 border-white"
                    />

                    {/* Red Cursor Tag: Shoaib Rahman Rian */}
                    <div className="absolute -bottom-4 left-4 bg-[#FF4D2E] text-white px-3.5 py-1.5 rounded-xl text-xs font-extrabold flex items-center gap-1.5 shadow-xl border border-white/40">
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M3.5 3.5L10.5 20.5L14 13.5L21 10L3.5 3.5Z" fill="#FFFFFF" />
                      </svg>
                      <span>Shoaib Rahman Rian</span>
                    </div>
                  </div>

                </div>
              </div>
            </div>

            {/* BOTTOM BLOCK: Create & Manage Courses Easily. */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
              {/* Left Visuals Container */}
              <div className="lg:col-span-6 relative flex justify-center order-2 lg:order-1">
                <div className="relative w-full max-w-lg min-h-[420px] flex items-center justify-center">
                  
                  {/* Revenue Widgets floating left */}
                  <div className="absolute top-4 left-0 sm:left-4 z-30 space-y-2.5">
                    <div className="bg-blue-600 text-white p-3.5 rounded-2xl shadow-xl w-44 space-y-0.5 border border-blue-400/30">
                      <span className="text-[9px] font-bold text-blue-200 uppercase block tracking-wider">Total Revenue</span>
                      <span className="text-[10px] text-blue-200 block">July 1-28</span>
                      <span className="text-base font-black block">$120.29</span>
                    </div>

                    <div className="bg-blue-700 text-white p-3.5 rounded-2xl shadow-xl w-44 space-y-0.5 border border-blue-500/30">
                      <span className="text-[9px] font-bold text-blue-200 uppercase block tracking-wider">Year to Date</span>
                      <span className="text-[10px] text-blue-200 block">2023</span>
                      <div className="flex items-center justify-between">
                        <span className="text-base font-black">$1,200.38</span>
                        <span className="text-[9px] bg-[#CCFF00] text-slate-950 px-1.5 py-0.5 rounded-md font-extrabold">+12%</span>
                      </div>
                    </div>
                  </div>

                  {/* Lime 3D Spring Decoration top right */}
                  <div className="absolute top-4 right-4 z-10 pointer-events-none">
                    <LimeWavyShape className="w-24 h-auto" />
                  </div>

                  {/* Cutout Portrait of Female Creator */}
                  <div className="relative z-20 ml-16 sm:ml-24">
                    <img
                      src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=700"
                      alt="Female Creator"
                      className="w-72 sm:w-80 h-80 sm:h-96 object-cover rounded-3xl shadow-2xl border-4 border-white"
                    />

                    {/* Happy Students Badge Card Bottom Right */}
                    <div className="absolute -bottom-6 right-0 sm:-right-4 bg-white p-3.5 rounded-2xl shadow-2xl border border-slate-200/90 z-30 w-52 space-y-1">
                      <span className="text-xs font-extrabold text-slate-900 block">Happy Students</span>
                      <span className="text-[11px] text-slate-700 font-bold flex items-center gap-1">
                        4.5 <span className="text-slate-400 font-normal">(240)</span> <Star className="w-3 h-3 fill-amber-400 text-amber-400" />
                      </span>
                      <div className="flex items-center -space-x-1.5 pt-1">
                        <img src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=40" alt="Student" className="w-5 h-5 rounded-full border border-white object-cover" />
                        <img src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=40" alt="Student" className="w-5 h-5 rounded-full border border-white object-cover" />
                        <img src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=40" alt="Student" className="w-5 h-5 rounded-full border border-white object-cover" />
                        <img src="https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&q=80&w=40" alt="Student" className="w-5 h-5 rounded-full border border-white object-cover" />
                        <span className="w-5 h-5 rounded-full bg-[#CCFF00] text-slate-950 font-extrabold text-[9px] flex items-center justify-center border border-white">2K+</span>
                      </div>
                    </div>
                  </div>

                </div>
              </div>

              {/* Right Content */}
              <div className="lg:col-span-6 space-y-6 order-1 lg:order-2">
                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 leading-[1.15] tracking-tight max-w-lg">
                  Create &amp; Manage Courses Easily.
                </h2>

                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed max-w-md font-normal">
                  <strong className="text-slate-900 font-extrabold">ByteSpace</strong> supports individuals or entities in the creation, publication, and administration of educational courses.
                </p>

                {/* Checklist Bullet Points */}
                <div className="space-y-3 pt-2">
                  {[
                    'Share Your Expertise',
                    'Monetize Your Passion',
                    'Flexibility and Autonomy',
                    'Build a Community',
                  ].map((item, idx) => (
                    <div key={idx} className="flex items-center gap-3 text-xs sm:text-sm font-bold text-slate-900">
                      <CheckCircle2 className="w-5 h-5 text-white fill-blue-600 shrink-0" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>

            </div>

          </div>
        </section>


        {/* ================= 8. UNLOCK YOUR POTENTIAL AS A CREATOR BANNER ================= */}
        <section className="bg-[#0038ff] text-white py-24 relative overflow-hidden">
          {/* Subtle Grid Background */}
          <div
            className="absolute inset-0 opacity-15 pointer-events-none"
            style={{
              backgroundImage:
                'linear-gradient(#ffffff 1px, transparent 1px), linear-gradient(90deg, #ffffff 1px, transparent 1px)',
              backgroundSize: '40px 40px',
            }}
          ></div>

          <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center relative z-10 space-y-6">
            <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight leading-tight text-white">
              Unlock Your Potential as a Creator with ByteSpace
            </h2>

            <p className="text-xs sm:text-sm text-blue-100 max-w-2xl mx-auto leading-relaxed font-medium">
              Experience the collaboration of numerous creators and an expanding selection of courses. Register now and become a part of a community comprising over 10,000 local and international creators. Utilize our Course Editor, and showcase your expertise by publishing your finest course on the ByteSpace Course Library.
            </p>

            <div className="pt-4">
              <Link
                href="/register"
                className="inline-block px-8 py-3.5 rounded-full bg-[#ccff00] text-slate-950 font-black text-xs hover:bg-[#b8e600] transition-colors shadow-lg"
              >
                Join as Creator
              </Link>
            </div>
          </div>
        </section>


        {/* ================= 9. DISCOVER WHAT OUR COMMUNITY IS SAYING ================= */}
        <section className="py-16 sm:py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative overflow-hidden rounded-[36px] bg-slate-50/50 p-8 sm:p-14 border border-slate-100 shadow-xs">
            
            {/* Background Glow 1: Top-Right / Center Vibrant Soft Lime-Yellow Glow */}
            <div className="absolute -top-16 -right-16 w-[600px] h-[600px] rounded-full bg-[#CCFF00]/35 blur-3xl pointer-events-none z-0"></div>

            {/* Background Glow 2: Bottom-Left Soft Faded Light Blue/Lavender Glow */}
            <div className="absolute -bottom-20 -left-20 w-[550px] h-[550px] rounded-full bg-[#C7D2FE]/60 blur-3xl pointer-events-none z-0"></div>

            <div className="relative z-10 space-y-12">
              
              {/* Top Section Header & Subtext */}
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
                <div className="lg:col-span-6">
                  <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight leading-tight">
                    Discover What Our <br className="hidden sm:inline" />
                    Community Is Saying
                  </h2>
                </div>
                <div className="lg:col-span-6">
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal pt-1">
                    At ByteSpace, our vibrant community of learners and creators is at the heart of what we do. Hear directly from those who have experienced the transformative journey of learning and creating on our platform. Explore testimonials that reflect the diverse perspectives of enthusiastic learners and accomplished creators.
                  </p>
                </div>
              </div>

              {/* 3 Review Cards Grid */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
                {MOCK_TESTIMONIALS.map((t) => (
                  <div
                    key={t.id}
                    className="p-8 rounded-[28px] bg-white border border-slate-100 shadow-sm flex flex-col space-y-6 transition-all duration-300 hover:shadow-md"
                  >
                    {/* Top-Left Circular Avatar Image */}
                    <img
                      src={t.avatar}
                      alt={t.name}
                      className="w-16 h-16 rounded-full object-cover shadow-xs"
                    />

                    {/* Name & Title */}
                    <div className="space-y-0.5">
                      <h3 className="text-lg sm:text-xl font-extrabold text-slate-900 tracking-tight">{t.name}</h3>
                      <p className="text-sm sm:text-base font-semibold text-blue-600">{t.role}</p>
                    </div>

                    {/* Review Text */}
                    <p className="text-sm sm:text-base text-slate-600 leading-relaxed font-normal">
                      "{t.comment}"
                    </p>
                  </div>
                ))}
              </div>

            </div>

          </div>
        </section>

      </main>

      {/* 10. FOOTER */}
      <Footer />

    </div>
  );
}
