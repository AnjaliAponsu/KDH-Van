import React from 'react';
import { Link } from 'react-router-dom';
import { useApp } from '../context/AppContext';
import PageHero from '../components/common/PageHero';
import SectionHeader from '../components/common/SectionHeader';
import CtaBanner from '../components/common/CtaBanner';
import { servicesData } from '../data/servicesData';

export default function ServicesPage() {
  const { openBookingModal } = useApp();

  return (
    <main className="services-page-main">
      <PageHero
        kicker="OUR SERVICES"
        title="Our Services"
        desc="Reliable and comfortable Toyota KDH / Hiace van hire services across Sri Lanka for airport transfers, tours, events, and business travel."
        bgImage="/assets/services/services-hero-bg.jpg"
        breadcrumbs={[{ label: 'Services' }]}
      />

      <section className="services-main-section" style={{ padding: '64px 0 80px' }}>
        <div className="container">
          <SectionHeader
            kicker="PREMIUM FLEET SERVICES"
            title="Comprehensive Islandwide Van Solutions"
            subtitle="From single airport runs to week-long luxury expeditions, our modern Toyota KDH fleet and certified drivers deliver unparalleled hospitality."
          />

          <div className="services-grid">
            {servicesData.map((svc) => (
              <div key={svc.id} className="service-card">
                <div className="service-card-media">
                  <img src={svc.image} alt={svc.title} loading="lazy" />
                  <span className="service-badge">{svc.title}</span>
                </div>
                <div className="service-card-body">
                  <h3 className="service-card-title">{svc.title}</h3>
                  <p className="service-card-desc">{svc.shortDesc}</p>
                  
                  <ul className="service-feature-checklist" style={{ margin: '14px 0 18px', padding: 0, listStyle: 'none' }}>
                    {svc.features.map((feat, fIdx) => (
                      <li key={fIdx} style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '13.5px', color: '#475569', marginBottom: '6px' }}>
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#16a34a" strokeWidth="2.8"><polyline points="20 6 9 17 4 12"></polyline></svg>
                        {feat}
                      </li>
                    ))}
                  </ul>

                  <div className="service-card-actions">
                    <Link to={`/services/${svc.slug}`} className="btn-service-learn">Learn More</Link>
                    <button 
                      type="button" 
                      className="btn-service-book"
                      onClick={() => openBookingModal({ service: svc.title })}
                    >
                      Book Now
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CtaBanner
        title="Need a Custom Van Hire Plan?"
        subtitle="Contact our travel specialists on WhatsApp for personalized routes, multi-van convoys, or corporate accounts."
      />
    </main>
  );
}

