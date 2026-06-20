"use client";
import React, { useState, useRef } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ChevronDown, Menu, X, Sparkles } from 'lucide-react';
import { programs } from '../data/programs';
import { specialisations } from '../data/specialisations';
import { collegeReviews } from '../data/colleges';
import PopupTrigger from './PopupTrigger';
import CourseMateChat from './CourseMateChat';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [hoveredMenu, setHoveredMenu] = useState<string | null>(null);
  const [chatOpen, setChatOpen] = useState(false);
  const [mobileDropdown, setMobileDropdown] = useState<string | null>(null);
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const handleMouseEnter = (menu: string) => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    setHoveredMenu(menu);
  };

  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => setHoveredMenu(null), 150);
  };

  return (
    <header className="w-full bg-white border-b border-gray-100 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">

          {/* LEFT: Logos */}
          <div className="flex items-center space-x-6 flex-shrink-0">
            <Link href="/" className="flex-shrink-0">
              <Image
                src="/logo.png"
                alt="EdHike Online MBA"
                width={180}
                height={50}
                className="h-[50px] w-auto"
                priority
              />
            </Link>
          </div>

          {/* CENTER: Desktop Nav */}
          <nav className="hidden lg:flex items-center justify-center flex-1 gap-8">
            {/* Specializations Dropdown */}
            <div
              className="relative"
              onMouseEnter={() => handleMouseEnter("specializations")}
              onMouseLeave={handleMouseLeave}
            >
              <button className="flex items-center space-x-1 text-[#12141D] text-[15px] font-bold hover:text-[#C81E3D] transition-colors">
                <span>Specializations</span>
                <ChevronDown size={18} className="text-gray-400 transition-transform duration-200" />
              </button>
              {hoveredMenu === "specializations" && (
                <div className="absolute top-full left-0 mt-3 w-[600px] bg-white rounded-2xl shadow-xl border border-gray-100 p-6 grid grid-cols-2 gap-3 z-50">
                  {specialisations.map((spec) => (
                    <Link
                      key={spec.slug}
                      href={`/specialisations/${spec.slug}`}
                      className="group flex items-start gap-3 p-3 rounded-xl hover:bg-[#FFF1F2] transition-all"
                    >
                      <div className="w-10 h-10 rounded-lg bg-[#FFF1F2] flex items-center justify-center flex-shrink-0 mt-0.5">
                        <span className="text-[#C81E3D] font-bold text-sm">
                          {spec.title.split(" ").map(w => w[0]).slice(0, 2).join("")}
                        </span>
                      </div>
                      <div className="min-w-0">
                        <p className="text-[#1E293B] font-bold text-sm group-hover:text-[#C81E3D] transition-colors truncate">
                          {spec.title}
                        </p>
                        <p className="text-[#94A3B8] text-xs mt-0.5">{spec.salaryRange}</p>
                      </div>
                    </Link>
                  ))}
                </div>
              )}
            </div>

            {/* Programs Dropdown */}
            <div
              className="relative"
              onMouseEnter={() => handleMouseEnter("programs")}
              onMouseLeave={handleMouseLeave}
            >
              <button className="flex items-center space-x-1 text-[#12141D] text-[15px] font-bold hover:text-[#C81E3D] transition-colors">
                <span>Programs</span>
                <ChevronDown size={18} className="text-gray-400 transition-transform duration-200" />
              </button>
              {hoveredMenu === "programs" && (
                <div className="absolute top-full left-0 mt-3 w-[280px] bg-white rounded-2xl shadow-xl border border-gray-100 p-4 z-50">
                  <div className="grid grid-cols-1 gap-1">
                    {programs.map((program) => (
                      <Link
                        key={program.id}
                        href={`/programs/${program.slug}`}
                        className="block px-4 py-2.5 rounded-lg text-[#1E293B] font-bold text-sm hover:bg-[#FFF1F2] hover:text-[#C81E3D] transition-all"
                      >
                        {program.title}
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Universities Dropdown */}
            <div
              className="relative"
              onMouseEnter={() => handleMouseEnter("universities")}
              onMouseLeave={handleMouseLeave}
            >
              <button className="flex items-center space-x-1 text-[#12141D] text-[15px] font-bold hover:text-[#C81E3D] transition-colors">
                <Link href="/universities" className="hover:text-[#C81E3D] transition-colors">Universities</Link>
                <ChevronDown size={18} className="text-gray-400 transition-transform duration-200" />
              </button>
              {hoveredMenu === "universities" && (
                <div className="absolute top-full left-0 mt-3 w-[280px] bg-white rounded-2xl shadow-xl border border-gray-100 p-4 z-50 max-h-[70vh] overflow-y-auto">
                  <div className="grid grid-cols-1 gap-1">
                    <Link
                      href="/universities"
                      className="block px-4 py-2.5 rounded-lg text-[#C81E3D] font-extrabold text-sm hover:bg-[#FFF1F2] transition-all border-b border-gray-100 mb-1"
                    >
                      View All Universities
                    </Link>
                    {collegeReviews.map((col) => (
                      <Link
                        key={col.id}
                        href={`/universities/${col.id}`}
                        className="block px-4 py-2.5 rounded-lg text-[#1E293B] font-bold text-sm hover:bg-[#FFF1F2] hover:text-[#C81E3D] transition-all"
                      >
                        {col.name}
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Compare */}
            <Link href="/compare" className="text-[#12141D] text-[15px] font-bold hover:text-[#C81E3D] transition-colors">
              Compare
            </Link>

            {/* Reviews */}
            <Link href="/reviews" className="text-[#12141D] text-[15px] font-bold hover:text-[#C81E3D] transition-colors">
              Reviews
            </Link>

            {/* Contact Us */}
            <Link href="/contact-us" className="text-[#12141D] text-[15px] font-bold hover:text-[#C81E3D] transition-colors">
              Contact Us
            </Link>
          </nav>

          {/* RIGHT: CourseMate AI + Mobile Toggle */}
          <div className="flex items-center gap-4">
            <button onClick={() => setChatOpen(true)} className="hidden lg:flex items-center space-x-3 px-6 py-3 rounded-full border-2 border-gray-900 hover:border-[#C81E3D] transition-all group">
              <div className="w-6 h-6 bg-gradient-to-br from-[#C81E3D] to-[#B01A33] rounded-full flex items-center justify-center">
                <Sparkles size={14} className="text-white" />
              </div>
              <span className="text-[#12141D] font-extrabold text-[15px] group-hover:text-[#C81E3D]">CourseMate AI</span>
            </button>

          {/* MOBILE: Toggle Button */}
          <div className="lg:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-900 p-2 hover:bg-gray-100 rounded-lg transition-colors"
            >
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
          </div>
        </div>
      </div>

      {/* MOBILE MENU */}
      {isOpen && (
        <nav className="lg:hidden bg-white border-t border-gray-100 absolute w-full left-0 shadow-xl px-6 py-8 space-y-4 max-h-[80vh] overflow-y-auto" aria-label="Mobile navigation">
          {/* Specializations Accordion */}
          <div>
            <button
              onClick={() => setMobileDropdown(mobileDropdown === "specializations" ? null : "specializations")}
              className="flex items-center justify-between w-full text-[#C81E3D] text-[11px] font-bold tracking-widest uppercase mb-1"
            >
              <span>Specializations</span>
              <ChevronDown size={16} className={`text-[#C81E3D] transition-transform duration-200 ${mobileDropdown === "specializations" ? "rotate-180" : ""}`} />
            </button>
            {mobileDropdown === "specializations" && (
              <div className="grid grid-cols-1 gap-1 pt-2 pb-1">
                {specialisations.map((spec) => (
                  <Link
                    key={spec.slug}
                    href={`/specialisations/${spec.slug}`}
                    onClick={() => setIsOpen(false)}
                    className="block text-sm font-bold text-gray-900 hover:text-[#C81E3D] py-2 px-2 rounded-lg hover:bg-[#FFF1F2] transition-all"
                  >
                    {spec.title}
                  </Link>
                ))}
              </div>
            )}
          </div>
          <div className="h-[1px] bg-gray-100" />
          
          {/* Programs Accordion */}
          <div>
            <button
              onClick={() => setMobileDropdown(mobileDropdown === "programs" ? null : "programs")}
              className="flex items-center justify-between w-full text-[#C81E3D] text-[11px] font-bold tracking-widest uppercase mb-1"
            >
              <span>Programs</span>
              <ChevronDown size={16} className={`text-[#C81E3D] transition-transform duration-200 ${mobileDropdown === "programs" ? "rotate-180" : ""}`} />
            </button>
            {mobileDropdown === "programs" && (
              <div className="grid grid-cols-1 gap-1 pt-2 pb-1">
                {programs.map((program) => (
                  <Link
                    key={program.id}
                    href={`/programs/${program.slug}`}
                    onClick={() => setIsOpen(false)}
                    className="block text-sm font-bold text-gray-900 hover:text-[#C81E3D] py-2 px-2 rounded-lg hover:bg-[#FFF1F2] transition-all"
                  >
                    {program.title}
                  </Link>
                ))}
              </div>
            )}
          </div>
          <div className="h-[1px] bg-gray-100" />
          
          {/* Universities Accordion */}
          <div>
            <button
              onClick={() => setMobileDropdown(mobileDropdown === "universities" ? null : "universities")}
              className="flex items-center justify-between w-full text-[#C81E3D] text-[11px] font-bold tracking-widest uppercase mb-1"
            >
              <span>Universities</span>
              <ChevronDown size={16} className={`text-[#C81E3D] transition-transform duration-200 ${mobileDropdown === "universities" ? "rotate-180" : ""}`} />
            </button>
            {mobileDropdown === "universities" && (
              <div className="grid grid-cols-1 gap-1 pt-2 pb-1">
                <Link
                  href="/universities"
                  onClick={() => setIsOpen(false)}
                  className="block text-sm font-extrabold text-[#C81E3D] py-2 px-2 rounded-lg hover:bg-[#FFF1F2] transition-all border-b border-gray-100 mb-1"
                >
                  View All Universities
                </Link>
                {collegeReviews.map((col) => (
                  <Link
                    key={col.id}
                    href={`/universities/${col.id}`}
                    onClick={() => setIsOpen(false)}
                    className="block text-sm font-bold text-gray-900 hover:text-[#C81E3D] py-2 px-2 rounded-lg hover:bg-[#FFF1F2] transition-all"
                  >
                    {col.name}
                  </Link>
                ))}
              </div>
            )}
          </div>
          <div className="h-[1px] bg-gray-100" />
          
          <Link href="/compare" onClick={() => setIsOpen(false)} className="block text-lg font-bold text-gray-900">Compare</Link>
          <div className="h-[1px] bg-gray-100" />
          <Link href="/reviews" onClick={() => setIsOpen(false)} className="block text-lg font-bold text-gray-900">Reviews</Link>
          <div className="h-[1px] bg-gray-100" />
          <Link href="/contact-us" onClick={() => setIsOpen(false)} className="block text-lg font-bold text-gray-900">Contact Us</Link>
          <div className="pt-6">
            <button onClick={() => { setChatOpen(true); setIsOpen(false); }} className="w-full flex items-center justify-center space-x-3 px-5 py-4 rounded-full bg-gray-900 text-white font-bold hover:bg-[#C81E3D] transition-colors">
              <Sparkles size={16} />
              <span>CourseMate AI</span>
            </button>
          </div>
        </nav>
      )}

      {/* CourseMate AI Chat Panel */}
      <CourseMateChat isOpen={chatOpen} onClose={() => setChatOpen(false)} />
    </header>
  );
};

export default Header;
