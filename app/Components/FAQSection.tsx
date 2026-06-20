"use client";

import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import PopupTrigger from './PopupTrigger';

interface FAQItem {
  question: string;
  answer: string;
}

const faqs: FAQItem[] = [
  {
    question: "What exactly does an online MBA program offer?",
    answer: "An online MBA offers the same curriculum as a full-time program, including leadership training, networking opportunities, and specialized tracks, but with the flexibility to learn from anywhere."
  },
  {
    question: "What is the typical duration to complete an online MBA?",
    answer: "Most programs range from 12 to 24 months, depending on whether you choose an accelerated track or a part-time pace."
  },
  {
    question: "Which are the leading Indian colleges providing online MBA courses?",
    answer: "Top institutions include IIM Ahmedabad, IIM Kozhikode, NMIMS Global, and Amity Online, all offering UGC-entitled degrees."
  },
  {
    question: "What qualifications do you need to join an online MBA program?",
    answer: "Generally, you need a Bachelor's degree from a recognized university. Some top-tier programs also require 2-3 years of work experience."
  },
  {
    question: "Is the value of an online MBA comparable to a traditional MBA?",
    answer: "Yes, as long as the program is UGC-DEB approved, it holds the same legal value for government and private sector jobs."
  }
];

const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="relative w-full bg-white py-16 md:py-24 px-4 sm:px-6 md:px-8">
      <div className="max-w-3xl mx-auto space-y-12 md:space-y-16">

        <div className="text-center space-y-3">
          <p className="text-[#C81E3D] text-[11px] sm:text-xs font-bold tracking-widest uppercase">
            Frequently Asked Questions
          </p>
          <h2 className="text-3xl sm:text-4xl md:text-[40px] font-extrabold text-[#1E293B] tracking-tight leading-tight">
            We&apos;ve Got Answers
          </h2>
          <p className="text-slate-500 text-sm sm:text-base font-medium max-w-xl mx-auto">
            Everything you need to confidently take your next career step.
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={index}
                className={`border rounded-[16px] transition-all duration-300 ${
                  isOpen
                    ? 'border-[#C81E3D]/30 bg-[#FFF1F2] shadow-sm'
                    : 'border-gray-100 bg-[#F8FAFC] hover:border-gray-200'
                }`}
              >
                <button
                  onClick={() => setOpenIndex(isOpen ? null : index)}
                  className="w-full flex items-center justify-between p-5 text-left gap-4"
                >
                  <span className={`font-bold text-sm md:text-base transition-colors ${
                    isOpen ? 'text-[#C81E3D]' : 'text-[#1E293B]'
                  }`}>
                    {faq.question}
                  </span>
                  <ChevronDown className={`w-5 h-5 flex-shrink-0 transition-all duration-300 ${
                    isOpen ? 'rotate-180 text-[#C81E3D]' : 'text-[#94A3B8]'
                  }`} />
                </button>

                <div
                  className={`overflow-hidden transition-all duration-300 ease-in-out ${
                    isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                  }`}
                >
                  <div className="px-5 pb-5 pt-0 text-[#475569] text-sm leading-relaxed border-t border-[#C81E3D]/10 mt-2 pt-4">
                    {faq.answer}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        <div className="text-center space-y-6">
          <p className="text-slate-500 text-sm font-medium">
            Still have questions?
          </p>
          <PopupTrigger className="h-14 px-10 bg-[#C81E3D] hover:bg-[#B01A33] text-white font-extrabold rounded-full shadow-lg shadow-red-700/15 active:scale-[0.98] transition-all text-sm sm:text-base tracking-wide">
            Talk to an Advisor Now
          </PopupTrigger>
        </div>

      </div>
    </section>
  );
};

export default FAQSection;
