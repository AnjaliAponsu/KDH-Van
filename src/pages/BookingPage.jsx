import React, { useState } from 'react';
import PageHero from '../components/common/PageHero';
import { useApp } from '../context/AppContext';

export default function BookingPage() {
  const { showToast } = useApp();
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    serviceType: 'Airport Transfer',
    pickup: 'Bandaranaike International Airport (CMB)',
    destination: 'Colombo City',
    date: '',
    time: '08:00',
    passengers: 4,
    luggage: 3,
    fullName: '',
    email: '',
    phone: '+94 77 123 4567',
    flightNo: '',
    notes: ''
  });
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleNext = (e) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setStep(prev => prev + 1);
      window.scrollTo({ top: 300, behavior: 'smooth' });
    }, 240);
  };

  const handleBack = () => {
    setStep(prev => prev - 1);
  };

  const handleWhatsAppSubmit = () => {
    setLoading(true);
    const msg = `*Online Booking Confirmation - KDH Van Hire*
Service: ${formData.serviceType}
Pickup: ${formData.pickup}
Destination: ${formData.destination}
Date & Time: ${formData.date || 'To be decided'} at ${formData.time}
Passengers: ${formData.passengers}
Luggage Bags: ${formData.luggage}
Name: ${formData.fullName || 'Valued Customer'}
Phone: ${formData.phone}
Email: ${formData.email || 'N/A'}
Flight: ${formData.flightNo || 'N/A'}
Notes: ${formData.notes || 'None'}`;

    setTimeout(() => {
      setLoading(false);
      showToast('Opening WhatsApp with your complete booking details...');
      window.open(`https://wa.me/94771234567?text=${encodeURIComponent(msg)}`, '_blank');
    }, 280);
  };

  return (
    <main className="booking-page-main">
      <PageHero
        kicker="ONLINE RESERVATION"
        title="Book Your KDH Van"
        desc="Fill in your travel requirements below to reserve your Toyota KDH passenger van with a verified professional chauffeur."
        bgImage="/assets/booking/booking-hero-bg.jpg"
        breadcrumbs={[{ label: 'Booking' }]}
      />

      <div className="booking-main-section" style={{ padding: '60px 0 80px' }}>
        <div className="container booking-container">
          {/* Stepper bar */}
          <div className="booking-stepper-bar" style={{ marginBottom: '40px' }}>
            <div className={`step-item ${step >= 1 ? 'active' : ''} ${step > 1 ? 'completed' : ''}`}>
              <span className="step-circle">1</span>
              <span className="step-text">Trip Details</span>
            </div>
            <div className="step-divider"></div>
            <div className={`step-item ${step >= 2 ? 'active' : ''} ${step > 2 ? 'completed' : ''}`}>
              <span className="step-circle">2</span>
              <span className="step-text">Passenger Info</span>
            </div>
            <div className="step-divider"></div>
            <div className={`step-item ${step >= 3 ? 'active' : ''}`}>
              <span className="step-circle">3</span>
              <span className="step-text">Review &amp; Submit</span>
            </div>
          </div>

          <div className="booking-layout-grid" style={{ display: 'grid', gridTemplateColumns: '1fr 380px', gap: '32px' }}>
            {/* Left: Wizard Form Card */}
            <div className="booking-form-pane" style={{ background: '#ffffff', border: '1px solid #e2e8f0', borderRadius: '16px', padding: '36px 32px', boxShadow: '0 4px 18px rgba(0,0,0,0.03)' }}>
              {step === 1 && (
                <form onSubmit={handleNext}>
                  <h3 className="booking-pane-title">Trip Details</h3>
                  <p className="booking-pane-desc">Where and when would you like to travel?</p>

                  <div className="modal-form-grid" style={{ marginTop: '24px' }}>
                    <div className="form-group full-width">
                      <label className="field-label">Service Type</label>
                      <select name="serviceType" value={formData.serviceType} onChange={handleChange} className="field-select">
                        <option value="Airport Transfer">Airport Transfer (BIA CMB &lt;-&gt; Destination)</option>
                        <option value="Point to Point Hire">Point to Point Private Transfer</option>
                        <option value="Daily Hire">Daily Hire with Driver (80-100 km included)</option>
                        <option value="Multi-Day Tour">Multi-Day Tour Package</option>
                        <option value="Events & Weddings">Events &amp; Weddings Transport</option>
                        <option value="Corporate Transport">Corporate &amp; Executive Transport</option>
                      </select>
                    </div>

                    <div className="form-group">
                      <label className="field-label">Pickup Location *</label>
                      <input
                        type="text"
                        name="pickup"
                        value={formData.pickup}
                        onChange={handleChange}
                        className="field-input"
                        required
                      />
                    </div>

                    <div className="form-group">
                      <label className="field-label">Destination Location *</label>
                      <input
                        type="text"
                        name="destination"
                        value={formData.destination}
                        onChange={handleChange}
                        className="field-input"
                        required
                      />
                    </div>

                    <div className="form-group">
                      <label className="field-label">Travel Date *</label>
                      <input
                        type="date"
                        name="date"
                        value={formData.date}
                        onChange={handleChange}
                        className="field-input"
                        required
                      />
                    </div>

                    <div className="form-group">
                      <label className="field-label">Pickup Time *</label>
                      <input
                        type="time"
                        name="time"
                        value={formData.time}
                        onChange={handleChange}
                        className="field-input"
                        required
                      />
                    </div>

                    <div className="form-group">
                      <label className="field-label">Passengers</label>
                      <select name="passengers" value={formData.passengers} onChange={handleChange} className="field-select">
                        <option value="1">1 Passenger</option>
                        <option value="2">2 Passengers</option>
                        <option value="4">3 – 6 Passengers</option>
                        <option value="8">7 – 10 Passengers</option>
                        <option value="14">11 – 14 Passengers (Max)</option>
                      </select>
                    </div>

                    <div className="form-group">
                      <label className="field-label">Luggage Pieces</label>
                      <select name="luggage" value={formData.luggage} onChange={handleChange} className="field-select">
                        <option value="1">1 – 2 Bags</option>
                        <option value="3">3 – 5 Bags</option>
                        <option value="8">6 – 8 Bags (Full Trunk)</option>
                      </select>
                    </div>
                  </div>

                  <div style={{ marginTop: '32px', display: 'flex', justifyContent: 'flex-end' }}>
                    <button type="submit" className={`btn-primary ${loading ? 'btn-loading' : ''}`} style={{ height: '50px', padding: '0 32px' }}>
                      Next: Passenger Info &rarr;
                    </button>
                  </div>
                </form>
              )}

              {step === 2 && (
                <form onSubmit={handleNext}>
                  <h3 className="booking-pane-title">Passenger Information</h3>
                  <p className="booking-pane-desc">How can our driver and coordinator contact you?</p>

                  <div className="modal-form-grid" style={{ marginTop: '24px' }}>
                    <div className="form-group">
                      <label className="field-label">Full Name *</label>
                      <input
                        type="text"
                        name="fullName"
                        value={formData.fullName}
                        onChange={handleChange}
                        placeholder="e.g. David Miller"
                        className="field-input"
                        required
                      />
                    </div>

                    <div className="form-group">
                      <label className="field-label">WhatsApp Number *</label>
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        className="field-input"
                        required
                      />
                    </div>

                    <div className="form-group">
                      <label className="field-label">Email Address *</label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="e.g. david@example.com"
                        className="field-input"
                        required
                      />
                    </div>

                    <div className="form-group">
                      <label className="field-label">Flight Number (If Airport)</label>
                      <input
                        type="text"
                        name="flightNo"
                        value={formData.flightNo}
                        onChange={handleChange}
                        placeholder="e.g. QR 664 / UL 504"
                        className="field-input"
                      />
                    </div>

                    <div className="form-group full-width">
                      <label className="field-label">Special Requests / Notes</label>
                      <textarea
                        name="notes"
                        value={formData.notes}
                        onChange={handleChange}
                        rows="3"
                        placeholder="Child seat, wheelchair space, specific route requests..."
                        className="field-textarea"
                      ></textarea>
                    </div>
                  </div>

                  <div style={{ marginTop: '32px', display: 'flex', justifyContent: 'space-between' }}>
                    <button type="button" className="btn-modal-back" onClick={handleBack}>
                      &larr; Back
                    </button>
                    <button type="submit" className={`btn-primary ${loading ? 'btn-loading' : ''}`} style={{ height: '50px', padding: '0 32px' }}>
                      Review Summary &rarr;
                    </button>
                  </div>
                </form>
              )}

              {step === 3 && (
                <div>
                  <h3 className="booking-pane-title">Review &amp; Confirm</h3>
                  <p className="booking-pane-desc">Review your trip details before submitting to WhatsApp.</p>

                  <div className="booking-summary-box" style={{ marginTop: '24px' }}>
                    <div className="summary-list">
                      <div className="summary-row">
                        <span className="summary-label">Service Type:</span>
                        <span className="summary-val">{formData.serviceType}</span>
                      </div>
                      <div className="summary-row">
                        <span className="summary-label">Pickup:</span>
                        <span className="summary-val">{formData.pickup}</span>
                      </div>
                      <div className="summary-row">
                        <span className="summary-label">Destination:</span>
                        <span className="summary-val">{formData.destination}</span>
                      </div>
                      <div className="summary-row">
                        <span className="summary-label">Date &amp; Time:</span>
                        <span className="summary-val">{formData.date || 'Today'} at {formData.time}</span>
                      </div>
                      <div className="summary-row">
                        <span className="summary-label">Passengers:</span>
                        <span className="summary-val">{formData.passengers} Passengers &bull; {formData.luggage} Bags</span>
                      </div>
                      <div className="summary-row">
                        <span className="summary-label">Primary Guest:</span>
                        <span className="summary-val">{formData.fullName} ({formData.phone})</span>
                      </div>
                    </div>
                  </div>

                  <div style={{ marginTop: '32px', display: 'flex', justifyContent: 'space-between' }}>
                    <button type="button" className="btn-modal-back" onClick={handleBack}>
                      &larr; Back
                    </button>
                    <button
                      type="button"
                      className={`btn-confirm-wa ${loading ? 'btn-loading' : ''}`}
                      onClick={handleWhatsAppSubmit}
                      style={{ height: '50px', padding: '0 32px' }}
                    >
                      Confirm Booking on WhatsApp
                    </button>
                  </div>
                </div>
              )}
            </div>

            {/* Right: Vehicle & Trust Perks Sidebar */}
            <aside className="booking-sidebar">
              <div style={{ background: '#ffffff', border: '1px solid #e2e8f0', borderRadius: '16px', overflow: 'hidden', padding: '24px', boxShadow: '0 4px 18px rgba(0,0,0,0.03)', marginBottom: '24px' }}>
                <img src="/assets/home-page/hero-van.jpg" alt="Toyota KDH Van" style={{ width: '100%', borderRadius: '12px', marginBottom: '16px' }} loading="lazy" />
                <h4 style={{ fontSize: '18px', fontWeight: '800', color: '#081726', margin: '0 0 6px' }}>Toyota KDH Passenger Van</h4>
                <p style={{ fontSize: '14px', color: '#64748b', lineHeight: '1.5', margin: '0 0 16px' }}>
                  Premium high-roof van equipped with dual AC, reclining seats, generous luggage capacity and charging ports.
                </p>
                <div style={{ borderTop: '1px solid #f1f5f9', paddingTop: '14px' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '13.5px', color: '#16a34a', fontWeight: '700', marginBottom: '6px' }}>
                    <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.8"><polyline points="20 6 9 17 4 12"></polyline></svg>
                    100% Guaranteed Availability
                  </div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '13.5px', color: '#16a34a', fontWeight: '700' }}>
                    <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.8"><polyline points="20 6 9 17 4 12"></polyline></svg>
                    Pay Directly to Driver on Arrival
                  </div>
                </div>
              </div>

              <div style={{ background: '#081726', color: '#ffffff', borderRadius: '16px', padding: '24px' }}>
                <h4 style={{ fontSize: '17px', fontWeight: '800', margin: '0 0 8px' }}>Need Urgent Assistance?</h4>
                <p style={{ fontSize: '13.5px', color: '#cbd5e1', lineHeight: '1.5', margin: '0 0 16px' }}>
                  Our dispatch desk is active 24/7. Chat with us directly on WhatsApp for flight changes or last-minute pickups.
                </p>
                <a
                  href="https://wa.me/94771234567"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-whatsapp"
                  style={{ width: '100%', height: '44px', fontSize: '14px' }}
                >
                  Chat with Dispatcher
                </a>
              </div>
            </aside>
          </div>
        </div>
      </div>
    </main>
  );
}

