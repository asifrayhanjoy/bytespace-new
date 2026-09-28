'use client';

import React from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { Star, Clock, BookOpen, ArrowUpRight, CheckCircle } from 'lucide-react';
import { Course } from '@/data/mockData';
import { useApp } from '@/context/AppContext';

interface CourseCardProps {
  course: Course;
}

export const CourseCard: React.FC<CourseCardProps> = ({ course }) => {
  const router = useRouter();
  const { isEnrolled, enrollCourse } = useApp();
  const enrolled = isEnrolled(course.id);

  const handleCardClick = () => {
    router.push(`/courses/${course.id}`);
  };

  const handleEnrollClick = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (enrolled) {
      router.push(`/courses/${course.id}/learn`);
    } else {
      enrollCourse(course.id);
      router.push(`/courses/${course.id}/learn`);
    }
  };

  return (
    <div
      onClick={handleCardClick}
      className="group cursor-pointer bg-white rounded-2xl border border-slate-200/80 overflow-hidden card-shadow card-hover-effect flex flex-col justify-between"
    >
      <div>
        {/* Thumbnail & Badge */}
        <div className="relative aspect-video w-full overflow-hidden bg-slate-100">
          <img
            src={course.thumbnail}
            alt={course.title}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          />
          <div className="absolute top-3 left-3 flex items-center gap-2">
            <span className="px-3 py-1 rounded-full text-[11px] font-extrabold uppercase tracking-wider bg-[#d2ff00] text-slate-950 shadow-sm">
              {course.badge}
            </span>
          </div>
          <span className="absolute bottom-3 right-3 px-2.5 py-1 rounded-lg text-xs font-semibold bg-slate-900/80 text-white backdrop-blur-md">
            {course.category}
          </span>
        </div>

        {/* Content */}
        <div className="p-5 space-y-3">
          
          {/* Instructor line */}
          <div className="flex items-center justify-between gap-2">
            <Link
              href={`/creator/${course.creator.id}`}
              onClick={(e) => e.stopPropagation()}
              className="flex items-center gap-2 group/creator"
            >
              <img
                src={course.creator.avatar}
                alt={course.creator.name}
                className="w-6 h-6 rounded-full object-cover border border-slate-200"
              />
              <span className="text-xs font-semibold text-slate-600 group-hover/creator:text-brand-blue transition-colors">
                {course.creator.name}
              </span>
            </Link>
            
            {/* Level badge */}
            <span className="text-[11px] font-medium text-slate-500 bg-slate-100 px-2 py-0.5 rounded">
              {course.level}
            </span>
          </div>

          {/* Title */}
          <h3 className="font-bold text-base text-slate-900 group-hover:text-brand-blue transition-colors line-clamp-2 leading-snug">
            {course.title}
          </h3>

          {/* Stats: Rating, Lessons, Duration */}
          <div className="flex items-center gap-4 text-xs text-slate-500 font-medium pt-1">
            <div className="flex items-center gap-1 text-amber-500 font-bold">
              <Star className="w-3.5 h-3.5 fill-amber-400" />
              <span>{course.rating.toFixed(1)}</span>
              <span className="text-slate-400 font-normal">({course.reviewCount})</span>
            </div>
            <div className="flex items-center gap-1">
              <BookOpen className="w-3.5 h-3.5 text-slate-400" />
              <span>{course.lessonsCount} Lessons</span>
            </div>
            <div className="flex items-center gap-1">
              <Clock className="w-3.5 h-3.5 text-slate-400" />
              <span>{course.duration}</span>
            </div>
          </div>
        </div>
      </div>

      {/* Footer / Price & Actions */}
      <div className="px-5 pb-5 pt-3 border-t border-slate-100 flex items-center justify-between">
        <div className="flex items-baseline gap-2">
          <span className="text-xl font-extrabold text-slate-900">${course.price}</span>
          {course.originalPrice > course.price && (
            <span className="text-xs font-medium text-slate-400 line-through">
              ${course.originalPrice}
            </span>
          )}
        </div>

        <button
          onClick={handleEnrollClick}
          className={`flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs font-bold transition-all ${
            enrolled
              ? 'bg-emerald-50 text-emerald-700 border border-emerald-200 hover:bg-emerald-100'
              : 'bg-brand-blue text-white hover:bg-blue-700 shadow-sm'
          }`}
        >
          {enrolled ? (
            <>
              <CheckCircle className="w-3.5 h-3.5 text-emerald-600" />
              <span>Continue</span>
            </>
          ) : (
            <>
              <span>Enroll Now</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </>
          )}
        </button>
      </div>
    </div>
  );
};
