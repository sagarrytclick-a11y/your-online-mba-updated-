"use client";
import React, { useState, useEffect, useCallback } from "react";
import { useRouter } from "next/navigation";
import { Loader2, Search, ChevronLeft, ChevronRight, LogOut, Trash2, AlertTriangle } from "lucide-react";

type Enquiry = {
  _id: string;
  name: string;
  phone: string;
  email: string;
  specialization: string;
  city: string;
  status: "pending" | "resolved" | "follow-up";
  createdAt: string;
};

const STATUS_OPTIONS = [
  { value: "", label: "All Status" },
  { value: "pending", label: "Pending" },
  { value: "follow-up", label: "Follow Up" },
  { value: "resolved", label: "Resolved" },
];

const STATUS_STYLES: Record<string, { bg: string; text: string }> = {
  pending: { bg: "bg-amber-50", text: "text-amber-700" },
  "follow-up": { bg: "bg-blue-50", text: "text-blue-700" },
  resolved: { bg: "bg-green-50", text: "text-green-700" },
};

export default function AdminDashboard() {
  const router = useRouter();
  const [enquiries, setEnquiries] = useState<Enquiry[]>([]);
  const [total, setTotal] = useState(0);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);
  const [statusFilter, setStatusFilter] = useState("");
  const [loading, setLoading] = useState(true);
  const [updatingId, setUpdatingId] = useState<string | null>(null);
  const [deleteTarget, setDeleteTarget] = useState<Enquiry | null>(null);
  const [deleting, setDeleting] = useState(false);

  const limit = 10;

  const fetchEnquiries = useCallback(async () => {
    setLoading(true);
    try {
      const params = new URLSearchParams({ page: String(page), limit: String(limit) });
      if (statusFilter) params.set("status", statusFilter);
      const res = await fetch(`/api/admin/enquiries?${params}`);
      if (res.status === 401) { router.push("/admin/login"); return; }
      const data = await res.json();
      setEnquiries(data.enquiries);
      setTotal(data.total);
      setTotalPages(data.totalPages);
    } finally {
      setLoading(false);
    }
  }, [page, statusFilter, router]);

  useEffect(() => { fetchEnquiries(); }, [fetchEnquiries]);

  const handleStatusChange = async (id: string, newStatus: string) => {
    if (!newStatus) return;
    setUpdatingId(id);
    try {
      await fetch("/api/admin/enquiries", {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ id, status: newStatus }),
      });
      fetchEnquiries();
    } finally {
      setUpdatingId(null);
    }
  };

  const handleDelete = async () => {
    if (!deleteTarget) return;
    setDeleting(true);
    try {
      await fetch("/api/admin/enquiries", {
        method: "DELETE",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ id: deleteTarget._id }),
      });
      setDeleteTarget(null);
      fetchEnquiries();
    } finally {
      setDeleting(false);
    }
  };

  const handleLogout = async () => {
    await fetch("/api/admin/logout", { method: "POST" });
    router.push("/admin/login");
    router.refresh();
  };

  const formatDate = (d: string) => {
    return new Date(d).toLocaleDateString("en-IN", {
      day: "numeric", month: "short", year: "numeric", hour: "2-digit", minute: "2-digit",
    });
  };

  return (
    <div className="min-h-screen bg-[#F8FAFC]">
      {/* Top bar */}
      <header className="bg-white border-b border-gray-200 px-6 py-4 flex items-center justify-between">
        <div>
          <h1 className="text-xl font-black text-[#1E293B]">Enquiries Dashboard</h1>
          <p className="text-xs text-[#475569] font-medium">{total} total enquiries</p>
        </div>
        <button onClick={handleLogout} className="flex items-center gap-2 px-4 py-2 text-sm font-bold text-[#1E293B] hover:text-[#C81E3D] transition-colors">
          <LogOut size={16} /> Logout
        </button>
      </header>

      <div className="max-w-7xl mx-auto px-6 py-8 space-y-6">
        {/* Filters */}
        <div className="flex flex-wrap items-center gap-4">
          <div className="relative">
            <Search size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-[#64748B]" />
            <input
              type="text" placeholder="Search enquiries..."
              className="w-full sm:w-64 h-10 pl-9 pr-4 border border-gray-200 rounded-xl text-sm text-[#1E293B] outline-none focus:border-[#C81E3D] transition-all"
            />
          </div>
          <div className="flex gap-2">
            {STATUS_OPTIONS.map((opt) => (
              <button
                key={opt.value}
                onClick={() => { setStatusFilter(opt.value); setPage(1); }}
                className={`px-4 py-2 rounded-full text-xs font-bold transition-all ${
                  statusFilter === opt.value
                    ? "bg-[#C81E3D] text-white"
                    : "bg-white border border-gray-200 text-[#1E293B] hover:border-[#C81E3D]/30"
                }`}
              >
                {opt.label}
              </button>
            ))}
          </div>
        </div>

        {/* Table */}
        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-[#F8FAFC] border-b border-gray-100">
                  <th className="text-left px-5 py-4 font-bold text-[#1E293B] text-xs uppercase tracking-wider">Name</th>
                  <th className="text-left px-5 py-4 font-bold text-[#1E293B] text-xs uppercase tracking-wider">Contact</th>
                  <th className="text-left px-5 py-4 font-bold text-[#1E293B] text-xs uppercase tracking-wider">Specialization</th>
                  <th className="text-left px-5 py-4 font-bold text-[#1E293B] text-xs uppercase tracking-wider">City</th>
                  <th className="text-left px-5 py-4 font-bold text-[#1E293B] text-xs uppercase tracking-wider">Status</th>
                  <th className="text-left px-5 py-4 font-bold text-[#1E293B] text-xs uppercase tracking-wider">Date</th>
                  <th className="text-left px-5 py-4 font-bold text-[#1E293B] text-xs uppercase tracking-wider">Action</th>
                </tr>
              </thead>
              <tbody>
                {loading ? (
                  <tr>
                    <td colSpan={7} className="text-center py-20">
                      <Loader2 size={24} className="animate-spin mx-auto text-[#64748B]" />
                    </td>
                  </tr>
                ) : enquiries.length === 0 ? (
                  <tr>
                    <td colSpan={7} className="text-center py-20 text-[#64748B] font-medium">
                      No enquiries found
                    </td>
                  </tr>
                ) : (
                  enquiries.map((e) => {
                    const st = STATUS_STYLES[e.status] || STATUS_STYLES.pending;
                    return (
                      <tr key={e._id} className="border-b border-gray-50 hover:bg-[#FAFAFA] transition-colors">
                        <td className="px-5 py-4 font-bold text-[#1E293B]">{e.name}</td>
                        <td className="px-5 py-4">
                          <div className="text-[#1E293B] font-semibold">{e.phone}</div>
                          <div className="text-[#64748B] text-xs">{e.email}</div>
                        </td>
                        <td className="px-5 py-4 text-[#1E293B] font-medium">{e.specialization}</td>
                        <td className="px-5 py-4 text-[#1E293B]">{e.city}</td>
                        <td className="px-5 py-4">
                          <span className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-bold ${st.bg} ${st.text}`}>
                            {e.status === "follow-up" ? "Follow Up" : e.status.charAt(0).toUpperCase() + e.status.slice(1)}
                          </span>
                        </td>
                        <td className="px-5 py-4 text-[#475569] text-xs font-medium">{formatDate(e.createdAt)}</td>
                        <td className="px-5 py-4">
                          <div className="flex items-center gap-2">
                            <select
                              value={e.status}
                              onChange={(ev) => handleStatusChange(e._id, ev.target.value)}
                              disabled={updatingId === e._id}
                              className="px-2 py-1.5 rounded-lg border border-gray-200 text-xs font-bold text-[#1E293B] bg-white outline-none focus:border-[#C81E3D] transition-all disabled:opacity-50 cursor-pointer"
                            >
                              <option value="pending">Pending</option>
                              <option value="follow-up">Follow Up</option>
                              <option value="resolved">Resolved</option>
                            </select>
                            <button
                              onClick={() => setDeleteTarget(e)}
                              className="p-1.5 rounded-lg text-[#94A3B8] hover:text-[#C81E3D] hover:bg-red-50 transition-all"
                              title="Delete"
                            >
                              <Trash2 size={15} />
                            </button>
                          </div>
                        </td>
                      </tr>
                    );
                  })
                )}
              </tbody>
            </table>
          </div>
        </div>

        {/* Pagination */}
        {totalPages > 1 && (
          <div className="flex items-center justify-center gap-4">
            <button
              disabled={page <= 1}
              onClick={() => setPage(page - 1)}
              className="flex items-center gap-1 px-4 py-2 rounded-xl border border-gray-200 text-sm font-bold text-[#1E293B] hover:border-[#C81E3D]/30 disabled:opacity-40 transition-all"
            >
              <ChevronLeft size={16} /> Previous
            </button>
            <span className="text-sm font-bold text-[#1E293B]">
              Page {page} of {totalPages}
            </span>
            <button
              disabled={page >= totalPages}
              onClick={() => setPage(page + 1)}
              className="flex items-center gap-1 px-4 py-2 rounded-xl border border-gray-200 text-sm font-bold text-[#1E293B] hover:border-[#C81E3D]/30 disabled:opacity-40 transition-all"
            >
              Next <ChevronRight size={16} />
            </button>
          </div>
        )}

        {/* Delete Confirmation Modal */}
        {deleteTarget && (
          <div className="fixed inset-0 z-50 flex items-center justify-center px-4">
            <div className="absolute inset-0 bg-black/40 backdrop-blur-sm" onClick={() => setDeleteTarget(null)} />
            <div className="relative w-full max-w-sm bg-white rounded-2xl shadow-2xl p-8 text-center space-y-5">
              <div className="w-14 h-14 bg-red-50 rounded-full flex items-center justify-center mx-auto">
                <AlertTriangle size={28} className="text-[#C81E3D]" />
              </div>
              <div className="space-y-2">
                <h3 className="text-lg font-black text-[#1E293B]">Delete Enquiry?</h3>
                <p className="text-sm text-[#64748B] font-medium">
                  Are you sure you want to delete <span className="font-bold text-[#1E293B]">{deleteTarget.name}</span>&apos;s enquiry? This action cannot be undone.
                </p>
              </div>
              <div className="flex gap-3 pt-2">
                <button
                  onClick={() => setDeleteTarget(null)}
                  className="flex-1 h-11 rounded-xl border border-gray-200 text-sm font-bold text-[#1E293B] hover:bg-gray-50 transition-all"
                >
                  Cancel
                </button>
                <button
                  onClick={handleDelete}
                  disabled={deleting}
                  className="flex items-center justify-center gap-2 flex-1 h-11 rounded-xl bg-[#C81E3D] hover:bg-[#B01A33] text-white text-sm font-bold transition-all disabled:opacity-60"
                >
                  {deleting ? <Loader2 size={16} className="animate-spin" /> : null}
                  {deleting ? "Deleting..." : "Delete"}
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
