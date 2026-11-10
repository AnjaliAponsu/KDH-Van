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
    } else if (t === 'daily') {
      setPickup('Colombo City Hotel');
      setDestination('Day Tour / Errand Route (80 km included)');
    } else if (t === 'tours') {
      setPickup('Colombo Airport / City');
      setDestination('Sigiriya -> Kandy -> Ella (Multi-Day)');
    }
  };

  const handleSearch = (e) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      openBookingModal({
        pickup,
        destination,
        date,
        passengers,
        service: tab === 'airport' ? 'Airport Transfer' : tab === 'daily' ? 'Daily Hire' : 'Multi-Day Tour'
      });
    }, 240);
  };

  return (
    <section className="booking-search-section">
      <div className="container">
        <div className="booking-search-card">
          {/* Tabs */}
          <div className="booking-tabs-nav" role="tablist">
            <button
              type="button"
              className={`booking-tab-btn ${tab === 'airport' ? 'active' : ''}`}
              onClick={() => handleTabChange('airport')}
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2"><path d="M22 2L11 13"></path><polygon points="22 2 15 22 11 13 2 9 22 2"></polygon></svg>
              Airport Transfer
            </button>
            <button
              type="button"
              className={`booking-tab-btn ${tab === 'daily' ? 'active' : ''}`}
              onClick={() => handleTabChange('daily')}
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2"><circle cx="12" cy="12" r="10"></circle><polyline points="12 6 12 12 16 14"></polyline></svg>
              Daily Hire
            </button>
            <button
              type="button"
              className={`booking-tab-btn ${tab === 'tours' ? 'active' : ''}`}
              onClick={() => handleTabChange('tours')}
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2"><polygon points="3 11 22 2 13 21 11 13 3 11"></polygon></svg>
              Multi-Day Tour
            </button>
          </div>

          {/* Form */}
          <form className="booking-search-form" onSubmit={handleSearch}>
            <div className="search-fields-grid">
              {/* Pickup */}
              <div className="search-field-item">
                <label className="field-label">Pickup Location</label>
                <div className="input-with-icon">
                  <svg className="field-icon" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#ffb900" strokeWidth="2.5"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path><circle cx="12" cy="10" r="3"></circle></svg>
                  <input
                    type="text"
                    className="field-input"
                    value={pickup}
                    onChange={(e) => setPickup(e.target.value)}
                    required
                  />
                </div>
              </div>

              {/* Swap Button */}
              <div className="swap-btn-wrap">
                <button
                  type="button"
                  className="btn-swap-locations"
                  title="Swap locations"
                  onClick={swapLocations}
                >
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4"><path d="M7 16V4m0 0L3 8m4-4l4 4m6 4v12m0 0l4-4m-4 4l-4-4"></path></svg>
                </button>
              </div>

              {/* Drop-off */}
              <div className="search-field-item">
                <label className="field-label">Drop-off Destination</label>
                <div className="input-with-icon">
                  <svg className="field-icon" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#2563eb" strokeWidth="2.5"><circle cx="12" cy="12" r="10"></circle><polyline points="12 8 12 12 14 14"></polyline></svg>
                  <input
                    type="text"
                    className="field-input"
                    value={destination}
                    onChange={(e) => setDestination(e.target.value)}
                    required
                  />
                </div>
              </div>

              {/* Travel Date */}
              <div className="search-field-item">
                <label className="field-label">Travel Date</label>
                <div className="input-with-icon">
                  <svg className="field-icon" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2"><rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect><line x1="16" y1="2" x2="16" y2="6"></line><line x1="8" y1="2" x2="8" y2="6"></line><line x1="3" y1="10" x2="21" y2="10"></line></svg>
                  <input
                    type="date"
                    className="field-input"
                    value={date}
                    onChange={(e) => setDate(e.target.value)}
                    required
                  />
                </div>
              </div>

              {/* Passengers dropdown */}
              <div className="search-field-item passenger-field">
                <label className="field-label">Passengers</label>
                <div 
                  className="input-with-icon clickable"
                  onClick={() => setShowPassengerMenu(!showPassengerMenu)}
                >
                  <svg className="field-icon" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><path d="M23 21v-2a4 4 0 0 0-3-3.87"></path><path d="M16 3.13a4 4 0 0 1 0 7.75"></path></svg>
                  <div className="field-display-text">{passengers} Passengers</div>
                  <svg className="chevron-field" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><polyline points="6 9 12 15 18 9"></polyline></svg>
                </div>

                {showPassengerMenu && (
                  <div className="passenger-menu-dropdown">
                    {[1, 2, 4, 6, 8, 10, 14].map((num) => (
                      <div
                        key={num}
                        className={`passenger-opt ${passengers === num ? 'selected' : ''}`}
                        onClick={() => {
                          setPassengers(num);
                          setShowPassengerMenu(false);
                        }}
                      >
                        {num} {num === 1 ? 'Passenger' : 'Passengers'}
                      </div>
                    ))}
                  </div>
                )}
              </div>

              {/* Action Button */}
              <div className="search-action-wrap">
                <button
                  type="submit"
                  className={`btn-hero-primary btn-search-submit ${loading ? 'btn-loading' : ''}`}
                  disabled={loading}
                >
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4"><circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line></svg>
                  Check Rates &amp; Availability
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}

