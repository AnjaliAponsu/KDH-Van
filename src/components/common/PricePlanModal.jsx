import React, { useState } from 'react';
import { useApp } from '../../context/AppContext';

export default function PricePlanModal() {
  const { isPricePlanModalOpen, closePricePlanModal, activePricePlan, showToast } = useApp();
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    date: '',
    notes: ''
  });
  const [loading, setLoading] = useState(false);

  if (!isPricePlanModalOpen || !activePricePlan) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    const msg = `*KDH Pricing Plan Inquiry*
Selected Plan: ${activePricePlan.name} (${activePricePlan.price})
Customer Name: ${formData.name}
Phone/WhatsApp: ${formData.phone}
Email: ${formData.email || 'N/A'}
Approx Date: ${formData.date || 'Flexible'}
Requirements: ${formData.notes || 'Standard package'}`;

    setTimeout(() => {
      setLoading(false);
      showToast('Opening WhatsApp with your plan details...');
      window.open(`https://wa.me/94771234567?text=${encodeURIComponent(msg)}`, '_blank');
      closePricePlanModal();
    }, 280);
  };

  return (
    <div className="price-plan-modal-overlay open" onClick={(e) => { if (e.target === e.currentTarget) closePricePlanModal(); }}>
      <div className="price-plan-modal-card">
        <div className="price-plan-modal-header">
          <div className="modal-title-wrap">
            <span className="modal-kicker">Custom Pricing Package</span>
            <h3 className="modal-title">{activePricePlan.name}</h3>
          </div>
          <button type="button" className="modal-close-btn" onClick={closePricePlanModal}>
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4">
              <line x1="18" y1="6" x2="6" y2="18"></line>
              <line x1="6" y1="6" x2="18" y2="18"></line>
            </svg>
          </button>
        </div>

        <form onSubmit={handleSubmit} className="price-plan-modal-body">
          <div className="plan-badge-highlight">
            <span className="highlight-price">{activePricePlan.price}</span>
            <span className="highlight-desc">{activePricePlan.desc}</span>
          </div>

          <div className="modal-form-grid">
            <div className="form-group">
              <label className="field-label">Your Full Name *</label>
              <input
                type="text"
                className="field-input"
                placeholder="e.g. Sarah Jenkins"
                required
                value={formData.name}
                onChange={e => setFormData({ ...formData, name: e.target.value })}
              />
            </div>

            <div className="form-group">
              <label className="field-label">WhatsApp Number *</label>
              <input
                type="tel"
                className="field-input"
                placeholder="e.g. +94 77 123 4567"
                required
                value={formData.phone}
                onChange={e => setFormData({ ...formData, phone: e.target.value })}
              />
            </div>

            <div className="form-group">
              <label className="field-label">Email Address</label>
              <input
                type="email"
                className="field-input"
                placeholder="e.g. sarah@example.com"
                value={formData.email}
                onChange={e => setFormData({ ...formData, email: e.target.value })}
              />
            </div>

            <div className="form-group">
              <label className="field-label">Travel Date (Estimated)</label>
              <input
                type="date"
                className="field-input"
                value={formData.date}
                onChange={e => setFormData({ ...formData, date: e.target.value })}
              />
            </div>

            <div className="form-group full-width">
              <label className="field-label">Specific Destinations or Custom Requests</label>
              <textarea
                className="field-textarea"
                rows="3"
                placeholder="Let us know your route, places you want to visit, or group size..."
                value={formData.notes}
                onChange={e => setFormData({ ...formData, notes: e.target.value })}
              ></textarea>
            </div>
          </div>

          <div className="price-plan-modal-footer">
            <button type="button" className="btn-modal-cancel" onClick={closePricePlanModal}>
              Cancel
            </button>
            <button type="submit" className={`price-plan-btn-submit ${loading ? 'btn-loading' : ''}`}>
              Request Quote on WhatsApp
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

