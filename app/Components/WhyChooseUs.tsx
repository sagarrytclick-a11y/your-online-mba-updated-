import React from 'react';
import { Briefcase, Clock, GraduationCap, Globe, Handshake, Banknote, Download } from 'lucide-react';
import WhatsAppButton from './WhatsAppButton';
import PopupTrigger from './PopupTrigger';

const WhyChooseUs = () => {
  const features = [
    {
      id: 1,
      title: "Career Acceleration",
      text: "Average salary hike of 45% within 12 months of graduation across all specialisations.",
      icon: Briefcase,
      highlighted: false,
    },
    {
      id: 2,
      title: "Flexible Learning",
      text: "Weekend and evening batches designed for working professionals. Study on your own schedule.",
      icon: Clock,
      highlighted: true,
    },
    {
      id: 3,
      title: "UGC-Recognised Degree",
      text: "Same recognition as a regular MBA degree. Valid for govt jobs, promotions, and abroad.",
      icon: GraduationCap,
      highlighted: false,
    },
    {
      id: 4,
      title: "Industry-Led Curriculum",
      text: "Updated every semester with inputs from 200+ industry partners and hiring companies.",
      icon: Globe,
      highlighted: false,
    },
    {
      id: 5,
      title: "Placement Support",
      text: "Dedicated placement cell, resume building, mock interviews, and direct job referrals.",
      icon: Handshake,
      highlighted: false,
    },
    {
      id: 6,
      title: "Cost Effective",
      text: "₹80K to ₹2.5L for a complete MBA — 70% cheaper than offline programs with equal ROI.",
      icon: Banknote,
      highlighted: false,
    },
  ];

  return (
    <section className="relative w-full bg-white py-16 md:py-24 px-4 sm:px-6 md:px-8 overflow-hidden">
      
      {/* Container */}
      <div className="max-w-7xl mx-auto space-y-12 md:space-y-16 relative z-10">
        
        {/* SECTION HEADER */}
        <div className="text-center space-y-3">
          <p className="text-[#C81E3D] text-[11px] sm:text-xs font-bold tracking-widest uppercase">
            Why Choose Us
          </p>
          <h2 className="text-3xl sm:text-4xl md:text-[40px] font-extrabold text-[#1E293B] tracking-tight leading-tight">
            What Makes an Online MBA Worth It?
          </h2>
          <p className="text-slate-500 text-sm sm:text-base font-medium max-w-xl mx-auto">
            Real benefits backed by real outcomes — not just promises.
          </p>
        </div>

        {/* FEATURES GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {features.map((item) => {
            const IconComponent = item.icon;
            return (
              <div
                key={item.id}
                className={`flex flex-col items-center text-center p-8 rounded-[24px] transition-all duration-300 ${
                  item.highlighted
                    ? "bg-white border border-[#C81E3D] shadow-lg shadow-red-700/5 relative -translate-y-1 md:-translate-y-2 scale-[1.01]"
                    : "bg-[#F8FAFC] border border-transparent hover:border-[#C81E3D] hover:bg-[#F1F5F9]/70"
                }`}
              >
                {/* Icon Container */}
                <div className="w-12 h-12 rounded-full bg-[#FFF1F2] flex items-center justify-center flex-shrink-0 mb-6">
                  <IconComponent className="text-[#C81E3D] w-5 h-5" />
                </div>

                {/* Title */}
                <h3 className="text-slate-800 font-extrabold text-lg mb-3">
                  {item.title}
                </h3>

                {/* Description */}
                <p className="text-slate-500 text-sm leading-relaxed font-medium">
                  {item.text}
                </p>
              </div>
            );
          })}
        </div>

        {/* CTA BUTTON */}
        <div className="flex justify-center pt-4">
          <PopupTrigger className="h-14 px-8 md:px-10 bg-[#C81E3D] hover:bg-[#B01A33] text-white font-extrabold rounded-full shadow-lg shadow-red-700/15 active:scale-[0.98] transition-all text-sm sm:text-base tracking-wide">
            Discover if Online MBA is Right for You
          </PopupTrigger>
        </div>

      </div>

      {/* Floating WhatsApp button */}
      <WhatsAppButton />

      {/* FLOATING PDF BADGE (Fixed Bottom-Left) */}
      <div className="fixed bottom-6 left-6 z-50">
        <div className="relative group cursor-pointer flex flex-col items-center">
          {/* Ripple rings */}
          <span className="absolute inset-0 rounded-full border-2 border-[#E11D48]/30 scale-110 animate-ping opacity-75"></span>
          
          <PopupTrigger className="flex flex-col items-center justify-center w-16 h-16 bg-white border border-rose-100 rounded-full shadow-xl hover:shadow-2xl transition-all group-hover:scale-105 active:scale-95 relative z-10">
            <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#E11D48]/10 to-[#C81E3D]/10 flex items-center justify-center mb-0.5">
              <Download size={18} className="text-[#C81E3D] group-hover:translate-y-0.5 transition-transform" />
            </div>
            <span className="text-[9px] font-black text-[#C81E3D] uppercase tracking-wider -mt-1 z-20">
              PDF
            </span>
          </PopupTrigger>
        </div>
      </div>

    </section>
  );
};

export default WhyChooseUs;
