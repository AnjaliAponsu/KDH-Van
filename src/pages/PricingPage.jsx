import React from 'react';
import { Link } from 'react-router-dom';
import { useApp } from '../context/AppContext';

export default function PricingPage() {
  const { openPricePlanModal, openBookingModal } = useApp();

  const plans = [
    {
      name: 'Airport Transfer',
      price: 'From LKR 12,500',
      amount: 'LKR 12,500',
      period: '',
      desc: 'Hassle-free pickup and drop-off from any airport in Sri Lanka.',
      iconClass: 'icon-blue',
      btnText: 'Book Airport Transfer',
      popular: false,
      icon: (
        <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M17.8 19.2 16 11l3.5-3.5C21 6 21.5 4 21 3c-1-.5-3 0-4.5 1.5L13 8 4.8 6.2c-.5-.1-.9.1-1.1.5l-.3.5c-.2.5-.1 1 .3 1.3L9 12l-2 3H4l-1 1 3 2 2 3 1-1v-3l3-2 3.5 5.3c.3.4.8.5 1.3.3l.5-.3c.4-.2.6-.6.5-1.1z" />
        </svg>
      ),
      features: [
        'Meet & greet at the airport',
        'Comfortable air-conditioned van',
        'Professional driver',
        'Flight tracking & on-time service'
      ]
    },
    {
      name: 'Daily Hire',
      price: 'From LKR 18,000 / day',
      amount: 'LKR 18,000',
      period: '/ day',
      desc: 'Perfect for city travel, business trips or day excursions.',
      iconClass: 'icon-gold',
      btnText: 'Book Daily Hire',
      popular: false,
      icon: (
        <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
          <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
          <line x1="16" y1="2" x2="16" y2="6" />
          <line x1="8" y1="2" x2="8" y2="6" />
          <line x1="3" y1="10" x2="21" y2="10" />
        </svg>
      ),
      features: [
        '8–10 hours of service',
        'Customizable itinerary',
        'Experienced local driver',
        'Fuel included'
      ]
    },
    {
      name: 'Multi-Day Tour',
      price: 'From LKR 16,500 / day',
      amount: 'LKR 16,500',
      period: '/ day',
      desc: 'Explore Sri Lanka at your own pace with a dedicated van and driver.',
      iconClass: 'icon-green',
      btnText: 'Book Multi-Day Tour',
      popular: true,
      icon: (
        <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
          <path d="m8 3 4 8 5-5 5 15H2L8 3z" />
          <path d="M4.14 15.08c2.62-1.57 5.24-1.43 7.86.42 2.74 1.94 5.49 2 8.23.19" />
        </svg>
      ),
      features: [
        'Ideal for 2+ day trips',
        'Flexible routes and stops',
        'Same driver throughout your trip',
        'Comfortable & well-maintained van'
      ]
    }
  ];

  return (
    <main className="pricing-page-main">
      {/* 1. Pricing Hero Banner */}
      <section className="pricing-hero-section">
        <div className="pricing-hero-overlay"></div>
        <div className="pricing-hero-container">
          <div className="pricing-hero-content">
            <div className="pricing-hero-eyebrow">OUR PRICING</div>
            <h1 className="pricing-hero-title">
              Simple &amp; Transparent <span className="text-gold">Pricing</span>
            </h1>
            <p className="pricing-hero-desc">
              Flexible van hire packages for airport transfers, daily trips, and multi-day tours across Sri Lanka.
            </p>
            <div className="pricing-breadcrumb">
              <Link to="/" aria-label="Home">
                <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
                  <polyline points="9 22 9 12 15 12 15 22" />
                </svg>
                Home
              </Link>
              <span className="pricing-breadcrumb-sep">&gt;</span>
              <span className="pricing-breadcrumb-current">Pricing</span>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Our Pricing Plans Section */}
      <section className="pricing-plans-section">
        <div className="container">
          {/* Section Header */}
          <div className="pricing-section-title-wrap">
            <span className="pricing-title-line"></span>
            <h2 className="pricing-section-title">Our Pricing Plans</h2>
            <span className="pricing-title-line"></span>
          </div>
          <p className="pricing-section-subtitle">Choose a plan that fits your travel needs.</p>

          {/* 3-Column Pricing Cards Grid */}
          <div className="pricing-cards-grid">
            {plans.map((plan, idx) => (
              <div
                key={idx}
                className={`pricing-plan-card ${plan.popular ? 'popular-plan' : ''}`}
              >
                {plan.popular && (
                  <div className="pricing-popular-badge">
                    <svg width="13" height="13" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M12 23c6.075 0 11-4.925 11-11 0-4.004-2.146-7.509-5.362-9.451a.75.75 0 0 0-1.121.758c.241 1.767-.168 3.558-1.173 4.966-1.164 1.63-2.99 2.65-4.966 2.766-.546.032-.978.47-.978 1.017 0 .548.432.986.978.954 1.144-.067 2.253-.417 3.238-1.026.17-.105.393-.058.508.106.115.163.076.386-.089.501-1.745 1.218-3.834 1.865-6.035 1.865-1.01 0-1.996-.135-2.933-.393a.75.75 0 0 0-.909.91C5.176 18.995 8.324 23 12 23z" />
                    </svg>
                    Popular
                  </div>
                )}

                <div className="pricing-card-header">
                  <div className={`pricing-card-icon-box ${plan.iconClass}`}>
                    {plan.icon}
                  </div>
                  <div className="pricing-card-title-group">
                    <h3 className="pricing-card-plan-name">{plan.name}</h3>
                    <p className="pricing-card-plan-desc">{plan.desc}</p>
                  </div>
                </div>

                <div className="pricing-card-rate-wrap">
                  <span className="pricing-rate-from">From</span>
                  <span className="pricing-rate-amount">{plan.amount}</span>
                  {plan.period && <span className="pricing-rate-period">{plan.period}</span>}
                </div>

                <ul className="pricing-card-features-list">
                  {plan.features.map((feat, fIdx) => (
                    <li key={fIdx} className="pricing-feature-item">
                      <svg className="pricing-check-svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#16a34a" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                        <polyline points="20 6 9 17 4 12" />
                      </svg>
                      {feat}
                    </li>
                  ))}
                </ul>

                <button
                  type="button"
                  className={plan.popular ? 'pricing-btn-gold' : 'pricing-btn-outline'}
                  onClick={() => openPricePlanModal(plan)}
                >
                  {plan.btnText} &rarr;
                </button>
              </div>
            ))}
          </div>

          {/* 3. 4 Trust Badges Strip */}
          <div className="pricing-trust-strip">
            <div className="pricing-trust-item">
              <div className="pricing-trust-icon">
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                  <path d="m9 12 2 2 4-4" />
                </svg>
              </div>
              <div className="pricing-trust-text-group">
                <div className="pricing-trust-title">Transparent Pricing</div>
                <div className="pricing-trust-sub">No hidden charges</div>
              </div>
            </div>

            <div className="pricing-trust-item">
              <div className="pricing-trust-icon">
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M5 11l1.5-5.5A2 2 0 0 1 8.4 4h7.2a2 2 0 0 1 1.9 1.5L19 11v7a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-1H8v1a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-7z" />
                  <circle cx="7.5" cy="14.5" r="1.5" />
                  <circle cx="16.5" cy="14.5" r="1.5" />
                </svg>
              </div>
              <div className="pricing-trust-text-group">
                <div className="pricing-trust-title">Well-Maintained Vans</div>
                <div className="pricing-trust-sub">Clean, safe &amp; comfortable</div>
              </div>
            </div>

            <div className="pricing-trust-item">
              <div className="pricing-trust-icon">
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
                  <circle cx="9" cy="7" r="4" />
                  <polyline points="16 11 18 13 22 9" />
                </svg>
              </div>
              <div className="pricing-trust-text-group">
                <div className="pricing-trust-title">Experienced Drivers</div>
                <div className="pricing-trust-sub">Friendly &amp; professional</div>
              </div>
            </div>

            <div className="pricing-trust-item">
              <div className="pricing-trust-icon">
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M3 18v-6a9 9 0 0 1 18 0v6" />
                  <path d="M21 19a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h3zM3 19a2 2 0 0 0 2 2h1a2 2 0 0 0 2-2v-3a2 2 0 0 0-2-2H3z" />
                </svg>
              </div>
              <div className="pricing-trust-text-group">
                <div className="pricing-trust-title">24/7 Support</div>
                <div className="pricing-trust-sub">We're always here to help</div>
              </div>
            </div>
          </div>

          {/* 4. Need a Custom Quote? Banner */}
          <div className="pricing-quote-banner-card">
            <div className="pricing-quote-content">
              <div className="pricing-quote-text">
                <h3 className="pricing-quote-heading">Need a Custom Quote?</h3>
                <p className="pricing-quote-desc">Tell us your travel plan and get a personalized price today.</p>
              </div>
              <button
                type="button"
                className="pricing-btn-get-quote"
                onClick={() => openBookingModal({ service: 'Custom Quote' })}
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="2" y="4" width="20" height="16" rx="2" />
                  <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
                </svg>
                Get a Quote
              </button>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
