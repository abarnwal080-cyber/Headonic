import React, { useState } from 'react';
import { MapPin, Phone, Clock, Instagram, Send, Navigation, Copy, Check, Sparkles, MessageCircle } from 'lucide-react';
import { SALON_INFO } from '../data/salonData';

export const ContactSection: React.FC = () => {
  const [copied, setCopied] = useState(false);
  const [contactSubmitted, setContactSubmitted] = useState(false);
  const [cForm, setCForm] = useState({
    name: '',
    phone: '',
    email: '',
    message: '',
  });

  const handleCopyAddress = () => {
    navigator.clipboard.writeText(SALON_INFO.address);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleContactSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!cForm.name || !cForm.phone) return;
    setContactSubmitted(true);
  };

  return (
    <section id="contact" className="py-16 sm:py-24 bg-[#0b0c10] border-b border-[#1f222b]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/10 border border-[#d4af37]/30 text-[#d4af37] text-xs font-semibold uppercase tracking-wider mb-3">
            <MapPin className="w-3.5 h-3.5" />
            Visit or Get in Touch
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">
            Contact & Location
          </h2>
          <p className="text-zinc-400 text-sm sm:text-base leading-relaxed">
            Conveniently situated in the bustling central market of Maharajganj, Siwan. Easy parking and elevator/stairs access to the 1st floor.
          </p>
        </div>

        {/* 2-Column Info & Contact Form */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-12">
          
          {/* Left Column: Business Details & Quick CTAs */}
          <div className="lg:col-span-6 space-y-6">
            <div className="bg-[#13151f] border border-[#232635] rounded-3xl p-6 sm:p-8 space-y-6 shadow-xl">
              
              {/* Address Item */}
              <div className="flex items-start gap-4">
                <div className="w-11 h-11 rounded-2xl bg-amber-500/10 border border-[#d4af37]/30 flex items-center justify-center shrink-0 mt-1">
                  <MapPin className="w-5 h-5 text-[#d4af37]" />
                </div>
                <div className="space-y-1.5 flex-1">
                  <h4 className="text-sm font-bold text-white uppercase tracking-wider">
                    Salon Address
                  </h4>
                  <p className="text-xs sm:text-sm text-zinc-300 leading-relaxed">
                    {SALON_INFO.address}
                  </p>
                  <p className="text-xs text-[#d4af37] font-medium">
                    Landmark: {SALON_INFO.landmark}
                  </p>
                  <div className="pt-1">
                    <button
                      onClick={handleCopyAddress}
                      className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg bg-zinc-800 hover:bg-zinc-700 text-zinc-300 text-xs font-medium transition-colors cursor-pointer"
                    >
                      {copied ? (
                        <>
                          <Check className="w-3.5 h-3.5 text-emerald-400" />
                          <span className="text-emerald-400">Address Copied!</span>
                        </>
                      ) : (
                        <>
                          <Copy className="w-3.5 h-3.5 text-zinc-400" />
                          <span>Copy Full Address</span>
                        </>
                      )}
                    </button>
                  </div>
                </div>
              </div>

              {/* Phone / Mobile */}
              <div className="flex items-start gap-4">
                <div className="w-11 h-11 rounded-2xl bg-amber-500/10 border border-[#d4af37]/30 flex items-center justify-center shrink-0">
                  <Phone className="w-5 h-5 text-[#d4af37]" />
                </div>
                <div className="space-y-1 flex-1">
                  <h4 className="text-sm font-bold text-white uppercase tracking-wider">
                    Phone & WhatsApp
                  </h4>
                  <div className="flex flex-wrap items-center gap-3">
                    <a
                      href={`tel:${SALON_INFO.phoneClean}`}
                      className="text-base sm:text-lg font-bold text-white hover:text-[#d4af37] transition-colors"
                    >
                      {SALON_INFO.mobile}
                    </a>
                    <a
                      href={SALON_INFO.whatsappLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-emerald-500/20 text-emerald-400 text-xs font-semibold border border-emerald-500/30"
                    >
                      <MessageCircle className="w-3.5 h-3.5" />
                      Chat on WhatsApp
                    </a>
                  </div>
                  <p className="text-xs text-zinc-400">
                    Appointments, Bridal Inquiries & Price quotes
                  </p>
                </div>
              </div>

              {/* Hours */}
              <div className="flex items-start gap-4">
                <div className="w-11 h-11 rounded-2xl bg-amber-500/10 border border-[#d4af37]/30 flex items-center justify-center shrink-0">
                  <Clock className="w-5 h-5 text-[#d4af37]" />
                </div>
                <div className="space-y-1">
                  <h4 className="text-sm font-bold text-white uppercase tracking-wider">
                    Salon Timings
                  </h4>
                  <p className="text-xs sm:text-sm text-zinc-200">
                    {SALON_INFO.hours} • <span className="text-emerald-400 font-semibold">{SALON_INFO.operatingDays}</span>
                  </p>
                  <p className="text-xs text-zinc-400">
                    Open continuously Monday through Sunday.
                  </p>
                </div>
              </div>

              {/* Get Directions CTA */}
              <div className="pt-2">
                <a
                  href={SALON_INFO.googleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-3 px-5 rounded-2xl bg-gradient-to-r from-[#b78b1a] via-[#d4af37] to-[#e4c45a] text-black font-bold text-sm shadow-md hover:brightness-110 active:scale-95 transition-all flex items-center justify-center gap-2"
                >
                  <Navigation className="w-4 h-4" />
                  <span>Get Driving Directions on Google Maps</span>
                </a>
              </div>

            </div>
          </div>

          {/* Right Column: Contact Inquiry Form */}
          <div className="lg:col-span-6">
            <div className="bg-[#13151f] border border-[#232635] rounded-3xl p-6 sm:p-8 shadow-xl h-full flex flex-col justify-between">
              <div>
                <h3 className="font-serif text-2xl font-bold text-white mb-2">
                  Send a Quick Inquiry
                </h3>
                <p className="text-xs text-zinc-400 mb-6">
                  Have a question about a customized bridal package, party group makeover, or hair treatment? Drop us a note!
                </p>

                {contactSubmitted ? (
                  <div className="p-6 rounded-2xl bg-emerald-950/40 border border-emerald-700/50 text-center space-y-3">
                    <div className="w-12 h-12 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center mx-auto">
                      <Check className="w-6 h-6" />
                    </div>
                    <h4 className="text-base font-bold text-white">Message Sent!</h4>
                    <p className="text-xs text-zinc-300">
                      Thank you for contacting Hedonic Salon. Our team will get back to you shortly.
                    </p>
                    <button
                      onClick={() => setContactSubmitted(false)}
                      className="text-xs text-[#d4af37] underline pt-2 cursor-pointer"
                    >
                      Send another message
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleContactSubmit} className="space-y-4">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-semibold text-zinc-300 mb-1">
                          Your Name *
                        </label>
                        <input
                          type="text"
                          required
                          value={cForm.name}
                          onChange={(e) => setCForm({ ...cForm, name: e.target.value })}
                          placeholder="Your full name"
                          className="w-full bg-[#1b1e2c] border border-zinc-700 rounded-xl px-3.5 py-2 text-xs text-white focus:outline-none focus:border-[#d4af37]"
                        />
                      </div>

                      <div>
                        <label className="block text-xs font-semibold text-zinc-300 mb-1">
                          Phone Number *
                        </label>
                        <input
                          type="tel"
                          required
                          value={cForm.phone}
                          onChange={(e) => setCForm({ ...cForm, phone: e.target.value })}
                          placeholder="10-digit mobile"
                          className="w-full bg-[#1b1e2c] border border-zinc-700 rounded-xl px-3.5 py-2 text-xs text-white focus:outline-none focus:border-[#d4af37]"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-zinc-300 mb-1">
                        Email Address (Optional)
                      </label>
                      <input
                        type="email"
                        value={cForm.email}
                        onChange={(e) => setCForm({ ...cForm, email: e.target.value })}
                        placeholder="youremail@example.com"
                        className="w-full bg-[#1b1e2c] border border-zinc-700 rounded-xl px-3.5 py-2 text-xs text-white focus:outline-none focus:border-[#d4af37]"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-zinc-300 mb-1">
                        Your Message or Query *
                      </label>
                      <textarea
                        rows={3}
                        required
                        value={cForm.message}
                        onChange={(e) => setCForm({ ...cForm, message: e.target.value })}
                        placeholder="Write your inquiry here..."
                        className="w-full bg-[#1b1e2c] border border-zinc-700 rounded-xl px-3.5 py-2 text-xs text-white focus:outline-none focus:border-[#d4af37]"
                      />
                    </div>

                    <button
                      type="submit"
                      className="w-full py-3 rounded-xl bg-[#d4af37] text-black font-semibold text-xs hover:brightness-110 active:scale-95 transition-all flex items-center justify-center gap-2 cursor-pointer shadow-md"
                    >
                      <Send className="w-3.5 h-3.5" />
                      <span>Submit Message</span>
                    </button>
                  </form>
                )}
              </div>

              <div className="pt-4 border-t border-zinc-800 text-[11px] text-zinc-500 flex items-center justify-between">
                <span>Fast response on working days</span>
                <span className="text-[#d4af37]">Sita Complex, 1st Floor</span>
              </div>
            </div>
          </div>

        </div>

        {/* Embedded Google Map */}
        <div className="rounded-3xl overflow-hidden border border-[#262a3a] shadow-2xl bg-zinc-950">
          <div className="p-4 bg-[#12141d] border-b border-zinc-800 flex items-center justify-between flex-wrap gap-2">
            <div className="flex items-center gap-2">
              <MapPin className="w-4 h-4 text-[#d4af37]" />
              <span className="text-xs sm:text-sm font-semibold text-white">
                Interactive Google Map – Maharajganj - Duraundha Road
              </span>
            </div>
            <a
              href={SALON_INFO.googleMapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs text-[#d4af37] hover:underline flex items-center gap-1 font-medium"
            >
              Open in Google Maps App <Navigation className="w-3 h-3" />
            </a>
          </div>

          <div className="relative w-full h-[350px] sm:h-[420px] bg-zinc-900">
            <iframe
              title="Hedonic Unisex Salon Location Map"
              src="https://maps.google.com/maps?q=Maharajganj+Duraundha+Road+Siwan+Bihar+841238&t=&z=15&ie=UTF8&iwloc=&output=embed"
              className="w-full h-full border-0 grayscale-[25%] contrast-[1.1]"
              loading="lazy"
              allowFullScreen
            />
          </div>
        </div>

      </div>
    </section>
  );
};
