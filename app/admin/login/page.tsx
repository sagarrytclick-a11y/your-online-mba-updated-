"use client";
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { Loader2 } from "lucide-react";

export default function AdminLogin() {
  const router = useRouter();
  const [form, setForm] = useState({ username: "", password: "" });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError("");
    try {
      const res = await fetch("/api/admin/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      if (!res.ok) {
        const data = await res.json();
        throw new Error(data.error || "Login failed");
      }
      router.push("/admin");
      router.refresh();
    } catch (err) {
      setError(err instanceof Error ? err.message : "Something went wrong");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-[#F8FAFC] flex items-center justify-center px-4">
      <div className="w-full max-w-sm bg-white rounded-2xl shadow-lg border border-gray-100 p-8">
        <div className="text-center mb-8 space-y-4">
          <img src="/logo.png" alt="EdHike" className="h-14 mx-auto" />
          <div>
            <h1 className="text-2xl font-black text-[#1E293B]">Admin Login</h1>
            <p className="text-[#475569] text-sm font-medium mt-1">Enter your credentials</p>
          </div>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            name="username" value={form.username}
            onChange={(e) => setForm({ ...form, username: e.target.value })}
            type="text" required placeholder="Username"
            className="w-full h-12 px-4 border border-gray-200 rounded-xl text-sm text-[#1E293B] outline-none focus:border-[#C81E3D] transition-all font-medium"
          />
          <input
            name="password" value={form.password}
            onChange={(e) => setForm({ ...form, password: e.target.value })}
            type="password" required placeholder="Password"
            className="w-full h-12 px-4 border border-gray-200 rounded-xl text-sm text-[#1E293B] outline-none focus:border-[#C81E3D] transition-all font-medium"
          />
          {error && <p className="text-[#C81E3D] text-xs font-semibold text-center">{error}</p>}
          <button
            type="submit" disabled={loading}
            className="w-full h-12 bg-[#C81E3D] hover:bg-[#B01A33] text-white font-bold rounded-xl transition-all flex items-center justify-center gap-2 disabled:opacity-70"
          >
            {loading && <Loader2 size={18} className="animate-spin" />}
            {loading ? "Signing in..." : "Sign In"}
          </button>
        </form>
      </div>
    </div>
  );
}
