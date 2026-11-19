import React from 'react';
import PageHero from '../components/common/PageHero';
import SectionHeader from '../components/common/SectionHeader';
import CtaBanner from '../components/common/CtaBanner';
import { useApp } from '../context/AppContext';

export default function PricingPage() {
  const { openPricePlanModal, openBookingModal } = useApp();

  const plans = [
    {
      name: 'Airport Transfer',
      price: 'From $35 USD',
      period: 'per transfer',
      desc: 'BIA Airport to Colombo, Negombo, or direct to Southern Beaches & Hill Country.',
      features: [
        'Private Toyota KDH Van',
        'Flight delay monitoring',
        '60 minutes free wait time',
        'Expressway highway tolls included',
        'Meet & greet inside arrivals'
      ]
    },
    {
      name: 'Daily Van Hire',
      price: 'From $65 USD',
      period: 'per day',
      popular: true,
      desc: 'Full-day van and private chauffeur for city travel, business, or day excursions.',
      features: [
        '80–100 km included per day',
        'Professional English-speaking driver',
        'Fuel & air conditioning included',
        'Driver food & stay allowances',
        'Flexible hours & spontaneous stops'
      ]
    },
    {
      name: 'Multi-Day Island Tour',
      price: 'From $85 USD',
      period: 'per day',
      desc: 'All-inclusive private transport for multi-day itineraries across Sri Lanka.',
      features: [
        'Unlimited itinerary customization',
        'Dedicated driver-guide for entire tour',
        'All vehicle fuel and parking fees',
        'Expressway tolls covered',
        'Free pickup and final airport drop'
      ]
    }
  ];

  const routes = [
    { from: 'Colombo Airport (CMB)', to: 'Colombo City', dist: '35 km', time: '≈ 40 mins', fare: '$35 – $40 USD' },
    { from: 'Colombo Airport (CMB)', to: 'Kandy', dist: '115 km', time: '≈ 3.5 hrs', fare: '$65 – $75 USD' },
    { from: 'Colombo Airport (CMB)', to: 'Galle / Unawatuna', dist: '155 km', time: '≈ 2 hrs', fare: '$75 – $85 USD' },
    { from: 'Colombo Airport (CMB)', to: 'Mirissa / Weligama', dist: '175 km', time: '≈ 2.5 hrs', fare: '$85 – $95 USD' },
    { from: 'Colombo Airport (CMB)', to: 'Sigiriya / Dambulla', dist: '160 km', time: '≈ 4 hrs', fare: '$85 – $95 USD' },
    { from: 'Colombo Airport (CMB)', to: 'Ella', dist: '240 km', time: '≈ 5.5 hrs', fare: '$110 – $125 USD' }
  ];

  return (
    <main className="pricing-page-main">
      <PageHero
        kicker="TRANSPARENT RATES"
        title="Simple & Transparent Pricing"
        desc="No hidden fees. Every quote includes fuel, highway tolls, a professional driver, and air-conditioned Toyota KDH comfort."
        bgImage="/assets/fleet/fleet-hero-bg.jpg"
        breadcrumbs={[{ label: 'Pricing' }]}
      />

      <section className="pricing-plans-section" style={{ padding: '64px 0 80px' }}>
        <div className="container">
          <SectionHeader
            kicker="CHOOSE YOUR PLAN"
            title="Our Pricing Packages"
            subtitle="Transparent and competitive rates with zero surprise charges. All prices can be settled in USD, EUR, GBP, or LKR."
          />

          {/* 3 Pricing Cards */}
          <div className="pricing-plans-grid" style={{ marginBottom: '64px' }}>
            {plans.map((p, idx) => (
              <div key={idx} className={`pricing-plan-card ${p.popular ? 'popular-plan' : ''}`}>
                {p.popular && <div className="pricing-popular-badge">★ Most Popular</div>}
                <h3 className="plan-name">{p.name}</h3>
                <div className="plan-price-wrap">
                  <span className="plan-amount">{p.price}</span>
                  <span className="plan-period">/ {p.period}</span>
                </div>
                <p className="plan-desc">{p.desc}</p>
                <ul className="plan-features-list">
                  {p.features.map((f, fIdx) => (
                    <li key={fIdx}>
                      <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="#16a34a" strokeWidth="2.8"><polyline points="20 6 9 17 4 12"></polyline></svg>
                      {f}
                    </li>
                  ))}
                </ul>
                <button
                  type="button"
                  className={p.popular ? 'btn-primary' : 'btn-outline-dark'}
                  style={{ width: '100%', height: '48px', marginTop: 'auto' }}
                  onClick={() => openPricePlanModal(p)}
                >
                  Choose {p.name}
                </button>
              </div>
            ))}
          </div>

          {/* Popular Fixed Rates Table */}
          <SectionHeader
            kicker="FIXED ROUTES"
            title="Popular Direct Transfer Rates"
            subtitle="Fixed, door-to-door fares including all expressway tolls and taxes."
          />

          <div className="route-table-container" style={{ background: '#ffffff', borderRadius: '16px', border: '1px solid #e2e8f0', overflow: 'hidden', marginBottom: '60px', boxShadow: '0 4px 16px rgba(0,0,0,0.03)' }}>
            <table style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'left' }}>
              <thead>
                <tr style={{ background: '#081726', color: '#ffffff', fontSize: '14px', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                  <th style={{ padding: '16px 20px' }}>Route</th>
                  <th style={{ padding: '16px 20px' }}>Distance</th>
                  <th style={{ padding: '16px 20px' }}>Est. Travel Time</th>
                  <th style={{ padding: '16px 20px' }}>Toyota KDH Price</th>
                  <th style={{ padding: '16px 20px' }}>Action</th>
                </tr>
              </thead>
              <tbody>
                {routes.map((r, idx) => (
                  <tr key={idx} style={{ borderBottom: '1px solid #f1f5f9', fontSize: '14.5px' }}>
                    <td style={{ padding: '16px 20px', fontWeight: '700', color: '#081726' }}>{r.from} &rarr; {r.to}</td>
                    <td style={{ padding: '16px 20px', color: '#64748b' }}>{r.dist}</td>
                    <td style={{ padding: '16px 20px', color: '#64748b' }}>{r.time}</td>
                    <td style={{ padding: '16px 20px', fontWeight: '800', color: '#b45309' }}>{r.fare}</td>
                    <td style={{ padding: '16px 20px' }}>
                      <button 
                        type="button" 
                        className="btn-primary" 
                        style={{ height: '36px', fontSize: '13px', padding: '0 16px' }}
                        onClick={() => openBookingModal({ pickup: r.from, destination: r.to })}
                      >
                        Book
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <CtaBanner
            title="Need a Custom Rate for Your Trip?"
            subtitle="Send your exact itinerary to our team on WhatsApp for a custom discounted price."
          />
        </div>
      </section>
    </main>
  );
}

