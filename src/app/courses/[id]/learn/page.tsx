'use client';

import React from 'react';
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

const MODULE_LESSONS = [
  {
    title: 'Module 1: Introduction to Digital Assets',
    description:
      "Lay the groundwork with lessons like 'Understanding Digital Elements' and 'Navigating Design Software Tools.' Dive into the essentials of digital asset creation.",
  },
  {
    title: 'Module 2: Design Principles for Impact',
    description:
      "Master the principles that drive impactful designs with lessons such as 'Color Theory in Digital Design' and 'Typography Essentials.' Elevate your visual communication skills.",
  },
  {
    title: 'Module 4: User-Centric Design Strategies',
    description:
      "Understand 'Design Thinking in Digital Creation' and delve into 'User Experience (UX) Essentials.' Craft digital assets with a focus on user-centric design.",
  },
  {
    title: 'Module 5: Interactive Media and Engagement',
    description:
      "Engage your audience with lessons like 'Creating Interactive Presentations' and 'Integrating Multimedia Elements.' Master the art of creating immersive digital experiences.",
  },
  {
    title: 'Module 6: Project Showcase and Critique',
    description:
      "Perfect your presentation skills with 'Effective Presentation Techniques' and embrace collaboration with 'Peer Critique and Collaboration.' Showcase your work with confidence.",
  },
  {
    title: 'Module 7: Optimizing Digital Assets for Various Platforms',
    description:
      "Adapt your digital creations for 'Mobile Platforms' and optimize for 'Social Media.' Ensure widespread accessibility and engagement across diverse digital landscapes.",
  },
];

export default function CourseLessonsPage() {
  const params = useParams();

  return (
    <div className="min-h-screen flex flex-col bg-white text-slate-900 font-sans selection:bg-[#CCFF00] selection:text-slate-950">
      
      {/* 1. HERO HEADER SECTION (Royal Blue Grid Background) */}
      <section className="relative bg-[#0022FF] text-white pb-16 lg:pb-24 overflow-hidden">
        {/* Subtle Royal Blue Grid Background Overlay */}
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
          
          {/* LEFT SIDE (Video Player, Tabs, Explore Modules, Lesson List, Content, Progress) */}
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

            {/* Tabs Row (Lesson Active) */}
            <div className="flex items-center gap-3 border-b border-slate-100 pb-4">
              <Link
                href="/courses/build-digital-asset"
                className="px-6 py-2 rounded-full text-xs font-semibold bg-slate-100 text-slate-700 hover:bg-slate-200 transition-colors"
              >
                About
              </Link>

              <button className="px-6 py-2 rounded-full text-xs bg-[#CCFF00] text-slate-950 font-extrabold shadow-xs">
                Lesson
              </button>

              <Link
                href="/courses/build-digital-asset/reviews"
                className="px-6 py-2 rounded-full text-xs font-semibold bg-slate-100 text-slate-700 hover:bg-slate-200 transition-colors"
              >
                Reviews
              </Link>
            </div>

            {/* Explore the Modules Header */}
            <div className="space-y-2">
              <h2 className="text-xl font-extrabold text-slate-900 tracking-tight">Explore the Modules</h2>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
                Immerse yourself in the course content as we break down each module into comprehensive lessons, providing practical insights and hands-on experiences.
              </p>
            </div>

            {/* Lesson List Modules */}
            <div className="space-y-4">
              <h3 className="text-lg font-extrabold text-slate-900 tracking-tight">Lesson List</h3>

              <div className="space-y-4">
                {MODULE_LESSONS.map((mod, idx) => (
                  <div key={idx} className="flex items-start gap-4 p-4.5 rounded-3xl bg-white border border-slate-200/90 shadow-xs">
                    {/* Vibrant Bright Lime-Yellow Video Icon Box */}
                    <div className="w-12 h-12 rounded-2xl bg-[#CCFF00] flex items-center justify-center shrink-0 shadow-xs">
                      <Video className="w-6 h-6 text-slate-950 stroke-[2]" />
                    </div>
                    <div className="space-y-1">
                      <h4 className="font-extrabold text-xs sm:text-sm text-slate-900">{mod.title}</h4>
                      <p className="text-xs text-slate-600 leading-relaxed font-normal">{mod.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Lesson Content Section */}
            <div className="space-y-3 pt-4 border-t border-slate-100">
              <h3 className="text-xl font-extrabold text-slate-900 tracking-tight">Lesson Content</h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
                Engage with each lesson through captivating video content, detailed textual explanations, and interactive elements. Download resources, complete assignments, and test your understanding with quizzes.
              </p>
            </div>

            {/* Lesson Progress Tracking Section */}
            <div className="space-y-3 pt-4 border-t border-slate-100">
              <h3 className="text-xl font-extrabold text-slate-900 tracking-tight">Lesson Progress Tracking</h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
                Witness your growth as you complete lessons, with an intuitive progress tracking feature guiding you through your learning journey.
              </p>

              {/* Progress Card Box */}
              <div className="bg-white p-5 rounded-2xl border border-slate-200/90 shadow-xs max-w-lg space-y-2">
                <span className="text-xs font-bold text-slate-400 block">
                  Learning Progress
                </span>
                <span className="text-3xl font-black text-slate-900 block">55%</span>
                <div className="w-full h-2.5 rounded-full bg-slate-100 overflow-hidden mt-1.5">
                  <div className="w-[55%] h-full bg-[#CCFF00] rounded-full"></div>
                </div>
              </div>
            </div>

          </div>

          {/* RIGHT SIDE STICKY CARD (Pricing & Lesson Outline) */}
          <div className="lg:col-span-5 text-slate-900 sticky top-24">
            <div className="bg-white rounded-[32px] p-6 sm:p-7 shadow-2xl border border-slate-200/90 space-y-6">
              
              {/* Lesson Outline Box */}
              <div className="space-y-3 border-b border-slate-100 pb-5">
                <h3 className="text-base sm:text-lg font-extrabold text-slate-900">112 Lessons (24 hours)</h3>
                
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
