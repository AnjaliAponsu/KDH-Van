import React, { useState } from 'react';
import PageHero from '../components/common/PageHero';
import { useApp } from '../context/AppContext';

export default function ContactPage() {
  const { showToast } = useApp();
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '+94 77 123 4567',
    enquiryType: '',
    message: ''
  });
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
      showToast('Thank you! Your message has been sent successfully.');
    }, 450);
  };

  return (
    <main className="contact-page-main">
      <PageHero
        kicker="CONTACT US"
        title="Get in Touch"
        desc="Have a question, need a custom travel itinerary, or want to check vehicle availability? Our team is here to assist you 24/7."
        bgImage="/assets/contact/contact-hero-bg.jpg"
        breadcrumbs={[{ label: 'Contact' }]}
      />

      <div className="contact-main-section">
        <div className="contact-container">
          <div className="contact-grid">
            {/* Left Card: Send Us a Message */}
            <div className="contact-form-card">
              <h2 className="contact-card-title">Send Us a Message</h2>
              <p className="contact-card-sub">Fill in the form below and we'll get back to you shortly.</p>

              {submitted ? (
                <div className="contact-success-banner">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path><polyline points="22 4 12 14.01 9 11.01"></polyline></svg>
                  <div>
                    <h4 className="contact-success-title">Message Received!</h4>
                    <p className="contact-success-desc">Our travel coordinator will reply via email and WhatsApp shortly.</p>
                  </div>
                </div>
              ) : (
                <form className="contact-form" onSubmit={handleSubmit}>
                  <div className="contact-form-row">
                    <div className="contact-form-group">
                      <label className="contact-label">Full Name <span className="contact-req">*</span></label>
                      <input
                        type="text"
                        className="contact-input"
                        placeholder="Your name"
                        required
                        value={formData.fullName}
                        onChange={e => setFormData({ ...formData, fullName: e.target.value })}
                      />
                    </div>

                    <div className="contact-form-group">
                      <label className="contact-label">Email Address <span className="contact-req">*</span></label>
                      <input
                        type="email"
                        className="contact-input"
                        placeholder="Your email"
                        required
                        value={formData.email}
                        onChange={e => setFormData({ ...formData, email: e.target.value })}
                      />
                    </div>
                  </div>

                  <div className="contact-form-row">
                    <div className="contact-form-group">
                      <label className="contact-label">Phone / WhatsApp <span className="contact-req">*</span></label>
                      <input
                        type="tel"
                        className="contact-input"
                        required
                        value={formData.phone}
                        onChange={e => setFormData({ ...formData, phone: e.target.value })}
                      />
                    </div>

                    <div className="contact-form-group">
                      <label className="contact-label">Enquiry Type <span className="contact-req">*</span></label>
                      <select
                        className="contact-select"
                        required
                        value={formData.enquiryType}
                        onChange={e => setFormData({ ...formData, enquiryType: e.target.value })}
                      >
                        <option value="" disabled>Select an option</option>
                        <option value="Airport Transfer">Airport Transfer</option>
                        <option value="Point to Point Hire">Point to Point Hire</option>
                        <option value="Daily Hire">Daily Hire</option>
                        <option value="Multi-Day Tour">Multi-Day Tour</option>
                        <option value="Events & Weddings">Events &amp; Weddings</option>
                        <option value="Corporate Transport">Corporate Transport</option>
                        <option value="General Inquiry">General Inquiry</option>
                      </select>
                    </div>
                  </div>

                  <div className="contact-form-group full-width">
                    <label className="contact-label">Your Message <span className="contact-req">*</span></label>
                    <textarea
                      className="contact-textarea"
                      rows="4"
                      placeholder="Tell us about your trip details, passenger count, destinations or any special requirements..."
                      required
                      value={formData.message}
                      onChange={e => setFormData({ ...formData, message: e.target.value })}
                    ></textarea>
                  </div>

                  <button
                    type="submit"
                    className={`contact-submit-btn ${loading ? 'btn-loading' : ''}`}
                    disabled={loading}
                  >
                    Send Message
                  </button>
                </form>
              )}
            </div>

            {/* Right Card: Contact Info (Executive Luxury Redesign) */}
            <div className="contact-info-card">
              <div className="contact-info-header">
                <div className="contact-card-kicker">
                  <span className="contact-kicker-dot"></span>
                  DIRECT VIP CHANNELS
                </div>
                <h2 className="contact-card-title">Contact Information</h2>
                <p className="contact-card-sub">Reach our Colombo operations team & chauffeur dispatch directly 24/7.</p>
              </div>

              <div className="contact-channels-list">
                {/* Channel 1: WhatsApp */}
                <a href="https://wa.me/94771234567" target="_blank" rel="noopener noreferrer" className="contact-channel-item" aria-label="Chat on WhatsApp">
                  <div className="contact-channel-badge badge-wa">
                    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path>
                    </svg>
                  </div>
                  <div className="contact-channel-text">
                    <div className="contact-channel-meta">
                      <span className="contact-channel-kicker">INSTANT CHAT &amp; QUOTES</span>
                      <span className="contact-channel-pill pill-online"><span className="pill-dot"></span> Online</span>
                    </div>
                    <span className="contact-channel-title">WhatsApp Concierge</span>
                    <span className="contact-channel-sub">+94 77 123 4567 • Instant reply under 3 mins</span>
                  </div>
                  <span className="contact-channel-arrow" aria-hidden="true">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                      <line x1="5" y1="12" x2="19" y2="12"></line>
                      <polyline points="12 5 19 12 12 19"></polyline>
                    </svg>
                  </span>
                </a>

                {/* Channel 2: Call Us */}
                <a href="tel:+94771234567" className="contact-channel-item" aria-label="Call +94 77 123 4567">
                  <div className="contact-channel-badge badge-phone">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                    </svg>
                  </div>
                  <div className="contact-channel-text">
                    <div className="contact-channel-meta">
                      <span className="contact-channel-kicker">24/7 CALL DISPATCH</span>
                      <span className="contact-channel-pill">Toll Free</span>
                    </div>
                    <span className="contact-channel-title">+94 77 123 4567</span>
                    <span className="contact-channel-sub">Live telephone bookings &amp; emergency dispatch</span>
                  </div>
                  <span className="contact-channel-arrow" aria-hidden="true">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                      <line x1="5" y1="12" x2="19" y2="12"></line>
                      <polyline points="12 5 19 12 12 19"></polyline>
                    </svg>
                  </span>
                </a>

                {/* Channel 3: Email Us */}
                <a href="mailto:info@kdhvanhire.lk" className="contact-channel-item" aria-label="Email info@kdhvanhire.lk">
                  <div className="contact-channel-badge badge-email">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                      <polyline points="22,6 12,13 2,6"></polyline>
                    </svg>
                  </div>
                  <div className="contact-channel-text">
                    <div className="contact-channel-meta">
                      <span className="contact-channel-kicker">RESERVATIONS &amp; QUOTES</span>
                      <span className="contact-channel-pill">Official</span>
                    </div>
                    <span className="contact-channel-title">info@kdhvanhire.lk</span>
                    <span className="contact-channel-sub">Multi-day tours &amp; corporate hire agreements</span>
                  </div>
                  <span className="contact-channel-arrow" aria-hidden="true">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                      <line x1="5" y1="12" x2="19" y2="12"></line>
                      <polyline points="12 5 19 12 12 19"></polyline>
                    </svg>
                  </span>
                </a>

                {/* Channel 4: Our Location */}
                <a href="https://maps.google.com/?q=Colombo,Sri+Lanka" target="_blank" rel="noopener noreferrer" className="contact-channel-item" aria-label="Our Location in Colombo, Sri Lanka">
                  <div className="contact-channel-badge badge-loc">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                      <circle cx="12" cy="10" r="3"></circle>
                    </svg>
                  </div>
                  <div className="contact-channel-text">
                    <div className="contact-channel-meta">
                      <span className="contact-channel-kicker">OPERATING BASE &amp; GARAGE</span>
                      <span className="contact-channel-pill">Main Depot</span>
                    </div>
                    <span className="contact-channel-title">Colombo, Sri Lanka</span>
                    <span className="contact-channel-sub">VIP departure depot &amp; 24/7 airport terminal hub</span>
                  </div>
                  <span className="contact-channel-arrow" aria-hidden="true">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                      <line x1="5" y1="12" x2="19" y2="12"></line>
                      <polyline points="12 5 19 12 12 19"></polyline>
                    </svg>
                  </span>
                </a>
              </div>

              {/* Executive Dispatch Assurance Footer */}
              <div className="contact-info-footer">
                <div className="contact-footer-status">
                  <span className="status-pulse-ring"></span>
                  <span className="status-dot"></span>
                </div>
                <div className="contact-footer-copy">
                  <strong>Live Concierge Active:</strong> Average response under 5 mins &bull; 100% Islandwide Fleet Coverage
                </div>
              </div>
            </div>
          </div>

          {/* Map Section */}
          <div className="contact-find-card" style={{ marginTop: '48px' }}>
            <div className="contact-map-col">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d126743.58586012485!2d79.78616422709961!3d6.921938599999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ae253d10f7a7003%3A0x320b2e4d32d3838d!2sColombo%2C%20Sri%20Lanka!5e0!3m2!1sen!2slk!4v1700000000000!5m2!1sen!2slk"
                width="100%"
                height="100%"
                style={{ border: 0, width: '100%', height: '100%', minHeight: '280px', display: 'block' }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Colombo Sri Lanka Map - KDH Van Hire"
              ></iframe>
            </div>
            <div className="contact-find-info">
              <div className="contact-find-head">
                <span className="contact-find-bar"></span>
                <h3 className="contact-find-title">Visit or Find Us</h3>
              </div>
              <p className="contact-find-desc">We're based in Colombo and provide islandwide van hire services across Sri Lanka.</p>
              <a href="https://maps.google.com/?q=Colombo,Sri+Lanka" target="_blank" rel="noopener noreferrer" className="contact-btn-gmaps">
                View on Google Maps &rarr;
              </a>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

