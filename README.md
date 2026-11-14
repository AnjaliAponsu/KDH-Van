# KDH Van Hire Sri Lanka — Official Web Platform

Luxury passenger van hire and private tourist transport platform for Sri Lanka, featuring authentic **Pearl White Toyota HiAce KDH 223 High Roof** commuter vans with professional chauffeurs.

---

## 🚀 Running the Project

This project provides dual-runtime architecture: a modern **React 18 SPA (Vite)** with component-based architecture, and a **Static HTML Suite** with zero-dependency Node preview.

### Option 1: Modern React SPA (Vite Dev Server)
The component-based React application runs with live hot-module replacement (HMR):

```bash
# Install dependencies (first time only)
npm install

# Start Vite dev server on port 3000
npm run dev
```

Open your browser at:
👉 **[http://localhost:3000/](http://localhost:3000/)**

To test the optimized production build:
```bash
npm run build
npm run preview
```
👉 **[http://localhost:4173/](http://localhost:4173/)**

---

### Option 2: Built-In Static Server
Run the local HTTP preview server directly with Node.js:

```bash
node server.js
```

Open your browser at:
👉 **[http://localhost:8080/](http://localhost:8080/)**

---

## 📁 Clean Project Structure

```text
d:\KDH Van\
├── package.json                         # Vite, React 18, React Router & dependencies
├── vite.config.js                       # Vite build & routing configuration
├── app.html                             # React application HTML entrypoint
├── server.js                            # Standalone static preview server (ES module)
├── README.md                            # Project documentation
│
├── src/                                 # Modern React Component Architecture
│   ├── main.jsx                         # React root entrypoint
│   ├── App.jsx                          # Root layout, routing & universal providers
│   ├── context/
│   │   └── AppContext.jsx               # Global state (modals, bookings, toasts)
│   ├── components/
│   │   ├── common/                      # Universal Shared Components
│   │   │   ├── Header.jsx               # Universal executive sticky header & nav
│   │   │   ├── Footer.jsx               # Universal 5-column golden footer
│   │   │   ├── PageHero.jsx             # Harmonized hero banners with breadcrumbs
│   │   │   ├── SiteLoader.jsx           # Branded splash loader & top progress bar
│   │   │   ├── BookingModal.jsx         # Booking wizard modal
│   │   │   ├── PricePlanModal.jsx       # Interactive price plan modals
│   │   │   ├── SectionHeader.jsx        # Standardized eyebrow/title/subtitle headers
│   │   │   └── Toast.jsx                # Global notification toast
│   │   └── home/                        # Homepage Specialized Components
│   │       ├── BookingSearch.jsx        # Live booking fare calculator
│   │       ├── WhyChooseUs.jsx          # 4-card benefit highlights
│   │       ├── PopularRoutes.jsx        # Featured airport & intercity transfers
│   │       └── Testimonials.jsx         # Client review slider
│   ├── pages/                           # Full-Page Routed Views
│   │   ├── HomePage.jsx                 # Complete 11-section flagship homepage
│   │   ├── ServicesPage.jsx             # All services & transfer options
│   │   ├── ServiceDetailPage.jsx        # Individual dedicated service detail views
│   │   ├── FleetPage.jsx                # Toyota KDH 223 showcase & specifications
│   │   ├── PricingPage.jsx              # Rates matrix, inclusions & popup plans
│   │   ├── AboutPage.jsx                # Company story, standards & fleet mission
│   │   ├── ContactPage.jsx              # Direct channels, form, map & FAQ accordion
│   │   ├── BookingPage.jsx              # Dedicated multi-step booking wizard
│   │   ├── TravelGuidePage.jsx          # Sri Lanka destination travel guide
│   │   ├── GuideSigiriyaPage.jsx        # Sigiriya & Cultural Triangle guide
│   │   ├── GuideSouthCoastPage.jsx      # Galle, Mirissa & South Coast guide
│   │   └── GuideEllaPage.jsx            # Ella & Hill Country guide
│   ├── data/
│   │   ├── servicesData.js              # Service definitions, pricing & inclusions
│   │   └── travelGuidesData.js          # Travel guide articles & destination metadata
│   └── styles/
│       └── styles.css                   # Complete design tokens, components & responsive CSS
│
├── assets/ & public/assets/             # High-Definition Visual Assets
│   ├── logo.png                         # High-res authentic brand logo
│   ├── home-page/                       # Flagship imagery & Toyota KDH van cutouts
│   ├── services/                        # Service category photography
│   ├── fleet/                           # Authentic Toyota KDH 223 exterior & interior
│   ├── guide/                           # Sri Lanka travel destination photography
│   └── contact/                         # Operations map & contact hero van
│
└── *.html                               # Static HTML mirrors for zero-dependency access
    ├── index.html                       # Home
    ├── services.html                    # Services
    ├── fleet.html                       # Fleet
    ├── pricing.html                     # Pricing
    ├── about.html                       # About Us
    ├── contact.html                     # Contact Us
    ├── booking.html                     # Booking Wizard
    └── travel-guide.html                # Travel Guide
```

---

## ✨ Features & Architecture

1. **Authentic Vehicle Fleet**:
   - Strict 100% adherence to the authentic **Pearl White Toyota HiAce KDH 223 High Roof Passenger Van** across all heroes, galleries, and vehicle showcases.
2. **Standardized Layout & Tokens**:
   - Universal `1200px` content container, `24px` grid gaps, `46px` hero titles, `32px` section titles, and unified responsive breakpoints (`720px`, `520px`).
3. **Executive UX Loading Architecture**:
   - Branded splash curtain with halo pulse for initial load.
   - Non-blocking Linear/Vercel-style 3px golden neon top progress bar on internal route changes.
   - Smooth instant spring curves on modals with micro-button spinners.
4. **Universal 5-Column Footer & Real Interactive Map**:
   - 5-column brand, navigation, services, direct contacts, and social links.
   - Genuine Google Maps embed for Colombo operations depot and airport arrival counter.
