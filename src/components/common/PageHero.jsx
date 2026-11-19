import React from 'react';
import { Link } from 'react-router-dom';

export default function PageHero({
  kicker,
  title,
  desc,
  bgImage,
  breadcrumbs = [],
  heroStyle = {}
}) {
  return (
    <section
      className="page-hero-unified services-hero-section"
      style={{
        backgroundImage: bgImage ? `url('${bgImage}')` : undefined,
        ...heroStyle
      }}
    >
      <div className="container hero-container">
        <div className="hero-content">
          {/* Eyebrow Kicker (Matches Contact Page) */}
          {kicker && <div className="contact-hero-eyebrow">{kicker}</div>}

          {/* Title */}
          <h1 className="services-hero-title">{title}</h1>

          {/* Description */}
          {desc && <p className="services-hero-desc">{desc}</p>}

          {/* Breadcrumbs (Bottom placement matching Contact Page) */}
          {breadcrumbs.length > 0 && (
            <nav className="services-breadcrumbs" aria-label="Breadcrumbs" style={{ marginTop: '14px' }}>
              <Link to="/">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path>
                  <polyline points="9 22 9 12 15 12 15 22"></polyline>
                </svg>
                Home
              </Link>
              {breadcrumbs.map((b, idx) => (
                <React.Fragment key={idx}>
                  <span className="breadcrumb-separator">›</span>
                  {b.path ? (
                    <Link to={b.path}>{b.label}</Link>
                  ) : (
                    <span className="breadcrumb-current">{b.label}</span>
                  )}
                </React.Fragment>
              ))}
            </nav>
          )}
        </div>
      </div>
    </section>
  );
}
