import React from 'react';
import { Link } from 'react-router-dom';
import { useApp } from '../context/AppContext';
import PageHero from '../components/common/PageHero';
import SectionHeader from '../components/common/SectionHeader';
import CtaBanner from '../components/common/CtaBanner';
import { servicesData } from '../data/servicesData';

const serviceIcons = {
  'airport-transfers': (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M17.8 19.2L16 11l3.5-3.5C21 6 21.5 4 21 3c-1-.5-3 0-4.5 1.5L13 8 4.8 6.2c-.5-.1-.9.1-1.1.5l-.3.5c-.2.5-.1 1 .3 1.3L9 12l-2 3H4l-1 1 3 2 2 3 1-1v-3l3-2 3.5 5.3c.3.4.8.5 1.3.3l.5-.3c.4-.2.6-.6.5-1.1z"></path>
    </svg>
  ),
  'point-to-point': (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M19 17h2c.6 0 1-.4 1-1v-3c0-.9-.7-1.7-1.5-1.9C18.7 10.6 16 10 16 10s-1.3-1.4-2.2-2.3c-.5-.4-1.1-.7-1.8-.7H5c-1.1 0-2 .9-2 2v7h2"></path>
      <circle cx="7" cy="17" r="2"></circle>
      <path d="M9 17h6"></path>
      <circle cx="17" cy="17" r="2"></circle>
    </svg>
  ),
  'daily-hire': (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
      <rect x="3" y="4" width="18" height="18" rx="3"></rect>
      <line x1="16" y1="2" x2="16" y2="6"></line>
      <line x1="8" y1="2" x2="8" y2="6"></line>
      <line x1="3" y1="10" x2="21" y2="10"></line>
    </svg>
  ),
  'multi-day-tours': (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M8 3l4 8 5-5 5 15H2L8 3z"></path>
      <path d="M4.14 15.08c2.62-1.57 5.24-1.43 7.86.42 2.74 1.94 5.49 2 8.23.19"></path>
    </svg>
  ),
  'events-weddings': (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
    </svg>
  ),
  'corporate-transport': (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
      <rect x="2" y="7" width="20" height="14" rx="2" ry="2"></rect>
      <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"></path>
    </svg>
  )
};

export default function ServicesPage() {
  const { openBookingModal } = useApp();

  const highlights = [
    { title: 'Reliable & Safe', desc: 'Well-maintained vehicles and verified tourist-board licensed drivers.' },
    { title: 'Comfortable Travel', desc: 'Spacious, dual air-conditioned Toyota KDH high-roof vans.' },
    { title: 'Transparent Pricing', desc: 'Fair and clear all-inclusive fare estimates with zero hidden charges.' },
    { title: 'Dedicated Support', desc: 'Quick 24/7 assistance via phone or WhatsApp before and during your trip.' }
  ];

  return (
    <main className="services-page-main">
      <PageHero
        kicker="OUR SERVICES"
        title="Our Services"
        desc="Reliable and comfortable Toyota KDH / Hiace van hire services across Sri Lanka for airport transfers, tours, events, and business travel."
        bgImage="/assets/services/services-hero-bg.jpg"
        breadcrumbs={[{ label: 'Services' }]}
      />

      <section className="services-main-section" style={{ padding: '64px 0 56px' }}>
        <div className="container">
          <SectionHeader
            kicker="PREMIUM FLEET SERVICES"
            title="Comprehensive Islandwide Van Solutions"
            subtitle="From single airport runs to week-long luxury expeditions, our modern Toyota KDH fleet and certified drivers deliver unparalleled hospitality."
          />

          <div className="services-cards-grid">
            {servicesData.map((svc) => (
              <article key={svc.id} className="service-card-item">
                <div className="service-card-thumbnail-box">
                  <img src={svc.image} alt={svc.title} className="service-card-thumbnail" loading="lazy" />
                  <div className="service-card-icon-badge" title={svc.title}>
                    {serviceIcons[svc.slug] || serviceIcons['airport-transfers']}
                  </div>
                </div>
                <div className="service-card-content">
                  <h3 className="service-card-header-title">{svc.title}</h3>
                  <p className="service-card-paragraph">{svc.shortDesc}</p>

                  {svc.features && (
                    <ul className="service-feature-checklist" style={{ margin: '0 0 18px', padding: 0, listStyle: 'none' }}>
                      {svc.features.map((feat, fIdx) => (
                        <li key={fIdx} style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '13px', color: '#475569', marginBottom: '6px' }}>
                          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#16a34a" strokeWidth="2.8" style={{ flexShrink: 0 }}>
                            <polyline points="20 6 9 17 4 12"></polyline>
                          </svg>
                          {feat}
                        </li>
                      ))}
                    </ul>
                  )}

                  <div className="service-card-buttons-row">
                    <button
                      type="button"
                      className="btn-card-book-now"
                      onClick={() => openBookingModal({ service: svc.title })}
                    >
                      Book Now &rarr;
                    </button>
                    <Link
                      to={svc.slug === 'airport-transfers' ? '/booking' : `/services/${svc.slug}`}
                      className="btn-card-learn-more"
                    >
                      Learn More
                    </Link>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Our Services */}
      <section className="why-choose-us-section" style={{ paddingTop: '20px', paddingBottom: '56px' }}>
        <div className="container">
          <SectionHeader
            title="Why Choose Our Services?"
            subtitle="Every journey is backed by our executive hospitality standards."
          />
          <div className="benefits-grid">
            {highlights.map((h, idx) => (
              <div key={idx} className="benefit-card">
                <div className="benefit-icon-circle">
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2">
                    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
                    <polyline points="9 12 11 14 15 10"></polyline>
                  </svg>
                </div>
                <h3 className="benefit-title">{h.title}</h3>
                <p className="benefit-desc">{h.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CtaBanner
        title="Need a Custom Travel Plan?"
        subtitle="Tell us your requirements and our team will create the best route and rate for you."
      />
    </main>
  );
}
