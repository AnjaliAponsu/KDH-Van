import React from 'react';
import Link from 'next/link';
import { Calendar, MessageSquare, Car } from 'lucide-react';

export const FleetCTA: React.FC = () => {
  return (
    <section className="cta-banner-section">
      <div className="container">
        <div className="cta-banner-card">
          <div className="cta-banner-content">
            <div className="cta-icon-box" aria-hidden="true">
              <Car size={34} />
            </div>
            <div className="cta-text-wrap">
              <h2 className="cta-title">Need a Van for Your Next Trip?</h2>
              <p className="cta-subtitle">
                Choose our Toyota KDH for a comfortable and hassle-free journey.
              </p>
            </div>
          </div>
          <div className="cta-actions">
            <Link
              href="/book?vehicle=kdh"
              className="btn-cta-primary"
            >
              <Calendar size={18} />
              <span>Book Your Van</span>
            </Link>
            <a
              href="https://wa.me/94771234567?text=Hi%20KDH%20Van%20Hire,%20I'd%20like%20to%20book%20a%20Toyota%20KDH%20van%20for%20my%20upcoming%20journey%20in%20Sri%20Lanka."
              target="_blank"
              rel="noopener noreferrer"
              className="btn-cta-whatsapp"
            >
              <MessageSquare size={18} />
              <span>Chat on WhatsApp</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
