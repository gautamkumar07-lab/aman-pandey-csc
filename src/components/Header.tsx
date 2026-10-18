import React, { useState } from 'react';
import { Phone, Menu, X, ShieldCheck } from 'lucide-react';
import { OWNER_DETAILS } from '../data/servicesData';

interface HeaderProps {
  onOpenTrack?: () => void;
}

export const Header: React.FC<HeaderProps> = ({ onOpenTrack }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { label: 'Home', href: '#home' },
    { label: 'Services', href: '#services' },
    { label: 'About', href: '#about' },
    { label: 'Contact', href: '#contact' },
  ];

  return (
    <header className="sticky top-0 z-40 w-full bg-slate-950/90 backdrop-blur-md border-b border-blue-900/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-18 gap-6">
          {/* Zone 1: Logo & Title */}
          <a href="#home" className="flex items-center gap-3 shrink-0 group">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-blue-700 via-blue-600 to-cyan-500 p-0.5 shadow-lg shadow-blue-500/20 group-hover:shadow-blue-500/40 transition-shadow">
              <div className="w-full h-full bg-slate-950 rounded-[10px] flex items-center justify-center">
                <span className="font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-300 text-sm tracking-wider">
                  CSC
                </span>
              </div>
            </div>
            <div className="flex flex-col">
              <span className="text-base sm:text-lg font-bold tracking-tight text-white group-hover:text-blue-400 transition-colors whitespace-nowrap">
                {OWNER_DETAILS.centerName}
              </span>
              <span className="text-[11px] text-blue-400/80 font-medium tracking-wide flex items-center gap-1">
                <ShieldCheck className="w-3 h-3 text-cyan-400" />
                Govt Authorized VLE
              </span>
            </div>
          </a>

          {/* Zone 2: Navigation Links */}
          <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-300">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="hover:text-blue-400 transition-colors whitespace-nowrap py-1 relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-blue-500 hover:after:w-full after:transition-all after:duration-200"
              >
                {link.label}
              </a>
            ))}
            {onOpenTrack && (
              <button
                onClick={onOpenTrack}
                className="text-slate-400 hover:text-white transition-colors text-xs font-mono uppercase tracking-wider px-2 py-1 rounded border border-slate-800 hover:border-blue-700"
              >
                Track Status
              </button>
            )}
          </nav>

          {/* Zone 3: Quick CTA */}
          <div className="hidden lg:flex items-center gap-3 shrink-0">
            <a
              href={`tel:${OWNER_DETAILS.rawMobile}`}
              className="flex items-center gap-2 px-3.5 py-2 text-xs font-semibold text-blue-300 bg-blue-950/60 hover:bg-blue-900/60 border border-blue-800/60 rounded-lg transition-colors whitespace-nowrap"
            >
              <Phone className="w-3.5 h-3.5 text-blue-400" />
              <span>{OWNER_DETAILS.mobileNumber}</span>
            </a>
            <a
              href="#book-service"
              className="px-4 py-2 text-xs font-semibold text-white bg-blue-600 hover:bg-blue-500 rounded-lg transition-all shadow-md shadow-blue-600/30 whitespace-nowrap"
            >
              Book Service
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex md:hidden items-center gap-2">
            <a
              href={`tel:${OWNER_DETAILS.rawMobile}`}
              aria-label="Call Owner"
              className="p-2 text-blue-400 bg-blue-950/80 border border-blue-800/50 rounded-lg"
            >
              <Phone className="w-4 h-4" />
            </a>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-slate-300 hover:text-white bg-slate-900 border border-slate-800 rounded-lg"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-slate-950 border-b border-blue-900/50 px-4 pt-3 pb-5 space-y-3">
          <div className="flex flex-col space-y-1">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="px-3 py-2 rounded-lg text-slate-300 hover:text-white hover:bg-blue-950/50 text-base font-medium transition-colors"
              >
                {link.label}
              </a>
            ))}
            {onOpenTrack && (
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenTrack();
                }}
                className="text-left px-3 py-2 rounded-lg text-blue-400 hover:bg-blue-950/50 text-base font-medium transition-colors"
              >
                Track My Application
              </button>
            )}
          </div>
          <div className="pt-2 border-t border-slate-800 flex flex-col gap-2">
            <a
              href={`tel:${OWNER_DETAILS.rawMobile}`}
              className="flex items-center justify-center gap-2 w-full py-2.5 text-sm font-semibold text-blue-300 bg-blue-950/80 border border-blue-800/80 rounded-lg"
            >
              <Phone className="w-4 h-4 text-blue-400" />
              <span>Call: {OWNER_DETAILS.mobileNumber}</span>
            </a>
            <a
              href="#book-service"
              onClick={() => setMobileMenuOpen(false)}
              className="flex items-center justify-center w-full py-2.5 text-sm font-semibold text-white bg-blue-600 hover:bg-blue-500 rounded-lg shadow-md shadow-blue-600/30"
            >
              Apply / Book Now
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
