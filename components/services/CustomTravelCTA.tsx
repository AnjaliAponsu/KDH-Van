import React from 'react';
import { Calendar, PhoneCall } from 'lucide-react';

interface CustomTravelCTAProps {
  onBookClick?: () => void;
}

export const CustomTravelCTA: React.FC<CustomTravelCTAProps> = ({ onBookClick }) => {
  return (
    <section className="py-6 sm:py-10 bg-white">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6">
        <div 
          className="relative rounded-2xl overflow-hidden shadow-lg p-7 sm:p-9 flex flex-col md:flex-row items-center justify-between gap-6 bg-[#0B2038]"
          style={{
            backgroundImage: "url('/assets/services/custom-travel-cta-bg.jpg')",
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        >
          {/* Dark Navy Overlay */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#0B2038]/95 via-[#0B2038]/90 to-[#0B2038]/80 z-0" />

          {/* Left Side: Circular Badge & Heading */}
          <div className="relative z-10 flex items-center gap-4 text-center md:text-left">
            <div className="w-12 h-12 rounded-full bg-white text-[#0B2038] flex items-center justify-center flex-shrink-0 shadow-md">
              <Calendar className="w-6 h-6 stroke-[2.2]" />
            </div>
            <div>
              <h2 className="text-xl sm:text-2xl font-extrabold text-white tracking-tight mb-1">
                Need a Custom Travel Plan?
              </h2>
              <p className="text-[13.5px] text-[#CBD5E1] m-0">
                Tell us your requirements and we&apos;ll create the best solution for you.
              </p>
            </div>
          </div>

          {/* Right Side: Dual Action Buttons */}
          <div className="relative z-10 flex flex-wrap items-center gap-3 w-full sm:w-auto justify-center sm:justify-start">
            <button
              onClick={onBookClick}
              className="bg-[#FFB900] hover:bg-[#e6a700] text-[#0B2038] font-bold text-[14px] px-5 py-3 rounded-lg flex items-center gap-2 transition-all shadow-sm"
            >
              <Calendar className="w-4 h-4" />
              <span>Book Your Van</span>
            </button>
            <a
              href="https://wa.me/94771234567?text=Hi%2C%20I%20would%20like%20to%20plan%20a%20custom%20KDH%20van%20trip%20in%20Sri%20Lanka."
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#25D366] hover:bg-[#20bd5a] text-white font-bold text-[14px] px-5 py-3 rounded-lg flex items-center gap-2 transition-all shadow-sm text-decoration-none"
            >
              <PhoneCall className="w-4 h-4 fill-current" />
              <span>Chat on WhatsApp</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
