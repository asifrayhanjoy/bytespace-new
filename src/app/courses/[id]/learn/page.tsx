'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { useParams, useRouter } from 'next/navigation';
import {
  Play,
  CheckCircle2,
  ChevronLeft,
  ChevronRight,
  Download,
  MessageSquare,
  FileText,
  Menu,
  X,
  Share2,
  Maximize2,
  Volume2,
  ThumbsUp,
  Sparkles,
} from 'lucide-react';
import { MOCK_COURSES, Lesson } from '@/data/mockData';

export default function CourseLessonsPage() {
  const params = useParams();
  const router = useRouter();
  const courseId = (params.id as string) || 'build-digital-asset';

  const course = MOCK_COURSES.find((c) => c.id === courseId) || MOCK_COURSES[0];

  // All lessons flat array for easy prev/next navigation
  const allLessons = course.modules.flatMap((m) => m.lessons);

  const [activeLesson, setActiveLesson] = useState<Lesson>(allLessons[0]);
  const [completedLessonIds, setCompletedLessonIds] = useState<string[]>(['les-1-1']);
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [activeTab, setActiveTab] = useState<'overview' | 'resources' | 'discussion'>('overview');

  // Comment state
  const [comments, setComments] = useState([
    {
      id: 1,
      author: 'Alex Johnson',
      avatar: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&q=80&w=100',
      time: '3 hours ago',
      text: 'Super clear explanation on Figma auto layout tokens! How do you handle dark mode variable mapping when exporting to React?',
      likes: 5,
    },
  ]);
  const [newComment, setNewComment] = useState('');

  const activeLessonIndex = allLessons.findIndex((l) => l.id === activeLesson.id);
  const progressPercent = Math.round((completedLessonIds.length / allLessons.length) * 100);

  const toggleLessonComplete = (lessonId: string) => {
    if (completedLessonIds.includes(lessonId)) {
      setCompletedLessonIds(completedLessonIds.filter((id) => id !== lessonId));
    } else {
      setCompletedLessonIds([...completedLessonIds, lessonId]);
    }
  };

  const handleNextLesson = () => {
    if (activeLessonIndex < allLessons.length - 1) {
      setActiveLesson(allLessons[activeLessonIndex + 1]);
    }
  };

  const handlePrevLesson = () => {
    if (activeLessonIndex > 0) {
      setActiveLesson(allLessons[activeLessonIndex - 1]);
    }
  };

  const handleAddComment = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newComment.trim()) return;
    setComments([
      ...comments,
      {
        id: Date.now(),
        author: 'Shafin Ahmed',
        avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=100',
        time: 'Just now',
        text: newComment,
        likes: 0,
      },
    ]);
    setNewComment('');
  };

  return (
    <div className="min-h-screen flex flex-col bg-slate-950 text-white font-sans">
      
      {/* Learning Header Bar */}
      <header className="h-16 bg-slate-900 border-b border-slate-800 px-4 sm:px-6 flex items-center justify-between z-30">
        <div className="flex items-center gap-4">
          <button
            onClick={() => setSidebarOpen(!sidebarOpen)}
            className="p-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-300 transition-colors"
          >
            {sidebarOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>

          <Link href={`/courses/${course.id}`} className="flex items-center gap-2 text-xs font-bold text-slate-400 hover:text-white">
            <ChevronLeft className="w-4 h-4" />
            <span className="hidden sm:inline">Back to Course</span>
          </Link>

          <div className="h-5 w-px bg-slate-800 hidden sm:block"></div>

          <h1 className="text-xs sm:text-sm font-extrabold text-white truncate max-w-xs sm:max-w-md">
            {course.title}
          </h1>
        </div>

        {/* Progress & Nav Actions */}
        <div className="flex items-center gap-4">
          
          {/* Progress Bar */}
          <div className="hidden md:flex flex-col text-right space-y-1">
            <div className="flex items-center gap-2 text-xs font-bold">
              <span className="text-[#d2ff00]">{progressPercent}%</span>
              <span className="text-slate-400">Completed</span>
            </div>
            <div className="w-32 h-1.5 rounded-full bg-slate-800 overflow-hidden">
              <div
                className="h-full bg-[#d2ff00] transition-all duration-300"
                style={{ width: `${progressPercent}%` }}
              ></div>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={handlePrevLesson}
              disabled={activeLessonIndex === 0}
              className="p-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 disabled:opacity-30"
            >
              <ChevronLeft className="w-4 h-4" />
            </button>
            <button
              onClick={handleNextLesson}
              disabled={activeLessonIndex === allLessons.length - 1}
              className="px-3.5 py-1.5 rounded-xl bg-brand-blue hover:bg-blue-600 text-white font-bold text-xs flex items-center gap-1.5 disabled:opacity-30"
            >
              <span>Next Lesson</span>
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>

        </div>
      </header>

      {/* Main Learning Workspace */}
      <div className="flex-grow flex overflow-hidden relative">
        
        {/* Sidebar Modules List */}
        {sidebarOpen && (
          <aside className="w-80 sm:w-96 bg-slate-900 border-r border-slate-800 flex flex-col shrink-0 z-20 overflow-y-auto">
            <div className="p-4 border-b border-slate-800 flex items-center justify-between">
              <span className="text-xs font-bold uppercase tracking-wider text-slate-400">Course Content</span>
              <span className="text-xs text-slate-500 font-semibold">{allLessons.length} Lessons</span>
            </div>

            <div className="divide-y divide-slate-800">
              {course.modules.map((mod, modIdx) => (
                <div key={mod.id} className="p-4 space-y-3">
                  <div className="space-y-0.5">
                    <p className="text-[11px] font-extrabold uppercase text-[#d2ff00]">Module {modIdx + 1}</p>
                    <h3 className="text-xs font-bold text-slate-200">{mod.title}</h3>
                  </div>

                  <div className="space-y-1.5">
                    {mod.lessons.map((les) => {
                      const isActive = activeLesson.id === les.id;
                      const isDone = completedLessonIds.includes(les.id);

                      return (
                        <div
                          key={les.id}
                          onClick={() => setActiveLesson(les)}
                          className={`p-3 rounded-xl cursor-pointer flex items-start gap-3 transition-colors ${
                            isActive
                              ? 'bg-brand-blue text-white shadow-md'
                              : 'hover:bg-slate-800 text-slate-300'
                          }`}
                        >
                          <button
                            onClick={(e) => {
                              e.stopPropagation();
                              toggleLessonComplete(les.id);
                            }}
                            className="mt-0.5"
                          >
                            <CheckCircle2
                              className={`w-4 h-4 ${
                                isDone
                                  ? 'text-[#d2ff00] fill-slate-950'
                                  : 'text-slate-600 hover:text-slate-400'
                              }`}
                            />
                          </button>

                          <div className="flex-grow space-y-0.5">
                            <p className="text-xs font-semibold leading-snug">{les.title}</p>
                            <p className={`text-[10px] ${isActive ? 'text-blue-200' : 'text-slate-500'}`}>
                              {les.duration}
                            </p>
                          </div>

                          {isActive && <Play className="w-3.5 h-3.5 fill-current shrink-0 mt-1" />}
                        </div>
                      );
                    })}
                  </div>
                </div>
              ))}
            </div>
          </aside>
        )}

        {/* Main Video & Content Area */}
        <main className="flex-grow overflow-y-auto bg-slate-950 p-4 sm:p-8 space-y-8">
          
          {/* Video Player Box */}
          <div className="max-w-5xl mx-auto space-y-6">
            <div className="relative aspect-video rounded-3xl overflow-hidden bg-slate-900 border border-slate-800 shadow-2xl group">
              <video
                src={activeLesson.videoUrl || 'https://www.w3schools.com/html/mov_bbb.mp4'}
                controls
                autoPlay
                className="w-full h-full object-cover"
                poster={course.thumbnail}
              />
            </div>

            {/* Lesson Title & Info Bar */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-slate-800 pb-6">
              <div className="space-y-1">
                <div className="flex items-center gap-2">
                  <span className="px-2.5 py-0.5 rounded text-[10px] font-extrabold bg-[#d2ff00] text-slate-950">
                    Active Video
                  </span>
                  <span className="text-xs text-slate-400">{activeLesson.duration}</span>
                </div>
                <h2 className="text-xl sm:text-2xl font-black text-white">{activeLesson.title}</h2>
              </div>

              <button
                onClick={() => toggleLessonComplete(activeLesson.id)}
                className={`px-5 py-2.5 rounded-full text-xs font-bold transition-all flex items-center gap-2 ${
                  completedLessonIds.includes(activeLesson.id)
                    ? 'bg-emerald-500 text-slate-950'
                    : 'bg-slate-800 hover:bg-slate-700 text-white border border-slate-700'
                }`}
              >
                <CheckCircle2 className="w-4 h-4" />
                <span>
                  {completedLessonIds.includes(activeLesson.id) ? 'Completed ✓' : 'Mark as Complete'}
                </span>
              </button>
            </div>

            {/* Bottom Tabs (Overview, Resources, Discussion) */}
            <div className="space-y-6">
              <div className="flex items-center gap-3 border-b border-slate-800">
                {[
                  { id: 'overview', icon: FileText, label: 'Lesson Overview' },
                  { id: 'resources', icon: Download, label: 'Resources & Assets' },
                  { id: 'discussion', icon: MessageSquare, label: `Discussion (${comments.length})` },
                ].map((tab) => {
                  const Icon = tab.icon;
                  return (
                    <button
                      key={tab.id}
                      onClick={() => setActiveTab(tab.id as any)}
                      className={`flex items-center gap-2 px-4 py-3 text-xs font-bold border-b-2 transition-all ${
                        activeTab === tab.id
                          ? 'border-[#d2ff00] text-[#d2ff00]'
                          : 'border-transparent text-slate-400 hover:text-white'
                      }`}
                    >
                      <Icon className="w-4 h-4" />
                      <span>{tab.label}</span>
                    </button>
                  );
                })}
              </div>

              {/* OVERVIEW TAB */}
              {activeTab === 'overview' && (
                <div className="bg-slate-900 p-6 rounded-2xl border border-slate-800 space-y-4 text-xs sm:text-sm text-slate-300 leading-relaxed">
                  <h3 className="text-base font-bold text-white">Lesson Summary</h3>
                  <p>{activeLesson.description}</p>
                  <div className="p-4 rounded-xl bg-slate-950 border border-slate-800 space-y-2">
                    <p className="font-bold text-[#d2ff00] text-xs">Instructor Note:</p>
                    <p className="text-xs text-slate-400">
                      Be sure to open Figma and practice constructing auto-layout variants as described in step 2 of this module before proceeding to the next exercise.
                    </p>
                  </div>
                </div>
              )}

              {/* RESOURCES TAB */}
              {activeTab === 'resources' && (
                <div className="bg-slate-900 p-6 rounded-2xl border border-slate-800 space-y-3">
                  <h3 className="text-base font-bold text-white mb-2">Downloadable Lesson Files</h3>
                  
                  <div className="p-3.5 rounded-xl bg-slate-950 border border-slate-800 flex items-center justify-between text-xs">
                    <div className="flex items-center gap-3">
                      <FileText className="w-5 h-5 text-brand-blue" />
                      <div>
                        <p className="font-bold text-white">ByteSpace_Design_System_Tokens.fig</p>
                        <p className="text-[10px] text-slate-500">14.2 MB • Figma File</p>
                      </div>
                    </div>
                    <a
                      href="#"
                      className="px-3 py-1.5 rounded-lg bg-brand-blue hover:bg-blue-600 text-white font-bold text-xs flex items-center gap-1.5"
                    >
                      <Download className="w-3.5 h-3.5" />
                      <span>Download</span>
                    </a>
                  </div>

                  <div className="p-3.5 rounded-xl bg-slate-950 border border-slate-800 flex items-center justify-between text-xs">
                    <div className="flex items-center gap-3">
                      <FileText className="w-5 h-5 text-emerald-500" />
                      <div>
                        <p className="font-bold text-white">Starter_Source_Code.zip</p>
                        <p className="text-[10px] text-slate-500">4.8 MB • Zip Archive</p>
                      </div>
                    </div>
                    <a
                      href="#"
                      className="px-3 py-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-white font-bold text-xs flex items-center gap-1.5"
                    >
                      <Download className="w-3.5 h-3.5" />
                      <span>Download</span>
                    </a>
                  </div>
                </div>
              )}

              {/* DISCUSSION TAB */}
              {activeTab === 'discussion' && (
                <div className="bg-slate-900 p-6 rounded-2xl border border-slate-800 space-y-6">
                  <form onSubmit={handleAddComment} className="space-y-3">
                    <textarea
                      rows={3}
                      placeholder="Ask a question or leave a note on this video lesson..."
                      value={newComment}
                      onChange={(e) => setNewComment(e.target.value)}
                      className="w-full p-3 rounded-xl bg-slate-950 border border-slate-800 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-brand-blue"
                    ></textarea>
                    <button
                      type="submit"
                      className="px-5 py-2.5 rounded-xl bg-brand-blue hover:bg-blue-600 text-white font-bold text-xs shadow-md"
                    >
                      Post Comment
                    </button>
                  </form>

                  <div className="space-y-4">
                    {comments.map((c) => (
                      <div key={c.id} className="p-4 rounded-xl bg-slate-950 border border-slate-800 space-y-2 text-xs">
                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-2">
                            <img src={c.avatar} alt={c.author} className="w-7 h-7 rounded-full object-cover" />
                            <span className="font-bold text-white">{c.author}</span>
                            <span className="text-[10px] text-slate-500">{c.time}</span>
                          </div>
                          <button className="flex items-center gap-1 text-[11px] text-slate-400 hover:text-[#d2ff00]">
                            <ThumbsUp className="w-3.5 h-3.5" />
                            <span>{c.likes}</span>
                          </button>
                        </div>
                        <p className="text-slate-300 leading-relaxed">{c.text}</p>
                      </div>
                    ))}
                  </div>
                </div>
              )}

            </div>
          </div>

        </main>
      </div>

    </div>
  );
}
