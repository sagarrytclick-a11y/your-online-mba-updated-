"use client";
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { universities } from '../data/universities';

const UniversitiesSection = () => {
  const doubled = [...universities, ...universities, ...universities];

  return (
    <section className="relative w-full bg-white py-16 md:py-24 px-4 sm:px-6 md:px-8 overflow-hidden">

      <div className="max-w-7xl mx-auto space-y-10 md:space-y-14 relative z-10">

        {/* Header */}
        <div className="text-center space-y-3">
          <h2 className="text-3xl sm:text-4xl md:text-[40px] font-extrabold text-[#1E293B] tracking-tight leading-tight">
            Online MBA from Top Universities
          </h2>
          <p className="text-slate-500 text-sm sm:text-base font-medium max-w-xl mx-auto">
            All universities are NAAC-accredited and UGC-approved.
          </p>
        </div>

        {/* Infinite Auto Slider */}
        <div className="relative w-full overflow-hidden">
          <div className="flex gap-5 animate-infinite-scroll" style={{ width: 'max-content' }}>
            {doubled.map((uni, idx) => (
              <Link
                href="/universities"
                key={idx}
                className="flex-shrink-0 w-[180px] sm:w-[200px] bg-white border border-gray-100 rounded-[20px] p-5 shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300 group/card block"
              >
                <div className="w-full h-20 flex items-center justify-center mb-5 relative">
                  <Image
                    src={uni.logo}
                    alt={uni.name}
                    width={120}
                    height={60}
                    className="object-contain max-h-16 w-auto"
                  />
                </div>
                <h4 className="text-slate-800 font-bold text-xs sm:text-sm text-center mb-3 leading-tight line-clamp-2 min-h-[2.5rem]">
                  {uni.name}
                </h4>
                <p className="text-center mb-1">
                  <span className="text-slate-500 text-[10px] font-bold uppercase tracking-wider">EMI </span>
                  <span className="text-[#C81E3D] font-extrabold text-sm">{uni.emi}</span>
                </p>
                <p className="text-center text-[10px] text-slate-400 font-bold uppercase tracking-wider">
                  {uni.accreditation}
                </p>
              </Link>
            ))}
          </div>
        </div>

        {/* CTA Button */}
        <div className="flex justify-center pt-4">
          <Link
            href="/universities"
            className="px-8 py-3.5 border-2 border-[#C81E3D] text-[#C81E3D] hover:bg-[#C81E3D] hover:text-white font-extrabold rounded-full transition-all duration-300 text-sm sm:text-base tracking-wide active:scale-[0.98]"
          >
            View All Universities
          </Link>
        </div>

      </div>
    </section>
  );
};

export default UniversitiesSection;
