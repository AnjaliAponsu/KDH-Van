import React from 'react';
import { useApp } from '../../context/AppContext';

export default function SiteLoader() {
  const { pageLoading, progress } = useApp();

  return (
    <>
      {/* Top Slim Progress Bar (Linear / Vercel style) */}
      <div 
        id="siteTopProgressBar" 
        style={{
          width: `${progress}%`,
          opacity: progress === 0 || progress === 100 ? 0 : 1
        }}
      />

      {/* Executive Branded Splash Curtain */}
      <div 
        id="sitePageLoader" 
        className={`site-page-loader ${!pageLoading ? 'loaded' : ''}`}
        aria-hidden={!pageLoading}
      >
        <div className="page-loader-brand-wrap">
          <div className="loader-logo-container">
            <img 
              src="/assets/logo.png" 
              alt="KDH Van Hire Sri Lanka" 
              className="loader-brand-logo" 
              width="220" 
              height="38" 
            />
            <div className="loader-ambient-glow" />
          </div>
          <div className="loader-track">
            <div className="loader-track-bar" />
          </div>
          <span className="loader-sub-text">Premium Travel &bull; Sri Lanka</span>
        </div>
      </div>
    </>
  );
}
