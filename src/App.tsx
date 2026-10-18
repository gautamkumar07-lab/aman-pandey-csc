/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { ServicesSection } from './components/ServicesSection';
import { BookingForm } from './components/BookingForm';
import { AboutSection } from './components/AboutSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { FloatingWhatsApp } from './components/FloatingWhatsApp';
import { BookingSuccessModal } from './components/BookingSuccessModal';
import { TrackApplicationModal } from './components/TrackApplicationModal';
import { BookingSubmission } from './types';

export default function App() {
  const [selectedService, setSelectedService] = useState<string>('Aadhaar Services - Update & Correction');
  const [activeSubmission, setActiveSubmission] = useState<BookingSubmission | null>(null);
  const [isTrackModalOpen, setIsTrackModalOpen] = useState<boolean>(false);

  const handleApplyClick = () => {
    const formElement = document.getElementById('book-service');
    if (formElement) {
      formElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleSelectService = (serviceTitle: string) => {
    setSelectedService(serviceTitle);
  };

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 flex flex-col font-sans selection:bg-blue-600 selection:text-white">
      {/* Top Header */}
      <Header onOpenTrack={() => setIsTrackModalOpen(true)} />

      {/* Main Content Sections */}
      <main className="flex-1">
        {/* Hero Section */}
        <Hero onApplyClick={handleApplyClick} />

        {/* Services Section: "Our Popular Services" */}
        <ServicesSection onSelectService={handleSelectService} />

        {/* Booking Form Section: "Book Your Service" */}
        <BookingForm
          preselectedService={selectedService}
          onSubmitSuccess={(submission) => setActiveSubmission(submission)}
        />

        {/* About Section */}
        <AboutSection />

        {/* Contact Section */}
        <ContactSection />
      </main>

      {/* Footer */}
      <Footer />

      {/* Floating WhatsApp Action Button */}
      <FloatingWhatsApp />

      {/* Booking Success / Slip Modal */}
      {activeSubmission && (
        <BookingSuccessModal
          submission={activeSubmission}
          onClose={() => setActiveSubmission(null)}
        />
      )}

      {/* Application Status Tracker Modal */}
      {isTrackModalOpen && (
        <TrackApplicationModal onClose={() => setIsTrackModalOpen(false)} />
      )}
    </div>
  );
}
