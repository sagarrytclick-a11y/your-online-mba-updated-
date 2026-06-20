import React from 'react';
import { Landmark, Megaphone, BarChart3, Users, Link2, Monitor, Settings, Globe } from 'lucide-react';
import PopupTrigger from './PopupTrigger';

const CareerOptionsSection = () => {

  const stats = [
    { value: "40%+", label: "Avg. Salary Hike" },
    { value: "₹18 LPA", label: "Highest Package" },
    { value: "85%+", label: "Placement Rate" }
  ];

  const careers = [
    {
      title: "Finance Manager",
      icon: Landmark,
      growth: "+ 35% growth",
      salary: "₹8-22 LPA",
      highlighted: false
    },
    {
      title: "Marketing Head",
      icon: Megaphone,
      growth: "+ 30% growth",
      salary: "₹6-18 LPA",
      highlighted: false
    },
    {
      title: "Business Analyst",
      icon: BarChart3,
      growth: "+ 35% growth",
      salary: "₹9-22 LPA",
      highlighted: false
    },
    {
      title: "HR Manager",
      icon: Users,
      growth: "+ 20% growth",
      salary: "₹6-15 LPA",
      highlighted: false
    },
    {
      title: "Supply Chain Manager",
      icon: Link2,
      growth: "+ 28% growth",
      salary: "₹8-16 LPA",
      highlighted: false
    },
    {
      title: "Data Analytics Manager",
      icon: Monitor,
      growth: "+ 40% growth",
      salary: "₹10-25 LPA",
      highlighted: false
    },
    {
      title: "Operations Director",
      icon: Settings,
      growth: "+ 22% growth",
      salary: "₹8-20 LPA",
      highlighted: false
    },
    {
      title: "International Trade Manager",
      icon: Globe,
      growth: "+ 18% growth",
      salary: "₹8-18 LPA",
      highlighted: true
    }
  ];

  return (
    <section className="relative w-full bg-white py-16 md:py-24 px-4 sm:px-6 md:px-8">
      <div className="max-w-7xl mx-auto space-y-12 md:space-y-16 relative z-10">

        {/* Header */}
        <div className="text-center space-y-3">
          <p className="text-[#C81E3D] text-[11px] sm:text-xs font-bold tracking-widest uppercase">
            After MBA
          </p>
          <h2 className="text-3xl sm:text-4xl md:text-[40px] font-extrabold text-[#1E293B] tracking-tight leading-tight">
            Career Options After Online MBA
          </h2>
          <p className="text-slate-500 text-sm sm:text-base font-medium max-w-xl mx-auto">
            Where our graduates are working today.
          </p>
        </div>

        {/* Stats Row */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 max-w-3xl mx-auto">
          {stats.map((stat, idx) => (
            <div
              key={idx}
              className="bg-gradient-to-r from-[#1E293B] to-[#334155] rounded-[16px] p-5 text-center text-white"
            >
              <p className="text-2xl sm:text-3xl font-black tracking-tight">{stat.value}</p>
              <p className="text-[10px] sm:text-xs font-bold uppercase tracking-wider opacity-75 mt-1">{stat.label}</p>
            </div>
          ))}
        </div>

        {/* Career Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 md:gap-6">
          {careers.map((career, idx) => {
            const IconComponent = career.icon;
            return (
              <div
                key={idx}
                className={`bg-white rounded-[20px] p-6 transition-all duration-300 ${career.highlighted
                    ? "border-2 border-[#C81E3D] shadow-lg shadow-red-700/5 -translate-y-1"
                    : "border border-gray-100 shadow-sm hover:shadow-md hover:-translate-y-1 hover:border-[#C81E3D]"
                  }`}
              >
                {/* Icon + Title Row */}
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-9 h-9 rounded-[10px] bg-[#FFF1F2] flex items-center justify-center flex-shrink-0">
                    <IconComponent className="text-[#C81E3D] w-4 h-4" />
                  </div>
                  <h4 className="text-slate-800 font-bold text-sm leading-tight">{career.title}</h4>
                </div>

                {/* Divider */}
                <div className="h-[2px] w-10 bg-[#C81E3D] rounded-full mb-3"></div>

                {/* Growth */}
                <p className="text-[11px] text-emerald-600 font-bold mb-1">{career.growth}</p>

                {/* Salary */}
                <p className="text-[#C81E3D] font-extrabold text-sm">{career.salary}</p>
              </div>
            );
          })}
        </div>

        {/* Disclaimer */}
        <p className="text-center text-[11px] text-slate-400 font-medium">
          Salaries based on LPA. Data sourced from 2025 placement reports.
        </p>

        {/* CTA Button */}
        <div className="flex justify-center">
          <PopupTrigger className="h-14 px-8 bg-[#C81E3D] hover:bg-[#B01A33] text-white font-extrabold rounded-full shadow-lg shadow-red-700/15 active:scale-[0.98] transition-all text-sm sm:text-base tracking-wide">
            Unlock Your Dream Career Plan
          </PopupTrigger>
        </div>

      </div>
    </section>
  );
};

export default CareerOptionsSection;
