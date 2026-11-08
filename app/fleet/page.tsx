import React from 'react';
import type { Metadata } from 'next';
import { SiteHeader } from '@/components/services/SiteHeader';
import { FleetHero } from '@/components/fleet/FleetHero';
import { VehicleShowcase } from '@/components/fleet/VehicleShowcase';
import { VehicleFeatures } from '@/components/fleet/VehicleFeatures';
import { FleetCTA } from '@/components/fleet/FleetCTA';
import { SiteFooter } from '@/components/services/SiteFooter';
import { MAIN_VEHICLE_DATA } from '@/data/fleetData';

export const metadata: Metadata = {
  title: 'Toyota KDH Van Hire in Sri Lanka | Our Fleet',
  description: 'Explore our Toyota KDH passenger van for airport transfers, private tours, daily hire and group transport with a driver in Sri Lanka.',
  openGraph: {
    title: 'Our Fleet | Toyota KDH Van Hire Sri Lanka',
    description: 'Comfortable, well-maintained passenger vans for airport transfers, family trips, private tours, and group travel across Sri Lanka.',
    images: ['/assets/fleet/fleet-gallery-1.jpg'],
    type: 'website'
  }
};

export default function FleetPage() {
  return (
    <div className="min-h-screen bg-white flex flex-col font-sans text-[#10233D] antialiased">
      {/* 1. Header with 'fleet' active tab */}
      <SiteHeader activeNav="fleet" />

      {/* 2. Fleet Hero Banner */}
      <FleetHero />

      {/* 3. Main Vehicle Showcase (55% Gallery / 45% Details & Specs) */}
      <VehicleShowcase vehicle={MAIN_VEHICLE_DATA} />

      {/* 4. Vehicle Features Grid */}
      <VehicleFeatures />

      {/* 5. Final Call-to-Action Banner */}
      <FleetCTA />

      {/* 6. Footer */}
      <SiteFooter />
    </div>
  );
}
