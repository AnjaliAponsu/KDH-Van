import React from 'react';
import { Link, useParams, Navigate } from 'react-router-dom';
import { ellaAttractionsData, ellaItinerarySteps, ellaRouteSummary } from '../data/ellaAttractionsData';
import SectionHeader from '../components/common/SectionHeader';
import ItineraryTimeline from '../components/common/ItineraryTimeline';
import CtaBanner from '../components/common/CtaBanner';
import { useApp } from '../context/AppContext';

export default function EllaAttractionDetailPage() {
  const { slug } = useParams();
  const { openBookingModal } = useApp();

  const attraction = ellaAttractionsData.find((a) => a.slug === slug);
  if (!attraction) {
    return <Navigate to="/travel-guide/ella" replace />;
  }

  const otherAttractions = ellaAttractionsData.filter((a) => a.slug !== attraction.slug);

  return (
    <main className="guide-ella-main post-page-body">
      {/* Hero Banner */}
      <section
        className="guide-hero"
        style={{ backgroundImage: `url('${attraction.heroImage}')` }}
      >
        <div className="guide-container">
          <div className="guide-hero-content">
            <div className="guide-hero-eyebrow">{attraction.eyebrow}</div>
            <h1 className="guide-hero-title">
              {attraction.title} <span className="highlight-gold">– Ella Guide</span>
            </h1>
            <p className="guide-hero-desc">{attraction.subtitle}</p>
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
              <Link to="/travel-guide/ella">Ella</Link>
              <span className="sep">&gt;</span>
              <span className="current">{attraction.title}</span>
            </nav>
          </div>
        </div>
      </section>

      <div className="guide-container">
        {/* Back Link */}
        <div style={{ marginBottom: '20px' }}>
          <Link
            to="/travel-guide/ella"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '8px',
              fontSize: '14px',
              fontWeight: 700,
              color: '#0b1f36'
            }}
          >
            &larr; Back to Ella Travel Guide
          </Link>
        </div>

        {/* Main 2-Column Article + Sidebar */}
        <div className="article-main-grid" style={{ marginTop: '12px', marginBottom: '56px' }}>
          {/* Left Content Column */}
          <div className="article-left-col">
            <div className="post-featured-media">
              <img src={attraction.featuredImage} alt={attraction.title} loading="lazy" />
            </div>

            <section className="post-section" style={{ marginBottom: '32px' }}>
              <h2 className="post-section-title" style={{ fontSize: '26px', marginBottom: '12px' }}>
                About {attraction.title}
              </h2>
              {attraction.overview.map((paragraph, idx) => (
                <p
                  key={idx}
                  style={{
                    fontSize: '15.5px',
                    lineHeight: 1.75,
                    color: '#475569',
                    marginBottom: '14px'
                  }}
                >
                  {paragraph}
                </p>
              ))}
            </section>

            <section className="post-section" style={{ marginBottom: '32px' }}>
              <h3 className="post-section-title" style={{ fontSize: '22px', marginBottom: '14px' }}>
                Top Highlights &amp; Experiences
              </h3>
              <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '12px' }}>
                {attraction.highlights.map((item, idx) => (
                  <li
                    key={idx}
                    style={{
                      display: 'flex',
                      alignItems: 'flex-start',
                      gap: '10px',
                      fontSize: '15px',
                      lineHeight: 1.6,
                      color: '#334155',
                      background: '#ffffff',
                      border: '1px solid #e2e8f0',
                      borderRadius: '10px',
                      padding: '12px 16px'
                    }}
                  >
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#16a34a" strokeWidth="2.6" style={{ flexShrink: 0, marginTop: '3px' }}>
                      <polyline points="20 6 9 17 4 12"></polyline>
                    </svg>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </section>

            <section className="post-section" style={{ marginBottom: '32px' }}>
              <h3 className="post-section-title" style={{ fontSize: '22px', marginBottom: '14px' }}>
                Essential Visitor Tips
              </h3>
              <div style={{ background: '#fffbeb', border: '1px solid #fde68a', borderRadius: '14px', padding: '22px 24px' }}>
                <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '12px' }}>
                  {attraction.tips.map((tip, idx) => (
                    <li
                      key={idx}
                      style={{
                        display: 'flex',
                        alignItems: 'flex-start',
                        gap: '10px',
                        fontSize: '14.5px',
                        lineHeight: 1.6,
                        color: '#78350f'
                      }}
                    >
                      <span style={{ color: '#d97706', fontWeight: 800 }}>&bull;</span>
                      <span>{tip}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </section>

            <section className="post-section">
              <div style={{ background: '#f8fafc', border: '1px solid #e2e8f0', borderRadius: '14px', padding: '22px 24px' }}>
                <h3 style={{ fontSize: '18px', fontWeight: 800, color: '#081726', marginBottom: '8px' }}>
                  Visiting {attraction.title} with KDH Van Hire
                </h3>
                <p style={{ fontSize: '14.5px', lineHeight: 1.65, color: '#475569', margin: 0 }}>
                  {attraction.kdhAdvantage}
                </p>
              </div>
            </section>
          </div>

          {/* Right Sidebar */}
          <aside className="article-sidebar">
            <div className="quick-facts-card">
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '14px', paddingBottom: '12px', borderBottom: '1px solid #f1f5f9' }}>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#ffb900" strokeWidth="2.3">
                  <circle cx="12" cy="12" r="10"></circle>
                  <line x1="12" y1="16" x2="12" y2="12"></line>
                  <line x1="12" y1="8" x2="12.01" y2="8"></line>
                </svg>
                <h3 style={{ fontSize: '17px', fontWeight: 800, color: '#081726', margin: 0 }}>
                  Quick Facts
                </h3>
              </div>
              <ul className="quick-facts-list" style={{ marginTop: 0 }}>
                <li style={{ flexDirection: 'column', gap: '2px', borderBottom: '1px solid #f1f5f9', paddingBottom: '10px' }}>
                  <span style={{ fontSize: '11.5px', fontWeight: 700, textTransform: 'uppercase', color: '#94a3b8' }}>Location</span>
                  <strong>{attraction.location}</strong>
                </li>
                <li style={{ flexDirection: 'column', gap: '2px', borderBottom: '1px solid #f1f5f9', paddingBottom: '10px' }}>
                  <span style={{ fontSize: '11.5px', fontWeight: 700, textTransform: 'uppercase', color: '#94a3b8' }}>From Ella Town</span>
                  <strong>{attraction.distanceFromElla}</strong>
                </li>
                <li style={{ flexDirection: 'column', gap: '2px', borderBottom: '1px solid #f1f5f9', paddingBottom: '10px' }}>
                  <span style={{ fontSize: '11.5px', fontWeight: 700, textTransform: 'uppercase', color: '#94a3b8' }}>Entry Fee</span>
                  <strong style={{ color: '#16a34a' }}>{attraction.entryFee}</strong>
                </li>
                <li style={{ flexDirection: 'column', gap: '2px', borderBottom: '1px solid #f1f5f9', paddingBottom: '10px' }}>
                  <span style={{ fontSize: '11.5px', fontWeight: 700, textTransform: 'uppercase', color: '#94a3b8' }}>Best Time to Visit</span>
                  <strong>{attraction.bestTime}</strong>
                </li>
                <li style={{ flexDirection: 'column', gap: '2px' }}>
                  <span style={{ fontSize: '11.5px', fontWeight: 700, textTransform: 'uppercase', color: '#94a3b8' }}>Suggested Duration</span>
                  <strong>{attraction.suggestedDuration}</strong>
                </li>
              </ul>
            </div>

            <div className="sidebar-cta-box" style={{ background: '#070e1c', color: '#ffffff', borderColor: '#1e2c47' }}>
              <span style={{ fontSize: '11px', fontWeight: 800, letterSpacing: '0.12em', color: '#ffb900', textTransform: 'uppercase' }}>
                PRIVATE CHAUFFEUR VAN
              </span>
              <h4 style={{ fontSize: '20px', fontWeight: 800, color: '#ffffff', margin: '6px 0 8px' }}>
                Visit {attraction.title} in Comfort
              </h4>
              <p style={{ fontSize: '13.5px', color: '#cbd5e1', lineHeight: 1.55, marginBottom: '18px' }}>
                Book a private air-conditioned Toyota KDH van with an experienced local driver for a custom Ella day trip or multi-day hill country tour.
              </p>
              <button
                type="button"
                className="btn-primary"
                style={{ width: '100%' }}
                onClick={() => openBookingModal({ destination: `${attraction.title}, Ella` })}
              >
                Book KDH Van to {attraction.title} &rarr;
              </button>
            </div>
          </aside>
        </div>

        {/* More Must-Visit Attractions in Ella */}
        <section style={{ marginBottom: '56px' }}>
          <SectionHeader
            kicker="CONTINUE EXPLORING ELLA"
            title="More Must-Visit Attractions in Ella"
            subtitle="Combine all three iconic highlights effortlessly in one private KDH van day tour."
          />

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '24px', maxWidth: '860px', margin: '0 auto' }}>
            {otherAttractions.map((item) => (
              <Link
                key={item.slug}
                to={`/travel-guide/ella/${item.slug}`}
                className="destination-card"
              >
                <div className="destination-card-img-wrap">
                  <img src={item.featuredImage} alt={item.title} className="destination-card-img" loading="lazy" />
                  <span className="destination-tag-badge">Ella Highlight</span>
                </div>
                <div className="destination-card-body">
                  <div className="destination-card-title-row">
                    <h4 className="destination-card-title">{item.title}</h4>
                    <span className="destination-card-arrow">&rarr;</span>
                  </div>
                  <p className="destination-card-desc">{item.subtitle}</p>
                </div>
              </Link>
            ))}
          </div>
        </section>

        {/* Executive Suggested Itinerary: Ella Day Trip */}
        <ItineraryTimeline
          eyebrow="CURATED DAY TRIP"
          title="Suggested Itinerary: Ella Day Trip"
          subtitle={`See how ${attraction.title} fits seamlessly into our private full-day Ella KDH van tour.`}
          steps={ellaItinerarySteps}
          routeSummary={ellaRouteSummary}
          bookingDestination={`${attraction.title}, Ella`}
          bookingService="Daily Hire"
          activeSlug={attraction.slug}
        />

        {/* Pre-Footer CTA */}
        <CtaBanner
          title={`Plan Your Trip to ${attraction.title}`}
          subtitle="Enjoy stress-free door-to-door transport across Ella and Sri Lanka's Hill Country in a luxury Toyota KDH van."
        />
      </div>
    </main>
  );
}
