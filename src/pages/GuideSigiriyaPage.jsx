import React from 'react';
import { Link } from 'react-router-dom';
import PageHero from '../components/common/PageHero';
import CtaBanner from '../components/common/CtaBanner';
import { useApp } from '../context/AppContext';

export default function GuideSigiriyaPage() {
  const { openBookingModal } = useApp();

  return (
    <main className="guide-sigiriya-main post-page-body">
      <section className="guide-hero" style={{ backgroundImage: "url('/assets/guide/sigiriya-hero.jpg')" }}>
        <div className="guide-container">
          <div className="guide-hero-content">
            <div className="guide-hero-eyebrow">EXPLORE SRI LANKA</div>
            <h1 className="guide-hero-title">Sigiriya <span className="highlight-gold">Travel Guide</span></h1>
            <p className="guide-hero-desc">A complete guide to visiting Sri Lanka's iconic Sigiriya Rock Fortress &mdash; history, highlights, travel tips and more.</p>
            <nav className="guide-breadcrumbs" aria-label="Breadcrumbs">
              <Link to="/">
                <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2">
                  <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path>
                  <polyline points="9 22 9 12 15 12 15 22"></polyline>
                </svg>
                Home
              </Link>
              <span className="sep">&gt;</span>
              <Link to="/travel-guide.html">Destinations</Link>
              <span className="sep">&gt;</span>
              <span className="current">Sigiriya Travel Guide</span>
            </nav>
          </div>
        </div>
      </section>

      <div className="guide-container">
        <div className="article-main-grid">
          {/* Main Article Content */}
          <div className="article-left-col">
            <h2 className="post-article-title">Sigiriya Travel Guide</h2>
            <p className="post-lead-text">
              Discover the majestic Sigiriya Rock Fortress, a UNESCO World Heritage Site and one of Sri Lanka's most iconic landmarks.
            </p>

            <div className="post-meta-strip">
              <span>By KDH Travel Team</span>
              <span>•</span>
              <span>Updated 2025</span>
              <span>•</span>
              <span>Sigiriya, Matale District</span>
            </div>

            <div className="post-featured-media">
              <img src="/assets/home-page/dest-sigiriya.jpg" alt="Sigiriya Rock Fortress" loading="lazy" />
            </div>

            <section className="post-section">
              <h3 className="post-section-title">Overview</h3>
              <p>
                Sigiriya, also known as the Lion Rock, is an ancient rock fortress and royal palace built in the 5th century by King Kashyapa. Famous for its dramatic rock summit, stunning frescoes, and remarkable engineering, Sigiriya combines history, culture and breathtaking views, making it a must-visit destination in Sri Lanka.
              </p>
            </section>

            <section className="post-section">
              <h3 className="post-section-title">Why Visit Sigiriya</h3>
              <ul className="post-checklist">
                <li>Explore a UNESCO World Heritage Site with over 1,500 years of history.</li>
                <li>Climb the iconic rock for panoramic 360-degree views of the lush jungle.</li>
                <li>See the famous, well-preserved Sigiriya frescoes dating back to ancient royalty.</li>
                <li>Discover the ruins of an ancient royal palace and landscaped water gardens.</li>
              </ul>
            </section>

            <section className="post-section">
              <h3 className="post-section-title">Top Attractions in Sigiriya</h3>
              <div className="attractions-grid">
                <div className="attraction-card">
                  <img src="/assets/guide/sigiriya-frescoes.jpg" alt="Sigiriya Frescoes" loading="lazy" />
                  <h4>Sigiriya Frescoes</h4>
                  <p>Ancient 5th-century murals showcasing ancient art &amp; culture.</p>
                </div>
                <div className="attraction-card">
                  <img src="/assets/guide/sigiriya-lion-paw.jpg" alt="Lion's Paw Terrace" loading="lazy" />
                  <h4>Lion's Paw Terrace</h4>
                  <p>The iconic gateway to the summit, carved with massive lion's paws.</p>
                </div>
                <div className="attraction-card">
                  <img src="/assets/guide/sigiriya-royal-gardens.jpg" alt="Royal Gardens" loading="lazy" />
                  <h4>Royal Water Gardens</h4>
                  <p>Impressive water gardens and landscaped ruins below the rock.</p>
                </div>
              </div>
            </section>

            <section className="post-section">
              <h3 className="post-section-title">Nearby Places to Explore</h3>
              <div className="nearby-grid">
                <div className="nearby-card">
                  <img src="/assets/guide/sigiriya-dambulla.jpg" alt="Dambulla Cave Temple" loading="lazy" />
                  <h4>Dambulla Cave Temple</h4>
                  <p>Explore the famous Dambulla Cave Temple, a UNESCO World Heritage Site just 25 minutes away.</p>
                </div>
                <div className="nearby-card">
                  <img src="/assets/guide/sigiriya-minneriya.jpg" alt="Minneriya National Park" loading="lazy" />
                  <h4>Minneriya Elephant Safari</h4>
                  <p>Go on a thrilling wildlife safari famous for its large gatherings of wild Asian elephants.</p>
                </div>
              </div>
            </section>
          </div>

          {/* Sidebar */}
          <aside className="article-sidebar">
            <div className="quick-facts-card">
              <div className="quick-facts-header">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#ffb900" strokeWidth="2.2"><circle cx="12" cy="12" r="10"></circle><line x1="12" y1="16" x2="12" y2="12"></line><line x1="12" y1="8" x2="12.01" y2="8"></line></svg>
                <h3>Quick Facts: Sigiriya</h3>
              </div>
              <ul className="quick-facts-list">
                <li><strong>Location:</strong> Matale District, Central Province</li>
                <li><strong>Travel Time:</strong> ≈ 3.5 – 4 hours from Colombo</li>
                <li><strong>Ideal Trip Type:</strong> History, Culture, Nature</li>
                <li><strong>Suggested Duration:</strong> 3 – 4 hours (climb &amp; gardens)</li>
              </ul>
            </div>

            <div className="sidebar-timeline-card">
              <h4 className="sidebar-timeline-title">Suggested Half-Day Itinerary</h4>
              <ul className="sidebar-timeline-list">
                <li><span>06:00 AM</span> Depart from hotel in private AC van</li>
                <li><span>09:30 AM</span> Arrive at Sigiriya &amp; climb the rock</li>
                <li><span>12:00 PM</span> Explore the royal water gardens &amp; ruins</li>
                <li><span>01:00 PM</span> Scenic Sri Lankan lunch with view</li>
                <li><span>02:30 PM</span> Optional visit to Dambulla Cave Temple</li>
              </ul>
            </div>

            <div className="sidebar-cta-box">
              <h4>Need a Van to Sigiriya?</h4>
              <p>Travel comfortably with a private Toyota KDH van and experienced driver.</p>
              <button 
                type="button" 
                className="btn-primary" 
                style={{ width: '100%', height: '46px' }}
                onClick={() => openBookingModal({ destination: 'Sigiriya' })}
              >
                Book Sigiriya Trip
              </button>
            </div>
          </aside>
        </div>

        <CtaBanner
          title="Book Your Sigiriya Trip with KDH Van Hire"
          subtitle="Travel to Sigiriya in comfort and safety with a private KDH van and a professional, friendly driver."
        />
      </div>
    </main>
  );
}

