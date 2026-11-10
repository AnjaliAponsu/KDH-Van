import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { resolve } from 'path';

export default defineConfig({
  plugins: [
    react(),
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
