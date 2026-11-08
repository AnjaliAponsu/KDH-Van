import React from 'react';
import Link from 'next/link';
import { Phone, Mail, MapPin } from 'lucide-react';

export const SiteFooter: React.FC = () => {
  return (
    <footer className="bg-[#071524] text-slate-300 pt-14 pb-8 border-t border-slate-800">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 mb-12">
          {/* Col 1: Brand Info */}
          <div className="lg:col-span-1">
            <Link href="/" className="flex items-center gap-3 mb-4 text-decoration-none">
              <img src="/assets/logo.png" alt="KDH Van Hire Sri Lanka" className="h-[38px] w-auto object-contain" />
            </Link>
            <p className="text-[13px] leading-relaxed text-slate-400">
              Reliable KDH van hire with professional drivers for airport transfers, private tours, and everyday travel across Sri Lanka.
            </p>
          </div>

          {/* Col 2: Quick Links */}
          <div>
            <h4 className="text-[14px] font-bold text-white uppercase tracking-wider mb-4">Quick Links</h4>
            <ul className="space-y-2 text-[13px]">
              <li><Link href="/" className="hover:text-[#FFB900] transition-colors">› Home</Link></li>
              <li><Link href="/fleet" className="hover:text-[#FFB900] transition-colors">› Our Fleet</Link></li>
              <li><Link href="/pricing" className="hover:text-[#FFB900] transition-colors">› Pricing</Link></li>
              <li><Link href="/about" className="hover:text-[#FFB900] transition-colors">› About Us</Link></li>
              <li><Link href="/contact" className="hover:text-[#FFB900] transition-colors">› Contact</Link></li>
            </ul>
          </div>

          {/* Col 3: Our Services */}
          <div>
            <h4 className="text-[14px] font-bold text-white uppercase tracking-wider mb-4">Our Services</h4>
            <ul className="space-y-2 text-[13px]">
              <li><Link href="/services#airport-transfers" className="hover:text-[#FFB900] transition-colors">› Airport Transfers</Link></li>
              <li><Link href="/services#point-to-point" className="hover:text-[#FFB900] transition-colors">› Point to Point Hire</Link></li>
              <li><Link href="/services#daily-hire" className="hover:text-[#FFB900] transition-colors">› Daily Hire</Link></li>
              <li><Link href="/services#multi-day-tours" className="hover:text-[#FFB900] transition-colors">› Multi-Day Tours</Link></li>
              <li><Link href="/services#events-weddings" className="hover:text-[#FFB900] transition-colors">› Events &amp; Weddings</Link></li>
              <li><Link href="/services#corporate-transport" className="hover:text-[#FFB900] transition-colors">› Corporate Transport</Link></li>
            </ul>
          </div>

          {/* Col 4: Get in Touch */}
          <div>
            <h4 className="text-[14px] font-bold text-white uppercase tracking-wider mb-4">Get in Touch</h4>
            <ul className="space-y-2.5 text-[13px]">
              <li className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-[#FFB900]" />
                <a href="tel:+94771234567" className="hover:text-white">+94 77 123 4567</a>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-[#25D366]" />
                <a href="https://wa.me/94771234567" target="_blank" rel="noopener noreferrer" className="hover:text-white">+94 77 123 4567 (WhatsApp)</a>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-slate-400" />
                <a href="mailto:info@kdhvanhire.lk" className="hover:text-white">info@kdhvanhire.lk</a>
              </li>
              <li className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-slate-400" />
                <span>Colombo, Sri Lanka</span>
              </li>
            </ul>
          </div>

          {/* Col 5: Follow Us */}
          <div>
            <h4 className="text-[14px] font-bold text-white uppercase tracking-wider mb-4">Follow Us</h4>
            <div className="flex items-center gap-2.5">
              <a href="#" aria-label="Facebook" className="w-9 h-9 rounded-full bg-slate-800 flex items-center justify-center text-slate-300 hover:bg-[#FFB900] hover:text-[#0B2038] transition-all">
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>
              </a>
              <a href="#" aria-label="Instagram" className="w-9 h-9 rounded-full bg-slate-800 flex items-center justify-center text-slate-300 hover:bg-[#FFB900] hover:text-[#0B2038] transition-all">
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg>
              </a>
              <a href="#" aria-label="YouTube" className="w-9 h-9 rounded-full bg-slate-800 flex items-center justify-center text-slate-300 hover:bg-[#FFB900] hover:text-[#0B2038] transition-all">
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24"><path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/></svg>
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-6 border-t border-slate-800/80 flex flex-col sm:flex-row items-center justify-between text-[12px] text-slate-500 gap-3">
          <p>© 2025 KDH Van Hire Sri Lanka. All rights reserved.</p>
          <div className="flex items-center gap-4">
            <Link href="/privacy" className="hover:text-slate-400">Privacy Policy</Link>
            <span>|</span>
            <Link href="/terms" className="hover:text-slate-400">Terms &amp; Conditions</Link>
            <span>|</span>
            <Link href="/cancellation" className="hover:text-slate-400">Cancellation Policy</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

