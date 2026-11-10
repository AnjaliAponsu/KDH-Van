import React from 'react';
import { Link } from 'react-router-dom';
import { useApp } from '../../context/AppContext';

export default function CtaBanner({
  title = "Plan Your Next Journey With Us",
  subtitle = "Experience a comfortable and reliable KDH van hire service in Sri Lanka.",
  bookBtnText = "Book Your Van",
  waBtnText = "Chat on WhatsApp",
  bgImage = "/assets/home-page/cta-banner-bg.jpg"
}) {
  const { openBookingModal } = useApp();

  return (
    <section className="cta-banner-section">
      <div className="container">
        <div 
          className="cta-banner-card"
          style={{
            backgroundImage: `url('${bgImage}')`
          }}
        >
          <div className="cta-banner-content">
            <div className="cta-banner-text">
              <h2 className="cta-heading">{title}</h2>
              <p className="cta-subtext">{subtitle}</p>
            </div>
            <div className="cta-banner-buttons">
              <button 
                type="button" 
                className="btn-primary cta-btn"
                onClick={() => openBookingModal()}
              >
                {bookBtnText}
              </button>
              <a
                href="https://wa.me/94771234567?text=Hi%20KDH%20Van%20Hire,%20I%20would%20like%20to%20plan%20a%20journey%20across%20Sri%20Lanka."
                target="_blank"
                rel="noopener noreferrer"
                className="btn-whatsapp cta-btn"
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.711 2.592 2.654-.696c1.029.575 1.761.883 2.806.883 3.181 0 5.767-2.587 5.767-5.766.001-3.18-2.585-5.766-5.767-5.766zm3.374 8.204c-.14.394-.717.728-1.009.774-.29.047-.648.067-2.096-.532-1.448-.598-2.378-2.062-2.45-2.158-.073-.096-.582-.774-.582-1.476 0-.702.364-1.047.494-1.189.13-.142.285-.178.38-.178.096 0 .19.002.273.007.087.005.203-.033.317.241.114.274.394.96.429 1.03.035.071.058.154.012.247-.046.094-.07.153-.139.234-.07.081-.146.182-.209.245-.07.07-.143.146-.062.286.082.14.364.601.782.973.539.479.993.627 1.133.697.14.07.222.059.305-.036.082-.095.352-.408.446-.548.094-.14.188-.117.316-.07.128.047.818.386.958.456.14.07.234.105.269.164.035.059.035.342-.105.736z"/>
                </svg>
                {waBtnText}
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

