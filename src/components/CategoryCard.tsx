'use client';

import React from 'react';
import Link from 'next/link';
import { Code, Palette, Brain, TrendingUp, Megaphone, Smartphone, ArrowRight } from 'lucide-react';
import { Category } from '@/data/mockData';

interface CategoryCardProps {
  category: Category;
}

export const CategoryCard: React.FC<CategoryCardProps> = ({ category }) => {
  const renderIcon = () => {
    switch (category.iconName) {
      case 'Code':
        return <Code className="w-6 h-6 text-blue-600" />;
      case 'Palette':
        return <Palette className="w-6 h-6 text-purple-600" />;
      case 'Brain':
        return <Brain className="w-6 h-6 text-emerald-600" />;
      case 'TrendingUp':
        return <TrendingUp className="w-6 h-6 text-amber-600" />;
      case 'Megaphone':
        return <Megaphone className="w-6 h-6 text-rose-600" />;
      case 'Smartphone':
        return <Smartphone className="w-6 h-6 text-cyan-600" />;
      default:
        return <Code className="w-6 h-6 text-blue-600" />;
    }
  };

  return (
    <Link
      href={`/search?category=${category.slug}`}
      className="group p-6 rounded-2xl bg-white border border-slate-200/80 card-shadow card-hover-effect flex flex-col justify-between"
    >
      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <div className="w-12 h-12 rounded-2xl bg-slate-100 flex items-center justify-center group-hover:scale-110 group-hover:bg-blue-50 transition-all duration-300">
            {renderIcon()}
          </div>
          <span className="text-xs font-bold text-slate-500 bg-slate-100 px-2.5 py-1 rounded-full group-hover:bg-brand-blue group-hover:text-white transition-colors">
            {category.courseCount} Courses
          </span>
        </div>

        <div>
          <h4 className="font-bold text-base text-slate-900 group-hover:text-brand-blue transition-colors">
            {category.name}
          </h4>
          <p className="text-xs text-slate-500 mt-1 line-clamp-2 leading-relaxed">
            {category.description}
          </p>
        </div>
      </div>

      <div className="mt-4 pt-3 border-t border-slate-100 flex items-center text-xs font-bold text-slate-700 group-hover:text-brand-blue gap-1">
        <span>Explore Category</span>
        <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
      </div>
    </Link>
  );
};
