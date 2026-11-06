export interface ServiceItem {
  id: string;
  slug: string;
  title: string;
  shortDesc: string;
  fullDesc: string;
  image: string;
  iconName: 'Plane' | 'CarFront' | 'CalendarDays' | 'Mountain' | 'Users' | 'Briefcase';
  bookUrl: string;
  learnMoreUrl: string;
  highlights: string[];
  startingPrice: string;
}

export interface BenefitItem {
  id: string;
  title: string;
  description: string;
  iconName: 'ShieldCheck' | 'Armchair' | 'Tag' | 'Headphones';
}

export const SERVICES_DATA: ServiceItem[] = [
  {
    id: 'service-1',
    slug: 'airport-transfers',
    title: 'Airport Transfers',
    shortDesc: 'Hassle-free airport pickups and drop-offs to any destination in Sri Lanka.',
    fullDesc: 'Seamless private transfers between Bandaranaike International Airport (CMB / BIA) and any hotel, villa, or residence in Sri Lanka with paging name-board service.',
    image: '/assets/services/service-airport-transfers.jpg',
    iconName: 'Plane',
    bookUrl: '/book?service=airport-transfers',
    learnMoreUrl: '/services/airport-transfers',
    highlights: [
      'Live flight tracking with free 90-min waiting time',
      'Expressway tolls and driver fee included',
      'Capacity for up to 14 passengers and 10 large suitcases',
      'Meet & Greet paging inside arrival hall'
    ],
    startingPrice: '$45'
  },
  {
    id: 'service-2',
    slug: 'point-to-point',
    title: 'Point to Point Hire',
    shortDesc: 'Travel between cities and towns with a comfortable KDH and driver.',
    fullDesc: 'Direct, long-distance intercity private van travel between any destinations in Sri Lanka on your schedule without transfers or public transport hassles.',
    image: '/assets/services/service-point-to-point.jpg',
    iconName: 'CarFront',
    bookUrl: '/book?service=point-to-point',
    learnMoreUrl: '/services/point-to-point',
    highlights: [
      'Door-to-door direct pickup and drop-off',
      'Flexible scenic and refreshment stops',
      'Fast expressway routing options',
      'Defensive driving certified tourist chauffeurs'
    ],
    startingPrice: '$0.55 / km'
  },
  {
    id: 'service-3',
    slug: 'daily-hire',
    title: 'Daily Hire',
    shortDesc: 'Hire a KDH van with driver for a full day (ideal for multiple stops and sightseeing).',
    fullDesc: 'Complete freedom to explore Sri Lanka for a full day (up to 12 hours) with an experienced driver-guide for sightseeing, meetings, or coastal excursions.',
    image: '/assets/services/service-daily-hire.jpg',
    iconName: 'CalendarDays',
    bookUrl: '/book?service=daily-hire',
    learnMoreUrl: '/services/day-hire',
    highlights: [
      '100 km included daily mileage allowance',
      'Up to 12 continuous hours of chauffeur service',
      'Unlimited stops within your journey plan',
      'Driver meals and fuel included'
    ],
    startingPrice: '$85 / day'
  },
  {
    id: 'service-4',
    slug: 'multi-day-tours',
    title: 'Multi-Day Tours',
    shortDesc: "Explore Sri Lanka's top destinations over multiple days with a custom itinerary.",
    fullDesc: 'Custom multi-day tour road trips across Sri Lanka including Sigiriya, Kandy, Ella, Yala safari, and Galle with a dedicated chauffeur and van throughout.',
    image: '/assets/services/service-multi-day-tours.jpg',
    iconName: 'Mountain',
    bookUrl: '/book?service=multi-day-tours',
    learnMoreUrl: '/services/multi-day-tours',
    highlights: [
      'Dedicated van and chauffeur for whole itinerary',
      'Chauffeur accommodation & allowance covered',
      'Custom route planning and local destination advice',
      'Comprehensive passenger insurance included'
    ],
    startingPrice: 'Custom Package'
  },
  {
    id: 'service-5',
    slug: 'events-weddings',
    title: 'Events & Weddings',
    shortDesc: 'Comfortable group transportation for weddings, family events, and special occasions.',
    fullDesc: 'Immaculate, detailed Toyota KDH passenger vans for wedding guest shuttles, family gatherings, religious ceremonies, and private events across the island.',
    image: '/assets/services/service-events-weddings.jpg',
    iconName: 'Users',
    bookUrl: '/book?service=events-weddings',
    learnMoreUrl: '/services/events-weddings',
    highlights: [
      'Showroom-clean white vans with uniformed drivers',
      'Multi-van convoy coordination for large groups',
      'Continuous ceremony & reception hotel shuttles',
      'Prompt, polite, professional chauffeur hospitality'
    ],
    startingPrice: 'Hourly / Daily Packages'
  },
  {
    id: 'service-6',
    slug: 'corporate-transport',
    title: 'Corporate Transport',
    shortDesc: 'Reliable transport solutions for business trips, company outings, and staff travel.',
    fullDesc: 'Punctual, executive-grade passenger van transport for corporate delegations, VIP clients, business conferences, site inspections, and staff retreats.',
    image: '/assets/services/service-corporate-transport.jpg',
    iconName: 'Briefcase',
    bookUrl: '/book?service=corporate-transport',
    learnMoreUrl: '/services/corporate-transport',
    highlights: [
      'Guaranteed punctuality for tight itineraries',
      'Official corporate invoicing and tax receipts',
      'High-roof cabin with USB charging availability',
      'Dedicated business account management'
    ],
    startingPrice: 'Corporate Rates'
  }
];

export const BENEFITS_DATA: BenefitItem[] = [
  {
    id: 'benefit-1',
    title: 'Reliable & Safe',
    description: 'Well-maintained vehicles and verified drivers.',
    iconName: 'ShieldCheck'
  },
  {
    id: 'benefit-2',
    title: 'Comfortable Travel',
    description: 'Spacious, air-conditioned KDH vans.',
    iconName: 'Armchair'
  },
  {
    id: 'benefit-3',
    title: 'Transparent Pricing',
    description: 'Fair and clear fare estimates.',
    iconName: 'Tag'
  },
  {
    id: 'benefit-4',
    title: 'Dedicated Support',
    description: 'Quick assistance via phone or WhatsApp.',
    iconName: 'Headphones'
  }
];
