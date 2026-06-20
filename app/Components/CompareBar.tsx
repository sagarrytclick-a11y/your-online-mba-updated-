"use client";
import React from "react";
import Link from "next/link";
import * as Icons from "lucide-react";
import { useCompare } from "../context/CompareContext";

const CompareBar: React.FC = () => {
  const { count, compareColleges, clear } = useCompare();

  if (count === 0) return null;

  return (
    <div className="fixed bottom-6 left-1/2 -translate-x-1/2 z-50 w-full max-w-lg px-4">
      <div className="bg-white border border-gray-200 rounded-2xl shadow-2xl p-4 flex items-center justify-between gap-4">
        <div className="flex items-center gap-2 min-w-0">
          <div className="flex -space-x-2">
            {compareColleges.slice(0, 4).map((col) => (
              <div
                key={col.id}
                className="w-8 h-8 rounded-full border-2 border-white bg-slate-100 overflow-hidden shadow-sm"
              >
                <img src={col.image} alt={col.name} className="w-full h-full object-cover" />
              </div>
            ))}
          </div>
          <span className="text-xs font-bold text-slate-600 truncate">
            {count} {count === 1 ? "University" : "Universities"} selected
          </span>
        </div>
        <div className="flex items-center gap-2">
          <button
            onClick={clear}
            className="text-xs font-bold text-slate-400 hover:text-[#C81E3D] transition-colors px-3 py-1.5"
          >
            Clear
          </button>
          <Link
            href="/compare"
            className="inline-flex items-center gap-1.5 h-9 px-4 bg-[#C81E3D] hover:bg-[#B01A33] text-white font-extrabold rounded-full text-xs shadow-lg transition-all active:scale-[0.98]"
          >
            <Icons.BarChart3 size={14} />
            Compare Now
          </Link>
        </div>
      </div>
    </div>
  );
};

export default CompareBar;
