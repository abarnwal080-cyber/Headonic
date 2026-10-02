export type ServiceCategory = 'female' | 'male';

export interface ServiceItem {
  id: string;
  name: string;
  hinglishDesc?: string;
  englishDesc: string;
  category: ServiceCategory;
  subCategory: string; // e.g., 'Bridal Makeup', 'Beard & Mustache Grooming', etc.
  duration?: string;
  startingPrice?: string;
  popular?: boolean;
  features?: string[];
}

export interface ServiceSubpage {
  id: string;
  title: string;
  category: ServiceCategory;
  headline: string;
  description: string;
  images: string[];
  items: ServiceItem[];
  highlights: string[];
  bannerImage: string;
}

export interface GalleryImage {
  id: string;
  url: string;
  title: string;
  category: 'bridal' | 'party' | 'female-hair' | 'male-hair' | 'beard' | 'skincare' | 'ambiance';
  alt: string;
}

export interface SalonVideo {
  id: string;
  url: string;
  title: string;
  caption: string;
  tag: string;
  duration?: string;
}

export interface Review {
  id: string;
  author: string;
  rating: number;
  date: string;
  service: string;
  comment: string;
  avatarBg: string;
  verified: boolean;
}

export interface BookingData {
  name: string;
  phone: string;
  service: string;
  gender: 'female' | 'male' | 'any';
  date: string;
  time: string;
  message: string;
}
