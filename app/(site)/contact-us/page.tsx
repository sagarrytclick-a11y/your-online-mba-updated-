"use client";

import React, { useState } from 'react';
import * as Icons from 'lucide-react';
import { counsellingSchema } from '../../lib/validation';
import { siteConfig } from '../../data/site';

export default function ContactUs() {
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

  const inputClass = (field: string) =>
    `w-full h-12 px-4 border ${fieldErrors[field] ? 'border-[#C81E3D]' : 'border-gray-200'} bg-[#F8FAFC]/50 rounded-[12px] text-sm text-gray-900 placeholder-gray-400 outline-none focus:border-[#C81E3D] focus:bg-white focus:ring-1 focus:ring-[#C81E3D]/30 transition-all font-medium`;

  return (
    <div className="min-h-screen bg-white font-sans text-slate-900">
      
      {/* SECTION 1: HERO & COUNSELLING FORM GRID */}
      <section className="py-16 md:py-24 px-4 sm:px-6 lg:px-8 bg-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8 md:gap-12 items-center relative z-10">
          
          {/* Left Column: Text & Features */}
          <div className="lg:col-span-6 space-y-8">
            <h1 className="text-2xl sm:text-4xl md:text-5xl lg:text-[52px] font-extrabold text-[#1E293B] leading-tight tracking-tight">
              Get Free Counselling Now
            </h1>
            <p className="text-slate-500 text-base md:text-lg font-medium leading-relaxed max-w-xl">
              Talk to our experts and get personalized guidance to choose the right career path with confidence.
            </p>

            {/* Checklist */}
            <div className="space-y-4 pt-2">
              {[
                "1 on 1 guidance from career experts",
                "Personalized roadmap based on your goals",
                "University & program shortlisting support",
                "Career clarity within a single session"
              ].map((text, i) => (
                <div key={i} className="flex items-center gap-3">
                  <div className="w-6 h-6 rounded-full border-2 border-[#C81E3D] flex items-center justify-center flex-shrink-0 bg-white">
                    <Icons.Check size={14} className="text-[#C81E3D] stroke-[3]" />
                  </div>
                  <span className="text-slate-700 font-bold text-sm md:text-base">{text}</span>
                </div>
              ))}
            </div>

            <div className="border-t border-gray-100 my-8 pt-8">
              {/* Stats Row */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <div>
                  <div className="text-2xl md:text-3xl font-black text-[#C81E3D]">5,00,000+</div>
                  <div className="text-[10px] md:text-xs uppercase font-bold text-slate-400 tracking-wider mt-1">Learners Guided</div>
                </div>
                <div>
                  <div className="text-2xl md:text-3xl font-black text-[#C81E3D]">50+</div>
                  <div className="text-[10px] md:text-xs uppercase font-bold text-slate-400 tracking-wider mt-1">Expert Counselors</div>
                </div>
                <div>
                  <div className="text-2xl md:text-3xl font-black text-[#C81E3D]">95%</div>
                  <div className="text-[10px] md:text-xs uppercase font-bold text-slate-400 tracking-wider mt-1">Success Rate</div>
                </div>
              </div>
            </div>

            {/* Bottom note with bolt */}
            <div className="flex items-center gap-2 text-xs md:text-sm text-slate-400 font-extrabold uppercase tracking-wider">
              <span className="text-yellow-500">⚡</span>
              <span>100% Free • Expert backed advice</span>
            </div>
          </div>

          {/* Right Column: Form Container */}
          <div className="lg:col-span-6 w-full max-w-xl mx-auto">
            <div className="bg-white border-2 border-[#C81E3D] rounded-[32px] p-6 sm:p-8 lg:p-10 shadow-2xl relative">
              
              {submitted ? (
                <div className="py-16 text-center space-y-4">
                  <div className="w-16 h-16 bg-[#FFF1F2] rounded-full flex items-center justify-center mx-auto text-[#C81E3D]">
                    <Icons.CheckCircle2 size={36} />
                  </div>
                  <h3 className="text-2xl font-bold text-slate-800">Counselling Requested!</h3>
                  <p className="text-slate-500 font-medium max-w-sm mx-auto">
                    Thank you! Our expert advisor will call you within 24 hours to help guide your MBA journey.
                  </p>
                </div>
              ) : (
                <>
                  <div className="text-center mb-8">
                    <span className="text-[#C81E3D] font-extrabold text-sm md:text-base uppercase tracking-wider text-center block mb-1">
                      Get Free Counselling
                    </span>
                    <span className="text-slate-500 text-xs md:text-sm font-semibold text-center block">
                      Talk to experts & get personalized guidance
                    </span>
                  </div>

                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <input
                          name="name" value={form.name} onChange={handleChange}
                          type="text" required placeholder="Full Name *"
                          className={inputClass("name")}
                        />
                        {fieldErrors.name && <p className="text-[#C81E3D] text-xs font-semibold mt-1">{fieldErrors.name}</p>}
                      </div>
                      <div>
                        <input
                          name="phone" value={form.phone} onChange={handleChange}
                          type="tel" required placeholder="Phone *"
                          className={inputClass("phone")}
                        />
                        {fieldErrors.phone && <p className="text-[#C81E3D] text-xs font-semibold mt-1">{fieldErrors.phone}</p>}
                      </div>
                    </div>

                    <div>
                      <input
                        name="email" value={form.email} onChange={handleChange}
                        type="email" required placeholder="Email *"
                        className={inputClass("email")}
                      />
                      {fieldErrors.email && <p className="text-[#C81E3D] text-xs font-semibold mt-1">{fieldErrors.email}</p>}
                    </div>

                    <div className="relative">
                      <select
                        name="specialization" value={form.specialization} onChange={handleChange}
                        required
                        className="w-full h-12 px-4 pr-10 border border-gray-200 bg-[#F8FAFC]/50 rounded-[12px] text-sm text-gray-500 appearance-none outline-none focus:border-[#C81E3D] focus:bg-white transition-all font-medium"
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
                        <Icons.ChevronDown size={16} />
                      </div>
                      {fieldErrors.specialization && <p className="text-[#C81E3D] text-xs font-semibold mt-1">{fieldErrors.specialization}</p>}
                    </div>

                    <div>
                      <input
                        name="city" value={form.city} onChange={handleChange}
                        type="text" required placeholder="City *"
                        className={inputClass("city")}
                      />
                      {fieldErrors.city && <p className="text-[#C81E3D] text-xs font-semibold mt-1">{fieldErrors.city}</p>}
                    </div>

                    {error && <p className="text-[#C81E3D] text-xs font-semibold text-center">{error}</p>}

                    <div className="text-center text-[10px] text-slate-400 font-extrabold uppercase tracking-wider mb-2 pt-1">
                      Get expert guidance for the right program
                    </div>

                    <button
                      type="submit" disabled={loading}
                      className="w-full h-14 bg-[#D15B6F] hover:bg-[#C81E3D] text-white font-extrabold rounded-full shadow-lg transition-all active:scale-[0.98] text-sm md:text-base tracking-wider flex items-center justify-center gap-2 disabled:opacity-70"
                    >
                      {loading && <Icons.Loader2 size={18} className="animate-spin" />}
                      {loading ? "Sending..." : "Get Free Counselling"}
                    </button>
                  </form>
                </>
              )}

            </div>
          </div>

        </div>
      </section>

      {/* SECTION 2: WHY EXPERT GUIDANCE SECTION (Red block) */}
      <section className="bg-[#C81E3D] py-16 md:py-24 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
        {/* Subtle background circles */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-white/5 rounded-full blur-3xl -mr-20 -mt-20 pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-black/10 rounded-full blur-2xl -ml-20 -mb-20 pointer-events-none" />

        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8 md:gap-12 items-center relative z-10">
          
          {/* Left Column: Why Counselling */}
          <div className="lg:col-span-7 text-white space-y-6 md:space-y-8">
            <h2 className="text-3xl sm:text-4xl lg:text-[44px] font-black tracking-tight leading-tight">
              Make the Right Career Move with Expert Guidance, Not Guesswork
            </h2>
            <p className="text-rose-100 text-sm sm:text-base md:text-lg font-medium leading-relaxed max-w-2xl opacity-90">
              Choosing the wrong course, college, or career path can cost you years. Our role is simple: Help you make informed, confident decisions backed by experience.
            </p>

            {/* Divider line */}
            <div className="border-t border-rose-400/40 my-6 pt-6" />

            {/* 2x2 Feature Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-6">
              <div className="space-y-1">
                <h4 className="font-extrabold text-base md:text-lg text-white">Personalised Career Mapping</h4>
                <p className="text-rose-100/80 text-xs sm:text-sm leading-relaxed font-semibold">
                  We evaluate your background, goals, and constraints to suggest realistic, high impact paths, not generic options.
                </p>
              </div>
              <div className="space-y-1">
                <h4 className="font-extrabold text-base md:text-lg text-white">Honest, Unbiased Advice</h4>
                <p className="text-rose-100/80 text-xs sm:text-sm leading-relaxed font-semibold">
                  No pressure, no pushing. We tell you what works, what doesn&apos;t, and what fits you best.
                </p>
              </div>
              <div className="space-y-1">
                <h4 className="font-extrabold text-base md:text-lg text-white">Clarity Before Commitment</h4>
                <p className="text-rose-100/80 text-xs sm:text-sm leading-relaxed font-semibold">
                  Understand outcomes, timelines, costs, and career scope before you invest your time or money.
                </p>
              </div>
              <div className="space-y-1">
                <h4 className="font-extrabold text-base md:text-lg text-white">Support Beyond the Call</h4>
                <p className="text-rose-100/80 text-xs sm:text-sm leading-relaxed font-semibold">
                  Our guidance doesn&apos;t end in one conversation, we help you think through your next steps.
                </p>
              </div>
            </div>

            {/* "This counselling is ideal if you are" */}
            <div className="pt-4 space-y-3">
              <h5 className="font-extrabold text-white text-sm md:text-base uppercase tracking-wider">
                This counselling is ideal if you are:
              </h5>
              <ul className="space-y-2 text-rose-100/90 text-xs sm:text-sm font-semibold pl-2">
                <li className="flex items-start gap-2">
                  <span>•</span> Confused between multiple career or study options
                </li>
                <li className="flex items-start gap-2">
                  <span>•</span> Unsure whether to study in India or abroad
                </li>
                <li className="flex items-start gap-2">
                  <span>•</span> Worried about ROI, placements, or long term scope
                </li>
                <li className="flex items-start gap-2">
                  <span>•</span> Looking for clarity before making a big decision
                </li>
              </ul>
            </div>
          </div>

          {/* Right Column: Students Image */}
          <div className="lg:col-span-5 flex flex-col items-center">
            <div className="relative w-full max-w-md aspect-[4/3] rounded-[24px] overflow-hidden shadow-2xl border-4 border-white/15">
              <img
                src="https://i.pinimg.com/736x/c6/be/bb/c6bebb5937b11525dfaf76ad245280f7.jpg"
                alt="Indian College Students"
                className="object-cover w-full h-full"
              />
            </div>
            <p className="text-center text-xs md:text-sm text-rose-100/85 font-medium mt-6 max-w-sm leading-relaxed px-4">
              Trusted by thousands of students who wanted clarity, not confusion. Speak to real experts who listen before they advise.
            </p>
          </div>

        </div>
      </section>

      {/* SECTION 3: OFFICE LOCATION MAP */}
      <section className="w-full h-[450px] relative">
        <iframe
          src={`https://maps.google.com/maps?q=${encodeURIComponent(siteConfig.name + ", " + siteConfig.city)}&t=&z=15&ie=UTF8&iwloc=&output=embed`}
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          className="grayscale opacity-90 contrast-125"
        />
        <div className="absolute top-4 left-4 bg-white px-4 py-3 rounded-xl shadow-lg border border-slate-100 z-10 hidden sm:block">
          <div className="flex items-center gap-2">
            <Icons.MapPin className="text-[#C81E3D] w-5 h-5 flex-shrink-0" />
            <div>
              <p className="text-xs font-bold text-slate-800 leading-none">{siteConfig.name}</p>
              <p className="text-[10px] text-slate-500 font-semibold mt-1">{siteConfig.address}</p>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 4: CONTACT CARDS */}
      <section className="bg-white py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto space-y-12">
          
          <div className="text-center">
            <h3 className="text-3xl font-black text-slate-800 tracking-tight">
              Call or Email Us
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Call Us Card */}
            <div className="bg-white p-8 rounded-[24px] shadow-lg hover:shadow-xl border border-gray-100 text-center flex flex-col items-center group hover:border-[#C81E3D]/30 transition-all duration-300">
              <div className="w-12 h-12 bg-[#FFF1F2] rounded-full flex items-center justify-center mb-5 text-[#C81E3D]">
                <Icons.Phone size={22} className="stroke-[2.5]" />
              </div>
              <h4 className="text-[#1E293B] font-bold text-sm uppercase tracking-wider mb-2">Call Us</h4>
              <a href={`tel:${siteConfig.phone}`} className="text-2xl font-extrabold text-[#C81E3D] hover:underline leading-none">
                {siteConfig.phoneDisplay}
              </a>
              <p className="text-xs text-slate-400 font-bold uppercase tracking-wider mt-4">Tap to call our advisors</p>
            </div>

            {/* Email Us Card */}
            <div className="bg-white p-8 rounded-[24px] shadow-lg hover:shadow-xl border border-gray-100 text-center flex flex-col items-center group hover:border-[#C81E3D]/30 transition-all duration-300">
              <div className="w-12 h-12 bg-[#FFF1F2] rounded-full flex items-center justify-center mb-5 text-[#C81E3D]">
                <Icons.Mail size={22} className="stroke-[2.5]" />
              </div>
              <h4 className="text-[#1E293B] font-bold text-sm uppercase tracking-wider mb-2">Email Us</h4>
              <a href={`mailto:${siteConfig.email}`} className="text-2xl font-extrabold text-[#C81E3D] hover:underline leading-none">
                {siteConfig.email}
              </a>
              <p className="text-xs text-slate-400 font-bold uppercase tracking-wider mt-4">We usually reply within 24 hours</p>
            </div>
          </div>

        </div>
      </section>

    </div>
  );
}
