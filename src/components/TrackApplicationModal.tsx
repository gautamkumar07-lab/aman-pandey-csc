import React, { useState } from 'react';
import { Search, X, CheckCircle, Clock, ShieldCheck, AlertCircle } from 'lucide-react';
import { BookingSubmission } from '../types';

interface TrackApplicationModalProps {
  onClose: () => void;
}

export const TrackApplicationModal: React.FC<TrackApplicationModalProps> = ({ onClose }) => {
  const [query, setQuery] = useState('');
  const [result, setResult] = useState<BookingSubmission | null>(null);
  const [searched, setSearched] = useState(false);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (!query.trim()) return;

    setSearched(true);
    try {
      const stored: BookingSubmission[] = JSON.parse(
        localStorage.getItem('csc_bookings') || '[]'
      );
      const cleanQ = query.trim().toLowerCase();
      const found = stored.find(
        (b) =>
          b.trackingId.toLowerCase() === cleanQ ||
          b.mobileNumber.includes(cleanQ) ||
          b.fullName.toLowerCase().includes(cleanQ)
      );
      setResult(found || null);
    } catch {
      setResult(null);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md animate-in fade-in">
      <div className="bg-slate-900 border border-blue-700/60 rounded-2xl max-w-lg w-full p-6 sm:p-7 space-y-5 shadow-2xl relative">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 text-slate-400 hover:text-white rounded-lg hover:bg-slate-800 transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        <div>
          <span className="text-xs font-mono text-cyan-400 uppercase">Live Citizen Portal</span>
          <h3 className="text-xl font-bold text-white">Track Your Application</h3>
          <p className="text-xs text-slate-400 mt-1">
            Enter your Tracking ID (e.g., CSC-2026-AP-xxxx) or 10-digit mobile number.
          </p>
        </div>

        <form onSubmit={handleSearch} className="flex gap-2">
          <input
            type="text"
            placeholder="Tracking ID or Mobile Number"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            className="flex-1 px-4 py-2.5 bg-slate-950 border border-slate-700 rounded-xl text-white text-sm focus:outline-none focus:border-blue-500"
          />
          <button
            type="submit"
            className="px-4 py-2.5 bg-blue-600 hover:bg-blue-500 text-white font-semibold text-xs rounded-xl flex items-center gap-1.5 cursor-pointer shadow-md shadow-blue-600/30"
          >
            <Search className="w-4 h-4" />
            <span>Search</span>
          </button>
        </form>

        {searched && (
          <div className="pt-2">
            {result ? (
              <div className="bg-slate-950 border border-slate-800 rounded-xl p-4 space-y-3 text-xs">
                <div className="flex items-center justify-between pb-2 border-b border-slate-800">
                  <span className="font-mono text-cyan-300 font-bold">{result.trackingId}</span>
                  <span className="px-2 py-0.5 rounded bg-blue-950 text-blue-300 font-semibold border border-blue-800">
                    {result.status}
                  </span>
                </div>
                <div className="grid grid-cols-2 gap-2 text-slate-300">
                  <div>
                    <span className="text-slate-500 block text-[11px]">Applicant</span>
                    <span className="font-semibold text-white">{result.fullName}</span>
                  </div>
                  <div>
                    <span className="text-slate-500 block text-[11px]">Mobile</span>
                    <span>{result.mobileNumber}</span>
                  </div>
                  <div className="col-span-2">
                    <span className="text-slate-500 block text-[11px]">Service</span>
                    <span className="text-blue-300">{result.selectedService}</span>
                  </div>
                  <div className="col-span-2">
                    <span className="text-slate-500 block text-[11px]">Booked At</span>
                    <span className="text-slate-400">{result.submittedAt}</span>
                  </div>
                </div>
                <div className="pt-2 border-t border-slate-800 text-[11px] text-emerald-400 flex items-center gap-1.5">
                  <CheckCircle className="w-3.5 h-3.5" />
                  <span>Aman Pandey is assigned to your application.</span>
                </div>
              </div>
            ) : (
              <div className="bg-slate-950 border border-slate-800 rounded-xl p-6 text-center text-xs text-slate-400 space-y-2">
                <AlertCircle className="w-6 h-6 text-amber-400 mx-auto" />
                <p>No active record found for "{query}".</p>
                <p className="text-[11px] text-slate-500">
                  If you recently booked at the counter, please call Aman Pandey directly at 82359 93324 for status.
                </p>
              </div>
            )}
          </div>
        )}

        <div className="flex justify-end pt-2">
          <button
            onClick={onClose}
            className="px-4 py-2 text-xs font-semibold text-slate-400 hover:text-white bg-slate-800 rounded-lg"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
};
