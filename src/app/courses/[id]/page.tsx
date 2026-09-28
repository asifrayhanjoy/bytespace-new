'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { useParams, useRouter } from 'next/navigation';
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
  const router = useRouter();

  const [activeTab, setActiveTab] = useState<'about' | 'lessons' | 'reviews'>('about');

  return (
    <div className="min-h-screen flex flex-col bg-white text-slate-900 font-sans selection:bg-[#ccff00] selection:text-slate-950">
      
      {/* Top Banner with Header & Course Info */}
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

        {/* Global Navigation Header */}
        <Header />

        {/* Course Header Banner Info */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-10 pb-8 relative z-10">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
            
            <div className="space-y-3 max-w-3xl">
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white leading-tight">
                Build Digital Asset: A Comprehensive Guide
              </h1>
              <p className="text-xs sm:text-sm text-blue-100 font-semibold">
                Unlock the Power of Digital Creation with Expert Guidance
              </p>
              <p className="text-xs text-blue-200">
                by <span className="text-[#ccff00] font-bold">purepearl studio</span>
              </p>

              {/* Badges Row */}
              <div className="flex flex-wrap items-center gap-3 pt-2">
                <span className="px-3.5 py-1 rounded-full bg-white text-slate-900 text-xs font-bold flex items-center gap-1.5 shadow-sm">
                  <BarChart2 className="w-3.5 h-3.5 text-blue-600" />
                  <span>Intermediate</span>
                </span>

                <span className="px-3.5 py-1 rounded-full bg-white text-slate-900 text-xs font-bold flex items-center gap-1.5 shadow-sm">
                  <Star className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                  <span>4.8 (172 reviews)</span>
                </span>

                <span className="px-3.5 py-1 rounded-full bg-white text-slate-900 text-xs font-bold flex items-center gap-1.5 shadow-sm">
                  <Users className="w-3.5 h-3.5 text-blue-600" />
                  <span>199 Students</span>
                </span>
              </div>
            </div>

            {/* Share Button */}
            <div className="shrink-0">
              <button className="px-5 py-2.5 rounded-full bg-[#ccff00] text-slate-950 font-bold text-xs flex items-center gap-2 hover:bg-[#b8e600] transition-colors shadow-md">
                <Share2 className="w-4 h-4" />
                <span>Share</span>
              </button>
            </div>

          </div>
        </div>

        {/* Media Preview Player Overlay */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-20">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            <div className="lg:col-span-7">
              <div className="relative aspect-video rounded-3xl overflow-hidden bg-slate-900 border border-slate-200 shadow-2xl group">
                <img
                  src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=1000"
                  alt="Build Digital Asset Preview"
                  className="w-full h-full object-cover opacity-90"
                />
                <Link
                  href="/courses/build-digital-asset/learn"
                  className="absolute inset-0 m-auto w-16 h-16 rounded-full bg-white/90 text-slate-950 flex items-center justify-center shadow-2xl hover:scale-110 transition-transform"
                >
                  <Play className="w-7 h-7 fill-current ml-1" />
                </Link>
              </div>
            </div>
          </div>
        </div>

      </section>


      {/* Main Content & Sidebar Layout */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 w-full flex-grow">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Main Content Column */}
          <div className="lg:col-span-7 space-y-10">
            
            {/* Tab Navigation */}
            <div className="flex items-center gap-3 border-b border-slate-200 pb-4">
              <button
                onClick={() => setActiveTab('about')}
                className={`px-6 py-2 rounded-full text-xs transition-all ${
                  activeTab === 'about'
                    ? 'bg-[#ccff00] text-slate-950 font-extrabold shadow-xs'
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
              <h2 className="text-xl font-extrabold text-slate-900">Description</h2>
              
              <p>
                Embark on an enlightening exploration into the world of digital creation with our comprehensive course, "Build Digital Assets: A Comprehensive Guide." This transformative learning experience invites you to delve deep into the intricacies of crafting impactful digital content. From laying the groundwork with foundational concepts to mastering advanced techniques, this guide is meticulously curated to empower you with the skills essential for navigating the dynamic landscape of digital asset creation.
              </p>

              <p>
                In the initial modules, you'll establish a solid foundation by immersing yourself in the foundational concepts that form the backbone of digital asset creation. Understand the fundamental elements that constitute compelling digital content and gain proficiency in leveraging these elements to communicate effectively in the digital realm.
              </p>

              <p>
                As you progress through the course, you'll ascend to higher levels of expertise, delving into the nuances of design principles that drive impactful creations. Uncover the secrets behind effective visual communication, exploring color theory, typography, and layout strategies that elevate your digital assets to new heights. Engage in hands-on exercises that reinforce your understanding, allowing you to apply these principles in practical scenarios.
              </p>
            </div>

            {/* Sneak Peak Section */}
            <div className="space-y-4 pt-4 border-t border-slate-100">
              <h2 className="text-xl font-extrabold text-slate-900">Sneak Peak</h2>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                <div className="aspect-[4/3] rounded-2xl overflow-hidden bg-slate-100 shadow-sm border border-slate-200">
                  <img
                    src="https://images.unsplash.com/photo-1581291518633-83b4ebd1d83e?auto=format&fit=crop&q=80&w=300"
                    alt="Sneak Peak 1"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="aspect-[4/3] rounded-2xl overflow-hidden bg-slate-100 shadow-sm border border-slate-200">
                  <img
                    src="https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&q=80&w=300"
                    alt="Sneak Peak 2"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="aspect-[4/3] rounded-2xl overflow-hidden bg-slate-100 shadow-sm border border-slate-200">
                  <img
                    src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=300"
                    alt="Sneak Peak 3"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="aspect-[4/3] rounded-2xl overflow-hidden bg-slate-100 shadow-sm border border-slate-200">
                  <img
                    src="https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?auto=format&fit=crop&q=80&w=300"
                    alt="Sneak Peak 4"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>

            {/* Key Points Section */}
            <div className="space-y-4 pt-4 border-t border-slate-100">
              <h2 className="text-xl font-extrabold text-slate-900">Key Points</h2>
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


          {/* Right Column Sticky Sidebar Card */}
          <div className="lg:col-span-5">
            <div className="bg-white rounded-3xl p-6 sm:p-8 shadow-xl border border-slate-200 space-y-6">
              
              {/* Header Info */}
              <div className="space-y-3 border-b border-slate-100 pb-4">
                <h3 className="text-lg font-extrabold text-slate-900">112 Lessons (24 hours)</h3>
                
                <div className="space-y-2 text-xs">
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

              {/* Call to action text & Price */}
              <div className="space-y-3">
                <p className="text-xs text-slate-500 font-medium leading-relaxed">
                  Ready to Dive In? Enroll Now and Start Building Your Digital Future!
                </p>

                <div>
                  <span className="text-3xl font-black text-blue-600">$25</span>
                  <span className="text-xs text-slate-400 font-medium">/lifetime</span>
                </div>

                <Link
                  href="/courses/build-digital-asset/learn"
                  className="block text-center w-full py-3.5 rounded-full bg-[#ccff00] text-slate-950 font-extrabold text-xs shadow-md hover:bg-[#b8e600] transition-colors"
                >
                  Enroll Now
                </Link>
              </div>

              {/* Course Includes Checklist */}
              <div className="space-y-3 border-t border-slate-100 pt-4">
                <h4 className="text-xs font-bold text-slate-900">This course include</h4>
                <div className="space-y-2 text-xs text-slate-600">
                  <div className="flex items-center gap-2.5">
                    <Folder className="w-4 h-4 text-blue-600" />
                    <span>Learning Resources</span>
                  </div>
                  <div className="flex items-center gap-2.5">
                    <Video className="w-4 h-4 text-blue-600" />
                    <span>Quality Lesson Videos</span>
                  </div>
                  <div className="flex items-center gap-2.5">
                    <Award className="w-4 h-4 text-blue-600" />
                    <span>Certificate of Completion</span>
                  </div>
                  <div className="flex items-center gap-2.5">
                    <MessageSquare className="w-4 h-4 text-blue-600" />
                    <span>Private Consultation</span>
                  </div>
                </div>
              </div>

              {/* Creator Profile Box */}
              <div className="border-t border-slate-100 pt-4 space-y-3">
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
                  className="inline-block px-4 py-1.5 rounded-full border border-slate-200 text-xs font-bold text-slate-700 hover:bg-slate-50 transition-colors"
                >
                  See Full Profile
                </Link>
              </div>

            </div>
          </div>

        </div>
      </main>

      {/* Footer */}
      <Footer />

    </div>
  );
}
