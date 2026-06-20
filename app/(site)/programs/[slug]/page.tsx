import React from 'react';
import Link from 'next/link';
import type { Metadata } from 'next';
import * as Icons from 'lucide-react';
import { programs } from '../../../data/programs';
import { notFound } from 'next/navigation';
import PopupTrigger from '../../../Components/PopupTrigger';

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return programs.map((p) => ({
    slug: p.slug,
  }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const prog = programs.find(p => p.slug === slug);
  if (!prog) return { title: "Program Not Found" };
  return {
    title: `${prog.title} - Online MBA Program Details, Duration & Career Scope`,
    description: `Explore ${prog.title} online MBA program: ${prog.duration}, ${prog.format}. ${prog.description.slice(0, 150)}. Get free counselling.`,
    alternates: { canonical: `https://youronlinemba.com/programs/${slug}` },
    openGraph: {
      title: `${prog.title} - Online MBA Program`,
      description: prog.description.slice(0, 160),
    },
  };
}

export default async function ProgramPage({ params }: PageProps) {
  const { slug } = await params;
  const activeProgram = programs.find(p => p.slug === slug);

  if (!activeProgram) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-white font-sans text-[#1E293B] flex flex-col">

      {/* ========================================================================= */}
      {/* 1. HERO HEADER SECTION (FIXED UPPER SECTION - Image 1) */}
      {/* ========================================================================= */}
      <section className="w-full bg-gradient-to-b from-[#FFF1F2]/40 to-white py-12 md:py-16 px-4 sm:px-6 lg:px-8 text-center border-b border-gray-100 relative">
        <div className="max-w-4xl mx-auto space-y-6">
          
          {/* Breadcrumbs */}
          <div className="flex items-center justify-center gap-2 text-xs sm:text-sm font-bold text-[#C81E3D] uppercase tracking-wider">
            <Link href="/" className="hover:underline">Home</Link>
            <span>/</span>
            <span className="text-slate-500">Programs</span>
          </div>

          {/* Main Hero Headline */}
          <h1 className="text-2xl sm:text-5xl md:text-6xl font-black text-[#C81E3D] leading-tight tracking-tight">
            Discover the Right<br />Program for Your Future
          </h1>

          {/* Subtitles */}
          <div className="space-y-2 max-w-2xl mx-auto">
            <p className="text-slate-800 text-sm sm:text-base md:text-lg font-bold">
              Learn from top universities with flexible, career focused programs.
            </p>
            <p className="text-slate-500 text-xs sm:text-sm md:text-base font-semibold">
              Earn industry recognized degrees and certifications online, at your own pace.
            </p>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
            <PopupTrigger className="h-14 px-10 bg-[#C81E3D] hover:bg-[#B01A33] text-white font-extrabold rounded-full shadow-lg shadow-red-700/15 active:scale-[0.98] transition-all text-sm sm:text-base tracking-wide uppercase">
              Talk to an Expert
            </PopupTrigger>
            <button className="h-14 px-10 bg-white border border-gray-200 hover:bg-gray-50 text-slate-800 font-extrabold rounded-full transition-all active:scale-[0.98] text-sm sm:text-base tracking-wide uppercase shadow-sm">
              Explore Programs
            </button>
          </div>

          {/* 3 Trust Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-8 max-w-3xl mx-auto">
            <div className="bg-white p-5 rounded-[20px] shadow-lg shadow-slate-100 border border-gray-50/50">
              <span className="block text-slate-800 font-black text-lg md:text-xl">120+ Programs</span>
              <span className="text-[10px] md:text-xs font-bold text-slate-400 mt-1 block">UG, PG & Professional Courses</span>
            </div>
            <div className="bg-white p-5 rounded-[20px] shadow-lg shadow-slate-100 border border-gray-50/50">
              <span className="block text-slate-800 font-black text-lg md:text-xl">Personalized Counselling</span>
              <span className="text-[10px] md:text-xs font-bold text-slate-400 mt-1 block">Based on profile & goals</span>
            </div>
            <div className="bg-white p-5 rounded-[20px] shadow-lg shadow-slate-100 border border-gray-50/50">
              <span className="block text-slate-800 font-black text-lg md:text-xl">95% Success Rate</span>
              <span className="text-[10px] md:text-xs font-bold text-slate-400 mt-1 block">Students placed in top programs</span>
            </div>
          </div>

        </div>

        {/* Alternate Trust Bar */}
        <div className="max-w-7xl mx-auto mt-12 pt-6 border-t border-gray-100 flex flex-wrap justify-center items-center gap-x-8 gap-y-3 px-4 text-xs sm:text-sm font-bold text-slate-700">
          <div className="flex items-center gap-2">
            <Icons.CheckCircle2 className="text-slate-800 w-5 h-5 flex-shrink-0" />
            <span>UGC-Entitled Online Degrees</span>
          </div>
          <div className="flex items-center gap-2">
            <Icons.CheckCircle2 className="text-[#C81E3D] w-5 h-5 flex-shrink-0" />
            <span>Valid as Regular Campus Programs</span>
          </div>
          <div className="flex items-center gap-2">
            <Icons.CheckCircle2 className="text-slate-800 w-5 h-5 flex-shrink-0" />
            <span>Industry-Recognized Certifications</span>
          </div>
          <div className="flex items-center gap-2">
            <Icons.CheckCircle2 className="text-[#C81E3D] w-5 h-5 flex-shrink-0" />
            <span>Guided by Education Experts</span>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 2. PROGRAM NAVIGATION PILLS (FIXED MIDDLE SECTION - Image 2) */}
      {/* ========================================================================= */}
      <section className="w-full py-12 bg-[#FAFAFA] border-b border-gray-100 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto text-center space-y-8">
          <div className="space-y-2">
            <h2 className="text-3xl font-extrabold text-[#C81E3D]">Explore Our Programs</h2>
            <p className="text-slate-500 text-sm font-semibold">Select a category to see best matched programs</p>
          </div>

          {/* Navigation Pills list */}
          <div className="flex flex-wrap justify-center gap-3 max-w-5xl mx-auto">
            {programs.map((p) => {
              const isActive = p.slug === activeProgram.slug;
              return (
                <Link
                  key={p.slug}
                  href={`/programs/${p.slug}`}
                  className={`px-5 py-3 rounded-full text-xs sm:text-sm font-bold shadow-sm transition-all block ${
                    isActive
                      ? "bg-[#C81E3D] text-white border border-[#C81E3D] hover:bg-[#B01A33]"
                      : "bg-white text-slate-700 border border-gray-200 hover:border-[#C81E3D]/30"
                  }`}
                >
                  {p.title}
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 3. DYNAMIC CONTENT SECTION (CHANGES BY SLUG - Image 3 & 4) */}
      {/* ========================================================================= */}
      <section className="w-full py-16 md:py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto space-y-12">
          
          {/* Active Program Header */}
          <div className="space-y-4">
            <h2 className="text-2xl sm:text-4xl md:text-5xl font-black text-[#C81E3D] tracking-tight leading-none">
              {activeProgram.title}
            </h2>
            <p className="text-slate-500 text-sm sm:text-base md:text-lg font-semibold max-w-3xl leading-relaxed">
              {activeProgram.description}
            </p>
          </div>

          {/* Stats Bar */}
          <div className="flex flex-col md:flex-row md:items-center gap-x-10 gap-y-4 py-6 border-y border-gray-100 text-sm font-bold text-slate-800">
            <div className="flex items-center gap-2">
              <Icons.Clock className="text-slate-700 w-5 h-5 flex-shrink-0" />
              <span>Duration: {activeProgram.duration}</span>
            </div>
            <div className="hidden md:block w-px h-5 bg-gray-200" />
            <div className="flex items-center gap-2">
              <Icons.Monitor className="text-slate-700 w-5 h-5 flex-shrink-0" />
              <span>Format: {activeProgram.format}</span>
            </div>
            <div className="hidden md:block w-px h-5 bg-gray-200" />
            <div className="flex items-center gap-2">
              <Icons.Briefcase className="text-slate-700 w-5 h-5 flex-shrink-0" />
              <span>Career Roles: {activeProgram.careerOutcomes.join(", ")}</span>
            </div>
          </div>

          {/* Sub-tags / Badges (alternating style) */}
          <div className="flex flex-wrap gap-3">
            {activeProgram.highlights.map((tag, idx) => {
              const isEven = idx % 2 === 0;
              return (
                <span
                  key={idx}
                  className={`px-5 py-2.5 rounded-full text-xs font-bold border ${
                    isEven
                      ? "bg-slate-50 text-slate-700 border-gray-100"
                      : "bg-[#FFF1F2] text-[#C81E3D] border-[#C81E3D]/10"
                  }`}
                >
                  {tag}
                </span>
              );
            })}
          </div>

          {/* Check Eligibility Red Button */}
          <div className="pt-2">
            <PopupTrigger className="h-14 px-8 bg-[#C81E3D] hover:bg-[#B01A33] text-white font-extrabold rounded-[14px] shadow-lg shadow-red-700/15 active:scale-[0.98] transition-all text-xs sm:text-sm tracking-widest uppercase">
              Check Eligibility for {activeProgram.title}
            </PopupTrigger>
          </div>

          {/* Specific Course Cards Grid (Image 4) */}
          <div className="pt-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {activeProgram.subPrograms.map((sub, idx) => {
                const words = sub.university.split(" ");
                return (
                  <div key={idx} className="bg-white rounded-[24px] overflow-hidden border border-gray-150 flex flex-col shadow-sm hover:shadow-md transition-all">
                    
                    {/* Course Card Top Image */}
                    <div className="relative h-44 w-full bg-slate-50">
                      <img
                        src={sub.imageUrl}
                        alt={sub.title}
                        className="object-cover w-full h-full opacity-90"
                      />
                      {/* University Logo Box */}
                      <div className="absolute top-4 left-4 z-20 bg-white px-3 py-1 rounded-[10px] shadow-md border border-gray-100 flex items-center justify-center">
                        <span className="text-[#C81E3D] font-extrabold text-[10px] uppercase tracking-wider">
                          {words.map(w => w[0]).slice(0, 3).join("")}
                        </span>
                      </div>
                    </div>

                    {/* Course Card Details */}
                    <div className="p-6 flex flex-col flex-grow space-y-4">
                      <h4 className="text-[#1E293B] font-extrabold text-base md:text-lg leading-snug line-clamp-2 min-h-[48px]">
                        {sub.title}
                      </h4>

                      <div className="space-y-2 text-slate-500 text-xs font-bold">
                        <div className="flex items-center gap-2">
                          <Icons.GraduationCap className="text-[#C81E3D] w-4 h-4" />
                          <span>{sub.university}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <Icons.Clock className="text-[#C81E3D] w-4 h-4" />
                          <span>{sub.duration}</span>
                        </div>
                      </div>

                      <PopupTrigger className="mt-auto w-full h-11 bg-[#D15B6F] hover:bg-[#C81E3D] text-white font-extrabold rounded-[12px] text-xs transition-all active:scale-[0.98]">
                        View Program
                      </PopupTrigger>
                    </div>

                  </div>
                );
              })}
            </div>
          </div>

        </div>
      </section>

      {/* ========================================================================= */}
      {/* 4. ADVISOR CALLOUT FOOTER (FIXED LOWER SECTION - Image 5) */}
      {/* ========================================================================= */}
      <section className="bg-white py-16 px-4 text-center">
        <div className="max-w-4xl mx-auto bg-[#F8FAFC]/50 border border-gray-100 rounded-[2rem] p-10 md:p-12 shadow-sm">
          <div className="space-y-6 max-w-2xl mx-auto flex flex-col items-center">
            
            <div className="space-y-2 text-center">
              <h3 className="text-2xl md:text-3xl font-black text-[#C81E3D]">
                Not sure which program fits your goals?
              </h3>
              <p className="text-slate-500 text-xs sm:text-sm font-semibold">
                Get expert guidance based on your experience, budget, and career goals.
              </p>
            </div>

            <PopupTrigger className="h-14 px-8 bg-[#C81E3D] hover:bg-[#B01A33] text-white font-extrabold rounded-full shadow-lg shadow-red-700/15 active:scale-[0.98] transition-all text-xs sm:text-sm tracking-wider uppercase">
              Get Personalized Program Recommendation
            </PopupTrigger>

            <span className="text-[10px] text-slate-400 font-bold uppercase tracking-wider block">
              Free guidance
            </span>

          </div>
        </div>
      </section>

    </div>
  );
}
