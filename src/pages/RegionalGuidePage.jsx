import React from 'react';
import { Link, Navigate } from 'react-router-dom';
import { regionalGuidesData } from '../data/travelGuidesData';
import AttractionsShowcase from '../components/common/AttractionsShowcase';
import ItineraryTimeline from '../components/common/ItineraryTimeline';
import CtaBanner from '../components/common/CtaBanner';
import { useApp } from '../context/AppContext';

export default function RegionalGuidePage({ guideKey }) {
  const { openBookingModal } = useApp();
  const guide = regionalGuidesData[guideKey];

  if (!guide) {
    return <Navigate to="/travel-guide" replace />;
  }

  return (
    <main className="guide-ella-main post-page-body">
      {/* Hero Banner */}
      <section
        className="guide-hero"
        style={{ backgroundImage: `url('${guide.heroImage}')` }}
      >
        <div className="guide-container">
          <div className="guide-hero-content">
            <div className="guide-hero-eyebrow">{guide.eyebrow}</div>
            <h1 className="guide-hero-title">
              {guide.title} <span className="highlight-gold">{guide.highlight}</span>
            </h1>
            <p className="guide-hero-desc">{guide.desc}</p>
            <nav className="guide-breadcrumbs" aria-label="Breadcrumbs">
              <Link to="/">
                <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2">
                  <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path>
                  <polyline points="9 22 9 12 15 12 15 22"></polyline>
                </svg>
                Home
              </Link>
              <span className="sep">&gt;</span>
              <Link to="/travel-guide">Travel Guide</Link>
              <span className="sep">&gt;</span>
              <span className="current">{guide.title} Travel Guide</span>
            </nav>
          </div>
        </div>
      </section>

      <div className="guide-container">
        {/* Overview + Quick Facts */}
        <div className="article-main-grid" style={{ marginTop: '24px', marginBottom: '56px' }}>
          <div className="article-left-col">
            <div className="post-featured-media">
              <img src={guide.heroImage} alt={`${guide.title} Sri Lanka`} loading="lazy" />
            </div>

            <section className="post-section">
              <h2 className="post-section-title" style={{ fontSize: '26px', marginBottom: '12px' }}>
                Why Visit {guide.title}
              </h2>
              {guide.overview.map((p, idx) => (
                <p
                  key={idx}
                  style={{ fontSize: '15.5px', lineHeight: 1.75, color: '#475569', marginBottom: '14px' }}
                >
                  {p}
                </p>
              ))}
            </section>
          </div>

          <aside className="article-sidebar">
            <div className="quick-facts-card">
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '14px', paddingBottom: '12px', borderBottom: '1px solid #f1f5f9' }}>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#ffb900" strokeWidth="2.3">
                  <circle cx="12" cy="12" r="10"></circle>
                  <line x1="12" y1="16" x2="12" y2="12"></line>
                  <line x1="12" y1="8" x2="12.01" y2="8"></line>
                </svg>
                <h3 style={{ fontSize: '17px', fontWeight: 800, color: '#081726', margin: 0 }}>
                  Quick Facts: {guide.title}
                </h3>
              </div>
              <ul className="quick-facts-list" style={{ marginTop: 0 }}>
                {guide.quickFacts.map((fact, idx) => (
                  <li
                    key={idx}
                    style={{
                      flexDirection: 'column',
                      gap: '2px',
                      borderBottom: idx < guide.quickFacts.length - 1 ? '1px solid #f1f5f9' : 'none',
                      paddingBottom: idx < guide.quickFacts.length - 1 ? '10px' : 0
                    }}
                  >
                    <span style={{ fontSize: '11.5px', fontWeight: 700, textTransform: 'uppercase', color: '#94a3b8' }}>
                      {fact.label}
                    </span>
                    <strong>{fact.value}</strong>
                  </li>
                ))}
              </ul>
            </div>

            <div className="sidebar-cta-box" style={{ background: '#070e1c', color: '#ffffff', borderColor: '#1e2c47' }}>
              <span style={{ fontSize: '11px', fontWeight: 800, letterSpacing: '0.12em', color: '#ffb900', textTransform: 'uppercase' }}>
                PRIVATE CHAUFFEUR VAN
              </span>
              <h4 style={{ fontSize: '20px', fontWeight: 800, color: '#ffffff', margin: '6px 0 8px' }}>
                Explore {guide.title} in Comfort
              </h4>
              <p style={{ fontSize: '13.5px', color: '#cbd5e1', lineHeight: 1.55, marginBottom: '18px' }}>
                Reserve a private air-conditioned Toyota KDH van with a licensed English-speaking chauffeur for your {guide.title} journey.
              </p>
              <button
                type="button"
                className="btn-primary"
                style={{ width: '100%' }}
                onClick={() => openBookingModal({ destination: guide.title })}
              >
                Book KDH Van to {guide.title} &rarr;
              </button>
            </div>
          </aside>
        </div>

        {/* Unified Top Places to See */}
        <AttractionsShowcase
          eyebrow={`${guide.title.toUpperCase()} HIGHLIGHTS`}
          title={`Top Places to See in ${guide.title}`}
          subtitle={`The must-visit landmarks, heritage sites, and scenic stops in and around ${guide.title}.`}
          items={guide.topPlaces}
          columns={3}
        />

        {/* Unified Executive Itinerary Timeline */}
        <ItineraryTimeline
          eyebrow="CURATED ROUTE"
          title={guide.itineraryTitle}
          subtitle={guide.itinerarySubtitle}
          steps={guide.itinerarySteps}
          routeSummary={guide.routeSummary}
          bookingDestination={guide.title}
          bookingService="Daily Hire"
        />

        <CtaBanner
          title={`Plan Your ${guide.title} Trip Today`}
          subtitle={`Experience ${guide.title} and Sri Lanka's scenic routes comfortably with a private Toyota KDH van and professional driver.`}
        />
      </div>
    </main>
  );
}
