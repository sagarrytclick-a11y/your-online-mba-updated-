"use client";
import React, { useState } from 'react';
import Link from 'next/link';
import * as Icons from 'lucide-react';
import { collegeReviews } from '../../data/colleges';
import PopupTrigger from '../../Components/PopupTrigger';
import Pagination from '../../Components/Pagination';
import CompareButton from '../../Components/CompareButton';

const ITEMS_PER_PAGE = 8;

export default function UniversitiesPage() {
  const [page, setPage] = useState(1);
  const totalPages = Math.ceil(collegeReviews.length / ITEMS_PER_PAGE);
  const start = (page - 1) * ITEMS_PER_PAGE;
  const visible = collegeReviews.slice(start, start + ITEMS_PER_PAGE);

  return (
    <div className="min-h-screen bg-[#F8FAFC] font-sans text-slate-800 pb-24">
      <section className="bg-white border-b border-gray-100 py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto space-y-8">
          <div className="flex items-center gap-2 text-xs sm:text-sm font-bold text-[#C81E3D] uppercase tracking-wider">
            <Link href="/" className="hover:underline">Home</Link>
            <span className="text-slate-400">/</span>
            <span className="text-slate-500">Universities</span>
          </div>

          <div className="text-center space-y-4 max-w-4xl mx-auto">
            <h1 className="text-2xl sm:text-4xl md:text-5xl font-black text-[#1E293B] tracking-tight">
              Top Universities for Online MBA
            </h1>
            <p className="text-slate-500 text-sm sm:text-base font-medium max-w-2xl mx-auto">
              Explore detailed reviews, ratings, fees, and course offerings from India's top online MBA universities.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 pt-4">
            {visible.map((col) => (
              <Link
                key={col.id}
                href={`/universities/${col.id}`}
                className="bg-white border border-gray-100 rounded-2xl overflow-hidden shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300 group flex flex-col"
              >
                <div className="relative h-36 overflow-hidden bg-slate-100">
                  <img src={col.image} alt={col.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
                  <div className="absolute bottom-3 left-3 flex items-center gap-1 bg-white/90 rounded-full px-2.5 py-1 text-xs font-extrabold text-black">
                    <Icons.Star size={12} className="fill-yellow-400 text-yellow-400" />
                    {col.rating}
                  </div>
                  <CompareButton collegeId={col.id} />
                </div>
                <div className="p-5 flex flex-col flex-1">
                  <h3 className="text-sm font-extrabold text-[#1E293B] group-hover:text-[#C81E3D] transition-colors mb-2">{col.name}</h3>
                  <div className="flex flex-wrap gap-1.5 mb-3">
                    <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-gray-50 border border-gray-100 text-[10px] font-bold text-slate-600">
                      <Icons.MapPin size={10} className="text-[#C81E3D]" />
                      {col.location.split(",")[0]}
                    </span>
                    <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-emerald-50/50 border border-emerald-100/50 text-[10px] font-bold text-slate-600">
                      {col.fees}
                    </span>
                  </div>
                  <p className="text-xs text-slate-500 font-semibold leading-relaxed line-clamp-2 flex-1">{col.description}</p>
                </div>
              </Link>
            ))}
          </div>

          <Pagination currentPage={page} totalPages={totalPages} onPageChange={setPage} totalItems={collegeReviews.length} itemsPerPage={ITEMS_PER_PAGE} />
        </div>
      </section>

      <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 mt-12 text-center">
        <div className="bg-[#C81E3D] rounded-3xl p-10 md:p-14 text-white space-y-6">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-black tracking-tight">
            Not Sure Which University to Choose?
          </h2>
          <p className="text-rose-100 text-sm sm:text-base font-medium max-w-xl mx-auto">
            Get free expert counselling to find the best university matched to your goals and budget.
          </p>
          <PopupTrigger className="inline-flex items-center gap-2 h-12 px-8 bg-white text-[#C81E3D] font-extrabold rounded-full shadow-lg hover:bg-gray-100 transition-all text-sm">
            <Icons.Phone size={16} />
            Talk to an Expert
          </PopupTrigger>
        </div>
      </section>
    </div>
  );
}
