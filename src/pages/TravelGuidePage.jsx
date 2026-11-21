import React from 'react';
import { Link } from 'react-router-dom';
import SectionHeader from '../components/common/SectionHeader';
import AttractionsShowcase from '../components/common/AttractionsShowcase';
import CtaBanner from '../components/common/CtaBanner';
import { destinationsList, travelTipsList, suggestedItinerariesList } from '../data/travelGuidesData';

const tipIcons = {
  calendar: (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
      <rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect>
      <line x1="16" y1="2" x2="16" y2="6"></line>
      <line x1="8" y1="2" x2="8" y2="6"></line>
      <line x1="3" y1="10" x2="21" y2="10"></line>
    </svg>
  ),
  truck: (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M19 17h2c.6 0 1-.4 1-1v-3c0-.9-.7-1.7-1.5-1.9C18.7 10.6 16 10 16 10s-1.3-1.4-2.2-2.3c-.5-.4-1.1-.7-1.8-.7H5c-1.1 0-2 .9-2 2v7h2"></path>
      <circle cx="7" cy="17" r="2"></circle>
      <path d="M9 17h6"></path>
      <circle cx="17" cy="17" r="2"></circle>
    </svg>
  ),
  briefcase: (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
      <rect x="2" y="7" width="20" height="14" rx="2" ry="2"></rect>
      <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"></path>
    </svg>
  ),
  camera: (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2z"></path>
      <circle cx="12" cy="13" r="4"></circle>
    </svg>
  ),
  'shield-check': (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
      <polyline points="9 12 11 14 15 10"></polyline>
    </svg>
  )
};

export default function TravelGuidePage() {
  return (
    <main className="travel-guide-main-page post-page-body">
      <section className="guide-hero" style={{ backgroundImage: "url('/assets/guide/travel-guide-hero.jpg')" }}>
        <div className="guide-container">
          <div className="guide-hero-content">
            <div className="guide-hero-eyebrow">TRAVEL GUIDE</div>
            <h1 className="guide-hero-title">
              Travel Guide – <span className="highlight-gold">Sri Lanka Destinations</span>
            </h1>
            <p className="guide-hero-desc">
              Your complete guide to Sri Lanka's top places, experiences, travel tips, and suggested itineraries with a private driver.
            </p>
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
        {/* Section 1: Explore Sri Lanka's Top Destinations (Unified Executive Component) */}
        <div style={{ paddingTop: '24px' }}>
          <AttractionsShowcase
            eyebrow="TOP DESTINATIONS"
            title="Explore Sri Lanka's Top Destinations"
            subtitle="From ancient kingdoms and misty highlands to golden beaches and scenic train journeys, discover the most popular places to visit in Sri Lanka."
            items={destinationsList}
            columns={3}
          />
        </div>

        {/* Section 2: Travel Tips */}
        <section className="travel-tips-section" style={{ marginBottom: '56px' }}>
          <SectionHeader
            kicker="PRACTICAL ADVICE"
            title="Travel Tips for Visiting Sri Lanka"
            subtitle="Make the most of your trip with these practical travel tips, from the best time to visit to getting around comfortably."
          />

          <div className="travel-tips-strip">
            {travelTipsList.map((tip, idx) => (
              <div key={idx} className="tip-pill-card">
                <div className="tip-pill-icon">
                  {tipIcons[tip.icon] || tipIcons.calendar}
                </div>
                <div className="tip-pill-content">
                  <h4 className="tip-pill-title">{tip.title}</h4>
                  <p className="tip-pill-desc">{tip.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Section 3: Suggested Itineraries (Unified Executive Component) */}
        <AttractionsShowcase
          eyebrow="CURATED MULTI-DAY TRIPS"
          title="Suggested Itineraries"
          subtitle="Ready-made private KDH van itineraries to help you experience the best of Sri Lanka, whether you have three days or a full week."
          items={suggestedItinerariesList}
          columns={3}
        />

        {/* Pre-Footer CTA */}
        <CtaBanner
          title="Book a Van for Your Sri Lanka Adventure"
          subtitle="Explore these amazing destinations and more with a comfortable, reliable KDH van and a professional driver."
        />
      </div>
    </main>
  );
}
