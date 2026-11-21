export const SITE_URL = 'https://AnjaliAponsu.github.io/KDH-Van';
export const SITE_NAME = 'KDH Van Hire Sri Lanka';
export const DEFAULT_OG_IMAGE = `${SITE_URL}/assets/home-page/hero-van.jpg`;

export const ORGANIZATION_SCHEMA = {
  '@context': 'https://schema.org',
  '@type': 'AutoRental',
  '@id': `${SITE_URL}/#organization`,
  name: 'KDH Van Hire Sri Lanka',
  url: SITE_URL,
  logo: `${SITE_URL}/assets/logo.png`,
  image: DEFAULT_OG_IMAGE,
  description:
    'Luxury Toyota HiAce KDH passenger van hire with professional English-speaking chauffeurs in Sri Lanka for airport transfers, daily hire, and multi-day private island tours.',
  telephone: '+94771234567',
  email: 'info@kdhvanhire.lk',
  priceRange: 'LKR 12,500 - LKR 18,000+',
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'Colombo',
    addressRegion: 'Western Province',
    addressCountry: 'LK'
  },
  areaServed: {
    '@type': 'Country',
    name: 'Sri Lanka'
  },
  openingHoursSpecification: {
    '@type': 'OpeningHoursSpecification',
    dayOfWeek: [
      'Monday',
      'Tuesday',
      'Wednesday',
      'Thursday',
      'Friday',
      'Saturday',
      'Sunday'
    ],
    opens: '00:00',
    closes: '23:59'
  }
};

