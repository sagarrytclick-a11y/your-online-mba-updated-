"use client";
import React, { useState } from "react";
import { X, ChevronDown, Check, Loader2 } from "lucide-react";
import { usePopupForm } from "../context/PopupFormContext";
import { counsellingSchema } from "../lib/validation";

const PopupForm = () => {
  const { isOpen, close } = usePopupForm();
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

  const handleClose = () => {
    close();
    setTimeout(() => {
      setSubmitted(false);
      setForm({ name: "", phone: "", email: "", specialization: "", city: "" });
      setError("");
    }, 300);
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center px-4">
      <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" onClick={handleClose} />
      <div className="relative w-full max-w-md bg-white rounded-[36px] p-6 sm:p-8 lg:p-9 border-2 border-[#C81E3D] shadow-2xl animate-in fade-in zoom-in duration-200">
        <button
          onClick={handleClose}
          className="absolute top-4 right-4 w-8 h-8 flex items-center justify-center rounded-full bg-gray-100 hover:bg-gray-200 transition-colors"
        >
          <X size={16} className="text-gray-600" />
        </button>

        {submitted ? (
          <div className="py-10 text-center space-y-3">
            <div className="w-14 h-14 bg-[#FFF1F2] rounded-full flex items-center justify-center mx-auto">
              <Check size={28} className="text-[#C81E3D] stroke-[3]" />
            </div>
            <h3 className="text-[#1E293B] font-bold text-xl">Request Submitted!</h3>
            <p className="text-slate-500 text-sm font-medium">Our expert will reach out to you shortly.</p>
            <button
              onClick={handleClose}
              className="mt-4 px-6 py-2.5 bg-[#C81E3D] hover:bg-[#B01A33] text-white font-bold rounded-full transition-all text-sm"
            >
              Close
            </button>
          </div>
        ) : (
          <>
            <h3 className="text-[#C81E3D] text-center text-lg sm:text-xl font-bold mb-6 tracking-wide">
              Free Expert Counselling
            </h3>
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
              Talk to an expert & find the best UGC, DEB, NAAC, A++ approved MBA under ₹2L
            </p>
          </>
        )}
      </div>
    </div>
  );
};

export default PopupForm;
