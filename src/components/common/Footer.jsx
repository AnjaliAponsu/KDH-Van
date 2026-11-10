import React from 'react';
import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="site-footer" id="contact">
      <div className="container">
        <div className="footer-grid">
          {/* Column 1: Brand Info */}
          <div className="footer-col brand-col">
            <Link to="/" className="footer-logo-link">
              <div className="brand-logo-wrap">
                <svg className="brand-logo-icon" viewBox="0 0 48 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M4 18L10 6H34L44 14V24H40V26C40 27.1 39.1 28 38 28C36.9 28 36 27.1 36 26V24H16V26C16 27.1 15.1 28 14 28C12.9 28 12 27.1 12 26V24H4V18Z" stroke="#ffb900" strokeWidth="2.4" strokeLinejoin="round"/>
                  <circle cx="14" cy="24" r="3.5" fill="#081726" stroke="#ffb900" strokeWidth="2.4"/>
                  <circle cx="37" cy="24" r="3.5" fill="#081726" stroke="#ffb900" strokeWidth="2.4"/>
                  <path d="M12 9H22V15H8L12 9Z" fill="#ffb900" fillOpacity="0.25" stroke="#ffb900" strokeWidth="1.8"/>
                  <path d="M25 9H33L39 15H25V9Z" fill="#ffb900" fillOpacity="0.25" stroke="#ffb900" strokeWidth="1.8"/>
                </svg>
                <div className="brand-text-block">
                  <span className="brand-name">KDH Van Hire</span>
                  <span className="brand-tagline">Sri Lanka</span>
                </div>
              </div>
            </Link>
            <p className="footer-desc">
              Reliable KDH van hire with professional drivers for airport transfers, private tours and everyday travel across Sri Lanka.
            </p>
          </div>

          {/* Column 2: Quick Links */}
          <div className="footer-col">
            <h4 className="footer-col-title">Quick Links</h4>
            <ul className="footer-links">
              <li><Link to="/">Home</Link></li>
              <li><Link to="/services">Services</Link></li>
              <li><Link to="/fleet">Our Fleet</Link></li>
              <li><Link to="/pricing">Pricing</Link></li>
              <li><Link to="/travel-guide">Travel Guide</Link></li>
              <li><Link to="/about">About Us</Link></li>
              <li><Link to="/contact">Contact</Link></li>
            </ul>
          </div>

          {/* Column 3: Our Services */}
          <div className="footer-col">
            <h4 className="footer-col-title">Our Services</h4>
            <ul className="footer-links">
              <li><Link to="/services">Airport Transfers</Link></li>
              <li><Link to="/services/point-to-point">Point to Point Hire</Link></li>
              <li><Link to="/services/daily-hire">Daily Hire</Link></li>
              <li><Link to="/services/multi-day-tours">Multi-Day Tours</Link></li>
              <li><Link to="/services/events-weddings">Events &amp; Weddings</Link></li>
              <li><Link to="/services/corporate-transport">Corporate Transport</Link></li>
            </ul>
          </div>

          {/* Column 4: Get in Touch & Socials */}
          <div className="footer-col contact-col">
            <h4 className="footer-col-title">Get in Touch</h4>
            <ul className="footer-contact-list">
              <li>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>
                <a href="tel:+94771234567">+94 77 123 4567</a>
              </li>
              <li>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.711 2.592 2.654-.696c1.029.575 1.761.883 2.806.883 3.181 0 5.767-2.587 5.767-5.766.001-3.18-2.585-5.766-5.767-5.766zm3.374 8.204c-.14.394-.717.728-1.009.774-.29.047-.648.067-2.096-.532-1.448-.598-2.378-2.062-2.45-2.158-.073-.096-.582-.774-.582-1.476 0-.702.364-1.047.494-1.189.13-.142.285-.178.38-.178.096 0 .19.002.273.007.087.005.203-.033.317.241.114.274.394.96.429 1.03.035.071.058.154.012.247-.046.094-.07.153-.139.234-.07.081-.146.182-.209.245-.07.07-.143.146-.062.286.082.14.364.601.782.973.539.479.993.627 1.133.697.14.07.222.059.305-.036.082-.095.352-.408.446-.548.094-.14.188-.117.316-.07.128.047.818.386.958.456.14.07.234.105.269.164.035.059.035.342-.105.736z"/></svg>
                <a href="https://wa.me/94771234567" target="_blank" rel="noopener noreferrer">+94 77 123 4567 (WhatsApp)</a>
              </li>
              <li>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg>
                <a href="mailto:info@kdhvanhire.lk">info@kdhvanhire.lk</a>
              </li>
              <li>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path><circle cx="12" cy="10" r="3"></circle></svg>
                <span>Colombo, Sri Lanka</span>
              </li>
            </ul>

            <div className="footer-socials">
              <span className="footer-socials-label">Follow Us</span>
              <div className="social-icons">
                <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>
                </a>
                <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
                </a>
                <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" aria-label="YouTube">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.33z"/><polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02" fill="#081726"/></svg>
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Legal Bar */}
        <div className="footer-bottom">
          <p className="copyright">&copy; 2025 KDH Van Hire Sri Lanka. All rights reserved.</p>
          <div className="legal-links">
            <Link to="/about">Privacy Policy</Link>
            <span className="sep">|</span>
            <Link to="/about">Terms &amp; Conditions</Link>
            <span className="sep">|</span>
            <Link to="/about">Cancellation Policy</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

