import React from 'react';
import Link from 'next/link';
import { Home } from 'lucide-react';

export const ServicesHero: React.FC = () => {
  return (
    <section className="relative min-h-[340px] flex items-center bg-[#0B2038] overflow-hidden">
      {/* Background with scenic coastal road & KDH van on right */}
      <div 
        className="absolute inset-0 bg-cover bg-right z-0" 
        style={{ backgroundImage: "url('/assets/services/services-hero-bg.jpg')" }}
      />
      {/* Dark gradient overlay on left for typography readability */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#0B2038] via-[#0B2038]/90 via-50% to-[#0B2038]/15 z-10" />

      {/* Hero content container */}
      <div className="relative z-20 max-w-[1200px] w-full mx-auto px-4 sm:px-6 py-14">
        <div className="max-w-[620px]">
          {/* Eyebrow */}
          <span className="block text-[11px] font-bold tracking-[0.2em] uppercase text-[#94A3B8] mb-2.5">
            OUR SERVICES
          </span>

          {/* Heading */}
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight leading-tight mb-4">
            Our Services
          </h1>

          {/* Description with vertical gold accent line */}
          <div className="flex items-stretch gap-3.5 mb-5">
            <div className="w-[4px] bg-[#FFB900] rounded-full flex-shrink-0" />
            <p className="text-[14.5px] leading-relaxed text-[#CBD5E1] m-0 max-w-[500px]">
              Flexible and reliable KDH van hire solutions for airport transfers, sightseeing, business travel, and more across Sri Lanka.
            </p>
          </div>

          {/* Breadcrumbs */}
          <nav aria-label="Breadcrumb" className="inline-flex items-center gap-2 text-[13px] font-medium text-[#94A3B8]">
            <Link href="/" className="inline-flex items-center gap-1.5 text-[#94A3B8] hover:text-white transition-colors">
              <Home className="w-3.5 h-3.5" />
              <span>Home</span>
            </Link>
            <span className="text-[#64748B]">›</span>
            <span className="text-white font-semibold">Services</span>
          </nav>
        </div>
      </div>
    </section>
  );
};
