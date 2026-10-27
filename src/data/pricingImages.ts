export interface CategoryImageConfig {
  url: string;
  sourceUrl: string;
  fallbackUrl: string;
  alt: string;
}

export interface GenderImageMap {
  packages: CategoryImageConfig;
  waxing: CategoryImageConfig;
  bridal: CategoryImageConfig;
  macMakeup: CategoryImageConfig;
  hairCare: CategoryImageConfig;
  hairTreatment: CategoryImageConfig;
  hairColouring: CategoryImageConfig;
}

export interface PricingImagesConfig {
  female: GenderImageMap;
  male: GenderImageMap;
}

export const PRICING_IMAGES: PricingImagesConfig = {
  female: {
    packages: {
      url: "https://images.pexels.com/photos/10954271/pexels-photo-10954271.jpeg?auto=compress&cs=tinysrgb&w=400",
      sourceUrl: "https://www.pexels.com/photo/10954271/",
      fallbackUrl: "https://images.unsplash.com/photo-1560066984-138dadb4c035?auto=format&fit=crop&w=400&q=80",
      alt: "Female Beauty Packages"
    },
    waxing: {
      url: "https://images.pexels.com/photos/35103884/pexels-photo-35103884.jpeg?auto=compress&cs=tinysrgb&w=400",
      sourceUrl: "https://www.pexels.com/photo/35103884/",
      fallbackUrl: "https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?auto=format&fit=crop&w=400&q=80",
      alt: "Female Waxing & Threading"
    },
    bridal: {
      url: "https://images.pexels.com/photos/12346564/pexels-photo-12346564.jpeg?auto=compress&cs=tinysrgb&w=400",
      sourceUrl: "https://www.pexels.com/photo/12346564/",
      fallbackUrl: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?auto=format&fit=crop&w=400&q=80",
      alt: "Female Bridal Makeup"
    },
    macMakeup: {
      url: "https://images.pexels.com/photos/8031804/pexels-photo-8031804.jpeg?auto=compress&cs=tinysrgb&w=400",
      sourceUrl: "https://www.pexels.com/photo/8031804/",
      fallbackUrl: "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?auto=format&fit=crop&w=400&q=80",
      alt: "Female MAC & HD Makeup"
    },
    hairCare: {
      url: "https://images.pexels.com/photos/18367694/pexels-photo-18367694.jpeg?auto=compress&cs=tinysrgb&w=400",
      sourceUrl: "https://www.pexels.com/photo/18367694/",
      fallbackUrl: "https://images.unsplash.com/photo-1562322140-8baeececf3df?auto=format&fit=crop&w=400&q=80",
      alt: "Female Hair Care"
    },
    hairTreatment: {
      url: "https://images.pexels.com/photos/3993330/pexels-photo-3993330.jpeg?auto=compress&cs=tinysrgb&w=400",
      sourceUrl: "https://www.pexels.com/photo/3993330/",
      fallbackUrl: "https://images.unsplash.com/photo-1527799820374-dcf8d9d4a388?auto=format&fit=crop&w=400&q=80",
      alt: "Female Hair Treatment"
    },
    hairColouring: {
      url: "https://images.pexels.com/photos/3993312/pexels-photo-3993312.jpeg?auto=compress&cs=tinysrgb&w=400",
      sourceUrl: "https://www.pexels.com/photo/3993312/",
      fallbackUrl: "https://images.unsplash.com/photo-1595476108010-b4d1f102b1b1?auto=format&fit=crop&w=400&q=80",
      alt: "Female Hair Colouring"
    }
  },
  male: {
    packages: {
      url: "https://images.pexels.com/photos/32152727/pexels-photo-32152727.jpeg?auto=compress&cs=tinysrgb&w=400",
      sourceUrl: "https://www.pexels.com/photo/32152727/",
      fallbackUrl: "https://images.unsplash.com/photo-1503951914875-452162b0f3f1?auto=format&fit=crop&w=400&q=80",
      alt: "Groom & Male Packages"
    },
    waxing: {
      url: "https://images.pexels.com/photos/35103884/pexels-photo-35103884.jpeg?auto=compress&cs=tinysrgb&w=400",
      sourceUrl: "https://www.pexels.com/photo/35103884/",
      fallbackUrl: "https://images.unsplash.com/photo-1517832606299-7ae9b720a186?auto=format&fit=crop&w=400&q=80",
      alt: "Male Body Care & Hygiene"
    },
    bridal: {
      url: "https://images.pexels.com/photos/15232747/pexels-photo-15232747.jpeg?auto=compress&cs=tinysrgb&w=400",
      sourceUrl: "https://www.pexels.com/photo/15232747/",
      fallbackUrl: "https://images.unsplash.com/photo-1621605815971-fbc98d665033?auto=format&fit=crop&w=400&q=80",
      alt: "Groom Grooming & Hair Styling"
    },
    macMakeup: {
      url: "https://images.pexels.com/photos/36249000/pexels-photo-36249000.jpeg?auto=compress&cs=tinysrgb&w=400",
      sourceUrl: "https://www.pexels.com/photo/36249000/",
      fallbackUrl: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=400&q=80",
      alt: "Male HD & Touchup Makeup"
    },
    hairCare: {
      url: "https://images.pexels.com/photos/9992818/pexels-photo-9992818.jpeg?auto=compress&cs=tinysrgb&w=400",
      sourceUrl: "https://www.pexels.com/photo/9992818/",
      fallbackUrl: "https://images.unsplash.com/photo-1622286342621-4bd786c2447c?auto=format&fit=crop&w=400&q=80",
      alt: "Male Hair Care & Styling"
    },
    hairTreatment: {
      url: "https://images.pexels.com/photos/33448214/pexels-photo-33448214.jpeg?auto=compress&cs=tinysrgb&w=400",
      sourceUrl: "https://www.pexels.com/photo/33448214/",
      fallbackUrl: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=400&q=80",
      alt: "Male Hair & Scalp Treatment"
    },
    hairColouring: {
      url: "https://images.pexels.com/photos/7388941/pexels-photo-7388941.jpeg?auto=compress&cs=tinysrgb&w=400",
      sourceUrl: "https://www.pexels.com/photo/7388941/",
      fallbackUrl: "https://images.unsplash.com/photo-1605497788044-5a32c7078486?auto=format&fit=crop&w=400&q=80",
      alt: "Male Hair Colouring & Beard Tint"
    }
  }
};
