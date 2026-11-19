import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useApp } from '../context/AppContext';
import BookingSearch from '../components/home/BookingSearch';
import WhyChooseUs from '../components/home/WhyChooseUs';
import PopularRoutes from '../components/home/PopularRoutes';
import Testimonials from '../components/home/Testimonials';
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
      {/* 1. Hero Section */}
      <section className="hero-section" id="home">
        <div className="container hero-container">
          <div className="hero-content">
            <div className="hero-badge">
              <span>RELIABLE</span>
              <span>•</span>
              <span>COMFORTABLE</span>
              <span>•</span>
              <span>SAFE</span>
            </div>
            <h1 className="hero-title">
              KDH Van Hire<br />
              in <span className="highlight-sri-lanka">Sri Lanka
                <svg className="sri-lanka-swoosh" viewBox="0 0 160 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M 4 10 C 45 3, 115 2, 156 7" stroke="#f59e0b" strokeWidth="4.5" strokeLinecap="round" />
                </svg>
              </span>
            </h1>
            <p className="hero-desc">
              Airport Transfers, Private Tours, Daily Hire and Custom Trips with Professional Drivers across Sri Lanka.
            </p>

            <div className="hero-buttons">
              <button
                type="button"
                className="btn-hero-primary"
                onClick={() => openBookingModal()}
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.3"><rect x="3" y="4" width="18" height="18" rx="2" ry="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/></svg>
                Book Your Van
              </button>
              <a
                href="https://wa.me/94771234567?text=Hi%20KDH%20Van%20Hire,%20I%20would%20like%20to%20get%20a%20quote%20for%20my%20trip."
                target="_blank"
                rel="noopener noreferrer"
                className="btn-hero-secondary"
              >
                <svg width="22" height="22" viewBox="0 0 24 24" fill="var(--color-whatsapp)"><path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.711 2.592 2.654-.696c1.029.575 1.761.883 2.806.883 3.181 0 5.767-2.587 5.767-5.766.001-3.18-2.585-5.766-5.767-5.766zm3.374 8.204c-.14.394-.717.728-1.009.774-.29.047-.648.067-2.096-.532-1.448-.598-2.378-2.062-2.45-2.158-.073-.096-.582-.774-.582-1.476 0-.702.364-1.047.494-1.189.13-.142.285-.178.38-.178.096 0 .19.002.273.007.087.005.203-.033.317.241.114.274.394.96.429 1.03.035.071.058.154.012.247-.046.094-.07.153-.139.234-.07.081-.146.182-.209.245-.07.07-.143.146-.062.286.082.14.364.601.782.973.539.479.993.627 1.133.697.14.07.222.059.305-.036.082-.095.352-.408.446-.548.094-.14.188-.117.316-.07.128.047.818.386.958.456.14.07.234.105.269.164.035.059.035.342-.105.736z"/></svg>
                Chat on WhatsApp
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

      {/* 2. Booking Search Interactive Box */}
      <BookingSearch />

      {/* 3. Services Grid Section */}
      <section className="services-section" id="services">
        <div className="container">
          <SectionHeader
            kicker="OUR SERVICES"
            title="Travel Solutions for Every Need"
            subtitle="Explore our comprehensive range of private transport options tailored for couples, families, groups and business executives."
          />

          <div className="services-cards-grid">
            {/* Card 1: Airport Transfers */}
            <article className="service-card-item">
              <div className="service-card-thumbnail-box">
                <img src="/assets/home-page/service-airport-transfers.jpg" alt="Airport Transfers" className="service-card-thumbnail" loading="lazy" />
                <div className="service-card-icon-badge" title="Airport Transfers">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.3" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M17.8 19.2L16 11l3.5-3.5C21 6 21.5 4 21 3c-1-.5-3 0-4.5 1.5L13 8 4.8 6.2c-.5-.1-.9.1-1.1.5l-.3.5c-.2.5-.1 1 .3 1.3L9 12l-2 3H4l-1 1 3 2 2 3 1-1v-3l3-2 3.5 5.3c.3.4.8.5 1.3.3l.5-.3c.4-.2.6-.6.5-1.1z"></path>
                  </svg>
                </div>
              </div>
              <div className="service-card-content">
                <h3 className="service-card-header-title">Airport Transfers</h3>
                <p className="service-card-paragraph">
                  Hassle-free airport pickups and drop-offs to any destination in Sri Lanka.
                </p>
                <div className="service-card-buttons-row">
                  <button type="button" className="btn-card-book-now" onClick={() => openBookingModal({ service: 'Airport Transfer' })}>
                    Book Now &rarr;
                  </button>
                  <Link to="/services" className="btn-card-learn-more">
                    Learn More
                  </Link>
                </div>
              </div>
            </article>

            {/* Card 2: Point to Point Hire */}
            <article className="service-card-item">
              <div className="service-card-thumbnail-box">
                <img src="/assets/home-page/service-point-to-point.jpg" alt="Point to Point Hire" className="service-card-thumbnail" loading="lazy" />
                <div className="service-card-icon-badge" title="Point to Point Hire">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.3" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M19 17h2c.6 0 1-.4 1-1v-3c0-.9-.7-1.7-1.5-1.9C18.7 10.6 16 10 16 10s-1.3-1.4-2.2-2.3c-.5-.4-1.1-.7-1.8-.7H5c-1.1 0-2 .9-2 2v7h2"></path>
                    <circle cx="7" cy="17" r="2"></circle>
                    <path d="M9 17h6"></path>
                    <circle cx="17" cy="17" r="2"></circle>
                  </svg>
                </div>
              </div>
              <div className="service-card-content">
                <h3 className="service-card-header-title">Point to Point Hire</h3>
                <p className="service-card-paragraph">
                  Travel between cities and towns with a comfortable KDH and driver.
                </p>
                <div className="service-card-buttons-row">
                  <button type="button" className="btn-card-book-now" onClick={() => openBookingModal({ service: 'Point to Point Hire' })}>
                    Book Now &rarr;
                  </button>
                  <Link to="/services/point-to-point" className="btn-card-learn-more">
                    Learn More
                  </Link>
                </div>
              </div>
            </article>

            {/* Card 3: Daily Hire */}
            <article className="service-card-item">
              <div className="service-card-thumbnail-box">
                <img src="/assets/home-page/service-daily-hire.jpg" alt="Daily Hire" className="service-card-thumbnail" loading="lazy" />
                <div className="service-card-icon-badge" title="Daily Hire">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.3" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="3" y="4" width="18" height="18" rx="3"></rect>
                    <line x1="16" y1="2" x2="16" y2="6"></line>
                    <line x1="8" y1="2" x2="8" y2="6"></line>
                    <line x1="3" y1="10" x2="21" y2="10"></line>
                    <path d="M8 14h.01"></path>
                    <path d="M12 14h.01"></path>
                    <path d="M16 14h.01"></path>
                    <path d="M8 18h.01"></path>
                    <path d="M12 18h.01"></path>
                    <path d="M16 18h.01"></path>
                  </svg>
                </div>
              </div>
              <div className="service-card-content">
                <h3 className="service-card-header-title">Daily Hire</h3>
                <p className="service-card-paragraph">
                  Hire a KDH van with driver for a full day (ideal for multiple stops and sightseeing).
                </p>
                <div className="service-card-buttons-row">
                  <button type="button" className="btn-card-book-now" onClick={() => openBookingModal({ service: 'Daily Hire' })}>
                    Book Now &rarr;
                  </button>
                  <Link to="/services/daily-hire" className="btn-card-learn-more">
                    Learn More
                  </Link>
                </div>
              </div>
            </article>

            {/* Card 4: Multi-Day Tours */}
            <article className="service-card-item">
              <div className="service-card-thumbnail-box">
                <img src="/assets/services/service-multi-day-tours.jpg" alt="Multi-Day Tours" className="service-card-thumbnail" loading="lazy" />
                <div className="service-card-icon-badge" title="Multi-Day Tours">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.3" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M8 3l4 8 5-5 5 15H2L8 3z"></path>
                    <path d="M4.14 15.08c2.62-1.57 5.24-1.43 7.86.42 2.74 1.94 5.49 2 8.23.19"></path>
                  </svg>
                </div>
              </div>
              <div className="service-card-content">
                <h3 className="service-card-header-title">Multi-Day Tours</h3>
                <p className="service-card-paragraph">
                  Explore Sri Lanka at your pace with a dedicated van and driver-guide.
                </p>
                <div className="service-card-buttons-row">
                  <button type="button" className="btn-card-book-now" onClick={() => openBookingModal({ service: 'Multi-Day Tour' })}>
                    Book Now &rarr;
                  </button>
                  <Link to="/services/multi-day-tours" className="btn-card-learn-more">
                    Learn More
                  </Link>
                </div>
              </div>
            </article>

            {/* Card 5: Weddings & Events */}
            <article className="service-card-item">
              <div className="service-card-thumbnail-box">
                <img src="/assets/services/service-events-weddings.jpg" alt="Weddings & Events" className="service-card-thumbnail" loading="lazy" />
                <div className="service-card-icon-badge" title="Weddings & Events">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.3" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
                  </svg>
                </div>
              </div>
              <div className="service-card-content">
                <h3 className="service-card-header-title">Weddings &amp; Events</h3>
                <p className="service-card-paragraph">
                  Elegant group transport for wedding guests, VIP delegates, and family celebrations.
                </p>
                <div className="service-card-buttons-row">
                  <button type="button" className="btn-card-book-now" onClick={() => openBookingModal({ service: 'Weddings & Events' })}>
                    Book Now &rarr;
                  </button>
                  <Link to="/services/events-weddings" className="btn-card-learn-more">
                    Learn More
                  </Link>
                </div>
              </div>
            </article>

            {/* Card 6: Corporate Transport */}
            <article className="service-card-item">
              <div className="service-card-thumbnail-box">
                <img src="/assets/services/service-corporate-transport.jpg" alt="Corporate Transport" className="service-card-thumbnail" loading="lazy" />
                <div className="service-card-icon-badge" title="Corporate Transport">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.3" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="2" y="7" width="20" height="14" rx="2" ry="2"></rect>
                    <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"></path>
                  </svg>
                </div>
              </div>
              <div className="service-card-content">
                <h3 className="service-card-header-title">Corporate Transport</h3>
                <p className="service-card-paragraph">
                  Professional fleet solutions for business conferences, client site visits, and team retreats.
                </p>
                <div className="service-card-buttons-row">
                  <button type="button" className="btn-card-book-now" onClick={() => openBookingModal({ service: 'Corporate Transport' })}>
                    Book Now &rarr;
                  </button>
                  <Link to="/services/corporate-transport" className="btn-card-learn-more">
                    Learn More
                  </Link>
                </div>
              </div>
            </article>
          </div>
        </div>
      </section>

      {/* 4. Vehicle Showcase Section */}
      <section className="vehicle-section" id="vehicle">
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

      {/* 5. How It Works Section */}
      <section className="how-it-works-section" id="how-it-works">
        <div className="container">
          <SectionHeader
            kicker="HOW IT WORKS"
            title="Book Your Van in 3 Simple Steps"
            subtitle="Booking your private transport across Sri Lanka is quick, transparent, and completely hassle-free."
          />

          <div className="steps-container">
            <div className="step-card">
              <div className="step-icon-circle">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect>
                  <line x1="16" y1="2" x2="16" y2="6"></line>
                  <line x1="8" y1="2" x2="8" y2="6"></line>
                  <line x1="3" y1="10" x2="21" y2="10"></line>
                </svg>
              </div>
              <div className="step-content">
                <h3 className="step-title">1. Plan Your Trip</h3>
                <p className="step-desc">Select your pickup, destination, dates, and service type online or via WhatsApp.</p>
              </div>
            </div>

            <div className="step-divider-arrow">&rarr;</div>

            <div className="step-card">
              <div className="step-icon-circle">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
                  <polyline points="14 2 14 8 20 8"></polyline>
                  <line x1="16" y1="13" x2="8" y2="13"></line>
                  <line x1="16" y1="17" x2="8" y2="17"></line>
                </svg>
              </div>
              <div className="step-content">
                <h3 className="step-title">2. Get a Quote</h3>
                <p className="step-desc">Receive a fixed, guaranteed all-inclusive fare estimate within minutes.</p>
              </div>
            </div>

            <div className="step-divider-arrow">&rarr;</div>

            <div className="step-card">
              <div className="step-icon-circle">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                  <polyline points="22 4 12 14.01 9 11.01"></polyline>
                </svg>
              </div>
              <div className="step-content">
                <h3 className="step-title">3. Confirm Booking</h3>
                <p className="step-desc">Your professional driver arrives punctually with a clean, chilled KDH van.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 6. Why Choose Us Section */}
      <WhyChooseUs />

      {/* 7. Popular Routes Section */}
      <PopularRoutes />

      {/* 8. Testimonials Section */}
      <Testimonials />

      {/* 9. FAQ Section */}
      <section className="faq-section" id="faq">
        <div className="container">
          <SectionHeader
            kicker="HAVE QUESTIONS?"
            title="Frequently Asked Questions"
            subtitle="Everything you need to know about booking, vehicles, drivers and policies."
          />

          <div className="faq-container">
            <div className="faq-accordion">
              {faqs.map((faq, idx) => (
                <div key={idx} className={`faq-item ${openFaq === idx ? 'active' : ''}`}>
                  <button
                    type="button"
                    className="faq-question"
                    onClick={() => setOpenFaq(openFaq === idx ? null : idx)}
                  >
                    <span className="faq-question-text">{faq.q}</span>
                    <svg className="faq-chevron" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                      <polyline points="6 9 12 15 18 9"></polyline>
                    </svg>
                  </button>
                  <div className="faq-answer">
                    <p className="faq-answer-text">{faq.a}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 10. Pre-Footer CTA */}
      <CtaBanner />
    </main>
  );
}
