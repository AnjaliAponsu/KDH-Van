export interface VehicleImage {
  src: string;
  alt: string;
  caption?: string;
}

export interface Vehicle {
  id: string;
  slug: string;
  name: string;
  model: string;
  description: string;
  images: VehicleImage[];
  passengerCapacity: number | null;
  luggageCapacity: string | null;
  features: string[];
  driverIncluded: boolean;
  active: boolean;
  isMainVehicle?: boolean;
}

export interface VehicleFeatureItem {
  id: string;
  title: string;
  subtitle: string;
  icon: string;
}

export const MAIN_VEHICLE_DATA: Vehicle = {
  id: 'toyota-kdh-commuter',
  slug: 'toyota-kdh',
  name: 'Toyota KDH Passenger Van',
  model: 'HiAce KDH 200 Series Commuter High-Roof',
  description: 'A spacious, comfortable and air-conditioned van ideal for airport transfers, family trips and group travel across Sri Lanka.',
  images: [
    {
      src: '/assets/fleet/fleet-gallery-1.jpg',
      alt: 'Toyota KDH Passenger Van - Front Three-Quarter Exterior View',
      caption: 'Toyota KDH 200 Series Commuter High-Roof - Front Exterior'
    },
    {
      src: '/assets/fleet/fleet-gallery-2.jpg',
      alt: 'Passenger Cabin Interior - Reclining Luxury Seats',
      caption: 'Spacious passenger cabin with grey reclining leather seats and generous legroom'
    },
    {
      src: '/assets/fleet/fleet-gallery-3.jpg',
      alt: 'Rear Cargo Area - Large Luggage Capacity',
      caption: 'Large rear luggage compartment accommodating up to 10+ travel suitcases'
    },
    {
      src: '/assets/fleet/fleet-gallery-4.jpg',
      alt: 'High Roof Ceiling - Dual A/C & Ambient LED Lighting',
      caption: 'High-roof sculpted ceiling with dual cooling A/C vents and ambient blue LED lighting'
    }
  ],
  passengerCapacity: 15,
  luggageCapacity: 'Large (10+ Suitcases)',
  features: [
    'Clean and well-maintained',
    'Comfortable reclining seats',
    'Ideal for long-distance travel',
    'Suitable for families, groups and corporate trips'
  ],
  driverIncluded: true,
  active: true,
  isMainVehicle: true
};

export const VEHICLE_FEATURES_LIST: VehicleFeatureItem[] = [
  {
    id: 'seats',
    title: 'Comfortable',
    subtitle: 'Seats',
    icon: 'Armchair'
  },
  {
    id: 'ac',
    title: 'Air',
    subtitle: 'Conditioning',
    icon: 'Snowflake'
  },
  {
    id: 'audio',
    title: 'Audio',
    subtitle: 'System',
    icon: 'Music'
  },
  {
    id: 'usb',
    title: 'USB',
    subtitle: 'Charging',
    icon: 'Zap'
  },
  {
    id: 'lighting',
    title: 'Interior',
    subtitle: 'Lighting',
    icon: 'Lightbulb'
  },
  {
    id: 'safety',
    title: 'Safe &',
    subtitle: 'Reliable',
    icon: 'ShieldCheck'
  }
];
