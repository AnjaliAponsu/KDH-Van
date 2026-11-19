import React, { useState } from 'react';
import { useApp } from '../../context/AppContext';

export default function BookingSearch() {
  const { openBookingModal } = useApp();
  const [tab, setTab] = useState('airport');
  const [pickup, setPickup] = useState('Bandaranaike International Airport (CMB)');
  const [destination, setDestination] = useState('Colombo City');
  const [date, setDate] = useState(() => {
    const today = new Date();
    today.setDate(today.getDate() + 1);
    return today.toISOString().split('T')[0];
  });
  const [passengers, setPassengers] = useState(4);
  const [showPassengerMenu, setShowPassengerMenu] = useState(false);
  const [loading, setLoading] = useState(false);

  const swapLocations = () => {
    const temp = pickup;
    setPickup(destination);
    setDestination(temp);
  };

  const handleTabChange = (t) => {
    setTab(t);
    if (t === 'airport') {
      setPickup('Bandaranaike International Airport (CMB)');
      setDestination('Colombo City');
    } else if (t === 'p2p') {
      setPickup('Colombo City');
      setDestination('Kandy / Galle');
    } else if (t === 'daily') {
      setPickup('Colombo City Hotel');
      setDestination('Day Tour (100 km included)');
    } else if (t === 'tours') {
      setPickup('Colombo Airport / City');
      setDestination('Sigiriya -> Kandy -> Ella');
    }
  };

  const handleSearch = (e) => {
    e.preventDefault();
    setLoading(true);
    const serviceLabel =
      tab === 'airport'
        ? 'Airport Transfer'
        : tab === 'p2p'
        ? 'Point to Point Hire'
        : tab === 'daily'
        ? 'Daily Hire'
        : 'Multi-Day Tour';
    setTimeout(() => {
      setLoading(false);
      openBookingModal({
        pickup,
        destination,
        date,
        passengers,
        service: serviceLabel
      });
    }, 240);
  };

  return (
    <section className="booking-search-section">
      <div className="container">
        <div className="booking-card">
          {/* Service Type Tabs */}
          <div className="booking-tabs" role="tablist">
            <button
              type="button"
              className={`booking-tab-btn ${tab === 'airport' ? 'active' : ''}`}
              onClick={() => handleTabChange('airport')}
            >
              <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M17.8 19.2L16 11l3.5-3.5C21 6 21.5 4 21 3c-1-.5-3 0-4.5 1.5L13 8 4.8 6.2c-.5-.1-.9.1-1.1.5l-.3.5c-.2.5-.1 1 .3 1.3L9 12l-2 3H4l-1 1 3 2 2 3 1-1v-3l3-2 3.5 5.3c.3.4.8.5 1.3.3l.5-.3c.4-.2.6-.6.5-1.1z"></path>
              </svg>
              Airport Transfer
            </button>
            <div className="booking-tab-divider"></div>
            <button
              type="button"
              className={`booking-tab-btn ${tab === 'p2p' ? 'active' : ''}`}
              onClick={() => handleTabChange('p2p')}
            >
              <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M19 17h2c.6 0 1-.4 1-1v-3c0-.9-.7-1.7-1.5-1.9C18.7 10.6 16 10 16 10s-1.3-1.4-2.2-2.3c-.5-.4-1.1-.7-1.8-.7H5c-1.1 0-2 .9-2 2v7h2"></path>
                <circle cx="7" cy="17" r="2"></circle>
                <path d="M9 17h6"></path>
                <circle cx="17" cy="17" r="2"></circle>
              </svg>
              Point to Point
            </button>
            <div className="booking-tab-divider"></div>
            <button
              type="button"
              className={`booking-tab-btn ${tab === 'daily' ? 'active' : ''}`}
              onClick={() => handleTabChange('daily')}
            >
              <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                <rect x="3" y="4" width="18" height="18" rx="3"></rect>
                <line x1="16" y1="2" x2="16" y2="6"></line>
                <line x1="8" y1="2" x2="8" y2="6"></line>
                <line x1="3" y1="10" x2="21" y2="10"></line>
              </svg>
              Daily Hire
            </button>
            <div className="booking-tab-divider"></div>
            <button
              type="button"
              className={`booking-tab-btn ${tab === 'tours' ? 'active' : ''}`}
              onClick={() => handleTabChange('tours')}
            >
              <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M8 3l4 8 5-5 5 15H2L8 3z"></path>
                <path d="M4.14 15.08c2.62-1.57 5.24-1.43 7.86.42 2.74 1.94 5.49 2 8.23.19"></path>
              </svg>
              Multi-Day Tour
            </button>
          </div>

          {/* Form Fields Row */}
          <form className="booking-form-grid" onSubmit={handleSearch}>
            {/* Pickup Location */}
            <div className="booking-field">
              <div className="field-icon">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#f59e0b" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                  <circle cx="12" cy="10" r="3"></circle>
                </svg>
              </div>
              <div className="field-content">
                <label className="field-label">Pickup Location</label>
                <input
                  type="text"
                  className="field-input"
                  placeholder="Where from?"
                  value={pickup}
                  onChange={(e) => setPickup(e.target.value)}
                  required
                />
              </div>
            </div>

            {/* Swap Button */}
            <button
              type="button"
              className="btn-swap-locations"
              title="Swap pickup and destination"
              aria-label="Swap Locations"
              onClick={swapLocations}
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="17 1 21 5 17 9"></polyline>
                <path d="M3 5h18"></path>
                <polyline points="7 23 3 19 7 15"></polyline>
                <path d="M21 19H3"></path>
              </svg>
            </button>

            {/* Destination */}
            <div className="booking-field">
              <div className="field-icon">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#0284c7" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                  <circle cx="12" cy="10" r="3"></circle>
                </svg>
              </div>
              <div className="field-content">
                <label className="field-label">Destination</label>
                <input
                  type="text"
                  className="field-input"
                  placeholder="Where to?"
                  value={destination}
                  onChange={(e) => setDestination(e.target.value)}
                  required
                />
              </div>
            </div>

            {/* Travel Date */}
            <div className="booking-field">
              <div className="field-icon">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect>
                  <line x1="16" y1="2" x2="16" y2="6"></line>
                  <line x1="8" y1="2" x2="8" y2="6"></line>
                  <line x1="3" y1="10" x2="21" y2="10"></line>
                </svg>
              </div>
              <div className="field-content">
                <label className="field-label">Travel Date</label>
                <input
                  type="date"
                  className="field-input"
                  value={date}
                  onChange={(e) => setDate(e.target.value)}
                  required
                />
              </div>
            </div>

            {/* Passengers Dropdown */}
            <div
              className="booking-field passenger-select-trigger"
              onClick={() => setShowPassengerMenu(!showPassengerMenu)}
            >
              <div className="field-icon">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
                  <circle cx="9" cy="7" r="4"></circle>
                  <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
                  <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
                </svg>
              </div>
              <div className="field-content">
                <label className="field-label">Passengers</label>
                <div className="field-input" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                  <span>{passengers} {passengers === 1 ? 'Passenger' : 'Passengers'}</span>
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#94a3b8" strokeWidth="2.5">
                    <polyline points="6 9 12 15 18 9"></polyline>
                  </svg>
                </div>
              </div>

              <div className={`passenger-dropdown-menu ${showPassengerMenu ? 'show' : ''}`}>
                {[1, 2, 4, 6, 8, 10, 14].map((num) => (
                  <div
                    key={num}
                    className={`passenger-option ${passengers === num ? 'selected' : ''}`}
                    onClick={(e) => {
                      e.stopPropagation();
                      setPassengers(num);
                      setShowPassengerMenu(false);
                    }}
                  >
                    {num} {num === 1 ? 'Passenger' : 'Passengers'}
                  </div>
                ))}
              </div>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className={`btn-check-availability ${loading ? 'btn-loading' : ''}`}
              disabled={loading}
            >
              <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="11" cy="11" r="8"></circle>
                <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
              </svg>
              Check Availability
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
