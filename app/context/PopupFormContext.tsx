"use client";
import React, { createContext, useContext, useState, useCallback } from "react";

interface PopupFormContextType {
  isOpen: boolean;
  open: () => void;
  close: () => void;
}

const PopupFormContext = createContext<PopupFormContextType | undefined>(undefined);

export function PopupFormProvider({ children }: { children: React.ReactNode }) {
  const [isOpen, setIsOpen] = useState(false);

  const open = useCallback(() => setIsOpen(true), []);
  const close = useCallback(() => setIsOpen(false), []);

  return (
    <PopupFormContext.Provider value={{ isOpen, open, close }}>
      {children}
    </PopupFormContext.Provider>
  );
}

export function usePopupForm() {
  const ctx = useContext(PopupFormContext);
  if (!ctx) throw new Error("usePopupForm must be used within PopupFormProvider");
  return ctx;
}
