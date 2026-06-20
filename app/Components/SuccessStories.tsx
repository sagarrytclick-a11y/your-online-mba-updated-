"use client";

import React from 'react';
import PopupTrigger from './PopupTrigger';

interface Testimonial {
  id: number;
  name: string;
  role: string;
  text: string;
  beforeLPA: string;
  afterLPA: string;
  jump: string;
  image: string;
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "Rahul Verma",
    role: "Sales Executive → MBA (Marketing)",
    text: "I was confused between multiple online MBA options. This platform helped me shortlist the right university within my budget.",
    beforeLPA: "₹4.5 LPA",
    afterLPA: "₹7.5 LPA",
    jump: "67% Career Jump",
    image: "https://i.pinimg.com/736x/cd/a7/08/cda708b9fcb2bfdc236c00ffd9fdff35.jpg"
  },
  {
    id: 2,
    name: "Priya Sharma",
    role: "HR Associate → MBA (HR)",
    text: "The flexible weekend batches let me upskill without quitting my job. Best decision of my career.",
    beforeLPA: "₹3.8 LPA",
    afterLPA: "₹6.2 LPA",
    jump: "63% Career Jump",
    image: "https://i.pinimg.com/736x/1a/5f/4f/1a5f4f37c7df3a498b87b62e62cfa05b.jpg"
  },
  {
    id: 3,
    name: "Amit Patel",
    role: "Data Analyst → MBA (Finance)",
    text: "The capstone project with real datasets gave me the confidence to switch into investment banking.",
    beforeLPA: "₹5.2 LPA",
    afterLPA: "₹9.8 LPA",
    jump: "88% Career Jump",
    image: "https://i.pinimg.com/736x/89/4b/ff/894bff75c0b4ef5f34c9914377d13185.jpg"
  },
  {
    id: 4,
    name: "Sunita Reddy",
    role: "Operations Lead → MBA (Operations)",
    text: "UGC-approved degree with placement support — I got three job offers before graduation.",
    beforeLPA: "₹4.1 LPA",
    afterLPA: "₹7.0 LPA",
    jump: "71% Career Jump",
    image: "https://i.pinimg.com/736x/0c/5c/7c/0c5c7c78ee84c4097023b1adcd950b06.jpg"
  },
  {
    id: 5,
    name: "Vikram Singh",
    role: "Team Lead → MBA (IT)",
    text: "From a mid-level IT role to a product manager at a top startup. The mentorship was invaluable.",
    beforeLPA: "₹6.0 LPA",
    afterLPA: "₹11.5 LPA",
    jump: "92% Career Jump",
    image: "https://i.pinimg.com/1200x/56/60/ea/5660eaf6551e460fe8809ce94f6f8d97.jpg"
  },
  {
    id: 6,
    name: "Neha Gupta",
    role: "Marketing Coordinator → MBA (Marketing)",
    text: "The industry mentors helped me crack a brand manager role at a leading FMCG company.",
    beforeLPA: "₹3.5 LPA",
    afterLPA: "₹6.8 LPA",
    jump: "94% Career Jump",
    image: "https://i.pinimg.com/736x/83/48/80/83488035f3803f0bc8a7d0d94c438535.jpg"
  },
];

const SuccessStories = () => {
  const duplicatedTestimonials = [...testimonials, ...testimonials, ...testimonials];

  return (
    <section className="relative w-full bg-white py-16 md:py-24 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 mb-12 md:mb-16 text-center space-y-3">
        <p className="text-[#C81E3D] text-[11px] sm:text-xs font-bold tracking-widest uppercase">
          Success Stories
        </p>
        <h2 className="text-3xl sm:text-4xl md:text-[40px] font-extrabold text-[#1E293B] tracking-tight leading-tight">
          Where Careers Take the Next Leap
        </h2>
        <p className="text-slate-500 text-sm sm:text-base font-medium max-w-xl mx-auto">
          Real stories from real graduates, no fabrication.
        </p>
      </div>

      <div className="relative overflow-hidden">
        <div className="flex gap-6 w-max animate-scroll">
          {duplicatedTestimonials.map((item, idx) => (
            <div
              key={idx}
              className="w-[350px] md:w-[400px] bg-[#F8FAFC] border border-gray-100 rounded-[20px] p-8 flex flex-col justify-between hover:border-[#C81E3D]/30 hover:shadow-md transition-all duration-300"
            >
              <div>
                <div className="flex text-yellow-500 mb-4 text-lg tracking-[3px]">
                  {"★".repeat(5)}
                </div>
                <p className="text-[#475569] italic leading-relaxed text-sm">
                  &ldquo;{item.text}&rdquo;
                </p>
              </div>

              <div className="flex items-center gap-4 mt-8 border-t border-gray-100 pt-6">
                <div className="w-12 h-12 rounded-full overflow-hidden flex-shrink-0">
                  <img src={item.image} alt={item.name} className="w-full h-full object-cover" />
                </div>
                <div>
                  <h3 className="text-[#1E293B] font-bold text-sm">{item.name}</h3>
                  <p className="text-[#94A3B8] text-xs font-medium">{item.role}</p>
                </div>
              </div>

              <div className="mt-6">
                <div className="flex justify-between text-xs font-bold mb-2">
                  <span className="text-[#94A3B8]">{item.beforeLPA}</span>
                  <span className="text-[#C81E3D]">{item.afterLPA}</span>
                </div>
                <div className="h-1.5 w-full bg-gray-100 rounded-full overflow-hidden">
                  <div className="h-full bg-gradient-to-r from-[#C81E3D] to-[#C81E3D]/60 rounded-full" />
                </div>
                <p className="text-[#C81E3D] text-[10px] mt-2 font-bold tracking-wider">
                  ↗ {item.jump}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="flex justify-center mt-12 md:mt-16">
        <PopupTrigger className="h-14 px-8 bg-[#C81E3D] hover:bg-[#B01A33] text-white font-extrabold rounded-full shadow-lg shadow-red-700/15 active:scale-[0.98] transition-all text-sm sm:text-base tracking-wide">
          Start Your Success Story Today
        </PopupTrigger>
      </div>

      <style>{`
        @keyframes scroll {
          0% { transform: translateX(0); }
          100% { transform: translateX(-33.33%); }
        }
        .animate-scroll {
          animation: scroll 30s linear infinite;
        }
      `}</style>
    </section>
  );
};

export default SuccessStories;
