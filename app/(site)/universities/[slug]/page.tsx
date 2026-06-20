import React from 'react';
import Link from 'next/link';
import type { Metadata } from 'next';
import * as Icons from 'lucide-react';
import { collegeReviews, getCollegeBySlug } from '../../../data/colleges';
import { notFound } from 'next/navigation';
import PopupTrigger from '../../../Components/PopupTrigger';
import WhatsAppButton from '../../../Components/WhatsAppButton';
import ScrollReveal from '../../../Components/ScrollReveal';
import CompareButton from '../../../Components/CompareButton';
import JsonLd from '../../../Components/JsonLd';

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return collegeReviews.map((c) => ({ slug: c.id }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const col = getCollegeBySlug(slug);
  if (!col) return { title: "University Not Found" };
  return {
    title: `${col.name} - Reviews, Fees, Rating & More`,
    description: `Read detailed reviews, fees (${col.fees}), rating (${col.rating}/5), courses, and admission details for ${col.name}. UGC-approved online MBA program at ${col.location}.`,
    alternates: { canonical: `https://youronlinemba.com/universities/${slug}` },
    openGraph: {
      title: `${col.name} - Reviews, Fees, Rating & More`,
      description: `${col.rating}/5 rating | Fees: ${col.fees} | ${col.location}. Read detailed reviews and compare.`,
      images: [{ url: col.image, width: 800, height: 450 }],
    },
  };
}

const highlights = [
  { icon: Icons.GraduationCap, label: "UGC Approved Degree", desc: "Valid for govt jobs & higher education" },
  { icon: Icons.TrendingUp, label: "Career Growth", desc: "Avg 40% salary hike post completion" },
  { icon: Icons.Clock, label: "Flexible Learning", desc: "Study at your pace with live classes" },
  { icon: Icons.Briefcase, label: "Placement Support", desc: "Dedicated placement cell & job referrals" },
  { icon: Icons.Users, label: "Expert Faculty", desc: "Learn from industry experts & professors" },
  { icon: Icons.Laptop, label: "LMS Access", desc: "24/7 access to recorded lectures & material" },
  { icon: Icons.HeartHandshake, label: "Alumni Network", desc: "Connect with 10,000+ alumni globally" },
  { icon: Icons.Shield, label: "NAAC Accredited", desc: "Recognized by top accreditation bodies" },
];

const admissionSteps = [
  { icon: Icons.Edit3, step: "01", title: "Fill Application", desc: "Complete online application form with your details." },
  { icon: Icons.FileText, step: "02", title: "Upload Documents", desc: "Submit academic transcripts, ID proof & photos." },
  { icon: Icons.CheckCircle, step: "03", title: "Review & Confirm", desc: "University reviews and confirms your eligibility." },
  { icon: Icons.CreditCard, step: "04", title: "Pay & Enroll", desc: "Pay fees & get instant access to learning portal." },
];

const curriculumSubjects = [
  "Managerial Economics", "Financial Accounting", "Marketing Management",
  "Organizational Behavior", "Business Analytics", "Strategic Management",
  "Operations Management", "Human Resource Management", "Corporate Finance",
  "Business Communication", "Research Methodology", "Digital Business"
];

const hiringCompanies = [
  "Amazon", "Deloitte", "TCS", "Microsoft", "KPMG", "Goldman Sachs",
  "Accenture", "Flipkart", "PwC", "IBM", "HDFC Bank", "Google"
];

const faqData = [
  { q: "Is this Online MBA UGC approved?", a: "Yes, the program is UGC-DEB approved and equivalent to on-campus degrees for government jobs and higher education." },
  { q: "What is the duration of the program?", a: "The program is typically 2 years, divided into 4 semesters. Some universities offer an accelerated 1-year option." },
  { q: "Can I pay fees in installments?", a: "Yes, most universities offer flexible EMI options starting from as low as the mentioned EMI amount with 0% interest." },
  { q: "Is there any entrance exam required?", a: "Most online MBA programs from NAAC-accredited universities do not require entrance exams. Admission is merit-based." },
  { q: "Will I get placement assistance?", a: "Yes, all top universities provide dedicated placement support including resume building, interview prep, and job referrals." },
];

export default async function UniversityPage({ params }: PageProps) {
  const { slug } = await params;
  const col = getCollegeBySlug(slug);
  if (!col) notFound();

  const ratingBars = [
    { label: "5★", val: col.ratingDistribution.fiveStar },
    { label: "4★", val: col.ratingDistribution.fourStar },
    { label: "3★", val: col.ratingDistribution.threeStar },
    { label: "2★", val: col.ratingDistribution.twoStar },
    { label: "1★", val: col.ratingDistribution.oneStar },
  ];

  return (
    <div className="min-h-screen bg-white flex flex-col">

      <JsonLd data={{
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Home", item: "https://youronlinemba.com/" },
          { "@type": "ListItem", position: 2, name: "Universities", item: "https://youronlinemba.com/universities" },
          { "@type": "ListItem", position: 3, name: col.name, item: `https://youronlinemba.com/universities/${slug}` },
        ],
      }} />
      <JsonLd data={{
        "@context": "https://schema.org",
        "@type": "Product",
        name: `${col.name} Online MBA`,
        description: col.description,
        image: col.image,
        aggregateRating: {
          "@type": "AggregateRating",
          ratingValue: col.rating,
          bestRating: "5",
          ratingCount: col.totalReviews.replace(/,/g, ""),
        },
        offers: {
          "@type": "Offer",
          price: col.fees.replace(/[^0-9]/g, ""),
          priceCurrency: "INR",
          availability: "https://schema.org/InStock",
        },
      }} />

      {/* 1. RED HERO BANNER */}
      <section className="w-full bg-[#C81E3D] text-white py-12 md:py-16 px-4 sm:px-6 md:px-8 relative overflow-hidden">
        <div className="absolute top-0 right-0 translate-x-24 -translate-y-24 w-96 h-96 bg-white/5 rounded-full pointer-events-none"></div>
        <div className="absolute bottom-0 left-0 -translate-x-12 translate-y-12 w-64 h-64 bg-black/5 rounded-full pointer-events-none"></div>
        <div className="max-w-7xl mx-auto space-y-6 md:space-y-8 relative z-10">
          <div className="flex items-center gap-2 text-xs sm:text-sm font-semibold opacity-90">
            <Link href="/" className="hover:underline flex items-center gap-1">
              <Icons.Home size={13} />
              <span>Home</span>
            </Link>
            <span>/</span>
            <Link href="/universities" className="hover:underline">Universities</Link>
            <span>/</span>
            <span className="opacity-75">{col.name}</span>
          </div>

          <div className="flex flex-col md:flex-row items-center md:items-start gap-8">
            <ScrollReveal direction="left">
              <div className="w-28 h-28 md:w-32 md:h-32 relative rounded-2xl overflow-hidden bg-white shadow-lg flex-shrink-0 ring-4 ring-white/20">
                <img src={col.image} alt={col.name} className="w-full h-full object-cover" />
              </div>
            </ScrollReveal>
            <div className="text-center md:text-left space-y-5 flex-1">
              <ScrollReveal delay={100}>
                <h1 className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight leading-tight">{col.name}</h1>
              </ScrollReveal>
              <ScrollReveal delay={200}>
                <div className="flex flex-wrap justify-center md:justify-start gap-3">
                  <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/20 text-white text-xs font-extrabold border border-white/20">
                    <Icons.MapPin size={13} />
                    {col.location}
                  </span>
                  <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/20 text-white text-xs font-extrabold border border-white/20">
                    <Icons.GraduationCap size={13} />
                    {col.coursesCount}
                  </span>
                  <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/20 text-white text-xs font-extrabold border border-white/20">
                    <Icons.Calendar size={13} />
                    {col.estd}
                  </span>
                </div>
              </ScrollReveal>
              <ScrollReveal delay={300}>
                <div className="flex flex-wrap justify-center md:justify-start gap-6 text-sm font-bold text-white">
                  <span className="flex items-center gap-1.5">
                    <Icons.Star size={15} className="fill-yellow-300 text-yellow-300" /> {col.rating}/5 Rating
                  </span>
                  <span className="flex items-center gap-1.5">
                    <Icons.MessageSquare size={15} /> {col.totalReviews} Reviews
                  </span>
                  <span className="flex items-center gap-1.5">
                    <Icons.Wallet size={15} /> {col.fees}
                  </span>
                </div>
              </ScrollReveal>
              <ScrollReveal delay={400}>
                <p className="text-rose-50 text-sm sm:text-base font-medium max-w-2xl leading-relaxed">{col.description}</p>
              </ScrollReveal>
              <ScrollReveal delay={500}>
                <div className="flex flex-wrap justify-center md:justify-start gap-3 pt-1">
                  <PopupTrigger className="h-12 px-7 bg-white text-[#C81E3D] hover:bg-gray-100 font-extrabold rounded-full text-sm shadow-lg transition-all active:scale-[0.98] inline-flex items-center gap-2">
                    <Icons.Phone size={16} />
                    Get Free Counselling
                  </PopupTrigger>
                  <CompareButton collegeId={col.id} variant="hero" />
                  <a href="#reviews" className="h-12 px-7 border-2 border-white/70 text-white hover:bg-white/10 font-extrabold rounded-full text-sm transition-all inline-flex items-center gap-2">
                    <Icons.Star size={16} />
                    See Reviews
                  </a>
                </div>
              </ScrollReveal>
            </div>
          </div>
        </div>
      </section>

      {/* 2. KEY HIGHLIGHTS */}
      <section className="w-full bg-[#FAFBFD] py-16 md:py-20 px-4 sm:px-6 md:px-8">
        <div className="max-w-7xl mx-auto space-y-10 md:space-y-14">
          <div className="text-center space-y-3">
            <ScrollReveal>
              <p className="text-[#C81E3D] text-[11px] sm:text-xs font-bold tracking-widest uppercase">Why Choose {col.name}</p>
            </ScrollReveal>
            <ScrollReveal delay={100}>
              <h2 className="text-3xl sm:text-4xl md:text-[40px] font-extrabold text-[#1E293B] tracking-tight leading-tight">Key Highlights</h2>
            </ScrollReveal>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {highlights.map((item, i) => {
              const IconComponent = item.icon;
              return (
                <ScrollReveal key={i} delay={i * 60} direction="up">
                  <div className="bg-white border border-gray-100 rounded-2xl p-6 shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300 space-y-3 group h-full">
                    <div className="w-10 h-10 rounded-xl bg-[#FFF1F2] flex items-center justify-center text-[#C81E3D] group-hover:scale-110 transition-transform">
                      <IconComponent size={20} />
                    </div>
                    <h3 className="font-extrabold text-[#1E293B] text-sm">{item.label}</h3>
                    <p className="text-slate-500 text-xs font-medium">{item.desc}</p>
                  </div>
                </ScrollReveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* 3. ABOUT & RATING BREAKDOWN */}
      <section className="w-full bg-white py-16 md:py-20 px-4 sm:px-6 md:px-8">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          <div className="lg:col-span-7 space-y-5">
            <ScrollReveal>
              <p className="text-[#C81E3D] text-[11px] sm:text-xs font-bold tracking-widest uppercase">About</p>
            </ScrollReveal>
            <ScrollReveal delay={100}>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-[#1E293B] tracking-tight leading-tight">{col.name}</h2>
            </ScrollReveal>
            <ScrollReveal delay={200}>
              <p className="text-slate-600 text-sm sm:text-base leading-relaxed font-medium">{col.description}</p>
            </ScrollReveal>
            <ScrollReveal delay={300}>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-2">
                {[
                  { number: col.totalReviews, label: "Student Reviews" },
                  { number: col.coursesCount, label: "Courses" },
                  { number: col.estd.replace("Estd ", ""), label: "Established" },
                  { number: col.fees, label: "Program Fee" },
                ].map((stat, i) => (
                  <div key={i} className="bg-[#FAFBFD] rounded-xl p-4 text-center border border-gray-100">
                    <span className="block text-xl font-black text-[#C81E3D]">{stat.number}</span>
                    <span className="text-[10px] font-bold text-slate-500 uppercase tracking-wider">{stat.label}</span>
                  </div>
                ))}
              </div>
            </ScrollReveal>
          </div>
          <div className="lg:col-span-5" id="reviews">
            <ScrollReveal direction="right">
              <div className="bg-[#FFF1F2]/65 border-2 border-[#C81E3D]/30 rounded-[32px] p-6 sm:p-8 space-y-6 shadow-lg sticky top-24">
                <div className="text-center space-y-2">
                  <span className="text-4xl sm:text-5xl font-black text-blue-600 block tracking-tight">{col.rating}</span>
                  <div className="flex items-center justify-center gap-0.5 text-yellow-400">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <Icons.Star key={i} size={18} className={i < Math.floor(col.rating) ? "fill-yellow-400" : "text-gray-300"} />
                    ))}
                    <span className="text-slate-400 font-bold text-xs ml-2 uppercase tracking-wider">{col.totalReviews} Reviews</span>
                  </div>
                </div>
                <div className="space-y-2 max-w-xs mx-auto w-full">
                  {ratingBars.map((row, i) => (
                    <div key={i} className="flex items-center gap-3 text-xs font-bold text-slate-700">
                      <span className="w-6 text-right whitespace-nowrap">{row.label}</span>
                      <div className="h-2.5 flex-grow bg-slate-100 rounded-full overflow-hidden">
                        <div className="h-full bg-blue-500 rounded-full transition-all duration-500" style={{ width: `${row.val}%` }} />
                      </div>
                      <span className="w-8 text-right text-slate-400">{row.val}%</span>
                    </div>
                  ))}
                </div>
                <PopupTrigger className="w-full h-12 bg-blue-500 hover:bg-blue-600 text-white font-extrabold rounded-xl shadow-md transition-all active:scale-[0.98] text-sm tracking-wide">
                  View Detailed Reviews
                </PopupTrigger>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* 4. PROGRAMS OFFERED */}
      <section className="w-full bg-[#FAFBFD] py-16 md:py-20 px-4 sm:px-6 md:px-8">
        <div className="max-w-7xl mx-auto space-y-10 md:space-y-14">
          <div className="text-center space-y-3">
            <ScrollReveal>
              <p className="text-[#C81E3D] text-[11px] sm:text-xs font-bold tracking-widest uppercase">Programs</p>
            </ScrollReveal>
            <ScrollReveal delay={100}>
              <h2 className="text-3xl sm:text-4xl md:text-[40px] font-extrabold text-[#1E293B] tracking-tight leading-tight">Programs Offered</h2>
            </ScrollReveal>
            <ScrollReveal delay={200}>
              <p className="text-slate-500 text-sm sm:text-base font-medium max-w-xl mx-auto">
                Choose from a wide range of MBA specialisations tailored for your career goals.
              </p>
            </ScrollReveal>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {[
              "Marketing Management", "Financial Management", "Human Resource Management",
              "Operations Management", "Business Analytics", "Information Technology",
              "International Business", "Entrepreneurship", "Supply Chain Management",
              "Digital Marketing", "Healthcare Management", "Project Management"
            ].map((program, i) => {
              const icons = [Icons.TrendingUp, Icons.Wallet, Icons.Users, Icons.Settings, Icons.BarChart3, Icons.Monitor, Icons.Globe, Icons.Lightbulb, Icons.Truck, Icons.Megaphone, Icons.HeartPulse, Icons.ClipboardCheck];
              const IconComp = icons[i % icons.length];
              return (
                <ScrollReveal key={i} delay={i * 50} direction="up">
                  <div className="flex items-center gap-4 bg-white border border-gray-100 rounded-xl p-5 shadow-sm hover:shadow-md hover:-translate-y-0.5 transition-all duration-300 group cursor-default">
                    <div className="w-10 h-10 rounded-lg bg-[#FFF1F2] flex items-center justify-center text-[#C81E3D] group-hover:scale-110 transition-transform flex-shrink-0">
                      <IconComp size={18} />
                    </div>
                    <span className="font-extrabold text-slate-800 text-sm group-hover:text-[#C81E3D] transition-colors">{program}</span>
                  </div>
                </ScrollReveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* 5. FEE & EMI STRUCTURE */}
      <section className="w-full bg-white py-16 md:py-20 px-4 sm:px-6 md:px-8">
        <div className="max-w-7xl mx-auto space-y-10 md:space-y-14">
          <div className="text-center space-y-3">
            <ScrollReveal>
              <p className="text-[#C81E3D] text-[11px] sm:text-xs font-bold tracking-widest uppercase">Investment</p>
            </ScrollReveal>
            <ScrollReveal delay={100}>
              <h2 className="text-3xl sm:text-4xl md:text-[40px] font-extrabold text-[#1E293B] tracking-tight leading-tight">Fee & EMI Structure</h2>
            </ScrollReveal>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
            <ScrollReveal direction="left" className="lg:col-span-2">
              <div className="bg-[#FAFBFD] border border-gray-100 rounded-3xl p-8 space-y-6">
                <h3 className="font-extrabold text-xl text-[#1E293B]">Fee Breakdown</h3>
                <div className="space-y-4">
                  {[
                    { label: "Tuition Fee (Total)", amount: col.fees, note: "For entire 2-year program" },
                    { label: "Registration Fee", amount: "₹1,000", note: "One-time, non-refundable" },
                    { label: "Exam Fee", amount: "₹2,000", note: "Per semester" },
                    { label: "Study Material", amount: "Free", note: "Digital LMS access included" },
                  ].map((row, i) => (
                    <div key={i} className="flex items-center justify-between py-3 border-b border-gray-200 last:border-0">
                      <div>
                        <span className="font-bold text-slate-800 text-sm">{row.label}</span>
                        <p className="text-[10px] text-slate-400 font-semibold">{row.note}</p>
                      </div>
                      <span className={`font-black text-lg ${row.amount === "Free" ? "text-emerald-600" : "text-[#1E293B]"}`}>{row.amount}</span>
                    </div>
                  ))}
                </div>
              </div>
            </ScrollReveal>
            <ScrollReveal direction="right" className="lg:col-span-1">
              <div className="bg-[#FFF1F2]/65 border-2 border-[#C81E3D]/30 rounded-[32px] p-6 sm:p-8 space-y-6 text-center shadow-lg sticky top-24">
                <div className="space-y-1">
                  <span className="text-[10px] font-bold text-slate-500 uppercase tracking-wider">Program Fee</span>
                  <span className="block text-3xl sm:text-4xl font-black text-[#C81E3D] tracking-tight">{col.fees}</span>
                  <p className="text-xs text-slate-500 font-bold uppercase tracking-wider">Total 2-Year Program</p>
                </div>
                <div className="inline-flex items-center justify-center px-4 py-1.5 bg-[#C81E3D] text-white text-xs font-black rounded-full uppercase tracking-wider">
                  0% Interest EMI Available
                </div>
                <div className="border-t border-rose-200/50 pt-5 space-y-2">
                  <div className="flex justify-between text-sm">
                    <span className="font-bold text-slate-600">Program Fee</span>
                    <span className="font-extrabold text-slate-800">{col.fees}</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="font-bold text-slate-600">Duration</span>
                    <span className="font-extrabold text-slate-800">2 Years</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="font-bold text-slate-600">EMI Tenure</span>
                    <span className="font-extrabold text-slate-800">Up to 24 Months</span>
                  </div>
                </div>
                <PopupTrigger className="w-full h-12 bg-[#C81E3D] hover:bg-[#B01A33] text-white font-extrabold rounded-[12px] shadow-md transition-all active:scale-[0.98] text-sm tracking-wide uppercase">
                  Get Fee Details
                </PopupTrigger>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* 6. ADMISSION PROCESS */}
      <section className="w-full bg-[#FAFBFD] py-16 md:py-20 px-4 sm:px-6 md:px-8">
        <div className="max-w-7xl mx-auto space-y-10 md:space-y-14">
          <div className="text-center space-y-3">
            <ScrollReveal>
              <p className="text-[#C81E3D] text-[11px] sm:text-xs font-bold tracking-widest uppercase">Process</p>
            </ScrollReveal>
            <ScrollReveal delay={100}>
              <h2 className="text-3xl sm:text-4xl md:text-[40px] font-extrabold text-[#1E293B] tracking-tight leading-tight">Admission Process</h2>
            </ScrollReveal>
            <ScrollReveal delay={200}>
              <p className="text-slate-500 text-sm sm:text-base font-medium max-w-xl mx-auto">Get started in 4 simple steps.</p>
            </ScrollReveal>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
            {admissionSteps.map((step, i) => {
              const IconComp = step.icon;
              return (
                <ScrollReveal key={i} delay={i * 100} direction="up">
                  <div className="relative bg-white border border-gray-100 rounded-2xl p-6 shadow-sm hover:shadow-lg transition-all duration-300 group text-center">
                    <span className="absolute -top-3 -left-3 w-8 h-8 bg-[#C81E3D] text-white text-xs font-black rounded-full flex items-center justify-center shadow-md">
                      {step.step}
                    </span>
                    <div className="w-12 h-12 rounded-xl bg-[#FFF1F2] flex items-center justify-center text-[#C81E3D] mx-auto mb-4 group-hover:scale-110 transition-transform">
                      <IconComp size={22} />
                    </div>
                    <h4 className="font-extrabold text-slate-800 text-sm mb-2">{step.title}</h4>
                    <p className="text-slate-500 text-xs font-medium leading-relaxed">{step.desc}</p>
                  </div>
                </ScrollReveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* 7. CURRICULUM */}
      <section className="w-full bg-white py-16 md:py-20 px-4 sm:px-6 md:px-8">
        <div className="max-w-7xl mx-auto space-y-10 md:space-y-14">
          <div className="text-center space-y-3">
            <ScrollReveal>
              <p className="text-[#C81E3D] text-[11px] sm:text-xs font-bold tracking-widest uppercase">Curriculum</p>
            </ScrollReveal>
            <ScrollReveal delay={100}>
              <h2 className="text-3xl sm:text-4xl md:text-[40px] font-extrabold text-[#1E293B] tracking-tight leading-tight">Curriculum Subjects</h2>
            </ScrollReveal>
            <ScrollReveal delay={200}>
              <p className="text-slate-500 text-sm sm:text-base font-medium max-w-xl mx-auto">Industry-aligned curriculum designed for modern business challenges.</p>
            </ScrollReveal>
          </div>
          <ScrollReveal>
            <div className="flex flex-wrap justify-center gap-3 max-w-4xl mx-auto">
              {curriculumSubjects.map((subject, i) => (
                <div key={i} className="px-5 py-3 bg-white border border-slate-200 hover:border-[#C81E3D] hover:bg-[#FFF1F2] text-slate-800 font-bold text-xs sm:text-sm rounded-[10px] shadow-sm hover:shadow transition-all cursor-default hover:-translate-y-0.5">
                  {subject}
                </div>
              ))}
            </div>
          </ScrollReveal>
          <div className="flex justify-center">
            <ScrollReveal>
              <PopupTrigger className="h-12 px-7 bg-[#C81E3D] hover:bg-[#B01A33] text-white font-extrabold rounded-full text-sm shadow-lg transition-all active:scale-[0.98] inline-flex items-center gap-2">
                <Icons.Download size={16} />
                Download Full Syllabus
              </PopupTrigger>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* 8. PLACEMENTS */}
      <section className="w-full bg-[#C81E3D] py-16 md:py-20 px-4 sm:px-6 md:px-8 text-white relative overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-white/5 rounded-full pointer-events-none"></div>
        <div className="max-w-7xl mx-auto space-y-10 md:space-y-14 relative z-10">
          <div className="text-center space-y-3">
            <ScrollReveal>
              <p className="text-rose-200 text-[11px] sm:text-xs font-bold tracking-widest uppercase">Placements</p>
            </ScrollReveal>
            <ScrollReveal delay={100}>
              <h2 className="text-3xl sm:text-4xl md:text-[40px] font-extrabold tracking-tight leading-tight">Placement & Career Support</h2>
            </ScrollReveal>
            <ScrollReveal delay={200}>
              <p className="text-rose-100 text-sm sm:text-base font-medium max-w-xl mx-auto">Dedicated career services to help you land your dream role.</p>
            </ScrollReveal>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {[
              { number: "40%+", label: "Avg Salary Hike" },
              { number: "500+", label: "Hiring Partners" },
              { number: "85%+", label: "Placement Rate" },
            ].map((stat, i) => (
              <ScrollReveal key={i} delay={i * 100} direction="up">
                <div className="bg-white/10 backdrop-blur-sm border border-white/15 rounded-2xl p-6 text-center space-y-2 hover:bg-white/15 transition-all">
                  <span className="block text-3xl sm:text-4xl font-black tracking-tight">{stat.number}</span>
                  <span className="text-rose-200 text-xs font-bold uppercase tracking-wider">{stat.label}</span>
                </div>
              </ScrollReveal>
            ))}
          </div>
          <ScrollReveal delay={300}>
            <div className="text-center space-y-4">
              <p className="text-rose-100 font-bold text-xs uppercase tracking-wider">Top Hiring Companies</p>
              <div className="flex flex-wrap justify-center gap-3">
                {hiringCompanies.map((company, i) => (
                  <div key={i} className="px-5 py-2.5 border border-white/25 bg-white/10 rounded-full text-white font-bold text-xs sm:text-sm hover:bg-white/20 transition-all">
                    {company}
                  </div>
                ))}
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* 9. FAQ */}
      <section className="w-full bg-white py-16 md:py-20 px-4 sm:px-6 md:px-8">
        <div className="max-w-3xl mx-auto space-y-10 md:space-y-14">
          <div className="text-center space-y-3">
            <ScrollReveal>
              <p className="text-[#C81E3D] text-[11px] sm:text-xs font-bold tracking-widest uppercase">FAQ</p>
            </ScrollReveal>
            <ScrollReveal delay={100}>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-[#1E293B] tracking-tight leading-tight">Frequently Asked Questions</h2>
            </ScrollReveal>
          </div>
          <div className="space-y-4">
            {faqData.map((item, i) => (
              <ScrollReveal key={i} delay={i * 80}>
                <details className="group bg-white border border-gray-100 rounded-2xl shadow-sm hover:shadow-md transition-all overflow-hidden open:border-[#C81E3D]/30">
                  <summary className="flex items-center justify-between p-5 cursor-pointer list-none font-extrabold text-slate-800 text-sm sm:text-base hover:text-[#C81E3D] transition-colors">
                    <span>{item.q}</span>
                    <Icons.ChevronDown size={18} className="text-slate-400 group-open:rotate-180 group-open:text-[#C81E3D] transition-all flex-shrink-0" />
                  </summary>
                  <div className="px-5 pb-5">
                    <p className="text-slate-500 text-sm font-medium leading-relaxed">{item.a}</p>
                  </div>
                </details>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* 10. CTA BANNER */}
      <section className="w-full bg-[#C81E3D] py-14 md:py-20 px-4 sm:px-6 md:px-8">
        <div className="max-w-4xl mx-auto text-center space-y-6 text-white">
          <ScrollReveal>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight leading-tight">Ready to Start Your MBA Journey?</h2>
          </ScrollReveal>
          <ScrollReveal delay={100}>
            <p className="text-rose-100 text-sm sm:text-base font-medium max-w-xl mx-auto">Get free expert counselling. Compare programs, fees, and find the best MBA for your career goals.</p>
          </ScrollReveal>
          <ScrollReveal delay={200}>
            <div className="flex flex-wrap justify-center gap-4 pt-2">
              <PopupTrigger className="h-14 px-8 bg-white text-[#C81E3D] hover:bg-gray-100 font-extrabold rounded-full shadow-lg transition-all active:scale-[0.98] text-sm tracking-wide inline-flex items-center gap-2">
                <Icons.Phone size={18} />
                Get Free Counselling
              </PopupTrigger>
              <Link href="/reviews" className="h-14 px-8 border-2 border-white/70 text-white hover:bg-white/10 font-extrabold rounded-full transition-all text-sm tracking-wide inline-flex items-center gap-2">
                <Icons.Star size={18} />
                Read Reviews
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Floating widgets */}
      <WhatsAppButton />
      <div className="fixed bottom-6 left-6 z-50">
        <div className="relative group cursor-pointer flex flex-col items-center">
          <span className="absolute inset-0 rounded-full border-2 border-[#E11D48]/30 scale-110 animate-ping opacity-75"></span>
          <PopupTrigger className="flex flex-col items-center justify-center w-16 h-16 bg-white border border-rose-100 rounded-full shadow-xl hover:shadow-2xl transition-all group-hover:scale-105 active:scale-95 relative z-10">
            <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#E11D48]/10 to-[#C81E3D]/10 flex items-center justify-center mb-0.5">
              <Icons.Download size={18} className="text-[#C81E3D] group-hover:translate-y-0.5 transition-transform" />
            </div>
            <span className="text-[9px] font-black text-[#C81E3D] uppercase tracking-wider -mt-1 z-20">PDF</span>
          </PopupTrigger>
        </div>
      </div>

    </div>
  );
}
