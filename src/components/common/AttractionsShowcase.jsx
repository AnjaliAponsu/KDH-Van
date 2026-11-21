import React from 'react';
import { Link } from 'react-router-dom';
import SectionHeader from './SectionHeader';
import { useApp } from '../../context/AppContext';

export default function AttractionsShowcase({
  eyebrow = 'TOP PLACES TO SEE',
  title = 'Top Places to See',
  subtitle,
  items = [],
  columns = 3,
  compact = false
}) {
  const { openBookingModal } = useApp();

  const gridClass =
    columns === 4
      ? 'exec-places-grid cols-4'
      : columns === 2
      ? 'exec-places-grid cols-2'
      : 'exec-places-grid cols-3';

  return (
    <section className={`exec-places-section ${compact ? 'is-compact' : ''}`}>
      <SectionHeader kicker={eyebrow} title={title} subtitle={subtitle} />

      <div className={gridClass}>
        {items.map((item, idx) => {
          const indexBadge = String(idx + 1).padStart(2, '0');

          const cardInner = (
            <>
              <div className="exec-place-media">
                <img src={item.image} alt={item.title} loading="lazy" />
                <div className="exec-place-media-scrim" aria-hidden="true" />
                {item.tag && <span className="exec-place-tag">{item.tag}</span>}
                <span className="exec-place-index">{item.meta || indexBadge}</span>
              </div>

              <div className="exec-place-body">
                {item.location && (
                  <div className="exec-place-location">
                    <svg width="13" height="13" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" />
                    </svg>
                    <span>{item.location}</span>
                  </div>
                )}

                <h3 className="exec-place-title">{item.title}</h3>
                <p className="exec-place-desc">{item.desc}</p>

                <div className="exec-place-footer">
                  <span className="exec-place-cta-label">
                    {item.link ? 'Explore Guide' : item.ctaLabel || 'Book KDH Visit'}
                  </span>
                  <span className="exec-place-arrow" aria-hidden="true">
                    <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round">
                      <line x1="5" y1="12" x2="19" y2="12"></line>
                      <polyline points="12 5 19 12 12 19"></polyline>
                    </svg>
                  </span>
                </div>
              </div>
            </>
          );

          if (item.link) {
            return (
              <Link key={idx} to={item.link} className="exec-place-card">
                {cardInner}
              </Link>
            );
          }

          return (
            <button
              key={idx}
              type="button"
              className="exec-place-card exec-place-card-btn"
              onClick={() =>
                openBookingModal({
                  destination: item.bookingDestination || item.title,
                  service: item.bookingService || 'Multi-Day Tour'
                })
              }
            >
              {cardInner}
            </button>
          );
        })}
      </div>
    </section>
  );
}
