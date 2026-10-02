import React, { useState, useEffect } from 'react';
import { X, ArrowRight, ArrowLeft, Check, Sparkles, Phone, MessageSquare, Calendar, Clock, User, Scissors, Heart, Shield } from 'lucide-react';
import { SALON_INFO } from '../data/salonData';

interface TypeformBookingModalProps {
  isOpen: boolean;
  onClose: () => void;
  prefilledService?: string;
}

export const TypeformBookingModal: React.FC<TypeformBookingModalProps> = ({
  isOpen,
  onClose,
  prefilledService = '',
}) => {
  const [step, setStep] = useState(1);
  const totalSteps = 5;

  const [gender, setGender] = useState<'female' | 'male' | ''>('');
  const [service, setService] = useState(prefilledService || '');
  const [date, setDate] = useState(new Date().toISOString().split('T')[0]);
  const [time, setTime] = useState('10:30 AM');
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [note, setNote] = useState('');
  const [showFinalPopup, setShowFinalPopup] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');

  // Sync prefilled service
  useEffect(() => {
    if (prefilledService) {
      setService(prefilledService);
      if (prefilledService.toLowerCase().includes('bridal') || prefilledService.toLowerCase().includes('women')) {
        setGender('female');
      } else if (prefilledService.toLowerCase().includes('beard') || prefilledService.toLowerCase().includes('fade')) {
        setGender('male');
      }
    }
  }, [prefilledService]);

  if (!isOpen) return null;

  const femaleServices = [
    'Bridal HD Makeup',
    'Airbrush Bridal Glam',
    'Engagement & Sagan Makeup',
    'Pre-Bridal Luxury Package',
    'Party & Cocktail Glam',
    'Designer Haircut & Styling',
    'Keratin / Protein Smoothening',
    'Hair Botox & Nanoplastia',
    'Deep Conditioning Hair Spa',
  ];

  const maleServices = [
    'Haircut & Modern Styling',
    'Beard Trim & Styling',
    'Classic Hot Towel Shave',
    'Beard Spa & Oil Treatment',
    'Hair Texture (Keratin/Smoothening)',
    'Intensive Anti-Dandruff Hair Spa',
    'Deep Face Clean-Up (Men)',
    'Gold / De-Tan Facial (Men)',
    'Ayurvedic Champi Head Massage',
  ];

  const timeSlots = [
    '09:30 AM', '10:30 AM', '11:30 AM', '12:30 PM',
    '02:00 PM', '03:30 PM', '04:30 PM', '05:30 PM',
    '06:30 PM', '07:30 PM', '08:00 PM',
  ];

  const handleNext = () => {
    setErrorMsg('');
    if (step === 1) {
      if (!gender) {
        setErrorMsg('Please choose whether this appointment is for Female or Male.');
        return;
      }
      setStep(2);
    } else if (step === 2) {
      if (!service) {
        setErrorMsg('Please select at least one service.');
        return;
      }
      setStep(3);
    } else if (step === 3) {
      if (!date || !time) {
        setErrorMsg('Please select your preferred date and time slot.');
        return;
      }
      setStep(4);
    } else if (step === 4) {
      if (!name.trim()) {
        setErrorMsg('Please enter your name.');
        return;
      }
      const cleanPhone = phone.replace(/\D/g, '');
      if (cleanPhone.length !== 10) {
        setErrorMsg('Please enter a valid 10-digit mobile number.');
        return;
      }
      setStep(5);
    } else if (step === 5) {
      // Completed, open final WhatsApp popup!
      setShowFinalPopup(true);
    }
  };

  const handleSendWhatsApp = () => {
    const message = encodeURIComponent(
      `Hello Hedonic Unisex Salon! I want to confirm an appointment:\n\n` +
      `👤 Name: ${name}\n` +
      `📱 Mobile: +91 ${phone}\n` +
      `💇 Service: ${service}\n` +
      `🚻 Category: ${gender === 'female' ? 'Female Service' : 'Male Grooming'}\n` +
      `📅 Date: ${date}\n` +
      `⏰ Time Slot: ${time}\n` +
      (note ? `📝 Notes: ${note}\n` : '') +
      `📍 Location: 1st Floor, Sita Complex, Maharajganj, Siwan\n\n` +
      `Please confirm slot availability.`
    );
    window.open(`https://wa.me/${SALON_INFO.whatsappNumber}?text=${message}`, '_blank');
  };

  return (
    <div className="fixed inset-0 z-50 bg-black/85 backdrop-blur-md flex items-center justify-center p-3 sm:p-6 animate-fadeIn">
      <div className="relative w-full max-w-xl bg-[#12141d] border border-[#d4af37]/40 rounded-3xl overflow-hidden shadow-2xl flex flex-col my-auto max-h-[95vh]">
        
        {/* Top Header & Close Button */}
        <div className="p-4 sm:p-5 bg-[#0e1017] border-b border-zinc-800 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-full bg-gradient-to-tr from-[#99761a] to-[#d4af37] flex items-center justify-center text-black font-bold text-xs">
              H
            </div>
            <div>
              <span className="font-serif text-sm font-bold text-white block">
                Hedonic Unisex Salon
              </span>
              <span className="text-[10px] text-zinc-400 block -mt-0.5">
                Quick Appointment Flow
              </span>
            </div>
          </div>

          <div className="flex items-center gap-2">
            {!showFinalPopup && (
              <span className="text-xs text-[#d4af37] font-semibold bg-[#d4af37]/10 px-2.5 py-1 rounded-full border border-[#d4af37]/30">
                Step {step} of {totalSteps}
              </span>
            )}
            <button
              onClick={onClose}
              className="w-8 h-8 rounded-full bg-zinc-800 text-zinc-300 hover:text-white flex items-center justify-center cursor-pointer transition-colors"
              aria-label="Close"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Progress Bar */}
        {!showFinalPopup && (
          <div className="w-full h-1 bg-zinc-800">
            <div
              className="h-full bg-gradient-to-r from-[#c49822] via-[#d4af37] to-[#e4c45a] transition-all duration-300"
              style={{ width: `${(step / totalSteps) * 100}%` }}
            />
          </div>
        )}

        {/* ================= FINAL STEP POPUP (Send Enquiry on WhatsApp) ================= */}
        {showFinalPopup ? (
          <div className="p-6 sm:p-8 space-y-6 text-center animate-fadeIn overflow-y-auto">
            <div className="w-16 h-16 rounded-full bg-[#25D366] text-white flex items-center justify-center mx-auto shadow-lg shadow-green-950/50">
              <svg viewBox="0 0 24 24" width="32" height="32" fill="currentColor">
                <path d="M12.031 2C6.511 2 2.023 6.48 2.023 11.99c0 1.95.56 3.76 1.53 5.3L2 22l4.88-1.51a9.92 9.92 0 0 0 5.15 1.45c5.52 0 10.01-4.48 10.01-9.99 0-5.51-4.49-9.95-10.009-9.95zm0 18.25c-1.63 0-3.15-.46-4.45-1.25l-.32-.19-3.29 1.02 1.05-3.18-.21-.34a8.17 8.17 0 0 1-1.3-4.32c0-4.55 3.71-8.25 8.27-8.25 4.56 0 8.27 3.7 8.27 8.25 0 4.55-3.71 8.26-8.22 8.26zm4.53-6.19c-.25-.13-1.47-.72-1.7-.81-.23-.08-.39-.13-.56.13-.17.25-.64.81-.79.97-.14.17-.29.19-.54.06-.25-.13-1.06-.39-2.02-1.25-.75-.67-1.25-1.5-1.4-1.75-.15-.25-.02-.39.11-.51.11-.11.25-.29.37-.44.13-.15.17-.25.25-.42.08-.17.04-.32-.02-.44-.06-.13-.56-1.35-.77-1.85-.2-.48-.41-.42-.56-.43h-.48c-.17 0-.44.06-.67.31-.23.25-.88.86-.88 2.1 0 1.24.9 2.44 1.03 2.61.13.17 1.78 2.71 4.3 3.8.6.26 1.07.42 1.43.53.6.19 1.15.16 1.58.1.48-.07 1.47-.6 1.68-1.18.21-.58.21-1.07.15-1.18-.06-.11-.21-.18-.46-.31z" />
              </svg>
            </div>

            <div>
              <span className="text-xs uppercase tracking-widest text-[#d4af37] font-semibold">
                Booking Details Ready!
              </span>
              <h3 className="font-serif text-2xl sm:text-3xl font-bold text-white mt-1">
                Send Enquiry on WhatsApp
              </h3>
              <p className="text-xs sm:text-sm text-zinc-300 mt-1 max-w-sm mx-auto">
                Click below to immediately send your appointment request directly to the salon desk on WhatsApp for instant confirmation.
              </p>
            </div>

            {/* Structured Summary Card */}
            <div className="bg-[#181a26] border border-zinc-700/80 rounded-2xl p-4 sm:p-5 text-left text-xs space-y-2.5 shadow-inner">
              <div className="flex justify-between py-1 border-b border-zinc-800">
                <span className="text-zinc-400">Client Name:</span>
                <span className="text-white font-semibold">{name}</span>
              </div>
              <div className="flex justify-between py-1 border-b border-zinc-800">
                <span className="text-zinc-400">Mobile Number:</span>
                <span className="text-white font-semibold">+91 {phone}</span>
              </div>
              <div className="flex justify-between py-1 border-b border-zinc-800">
                <span className="text-zinc-400">Chosen Service:</span>
                <span className="text-amber-300 font-bold">{service}</span>
              </div>
              <div className="flex justify-between py-1 border-b border-zinc-800">
                <span className="text-zinc-400">Preferred Slot:</span>
                <span className="text-white font-semibold">{date} at {time}</span>
              </div>
              {note && (
                <div className="flex justify-between py-1 border-b border-zinc-800">
                  <span className="text-zinc-400">Notes:</span>
                  <span className="text-zinc-200">{note}</span>
                </div>
              )}
              <div className="flex justify-between py-1 text-zinc-400">
                <span>Salon Venue:</span>
                <span className="text-zinc-300">1st Floor, Sita Complex, Maharajganj</span>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="space-y-3 pt-2">
              <button
                onClick={handleSendWhatsApp}
                className="w-full py-3.5 px-6 rounded-2xl bg-[#25D366] hover:bg-[#20ba59] text-white font-extrabold text-sm flex items-center justify-center gap-2.5 transition-all shadow-xl shadow-green-950/40 cursor-pointer active:scale-95"
              >
                <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor">
                  <path d="M12.031 2C6.511 2 2.023 6.48 2.023 11.99c0 1.95.56 3.76 1.53 5.3L2 22l4.88-1.51a9.92 9.92 0 0 0 5.15 1.45c5.52 0 10.01-4.48 10.01-9.99 0-5.51-4.49-9.95-10.009-9.95zm0 18.25c-1.63 0-3.15-.46-4.45-1.25l-.32-.19-3.29 1.02 1.05-3.18-.21-.34a8.17 8.17 0 0 1-1.3-4.32c0-4.55 3.71-8.25 8.27-8.25 4.56 0 8.27 3.7 8.27 8.25 0 4.55-3.71 8.26-8.22 8.26zm4.53-6.19c-.25-.13-1.47-.72-1.7-.81-.23-.08-.39-.13-.56.13-.17.25-.64.81-.79.97-.14.17-.29.19-.54.06-.25-.13-1.06-.39-2.02-1.25-.75-.67-1.25-1.5-1.4-1.75-.15-.25-.02-.39.11-.51.11-.11.25-.29.37-.44.13-.15.17-.25.25-.42.08-.17.04-.32-.02-.44-.06-.13-.56-1.35-.77-1.85-.2-.48-.41-.42-.56-.43h-.48c-.17 0-.44.06-.67.31-.23.25-.88.86-.88 2.1 0 1.24.9 2.44 1.03 2.61.13.17 1.78 2.71 4.3 3.8.6.26 1.07.42 1.43.53.6.19 1.15.16 1.58.1.48-.07 1.47-.6 1.68-1.18.21-.58.21-1.07.15-1.18-.06-.11-.21-.18-.46-.31z" />
                </svg>
                <span>Send Enquiry on WhatsApp</span>
              </button>

              <div className="flex items-center gap-3">
                <a
                  href={`tel:${SALON_INFO.phoneClean}`}
                  className="flex-1 py-3 px-4 rounded-xl border border-zinc-700 hover:border-[#d4af37] text-zinc-200 text-xs font-semibold flex items-center justify-center gap-2 transition-colors"
                >
                  <Phone className="w-3.5 h-3.5 text-[#d4af37]" />
                  <span>Call Instead</span>
                </a>

                <button
                  onClick={onClose}
                  className="flex-1 py-3 px-4 rounded-xl bg-zinc-800 hover:bg-zinc-700 text-zinc-300 text-xs font-semibold transition-colors cursor-pointer"
                >
                  Done & Close
                </button>
              </div>
            </div>
          </div>
        ) : (
          /* ================= STEP-BY-STEP QUESTIONNAIRE ================= */
          <div className="p-6 sm:p-8 flex-1 flex flex-col justify-between space-y-6 overflow-y-auto">
            
            {/* Error banner */}
            {errorMsg && (
              <div className="p-3 rounded-xl bg-red-950/40 border border-red-800/60 text-red-300 text-xs">
                {errorMsg}
              </div>
            )}

            {/* STEP 1: GENDER SELECTION */}
            {step === 1 && (
              <div className="space-y-4 animate-fadeIn">
                <span className="text-[11px] font-semibold text-[#d4af37] uppercase tracking-wider block">
                  Question 1
                </span>
                <h3 className="font-serif text-2xl font-bold text-white">
                  Who is this appointment for?
                </h3>
                <p className="text-xs text-zinc-400">
                  Hedonic Unisex Salon provides dedicated zones and specialist staff for both men and women.
                </p>

                <div className="grid grid-cols-2 gap-4 pt-2">
                  <button
                    type="button"
                    onClick={() => {
                      setGender('female');
                      setErrorMsg('');
                    }}
                    className={`p-5 rounded-2xl border text-center transition-all cursor-pointer flex flex-col items-center justify-center gap-3 ${
                      gender === 'female'
                        ? 'border-rose-400 bg-rose-950/30 text-white shadow-lg shadow-rose-950/30'
                        : 'border-zinc-800 bg-[#161824] text-zinc-300 hover:border-zinc-600'
                    }`}
                  >
                    <div className="w-12 h-12 rounded-full bg-rose-500/20 text-rose-300 flex items-center justify-center">
                      <Heart className="w-6 h-6" />
                    </div>
                    <div>
                      <strong className="block text-sm font-bold">Ladies / Female</strong>
                      <span className="text-[11px] text-zinc-400">Bridal, Hair & Makeup</span>
                    </div>
                  </button>

                  <button
                    type="button"
                    onClick={() => {
                      setGender('male');
                      setErrorMsg('');
                    }}
                    className={`p-5 rounded-2xl border text-center transition-all cursor-pointer flex flex-col items-center justify-center gap-3 ${
                      gender === 'male'
                        ? 'border-amber-400 bg-amber-950/30 text-white shadow-lg shadow-amber-950/30'
                        : 'border-zinc-800 bg-[#161824] text-zinc-300 hover:border-zinc-600'
                    }`}
                  >
                    <div className="w-12 h-12 rounded-full bg-amber-500/20 text-amber-300 flex items-center justify-center">
                      <Scissors className="w-6 h-6" />
                    </div>
                    <div>
                      <strong className="block text-sm font-bold">Gents / Male</strong>
                      <span className="text-[11px] text-zinc-400">Hair, Beard & Grooming</span>
                    </div>
                  </button>
                </div>
              </div>
            )}

            {/* STEP 2: SERVICE SELECTION */}
            {step === 2 && (
              <div className="space-y-4 animate-fadeIn">
                <span className="text-[11px] font-semibold text-[#d4af37] uppercase tracking-wider block">
                  Question 2
                </span>
                <h3 className="font-serif text-2xl font-bold text-white">
                  Which service are you interested in?
                </h3>
                <p className="text-xs text-zinc-400">
                  Select your primary treatment (you can add multiple or request consultation at the salon).
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 max-h-[300px] overflow-y-auto pr-1">
                  {(gender === 'female' ? femaleServices : maleServices).map((svc) => (
                    <button
                      key={svc}
                      type="button"
                      onClick={() => {
                        setService(svc);
                        setErrorMsg('');
                      }}
                      className={`p-3 rounded-xl border text-left text-xs font-medium transition-all cursor-pointer flex items-center justify-between gap-2 ${
                        service === svc
                          ? 'border-[#d4af37] bg-[#d4af37]/15 text-white'
                          : 'border-zinc-800 bg-[#161824] text-zinc-300 hover:border-zinc-700'
                      }`}
                    >
                      <span>{svc}</span>
                      {service === svc && <Check className="w-4 h-4 text-[#d4af37] shrink-0" />}
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* STEP 3: DATE & TIME */}
            {step === 3 && (
              <div className="space-y-4 animate-fadeIn">
                <span className="text-[11px] font-semibold text-[#d4af37] uppercase tracking-wider block">
                  Question 3
                </span>
                <h3 className="font-serif text-2xl font-bold text-white">
                  When would you like to visit?
                </h3>
                <p className="text-xs text-zinc-400">
                  Salon is open 9:00 AM to 9:00 PM all 7 days of the week.
                </p>

                <div className="space-y-3">
                  <div>
                    <label className="block text-xs text-zinc-400 mb-1">Select Date</label>
                    <input
                      type="date"
                      min={new Date().toISOString().split('T')[0]}
                      value={date}
                      onChange={(e) => setDate(e.target.value)}
                      className="w-full bg-[#1b1e2c] border border-zinc-700 rounded-xl px-3.5 py-2.5 text-sm text-white focus:outline-none focus:border-[#d4af37]"
                    />
                  </div>

                  <div>
                    <label className="block text-xs text-zinc-400 mb-1">Select Preferred Slot</label>
                    <div className="grid grid-cols-3 sm:grid-cols-4 gap-2">
                      {timeSlots.map((t) => (
                        <button
                          key={t}
                          type="button"
                          onClick={() => setTime(t)}
                          className={`py-2 px-2 text-center rounded-lg text-xs font-medium transition-all cursor-pointer ${
                            time === t
                              ? 'bg-[#d4af37] text-black font-bold'
                              : 'bg-zinc-900 text-zinc-400 border border-zinc-800 hover:text-white'
                          }`}
                        >
                          {t}
                        </button>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* STEP 4: CONTACT INFO */}
            {step === 4 && (
              <div className="space-y-4 animate-fadeIn">
                <span className="text-[11px] font-semibold text-[#d4af37] uppercase tracking-wider block">
                  Question 4
                </span>
                <h3 className="font-serif text-2xl font-bold text-white">
                  What is your name and mobile number?
                </h3>
                <p className="text-xs text-zinc-400">
                  Required to send your WhatsApp booking confirmation slip.
                </p>

                <div className="space-y-3">
                  <div>
                    <label className="block text-xs text-zinc-400 mb-1">Your Full Name *</label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Anjali Sharma or Rahul Kumar"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      className="w-full bg-[#1b1e2c] border border-zinc-700 rounded-xl px-3.5 py-2.5 text-sm text-white focus:outline-none focus:border-[#d4af37]"
                    />
                  </div>

                  <div>
                    <label className="block text-xs text-zinc-400 mb-1">10-Digit Mobile Number *</label>
                    <div className="flex">
                      <span className="inline-flex items-center px-3 rounded-l-xl border border-r-0 border-zinc-700 bg-zinc-800 text-xs text-zinc-400">
                        +91
                      </span>
                      <input
                        type="tel"
                        maxLength={10}
                        placeholder="7043432122"
                        value={phone}
                        onChange={(e) => setPhone(e.target.value.replace(/\D/g, '').slice(0, 10))}
                        className="w-full bg-[#1b1e2c] border border-zinc-700 rounded-r-xl px-3.5 py-2.5 text-sm text-white focus:outline-none focus:border-[#d4af37]"
                      />
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* STEP 5: SPECIAL NOTES */}
            {step === 5 && (
              <div className="space-y-4 animate-fadeIn">
                <span className="text-[11px] font-semibold text-[#d4af37] uppercase tracking-wider block">
                  Question 5 (Final)
                </span>
                <h3 className="font-serif text-2xl font-bold text-white">
                  Any special requests or notes?
                </h3>
                <p className="text-xs text-zinc-400">
                  Optional: Mention bridal trial date, skin allergies, or specific stylist preference.
                </p>

                <div>
                  <textarea
                    rows={3}
                    placeholder="e.g. Booking for bridal package on coming Saturday, need senior artist consultation."
                    value={note}
                    onChange={(e) => setNote(e.target.value)}
                    className="w-full bg-[#1b1e2c] border border-zinc-700 rounded-xl p-3 text-sm text-white focus:outline-none focus:border-[#d4af37]"
                  />
                </div>

                <div className="p-3 rounded-xl bg-zinc-900/60 border border-zinc-800 text-[11px] text-zinc-400 flex items-center gap-2">
                  <Shield className="w-4 h-4 text-[#d4af37] shrink-0" />
                  <span>On clicking Next, you will get a summary to send directly on WhatsApp!</span>
                </div>
              </div>
            )}

            {/* Navigation buttons at bottom */}
            <div className="pt-4 border-t border-zinc-800 flex items-center justify-between gap-3">
              {step > 1 ? (
                <button
                  type="button"
                  onClick={() => {
                    setErrorMsg('');
                    setStep(step - 1);
                  }}
                  className="px-4 py-2.5 rounded-xl border border-zinc-700 text-zinc-300 text-xs font-semibold hover:border-zinc-500 flex items-center gap-1.5 cursor-pointer"
                >
                  <ArrowLeft className="w-3.5 h-3.5" />
                  <span>Back</span>
                </button>
              ) : (
                <div />
              )}

              <button
                type="button"
                onClick={handleNext}
                className="px-6 py-2.5 rounded-xl bg-gradient-to-r from-[#b78b1a] via-[#d4af37] to-[#e4c45a] text-black font-bold text-xs sm:text-sm flex items-center gap-2 hover:brightness-110 active:scale-95 transition-all cursor-pointer shadow-lg"
              >
                <span>{step === 5 ? 'Review & WhatsApp' : 'Next'}</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>

          </div>
        )}

      </div>
    </div>
  );
};
