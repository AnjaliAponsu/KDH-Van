import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useApp } from '../context/AppContext';
import BookingSearch from '../components/home/BookingSearch';
import CtaBanner from '../components/common/CtaBanner';
import SectionHeader from '../components/common/SectionHeader';

export default function HomePage() {
  const { openBookingModal } = useApp();
  const [openFaq, setOpenFaq] = useState(0);

  const faqs = [
    {
      q: 'What is included in the KDH Van Hire price?',
      a: 'All our prices include the Toyota KDH passenger van, fuel, highway tolls (expressways), an experienced English-speaking driver, and all driver allowances (food & accommodation). There are zero hidden fees.'
    },
    {
      q: 'How many passengers and luggage bags can fit in a Toyota KDH?',
      a: 'The Toyota KDH Super GL / Commuter comfortably accommodates up to 8–10 passengers with full luggage (8 large suitcases), or up to 14 passengers for day trips without heavy luggage.'
    },
    {
      q: 'Do you track airport flights for delays?',
      a: 'Yes, our dispatch team monitors your flight in real time using official radar. If your flight is delayed or lands early, your driver adjusts pickup timing automatically with 60 minutes of complimentary wait time inside the arrivals hall.'
    },
    {
      q: 'Can we customize our itinerary during multi-day tours?',
      a: 'Absolutely! Our tours are 100% private and customizable. You decide the stops, attractions, and pace. Your driver is happy to accommodate spontaneous viewpoint breaks or roadside coconut stops.'
    },
    {
      q: 'How do I confirm the booking and do I need to pay in advance?',
      a: 'Booking is simple: submit your trip details online or message us on WhatsApp. We confirm availability within 5 minutes. You can pay cash in USD, EUR, GBP, or LKR directly to your driver upon arrival.'
    }
  ];

  return (
    <main className="home-page-main">
      {/* Hero Section */}
      <section className="hero-section">
        <div className="container hero-container">
          <div className="hero-content">
            <div className="hero-badge">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/></svg>
              #1 Rated Van Hire in Sri Lanka
            </div>
            <h1 className="hero-title">
              KDH Van Hire <span className="highlight-gold">in Sri Lanka</span>
            </h1>
            <p className="hero-description">
              Private Toyota KDH passenger &amp; high-roof van hire with professional English-speaking drivers. Airport transfers, round tours, family vacations and corporate transport across Sri Lanka.
            </p>

            <div className="hero-actions">
              <button 
                type="button" 
                className="btn-hero-primary"
                onClick={() => openBookingModal()}
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.3"><rect x="3" y="4" width="18" height="18" rx="2" ry="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/></svg>
                Book Your Van Now
              </button>
              <a
                href="https://wa.me/94771234567?text=Hi%20KDH%20Van%20Hire,%20I%20would%20like%20to%20get%20a%20quote%20for%20my%20trip."
                target="_blank"
                rel="noopener noreferrer"
                className="btn-hero-whatsapp"
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.711 2.592 2.654-.696c1.029.575 1.761.883 2.806.883 3.181 0 5.767-2.587 5.767-5.766.001-3.18-2.585-5.766-5.767-5.766zm3.374 8.204c-.14.394-.717.728-1.009.774-.29.047-.648.067-2.096-.532-1.448-.598-2.378-2.062-2.45-2.158-.073-.096-.582-.774-.582-1.476 0-.702.364-1.047.494-1.189.13-.142.285-.178.38-.178.096 0 .19.002.273.007.087.005.203-.033.317.241.114.274.394.96.429 1.03.035.071.058.154.012.247-.046.094-.07.153-.139.234-.07.081-.146.182-.209.245-.07.07-.143.146-.062.286.082.14.364.601.782.973.539.479.993.627 1.133.697.14.07.222.059.305-.036.082-.095.352-.408.446-.548.094-.14.188-.117.316-.07.128.047.818.386.958.456.14.07.234.105.269.164.035.059.035.342-.105.736z"/></svg>
                Instant WhatsApp Quote
              </a>
            </div>

            <div className="hero-trust-row">
              <div className="trust-pill">
                <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="#ffb900" strokeWidth="2.5"><polyline points="20 6 9 17 4 12"></polyline></svg>
                Guaranteed Clean &amp; AC
              </div>
              <div className="trust-pill">
                <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="#ffb900" strokeWidth="2.5"><polyline points="20 6 9 17 4 12"></polyline></svg>
                English Speaking Drivers
              </div>
              <div className="trust-pill">
                <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="#ffb900" strokeWidth="2.5"><polyline points="20 6 9 17 4 12"></polyline></svg>
                No Hidden Charges
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Booking Search Interactive Box */}
      <BookingSearch />

      {/* Services Grid Section */}
      <section className="services-section">
        <div className="container">
          <SectionHeader
            kicker="WHAT WE OFFER"
            title="Travel Solutions for Every Need"
            subtitle="Explore our comprehensive range of private transport options tailored for couples, families, groups and business executives."
          />

          <div className="services-grid">
            {/* Card 1: Airport Transfers */}
            <div className="service-card">
              <div className="service-card-media">
                <img src="/assets/services/service-airport-transfers.jpg" alt="Airport Transfers" loading="lazy" />
                <span className="service-badge">Most Popular</span>
              </div>
              <div className="service-card-body">
                <h3 className="service-card-title">Airport Transfers</h3>
                <p className="service-card-desc">Seamless 24/7 airport pickups &amp; drop-offs between BIA (CMB) and any destination in Sri Lanka. Flight delay tracking included.</p>
                <div className="service-meta-strip">
                  <span>From $35 USD</span>
                  <span>Door-to-Door</span>
                </div>
                <div className="service-card-actions">
                  <Link to="/services" className="btn-service-learn">Learn More</Link>
                  <button type="button" className="btn-service-book" onClick={() => openBookingModal({ service: 'Airport Transfer' })}>Book Now</button>
                </div>
              </div>
            </div>

            {/* Card 2: Point to Point Hire */}
            <div className="service-card">
              <div className="service-card-media">
                <img src="/assets/services/service-point-to-point.jpg" alt="Point to Point Hire" loading="lazy" />
              </div>
              <div className="service-card-body">
                <h3 className="service-card-title">Point to Point Hire</h3>
                <p className="service-card-desc">Direct private transfers between major cities and tourist hotspots. Travel safely and comfortably without public transport hassle.</p>
                <div className="service-meta-strip">
                  <span>Flexible Stops</span>
                  <span>Fixed Rates</span>
                </div>
                <div className="service-card-actions">
                  <Link to="/services/point-to-point" className="btn-service-learn">Learn More</Link>
                  <button type="button" className="btn-service-book" onClick={() => openBookingModal({ service: 'Point to Point Hire' })}>Book Now</button>
                </div>
              </div>
            </div>

            {/* Card 3: Daily Hire */}
            <div className="service-card">
              <div className="service-card-media">
                <img src="/assets/services/service-daily-hire.jpg" alt="Daily Hire" loading="lazy" />
              </div>
              <div className="service-card-body">
                <h3 className="service-card-title">Daily Hire with Driver</h3>
                <p className="service-card-desc">Hire a luxury Toyota KDH van for the whole day. Perfect for city tours, shopping, business errands and day excursions (80–100 km included).</p>
                <div className="service-meta-strip">
                  <span>Full Day Flexibility</span>
                  <span>Fuel Included</span>
                </div>
                <div className="service-card-actions">
                  <Link to="/services/daily-hire" className="btn-service-learn">Learn More</Link>
                  <button type="button" className="btn-service-book" onClick={() => openBookingModal({ service: 'Daily Hire' })}>Book Now</button>
                </div>
              </div>
            </div>

            {/* Card 4: Multi-Day Tours */}
            <div className="service-card">
              <div className="service-card-media">
                <img src="/assets/services/service-multi-day.jpg" alt="Multi-Day Tours" loading="lazy" />
                <span className="service-badge gold">Best Experience</span>
              </div>
              <div className="service-card-body">
                <h3 className="service-card-title">Multi-Day Island Tours</h3>
                <p className="service-card-desc">Complete round-island tour packages across Sigiriya, Kandy, Nuwara Eliya, Ella, Yala and Galle with your private driver-guide.</p>
                <div className="service-meta-strip">
                  <span>Custom Itineraries</span>
                  <span>Driver Allowance Included</span>
                </div>
                <div className="service-card-actions">
                  <Link to="/services/multi-day-tours" className="btn-service-learn">Learn More</Link>
                  <button type="button" className="btn-service-book" onClick={() => openBookingModal({ service: 'Multi-Day Tour' })}>Book Now</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Vehicle Showcase Section */}
      <section className="vehicle-section">
        <div className="container">
          <div className="vehicle-showcase-grid">
            <div className="vehicle-media-col">
              <img src="/assets/home-page/hero-van.jpg" alt="Toyota KDH Luxury Van" className="vehicle-main-img" loading="lazy" />
            </div>
            <div className="vehicle-info-col">
              <div className="vehicle-tag">OUR SIGNATURE FLEET</div>
              <h2 className="vehicle-title">Toyota KDH Passenger Van</h2>
              <p className="vehicle-desc">
                Widely known as Sri Lanka's ultimate passenger vehicle, the Toyota KDH Hiace is purpose-built for luxurious island transport. Experience supreme comfort on winding mountain roads and smooth highway cruising.
              </p>

              <div className="vehicle-specs-grid">
                <div className="spec-card">
                  <span className="spec-value">8 – 14</span>
                  <span className="spec-label">Passenger Seats</span>
                </div>
                <div className="spec-card">
                  <span className="spec-value">Dual AC</span>
                  <span className="spec-label">Roof-Mounted Climate</span>
                </div>
                <div className="spec-card">
                  <span className="spec-value">8+ Bags</span>
                  <span className="spec-label">Luggage Boot Capacity</span>
                </div>
                <div className="spec-card">
                  <span className="spec-value">Reclining</span>
                  <span className="spec-label">Plush Velvet / Leather</span>
                </div>
              </div>

              <div className="vehicle-cta-row">
                <Link to="/fleet" className="btn-primary">View Full Fleet Details</Link>
                <button type="button" className="btn-outline-dark" onClick={() => openBookingModal()}>Instant Quote</button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="how-it-works-section">
        <div className="container">
          <SectionHeader
            kicker="SIMPLE PROCESS"
            title="Book Your Van in 3 Simple Steps"
            subtitle="Booking your private transport across Sri Lanka is quick, transparent, and completely hassle-free."
          />

          <div className="steps-grid">
            <div className="step-card">
              <div className="step-num">1</div>
              <h3 className="step-title">Choose Your Service</h3>
              <p className="step-desc">Select your pickup, destination, dates, and vehicle size through our online form or direct WhatsApp.</p>
            </div>
            <div className="step-card">
              <div className="step-num">2</div>
              <h3 className="step-title">Get Instant Confirmation</h3>
              <p className="step-desc">Receive a fixed, guaranteed all-inclusive quote within minutes. No prepayment or credit card required.</p>
            </div>
            <div className="step-card">
              <div className="step-num">3</div>
              <h3 className="step-title">Enjoy Your Journey</h3>
              <p className="step-desc">Your professional driver arrives punctually with a clean, chilled van ready to assist with your luggage.</p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="faq-section">
        <div className="container">
          <SectionHeader
            kicker="HAVE QUESTIONS?"
            title="Frequently Asked Questions"
            subtitle="Everything you need to know about booking, vehicles, drivers and policies."
          />

          <div className="faq-accordion-wrap">
            {faqs.map((faq, idx) => (
              <div key={idx} className={`faq-item ${openFaq === idx ? 'open' : ''}`}>
                <button 
                  type="button" 
                  className="faq-question-btn"
                  onClick={() => setOpenFaq(openFaq === idx ? null : idx)}
                >
                  <span className="faq-question-text">{faq.q}</span>
                  <svg className="faq-chevron" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><polyline points="6 9 12 15 18 9"></polyline></svg>
                </button>
                {openFaq === idx && (
                  <div className="faq-answer-pane">
                    <p>{faq.a}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pre-Footer CTA */}
      <CtaBanner />
    </main>
  );
}

