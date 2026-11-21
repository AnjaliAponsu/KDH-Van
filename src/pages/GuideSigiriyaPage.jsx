import React from 'react';
import { Link } from 'react-router-dom';
import AttractionsShowcase from '../components/common/AttractionsShowcase';
import ItineraryTimeline from '../components/common/ItineraryTimeline';
import CtaBanner from '../components/common/CtaBanner';
import { useApp } from '../context/AppContext';

const sigiriyaTopPlaces = [
  {
    title: 'Sigiriya Frescoes',
    tag: '5th-Century Art',
    location: 'Western Rock Face · Sigiriya',
    meta: '45 mins',
    desc: 'World-famous ancient frescoes sheltered in a rock pocket, showcasing vivid royal artistry over 1,500 years old.',
    image: '/assets/guide/sigiriya-frescoes.jpg',
    bookingDestination: 'Sigiriya Rock Fortress',
    ctaLabel: 'Include in Trip'
  },
  {
    title: "Lion's Paw Terrace",
    tag: 'Royal Gateway',
    location: 'Northern Plateau · Sigiriya',
    meta: '30 mins',
    desc: 'The monumental carved stone lion paws guarding the final staircase ascent to King Kashyapa’s sky palace.',
    image: '/assets/guide/sigiriya-lion-paw.jpg',
    bookingDestination: 'Sigiriya Rock Fortress',
    ctaLabel: 'Include in Trip'
  },
  {
    title: 'Royal Water Gardens',
    tag: 'UNESCO Gardens',
    location: 'Lower Complex · Sigiriya',
    meta: '1 hr',
    desc: 'Among the world’s oldest landscaped gardens, featuring symmetrical pools, fountains, and boulder pavilions.',
    image: '/assets/guide/sigiriya-royal-gardens.jpg',
    bookingDestination: 'Sigiriya Water Gardens',
    ctaLabel: 'Include in Trip'
  }
];

const sigiriyaNearbyPlaces = [
  {
    title: 'Dambulla Cave Temple',
    tag: 'UNESCO Heritage',
    location: '25 mins from Sigiriya',
    meta: '1.5 hrs',
    desc: 'Sri Lanka’s largest and best-preserved cave temple complex filled with golden Buddha statues and sacred murals.',
    image: '/assets/guide/sigiriya-dambulla.jpg',
    bookingDestination: 'Dambulla Cave Temple & Sigiriya',
    ctaLabel: 'Include in Trip'
  },
  {
    title: 'Minneriya Elephant Safari',
    tag: 'Wildlife Safari',
    location: '35 mins from Sigiriya',
    meta: '3 hrs',
    desc: 'Thrilling afternoon 4x4 national park safari renowned for "The Gathering" of wild Asian elephant herds.',
    image: '/assets/guide/sigiriya-minneriya.jpg',
    bookingDestination: 'Minneriya Safari & Sigiriya',
    ctaLabel: 'Include in Trip'
  }
];

const sigiriyaItinerarySteps = [
  {
    time: '06:00 AM',
    duration: 'Departure',
    title: 'Hotel Pickup (Colombo / Negombo / Kandy)',
    desc: 'Early morning departure in a chilled Toyota KDH van to arrive before the midday heat.',
    img: '/assets/guide/sigiriya-how-get-there.jpg'
  },
  {
    time: '09:30 AM',
    duration: '≈ 2.5 hrs',
    title: 'Sigiriya Lion Rock & Frescoes Climb',
    desc: 'Ascend past the ancient 5th-century frescoes and Lion’s Paw Terrace to the summit palace ruins.',
    img: '/assets/guide/sigiriya-lion-paw.jpg'
  },
  {
    time: '12:00 PM',
    duration: '≈ 1 hr',
    title: 'Royal Water Gardens & Authentic Lunch',
    desc: 'Stroll through the symmetrical hydraulic gardens followed by a traditional Sri Lankan rice & curry lunch.',
    img: '/assets/guide/sigiriya-royal-gardens.jpg'
  },
  {
    time: '02:00 PM',
    duration: '≈ 1.5 hrs',
    title: 'Dambulla Golden Cave Temple',
    desc: 'Visit the UNESCO-listed cave monastery housing over 150 Buddha statues and historic ceiling murals.',
    img: '/assets/guide/sigiriya-dambulla.jpg'
  },
  {
    time: '04:00 PM',
    duration: 'Optional Safari',
    title: 'Minneriya Elephant Safari & Evening Return',
    desc: 'Optional 4x4 jeep safari to witness wild Asian elephant herds before a comfortable KDH transfer back.',
    img: '/assets/guide/sigiriya-minneriya.jpg'
  }
];

const sigiriyaRouteSummary = {
  routeLabel: 'Colombo / Kandy → Sigiriya',
  distance: '≈ 170 km',
  driveTime: '3.5 – 4 hrs',
  bestDeparture: '06:00 AM',
  vehicle: 'Toyota KDH 223'
};

