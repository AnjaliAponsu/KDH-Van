import React from 'react';
import { Armchair, Snowflake, Music, Zap, Lightbulb, ShieldCheck } from 'lucide-react';
import { VEHICLE_FEATURES_LIST } from '@/data/fleetData';

export const VehicleFeatures: React.FC = () => {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'Armchair':
        return <Armchair size={20} />;
      case 'Snowflake':
        return <Snowflake size={20} />;
      case 'Music':
        return <Music size={20} />;
      case 'Zap':
        return <Zap size={20} />;
      case 'Lightbulb':
        return <Lightbulb size={20} />;
      case 'ShieldCheck':
        return <ShieldCheck size={20} />;
      default:
        return <ShieldCheck size={20} />;
    }
  };

  return (
    <section className="fleet-features-section">
      <div className="container">
        <div className="features-section-title-wrap">
          <span className="features-title-line" />
          <h2 className="features-section-title">Vehicle Features</h2>
          <span className="features-title-line" />
        </div>

        <div className="features-grid">
          {VEHICLE_FEATURES_LIST.map((feat) => (
            <div key={feat.id} className="feature-item-pill">
              <div className="feature-icon-circle">
                {getIcon(feat.icon)}
              </div>
              <span className="feature-item-title">
                {feat.title}
                <br />
                {feat.subtitle}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
