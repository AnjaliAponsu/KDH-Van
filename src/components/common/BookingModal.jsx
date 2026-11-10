import React, { useState, useEffect } from 'react';
import { useApp } from '../../context/AppContext';

export default function BookingModal() {
  const { isBookingModalOpen, closeBookingModal, bookingPrefill, showToast } = useApp();
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    serviceType: 'Airport Transfer',
    pickup: '',
    destination: '',
    date: '',
    time: '08:00',
    passengers: 4,
    fullName: '',
    email: '',
    phone: '',
    luggage: 3,
    flightNo: '',
    notes: ''
  });
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (bookingPrefill) {
      setFormData(prev => ({
        ...prev,
        pickup: bookingPrefill.pickup || prev.pickup,
        destination: bookingPrefill.destination || prev.destination,
        date: bookingPrefill.date || prev.date,
        passengers: bookingPrefill.passengers || prev.passengers,
        serviceType: bookingPrefill.service || prev.serviceType
      }));
    }
    setStep(1);
  }, [bookingPrefill, isBookingModalOpen]);

  if (!isBookingModalOpen) return null;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleNext = () => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setStep(prev => prev + 1);
    }, 200);
  };

  const handleBack = () => {
    setStep(prev => prev - 1);
  };

  const handleWhatsAppConfirm = () => {
    setLoading(true);
    const msg = `*New KDH Van Booking Request*
Service: ${formData.serviceType}
Pickup: ${formData.pickup || 'To be specified'}
Dropoff: ${formData.destination || 'To be specified'}
Date & Time: ${formData.date || 'Flexible'} at ${formData.time}
Passengers: ${formData.passengers} | Luggage: ${formData.luggage} bags
Customer Name: ${formData.fullName || 'Valued Guest'}
Contact: ${formData.phone || 'Via WhatsApp'}
Email: ${formData.email || 'N/A'}
Notes: ${formData.notes || 'None'}`;

    setTimeout(() => {
      setLoading(false);
      showToast('Opening WhatsApp with your booking details...');
      window.open(`https://wa.me/94771234567?text=${encodeURIComponent(msg)}`, '_blank');
      closeBookingModal();
    }, 280);
  };

  return (
    <div className="booking-modal-overlay open" onClick={(e) => { if (e.target === e.currentTarget) closeBookingModal(); }}>
      <div className="booking-modal-card">
        {/* Modal Header */}
        <div className="booking-modal-header">
          <div className="modal-title-wrap">
            <span className="modal-kicker">Instant Van Reservation</span>
            <h3 className="modal-title">Book Your Toyota KDH Van</h3>
          </div>
          <button type="button" className="modal-close-btn" onClick={closeBookingModal} aria-label="Close modal">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4">
              <line x1="18" y1="6" x2="6" y2="18"></line>
              <line x1="6" y1="6" x2="18" y2="18"></line>
            </svg>
          </button>
        </div>

        {/* Stepper Bar */}
        <div className="booking-stepper-bar">
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
            <span className="step-text">Confirmation</span>
          </div>
        </div>

        {/* Modal Body */}
        <div className="booking-modal-body">
          {step === 1 && (
            <div className="step-content">
              <div className="modal-form-grid">
                <div className="form-group full-width">
                  <label className="field-label">Service Type</label>
                  <select name="serviceType" value={formData.serviceType} onChange={handleChange} className="field-select">
                    <option value="Airport Transfer">Airport Transfer (BIA &lt;-&gt; Destination)</option>
                    <option value="Point to Point Hire">Point to Point Private Transfer</option>
                    <option value="Daily Hire">Daily Hire with Driver (80-100 km included)</option>
                    <option value="Multi-Day Tour">Multi-Day Island Tour</option>
                    <option value="Events & Weddings">Wedding &amp; Event Transport</option>
                    <option value="Corporate Transport">Corporate &amp; Executive Transport</option>
                  </select>
                </div>

                <div className="form-group">
                  <label className="field-label">Pickup Location</label>
                  <input
                    type="text"
                    name="pickup"
                    value={formData.pickup}
                    onChange={handleChange}
                    placeholder="e.g. BIA Airport / Colombo"
                    className="field-input"
                  />
                </div>

                <div className="form-group">
                  <label className="field-label">Drop-off Destination</label>
                  <input
                    type="text"
                    name="destination"
                    value={formData.destination}
                    onChange={handleChange}
                    placeholder="e.g. Kandy / Galle / Ella"
                    className="field-input"
                  />
                </div>

                <div className="form-group">
                  <label className="field-label">Travel Date</label>
                  <input
                    type="date"
                    name="date"
                    value={formData.date}
                    onChange={handleChange}
                    className="field-input"
                  />
                </div>

                <div className="form-group">
                  <label className="field-label">Pickup Time</label>
                  <input
                    type="time"
                    name="time"
                    value={formData.time}
                    onChange={handleChange}
                    className="field-input"
                  />
                </div>

                <div className="form-group">
                  <label className="field-label">Passengers</label>
                  <select name="passengers" value={formData.passengers} onChange={handleChange} className="field-select">
                    <option value="1">1 Passenger</option>
                    <option value="2">2 Passengers</option>
                    <option value="4">4-6 Passengers</option>
                    <option value="8">7-10 Passengers</option>
                    <option value="14">11-14 Passengers (Max)</option>
                  </select>
                </div>

                <div className="form-group">
                  <label className="field-label">Luggage Bags</label>
                  <select name="luggage" value={formData.luggage} onChange={handleChange} className="field-select">
                    <option value="1">1-2 Large Bags</option>
                    <option value="3">3-5 Bags</option>
                    <option value="7">6-8 Bags (Full Boot)</option>
                  </select>
                </div>
              </div>
            </div>
          )}

          {step === 2 && (
            <div className="step-content">
              <div className="modal-form-grid">
                <div className="form-group">
                  <label className="field-label">Your Full Name *</label>
                  <input
                    type="text"
                    name="fullName"
                    value={formData.fullName}
                    onChange={handleChange}
                    placeholder="e.g. John Doe"
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
                    placeholder="e.g. +94 77 123 4567"
                    className="field-input"
                    required
                  />
                </div>

                <div className="form-group">
                  <label className="field-label">Email Address</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="e.g. john@example.com"
                    className="field-input"
                  />
                </div>

                <div className="form-group">
                  <label className="field-label">Flight Number (If Airport)</label>
                  <input
                    type="text"
                    name="flightNo"
                    value={formData.flightNo}
                    onChange={handleChange}
                    placeholder="e.g. UL 504 / EK 651"
                    className="field-input"
                  />
                </div>

                <div className="form-group full-width">
                  <label className="field-label">Special Requests / Notes</label>
                  <textarea
                    name="notes"
                    value={formData.notes}
                    onChange={handleChange}
                    placeholder="Baby seat, child booster, roof rack, surfboards, extra stops..."
                    className="field-textarea"
                    rows="3"
                  ></textarea>
                </div>
              </div>
            </div>
          )}

          {step === 3 && (
            <div className="step-content">
              <div className="booking-summary-box">
                <h4 className="summary-title">Booking Request Summary</h4>
                <div className="summary-list">
                  <div className="summary-row">
                    <span className="summary-label">Service:</span>
                    <span className="summary-val">{formData.serviceType}</span>
                  </div>
                  <div className="summary-row">
                    <span className="summary-label">Route:</span>
                    <span className="summary-val">{formData.pickup || 'Colombo'} &rarr; {formData.destination || 'Destination'}</span>
                  </div>
                  <div className="summary-row">
                    <span className="summary-label">Date &amp; Time:</span>
                    <span className="summary-val">{formData.date || 'Today'} at {formData.time}</span>
                  </div>
                  <div className="summary-row">
                    <span className="summary-label">Capacity:</span>
                    <span className="summary-val">{formData.passengers} Passengers &bull; {formData.luggage} Bags</span>
                  </div>
                  <div className="summary-row">
                    <span className="summary-label">Contact:</span>
                    <span className="summary-val">{formData.fullName || 'Guest'} ({formData.phone || '+94'})</span>
                  </div>
                </div>

                <div className="summary-notice">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#b45309" strokeWidth="2.2"><circle cx="12" cy="12" r="10"></circle><line x1="12" y1="8" x2="12" y2="12"></line><line x1="12" y1="16" x2="12.01" y2="16"></line></svg>
                  <span>Our coordinator will review vehicle availability and confirm your guaranteed quote on WhatsApp in under 5 minutes. No advance payment required right now!</span>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Modal Footer Controls */}
        <div className="booking-modal-footer">
          {step > 1 && (
            <button type="button" className="btn-modal-back" onClick={handleBack} disabled={loading}>
              &larr; Back
            </button>
          )}
          {step < 3 ? (
            <button 
              type="button" 
              className={`btn-modal-next ${loading ? 'btn-loading' : ''}`} 
              onClick={handleNext}
            >
              Continue &rarr;
            </button>
          ) : (
            <button 
              type="button" 
              className={`btn-confirm-wa ${loading ? 'btn-loading' : ''}`} 
              onClick={handleWhatsAppConfirm}
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.711 2.592 2.654-.696c1.029.575 1.761.883 2.806.883 3.181 0 5.767-2.587 5.767-5.766.001-3.18-2.585-5.766-5.767-5.766zm3.374 8.204c-.14.394-.717.728-1.009.774-.29.047-.648.067-2.096-.532-1.448-.598-2.378-2.062-2.45-2.158-.073-.096-.582-.774-.582-1.476 0-.702.364-1.047.494-1.189.13-.142.285-.178.38-.178.096 0 .19.002.273.007.087.005.203-.033.317.241.114.274.394.96.429 1.03.035.071.058.154.012.247-.046.094-.07.153-.139.234-.07.081-.146.182-.209.245-.07.07-.143.146-.062.286.082.14.364.601.782.973.539.479.993.627 1.133.697.14.07.222.059.305-.036.082-.095.352-.408.446-.548.094-.14.188-.117.316-.07.128.047.818.386.958.456.14.07.234.105.269.164.035.059.035.342-.105.736z"/></svg>
              Confirm on WhatsApp
            </button>
          )}
        </div>
      </div>
    </div>
  );
}

