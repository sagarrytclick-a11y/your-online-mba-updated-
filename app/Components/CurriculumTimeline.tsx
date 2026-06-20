import React from 'react';
import PopupTrigger from './PopupTrigger';

interface TimelineItem {
  title: string;
  description: string;
  icon: string;
}

const curriculumData: TimelineItem[] = [
  { title: "Foundation & Setup", description: "Master core business fundamentals including accounting, economics, and organizational behavior.", icon: "📘" },
  { title: "Core Curriculum", description: "Deep dive into Marketing, Finance, Operations, and Strategic Management.", icon: "🎯" },
  { title: "Specialization Track", description: "Modules tailored to your chosen path — HR, IT, Analytics, or International Business.", icon: "⭐" },
  { title: "Industry Capstone", description: "Live projects with real datasets from hiring partners and industry mentors.", icon: "🚀" },
  { title: "Placement Ready", description: "Executive resume building, mock interviews, and direct job referrals.", icon: "🏆" },
];

const CurriculumTimeline = () => {
  return (
    <section className="relative w-full bg-white py-16 md:py-24 px-4 sm:px-6 md:px-8">
      <div className="max-w-5xl mx-auto space-y-12 md:space-y-16 relative z-10">

        <div className="text-center space-y-3">
          <p className="text-[#C81E3D] text-[11px] sm:text-xs font-bold tracking-widest uppercase">
            Curriculum
          </p>
          <h2 className="text-3xl sm:text-4xl md:text-[40px] font-extrabold text-[#1E293B] tracking-tight leading-tight">
            Skills You&apos;ll Master
          </h2>
          <p className="text-slate-500 text-sm sm:text-base font-medium max-w-xl mx-auto">
            Industry-validated curriculum designed for the modern manager.
          </p>
        </div>

        <div className="relative">
          <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-gradient-to-b from-[#C81E3D] via-[#C81E3D]/60 to-[#C81E3D]" />

          <div className="space-y-12">
            {curriculumData.map((item, index) => {
              const isEven = index % 2 === 0;
              return (
                <div key={index} className={`flex items-center w-full ${isEven ? 'flex-row' : 'flex-row-reverse'}`}>
                  <div className="w-[45%]">
                    <div className={`bg-[#F8FAFC] border border-gray-100 p-6 rounded-[20px] transition-all duration-300 hover:border-[#C81E3D]/30 hover:shadow-md hover:-translate-y-0.5 group ${isEven ? 'text-left' : 'text-right'}`}>
                      <div className={`flex items-center gap-3 ${isEven ? '' : 'flex-row-reverse'}`}>
                        <span className="text-xl">{item.icon}</span>
                        <h3 className="text-[#1E293B] font-bold text-lg">{item.title}</h3>
                      </div>
                      <p className={`text-slate-500 text-sm mt-2 font-medium ${isEven ? 'text-left' : 'text-right'}`}>
                        {item.description}
                      </p>
                    </div>
                  </div>

                  <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 rounded-full bg-white border-2 border-[#C81E3D] z-10 shadow-[0_0_0_4px_rgba(200,30,61,0.15)]" />

                  <div className="w-[45%]" />
                </div>
              );
            })}
          </div>
        </div>

        <div className="flex justify-center pt-4">
          <PopupTrigger className="h-14 px-8 bg-[#C81E3D] hover:bg-[#B01A33] text-white font-extrabold rounded-full shadow-lg shadow-red-700/15 active:scale-[0.98] transition-all text-sm sm:text-base tracking-wide">
            Get the Complete Syllabus Guide
          </PopupTrigger>
        </div>

      </div>
    </section>
  );
};

export default CurriculumTimeline;
