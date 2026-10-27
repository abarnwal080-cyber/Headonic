import { CategoryImageConfig, PRICING_IMAGES } from './pricingImages';

export interface ServiceItem {
  id: string;
  name: string;
  originalPrice?: number;
  offerPrice?: number;
  isNotAvailable?: boolean;
  notAvailableText?: string;
  inclusions?: string[];
  note?: string;
}

export interface PricingCategory {
  id: string;
  title: string;
  description: string;
  image: CategoryImageConfig;
  services: ServiceItem[];
}

export const FEMALE_PRICING: PricingCategory[] = [
  {
    id: 'f-packages',
    title: 'Complete Beauty Packages',
    description: 'Curated head-to-toe beauty packages combining essential skin, hair, and grooming treatments for maximum value.',
    image: PRICING_IMAGES.female.packages,
    services: [
      {
        id: 'f-pkg-1',
        name: 'Regular Beauty Package',
        originalPrice: 1999,
        offerPrice: 1499,
        inclusions: [
          'O3+ Clean-Up or Herbal Facial',
          'Full Arms Waxing + Underarms Waxing',
          'Half Legs Waxing',
          'Eyebrow & Upper Lip Threading',
          'Basic Blowdry & Hair Wash'
        ]
      },
      {
        id: 'f-pkg-2',
        name: 'Premium Glow Package',
        originalPrice: 3499,
        offerPrice: 2799,
        inclusions: [
          'De-Tan Facial & Skin Brightening Spa',
          'Full Arms & Full Legs Rica Waxing',
          'Deep Conditioning Hair Spa',
          'Classic Pedicure & Manicure',
          'Eyebrows, Upper Lip & Forehead Threading'
        ]
      },
      {
        id: 'f-pkg-3',
        name: 'Luxury Pamper Package',
        originalPrice: 5999,
        offerPrice: 4999,
        inclusions: [
          'O3+ Bridal Glow Facial Treatment',
          'Full Body Rica Flavoured Waxing',
          'L\'Oréal Professional Hair Spa with Ampoule',
          'Spa Pedicure & Spa Manicure',
          'Thread & Face Polish'
        ]
      },
      {
        id: 'f-pkg-4',
        name: 'Royal Bridal Pre-Wedding Package',
        originalPrice: 14999,
        offerPrice: 11999,
        inclusions: [
          'Full Body Polish & De-Tan Spa Treatment',
          '2 Sessions of Advanced O3+ Radiance Facials',
          'Full Body Rica Peel-Off Waxing',
          'Keratin Hair Spa Treatment',
          'Luxury Crystal Spa Manicure & Pedicure',
          'Bridal Trial Makeup & Hair Consultation'
        ]
      }
    ]
  },
  {
    id: 'f-waxing',
    title: 'Threading & Waxing Services',
    description: 'Precision eyebrow shaping, gentle full-body waxing, and sensitive skin hair removal.',
    image: PRICING_IMAGES.female.waxing,
    services: [
      { id: 'f-wax-1', name: 'Eyebrows Shaping Threading', originalPrice: 50, offerPrice: 40 },
      { id: 'f-wax-2', name: 'Upper Lip Threading', originalPrice: 30, offerPrice: 20 },
      { id: 'f-wax-3', name: 'Full Face Threading', originalPrice: 150, offerPrice: 120 },
      { id: 'f-wax-4', name: 'Full Arms Honey Waxing', originalPrice: 350, offerPrice: 299 },
      { id: 'f-wax-5', name: 'Full Legs Honey Waxing', originalPrice: 550, offerPrice: 449 },
      { id: 'f-wax-6', name: 'Rica Italian Peel Waxing (Full Arms & Legs)', originalPrice: 1200, offerPrice: 999 }
    ]
  },
  {
    id: 'f-bridal',
    title: 'Makeup Artist Services (Bridal & Occasion)',
    description: 'Flawless camera-ready makeup customized for brides, engagements, and special occasion celebrations.',
    image: PRICING_IMAGES.female.bridal,
    services: [
      {
        id: 'f-mk-1',
        name: 'Royal HD Bridal Makeup',
        originalPrice: 9999,
        offerPrice: 7999,
        inclusions: ['HD Base Makeup', 'Lash Extensions', 'Hairstyling', 'Draping', 'Jewelry Setting']
      },
      {
        id: 'f-mk-2',
        name: 'HD Engagement & Roka Makeup',
        originalPrice: 5999,
        offerPrice: 4599,
        inclusions: ['HD Foundation Base', 'Eyelash Application', 'Designer Hairdo', 'Saree/Lehenga Draping']
      },
      {
        id: 'f-mk-3',
        name: 'Party Glam Makeup',
        originalPrice: 2999,
        offerPrice: 2199,
        inclusions: ['Soft Glam Makeup', 'Hair Styling (Curls or Straightening)', 'Basic Draping']
      },
      {
        id: 'f-mk-4',
        name: 'Airbrush Luxury Bridal Makeover',
        originalPrice: 11999,
        offerPrice: 9499,
        inclusions: ['Silky Smooth Airbrush Finish', 'Premium Lashes', 'Custom Bridal Updo', 'Dupatta & Jewelry Pinning']
      }
    ]
  },
  {
    id: 'f-mac',
    title: 'MAC Makeup Services',
    description: 'High-definition long-lasting cosmetics using 100% original M.A.C Professional products.',
    image: PRICING_IMAGES.female.macMakeup,
    services: [
      {
        id: 'f-mac-1',
        name: 'Signature M.A.C Bridal Makeover',
        originalPrice: 12999,
        offerPrice: 9999,
        inclusions: ['100% Authentic M.A.C Products', 'Waterproof & Sweatproof Finish', '3D Eyelashes', 'Couture Hairstyling']
      },
      {
        id: 'f-mac-2',
        name: 'M.A.C Party Makeup',
        originalPrice: 3999,
        offerPrice: 2999,
        inclusions: ['M.A.C Foundation & Concealer', 'Eye Makeup', 'Styling Blowdry or Curls']
      },
      {
        id: 'f-mac-3',
        name: 'M.A.C HD Reception & Sangeet Makeup',
        originalPrice: 7499,
        offerPrice: 5999,
        inclusions: ['M.A.C HD Contour & Highlight', 'Premium Mink Lashes', 'Sophisticated Updo']
      }
    ]
  },
  {
    id: 'f-haircare',
    title: 'Hair Care & Hair Spa Services',
    description: 'Nourishing wash, custom haircuts, and intensive hair spa treatments using L\'Oréal & Matrix.',
    image: PRICING_IMAGES.female.hairCare,
    services: [
      { id: 'f-hc-1', name: 'Layer / Step / Feather Haircut & Blowdry', originalPrice: 499, offerPrice: 399 },
      { id: 'f-hc-2', name: 'L\'Oréal Deep Nourishing Hair Spa', originalPrice: 999, offerPrice: 799 },
      { id: 'f-hc-3', name: 'Anti-Dandruff & Scalp Detox Therapy Spa', originalPrice: 1499, offerPrice: 1199 }
    ]
  },
  {
    id: 'f-hairtreatments',
    title: 'Hair Treatment Services',
    description: 'Transformative straightening, keratin smoothing, and Botox hair rejuvenation treatments.',
    image: PRICING_IMAGES.female.hairTreatment,
    services: [
      { id: 'f-ht-1', name: 'Keratin Protein Smoothing Treatment', originalPrice: 4999, offerPrice: 3999 },
      { id: 'f-ht-2', name: 'Botoplex Hair Botox Treatment', originalPrice: 5999, offerPrice: 4499 },
      { id: 'f-ht-3', name: 'Permanent Hair Rebonding (Full Length)', originalPrice: 6999, offerPrice: 5499 }
    ]
  },
  {
    id: 'f-haircolour',
    title: 'Hair Colouring Services',
    description: 'Vibrant global shades, highlights, ombre balayage, and root touch-ups by certified colorists.',
    image: PRICING_IMAGES.female.hairColouring,
    services: [
      { id: 'f-hcol-1', name: 'Global Hair Colour (Ammonia Free)', originalPrice: 2999, offerPrice: 2299 },
      { id: 'f-hcol-2', name: 'Balayage / Ombre Designer Highlights', originalPrice: 4499, offerPrice: 3499 },
      { id: 'f-hcol-3', name: 'L\'Oréal Root Touch-Up', originalPrice: 1199, offerPrice: 899 }
    ]
  }
];

