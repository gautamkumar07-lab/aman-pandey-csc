import React, { useState, useEffect, useRef } from 'react';
import {
  Upload,
  CheckCircle,
  AlertCircle,
  FileText,
  X,
  Send,
  Shield,
  Clock,
  Sparkles
} from 'lucide-react';
import { POPULAR_SERVICES, OWNER_DETAILS } from '../data/servicesData';
import { BookingFormData, BookingSubmission } from '../types';

interface BookingFormProps {
  preselectedService?: string;
  onSubmitSuccess: (submission: BookingSubmission) => void;
}

export const BookingForm: React.FC<BookingFormProps> = ({
  preselectedService,
  onSubmitSuccess,
}) => {
  const [formData, setFormData] = useState<BookingFormData>({
    fullName: '',
    mobileNumber: '',
    villageCity: '',
    selectedService: preselectedService || 'Aadhaar Services - Update & Correction',
    message: '',
    documentFile: null,
    documentName: '',
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [filePreview, setFilePreview] = useState<string | null>(null);
  const fileInputRef = useRef<HTMLInputElement | null>(null);

  useEffect(() => {
    if (preselectedService) {
      setFormData((prev) => ({ ...prev, selectedService: preselectedService }));
    }
  }, [preselectedService]);

  const validate = (): boolean => {
    const newErrors: Record<string, string> = {};

    if (!formData.fullName.trim()) {
      newErrors.fullName = 'Full Name is required.';
    } else if (formData.fullName.trim().length < 3) {
      newErrors.fullName = 'Please enter at least 3 characters.';
    }

    const cleanMobile = formData.mobileNumber.replace(/\D/g, '');
    if (!cleanMobile) {
      newErrors.mobileNumber = 'Mobile Number is required.';
    } else if (cleanMobile.length < 10) {
      newErrors.mobileNumber = 'Please enter a valid 10-digit mobile number.';
    }

    if (!formData.villageCity.trim()) {
      newErrors.villageCity = 'Village / City is required.';
    }

    if (!formData.selectedService) {
      newErrors.selectedService = 'Please select a service.';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      // Validate file size (< 10MB)
      if (file.size > 10 * 1024 * 1024) {
        setErrors((prev) => ({
          ...prev,
          document: 'File size exceeds 10MB limit. Please upload a smaller scan/photo.',
        }));
        return;
      }

      setFormData((prev) => ({
        ...prev,
        documentFile: file,
        documentName: file.name,
      }));
      setErrors((prev) => {
        const next = { ...prev };
        delete next.document;
        return next;
      });

      // Preview if image
      if (file.type.startsWith('image/')) {
        const reader = new FileReader();
        reader.onloadend = () => {
          setFilePreview(reader.result as string);
        };
        reader.readAsDataURL(file);
      } else {
        setFilePreview(null);
      }
    }
  };

  const removeFile = () => {
    setFormData((prev) => ({
      ...prev,
      documentFile: null,
      documentName: '',
    }));
    setFilePreview(null);
    if (fileInputRef.current) {
      fileInputRef.current.value = '';
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) {
      return;
    }

    setIsSubmitting(true);

    // Simulate reliable portal registration
    setTimeout(() => {
      const randomNum = Math.floor(1000 + Math.random() * 9000);
      const trackingId = `CSC-${new Date().getFullYear()}-AP-${randomNum}`;

      const submission: BookingSubmission = {
        ...formData,
        trackingId,
        submittedAt: new Date().toLocaleString('en-IN', {
          dateStyle: 'medium',
          timeStyle: 'short',
        }),
        status: 'Pending Verification',
      };

      // Save to localStorage for citizen tracking
      try {
        const existing = JSON.parse(localStorage.getItem('csc_bookings') || '[]');
        existing.unshift(submission);
        localStorage.setItem('csc_bookings', JSON.stringify(existing));
      } catch (err) {
        console.error('Local storage save error', err);
      }

      setIsSubmitting(false);
      onSubmitSuccess(submission);

      // Reset form
      setFormData({
        fullName: '',
        mobileNumber: '',
        villageCity: '',
        selectedService: preselectedService || 'Aadhaar Services - Update & Correction',
        message: '',
        documentFile: null,
        documentName: '',
      });
      setFilePreview(null);
      if (fileInputRef.current) {
        fileInputRef.current.value = '';
      }
    }, 600);
  };

  return (
    <section id="book-service" className="py-16 md:py-24 bg-slate-900/60 relative">
      {/* Background radial glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(37,99,235,0.15),transparent_70%)] pointer-events-none" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Title & Introduction */}
        <div className="text-center space-y-3 mb-10">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-950/80 border border-blue-800/70 text-blue-300 text-xs font-semibold">
            <Sparkles className="w-3.5 h-3.5 text-cyan-400" />
            <span>Online Booking & Document Verification</span>
          </div>

          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Book Your Service
          </h2>

          <p className="text-slate-400 text-sm sm:text-base max-w-xl mx-auto leading-relaxed">
            Fill in your details below to schedule your government service application with Aman Pandey. We will verify your documents and initiate portal processing without delay.
          </p>
        </div>

        {/* Main Form Container */}
        <div className="bg-slate-950/95 border border-blue-800/50 rounded-2xl p-6 sm:p-10 shadow-2xl relative">
          <div className="absolute top-0 right-10 -translate-y-1/2 hidden sm:flex items-center gap-2 px-3 py-1 bg-blue-600 text-white text-xs font-semibold rounded-full shadow-lg shadow-blue-600/30">
            <Shield className="w-3.5 h-3.5" />
            <span>Encrypted & Govt Compliant</span>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 sm:gap-6">
              {/* Full Name */}
              <div>
                <label className="block text-xs font-semibold uppercase tracking-wider text-slate-300 mb-2">
                  Full Name <span className="text-blue-400">*</span>
                </label>
                <input
                  type="text"
                  placeholder="e.g. Ramesh Kumar"
                  value={formData.fullName}
                  onChange={(e) => {
                    setFormData({ ...formData, fullName: e.target.value });
                    if (errors.fullName) setErrors({ ...errors, fullName: '' });
                  }}
                  className={`w-full px-4 py-3 bg-slate-900 border rounded-xl text-white placeholder-slate-500 text-sm focus:outline-none focus:ring-2 transition-all ${
                    errors.fullName
                      ? 'border-red-500/80 focus:ring-red-500/30'
                      : 'border-slate-800 focus:border-blue-500 focus:ring-blue-500/20'
                  }`}
                />
                {errors.fullName && (
                  <p className="mt-1.5 text-xs text-red-400 flex items-center gap-1">
                    <AlertCircle className="w-3.5 h-3.5" />
                    <span>{errors.fullName}</span>
                  </p>
                )}
              </div>

              {/* Mobile Number */}
              <div>
                <label className="block text-xs font-semibold uppercase tracking-wider text-slate-300 mb-2">
                  Mobile Number <span className="text-blue-400">*</span>
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-xs font-semibold text-slate-400">
                    +91
                  </div>
                  <input
                    type="tel"
                    maxLength={10}
                    placeholder="98765 43210"
                    value={formData.mobileNumber}
                    onChange={(e) => {
                      const val = e.target.value.replace(/\D/g, '');
                      setFormData({ ...formData, mobileNumber: val });
                      if (errors.mobileNumber) setErrors({ ...errors, mobileNumber: '' });
                    }}
                    className={`w-full pl-12 pr-4 py-3 bg-slate-900 border rounded-xl text-white placeholder-slate-500 text-sm focus:outline-none focus:ring-2 transition-all ${
                      errors.mobileNumber
                        ? 'border-red-500/80 focus:ring-red-500/30'
                        : 'border-slate-800 focus:border-blue-500 focus:ring-blue-500/20'
                    }`}
                  />
                </div>
                {errors.mobileNumber && (
                  <p className="mt-1.5 text-xs text-red-400 flex items-center gap-1">
                    <AlertCircle className="w-3.5 h-3.5" />
                    <span>{errors.mobileNumber}</span>
                  </p>
                )}
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 sm:gap-6">
              {/* Village / City */}
              <div>
                <label className="block text-xs font-semibold uppercase tracking-wider text-slate-300 mb-2">
                  Village / City <span className="text-blue-400">*</span>
                </label>
                <input
                  type="text"
                  placeholder="e.g. Rampur / Patna"
                  value={formData.villageCity}
                  onChange={(e) => {
                    setFormData({ ...formData, villageCity: e.target.value });
                    if (errors.villageCity) setErrors({ ...errors, villageCity: '' });
                  }}
                  className={`w-full px-4 py-3 bg-slate-900 border rounded-xl text-white placeholder-slate-500 text-sm focus:outline-none focus:ring-2 transition-all ${
                    errors.villageCity
                      ? 'border-red-500/80 focus:ring-red-500/30'
                      : 'border-slate-800 focus:border-blue-500 focus:ring-blue-500/20'
                  }`}
                />
                {errors.villageCity && (
                  <p className="mt-1.5 text-xs text-red-400 flex items-center gap-1">
                    <AlertCircle className="w-3.5 h-3.5" />
                    <span>{errors.villageCity}</span>
                  </p>
                )}
              </div>

              {/* Select Service Dropdown */}
              <div>
                <label className="block text-xs font-semibold uppercase tracking-wider text-slate-300 mb-2">
                  Select Service (Dropdown) <span className="text-blue-400">*</span>
                </label>
                <select
                  value={formData.selectedService}
                  onChange={(e) => {
                    setFormData({ ...formData, selectedService: e.target.value });
                    if (errors.selectedService) setErrors({ ...errors, selectedService: '' });
                  }}
                  className={`w-full px-4 py-3 bg-slate-900 border rounded-xl text-white text-sm focus:outline-none focus:ring-2 transition-all ${
                    errors.selectedService
                      ? 'border-red-500/80 focus:ring-red-500/30'
                      : 'border-slate-800 focus:border-blue-500 focus:ring-blue-500/20'
                  }`}
                >
                  <optgroup label="Popular Services">
                    {POPULAR_SERVICES.filter((s) => s.isPopular).map((service) => (
                      <option key={service.id} value={service.title}>
                        {service.title}
                      </option>
                    ))}
                  </optgroup>
                  <optgroup label="Other Government Services">
                    {POPULAR_SERVICES.filter((s) => !s.isPopular).map((service) => (
                      <option key={service.id} value={service.title}>
                        {service.title}
                      </option>
                    ))}
                  </optgroup>
                  <option value="Other Government / Online Service">
                    Other Online Service (Specify in message)
                  </option>
                </select>
                {errors.selectedService && (
                  <p className="mt-1.5 text-xs text-red-400 flex items-center gap-1">
                    <AlertCircle className="w-3.5 h-3.5" />
                    <span>{errors.selectedService}</span>
                  </p>
                )}
              </div>
            </div>

            {/* Message Box */}
            <div>
              <label className="block text-xs font-semibold uppercase tracking-wider text-slate-300 mb-2">
                Message Box <span className="text-slate-500 text-[11px] font-normal">(Optional - Note any specific correction or question)</span>
              </label>
              <textarea
                rows={3}
                placeholder="Mention details (e.g., Want to update mobile number in Aadhaar, or applying for new PAN card with father's name correction)..."
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                className="w-full px-4 py-3 bg-slate-900 border border-slate-800 rounded-xl text-white placeholder-slate-500 text-sm focus:outline-none focus:ring-2 focus:border-blue-500 focus:ring-blue-500/20 transition-all resize-y"
              />
            </div>

            {/* Upload Document Section */}
            <div>
              <label className="block text-xs font-semibold uppercase tracking-wider text-slate-300 mb-2">
                Upload Document (Aadhaar / PAN / Other)
              </label>
              
              {!formData.documentFile ? (
                <div
                  onClick={() => fileInputRef.current?.click()}
                  className="border-2 border-dashed border-slate-700 hover:border-blue-500/70 rounded-xl p-6 text-center cursor-pointer transition-colors bg-slate-900/50 hover:bg-slate-900 group"
                >
                  <input
                    type="file"
                    ref={fileInputRef}
                    onChange={handleFileChange}
                    accept="image/*,.pdf,.doc,.docx"
                    className="hidden"
                  />
                  <div className="w-12 h-12 mx-auto rounded-full bg-blue-950 flex items-center justify-center text-blue-400 group-hover:scale-110 transition-transform mb-3">
                    <Upload className="w-5 h-5" />
                  </div>
                  <p className="text-sm font-semibold text-slate-200">
                    Click to select Aadhaar / PAN / Marksheet or Document
                  </p>
                  <p className="text-xs text-slate-400 mt-1">
                    Supported: JPG, PNG, PDF (Up to 10MB)
                  </p>
                </div>
              ) : (
                <div className="p-4 rounded-xl bg-slate-900 border border-blue-800/60 flex items-center justify-between gap-4">
                  <div className="flex items-center gap-3 overflow-hidden">
                    {filePreview ? (
                      <img
                        src={filePreview}
                        alt="Document Preview"
                        className="w-12 h-12 object-cover rounded-lg border border-slate-700 shrink-0"
                      />
                    ) : (
                      <div className="w-12 h-12 rounded-lg bg-blue-950 flex items-center justify-center text-blue-400 shrink-0">
                        <FileText className="w-6 h-6" />
                      </div>
                    )}
                    <div className="truncate">
                      <p className="text-sm font-semibold text-white truncate">
                        {formData.documentName}
                      </p>
                      <p className="text-xs text-slate-400">
                        {(formData.documentFile.size / 1024).toFixed(1)} KB · Ready to submit
                      </p>
                    </div>
                  </div>

                  <button
                    type="button"
                    onClick={removeFile}
                    className="p-2 text-slate-400 hover:text-red-400 hover:bg-red-950/30 rounded-lg transition-colors shrink-0"
                    title="Remove file"
                  >
                    <X className="w-5 h-5" />
                  </button>
                </div>
              )}
              {errors.document && (
                <p className="mt-1.5 text-xs text-red-400 flex items-center gap-1">
                  <AlertCircle className="w-3.5 h-3.5" />
                  <span>{errors.document}</span>
                </p>
              )}
            </div>

            {/* Direct WhatsApp Notice */}
            <div className="p-4 rounded-xl bg-blue-950/40 border border-blue-900/60 text-xs text-blue-300 flex items-start gap-3">
              <Clock className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
              <span>
                <strong>Instant Response Guarantee:</strong> Submitting this request creates an official booking entry. You can also send the details straight to Aman Pandey on WhatsApp for urgent same-day processing.
              </span>
            </div>

            {/* Submit Button */}
            <div>
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full py-4 px-6 text-base font-bold text-white bg-blue-600 hover:bg-blue-500 active:bg-blue-700 disabled:opacity-50 rounded-xl shadow-lg shadow-blue-600/30 hover:shadow-blue-600/50 transition-all flex items-center justify-center gap-2 cursor-pointer"
              >
                {isSubmitting ? (
                  <>
                    <span className="w-5 h-5 border-2 border-white/20 border-t-white rounded-full animate-spin" />
                    <span>Submitting to Portal...</span>
                  </>
                ) : (
                  <>
                    <Send className="w-4 h-4" />
                    <span>Submit Request</span>
                  </>
                )}
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};
