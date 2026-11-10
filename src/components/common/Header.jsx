import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useApp } from '../../context/AppContext';

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileDrawerOpen, setMobileDrawerOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const location = useLocation();
  const { openBookingModal } = useApp();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close menus on route change
  useEffect(() => {
    setMobileDrawerOpen(false);
    setDropdownOpen(false);
  }, [location.pathname]);

  const isActive = (path) => {
    if (path === '/' && location.pathname === '/') return true;
    if (path !== '/' && location.pathname.startsWith(path)) return true;
    return false;
  };

  return (
    <header className={`site-header ${isScrolled ? 'scrolled' : ''}`}>
      <div className="container header-container">
        {/* Logo */}
        <Link to="/" className="brand-logo" aria-label="KDH Van Hire Sri Lanka Home">
          <img src="/assets/logo.png" alt="KDH Van Hire Sri Lanka" className="brand-logo-img" width="220" height="38" />
        </Link>

        {/* Center Desktop Navigation */}
        <nav className="main-nav" aria-label="Main Navigation">
          <Link to="/" className={`nav-link ${isActive('/') ? 'active home-nav-active' : ''}`}>
            Home
          </Link>

          <div 
            className="nav-dropdown-wrapper"
            onMouseEnter={() => setDropdownOpen(true)}
            onMouseLeave={() => setDropdownOpen(false)}
          >
            <Link to="/services" className={`nav-link ${isActive('/services') ? 'active' : ''}`}>
              Services
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="6 9 12 15 18 9"></polyline>
              </svg>
            </Link>
            <div className={`nav-dropdown-menu ${dropdownOpen ? 'show' : ''}`} style={{ display: dropdownOpen ? 'block' : undefined }}>
              <Link to="/services" className="dropdown-item">Airport Transfers</Link>
              <Link to="/services/point-to-point" className="dropdown-item">Point to Point Hire</Link>
              <Link to="/services/daily-hire" className="dropdown-item">Daily Hire</Link>
              <Link to="/services/multi-day-tours" className="dropdown-item">Multi-Day Tours</Link>
              <Link to="/services/events-weddings" className="dropdown-item">Events &amp; Weddings</Link>
              <Link to="/services/corporate-transport" className="dropdown-item">Corporate Transport</Link>
            </div>
          </div>

          <Link to="/fleet" className={`nav-link ${isActive('/fleet') ? 'active' : ''}`}>
            Our Fleet
          </Link>
          <Link to="/pricing" className={`nav-link ${isActive('/pricing') ? 'active' : ''}`}>
            Pricing
          </Link>
          <Link to="/travel-guide" className={`nav-link ${isActive('/travel-guide') ? 'active' : ''}`}>
            Travel Guide
          </Link>
          <Link to="/about" className={`nav-link ${isActive('/about') ? 'active' : ''}`}>
            About
          </Link>
          <Link to="/contact" className={`nav-link ${isActive('/contact') ? 'active' : ''}`}>
            Contact
          </Link>
        </nav>

        {/* Right Action Buttons */}
        <div className="header-actions">
          {/* WhatsApp Icon Button */}
          <a
            href="https://wa.me/94771234567?text=Hi%20KDH%20Van%20Hire,%20I%20would%20like%20to%20inquire%20about%20a%20van%20booking."
            target="_blank"
            rel="noopener noreferrer"
            className="btn-whatsapp-header"
            aria-label="Chat on WhatsApp"
            title="Chat with us on WhatsApp"
          >
            <svg width="25" height="25" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.711 2.592 2.654-.697c.97.531 1.808.819 2.806.819l.005-.001c3.181 0 5.767-2.586 5.768-5.766 0-3.18-2.586-5.766-5.767-5.766zm3.376 8.21c-.144.405-.837.774-1.17.824-.312.045-.694.06-2.18-.557-1.9-0.788-3.122-2.73-3.217-2.855-.095-.125-.769-1.025-.769-1.954 0-.929.489-1.386.663-1.577.174-.191.38-.239.507-.239.127 0 .253.001.365.006.118.006.277-.045.433.329.16.38.547 1.332.594 1.43.048.098.079.213.016.34-.064.127-.095.206-.191.317-.095.111-.201.248-.287.333-.095.095-.195.198-.084.388.111.19.493.813 1.056 1.315.725.645 1.336.845 1.527.939.19.095.302.079.413-.048.111-.127.476-.556.603-.746.127-.19.254-.159.428-.095.175.063 1.11.523 1.301.618.19.095.317.143.365.222.048.079.048.46-.096.865z"/>
            </svg>
          </a>

          {/* Book Now Button */}
          <button
            type="button"
            className="btn-book-header"
            aria-label="Book Now"
            onClick={() => openBookingModal()}
          >
            <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
              <rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect>
              <line x1="16" y1="2" x2="16" y2="6"></line>
              <line x1="8" y1="2" x2="8" y2="6"></line>
              <line x1="3" y1="10" x2="21" y2="10"></line>
            </svg>
            Book Now
          </button>

          {/* Mobile Menu Hamburger */}
          <button
            type="button"
            className="mobile-menu-btn"
            aria-label="Toggle Navigation Menu"
            onClick={() => setMobileDrawerOpen(!mobileDrawerOpen)}
          >
            <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <line x1="3" y1="12" x2="21" y2="12"></line>
              <line x1="3" y1="6" x2="21" y2="6"></line>
              <line x1="3" y1="18" x2="21" y2="18"></line>
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      <div className={`mobile-nav-drawer ${mobileDrawerOpen ? 'open' : ''}`}>
        <nav className="mobile-nav-links">
          <Link to="/" className={`mobile-nav-link ${isActive('/') ? 'active' : ''}`}>Home</Link>
          <Link to="/services" className={`mobile-nav-link ${isActive('/services') ? 'active' : ''}`}>Our Services</Link>
          <Link to="/fleet" className={`mobile-nav-link ${isActive('/fleet') ? 'active' : ''}`}>Our Fleet</Link>
          <Link to="/pricing" className={`mobile-nav-link ${isActive('/pricing') ? 'active' : ''}`}>Pricing</Link>
          <Link to="/travel-guide" className={`mobile-nav-link ${isActive('/travel-guide') ? 'active' : ''}`}>Travel Guide</Link>
          <Link to="/about" className={`mobile-nav-link ${isActive('/about') ? 'active' : ''}`}>About Us</Link>
          <Link to="/contact" className={`mobile-nav-link ${isActive('/contact') ? 'active' : ''}`}>Contact</Link>
        </nav>
        <div className="mobile-nav-actions">
          <button 
            type="button" 
            className="btn-book-header" 
            style={{ width: '100%', justifyContent: 'center' }} 
            onClick={() => openBookingModal()}
          >
            Book Your Van
          </button>
          <a 
            href="https://wa.me/94771234567" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="btn-hero-secondary" 
            style={{ width: '100%', justifyContent: 'center', marginTop: '10px' }}
          >
            WhatsApp Inquiry
          </a>
        </div>
      </div>
    </header>
  );
}
