'use client';

import React, { useState, useEffect, useCallback } from 'react';
import Image from 'next/image';
import { Star, Maximize2, ChevronLeft, ChevronRight, X } from 'lucide-react';
import { VehicleImage } from '@/data/fleetData';

interface VehicleGalleryProps {
  images: VehicleImage[];
  isMainVehicle?: boolean;
}

export const VehicleGallery: React.FC<VehicleGalleryProps> = ({
  images,
  isMainVehicle = true
}) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isLightboxOpen, setIsLightboxOpen] = useState(false);

  const activePhoto = images[activeIndex] || images[0];

  const handleNext = useCallback(() => {
    setActiveIndex((prev) => (prev + 1) % images.length);
  }, [images.length]);

  const handlePrev = useCallback(() => {
    setActiveIndex((prev) => (prev - 1 + images.length) % images.length);
  }, [images.length]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!isLightboxOpen) return;
      if (e.key === 'Escape') setIsLightboxOpen(false);
      if (e.key === 'ArrowRight') handleNext();
      if (e.key === 'ArrowLeft') handlePrev();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isLightboxOpen, handleNext, handlePrev]);

  return (
    <div className="vehicle-gallery-card">
      {/* Main Display Photo */}
      <div 
        className="gallery-main-wrapper cursor-pointer group"
        onClick={() => setIsLightboxOpen(true)}
        title="Click to view full screen"
      >
        <Image
          src={activePhoto.src}
          alt={activePhoto.alt}
          fill
          sizes="(max-width: 900px) 100vw, 55vw"
          priority
          className="gallery-main-image group-hover:scale-105 transition-transform duration-300 object-cover"
        />

        {isMainVehicle && (
          <div className="badge-main-vehicle">
            <Star size={13} className="fill-slate-900" />
            <span>Our Main Vehicle</span>
          </div>
        )}

        <button
          type="button"
          className="btn-gallery-zoom"
          onClick={(e) => {
            e.stopPropagation();
            setIsLightboxOpen(true);
          }}
          aria-label="Open fullscreen image"
        >
          <Maximize2 size={18} />
        </button>
      </div>

      {/* Thumbnail Strip */}
      <div className="gallery-thumbs-row">
        {images.map((img, idx) => (
          <button
            key={img.src}
            type="button"
            className={`gallery-thumb-btn ${idx === activeIndex ? 'active' : ''}`}
            onClick={() => setActiveIndex(idx)}
            aria-label={`View photo ${idx + 1}`}
          >
            <Image
              src={img.src}
              alt={img.alt}
              fill
              sizes="(max-width: 640px) 25vw, 120px"
              className="gallery-thumb-img object-cover"
            />
          </button>
        ))}
      </div>

      {/* Fullscreen Lightbox Modal */}
      {isLightboxOpen && (
        <div 
          className="fleet-lightbox-overlay open"
          role="dialog"
          aria-modal="true"
          onClick={() => setIsLightboxOpen(false)}
        >
          <div className="fleet-lightbox-header" onClick={(e) => e.stopPropagation()}>
            <div className="fleet-lightbox-counter">
              {activeIndex + 1} / {images.length}
            </div>
            <button
              type="button"
              className="fleet-lightbox-close"
              onClick={() => setIsLightboxOpen(false)}
              aria-label="Close fullscreen view"
            >
              <X size={22} />
            </button>
          </div>

          <div 
            className="fleet-lightbox-main-stage" 
            onClick={(e) => e.stopPropagation()}
          >
            <button
              type="button"
              className="fleet-lightbox-nav-btn fleet-lightbox-prev"
              onClick={handlePrev}
              aria-label="Previous image"
            >
              <ChevronLeft size={24} />
            </button>

            <div className="relative w-full h-[65vh] max-w-4xl mx-auto">
              <Image
                src={activePhoto.src}
                alt={activePhoto.alt}
                fill
                sizes="90vw"
                className="object-contain"
                priority
              />
            </div>

            <button
              type="button"
              className="fleet-lightbox-nav-btn fleet-lightbox-next"
              onClick={handleNext}
              aria-label="Next image"
            >
              <ChevronRight size={24} />
            </button>
          </div>

          {activePhoto.caption && (
            <div className="fleet-lightbox-caption" onClick={(e) => e.stopPropagation()}>
              {activePhoto.caption}
            </div>
          )}

          <div className="fleet-lightbox-thumbs" onClick={(e) => e.stopPropagation()}>
            {images.map((img, idx) => (
              <div
                key={img.src}
                className={`fleet-lightbox-thumb-item relative ${idx === activeIndex ? 'active' : ''}`}
                onClick={() => setActiveIndex(idx)}
              >
                <Image
                  src={img.src}
                  alt={img.alt}
                  fill
                  sizes="72px"
                  className="object-cover"
                />
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};
