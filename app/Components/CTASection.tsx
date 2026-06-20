"use client";
import React from 'react';
import { Phone } from 'lucide-react';
import { usePopupForm } from '../context/PopupFormContext';

const CTASection = () => {
  const { open } = usePopupForm();
  return (
    <section className="px-4 sm:px-6 py-12 md:py-16">
      <div className="max-w-7xl mx-auto overflow-hidden rounded-[2rem] bg-gradient-to-r from-[#C81E3D] to-[#B01A33] relative">
        
        <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl -mr-20 -mt-20" />
        <div className="absolute bottom-0 left-0 w-48 h-48 bg-black/10 rounded-full blur-2xl -ml-10 -mb-10" />

        <div className="relative z-10 py-16 px-8 flex flex-col items-center text-center">
          <h2 className="text-[#F8FAFC] text-3xl md:text-4xl font-bold mb-4">
            Upgrade Your Career with an Online MBA
          </h2>
          
          <p className="text-[#F8FAFC]/90 text-sm md:text-base mb-10 max-w-2xl">
            Compare top universities, ROI & specializations — free expert guidance.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
            <button onClick={open} className="flex items-center justify-center gap-2 bg-[#F8FAFC] text-[#C81E3D] font-bold px-8 py-4 rounded-full transition-all hover:bg-[#F8FAFC]/90 hover:scale-105 active:scale-95 shadow-lg">
              <Phone size={18} fill="currentColor" />
              Talk to Expert
            </button>

            <button onClick={open} className="flex items-center justify-center gap-2 border-2 border-[#F8FAFC] text-[#F8FAFC] font-bold px-8 py-4 rounded-full transition-all hover:bg-[#F8FAFC]/10 hover:scale-105 active:scale-95">
              Free Guidance 
              <span className="text-xl">→</span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
