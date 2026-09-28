'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { useParams } from 'next/navigation';
import {
  Star,
  Users,
  BookOpen,
  CheckCircle,
  Globe,
  Share2,
  ExternalLink,
  MessageSquare,
  UserPlus,
  ShieldCheck,
} from 'lucide-react';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { CourseCard } from '@/components/CourseCard';
import { MOCK_CREATORS, MOCK_COURSES } from '@/data/mockData';

export default function CreatorProfilePage() {
  const params = useParams();
  const creatorId = (params.id as string) || 'purepixel-studio';

  const creator = MOCK_CREATORS[creatorId] || MOCK_CREATORS['purepixel-studio'];
  const creatorCourses = MOCK_COURSES.filter((c) => c.creator.id === creator.id || creator.id === 'purepixel-studio');

  const [activeTab, setActiveTab] = useState<'courses' | 'about' | 'reviews'>('courses');
  const [following, setFollowing] = useState(false);

  return (
    <div className="min-h-screen flex flex-col bg-slate-50">
      <Header />

      {/* Creator Hero Header */}
      <section className="relative">
        
        {/* Cover Banner */}
        <div className="h-48 sm:h-64 w-full overflow-hidden bg-slate-900">
          <img
            src={creator.coverImage}
            alt={creator.name}
            className="w-full h-full object-cover opacity-80"
          />
        </div>

        {/* Profile Card Overlay */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative -mt-16 sm:-mt-20 z-10 pb-8">
          <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200 card-shadow space-y-6">
            
            <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 border-b border-slate-100 pb-6">
              
              <div className="flex flex-col sm:flex-row items-center sm:items-end gap-6 text-center sm:text-left">
                <img
                  src={creator.avatar}
                  alt={creator.name}
                  className="w-24 h-24 sm:w-28 sm:h-28 rounded-3xl object-cover border-4 border-white shadow-xl -mt-12 sm:-mt-16"
                />
                
                <div className="space-y-1">
                  <div className="flex items-center justify-center sm:justify-start gap-2">
                    <h1 className="text-2xl sm:text-3xl font-black text-slate-900">{creator.name}</h1>
                    {creator.verified && (
                      <span className="p-1 rounded-full bg-blue-100 text-brand-blue" title="Verified Creator">
                        <ShieldCheck className="w-4 h-4 fill-brand-blue text-white" />
                      </span>
                    )}
                  </div>
                  <p className="text-xs font-bold text-slate-500">{creator.title}</p>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex items-center justify-center gap-3">
                <button
                  onClick={() => setFollowing(!following)}
                  className={`px-6 py-2.5 rounded-2xl text-xs font-extrabold transition-all flex items-center gap-2 ${
                    following
                      ? 'bg-slate-100 text-slate-700 border border-slate-200'
                      : 'bg-brand-blue text-white hover:bg-blue-700 shadow-md'
                  }`}
                >
                  <UserPlus className="w-4 h-4" />
                  <span>{following ? 'Following' : 'Follow Creator'}</span>
                </button>

                <a
                  href={`mailto:contact@${creator.id}.com`}
                  className="px-4 py-2.5 rounded-2xl bg-slate-100 hover:bg-slate-200 text-slate-700 text-xs font-bold transition-colors"
                >
                  Message
                </a>
              </div>

            </div>

            {/* Creator Stats */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 text-center sm:text-left">
              <div>
                <p className="text-2xl font-black text-slate-900">{creator.courseCount}</p>
                <p className="text-xs text-slate-500 font-semibold">Total Courses</p>
              </div>
              <div>
                <p className="text-2xl font-black text-slate-900">{creator.studentCount.toLocaleString()}</p>
                <p className="text-xs text-slate-500 font-semibold">Active Students</p>
              </div>
              <div>
                <p className="text-2xl font-black text-slate-900 flex items-center justify-center sm:justify-start gap-1">
                  <Star className="w-5 h-5 fill-amber-400 text-amber-400" />
                  <span>{creator.rating}</span>
                </p>
                <p className="text-xs text-slate-500 font-semibold">({creator.reviewCount} Reviews)</p>
              </div>
              <div className="flex items-center justify-center sm:justify-start gap-2 pt-2">
                {creator.socials.website && (
                  <a href={creator.socials.website} target="_blank" rel="noreferrer" className="p-2 rounded-xl bg-slate-100 text-slate-600 hover:text-brand-blue">
                    <Globe className="w-4 h-4" />
                  </a>
                )}
                {creator.socials.twitter && (
                  <a href={creator.socials.twitter} target="_blank" rel="noreferrer" className="p-2 rounded-xl bg-slate-100 text-slate-600 hover:text-brand-blue">
                    <Share2 className="w-4 h-4" />
                  </a>
                )}
                {creator.socials.github && (
                  <a href={creator.socials.github} target="_blank" rel="noreferrer" className="p-2 rounded-xl bg-slate-100 text-slate-600 hover:text-brand-blue">
                    <ExternalLink className="w-4 h-4" />
                  </a>
                )}
              </div>
            </div>

          </div>
        </div>

      </section>

      {/* Tabs Content */}
      <main className="flex-grow max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16 w-full space-y-8">
        
        <div className="flex items-center gap-3 border-b border-slate-200">
          {[
            { id: 'courses', label: `Created Courses (${creatorCourses.length})` },
            { id: 'about', label: 'About & Bio' },
            { id: 'reviews', label: 'Instructor Reviews' },
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id as any)}
              className={`px-5 py-3 text-xs font-extrabold border-b-2 transition-all ${
                activeTab === tab.id
                  ? 'border-brand-blue text-brand-blue bg-blue-50/50 rounded-t-xl'
                  : 'border-transparent text-slate-600 hover:text-slate-900'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* COURSES TAB */}
        {activeTab === 'courses' && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 animate-in fade-in">
            {creatorCourses.map((course) => (
              <CourseCard key={course.id} course={course} />
            ))}
          </div>
        )}

        {/* ABOUT TAB */}
        {activeTab === 'about' && (
          <div className="bg-white p-8 rounded-3xl border border-slate-200 card-shadow space-y-6 max-w-3xl animate-in fade-in">
            <h3 className="text-xl font-bold text-slate-900">About {creator.name}</h3>
            <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
              {creator.about}
            </p>

            <div className="pt-4 border-t border-slate-100 space-y-3">
              <h4 className="text-sm font-bold text-slate-900">Teaching Philosophy</h4>
              <p className="text-xs text-slate-600 leading-relaxed">
                "We believe education should be hands-on, practical, and directly applicable to commercial digital asset creation. Every module we publish contains actual source files and step-by-step production workflows."
              </p>
            </div>
          </div>
        )}

        {/* REVIEWS TAB */}
        {activeTab === 'reviews' && (
          <div className="bg-white p-8 rounded-3xl border border-slate-200 card-shadow space-y-4 max-w-3xl animate-in fade-in">
            <h3 className="text-xl font-bold text-slate-900">Recent Student Feedback</h3>
            <div className="space-y-4">
              {MOCK_COURSES[0].reviews.map((rev) => (
                <div key={rev.id} className="p-4 rounded-2xl bg-slate-50 border border-slate-100 space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="font-bold text-xs text-slate-900">{rev.userName}</span>
                    <div className="flex gap-0.5 text-amber-400">
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

      </main>

      <Footer />
    </div>
  );
}
