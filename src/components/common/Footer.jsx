import React from 'react';
import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="site-footer" id="contact">
      <div className="container">
        <div className="footer-top-grid">
          {/* Column 1: Brand Info */}
          <div className="footer-col-brand">
            <Link to="/" className="brand-logo" aria-label="KDH Van Hire Sri Lanka Home">
              <img src="/assets/logo.png" alt="KDH Van Hire Sri Lanka" className="brand-logo-img" width="220" height="38" />
            </Link>
            <p className="footer-desc" style={{ marginTop: '14px' }}>
              Reliable KDH van hire with professional drivers for airport transfers, private tours and everyday travel across Sri Lanka.
            </p>
          </div>

          {/* Column 2: Quick Links */}
          <div className="footer-col">
            <h4 className="footer-col-title">Quick Links</h4>
            <ul className="footer-nav-list">
              <li><Link to="/">› Home</Link></li>
              <li><Link to="/services">› Our Services</Link></li>
              <li><Link to="/fleet">› Our Fleet</Link></li>
              <li><Link to="/pricing">› Pricing</Link></li>
              <li><Link to="/travel-guide">› Travel Guide</Link></li>
              <li><Link to="/about">› About Us</Link></li>
              <li><Link to="/contact">› Contact</Link></li>
            </ul>
          </div>

          {/* Column 3: Our Services */}
          <div className="footer-col">
            <h4 className="footer-col-title">Our Services</h4>
            <ul className="footer-nav-list">
              <li><Link to="/services">› Airport Transfers</Link></li>
              <li><Link to="/services/point-to-point">› Point to Point Hire</Link></li>
              <li><Link to="/services/daily-hire">› Daily Hire</Link></li>
              <li><Link to="/services/multi-day-tours">› Multi-Day Tours</Link></li>
              <li><Link to="/services/wedding-events">› Events &amp; Weddings</Link></li>
              <li><Link to="/services/corporate-transport">› Corporate Transport</Link></li>
            </ul>
          </div>

          {/* Column 4: Get in Touch */}
          <div className="footer-col">
            <h4 className="footer-col-title">Get in Touch</h4>
            <ul className="footer-contact-list">
              <li className="footer-contact-item">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                </svg>
                <a href="tel:+94771234567">+94 77 123 4567</a>
              </li>
              <li className="footer-contact-item wa">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12.04 2c-5.46 0-9.91 4.45-9.91 9.91 0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38c1.45.79 3.08 1.21 4.74 1.21 5.46 0 9.91-4.45 9.91-9.91 0-2.65-1.03-5.14-2.9-7.01A9.816 9.816 0 0 0 12.04 2zm.01 1.67c4.56 0 8.26 3.7 8.26 8.24 0 2.2-.86 4.28-2.42 5.83a8.204 8.204 0 0 1-5.84 2.41c-1.42 0-2.81-.36-4.04-1.05l-.29-.16-3.03.79.81-2.95-.19-.31c-.77-1.25-1.18-2.7-1.18-4.2 0-4.54 3.7-8.24 8.25-8.24zm4.52 11.66c-.25-.13-1.47-.72-1.7-.81-.23-.08-.39-.13-.56.13-.17.25-.64.81-.79.97-.14.17-.29.19-.54.06-.25-.13-1.06-.39-2.02-1.25-.75-.67-1.26-1.5-1.4-1.75-.15-.25-.02-.39.11-.51.11-.11.25-.29.37-.44.13-.15.17-.25.25-.42.08-.17.04-.31-.02-.44-.06-.13-.56-1.35-.77-1.85-.2-.49-.41-.42-.56-.43-.14-.01-.31-.01-.48-.01-.17 0-.44.06-.67.31-.23.25-.88.86-.88 2.1 0 1.24.9 2.44 1.03 2.61.13.17 1.77 2.7 4.29 3.79.6.26 1.07.42 1.43.53.6.19 1.15.16 1.58.1.48-.07 1.47-.6 1.68-1.18.21-.58.21-1.08.15-1.18-.06-.1-.23-.17-.48-.29z"/>
                </svg>
                <a href="https://wa.me/94771234567" target="_blank" rel="noopener noreferrer">+94 77 123 4567 (WhatsApp)</a>
              </li>
              <li className="footer-contact-item mail">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                  <polyline points="22,6 12,13 2,6"></polyline>
                </svg>
                <a href="mailto:info@kdhvanhire.lk">info@kdhvanhire.lk</a>
              </li>
              <li className="footer-contact-item loc">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                  <circle cx="12" cy="10" r="3"></circle>
                </svg>
                <span>Colombo, Sri Lanka</span>
              </li>
            </ul>
          </div>

          {/* Column 5: Follow Us */}
          <div className="footer-col">
            <h4 className="footer-col-title">Follow Us</h4>
            <div className="footer-social-links">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="social-icon-btn" aria-label="Facebook">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
                </svg>
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="social-icon-btn" aria-label="Instagram">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                </svg>
              </a>
              <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" className="social-icon-btn" aria-label="YouTube">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.33z"></path>
                  <polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02" fill="#070e1c"></polygon>
                </svg>
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="footer-bottom-bar">
          <p>© 2025 KDH Van Hire Sri Lanka. All rights reserved.</p>
          <div className="footer-legal-links">
            <Link to="/about">Privacy Policy</Link>
            <span className="footer-legal-separator">|</span>
            <Link to="/about">Terms &amp; Conditions</Link>
            <span className="footer-legal-separator">|</span>
            <Link to="/about">Cancellation Policy</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
