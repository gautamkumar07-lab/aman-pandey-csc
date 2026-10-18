import React, { useState } from 'react';
import { MessageCircle, X } from 'lucide-react';
import { OWNER_DETAILS } from '../data/servicesData';

export const FloatingWhatsApp: React.FC = () => {
  const [showTooltip, setShowTooltip] = useState(true);

  const defaultMessage = encodeURIComponent(
    'Hello Aman Pandey ji, I need assistance with CSC Government Services at your center.'
  );
  const whatsappUrl = `https://wa.me/91${OWNER_DETAILS.rawMobile}?text=${defaultMessage}`;

  return (
    <div className="fixed bottom-6 right-6 z-40 flex flex-col items-end">
      {/* Tooltip bubble */}
      {showTooltip && (
        <div className="relative mb-2 hidden sm:flex items-center gap-2 bg-slate-900 border border-emerald-500/40 text-slate-100 text-xs py-2 px-3.5 rounded-xl shadow-xl shadow-black/50 animate-in fade-in slide-in-from-bottom-2">
          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping shrink-0" />
          <span>Chat with Aman Pandey (82359 93324)</span>
          <button
            onClick={() => setShowTooltip(false)}
            className="ml-1 text-slate-400 hover:text-white p-0.5"
            aria-label="Dismiss tooltip"
          >
            <X className="w-3.5 h-3.5" />
          </button>
        </div>
      )}

      {/* Floating Button */}
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat with Aman Pandey on WhatsApp"
        className="group relative flex items-center justify-center w-14 h-14 rounded-full bg-[#25D366] hover:bg-[#20bd5a] text-white shadow-xl shadow-emerald-950/60 transition-all duration-300 hover:scale-110 active:scale-95"
      >
        <span className="absolute -inset-1 rounded-full bg-emerald-500/30 blur-sm group-hover:blur-md transition-all animate-pulse" />
        <MessageCircle className="w-7 h-7 fill-white text-[#25D366] relative z-10" />
      </a>
    </div>
  );
};
