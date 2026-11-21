import React from 'react';
import { Link } from 'react-router-dom';
import SectionHeader from '../components/common/SectionHeader';
import ItineraryTimeline from '../components/common/ItineraryTimeline';
import CtaBanner from '../components/common/CtaBanner';
import { useApp } from '../context/AppContext';

const southCoastItinerarySteps = [
  {
    time: 'Day 1 · 07:30 AM',
    duration: '≈ 2 hrs drive',
    title: 'Colombo Departure via Southern Expressway',
    desc: 'Fast, smooth highway ride straight down to Sri Lanka’s historic southern coastline in a private KDH van.',
    img: '/assets/guide/southcoast-itinerary-van.jpg'
  },
  {
    time: 'Day 1 · 10:00 AM',
    duration: '≈ 3 hrs',
    title: 'Galle Dutch Fort & Boutique Lunch',
    desc: 'Walk the UNESCO ramparts, lighthouse, and cobblestone streets before enjoying oceanfront dining.',
    img: '/assets/guide/southcoast-galle.jpg'
  },
  {
    time: 'Day 1 · 02:30 PM',
    duration: 'Afternoon & Stay',
    title: 'Unawatuna Bay & Coastal Sunset',
    desc: 'Swim or snorkel in calm turquoise waters and unwind overnight at a beachfront hotel.',
    img: '/assets/guide/southcoast-unawatuna.jpg'
  },
  {
    time: 'Day 2 · 06:30 AM',
    duration: '≈ 3.5 hrs',
    title: 'Mirissa Whale Watching & Coconut Tree Hill',
    desc: 'Early morning boat excursion to spot blue whales and dolphins followed by iconic coastal viewpoints.',
    img: '/assets/guide/southcoast-mirissa.jpg'
  },
  {
    time: 'Day 2 · 02:00 PM',
    duration: 'Afternoon Return',
    title: 'Weligama Surf Bay & Expressway Return',
    desc: 'Stop at Weligama Bay for surfing or fresh seafood before a relaxed expressway drive back to Colombo or BIA.',
    img: '/assets/guide/southcoast-weligama.jpg'
  }
];

const southCoastRouteSummary = {
  routeLabel: 'Colombo → Galle & Mirissa',
  distance: '≈ 155 km',
  driveTime: '2 – 2.5 hrs',
  bestDeparture: '07:30 AM',
  vehicle: 'Toyota KDH 223'
};

