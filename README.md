# KDH Van Hire Sri Lanka — Official Website

A luxury passenger van hire and private tourist transport landing page for Sri Lanka, featuring Toyota HiAce KDH 200 series passenger vans with professional drivers.

---

## 🚀 Quick Start

### Option 1: Using the Built-In Node.js Server
Run the local HTTP preview server directly with Node.js:

```bash
node server.js
```

Then open your browser at:
👉 **[http://localhost:8080/](http://localhost:8080/)**

To use a custom port, pass the `PORT` environment variable:
```bash
$env:PORT = "3000"; node server.js
```

### Option 2: Direct File Access
Simply double-click [`index.html`](index.html) to open the website directly in any modern browser (Google Chrome, Microsoft Edge, Safari, Firefox). No build step, bundling, or web server required.

---

## 📁 Project Structure

```text
d:\KDH Van\
├── index.html                           # Semantic landing page structure & metadata
├── server.js                            # Standalone preview server (zero dependencies)
├── README.md                            # Project documentation & configuration guide
├── css/
│   └── styles.css                       # Complete custom styles, variables & media queries
├── js/
│   └── main.js                          # Interactive booking engine, tabs, modals & slider
└── assets/
    └── home-page/                       # High-resolution generated photography & icons
        ├── hero-van.jpg                 # Hero background van on Sri Lanka mountain road
        ├── vehicle-kdh200-smooth.png    # Authentic KDH 200 series transparent van
        ├── vehicle-kdh-van.jpg          # High-resolution studio photograph
        ├── service-airport-transfers.jpg# BIA Colombo airport terminal & palm entrance
        ├── service-point-to-point.jpg   # Van along Sri Lanka coastal road
        ├── service-daily-hire.jpg       # Nuwara Eliya / Ella lush tea plantations
        ├── service-multi-day-tours.jpg  # Sigiriya Lion Rock Fortress
        ├── customer-daniel.jpg          # Daniel M. testimonial avatar
        ├── customer-sarah.jpg           # Sarah P. testimonial avatar
        ├── customer-ruwan.jpg           # Ruwan D. testimonial avatar
        ├── cta-banner-bg.jpg            # Panoramic mountain road golden hour banner
        ├── logo.svg                     # Primary vector brand logo
        ├── logo-white.svg               # White text logo for dark backgrounds
        ├── logo-dark.svg                # Dark text logo for light backgrounds
        ├── favicon.svg                  # Web browser favicon
        └── README.md                    # Asset catalogue and specifications
```

---

## ⚙️ Configuration & Customization

### 1. Changing Contact Numbers & WhatsApp
To update the contact number across the website, modify the following instances in `index.html` and `js/main.js`:
* **Phone Number**: `+94 77 123 4567` (update in `tel:+94771234567` links in the header and footer).
* **WhatsApp Deep-Link**: `https://wa.me/94771234567` (update in `index.html` and in `js/main.js` line 195).
* **Support Email**: `info@kdhvanhire.lk` (update in `mailto:` links).

### 2. Updating Route Pricing
Fares are defined in `js/main.js` within `calculateDynamicEstimate()` and in the `INFO_TOPICS.pricing` rate table. You can adjust the baseline fares and local LKR conversion rates to reflect seasonal price changes.

---

## ✨ Features Included

1. **Floating Booking Engine**:
   * Service selector with 4 trip modes (*Airport Transfer*, *Point to Point*, *Daily Hire*, *Multi-Day Tour*).
   * Reverse location swap button (`⇄`) with smooth rotation.
   * Interactive passenger counter dropdown (1 to 15 passengers).
   * Datepicker support.
   * Dynamic all-inclusive fare calculator in both USD ($) and Sri Lankan Rupees (LKR).
2. **Interactive Information Modals**:
   * Pricing matrix with transparent rate table.
   * Vehicle fleet specifications (dual AC, reclining seats, luggage capacity).
   * Company credentials and tourist board safety standards.
   * Transparent policies (free cancellation up to 24 hours).
3. **Automated Review Carousel**:
   * Auto-rotates testimonials with pause on hover/touch.
   * Previous/Next navigation and indicator dots.
4. **Responsive Design**:
   * Fully responsive across desktop (1280px+), tablet (768px - 1080px), and mobile phones (<768px).
   * Slide-out mobile navigation drawer.
5. **SEO & Social Sharing Ready**:
   * Pre-configured OpenGraph tags, Twitter Card metadata, and `Schema.org` `AutoRental` structured data.
