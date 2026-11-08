import React, { useState } from 'react';
import Link from 'next/link';
import { Calendar, PhoneCall, Menu, X, ChevronDown } from 'lucide-react';

interface SiteHeaderProps {
  onBookClick?: () => void;
  activeNav?: 'home' | 'services' | 'fleet' | 'pricing' | 'about' | 'contact';
}

export const SiteHeader: React.FC<SiteHeaderProps> = ({ onBookClick, activeNav = 'services' }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 left-0 w-full z-50 bg-[#0B2038] border-b border-[#16446B]/30 shadow-md">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 h-[72px] flex items-center justify-between">
        {/* Brand Logo */}
        <Link href="/" className="flex items-center gap-3 group text-decoration-none">
          <img src="/assets/logo.png" alt="KDH Van Hire Sri Lanka" className="h-[38px] w-auto object-contain" />
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-7">
          <Link 
            href="/" 
            className={`text-[14px] transition-colors ${activeNav === 'home' ? 'font-semibold text-white relative pb-1 after:content-[\'\'] after:absolute after:bottom-0 after:left-0 after:right-0 after:h-[2.5px] after:bg-[#FFB900] after:rounded-full' : 'font-medium text-slate-300 hover:text-white'}`}
          >
            Home
          </Link>
          <div className="relative group py-2">
            <Link 
              href="/services" 
              className={`relative text-[14px] flex items-center gap-1 pb-1 transition-colors ${activeNav === 'services' ? 'font-semibold text-white after:content-[\'\'] after:absolute after:bottom-0 after:left-0 after:right-0 after:h-[2.5px] after:bg-[#FFB900] after:rounded-full' : 'font-medium text-slate-300 hover:text-white'}`}
            >
              Services
              <ChevronDown className="w-3.5 h-3.5" />
            </Link>
          </div>
          <Link 
            href="/fleet" 
            className={`text-[14px] transition-colors ${activeNav === 'fleet' ? 'font-semibold text-white relative pb-1 after:content-[\'\'] after:absolute after:bottom-0 after:left-0 after:right-0 after:h-[2.5px] after:bg-[#FFB900] after:rounded-full' : 'font-medium text-slate-300 hover:text-white'}`}
          >
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
          <Link href="/" className={`${activeNav === 'home' ? 'text-[#FFB900] font-semibold' : 'text-slate-300'} py-2`}>Home</Link>
          <Link href="/services" className={`${activeNav === 'services' ? 'text-[#FFB900] font-semibold' : 'text-slate-300'} py-2`}>Services</Link>
          <Link href="/fleet" className={`${activeNav === 'fleet' ? 'text-[#FFB900] font-semibold' : 'text-slate-300'} py-2`}>Our Fleet</Link>
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

