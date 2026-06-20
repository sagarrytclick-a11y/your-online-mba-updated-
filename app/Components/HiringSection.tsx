import React from 'react';
import Image from 'next/image';
import { companies } from '../data/companies';
import PopupTrigger from './PopupTrigger';

const logos = Array.from({ length: companies.length }, (_, i) => {
  const num = i + 1;
  return num === 16 ? `/partners/${num}.jpg` : `/partners/${num}.png`;
});

const doubled = [...companies, ...companies, ...companies];

const HiringSection: React.FC = () => {
  return (
    <section className="relative w-full bg-white py-16 md:py-24 px-4 sm:px-6 md:px-8 overflow-hidden">
      <div className="max-w-7xl mx-auto space-y-12 md:space-y-16 relative z-10">

        <div className="text-center space-y-3">
          <p className="text-[#C81E3D] text-[11px] sm:text-xs font-bold tracking-widest uppercase">
            Top Employers
          </p>
          <h2 className="text-3xl sm:text-4xl md:text-[40px] font-extrabold text-[#1E293B] tracking-tight leading-tight">
            Companies That Hire Online MBA Graduates
          </h2>
          <p className="text-slate-500 text-sm sm:text-base font-medium max-w-xl mx-auto">
            Our graduates are placed at the world&apos;s leading companies.
          </p>
        </div>

        <div className="relative w-full overflow-hidden">
          <div className="flex gap-4 animate-infinite-scroll" style={{ width: 'max-content' }}>
            {doubled.map((company, idx) => (
              <div
                key={idx}
                className="flex-shrink-0 w-[120px] sm:w-[140px] bg-[#F8FAFC] border border-gray-100 rounded-[16px] flex flex-col items-center justify-center h-24 px-3 transition-all duration-300 hover:border-[#C81E3D]/30 hover:shadow-md hover:-translate-y-0.5 cursor-pointer"
              >
                <Image
                  src={logos[idx % companies.length]}
                  alt={company.name}
                  width={80}
                  height={40}
                  className="object-contain max-h-10 w-auto"
                />
              </div>
            ))}
          </div>
        </div>

        <div className="flex justify-center">
          <PopupTrigger className="h-14 px-8 bg-[#C81E3D] hover:bg-[#B01A33] text-white font-extrabold rounded-full shadow-lg shadow-red-700/15 active:scale-[0.98] transition-all text-sm sm:text-base tracking-wide">
            Get Hired by Top Companies
          </PopupTrigger>
        </div>

      </div>
    </section>
  );
};

export default HiringSection;