export default function GuideSouthCoastPage() {
  const { openBookingModal } = useApp();

  const places = [
    {
      title: 'Galle Fort',
      desc: 'A UNESCO World Heritage Site with colonial architecture, charming streets and ocean views.',
      image: '/assets/guide/southcoast-galle.jpg'
    },
    {
      title: 'Unawatuna',
      desc: 'A popular beach with calm waters, snorkeling, beachside cafes and a relaxed tropical vibe.',
      image: '/assets/guide/southcoast-unawatuna.jpg'
    },
    {
      title: 'Mirissa',
      desc: 'Famous for whale watching, picturesque beach views and a vibrant seaside atmosphere.',
      image: '/assets/guide/southcoast-mirissa.jpg'
    },
    {
      title: 'Weligama',
      desc: 'A laid-back surf town, perfect for beginner surfers, beach time and stunning sunsets.',
      image: '/assets/guide/southcoast-weligama.jpg'
    }
  ];

  const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
  const peakMonths = ['Dec', 'Jan', 'Feb', 'Mar', 'Apr'];

  return (
    <main className="guide-southcoast-main post-page-body">
      <section className="guide-hero" style={{ backgroundImage: "url('/assets/guide/southcoast-hero.jpg')" }}>
        <div className="guide-container">
          <div className="guide-hero-content">
            <div className="guide-hero-eyebrow">DESTINATION GUIDE</div>
            <h1 className="guide-hero-title">South Coast Travel Guide &ndash; <span className="highlight-gold">Galle &amp; Mirissa</span></h1>
            <p className="guide-hero-desc">Explore historic charm, golden beaches, vibrant coastal life and unforgettable ocean experiences on Sri Lanka's South Coast.</p>
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
              <span className="current">South Coast Travel Guide</span>
            </nav>
          </div>
        </div>
      </section>

      <div className="guide-container">
        {/* Intro */}
        <section style={{ marginBottom: '48px' }}>
          <SectionHeader
            title="South Coast Travel Guide – Galle &amp; Mirissa"
            subtitle="A complete guide to Sri Lanka's stunning South Coast — from the historic Galle Fort to the palm-fringed beaches of Mirissa, with top places to see, things to do, and practical travel tips for a perfect coastal getaway."
          />
        </section>

        {/* 4 Places */}
        <section style={{ marginBottom: '48px' }}>
          <SectionHeader
            title="Top Places to See"
            subtitle="Discover the must-visit destinations along the South Coast, from a historic fort to beautiful beaches and top surf spots."
          />

          <div className="south-places-grid">
            {places.map((place, idx) => (
              <div key={idx} className="destination-card">
                <div className="destination-card-media" style={{ height: '170px' }}>
                  <img src={place.image} alt={place.title} loading="lazy" />
                </div>
                <div className="destination-card-body">
                  <h4 className="destination-card-title">{place.title}</h4>
                  <p className="destination-card-desc">{place.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* 3-Col Mid Row */}
        <section style={{ marginBottom: '48px' }}>
          <div className="south-mid-grid">
            {/* Box 1: Beaches & Activities */}
            <div className="service-feature-card">
              <h4 className="feature-card-title" style={{ borderBottom: '2px solid #ffb900', paddingBottom: '8px', marginBottom: '14px' }}>
                Beaches &amp; Activities
              </h4>
              <ul className="post-checklist" style={{ listStyle: 'none', padding: 0 }}>
                <li><strong>Surfing:</strong> Catch great waves in Weligama and Mirissa.</li>
                <li><strong>Whale Watching:</strong> Spot blue whales and dolphins (Nov – Apr).</li>
                <li><strong>Snorkeling:</strong> Explore vibrant marine life in Unawatuna.</li>
                <li><strong>Sea Turtle Spotting:</strong> Visit coastal conservation spots.</li>
                <li><strong>Beach Relaxation:</strong> Unwind on golden beaches and enjoy sunsets.</li>
              </ul>
            </div>

            {/* Box 2: Best Time to Travel */}
            <div className="service-feature-card">
              <h4 className="feature-card-title" style={{ borderBottom: '2px solid #ffb900', paddingBottom: '8px', marginBottom: '14px' }}>
                Best Time to Travel
              </h4>
              <p style={{ fontSize: '13.5px', color: '#64748b', marginBottom: '12px' }}>
                The South Coast is a year-round destination, with the best conditions for beaches and ocean activities from December to April.
              </p>
              <div className="month-badges-grid">
                {months.map(m => (
                  <span key={m} className={`month-badge ${peakMonths.includes(m) ? 'peak' : ''}`}>{m}</span>
                ))}
              </div>
              <p style={{ fontSize: '12.5px', color: '#b45309', fontWeight: '700', marginTop: '10px' }}>
                &bull; Highlighted: Ideal weather, calm seas &amp; whale watching.
              </p>
            </div>

            {/* Box 3: Trip Planning Tips */}
            <div className="service-feature-card">
              <h4 className="feature-card-title" style={{ borderBottom: '2px solid #ffb900', paddingBottom: '8px', marginBottom: '14px' }}>
                Trip Planning Tips
              </h4>
              <ul className="post-checklist" style={{ listStyle: 'none', padding: 0 }}>
                <li>Allow 2–3 days to explore Galle, beaches and Mirissa at a relaxed pace.</li>
                <li>Take the Southern Expressway from Colombo to save time.</li>
                <li>Book whale watching in advance during peak season (Nov – Apr).</li>
                <li>Travel with a private van &amp; driver for safe coastal transport.</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Executive 2-Day Itinerary Timeline */}
        <ItineraryTimeline
          eyebrow="CURATED COASTAL ROUTE"
          title="Suggested Itinerary: 2-Day South Coast Escape"
          subtitle="A relaxed coastal getaway covering UNESCO heritage, golden beaches, whale watching, and surf bays."
          steps={southCoastItinerarySteps}
          routeSummary={southCoastRouteSummary}
          bookingDestination="Galle & Mirissa (South Coast)"
          bookingService="Multi-Day Tour"
        />

        <CtaBanner
          title="Book Your South Coast Trip Today"
          subtitle="Explore Galle, Mirissa and the best of Sri Lanka's South Coast with a comfortable KDH van and a professional driver."
        />
      </div>
    </main>
  );
}

