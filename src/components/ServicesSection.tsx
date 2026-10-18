import React, { useState } from 'react';
import {
  Fingerprint,
  CreditCard,
  HeartPulse,
  GraduationCap,
  FileCheck,
  Vote,
  Landmark,
  Users,
  Clock,
  FileText,
  ArrowRight,
  CheckCircle2,
  Sparkles
} from 'lucide-react';
import { POPULAR_SERVICES } from '../data/servicesData';
import { ServiceItem } from '../types';

interface ServicesSectionProps {
  onSelectService: (serviceTitle: string) => void;
}

export const ServicesSection: React.FC<ServicesSectionProps> = ({ onSelectService }) => {
  const [selectedCategory, setSelectedCategory] = useState<'all' | 'popular' | 'identity' | 'welfare' | 'certificates' | 'banking'>('popular');
  const [activeModalService, setActiveModalService] = useState<ServiceItem | null>(null);

  const getServiceIcon = (iconName: string) => {
    switch (iconName) {
      case 'Fingerprint':
        return <Fingerprint className="w-6 h-6 text-cyan-400" />;
      case 'CreditCard':
        return <CreditCard className="w-6 h-6 text-blue-400" />;
      case 'HeartPulse':
        return <HeartPulse className="w-6 h-6 text-emerald-400" />;
      case 'GraduationCap':
        return <GraduationCap className="w-6 h-6 text-amber-400" />;
      case 'FileCheck':
        return <FileCheck className="w-6 h-6 text-sky-400" />;
      case 'Vote':
        return <Vote className="w-6 h-6 text-indigo-400" />;
      case 'Landmark':
        return <Landmark className="w-6 h-6 text-purple-400" />;
      case 'Users':
        return <Users className="w-6 h-6 text-teal-400" />;
      default:
        return <FileText className="w-6 h-6 text-blue-400" />;
    }
  };

  const filteredServices = POPULAR_SERVICES.filter((s) => {
    if (selectedCategory === 'all') return true;
    if (selectedCategory === 'popular') return s.isPopular;
    return s.category === selectedCategory;
  });

  const handleApply = (title: string) => {
    onSelectService(title);
    const formElement = document.getElementById('book-service');
    if (formElement) {
      formElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="services" className="py-16 md:py-24 bg-slate-950 relative">
      {/* Background accents */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-7xl h-96 bg-blue-900/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-10 md:mb-14">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-950/70 border border-blue-800/60 text-blue-400 text-xs font-semibold uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Digital Seva Kendra</span>
          </div>

          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Our Popular Services
          </h2>

          <p className="text-slate-400 text-sm sm:text-base leading-relaxed">
            Fast, authorized, and transparent citizen services with official government receipts. Select any service to apply directly or upload your documents.
          </p>

          {/* Interactive Category Filter Tabs (Single-line controls) */}
          <div className="flex items-center justify-center flex-wrap gap-2 pt-4">
            <button
              onClick={() => setSelectedCategory('popular')}
              className={`px-3.5 py-1.5 text-xs font-semibold rounded-lg transition-all whitespace-nowrap cursor-pointer ${
                selectedCategory === 'popular'
                  ? 'bg-blue-600 text-white shadow-md shadow-blue-600/30'
                  : 'bg-slate-900 text-slate-400 hover:text-white border border-slate-800'
              }`}
            >
              Popular (Top 4)
            </button>
            <button
              onClick={() => setSelectedCategory('all')}
              className={`px-3.5 py-1.5 text-xs font-semibold rounded-lg transition-all whitespace-nowrap cursor-pointer ${
                selectedCategory === 'all'
                  ? 'bg-blue-600 text-white shadow-md shadow-blue-600/30'
                  : 'bg-slate-900 text-slate-400 hover:text-white border border-slate-800'
              }`}
            >
              All Services ({POPULAR_SERVICES.length})
            </button>
            <button
              onClick={() => setSelectedCategory('identity')}
              className={`px-3.5 py-1.5 text-xs font-semibold rounded-lg transition-all whitespace-nowrap cursor-pointer ${
                selectedCategory === 'identity'
                  ? 'bg-blue-600 text-white shadow-md shadow-blue-600/30'
                  : 'bg-slate-900 text-slate-400 hover:text-white border border-slate-800'
              }`}
            >
              Identity (Aadhaar / PAN)
            </button>
            <button
              onClick={() => setSelectedCategory('welfare')}
              className={`px-3.5 py-1.5 text-xs font-semibold rounded-lg transition-all whitespace-nowrap cursor-pointer ${
                selectedCategory === 'welfare'
                  ? 'bg-blue-600 text-white shadow-md shadow-blue-600/30'
                  : 'bg-slate-900 text-slate-400 hover:text-white border border-slate-800'
              }`}
            >
              Welfare & Scholarships
            </button>
            <button
              onClick={() => setSelectedCategory('certificates')}
              className={`px-3.5 py-1.5 text-xs font-semibold rounded-lg transition-all whitespace-nowrap cursor-pointer ${
                selectedCategory === 'certificates'
                  ? 'bg-blue-600 text-white shadow-md shadow-blue-600/30'
                  : 'bg-slate-900 text-slate-400 hover:text-white border border-slate-800'
              }`}
            >
              e-District Certificates
            </button>
          </div>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6 lg:gap-8">
          {filteredServices.map((service, idx) => (
            <div
              key={service.id}
              className="group relative bg-slate-900/90 hover:bg-slate-900 border border-slate-800 hover:border-blue-700/70 rounded-2xl p-6 sm:p-7 transition-all duration-300 hover:shadow-xl hover:shadow-blue-900/20 flex flex-col justify-between"
            >
              {/* Subtle top glow bar on hover */}
              <div className="absolute top-0 left-6 right-6 h-px bg-gradient-to-r from-transparent via-blue-500/0 to-transparent group-hover:via-blue-500/60 transition-all duration-300" />

              <div className="space-y-4">
                {/* Header: Icon + Number/Badge + Title */}
                <div className="flex items-start justify-between gap-4">
                  <div className="flex items-center gap-3">
                    <div className="p-3 bg-blue-950/80 border border-blue-800/60 rounded-xl group-hover:border-blue-500/60 group-hover:bg-blue-950 transition-colors">
                      {getServiceIcon(service.iconName)}
                    </div>
                    <div>
                      <div className="text-[11px] font-mono text-cyan-400 font-semibold tracking-wider uppercase">
                        Service #{String(idx + 1).padStart(2, '0')}
                      </div>
                      <h3 className="text-lg sm:text-xl font-bold text-white group-hover:text-blue-300 transition-colors">
                        {service.title}
                      </h3>
                    </div>
                  </div>

                  {service.isPopular && (
                    <span className="shrink-0 text-[10px] font-bold text-cyan-300 bg-cyan-950/80 border border-cyan-800/60 px-2 py-0.5 rounded-md uppercase">
                      Popular
                    </span>
                  )}
                </div>

                {/* Description */}
                <p className="text-slate-300 text-sm leading-relaxed">
                  {service.shortDesc}
                </p>

                {/* Service Key Features List */}
                <div className="space-y-1.5 pt-1">
                  {service.features.map((feature, fIdx) => (
                    <div key={fIdx} className="flex items-start gap-2 text-xs text-slate-300">
                      <CheckCircle2 className="w-3.5 h-3.5 text-blue-400 shrink-0 mt-0.5" />
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>

                {/* Turnaround Time Info */}
                <div className="pt-2 flex items-center gap-2 text-xs text-slate-400 border-t border-slate-800/80">
                  <Clock className="w-3.5 h-3.5 text-blue-400 shrink-0" />
                  <span>Processing Time:</span>
                  <span className="font-semibold text-slate-200">{service.processingTime}</span>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="pt-6 mt-4 border-t border-slate-800/80 flex items-center justify-between gap-3">
                <button
                  onClick={() => setActiveModalService(service)}
                  className="text-xs font-semibold text-blue-400 hover:text-blue-300 transition-colors py-2 px-1 underline underline-offset-4 cursor-pointer"
                >
                  View Required Docs
                </button>

                <button
                  onClick={() => handleApply(service.title)}
                  className="inline-flex items-center gap-1.5 px-4 py-2 text-xs font-bold text-white bg-blue-600 hover:bg-blue-500 rounded-lg shadow-md shadow-blue-600/30 transition-all active:scale-[0.98] cursor-pointer"
                >
                  <span>Apply Now</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Required Docs Modal */}
      {activeModalService && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-in fade-in">
          <div className="bg-slate-900 border border-blue-700/50 rounded-2xl max-w-lg w-full p-6 space-y-5 shadow-2xl relative">
            <div className="flex items-start justify-between gap-3">
              <div>
                <span className="text-xs font-mono text-cyan-400 uppercase">Documents Checklist</span>
                <h3 className="text-lg font-bold text-white">{activeModalService.title}</h3>
              </div>
              <button
                onClick={() => setActiveModalService(null)}
                className="text-slate-400 hover:text-white p-1 rounded-lg bg-slate-800 border border-slate-700"
              >
                ✕
              </button>
            </div>

            <div className="space-y-3">
              <p className="text-xs text-slate-300">
                Please bring or upload the following documents for fast verification by Aman Pandey:
              </p>
              <ul className="space-y-2 bg-slate-950 p-4 rounded-xl border border-slate-800">
                {activeModalService.requiredDocs.map((doc, dIdx) => (
                  <li key={dIdx} className="flex items-start gap-2.5 text-xs text-slate-200">
                    <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                    <span>{doc}</span>
                  </li>
                ))}
              </ul>
              <div className="p-3 rounded-lg bg-blue-950/50 border border-blue-900/60 text-xs text-blue-300">
                💡 <strong>Tip:</strong> You can upload photo/scan of these documents directly in the booking form below to save visit time.
              </div>
            </div>

            <div className="flex items-center justify-end gap-3 pt-2">
              <button
                onClick={() => setActiveModalService(null)}
                className="px-4 py-2 text-xs font-semibold text-slate-300 hover:text-white bg-slate-800 rounded-lg"
              >
                Close
              </button>
              <button
                onClick={() => {
                  const title = activeModalService.title;
                  setActiveModalService(null);
                  handleApply(title);
                }}
                className="px-4 py-2 text-xs font-bold text-white bg-blue-600 hover:bg-blue-500 rounded-lg shadow-md shadow-blue-600/30"
              >
                Apply for this Service
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
