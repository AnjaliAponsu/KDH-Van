import React from 'react';
import { Vehicle } from '@/data/fleetData';
import { VehicleGallery } from './VehicleGallery';
import { VehicleSpecifications } from './VehicleSpecifications';
import { VehicleBookingActions } from './VehicleBookingActions';

interface VehicleShowcaseProps {
  vehicle: Vehicle;
}

export const VehicleShowcase: React.FC<VehicleShowcaseProps> = ({ vehicle }) => {
  return (
    <section className="fleet-showcase-section">
      <div className="container">
        <div className="fleet-showcase-grid">
          {/* Left Column: Interactive Vehicle Photo Gallery (55%) */}
          <VehicleGallery
            images={vehicle.images}
            isMainVehicle={vehicle.isMainVehicle}
          />

          {/* Right Column: Vehicle Information Panel (45%) */}
          <div className="fleet-vehicle-info">
            <h2 className="vehicle-model-title">{vehicle.name}</h2>
            <p className="vehicle-model-desc">{vehicle.description}</p>

            <VehicleSpecifications
              passengerCapacity={vehicle.passengerCapacity ? `12 – ${vehicle.passengerCapacity}` : '12 – 15'}
              luggageCapacity="Large"
              driverIncluded={vehicle.driverIncluded}
              benefits={vehicle.features}
            />

            <VehicleBookingActions
              vehicleSlug={vehicle.slug}
              vehicleName={vehicle.name}
            />
          </div>
        </div>
      </div>
    </section>
  );
};
