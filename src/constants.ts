import { Service, PortfolioItem, Testimonial, ServicePricing } from './types';

export const SERVICES: Service[] = [
  {
    id: 'web-dev',
    title: 'Web Development',
    description: 'We build high-performance, responsive websites using the latest technologies like React, Next.js, and Node.js.',
    icon: 'Layout',
    benefits: ['Scalable Architecture', 'SEO Optimized', 'Fast Load Times', 'Modern UI/UX'],
    tools: ['React', 'Next.js', 'Tailwind CSS', 'Vercel', 'Node.js'],
    process: ['Requirement Analysis', 'Wireframing', 'UI Design', 'Development', 'Testing', 'Deployment']
  },
  {
    id: 'graphic-design',
    title: 'Graphic Design',
    description: 'Creative visual communication that tells your brand story and captures your audience\'s attention.',
    icon: 'Palette',
    benefits: ['Unique Visual Identity', 'High Resolution', 'Print & Digital Ready', 'Brand Consistency'],
    tools: ['Adobe Photoshop', 'Illustrator', 'Figma', 'Indesign'],
    process: ['Creative Brief', 'Moodboarding', 'Drafting', 'Refinement', 'Final Delivery']
  },
  {
    id: 'branding',
    title: 'Branding',
    description: 'Complete brand strategy and visual identity design that establishes your market presence.',
    icon: 'Zap',
    benefits: ['Strong Market Position', 'Emotional Connection', 'Clear Message', 'Brand Loyalty'],
    tools: ['Brand Guidelines', 'Logo Systems', 'Typography', 'Iconography'],
    process: ['Discovery', 'Strategy', 'Design', 'Touchpoints', 'Launch']
  },
  {
    id: 'digital-marketing',
    title: 'Digital Marketing',
    description: 'Grow your online presence with data-driven social media and content marketing strategies.',
    icon: 'Megaphone',
    benefits: ['Targeted Reach', 'High Engagement', 'Measurable ROI', 'Brand Awareness'],
    tools: ['Meta Business Suite', 'LinkedIn Ads', 'Mailchimp', 'Buffer'],
    process: ['Audit', 'Strategy', 'Execution', 'Optimization', 'Reporting']
  },
  {
    id: 'google-ads',
    title: 'Google Ads / PPC',
    description: 'Highly targeted paid search campaigns that drive instant traffic and conversions.',
    icon: 'TrendingUp',
    benefits: ['Immediate Traffic', 'Lead Generation', 'Budget Control', 'Geo-Targeting'],
    tools: ['Google Ads', 'Google Analytics', 'Search Console', 'Tag Manager'],
    process: ['Keyword Research', 'Campaign Setup', 'Ad Copywriting', 'Monitoring', 'Optimization']
  },
  {
    id: 'app-dev',
    title: 'Mobile App Development',
    description: 'Cross-platform mobile applications that provide seamless experiences across iOS and Android.',
    icon: 'Smartphone',
    benefits: ['Native performance', 'Offline Capabilities', 'Push Notifications', 'App Store Ready'],
    tools: ['React Native', 'Flutter', 'Firebase', 'AppStore/PlayStore'],
    process: ['Prototyping', 'UX Research', 'Development', 'Integration', 'Beta Testing', 'Launch']
  }
];

