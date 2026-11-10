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
          {/* Breadcrumbs */}
          {breadcrumbs.length > 0 && (
            <nav className="guide-breadcrumbs" aria-label="Breadcrumb" style={{ marginBottom: '12px' }}>
              <Link to="/">
                <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2">
                  <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path>
                  <polyline points="9 22 9 12 15 12 15 22"></polyline>
                </svg>
                Home
              </Link>
              {breadcrumbs.map((b, idx) => (
                <React.Fragment key={idx}>
                  <span className="sep">&gt;</span>
                  {b.path ? <Link to={b.path}>{b.label}</Link> : <span className="current">{b.label}</span>}
                </React.Fragment>
              ))}
            </nav>
          )}

          {/* Badge Kicker */}
          {kicker && <div className="services-badge">{kicker}</div>}

          {/* Title */}
          <h1 className="services-hero-title">{title}</h1>

          {/* Description */}
          {desc && <p className="services-hero-desc">{desc}</p>}
        </div>
      </div>
    </section>
  );
}