export default function GuideSigiriyaPage() {
  const { openBookingModal } = useApp();

  return (
    <main className="guide-sigiriya-main post-page-body">
      <section className="guide-hero" style={{ backgroundImage: "url('/assets/guide/sigiriya-hero.jpg')" }}>
        <div className="guide-container">
          <div className="guide-hero-content">
            <div className="guide-hero-eyebrow">EXPLORE SRI LANKA</div>
            <h1 className="guide-hero-title">Sigiriya <span className="highlight-gold">Travel Guide</span></h1>
            <p className="guide-hero-desc">A complete guide to visiting Sri Lanka's iconic Sigiriya Rock Fortress &mdash; history, highlights, travel tips and more.</p>
            <nav className="guide-breadcrumbs" aria-label="Breadcrumbs">
              <Link to="/">
                <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2">
                  <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path>
                  <polyline points="9 22 9 12 15 12 15 22"></polyline>
                </svg>
                Home
              </Link>
              <span className="sep">&gt;</span>
              <Link to="/travel-guide">Destinations</Link>
              <span className="sep">&gt;</span>
              <span className="current">Sigiriya Travel Guide</span>
            </nav>
          </div>
        </div>
      </section>

      <div className="guide-container">
        <div className="article-main-grid">
          {/* Main Article Content */}
          <div className="article-left-col">
            <h2 className="post-article-title">Sigiriya Travel Guide</h2>
            <p className="post-lead-text">
              Discover the majestic Sigiriya Rock Fortress, a UNESCO World Heritage Site and one of Sri Lanka's most iconic landmarks.
            </p>

            <div className="post-meta-strip">
              <span>By KDH Travel Team</span>
              <span>•</span>
              <span>Updated 2025</span>
              <span>•</span>
              <span>Sigiriya, Matale District</span>
            </div>

            <div className="post-featured-media">
              <img src="/assets/guide/dest-sigiriya.jpg" alt="Sigiriya Rock Fortress" loading="lazy" />
            </div>

            <section className="post-section">
              <h3 className="post-section-title">Overview</h3>
              <p>
                Sigiriya, also known as the Lion Rock, is an ancient rock fortress and royal palace built in the 5th century by King Kashyapa. Famous for its dramatic rock summit, stunning frescoes, and remarkable engineering, Sigiriya combines history, culture and breathtaking views, making it a must-visit destination in Sri Lanka.
              </p>
            </section>

            <section className="post-section">
              <h3 className="post-section-title">Why Visit Sigiriya</h3>
              <ul className="post-checklist">
                <li>Explore a UNESCO World Heritage Site with over 1,500 years of history.</li>
                <li>Climb the iconic rock for panoramic 360-degree views of the lush jungle.</li>
                <li>See the famous, well-preserved Sigiriya frescoes dating back to ancient royalty.</li>
                <li>Discover the ruins of an ancient royal palace and landscaped water gardens.</li>
              </ul>
            </section>
          </div>

          {/* Sidebar */}
          <aside className="article-sidebar">
            <div className="quick-facts-card">
              <div className="quick-facts-header">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#ffb900" strokeWidth="2.2"><circle cx="12" cy="12" r="10"></circle><line x1="12" y1="16" x2="12" y2="12"></line><line x1="12" y1="8" x2="12.01" y2="8"></line></svg>
                <h3>Quick Facts: Sigiriya</h3>
              </div>
              <ul className="quick-facts-list">
                <li><strong>Location:</strong> Matale District, Central Province</li>
                <li><strong>Travel Time:</strong> ≈ 3.5 – 4 hours from Colombo</li>
                <li><strong>Ideal Trip Type:</strong> History, Culture, Nature</li>
                <li><strong>Suggested Duration:</strong> 3 – 4 hours (climb &amp; gardens)</li>
              </ul>
            </div>

            <div className="sidebar-cta-box">
              <h4>Need a Van to Sigiriya?</h4>
              <p>Travel comfortably with a private Toyota KDH van and experienced driver.</p>
              <button 
                type="button" 
                className="btn-primary" 
                style={{ width: '100%', height: '46px' }}
                onClick={() => openBookingModal({ destination: 'Sigiriya' })}
              >
                Book Sigiriya Trip
              </button>
            </div>
          </aside>
        </div>

        {/* Top Places to See in Sigiriya (Unified Executive Component) */}
        <div style={{ marginTop: '56px' }}>
          <AttractionsShowcase
            eyebrow="SIGIRIYA HIGHLIGHTS"
            title="Top Places to See in Sigiriya"
            subtitle="Must-see archaeological wonders across the Lion Rock fortress and royal gardens."
            items={sigiriyaTopPlaces}
            columns={3}
          />
        </div>

        {/* Nearby Places to Explore (Unified Executive Component) */}
        <AttractionsShowcase
          eyebrow="CULTURAL TRIANGLE EXCURSIONS"
          title="Nearby Places to Explore"
          subtitle="Pair Sigiriya seamlessly with nearby UNESCO heritage temples and wildlife safaris in your private KDH van."
          items={sigiriyaNearbyPlaces}
          columns={2}
        />

        {/* Executive Suggested Itinerary: Sigiriya Cultural Day Trip */}
        <ItineraryTimeline
            eyebrow="CURATED CULTURAL ROUTE"
            title="Suggested Itinerary: Sigiriya Day Trip"
            subtitle="Experience Sri Lanka's Cultural Triangle comfortably in a single private KDH van excursion."
            steps={sigiriyaItinerarySteps}
            routeSummary={sigiriyaRouteSummary}
            bookingDestination="Sigiriya & Dambulla Day Trip"
          bookingService="Daily Hire"
        />

        <CtaBanner
          title="Book Your Sigiriya Trip with KDH Van Hire"
          subtitle="Travel to Sigiriya in comfort and safety with a private KDH van and a professional, friendly driver."
        />
      </div>
    </main>
  );
}