export const PORTFOLIO_ITEMS: PortfolioItem[] = [
  // Websites
  { id: 'web-1', title: 'Global E-commerce Hub', category: 'Websites', image: 'https://picsum.photos/seed/ecommerce-interface/800/600' },
  { id: 'web-2', title: 'Modern SaaS Dashboard', category: 'Websites', image: 'https://picsum.photos/seed/dashboard-ui/800/600' },
  { id: 'web-3', title: 'Luxury Real Estate', category: 'Websites', image: 'https://picsum.photos/seed/realestate-web/800/600' },
  { id: 'web-4', title: 'Creative Portfolio Site', category: 'Websites', image: 'https://picsum.photos/seed/creative-folio/800/600' },
  { id: 'web-5', title: 'Tech News Portal', category: 'Websites', image: 'https://picsum.photos/seed/tech-magazine/800/600' },
  { id: 'web-6', title: 'Restaurant Booking App', category: 'Websites', image: 'https://picsum.photos/seed/food-website/800/600' },
  { id: 'web-7', title: 'Educational Platform', category: 'Websites', image: 'https://picsum.photos/seed/learning-ui/800/600' },
  { id: 'web-8', title: 'Fintech Landing Page', category: 'Websites', image: 'https://picsum.photos/seed/fintech-web/800/600' },

  // Branding
  { id: 'branding-1', title: 'Zenith Tech Identity', category: 'Branding', image: 'https://picsum.photos/seed/tech-logo/800/600' },
  { id: 'branding-2', title: 'Lumina Skincare', category: 'Branding', image: 'https://picsum.photos/seed/beauty-brand/800/600' },
  { id: 'branding-3', title: 'Apex Logistics Branding', category: 'Branding', image: 'https://picsum.photos/seed/logistics-identity/800/600' },
  { id: 'branding-4', title: 'Organic Bites Logo', category: 'Branding', image: 'https://picsum.photos/seed/organic-food-brand/800/600' },
  { id: 'branding-5', title: 'Urban Wear Typography', category: 'Branding', image: 'https://picsum.photos/seed/fashion-brand/800/600' },
  { id: 'branding-6', title: 'Co-work Space Identity', category: 'Branding', image: 'https://picsum.photos/seed/workspace-branding/800/600' },

  // Ads
  { id: 'ads-1', title: 'Summer Sale Billboard', category: 'Ads', image: 'https://picsum.photos/seed/billboard-ad/800/600' },
  { id: 'ads-2', title: 'Social Impact Campaign', category: 'Ads', image: 'https://picsum.photos/seed/social-marketing/800/600' },
  { id: 'ads-3', title: 'Tech Launch Posters', category: 'Ads', image: 'https://picsum.photos/seed/marketing-creative/800/600' },
  { id: 'ads-4', title: 'Luxury Watch Ads', category: 'Ads', image: 'https://picsum.photos/seed/product-ads/800/600' },
  { id: 'ads-5', title: 'Food Delivery Promotion', category: 'Ads', image: 'https://picsum.photos/seed/delivery-ads/800/600' },

  // Apps
  { id: 'apps-1', title: 'Fitness Tracker App', category: 'Apps', image: 'https://picsum.photos/seed/mobile-fitness/800/600' },
  { id: 'apps-2', title: 'Crypto Wallet UI', category: 'Apps', image: 'https://picsum.photos/seed/crypto-mobile/800/600' },
  { id: 'apps-3', title: 'Travel Guide Application', category: 'Apps', image: 'https://picsum.photos/seed/travel-app/800/600' },
  { id: 'apps-4', title: 'Smart Home Controller', category: 'Apps', image: 'https://picsum.photos/seed/iot-app-ui/800/600' },
  { id: 'apps-5', title: 'Event Planner App', category: 'Apps', image: 'https://picsum.photos/seed/social-event-app/800/600' },
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: '1',
    name: 'Sarah Ahmed',
    rating: 5,
    image: 'https://i.pravatar.cc/150?u=sarah',
    text: 'Connected Dots transformed our online presence. Their attention to detail in web development is unmatched.'
  },
  {
    id: '2',
    name: 'Junaid Khan',
    rating: 5,
    image: 'https://i.pravatar.cc/150?u=junaid',
    text: 'The best digital agency in Karachi. Their Google Ads strategy doubled our leads within months.'
  },
  {
    id: '3',
    name: 'Ayesha Malik',
    rating: 5,
    image: 'https://i.pravatar.cc/150?u=ayesha',
    text: 'Highly professional team. Their branding process helped us find our true identity in a crowded market.'
  },
  {
    id: '4',
    name: 'Omar Farooq',
    rating: 5,
    image: 'https://i.pravatar.cc/150?u=omar',
    text: 'Connected Dots delivered a mobile app that our users love. Seamless process from start to finish.'
  },
  {
    id: '5',
    name: 'Marium Batool',
    rating: 5,
    image: 'https://i.pravatar.cc/150?u=marium',
    text: 'Innovative designs and great marketing sense. They really "connect the dots" between ideas and reality.'
  },
  {
    id: '6',
    name: 'Bilal Siddiqui',
    rating: 5,
    image: 'https://i.pravatar.cc/150?u=bilal',
    text: 'Very satisfied with their SEO and content strategy. Our organic traffic has grown by 300%.'
  }
];

export const PRICING: ServicePricing[] = [
  {
    serviceName: 'Web Development',
    plans: [
      { name: 'Starter', price: '$999', features: ['5 Pages', 'Responsive Design', 'Basic SEO', '1 Month Support'] },
      { name: 'Business', price: '$2499', features: ['15 Pages', 'E-commerce Ready', 'Advanced SEO', '3 Months Support'], isPopular: true },
      { name: 'Enterprise', price: 'Custom', features: ['Unlimited Pages', 'Custom Functionality', 'Dedicated Manager', 'Priority Support'] }
    ]
  },
  {
    serviceName: 'Graphic Design',
    plans: [
      { name: 'Basic', price: '$299', features: ['3 Social Posts', '1 Flyer Design', 'Source Files', '2 Revisions'] },
      { name: 'Standard', price: '$799', features: ['10 Social Posts', 'Logo Concept', 'Brand Identity', 'Unlimited Revisions'], isPopular: true },
      { name: 'Premium', price: '$1499', features: ['Full Brand Package', 'Marketing Assets', 'Style Guide', 'Priority Delivery'] }
    ]
  },
  {
    serviceName: 'Mobile App',
    plans: [
      { name: 'MVP', price: '$4999', features: ['React Native App', 'Standard UI', 'Basic Backend', 'Stores Submission'] },
      { name: 'Premium', price: '$9999', features: ['Custom Features', 'UX Research', 'Advanced Backend', '6 Months Support'], isPopular: true },
      { name: 'Enterprise', price: 'Custom', features: ['Cloud Setup', 'Analytics Sync', 'Scalable Cluster', '24/7 Monitoring'] }
    ]
  }
];
