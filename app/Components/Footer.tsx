import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Phone, Mail, MapPin } from 'lucide-react';
import { FaLinkedin, FaFacebook, FaInstagram, FaYoutube } from 'react-icons/fa';
import { siteConfig } from '../data/site';

const socialIcons: Record<string, React.ReactNode> = {
  FaLinkedin: <FaLinkedin size={18} />,
  FaFacebook: <FaFacebook size={18} />,
  FaInstagram: <FaInstagram size={18} />,
  FaYoutube: <FaYoutube size={18} />,
};

const Footer = () => {
  return (
    <footer className="w-full bg-[#F8FAFC] border-t-4 border-[#C81E3D] pt-16 pb-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 lg:gap-20 items-start justify-items-center md:justify-items-stretch">
          
          <div className="flex flex-col items-center md:items-start text-center md:text-left space-y-6 max-w-sm">
            <div className="flex flex-col items-center">
              <Link href="/">
                <Image
                  src="/logo.png"
                  alt="EdHike Online MBA"
                  width={180}
                  height={50}
                  className="h-[50px] w-auto"
                />
              </Link>
            </div>

            <p className="text-slate-500 text-sm font-semibold leading-relaxed">
              {siteConfig.description}
            </p>

            <div className="flex items-center gap-3">
              {siteConfig.socials.map((social) => (
                <a
                  key={social.name}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-[#FFF1F2] hover:bg-[#C81E3D] hover:text-white flex items-center justify-center text-[#C81E3D] transition-all duration-300 shadow-sm"
                >
                  {socialIcons[social.icon]}
                </a>
              ))}
            </div>
          </div>

          <div className="flex flex-col items-center md:items-start text-center md:text-left space-y-5">
            <h3 className="text-slate-800 font-extrabold text-lg md:text-xl tracking-tight">
              Stay Updated
            </h3>
            
            <p className="text-slate-500 text-sm font-semibold max-w-sm">
              Get career tips and exclusive program offers.
            </p>

            <div className="space-y-3 pt-1 text-slate-600 text-sm font-bold">
              <a href={`tel:${siteConfig.phone}`} className="flex items-center justify-center md:justify-start gap-3 hover:text-[#C81E3D] transition-colors group">
                <div className="w-8 h-8 rounded-full bg-[#FFF1F2] flex items-center justify-center text-[#C81E3D] flex-shrink-0 group-hover:scale-105 transition-transform">
                  <Phone size={14} className="stroke-[2.5]" />
                </div>
                <span>{siteConfig.phoneDisplay}</span>
              </a>
              
              <a href={`mailto:${siteConfig.email}`} className="flex items-center justify-center md:justify-start gap-3 hover:text-[#C81E3D] transition-colors group">
                <div className="w-8 h-8 rounded-full bg-[#FFF1F2] flex items-center justify-center text-[#C81E3D] flex-shrink-0 group-hover:scale-105 transition-transform">
                  <Mail size={14} className="stroke-[2.5]" />
                </div>
                <span>{siteConfig.email}</span>
              </a>
              
              <div className="flex items-start justify-center md:justify-start gap-3">
                <div className="w-8 h-8 rounded-full bg-[#FFF1F2] flex items-center justify-center text-[#C81E3D] flex-shrink-0 mt-0.5">
                  <MapPin size={14} className="stroke-[2.5]" />
                </div>
                <span className="text-xs leading-relaxed max-w-xs">{siteConfig.address}</span>
              </div>
            </div>
          </div>

        </div>

        <div className="border-t border-slate-200/60 my-10" />

        <div className="flex flex-wrap items-center justify-center gap-x-3 gap-y-2 text-xs md:text-sm font-bold text-slate-500 text-center">
          <span>&copy; {siteConfig.year} {siteConfig.name} - All Rights Reserved.</span>
          <span className="hidden sm:inline">&bull;</span>
          <Link href="/privacy-policy" className="text-[#C81E3D] hover:underline underline-offset-4">
            Privacy Policy
          </Link>
          <span className="hidden sm:inline">&bull;</span>
          <Link href="/terms-and-conditions" className="text-[#C81E3D] hover:underline underline-offset-4">
            Terms &amp; Conditions
          </Link>
          <span className="hidden sm:inline">&bull;</span>
          <Link href="/disclaimer" className="text-[#C81E3D] hover:underline underline-offset-4">
            Disclaimer
          </Link>
        </div>

        <p className="text-center text-[10px] text-slate-400 font-bold max-w-4xl mx-auto mt-4 leading-relaxed">
          {siteConfig.legal.disclaimer}
        </p>

        <p className="text-center text-[9px] text-slate-300 font-semibold max-w-4xl mx-auto mt-2 leading-relaxed">
          Results may vary based on individual efforts and market conditions. All information is for reference purposes only.
        </p>

      </div>
    </footer>
  );
};

export default Footer;
