import React from 'react';
import { ServiceItem } from '@/data/servicesData';
import { ServiceCard } from './ServiceCard';

interface ServicesGridProps {
  services: ServiceItem[];
  onBookNow?: (serviceTitle: string) => void;
  onLearnMore?: (service: ServiceItem) => void;
}

export const ServicesGrid: React.FC<ServicesGridProps> = ({
  services,
  onBookNow,
  onLearnMore,
}) => {
  return (
    <section className="py-12 bg-white" id="services-grid">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6">
        {/* 3 columns on Desktop, 2 on Tablet, 1 on Mobile */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-7">
          {services.map((service) => (
            <ServiceCard
              key={service.id}
              service={service}
              onBookNow={onBookNow}
              onLearnMore={onLearnMore}
            />
          ))}
        </div>
      </div>
    </section>
  );
};
