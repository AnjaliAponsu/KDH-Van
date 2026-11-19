import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import SeoManager from './components/common/SeoManager';
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
      {/* Dynamic Per-Route SEO Meta Tags, Canonical URL, Open Graph & JSON-LD */}
      <SeoManager />

      {/* Universal Page & Action Loaders */}
      <SiteLoader />

      {/* Universal Common Header Component */}
      <Header />

      {/* Clean React Router SPA Routes */}
      <Routes>
        <Route path="/" element={<HomePage />} />

        {/* Services */}
        <Route path="/services" element={<ServicesPage />} />
        <Route path="/services/:slug" element={<ServiceDetailPage />} />

        {/* Core Pages */}
        <Route path="/fleet" element={<FleetPage />} />
        <Route path="/pricing" element={<PricingPage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/booking" element={<BookingPage />} />

        {/* Travel Guides */}
        <Route path="/travel-guide" element={<TravelGuidePage />} />
        <Route path="/travel-guide/sigiriya" element={<GuideSigiriyaPage />} />
        <Route path="/travel-guide/south-coast" element={<GuideSouthCoastPage />} />
        <Route path="/travel-guide/ella" element={<GuideEllaPage />} />

        {/* SEO-Safe Redirects from Any Legacy URLs */}
        <Route path="/index.html" element={<Navigate to="/" replace />} />
        <Route path="/services.html" element={<Navigate to="/services" replace />} />
        <Route path="/fleet.html" element={<Navigate to="/fleet" replace />} />
        <Route path="/pricing.html" element={<Navigate to="/pricing" replace />} />
        <Route path="/about.html" element={<Navigate to="/about" replace />} />
        <Route path="/contact.html" element={<Navigate to="/contact" replace />} />
        <Route path="/booking.html" element={<Navigate to="/booking" replace />} />
        <Route path="/travel-guide.html" element={<Navigate to="/travel-guide" replace />} />
        <Route path="/guide-sigiriya.html" element={<Navigate to="/travel-guide/sigiriya" replace />} />
        <Route path="/guide-south-coast.html" element={<Navigate to="/travel-guide/south-coast" replace />} />
        <Route path="/guide-ella.html" element={<Navigate to="/travel-guide/ella" replace />} />
        <Route path="/service-corporate-transport.html" element={<Navigate to="/services/corporate-transport" replace />} />
        <Route path="/service-events-weddings.html" element={<Navigate to="/services/events-weddings" replace />} />
        <Route path="/service-multi-day-tours.html" element={<Navigate to="/services/multi-day-tours" replace />} />
        <Route path="/service-point-to-point.html" element={<Navigate to="/services/point-to-point" replace />} />
        <Route path="/service-daily-hire.html" element={<Navigate to="/services/daily-hire" replace />} />

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
