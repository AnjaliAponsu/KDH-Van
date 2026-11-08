import React from 'react';
import { Users, Briefcase, Snowflake, UserCheck, Check } from 'lucide-react';

interface VehicleSpecificationsProps {
  passengerCapacity?: number | string | null;
  luggageCapacity?: string | null;
  driverIncluded?: boolean;
  benefits?: string[];
}

export const VehicleSpecifications: React.FC<VehicleSpecificationsProps> = ({
  passengerCapacity = '12 – 15',
  luggageCapacity = 'Large',
  driverIncluded = true,
  benefits = [
    'Clean and well-maintained',
    'Comfortable reclining seats',
    'Ideal for long-distance travel',
    'Suitable for families, groups and corporate trips'
  ]
}) => {
  return (
    <div className="flex flex-col">
      {/* 4 Compact Specification Cards */}
      <div className="vehicle-specs-grid">
        {/* Spec 1: Passengers */}
        <div className="vehicle-spec-card">
          <div className="vehicle-spec-icon-box">
            <Users size={22} />
          </div>
          <span className="vehicle-spec-val">{passengerCapacity}</span>
          <span className="vehicle-spec-label">Passengers</span>
        </div>

        {/* Spec 2: Luggage Space */}
        <div className="vehicle-spec-card">
          <div className="vehicle-spec-icon-box">
            <Briefcase size={22} />
          </div>
          <span className="vehicle-spec-val">{luggageCapacity}</span>
          <span className="vehicle-spec-label">Luggage Space</span>
        </div>

        {/* Spec 3: Air Conditioning */}
        <div className="vehicle-spec-card">
          <div className="vehicle-spec-icon-box">
            <Snowflake size={22} />
          </div>
          <span className="vehicle-spec-val">Air-</span>
          <span className="vehicle-spec-label">Conditioned</span>
        </div>

        {/* Spec 4: Professional Driver */}
        <div className="vehicle-spec-card">
          <div className="vehicle-spec-icon-box">
            <UserCheck size={22} />
          </div>
          <span className="vehicle-spec-val">
            {driverIncluded ? 'Professional' : 'Self-Drive'}
          </span>
          <span className="vehicle-spec-label">Driver</span>
        </div>
      </div>

      {/* Vehicle Benefits Checklist */}
      <ul className="vehicle-benefits-list">
        {benefits.map((b) => (
          <li key={b} className="vehicle-benefit-item">
            <span className="benefit-check-icon">✓</span>
            <span>{b}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};
