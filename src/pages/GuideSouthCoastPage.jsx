import React from 'react';
import PageHero from '../components/common/PageHero';
import SectionHeader from '../components/common/SectionHeader';
import CtaBanner from '../components/common/CtaBanner';
import { useApp } from '../context/AppContext';

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
    <main className="guide-southcoast-main">
      <PageHero
        kicker="DESTINATION GUIDE"
        title="South Coast Travel Guide – Galle &amp; Mirissa"
        desc="Explore historic charm, golden beaches, vibrant coastal life and unforgettable ocean experiences on Sri Lanka's South Coast."
        bgImage="/assets/guide/southcoast-sunset.jpg"
        breadcrumbs={[
          { label: 'Travel Guide', path: '/travel-guide' },
          { label: 'South Coast' }
        ]}
      />

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

        {/* 2-Day Itinerary Card */}
        <section style={{ marginBottom: '56px' }}>
          <div className="south-itin-card">
            <div className="south-itin-media">
              <img src="/assets/guide/southcoast-itinerary-van.jpg" alt="South Coast Van Tour" loading="lazy" />
            </div>
            <div className="south-itin-content">
              <h4 style={{ fontSize: '20px', fontWeight: '800', color: '#081726', margin: 0 }}>Sample South Coast Itinerary (2 Days)</h4>
              <p style={{ fontSize: '14.5px', color: '#64748b', margin: 0 }}>A relaxed coastal getaway covering history, beaches and ocean experiences.</p>
              
              <div className="day-badge-row">
                <span className="day-pill">Day 1</span>
                <span>Colombo &rarr; Galle Fort (explore &amp; lunch) &rarr; Unawatuna (beach &amp; snorkeling) &rarr; Overnight in Galle / Unawatuna</span>
              </div>
              <div className="day-badge-row">
                <span className="day-pill">Day 2</span>
                <span>Mirissa (whale watching – seasonal) &rarr; Weligama (surfing or beach time) &rarr; Return to Colombo</span>
              </div>
            </div>
          </div>
        </section>

        <CtaBanner
          title="Book Your South Coast Trip Today"
          subtitle="Explore Galle, Mirissa and the best of Sri Lanka's South Coast with a comfortable KDH van and a professional driver."
        />
      </div>
    </main>
  );
}

