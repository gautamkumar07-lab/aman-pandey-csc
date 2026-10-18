export interface ServiceItem {
  id: string;
  title: string;
  shortDesc: string;
  category: 'identity' | 'welfare' | 'certificates' | 'banking';
  isPopular: boolean;
  requiredDocs: string[];
  processingTime: string;
  iconName: string;
  features: string[];
}

export interface BookingFormData {
  fullName: string;
  mobileNumber: string;
  villageCity: string;
  selectedService: string;
  message: string;
  documentFile: File | null;
  documentName?: string;
}

export interface BookingSubmission extends BookingFormData {
  trackingId: string;
  submittedAt: string;
  status: 'Pending Verification' | 'Documents Under Review' | 'Submitted to Portal' | 'Completed';
}
