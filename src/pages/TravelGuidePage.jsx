import React from 'react';
import { Link } from 'react-router-dom';
import PageHero from '../components/common/PageHero';
import SectionHeader from '../components/common/SectionHeader';
import CtaBanner from '../components/common/CtaBanner';
import { destinationsList, travelTipsList, suggestedItinerariesList } from '../data/travelGuidesData';

export default function TravelGuidePage() {
  return (
    <main className="travel-guide-main-page post-page-body">
      <section className="guide-hero" style={{ backgroundImage: "url('/assets/guide/travel-guide-hero.jpg')" }}>
        <div className="guide-container">
          <div className="guide-hero-content">
            <div className="guide-hero-eyebrow">TRAVEL GUIDE</div>
            <h1 className="guide-hero-title">Travel Guide – <span className="highlight-gold">Sri Lanka Destinations</span></h1>
            <p className="guide-hero-desc">Your complete guide to Sri Lanka's top places, experiences, travel tips, and suggested itineraries with a private driver.</p>
            <nav className="guide-breadcrumbs" aria-label="Breadcrumbs">
              <Link to="/">
                <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2">
                  <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path>
                  <polyline points="9 22 9 12 15 12 15 22"></polyline>
                </svg>
                Home
              </Link>
              <span className="sep">&gt;</span>
              <span className="current">Travel Guide</span>
            </nav>
          </div>
        </div>
      </section>

      <div className="guide-container">
        {/* Section 1: Explore Sri Lanka's Top Destinations */}
        <section className="destinations-section" style={{ marginBottom: '56px' }}>
          <SectionHeader
            title="Explore Sri Lanka's Top Destinations"
            subtitle="From ancient kingdoms and misty highlands to golden beaches and scenic train journeys, discover the most popular places to visit in Sri Lanka."
          />

          <div className="destinations-grid">
            {destinationsList.map((dest, idx) => (
              <Link key={idx} to={dest.link} className="destination-card">
                <div className="destination-card-img-wrap">
                  <img src={dest.image} alt={dest.title} className="destination-card-img" loading="lazy" />
                  <span className="destination-tag-badge">{dest.tag}</span>
                </div>
                <div className="destination-card-body">
                  <div className="destination-card-title-row">
                    <h3 className="destination-card-title">{dest.title}</h3>
                    <span className="destination-card-arrow">&rarr;</span>
                  </div>
                  <p className="destination-card-desc">{dest.desc}</p>
                </div>
              </Link>
            ))}
          </div>
        </section>

        {/* Section 2: Travel Tips */}
        <section className="travel-tips-section" style={{ marginBottom: '56px' }}>
          <SectionHeader
            title="Travel Tips for Visiting Sri Lanka"
            subtitle="Make the most of your trip with these practical travel tips, from the best time to visit to getting around comfortably."
          />

          <div className="travel-tips-strip">
            {travelTipsList.map((tip, idx) => (
              <div key={idx} className="tip-pill-card">
                <div className="tip-pill-icon">
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#16a34a" strokeWidth="2.4">
                    <circle cx="12" cy="12" r="10"></circle>
                    <polyline points="12 6 12 12 14 14"></polyline>
                  </svg>
                </div>
                <div className="tip-pill-content">
                  <h4 className="tip-pill-title">{tip.title}</h4>
                  <p className="tip-pill-desc">{tip.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Section 3: Suggested Itineraries */}
        <section className="itineraries-section" style={{ marginBottom: '60px' }}>
          <SectionHeader
            title="Suggested Itineraries"
            subtitle="Ready-made trip ideas to help you experience the best of Sri Lanka, whether you have a few days or a full week."
          />

          <div className="itineraries-grid">
            {suggestedItinerariesList.map((itin, idx) => (
              <Link key={idx} to={itin.link} className="itinerary-card">
                <div className="itinerary-card-img-wrap">
                  <img src={itin.image} alt={itin.title} className="itinerary-card-img" loading="lazy" />
                  <span className="itinerary-badge">{itin.days}</span>
                </div>
                <div className="itinerary-body">
                  <h4 className="itinerary-title">{itin.title}</h4>
                  <p className="itinerary-desc">{itin.desc}</p>
                  <div style={{ marginTop: 'auto', paddingTop: '14px', color: '#d97706', fontWeight: '700', fontSize: '13.5px' }}>
                    View Full Guide &rarr;
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </section>

        {/* Pre-Footer CTA */}
        <CtaBanner
          title="Book a Van for Your Sri Lanka Adventure"
          subtitle="Explore these amazing destinations and more with a comfortable, reliable KDH van and a professional driver."
        />
      </div>
    </main>
  );
}

