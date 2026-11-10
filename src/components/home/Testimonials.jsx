import React, { useState } from 'react';
import SectionHeader from '../common/SectionHeader';

export default function Testimonials() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const testimonials = [
    {
      stars: '★★★★★',
      quote: '“Excellent service! Clean and comfortable van with a friendly driver. Our airport pickup was on time and hassle-free.”',
      name: 'Daniel M.',
      service: 'Airport Transfer',
      avatar: '/assets/home-page/customer-daniel.jpg'
    },
    {
      stars: '★★★★★',
      quote: '“We had a great trip to Kandy and Ella. The van was very comfortable and the driver was professional and helpful throughout.”',
      name: 'Sarah P.',
      service: 'Multi-Day Tour',
      avatar: '/assets/home-page/customer-sarah.jpg'
    },
    {
      stars: '★★★★★',
      quote: '“Reliable, affordable and very easy to book. Highly recommended for family travel in Sri Lanka.”',
      name: 'Ruwan D.',
      service: 'Daily Hire',
      avatar: '/assets/home-page/customer-ruwan.jpg'
    }
  ];

  const handlePrev = () => {
    setCurrentSlide(prev => (prev === 0 ? testimonials.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentSlide(prev => (prev === testimonials.length - 1 ? 0 : prev + 1));
  };

  return (
    <section className="testimonials-section" id="testimonials">
      <div className="container">
        <SectionHeader
          title="What Our Customers Say"
          subtitle=""
        />

        <div className="testimonials-slider-wrap">
          {/* Navigation Buttons */}
          <button 
            type="button" 
            className="slider-nav-btn slider-nav-prev" 
            onClick={handlePrev}
            aria-label="Previous Testimonial"
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <polyline points="15 18 9 12 15 6"></polyline>
            </svg>
          </button>
          <button 
            type="button" 
            className="slider-nav-btn slider-nav-next" 
            onClick={handleNext}
            aria-label="Next Testimonial"
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <polyline points="9 18 15 12 9 6"></polyline>
            </svg>
          </button>

          {/* Testimonial Cards Grid */}
          <div className="testimonials-grid">
            {testimonials.map((t, idx) => (
              <div key={idx} className="testimonial-card">
                <div>
                  <div className="rating-stars" aria-label="5 stars rating">{t.stars}</div>
                  <p className="testimonial-quote">{t.quote}</p>
                </div>
                <div className="testimonial-author">
                  <img src={t.avatar} alt={t.name} className="author-avatar" loading="lazy" />
                  <div className="author-info">
                    <span className="author-name">{t.name}</span>
                    <span className="author-service">{t.service}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Slider Pagination Dots */}
          <div className="slider-pagination-dots">
            {testimonials.map((_, idx) => (
              <button 
                key={idx} 
                type="button" 
                className={`slider-dot ${currentSlide === idx ? 'active' : ''}`}
                onClick={() => setCurrentSlide(idx)}
                aria-label={`Slide ${idx + 1}`}
              ></button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

