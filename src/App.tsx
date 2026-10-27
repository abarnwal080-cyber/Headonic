/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
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
import { AboutSubpageView } from './components/AboutSubpageView';
import { GallerySubpageView } from './components/GallerySubpageView';
import { ReviewSocialPage } from './components/ReviewSocialPage';
import { PricingPage } from './components/PricingPage';
import { TypeformBookingModal } from './components/TypeformBookingModal';
import { ImageModal } from './components/ImageModal';
import { PremiumLoader } from './components/PremiumLoader';
import { MeetTheMUA } from './components/MeetTheMUA';
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

  // Sync initial URL path if user lands on /pricing
  useEffect(() => {
    if (window.location.pathname === '/pricing') {
      setActiveTab('pricing');
    }
  }, []);

  const navigateToSection = (id: string) => {
    setActiveTab(id);
    if (activeSubpage) {
      setActiveSubpage(null);
    }

    if (id === 'pricing') {
      window.history.pushState({}, '', '/pricing');
    } else if (window.location.pathname === '/pricing') {
      window.history.pushState({}, '', '/');
    }

    if (id === 'about' || id === 'gallery' || id === 'review-social' || id === 'pricing') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }

    setTimeout(() => {
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      } else {
        window.scrollTo({ top: 0, behavior: 'smooth' });
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
    <div className="min-h-screen bg-white text-[#222222] flex flex-col font-sans selection:bg-[#B89A60] selection:text-white relative">

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

      <main className="flex-1 bg-white">
        {/* If a service subpage is selected, display the full dedicated Subpage View */}
        {activeSubpage ? (
          <ServiceSubpageView
            subpage={activeSubpage}
            onBack={() => setActiveSubpage(null)}
            onBookService={(svc) => handleOpenBooking(svc)}
            onOpenImageModal={handleOpenImage}
          />
        ) : activeTab === 'pricing' ? (
          /* Dedicated Premium Salon Pricing Subpage View */
          <PricingPage
            onOpenBooking={(svc) => handleOpenBooking(svc)}
          />
        ) : activeTab === 'about' ? (
          /* Dedicated About Us Subpage View */
          <AboutSubpageView
            onBack={() => navigateToSection('home')}
            onBookClick={() => handleOpenBooking()}
          />
        ) : activeTab === 'gallery' ? (
          /* Dedicated Gallery Subpage View */
          <GallerySubpageView
            onBack={() => navigateToSection('home')}
            onBookClick={(note) => handleOpenBooking(note)}
          />
        ) : activeTab === 'review-social' ? (
          /* Dedicated Review & Social Hub */
          <ReviewSocialPage
            onBack={() => navigateToSection('home')}
            onBookClick={() => handleOpenBooking()}
          />
        ) : (
          /* Main Homepage flow */
          <>
            {/* Hero Section */}
            <div id="home">
              <HeroSection
                onBookClick={() => handleOpenBooking()}
                onOpenImageModal={handleOpenImage}
              />

              {/* Special requirement services */}
              <SpecialHomeCarousels
                onSelectSubpage={(subpage) => setActiveSubpage(subpage)}
              />
            </div>

            {/* Meet the MUA ( Owner ) Section: Mr Amarjeet Kumar */}
            <MeetTheMUA onBookClick={(svc) => handleOpenBooking(svc)} />

            {/* Gallery Section */}
            <GallerySection
              onBookClick={(note) => handleOpenBooking(note)}
              onOpenFullGallery={() => navigateToSection('gallery')}
            />

            {/* Auto-sliding Video Gallery Carousel with Vimeo reels */}
            <VideoGallerySection />

            {/* Auto-sliding Reviews Carousel */}
            <ReviewsSection onOpenReviewSocial={() => navigateToSection('review-social')} />

            {/* Frequently Asked Questions */}
            <FAQSection />

            {/* Contact Section */}
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

      {/* Typeform-style Step-by-Step Booking Questionnaire */}
      <TypeformBookingModal
        isOpen={isTypeformOpen}
        onClose={() => setIsTypeformOpen(false)}
        prefilledService={prefilledService}
      />

      {/* Image Zoom / Lightbox Modal */}
      <ImageModal
        url={modalImage ? modalImage.url : null}
        title={modalImage ? modalImage.title : ''}
        onClose={() => setModalImage(null)}
      />

    </div>
  );
}
