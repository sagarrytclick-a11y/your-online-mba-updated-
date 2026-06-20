"use client";
import React from "react";
import { usePopupForm } from "../context/PopupFormContext";

interface PopupTriggerProps {
  children: React.ReactNode;
  className?: string;
}

const PopupTrigger = ({ children, className }: PopupTriggerProps) => {
  const { open } = usePopupForm();
  return (
    <button type="button" onClick={open} className={className}>
      {children}
    </button>
  );
};

export default PopupTrigger;
