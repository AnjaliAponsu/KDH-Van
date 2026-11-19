import React, { useState } from 'react';

const DEFAULT_FAQS = [
  {
    q: "How quickly will I receive confirmation for my inquiry?",
    a: "For WhatsApp messages, our on-duty concierge typically replies within 3 to 5 minutes 24/7. Inquiries submitted through our website contact form or email receive comprehensive official quotations and vehicle availability within 30 to 60 minutes."
  },
  {
    q: "Is an English-speaking chauffeur included with every rental?",
    a: "Yes, 100% of our hires include a licensed, highly experienced English-speaking professional chauffeur certified by the Sri Lanka Tourism Development Authority. To maintain supreme passenger safety and full vehicle insurance protection, we do not provide self-drive van rentals."
  },
  {
    q: "What is included in the van rental quotation?",
    a: "All quotes are completely transparent with zero hidden charges. Rates include the Toyota KDH 223 High Roof commuter van, professional chauffeur allowance, air-conditioning, fuel for agreed itineraries, expressway tolls, passenger insurance, and complimentary bottled water."
  },
  {
    q: "What happens if my inbound flight to Colombo (BIA) is delayed?",
    a: "Flight tracking is included free of charge. We monitor incoming flights at Bandaranaike International Airport in real-time. If your flight is delayed or arrives early, your chauffeur automatically adjusts arrival time without waiting penalty fees."
  },
  {
    q: "What payment methods and currencies do you accept?",
    a: "We accept major international currencies (USD, EUR, GBP, AUD) as well as Sri Lankan Rupees (LKR). Payment can be completed via secure online payment link, credit/debit card, bank transfer, or cash upon arrival with receipt."
  }
];

export default function FaqSection({
  eyebrow = "COMMON INQUIRIES",
  title = "Frequently Asked Questions",
  subtitle = "Key information regarding bookings, airport meet & greets, chauffeur services, and payment options.",
  faqs = DEFAULT_FAQS
}) {
  const [openFaq, setOpenFaq] = useState(0);

  return (
    <section className="faq-section" id="faq">
      <div className="container">
        <div className="section-header">
          <div className="section-eyebrow">{eyebrow}</div>
          <h2 className="section-title">{title}</h2>
          <p className="section-subtitle">{subtitle}</p>
        </div>
        <div className="faq-container">
          <div className="faq-accordion">
            {faqs.map((faq, idx) => (
              <div key={idx} className={`faq-item ${openFaq === idx ? 'active' : ''}`}>
                <div
                  className="faq-question"
                  onClick={() => setOpenFaq(openFaq === idx ? null : idx)}
                  style={{ cursor: 'pointer' }}
                >
                  <span className="faq-question-text">{faq.q}</span>
                  <svg
                    className="faq-chevron"
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <polyline points="6 9 12 15 18 9"></polyline>
                  </svg>
                </div>
                <div className="faq-answer">
                  <p className="faq-answer-text">{faq.a}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
