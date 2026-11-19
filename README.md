# KDH Van Hire Sri Lanka — Pure React Web Platform

Luxury passenger van hire and private tourist transport platform for Sri Lanka, built as a **100% Pure React 18 + Vite** application with automated GitHub Pages deployment and full search engine optimization (SEO).

---

## Quick Start

```bash
# 1. Install dependencies
npm install

# 2. Start local React development server (http://localhost:3000)
npm run dev

# 3. Build production bundle with SEO route shells & sitemap.xml
npm run build

# 4. Preview production build locally
npm run preview
```

---

## Pure React Project Structure

```text
d:\KDH Van\
├── index.html                           # Single Vite React root mount shell + base SEO tags
├── package.json                         # React 18, React Router 6, Vite 5
├── vite.config.js                       # Vite build & GitHub Pages base-path asset rewriter
├── .github/workflows/deploy.yml         # Automated GitHub Pages CI/CD deployment
├── scripts/post-build.js                # Generates HTTP-200 SEO route shells, 404.html & sitemap.xml
├── public/
│   ├── robots.txt                       # Search engine crawl directives & sitemap link
│   └── assets/                          # HD photography, logos, icons & fleet imagery
└── src/
    ├── main.jsx                         # React root entrypoint (BrowserRouter with BASE_URL)
    ├── App.jsx                          # Clean React Router routes + SeoManager + global modals
    ├── context/
    │   └── AppContext.jsx               # Global state (booking modal, price plan modal, toast, loader)
    ├── components/
    │   ├── common/
    │   │   ├── SeoManager.jsx           # Per-route dynamic title, meta, canonical, OG & JSON-LD
    │   │   ├── Header.jsx               # Sticky executive navigation bar
    │   │   ├── Footer.jsx               # 5-column site footer
    │   │   ├── PageHero.jsx             # Standardized page hero banner with breadcrumbs
    │   │   ├── SectionHeader.jsx        # Standardized gold-eyebrow section headers
    │   │   ├── FaqSection.jsx           # Shared FAQ accordion (Home & Contact)
    │   │   ├── CtaBanner.jsx            # Executive call-to-action banner
    │   │   ├── BookingModal.jsx         # 3-step booking wizard modal
    │   │   ├── PricePlanModal.jsx       # Interactive pricing plan inquiry modal
    │   │   ├── SiteLoader.jsx           # Branded splash loader & route progress bar
    │   │   └── Toast.jsx                # Toast notifications
    │   └── home/
    │       ├── BookingSearch.jsx        # 4-tab live booking search bar
    │       ├── WhyChooseUs.jsx          # 4-card value highlights
    │       ├── PopularRoutes.jsx        # Featured Sri Lanka transfer routes
    │       └── Testimonials.jsx         # Verified customer reviews slider
    ├── pages/
    │   ├── HomePage.jsx
    │   ├── ServicesPage.jsx
    │   ├── ServiceDetailPage.jsx
    │   ├── FleetPage.jsx
    │   ├── PricingPage.jsx
    │   ├── TravelGuidePage.jsx
    │   ├── GuideSigiriyaPage.jsx
    │   ├── GuideSouthCoastPage.jsx
    │   ├── GuideEllaPage.jsx
    │   ├── AboutPage.jsx
    │   ├── ContactPage.jsx
    │   └── BookingPage.jsx
    ├── data/
    │   ├── seoConfig.js                 # Single source of truth for all 16 routes' SEO metadata
    │   ├── servicesData.js              # Service definitions & itineraries
    │   └── travelGuidesData.js          # Destinations, tips & suggested routes
    └── styles/
        └── styles.css                   # Complete executive design system
```

---

## Built-In SEO Features

1. **Dynamic Per-Route Meta Tags (`SeoManager.jsx`)**: Updates `<title>`, `<meta name="description">`, `<meta name="keywords">`, `<link rel="canonical">`, Open Graph, Twitter Card, and JSON-LD (`AutoRental` + `BreadcrumbList`) on every route navigation.
2. **Pre-Rendered HTTP-200 Route Shells (`scripts/post-build.js`)**: Every route (`/services`, `/fleet`, `/pricing`, `/travel-guide`, `/about`, `/contact`, `/booking`, etc.) is emitted with its own static `index.html` containing route-specific SEO tags so Googlebot, WhatsApp, and Facebook crawlers receive HTTP 200 OK and accurate previews without executing JavaScript.
3. **Auto-Generated `sitemap.xml` & `robots.txt`**: Ready to submit directly to [Google Search Console](https://search.google.com/search-console/).
4. **Structured Data (JSON-LD)**: Includes `AutoRental`, `FAQPage`, and `BreadcrumbList` schemas for rich Google search snippets.
