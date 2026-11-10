import React from 'react';
import PageHero from '../components/common/PageHero';
import SectionHeader from '../components/common/SectionHeader';
import CtaBanner from '../components/common/CtaBanner';
import { useApp } from '../context/AppContext';

export default function GuideEllaPage() {
  const { openBookingModal } = useApp();

  const experiences = [
    { label: 'Ride the scenic train' },
    { label: 'Hike to panoramic views' },
    { label: 'Visit waterfalls' },
    { label: 'Explore tea plantations' },
    { label: 'Capture iconic landscapes' },
    { label: 'Enjoy local cafés' }
  ];

  const attractions = [
    {
      title: 'Nine Arch Bridge',
      desc: 'Ella\'s most iconic landmark, a stunning colonial-era bridge set amid lush greenery.',
      image: '/assets/home-page/dest-ella.jpg'
    },
    {
      title: 'Little Adam\'s Peak',
      desc: 'A popular and rewarding hike with spectacular views of Ella\'s hill country.',
      image: '/assets/guide/ella-adams-peak.jpg'
    },
    {
      title: 'Ravana Falls',
      desc: 'A beautiful cascade just a short drive from Ella, perfect for a refreshing stop.',
      image: '/assets/guide/ella-ravana-falls.jpg'
    }
  ];

  return (
    <main className="guide-ella-main">
      <PageHero
        kicker="EXPLORE SRI LANKA"
        title="Ella Travel Guide"
        desc="Discover Ella's stunning mountains, iconic landmarks, tea country charm and the best things to see, do and experience with KDH Van Hire."
        bgImage="/assets/guide/sigiriya-summit-aerial.jpg"
        breadcrumbs={[
          { label: 'Travel Guide', path: '/travel-guide' },
          { label: 'Ella' }
        ]}
      />

      <div className="guide-container">
        {/* Intro */}
        <section style={{ marginBottom: '48px' }}>
          <SectionHeader
            title="Ella Travel Guide"
            subtitle="Your complete guide to visiting Ella — top attractions, scenic spots, travel tips, itineraries and everything you need to plan a memorable trip with a comfortable KDH van and a professional driver."
          />
        </section>

        {/* Top Experiences 6-col */}
        <section style={{ marginBottom: '48px' }}>
          <SectionHeader
            title="Top Experiences"
            subtitle="The best things to see and do in Ella — from iconic landmarks to refreshing nature escapes."
          />

          <div className="ella-experiences-grid">
            {experiences.map((exp, idx) => (
              <div key={idx} className="ella-exp-card">
                <div className="ella-exp-icon">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#16a34a" strokeWidth="2.2"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/></svg>
                </div>
                <span className="ella-exp-label">{exp.label}</span>
              </div>
            ))}
          </div>
        </section>

        {/* Must-Visit Attractions */}
        <section style={{ marginBottom: '48px' }}>
          <SectionHeader
            title="Must-Visit Attractions"
            subtitle="Top places to explore in and around Ella."
          />

          <div className="service-cases-grid">
            {attractions.map((att, idx) => (
              <div key={idx} className="service-case-card">
                <div className="service-case-media">
                  <img src={att.image} alt={att.title} loading="lazy" />
                </div>
                <div className="service-case-body">
                  <h4 className="service-case-title">{att.title}</h4>
                  <p className="service-case-desc">{att.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* 3-Col Tips */}
        <section style={{ marginBottom: '48px' }}>
          <div className="south-mid-grid">
            <div className="service-feature-card">
              <h4 className="feature-card-title" style={{ borderBottom: '2px solid #ffb900', paddingBottom: '8px', marginBottom: '14px' }}>
                Best Scenic Stops
              </h4>
              <ul className="post-checklist" style={{ listStyle: 'none', padding: 0 }}>
                <li>Ella Rock (a scenic and rewarding hike)</li>
                <li>Demodara Loop (unique spiral railway)</li>
                <li>Upper Diyaluma / Diyaluma Falls (stunning views)</li>
                <li>Halpewatte Tea Factory (learn about Ceylon tea)</li>
                <li>Kithal Ella Viewpoint (a peaceful, lesser-known spot)</li>
              </ul>
            </div>

            <div className="service-feature-card">
              <h4 className="feature-card-title" style={{ borderBottom: '2px solid #ffb900', paddingBottom: '8px', marginBottom: '14px' }}>
                When to Visit
              </h4>
              <p style={{ fontSize: '13.5px', color: '#64748b', marginBottom: '10px' }}>
                Ella is beautiful year-round, but the best time is during the drier months:
              </p>
              <div className="month-badge peak" style={{ padding: '6px 12px', display: 'inline-block', marginBottom: '12px' }}>
                Best Time: Dec – Mar &amp; Jul – Sep
              </div>
              <ul className="post-checklist" style={{ listStyle: 'none', padding: 0 }}>
                <li>Pleasant, cooler weather</li>
                <li>Clearer views and great for hiking</li>
                <li>Ideal for outdoor activities and photography</li>
              </ul>
            </div>

            <div className="service-feature-card">
              <h4 className="feature-card-title" style={{ borderBottom: '2px solid #ffb900', paddingBottom: '8px', marginBottom: '14px' }}>
                Travel Advice
              </h4>
              <ul className="post-checklist" style={{ listStyle: 'none', padding: 0 }}>
                <li>Wear comfortable shoes for hikes.</li>
                <li>Carry a light jacket (it can get cool, especially evenings).</li>
                <li>Keep a camera or phone ready for scenic views.</li>
                <li>Start hikes early for the best weather and fewer crowds.</li>
                <li>Travel with a reliable van and driver for safe, flexible trips.</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Suggested Itinerary Timeline */}
        <section style={{ marginBottom: '56px' }}>
          <div className="ella-timeline-row">
            <div>
              <h4 style={{ fontSize: '20px', fontWeight: '800', color: '#081726', margin: '0 0 4px' }}>Suggested Itinerary: Ella Day Trip</h4>
              <p style={{ fontSize: '14.5px', color: '#64748b', margin: '0 0 16px' }}>A popular one-day itinerary to experience Ella's main highlights at a relaxed pace.</p>
              <div className="ella-steps-chain" style={{ display: 'flex', flexWrap: 'wrap', gap: '10px', alignItems: 'center' }}>
                <span className="step-tag">Start: Colombo / Kandy</span>
                <span>&rarr;</span>
                <span className="step-tag">Nine Arch Bridge</span>
                <span>&rarr;</span>
                <span className="step-tag">Little Adam's Peak</span>
                <span>&rarr;</span>
                <span className="step-tag">Ravana Falls</span>
                <span>&rarr;</span>
                <span className="step-tag">Tea Factory</span>
                <span>&rarr;</span>
                <span className="step-tag">Return (Evening)</span>
              </div>
            </div>
            <div style={{ textAlign: 'center', borderLeft: '1px solid #e2e8f0', paddingLeft: '20px' }}>
              <span style={{ fontSize: '12px', fontWeight: '800', color: '#64748b', textTransform: 'uppercase' }}>Route Distance</span>
              <p style={{ fontSize: '18px', fontWeight: '800', color: '#081726', margin: '4px 0 12px' }}>≈ 200 km (5-6 hrs)</p>
              <button 
                type="button" 
                className="btn-primary" 
                style={{ width: '100%', height: '42px', fontSize: '13.5px' }}
                onClick={() => openBookingModal({ destination: 'Ella' })}
              >
                Book Ella Trip
              </button>
            </div>
          </div>
        </section>

        <CtaBanner
          title="Plan Your Ella Trip Today"
          subtitle="Explore Ella's iconic attractions, scenic hikes and tea country beauty with a comfortable KDH van and a professional driver."
        />
      </div>
    </main>
  );
}

