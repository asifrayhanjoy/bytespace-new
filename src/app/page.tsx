'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import {
  Sparkles,
  ArrowRight,
  Play,
  CheckCircle,
  Star,
  Users,
  Award,
  Zap,
  TrendingUp,
  ShieldCheck,
  Compass,
  Layers,
  GraduationCap,
} from 'lucide-react';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { CourseCard } from '@/components/CourseCard';
import { CategoryCard } from '@/components/CategoryCard';
import { MOCK_COURSES, MOCK_CATEGORIES, MOCK_TESTIMONIALS, MOCK_STATS } from '@/data/mockData';

export default function HomePage() {
  const router = useRouter();
  const [selectedCategory, setSelectedCategory] = useState<string>('all');

  const filteredCourses =
    selectedCategory === 'all'
      ? MOCK_COURSES
      : MOCK_COURSES.filter(
          (c) => c.category.toLowerCase().includes(selectedCategory.toLowerCase())
        );

  return (
    <div className="min-h-screen flex flex-col bg-slate-50">
      <Header />

      <main className="flex-grow">
        {/* ================= HERO SECTION ================= */}
        <section className="relative overflow-hidden gradient-hero text-white pt-12 pb-24 lg:pt-16 lg:pb-32">
          {/* Decorative Background Patterns */}
          <div className="absolute top-0 right-0 -mt-12 -mr-12 w-96 h-96 rounded-full bg-blue-400/20 blur-3xl pointer-events-none"></div>
          <div className="absolute bottom-0 left-0 -mb-24 -ml-24 w-96 h-96 rounded-full bg-brand-accent/20 blur-3xl pointer-events-none"></div>
          
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
              
              {/* Hero Text Content */}
              <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
                
                {/* Badge */}
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-md border border-white/20 shadow-lg">
                  <span className="w-5 h-5 rounded-full bg-[#d2ff00] text-slate-950 flex items-center justify-center font-bold text-xs">
                    ★
                  </span>
                  <span className="text-xs sm:text-sm font-semibold tracking-wide text-white">
                    Get Access to Hundreds of Courses Available
                  </span>
                </div>

                {/* Main Heading */}
                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight leading-[1.1]">
                  Obtain Your Passion & <br className="hidden sm:inline" />
                  <span className="text-[#d2ff00] underline decoration-wavy decoration-[#d2ff00]/40">
                    Master Your Skills
                  </span>
                </h1>

                {/* Subtitle */}
                <p className="text-base sm:text-lg text-blue-100 max-w-2xl mx-auto lg:mx-0 leading-relaxed">
                  Empowering creators, developers, and designers worldwide with world-class step-by-step video courses, UI asset guides, and interactive creator communities.
                </p>

                {/* Action Buttons */}
                <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4 pt-2">
                  <Link
                    href="/search"
                    className="px-7 py-3.5 rounded-full bg-[#d2ff00] text-slate-950 font-extrabold text-sm shadow-xl hover:bg-yellow-300 hover:scale-105 transition-all flex items-center gap-2"
                  >
                    <span>Explore Courses</span>
                    <ArrowRight className="w-4 h-4" />
                  </Link>

                  <Link
                    href="/courses/build-digital-asset"
                    className="px-7 py-3.5 rounded-full bg-white/10 hover:bg-white/20 text-white font-bold text-sm border border-white/30 backdrop-blur-md transition-all flex items-center gap-2"
                  >
                    <Play className="w-4 h-4 fill-white" />
                    <span>Watch Preview</span>
                  </Link>
                </div>

                {/* Hero Stats */}
                <div className="pt-8 border-t border-white/15 grid grid-cols-3 gap-4 max-w-lg mx-auto lg:mx-0">
                  {MOCK_STATS.slice(0, 3).map((stat, idx) => (
                    <div key={idx} className="space-y-0.5">
                      <p className="text-2xl sm:text-3xl font-black text-[#d2ff00]">{stat.value}</p>
                      <p className="text-xs text-blue-200 font-medium">{stat.label}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Hero Visual Display with Floating Avatars */}
              <div className="lg:col-span-5 relative flex justify-center">
                <div className="relative w-full max-w-md aspect-square rounded-3xl bg-gradient-to-tr from-blue-700 to-indigo-600 p-3 shadow-2xl border border-white/20">
                  
                  {/* Hero Student Image */}
                  <div className="w-full h-full rounded-2xl overflow-hidden relative group">
                    <img
                      src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&q=80&w=800"
                      alt="Student Learning"
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent"></div>

                    {/* Floating Instructor Tag 1: Shafin Ahmed */}
                    <div className="absolute top-4 left-4 bg-white/95 backdrop-blur-md text-slate-900 px-3 py-1.5 rounded-full shadow-lg border border-white flex items-center gap-2 animate-bounce">
                      <div className="w-6 h-6 rounded-full bg-blue-600 text-white text-[10px] font-bold flex items-center justify-center">
                        SA
                      </div>
                      <span className="text-xs font-bold">Shafin Ahmed</span>
                      <span className="w-2 h-2 rounded-full bg-emerald-500"></span>
                    </div>

                    {/* Floating Instructor Tag 2: Sayed Sheikh */}
                    <div className="absolute top-16 right-4 bg-slate-900/90 text-white px-3 py-1.5 rounded-full shadow-lg border border-slate-700 flex items-center gap-2">
                      <div className="w-6 h-6 rounded-full bg-[#d2ff00] text-slate-950 text-[10px] font-bold flex items-center justify-center">
                        SS
                      </div>
                      <span className="text-xs font-bold text-[#d2ff00]">Sayed Sheikh</span>
                    </div>

                    {/* Floating Badge 3: Mst. Maliha Mobassira */}
                    <div className="absolute bottom-6 left-4 bg-white/95 text-slate-900 px-3 py-2 rounded-2xl shadow-xl border border-slate-100 flex items-center gap-2.5">
                      <img
                        src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=100"
                        alt="Mst. Maliha"
                        className="w-8 h-8 rounded-full object-cover border"
                      />
                      <div>
                        <p className="text-xs font-extrabold text-slate-900">Mst. Maliha Mobassira</p>
                        <p className="text-[10px] font-semibold text-emerald-600">Top Growth Instructor</p>
                      </div>
                    </div>

                    {/* Play Button Overlay */}
                    <Link
                      href="/courses/build-digital-asset"
                      className="absolute inset-0 m-auto w-16 h-16 rounded-full bg-[#d2ff00] text-slate-950 flex items-center justify-center shadow-2xl hover:scale-110 transition-transform group-hover:bg-white"
                    >
                      <Play className="w-7 h-7 fill-current ml-1" />
                    </Link>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* ================= PARTNER BRANDS LOGOS ================= */}
        <section className="bg-white py-8 border-b border-slate-200">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <p className="text-center text-xs font-bold uppercase tracking-widest text-slate-400 mb-6">
              Trusted by tech leads & creators from world-class organizations
            </p>
            <div className="flex flex-wrap items-center justify-center gap-8 md:gap-16 opacity-70 grayscale hover:grayscale-0 transition-all">
              <span className="text-xl font-extrabold tracking-tighter text-slate-800">Google</span>
              <span className="text-xl font-extrabold tracking-tight text-slate-800">Meta</span>
              <span className="text-xl font-extrabold tracking-widest text-slate-800">MICROSOFT</span>
              <span className="text-xl font-extrabold tracking-tight text-slate-800">NETFLIX</span>
              <span className="text-xl font-extrabold tracking-tighter text-slate-800">stripe</span>
              <span className="text-xl font-extrabold tracking-tight text-slate-800">amazon</span>
            </div>
          </div>
        </section>

        {/* ================= POPULAR CATEGORIES ================= */}
        <section className="py-16 lg:py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12 space-y-3">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-100 text-brand-blue text-xs font-bold">
              <Compass className="w-3.5 h-3.5" />
              <span>Explore Top Categories</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight">
              Discover Your Passion & Skill
            </h2>
            <p className="text-sm text-slate-600">
              Pick from curated learning tracks designed to get you job-ready or building high-earning creator assets.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {MOCK_CATEGORIES.map((category) => (
              <CategoryCard key={category.id} category={category} />
            ))}
          </div>
        </section>

        {/* ================= FEATURED COURSES ================= */}
        <section className="py-16 bg-slate-100/70 border-y border-slate-200">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10">
              <div className="space-y-2">
                <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-100 text-amber-800 text-xs font-bold">
                  <Sparkles className="w-3.5 h-3.5" />
                  <span>Handpicked Courses</span>
                </div>
                <h2 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight">
                  Featured Courses
                </h2>
                <p className="text-sm text-slate-600">
                  Step-by-step masterclasses led by verified industry instructors.
                </p>
              </div>

              {/* Category Filter Tabs */}
              <div className="flex flex-wrap items-center gap-2 bg-white p-1.5 rounded-2xl border border-slate-200 shadow-sm">
                {['all', 'Design', 'Development', 'AI'].map((cat) => (
                  <button
                    key={cat}
                    onClick={() => setSelectedCategory(cat)}
                    className={`px-4 py-2 rounded-xl text-xs font-bold transition-all ${
                      selectedCategory === cat
                        ? 'bg-brand-blue text-white shadow-md'
                        : 'text-slate-600 hover:bg-slate-100'
                    }`}
                  >
                    {cat === 'all' ? 'All Courses' : cat}
                  </button>
                ))}
              </div>
            </div>

            {/* Courses Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {filteredCourses.map((course) => (
                <CourseCard key={course.id} course={course} />
              ))}
            </div>

            <div className="text-center mt-12">
              <Link
                href="/search"
                className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full bg-white border border-slate-300 text-slate-900 font-bold text-sm shadow-sm hover:bg-slate-900 hover:text-white transition-all"
              >
                <span>View All Courses</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </section>

        {/* ================= DIVERSE LEARNING PATHS SECTION ================= */}
        <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16 space-y-3">
            <h2 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight">
              Explore Diverse Learning Paths at ByteSpace
            </h2>
            <p className="text-sm text-slate-600">
              Everything you need to grow from beginner to senior practitioner in one unified ecosystem.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-8 rounded-3xl bg-white border border-slate-200/80 card-shadow space-y-4 text-center group hover:border-brand-blue transition-colors">
              <div className="w-16 h-16 rounded-2xl bg-blue-50 text-brand-blue flex items-center justify-center mx-auto group-hover:scale-110 transition-transform">
                <Zap className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold text-slate-900">Project-Based Curriculum</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Learn by building real-world digital assets, SaaS templates, and production apps with source code included.
              </p>
            </div>

            <div className="p-8 rounded-3xl bg-white border border-slate-200/80 card-shadow space-y-4 text-center group hover:border-brand-blue transition-colors">
              <div className="w-16 h-16 rounded-2xl bg-emerald-50 text-emerald-600 flex items-center justify-center mx-auto group-hover:scale-110 transition-transform">
                <ShieldCheck className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold text-slate-900">Verified Creator Studio</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Instructors undergo rigorous portfolio verification to ensure top tier instructional quality.
              </p>
            </div>

            <div className="p-8 rounded-3xl bg-white border border-slate-200/80 card-shadow space-y-4 text-center group hover:border-brand-blue transition-colors">
              <div className="w-16 h-16 rounded-2xl bg-purple-50 text-purple-600 flex items-center justify-center mx-auto group-hover:scale-110 transition-transform">
                <Award className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold text-slate-900">Industry Credentials</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Receive verifiable shareable digital certificates upon completing course milestones and projects.
              </p>
            </div>
          </div>
        </section>

        {/* ================= PATH TO PROFESSIONAL GROWTH BANNER ================= */}
        <section className="bg-slate-900 text-white py-20 relative overflow-hidden">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              
              <div className="space-y-6">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#d2ff00] text-slate-950 text-xs font-extrabold">
                  <TrendingUp className="w-3.5 h-3.5" />
                  <span>Accelerate Your Career</span>
                </div>
                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight leading-tight">
                  Your Path to Professional Growth Starts Here!
                </h2>
                <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
                  Join over 15,000 learners building cutting edge skills, launching design assets, and securing senior developer positions.
                </p>

                <div className="grid grid-cols-3 gap-4 pt-4 border-t border-slate-800">
                  <div>
                    <p className="text-3xl font-extrabold text-[#d2ff00]">15K+</p>
                    <p className="text-xs text-slate-400">Graduates</p>
                  </div>
                  <div>
                    <p className="text-3xl font-extrabold text-[#d2ff00]">98%</p>
                    <p className="text-xs text-slate-400">Satisfaction</p>
                  </div>
                  <div>
                    <p className="text-3xl font-extrabold text-[#d2ff00]">75+</p>
                    <p className="text-xs text-slate-400">Instructors</p>
                  </div>
                </div>

                <div className="pt-2">
                  <Link
                    href="/register"
                    className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-brand-blue text-white font-extrabold text-sm shadow-xl hover:bg-blue-600 transition-all"
                  >
                    <span>Get Started Free Today</span>
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>

              {/* Banner Graphic */}
              <div className="relative flex justify-center">
                <div className="relative w-full max-w-md rounded-3xl overflow-hidden border border-slate-800 shadow-2xl">
                  <img
                    src="https://images.unsplash.com/photo-1531403009284-440f080d1e12?auto=format&fit=crop&q=80&w=800"
                    alt="Growth Professional"
                    className="w-full h-80 object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent p-6 flex flex-col justify-end">
                    <span className="text-xs font-bold text-[#d2ff00] uppercase">Featured Mentor</span>
                    <p className="text-xl font-bold text-white">Bakkar</p>
                    <p className="text-xs text-slate-300">Senior UI Architect & Design System Creator</p>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* ================= UNLOCK POTENTIAL AS A CREATOR ================= */}
        <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="rounded-3xl bg-gradient-to-r from-blue-600 to-indigo-700 p-8 sm:p-14 text-white relative overflow-hidden shadow-2xl">
            <div className="max-w-2xl relative z-10 space-y-4">
              <span className="px-3 py-1 rounded-full bg-[#d2ff00] text-slate-950 text-xs font-black uppercase tracking-wider">
                For Instructors & Creators
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold leading-tight">
                Unlock Your Potential as a Creator with ByteSpace
              </h2>
              <p className="text-sm sm:text-base text-blue-100 leading-relaxed">
                Turn your tech knowledge and design systems into recurring revenue. Host video courses, sell UI packages, and build your community on ByteSpace.
              </p>
              <div className="pt-2 flex flex-wrap gap-4">
                <Link
                  href="/creator/purepixel-studio"
                  className="px-6 py-3 rounded-full bg-white text-slate-900 font-bold text-xs shadow-lg hover:bg-[#d2ff00] transition-colors"
                >
                  View Sample Creator Studio
                </Link>
                <Link
                  href="/register"
                  className="px-6 py-3 rounded-full bg-slate-950 text-white font-bold text-xs border border-white/20 hover:bg-slate-900 transition-colors"
                >
                  Apply as Instructor
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* ================= COMMUNITY REVIEWS / TESTIMONIALS ================= */}
        <section className="py-16 bg-white border-t border-slate-200">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-2xl mx-auto mb-12 space-y-2">
              <h2 className="text-3xl font-black text-slate-900">
                Discover What Our Community is Saying
              </h2>
              <p className="text-sm text-slate-600">
                Real feedback from learners and instructors thriving on ByteSpace.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {MOCK_TESTIMONIALS.map((t) => (
                <div key={t.id} className="p-6 rounded-2xl bg-slate-50 border border-slate-200 space-y-4">
                  <div className="flex items-center gap-1 text-amber-400">
                    {[...Array(t.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-amber-400" />
                    ))}
                  </div>
                  <p className="text-xs sm:text-sm text-slate-700 italic leading-relaxed">
                    "{t.comment}"
                  </p>
                  <div className="flex items-center gap-3 pt-2 border-t border-slate-200">
                    <img src={t.avatar} alt={t.name} className="w-10 h-10 rounded-full object-cover" />
                    <div>
                      <h4 className="text-xs font-bold text-slate-900">{t.name}</h4>
                      <p className="text-[11px] text-slate-500">{t.role}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