export const SEO_ROUTES = {
  '/': {
    title: 'KDH Van Hire in Sri Lanka | Airport Transfers, Private Tours & Daily Hire',
    description:
      'Hire a luxury pearl-white Toyota KDH passenger van with an experienced English-speaking driver in Sri Lanka. Reliable BIA airport transfers, daily hire, and private round-island tours.',
    keywords:
      'KDH van hire Sri Lanka, Toyota KDH rental Colombo, airport pickup Sri Lanka, private driver Sri Lanka, van hire with driver Sri Lanka, Katunayake airport transfer',
    image: `${SITE_URL}/assets/home-page/hero-van.jpg`,
    priority: '1.0',
    changefreq: 'weekly'
  },
  '/services': {
    title: 'Our KDH Van Hire Services in Sri Lanka | Airport, Daily & Multi-Day Tours',
    description:
      'Explore all Toyota KDH van hire services in Sri Lanka: BIA airport transfers, point-to-point city transfers, daily hire, multi-day tours, weddings & events, and corporate transport.',
    keywords:
      'KDH van services Sri Lanka, airport transfer BIA, daily van hire Colombo, Sri Lanka multi day tour van, corporate van hire Sri Lanka',
    image: `${SITE_URL}/assets/services/services-hero-bg.jpg`,
    priority: '0.9',
    changefreq: 'weekly'
  },
  '/services/point-to-point': {
    title: 'Point to Point KDH Van Hire Sri Lanka | City-to-City Private Transfers',
    description:
      'Direct door-to-door Toyota KDH private van transfers between Colombo, BIA Airport, Kandy, Galle, Ella, Sigiriya, and all Sri Lankan destinations with tolls included.',
    keywords:
      'point to point van hire Sri Lanka, Colombo to Kandy KDH van, Colombo to Galle van transfer, private intercity transfer Sri Lanka',
    image: `${SITE_URL}/assets/services-detail/pointtopoint-hero.jpg`,
    priority: '0.8',
    changefreq: 'monthly'
  },
  '/services/daily-hire': {
    title: 'Daily KDH Van Hire with Driver in Sri Lanka | 8–10 Hour Packages',
    description:
      'Flexible full-day Toyota KDH van hire with an experienced local chauffeur in Colombo and across Sri Lanka. Ideal for city tours, business meetings, and family excursions.',
    keywords:
      'daily van hire Sri Lanka, KDH van hire per day Colombo, full day van rental with driver Sri Lanka',
    image: `${SITE_URL}/assets/services-detail/dailyhire-hero.jpg`,
    priority: '0.8',
    changefreq: 'monthly'
  },
  '/services/multi-day-tours': {
    title: 'Multi-Day Sri Lanka Tours by Private KDH Van & Chauffeur Guide',
    description:
      'Explore Sigiriya, Kandy, Ella, Nuwara Eliya, Yala, and the South Coast at your own pace in a private air-conditioned Toyota KDH van with a dedicated driver-guide.',
    keywords:
      'Sri Lanka multi day tour van, round tour KDH hire Sri Lanka, private driver tour Sri Lanka, family tour van Sri Lanka',
    image: `${SITE_URL}/assets/services-detail/multiday-hero.jpg`,
    priority: '0.8',
    changefreq: 'monthly'
  },
  '/services/events-weddings': {
    title: 'Wedding & Special Event KDH Van Hire in Sri Lanka | Group Transport',
    description:
      'Executive pearl-white Toyota KDH luxury vans for Sri Lankan weddings, family functions, guest shuttles, and special occasions with uniformed chauffeurs.',
    keywords:
      'wedding van hire Sri Lanka, KDH van for weddings Colombo, event group transport Sri Lanka',
    image: `${SITE_URL}/assets/services-detail/events-hero.jpg`,
    priority: '0.8',
    changefreq: 'monthly'
  },
  '/services/corporate-transport': {
    title: 'Corporate & Executive KDH Van Hire Sri Lanka | Business Travel',
    description:
      'Punctual, air-conditioned Toyota KDH corporate van hire for executive delegations, conferences, airport VIP pickups, and company retreats in Sri Lanka.',
    keywords:
      'corporate van hire Sri Lanka, executive transport Colombo, business KDH hire Sri Lanka',
    image: `${SITE_URL}/assets/services-detail/corporate-hero.jpg`,
    priority: '0.8',
    changefreq: 'monthly'
  },
  '/fleet': {
    title: 'Our Toyota KDH 223 High-Roof Van Fleet | Luxury 9–14 Seater Sri Lanka',
    description:
      'Inspect our pristine pearl-white Toyota HiAce KDH 223 High Roof commuter vans featuring dual roof AC, reclining seats, spacious luggage boot, and USB charging.',
    keywords:
      'Toyota KDH 223 Sri Lanka, KDH high roof van interior, 9 seater luxury van Sri Lanka, 14 seater KDH hire',
    image: `${SITE_URL}/assets/fleet/fleet-hero-bg.jpg`,
    priority: '0.9',
    changefreq: 'monthly'
  },
  '/pricing': {
    title: 'KDH Van Hire Prices in Sri Lanka | Transparent LKR Rates & Packages',
    description:
      'Simple & transparent KDH van hire rates in Sri Lanka: Airport transfers from LKR 12,500, Daily hire from LKR 18,000/day, and Multi-day tours from LKR 16,500/day with no hidden fees.',
    keywords:
      'KDH van hire price Sri Lanka, Toyota KDH per km rate Sri Lanka, airport transfer cost Colombo, daily van hire price LKR',
    image: `${SITE_URL}/assets/fleet/fleet-hero-bg.jpg`,
    priority: '0.95',
    changefreq: 'weekly'
  },
  '/travel-guide': {
    title: 'Sri Lanka Travel Guide | Top Destinations, Tips & KDH Van Itineraries',
    description:
      'Plan your Sri Lanka private road trip with our destination guides to Sigiriya, Kandy, Ella, Galle, Nuwara Eliya, and Mirissa plus travel tips and multi-day itineraries.',
    keywords:
      'Sri Lanka travel guide, Sri Lanka road trip itinerary, best places to visit in Sri Lanka by van',
    image: `${SITE_URL}/assets/guide/travel-guide-hero.jpg`,
    priority: '0.85',
    changefreq: 'monthly'
  },
  '/travel-guide/sigiriya': {
    title: 'Sigiriya Rock Fortress Travel Guide | Day Trips & Private Van Hire',
    description:
      'Complete visitor guide to Sigiriya Lion Rock, Dambulla Cave Temple, and Minneriya Safari — best times to climb, tickets, and private Toyota KDH transport from Colombo or Kandy.',
    keywords:
      'Sigiriya travel guide, Colombo to Sigiriya KDH van, Sigiriya day trip with driver',
    image: `${SITE_URL}/assets/guide/sigiriya-hero.jpg`,
    priority: '0.75',
    changefreq: 'monthly'
  },
  '/travel-guide/south-coast': {
    title: 'Galle & South Coast Sri Lanka Travel Guide | Mirissa, Unawatuna & Weligama',
    description:
      'Discover Galle Fort, Unawatuna, Weligama, and Mirissa whale watching with smooth Southern Expressway Toyota KDH van transfers.',
    keywords:
      'South Coast Sri Lanka guide, Colombo to Galle van hire, Mirissa private transfer',
    image: `${SITE_URL}/assets/guide/southcoast-hero.jpg`,
    priority: '0.75',
    changefreq: 'monthly'
  },
  '/travel-guide/ella': {
    title: 'Ella Sri Lanka Travel Guide | Nine Arch Bridge, Little Adam’s Peak & Van Tours',
    description:
      'Everything you need for visiting Ella in Sri Lanka’s Hill Country: Nine Arch Bridge, Ravana Falls, tea estates, and comfortable high-roof KDH van transport.',
    keywords:
      'Ella travel guide Sri Lanka, Kandy to Ella private van, Nine Arch Bridge trip',
    image: `${SITE_URL}/assets/guide/ella-hero.jpg`,
    priority: '0.75',
    changefreq: 'monthly'
  },
  '/travel-guide/ella/nine-arch-bridge': {
    title: 'Nine Arch Bridge Ella Guide | Train Times, Photos & Private KDH Van Access',
    description:
      'Complete visitor guide to Ella’s iconic Nine Arch Bridge (Demodara): best train crossing times, photography spots, trail access, and private Toyota KDH van transport.',
    keywords:
      'Nine Arch Bridge Ella, Ella train schedule Nine Arch Bridge, Demodara bridge Sri Lanka, Ella private van tour',
    image: `${SITE_URL}/assets/guide/ella-nine-arch.jpg`,
    priority: '0.75',
    changefreq: 'monthly'
  },
  '/travel-guide/ella/little-adams-peak': {
    title: 'Little Adam’s Peak Ella Hike Guide | Sunrise Views, Trail Info & KDH Transport',
    description:
      'Plan your hike to Little Adam’s Peak in Ella: trail duration, sunrise vs sunset tips, difficulty level, and comfortable private KDH van drop-off at the trailhead.',
    keywords:
      'Little Adams Peak Ella, Ella hiking guide Sri Lanka, sunrise hike Ella, Ella day tour KDH van',
    image: `${SITE_URL}/assets/guide/ella-adams-peak.jpg`,
    priority: '0.75',
    changefreq: 'monthly'
  },
  '/travel-guide/ella/ravana-falls': {
    title: 'Ravana Falls Ella Guide | Waterfall Info, Safety Tips & Private Van Stops',
    description:
      'Discover Ravana Falls near Ella: 25m tiered waterfall, Ramayana legend, best season for water flow, and effortless roadside stops by private Toyota KDH van.',
    keywords:
      'Ravana Falls Ella, waterfalls near Ella Sri Lanka, Ella to Yala van transfer, Ravana Ella Wildlife Sanctuary',
    image: `${SITE_URL}/assets/guide/ella-ravana-falls.jpg`,
    priority: '0.75',
    changefreq: 'monthly'
  },
  '/travel-guide/kandy': {
    title: 'Kandy Travel Guide Sri Lanka | Temple of the Tooth, Gardens & KDH Van Hire',
    description:
      'Explore Kandy, Sri Lanka’s sacred cultural capital: Temple of the Tooth, Royal Botanical Gardens, Kandy Lake, and curated private KDH van day trips from Colombo.',
    keywords:
      'Kandy travel guide Sri Lanka, Colombo to Kandy KDH van, Temple of the Tooth day trip, Kandy private driver',
    image: `${SITE_URL}/assets/guide/dest-kandy.jpg`,
    priority: '0.75',
    changefreq: 'monthly'
  },
  '/travel-guide/nuwara-eliya': {
    title: 'Nuwara Eliya Travel Guide | Little England Tea Estates & KDH Van Tours',
    description:
      'Plan your trip to Nuwara Eliya: emerald Ceylon tea estates, Lake Gregory, Ramboda Falls, Nanu Oya train drops, and private high-roof Toyota KDH transport.',
    keywords:
      'Nuwara Eliya travel guide, Kandy to Nuwara Eliya KDH van, Sri Lanka tea plantation tour, Little England Sri Lanka',
    image: `${SITE_URL}/assets/guide/dest-nuwara-eliya.jpg`,
    priority: '0.75',
    changefreq: 'monthly'
  },
  '/about': {
    title: 'About KDH Van Hire Sri Lanka | Trusted Chauffeur-Driven Van Service',
    description:
      'Learn about KDH Van Hire Sri Lanka — our mission, verified fleet standards, SLTDA-licensed English-speaking chauffeurs, and commitment to safe islandwide travel.',
    keywords:
      'about KDH van hire Sri Lanka, trusted van rental Colombo, Sri Lanka chauffeur service',
    image: `${SITE_URL}/assets/about/about-hero-bg.jpg`,
    priority: '0.8',
    changefreq: 'monthly'
  },
  '/contact': {
    title: 'Contact KDH Van Hire Sri Lanka | 24/7 WhatsApp & Instant Van Quotes',
    description:
      'Get in touch with our Colombo dispatch team 24/7 via WhatsApp, phone (+94 77 123 4567), or online inquiry form for instant Toyota KDH van availability and quotes.',
    keywords:
      'contact KDH van hire Sri Lanka, book KDH van WhatsApp Colombo, Sri Lanka airport pickup contact',
    image: `${SITE_URL}/assets/contact/contact-hero-bg.jpg`,
    priority: '0.85',
    changefreq: 'monthly'
  },
  '/booking': {
    title: 'Book Your Toyota KDH Van Online | Instant Quote & Reservation Sri Lanka',
    description:
      'Reserve your private Toyota KDH passenger van online in 3 easy steps. Instant WhatsApp confirmation, flight tracking, and zero advance payment required.',
    keywords:
      'book KDH van Sri Lanka online, reserve airport transfer Colombo, Sri Lanka van booking',
    image: `${SITE_URL}/assets/booking/booking-hero-bg.jpg`,
    priority: '0.9',
    changefreq: 'weekly'
  }
};