export const MALE_PRICING: PricingCategory[] = [
  {
    id: 'm-packages',
    title: 'Complete Groom Packages',
    description: 'Customized packages for grooms and gentlemen looking for flawless styling and relaxation.',
    image: PRICING_IMAGES.male.packages,
    services: [
      {
        id: 'm-pkg-1',
        name: 'Groom Special Makeover Package',
        originalPrice: 4999,
        offerPrice: 3999,
        inclusions: [
          'Royal Haircut & Beard Lineup',
          'O3+ De-Tan Brightening Facial',
          'Deep Charcoal Scalp Detox Spa',
          'HD Touch-Up Makeup & Hair Setting',
          'Hot Towel Beard Spa & Massage'
        ]
      },
      {
        id: 'm-pkg-2',
        name: 'Executive Gentleman Grooming',
        originalPrice: 1999,
        offerPrice: 1499,
        inclusions: [
          'Style Haircut & Beard Styling',
          'Charcoal Skin Clean-Up',
          'Head, Neck & Shoulder Massage',
          'Hair Wash & Blowdry Setting'
        ]
      },
      {
        id: 'm-pkg-3',
        name: 'Royal Groom VIP Package',
        originalPrice: 7999,
        offerPrice: 5999,
        inclusions: [
          'Full Hair & Beard Transformation',
          'Luxury O3+ Bridal Groom Facial',
          'L\'Oréal Hair Spa Treatment',
          'HD Camera-Ready Makeup Base',
          'Hand & Foot Refreshing Groom Spa'
        ]
      }
    ]
  },
  {
    id: 'm-bodycare',
    title: 'Body Care & Hygiene',
    description: 'Relaxing facial spas, hot towel beard treatments, and refreshing hand and foot care for men.',
    image: PRICING_IMAGES.male.waxing,
    services: [
      { id: 'm-bc-1', name: 'Hot Towel Beard Spa & Essential Oil Massage', originalPrice: 499, offerPrice: 399 },
      { id: 'm-bc-2', name: 'De-Tan Facial Spa & Skin Brightening', originalPrice: 1299, offerPrice: 999 },
      { id: 'm-bc-3', name: 'Gentlemen Spa Pedicure & Manicure', originalPrice: 899, offerPrice: 699 }
    ]
  },
  {
    id: 'm-makeup',
    title: 'Makeup & Hair Styling',
    description: 'Natural HD touch-ups for events, photoshoot grooming, and wedding day styling.',
    image: PRICING_IMAGES.male.bridal,
    services: [
      { id: 'm-mk-1', name: 'Groom HD Touchup & Skin Evener Makeup', originalPrice: 2499, offerPrice: 1899 },
      { id: 'm-mk-2', name: 'Event Hair Styling, Spray & Wax Setting', originalPrice: 299, offerPrice: 199 },
      {
        id: 'm-mk-3',
        name: 'Traditional Bridal Package',
        isNotAvailable: true,
        notAvailableText: 'Not Available for Male Services'
      }
    ]
  },
  {
    id: 'm-mac',
    title: 'M.A.C Groom Makeup Services',
    description: 'Discreet, matte, sweatproof M.A.C cosmetics for grooms and stage performers.',
    image: PRICING_IMAGES.male.macMakeup,
    services: [
      { id: 'm-mac-1', name: 'Groom M.A.C High-Definition Touchup Makeup', originalPrice: 3499, offerPrice: 2699 },
      { id: 'm-mac-2', name: 'M.A.C Party Grooming & Concealment', originalPrice: 2499, offerPrice: 1899 },
      {
        id: 'm-mac-3',
        name: 'Female M.A.C Bridal Makeup',
        isNotAvailable: true,
        notAvailableText: 'Not Available for Male Services'
      }
    ]
  },
  {
    id: 'm-haircare',
    title: 'Hair Care & Styling Services',
    description: 'Precision scissor cuts, beard sculpting, scalp massage, and nourishing hair wash.',
    image: PRICING_IMAGES.male.hairCare,
    services: [
      { id: 'm-hc-1', name: 'Men\'s Royal Precision Haircut & Wash', originalPrice: 250, offerPrice: 199 },
      { id: 'm-hc-2', name: 'Beard Trim, Razor Lineup & Aftershave Balm', originalPrice: 150, offerPrice: 99 },
      { id: 'm-hc-3', name: 'Nourishing Hair Spa & Head Massage', originalPrice: 699, offerPrice: 499 }
    ]
  },
  {
    id: 'm-hairtreatments',
    title: 'Hair & Scalp Treatment Services',
    description: 'Smoothing, anti-frizz, anti-dandruff, and hair strengthening treatments.',
    image: PRICING_IMAGES.male.hairTreatment,
    services: [
      { id: 'm-ht-1', name: 'Hair Smoothening / Straightening (Men)', originalPrice: 2499, offerPrice: 1899 },
      { id: 'm-ht-2', name: 'Dandruff Scalp Detox & Follicle Therapy', originalPrice: 999, offerPrice: 749 }
    ]
  },
  {
    id: 'm-haircolour',
    title: 'Hair Colouring & Beard Tinting',
    description: 'Natural grey coverage, vibrant highlights, and beard blackening treatments.',
    image: PRICING_IMAGES.male.hairColouring,
    services: [
      { id: 'm-hcol-1', name: 'Global Hair Colour (Men)', originalPrice: 1199, offerPrice: 899 },
      { id: 'm-hcol-2', name: 'Beard Blackening & Natural Tinting', originalPrice: 399, offerPrice: 299 },
      { id: 'm-hcol-3', name: 'Designer Hair Highlights Streak', originalPrice: 599, offerPrice: 449 }
    ]
  }
];
