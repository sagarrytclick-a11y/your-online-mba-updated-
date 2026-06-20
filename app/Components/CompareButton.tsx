"use client";
import React from "react";
import * as Icons from "lucide-react";
import { useCompare } from "../context/CompareContext";

interface CompareButtonProps {
  collegeId: string;
  variant?: "card" | "hero";
}

const CompareButton: React.FC<CompareButtonProps> = ({ collegeId, variant = "card" }) => {
  const { includes, toggle, isFull } = useCompare();
  const added = includes(collegeId);

  if (variant === "hero") {
    return (
      <button
        onClick={() => toggle(collegeId)}
        className={`h-12 px-7 border-2 font-extrabold rounded-full text-sm transition-all inline-flex items-center gap-2 active:scale-[0.98] ${
          added
            ? "bg-white text-[#C81E3D] border-white hover:bg-gray-100"
            : "border-white/70 text-white hover:bg-white/10"
        }`}
      >
        <Icons.BarChart3 size={16} />
        {added ? "Remove from Compare" : "Add to Compare"}
      </button>
    );
  }

  const isDisabled = !added && isFull;

  return (
    <button
      onClick={(e) => {
        e.preventDefault();
        e.stopPropagation();
        if (!isDisabled) toggle(collegeId);
      }}
      disabled={isDisabled}
      title={isDisabled ? "Max 4 universities" : added ? "Remove from compare" : "Add to compare"}
      className={`absolute top-3 right-3 z-10 w-8 h-8 rounded-full flex items-center justify-center shadow-md transition-all ${
        added
          ? "bg-[#C81E3D] text-white hover:bg-[#B01A33]"
          : "bg-white/90 text-slate-500 hover:bg-white hover:text-[#C81E3D]"
      } ${isDisabled ? "opacity-50 cursor-not-allowed" : ""}`}
    >
      <Icons.BarChart3 size={14} />
    </button>
  );
};

export default CompareButton;
