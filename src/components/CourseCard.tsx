'use client';

import React from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { Star, BarChart2 } from 'lucide-react';
import { Course } from '@/data/mockData';

interface CourseCardProps {
  course: Course;
}

export const CourseCard: React.FC<CourseCardProps> = ({ course }) => {
  const router = useRouter();

  const handleCardClick = () => {
    router.push(`/courses/${course.id}`);
  };

  return (
    <div
      onClick={handleCardClick}
      className="group cursor-pointer bg-white rounded-3xl border border-slate-200/80 overflow-hidden shadow-xs hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between p-4 space-y-3.5"
    >
      <div>
        {/* Thumbnail Image with 3 Overlay Badges */}
        <div className="relative aspect-[16/10] w-full overflow-hidden rounded-2xl bg-slate-100 mb-3.5">
          <img
            src={course.thumbnail}
            alt={course.title}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          />
          
          {/* Overlay Translucent Badges at bottom of thumbnail */}
          <div className="absolute bottom-2.5 left-2.5 right-2.5 flex items-center justify-between gap-1">
            <span className="px-2.5 py-1 rounded-full text-[11px] font-semibold bg-[#E5E7EB]/90 text-slate-800 backdrop-blur-md whitespace-nowrap shadow-xs">
              {course.lessonsCount} Lessons
            </span>
            <span className="px-2.5 py-1 rounded-full text-[11px] font-semibold bg-[#E5E7EB]/90 text-slate-800 backdrop-blur-md whitespace-nowrap shadow-xs">
              {course.duration}
            </span>
            <span className="px-2.5 py-1 rounded-full text-[11px] font-semibold bg-[#E5E7EB]/90 text-slate-800 backdrop-blur-md whitespace-nowrap shadow-xs">
              {course.commentsCount} Comments
            </span>
          </div>
        </div>

        {/* Title & Rating Header */}
        <div className="space-y-1 px-1">
          <div className="flex items-center justify-between gap-2">
            <h3 className="font-extrabold text-lg text-slate-900 group-hover:text-blue-600 transition-colors line-clamp-1 tracking-tight">
              {course.title}
            </h3>
            <div className="flex items-center gap-1 text-slate-400 font-bold text-sm shrink-0">
              <span className="text-slate-700">{course.rating.toFixed(1)}</span>
              <Star className="w-4 h-4 fill-slate-300 text-slate-300" />
            </div>
          </div>

          {/* Instructor line */}
          <p className="text-xs text-slate-400 font-normal">
            by{' '}
            <Link
              href={`/creator/${course.creator.id}`}
              onClick={(e) => e.stopPropagation()}
              className="text-blue-600 hover:underline font-semibold"
            >
              {course.creator.name}
            </Link>
          </p>
        </div>
      </div>

      {/* Middle Row: Level Badge + Avatar Stack */}
      <div className="px-1 flex items-center justify-between pt-1">
        {/* Level Indicator */}
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg bg-slate-100 text-slate-600 text-xs font-medium">
          <BarChart2 className="w-3.5 h-3.5 text-slate-500" />
          <span>{course.level}</span>
        </div>

        {/* Avatar Stack with +26 badge */}
        <div className="flex items-center -space-x-2">
          <img
            src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=80"
            alt="Student Avatar"
            className="w-6 h-6 rounded-full border-2 border-white object-cover"
          />
          <img
            src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=80"
            alt="Student Avatar"
            className="w-6 h-6 rounded-full border-2 border-white object-cover"
          />
          <img
            src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=80"
            alt="Student Avatar"
            className="w-6 h-6 rounded-full border-2 border-white object-cover"
          />
          <img
            src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=80"
            alt="Student Avatar"
            className="w-6 h-6 rounded-full border-2 border-white object-cover"
          />
          <span className="w-6 h-6 rounded-full bg-[#CCFF00] text-slate-950 font-black text-[10px] flex items-center justify-center border-2 border-white shadow-xs">
            26+
          </span>
        </div>
      </div>

      {/* Bottom Price Row */}
      <div className="px-1 pt-1">
        <span className="text-xl font-black text-blue-600">${course.price}</span>
        <span className="text-xs text-slate-400 font-normal">/lifetime</span>
      </div>
    </div>
  );
};
