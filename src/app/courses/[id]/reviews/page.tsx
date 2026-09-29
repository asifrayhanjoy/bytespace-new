'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { useParams } from 'next/navigation';
import {
  Star,
  Users,
  BarChart2,
  Share2,
  Play,
  Video,
  Folder,
  Award,
  MessageSquare,
} from 'lucide-react';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';

const INDIVIDUAL_REVIEWS = [
  {
    id: 'rev-1',
    userName: 'PurePearl Studio',
    userRole: 'UI/UX Designer',
    userAvatar:
      'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=120',
    date: 'a year ago',
    rating: 5,
    comment:
      'The course provided me with a comprehensive understanding of digital asset creation. The lessons were in-depth, practical, and immediately applicable to my work. Highly recommended!',
  },
  {
    id: 'rev-2',
    userName: 'Albert Flores',
    userRole: 'UI/UX Designer',
    userAvatar:
      'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=120',
    date: 'a year ago',
    rating: 5,
    comment:
      'This course transformed my approach to digital design. The combination of theory, hands-on exercises, and real-world applications made it a truly enriching experience. Excited to implement what I\'ve learned!',
  },
  {
    id: 'rev-3',
    userName: 'Cody Fisher',
    userRole: 'UI/UX Designer',
    userAvatar:
      'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=120',
    date: 'a year ago',
    rating: 5,
    comment:
      'The project showcase and critique module created a collaborative environment where I could showcase my work, receive valuable feedback, and refine my skills. It added a unique and valuable dimension to the learning process.',
  },
  {
    id: 'rev-4',
    userName: 'Brooklyn Simmons',
    userRole: 'UI/UX Designer',
    userAvatar:
      'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=120',
    date: 'a year ago',
    rating: 5,
    comment:
      'The lessons on optimizing digital assets for various platforms were particularly insightful. The course adapts to the evolving digital landscape, and the engaging content kept me motivated throughout.',
  },
];

