import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { resolve } from 'path';

const isProduction = process.env.NODE_ENV === 'production' || process.env.GITHUB_ACTIONS;
const base = isProduction ? '/KDH-Van/' : '/';

export default defineConfig({
  base,
  plugins: [
    react(),
    {
      name: 'rewrite-assets-base',
      enforce: 'pre',
      transform(code, id) {
        // Rewrite asset paths in JS, JSX, TS, TSX and CSS to respect the GitHub Pages base path
        if (/\.(jsx?|tsx?|css)$/.test(id)) {
          let updated = code.replace(/(['"`])\/assets\//g, `$1${base}assets/`);
          // Also rewrite relative ../assets in CSS files
          if (id.endsWith('.css')) {
            updated = updated.replace(/url\(['"]?\.\.\/assets\//g, `url('${base}assets/`);
          }
          return {
            code: updated,
            map: null
          };
        }
      }
    },
    {
      name: 'rewrite-root-to-app-for-react-dev',
      configureServer(server) {
        server.middlewares.use((req, res, next) => {
          // If accessing root or client-side routes on Vite dev server, serve app.html
          if (req.url === '/' || (!req.url.includes('.') && !req.url.startsWith('/@') && !req.url.startsWith('/src') && !req.url.startsWith('/assets') && !req.url.startsWith('/node_modules'))) {
            req.url = '/app.html';
          }
          next();
        });
      }
    }
  ],
  server: {
    port: 3000,
    open: false
  },
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'app.html')
      }
    }
  }
});
