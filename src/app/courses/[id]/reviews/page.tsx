'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { useParams } from 'next/navigation';
import { Star, ThumbsUp, Filter, MessageSquare, ChevronLeft, PlusCircle } from 'lucide-react';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { MOCK_COURSES, Review } from '@/data/mockData';

export default function CourseReviewsPage() {
  const params = useParams();
  const courseId = (params.id as string) || 'build-digital-asset';
  const course = MOCK_COURSES.find((c) => c.id === courseId) || MOCK_COURSES[0];

  const [reviewList, setReviewList] = useState<Review[]>(course.reviews);
  const [selectedStarFilter, setSelectedStarFilter] = useState<number>(0);
  const [showReviewModal, setShowReviewModal] = useState<boolean>(false);

  // New review state
  const [newRating, setNewRating] = useState<number>(5);
  const [newTitle, setNewTitle] = useState('');
  const [newComment, setNewComment] = useState('');
  const [userName, setUserName] = useState('');

  const filteredReviews = selectedStarFilter === 0
    ? reviewList
    : reviewList.filter((r) => r.rating === selectedStarFilter);

  const handleAddReview = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newComment || !userName) return;

    const created: Review = {
      id: 'rev-' + Date.now(),
      userName,
      userAvatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=120',
      rating: newRating,
      date: 'Just now',
      title: newTitle || 'Great course!',
      comment: newComment,
      helpfulCount: 0,
    };

    setReviewList([created, ...reviewList]);
    setShowReviewModal(false);
    setNewTitle('');
    setNewComment('');
    setUserName('');
  };

  return (
    <div className="min-h-screen flex flex-col bg-slate-50">
      <Header />

      {/* Header Banner */}
      <section className="bg-slate-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-4">
          <Link
            href={`/courses/${course.id}`}
            className="inline-flex items-center gap-2 text-xs font-bold text-slate-400 hover:text-white"
          >
            <ChevronLeft className="w-4 h-4" />
            <span>Back to Course Details</span>
          </Link>

          <h1 className="text-3xl font-black">Ratings & Student Reviews</h1>
          <p className="text-xs sm:text-sm text-slate-300">
            Course: <span className="font-bold text-[#d2ff00]">{course.title}</span>
          </p>
        </div>
      </section>

      <main className="flex-grow max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 w-full space-y-8">
        
        {/* Rating Summary Box & Write Review Button */}
        <div className="bg-white p-8 rounded-3xl border border-slate-200 card-shadow grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
          
          <div className="md:col-span-4 text-center md:text-left space-y-2 border-b md:border-b-0 md:border-r border-slate-100 pb-6 md:pb-0 md:pr-8">
            <div className="text-5xl font-black text-slate-900">{course.rating.toFixed(1)}</div>
            <div className="flex items-center justify-center md:justify-start gap-1 text-amber-400">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-5 h-5 fill-amber-400" />
              ))}
            </div>
            <p className="text-xs text-slate-500 font-semibold">Course Rating based on {reviewList.length} reviews</p>

            <button
              onClick={() => setShowReviewModal(true)}
              className="mt-4 px-6 py-3 rounded-2xl bg-brand-blue text-white font-extrabold text-xs shadow-md hover:bg-blue-700 transition-all flex items-center justify-center gap-2 w-full"
            >
              <PlusCircle className="w-4 h-4" />
              <span>Write a Review</span>
            </button>
          </div>

          {/* Star Breakdown Bars */}
          <div className="md:col-span-8 space-y-2">
            {[5, 4, 3, 2, 1].map((stars) => {
              const count = reviewList.filter((r) => r.rating === stars).length;
              const percent = reviewList.length > 0 ? Math.round((count / reviewList.length) * 100) : 0;

              return (
                <div key={stars} className="flex items-center gap-3 text-xs font-semibold text-slate-600">
                  <div className="w-16 flex items-center gap-1">
                    <span>{stars} Star</span>
                  </div>
                  <div className="flex-grow h-2 rounded-full bg-slate-100 overflow-hidden">
                    <div
                      className="h-full bg-amber-400 rounded-full"
                      style={{ width: `${percent}%` }}
                    ></div>
                  </div>
                  <div className="w-12 text-right text-slate-400">{percent}%</div>
                </div>
              );
            })}
          </div>

        </div>

        {/* Filter Tabs */}
        <div className="flex items-center justify-between border-b border-slate-200 pb-4">
          <div className="flex items-center gap-2">
            <span className="text-xs font-bold text-slate-500 mr-2">Filter Reviews:</span>
            {[0, 5, 4, 3].map((star) => (
              <button
                key={star}
                onClick={() => setSelectedStarFilter(star)}
                className={`px-3 py-1.5 rounded-xl text-xs font-bold transition-all ${
                  selectedStarFilter === star
                    ? 'bg-brand-blue text-white shadow-sm'
                    : 'bg-white border border-slate-200 text-slate-700 hover:bg-slate-100'
                }`}
              >
                {star === 0 ? 'All Ratings' : `${star} Stars`}
              </button>
            ))}
          </div>
        </div>

        {/* Reviews List */}
        <div className="space-y-4">
          {filteredReviews.map((rev) => (
            <div key={rev.id} className="bg-white p-6 rounded-2xl border border-slate-200 card-shadow space-y-3">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <img src={rev.userAvatar} alt={rev.userName} className="w-10 h-10 rounded-full object-cover border" />
                  <div>
                    <h4 className="text-xs font-bold text-slate-900">{rev.userName}</h4>
                    <p className="text-[10px] text-slate-400">{rev.date}</p>
                  </div>
                </div>

                <div className="flex items-center gap-1 text-amber-400">
                  {[...Array(rev.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-amber-400" />
                  ))}
                </div>
              </div>

              <h5 className="font-bold text-xs text-slate-900">{rev.title}</h5>
              <p className="text-xs text-slate-700 leading-relaxed">{rev.comment}</p>

              <div className="pt-2 flex items-center justify-between text-xs text-slate-400">
                <button className="flex items-center gap-1.5 hover:text-brand-blue font-semibold">
                  <ThumbsUp className="w-3.5 h-3.5" />
                  <span>Helpful ({rev.helpfulCount})</span>
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Write Review Modal */}
        {showReviewModal && (
          <div className="fixed inset-0 z-50 bg-slate-950/60 backdrop-blur-sm flex items-center justify-center p-4">
            <div className="bg-white rounded-3xl max-w-lg w-full p-8 shadow-2xl space-y-6 animate-in zoom-in-95">
              <h3 className="text-xl font-bold text-slate-900">Submit Your Course Review</h3>

              <form onSubmit={handleAddReview} className="space-y-4">
                <div>
                  <label className="text-xs font-bold text-slate-700">Your Rating</label>
                  <div className="flex gap-2 pt-1">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <button
                        type="button"
                        key={star}
                        onClick={() => setNewRating(star)}
                        className={`p-2 rounded-xl transition-all ${
                          newRating >= star ? 'text-amber-400 bg-amber-50' : 'text-slate-300'
                        }`}
                      >
                        <Star className="w-6 h-6 fill-current" />
                      </button>
                    ))}
                  </div>
                </div>

                <div className="space-y-1">
                  <label className="text-xs font-bold text-slate-700">Your Name</label>
                  <input
                    type="text"
                    required
                    placeholder="Shafin Ahmed"
                    value={userName}
                    onChange={(e) => setUserName(e.target.value)}
                    className="w-full px-4 py-2.5 rounded-xl border border-slate-200 text-xs focus:outline-none focus:border-brand-blue"
                  />
                </div>

                <div className="space-y-1">
                  <label className="text-xs font-bold text-slate-700">Review Title</label>
                  <input
                    type="text"
                    placeholder="Extremely helpful course!"
                    value={newTitle}
                    onChange={(e) => setNewTitle(e.target.value)}
                    className="w-full px-4 py-2.5 rounded-xl border border-slate-200 text-xs focus:outline-none focus:border-brand-blue"
                  />
                </div>

                <div className="space-y-1">
                  <label className="text-xs font-bold text-slate-700">Detailed Review</label>
                  <textarea
                    rows={4}
                    required
                    placeholder="Share your thoughts about the instructor, modules, and hands-on projects..."
                    value={newComment}
                    onChange={(e) => setNewComment(e.target.value)}
                    className="w-full px-4 py-2.5 rounded-xl border border-slate-200 text-xs focus:outline-none focus:border-brand-blue"
                  ></textarea>
                </div>

                <div className="flex justify-end gap-3 pt-2">
                  <button
                    type="button"
                    onClick={() => setShowReviewModal(false)}
                    className="px-5 py-2.5 rounded-xl border border-slate-200 text-xs font-bold text-slate-700 hover:bg-slate-100"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    className="px-6 py-2.5 rounded-xl bg-brand-blue text-white text-xs font-bold hover:bg-blue-700"
                  >
                    Submit Review
                  </button>
                </div>
              </form>
            </div>
          </div>
        )}

      </main>

      <Footer />
    </div>
  );
}
