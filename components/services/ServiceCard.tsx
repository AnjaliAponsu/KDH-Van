import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Plane, CarFront, CalendarDays, Mountain, Users, Briefcase, ArrowRight } from 'lucide-react';
import { ServiceItem } from '@/data/servicesData';

interface ServiceCardProps {
  service: ServiceItem;
  onBookNow?: (serviceTitle: string) => void;
  onLearnMore?: (service: ServiceItem) => void;
}

const ICON_MAP = {
  Plane: Plane,
  CarFront: CarFront,
  CalendarDays: CalendarDays,
  Mountain: Mountain,
  Users: Users,
  Briefcase: Briefcase,
};

export const ServiceCard: React.FC<ServiceCardProps> = ({
  service,
  onBookNow,
  onLearnMore,
}) => {
  const IconComponent = ICON_MAP[service.iconName] || CarFront;

  return (
    <article className="group bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-sm hover:shadow-md transition-all duration-300 flex flex-col h-full">
      {/* Thumbnail Container */}
      <div className="relative h-[165px] w-full overflow-hidden bg-[#0B2038]">
        <img
          src={service.image}
          alt={service.title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          loading="lazy"
        />
        {/* Overlapping Bottom-Left Icon Badge */}
        <div 
          className="absolute bottom-3 left-4 w-10 h-10 rounded-xl bg-[#134475] text-white flex items-center justify-center shadow-md z-10"
          title={service.title}
        >
          <IconComponent className="w-5 h-5 text-white" />
        </div>
      </div>

      {/* Card Content */}
      <div className="p-5 sm:p-6 flex flex-col flex-grow">
        <h2 className="text-[18.5px] font-extrabold text-[#10233D] tracking-tight mb-2">
          {service.title}
        </h2>
        <p className="text-[13.5px] leading-relaxed text-[#64748B] mb-5 flex-grow min-h-[42px]">
          {service.shortDesc}
        </p>

        {/* Dual Button Action Row */}
        <div className="flex items-center gap-2.5 pt-2">
          <button
            onClick={() => onBookNow ? onBookNow(service.title) : undefined}
            className="flex-1 bg-[#FFB900] hover:bg-[#e6a700] text-[#0B2038] font-bold text-[13.5px] py-2.5 px-3 rounded-lg flex items-center justify-center gap-1.5 transition-colors"
          >
            <span>Book Now</span>
            <ArrowRight className="w-4 h-4" />
          </button>
          <button
            onClick={() => onLearnMore ? onLearnMore(service) : undefined}
            className="flex-1 bg-white hover:bg-slate-50 text-[#0B2038] border border-slate-300 font-semibold text-[13.5px] py-2.5 px-3 rounded-lg flex items-center justify-center transition-colors"
          >
            Learn More
          </button>
        </div>
      </div>
    </article>
  );
};

