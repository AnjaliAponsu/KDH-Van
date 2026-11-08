/**
 * KDH Van Hire Sri Lanka - Main JavaScript
 * Interactive Booking Engine, Dynamic Fare Calculator, Tab Switcher, Carousel,
 * Modals & WhatsApp Deep-Links
 */

document.addEventListener('DOMContentLoaded', () => {
  // Elements
  const header = document.querySelector('.site-header');
  const bookingTabs = document.querySelectorAll('.booking-tab-btn');
  const pickupInput = document.getElementById('pickupLocation');
  const destInput = document.getElementById('destinationLocation');
  const travelDateInput = document.getElementById('travelDate');
  const swapBtn = document.getElementById('btnSwapLocations');
  const passengerSelectTrigger = document.getElementById('passengerSelectTrigger');
  const passengerMenu = document.getElementById('passengerDropdownMenu');
  const passengerDisplay = document.getElementById('passengerDisplay');
  const passengerHiddenInput = document.getElementById('passengerCountInput');
  const checkAvailabilityBtn = document.getElementById('btnCheckAvailability');
  
  // Booking Modal Elements
  const modal = document.getElementById('bookingModal');
  const modalCloseBtn = document.getElementById('modalCloseBtn');
  const summaryService = document.getElementById('summaryService');
  const summaryPickup = document.getElementById('summaryPickup');
  const summaryDest = document.getElementById('summaryDest');
  const summaryDate = document.getElementById('summaryDate');
  const summaryPassengers = document.getElementById('summaryPassengers');
  const fareDisplay = document.getElementById('fareDisplay');
  const btnConfirmWa = document.getElementById('btnConfirmWa');

  // General Info Modal Elements
  const generalInfoModal = document.getElementById('generalInfoModal');
  const infoModalCloseBtn = document.getElementById('infoModalCloseBtn');
  const infoModalTitle = document.getElementById('infoModalTitle');
  const infoModalBody = document.getElementById('infoModalBody');
  const infoModalActionBtn = document.getElementById('infoModalActionBtn');
  const toastEl = document.getElementById('toastNotification');

  // Testimonials Slider Elements
  const sliderPrev = document.getElementById('sliderPrev');
  const sliderNext = document.getElementById('sliderNext');
  const sliderDots = document.querySelectorAll('.slider-dot');
  const testimonialCards = document.querySelectorAll('.testimonial-card');
  const testimonialsWrap = document.querySelector('.testimonials-slider-wrap');

  let currentServiceType = 'Airport Transfer';
  let passengerCount = 1;
  let testimonialAutoSlideTimer = null;

  // 1. Toast Notification Helper
  function showToast(message) {
    if (!toastEl) return;
    toastEl.textContent = message;
    toastEl.classList.add('show');
    setTimeout(() => {
      toastEl.classList.remove('show');
    }, 3500);
  }

  // 2. Header scroll effect
  window.addEventListener('scroll', () => {
    if (window.scrollY > 40) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }
  });

  // 3. Travel date placeholder by default
  if (travelDateInput) {
    travelDateInput.placeholder = 'Select date';
  }

  // 4. Booking Tab switching
  function selectServiceTab(serviceName) {
    currentServiceType = serviceName;
    bookingTabs.forEach(tab => {
      const s = tab.dataset.service || tab.textContent.trim();
      if (s.toLowerCase().includes(serviceName.toLowerCase()) || serviceName.toLowerCase().includes(s.toLowerCase())) {
        tab.classList.add('active');
      } else {
        tab.classList.remove('active');
      }
    });
  }

  bookingTabs.forEach(tab => {
    tab.addEventListener('click', () => {
      const s = tab.dataset.service || tab.textContent.trim();
      selectServiceTab(s);
    });
  });

  // 5. Swap Locations Button
  if (swapBtn && pickupInput && destInput) {
    swapBtn.addEventListener('click', (e) => {
      e.preventDefault();
      const temp = pickupInput.value;
      pickupInput.value = destInput.value;
      destInput.value = temp;

      swapBtn.style.transform = 'scale(0.85) rotate(180deg)';
      setTimeout(() => {
        swapBtn.style.transform = '';
      }, 250);
      showToast('Locations swapped!');
    });
  }

  // 6. Passenger Dropdown
  if (passengerSelectTrigger && passengerMenu) {
    passengerSelectTrigger.addEventListener('click', (e) => {
      e.stopPropagation();
      passengerMenu.classList.toggle('show');
    });

    document.addEventListener('click', (e) => {
      if (!passengerSelectTrigger.contains(e.target) && !passengerMenu.contains(e.target)) {
        passengerMenu.classList.remove('show');
      }
    });

    const options = passengerMenu.querySelectorAll('.passenger-option');
    options.forEach(opt => {
      opt.addEventListener('click', () => {
        passengerCount = opt.dataset.value || 1;
        if (passengerDisplay) {
          passengerDisplay.textContent = `${passengerCount} ${passengerCount > 1 ? 'Passengers' : 'Passenger'}`;
        }
        if (passengerHiddenInput) {
          passengerHiddenInput.value = passengerCount;
        }
        passengerMenu.classList.remove('show');
      });
    });
  }

  // 7. Dynamic Fare Calculator (Route specific in USD & LKR)
  function calculateDynamicEstimate(service, dest, passengers) {
    const d = (dest || '').toLowerCase();
    
    if (service === 'Daily Hire') {
      return '$80 / day (~LKR 26,000)';
    }
    if (service === 'Multi-Day Tour') {
      return '$85 / day (~LKR 27,500) All-Inclusive';
    }

    // Airport / Point to Point route-based
    if (d.includes('colombo') || d.includes('negombo') || d.includes('mount lavinia')) {
      return '$45 - $55 (~LKR 15,000 - 18,000)';
    } else if (d.includes('kandy') || d.includes('peradeniya') || d.includes('pinnawala')) {
      return '$80 - $95 (~LKR 26,000 - 31,000)';
    } else if (d.includes('galle') || d.includes('bentota') || d.includes('hikkaduwa') || d.includes('unawatuna')) {
      return '$70 - $85 (~LKR 23,000 - 28,000)';
    } else if (d.includes('ella') || d.includes('nuwara eliya') || d.includes('badulla')) {
      return '$110 - $130 (~LKR 36,000 - 42,000)';
    } else if (d.includes('sigiriya') || d.includes('dambulla') || d.includes('habarana')) {
      return '$90 - $110 (~LKR 29,000 - 36,000)';
    } else if (d.includes('mirissa') || d.includes('weligama') || d.includes('matara')) {
      return '$85 - $100 (~LKR 28,000 - 33,000)';
    } else if (d.includes('arugam') || d.includes('trincomalee') || d.includes('jaffna')) {
      return '$135 - $160 (~LKR 44,000 - 52,000)';
    }

    return '$55 - $85 (~LKR 18,000 - 28,000)';
  }

  function openBookingModal(customService) {
    if (customService) {
      selectServiceTab(customService);
    }

    const pickup = pickupInput && pickupInput.value.trim() ? pickupInput.value.trim() : 'Bandaranaike Int Airport (BIA)';
    const dest = destInput && destInput.value.trim() ? destInput.value.trim() : (currentServiceType === 'Airport Transfer' ? 'Colombo City Hotel' : 'Kandy / Sightseeing');
    const date = travelDateInput && travelDateInput.value ? travelDateInput.value : 'Flexible / Tomorrow';
    const pass = passengerDisplay ? passengerDisplay.textContent : `${passengerCount} Passengers`;

    if (summaryService) summaryService.textContent = currentServiceType;
    if (summaryPickup) summaryPickup.textContent = pickup;
    if (summaryDest) summaryDest.textContent = dest;
    if (summaryDate) summaryDate.textContent = date;
    if (summaryPassengers) summaryPassengers.textContent = pass;
    if (fareDisplay) fareDisplay.textContent = calculateDynamicEstimate(currentServiceType, dest, passengerCount);

    if (modal) modal.classList.add('open');
  }

  function closeBookingModal() {
    if (modal) modal.classList.remove('open');
  }

  if (checkAvailabilityBtn) {
    checkAvailabilityBtn.addEventListener('click', (e) => {
      e.preventDefault();
      openBookingModal();
    });
  }

  if (modalCloseBtn) {
    modalCloseBtn.addEventListener('click', closeBookingModal);
  }

  if (modal) {
    modal.addEventListener('click', (e) => {
      if (e.target === modal) {
        closeBookingModal();
      }
    });
  }

  // Confirm WhatsApp Booking
  if (btnConfirmWa) {
    btnConfirmWa.addEventListener('click', () => {
      const pickup = summaryPickup ? summaryPickup.textContent : 'BIA Airport';
      const dest = summaryDest ? summaryDest.textContent : 'Colombo';
      const date = summaryDate ? summaryDate.textContent : 'Flexible';
      const pass = summaryPassengers ? summaryPassengers.textContent : '1 Passenger';
      const nameInput = document.getElementById('modalCustomerName');
      const phoneInput = document.getElementById('modalCustomerPhone');
      const name = nameInput && nameInput.value.trim() ? nameInput.value.trim() : 'Guest';
      const phone = phoneInput && phoneInput.value.trim() ? phoneInput.value.trim() : 'Not provided';
      const estFare = fareDisplay ? fareDisplay.textContent : 'Estimate';

      const message = `*KDH Van Hire Sri Lanka - Booking Request*%0A` +
        `----------------------------------------%0A` +
        `• *Customer:* ${encodeURIComponent(name)}%0A` +
        `• *Contact:* ${encodeURIComponent(phone)}%0A` +
        `• *Service:* ${encodeURIComponent(currentServiceType)}%0A` +
        `• *Pickup:* ${encodeURIComponent(pickup)}%0A` +
        `• *Destination:* ${encodeURIComponent(dest)}%0A` +
        `• *Date:* ${encodeURIComponent(date)}%0A` +
        `• *Passengers:* ${encodeURIComponent(pass)}%0A` +
        `• *Vehicle:* Toyota HiAce KDH 200 (Luxury AC)%0A` +
        `• *Fare Estimate:* ${encodeURIComponent(estFare)}%0A` +
        `----------------------------------------%0A` +
        `Please confirm vehicle & driver availability. Thank you!`;

      showToast('Opening WhatsApp with your trip details...');
      setTimeout(() => {
        window.open(`https://wa.me/94771234567?text=${message}`, '_blank');
        closeBookingModal();
      }, 500);
    });
  }

  // 8. Service Cards Click Interaction
  document.querySelectorAll('.service-card').forEach(card => {
    card.style.cursor = 'pointer';
    card.addEventListener('click', (e) => {
      const titleEl = card.querySelector('.service-card-title');
      const serviceName = titleEl ? titleEl.textContent.trim() : 'Airport Transfers';
      const keyMap = {
        'Airport Transfers': 'airport-transfers',
        'Point to Point Hire': 'point-to-point',
        'Daily Hire': 'daily-hire',
        'Multi-Day Tours': 'multi-day-tours'
      };
      const key = keyMap[serviceName];
      if (key) {
        openInfoModal(key);
      } else {
        openBookingModal(serviceName);
      }
    });
  });

  // =========================================================================
  // 9. PRICE PLAN POPUP MODALS (100% Mockup Fidelity)
  // =========================================================================
  const PRICE_PLAN_TEMPLATES = {
    'airport-transfer': {
      title: 'Book Airport Transfer',
      subtitle: 'Plan your airport pickup or drop-off in a few simple steps.',
      bannerImg: 'assets/modals/banner-airport-transfer.jpg',
      iconSvg: `<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path d="M17.8 19.2 16 11l3.5-3.5C21 6 21.5 4 21 3c-1-.5-3 0-4.5 1.5L13 8 4.8 6.2c-.5-.1-.9.1-1.1.5l-.3.5c-.2.5-.1 1 .3 1.3L9 12l-2 3H4l-1 1 3 2 2 3 1-1v-3l3-2 3.5 5.3c.3.4.8.5 1.3.3l.5-.3c.4-.2.6-.6.5-1.1z"/></svg>`,
      fieldsHtml: `
        <div class="plan-form-grid">
          <div class="plan-form-group">
            <label class="plan-form-label">Airport <span class="req">*</span></label>
            <div class="plan-input-wrap">
              <span class="plan-input-icon">
                <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M17.8 19.2 16 11l3.5-3.5C21 6 21.5 4 21 3c-1-.5-3 0-4.5 1.5L13 8 4.8 6.2c-.5-.1-.9.1-1.1.5l-.3.5c-.2.5-.1 1 .3 1.3L9 12l-2 3H4l-1 1 3 2 2 3 1-1v-3l3-2 3.5 5.3c.3.4.8.5 1.3.3l.5-.3c.4-.2.6-.6.5-1.1z"/></svg>
              </span>
              <select class="plan-input-control plan-select-control" id="planAirportSelect">
                <option value="Bandaranaike Intl. Airport (CMB)" selected>Bandaranaike Intl. Airport (CMB)</option>
                <option value="Mattala Rajapaksa Intl. Airport (HRI)">Mattala Rajapaksa Intl. Airport (HRI)</option>
                <option value="Jaffna International Airport (JAF)">Jaffna International Airport (JAF)</option>
                <option value="Ratmalana Airport (RML)">Ratmalana Airport (RML)</option>
              </select>
            </div>
          </div>
          <div class="plan-form-group">
            <label class="plan-form-label">Pickup / Drop-off <span class="req">*</span></label>
            <div class="plan-input-wrap">
              <span class="plan-input-icon">
                <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="17 1 21 5 17 9"></polyline><path d="M3 5h18"></path><polyline points="7 23 3 19 7 15"></polyline><path d="M21 19H3"></path></svg>
              </span>
              <select class="plan-input-control plan-select-control" id="planTransferTypeSelect">
                <option value="Airport Pickup" selected>Airport Pickup</option>
                <option value="Airport Drop-off">Airport Drop-off</option>
              </select>
            </div>
          </div>
          <div class="plan-form-group">
            <label class="plan-form-label">Destination <span class="req">*</span></label>
            <div class="plan-input-wrap">
              <span class="plan-input-icon">
                <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path><circle cx="12" cy="10" r="3"></circle></svg>
              </span>
              <input type="text" class="plan-input-control" id="planDestination" value="Colombo" placeholder="e.g. Colombo, Kandy, Galle">
            </div>
          </div>
          <div class="plan-form-group">
            <label class="plan-form-label">Date <span class="req">*</span></label>
            <div class="plan-input-wrap">
              <span class="plan-input-icon">
                <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect><line x1="16" y1="2" x2="16" y2="6"></line><line x1="8" y1="2" x2="8" y2="6"></line><line x1="3" y1="10" x2="21" y2="10"></line></svg>
              </span>
              <input type="text" class="plan-input-control" id="planDate" value="Tue, 28 Jan 2025" placeholder="Select Date">
            </div>
          </div>
          <div class="plan-form-group">
            <label class="plan-form-label">Time <span class="req">*</span></label>
            <div class="plan-input-wrap">
              <span class="plan-input-icon">
                <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"></circle><polyline points="12 6 12 12 16 14"></polyline></svg>
              </span>
              <select class="plan-input-control plan-select-control" id="planTime">
                <option value="6:00 AM">6:00 AM</option>
                <option value="8:00 AM">8:00 AM</option>
                <option value="10:00 AM" selected>10:00 AM</option>
                <option value="12:00 PM">12:00 PM</option>
                <option value="2:00 PM">2:00 PM</option>
                <option value="4:00 PM">4:00 PM</option>
                <option value="6:00 PM">6:00 PM</option>
                <option value="8:00 PM">8:00 PM</option>
                <option value="10:00 PM">10:00 PM</option>
                <option value="Midnight">12:00 AM (Midnight)</option>
              </select>
            </div>
          </div>
          <div class="plan-form-group">
            <label class="plan-form-label">Passengers <span class="req">*</span></label>
            <div class="plan-input-wrap">
              <span class="plan-input-icon">
                <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><path d="M23 21v-2a4 4 0 0 0-3-3.87"></path><path d="M16 3.13a4 4 0 0 1 0 7.75"></path></svg>
              </span>
              <select class="plan-input-control plan-select-control" id="planPassengers">
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4" selected>4</option>
                <option value="5">5</option>
                <option value="6">6</option>
                <option value="7">7</option>
                <option value="8">8</option>
                <option value="9">9</option>
                <option value="10-14">10–14</option>
              </select>
            </div>
          </div>
          <div class="plan-form-group">
            <label class="plan-form-label">Luggage</label>
            <div class="plan-input-wrap">
              <span class="plan-input-icon">
                <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="7" width="20" height="14" rx="2" ry="2"></rect><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"></path></svg>
              </span>
              <select class="plan-input-control plan-select-control" id="planLuggage">
                <option value="1-2 bags">1–2 bags</option>
                <option value="4 bags" selected>4 bags</option>
                <option value="6 bags">6 bags</option>
                <option value="8+ bags">8+ Large Bags</option>
              </select>
            </div>
          </div>
          <div class="plan-form-group">
            <label class="plan-form-label">Flight Number</label>
            <div class="plan-input-wrap">
              <span class="plan-input-icon">
                <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M17.8 19.2 16 11l3.5-3.5C21 6 21.5 4 21 3c-1-.5-3 0-4.5 1.5L13 8 4.8 6.2c-.5-.1-.9.1-1.1.5l-.3.5c-.2.5-.1 1 .3 1.3L9 12l-2 3H4l-1 1 3 2 2 3 1-1v-3l3-2 3.5 5.3c.3.4.8.5 1.3.3l.5-.3c.4-.2.6-.6.5-1.1z"/></svg>
              </span>
              <input type="text" class="plan-input-control" id="planFlightNo" value="UL 403" placeholder="e.g. UL 403 / EK 650">
            </div>
          </div>
          <div class="plan-form-group plan-form-full">
            <label class="plan-form-label">Contact Number <span class="req">*</span></label>
            <div class="plan-input-wrap">
              <span class="plan-input-icon">
                <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>
              </span>
              <input type="tel" class="plan-input-control" id="planPhone" value="+94 77 123 4567" placeholder="+94 77 123 4567">
            </div>
          </div>
        </div>
      `,
      infoHeading: 'Estimated fare shown after confirmation.',
      infoDesc: 'The final fare will be shared based on your trip details, date, and availability.',
      submitText: 'Request Booking'
    },

    'daily-hire': {
      title: 'Book Daily Hire',
      subtitle: 'Hire a KDH van with driver for a full day (e.g. up to 8–10 hours).',
      bannerImg: 'assets/modals/banner-daily-hire.jpg',
      iconSvg: `<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect><line x1="16" y1="2" x2="16" y2="6"></line><line x1="8" y1="2" x2="8" y2="6"></line><line x1="3" y1="10" x2="21" y2="10"></line></svg>`,
      fieldsHtml: `
        <div class="plan-form-grid">
          <div class="plan-form-group">
            <label class="plan-form-label">Pickup Location <span class="req">*</span></label>
            <div class="plan-input-wrap">
              <span class="plan-input-icon">
                <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path><circle cx="12" cy="10" r="3"></circle></svg>
              </span>
              <select class="plan-input-control plan-select-control" id="planPickupLoc">
                <option value="Colombo" selected>Colombo</option>
                <option value="Negombo">Negombo</option>
                <option value="Kandy">Kandy</option>
                <option value="Galle">Galle</option>
                <option value="Bentota">Bentota</option>
                <option value="Nuwara Eliya">Nuwara Eliya</option>
              </select>
            </div>
          </div>
          <div class="plan-form-group">
            <label class="plan-form-label">Travel Date <span class="req">*</span></label>
            <div class="plan-input-wrap">
              <span class="plan-input-icon">
                <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect><line x1="16" y1="2" x2="16" y2="6"></line><line x1="8" y1="2" x2="8" y2="6"></line><line x1="3" y1="10" x2="21" y2="10"></line></svg>
              </span>
              <input type="text" class="plan-input-control" id="planDate" value="Tue, 28 Jan 2025" placeholder="Select Date">
            </div>
          </div>
          <div class="plan-form-group">
            <label class="plan-form-label">Start Time <span class="req">*</span></label>
            <div class="plan-input-wrap">
              <span class="plan-input-icon">
                <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"></circle><polyline points="12 6 12 12 16 14"></polyline></svg>
              </span>
              <select class="plan-input-control plan-select-control" id="planStartTime">
                <option value="7:00 AM">7:00 AM</option>
                <option value="8:00 AM">8:00 AM</option>
                <option value="8:30 AM">8:30 AM</option>
                <option value="9:00 AM" selected>9:00 AM</option>
                <option value="9:30 AM">9:30 AM</option>
                <option value="10:00 AM">10:00 AM</option>
              </select>
            </div>
          </div>
          <div class="plan-form-group">
            <label class="plan-form-label">Estimated Hours <span class="req">*</span></label>
            <div class="plan-input-wrap">
              <span class="plan-input-icon">
                <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"></circle><polyline points="12 6 12 14 10"></polyline></svg>
              </span>
              <select class="plan-input-control plan-select-control" id="planEstimatedHours">
                <option value="4 Hours (Half Day)">4 Hours (Half Day)</option>
                <option value="8 Hours (Full Day)" selected>8 Hours (Full Day)</option>
                <option value="10 Hours (Extended)">10 Hours (Extended)</option>
                <option value="12 Hours (Max)">12 Hours</option>
              </select>
            </div>
          </div>
          <div class="plan-form-group">
            <label class="plan-form-label">Passengers <span class="req">*</span></label>
            <div class="plan-input-wrap">
              <span class="plan-input-icon">
                <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><path d="M23 21v-2a4 4 0 0 0-3-3.87"></path><path d="M16 3.13a4 4 0 0 1 0 7.75"></path></svg>
              </span>
              <select class="plan-input-control plan-select-control" id="planPassengers">
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4" selected>4</option>
                <option value="5">5</option>
                <option value="6">6</option>
                <option value="7">7</option>
                <option value="8">8</option>
                <option value="9">9</option>
                <option value="10-14">10–14</option>
              </select>
            </div>
          </div>
          <div class="plan-form-group">
            <label class="plan-form-label">Trip Plan / Destination <span class="req">*</span></label>
            <div class="plan-input-wrap">
              <span class="plan-input-icon">
                <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path><circle cx="12" cy="10" r="3"></circle></svg>
              </span>
              <input type="text" class="plan-input-control" id="planTripPlan" value="Kandy Sightseeing (Kandy, Peradeniya, ...)" placeholder="e.g. City Tour, Kandy, Galle">
            </div>
          </div>
          <div class="plan-form-group plan-form-full">
            <label class="plan-form-label">Contact Number <span class="req">*</span></label>
            <div class="plan-input-wrap">
              <span class="plan-input-icon">
                <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>
              </span>
              <input type="tel" class="plan-input-control" id="planPhone" value="+94 77 123 4567" placeholder="+94 77 123 4567">
            </div>
          </div>
        </div>
      `,
      infoHeading: 'Final price will be confirmed based on duration, itinerary, and availability.',
      infoDesc: '',
      submitText: 'Check Availability'
    },

    'multi-day': {
      title: 'Plan Your Multi-Day Tour',
      subtitle: 'Customized Sri Lanka tours with a professional driver.',
      bannerImg: 'assets/modals/banner-multi-day.jpg',
      iconSvg: `<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path d="m8 3 4 8 5-5 5 15H2L8 3z"></path><path d="M4.14 15.08c2.62-1.57 5.24-1.43 7.86.42 2.74 1.94 5.49 2 8.23.19"></path></svg>`,
      fieldsHtml: `
        <div class="plan-form-grid">
          <div class="plan-form-group">
            <label class="plan-form-label">Start Location <span class="req">*</span></label>
            <div class="plan-input-wrap">
              <span class="plan-input-icon">
                <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path><circle cx="12" cy="10" r="3"></circle></svg>
              </span>
              <select class="plan-input-control plan-select-control" id="planStartLoc">
                <option value="Colombo" selected>Colombo</option>
                <option value="Bandaranaike Intl. Airport (Negombo)">Bandaranaike Intl. Airport (Negombo)</option>
                <option value="Kandy">Kandy</option>
                <option value="Galle">Galle</option>
              </select>
            </div>
          </div>
          <div class="plan-form-group">
            <label class="plan-form-label">Travel Start Date <span class="req">*</span></label>
            <div class="plan-input-wrap">
              <span class="plan-input-icon">
                <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect><line x1="16" y1="2" x2="16" y2="6"></line><line x1="8" y1="2" x2="8" y2="6"></line><line x1="3" y1="10" x2="21" y2="10"></line></svg>
              </span>
              <input type="text" class="plan-input-control" id="planDate" value="Tue, 28 Jan 2025" placeholder="Select Date">
            </div>
          </div>
          <div class="plan-form-group">
            <label class="plan-form-label">Tour Duration <span class="req">*</span></label>
            <div class="plan-input-wrap">
              <span class="plan-input-icon">
                <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect><line x1="16" y1="2" x2="16" y2="6"></line><line x1="8" y1="2" x2="8" y2="6"></line><line x1="3" y1="10" x2="21" y2="10"></line></svg>
              </span>
              <select class="plan-input-control plan-select-control" id="planDuration">
                <option value="2 Days / 1 Night">2 Days / 1 Night</option>
                <option value="3 Days / 2 Nights" selected>3 Days / 2 Nights</option>
                <option value="4 Days / 3 Nights">4 Days / 3 Nights</option>
                <option value="5 Days / 4 Nights">5 Days / 4 Nights</option>
                <option value="7 Days / 6 Nights">7 Days / 6 Nights</option>
                <option value="10+ Days">10+ Days (Full Island)</option>
              </select>
            </div>
          </div>
          <div class="plan-form-group">
            <label class="plan-form-label">Passengers <span class="req">*</span></label>
            <div class="plan-input-wrap">
              <span class="plan-input-icon">
                <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><path d="M23 21v-2a4 4 0 0 0-3-3.87"></path><path d="M16 3.13a4 4 0 0 1 0 7.75"></path></svg>
              </span>
              <select class="plan-input-control plan-select-control" id="planPassengers">
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4" selected>4</option>
                <option value="5">5</option>
                <option value="6">6</option>
                <option value="7">7</option>
                <option value="8">8</option>
                <option value="9">9</option>
                <option value="10-14">10–14</option>
              </select>
            </div>
          </div>
          <div class="plan-form-group plan-form-full">
            <label class="plan-form-label">Preferred Destinations <span class="req">*</span></label>
            <div class="plan-input-wrap">
              <span class="plan-input-icon">
                <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path><circle cx="12" cy="10" r="3"></circle></svg>
              </span>
              <select class="plan-input-control plan-select-control" id="planDestinations">
                <option value="Kandy, Ella, Sigiriya" selected>Kandy, Ella, Sigiriya</option>
                <option value="Cultural Triangle (Sigiriya, Dambulla, Polonnaruwa)">Cultural Triangle (Sigiriya, Dambulla, Polonnaruwa)</option>
                <option value="Hill Country & Tea Country (Nuwara Eliya, Ella)">Hill Country &amp; Tea Country (Nuwara Eliya, Ella)</option>
                <option value="South Coast & Wildlife (Galle, Mirissa, Yala)">South Coast &amp; Wildlife (Galle, Mirissa, Yala)</option>
                <option value="Custom Itinerary (Flexible)">Custom Itinerary (Flexible)</option>
              </select>
            </div>
          </div>
          <div class="plan-form-group plan-form-full">
            <label class="plan-form-label">Notes / Special Requests</label>
            <div class="plan-input-wrap textarea-wrap">
              <span class="plan-input-icon">
                <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path></svg>
              </span>
              <textarea class="plan-textarea-control" id="planNotes" placeholder="e.g., hotel locations, places to visit, or any special arrangements ..."></textarea>
            </div>
          </div>
          <div class="plan-form-group plan-form-full">
            <label class="plan-form-label">Contact Number <span class="req">*</span></label>
            <div class="plan-input-wrap">
              <span class="plan-input-icon">
                <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>
              </span>
              <input type="tel" class="plan-input-control" id="planPhone" value="+94 77 123 4567" placeholder="+94 77 123 4567">
            </div>
          </div>
        </div>
      `,
      infoHeading: 'A tailored tour quote will be prepared for you.',
      infoDesc: 'The quote will be based on your itinerary, number of days, and travel plan.',
      submitText: 'Request Tour Quote'
    },

    'point-to-point': {
      title: 'Book Point to Point Hire',
      subtitle: 'Enjoy comfortable city-to-city and town-to-town travel across Sri Lanka.',
      bannerImg: 'assets/modals/banner-point-to-point.jpg',
      iconSvg: `<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path d="M5 11l1.5-5.5A2 2 0 0 1 8.4 4h7.2a2 2 0 0 1 1.9 1.5L19 11v7a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-1H8v1a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-7z"></path><circle cx="7.5" cy="14.5" r="1.5"></circle><circle cx="16.5" cy="14.5" r="1.5"></circle></svg>`,
      fieldsHtml: `
        <div class="plan-form-grid">
          <div class="plan-form-group">
            <label class="plan-form-label">Pickup Location <span class="req">*</span></label>
            <div class="plan-input-wrap">
              <span class="plan-input-icon">
                <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path><circle cx="12" cy="10" r="3"></circle></svg>
              </span>
              <select class="plan-input-control plan-select-control" id="planPickupLoc">
                <option value="Colombo" selected>Colombo</option>
                <option value="Negombo">Negombo</option>
                <option value="Kandy">Kandy</option>
                <option value="Galle">Galle</option>
                <option value="Bentota">Bentota</option>
              </select>
            </div>
          </div>
          <div class="plan-form-group">
            <label class="plan-form-label">Destination <span class="req">*</span></label>
            <div class="plan-input-wrap">
              <span class="plan-input-icon">
                <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path><circle cx="12" cy="10" r="3"></circle></svg>
              </span>
              <select class="plan-input-control plan-select-control" id="planDestLoc">
                <option value="Kandy" selected>Kandy</option>
                <option value="Galle">Galle</option>
                <option value="Nuwara Eliya">Nuwara Eliya</option>
                <option value="Ella">Ella</option>
                <option value="Sigiriya">Sigiriya</option>
                <option value="Colombo">Colombo</option>
              </select>
            </div>
          </div>
          <div class="plan-form-group">
            <label class="plan-form-label">Travel Date <span class="req">*</span></label>
            <div class="plan-input-wrap">
              <span class="plan-input-icon">
                <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect><line x1="16" y1="2" x2="16" y2="6"></line><line x1="8" y1="2" x2="8" y2="6"></line><line x1="3" y1="10" x2="21" y2="10"></line></svg>
              </span>
              <input type="text" class="plan-input-control" id="planDate" value="Tue, 28 Jan 2025" placeholder="Select Date">
            </div>
          </div>
          <div class="plan-form-group">
            <label class="plan-form-label">Pickup Time <span class="req">*</span></label>
            <div class="plan-input-wrap">
              <span class="plan-input-icon">
                <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"></circle><polyline points="12 6 12 12 16 14"></polyline></svg>
              </span>
              <select class="plan-input-control plan-select-control" id="planPickupTime">
                <option value="6:00 AM">6:00 AM</option>
                <option value="8:00 AM">8:00 AM</option>
                <option value="10:00 AM" selected>10:00 AM</option>
                <option value="12:00 PM">12:00 PM</option>
                <option value="2:00 PM">2:00 PM</option>
                <option value="4:00 PM">4:00 PM</option>
                <option value="6:00 PM">6:00 PM</option>
                <option value="8:00 PM">8:00 PM</option>
              </select>
            </div>
          </div>
          <div class="plan-form-group">
            <label class="plan-form-label">Passengers <span class="req">*</span></label>
            <div class="plan-input-wrap">
              <span class="plan-input-icon">
                <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><path d="M23 21v-2a4 4 0 0 0-3-3.87"></path><path d="M16 3.13a4 4 0 0 1 0 7.75"></path></svg>
              </span>
              <select class="plan-input-control plan-select-control" id="planPassengers">
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4" selected>4</option>
                <option value="5">5</option>
                <option value="6">6</option>
                <option value="7">7</option>
                <option value="8">8</option>
                <option value="9">9</option>
                <option value="10-14">10–14</option>
              </select>
            </div>
          </div>
          <div class="plan-form-group">
            <label class="plan-form-label">Trip Type <span class="req">*</span></label>
            <div class="plan-radio-group">
              <label class="plan-radio-pill active" id="radioPillOneWay">
                <input type="radio" name="planTripTypeRadio" value="One Way" checked>
                One Way
              </label>
              <label class="plan-radio-pill" id="radioPillReturn">
                <input type="radio" name="planTripTypeRadio" value="Return">
                Return
              </label>
            </div>
          </div>
          <div class="plan-form-group plan-form-full">
            <label class="plan-form-label">Additional Stops (Optional)</label>
            <div class="plan-input-wrap">
              <span class="plan-input-icon">
                <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path><circle cx="12" cy="10" r="3"></circle><line x1="12" y1="7" x2="12" y2="13"></line><line x1="9" y1="10" x2="15" y2="10"></line></svg>
              </span>
              <input type="text" class="plan-input-control" id="planStops" placeholder="Add stop(s) (e.g., Matale, Peradeniya)">
            </div>
          </div>
          <div class="plan-form-group plan-form-full">
            <label class="plan-form-label">Contact Number <span class="req">*</span></label>
            <div class="plan-input-wrap">
              <span class="plan-input-icon">
                <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>
              </span>
              <input type="tel" class="plan-input-control" id="planPhone" value="+94 77 123 4567" placeholder="+94 77 123 4567">
            </div>
          </div>
        </div>
      `,
      infoHeading: 'Final pricing will be confirmed based on your route and trip details.',
      infoDesc: "We'll review your request and share the best available rate shortly.",
      submitText: 'Request Trip Quote'
    }
  };

  let activePlanKey = 'daily-hire';

  function ensurePricePlanModalExists() {
    let planModal = document.getElementById('pricePlanModal');
    if (!planModal) {
      planModal = document.createElement('div');
      planModal.className = 'plan-modal-overlay';
      planModal.id = 'pricePlanModal';
      planModal.setAttribute('role', 'dialog');
      planModal.setAttribute('aria-modal', 'true');
      planModal.innerHTML = `
        <div class="plan-modal-container">
          <div class="plan-modal-header">
            <div class="plan-modal-header-left">
              <div class="plan-modal-header-icon" id="planModalIcon"></div>
              <div class="plan-modal-header-divider"></div>
              <div class="plan-modal-header-text">
                <h3 class="plan-modal-title" id="planModalTitle"></h3>
                <p class="plan-modal-sub" id="planModalSub"></p>
              </div>
            </div>
            <button class="plan-modal-close" id="planModalCloseBtn" aria-label="Close dialog">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
                <line x1="18" y1="6" x2="6" y2="18"></line>
                <line x1="6" y1="6" x2="18" y2="18"></line>
              </svg>
            </button>
          </div>
          <div class="plan-modal-banner">
            <img id="planModalBannerImg" src="" alt="Service Banner">
          </div>
          <form class="plan-modal-form" id="planModalForm" onsubmit="return false;">
            <div id="planModalFields"></div>
            <div class="plan-info-box">
              <svg class="plan-info-tag-icon" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12.586 2.586A2 2 0 0 0 11.172 2H4a2 2 0 0 0-2 2v7.172a2 2 0 0 0 .586 1.414l8 8a2 2 0 0 0 2.828 0l7.172-7.172a2 2 0 0 0 0-2.828l-8-8zM7 9a2 2 0 1 1 0-4 2 2 0 0 1 0 4z"/>
              </svg>
              <div class="plan-info-divider"></div>
              <div class="plan-info-content">
                <h4 class="plan-info-heading" id="planInfoHeading"></h4>
                <p class="plan-info-desc" id="planInfoDesc"></p>
              </div>
            </div>
            <div class="plan-modal-actions">
              <button type="button" class="plan-btn-cancel" id="planBtnCancel">Cancel</button>
              <button type="button" class="plan-btn-submit" id="planBtnSubmit">
                <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round">
                  <rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect>
                  <line x1="16" y1="2" x2="16" y2="6"></line>
                  <line x1="8" y1="2" x2="8" y2="6"></line>
                  <line x1="3" y1="10" x2="21" y2="10"></line>
                </svg>
                <span id="planBtnSubmitText"></span>
              </button>
            </div>
          </form>
        </div>
      `;
      document.body.appendChild(planModal);
    }
    return planModal;
  }

  function openPricePlanModal(planKey) {
    const key = PRICE_PLAN_TEMPLATES[planKey] ? planKey : 'daily-hire';
    activePlanKey = key;
    const tpl = PRICE_PLAN_TEMPLATES[key];
    const planModal = ensurePricePlanModalExists();

    const titleEl = planModal.querySelector('#planModalTitle');
    const subEl = planModal.querySelector('#planModalSub');
    const iconEl = planModal.querySelector('#planModalIcon');
    const bannerEl = planModal.querySelector('#planModalBannerImg');
    const fieldsEl = planModal.querySelector('#planModalFields');
    const headingEl = planModal.querySelector('#planInfoHeading');
    const descEl = planModal.querySelector('#planInfoDesc');
    const submitTextEl = planModal.querySelector('#planBtnSubmitText');

    if (titleEl) titleEl.textContent = tpl.title;
    if (subEl) subEl.textContent = tpl.subtitle;
    if (iconEl) iconEl.innerHTML = tpl.iconSvg;
    if (bannerEl) bannerEl.src = tpl.bannerImg;
    if (fieldsEl) fieldsEl.innerHTML = tpl.fieldsHtml;
    if (headingEl) headingEl.textContent = tpl.infoHeading;
    if (descEl) descEl.textContent = tpl.infoDesc;
    if (submitTextEl) submitTextEl.textContent = tpl.submitText;

    // Attach Point-to-Point Radio Pills behavior
    if (key === 'point-to-point') {
      const radioPills = planModal.querySelectorAll('.plan-radio-pill');
      radioPills.forEach(pill => {
        pill.addEventListener('click', () => {
          radioPills.forEach(p => p.classList.remove('active'));
          pill.classList.add('active');
          const input = pill.querySelector('input');
          if (input) input.checked = true;
        });
      });
    }

    // Attach Close & Cancel
    const closeBtn = planModal.querySelector('#planModalCloseBtn');
    const cancelBtn = planModal.querySelector('#planBtnCancel');
    if (closeBtn) closeBtn.onclick = closePricePlanModal;
    if (cancelBtn) cancelBtn.onclick = closePricePlanModal;

    planModal.onclick = (e) => {
      if (e.target === planModal) closePricePlanModal();
    };

    // Attach Submit WhatsApp handler
    const submitBtn = planModal.querySelector('#planBtnSubmit');
    if (submitBtn) {
      submitBtn.onclick = () => handlePricePlanSubmit(key);
    }

    planModal.classList.add('open');
    document.body.style.overflow = 'hidden';
  }

  window.openPricePlanModal = openPricePlanModal;
  window.closePricePlanModal = closePricePlanModal;

  function closePricePlanModal() {
    const planModal = document.getElementById('pricePlanModal');
    if (planModal) {
      planModal.classList.remove('open');
    }
    document.body.style.overflow = '';
  }

  function handlePricePlanSubmit(key) {
    const tpl = PRICE_PLAN_TEMPLATES[key];
    const phoneInput = document.getElementById('planPhone');
    const phone = phoneInput && phoneInput.value.trim() ? phoneInput.value.trim() : '+94 77 123 4567';

    let detailsText = '';

    if (key === 'airport-transfer') {
      const airport = document.getElementById('planAirportSelect')?.value || 'Bandaranaike Intl. Airport (CMB)';
      const type = document.getElementById('planTransferTypeSelect')?.value || 'Airport Pickup';
      const dest = document.getElementById('planDestination')?.value || 'Colombo';
      const date = document.getElementById('planDate')?.value || 'Flexible';
      const time = document.getElementById('planTime')?.value || '10:00 AM';
      const pass = document.getElementById('planPassengers')?.value || '4';
      const luggage = document.getElementById('planLuggage')?.value || '4 bags';
      const flight = document.getElementById('planFlightNo')?.value || 'N/A';

      detailsText = 
        `• *Airport:* ${airport}%0A` +
        `• *Transfer Type:* ${type}%0A` +
        `• *Destination / Pickup:* ${dest}%0A` +
        `• *Date & Time:* ${date} at ${time}%0A` +
        `• *Passengers:* ${pass}%0A` +
        `• *Luggage:* ${luggage}%0A` +
        `• *Flight No:* ${flight}`;
    } else if (key === 'daily-hire') {
      const pickup = document.getElementById('planPickupLoc')?.value || 'Colombo';
      const date = document.getElementById('planDate')?.value || 'Flexible';
      const time = document.getElementById('planStartTime')?.value || '9:00 AM';
      const hours = document.getElementById('planEstimatedHours')?.value || '8 Hours (Full Day)';
      const pass = document.getElementById('planPassengers')?.value || '4';
      const plan = document.getElementById('planTripPlan')?.value || 'City Tour';

      detailsText = 
        `• *Pickup Location:* ${pickup}%0A` +
        `• *Travel Date:* ${date}%0A` +
        `• *Start Time:* ${time}%0A` +
        `• *Duration:* ${hours}%0A` +
        `• *Passengers:* ${pass}%0A` +
        `• *Itinerary Plan:* ${plan}`;
    } else if (key === 'multi-day') {
      const start = document.getElementById('planStartLoc')?.value || 'Colombo';
      const date = document.getElementById('planDate')?.value || 'Flexible';
      const duration = document.getElementById('planDuration')?.value || '3 Days / 2 Nights';
      const pass = document.getElementById('planPassengers')?.value || '4';
      const dests = document.getElementById('planDestinations')?.value || 'Kandy, Ella, Sigiriya';
      const notes = document.getElementById('planNotes')?.value || 'None';

      detailsText = 
        `• *Start Location:* ${start}%0A` +
        `• *Start Date:* ${date}%0A` +
        `• *Tour Duration:* ${duration}%0A` +
        `• *Passengers:* ${pass}%0A` +
        `• *Preferred Destinations:* ${dests}%0A` +
        `• *Special Notes:* ${notes}`;
    } else if (key === 'point-to-point') {
      const pickup = document.getElementById('planPickupLoc')?.value || 'Colombo';
      const dest = document.getElementById('planDestLoc')?.value || 'Kandy';
      const date = document.getElementById('planDate')?.value || 'Flexible';
      const time = document.getElementById('planPickupTime')?.value || '10:00 AM';
      const pass = document.getElementById('planPassengers')?.value || '4';
      const tripType = document.querySelector('input[name="planTripTypeRadio"]:checked')?.value || 'One Way';
      const stops = document.getElementById('planStops')?.value || 'None';

      detailsText = 
        `• *Pickup Location:* ${pickup}%0A` +
        `• *Destination:* ${dest}%0A` +
        `• *Trip Type:* ${tripType}%0A` +
        `• *Date & Time:* ${date} at ${time}%0A` +
        `• *Passengers:* ${pass}%0A` +
        `• *Additional Stops:* ${stops}`;
    }

    const message = `*KDH Van Hire Sri Lanka - Booking Inquiry*%0A` +
      `----------------------------------------%0A` +
      `*Service:* ${encodeURIComponent(tpl.title)}%0A` +
      `*Assigned Van:* Toyota HiAce KDH 200 Series Commuter%0A` +
      `----------------------------------------%0A` +
      detailsText + `%0A` +
      `• *Contact Phone:* ${encodeURIComponent(phone)}%0A` +
      `----------------------------------------%0A` +
      `Please confirm availability & current rate. Thank you!`;

    showToast(`Sending ${tpl.title} inquiry via WhatsApp...`);
    setTimeout(() => {
      window.open(`https://wa.me/94771234567?text=${message}`, '_blank');
      closePricePlanModal();
    }, 400);
  }

  // Hook up plan modal triggers across the page
  document.querySelectorAll('.btn-trigger-plan-modal').forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      const plan = btn.dataset.plan || 'daily-hire';
      openPricePlanModal(plan);
    });
  });

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      closePricePlanModal();
    }
  });

  // 10. General "Book Your Van" or "Book Now" buttons
  document.querySelectorAll('.btn-trigger-booking').forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      const plan = btn.dataset.plan;
      if (plan && PRICE_PLAN_TEMPLATES[plan]) {
        openPricePlanModal(plan);
        return;
      }
      const service = btn.dataset.service || currentServiceType;
      const planMap = {
        'Airport Transfers': 'airport-transfer',
        'Daily Hire': 'daily-hire',
        'Multi-Day Tours': 'multi-day',
        'Point to Point Hire': 'point-to-point',
        'Point to Point': 'point-to-point',
        'Custom Quote Inquiry': 'multi-day'
      };
      if (planMap[service]) {
        openPricePlanModal(planMap[service]);
      } else {
        openBookingModal(service);
      }
    });
  });

  // 10. General Information & Policy Modals Content
  const INFO_TOPICS = {
    pricing: {
      title: 'KDH Van Hire Rates & Pricing Matrix',
      content: `
        <h4 class="info-section-title">Transparent, All-Inclusive Van Rental Rates</h4>
        <p class="info-text">All rates include modern Toyota HiAce KDH luxury passenger van, professional English-speaking licensed chauffeur, air-conditioned comfort, fuel, expressway tolls, and passenger insurance.</p>
        
        <table class="info-table">
          <thead>
            <tr>
              <th>Service Route / Trip</th>
              <th>Distance</th>
              <th>All-Inclusive Fare</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td><strong>Airport (BIA) ⇄ Colombo City</strong></td>
              <td>~35 km (Expressway)</td>
              <td><strong>$45 - $55</strong> (~LKR 16,000)</td>
              <td><span class="info-tag-badge">Most Popular</span></td>
            </tr>
            <tr>
              <td><strong>Airport (BIA) ⇄ Kandy</strong></td>
              <td>~105 km</td>
              <td><strong>$80 - $95</strong> (~LKR 28,000)</td>
              <td><span class="info-tag-badge">High Demand</span></td>
            </tr>
            <tr>
              <td><strong>Airport (BIA) ⇄ Galle / Unawatuna</strong></td>
              <td>~150 km (Expressway)</td>
              <td><strong>$75 - $85</strong> (~LKR 26,000)</td>
              <td><span class="info-tag-badge">Express</span></td>
            </tr>
            <tr>
              <td><strong>Airport (BIA) ⇄ Bentota / Hikkaduwa</strong></td>
              <td>~110 km (Expressway)</td>
              <td><strong>$65 - $75</strong> (~LKR 22,500)</td>
              <td><span class="info-tag-badge">Popular</span></td>
            </tr>
            <tr>
              <td><strong>Airport (BIA) ⇄ Sigiriya / Dambulla</strong></td>
              <td>~145 km</td>
              <td><strong>$95 - $110</strong> (~LKR 33,000)</td>
              <td><span class="info-tag-badge">Cultural</span></td>
            </tr>
            <tr>
              <td><strong>Airport (BIA) ⇄ Ella / Nuwara Eliya</strong></td>
              <td>~210 km (Hill Country)</td>
              <td><strong>$115 - $135</strong> (~LKR 40,000)</td>
              <td><span class="info-tag-badge">Scenic</span></td>
            </tr>
            <tr>
              <td><strong>Full Day Hire (Colombo / Western Province)</strong></td>
              <td>100 km / 10 Hours</td>
              <td><strong>$80 / day</strong> (~LKR 26,000)</td>
              <td><span class="info-tag-badge">Flexible</span></td>
            </tr>
            <tr>
              <td><strong>Multi-Day Round Island Tour</strong></td>
              <td>Unlimited route plan</td>
              <td><strong>$85 / day</strong> (~LKR 27,500)</td>
              <td><span class="info-tag-badge">Best Value</span></td>
            </tr>
          </tbody>
        </table>
        <p class="info-text" style="font-size: 12.5px; color: #64748b;">* Multi-day tours include chauffeur meals and accommodation. No hidden charges or parking fee surprises.</p>
      `
    },
    about: {
      title: 'About KDH Van Hire Sri Lanka',
      content: `
        <h4 class="info-section-title">Sri Lanka's Premier Group Travel & Van Hire Provider</h4>
        <p class="info-text">With over 10 years of experience serving international tourists, expats, corporate delegations, and local families, KDH Van Hire Sri Lanka is dedicated to safe, comfortable, and reliable passenger transport across every corner of the island.</p>
        
        <h4 class="info-section-title" style="margin-top: 20px;">Why Travelers Choose Us:</h4>
        <ul style="padding-left: 20px; margin-bottom: 20px; font-size: 14px; line-height: 1.8; color: #334155;">
          <li><strong>Pristine Modern Fleet:</strong> Strictly maintained Toyota HiAce KDH 200 series passenger vans equipped with powerful dual AC systems.</li>
          <li><strong>Professional Licensed Drivers:</strong> English-speaking, government tourist-board certified drivers with deep knowledge of Sri Lanka’s roads and attractions.</li>
          <li><strong>Comprehensive Insurance:</strong> Full commercial passenger liability coverage on every single journey.</li>
          <li><strong>24/7 Islandwide Support:</strong> Instant WhatsApp response, flight tracking for airport pickups, and flexible rescheduling.</li>
        </ul>
      `
    },
    fleet: {
      title: 'Toyota HiAce KDH Passenger Van Specifications',
      content: `
        <h4 class="info-section-title">The Gold Standard in Comfort & Group Travel</h4>
        <p class="info-text">Our fleet consists of high-roof and standard-roof Toyota HiAce KDH 200 luxury commuter editions engineered for smooth hill-country climbs and long-distance expressway cruising.</p>
        
        <table class="info-table">
          <tbody>
            <tr>
              <td><strong>Passenger Seating</strong></td>
              <td>12 to 14 comfortable reclining passenger seats + driver seat</td>
            </tr>
            <tr>
              <td><strong>Climate Control</strong></td>
              <td>High-output dual air-conditioning with individual ceiling vents for each row</td>
            </tr>
            <tr>
              <td><strong>Luggage Capacity</strong></td>
              <td>Dedicated rear luggage compartment holding 8–12 large suitcases + hand carry</td>
            </tr>
            <tr>
              <td><strong>Comfort & Amenities</strong></td>
              <td>High-roof headroom, plush fabric upholstery, USB phone charging ports, Bluetooth audio</td>
            </tr>
            <tr>
              <td><strong>Safety Equipment</strong></td>
              <td>ABS braking, dual front airbags, seatbelts on all seats, GPS speed monitoring</td>
            </tr>
          </tbody>
        </table>
      `
    },
    privacy: {
      title: 'Privacy Policy',
      content: `
        <h4 class="info-section-title">Your Privacy Matters to Us</h4>
        <p class="info-text">We strictly collect only the necessary contact details (Name, WhatsApp number, flight info) required to coordinate and confirm your van hire booking.</p>
        <p class="info-text">We do not sell, rent, or share personal information with third parties or external marketing agencies. All booking communications occur securely over encrypted WhatsApp or direct email.</p>
      `
    },
    terms: {
      title: 'Terms & Conditions',
      content: `
        <h4 class="info-section-title">Booking & Rental Terms</h4>
        <ul style="padding-left: 20px; margin-bottom: 20px; font-size: 14px; line-height: 1.8; color: #334155;">
          <li><strong>Driver Hours:</strong> For passenger safety, driving hours are capped at a maximum of 10 to 12 hours per day with mandatory rest intervals.</li>
          <li><strong>Included In All-Inclusive Rates:</strong> Vehicle hire, chauffeur fee, fuel, expressway toll fees, and passenger insurance.</li>
          <li><strong>Smoking & Alcohol:</strong> Smoking is strictly prohibited inside the passenger cabin to maintain air quality and cleanliness for all guests.</li>
        </ul>
      `
    },
    cancellation: {
      title: 'Cancellation Policy',
      content: `
        <h4 class="info-section-title">100% Flexible & Risk-Free Cancellation</h4>
        <ul style="padding-left: 20px; margin-bottom: 20px; font-size: 14px; line-height: 1.8; color: #334155;">
          <li><strong>Free Cancellation:</strong> Cancel anytime up to 24 hours before your scheduled pickup with zero penalty or fees.</li>
          <li><strong>Delayed Flights:</strong> If your flight into Bandaranaike Airport (BIA) is delayed, our driver tracks your flight number and waits at no additional cost.</li>
          <li><strong>Date Rescheduling:</strong> Trip dates can be moved free of charge subject to vehicle availability.</li>
        </ul>
      `
    },
    faq: {
      title: 'Frequently Asked Questions (FAQs)',
      content: `
        <h4 class="info-section-title">Answers to Your Common Questions</h4>
        <div style="display: flex; flex-direction: column; gap: 14px; margin-top: 14px;">
          <div style="background: #f8fafc; border: 1px solid #e2e8f0; border-radius: 8px; padding: 14px 16px;">
            <p style="font-weight: 700; color: #0f172a; margin-bottom: 6px; font-size: 14px;">1. Is a driver included with the KDH van?</p>
            <p style="font-size: 13.5px; line-height: 1.6; color: #475569; margin: 0;">Yes, every rental includes an experienced, professional English-speaking driver certified by the Sri Lanka Tourism Development Authority. For passenger safety, local traffic familiarity, and insurance compliance, we do not provide self-drive van rentals.</p>
          </div>
          <div style="background: #f8fafc; border: 1px solid #e2e8f0; border-radius: 8px; padding: 14px 16px;">
            <p style="font-weight: 700; color: #0f172a; margin-bottom: 6px; font-size: 14px;">2. How is the per-kilometre / route price calculated?</p>
            <p style="font-size: 13.5px; line-height: 1.6; color: #475569; margin: 0;">Route fares are based on point-to-point journey distance utilizing modern expressways. All quotations are transparent and all-inclusive: vehicle rental, driver fee, fuel, expressway tolls, and passenger liability insurance. There are zero hidden fees.</p>
          </div>
          <div style="background: #f8fafc; border: 1px solid #e2e8f0; border-radius: 8px; padding: 14px 16px;">
            <p style="font-weight: 700; color: #0f172a; margin-bottom: 6px; font-size: 14px;">3. Can I arrange an airport pickup at Bandaranaike International Airport (BIA)?</p>
            <p style="font-size: 13.5px; line-height: 1.6; color: #475569; margin: 0;">Yes, airport pickups and drop-offs are our core specialty. Your assigned chauffeur will be waiting inside the arrival paging hall with a personalized name-board to assist you directly to your air-conditioned KDH van.</p>
          </div>
          <div style="background: #f8fafc; border: 1px solid #e2e8f0; border-radius: 8px; padding: 14px 16px;">
            <p style="font-weight: 700; color: #0f172a; margin-bottom: 6px; font-size: 14px;">4. What happens if my incoming flight is delayed?</p>
            <p style="font-size: 13.5px; line-height: 1.6; color: #475569; margin: 0;">Flight delays are covered completely free of charge. We monitor all incoming flight schedules via live airport radar tracking and adjust your driver's arrival time automatically without waiting charges.</p>
          </div>
          <div style="background: #f8fafc; border: 1px solid #e2e8f0; border-radius: 8px; padding: 14px 16px;">
            <p style="font-weight: 700; color: #0f172a; margin-bottom: 6px; font-size: 14px;">5. How do I confirm or cancel my booking?</p>
            <p style="font-size: 13.5px; line-height: 1.6; color: #475569; margin: 0;">You can submit your trip request online or directly via WhatsApp. Once availability is confirmed, you receive an official booking reservation. We offer 100% free cancellation up to 24 hours before your scheduled pickup time.</p>
          </div>
        </div>
      `
    },
    'airport-transfers': {
      title: 'Airport Transfers (BIA Pickups & Drop-offs)',
      content: `
        <h4 class="info-section-title">Hassle-Free Colombo Airport (BIA) Transfers</h4>
        <p class="info-text">Travel seamlessly between Bandaranaike International Airport (CMB / BIA) and your hotel, villa, or residence anywhere in Sri Lanka. Our licensed tourist chauffeur greets you inside the arrivals hall with a personalized name-board.</p>
        <div style="background: #f8fafc; border: 1px solid #e2e8f0; border-radius: 10px; padding: 16px; margin: 16px 0;">
          <h5 style="font-size: 14px; font-weight: 700; color: #0f172a; margin-bottom: 10px;">Service Highlights:</h5>
          <ul style="padding-left: 20px; font-size: 13.5px; line-height: 1.8; color: #334155; margin: 0;">
            <li><strong>Live Flight Tracking:</strong> Complimentary 90 minutes waiting time from flight touchdown.</li>
            <li><strong>Expressway Included:</strong> Direct toll expressway routing to Colombo, Galle, Bentota, or Kandy.</li>
            <li><strong>Vehicle Capacity:</strong> Up to 12-14 passengers + 10 large suitcases comfortably loaded.</li>
            <li><strong>Meet & Greet:</strong> Chauffeur paging assistance inside the air-conditioned terminal.</li>
          </ul>
        </div>
        <div style="display: flex; gap: 12px; margin-top: 14px; font-size: 13.5px; color: #0f172a; font-weight: 600;">
          <span>Rates start at: <span style="color: #b45309; font-weight: 800;">$45 (Colombo)</span></span> | 
          <span><span style="color: #b45309; font-weight: 800;">$95 (Galle / Mirissa)</span></span> | 
          <span><span style="color: #b45309; font-weight: 800;">$115 (Kandy)</span></span>
        </div>
      `
    },
    'point-to-point': {
      title: 'Point to Point Van Hire',
      content: `
        <h4 class="info-section-title">Direct Intercity Private Travel</h4>
        <p class="info-text">Reliable, comfortable point-to-point transfers between any two cities or towns in Sri Lanka. Avoid crowded public transport and enjoy the privacy of your own air-conditioned Toyota KDH van.</p>
        <div style="background: #f8fafc; border: 1px solid #e2e8f0; border-radius: 10px; padding: 16px; margin: 16px 0;">
          <h5 style="font-size: 14px; font-weight: 700; color: #0f172a; margin-bottom: 10px;">Service Highlights:</h5>
          <ul style="padding-left: 20px; font-size: 13.5px; line-height: 1.8; color: #334155; margin: 0;">
            <li><strong>Door-to-Door Pickup:</strong> Direct pickup from any hotel, residence, or landmark.</li>
            <li><strong>Scenic Refreshment Stops:</strong> Stop for fresh king coconuts, tea plantations, or dining on your schedule.</li>
            <li><strong>Transparent Pricing:</strong> Fixed upfront quote including vehicle, fuel, driver, and expressway fees.</li>
            <li><strong>Professional Chauffeur:</strong> Experienced long-distance driver with defensive driving certification.</li>
          </ul>
        </div>
      `
    },
    'daily-hire': {
      title: 'Full-Day KDH Van Hire with Driver',
      content: `
        <h4 class="info-section-title">Flexible Full-Day Van Package (Up to 12 Hours)</h4>
        <p class="info-text">Enjoy complete freedom to explore Sri Lanka at your own pace. Hire a dedicated Toyota KDH van and driver for a full day of sightseeing, shopping, meetings, or beach hopping.</p>
        <div style="background: #f8fafc; border: 1px solid #e2e8f0; border-radius: 10px; padding: 16px; margin: 16px 0;">
          <h5 style="font-size: 14px; font-weight: 700; color: #0f172a; margin-bottom: 10px;">Package Details:</h5>
          <ul style="padding-left: 20px; font-size: 13.5px; line-height: 1.8; color: #334155; margin: 0;">
            <li><strong>Included Mileage:</strong> 100 km included per day (additional km at affordable rates).</li>
            <li><strong>Dedicated Time:</strong> Up to 12 hours of chauffeur service per day.</li>
            <li><strong>Flexible Itinerary:</strong> Add as many stops and detours as you wish.</li>
            <li><strong>All Inclusions:</strong> Chauffeur batta/meals, air-conditioning, fuel, and parking assistance.</li>
          </ul>
        </div>
      `
    },
    'multi-day-tours': {
      title: 'Custom Multi-Day Sri Lanka Tours',
      content: `
        <h4 class="info-section-title">Island-Wide Tour Packages (3 to 14+ Days)</h4>
        <p class="info-text">Explore Sri Lanka's breathtaking cultural heritage, misty tea hills, wildlife national parks, and golden beaches with a dedicated luxury KDH passenger van and experienced driver-guide throughout your journey.</p>
        <div style="background: #f8fafc; border: 1px solid #e2e8f0; border-radius: 10px; padding: 16px; margin: 16px 0;">
          <h5 style="font-size: 14px; font-weight: 700; color: #0f172a; margin-bottom: 10px;">Tour Highlights:</h5>
          <ul style="padding-left: 20px; font-size: 13.5px; line-height: 1.8; color: #334155; margin: 0;">
            <li><strong>Popular Circuits:</strong> Sigiriya & Cultural Triangle, Kandy & Ella Hill Country, Yala Safari, Southern Coast.</li>
            <li><strong>Custom Tailoring:</strong> We help customize daily driving routes, photography stops, and timing.</li>
            <li><strong>Chauffeur Accommodation:</strong> Driver accommodation and meal allowances are fully covered.</li>
            <li><strong>Continuous Support:</strong> 24/7 travel coordination support via WhatsApp.</li>
          </ul>
        </div>
      `
    },
    'events-weddings': {
      title: 'Events, Weddings & Group Shuttles',
      content: `
        <h4 class="info-section-title">Comfortable Guest Transportation for Special Occasions</h4>
        <p class="info-text">Make your wedding day, family reunion, religious pilgrimage, or celebration effortless. We provide immaculate, beautifully detailed Toyota KDH passenger vans for seamless group transfers.</p>
        <div style="background: #f8fafc; border: 1px solid #e2e8f0; border-radius: 10px; padding: 16px; margin: 16px 0;">
          <h5 style="font-size: 14px; font-weight: 700; color: #0f172a; margin-bottom: 10px;">Event Features:</h5>
          <ul style="padding-left: 20px; font-size: 13.5px; line-height: 1.8; color: #334155; margin: 0;">
            <li><strong>Pristine Presentation:</strong> Showroom-clean white vehicles with uniformed, courteous drivers.</li>
            <li><strong>Multi-Van Coordination:</strong> Coordinate multiple vans for large guest contingents.</li>
            <li><strong>Flexible Dispatch:</strong> Venue-to-hotel continuous shuttles throughout the ceremony and reception.</li>
          </ul>
        </div>
      `
    },
    'corporate-transport': {
      title: 'Corporate & Executive Transport',
      content: `
        <h4 class="info-section-title">Professional Transport for Corporate Teams & Delegations</h4>
        <p class="info-text">Reliable corporate mobility solutions for executive transfers, visiting business delegations, factory inspections, conference shuttles, and company retreats across Sri Lanka.</p>
        <div style="background: #f8fafc; border: 1px solid #e2e8f0; border-radius: 10px; padding: 16px; margin: 16px 0;">
          <h5 style="font-size: 14px; font-weight: 700; color: #0f172a; margin-bottom: 10px;">Corporate Benefits:</h5>
          <ul style="padding-left: 20px; font-size: 13.5px; line-height: 1.8; color: #334155; margin: 0;">
            <li><strong>Punctuality Guarantee:</strong> On-time arrivals for business schedules and flight departures.</li>
            <li><strong>Corporate Invoicing:</strong> Official GST/VAT receipts and corporate payment terms available.</li>
            <li><strong>On-Board Comfort:</strong> High-roof cabin, ergonomic seating, mobile device charging points.</li>
          </ul>
        </div>
      `
    }
  };

  // Dedicated Rich Structured Data for Service Details Popup
  const SERVICE_POPUP_DATA = {
    'airport-transfers': {
      serviceName: 'Airport Transfer',
      title: 'Airport Transfers (BIA Pickups & Drop-offs)',
      eyebrow: 'AIRPORT TRANSFERS • SRI LANKA',
      image: 'assets/home-page/service-airport-transfers.jpg',
      desc: 'Seamless, VIP airport passenger transfers between Bandaranaike International Airport (CMB / BIA) and any hotel, villa, or resort in Sri Lanka. Your experienced chauffeur monitors flight arrivals in real time and welcomes you in the air-conditioned arrival hall with a personalized name-board.',
      specs: [
        { icon: '👥', title: 'Capacity', val: 'Up to 14 Pax' },
        { icon: '🧳', title: 'Luggage', val: '10 Large Bags' },
        { icon: '❄️', title: 'Climate', val: 'Dual High A/C' },
        { icon: '👨‍✈️', title: 'Chauffeur', val: 'Licensed & Vetted' }
      ],
      inclusions: [
        'Complimentary 90-min wait time from touchdown',
        'All expressway toll charges included',
        'Meet & Greet paging inside arrivals hall',
        'Luggage loading & door-to-door assistance',
        'Full passenger liability travel insurance',
        'Free bottled water & mobile phone charging'
      ],
      pricing: {
        from: 'From $45 USD',
        sub: 'Approx. LKR 14,850 • All-inclusive',
        routes: 'Colombo City ($45) • Bentota ($85) • Galle/Mirissa ($95) • Kandy ($115)'
      },
      waMessage: 'Hi KDH Van Hire, I would like to book an Airport Transfer to/from BIA Airport.'
    },
    'point-to-point': {
      serviceName: 'Point to Point',
      title: 'Point to Point City Transfers',
      eyebrow: 'INTERCITY TRAVEL • SRI LANKA',
      image: 'assets/home-page/service-point-to-point.jpg',
      desc: 'Comfortable, direct intercity private van travel between any two cities in Sri Lanka on your schedule. Avoid crowded public transit and travel in air-conditioned privacy with your family or group directly to your destination.',
      specs: [
        { icon: '👥', title: 'Capacity', val: 'Up to 14 Pax' },
        { icon: '🧳', title: 'Luggage', val: '10 Large Bags' },
        { icon: '🛣️', title: 'Route', val: 'Expressway Route' },
        { icon: '⭐', title: 'Comfort', val: 'Reclining Seats' }
      ],
      inclusions: [
        'Door-to-door hotel & residence pickup',
        'Scenic photography & refreshment stops',
        'Expressway toll fees & parking included',
        'Professional driver with defensive driving license',
        'Zero luggage surcharges or hidden fees',
        'Flexible departure timing of your choice'
      ],
      pricing: {
        from: 'From $0.55 / KM',
        sub: 'Fixed transparent per-KM calculation',
        routes: 'Colombo ⇄ Galle • Kandy ⇄ Sigiriya • Ella ⇄ Mirissa • Nuwara Eliya ⇄ Ella'
      },
      waMessage: 'Hi KDH Van Hire, I would like to inquire about a Point-to-Point city transfer.'
    },
    'daily-hire': {
      serviceName: 'Daily Hire',
      title: 'Full-Day KDH Van Hire with Driver',
      eyebrow: 'FULL DAY PACKAGES • SRI LANKA',
      image: 'assets/home-page/service-daily-hire.jpg',
      desc: 'Complete freedom to explore Sri Lanka at your own pace. Hire a private Toyota KDH van and experienced English-speaking chauffeur for up to 12 hours with 100 km included mileage for sightseeing, meetings, dining, and shopping.',
      specs: [
        { icon: '⏱️', title: 'Duration', val: 'Up to 12 Hours' },
        { icon: '🚗', title: 'Included KM', val: '100 km / Day' },
        { icon: '👥', title: 'Capacity', val: 'Up to 14 Pax' },
        { icon: '👨‍✈️', title: 'Driver Guide', val: 'Local Expert' }
      ],
      inclusions: [
        '100 km included mileage allowance per day',
        'Experienced English-speaking tourist chauffeur',
        'Full vehicle air conditioning & fuel covered',
        'Chauffeur meals & allowance included',
        'Unlimited stops & flexible daily itinerary',
        'Parking fees & passenger insurance covered'
      ],
      pricing: {
        from: 'From $85 / Day',
        sub: 'Approx. LKR 28,000 / day all-inclusive',
        routes: 'Western Province ($85/day) • Hill Country ($95/day) • Extra km only $0.45/km'
      },
      waMessage: 'Hi KDH Van Hire, I would like to book a Full-Day KDH Van Hire package.'
    },
    'multi-day-tours': {
      serviceName: 'Multi-Day Tour',
      title: 'Custom Multi-Day Sri Lanka Tours',
      eyebrow: 'ISLAND-WIDE EXPEDITIONS • SRI LANKA',
      image: 'assets/services/service-multi-day-tours.jpg',
      desc: 'Explore Sri Lanka’s UNESCO world heritage sites, misty tea plantations, wildlife safari parks, and golden southern beaches. Enjoy a dedicated luxury Toyota KDH passenger van and experienced driver-guide for the full duration of your vacation.',
      specs: [
        { icon: '🗺️', title: 'Tour Length', val: '3 to 14+ Days' },
        { icon: '👥', title: 'Capacity', val: 'Up to 14 Pax' },
        { icon: '⛰️', title: 'Coverage', val: 'All Island' },
        { icon: '🏨', title: 'Chauffeur', val: 'Batta Included' }
      ],
      inclusions: [
        'Dedicated van & chauffeur for your entire trip',
        'Personalized route planning & itinerary support',
        'Driver accommodation & meals 100% covered',
        'All toll fees, fuel & comprehensive insurance',
        '24/7 dedicated travel support via WhatsApp',
        'Airport pickup on day 1 & departure drop-off'
      ],
      pricing: {
        from: 'From $95 / Day',
        sub: 'Special multi-day discounted package',
        routes: 'Cultural Triangle • Kandy & Ella Hills • Yala Safari • South Coast Beaches'
      },
      waMessage: 'Hi KDH Van Hire, I would like to plan a Multi-Day Tour across Sri Lanka.'
    },
    'events-weddings': {
      serviceName: 'Events & Weddings',
      title: 'Events, Weddings & Group Shuttles',
      eyebrow: 'VIP GROUP TRANSPORT • SRI LANKA',
      image: 'assets/services/service-events-weddings.jpg',
      desc: 'Flawless group logistics for wedding parties, family celebrations, corporate events, and religious ceremonies. We provide showroom-clean white Toyota KDH vans with uniformed, polite chauffeurs for stress-free guest shuttles.',
      specs: [
        { icon: '👥', title: 'Capacity', val: 'Up to 14 Pax / Van' },
        { icon: '✨', title: 'Condition', val: 'Showroom Clean' },
        { icon: '🚐', title: 'Fleet', val: 'Multi-Van Convoy' },
        { icon: '👔', title: 'Driver', val: 'Uniformed Staff' }
      ],
      inclusions: [
        'Immaculately detailed and sanitized vehicle',
        'Polite, uniformed, punctual chauffeur',
        'Hotel to ceremony & reception continuous shuttles',
        'Coordinated dispatch for multi-van bookings',
        'Ribbon decoration assistance upon request',
        'Flexible hourly and full-day event packages'
      ],
      pricing: {
        from: 'Custom Quote',
        sub: 'Hourly & multi-van packages available',
        routes: 'Wedding venues in Colombo, Negombo, Galle, Kandy, Bentota & outstation'
      },
      waMessage: 'Hi KDH Van Hire, I would like to inquire about wedding and event transport.'
    },
    'corporate-transport': {
      serviceName: 'Corporate Transport',
      title: 'Corporate & Executive Transport',
      eyebrow: 'EXECUTIVE LOGISTICS • SRI LANKA',
      image: 'assets/services/service-corporate-transport.jpg',
      desc: 'Punctual, professional mobility solutions for business delegations, executive team travel, airport VIP meet-and-greets, factory visits, and company offsite conferences across Sri Lanka.',
      specs: [
        { icon: '💼', title: 'Service', val: 'Executive Grade' },
        { icon: '📶', title: 'Connectivity', val: 'USB Charging' },
        { icon: '⏱️', title: 'Punctuality', val: '100% Guaranteed' },
        { icon: '📄', title: 'Billing', val: 'Corporate Invoices' }
      ],
      inclusions: [
        'Punctuality guarantee for tight corporate schedules',
        'Official corporate VAT/tax receipts & invoicing',
        'High-roof luxury cabin with mobile charging ports',
        'Strict passenger privacy & non-disclosure assured',
        'Dedicated corporate account manager',
        'Clean bottled water & mints provided'
      ],
      pricing: {
        from: 'Corporate Rates',
        sub: 'Direct invoicing & corporate credit available',
        routes: 'Port City, Colombo CBD, Biyagama/Katunayake EPZ, Airport & Outstation'
      },
      waMessage: 'Hi KDH Van Hire, I would like to inquire about corporate transport accounts.'
    }
  };

  const infoModalHeader = document.getElementById('infoModalHeader');
  const infoModalFooter = document.getElementById('infoModalFooter');

  function openInfoModal(topicKey) {
    if (SERVICE_POPUP_DATA[topicKey]) {
      const s = SERVICE_POPUP_DATA[topicKey];
      if (infoModalHeader) infoModalHeader.style.display = 'none';

      const specsHtml = s.specs.map(spec => `
        <div class="service-spec-badge">
          <span class="service-spec-icon">${spec.icon}</span>
          <span class="service-spec-title">${spec.title}</span>
          <span class="service-spec-val">${spec.val}</span>
        </div>
      `).join('');

      const inclusionsHtml = s.inclusions.map(inc => `
        <div class="service-inclusion-item">
          <span class="service-inclusion-check">✓</span>
          <span>${inc}</span>
        </div>
      `).join('');

      if (infoModalBody) {
        infoModalBody.style.padding = '0';
        infoModalBody.innerHTML = `
          <div class="service-popup-container">
            <div class="service-popup-hero" style="background-image: url('${s.image}');">
              <button class="service-popup-close-btn" id="servicePopupCloseHeroBtn" aria-label="Close modal">&times;</button>
              <div class="service-popup-hero-overlay">
                <span class="service-popup-eyebrow">${s.eyebrow}</span>
                <h3 class="service-popup-title">${s.title}</h3>
              </div>
            </div>

            <div class="service-popup-body">
              <div class="service-popup-specs">
                ${specsHtml}
              </div>

              <p class="service-popup-desc">${s.desc}</p>

              <div class="service-inclusions-box">
                <div class="service-inclusions-title">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#f59e0b" stroke-width="2.5"><polyline points="20 6 9 17 4 12"></polyline></svg>
                  What's Included in This Service
                </div>
                <div class="service-inclusions-grid">
                  ${inclusionsHtml}
                </div>
              </div>

              <div class="service-pricing-banner">
                <div class="service-pricing-left">
                  <span class="service-pricing-label">Transparent Pricing Matrix</span>
                  <span class="service-pricing-routes">${s.pricing.routes}</span>
                </div>
                <div class="service-pricing-badge">
                  <span class="service-pricing-amount">${s.pricing.from}</span>
                  <div class="service-pricing-note">${s.pricing.sub}</div>
                </div>
              </div>
            </div>
          </div>
        `;

        const heroClose = document.getElementById('servicePopupCloseHeroBtn');
        if (heroClose) heroClose.addEventListener('click', closeInfoModal);
      }

      if (infoModalFooter) {
        infoModalFooter.style.display = 'block';
        infoModalFooter.innerHTML = `
          <div class="service-popup-actions">
            <button class="btn-popup-primary" id="btnPopupBookService">
              <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2"><rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect><line x1="16" y1="2" x2="16" y2="6"></line><line x1="8" y1="2" x2="8" y2="6"></line><line x1="3" y1="10" x2="21" y2="10"></line></svg>
              Book This Service &rarr;
            </button>
            <a href="https://wa.me/94771234567?text=${encodeURIComponent(s.waMessage)}" target="_blank" rel="noopener noreferrer" class="btn-popup-whatsapp">
              <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.711 2.592 2.654-.697c.97.531 1.808.819 2.806.819l.005-.001c3.181 0 5.767-2.586 5.768-5.766 0-3.18-2.586-5.766-5.767-5.766zm3.376 8.21c-.144.405-.837.774-1.17.824-.312.045-.694.06-2.18-.557-1.9-0.788-3.122-2.73-3.217-2.855-.095-.125-.769-1.025-.769-1.954 0-.929.489-1.386.663-1.577.174-.191.38-.239.507-.239.127 0 .253.001.365.006.118.006.277-.045.433.329.16.38.547 1.332.594 1.43.048.098.079.213.016.34-.064.127-.095.206-.191.317-.095.111-.201.248-.287.333-.095.095-.195.198-.084.388.111.19.493.813 1.056 1.315.725.645 1.336.845 1.527.939.19.095.302.079.413-.048.111-.127.476-.556.603-.746.127-.19.254-.159.428-.095.175.063 1.11.523 1.301.618.19.095.317.143.365.222.048.079.048.46-.096.865z"/>
              </svg>
              Chat on WhatsApp
            </a>
          </div>
          <div class="service-popup-guarantee" style="margin-top: 8px;">
            <span>✓ Free Cancellation up to 24h</span>
            <span>•</span>
            <span>100% English-Speaking Licensed Driver Guaranteed</span>
          </div>
        `;

        const bookBtn = document.getElementById('btnPopupBookService');
        if (bookBtn) {
          bookBtn.addEventListener('click', () => {
            closeInfoModal();
            openBookingModal(s.serviceName);
          });
        }
      }
    } else {
      // General Info fallback
      if (infoModalHeader) infoModalHeader.style.display = 'flex';
      const topic = INFO_TOPICS[topicKey] || INFO_TOPICS.pricing;
      if (infoModalTitle) infoModalTitle.textContent = topic.title;
      if (infoModalBody) {
        infoModalBody.style.padding = '24px';
        infoModalBody.innerHTML = topic.content;
      }
      if (infoModalFooter) {
        infoModalFooter.style.display = 'flex';
        infoModalFooter.innerHTML = `
          <button class="btn-check-availability" id="infoModalActionBtn" style="min-height: 42px; padding: 10px 22px;">
            Book a Van Now &rarr;
          </button>
        `;
        const actionBtn = document.getElementById('infoModalActionBtn');
        if (actionBtn) {
          actionBtn.addEventListener('click', () => {
            closeInfoModal();
            openBookingModal();
          });
        }
      }
    }

    if (generalInfoModal) generalInfoModal.classList.add('open');
  }

  function closeInfoModal() {
    if (generalInfoModal) generalInfoModal.classList.remove('open');
  }

  document.querySelectorAll('.btn-open-info').forEach(el => {
    el.addEventListener('click', (e) => {
      e.preventDefault();
      const topic = el.dataset.topic || 'pricing';
      openInfoModal(topic);
    });
  });

  document.querySelectorAll('.btn-open-service-modal').forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      const serviceKey = btn.dataset.serviceKey || 'airport-transfers';
      openInfoModal(serviceKey);
    });
  });

  if (infoModalCloseBtn) {
    infoModalCloseBtn.addEventListener('click', closeInfoModal);
  }

  if (generalInfoModal) {
    generalInfoModal.addEventListener('click', (e) => {
      if (e.target === generalInfoModal) {
        closeInfoModal();
      }
    });
  }

  // 11. Testimonials carousel functionality
  let currentTestimonialIndex = 0;
  const totalTestimonials = testimonialCards.length;

  function updateTestimonialSlider(index) {
    currentTestimonialIndex = index;
    sliderDots.forEach((dot, idx) => {
      if (idx === currentTestimonialIndex) {
        dot.classList.add('active');
      } else {
        dot.classList.remove('active');
      }
    });

    if (window.innerWidth < 1024) {
      testimonialCards.forEach((card, idx) => {
        if (idx === currentTestimonialIndex) {
          card.style.display = 'flex';
        } else {
          card.style.display = 'none';
        }
      });
    } else {
      testimonialCards.forEach(card => {
        card.style.display = 'flex';
      });
    }
  }

  function startTestimonialAutoplay() {
    stopTestimonialAutoplay();
    testimonialAutoSlideTimer = setInterval(() => {
      const nextIndex = (currentTestimonialIndex + 1) % totalTestimonials;
      updateTestimonialSlider(nextIndex);
    }, 6000);
  }

  function stopTestimonialAutoplay() {
    if (testimonialAutoSlideTimer) {
      clearInterval(testimonialAutoSlideTimer);
      testimonialAutoSlideTimer = null;
    }
  }

  if (sliderNext) {
    sliderNext.addEventListener('click', () => {
      const nextIndex = (currentTestimonialIndex + 1) % totalTestimonials;
      updateTestimonialSlider(nextIndex);
      startTestimonialAutoplay();
    });
  }

  if (sliderPrev) {
    sliderPrev.addEventListener('click', () => {
      const prevIndex = (currentTestimonialIndex - 1 + totalTestimonials) % totalTestimonials;
      updateTestimonialSlider(prevIndex);
      startTestimonialAutoplay();
    });
  }

  sliderDots.forEach((dot, idx) => {
    dot.addEventListener('click', () => {
      updateTestimonialSlider(idx);
      startTestimonialAutoplay();
    });
  });

  if (testimonialsWrap) {
    testimonialsWrap.addEventListener('mouseenter', stopTestimonialAutoplay);
    testimonialsWrap.addEventListener('mouseleave', startTestimonialAutoplay);
  }

  window.addEventListener('resize', () => {
    updateTestimonialSlider(currentTestimonialIndex);
  });

  startTestimonialAutoplay();

  // 12. Mobile menu toggle
  const mobileMenuBtn = document.getElementById('mobileMenuBtn');
  const mobileNavMenu = document.getElementById('mobileNavMenu');
  if (mobileMenuBtn && mobileNavMenu) {
    mobileMenuBtn.addEventListener('click', () => {
      mobileNavMenu.classList.toggle('open');
    });

    document.querySelectorAll('.mobile-nav-link').forEach(link => {
      link.addEventListener('click', () => {
        mobileNavMenu.classList.remove('open');
      });
    });
  }

  // 13. Fleet Vehicle Gallery & Fullscreen Lightbox
  const galleryMainImg = document.getElementById('galleryMainImg');
  const galleryMainWrapper = document.getElementById('galleryMainWrapper');
  const btnOpenLightbox = document.getElementById('btnOpenLightbox');
  const thumbBtns = document.querySelectorAll('.gallery-thumb-btn');

  const fleetLightbox = document.getElementById('fleetLightboxModal');
  const lightboxMainImg = document.getElementById('lightboxMainImg');
  const lightboxCaption = document.getElementById('lightboxCaption');
  const lightboxCounter = document.getElementById('lightboxCounter');
  const lightboxCloseBtn = document.getElementById('lightboxCloseBtn');
  const lightboxPrevBtn = document.getElementById('lightboxPrevBtn');
  const lightboxNextBtn = document.getElementById('lightboxNextBtn');
  const lightboxThumbItems = document.querySelectorAll('.fleet-lightbox-thumb-item');

  if (galleryMainImg && thumbBtns.length > 0) {
    let currentGalleryIndex = 0;
    const galleryItems = Array.from(thumbBtns).map(btn => ({
      src: btn.getAttribute('data-src') || '',
      alt: btn.getAttribute('data-alt') || '',
      caption: btn.getAttribute('data-caption') || ''
    }));

    function setGalleryImage(index) {
      if (index < 0 || index >= galleryItems.length) return;
      currentGalleryIndex = index;
      const item = galleryItems[index];

      // Update main gallery image with smooth fade
      galleryMainImg.style.opacity = '0.3';
      setTimeout(() => {
        galleryMainImg.src = item.src;
        galleryMainImg.alt = item.alt;
        galleryMainImg.style.opacity = '1';
      }, 150);

      // Update active thumbnail
      thumbBtns.forEach((btn, i) => {
        if (i === index) {
          btn.classList.add('active');
          btn.setAttribute('aria-current', 'true');
        } else {
          btn.classList.remove('active');
          btn.removeAttribute('aria-current');
        }
      });
    }

    thumbBtns.forEach((btn, idx) => {
      btn.addEventListener('click', (e) => {
        e.preventDefault();
        setGalleryImage(idx);
      });
    });

    // Lightbox open / close / navigate
    function openLightbox(index) {
      if (!fleetLightbox) return;
      currentGalleryIndex = index;
      updateLightboxDisplay(index);
      fleetLightbox.classList.add('active');
      document.body.style.overflow = 'hidden';
    }

    function closeLightbox() {
      if (!fleetLightbox) return;
      fleetLightbox.classList.remove('active');
      document.body.style.overflow = '';
    }

    function updateLightboxDisplay(index) {
      if (!lightboxMainImg || index < 0 || index >= galleryItems.length) return;
      const item = galleryItems[index];
      lightboxMainImg.style.opacity = '0.3';
      setTimeout(() => {
        lightboxMainImg.src = item.src;
        lightboxMainImg.alt = item.alt;
        lightboxMainImg.style.opacity = '1';
      }, 120);

      if (lightboxCaption) {
        lightboxCaption.textContent = item.caption;
      }
      if (lightboxCounter) {
        lightboxCounter.textContent = `${index + 1} / ${galleryItems.length}`;
      }

      lightboxThumbItems.forEach((tb, i) => {
        if (i === index) {
          tb.classList.add('active');
        } else {
          tb.classList.remove('active');
        }
      });
    }

    function nextLightboxImage() {
      const nextIdx = (currentGalleryIndex + 1) % galleryItems.length;
      currentGalleryIndex = nextIdx;
      updateLightboxDisplay(nextIdx);
      setGalleryImage(nextIdx);
    }

    function prevLightboxImage() {
      const prevIdx = (currentGalleryIndex - 1 + galleryItems.length) % galleryItems.length;
      currentGalleryIndex = prevIdx;
      updateLightboxDisplay(prevIdx);
      setGalleryImage(prevIdx);
    }

    if (galleryMainWrapper) {
      galleryMainWrapper.addEventListener('click', () => openLightbox(currentGalleryIndex));
    }
    if (btnOpenLightbox) {
      btnOpenLightbox.addEventListener('click', (e) => {
        e.stopPropagation();
        openLightbox(currentGalleryIndex);
      });
    }
    if (lightboxCloseBtn) {
      lightboxCloseBtn.addEventListener('click', closeLightbox);
    }
    if (lightboxNextBtn) {
      lightboxNextBtn.addEventListener('click', nextLightboxImage);
    }
    if (lightboxPrevBtn) {
      lightboxPrevBtn.addEventListener('click', prevLightboxImage);
    }

    lightboxThumbItems.forEach((tb, idx) => {
      tb.addEventListener('click', () => {
        currentGalleryIndex = idx;
        updateLightboxDisplay(idx);
        setGalleryImage(idx);
      });
    });

    if (fleetLightbox) {
      fleetLightbox.addEventListener('click', (e) => {
        if (e.target === fleetLightbox) {
          closeLightbox();
        }
      });
    }

    document.addEventListener('keydown', (e) => {
      if (!fleetLightbox || !fleetLightbox.classList.contains('active')) return;
      if (e.key === 'Escape') closeLightbox();
      if (e.key === 'ArrowRight') nextLightboxImage();
      if (e.key === 'ArrowLeft') prevLightboxImage();
    });
  }
});
