"use client";
import React, { useState } from 'react';
import { Check, ChevronDown, GraduationCap, Briefcase, Star, Landmark, Loader2 } from 'lucide-react';

import { counsellingSchema } from '../lib/validation';

const HeroSection = () => {
  const [form, setForm] = useState({ name: "", phone: "", email: "", specialization: "", city: "" });
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState("");
  const [fieldErrors, setFieldErrors] = useState<Record<string, string>>({});

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
    setFieldErrors((prev) => ({ ...prev, [e.target.name]: "" }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    setFieldErrors({});

    const result = counsellingSchema.safeParse(form);
    if (!result.success) {
      const errors: Record<string, string> = {};
      result.error.issues.forEach((err) => {
        const field = err.path[0] as string;
        if (!errors[field]) errors[field] = err.message;
      });
      setFieldErrors(errors);
      return;
    }

    setLoading(true);
    try {
      const res = await fetch("/api/send-counselling", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      if (!res.ok) throw new Error("Failed to send");
      setSubmitted(true);
    } catch {
      setError("Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="relative w-full bg-[#FAFAFA] py-12 md:py-20 lg:py-24 px-4 sm:px-6 md:px-8 overflow-hidden">
      
      {/* Decorative Concentric Circles at bottom-left */}
      <div className="absolute bottom-0 left-0 -translate-x-16 translate-y-16 w-64 h-64 pointer-events-none opacity-[0.06] select-none z-0">
        <svg viewBox="0 0 100 100" className="w-full h-full text-[#C81E3D]">
          <circle cx="50" cy="50" r="45" fill="none" stroke="currentColor" strokeWidth="1" />
          <circle cx="50" cy="50" r="35" fill="none" stroke="currentColor" strokeWidth="1" />
          <circle cx="50" cy="50" r="25" fill="none" stroke="currentColor" strokeWidth="1.5" />
          <circle cx="50" cy="50" r="15" fill="none" stroke="currentColor" strokeWidth="2" />
          <circle cx="50" cy="50" r="5" fill="currentColor" />
        </svg>
      </div>

      <div className="max-w-7xl mx-auto grid lg:grid-cols-12 gap-6 md:gap-10 lg:gap-12 items-center relative z-10">

        {/* LEFT CONTENT - 7 Columns */}
        <div className="lg:col-span-7 space-y-6 md:space-y-8">
          
          {/* Trust Badge */}
          <div className="inline-flex items-center bg-[#FFF1F2] px-3.5 py-1.5 rounded-md border border-[#FEE2E2] shadow-sm">
            <span className="text-[#C81E3D] text-[11px] sm:text-xs font-bold tracking-tight">
              ★ Trusted by 5,00,000+ MBA Aspirants Across India
            </span>
          </div>

          {/* Headline */}
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[56px] xl:text-[62px] font-extrabold text-[#1E293B] leading-[1.12] tracking-tight">
            Launch Your <span className="text-[#C81E3D]">Online MBA</span> <br className="hidden md:inline" />
            Career From Anywhere in       India<br className="hidden md:inline" />
       
          </h1>

          {/* Stats Grid */}
          <div className="flex items-center gap-6 sm:gap-10 md:gap-12 flex-wrap pt-2">
            <div>
              <p className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#1E293B] whitespace-nowrap">5 Lakh+</p>
              <p className="text-[9px] sm:text-[10px] text-gray-500 font-bold uppercase tracking-wider mt-1 whitespace-nowrap">Students Guided</p>
            </div>
            <div>
              <p className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#1E293B] whitespace-nowrap">1000+</p>
              <p className="text-[9px] sm:text-[10px] text-gray-500 font-bold uppercase tracking-wider mt-1 whitespace-nowrap">Top Universities</p>
            </div>
            <div>
              <p className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#1E293B] whitespace-nowrap">40%+</p>
              <p className="text-[9px] sm:text-[10px] text-gray-500 font-bold uppercase tracking-wider mt-1 whitespace-nowrap">Avg Salary Hike</p>
            </div>
          </div>
          {/* Bullet Points */}
          <div className="space-y-3.5 pt-2">
            {[
              "Affordable MBA with Easy EMI Options",
              "UGC & AICTE Approved Universities Only",
              "Placement Support with 500+ Hiring Partners"
            ].map((text, i) => (
              <div key={i} className="flex items-center gap-3">
                <div className="w-5 h-5 rounded-full bg-[#C81E3D] flex items-center justify-center flex-shrink-0">
                  <Check size={11} className="text-white stroke-[4]" />
                </div>
                <span className="text-sm sm:text-base font-semibold text-[#475569]">{text}</span>
              </div>
            ))}
          </div>
        </div>

        {/* RIGHT FORM - 5 Columns */}
        <div className="lg:col-span-5 relative w-full max-w-md mx-auto lg:ml-auto">
          {/* Card container with a red border exactly like the design */}
          <div className="bg-white border-2 border-[#C81E3D] rounded-[36px] p-6 sm:p-8 lg:p-9 shadow-xl shadow-slate-100/50">
            <h2 className="text-[#C81E3D] text-center text-lg sm:text-xl font-bold mb-6 tracking-wide">
              Free Expert Counselling
            </h2>

            {submitted ? (
              <div className="py-12 text-center space-y-3">
                <div className="w-14 h-14 bg-[#FFF1F2] rounded-full flex items-center justify-center mx-auto">
                  <Check size={28} className="text-[#C81E3D] stroke-[3]" />
                </div>
                <h4 className="text-[#1E293B] font-bold text-lg">Request Submitted!</h4>
                <p className="text-slate-500 text-sm font-medium">Our expert will reach out to you shortly.</p>
              </div>
            ) : (
              <>
                <form className="space-y-4" onSubmit={handleSubmit}>
                  <div>
                    <input
                      name="name" value={form.name} onChange={handleChange}
                      type="text" required placeholder="Name *"
                      className="w-full h-12 px-4 border border-gray-250 rounded-[10px] text-sm text-gray-900 placeholder-gray-400 outline-none focus:border-[#C81E3D] focus:ring-1 focus:ring-[#C81E3D]/30 transition-all font-medium"
                    />
                    {fieldErrors.name && <p className="text-[#C81E3D] text-xs font-semibold mt-1">{fieldErrors.name}</p>}
                  </div>
                  <div>
                    <input
                      name="phone" value={form.phone} onChange={handleChange}
                      type="tel" required placeholder="Phone *"
                      className="w-full h-12 px-4 border border-gray-250 rounded-[10px] text-sm text-gray-900 placeholder-gray-400 outline-none focus:border-[#C81E3D] focus:ring-1 focus:ring-[#C81E3D]/30 transition-all font-medium"
                    />
                    {fieldErrors.phone && <p className="text-[#C81E3D] text-xs font-semibold mt-1">{fieldErrors.phone}</p>}
                  </div>
                  <div>
                    <input
                      name="email" value={form.email} onChange={handleChange}
                      type="email" required placeholder="Email *"
                      className="w-full h-12 px-4 border border-gray-250 rounded-[10px] text-sm text-gray-900 placeholder-gray-400 outline-none focus:border-[#C81E3D] focus:ring-1 focus:ring-[#C81E3D]/30 transition-all font-medium"
                    />
                    {fieldErrors.email && <p className="text-[#C81E3D] text-xs font-semibold mt-1">{fieldErrors.email}</p>}
                  </div>
                  <div className="relative">
                    <select
                      name="specialization" value={form.specialization} onChange={handleChange}
                      required
                      className="w-full h-12 px-4 pr-10 border border-gray-250 rounded-[10px] text-sm text-gray-500 bg-white appearance-none outline-none focus:border-[#C81E3D] transition-all font-medium"
                    >
                      <option value="" disabled hidden>Preferred Specialization *</option>
                      <option value="Finance">Finance</option>
                      <option value="Marketing">Marketing</option>
                      <option value="Human Resource Management">Human Resource Management</option>
                      <option value="Operations Management">Operations Management</option>
                      <option value="Information Technology">Information Technology</option>
                      <option value="General Management">General Management</option>
                    </select>
                    <div className="absolute inset-y-0 right-4 flex items-center pointer-events-none text-gray-400">
                      <ChevronDown size={16} />
                    </div>
                    {fieldErrors.specialization && <p className="text-[#C81E3D] text-xs font-semibold mt-1">{fieldErrors.specialization}</p>}
                  </div>
                  <div>
                    <input
                      name="city" value={form.city} onChange={handleChange}
                      type="text" required placeholder="City *"
                      className="w-full h-12 px-4 border border-gray-250 rounded-[10px] text-sm text-gray-900 placeholder-gray-400 outline-none focus:border-[#C81E3D] focus:ring-1 focus:ring-[#C81E3D]/30 transition-all font-medium"
                    />
                    {fieldErrors.city && <p className="text-[#C81E3D] text-xs font-semibold mt-1">{fieldErrors.city}</p>}
                  </div>
                  {error && <p className="text-[#C81E3D] text-xs font-semibold text-center">{error}</p>}
                  <button
                    type="submit" disabled={loading}
                    className="w-full h-14 bg-[#C81E3D] hover:bg-[#B01A33] text-white font-bold rounded-[12px] shadow-md transition-all active:scale-[0.98] mt-2 text-base tracking-wide flex items-center justify-center gap-2 disabled:opacity-70"
                  >
                    {loading && <Loader2 size={18} className="animate-spin" />}
                    {loading ? "Sending..." : "Get My MBA Plan"}
                  </button>
                </form>
                <p className="text-[10px] text-gray-500 text-center mt-6 leading-relaxed">
                  Talk to an expert & find the best UGC, DEB, NAAC, A++ approved <br className="hidden sm:inline" /> MBA under ₹2L
                </p>
              </>
            )}
          </div>
        </div>
      </div>

      {/* BOTTOM TRUST BAR */}
      <div className="max-w-7xl mx-auto mt-16 md:mt-24 pt-8 border-t border-gray-200/60 grid grid-cols-1 sm:grid-cols-2 md:flex md:flex-wrap justify-between items-center gap-6 md:gap-8 px-4 relative z-10">
        <div className="flex items-center gap-3">
          <GraduationCap className="text-[#C81E3D] w-6 h-6 flex-shrink-0" />
          <span className="text-[11px] sm:text-xs font-bold text-slate-700 uppercase leading-tight tracking-wider">
            UGC Approved<br />Universities
          </span>
        </div>
        <div className="flex items-center gap-3">
          <Briefcase className="text-[#C81E3D] w-6 h-6 flex-shrink-0" />
          <span className="text-[11px] sm:text-xs font-bold text-slate-700 uppercase leading-tight tracking-wider">
            500+<br />Hiring Partners
          </span>
        </div>
        <div className="flex items-center gap-3">
          <Star className="text-[#C81E3D] w-6 h-6 flex-shrink-0 fill-[#C81E3D]" />
          <span className="text-[11px] sm:text-xs font-bold text-slate-700 uppercase leading-tight tracking-wider">
            4.7/5<br />Student Rating
          </span>
        </div>
        <div className="flex items-center gap-3">
          <Landmark className="text-[#C81E3D] w-6 h-6 flex-shrink-0" />
          <span className="text-[11px] sm:text-xs font-bold text-slate-700 uppercase leading-tight tracking-wider">
            EMI<br />Available
          </span>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;