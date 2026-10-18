import { ServiceItem } from '../types';

export const POPULAR_SERVICES: ServiceItem[] = [
  {
    id: 'aadhaar-services',
    title: 'Aadhaar Services - Update & Correction',
    shortDesc: 'Mobile number linking, name correction, date of birth update, biometric update, address change & original PVC card order.',
    category: 'identity',
    isPopular: true,
    requiredDocs: ['Existing Aadhaar copy', 'Proof of Identity (Voter ID/PAN/Passbook)', 'Mobile for OTP verification', 'Address Proof'],
    processingTime: '24 - 72 Hours',
    iconName: 'Fingerprint',
    features: [
      'Mobile Number & Email Linking',
      'Name & Date of Birth Correction',
      'Address & Father/Husband Name Update',
      'Official UIDAI PVC Plastic Card Order'
    ]
  },
  {
    id: 'pan-card',
    title: 'PAN Card - New & Correction',
    shortDesc: 'Fast NSDL/UTIITSL New PAN card application, Minor to Major PAN conversion, reprint lost PAN, and instant e-PAN generation.',
    category: 'identity',
    isPopular: true,
    requiredDocs: ['Aadhaar Card (front & back)', '2 Passport size photographs', 'Signature on white paper', 'Active Mobile Number'],
    processingTime: 'Instant e-PAN (3-4 days), Physical Card in 7-10 days',
    iconName: 'CreditCard',
    features: [
      'Fresh New PAN Card Application',
      'Name, Father Name & Photo Correction',
      'Instant e-PAN via Aadhaar OTP',
      'Physical Laminated Card Delivery to Home'
    ]
  },
  {
    id: 'ayushman-card',
    title: 'Ayushman Card - Registration',
    shortDesc: 'PM-JAY Golden Card registration with ₹5 Lakh free yearly medical treatment coverage for family members at empanelled hospitals.',
    category: 'welfare',
    isPopular: true,
    requiredDocs: ['Ration Card / PM Letter / SECC Name', 'Aadhaar Card', 'Registered Mobile Number for OTP'],
    processingTime: 'Same Day e-KYC & Instant Download',
    iconName: 'HeartPulse',
    features: [
      'PM-JAY Beneficiary List Search (Name & Village-wise)',
      'Biometric / OTP based e-KYC',
      'Instant Ayushman Golden Card Print',
      '₹5 Lakhs Free Cashless Hospital Treatment'
    ]
  },
  {
    id: 'scholarship-form',
    title: 'Scholarship Form - Apply Online',
    shortDesc: 'Complete online application & renewal for UP Scholarship, Bihar Post-Matric, National Scholarship Portal (NSP), Pre/Post Matric & Higher Education.',
    category: 'welfare',
    isPopular: true,
    requiredDocs: ['Previous Year Marksheet', 'Fee Receipt & Admission Letter', 'Income Certificate (Aay)', 'Caste Certificate (Jati)', 'Bank Passbook & Aadhaar'],
    processingTime: 'Instant Application with Printout & Submission Copy',
    iconName: 'GraduationCap',
    features: [
      'NSP & State Government Scholarship Portal Filing',
      'Fresh Registration & Renewal Applications',
      'Document Scanning & Uploading as per Govt Specs',
      'Official Final Printout for College Submission'
    ]
  },
  {
    id: 'caste-income-domicile',
    title: 'Income, Caste & Domicile (Jati/Aay/Niwas)',
    shortDesc: 'Official e-District certificates issued with digital signature and QR verification for jobs, admissions, and scholarships.',
    category: 'certificates',
    isPopular: false,
    requiredDocs: ['Aadhaar Card', 'Passport Photo', 'Swaprameet Goshna Patra', 'Ration Card copy'],
    processingTime: '7 - 10 Working Days',
    iconName: 'FileCheck',
    features: [
      'Jati Praman Patra (Caste Certificate)',
      'Aay Praman Patra (Income Certificate)',
      'Niwas Praman Patra (Domicile / Residence)',
      'QR Code Verified Digital Certificate Print'
    ]
  },
  {
    id: 'voter-id',
    title: 'Voter ID Card - Form 6, 7 & 8',
    shortDesc: 'Election Commission of India (ECI) NVSP new voter registration, address shifting, mobile linking and e-EPIC download.',
    category: 'identity',
    isPopular: false,
    requiredDocs: ['Aadhaar Card', 'Age Proof (10th marksheet or Birth Certificate)', 'Passport Photo', 'Family Member Voter ID'],
    processingTime: '15 - 20 Working Days',
    iconName: 'Vote',
    features: [
      'New Voter Registration (Form 6)',
      'Correction in Voter ID (Form 8)',
      'Color e-EPIC Digital Download & PVC Printing',
      'Assembly Constituency Shifting'
    ]
  },
  {
    id: 'banking-aeps',
    title: 'DigiPay AEPS & Banking Services',
    shortDesc: 'Aadhaar-enabled payment system cash withdrawal, mini-statement, balance inquiry and domestic money transfer (DMT).',
    category: 'banking',
    isPopular: false,
    requiredDocs: ['Aadhaar Number', 'Biometric Fingerprint Authentication', 'Bank Name'],
    processingTime: 'Instant (Under 2 minutes)',
    iconName: 'Landmark',
    features: [
      'Cash Withdrawal from all Banks via Fingerprint',
      'Instant Balance Inquiry & Mini Statement',
      'Direct Bank Account Money Transfer',
      'PM Kisan & DBT Subsidy Withdrawal'
    ]
  },
  {
    id: 'ration-card',
    title: 'Ration Card Online Services',
    shortDesc: 'Food & Civil Supplies department new ration card application, family member name addition/deletion, and e-Ration card download.',
    category: 'welfare',
    isPopular: false,
    requiredDocs: ['Aadhaar cards of all family members', 'Family group photograph', 'Electricity bill / Residence proof', 'Bank passbook'],
    processingTime: '15 - 30 Working Days',
    iconName: 'Users',
    features: [
      'New Ration Card Application',
      'Family Member Name Addition (Newborn / Bride)',
      'Ration Card Slip Download & Print',
      'LPG Cylinder Ujjwala KYC Linking'
    ]
  }
];

export const OWNER_DETAILS = {
  name: 'Aman Pandey',
  role: 'Authorized CSC VLE (Village Level Entrepreneur)',
  mobileNumber: '82359 93324',
  rawMobile: '8235993324',
  internationalMobile: '+918235993324',
  email: 'amanpandeycsc@gmail.com',
  centerName: 'Aman Pandey CSC Center',
  tagline: 'All Government & Online Services Available Here',
  hours: 'Monday – Saturday: 8:00 AM – 8:00 PM | Sunday: 9:00 AM – 2:00 PM',
  address: 'Main Market Road, Near Panchayat Bhawan, CSC Digital Seva Kendra',
  establishedYear: '2021',
  totalApplications: '12,500+'
};
