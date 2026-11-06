import React from 'react';
import type { Metadata } from 'next';
import { SERVICES_DATA, BENEFITS_DATA } from '@/data/servicesData';
import { SiteHeader } from '@/components/services/SiteHeader';
import { ServicesHero } from '@/components/services/ServicesHero';
import { ServicesGrid } from '@/components/services/ServicesGrid';
import { WhyChooseUs } from '@/components/services/WhyChooseUs';
import { CustomTravelCTA } from '@/components/services/CustomTravelCTA';
import { SiteFooter } from '@/components/services/SiteFooter';

export const metadata: Metadata = {
  title: 'Our Services | KDH Van Hire Sri Lanka',
  description: 'Explore premium Toyota KDH passenger van hire solutions with professional drivers across Sri Lanka: Airport Transfers, Point-to-Point, Daily Hire, Multi-Day Tours, Weddings & Corporate Transport.',
  openGraph: {
    title: 'Our Services | KDH Van Hire Sri Lanka',
    description: 'Flexible and reliable KDH van hire solutions for airport transfers, sightseeing, business travel, and more across Sri Lanka.',
    images: [{ url: '/assets/services/services-hero-bg.jpg', width: 1200, height: 630 }],
  },
};

export default function ServicesPage() {
  return (
    <div className="min-h-screen bg-white text-[#10233D] font-sans">
      {/* 1. Header / Navigation */}
      <SiteHeader />

      <main>
        {/* 2. Services Hero Section with Breadcrumb */}
        <ServicesHero />

        {/* 3. Main Services Grid (3x2) */}
        <ServicesGrid services={SERVICES_DATA} />

        {/* 4. Why Choose Our Services? Section */}
        <WhyChooseUs benefits={BENEFITS_DATA} />

        {/* 5. Custom Travel Plan CTA Banner */}
        <CustomTravelCTA />
      </main>

      {/* 6. Footer */}
      <SiteFooter />
    </div>
  );
}
