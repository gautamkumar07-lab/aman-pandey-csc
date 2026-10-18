import React from 'react';
import { Phone, Mail, MapPin, Clock, MessageCircle, ExternalLink, Shield } from 'lucide-react';
import { OWNER_DETAILS } from '../data/servicesData';

export const ContactSection: React.FC = () => {
  return (
    <section id="contact" className="py-16 md:py-24 bg-slate-900/50 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Title */}
        <div className="text-center max-w-2xl mx-auto space-y-3 mb-12">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-950/80 border border-blue-800/70 text-blue-300 text-xs font-semibold">
            <span>Get in Touch</span>
          </div>

          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Contact Aman Pandey
          </h2>

          <p className="text-slate-400 text-sm sm:text-base leading-relaxed">
            Have questions about document requirements, government portal timelines, or need emergency assistance? Reach out directly by phone, email, or visit our center.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {/* Card 1: Direct Call */}
          <div className="bg-slate-950 border border-slate-800 hover:border-blue-700/60 rounded-2xl p-6 sm:p-7 transition-all flex flex-col justify-between group">
            <div className="space-y-4">
              <div className="w-12 h-12 rounded-xl bg-blue-950 border border-blue-800/80 flex items-center justify-center text-blue-400 group-hover:scale-105 transition-transform">
                <Phone className="w-6 h-6" />
              </div>
              <div>
                <h3 className="text-base font-bold text-white">Direct Phone Helpline</h3>
                <p className="text-xs text-slate-400 mt-1">Speak directly with Aman Pandey</p>
              </div>
              <p className="text-xl font-bold font-mono text-cyan-300">
                {OWNER_DETAILS.mobileNumber}
              </p>
              <p className="text-xs text-slate-400">
                Available all 7 days for urgent queries & document support.
              </p>
            </div>
            <div className="pt-6">
              <a
                href={`tel:${OWNER_DETAILS.rawMobile}`}
                className="w-full py-2.5 px-4 bg-blue-600 hover:bg-blue-500 text-white font-semibold text-xs rounded-xl flex items-center justify-center gap-2 shadow-md shadow-blue-600/30 transition-colors"
              >
                <Phone className="w-3.5 h-3.5" />
                <span>Call {OWNER_DETAILS.mobileNumber}</span>
              </a>
            </div>
          </div>

          {/* Card 2: Email Support */}
          <div className="bg-slate-950 border border-slate-800 hover:border-blue-700/60 rounded-2xl p-6 sm:p-7 transition-all flex flex-col justify-between group">
            <div className="space-y-4">
              <div className="w-12 h-12 rounded-xl bg-blue-950 border border-blue-800/80 flex items-center justify-center text-blue-400 group-hover:scale-105 transition-transform">
                <Mail className="w-6 h-6" />
              </div>
              <div>
                <h3 className="text-base font-bold text-white">Official Email Address</h3>
                <p className="text-xs text-slate-400 mt-1">Send documents or inquiry letters</p>
              </div>
              <p className="text-base font-semibold text-cyan-300 break-all">
                {OWNER_DETAILS.email}
              </p>
              <p className="text-xs text-slate-400">
                Guaranteed response within 2-4 hours with verified portal status.
              </p>
            </div>
            <div className="pt-6">
              <a
                href={`mailto:${OWNER_DETAILS.email}`}
                className="w-full py-2.5 px-4 bg-slate-800 hover:bg-slate-700 text-slate-200 font-semibold text-xs rounded-xl flex items-center justify-center gap-2 transition-colors border border-slate-700"
              >
                <Mail className="w-3.5 h-3.5 text-blue-400" />
                <span>Send Email</span>
              </a>
            </div>
          </div>

          {/* Card 3: WhatsApp & Working Hours */}
          <div className="bg-slate-950 border border-slate-800 hover:border-emerald-700/60 rounded-2xl p-6 sm:p-7 transition-all flex flex-col justify-between group">
            <div className="space-y-4">
              <div className="w-12 h-12 rounded-xl bg-emerald-950 border border-emerald-800/80 flex items-center justify-center text-emerald-400 group-hover:scale-105 transition-transform">
                <MessageCircle className="w-6 h-6" />
              </div>
              <div>
                <h3 className="text-base font-bold text-white">Instant WhatsApp Chat</h3>
                <p className="text-xs text-slate-400 mt-1">Send photos of Aadhaar / PAN for quick review</p>
              </div>
              <div className="space-y-1 text-xs text-slate-300">
                <div className="flex items-center gap-1.5 text-emerald-400 font-semibold">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                  <span>Online on WhatsApp</span>
                </div>
                <div className="text-slate-400 pt-1">
                  <strong>Hours:</strong> Mon - Sat: 8 AM - 8 PM | Sun: 9 AM - 2 PM
                </div>
              </div>
            </div>
            <div className="pt-6">
              <a
                href={`https://wa.me/91${OWNER_DETAILS.rawMobile}?text=${encodeURIComponent(
                  'Hello Aman Pandey ji, I want to inquire about CSC services.'
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-2.5 px-4 bg-emerald-600 hover:bg-emerald-500 text-white font-semibold text-xs rounded-xl flex items-center justify-center gap-2 shadow-md shadow-emerald-600/30 transition-colors"
              >
                <MessageCircle className="w-3.5 h-3.5 fill-white text-emerald-600" />
                <span>Chat on WhatsApp</span>
              </a>
            </div>
          </div>
        </div>

        {/* Operating Address Card */}
        <div className="mt-8 bg-slate-950 border border-slate-800 rounded-2xl p-6 sm:p-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
          <div className="flex items-start gap-4">
            <div className="p-3 bg-blue-950/70 border border-blue-900 rounded-xl text-blue-400 shrink-0">
              <MapPin className="w-6 h-6" />
            </div>
            <div className="space-y-1">
              <h4 className="text-base font-bold text-white">Center Physical Address</h4>
              <p className="text-xs sm:text-sm text-slate-300">{OWNER_DETAILS.address}</p>
              <p className="text-xs text-blue-400/90 font-medium">Landmark: Opp. Government Primary Health Sub-Center</p>
            </div>
          </div>

          <div className="flex items-center gap-3 shrink-0 w-full sm:w-auto">
            <a
              href="#book-service"
              className="w-full sm:w-auto px-5 py-2.5 text-xs font-bold text-white bg-blue-600 hover:bg-blue-500 rounded-xl text-center shadow-md shadow-blue-600/30 transition-all"
            >
              Book an Appointment
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
