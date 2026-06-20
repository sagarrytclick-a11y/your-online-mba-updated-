"use client";
import React, { useState } from 'react';
import Link from 'next/link';
import * as Icons from 'lucide-react';
import { specialisations } from '../../data/specialisations';
import Pagination from '../../Components/Pagination';

const ITEMS_PER_PAGE = 8;

export default function SpecialisationsPage() {
  const [page, setPage] = useState(1);
  const totalPages = Math.ceil(specialisations.length / ITEMS_PER_PAGE);
  const start = (page - 1) * ITEMS_PER_PAGE;
  const visible = specialisations.slice(start, start + ITEMS_PER_PAGE);

  const themeStyles = {
    rose: { bg: 'bg-[#FFF1F2]', text: 'text-[#C81E3D]' },
    emerald: { bg: 'bg-[#ECFDF5]', text: 'text-[#10B981]' },
    violet: { bg: 'bg-[#F5F3FF]', text: 'text-[#8B5CF6]' },
    blue: { bg: 'bg-[#EFF6FF]', text: 'text-[#3B82F6]' },
    amber: { bg: 'bg-[#FFF7ED]', text: 'text-[#F97316]' },
    teal: { bg: 'bg-[#F0FDFA]', text: 'text-[#14B8A6]' }
  };

  return (
    <div className="min-h-screen bg-[#F8FAFC] py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto space-y-12">
        
        {/* Header */}
        <div className="text-center space-y-4">
          <h1 className="text-2xl sm:text-4xl md:text-5xl font-black text-[#1E293B] tracking-tight">
            Explore Our Top Specializations
          </h1>
          <p className="text-slate-600 font-medium text-lg max-w-2xl mx-auto">
            Choose from industry relevant MBA specializations designed to accelerate your career growth.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {visible.map((spec) => {
            const Icon = Icons[spec.iconName as keyof typeof Icons] as React.ElementType;
            const theme = themeStyles[spec.colorTheme] || themeStyles.rose;
            
            return (
              <Link 
                key={spec.slug} 
                href={`/specialisations/${spec.slug}`}
                className="group bg-white p-6 rounded-2xl shadow-sm border border-gray-100 flex items-center justify-between hover:shadow-md transition-all duration-200"
              >
                <div className="flex items-center gap-4">
                  <div className={`w-12 h-12 rounded-xl ${theme.bg} ${theme.text} flex items-center justify-center`}>
                    <Icon size={24} />
                  </div>
                  <div>
                    <h2 className="text-[#1E293B] font-bold text-base group-hover:text-[#C81E3D] transition-colors truncate">
                      {spec.title}
                    </h2>
                    <p className="text-slate-500 text-xs font-semibold mt-0.5">
                      Avg Salary: {spec.salaryRange}
                    </p>
                  </div>
                </div>
                <Icons.ChevronRight size={20} className="text-gray-400 group-hover:text-[#C81E3D] transition-colors" />
              </Link>
            );
          })}
        </div>

        <Pagination currentPage={page} totalPages={totalPages} onPageChange={setPage} totalItems={specialisations.length} itemsPerPage={ITEMS_PER_PAGE} />
      </div>
    </div>
  );
}
