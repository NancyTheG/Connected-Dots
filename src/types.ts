export interface Service {
  id: string;
  title: string;
  description: string;
  icon: string;
  benefits: string[];
  tools: string[];
  process: string[];
}

export interface PortfolioItem {
  id: string;
  title: string;
  category: 'Websites' | 'Branding' | 'Ads' | 'Apps';
  image: string;
}

export interface Testimonial {
  id: string;
  name: string;
  rating: number;
  image: string;
  text: string;
}

export interface PricingPlan {
  name: string;
  price: string;
  features: string[];
  isPopular?: boolean;
}

export interface ServicePricing {
  serviceName: string;
  plans: PricingPlan[];
}
