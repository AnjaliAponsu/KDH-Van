import React from 'react';
import { useApp } from '../../context/AppContext';

export default function SiteLoader() {
  const { pageLoading, progress } = useApp();

  return (
    <>
      {/* Top Slim Progress Bar */}
      <div 
        id="siteTopProgressBar" 
        style={{
          width: `${progress}%`,
          opacity: progress === 0 || progress === 100 ? 0 : 1,
          transition: 'width 0.22s ease, opacity 0.28s ease'
        }}
      />

      {/* Branded Page Transition Loader */}
      <div 
        id="sitePageLoader" 
        className={`site-page-loader ${!pageLoading ? 'loaded' : ''}`}
        aria-hidden={!pageLoading}
      >
        <div className="page-loader-box">
          <div className="page-loader-spinner-wrap">
            <div className="page-loader-ring"></div>
            <svg className="page-loader-van-svg" viewBox="0 0 24 24" fill="currentColor">
              <path d="M18.92 6.01C18.72 5.42 18.16 5 17.5 5h-11c-.66 0-1.21.42-1.42 1.01L3 12v8c0 .55.45 1 1 1h1c.55 0 1-.45 1-1v-1h12v1c0 .55.45 1 1 1h1c.55 0 1-.45 1-1v-8l-2.08-5.99zM6.5 16c-.83 0-1.5-.67-1.5-1.5S5.67 13 6.5 13s1.5.67 1.5 1.5S7.33 16 6.5 16zm11 0c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5zM5 11l1.5-4.5h11L19 11H5z"/>
            </svg>
          </div>
          <p className="page-loader-title">KDH <span>Van Hire</span> Sri Lanka</p>
        </div>
      </div>
    </>
  );
}

