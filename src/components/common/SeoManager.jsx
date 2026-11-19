import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { SEO_ROUTES, SITE_URL, SITE_NAME, DEFAULT_OG_IMAGE, ORGANIZATION_SCHEMA } from '../../data/seoConfig';

function upsertMeta(attr, key, content) {
  if (!content) return;
  let el = document.head.querySelector(`meta[${attr}="${key}"]`);
  if (!el) {
    el = document.createElement('meta');
    el.setAttribute(attr, key);
    document.head.appendChild(el);
  }
  el.setAttribute('content', content);
}

function upsertCanonical(href) {
  let link = document.head.querySelector('link[rel="canonical"]');
  if (!link) {
    link = document.createElement('link');
    link.setAttribute('rel', 'canonical');
    document.head.appendChild(link);
  }
  link.setAttribute('href', href);
}

function upsertJsonLd(id, data) {
  let script = document.head.querySelector(`script[data-seo-schema="${id}"]`);
  if (!script) {
    script = document.createElement('script');
    script.type = 'application/ld+json';
    script.setAttribute('data-seo-schema', id);
    document.head.appendChild(script);
  }
  script.textContent = JSON.stringify(data);
}

export default function SeoManager() {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    if (!hash) {
      window.scrollTo({ top: 0, behavior: 'instant' });
    }

    const normalized = pathname !== '/' ? pathname.replace(/\/+$/, '') : '/';
    const meta = SEO_ROUTES[normalized] || SEO_ROUTES['/'];
    const canonicalUrl = normalized === '/' ? `${SITE_URL}/` : `${SITE_URL}${normalized}`;

    document.title = meta.title;
    upsertMeta('name', 'description', meta.description);
    upsertMeta('name', 'keywords', meta.keywords);
    upsertMeta('name', 'robots', 'index, follow');

    // Open Graph
    upsertMeta('property', 'og:site_name', SITE_NAME);
    upsertMeta('property', 'og:type', 'website');
    upsertMeta('property', 'og:title', meta.title);
    upsertMeta('property', 'og:description', meta.description);
    upsertMeta('property', 'og:url', canonicalUrl);
    upsertMeta('property', 'og:image', meta.image || DEFAULT_OG_IMAGE);
    upsertMeta('property', 'og:locale', 'en_LK');

    // Twitter Card
    upsertMeta('name', 'twitter:card', 'summary_large_image');
    upsertMeta('name', 'twitter:title', meta.title);
    upsertMeta('name', 'twitter:description', meta.description);
    upsertMeta('name', 'twitter:image', meta.image || DEFAULT_OG_IMAGE);

    // Canonical URL
    upsertCanonical(canonicalUrl);

    // Structured Data (Organization + BreadcrumbList)
    const segments = normalized.split('/').filter(Boolean);
    const breadcrumbItems = [
      { '@type': 'ListItem', position: 1, name: 'Home', item: `${SITE_URL}/` }
    ];
    let currentPath = '';
    segments.forEach((seg, idx) => {
      currentPath += `/${seg}`;
      const label = seg
        .split('-')
        .map(w => w.charAt(0).toUpperCase() + w.slice(1))
        .join(' ');
      breadcrumbItems.push({
        '@type': 'ListItem',
        position: idx + 2,
        name: label,
        item: `${SITE_URL}${currentPath}`
      });
    });

    upsertJsonLd('route-graph', {
      '@context': 'https://schema.org',
      '@graph': [
        ORGANIZATION_SCHEMA,
        {
          '@type': 'BreadcrumbList',
          itemListElement: breadcrumbItems
        }
      ]
    });
  }, [pathname, hash]);

  return null;
}
