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
      const serviceName = titleEl ? titleEl.textContent.trim() : 'Airport Transfer';
      openBookingModal(serviceName);
    });
  });

  // 9. General "Book Your Van" or "Book Now" buttons
  document.querySelectorAll('.btn-trigger-booking').forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      const service = btn.dataset.service || currentServiceType;
      openBookingModal(service);
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
    }
  };

  function openInfoModal(topicKey) {
    const topic = INFO_TOPICS[topicKey] || INFO_TOPICS.pricing;
    if (infoModalTitle) infoModalTitle.textContent = topic.title;
    if (infoModalBody) infoModalBody.innerHTML = topic.content;
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

  if (infoModalCloseBtn) {
    infoModalCloseBtn.addEventListener('click', closeInfoModal);
  }

  if (infoModalActionBtn) {
    infoModalActionBtn.addEventListener('click', () => {
      closeInfoModal();
      openBookingModal();
    });
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
});
