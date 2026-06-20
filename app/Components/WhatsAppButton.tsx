import React from 'react';
import { FaWhatsapp } from 'react-icons/fa';
import { siteConfig } from '../data/site';

const WhatsAppButton = () => {
  const waNumber = siteConfig.phone.replace(/\D/g, '');
  return (
    <a
      href={`https://wa.me/${waNumber}`}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-24 left-6 z-50 flex flex-col items-center group"
    >
      <div className="w-16 h-16 bg-[#25D366] rounded-full shadow-xl hover:shadow-2xl flex items-center justify-center transition-all group-hover:scale-105 active:scale-95 hover:bg-[#20BD5A]">
        <FaWhatsapp size={30} className="text-white" />
      </div>
    </a>
  );
};

export default WhatsAppButton;
