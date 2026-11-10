import React, { createContext, useContext, useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const location = useLocation();

  // Booking Modal State
  const [isBookingModalOpen, setIsBookingModalOpen] = useState(false);
  const [bookingPrefill, setBookingPrefill] = useState({
    pickup: '',
    destination: '',
    date: '',
    passengers: 4,
    service: 'Airport Transfer'
  });

  // Price Plan Modal State
  const [isPricePlanModalOpen, setIsPricePlanModalOpen] = useState(false);
  const [activePricePlan, setActivePricePlan] = useState(null);

  // General Info Modal State
  const [isInfoModalOpen, setIsInfoModalOpen] = useState(false);
  const [infoModalData, setInfoModalData] = useState({ title: '', content: '' });

  // Toast Notification
  const [toast, setToast] = useState({ show: false, message: '' });

  // Page Transition Loading
  const [pageLoading, setPageLoading] = useState(false);
  const [progress, setProgress] = useState(0);

  // Initial site mount branded splash (plays once smoothly on initial entry)
  useEffect(() => {
    setPageLoading(true);
    setProgress(45);
    const t1 = setTimeout(() => setProgress(100), 180);
    const t2 = setTimeout(() => {
      setPageLoading(false);
      setProgress(0);
    }, 380);
    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
    };
  }, []);

  // Sleek top progress bar on route navigation (fluid, non-blocking standard)
  useEffect(() => {
    window.scrollTo(0, 0);
    setProgress(35);
    const pTimer = setTimeout(() => setProgress(85), 90);
    const fTimer = setTimeout(() => {
      setProgress(100);
      setTimeout(() => setProgress(0), 180);
    }, 260);

    return () => {
      clearTimeout(pTimer);
      clearTimeout(fTimer);
    };
  }, [location.pathname]);

  const openBookingModal = (prefill = {}) => {
    setBookingPrefill(prev => ({ ...prev, ...prefill }));
    setIsBookingModalOpen(true);
  };

  const closeBookingModal = () => {
    setIsBookingModalOpen(false);
  };

  const openPricePlanModal = (plan) => {
    setActivePricePlan(plan);
    setIsPricePlanModalOpen(true);
  };

  const closePricePlanModal = () => {
    setIsPricePlanModalOpen(false);
  };

  const openInfoModal = (title, content) => {
    setInfoModalData({ title, content });
    setIsInfoModalOpen(true);
  };

  const closeInfoModal = () => {
    setIsInfoModalOpen(false);
  };

  const showToast = (message, duration = 3000) => {
    setToast({ show: true, message });
    setTimeout(() => {
      setToast({ show: false, message: '' });
    }, duration);
  };

  return (
    <AppContext.Provider
      value={{
        isBookingModalOpen,
        bookingPrefill,
        openBookingModal,
        closeBookingModal,
        isPricePlanModalOpen,
        activePricePlan,
        openPricePlanModal,
        closePricePlanModal,
        isInfoModalOpen,
        infoModalData,
        openInfoModal,
        closeInfoModal,
        toast,
        showToast,
        pageLoading,
        progress
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useApp = () => useContext(AppContext);

