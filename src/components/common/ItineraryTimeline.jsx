import React from 'react';
import { Link } from 'react-router-dom';
import SectionHeader from './SectionHeader';
import { useApp } from '../../context/AppContext';

export default function ItineraryTimeline({
  eyebrow = 'CURATED ROUTE',
  title,
  subtitle,
  steps = [],
  routeSummary = {},
  bookingDestination = 'Sri Lanka',
  bookingService = 'Multi-Day Tour',
  activeSlug = null
}) {
  const { openBookingModal } = useApp();

  const {
    routeLabel = 'Colombo → Destination',
    distance = '≈ 200 km',
    driveTime = '4 – 5 hrs',
    vehicle = 'Toyota KDH 223',
    bestDeparture = '06:00 AM Pickup',
    inclusions = [
      'Private AC Toyota KDH & English-speaking chauffeur',
      'Fuel, expressway tolls & parking included',
      '100% flexible photo & dining stops at your pace'
    ]
  } = routeSummary;

  const waUrl = `https://wa.me/94771234567?text=${encodeURIComponent(
    `Hi KDH Van Hire, I would like to customize the "${title}" itinerary (${routeLabel}).`
  )}`;

  return (
    <section className="exec-itinerary-section">
      <SectionHeader kicker={eyebrow} title={title} subtitle={subtitle} />

      <div className="exec-itinerary-grid">
        {/* Left: Executive Vertical Timeline */}
        <div className="exec-timeline-panel">
          <div className="exec-timeline-track">
            {steps.map((step, idx) => {
              const stepNum = String(idx + 1).padStart(2, '0');
              const isHighlighted = activeSlug && step.slug === activeSlug;

              const inner = (
                <>
                  <div className={`exec-step-node ${isHighlighted ? 'is-current' : ''}`}>
                    {stepNum}
                  </div>

                  <div className={`exec-step-card ${step.link ? 'is-clickable' : ''} ${isHighlighted ? 'is-current' : ''}`}>
                    {step.img && (
                      <div className="exec-step-thumb">
                        <img src={step.img} alt={step.title} loading="lazy" />
                      </div>
                    )}
                    <div className="exec-step-body">
                      <div className="exec-step-meta">
                        {step.time && <span className="exec-step-time">{step.time}</span>}
                        {step.duration && <span className="exec-step-duration">{step.duration}</span>}
                        {isHighlighted && <span className="exec-step-current-tag">Viewing Now</span>}
                      </div>
                      <h4 className="exec-step-title">{step.title}</h4>
                      {step.desc && <p className="exec-step-desc">{step.desc}</p>}
                    </div>
                    {step.link && (
                      <span className="exec-step-arrow" aria-hidden="true">
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round">
                          <line x1="5" y1="12" x2="19" y2="12"></line>
                          <polyline points="12 5 19 12 12 19"></polyline>
                        </svg>
                      </span>
                    )}
                  </div>
                </>
              );

              return (
                <div key={idx} className="exec-timeline-row">
                  {step.link ? (
                    <Link to={step.link} className="exec-timeline-link">
                      {inner}
                    </Link>
                  ) : (
                    <div className="exec-timeline-link">{inner}</div>
                  )}
                </div>
              );
            })}
          </div>
        </div>

        {/* Right: Executive Dark Navy Route Dossier */}
        <aside className="exec-route-dossier">
          <div className="exec-dossier-kicker">
            <span className="exec-dossier-dot"></span>
            PRIVATE CHAUFFEUR BRIEF
          </div>

          <h3 className="exec-dossier-route">{routeLabel}</h3>
          <p className="exec-dossier-note">
            Seamless door-to-door highway and hill-country transfer in a climate-controlled Toyota KDH with your dedicated chauffeur.
          </p>

          <div className="exec-dossier-metrics">
            <div className="exec-metric-tile">
              <span className="exec-metric-label">Distance</span>
              <strong className="exec-metric-val">{distance}</strong>
            </div>
            <div className="exec-metric-tile">
              <span className="exec-metric-label">Drive Time</span>
              <strong className="exec-metric-val">{driveTime}</strong>
            </div>
            <div className="exec-metric-tile">
              <span className="exec-metric-label">Departure</span>
              <strong className="exec-metric-val">{bestDeparture}</strong>
            </div>
            <div className="exec-metric-tile">
              <span className="exec-metric-label">Vehicle</span>
              <strong className="exec-metric-val">{vehicle}</strong>
            </div>
          </div>

          <ul className="exec-dossier-inclusions">
            {inclusions.map((inc, idx) => (
              <li key={idx}>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#ffb900" strokeWidth="2.6" strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="20 6 9 17 4 12"></polyline>
                </svg>
                <span>{inc}</span>
              </li>
            ))}
          </ul>

          <div className="exec-dossier-actions">
            <button
              type="button"
              className="btn-primary exec-dossier-btn"
              onClick={() =>
                openBookingModal({
                  service: bookingService,
                  destination: bookingDestination
                })
              }
            >
              Reserve This Itinerary &rarr;
            </button>
            <a
              href={waUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="exec-dossier-wa-link"
            >
              Customize Route on WhatsApp
            </a>
          </div>
        </aside>
      </div>
    </section>
  );
}
