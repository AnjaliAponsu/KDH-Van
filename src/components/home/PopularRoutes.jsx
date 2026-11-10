import React from 'react';
import SectionHeader from '../common/SectionHeader';
import { useApp } from '../../context/AppContext';

export default function PopularRoutes() {
  const { openBookingModal } = useApp();

  const routes = [
    {
      badge: 'Airport Express',
      from: 'Bandaranaike Airport (BIA)',
      to: 'Colombo City Hotels',
      time: '~45 mins (Expressway)',
      distance: '~35 km',
      priceUsd: '$45',
      priceLkr: '~LKR 15,000',
      service: 'Airport Transfer',
      pickup: 'Bandaranaike Int Airport (BIA)',
      destination: 'Colombo City / Fort'
    },
    {
      badge: 'Hill Country',
      from: 'Bandaranaike Airport (BIA)',
      to: 'Kandy City / Temple',
      time: '~3 hours',
      distance: '~105 km',
      priceUsd: '$80',
      priceLkr: '~LKR 26,000',
      service: 'Point to Point',
      pickup: 'Bandaranaike Int Airport (BIA)',
      destination: 'Kandy (Temple of the Tooth)'
    },
    {
      badge: 'Southern Coast',
      from: 'Bandaranaike Airport (BIA)',
      to: 'Galle Fort / Bentota',
      time: '~2 hours (Expressway)',
      distance: '~150 km',
      priceUsd: '$85',
      priceLkr: '~LKR 28,000',
      service: 'Point to Point',
      pickup: 'Bandaranaike Int Airport (BIA)',
      destination: 'Galle Fort / Unawatuna'
    }
  ];

  return (
    <section className="popular-routes-section" id="popular-routes">
      <div className="container">
        <SectionHeader
          kicker="POPULAR ROUTES"
          title="Common Journeys & Fixed Fares"
          subtitle="Reliable inter-city transfers with highway tolls and professional driver included."
        />
        <div className="routes-grid">
          {routes.map((r, idx) => (
            <div key={idx} className="route-card">
              <span className="route-badge">{r.badge}</span>
              <div className="route-endpoints">
                <div className="route-from">
                  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="#f59e0b" strokeWidth="2.5"><circle cx="12" cy="12" r="10"></circle></svg>
                  {r.from}
                </div>
                <div className="route-arrow-down">↓</div>
                <div className="route-to">
                  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="#0284c7" strokeWidth="2.5"><circle cx="12" cy="12" r="4"></circle></svg>
                  {r.to}
                </div>
              </div>
              <div className="route-meta">
                <div className="route-meta-item">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="10"></circle><polyline points="12 6 12 12 16 14"></polyline></svg>
                  {r.time}
                </div>
                <div className="route-meta-item">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"></path></svg>
                  {r.distance}
                </div>
              </div>
              <div className="route-pricing-row">
                <div>
                  <div className="route-price-label">Starting From</div>
                  <div className="route-price-val">{r.priceUsd} <span>({r.priceLkr})</span></div>
                </div>
                <button
                  type="button"
                  className="btn-route-book"
                  onClick={() => openBookingModal({
                    service: r.service,
                    pickup: r.pickup,
                    destination: r.destination
                  })}
                >
                  Get Quote →
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
