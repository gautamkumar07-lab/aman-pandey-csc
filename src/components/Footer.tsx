import React from 'react';
import { Phone, Mail, ShieldCheck } from 'lucide-react';
import { OWNER_DETAILS } from '../data/servicesData';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-950 border-t border-slate-900 text-slate-400 text-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 pb-8 border-b border-slate-900">
          {/* Brand Info */}
          <div className="md:col-span-5 space-y-3">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-lg bg-blue-600 flex items-center justify-center font-bold text-white text-xs">
                CSC
              </div>
              <span className="text-base font-bold text-white">{OWNER_DETAILS.centerName}</span>
            </div>
            <p className="text-slate-400 text-xs leading-relaxed max-w-sm">
              Authorized Common Service Center (CSC - Digital Seva Kendra) delivering citizen-centric digital governance services across rural and urban India.
            </p>
            <div className="flex items-center gap-2 text-cyan-400 text-[11px] font-semibold">
              <ShieldCheck className="w-4 h-4" />
              <span>Village Level Entrepreneur: Aman Pandey</span>
            </div>
          </div>

          {/* Quick Links */}
          <div className="md:col-span-3 space-y-3">
            <h4 className="text-sm font-semibold text-white">Quick Navigation</h4>
            <ul className="space-y-2">
              <li>
                <a href="#home" className="hover:text-blue-400 transition-colors">
                  Home
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-blue-400 transition-colors">
                  Popular Services
                </a>
              </li>
              <li>
                <a href="#book-service" className="hover:text-blue-400 transition-colors">
                  Book Your Service
                </a>
              </li>
              <li>
                <a href="#about" className="hover:text-blue-400 transition-colors">
                  About Aman Pandey
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-blue-400 transition-colors">
                  Contact Helpline
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Summary */}
          <div className="md:col-span-4 space-y-3">
            <h4 className="text-sm font-semibold text-white">Direct Contacts</h4>
            <div className="space-y-2">
              <div className="flex items-center gap-2 text-slate-300">
                <Phone className="w-4 h-4 text-blue-400 shrink-0" />
                <a href={`tel:${OWNER_DETAILS.rawMobile}`} className="hover:text-white font-mono">
                  📞 {OWNER_DETAILS.mobileNumber}
                </a>
              </div>
              <div className="flex items-center gap-2 text-slate-300">
                <Mail className="w-4 h-4 text-blue-400 shrink-0" />
                <a href={`mailto:${OWNER_DETAILS.email}`} className="hover:text-white truncate">
                  {OWNER_DETAILS.email}
                </a>
              </div>
              <p className="text-[11px] text-slate-500 pt-1">
                Operating Hours: 8:00 AM – 8:00 PM (Monday through Saturday)
              </p>
            </div>
          </div>
        </div>

        {/* Bottom copyright line as requested */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left text-slate-400">
          <div>
            <p className="font-medium text-slate-300">
              © 2026 {OWNER_DETAILS.centerName}
            </p>
            <p className="text-[11px] text-slate-400 mt-0.5">
              Government Service Assistance & Digital Seva Kendra
            </p>
          </div>

          <div className="flex items-center gap-4 text-slate-300">
            <a
              href={`tel:${OWNER_DETAILS.rawMobile}`}
              className="hover:text-cyan-400 transition-colors font-mono font-bold flex items-center gap-1.5"
            >
              <span>📞</span>
              <span>{OWNER_DETAILS.mobileNumber}</span>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};
