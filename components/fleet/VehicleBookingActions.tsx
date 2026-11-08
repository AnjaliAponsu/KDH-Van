import React from 'react';
import Link from 'next/link';
import { Calendar, MessageSquare } from 'lucide-react';

interface VehicleBookingActionsProps {
  vehicleSlug?: string;
  vehicleName?: string;
}

export const VehicleBookingActions: React.FC<VehicleBookingActionsProps> = ({
  vehicleSlug = 'kdh',
  vehicleName = 'Toyota KDH Passenger Van'
}) => {
  const waMessage = encodeURIComponent(
    `Hi KDH Van Hire, I'd like to enquire about hiring your ${vehicleName} with driver.`
  );

  return (
    <div className="vehicle-actions-row">
      <Link
        href={`/book?vehicle=${vehicleSlug}`}
        className="btn-book-van-primary"
      >
        <Calendar size={18} />
        <span>Book This Van</span>
      </Link>
      <a
        href={`https://wa.me/94771234567?text=${waMessage}`}
        target="_blank"
        rel="noopener noreferrer"
        className="btn-enquire-van-secondary"
      >
        <MessageSquare size={18} />
        <span>Enquire Now</span>
      </a>
    </div>
  );
};
