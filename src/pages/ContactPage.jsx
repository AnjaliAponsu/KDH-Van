import React, { useState } from 'react';
import PageHero from '../components/common/PageHero';
import { useApp } from '../context/AppContext';

export default function ContactPage() {
  const { showToast } = useApp();
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    enquiryType: '',
    message: ''
  });
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [openFaq, setOpenFaq] = useState(0);

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    const waText = encodeURIComponent(
      `*New KDH Van Hire Inquiry (Contact Page)*\n\n` +
      `*Name:* ${formData.fullName}\n` +
      `*Email:* ${formData.email}\n` +
      `*Phone / WhatsApp:* ${formData.phone}\n` +
      `*Enquiry Type:* ${formData.enquiryType}\n` +
      `*Message:* ${formData.message}\n\n` +
      `Please get back to me as soon as possible.`
    );
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
      showToast('Thank you! Connecting your enquiry via WhatsApp...');
      setTimeout(() => {
        window.open(`https://wa.me/94771234567?text=${waText}`, '_blank');
      }, 700);
    }, 450);
  };

  const faqs = [
    {
      q: "How quickly will I receive confirmation for my inquiry?",
      a: "For WhatsApp messages, our on-duty concierge typically replies within 3 to 5 minutes 24/7. Inquiries submitted through our website contact form or email receive comprehensive official quotations and vehicle availability within 30 to 60 minutes."
    },
    {
      q: "Is an English-speaking chauffeur included with every rental?",
      a: "Yes, 100% of our hires include a licensed, highly experienced English-speaking professional chauffeur certified by the Sri Lanka Tourism Development Authority. To maintain supreme passenger safety and full vehicle insurance protection, we do not provide self-drive van rentals."
    },
    {
      q: "What is included in the van rental quotation?",
      a: "All quotes are completely transparent with zero hidden charges. Rates include the Toyota KDH 223 High Roof commuter van, professional chauffeur allowance, air-conditioning, fuel for agreed itineraries, expressway tolls, passenger insurance, and complimentary bottled water."
    },
    {
      q: "What happens if my inbound flight to Colombo (BIA) is delayed?",
      a: "Flight tracking is included free of charge. We monitor incoming flights at Bandaranaike International Airport in real-time. If your flight is delayed or arrives early, your chauffeur automatically adjusts arrival time without waiting penalty fees."
    },
    {
      q: "What payment methods and currencies do you accept?",
      a: "We accept major international currencies (USD, EUR, GBP, AUD) as well as Sri Lankan Rupees (LKR). Payment can be completed via secure online payment link, credit/debit card, bank transfer, or cash upon arrival with receipt."
    }
  ];

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
              <div className="contact-card-kicker">
                <span className="contact-kicker-dot"></span>
                DIRECT INQUIRY &amp; QUOTE
              </div>
              <h2 className="contact-card-title">Send Us a Message</h2>
              <p className="contact-card-sub">Fill in the form below and we'll get back to you shortly.</p>

              {submitted ? (
                <div className="contact-success-banner">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path><polyline points="22 4 12 14.01 9 11.01"></polyline></svg>
                  <div>
                    <h4 className="contact-success-title">Message Received!</h4>
                    <p className="contact-success-desc">Our travel coordinator is connecting via WhatsApp and email shortly.</p>
                  </div>
                </div>
              ) : (
                <form className="contact-form" onSubmit={handleSubmit}>
                  <div className="contact-form-row">
                    <div className="contact-form-group">
                      <label className="contact-label">Full Name <span className="contact-req">*</span></label>
                      <div className="contact-input-wrap">
                        <span className="contact-input-icon">
                          <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                            <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
                            <circle cx="12" cy="7" r="4" />
                          </svg>
                        </span>
                        <input
                          type="text"
                          className="contact-input"
                          placeholder="Your name"
                          required
                          value={formData.fullName}
                          onChange={e => setFormData({ ...formData, fullName: e.target.value })}
                        />
                      </div>
                    </div>

                    <div className="contact-form-group">
                      <label className="contact-label">Email Address <span className="contact-req">*</span></label>
                      <div className="contact-input-wrap">
                        <span className="contact-input-icon">
                          <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                            <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                            <polyline points="22,6 12,13 2,6" />
                          </svg>
                        </span>
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
                  </div>

                  <div className="contact-form-row">
                    <div className="contact-form-group">
                      <label className="contact-label">Phone / WhatsApp <span className="contact-req">*</span></label>
                      <div className="contact-input-wrap">
                        <span className="contact-input-icon">
                          <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                            <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                          </svg>
                        </span>
                        <input
                          type="tel"
                          className="contact-input"
                          placeholder="+94 7X XXX XXXX"
                          required
                          value={formData.phone}
                          onChange={e => setFormData({ ...formData, phone: e.target.value })}
                        />
                      </div>
                    </div>

                    <div className="contact-form-group">
                      <label className="contact-label">Enquiry Type <span className="contact-req">*</span></label>
                      <div className="contact-input-wrap">
                        <select
                          className="contact-select"
                          required
                          value={formData.enquiryType}
                          onChange={e => setFormData({ ...formData, enquiryType: e.target.value })}
                        >
                          <option value="" disabled>Select an option</option>
                          <option value="Airport Transfer">Airport Transfer (BIA Katunayake)</option>
                          <option value="Point to Point Hire">Point-to-Point Express Transfer</option>
                          <option value="Daily Hire">Full-Day Private Van Hire</option>
                          <option value="Multi-Day Tour">Multi-Day Sri Lanka Tour</option>
                          <option value="Events & Weddings">Wedding &amp; VIP Event Escort</option>
                          <option value="Corporate Transport">Corporate Fleet Transport</option>
                          <option value="General Inquiry">Custom Itinerary / Other</option>
                        </select>
                        <span className="contact-select-chevron">
                          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                            <polyline points="6 9 12 15 18 9" />
                          </svg>
                        </span>
                      </div>
                    </div>
                  </div>

                  <div className="contact-form-group full-width">
                    <label className="contact-label">Your Message <span className="contact-req">*</span></label>
                    <div className="contact-textarea-wrap">
                      <span className="contact-textarea-icon">
                        <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                          <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
                        </svg>
                      </span>
                      <textarea
                        className="contact-textarea"
                        placeholder="Tell us about your trip details, passenger count, destinations or any special requirements..."
                        required
                        value={formData.message}
                        onChange={e => setFormData({ ...formData, message: e.target.value })}
                      ></textarea>
                    </div>
                  </div>

                  <button
                    type="submit"
                    className={`contact-submit-btn ${loading ? 'btn-loading' : ''}`}
                    disabled={loading}
                  >
                    <svg width="17" height="17" viewBox="0 0 24 24" fill="currentColor" style={{ transform: 'rotate(-45deg)', display: 'inline-block', marginRight: '4px' }}>
                      <path d="M2.01 21L23 12 2.01 3 2 10l15 2-15 2z" />
                    </svg>
                    Send Message &amp; Connect on WhatsApp
                  </button>
                  <div className="contact-form-privacy">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect>
                      <path d="M7 11V7a5 5 0 0 1 10 0v4"></path>
                    </svg>
                    100% Privacy Guaranteed &bull; Direct Dispatch to On-Duty Concierge
                  </div>
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

          {/* Middle Section: Operations Hub & Google Map */}
          <div className="contact-find-card">
            <div className="contact-map-col">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d126743.58586012485!2d79.78616422709961!3d6.921938599999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ae253d10f7a7003%3A0x320b2e4d32d3838d!2sColombo%2C%20Sri%20Lanka!5e0!3m2!1sen!2slk!4v1700000000000!5m2!1sen!2slk"
                width="100%"
                height="100%"
                style={{ border: 0, width: '100%', height: '100%', minHeight: '380px', display: 'block' }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Colombo Sri Lanka Map - KDH Van Hire"
              ></iframe>
            </div>
            <div className="contact-find-info">
              <div className="contact-find-header-wrap">
                <div className="contact-card-kicker">
                  <span className="contact-kicker-dot"></span>
                  ISLANDWIDE OPERATIONS &amp; DISPATCH
                </div>
                <h3 className="contact-find-title">Headquarters &amp; Airport Meet Points</h3>
                <p className="contact-find-desc">
                  Coordinating luxury Toyota KDH High Roof commuter vans from our primary Colombo hub with dedicated airport counters and chauffeurs positioned islandwide.
                </p>
              </div>

              <div className="contact-find-details-grid">
                <div className="contact-find-detail-item">
                  <div className="find-detail-icon">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path>
                      <polyline points="9 22 9 12 15 12 15 22"></polyline>
                    </svg>
                  </div>
                  <div className="find-detail-text">
                    <span className="find-detail-label">Main Depot &amp; Garage</span>
                    <strong className="find-detail-val">45 Baseline Road, Dematagoda, Colombo 09</strong>
                  </div>
                </div>

                <div className="contact-find-detail-item">
                  <div className="find-detail-icon">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M17.8 19.2L16 11l3.5-3.5C21 6 21.5 4 21 3c-1-.5-3 0-4.5 1.5L13 8 4.8 6.2c-.5-.1-.9.1-1.1.5l-.3.5c-.2.5-.1 1 .3 1.3L9 12l-2 3H4l-1 1 3 2 2 3 1-1v-3l3-2 3.5 5.3c.3.4.8.5 1.3.3l.5-.3c.4-.2.6-.6.5-1.1z"></path>
                    </svg>
                  </div>
                  <div className="find-detail-text">
                    <span className="find-detail-label">Airport Arrival Point</span>
                    <strong className="find-detail-val">BIA Katunayake (CMB) — Arrival Hall Counter &amp; Bay 4</strong>
                  </div>
                </div>

                <div className="contact-find-detail-item">
                  <div className="find-detail-icon">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <circle cx="12" cy="12" r="10"></circle>
                      <polyline points="12 6 12 12 16 14"></polyline>
                    </svg>
                  </div>
                  <div className="find-detail-text">
                    <span className="find-detail-label">Operating Hours</span>
                    <strong className="find-detail-val">24/7 Islandwide Chauffeur Dispatch &amp; Roadside Concierge</strong>
                  </div>
                </div>
              </div>

              <div className="contact-find-actions">
                <a href="https://maps.google.com/?q=Colombo,Sri+Lanka" target="_blank" rel="noopener noreferrer" className="contact-btn-gmaps">
                  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.3" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                    <circle cx="12" cy="10" r="3" />
                  </svg>
                  Get Directions on Google Maps
                  <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.3" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
                    <polyline points="15 3 21 3 21 9" />
                    <line x1="10" y1="14" x2="21" y2="3" />
                  </svg>
                </a>
                <a href="tel:+94771234567" className="contact-btn-call">
                  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                  </svg>
                  Call Dispatch: +94 77 123 4567
                </a>
              </div>
            </div>
          </div>

          {/* Trust Strip (3 Badges) */}
          <div className="contact-trust-strip">
            <div className="contact-trust-item">
              <div className="contact-trust-icon">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M3 18v-6a9 9 0 0 1 18 0v6" />
                  <path d="M21 19a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h3zM3 19a2 2 0 0 0 2 2h1a2 2 0 0 0 2-2v-3a2 2 0 0 0-2-2H3z" />
                </svg>
              </div>
              <div className="contact-trust-text">
                <h4 className="contact-trust-title">Quick Support</h4>
                <p className="contact-trust-sub">We usually respond within minutes.</p>
              </div>
            </div>

            <div className="contact-trust-item">
              <div className="contact-trust-icon">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
                  <line x1="16" y1="2" x2="16" y2="6" />
                  <line x1="8" y1="2" x2="8" y2="6" />
                  <line x1="3" y1="10" x2="21" y2="10" />
                </svg>
              </div>
              <div className="contact-trust-text">
                <h4 className="contact-trust-title">Flexible Bookings</h4>
                <p className="contact-trust-sub">For airport, tours, and custom trips.</p>
              </div>
            </div>

            <div className="contact-trust-item">
              <div className="contact-trust-icon">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                  <polyline points="9 12 11 14 15 10" />
                </svg>
              </div>
              <div className="contact-trust-text">
                <h4 className="contact-trust-title">Trusted &amp; Reliable</h4>
                <p className="contact-trust-sub">Well-maintained vehicles &amp; professional drivers.</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Frequently Asked Questions (FAQ) Section */}
      <section className="faq-section" id="faq">
        <div className="container">
          <div className="section-header">
            <div className="section-eyebrow">COMMON INQUIRIES</div>
            <h2 className="section-title">Frequently Asked Questions</h2>
            <p className="section-subtitle">Key information regarding bookings, airport meet &amp; greets, chauffeur services, and payment options.</p>
          </div>
          <div className="faq-container">
            <div className="faq-accordion">
              {faqs.map((faq, idx) => (
                <div key={idx} className={`faq-item ${openFaq === idx ? 'active' : ''}`}>
                  <div
                    className="faq-question"
                    onClick={() => setOpenFaq(openFaq === idx ? null : idx)}
                    style={{ cursor: 'pointer' }}
                  >
                    <span className="faq-question-text">{faq.q}</span>
                    <svg className="faq-chevron" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                      <polyline points="6 9 12 15 18 9"></polyline>
                    </svg>
                  </div>
                  <div className="faq-answer">
                    <p className="faq-answer-text">{faq.a}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
