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

export default function HomePage() {
  const router = useRouter();
  const [searchQuery, setSearchQuery] = useState('');
  const [activeFilter, setActiveFilter] = useState('featured');

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
        <section className="relative bg-[#0038ff] text-white pt-12 pb-24 overflow-hidden">
          {/* Subtle Grid Background Overlay */}
          <div
            className="absolute inset-0 opacity-15 pointer-events-none"
            style={{
              backgroundImage:
                'linear-gradient(#ffffff 1px, transparent 1px), linear-gradient(90deg, #ffffff 1px, transparent 1px)',
              backgroundSize: '40px 40px',
            }}
          ></div>

          {/* 3D Decorative Abstract Vector Shapes */}
          {/* Top-Left Yellow Coiled Squiggle */}
          <div className="absolute top-10 left-6 lg:left-12 w-24 h-44 bg-[#ccff00] rounded-full blur-xs opacity-90 transform -rotate-12 pointer-events-none flex items-center justify-center">
            <div className="w-16 h-36 border-4 border-slate-950 rounded-full"></div>
          </div>

          {/* Top-Right Yellow Cylinder/Cone */}
          <div className="absolute top-8 right-8 lg:right-16 w-32 h-44 bg-[#ccff00] rounded-3xl transform rotate-12 pointer-events-none shadow-2xl opacity-90"></div>

          {/* Bottom-Right White Torus / Pyramid */}
          <div className="absolute bottom-12 right-24 hidden lg:block w-28 h-28 bg-white/90 rounded-2xl transform rotate-45 pointer-events-none shadow-xl"></div>

          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="text-center space-y-6 max-w-4xl mx-auto">
              
              {/* Main Heading */}
              <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight leading-none text-white drop-shadow-md">
                Get Access to Hundreds <br className="hidden sm:inline" />
                Courses Available
              </h1>

              {/* Subtext */}
              <p className="text-base sm:text-lg text-blue-100 max-w-2xl mx-auto font-medium leading-relaxed">
                Unlock your creativity, gain valuable knowledge, and grow your business with our wide range of courses.
              </p>

              {/* Search Bar */}
              <form
                onSubmit={handleSearchSubmit}
                className="max-w-xl mx-auto flex items-center bg-white rounded-full p-1.5 shadow-2xl border border-blue-400/30"
              >
                <div className="flex items-center pl-4 flex-grow">
                  <Search className="w-5 h-5 text-slate-400 mr-2 shrink-0" />
                  <input
                    type="text"
                    placeholder="Course, topic, creator"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="w-full text-slate-900 placeholder-slate-400 text-sm bg-transparent focus:outline-none font-medium"
                  />
                </div>
                <button
                  type="submit"
                  className="px-7 py-3 rounded-full bg-[#ccff00] text-slate-950 font-extrabold text-sm hover:bg-[#b8e600] transition-colors shadow-sm"
                >
                  Search
                </button>
              </form>

            </div>

            {/* Central Student Graphic with Radial Backdrop & Floating UI Cards */}
            <div className="mt-12 relative flex justify-center items-center">
              
              {/* Large Lime-Green Radial Backdrop Circle */}
              <div className="w-[340px] h-[340px] sm:w-[480px] sm:h-[480px] rounded-full bg-[#ccff00] absolute inset-0 m-auto -z-0"></div>

              {/* Main Student Image */}
              <div className="relative z-10 max-w-md sm:max-w-lg">
                <img
                  src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&q=80&w=800"
                  alt="ByteSpace Student"
                  className="w-full h-auto object-contain drop-shadow-2xl rounded-3xl"
                />

                {/* Floating Card 1: UI/UX Design (Top Left) */}
                <div className="absolute top-4 -left-4 sm:-left-12 bg-white text-slate-900 p-3.5 rounded-2xl shadow-xl border border-slate-100 flex flex-col space-y-0.5 z-20">
                  <span className="text-xs font-extrabold text-slate-900">UI/UX Design</span>
                  <span className="text-[10px] font-semibold text-slate-500">200 Courses • 1500+ Students</span>
                </div>

                {/* Floating Card 2: Learning Progress 55% (Top Right) */}
                <div className="absolute top-4 -right-4 sm:-right-12 bg-white text-slate-900 p-4 rounded-2xl shadow-xl border border-slate-100 space-y-1 z-20 w-44">
                  <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider block">
                    Learning Progress
                  </span>
                  <span className="text-3xl font-black text-slate-900 block">55%</span>
                  <div className="w-full h-2 rounded-full bg-slate-100 overflow-hidden mt-1">
                    <div className="w-[55%] h-full bg-[#ccff00]"></div>
                  </div>
                </div>

                {/* Floating Card 3: Students Stack +2K (Bottom Left) */}
                <div className="absolute bottom-6 -left-4 sm:-left-10 bg-white text-slate-900 p-3 rounded-2xl shadow-xl border border-slate-100 space-y-1.5 z-20">
                  <span className="text-[10px] font-bold text-slate-500 block">Students</span>
                  <div className="flex items-center -space-x-2">
                    <img
                      src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=80"
                      alt="Student"
                      className="w-7 h-7 rounded-full border-2 border-white object-cover"
                    />
                    <img
                      src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=80"
                      alt="Student"
                      className="w-7 h-7 rounded-full border-2 border-white object-cover"
                    />
                    <img
                      src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=80"
                      alt="Student"
                      className="w-7 h-7 rounded-full border-2 border-white object-cover"
                    />
                    <img
                      src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=80"
                      alt="Student"
                      className="w-7 h-7 rounded-full border-2 border-white object-cover"
                    />
                    <span className="w-7 h-7 rounded-full bg-[#ccff00] text-slate-950 font-extrabold text-[10px] flex items-center justify-center border-2 border-white">
                      2K+
                    </span>
                  </div>
                </div>

              </div>
            </div>

          </div>
        </section>


        {/* ================= 3. BRAND PARTNERS / LOGOS ================= */}
        <section className="bg-slate-100/90 py-10 border-b border-slate-200">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-2 md:grid-cols-5 gap-8 items-center justify-items-center opacity-70">
              
              {/* Logoipsum 1 */}
              <div className="flex items-center gap-2 font-bold text-lg text-slate-800">
                <div className="w-6 h-6 rounded-full border-2 border-slate-800 flex items-center justify-center">
                  <div className="w-2 h-2 rounded-full bg-slate-800"></div>
                </div>
                <span>Logoipsum</span>
              </div>

              {/* Logoipsum 2 */}
              <div className="flex items-center gap-2 font-bold text-lg text-slate-800">
                <div className="w-6 h-6 rounded-md bg-slate-800 flex items-center justify-center text-white text-xs font-black">
                  ☀
                </div>
                <span>Logoipsum</span>
              </div>

              {/* Logoipsum 3 */}
              <div className="flex items-center gap-2 font-bold text-lg text-slate-800">
                <div className="w-6 h-6 rounded-full bg-slate-800 flex items-center justify-center text-white text-xs font-black">
                  ⚡
                </div>
                <span>Logoipsum</span>
              </div>

              {/* Logoipsum 4 */}
              <div className="flex items-center gap-2 font-bold text-lg text-slate-800">
                <div className="w-6 h-6 rounded-full border-2 border-slate-800 border-dashed flex items-center justify-center"></div>
                <span>Logoipsum</span>
              </div>

              {/* Logoipsum 5 */}
              <div className="flex items-center gap-2 font-bold text-lg text-slate-800">
                <div className="w-6 h-6 rounded-full bg-slate-800"></div>
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


        {/* ================= 5. COURSE CARDS GRID ================= */}
        <section className="pb-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {MOCK_COURSES.map((course) => (
              <CourseCard key={course.id} course={course} />
            ))}
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
                At Bytespace, we believe in empowering individuals through knowledge. Our diverse range of courses spans various fields, ensuring there's something for everyone. Unleash your potential and explore our carefully curated categories.
              </p>
            </div>

            {/* 6 Category Icon Cards */}
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-6">
              {MOCK_PATH_CATEGORIES.map((item) => (
                <Link
                  key={item.id}
                  href={`/search?category=${item.id}`}
                  className="bg-white p-6 rounded-3xl border border-slate-200/90 shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300 flex flex-col items-center text-center space-y-4 group"
                >
                  <div className="w-14 h-14 rounded-2xl bg-[#ccff00] flex items-center justify-center shadow-xs group-hover:scale-110 transition-transform">
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


        {/* ================= 7. YOUR PATH TO PROFESSIONAL GROWTH & CREATE/MANAGE ================= */}
        <section className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-28">
          
          {/* TOP BLOCK: Professional Growth */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Left Content */}
            <div className="lg:col-span-6 space-y-6">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 leading-tight">
                Your Path to Professional Growth Starts Here!
              </h2>

              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed max-w-lg">
                Explore our curated selection of courses tailored to enhance your capabilities and accelerate your career journey. Whether you are looking to sharpen specific skills, gain industry expertise, or embark on a new career path entirely, we have the resources you need.
              </p>

              {/* Stats Bar */}
              <div className="grid grid-cols-3 gap-6 pt-4 border-t border-slate-100">
                <div>
                  <p className="text-3xl font-black text-blue-600">12K</p>
                  <p className="text-xs font-medium text-slate-500">Students</p>
                </div>
                <div>
                  <p className="text-3xl font-black text-blue-600">70+</p>
                  <p className="text-xs font-medium text-slate-500">Courses</p>
                </div>
                <div>
                  <p className="text-3xl font-black text-blue-600">16</p>
                  <p className="text-xs font-medium text-slate-500">Creators</p>
                </div>
              </div>
            </div>

            {/* Right Graphic Showcase */}
            <div className="lg:col-span-6 relative flex justify-center">
              <div className="relative w-full max-w-md">
                
                {/* Main Card Graphic: Learn Figma from Basic */}
                <div className="bg-white rounded-3xl p-5 shadow-2xl border border-slate-200 relative z-10 space-y-4">
                  <div className="aspect-video rounded-2xl overflow-hidden relative">
                    <img
                      src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&q=80&w=600"
                      alt="Course Student Showcase"
                      className="w-full h-full object-cover"
                    />
                  </div>

                  <div>
                    <span className="text-xs font-extrabold text-slate-900 block">Learn Figma from Basic</span>
                    <span className="text-[10px] text-blue-600 font-semibold">by purepearl studio</span>
                  </div>

                  <div className="flex items-center justify-between pt-2 border-t border-slate-100">
                    <span className="text-xs font-bold text-slate-600">Beginner</span>
                    <span className="text-sm font-extrabold text-blue-600">$25/lifetime</span>
                  </div>
                </div>

                {/* Floating 55% Progress Card */}
                <div className="absolute -bottom-6 -right-6 bg-white p-4 rounded-2xl shadow-xl border border-slate-200 z-20 w-44">
                  <span className="text-[10px] font-bold text-slate-400 block">Learning Progress</span>
                  <span className="text-2xl font-black text-slate-900 block">55%</span>
                  <div className="w-full h-2 rounded-full bg-slate-100 overflow-hidden mt-1">
                    <div className="w-[55%] h-full bg-[#ccff00]"></div>
                  </div>
                </div>

              </div>
            </div>

          </div>


          {/* BOTTOM BLOCK: Create & Manage Courses Easily */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Left Graphic Showcase */}
            <div className="lg:col-span-6 relative flex justify-center order-2 lg:order-1">
              <div className="relative w-full max-w-md">
                
                {/* Female Instructor Image */}
                <div className="relative rounded-3xl overflow-hidden shadow-2xl border border-slate-200">
                  <img
                    src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=700"
                    alt="Female Instructor"
                    className="w-full h-96 object-cover"
                  />

                  {/* Floating Revenue Badges */}
                  <div className="absolute top-4 left-4 bg-blue-600 text-white p-3 rounded-2xl shadow-lg space-y-0.5">
                    <span className="text-[9px] font-bold text-blue-200 uppercase block">Total Revenue</span>
                    <span className="text-sm font-extrabold block">$120.29</span>
                  </div>

                  <div className="absolute top-20 left-4 bg-blue-600 text-white p-3 rounded-2xl shadow-lg space-y-0.5">
                    <span className="text-[9px] font-bold text-blue-200 uppercase block">Year to Date 2023</span>
                    <span className="text-sm font-extrabold flex items-center gap-1">
                      $1,200.38
                      <span className="text-[9px] bg-[#ccff00] text-slate-950 px-1 rounded font-bold">+12%</span>
                    </span>
                  </div>

                  {/* Floating Happy Students Box */}
                  <div className="absolute bottom-4 left-4 right-4 bg-white p-3 rounded-2xl shadow-xl border border-slate-100 flex items-center justify-between">
                    <div>
                      <span className="text-xs font-extrabold text-slate-900 block">Happy Students</span>
                      <span className="text-[10px] text-amber-500 font-bold flex items-center gap-1">
                        4.5 (240) <Star className="w-3 h-3 fill-amber-400" />
                      </span>
                    </div>

                    <div className="flex items-center -space-x-1.5">
                      <img
                        src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=60"
                        alt="User"
                        className="w-6 h-6 rounded-full border border-white object-cover"
                      />
                      <img
                        src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=60"
                        alt="User"
                        className="w-6 h-6 rounded-full border border-white object-cover"
                      />
                      <span className="w-6 h-6 rounded-full bg-[#ccff00] text-slate-950 font-bold text-[9px] flex items-center justify-center border border-white">
                        2K+
                      </span>
                    </div>
                  </div>

                </div>

              </div>
            </div>

            {/* Right Content */}
            <div className="lg:col-span-6 space-y-6 order-1 lg:order-2">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 leading-tight">
                Create & Manage Courses Easily.
              </h2>

              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed max-w-lg">
                <strong className="text-slate-900 font-bold">ByteSpace</strong> supports individuals or entities in the creation, publication, and administration of educational courses.
              </p>

              {/* Checklist */}
              <div className="space-y-3 pt-2">
                {[
                  'Share Your Expertise',
                  'Monetize Your Passion',
                  'Flexibility and Autonomy',
                  'Build a Community',
                ].map((item, idx) => (
                  <div key={idx} className="flex items-center gap-3 text-xs sm:text-sm font-bold text-slate-900">
                    <CheckCircle2 className="w-5 h-5 text-blue-600 fill-blue-600 text-white shrink-0" />
                    <span>{item}</span>
                  </div>
                ))}
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
        <section className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            <div className="lg:col-span-6">
              <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
                Discover What Our Community Is Saying
              </h2>
            </div>
            <div className="lg:col-span-6">
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
                At ByteSpace, our vibrant community of learners and creators is at the heart of what we do. Hear directly from those who have experienced the transformative journey of learning and creating on our platform. Explore testimonials that reflect the diverse perspectives of enthusiastic learners and accomplished creators.
              </p>
            </div>
          </div>

          {/* 3 Column Testimonials */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {MOCK_TESTIMONIALS.map((t, idx) => (
              <div
                key={t.id}
                className={`p-8 rounded-3xl bg-white border border-slate-200/90 shadow-sm flex flex-col justify-between space-y-6 ${
                  idx === 0 ? 'ring-2 ring-emerald-500' : ''
                }`}
              >
                <div className="space-y-4">
                  <img
                    src={t.avatar}
                    alt={t.name}
                    className="w-14 h-14 rounded-full object-cover border-2 border-slate-100"
                  />
                  <div>
                    <h3 className="text-base font-extrabold text-slate-900">{t.name}</h3>
                    <p className="text-xs font-bold text-blue-600">{t.role}</p>
                  </div>
                </div>

                <p className="text-xs text-slate-600 leading-relaxed font-normal">
                  "{t.comment}"
                </p>
              </div>
            ))}
          </div>

        </section>

      </main>

      {/* 10. FOOTER */}
      <Footer />

    </div>
  );
}
