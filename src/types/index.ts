export interface User {
  _id: string;
  email: string;
  name: string;
  role: 'admin' | 'editor' | 'viewer';
  createdAt: Date;
  updatedAt: Date;
}

export interface Article {
  _id: string;
  title: string;
  slug: string;
  excerpt: string;
  content: string;
  featuredImage?: string;
  category: 'inspired-living' | 'entertainment' | 'travel' | 'gift-guides';
  subcategory?: string;
  tags: string[];
  author: string;
  publishedAt: Date;
  status: 'draft' | 'published' | 'archived';
  seoTitle?: string;
  seoDescription?: string;
  featured: boolean;
  readTime: number; // in minutes
  createdAt: Date;
  updatedAt: Date;
}

export interface Event {
  _id: string;
  title: string;
  description: string;
  startDate: Date;
  endDate: Date;
  location: {
    name: string;
    address: string;
    city: string;
    state: string;
    zipCode: string;
    coordinates?: {
      lat: number;
      lng: number;
    };
  };
  category: 'entertainment' | 'travel' | 'community' | 'education' | 'health';
  subcategory?: string;
  tags: string[];
  featuredImage?: string;
  ticketUrl?: string;
  price?: {
    min: number;
    max: number;
    currency: string;
  };
  ageRestriction?: string;
  accessibility?: {
    wheelchairAccessible: boolean;
    hearingAssistance: boolean;
    visualAssistance: boolean;
    other?: string[];
  };
  source: 'manual' | 'scraped' | 'api';
  sourceUrl?: string;
  featured: boolean;
  createdAt: Date;
  updatedAt: Date;
}

export interface GiftGuide {
  _id: string;
  title: string;
  description: string;
  category: 'holidays' | 'birthdays' | 'anniversaries' | 'general';
  targetAudience: 'men' | 'women' | 'couples' | 'grandparents' | 'general';
  priceRange: 'budget' | 'moderate' | 'luxury';
  items: GiftItem[];
  featuredImage?: string;
  publishedAt: Date;
  status: 'draft' | 'published' | 'archived';
  createdAt: Date;
  updatedAt: Date;
}

export interface GiftItem {
  name: string;
  description: string;
  price: number;
  currency: string;
  affiliateUrl?: string;
  image?: string;
  tags: string[];
}

export interface NewsletterSubscription {
  _id: string;
  email: string;
  firstName?: string;
  lastName?: string;
  preferences: {
    inspiredLiving: boolean;
    entertainment: boolean;
    travel: boolean;
    giftGuides: boolean;
    weekly: boolean;
    monthly: boolean;
  };
  status: 'active' | 'unsubscribed' | 'pending';
  subscribedAt: Date;
  updatedAt: Date;
}

export interface CommunityAdvocate {
  _id: string;
  name: string;
  title: string;
  bio: string;
  image?: string;
  expertise: string[];
  contactInfo?: {
    email?: string;
    phone?: string;
    website?: string;
  };
  featured: boolean;
  createdAt: Date;
  updatedAt: Date;
}

export interface AffiliateProgram {
  _id: string;
  name: string;
  description: string;
  logo?: string;
  website: string;
  commission: number;
  status: 'active' | 'inactive';
  categories: string[];
  createdAt: Date;
  updatedAt: Date;
}

export interface SponsoredContent {
  _id: string;
  title: string;
  content: string;
  sponsor: string;
  sponsorLogo?: string;
  sponsorWebsite?: string;
  type: 'article' | 'downloadable' | 'video';
  downloadUrl?: string;
  featuredImage?: string;
  publishedAt: Date;
  expiresAt?: Date;
  status: 'active' | 'expired' | 'draft';
  createdAt: Date;
  updatedAt: Date;
}

export interface EventSource {
  _id: string;
  name: string;
  type: 'venue' | 'ticketing' | 'cvb' | 'api';
  url: string;
  apiKey?: string;
  lastScraped?: Date;
  status: 'active' | 'inactive' | 'error';
  settings: {
    scrapeInterval: number; // in hours
    categories: string[];
    location?: {
      city: string;
      state: string;
      radius: number; // in miles
    };
  };
  createdAt: Date;
  updatedAt: Date;
}

export interface SearchFilters {
  category?: string;
  subcategory?: string;
  tags?: string[];
  dateRange?: {
    start: Date;
    end: Date;
  };
  location?: {
    city: string;
    state: string;
    radius: number;
  };
  priceRange?: {
    min: number;
    max: number;
  };
  accessibility?: string[];
}

export interface PaginationParams {
  page: number;
  limit: number;
  sortBy?: string;
  sortOrder?: 'asc' | 'desc';
}

export interface ApiResponse<T> {
  success: boolean;
  data?: T;
  message?: string;
  error?: string;
  pagination?: {
    page: number;
    limit: number;
    total: number;
    totalPages: number;
  };
}
