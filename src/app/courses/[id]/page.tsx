'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { useParams, useRouter } from 'next/navigation';
import {
  Star,
  Clock,
  BookOpen,
  Users,
  CheckCircle,
  Play,
  Share2,
  Bookmark,
  Award,
  FileText,
  ShieldCheck,
  ChevronDown,
  ChevronUp,
  MessageSquare,
} from 'lucide-react';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { MOCK_COURSES } from '@/data/mockData';
import { useApp } from '@/context/AppContext';

export default function CourseDetailsPage() {
  const params = useParams();
  const router = useRouter();
  const courseId = (params.id as string) || 'build-digital-asset';

  const { isEnrolled, enrollCourse, addToCart, isInCart } = useApp();

  const course = MOCK_COURSES.find((c) => c.id === courseId) || MOCK_COURSES[0];
  const enrolled = isEnrolled(course.id);
  const inCart = isInCart(course.id);

  const [activeTab, setActiveTab] = useState<'overview' | 'modules' | 'highlights' | 'reviews'>('overview');
  const [openModuleId, setOpenModuleId] = useState<string>(course.modules[0]?.id || '');

  const handleEnroll = () => {
    if (!enrolled) {
      enrollCourse(course.id);
    }
    router.push(`/courses/${course.id}/learn`);
  };

  return (
    <div className="min-h-screen flex flex-col bg-slate-50">
      <Header />

      {/* Course Banner Header */}
      <section className="bg-gradient-to-r from-slate-900 via-blue-950 to-brand-blue text-white py-12 lg:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-4">
          
          {/* Breadcrumbs */}
          <div className="flex items-center gap-2 text-xs font-semibold text-blue-200">
            <Link href="/" className="hover:text-white">Home</Link>
            <span>/</span>
            <Link href="/search" className="hover:text-white">Courses</Link>
            <span>/</span>
            <span className="text-[#d2ff00] line-clamp-1">{course.title}</span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-8 space-y-4">
              <div className="flex flex-wrap items-center gap-2">
                <span className="px-3 py-1 rounded-full bg-[#d2ff00] text-slate-950 text-xs font-black uppercase">
                  {course.badge}
                </span>
                <span className="px-3 py-1 rounded-full bg-white/10 text-white text-xs font-semibold border border-white/20">
                  {course.category}
                </span>
                <span className="px-3 py-1 rounded-full bg-white/10 text-white text-xs font-semibold border border-white/20">
                  {course.level}
                </span>
              </div>

              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight leading-tight">
                {course.title}
              </h1>

              <p className="text-sm sm:text-base text-blue-100 leading-relaxed max-w-3xl">
                {course.subtitle}
              </p>

              {/* Course Meta Info Bar */}
              <div className="flex flex-wrap items-center gap-6 text-xs text-blue-200 pt-2 font-medium">
                <div className="flex items-center gap-1.5 text-amber-400 font-bold">
                  <Star className="w-4 h-4 fill-amber-400" />
                  <span>{course.rating.toFixed(1)}</span>
                  <span className="text-blue-200 font-normal">({course.reviewCount} reviews)</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <Users className="w-4 h-4 text-blue-300" />
                  <span>{course.students.toLocaleString()} students enrolled</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <Clock className="w-4 h-4 text-blue-300" />
                  <span>{course.duration} total video content</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <BookOpen className="w-4 h-4 text-blue-300" />
                  <span>{course.lessonsCount} lessons</span>
                </div>
              </div>

              {/* Creator Tag */}
              <div className="pt-3 flex items-center gap-3">
                <img
                  src={course.creator.avatar}
                  alt={course.creator.name}
                  className="w-10 h-10 rounded-full object-cover border-2 border-[#d2ff00]"
                />
                <div>
                  <p className="text-xs text-blue-200 font-medium">Created by</p>
                  <Link
                    href={`/creator/${course.creator.id}`}
                    className="text-sm font-bold text-white hover:text-[#d2ff00] transition-colors"
                  >
                    {course.creator.name}
                  </Link>
                </div>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* Main Content & Sticky Sidebar */}
      <main className="flex-grow max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          
          {/* Left Main Content */}
          <div className="lg:col-span-8 space-y-8">
            
            {/* Media Preview Box */}
            <div className="relative aspect-video rounded-3xl overflow-hidden bg-slate-900 border border-slate-200 shadow-xl group">
              <img
                src={course.thumbnail}
                alt={course.title}
                className="w-full h-full object-cover opacity-90 group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/30 to-transparent flex flex-col justify-between p-6">
                <div className="flex justify-end gap-2">
                  <button className="p-2.5 rounded-full bg-white/20 hover:bg-white/40 text-white backdrop-blur-md transition-colors">
                    <Share2 className="w-4 h-4" />
                  </button>
                  <button className="p-2.5 rounded-full bg-white/20 hover:bg-white/40 text-white backdrop-blur-md transition-colors">
                    <Bookmark className="w-4 h-4" />
                  </button>
                </div>

                <div className="flex items-center justify-between">
                  <div>
                    <span className="text-xs font-bold text-[#d2ff00] uppercase">Course Video Trailer</span>
                    <p className="text-sm font-bold text-white">Preview Module 1.1 for Free</p>
                  </div>

                  <Link
                    href={`/courses/${course.id}/learn`}
                    className="w-16 h-16 rounded-full bg-[#d2ff00] text-slate-950 flex items-center justify-center shadow-2xl hover:scale-110 transition-transform"
                  >
                    <Play className="w-7 h-7 fill-current ml-1" />
                  </Link>
                </div>
              </div>
            </div>

            {/* Content Tabs Navigation */}
            <div className="flex items-center gap-2 border-b border-slate-200 overflow-x-auto pb-1">
              {[
                { id: 'overview', label: 'Overview' },
                { id: 'modules', label: `Curriculum (${course.modules.length} Modules)` },
                { id: 'highlights', label: 'Key Highlights' },
                { id: 'reviews', label: `Reviews (${course.reviews.length})` },
              ].map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id as any)}
                  className={`px-5 py-3 text-xs font-extrabold whitespace-nowrap transition-all border-b-2 ${
                    activeTab === tab.id
                      ? 'border-brand-blue text-brand-blue bg-blue-50/50 rounded-t-xl'
                      : 'border-transparent text-slate-600 hover:text-slate-900 hover:bg-slate-100/60'
                  }`}
                >
                  {tab.label}
                </button>
              ))}
            </div>

            {/* TAB 1: OVERVIEW */}
            {activeTab === 'overview' && (
              <div className="space-y-8 animate-in fade-in">
                {/* Description */}
                <div className="bg-white p-6 sm:p-8 rounded-3xl border border-slate-200 card-shadow space-y-4">
                  <h3 className="text-lg font-bold text-slate-900">About This Course</h3>
                  <p className="text-xs sm:text-sm text-slate-700 leading-relaxed font-normal">
                    {course.description}
                  </p>
                </div>

                {/* What You'll Learn Checklist */}
                <div className="bg-white p-6 sm:p-8 rounded-3xl border border-slate-200 card-shadow space-y-4">
                  <h3 className="text-lg font-bold text-slate-900">What You'll Master</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    {course.whatYouWillLearn.map((item, index) => (
                      <div key={index} className="flex items-start gap-2.5 p-3 rounded-2xl bg-slate-50 border border-slate-100">
                        <CheckCircle className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                        <span className="text-xs font-semibold text-slate-800">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Target Audience & Requirements */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="bg-white p-6 rounded-3xl border border-slate-200 card-shadow space-y-3">
                    <h4 className="text-sm font-bold text-slate-900">Requirements</h4>
                    <ul className="space-y-2 text-xs text-slate-600">
                      {course.requirements.map((req, idx) => (
                        <li key={idx} className="flex items-center gap-2">
                          <span className="w-1.5 h-1.5 rounded-full bg-brand-blue"></span>
                          <span>{req}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="bg-white p-6 rounded-3xl border border-slate-200 card-shadow space-y-3">
                    <h4 className="text-sm font-bold text-slate-900">Who This Is For</h4>
                    <ul className="space-y-2 text-xs text-slate-600">
                      {course.targetAudience.map((aud, idx) => (
                        <li key={idx} className="flex items-center gap-2">
                          <span className="w-1.5 h-1.5 rounded-full bg-emerald-500"></span>
                          <span>{aud}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            )}

            {/* TAB 2: MODULES / CURRICULUM */}
            {activeTab === 'modules' && (
              <div className="space-y-4 animate-in fade-in">
                <div className="flex items-center justify-between">
                  <h3 className="text-lg font-bold text-slate-900">Course Syllabus</h3>
                  <span className="text-xs font-semibold text-slate-500">
                    {course.modules.length} Modules • {course.lessonsCount} Total Lessons
                  </span>
                </div>

                <div className="space-y-3">
                  {course.modules.map((mod) => {
                    const isOpen = openModuleId === mod.id;
                    return (
                      <div
                        key={mod.id}
                        className="bg-white rounded-2xl border border-slate-200 overflow-hidden card-shadow"
                      >
                        <button
                          onClick={() => setOpenModuleId(isOpen ? '' : mod.id)}
                          className="w-full p-4 flex items-center justify-between text-left hover:bg-slate-50 transition-colors"
                        >
                          <div className="space-y-0.5">
                            <h4 className="text-xs sm:text-sm font-bold text-slate-900">{mod.title}</h4>
                            <p className="text-[11px] text-slate-500">{mod.lessons.length} lessons • {mod.duration}</p>
                          </div>
                          {isOpen ? (
                            <ChevronUp className="w-4 h-4 text-slate-500" />
                          ) : (
                            <ChevronDown className="w-4 h-4 text-slate-500" />
                          )}
                        </button>

                        {isOpen && (
                          <div className="border-t border-slate-100 bg-slate-50/50 p-3 space-y-2">
                            {mod.lessons.map((les) => (
                              <div
                                key={les.id}
                                className="flex items-center justify-between p-3 rounded-xl bg-white border border-slate-200 text-xs"
                              >
                                <div className="flex items-center gap-2.5">
                                  <Play className="w-3.5 h-3.5 text-brand-blue" />
                                  <span className="font-semibold text-slate-800">{les.title}</span>
                                </div>
                                <div className="flex items-center gap-3">
                                  {les.isPreview && (
                                    <span className="px-2 py-0.5 rounded text-[10px] font-bold bg-blue-100 text-brand-blue">
                                      Free Preview
                                    </span>
                                  )}
                                  <span className="text-slate-400 text-[11px] font-medium">{les.duration}</span>
                                </div>
                              </div>
                            ))}
                          </div>
                        )}
                      </div>
                    );
                  })}
                </div>
              </div>
            )}

            {/* TAB 3: KEY HIGHLIGHTS */}
            {activeTab === 'highlights' && (
              <div className="bg-white p-8 rounded-3xl border border-slate-200 card-shadow space-y-6 animate-in fade-in">
                <h3 className="text-lg font-bold text-slate-900">What's Included in Your Purchase</h3>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="p-4 rounded-2xl bg-slate-50 border border-slate-100 flex items-start gap-3">
                    <Award className="w-6 h-6 text-brand-blue shrink-0" />
                    <div>
                      <h4 className="text-xs font-bold text-slate-900">Certificate of Completion</h4>
                      <p className="text-[11px] text-slate-500">Shareable verified badge for LinkedIn & resume.</p>
                    </div>
                  </div>

                  <div className="p-4 rounded-2xl bg-slate-50 border border-slate-100 flex items-start gap-3">
                    <FileText className="w-6 h-6 text-emerald-600 shrink-0" />
                    <div>
                      <h4 className="text-xs font-bold text-slate-900">35 Downloadable Resources</h4>
                      <p className="text-[11px] text-slate-500">Source code, Figma design files, and templates.</p>
                    </div>
                  </div>

                  <div className="p-4 rounded-2xl bg-slate-50 border border-slate-100 flex items-start gap-3">
                    <ShieldCheck className="w-6 h-6 text-purple-600 shrink-0" />
                    <div>
                      <h4 className="text-xs font-bold text-slate-900">Full Lifetime Access</h4>
                      <p className="text-[11px] text-slate-500">Learn at your own pace with future course updates included.</p>
                    </div>
                  </div>

                  <div className="p-4 rounded-2xl bg-slate-50 border border-slate-100 flex items-start gap-3">
                    <MessageSquare className="w-6 h-6 text-amber-600 shrink-0" />
                    <div>
                      <h4 className="text-xs font-bold text-slate-900">Creator Q&A Forum Access</h4>
                      <p className="text-[11px] text-slate-500">Direct support from PurePixel Studio and mentors.</p>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* TAB 4: REVIEWS SUMMARY */}
            {activeTab === 'reviews' && (
              <div className="bg-white p-8 rounded-3xl border border-slate-200 card-shadow space-y-6 animate-in fade-in">
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="text-lg font-bold text-slate-900">Student Reviews</h3>
                    <p className="text-xs text-slate-500">Based on verified enrollments</p>
                  </div>

                  <Link
                    href={`/courses/${course.id}/reviews`}
                    className="px-4 py-2 rounded-xl bg-slate-100 text-slate-900 font-bold text-xs hover:bg-brand-blue hover:text-white transition-colors"
                  >
                    View All Reviews Page →
                  </Link>
                </div>

                <div className="space-y-4">
                  {course.reviews.map((rev) => (
                    <div key={rev.id} className="p-4 rounded-2xl bg-slate-50 border border-slate-100 space-y-2">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          <img src={rev.userAvatar} alt={rev.userName} className="w-8 h-8 rounded-full object-cover" />
                          <div>
                            <p className="text-xs font-bold text-slate-900">{rev.userName}</p>
                            <p className="text-[10px] text-slate-400">{rev.date}</p>
                          </div>
                        </div>
                        <div className="flex items-center gap-0.5 text-amber-400">
                          {[...Array(rev.rating)].map((_, i) => (
                            <Star key={i} className="w-3.5 h-3.5 fill-amber-400" />
                          ))}
                        </div>
                      </div>
                      <p className="text-xs text-slate-700">{rev.comment}</p>
                    </div>
                  ))}
                </div>
              </div>
            )}

          </div>

          {/* Right Sticky Sidebar (Pricing & Action Card) */}
          <div className="lg:col-span-4">
            <div className="sticky top-24 bg-white rounded-3xl border border-slate-200 card-shadow p-6 space-y-6">
              
              {/* Pricing Tag */}
              <div className="space-y-1">
                <div className="flex items-baseline gap-3">
                  <span className="text-3xl font-black text-slate-900">${course.price}</span>
                  {course.originalPrice > course.price && (
                    <span className="text-sm font-medium text-slate-400 line-through">
                      ${course.originalPrice}
                    </span>
                  )}
                  <span className="px-2 py-0.5 rounded text-[11px] font-black bg-[#d2ff00] text-slate-950">
                    45% OFF
                  </span>
                </div>
                <p className="text-[11px] font-semibold text-rose-600 flex items-center gap-1">
                  ⚡ Special launch discount ending soon!
                </p>
              </div>

              {/* Primary Buttons */}
              <div className="space-y-3">
                <button
                  onClick={handleEnroll}
                  className="w-full py-3.5 rounded-2xl bg-brand-blue text-white font-extrabold text-sm shadow-xl hover:bg-blue-700 transition-all flex items-center justify-center gap-2"
                >
                  {enrolled ? 'Go to Course Player' : 'Enroll Now'}
                </button>

                {!enrolled && (
                  <button
                    onClick={() => addToCart(course.id)}
                    className={`w-full py-3 rounded-2xl font-bold text-xs border transition-colors ${
                      inCart
                        ? 'bg-emerald-50 text-emerald-700 border-emerald-300'
                        : 'bg-slate-50 text-slate-800 border-slate-200 hover:bg-slate-100'
                    }`}
                  >
                    {inCart ? 'Added to Cart ✓' : 'Add to Cart'}
                  </button>
                )}
              </div>

              {/* Checklist */}
              <div className="border-t border-slate-100 pt-4 space-y-2.5 text-xs text-slate-600 font-medium">
                <p className="font-bold text-slate-900 text-xs">This course includes:</p>
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-3.5 h-3.5 text-emerald-500" />
                  <span>{course.duration} full video tutorials</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-3.5 h-3.5 text-emerald-500" />
                  <span>35 downloadable Figma / Code assets</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-3.5 h-3.5 text-emerald-500" />
                  <span>Full lifetime updates & community access</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-3.5 h-3.5 text-emerald-500" />
                  <span>Certificate of Completion</span>
                </div>
              </div>

              {/* Creator Card Box */}
              <div className="border-t border-slate-100 pt-4 space-y-3">
                <p className="text-[11px] font-bold text-slate-400 uppercase tracking-wider">Instructor</p>
                <div className="flex items-center gap-3">
                  <img
                    src={course.creator.avatar}
                    alt={course.creator.name}
                    className="w-11 h-11 rounded-full object-cover border border-slate-200"
                  />
                  <div>
                    <h4 className="text-xs font-extrabold text-slate-900">{course.creator.name}</h4>
                    <p className="text-[10px] text-slate-500">{course.creator.title}</p>
                  </div>
                </div>
                <Link
                  href={`/creator/${course.creator.id}`}
                  className="block text-center py-2 rounded-xl bg-slate-100 text-xs font-bold text-brand-blue hover:bg-blue-50 transition-colors"
                >
                  View Instructor Profile →
                </Link>
              </div>

            </div>
          </div>

        </div>
      </main>

      <Footer />
    </div>
  );
}
