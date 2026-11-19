import React from 'react';

export default function SectionHeader({
  kicker,
  title,
  subtitle,
  centered = true,
  style = {}
}) {
  return (
    <div
      className="section-header"
      style={{ textAlign: centered ? 'center' : 'left', ...style }}
    >
      {kicker && <div className="section-eyebrow">{kicker}</div>}
      <h2 className="section-title">{title}</h2>
      {subtitle && (
        <p
          className="section-subtitle"
          style={centered ? { maxWidth: '680px', margin: '0 auto' } : undefined}
        >
          {subtitle}
        </p>
      )}
    </div>
  );
}
