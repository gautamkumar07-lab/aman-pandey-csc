import React from 'react';
import { CheckCircle2, MessageCircle, Phone, Printer, X, ShieldCheck } from 'lucide-react';
import { BookingSubmission } from '../types';
import { OWNER_DETAILS } from '../data/servicesData';

interface BookingSuccessModalProps {
  submission: BookingSubmission;
  onClose: () => void;
}

export const BookingSuccessModal: React.FC<BookingSuccessModalProps> = ({
  submission,
  onClose,
}) => {
  const whatsappMessage = encodeURIComponent(
    `Hello Aman Pandey ji,\n\nI have submitted a service request on your CSC portal.\n\n` +
      `📋 *Tracking ID:* ${submission.trackingId}\n` +
      `👤 *Name:* ${submission.fullName}\n` +
      `📱 *Mobile:* ${submission.mobileNumber}\n` +
      `📍 *Village/City:* ${submission.villageCity}\n` +
      `⚡ *Service:* ${submission.selectedService}\n` +
      (submission.documentName ? `📎 *Document Attached:* ${submission.documentName}\n` : '') +
      (submission.message ? `💬 *Message:* ${submission.message}\n` : '') +
      `\nPlease verify and let me know the next steps. Thank you!`
  );

  const whatsappUrl = `https://wa.me/91${OWNER_DETAILS.rawMobile}?text=${whatsappMessage}`;

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md animate-in fade-in">
      <div className="bg-slate-900 border border-blue-700/60 rounded-2xl max-w-lg w-full p-6 sm:p-8 space-y-6 shadow-2xl relative">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 text-slate-400 hover:text-white rounded-lg hover:bg-slate-800 transition-colors"
          title="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Success Header */}
        <div className="text-center space-y-2">
          <div className="w-14 h-14 mx-auto rounded-full bg-emerald-950/80 border border-emerald-500/50 flex items-center justify-center text-emerald-400 mb-2">
            <CheckCircle2 className="w-8 h-8" />
          </div>
          <span className="text-xs font-mono text-cyan-400 uppercase tracking-wider font-semibold">
            Request Registered Successfully
          </span>
          <h3 className="text-2xl font-bold text-white">Application Received!</h3>
          <p className="text-xs sm:text-sm text-slate-300">
            Aman Pandey has received your service booking. Keep your Tracking ID safe for updates.
          </p>
        </div>

        {/* Slip Card */}
        <div className="bg-slate-950 border border-slate-800 rounded-xl p-5 space-y-3 font-mono text-xs">
          <div className="flex items-center justify-between pb-3 border-b border-slate-800">
            <span className="text-slate-400">Tracking Reference ID:</span>
            <span className="text-cyan-300 font-bold text-sm bg-blue-950/80 px-2 py-0.5 rounded border border-blue-800">
              {submission.trackingId}
            </span>
          </div>

          <div className="grid grid-cols-2 gap-2 text-slate-300">
            <div>
              <span className="text-slate-500 block text-[11px]">Applicant Name</span>
              <span className="font-sans font-semibold text-white">{submission.fullName}</span>
            </div>
            <div>
              <span className="text-slate-500 block text-[11px]">Mobile Number</span>
              <span className="font-semibold text-white">{submission.mobileNumber}</span>
            </div>
            <div>
              <span className="text-slate-500 block text-[11px]">Location</span>
              <span className="font-sans text-slate-200">{submission.villageCity}</span>
            </div>
            <div>
              <span className="text-slate-500 block text-[11px]">Status</span>
              <span className="text-amber-400 font-semibold">{submission.status}</span>
            </div>
          </div>

          <div className="pt-2 border-t border-slate-800">
            <span className="text-slate-500 block text-[11px]">Service Requested</span>
            <span className="font-sans text-blue-300 font-medium">{submission.selectedService}</span>
          </div>

          {submission.documentName && (
            <div className="pt-2 border-t border-slate-800 flex items-center justify-between">
              <span className="text-slate-500">Document Uploaded:</span>
              <span className="text-slate-200 truncate max-w-[200px]">{submission.documentName}</span>
            </div>
          )}

          <div className="pt-2 border-t border-slate-800 text-[11px] text-slate-500 flex items-center justify-between">
            <span>Date & Time: {submission.submittedAt}</span>
            <span className="flex items-center gap-1 text-cyan-400">
              <ShieldCheck className="w-3 h-3" />
              Verified CSC
            </span>
          </div>
        </div>

        {/* Priority Actions */}
        <div className="space-y-2.5">
          {/* Send to WhatsApp button */}
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full py-3.5 px-4 bg-emerald-600 hover:bg-emerald-500 active:bg-emerald-700 text-white font-bold text-sm rounded-xl flex items-center justify-center gap-2 shadow-lg shadow-emerald-600/30 transition-all"
          >
            <MessageCircle className="w-5 h-5 fill-white text-emerald-600" />
            <span>Send Details to WhatsApp (Instant Priority)</span>
          </a>

          <div className="grid grid-cols-2 gap-2">
            <button
              onClick={handlePrint}
              className="py-2.5 px-3 bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs font-semibold rounded-lg flex items-center justify-center gap-1.5 transition-colors"
            >
              <Printer className="w-4 h-4" />
              <span>Print Slip</span>
            </button>

            <a
              href={`tel:${OWNER_DETAILS.rawMobile}`}
              className="py-2.5 px-3 bg-blue-950 hover:bg-blue-900 border border-blue-800 text-blue-300 text-xs font-semibold rounded-lg flex items-center justify-center gap-1.5 transition-colors"
            >
              <Phone className="w-4 h-4" />
              <span>Call Center</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
