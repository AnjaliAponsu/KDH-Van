export const servicesData = [
  {
    id: 'airport-transfers',
    slug: 'airport-transfers',
    title: 'Airport Transfers',
    shortDesc: 'Stress-free pickup & drop-off to/from Bandaranaike International Airport (CMB) with flight tracking.',
    heroBg: '/assets/services/services-hero-bg.jpg',
    image: '/assets/services/service-airport-transfers.jpg',
    features: ['Flight tracking included', 'Free 60-min wait time', 'Meet & greet inside arrivals', 'Fixed all-inclusive fares']
  },
  {
    id: 'corporate-transport',
    slug: 'corporate-transport',
    title: 'Corporate Transport',
    shortDesc: 'Reliable, professional, and comfortable transport solutions for businesses, teams, and executives.',
    heroBg: '/assets/services-detail/corporate-hero.jpg',
    image: '/assets/services/service-corporate-transport.jpg',
    features: ['Business-ready fleet', 'Discreet, professional drivers', 'Executive leather seating', 'Flexible billing & scheduling'],
    overview: [
      {
        icon: 'briefcase',
        title: 'Business-Ready Fleet',
        desc: 'Well-maintained Toyota KDH / Hiace vans, ideal for corporate and executive travel.'
      },
      {
        icon: 'user-check',
        title: 'Professional Drivers',
        desc: 'Experienced, courteous, and discreet drivers who understand corporate travel needs.'
      },
      {
        icon: 'calendar',
        title: 'Flexible & Reliable',
        desc: 'On-time, dependable, and adaptable to your business schedule and requirements.'
      },
      {
        icon: 'shield-check',
        title: 'Safe & Confidential',
        desc: 'A safe, secure, and private travel experience for executives, clients, and sensitive business travel.'
      }
    ],
    included: [
      { label: 'Executive Travel', icon: 'briefcase' },
      { label: 'Driver Included', icon: 'user' },
      { label: 'Air-Conditioned Van', icon: 'wind' },
      { label: 'Flexible Scheduling', icon: 'calendar' },
      { label: 'Team Transport', icon: 'users' },
      { label: 'Corporate Support', icon: 'headphones' }
    ],
    howItWorks: [
      { num: '1', title: 'Share Your Requirements', desc: 'Tell us your travel details — date, time, pickup location, passenger count, and any special needs.' },
      { num: '2', title: 'We Arrange the Journey', desc: 'We confirm the best-suited van, driver, and schedule for your corporate travel.' },
      { num: '3', title: 'Travel with Confidence', desc: 'Enjoy a smooth, comfortable, and professional journey for you, your team, or your clients.' }
    ],
    useCases: [
      {
        title: 'Client Airport Pickup',
        desc: 'A professional and hassle-free airport pickup and drop-off service for your clients and executives.',
        image: '/assets/services-detail/corporate-use-1.jpg'
      },
      {
        title: 'Team Travel',
        desc: 'Convenient and comfortable transport for your team, whether for daily operations, offsite events, or corporate trips.',
        image: '/assets/services-detail/corporate-use-2.jpg'
      },
      {
        title: 'Business Meetings',
        desc: 'Reliable transport for meetings, events, and business engagements across Colombo and throughout Sri Lanka.',
        image: '/assets/services-detail/corporate-use-3.jpg'
      }
    ]
  },
  {
    id: 'events-weddings',
    slug: 'events-weddings',
    title: 'Events & Weddings',
    shortDesc: 'Reliable and stylish group transport for weddings, family functions, and special events across Sri Lanka.',
    heroBg: '/assets/services-detail/events-hero.jpg',
    image: '/assets/services/service-events-weddings.jpg',
    features: ['Immaculate white vans', 'Punctual guest shuttles', 'Multi-van fleet available', 'Custom event schedules'],
    overview: [
      {
        icon: 'award',
        title: 'Wedding Transport',
        desc: 'Elegant and hassle-free transport for couples, family, and wedding guests.'
      },
      {
        icon: 'users',
        title: 'Group Convenience',
        desc: 'Travel together in one comfortable van, keeping your group on time and stress-free.'
      },
      {
        icon: 'truck',
        title: 'Spacious & Comfortable',
        desc: 'Toyota KDH/Hiace vans with ample space, comfort, and luggage room for event travel.'
      },
      {
        icon: 'shield',
        title: 'Professional & Reliable',
        desc: 'Experienced, punctual, and courteous drivers for a smooth and memorable event day.'
      }
    ],
    included: [
      { label: 'Event Transfers', icon: 'map-pin' },
      { label: 'Group Travel', icon: 'users' },
      { label: 'Driver Included', icon: 'user' },
      { label: 'Air-Conditioned Van', icon: 'wind' },
      { label: 'Flexible Scheduling', icon: 'calendar' },
      { label: '24/7 Support', icon: 'headphones' }
    ],
    howItWorks: [
      { num: '1', title: 'Share Event Details', desc: 'Tell us about your event, date, location, group size, and any special requirements.' },
      { num: '2', title: 'We Arrange Transport', desc: 'We confirm the best van, driver, and schedule to suit your event needs.' },
      { num: '3', title: 'Enjoy Your Event', desc: 'Travel together, stay on schedule, and focus on making great memories.' }
    ],
    useCases: [
      {
        title: 'Wedding Guest Transport',
        desc: 'Convenient group transport for wedding guests, bridal parties, and close family members.',
        image: '/assets/services-detail/events-use-1.jpg'
      },
      {
        title: 'Family Functions',
        desc: 'Ideal for engagements, homecomings, anniversaries, and other family celebrations.',
        image: '/assets/services-detail/events-use-2.jpg'
      },
      {
        title: 'Special Events',
        desc: 'Reliable transport for corporate events, ceremonies, parties, and other special occasions.',
        image: '/assets/services-detail/events-use-3.jpg'
      }
    ]
  },
  {
    id: 'multi-day-tours',
    slug: 'multi-day-tours',
    title: 'Multi-Day Tours',
    shortDesc: 'Explore the best of Sri Lanka on a comfortable private multi-day tour with a dedicated driver.',
    heroBg: '/assets/services-detail/multiday-hero.jpg',
    image: '/assets/services/service-multi-day-tours.jpg',
    features: ['Customized itinerary', 'English-speaking driver-guide', 'Fuel & tolls included', 'Hotel stops flexibility'],
    overview: [
      {
        icon: 'compass',
        title: 'Iconic Destinations',
        desc: 'Discover Sri Lanka\'s top attractions such as Sigiriya, Kandy, Ella, Nuwara Eliya, Galle and more.'
      },
      {
        icon: 'calendar',
        title: 'Flexible Itineraries',
        desc: 'Tailor your tour based on your interests, travel style and the number of days you have.'
      },
      {
        icon: 'truck',
        title: 'Comfortable Travel',
        desc: 'Travel in a clean, spacious, air-conditioned Toyota KDH/Hiace van, perfect for long journeys.'
      },
      {
        icon: 'user-check',
        title: 'Professional Driver',
        desc: 'A friendly, experienced and English-speaking driver who knows Sri Lanka well and ensures a safe, smooth trip.'
      }
    ],
    included: [
      { label: 'Custom Itinerary', icon: 'map' },
      { label: 'Driver Included', icon: 'user' },
      { label: 'Air-Conditioned Van', icon: 'wind' },
      { label: 'Hotel Stop Flexibility', icon: 'home' },
      { label: 'Luggage Space', icon: 'briefcase' },
      { label: '24/7 Support', icon: 'headphones' }
    ],
    howItWorks: [
      { num: '1', title: 'Share Your Plan', desc: 'Tell us your travel dates, interests, preferred places and number of days (e.g. 3 days, 5 days, 7+ days).' },
      { num: '2', title: 'We Build Your Tour', desc: 'We create a personalized multi-day itinerary and confirm all the details with you.' },
      { num: '3', title: 'Enjoy Your Journey', desc: 'Travel comfortably across Sri Lanka with your private van and driver, and make unforgettable memories.' }
    ],
    useCases: [
      {
        title: 'Cultural Triangle Tour',
        desc: 'Explore Sri Lanka\'s rich history and heritage including Sigiriya, Dambulla and Anuradhapura (3-4 Days).',
        image: '/assets/services-detail/multiday-tour-1.jpg'
      },
      {
        title: 'Hill Country Tour',
        desc: 'Experience the scenic beauty of Sri Lanka\'s hill country, including Kandy, Nuwara Eliya and Ella (4-5 Days).',
        image: '/assets/services-detail/multiday-tour-2.jpg'
      },
      {
        title: 'South Coast Tour',
        desc: 'Relax and explore Sri Lanka\'s beautiful southern coast, including Galle, Unawatuna, Mirissa and Hiriketiya (3-5 Days).',
        image: '/assets/services-detail/multiday-tour-3.jpg'
      }
    ]
  },
  {
    id: 'point-to-point',
    slug: 'point-to-point',
    title: 'Point to Point Hire',
    shortDesc: 'Direct, private and comfortable van transfers between locations in Sri Lanka.',
    heroBg: '/assets/services-detail/pointtopoint-hero.jpg',
    image: '/assets/services/service-point-to-point.jpg',
    features: ['Door-to-door transfer', 'No shared passengers', 'Fixed upfront price', 'Optional scenic stops'],
    overview: [
      {
        icon: 'navigation',
        title: 'Direct Transfers',
        desc: 'Travel straight from your pickup location to your destination with no unnecessary stops.'
      },
      {
        icon: 'shield-check',
        title: 'Safe & Reliable',
        desc: 'Professional, experienced drivers and well-maintained KDH/Hiace vans for a worry-free journey.'
      },
      {
        icon: 'truck',
        title: 'Spacious & Comfortable',
        desc: 'Enjoy a clean, air-conditioned van with ample legroom for a relaxed ride.'
      },
      {
        icon: 'calendar',
        title: 'Flexible & Convenient',
        desc: 'Choose your preferred pickup time and location, with the option to add short stops along the way.'
      }
    ],
    included: [
      { label: 'Private Transfer', icon: 'truck' },
      { label: 'Driver Included', icon: 'user' },
      { label: 'Air-Conditioned Van', icon: 'wind' },
      { label: 'Flexible Stops', icon: 'map-pin' },
      { label: 'Luggage Space', icon: 'briefcase' },
      { label: '24/7 Support', icon: 'headphones' }
    ],
    howItWorks: [
      { num: '1', title: 'Request a Trip Quote', desc: 'Tell us your pickup location, destination, date and time.' },
      { num: '2', title: 'We Confirm Details', desc: 'We\'ll check availability, confirm your trip and share the final quote.' },
      { num: '3', title: 'Travel & Enjoy', desc: 'Meet your driver, hop in, and enjoy a smooth, private transfer to your destination.' }
    ],
    useCases: [
      {
        title: 'Colombo to Kandy',
        desc: '≈ 116 km • ≈ 3 – 3.5 hours door-to-door private journey.',
        image: '/assets/services-detail/pointtopoint-route-1.jpg'
      },
      {
        title: 'Colombo to Galle',
        desc: '≈ 122 km • ≈ 2 – 2.5 hours via Southern Expressway.',
        image: '/assets/services-detail/pointtopoint-route-2.jpg'
      },
      {
        title: 'Negombo to Ella',
        desc: '≈ 244 km • ≈ 5 – 6 hours picturesque scenic transition.',
        image: '/assets/services-detail/pointtopoint-route-3.jpg'
      }
    ]
  },
  {
    id: 'daily-hire',
    slug: 'daily-hire',
    title: 'Daily Hire',
    shortDesc: 'A hassle-free van hire service with a dedicated driver for full-day or multi-day travel across Sri Lanka.',
    heroBg: '/assets/services-detail/dailyhire-hero.jpg',
    image: '/assets/services/service-daily-hire.jpg',
    features: ['80-100 km included daily', 'Full driver day allowance', 'Flexible city errands', 'Transparent per-km rate'],
    overview: [
      {
        icon: 'clock',
        title: 'Full-Day Flexibility',
        desc: 'Hire a van for the entire day and travel at your own pace without rushing.'
      },
      {
        icon: 'user-check',
        title: 'Dedicated Driver',
        desc: 'An experienced driver who handles navigation and parking, so you can relax.'
      },
      {
        icon: 'truck',
        title: 'Comfortable Van',
        desc: 'Clean, spacious, and air-conditioned Toyota KDH/Hiace vans for a pleasant ride.'
      },
      {
        icon: 'dollar-sign',
        title: 'Transparent Pricing',
        desc: 'Clear and simple daily rates with no hidden charges, tailored to your travel plan.'
      }
    ],
    included: [
      { label: 'Full Day Hire', icon: 'clock' },
      { label: 'Driver Included', icon: 'user' },
      { label: 'Air-Conditioned Van', icon: 'wind' },
      { label: 'Custom Route', icon: 'map' },
      { label: 'Luggage Space', icon: 'briefcase' },
      { label: '24/7 Support', icon: 'headphones' }
    ],
    howItWorks: [
      { num: '1', title: 'Tell Us Your Plan', desc: 'Share your date, pickup point, expected route, and how long you need the van.' },
      { num: '2', title: 'Get a Confirmed Rate', desc: 'We provide a clear daily rate and confirm the booking for your chosen dates.' },
      { num: '3', title: 'Travel with Ease', desc: 'Your driver arrives on time, ready to take you wherever your day requires.' }
    ],
    useCases: [
      {
        title: 'City Sightseeing',
        desc: 'Explore temples, shopping centers, landmarks, and restaurants around Colombo or Kandy at your own leisure.',
        image: '/assets/services-detail/dailyhire-trip-1.jpg'
      },
      {
        title: 'Family Day Outings',
        desc: 'Spend quality time with family visiting scenic spots, beaches, or historical landmarks without transport worries.',
        image: '/assets/services-detail/dailyhire-trip-2.jpg'
      },
      {
        title: 'Business & Errands',
        desc: 'Hop between business meetings, project sites, or errands across the island on a dedicated schedule.',
        image: '/assets/services-detail/dailyhire-trip-3.jpg'
      }
    ]
  }
];

