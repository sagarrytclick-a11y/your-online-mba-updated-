import React from 'react';
import Link from 'next/link';
import type { Metadata } from 'next';
import * as Icons from 'lucide-react';
import { specialisations, getSpecialisationBySlug } from '../../../data/specialisations';
import { notFound } from 'next/navigation';
import PopupTrigger from '../../../Components/PopupTrigger';
import WhatsAppButton from '../../../Components/WhatsAppButton';

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return specialisations.map((spec) => ({
    slug: spec.slug,
  }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const spec = getSpecialisationBySlug(slug);
  if (!spec) return { title: "Specialisation Not Found" };
  return {
    title: `${spec.title} - Online MBA Specialisation, Fees, Scope & Salary`,
    description: `Explore ${spec.title} online MBA: ${spec.overview.slice(0, 150)}. Avg salary ${spec.salaryRange}, ${spec.universitiesCount} universities, ${spec.duration}. Get free counselling.`,
    alternates: { canonical: `https://youronlinemba.com/specialisations/${slug}` },
    openGraph: {
      title: `${spec.title} - Online MBA Specialisation`,
      description: `Avg salary ${spec.salaryRange} | ${spec.universitiesCount} universities offering this specialisation.`,
    },
  };
}

export default async function SpecialisationPage({ params }: PageProps) {
  const { slug } = await params;
  const spec = getSpecialisationBySlug(slug);

  if (!spec) {
    notFound();
  }

  // Get current specialization theme styles
  const themeStyles = {
    rose: { bg: 'bg-[#FFF1F2]', text: 'text-[#C81E3D]' },
    emerald: { bg: 'bg-[#ECFDF5]', text: 'text-[#10B981]' },
    violet: { bg: 'bg-[#F5F3FF]', text: 'text-[#8B5CF6]' },
    blue: { bg: 'bg-[#EFF6FF]', text: 'text-[#3B82F6]' },
    amber: { bg: 'bg-[#FFF7ED]', text: 'text-[#F97316]' },
    teal: { bg: 'bg-[#F0FDFA]', text: 'text-[#14B8A6]' }
  };

  const theme = themeStyles[spec.colorTheme] || themeStyles.rose;
  const otherSpecs = specialisations.filter(s => s.slug !== slug);

  return (
    <div className="min-h-screen bg-white flex flex-col">

      {/* 1. RED HERO BANNER */}
      <section className="w-full bg-[#C81E3D] text-white py-12 md:py-16 px-4 sm:px-6 md:px-8 relative overflow-hidden">
        {/* Background Subtle Elements */}
        <div className="absolute top-0 right-0 translate-x-24 -translate-y-24 w-96 h-96 bg-white/5 rounded-full pointer-events-none"></div>
        <div className="absolute bottom-0 left-0 -translate-x-12 translate-y-12 w-64 h-64 bg-black/5 rounded-full pointer-events-none"></div>

        <div className="max-w-7xl mx-auto space-y-6 md:space-y-8 relative z-10 text-center">
          {/* Breadcrumbs */}
          <div className="flex items-center justify-center gap-2 text-xs sm:text-sm font-semibold opacity-90">
            <Link href="/" className="hover:underline flex items-center gap-1">
              <Icons.Home size={13} />
              <span>Home</span>
            </Link>
            <span>/</span>
            <span className="opacity-75">{spec.title}</span>
          </div>

          {/* Title */}
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight leading-tight max-w-4xl mx-auto">
            {spec.title}
          </h1>

          {/* Meta Info Row */}
          <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-sm sm:text-base font-bold opacity-95">
            <span>{spec.duration}</span>
            <span className="w-1.5 h-1.5 rounded-full bg-white/65"></span>
            <span>Online</span>
            <span className="w-1.5 h-1.5 rounded-full bg-white/65"></span>
            <span>{spec.universitiesCount} Universities</span>
          </div>

          {/* Placement & Salary Row */}
          <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-sm sm:text-base font-bold text-rose-100">
            <span>Placement: {spec.placementRate}</span>
            <span className="w-1.5 h-1.5 rounded-full bg-rose-200/50"></span>
            <span>Avg Salary: {spec.salaryRange}</span>
          </div>

          {/* CTA Button */}
          <div className="pt-2">
            <PopupTrigger className="px-8 py-3.5 border-2 border-white hover:bg-white hover:text-[#C81E3D] font-extrabold text-white rounded-full transition-all duration-300 shadow-md active:scale-[0.98] text-sm sm:text-base tracking-wide">
              Get Free Counselling
            </PopupTrigger>
          </div>

          {/* Bottom Subtitle */}
          <p className="text-xs sm:text-sm font-semibold opacity-85">
            Trusted by 1,00,000+ learners &bull; Admissions Open
          </p>
        </div>
      </section>

      {/* 2. MAIN CONTENT GRID */}
      <section className="w-full py-12 md:py-16 px-4 sm:px-6 md:px-8">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8 md:gap-12 items-start">

          {/* LEFT COLUMN - 8 Columns */}
          <div className="lg:col-span-8 space-y-10 md:space-y-12">

            {/* Program Overview */}
            <div className="space-y-4">
              <h2 className="text-[#C81E3D] font-extrabold text-xl md:text-2xl border-b border-rose-100 pb-2">
                Program Overview
              </h2>
              <p className="text-slate-600 text-sm sm:text-base leading-relaxed font-medium">
                {spec.overview}
              </p>
            </div>

            {/* Why This Specialization */}
            <div className="space-y-4">
              <h2 className="text-[#C81E3D] font-extrabold text-xl md:text-2xl border-b border-rose-100 pb-2">
                Why This Specialization
              </h2>
              <p className="text-slate-600 text-sm sm:text-base leading-relaxed font-medium">
                {spec.whyChoose}
              </p>
            </div>

            {/* Key Course Information */}
            <div className="space-y-6">
              <h2 className="text-[#C81E3D] font-extrabold text-xl md:text-2xl border-b border-rose-100 pb-2">
                Key Course Information
              </h2>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-2">

                {/* Eligibility */}
                <div className="flex gap-4">
                  <div className="w-10 h-10 rounded-full bg-[#FFF1F2] flex items-center justify-center flex-shrink-0">
                    <Icons.GraduationCap className="text-[#C81E3D] w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="font-extrabold text-slate-800 text-sm mb-1">Eligibility</h3>
                    <p className="text-slate-600 text-xs font-semibold leading-relaxed">
                      {spec.eligibility}
                    </p>
                  </div>
                </div>

                {/* Entrance Exam */}
                <div className="flex gap-4">
                  <div className="w-10 h-10 rounded-full bg-[#FFF1F2] flex items-center justify-center flex-shrink-0">
                    <Icons.HelpCircle className="text-[#C81E3D] w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="font-extrabold text-slate-800 text-sm mb-1">Entrance Exam</h3>
                    <p className="text-slate-600 text-xs font-semibold leading-relaxed">
                      {spec.entranceExam}
                    </p>
                  </div>
                </div>

                {/* EMI Facility */}
                <div className="flex gap-4">
                  <div className="w-10 h-10 rounded-full bg-[#FFF1F2] flex items-center justify-center flex-shrink-0">
                    <Icons.CreditCard className="text-[#C81E3D] w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="font-extrabold text-slate-800 text-sm mb-1">EMI Facility</h3>
                    <p className="text-slate-600 text-xs font-semibold leading-relaxed">
                      {spec.emiAvailable ? "Available" : "Not Available"}
                    </p>
                  </div>
                </div>

                {/* Course Cost */}
                <div className="flex gap-4">
                  <div className="w-10 h-10 rounded-full bg-[#FFF1F2] flex items-center justify-center flex-shrink-0">
                    <Icons.Wallet className="text-[#C81E3D] w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="font-extrabold text-slate-800 text-sm mb-1">Course Cost</h3>
                    <p className="text-slate-600 text-xs font-semibold leading-relaxed">
                      {spec.feesRange}
                    </p>
                  </div>
                </div>

              </div>
            </div>

          </div>

          {/* RIGHT COLUMN (Outcomes card) - 4 Columns */}
          <div className="lg:col-span-4 w-full">
            <div className="bg-[#FFF1F2]/65 border-2 border-[#C81E3D]/30 rounded-[32px] p-6 sm:p-8 space-y-6 text-center shadow-lg shadow-rose-900/[0.02] sticky top-24">
              <h2 className="text-[#C81E3D] font-extrabold text-lg tracking-wide uppercase">
                Investment & Career Outcomes
              </h2>

              {/* Price Tag */}
              <div className="space-y-1">
                <span className="text-3xl sm:text-4xl font-black text-[#C81E3D] tracking-tight">
                  {spec.feesRange}
                </span>
                <p className="text-xs text-slate-500 font-bold uppercase tracking-wider">
                  Total Program Fees
                </p>
              </div>

              {/* EMI Badge */}
              <div className="inline-flex items-center justify-center px-4 py-1.5 bg-[#C81E3D] text-white text-xs font-black rounded-full uppercase tracking-wider">
                EMI Facility: Available
              </div>

              {/* Stats Table */}
              <div className="border-t border-b border-rose-200/50 py-5 grid grid-cols-1 sm:grid-cols-3 gap-2">
                <div className="space-y-1">
                  <span className="block font-black text-slate-800 text-sm leading-none">{spec.salaryRange}</span>
                  <span className="text-[9px] font-bold text-slate-500 uppercase tracking-tight block">Avg Salary</span>
                </div>
                <div className="border-l border-r border-rose-200/50 space-y-1 px-1">
                  <span className="block font-black text-slate-800 text-sm leading-none">{spec.placementRate}</span>
                  <span className="text-[9px] font-bold text-slate-500 uppercase tracking-tight block">Placement</span>
                </div>
                <div className="space-y-1">
                  <span className="block font-black text-slate-800 text-sm leading-none">{spec.universitiesCount}+</span>
                  <span className="text-[9px] font-bold text-slate-500 uppercase tracking-tight block">Universities</span>
                </div>
              </div>

              {/* CTA button */}
              <PopupTrigger className="w-full h-14 bg-[#C81E3D] hover:bg-[#B01A33] text-white font-extrabold rounded-[12px] shadow-md transition-all active:scale-[0.98] text-sm tracking-wide uppercase">
                ENQUIRE ABOUT FEES & EMI
              </PopupTrigger>
            </div>
          </div>

        </div>
      </section>

      {/* 3. COMPANIES HIRING */}
      <section className="w-full bg-[#F8FAFC] py-12 px-4 sm:px-6 md:px-8 border-t border-b border-slate-100">
        <div className="max-w-7xl mx-auto text-center space-y-6 md:space-y-8">
          <p className="text-slate-500 font-bold uppercase text-xs tracking-wider">
            Companies Hiring across consulting, technology & FMCG sectors
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-6">
            {spec.hiringCompanies.map((company, idx) => (
              <div
                key={idx}
                className="px-6 py-3 border border-[#C81E3D]/30 bg-white rounded-full text-slate-700 font-bold text-sm sm:text-base shadow-sm hover:border-[#C81E3D] transition-colors"
              >
                {company}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. ALL SPECIALISATIONS NAVIGATION */}
      <section className="w-full bg-white py-16 md:py-20 px-4 sm:px-6 md:px-8">
        <div className="max-w-7xl mx-auto space-y-10 md:space-y-12">

          {/* Header */}
          <div className="text-center">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#1E293B] tracking-tight">
              Popular Specializations for Online MBA
            </h2>
          </div>

          {/* List/Grid of other specs */}
          <div className="flex flex-wrap items-center justify-center gap-3 max-w-5xl mx-auto">
            {otherSpecs.map((item) => (
              <Link
                href={`/specialisations/${item.slug}`}
                key={item.slug}
                className="px-5 py-3 bg-white border border-slate-200 hover:border-[#C81E3D] text-slate-800 font-bold text-xs sm:text-sm rounded-[10px] shadow-sm hover:shadow transition-all block hover:text-[#C81E3D]"
              >
                {item.title}
              </Link>
            ))}
          </div>

          {/* CTA View All */}
          <div className="flex justify-center pt-2">
            <Link
              href="/"
              className="h-14 px-8 bg-[#C81E3D] hover:bg-[#B01A33] text-white font-extrabold rounded-full shadow-lg shadow-red-700/15 active:scale-[0.98] transition-all text-sm sm:text-base tracking-wide flex items-center gap-2"
            >
              <span>Explore More Specializations</span>
              <Icons.ArrowRight size={16} />
            </Link>
          </div>

        </div>
      </section>

      {/* Floating WhatsApp button */}
      <WhatsAppButton />

      {/* PDF Floating Widget at bottom-left */}
      <div className="fixed bottom-6 left-6 z-50">
        <div className="relative group cursor-pointer flex flex-col items-center">
          <span className="absolute inset-0 rounded-full border-2 border-[#E11D48]/30 scale-110 animate-ping opacity-75"></span>
          <PopupTrigger className="flex flex-col items-center justify-center w-16 h-16 bg-white border border-rose-100 rounded-full shadow-xl hover:shadow-2xl transition-all group-hover:scale-105 active:scale-95 relative z-10">
            <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#E11D48]/10 to-[#C81E3D]/10 flex items-center justify-center mb-0.5">
              <Icons.Download size={18} className="text-[#C81E3D] group-hover:translate-y-0.5 transition-transform" />
            </div>
            <span className="text-[9px] font-black text-[#C81E3D] uppercase tracking-wider -mt-1 z-20">
              PDF
            </span>
          </PopupTrigger>
        </div>
      </div>

    </div>
  );
}
