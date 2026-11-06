import React, { useState } from 'react';
import Link from 'next/link';
import { Calendar, PhoneCall, Menu, X, ChevronDown } from 'lucide-react';

interface SiteHeaderProps {
  onBookClick?: () => void;
}

export const SiteHeader: React.FC<SiteHeaderProps> = ({ onBookClick }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 left-0 w-full z-50 bg-[#0B2038] border-b border-[#16446B]/30 shadow-md">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 h-[72px] flex items-center justify-between">
        {/* Brand Logo */}
        <Link href="/" className="flex items-center gap-3 group text-decoration-none">
          <svg className="w-9 h-7" viewBox="0 0 56 42" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M 6 34 L 46 34 M 15 34 A 5 5 0 0 0 25 34 M 35 34 A 5 5 0 0 0 45 34" stroke="#FFB900" strokeWidth="2.5" strokeLinecap="round"/>
            <circle cx="15" cy="33.5" r="4" fill="#0b1528" stroke="#FFB900" strokeWidth="2.5"/>
            <circle cx="15" cy="33.5" r="1.5" fill="#FFB900"/>
            <circle cx="41" cy="33.5" r="4" fill="#0b1528" stroke="#FFB900" strokeWidth="2.5"/>
            <circle cx="41" cy="33.5" r="1.5" fill="#FFB900"/>
            <path d="M 4 30 L 6 30 C 6 26 8 24 10 24 L 14 24 C 16 24 18 19 22 14 C 26 10 30 9 37 9 L 47 9 C 50 9 51 11 51 14 L 51 28 C 51 30 49 31 47 31 L 44 31" stroke="#FFB900" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M 4 30 C 3 28 3 26 5 25 L 8 24.5" stroke="#FFB900" strokeWidth="2" strokeLinecap="round"/>
            <path d="M 12 21 L 19 21 C 20 21 21 19 21 17 L 19 15 C 16 17 14 19 12 21 Z" fill="#FFB900" fillOpacity="0.3" stroke="#FFB900" strokeWidth="1.5"/>
            <path d="M 23 15 L 32 13 C 33 13 34 14 34 15 L 34 21 L 23 21 Z" fill="#FFB900" fillOpacity="0.3" stroke="#FFB900" strokeWidth="1.5"/>
            <path d="M 36 13 L 45 13 C 46.5 13 47 13.8 47 15 L 47 21 L 36 21 Z" fill="#FFB900" fillOpacity="0.3" stroke="#FFB900" strokeWidth="1.5"/>
          </svg>
          <div className="flex flex-col">
            <span className="text-[17px] font-extrabold text-white tracking-tight leading-tight">
              KDH Van Hire
            </span>
            <span className="text-[10px] font-semibold text-[#FFB900] uppercase tracking-[0.15em] -mt-0.5">
              Sri Lanka
            </span>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-7">
          <Link href="/" className="text-[14px] font-medium text-slate-300 hover:text-white transition-colors">
            Home
          </Link>
          <div className="relative group py-2">
            <Link 
              href="/services" 
              className="relative text-[14px] font-semibold text-white flex items-center gap-1 pb-1 after:content-[''] after:absolute after:bottom-0 after:left-0 after:right-0 after:h-[2.5px] after:bg-[#FFB900] after:rounded-full"
            >
              Services
              <ChevronDown className="w-3.5 h-3.5" />
            </Link>
          </div>
          <Link href="/fleet" className="text-[14px] font-medium text-slate-300 hover:text-white transition-colors">
            Our Fleet
          </Link>
          <Link href="/pricing" className="text-[14px] font-medium text-slate-300 hover:text-white transition-colors">
            Pricing
          </Link>
          <Link href="/about" className="text-[14px] font-medium text-slate-300 hover:text-white transition-colors">
            About
          </Link>
          <Link href="/contact" className="text-[14px] font-medium text-slate-300 hover:text-white transition-colors">
            Contact
          </Link>
        </nav>

        {/* Right Action Buttons */}
        <div className="flex items-center gap-3">
          <a
            href="https://wa.me/94771234567"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Chat on WhatsApp"
            className="w-10 h-10 rounded-full bg-[#25D366] text-white flex items-center justify-center hover:opacity-90 hover:scale-105 transition-all shadow-sm"
          >
            <PhoneCall className="w-4 h-4 fill-current" />
          </a>
          <button
            onClick={onBookClick}
            className="hidden sm:inline-flex items-center gap-2 bg-[#FFB900] hover:bg-[#e0a300] text-[#0B2038] font-bold text-[14px] px-4 py-2.5 rounded-lg transition-all shadow-sm hover:shadow active:scale-95"
          >
            <Calendar className="w-4 h-4" />
            <span>Book Now</span>
          </button>
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
            className="md:hidden text-white p-2 rounded-lg hover:bg-slate-800"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#071524] border-t border-slate-800 px-6 py-4 flex flex-col gap-3">
          <Link href="/" className="text-slate-300 py-2">Home</Link>
          <Link href="/services" className="text-[#FFB900] font-semibold py-2">Services</Link>
          <Link href="/fleet" className="text-slate-300 py-2">Our Fleet</Link>
          <Link href="/pricing" className="text-slate-300 py-2">Pricing</Link>
          <Link href="/about" className="text-slate-300 py-2">About</Link>
          <Link href="/contact" className="text-slate-300 py-2">Contact</Link>
          <button
            onClick={onBookClick}
            className="w-full bg-[#FFB900] text-[#0B2038] font-bold py-3 rounded-lg flex items-center justify-center gap-2 mt-2"
          >
            <Calendar className="w-4 h-4" />
            Book Now
          </button>
        </div>
      )}
    </header>
  );
};
