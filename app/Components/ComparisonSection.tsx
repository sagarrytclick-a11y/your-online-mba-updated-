import React from 'react';
import { Check, X } from 'lucide-react';
import PopupTrigger from './PopupTrigger';

const ComparisonSection = () => {
  const featuresList = [
    "UGC / AICTE Recognition",
    "Flexible Learning",
    "Live + Recorded Classes",
    "Work While Studying",
    "Placement Support",
    "Industry Relevant Curriculum",
    "Global Exposure",
    "Cost Effective"
  ];

  const formats = [
    {
      title: "Online MBA",
      highlighted: true,
      ribbon: "RECOMMENDED",
      features: {
        "UGC / AICTE Recognition": true,
        "Flexible Learning": true,
        "Live + Recorded Classes": true,
        "Work While Studying": true,
        "Placement Support": true,
        "Industry Relevant Curriculum": true,
        "Global Exposure": true,
        "Cost Effective": true
      }
    },
    {
      title: "Distance MBA",
      highlighted: false,
      ribbon: null,
      features: {
        "UGC / AICTE Recognition": true,
        "Flexible Learning": true,
        "Live + Recorded Classes": false,
        "Work While Studying": true,
        "Placement Support": false,
        "Industry Relevant Curriculum": false,
        "Global Exposure": false,
        "Cost Effective": true
      }
    },
    {
      title: "Regular MBA",
      highlighted: false,
      ribbon: null,
      features: {
        "UGC / AICTE Recognition": true,
        "Flexible Learning": false,
        "Live + Recorded Classes": false,
        "Work While Studying": false,
        "Placement Support": true,
        "Industry Relevant Curriculum": true,
        "Global Exposure": true,
        "Cost Effective": false
      }
    }
  ];

  return (
    <section className="relative w-full bg-[#FAFBFD] py-16 md:py-24 px-4 sm:px-6 md:px-8 border-t border-slate-100/50">
      
      <div className="max-w-7xl mx-auto space-y-12 md:space-y-16 relative z-10">
        
        {/* Header */}
        <div className="text-center space-y-3">
          <h2 className="text-3xl sm:text-4xl md:text-[40px] font-extrabold text-[#1E293B] tracking-tight leading-tight">
            Online vs Distance vs Regular MBA
          </h2>
          <p className="text-slate-500 text-sm sm:text-base font-medium max-w-xl mx-auto">
            Compare learning formats and discover why Online MBA is the smartest.
          </p>
        </div>

        {/* Comparison Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 max-w-5xl mx-auto items-start">
          {formats.map((format, idx) => {
            return (
              <div 
                key={idx}
                className={`bg-white rounded-[28px] overflow-hidden transition-all duration-300 relative ${
                  format.highlighted 
                    ? "border-2 border-[#C81E3D] shadow-xl shadow-red-700/5 -translate-y-1 md:-translate-y-2"
                    : "border border-gray-100 shadow-sm hover:shadow-md"
                }`}
              >
                
                {/* Diagonal Ribbon for Recommended */}
                {format.ribbon && (
                  <div className="absolute top-0 right-0 w-24 h-24 pointer-events-none overflow-hidden select-none z-20">
                    <div className="absolute top-[18px] -right-[26px] bg-[#EF4444] text-[8px] font-extrabold uppercase text-white py-1 px-8 rotate-45 tracking-widest text-center shadow-sm whitespace-nowrap">
                      {format.ribbon}
                    </div>
                  </div>
                )}

                {/* Card Header */}
                <div 
                  className={`p-6 text-center text-lg sm:text-xl font-bold relative z-10 ${
                    format.highlighted 
                      ? "bg-[#C81E3D] text-white" 
                      : "bg-slate-50/50 border-b border-gray-100 text-slate-800"
                  }`}
                >
                  {format.title}
                </div>

                {/* Card Content Rows */}
                <div className="p-6 sm:p-8 space-y-4">
                  {featuresList.map((feature, fIdx) => {
                    const isAvailable = format.features[feature as keyof typeof format.features];
                    return (
                      <div 
                        key={fIdx}
                        className="flex items-center justify-between gap-4 py-2 border-b border-slate-50 last:border-b-0"
                      >
                        <span className="text-slate-600 font-semibold text-xs sm:text-sm">
                          {feature}
                        </span>
                        
                        {/* Check or Cross Circle */}
                        {isAvailable ? (
                          <div className="w-5 h-5 rounded-full bg-[#10B981] flex items-center justify-center flex-shrink-0 shadow-sm shadow-emerald-500/10">
                            <Check size={11} className="text-white stroke-[4]" />
                          </div>
                        ) : (
                          <div className="w-5 h-5 rounded-full bg-[#EF4444] flex items-center justify-center flex-shrink-0 shadow-sm shadow-red-500/10">
                            <X size={11} className="text-white stroke-[4]" />
                          </div>
                        )}
                      </div>
                    );
                  })}
                </div>

              </div>
            );
          })}
        </div>

        {/* CTA Button */}
        <div className="flex justify-center pt-4">
          <PopupTrigger className="h-14 px-8 bg-[#C81E3D] hover:bg-[#B01A33] text-white font-extrabold rounded-full shadow-lg shadow-red-700/15 active:scale-[0.98] transition-all text-sm sm:text-base tracking-wide">
            Find the Best MBA Format for You
          </PopupTrigger>
        </div>

      </div>

    </section>
  );
};

export default ComparisonSection;
