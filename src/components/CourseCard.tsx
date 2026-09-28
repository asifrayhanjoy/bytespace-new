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
      className="group cursor-pointer bg-white rounded-3xl border border-slate-200/90 overflow-hidden shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between p-4 space-y-4"
    >
      <div>
        {/* Thumbnail with 3 overlay pills */}
        <div className="relative aspect-[16/10] w-full overflow-hidden rounded-2xl bg-slate-100 mb-3">
          <img
            src={course.thumbnail}
            alt={course.title}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          />
          
          {/* Overlay Translucent Badges at bottom left of image */}
          <div className="absolute bottom-2.5 left-2.5 right-2.5 flex items-center gap-1.5 overflow-x-auto no-scrollbar">
            <span className="px-2.5 py-1 rounded-full text-[10px] font-semibold bg-white/85 text-slate-800 backdrop-blur-md shadow-sm whitespace-nowrap">
              {course.lessonsCount} Lessons
            </span>
            <span className="px-2.5 py-1 rounded-full text-[10px] font-semibold bg-white/85 text-slate-800 backdrop-blur-md shadow-sm whitespace-nowrap">
              {course.duration}
            </span>
            <span className="px-2.5 py-1 rounded-full text-[10px] font-semibold bg-white/85 text-slate-800 backdrop-blur-md shadow-sm whitespace-nowrap">
              {course.commentsCount} Comments
            </span>
          </div>
        </div>

        {/* Title & Rating */}
        <div className="space-y-1.5 px-1">
          <div className="flex items-start justify-between gap-2">
            <h3 className="font-extrabold text-base text-slate-900 group-hover:text-blue-600 transition-colors line-clamp-1">
              {course.title}
            </h3>
            <div className="flex items-center gap-1 text-slate-400 font-bold text-xs shrink-0">
              <span className="text-slate-700">{course.rating.toFixed(1)}</span>
              <Star className="w-3.5 h-3.5 fill-slate-300 text-slate-300" />
            </div>
          </div>

          <p className="text-xs text-slate-500 font-medium">
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

      {/* Footer Level, Avatars, and Price */}
      <div className="pt-2 px-1 border-t border-slate-100 flex items-center justify-between">
        {/* Level Indicator */}
        <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-slate-100 text-slate-600 text-[11px] font-semibold">
          <BarChart2 className="w-3 h-3 text-slate-500" />
          <span>{course.level}</span>
        </div>

        {/* Avatar Stack with +26 badge */}
        <div className="flex items-center -space-x-1.5">
          <img
            src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=60"
            alt="User"
            className="w-5 h-5 rounded-full border border-white object-cover"
          />
          <img
            src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=60"
            alt="User"
            className="w-5 h-5 rounded-full border border-white object-cover"
          />
          <img
            src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=60"
            alt="User"
            className="w-5 h-5 rounded-full border border-white object-cover"
          />
          <span className="w-6 h-5 rounded-full bg-[#ccff00] text-slate-950 font-bold text-[9px] flex items-center justify-center border border-white shadow-xs">
            26+
          </span>
        </div>

        {/* Price */}
        <div>
          <span className="text-base font-extrabold text-blue-600">${course.price}</span>
          <span className="text-[10px] text-slate-400 font-medium">/lifetime</span>
        </div>
      </div>
    </div>
  );
};
