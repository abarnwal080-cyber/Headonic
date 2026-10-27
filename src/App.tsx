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
import { AboutSubpageView } from './components/AboutSubpageView';
import { GallerySubpageView } from './components/GallerySubpageView';
import { ReviewSocialPage } from './components/ReviewSocialPage';
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

  const navigateToSection = (id: string) => {
    setActiveTab(id);
    if (activeSubpage) {
      setActiveSubpage(null);
    }
    if (id === 'about' || id === 'gallery' || id === 'review-social') {
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
    <div className="min-h-screen bg-transparent text-[#1a1626] flex flex-col font-sans selection:bg-[#d4af37] selection:text-black relative">
      
      {/* Background Animated Pink-White-Purple Ambiance Orbs */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden -z-10">
        {/* Soft Pink Orb */}
        <div
          className="absolute -top-24 -left-20 w-[420px] sm:w-[580px] h-[420px] sm:h-[580px] rounded-full bg-[#fbcfe8]/50 blur-[120px]"
          style={{ animation: 'floatOrb1 16s ease-in-out infinite' }}
        />
        {/* Soft Lavender Purple Orb */}
        <div
          className="absolute top-1/3 -right-24 w-[450px] sm:w-[620px] h-[450px] sm:h-[620px] rounded-full bg-[#e9d5ff]/50 blur-[130px]"
          style={{ animation: 'floatOrb2 20s ease-in-out infinite' }}
        />
        {/* Luminous Pearl White & Soft Rose Glow */}
        <div
          className="absolute bottom-10 left-1/4 w-[380px] sm:w-[500px] h-[380px] sm:h-[500px] rounded-full bg-[#ffffff]/90 blur-[100px]"
          style={{ animation: 'floatOrb3 15s ease-in-out infinite' }}
        />
        {/* Delicate Orchid Glow Accent */}
        <div
          className="absolute -bottom-20 right-1/4 w-[350px] sm:w-[480px] h-[350px] sm:h-[480px] rounded-full bg-[#f472b6]/25 blur-[130px]"
          style={{ animation: 'floatOrb1 18s ease-in-out infinite reverse' }}
        />
      </div>

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
        ) : activeTab === 'about' ? (
          /* Dedicated About Us Subpage View (Removed from homepage as requested) */
          <AboutSubpageView
            onBack={() => navigateToSection('home')}
            onBookClick={() => handleOpenBooking()}
          />
        ) : activeTab === 'gallery' ? (
          /* Dedicated Gallery Subpage View (Opened upon clicking View Full Gallery) */
          <GallerySubpageView
            onBack={() => navigateToSection('home')}
            onBookClick={(note) => handleOpenBooking(note)}
          />
        ) : activeTab === 'review-social' ? (
          /* Dedicated Review & Social Hub: Salon Name + Logo on top, Google Review & Instagram buttons */
          <ReviewSocialPage
            onBack={() => navigateToSection('home')}
            onBookClick={() => handleOpenBooking()}
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

              {/* Special requirement services:
                  Female Services (Bridal Makeup on top, Hair & Skin horizontally below),
                  followed by Male Services (Hair Care on top, Beard & Skin horizontally below).
                  Images in 3:2 landscape and entire card is clickable! */}
              <SpecialHomeCarousels
                onSelectSubpage={(subpage) => setActiveSubpage(subpage)}
              />
            </div>

            {/* Meet the MUA ( Owner ) Section: Mr Amarjeet Kumar */}
            <MeetTheMUA onBookClick={(svc) => handleOpenBooking(svc)} />

            {/* Gallery Section: Carousel with very small frames by default + Button opening full gallery subpage */}
            <GallerySection
              onBookClick={(note) => handleOpenBooking(note)}
              onOpenFullGallery={() => navigateToSection('gallery')}
            />

            {/* Auto-sliding Video Gallery Carousel with 6 Vimeo reels, fixed 9:16 aspect ratio & auto-advance */}
            <VideoGallerySection />

            {/* Auto-sliding Reviews Carousel with 5/5 Google rating, verified reviews & link to Google listing */}
            <ReviewsSection onOpenReviewSocial={() => navigateToSection('review-social')} />

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
