import React from 'react';
import Link from 'next/link';
import { Home } from 'lucide-react';

interface FleetHeroProps {
  eyebrow?: string;
  title?: string;
  description?: string;
}

export const FleetHero: React.FC<FleetHeroProps> = ({
  eyebrow = 'OUR FLEET',
  title = 'Our Fleet',
  description = 'Well-maintained, comfortable and reliable vehicles for your travel needs across Sri Lanka.'
}) => {
  return (
    <section className="fleet-hero-section">
      <div className="fleet-hero-overlay" />
      <div className="fleet-hero-container">
        <div className="fleet-hero-content">
          <div className="fleet-hero-eyebrow">{eyebrow}</div>
          <h1 className="fleet-hero-title">{title}</h1>
          <p className="fleet-hero-desc">{description}</p>
          <div className="fleet-breadcrumb">
            <Link href="/" className="inline-flex items-center gap-1.5 hover:text-amber-400 transition-colors">
              <Home size={15} />
              <span>Home</span>
            </Link>
            <span className="fleet-breadcrumb-sep">›</span>
            <span className="fleet-breadcrumb-current">Our Fleet</span>
          </div>
        </div>
      </div>
    </section>
  );
};
