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

            {/* Right Card: Contact Info */}
            <div className="contact-info-card">
              <h2 className="contact-card-title">Contact Information</h2>
              <p className="contact-card-sub">Reach out to us directly through any of these channels.</p>

              <div className="contact-channels-list">
                <a href="tel:+94771234567" className="contact-channel-item">
                  <div className="contact-channel-icon">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>
                  </div>
                  <div className="contact-channel-text">
                    <span className="contact-channel-title">Phone Call</span>
                    <span className="contact-channel-sub">+94 77 123 4567</span>
                  </div>
                </a>

                <a href="https://wa.me/94771234567" target="_blank" rel="noopener noreferrer" className="contact-channel-item">
                  <div className="contact-channel-icon" style={{ backgroundColor: '#ecfdf5', color: '#16a34a' }}>
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.711 2.592 2.654-.696c1.029.575 1.761.883 2.806.883 3.181 0 5.767-2.587 5.767-5.766.001-3.18-2.585-5.766-5.767-5.766zm3.374 8.204c-.14.394-.717.728-1.009.774-.29.047-.648.067-2.096-.532-1.448-.598-2.378-2.062-2.45-2.158-.073-.096-.582-.774-.582-1.476 0-.702.364-1.047.494-1.189.13-.142.285-.178.38-.178.096 0 .19.002.273.007.087.005.203-.033.317.241.114.274.394.96.429 1.03.035.071.058.154.012.247-.046.094-.07.153-.139.234-.07.081-.146.182-.209.245-.07.07-.143.146-.062.286.082.14.364.601.782.973.539.479.993.627 1.133.697.14.07.222.059.305-.036.082-.095.352-.408.446-.548.094-.14.188-.117.316-.07.128.047.818.386.958.456.14.07.234.105.269.164.035.059.035.342-.105.736z"/></svg>
                  </div>
                  <div className="contact-channel-text">
                    <span className="contact-channel-title">WhatsApp Chat</span>
                    <span className="contact-channel-sub">+94 77 123 4567 (Fastest response)</span>
                  </div>
                </a>

                <a href="mailto:info@kdhvanhire.lk" className="contact-channel-item">
                  <div className="contact-channel-icon">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg>
                  </div>
                  <div className="contact-channel-text">
                    <span className="contact-channel-title">Email Us</span>
                    <span className="contact-channel-sub">info@kdhvanhire.lk</span>
                  </div>
                </a>

                <div className="contact-channel-item">
                  <div className="contact-channel-icon">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path><circle cx="12" cy="10" r="3"></circle></svg>
                  </div>
                  <div className="contact-channel-text">
                    <span className="contact-channel-title">Our Location</span>
                    <span className="contact-channel-sub">Colombo, Sri Lanka</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Map Section */}
          <div className="contact-find-card" style={{ marginTop: '48px' }}>
            <div className="contact-map-col">
              <a href="https://maps.google.com/?q=Colombo,Sri+Lanka" target="_blank" rel="noopener noreferrer">
                <img src="/assets/contact/colombo-map.png" alt="Colombo Location Map" className="contact-map-img" loading="lazy" />
              </a>
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

