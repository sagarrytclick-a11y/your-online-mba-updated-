"use client";
import React from 'react';
import * as Icons from 'lucide-react';

interface PaginationProps {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
  totalItems: number;
  itemsPerPage: number;
}

const Pagination: React.FC<PaginationProps> = ({
  currentPage,
  totalPages,
  onPageChange,
  totalItems,
  itemsPerPage,
}) => {
  if (totalPages <= 1) return null;

  const startItem = (currentPage - 1) * itemsPerPage + 1;
  const endItem = Math.min(currentPage * itemsPerPage, totalItems);

  const getPageNumbers = () => {
    const pages: (number | 'ellipsis')[] = [];
    const delta = 1;

    pages.push(1);

    const rangeStart = Math.max(2, currentPage - delta);
    const rangeEnd = Math.min(totalPages - 1, currentPage + delta);

    if (rangeStart > 2) pages.push('ellipsis');

    for (let i = rangeStart; i <= rangeEnd; i++) {
      pages.push(i);
    }

    if (rangeEnd < totalPages - 1) pages.push('ellipsis');

    if (totalPages > 1) pages.push(totalPages);

    return pages;
  };

  return (
    <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-8 border-t border-gray-100">
      <p className="text-xs sm:text-sm text-slate-500 font-semibold">
        Showing <span className="font-extrabold text-slate-700">{startItem}–{endItem}</span> of{' '}
        <span className="font-extrabold text-slate-700">{totalItems}</span>
      </p>

      <div className="flex items-center gap-1.5">
        <button
          onClick={() => onPageChange(currentPage - 1)}
          disabled={currentPage === 1}
          className="w-9 h-9 flex items-center justify-center rounded-xl border border-gray-200 text-slate-600 hover:border-[#C81E3D] hover:text-[#C81E3D] disabled:opacity-40 disabled:cursor-not-allowed transition-all"
        >
          <Icons.ChevronLeft size={16} />
        </button>

        {getPageNumbers().map((page, idx) =>
          page === 'ellipsis' ? (
            <span key={`e-${idx}`} className="w-9 h-9 flex items-center justify-center text-slate-400 text-sm font-bold">
              ...
            </span>
          ) : (
            <button
              key={page}
              onClick={() => onPageChange(page)}
              className={`w-9 h-9 flex items-center justify-center rounded-xl text-sm font-extrabold transition-all ${
                page === currentPage
                  ? 'bg-[#C81E3D] text-white shadow-md shadow-red-700/15'
                  : 'border border-gray-200 text-slate-600 hover:border-[#C81E3D] hover:text-[#C81E3D]'
              }`}
            >
              {page}
            </button>
          )
        )}

        <button
          onClick={() => onPageChange(currentPage + 1)}
          disabled={currentPage === totalPages}
          className="w-9 h-9 flex items-center justify-center rounded-xl border border-gray-200 text-slate-600 hover:border-[#C81E3D] hover:text-[#C81E3D] disabled:opacity-40 disabled:cursor-not-allowed transition-all"
        >
          <Icons.ChevronRight size={16} />
        </button>
      </div>
    </div>
  );
};

export default Pagination;
