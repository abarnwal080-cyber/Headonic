/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Header } from './components/Header';
import { HeroSection } from './components/HeroSection';
import { SpecialHomeCarousels } from './components/SpecialHomeCarousels';
import { AboutSection } from './components/AboutSection';
import { GallerySection } from './components/GallerySection';
import { VideoGallerySection } from './components/VideoGallerySection';
import { ReviewsSection } from './components/ReviewsSection';
import { ContactSection } from './components/ContactSection';
import { FAQSection } from './components/FAQSection';
import { Footer } from './components/Footer';
import { FloatingCTAs } from './components/FloatingCTAs';
import { ServiceSubpageView } from './components/ServiceSubpageView';
import { TypeformBookingModal } from './components/TypeformBookingModal';
import { ImageModal } from './components/ImageModal';
import { PremiumLoader } from './components/PremiumLoader';
import { ServiceSubpage } from './types';

export default function App() {
  const [showLoader, setShowLoader] = useState(true);
  const [activeTab, setActiveTab] = useState<string>('home');
  // State for dedicated full-page subpage view
  const [activeSubpage, setActiveSubpage] = useState<ServiceSubpage | null>(null);
  const [modalImage, setModalImage] = useState<{ url: string; title: string } | null>(null);
  
  // State for interactive Typeform questionnaire modal
  const [isTypeformOpen, setIsTypeformOpen] = useState(false);
  const [prefilledService, setPrefilledService] = useState<string>('');

  const navigateToSection = (id: string) => {
    setActiveTab(id);
    if (activeSubpage) {
      setActiveSubpage(null);
    }
    setTimeout(() => {
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }, 50);
  };

  const handleOpenBooking = (serviceName?: string) => {
    if (serviceName) {
      setPrefilledService(serviceName);
    }
    setIsTypeformOpen(true);
  };

  const handleOpenImage = (url: string, title: string) => {
    setModalImage({ url, title });
  };

  return (
    <div className="min-h-screen bg-[#0b0c10] text-[#f4efe6] flex flex-col font-sans selection:bg-[#d4af37] selection:text-black">
      
      {/* Premium Loader with Icons celebrating "Proud of Maharajganj" */}
      {showLoader && (
        <PremiumLoader
          onComplete={() => setShowLoader(false)}
          forceShow={showLoader}
        />
      )}

      {/* Sticky Header with Logo & Navigation */}
      <Header
        activeTab={activeTab}
        setActiveTab={navigateToSection}
        onBookClick={() => handleOpenBooking()}
      />


      <main className="flex-1">
        {/* If a service subpage is selected, display the full dedicated Subpage View */}
        {activeSubpage ? (
          <ServiceSubpageView
            subpage={activeSubpage}
            onBack={() => setActiveSubpage(null)}
            onBookService={(svc) => handleOpenBooking(svc)}
            onOpenImageModal={handleOpenImage}
          />
        ) : (
          /* Main Homepage flow */
          <>
            {/* Hero Section: Salon Name, Exterior & Interior side-by-side cute landscape frames maintained at the top, illustration icons, and badges */}
            <div id="home">
              <HeroSection
                onBookClick={() => handleOpenBooking()}
                onOpenImageModal={handleOpenImage}
              />

              {/* Special requirement carousels:
                  Female Services carousel (3 services) with 1:1 image auto-sliding every 1.5s with "Know More",
                  followed by Male Services card (3 services) with 1:1 image auto-sliding every 1.5s.
                  Clicking "Know More" opens the dedicated subpage view. */}
              <SpecialHomeCarousels
                onSelectSubpage={(subpage) => setActiveSubpage(subpage)}
              />
            </div>

            {/* About Us Section: Narrative, Mission, Vision, Hygiene Standards (Duplicate exterior/interior images removed as requested) */}
            <AboutSection
              onBookClick={() => handleOpenBooking()}
            />

            {/* Gallery Section: Carousel with very small frames by default + Tab to view full gallery */}
            <GallerySection onBookClick={(note) => handleOpenBooking(note)} />

            {/* Auto-sliding Video Gallery Carousel with 6 Instagram reels, playback & theater view */}
            <VideoGallerySection />

            {/* Auto-sliding Reviews Carousel with Google Rating 4.4/5, verified reviews & link to Google listing */}
            <ReviewsSection />

            {/* Note: Homepage booking section removed. Replaced by left floating icon + Typeform interactive modal */}

            {/* Frequently Asked Questions */}
            <FAQSection />

            {/* Contact Section with address, hours, landmark, inquiry form, and Google Map */}
            <ContactSection />
          </>
        )}
      </main>

      {/* Comprehensive Footer */}
      <Footer
        onNavClick={navigateToSection}
        onBookClick={() => handleOpenBooking()}
        onReplayIntro={() => setShowLoader(true)}
      />

      {/* Floating Buttons: Left floating Appointment button, Right floating WhatsApp & Call */}
      <FloatingCTAs onBookClick={() => handleOpenBooking()} />

      {/* Typeform-style Step-by-Step Booking Questionnaire with WhatsApp popup at final step */}
      <TypeformBookingModal
        isOpen={isTypeformOpen}
        onClose={() => setIsTypeformOpen(false)}
        prefilledService={prefilledService}
      />

      {/* Image Zoom / Lightbox Modal for venue and portfolio photos */}
      <ImageModal
        url={modalImage ? modalImage.url : null}
        title={modalImage ? modalImage.title : ''}
        onClose={() => setModalImage(null)}
      />

    </div>
  );
}
