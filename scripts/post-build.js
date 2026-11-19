import fs from 'fs';
import path from 'path';
import { SEO_ROUTES, SITE_URL } from '../src/data/seoConfig.js';

const distDir = path.resolve('dist');
const baseHtml = fs.readFileSync(path.join(distDir, 'index.html'), 'utf8');

function escapeAttr(str) {
  return String(str)
    .replace(/&/g, '&amp;')
    .replace(/"/g, '&quot;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;');
}

function injectRouteSeo(html, routePath, meta) {
  const canonical = routePath === '/' ? `${SITE_URL}/` : `${SITE_URL}${routePath}`;
  const title = escapeAttr(meta.title);
  const desc = escapeAttr(meta.description);
  const keywords = escapeAttr(meta.keywords);
  const image = escapeAttr(meta.image);

  return html
    .replace(/<title>[\s\S]*?<\/title>/, `<title>${title}</title>`)
    .replace(/<meta name="description" content="[^"]*"\s*\/?>/, `<meta name="description" content="${desc}" />`)
    .replace(/<meta name="keywords" content="[^"]*"\s*\/?>/, `<meta name="keywords" content="${keywords}" />`)
    .replace(/<link rel="canonical" href="[^"]*"\s*\/?>/, `<link rel="canonical" href="${canonical}" />`)
    .replace(/<meta property="og:title" content="[^"]*"\s*\/?>/, `<meta property="og:title" content="${title}" />`)
    .replace(/<meta property="og:description" content="[^"]*"\s*\/?>/, `<meta property="og:description" content="${desc}" />`)
    .replace(/<meta property="og:url" content="[^"]*"\s*\/?>/, `<meta property="og:url" content="${canonical}" />`)
    .replace(/<meta property="og:image" content="[^"]*"\s*\/?>/, `<meta property="og:image" content="${image}" />`)
    .replace(/<meta name="twitter:title" content="[^"]*"\s*\/?>/, `<meta name="twitter:title" content="${title}" />`)
    .replace(/<meta name="twitter:description" content="[^"]*"\s*\/?>/, `<meta name="twitter:description" content="${desc}" />`)
    .replace(/<meta name="twitter:image" content="[^"]*"\s*\/?>/, `<meta name="twitter:image" content="${image}" />`);
}

// 1. Write 404.html fallback for unknown routes on GitHub Pages
fs.writeFileSync(path.join(distDir, '404.html'), baseHtml, 'utf8');

// 2. Generate HTTP-200 SEO route shells for every React Router page
let generatedCount = 0;
for (const [routePath, meta] of Object.entries(SEO_ROUTES)) {
  if (routePath === '/') continue;
  const routeDir = path.join(distDir, routePath.replace(/^\/+/, ''));
  fs.mkdirSync(routeDir, { recursive: true });
  const routeHtml = injectRouteSeo(baseHtml, routePath, meta);
  fs.writeFileSync(path.join(routeDir, 'index.html'), routeHtml, 'utf8');
  generatedCount++;
}

// 3. Auto-generate XML Sitemap for Google Search Console
const today = new Date().toISOString().split('T')[0];
const urlsXml = Object.entries(SEO_ROUTES)
  .map(([routePath, meta]) => {
    const loc = routePath === '/' ? `${SITE_URL}/` : `${SITE_URL}${routePath}`;
    return `  <url>
    <loc>${loc}</loc>
    <lastmod>${today}</lastmod>
    <changefreq>${meta.changefreq || 'monthly'}</changefreq>
    <priority>${meta.priority || '0.8'}</priority>
  </url>`;
  })
  .join('\n');

const sitemapXml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urlsXml}
</urlset>
`;

fs.writeFileSync(path.join(distDir, 'sitemap.xml'), sitemapXml, 'utf8');

console.log(`Post-build SEO complete: generated ${generatedCount} HTTP-200 React route shells, 404.html, and sitemap.xml (${Object.keys(SEO_ROUTES).length} URLs).`);
