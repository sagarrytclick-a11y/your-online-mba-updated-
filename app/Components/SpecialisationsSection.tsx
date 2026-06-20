import React from 'react';
import Link from 'next/link';
import * as Icons from 'lucide-react';
import { specialisations } from '../data/specialisations';
import ScrollReveal from './ScrollReveal';

const themeStyles = {
  rose: {
    bg: 'bg-[#FFF1F2]',
    icon: 'text-[#C81E3D]',
    salary: 'text-[#C81E3D]'
  },
  emerald: {
    bg: 'bg-[#ECFDF5]',
    icon: 'text-[#10B981]',
    salary: 'text-[#10B981]'
  },
  violet: {
    bg: 'bg-[#F5F3FF]',
    icon: 'text-[#8B5CF6]',
    salary: 'text-[#8B5CF6]'
  },
  blue: {
    bg: 'bg-[#EFF6FF]',
    icon: 'text-[#3B82F6]',
    salary: 'text-[#3B82F6]'
  },
  amber: {
    bg: 'bg-[#FFF7ED]',
    icon: 'text-[#F97316]',
    salary: 'text-[#F97316]'
  },
  teal: {
    bg: 'bg-[#F0FDFA]',
    icon: 'text-[#14B8A6]',
    salary: 'text-[#14B8A6]'
  }
};

const SpecialisationsSection = () => {
  return (
    <section className="relative w-full bg-[#FAFBFD] py-16 md:py-24 px-4 sm:px-6 md:px-8">
      
      <div className="max-w-7xl mx-auto space-y-12 md:space-y-16 relative z-10">
        
        {/* Header */}
        <div className="text-center space-y-3">
          <ScrollReveal>
            <p className="text-[#C81E3D] text-[11px] sm:text-xs font-bold tracking-widest uppercase">
              Specialisations
            </p>
          </ScrollReveal>
          <ScrollReveal delay={100}>
            <h2 className="text-3xl sm:text-4xl md:text-[40px] font-extrabold text-[#1E293B] tracking-tight leading-tight">
              Popular Online MBA Specialisations
            </h2>
          </ScrollReveal>
          <ScrollReveal delay={200}>
            <p className="text-slate-500 text-sm sm:text-base font-medium max-w-xl mx-auto">
              Choose from 12+ specialisations aligned to today's job market.
            </p>
          </ScrollReveal>
        </div>

        {/* Specialisations Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {specialisations.map((spec, idx) => {
            const IconComponent = (Icons[spec.iconName] || Icons.HelpCircle) as React.ComponentType<{ className?: string; size?: number }>;
            const theme = themeStyles[spec.colorTheme] || themeStyles.rose;
            const isHighlighted = spec.slug === "operations-management";

            return (
              <ScrollReveal key={spec.slug} delay={idx * 70} direction="up">
                <Link 
                  href={`/specialisations/${spec.slug}`}
                  className={`group flex flex-col justify-between p-6 rounded-[20px] bg-white transition-all duration-300 relative hover:-translate-y-1.5 hover:shadow-lg ${
                    isHighlighted 
                      ? "border-2 border-[#C81E3D] shadow-md shadow-red-700/5" 
                      : "border border-gray-100/80 shadow-sm"
                  }`}
                >
                  <div>
                    <div className={`w-10 h-10 rounded-[12px] ${theme.bg} flex items-center justify-center mb-5 flex-shrink-0 transition-transform group-hover:scale-105`}>
                      <IconComponent className={`${theme.icon} w-5 h-5`} />
                    </div>

                    <h3 className="text-slate-800 font-bold text-sm sm:text-base mb-1 group-hover:text-[#C81E3D] transition-colors line-clamp-2">
                      {spec.title}
                    </h3>
                  </div>

                  <div className="flex items-center justify-between mt-4 pt-2 border-t border-gray-50/50">
                    <span className={`text-xs font-bold ${theme.salary}`}>
                      {spec.salaryRange}
                    </span>
                    
                    <Icons.ChevronRight 
                      size={14} 
                      className="text-gray-300 group-hover:text-[#C81E3D] group-hover:translate-x-0.5 transition-all" 
                    />
                  </div>
                </Link>
              </ScrollReveal>
            );
          })}
        </div>

        {/* CTA Button */}
        <ScrollReveal>
          <div className="flex justify-center pt-4">
            <Link
              href="/specialisations"
              className="h-14 px-8 bg-[#C81E3D] hover:bg-[#B01A33] text-white font-extrabold rounded-full shadow-lg shadow-red-700/15 active:scale-[0.98] transition-all text-sm sm:text-base tracking-wide flex items-center gap-2"
            >
              <span>View All Specialisations</span>
              <Icons.ArrowRight size={16} />
            </Link>
          </div>
        </ScrollReveal>

      </div>

    </section>
  );
};

export default SpecialisationsSection;
