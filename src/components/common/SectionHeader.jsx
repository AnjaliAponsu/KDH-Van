import React from 'react';

export default function SectionHeader({
  kicker,
  title,
  subtitle,
  centered = true,
  style = {}
}) {
  return (
    <div className={`section-heading-centered ${centered ? 'text-center' : ''}`} style={style}>
      {kicker && <div className="features-badge" style={{ marginBottom: '8px' }}>{kicker}</div>}
      <h2 className="section-title">{title}</h2>
      {subtitle && <p className="section-subtitle">{subtitle}</p>}
    </div>
  );
}

