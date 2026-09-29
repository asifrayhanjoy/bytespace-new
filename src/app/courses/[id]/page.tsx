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
  CheckCircle2,
  Folder,
  Video,
  Award,
  MessageSquare,
} from 'lucide-react';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';

export default function CourseDetailsPage() {
  const params = useParams();
  const [activeTab, setActiveTab] = useState<'about' | 'lessons' | 'reviews'>('about');

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
          
          {/* LEFT SIDE (Video Player, Tabs, Description, Sneak Peak, Key Points) */}
          <div className="lg:col-span-7 space-y-10">
            
            {/* Video Preview Player Card */}
            <div className="relative aspect-[16/10] sm:aspect-video rounded-3xl overflow-hidden bg-slate-900 border border-slate-200 shadow-2xl group">
              <img
                src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=1000"
                alt="Build Digital Asset Video Preview"
                className="w-full h-full object-cover opacity-95"
              />
              <Link
                href="/courses/build-digital-asset/learn"
                className="absolute inset-0 m-auto w-16 h-16 rounded-full bg-white/40 backdrop-blur-md text-white border-2 border-white flex items-center justify-center shadow-2xl hover:scale-110 transition-transform"
              >
                <Play className="w-7 h-7 fill-current text-white ml-1" />
              </Link>
            </div>

            {/* Tabs Row */}
            <div className="flex items-center gap-3 border-b border-slate-100 pb-4">
              <button
                onClick={() => setActiveTab('about')}
                className={`px-6 py-2 rounded-full text-xs transition-all ${
                  activeTab === 'about'
                    ? 'bg-[#CCFF00] text-slate-950 font-extrabold shadow-xs'
                    : 'bg-slate-100 text-slate-700 font-semibold hover:bg-slate-200'
                }`}
              >
                About
              </button>

              <Link
                href="/courses/build-digital-asset/learn"
                className="px-6 py-2 rounded-full text-xs font-semibold bg-slate-100 text-slate-700 hover:bg-slate-200 transition-colors"
              >
                Lessons
              </Link>

              <Link
                href="/courses/build-digital-asset/reviews"
                className="px-6 py-2 rounded-full text-xs font-semibold bg-slate-100 text-slate-700 hover:bg-slate-200 transition-colors"
              >
                Reviews
              </Link>
            </div>

            {/* Description Section */}
            <div className="space-y-4 text-slate-700 leading-relaxed text-xs sm:text-sm font-normal">
              <h2 className="text-xl font-extrabold text-slate-900 tracking-tight">Description</h2>
              
              <p>
                Embark on an enlightening exploration into the world of digital creation with our comprehensive course, &quot;Build Digital Assets: A Comprehensive Guide.&quot; This transformative learning experience invites you to delve deep into the intricacies of crafting impactful digital content. From laying the groundwork with foundational concepts to mastering advanced techniques, this guide is meticulously curated to empower you with the skills essential for navigating the dynamic landscape of digital asset creation.
              </p>

              <p>
                In the initial modules, you&apos;ll establish a solid foundation by immersing yourself in the foundational concepts that form the backbone of digital asset creation. Understand the fundamental elements that constitute compelling digital content and gain proficiency in leveraging these elements to communicate effectively in the digital realm.
              </p>

              <p>
                As you progress through the course, you&apos;ll ascend to higher levels of expertise, delving into the nuances of design principles that drive impactful creations. Uncover the secrets behind effective visual communication, exploring color theory, typography, and layout strategies that elevate your digital assets to new heights. Engage in hands-on exercises that reinforce your understanding, allowing you to apply these principles in practical scenarios.
              </p>
            </div>

            {/* Sneak Peak Section */}
            <div className="space-y-4 pt-4 border-t border-slate-100">
              <h2 className="text-xl font-extrabold text-slate-900 tracking-tight">Sneak Peak</h2>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                <div className="aspect-[4/3] rounded-2xl overflow-hidden bg-slate-100 shadow-sm border border-slate-200">
                  <img
                    src="https://images.unsplash.com/photo-1581291518633-83b4ebd1d83e?auto=format&fit=crop&q=80&w=400"
                    alt="Sneak Peak 1 - Wireframe sketching"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="aspect-[4/3] rounded-2xl overflow-hidden bg-slate-100 shadow-sm border border-slate-200">
                  <img
                    src="https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&q=80&w=400"
                    alt="Sneak Peak 2 - Design Tools"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="aspect-[4/3] rounded-2xl overflow-hidden bg-slate-100 shadow-sm border border-slate-200">
                  <img
                    src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=400"
                    alt="Sneak Peak 3 - Desktop UI Interface"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="aspect-[4/3] rounded-2xl overflow-hidden bg-slate-100 shadow-sm border border-slate-200">
                  <img
                    src="https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?auto=format&fit=crop&q=80&w=400"
                    alt="Sneak Peak 4 - Mobile App UI"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>

            {/* Key Points Section */}
            <div className="space-y-4 pt-4 border-t border-slate-100">
              <h2 className="text-xl font-extrabold text-slate-900 tracking-tight">Key Points</h2>
              <div className="space-y-3">
                {[
                  'Foundational Concepts',
                  'Design Principles Mastery',
                  'Advanced Techniques in Digital Creation',
                  'Project Showcase and Critique',
                  'Optimizing for Various Platforms',
                  'Digital Asset Management Best Practices',
                  'Monetization Strategies',
                  'Capstone Project: Building Your Portfolio',
                ].map((point, idx) => (
                  <div key={idx} className="flex items-center gap-3 text-xs sm:text-sm font-bold text-slate-900">
                    <CheckCircle2 className="w-5 h-5 text-blue-600 fill-blue-600 text-white shrink-0" />
                    <span>{point}</span>
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

                <Link
                  href="/courses/build-digital-asset/learn"
                  className="block text-center w-full py-3.5 rounded-full bg-[#CCFF00] text-slate-950 font-extrabold text-sm shadow-md hover:bg-[#b8e600] transition-colors"
                >
                  Enroll Now
                </Link>
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
