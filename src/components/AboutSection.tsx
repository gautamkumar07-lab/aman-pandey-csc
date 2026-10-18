import React from 'react';
import { ShieldCheck, Award, Users, CheckCircle2, Cpu, FileCheck2, HeartHandshake } from 'lucide-react';
import { OWNER_DETAILS } from '../data/servicesData';

export const AboutSection: React.FC = () => {
  return (
    <section id="about" className="py-16 md:py-24 bg-slate-950 relative overflow-hidden">
      {/* Decorative gradient blur */}
      <div className="absolute -left-20 bottom-10 w-72 h-72 bg-blue-600/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          {/* Left Column: Image & Experience Card */}
          <div className="lg:col-span-5 space-y-6">
            <div className="relative rounded-2xl bg-slate-900 border border-blue-900/50 p-6 sm:p-8 shadow-xl">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-tr from-blue-700 to-cyan-500 p-0.5 shadow-lg shadow-blue-500/20">
                  <div className="w-full h-full bg-slate-950 rounded-[14px] flex items-center justify-center">
                    <span className="font-extrabold text-2xl text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-300">
                      AP
                    </span>
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white">{OWNER_DETAILS.name}</h3>
                  <p className="text-xs text-blue-400 font-semibold">{OWNER_DETAILS.role}</p>
                  <p className="text-xs text-slate-400 mt-0.5">Government Digital Seva Kendra</p>
                </div>
              </div>

              <div className="space-y-4 text-xs sm:text-sm text-slate-300">
                <p className="leading-relaxed">
                  "Our mission is to empower every citizen, student, and farmer with immediate, transparent access to central and state government services without broker fees or confusing bureaucracy."
                </p>
                <div className="p-3 rounded-xl bg-blue-950/40 border border-blue-900/60 flex items-center justify-between text-xs">
                  <span className="text-slate-400">Official CSC Center ID:</span>
                  <span className="font-mono text-cyan-300 font-bold">CSC-GOV-IN-AP93324</span>
                </div>
              </div>

              {/* Statistics Grid */}
              <div className="grid grid-cols-2 gap-3 pt-6 mt-6 border-t border-slate-800">
                <div className="bg-slate-950 p-3.5 rounded-xl border border-slate-800/80">
                  <div className="text-xl sm:text-2xl font-extrabold text-white font-mono">12,500+</div>
                  <div className="text-[11px] text-slate-400">Applications Processed</div>
                </div>
                <div className="bg-slate-950 p-3.5 rounded-xl border border-slate-800/80">
                  <div className="text-xl sm:text-2xl font-extrabold text-cyan-400 font-mono">99.8%</div>
                  <div className="text-[11px] text-slate-400">Success Verification Rate</div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Values & Credibility */}
          <div className="lg:col-span-7 space-y-6">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-950/80 border border-blue-800/70 text-blue-400 text-xs font-semibold uppercase tracking-wider">
              <Award className="w-3.5 h-3.5 text-cyan-400" />
              <span>About Aman Pandey CSC Center</span>
            </div>

            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight leading-tight">
              Trusted Bridge Between Citizens and Digital India Services
            </h2>

            <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
              Established with an aim to deliver digital inclusion, Aman Pandey CSC Center is equipped with authorized biometric scanners, high-resolution document scanners, and high-speed broadband connected directly with UIDAI, NSDL, PM-JAY, and National Scholarship Portals.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              <div className="bg-slate-900/70 border border-slate-800/80 rounded-xl p-4 space-y-1.5">
                <div className="flex items-center gap-2 text-white font-semibold text-sm">
                  <ShieldCheck className="w-4 h-4 text-cyan-400" />
                  <span>Transparent Government Fees</span>
                </div>
                <p className="text-xs text-slate-400">
                  Strict adherence to government-prescribed portal fee schedules with official system-generated receipts.
                </p>
              </div>

              <div className="bg-slate-900/70 border border-slate-800/80 rounded-xl p-4 space-y-1.5">
                <div className="flex items-center gap-2 text-white font-semibold text-sm">
                  <Cpu className="w-4 h-4 text-blue-400" />
                  <span>Modern Biometric Devices</span>
                </div>
                <p className="text-xs text-slate-400">
                  Mantra & Morpho certified biometric fingerprint scanners for flawless Aadhaar e-KYC and AEPS withdrawal.
                </p>
              </div>

              <div className="bg-slate-900/70 border border-slate-800/80 rounded-xl p-4 space-y-1.5">
                <div className="flex items-center gap-2 text-white font-semibold text-sm">
                  <FileCheck2 className="w-4 h-4 text-emerald-400" />
                  <span>Error-Free Application Filing</span>
                </div>
                <p className="text-xs text-slate-400">
                  Double-checked forms to eliminate rejection risks in Scholarships, PAN corrections, and Ayushman Cards.
                </p>
              </div>

              <div className="bg-slate-900/70 border border-slate-800/80 rounded-xl p-4 space-y-1.5">
                <div className="flex items-center gap-2 text-white font-semibold text-sm">
                  <HeartHandshake className="w-4 h-4 text-amber-400" />
                  <span>Doorstep & Senior Citizen Help</span>
                </div>
                <p className="text-xs text-slate-400">
                  Special priority and respectful offline support for senior citizens, persons with disabilities, and students.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
