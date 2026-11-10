import React from 'react';
import PageHero from '../components/common/PageHero';
import SectionHeader from '../components/common/SectionHeader';
import CtaBanner from '../components/common/CtaBanner';

export default function AboutPage() {
  const values = [
    {
      title: 'Safety First',
      desc: 'Well-maintained vehicles and verified drivers.'
    },
    {
      title: 'Customer Focus',
      desc: 'Friendly service and personalized support.'
    },
    {
      title: 'Reliability',
      desc: 'On-time service you can count on.'
    },
    {
      title: 'Local Expertise',
      desc: 'Experienced drivers who know Sri Lanka well.'
    }
  ];

  const stats = [
    { number: '500+', label: 'Trips Completed' },
    { number: '1000+', label: 'Happy Travellers' },
    { number: '20+', label: 'Popular Destinations' },
    { number: '4.9/5', label: 'Customer Rating' }
  ];

  return (
    <main className="about-page-main">
      <PageHero
        kicker="ABOUT US"
        title="About Our Company"
        desc="A trusted KDH van hire service in Sri Lanka, committed to safe, comfortable and reliable travel experiences."
        bgImage="/assets/about/about-hero-bg.jpg"
        breadcrumbs={[{ label: 'About Us' }]}
      />

      <div className="about-main-wrapper" style={{ padding: '60px 0 80px' }}>
        <div className="container">
          {/* Section 1: Our Story */}
          <section className="about-story-section" style={{ marginBottom: '70px' }}>
            <div className="about-story-grid">
              <div className="about-story-media">
                <img src="/assets/about/about-story-van.jpg" alt="KDH Van on coastal road" style={{ width: '100%', borderRadius: '16px', boxShadow: '0 8px 24px rgba(0,0,0,0.08)' }} loading="lazy" />
              </div>
              <div className="about-story-content">
                <div className="features-badge" style={{ marginBottom: '8px' }}>OUR STORY</div>
                <h2 className="about-section-title">Your Trusted Travel Partner Across Sri Lanka</h2>
                <p style={{ fontSize: '15.5px', color: '#475569', lineHeight: '1.7', marginBottom: '16px' }}>
                  KDH Van Hire Sri Lanka was started with a simple goal — to provide reliable, comfortable and hassle-free transportation for locals and travellers across Sri Lanka. With our well-maintained Toyota KDH vans and professional drivers, we make your airport transfers, family trips, business travel and island tours smooth and enjoyable.
                </p>
                <p style={{ fontSize: '15.5px', color: '#475569', lineHeight: '1.7' }}>
                  Today, we serve clients from around the world and are growing into a trusted network with selected partner vehicle owners, ensuring availability and quality service at all times.
                </p>
              </div>
            </div>
          </section>

          {/* Section 2: Our Values */}
          <section className="about-values-section" style={{ marginBottom: '70px' }}>
            <SectionHeader
              title="Our Values"
              subtitle="The guiding principles behind every kilometer we drive."
            />

            <div className="service-overview-grid">
              {values.map((val, idx) => (
                <div key={idx} className="value-card">
                  <div className="value-card-icon" style={{ color: '#ffb900', marginRight: '12px' }}>
                    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path></svg>
                  </div>
                  <div>
                    <h4 className="value-card-title">{val.title}</h4>
                    <p className="value-card-desc" style={{ fontSize: '14px', color: '#64748b', margin: 0 }}>{val.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Section 3: Why Travel With Us */}
          <section className="about-why-section" style={{ marginBottom: '70px' }}>
            <div className="about-why-grid">
              <div className="about-why-content">
                <div className="features-badge" style={{ marginBottom: '8px' }}>WHY TRAVEL WITH US</div>
                <h2 className="about-section-title">More Than Just a Van Hire</h2>
                <p style={{ fontSize: '15.5px', color: '#475569', lineHeight: '1.7', marginBottom: '18px' }}>
                  We combine comfort, safety and local knowledge to give you a better travel experience — whether it's a short airport transfer or a multi-day tour across the island.
                </p>
                <ul className="post-checklist" style={{ listStyle: 'none', padding: 0 }}>
                  <li style={{ display: 'flex', alignItems: 'center', gap: '10px', fontSize: '15px', color: '#1e293b', marginBottom: '12px' }}>
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#16a34a" strokeWidth="2.8"><polyline points="20 6 9 17 4 12"></polyline></svg>
                    <strong>Clean and air-conditioned</strong> &nbsp;KDH vans
                  </li>
                  <li style={{ display: 'flex', alignItems: 'center', gap: '10px', fontSize: '15px', color: '#1e293b', marginBottom: '12px' }}>
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#16a34a" strokeWidth="2.8"><polyline points="20 6 9 17 4 12"></polyline></svg>
                    <strong>Professional</strong> &nbsp;and courteous drivers
                  </li>
                  <li style={{ display: 'flex', alignItems: 'center', gap: '10px', fontSize: '15px', color: '#1e293b', marginBottom: '12px' }}>
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#16a34a" strokeWidth="2.8"><polyline points="20 6 9 17 4 12"></polyline></svg>
                    <strong>Flexible</strong> &nbsp;travel options and transparent pricing
                  </li>
                  <li style={{ display: 'flex', alignItems: 'center', gap: '10px', fontSize: '15px', color: '#1e293b', marginBottom: '12px' }}>
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#16a34a" strokeWidth="2.8"><polyline points="20 6 9 17 4 12"></polyline></svg>
                    <strong>Support</strong> &nbsp;before, during and after your trip
                  </li>
                </ul>
              </div>
              <div className="about-why-media">
                <img src="/assets/about/about-interior-seats.jpg" alt="KDH Van Leather Seats" style={{ width: '100%', borderRadius: '16px', boxShadow: '0 8px 24px rgba(0,0,0,0.08)' }} loading="lazy" />
              </div>
            </div>
          </section>

          {/* Section 4: Stats Strip */}
          <section className="about-stats-strip">
            {stats.map((s, idx) => (
              <div key={idx} className="stat-item" style={{ textAlign: 'center' }}>
                <span className="stat-number" style={{ fontSize: '36px', fontWeight: '800', color: '#081726', display: 'block' }}>{s.number}</span>
                <span className="stat-label" style={{ fontSize: '14.5px', color: '#64748b', fontWeight: '600' }}>{s.label}</span>
              </div>
            ))}
          </section>

          {/* Section 5: CTA */}
          <CtaBanner
            title="Plan Your Next Journey With Us"
            subtitle="Experience a comfortable and reliable KDH van hire service in Sri Lanka."
          />
        </div>
      </div>
    </main>
  );
}

