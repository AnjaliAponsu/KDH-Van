import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { servicesData } from '../data/servicesData';
import PageHero from '../components/common/PageHero';
import SectionHeader from '../components/common/SectionHeader';
import CtaBanner from '../components/common/CtaBanner';
import { useApp } from '../context/AppContext';

export default function ServiceDetailPage({ forcedSlug }) {
  const { slug } = useParams();
  const currentSlug = forcedSlug || slug || 'corporate-transport';
  const { openBookingModal } = useApp();

  const service = servicesData.find(s => s.slug === currentSlug) || servicesData[1];

  return (
    <main className="service-detail-page-main">
      <PageHero
        kicker="OUR SERVICES"
        title={service.title}
        desc={service.shortDesc}
        bgImage={service.heroBg}
        breadcrumbs={[
          { label: 'Services', path: '/services' },
          { label: service.title }
        ]}
      />

      <div className="guide-container">
        {/* 1. Service Overview Section */}
        {service.overview && (
          <section className="service-overview-section" style={{ marginBottom: '52px' }}>
            <SectionHeader
              title={`${service.title} Service Overview`}
              subtitle={`A comprehensive look at our verified fleet, trained chauffeurs, and customized support for ${service.title.toLowerCase()}.`}
            />

            <div className="service-overview-grid">
              {service.overview.map((item, idx) => (
                <div key={idx} className="service-feature-card">
                  <div className="feature-card-icon">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#ffb900" strokeWidth="2.2">
                      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
                    </svg>
                  </div>
                  <h4 className="feature-card-title">{item.title}</h4>
                  <p className="feature-card-desc">{item.desc}</p>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* 2. What's Included */}
        {service.included && (
          <section className="whats-included-section" style={{ marginBottom: '52px' }}>
            <h3 className="whats-included-title-centered">
              <span>What's Included</span>
            </h3>

            <div className="whats-included-grid">
              {service.included.map((item, idx) => (
                <div key={idx} className="included-item">
                  <div className="included-item-icon">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#b45309" strokeWidth="2.2">
                      <circle cx="12" cy="12" r="10"></circle>
                      <polyline points="12 6 12 12 14 14"></polyline>
                    </svg>
                  </div>
                  <span className="included-item-label">{item.label}</span>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* 3. How It Works */}
        {service.howItWorks && (
          <section className="how-it-works-section-guide" style={{ marginBottom: '52px' }}>
            <SectionHeader
              title="How It Works"
              subtitle="Simple 3-step process to arrange your transportation."
            />

            <div className="how-it-works-grid">
              {service.howItWorks.map((step, idx) => (
                <div key={idx} className="how-step-card">
                  <div className="how-step-num">{step.num}</div>
                  <div className="how-step-body">
                    <h4 className="how-step-title">{step.title}</h4>
                    <p className="how-step-desc">{step.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* 4. Use Cases or Itineraries */}
        {service.useCases && (
          <section className="service-cases-section" style={{ marginBottom: '60px' }}>
            <SectionHeader
              title={service.slug === 'multi-day-tours' ? 'Sample Multi-Day Itineraries' : `${service.title} Use Cases`}
              subtitle={service.slug === 'multi-day-tours' ? 'Get inspired by our popular multi-day tour routes across Sri Lanka.' : 'Frequently requested booking configurations.'}
            />

            <div className="service-cases-grid">
              {service.useCases.map((uc, idx) => (
                <div key={idx} className="service-case-card">
                  <div className="service-case-media">
                    <img src={uc.image} alt={uc.title} loading="lazy" />
                  </div>
                  <div className="service-case-body">
                    <h4 className="service-case-title">{uc.title}</h4>
                    <p className="service-case-desc">{uc.desc}</p>
                    <div style={{ marginTop: 'auto', paddingTop: '12px' }}>
                      <button 
                        type="button" 
                        className="btn-primary" 
                        style={{ width: '100%', height: '44px', fontSize: '14px' }}
                        onClick={() => openBookingModal({ service: service.title, destination: uc.title })}
                      >
                        Book This Route
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* 5. Pre-Footer Callout */}
        <CtaBanner
          title={`Arrange Your ${service.title} Today`}
          subtitle="A dependable private transport partner for businesses, travelers and families across Sri Lanka."
          bookBtnText="Book Now"
        />
      </div>
    </main>
  );
}

