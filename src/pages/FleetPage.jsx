import React from 'react';
import PageHero from '../components/common/PageHero';
import SectionHeader from '../components/common/SectionHeader';
import CtaBanner from '../components/common/CtaBanner';
import { useApp } from '../context/AppContext';

export default function FleetPage() {
  const { openBookingModal } = useApp();

  const gallery = [
    { title: 'Pristine White Exterior', image: '/assets/fleet/fleet-gallery-1.jpg' },
    { title: 'Executive Cabin Layout', image: '/assets/fleet/fleet-gallery-2.jpg' },
    { title: 'Generous Luggage Cargo Boot', image: '/assets/fleet/fleet-gallery-3.jpg' },
    { title: 'Roof Climate Control', image: '/assets/fleet/fleet-gallery-4.jpg' }
  ];

  const features = [
    { title: 'Dual Air Conditioning', desc: 'Powerful front and roof-ducted cooling to keep you comfortable in tropical weather.' },
    { title: 'Reclining Luxury Seats', desc: 'Plush high-back seats with armrests and ample legroom for relaxed long-distance travel.' },
    { title: 'Spacious Luggage Boot', desc: 'Room for 8–10 large suitcases without compromising passenger legroom.' },
    { title: 'Tinted UV Windows & Curtains', desc: 'Privacy glass and retractable curtains for a cool and tranquil journey.' },
    { title: 'USB Charging Ports', desc: 'Charge your smartphones and cameras on the go during day trips and island tours.' },
    { title: 'Safety & ABS Braking', desc: 'Dual airbags, anti-lock brakes, seatbelts for all passengers, and emergency kit.' }
  ];

  return (
    <main className="fleet-page-main">
      <PageHero
        kicker="OUR FLEET"
        title="Our Fleet"
        desc="Explore our well-maintained Toyota KDH passenger and high-roof vans, designed for maximum comfort, safety and reliability across Sri Lanka."
        bgImage="/assets/fleet/fleet-hero-bg.jpg"
        breadcrumbs={[{ label: 'Our Fleet' }]}
      />

      <section className="fleet-showcase-section" style={{ padding: '64px 0 80px' }}>
        <div className="container">
          <SectionHeader
            kicker="SIGNATURE VEHICLES"
            title="Toyota KDH Passenger Van"
            subtitle="The gold standard for tourist and corporate transport in Sri Lanka, offering superior suspension, spacious seating, and pristine interiors."
          />

          {/* Gallery Grid */}
          <div className="services-grid" style={{ marginBottom: '56px' }}>
            {gallery.map((g, idx) => (
              <div key={idx} className="service-card">
                <div className="service-card-media" style={{ height: '220px' }}>
                  <img src={g.image} alt={g.title} loading="lazy" />
                </div>
                <div className="service-card-body" style={{ padding: '16px 20px' }}>
                  <h4 style={{ fontSize: '18px', fontWeight: '800', color: '#081726', margin: 0 }}>{g.title}</h4>
                </div>
              </div>
            ))}
          </div>

          {/* Features Grid */}
          <SectionHeader
            title="Vehicle Features &amp; Amenities"
            subtitle="Everything you need for an effortless journey through Sri Lanka's cities, coastlines, and misty mountains."
          />

          <div className="services-cards-grid" style={{ marginBottom: '60px' }}>
            {features.map((f, idx) => (
              <div key={idx} className="service-feature-card">
                <div className="feature-card-icon">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#ffb900" strokeWidth="2.2">
                    <circle cx="12" cy="12" r="10"></circle>
                    <polyline points="12 6 12 12 14 14"></polyline>
                  </svg>
                </div>
                <h4 className="feature-card-title">{f.title}</h4>
                <p className="feature-card-desc">{f.desc}</p>
              </div>
            ))}
          </div>

          <CtaBanner
            title="Need a Van for Your Next Trip?"
            subtitle="Experience the comfort of our Toyota KDH vans with a dedicated professional driver."
          />
        </div>
      </section>
    </main>
  );
}

