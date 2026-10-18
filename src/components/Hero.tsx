import React from 'react';
import { ArrowRight, ShieldCheck, Clock, CheckCircle2, Award } from 'lucide-react';
import { OWNER_DETAILS } from '../data/servicesData';

interface HeroProps {
  onApplyClick: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onApplyClick }) => {
  return (
    <section id="home" className="relative overflow-hidden pt-8 pb-16 md:py-20 lg:py-24">
      {/* Blue gradient background overlays */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_50%_-20%,rgba(37,99,235,0.35),rgba(2,6,23,0))]" />
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -bottom-10 left-0 w-80 h-80 bg-cyan-600/10 rounded-full blur-3xl pointer-events-none" />

      {/* Grid texture for modern digital portal look */}
      <div
        className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage: `radial-gradient(rgba(255, 255, 255, 0.4) 1px, transparent 1px)`,
          backgroundSize: '24px 24px',
        }}
      />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          {/* Left Column: Headlines & CTA */}
          <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
            {/* Government Authorized VLE Trust Kicker */}
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-blue-950/80 border border-blue-800/70 text-blue-300 text-xs font-medium">
              <span className="w-2 h-2 rounded-full bg-cyan-400"></span>
              <span>Digital India Partner · Common Service Center</span>
            </div>

            {/* Main Heading */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight text-white text-balance leading-[1.15]">
              Welcome to{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-sky-300 to-cyan-300">
                Aman Pandey
              </span>{' '}
              CSC Center
            </h1>

            {/* Subheading */}
            <p className="text-lg sm:text-xl text-blue-200/90 font-medium max-w-2xl mx-auto lg:mx-0">
              All Government & Online Services Available Here
            </p>

            <p className="text-sm sm:text-base text-slate-400 max-w-xl mx-auto lg:mx-0 leading-relaxed">
              Official e-Governance platform for instant Aadhaar update, PAN card issuance, Ayushman Bharat Golden Card, Scholarship submission, and e-District verification. Fast, secure, and hassle-free assistance.
            </p>

            {/* Action Buttons: Black "Apply Now" button + Call */}
            <div className="pt-2 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
              {/* Black "Apply Now" button */}
              <button
                onClick={onApplyClick}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-3.5 text-base font-bold text-white bg-black hover:bg-neutral-900 border border-blue-500/50 hover:border-blue-400 rounded-xl transition-all shadow-lg shadow-black/80 hover:shadow-blue-500/20 active:scale-[0.98] group cursor-pointer"
              >
                <span>Apply Now</span>
                <ArrowRight className="w-4 h-4 text-blue-400 group-hover:translate-x-1 transition-transform" />
              </button>

              <a
                href={`tel:${OWNER_DETAILS.rawMobile}`}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 text-sm font-semibold text-slate-200 bg-slate-900/80 hover:bg-slate-800 border border-slate-700/80 rounded-xl transition-colors"
              >
                <span>Call: {OWNER_DETAILS.mobileNumber}</span>
              </a>
            </div>

            {/* Trust Highlights */}
            <div className="pt-4 grid grid-cols-2 sm:grid-cols-3 gap-3 border-t border-slate-800/80 max-w-xl mx-auto lg:mx-0">
              <div className="flex items-center gap-2 text-xs text-slate-300">
                <ShieldCheck className="w-4 h-4 text-cyan-400 shrink-0" />
                <span>100% Genuine Govt Portals</span>
              </div>
              <div className="flex items-center gap-2 text-xs text-slate-300">
                <Clock className="w-4 h-4 text-blue-400 shrink-0" />
                <span>Same Day Processing</span>
              </div>
              <div className="flex items-center gap-2 text-xs text-slate-300 col-span-2 sm:col-span-1">
                <CheckCircle2 className="w-4 h-4 text-sky-400 shrink-0" />
                <span>Doorstep Guidance</span>
              </div>
            </div>
          </div>

          {/* Right Column: High-Fidelity CSC Center Showcase Frame */}
          <div className="lg:col-span-5">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              {/* Glow backdrop behind card */}
              <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-cyan-500 rounded-2xl blur-lg opacity-40 group-hover:opacity-75 transition duration-500" />
              
              <div className="relative rounded-2xl bg-slate-900 border border-blue-800/60 overflow-hidden shadow-2xl">
                <div className="aspect-[16/10] overflow-hidden relative">
                  <img
                    src="/src/assets/images/csc_center_hero_1792348179683.jpg"
                    alt="Aman Pandey CSC Center Digital Citizen Seva Kendra"
                    className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent" />
                  
                  {/* Floating badge inside image */}
                  <div className="absolute top-3 left-3 bg-slate-950/80 backdrop-blur-md border border-blue-500/40 rounded-lg px-2.5 py-1 flex items-center gap-1.5">
                    <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                    <span className="text-[11px] font-semibold text-white">Center Open & Active</span>
                  </div>

                  <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between text-xs text-slate-200 bg-slate-950/90 backdrop-blur-md p-2.5 rounded-xl border border-slate-800">
                    <div>
                      <div className="font-semibold text-white">Aman Pandey (VLE)</div>
                      <div className="text-[11px] text-blue-400">Common Service Center</div>
                    </div>
                    <div className="text-right">
                      <div className="font-mono text-cyan-300 text-xs font-bold">82359 93324</div>
                      <div className="text-[10px] text-slate-400">Direct Helpline</div>
                    </div>
                  </div>
                </div>

                {/* Bottom mini-bar inside showcase */}
                <div className="p-4 bg-slate-950/90 border-t border-slate-800/80 flex items-center justify-between text-xs text-slate-400">
                  <div className="flex items-center gap-1.5">
                    <Award className="w-4 h-4 text-cyan-400" />
                    <span>Authorized CSC ID Registered</span>
                  </div>
                  <span className="text-slate-500 font-mono">EST. 2021</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
