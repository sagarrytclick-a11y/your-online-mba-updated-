"use client";
import React, { createContext, useContext, useState, useEffect, useCallback } from "react";
import { collegeReviews, CollegeReview } from "../data/colleges";

const STORAGE_KEY = "compareUniversities";
const MAX_COMPARE = 4;

interface CompareContextType {
  compareIds: string[];
  compareColleges: CollegeReview[];
  add: (id: string) => void;
  remove: (id: string) => void;
  toggle: (id: string) => void;
  clear: () => void;
  isFull: boolean;
  includes: (id: string) => boolean;
  count: number;
}

const CompareContext = createContext<CompareContextType | undefined>(undefined);

export function CompareProvider({ children }: { children: React.ReactNode }) {
  const [compareIds, setCompareIds] = useState<string[]>([]);

  useEffect(() => {
    try {
      const stored = localStorage.getItem(STORAGE_KEY);
      if (stored) {
        const parsed = JSON.parse(stored);
        if (Array.isArray(parsed)) setCompareIds(parsed);
      }
    } catch { /* ignore */ }
  }, []);

  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(compareIds));
    } catch { /* ignore */ }
  }, [compareIds]);

  const add = useCallback((id: string) => {
    setCompareIds((prev) => prev.includes(id) || prev.length >= MAX_COMPARE ? prev : [...prev, id]);
  }, []);

  const remove = useCallback((id: string) => {
    setCompareIds((prev) => prev.filter((i) => i !== id));
  }, []);

  const toggle = useCallback((id: string) => {
    setCompareIds((prev) => prev.includes(id) ? prev.filter((i) => i !== id) : prev.length >= MAX_COMPARE ? prev : [...prev, id]);
  }, []);

  const clear = useCallback(() => setCompareIds([]), []);

  const isFull = compareIds.length >= MAX_COMPARE;
  const includes = useCallback((id: string) => compareIds.includes(id), [compareIds]);
  const count = compareIds.length;

  const compareColleges = compareIds
    .map((id) => collegeReviews.find((c) => c.id === id))
    .filter((c): c is CollegeReview => c !== undefined);

  return (
    <CompareContext.Provider value={{ compareIds, compareColleges, add, remove, toggle, clear, isFull, includes, count }}>
      {children}
    </CompareContext.Provider>
  );
}

export function useCompare() {
  const ctx = useContext(CompareContext);
  if (!ctx) throw new Error("useCompare must be used within CompareProvider");
  return ctx;
}
