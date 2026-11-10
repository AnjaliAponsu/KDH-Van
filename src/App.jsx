import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import Header from './components/common/Header';
import Footer from './components/common/Footer';
import SiteLoader from './components/common/SiteLoader';
import BookingModal from './components/common/BookingModal';
import PricePlanModal from './components/common/PricePlanModal';
import Toast from './components/common/Toast';

// Pages
import HomePage from './pages/HomePage';
import ServicesPage from './pages/ServicesPage';
import ServiceDetailPage from './pages/ServiceDetailPage';
import FleetPage from './pages/FleetPage';
import PricingPage from './pages/PricingPage';
import AboutPage from './pages/AboutPage';
import ContactPage from './pages/ContactPage';
import BookingPage from './pages/BookingPage';
import TravelGuidePage from './pages/TravelGuidePage';
import GuideSigiriyaPage from './pages/GuideSigiriyaPage';
import GuideSouthCoastPage from './pages/GuideSouthCoastPage';
import GuideEllaPage from './pages/GuideEllaPage';

export default function App() {
  return (
    <div className="site-wrapper">
      {/* Universal Page & Action Loaders */}
      <SiteLoader />

      {/* Universal Common Header Component */}
      <Header />

      {/* Page Routing */}
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/index.html" element={<HomePage />} />

        {/* Services */}
        <Route path="/services" element={<ServicesPage />} />
        <Route path="/services.html" element={<ServicesPage />} />
        <Route path="/services/:slug" element={<ServiceDetailPage />} />
        <Route path="/service-corporate-transport.html" element={<ServiceDetailPage forcedSlug="corporate-transport" />} />
        <Route path="/service-events-weddings.html" element={<ServiceDetailPage forcedSlug="events-weddings" />} />
        <Route path="/service-multi-day-tours.html" element={<ServiceDetailPage forcedSlug="multi-day-tours" />} />
        <Route path="/service-point-to-point.html" element={<ServiceDetailPage forcedSlug="point-to-point" />} />
        <Route path="/service-daily-hire.html" element={<ServiceDetailPage forcedSlug="daily-hire" />} />

        {/* Fleet */}
        <Route path="/fleet" element={<FleetPage />} />
        <Route path="/fleet.html" element={<FleetPage />} />

        {/* Pricing */}
        <Route path="/pricing" element={<PricingPage />} />
        <Route path="/pricing.html" element={<PricingPage />} />

        {/* About Us */}
        <Route path="/about" element={<AboutPage />} />
        <Route path="/about.html" element={<AboutPage />} />

        {/* Contact */}
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/contact.html" element={<ContactPage />} />

        {/* Booking */}
        <Route path="/booking" element={<BookingPage />} />
        <Route path="/booking.html" element={<BookingPage />} />

        {/* Travel Guides */}
        <Route path="/travel-guide" element={<TravelGuidePage />} />
        <Route path="/travel-guide.html" element={<TravelGuidePage />} />
        <Route path="/travel-guide/sigiriya" element={<GuideSigiriyaPage />} />
        <Route path="/guide-sigiriya.html" element={<GuideSigiriyaPage />} />
        <Route path="/travel-guide/south-coast" element={<GuideSouthCoastPage />} />
        <Route path="/guide-south-coast.html" element={<GuideSouthCoastPage />} />
        <Route path="/travel-guide/ella" element={<GuideEllaPage />} />
        <Route path="/guide-ella.html" element={<GuideEllaPage />} />

        {/* Fallback */}
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>

      {/* Universal Common Footer Component */}
      <Footer />

      {/* Global Interactive Modals & Notifications */}
      <BookingModal />
      <PricePlanModal />
      <Toast />
    </div>
  );
}