export default function CourseReviewsPage() {
  const params = useParams();
  const [selectedFilter, setSelectedFilter] = useState<number>(0);

  const displayedReviews =
    selectedFilter === 0
      ? INDIVIDUAL_REVIEWS
      : INDIVIDUAL_REVIEWS.filter((r) => r.rating === selectedFilter);

  return (
    <div className="min-h-screen flex flex-col bg-white text-slate-900 font-sans selection:bg-[#CCFF00] selection:text-slate-950">
      {/* 1. HERO HEADER SECTION (Royal Blue Grid Background) */}
      <section className="relative bg-[#0022FF] text-white pb-16 lg:pb-24 overflow-hidden">
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

        {/* Course Header Info */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 sm:pt-12 relative z-10">
          <div className="flex flex-col md:flex-row md:items-start justify-between gap-6 pb-8">
            <div className="space-y-3 max-w-3xl">
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-white leading-tight">
                Build Digital Asset: A Comprehensive Guide
              </h1>
              <p className="text-sm sm:text-base md:text-lg text-blue-100 font-medium">
                Unlock the Power of Digital Creation with Expert Guidance
              </p>
              <p className="text-xs sm:text-sm text-white/90 font-medium">
                by <span className="text-[#CCFF00] font-bold">purepearl studio</span>
              </p>

              {/* Badges Row */}
              <div className="flex flex-wrap items-center gap-3 pt-2">
                <span className="px-4 py-1.5 rounded-full bg-white text-slate-900 text-xs font-bold flex items-center gap-1.5 shadow-sm">
                  <BarChart2 className="w-3.5 h-3.5 text-blue-600" />
                  <span>Intermediate</span>
                </span>

                <span className="px-4 py-1.5 rounded-full bg-white text-slate-900 text-xs font-bold flex items-center gap-1.5 shadow-sm">
                  <Star className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                  <span>4.8 (172 reviews)</span>
                </span>

                <span className="px-4 py-1.5 rounded-full bg-white text-slate-900 text-xs font-bold flex items-center gap-1.5 shadow-sm">
                  <Users className="w-3.5 h-3.5 text-blue-600" />
                  <span>199 Students</span>
                </span>
              </div>
            </div>

            {/* Share Button Pill */}
            <div className="shrink-0 pt-1">
              <button className="px-5 py-2.5 rounded-full bg-[#CCFF00] hover:bg-[#b8e600] text-slate-950 font-extrabold text-xs flex items-center gap-2 transition-all shadow-md">
                <Share2 className="w-4 h-4 stroke-[2.2]" />
                <span>Share</span>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* 2. MAIN CONTENT SPLIT LAYOUT */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-20 -mt-8 sm:-mt-12 pb-20 w-full flex-grow">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* LEFT SIDE (Video Player, Tabs, What Learners Are Saying, Ratings Summary Box, Individual Reviews) */}
          <div className="lg:col-span-7 space-y-10">
            {/* Video Preview Player Card */}
            <div className="relative aspect-[16/10] sm:aspect-video rounded-3xl overflow-hidden bg-slate-900 border border-slate-200 shadow-2xl group">
              <img
                src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=1000"
                alt="Build Digital Asset Video Player"
                className="w-full h-full object-cover opacity-95"
              />
              <button
                aria-label="Play Video"
                className="absolute inset-0 m-auto w-16 h-16 rounded-full bg-white/40 backdrop-blur-md text-white border-2 border-white flex items-center justify-center shadow-2xl hover:scale-110 transition-transform"
              >
                <Play className="w-7 h-7 fill-current text-white ml-1" />
              </button>
            </div>

            {/* Tabs Row (Reviews Active) */}
            <div className="flex items-center gap-3 border-b border-slate-100 pb-4">
              <Link
                href="/courses/build-digital-asset"
                className="px-6 py-2 rounded-full text-xs font-semibold bg-slate-100 text-slate-700 hover:bg-slate-200 transition-colors"
              >
                About
              </Link>

              <Link
                href="/courses/build-digital-asset/learn"
                className="px-6 py-2 rounded-full text-xs font-semibold bg-slate-100 text-slate-700 hover:bg-slate-200 transition-colors"
              >
                Lesson
              </Link>

              <button className="px-6 py-2 rounded-full text-xs bg-[#CCFF00] text-slate-950 font-extrabold shadow-xs">
                Reviews
              </button>
            </div>

            {/* What Learners Are Saying Section Header */}
            <div className="space-y-2">
              <h2 className="text-xl sm:text-2xl font-extrabold text-slate-900 tracking-tight">
                What Learners Are Saying
              </h2>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
                Discover what our learners have to say about their experience with &apos;Build Digital Assets: A Comprehensive Guide.&apos; Read reviews and ratings from individuals who have embarked on the transformative journey of mastering digital asset creation.
              </p>
            </div>

            {/* Ratings Summary Card Box */}
            <div className="bg-white p-6 sm:p-8 rounded-[32px] border border-slate-200/90 shadow-xs flex flex-col sm:flex-row items-center gap-6 sm:gap-8">
              {/* Left Lime-Yellow Box */}
              <div className="w-36 sm:w-40 h-32 sm:h-36 rounded-2xl bg-[#CCFF00] flex flex-col items-center justify-center shrink-0 shadow-xs">
                <span className="text-xs font-semibold text-slate-800">Ratings</span>
                <span className="text-4xl sm:text-5xl font-black text-slate-950 tracking-tight">4.7</span>
              </div>

              {/* Breakdown Bars */}
              <div className="w-full space-y-2.5">
                {/* 5-star bar: 720 */}
                <div className="flex items-center gap-3">
                  <div className="flex-grow h-2 rounded-full bg-slate-100 overflow-hidden">
                    <div className="h-full bg-[#CCFF00] rounded-full w-[85%]"></div>
                  </div>
                  <div className="flex items-center gap-1 shrink-0 text-slate-700">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-3.5 h-3.5 fill-slate-700 text-slate-700" />
                    ))}
                  </div>
                  <span className="w-8 text-right text-xs font-semibold text-slate-600">720</span>
                </div>

                {/* 4-star bar: 120 */}
                <div className="flex items-center gap-3">
                  <div className="flex-grow h-2 rounded-full bg-slate-100 overflow-hidden">
                    <div className="h-full bg-[#CCFF00] rounded-full w-[35%]"></div>
                  </div>
                  <div className="flex items-center gap-1 shrink-0 text-slate-700">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-3.5 h-3.5 fill-slate-700 text-slate-700" />
                    ))}
                  </div>
                  <span className="w-8 text-right text-xs font-semibold text-slate-600">120</span>
                </div>

                {/* 3-star bar: 21 */}
                <div className="flex items-center gap-3">
                  <div className="flex-grow h-2 rounded-full bg-slate-100 overflow-hidden">
                    <div className="h-full bg-[#CCFF00] rounded-full w-[15%]"></div>
                  </div>
                  <div className="flex items-center gap-1 shrink-0 text-slate-700">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-3.5 h-3.5 fill-slate-700 text-slate-700" />
                    ))}
                  </div>
                  <span className="w-8 text-right text-xs font-semibold text-slate-600">21</span>
                </div>

                {/* 2-star bar: 12 */}
                <div className="flex items-center gap-3">
                  <div className="flex-grow h-2 rounded-full bg-slate-100 overflow-hidden">
                    <div className="h-full bg-[#CCFF00] rounded-full w-[10%]"></div>
                  </div>
                  <div className="flex items-center gap-1 shrink-0 text-slate-700">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-3.5 h-3.5 fill-slate-700 text-slate-700" />
                    ))}
                  </div>
                  <span className="w-8 text-right text-xs font-semibold text-slate-600">12</span>
                </div>

                {/* 1-star bar: 16 */}
                <div className="flex items-center gap-3">
                  <div className="flex-grow h-2 rounded-full bg-slate-100 overflow-hidden">
                    <div className="h-full bg-[#CCFF00] rounded-full w-[12%]"></div>
                  </div>
                  <div className="flex items-center gap-1 shrink-0 text-slate-700">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-3.5 h-3.5 fill-slate-700 text-slate-700" />
                    ))}
                  </div>
                  <span className="w-8 text-right text-xs font-semibold text-slate-600">16</span>
                </div>
              </div>
            </div>

            {/* Individual Reviews Section */}
            <div className="space-y-6 pt-4">
              <h3 className="text-lg font-extrabold text-slate-900 tracking-tight">Individual Reviews:</h3>

              {/* Filter Pills */}
              <div className="flex flex-wrap items-center gap-3">
                <button
                  onClick={() => setSelectedFilter(0)}
                  className={`px-5 py-2 rounded-full text-xs font-extrabold transition-colors ${
                    selectedFilter === 0
                      ? 'bg-[#CCFF00] text-slate-950 shadow-xs'
                      : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
                  }`}
                >
                  All rating
                </button>

                {[5, 4, 3, 2, 1].map((stars) => (
                  <button
                    key={stars}
                    onClick={() => setSelectedFilter(stars)}
                    className={`px-4 py-2 rounded-full text-xs font-semibold flex items-center gap-1.5 transition-colors ${
                      selectedFilter === stars
                        ? 'bg-[#CCFF00] text-slate-950 font-extrabold shadow-xs'
                        : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
                    }`}
                  >
                    <Star className="w-3.5 h-3.5 fill-slate-700 text-slate-700" />
                    <span>{stars}</span>
                  </button>
                ))}
              </div>

              {/* Review Cards List */}
              <div className="space-y-4">
                {displayedReviews.map((rev) => (
                  <div
                    key={rev.id}
                    className="bg-white p-6 rounded-3xl border border-slate-200/90 shadow-xs space-y-4"
                  >
                    <div className="flex items-start justify-between">
                      <div className="flex items-center gap-3">
                        <img
                          src={rev.userAvatar}
                          alt={rev.userName}
                          className="w-12 h-12 rounded-full object-cover border border-slate-200"
                        />
                        <div>
                          <h4 className="text-sm font-extrabold text-slate-900">{rev.userName}</h4>
                          <p className="text-xs text-slate-400 font-medium">{rev.userRole}</p>
                        </div>
                      </div>
                      <span className="text-xs text-slate-400 font-medium">{rev.date}</span>
                    </div>

                    {/* 5-Star Row */}
                    <div className="flex items-center gap-1 text-slate-800">
                      {[...Array(rev.rating)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 fill-slate-800 text-slate-800" />
                      ))}
                    </div>

                    {/* Review Comment Quote */}
                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
                      &quot;{rev.comment}&quot;
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* RIGHT SIDE STICKY CARD (Pricing & Lesson Outline) */}
          <div className="lg:col-span-5 text-slate-900 sticky top-24">
            <div className="bg-white rounded-[32px] p-6 sm:p-7 shadow-2xl border border-slate-200/90 space-y-6">
              {/* Lesson Outline Box */}
              <div className="space-y-3 border-b border-slate-100 pb-5">
                <h3 className="text-base sm:text-lg font-extrabold text-slate-900">
                  112 Lessons (24 hours)
                </h3>

                <div className="space-y-2.5 text-xs">
                  <div className="flex justify-between items-center text-slate-800 font-medium">
                    <span>01 Introduction to Digital Assets</span>
                    <span className="text-blue-600 font-semibold">12 mins</span>
                  </div>
                  <div className="flex justify-between items-center text-slate-800 font-medium">
                    <span>02 Design Principles for Impacts</span>
                    <span className="text-blue-600 font-semibold">21 mins</span>
                  </div>
                  <div className="flex justify-between items-center text-slate-800 font-medium">
                    <span>03 Advanced Techniques in Digital Creation</span>
                    <span className="text-blue-600 font-semibold">16 mins</span>
                  </div>
                  <p className="text-[11px] text-slate-400 font-medium pt-1">99 more videos</p>
                </div>
              </div>

              {/* Call to action & Pricing */}
              <div className="space-y-3">
                <p className="text-xs text-slate-500 font-normal leading-relaxed">
                  Ready to Dive In? Enroll Now and Start Building Your Digital Future!
                </p>

                <div>
                  <span className="text-3xl font-black text-blue-600">$25</span>
                  <span className="text-xs text-slate-400 font-normal">/lifetime</span>
                </div>

                <button
                  type="button"
                  className="w-full py-3.5 rounded-full bg-[#CCFF00] text-slate-950 font-extrabold text-sm shadow-md hover:bg-[#b8e600] transition-colors"
                >
                  Enroll Now
                </button>
              </div>

              {/* Course Includes Checklist */}
              <div className="space-y-3 border-t border-slate-100 pt-5">
                <h4 className="text-xs font-extrabold text-slate-900">This course include</h4>
                <div className="space-y-2.5 text-xs text-slate-600">
                  <div className="flex items-center gap-2.5">
                    <Folder className="w-4 h-4 text-blue-600 stroke-[2]" />
                    <span>Learning Resources</span>
                  </div>
                  <div className="flex items-center gap-2.5">
                    <Video className="w-4 h-4 text-blue-600 stroke-[2]" />
                    <span>Quality Lesson Videos</span>
                  </div>
                  <div className="flex items-center gap-2.5">
                    <Award className="w-4 h-4 text-blue-600 stroke-[2]" />
                    <span>Certificate of Completion</span>
                  </div>
                  <div className="flex items-center gap-2.5">
                    <MessageSquare className="w-4 h-4 text-blue-600 stroke-[2]" />
                    <span>Private Consultation</span>
                  </div>
                </div>
              </div>

              {/* Instructor Profile Box */}
              <div className="border-t border-slate-100 pt-5 space-y-3">
                <div className="flex items-center gap-3">
                  <img
                    src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=120"
                    alt="PurePearl Studio"
                    className="w-10 h-10 rounded-full object-cover border border-slate-200"
                  />
                  <div>
                    <h5 className="text-xs font-extrabold text-slate-900">PurePearl Studio</h5>
                    <p className="text-[10px] text-slate-400 font-medium">Professional Creator</p>
                  </div>
                </div>
                <p className="text-xs text-slate-500 leading-relaxed font-normal">
                  Ready to Dive In? Enroll Now and Start Building Your Digital Future!
                </p>
                <Link
                  href="/creator/purepearl-studio"
                  className="block text-center w-full py-2.5 rounded-full border border-slate-200 text-xs font-bold text-slate-700 hover:bg-slate-50 transition-colors mt-2"
                >
                  See Full Profile
                </Link>
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* 3. FOOTER */}
      <Footer />
    </div>
  );
}
