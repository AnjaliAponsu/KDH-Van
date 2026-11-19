import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig(({ command }) => {
  const isBuild = command === 'build';
  const base = isBuild ? '/KDH-Van/' : '/';

  return {
    base,
    plugins: [
      react(),
      {
        name: 'rewrite-assets-base',
        enforce: 'pre',
        transform(code, id) {
          if (/\.(jsx?|tsx?|css)$/.test(id)) {
            let updated = code.replace(/(['"`])\/assets\//g, `$1${base}assets/`);
            if (id.endsWith('.css')) {
              updated = updated.replace(/url\(['"]?\.\.\/assets\//g, `url('${base}assets/`);
            }
            return {
              code: updated,
              map: null
            };
          }
        }
      }
    ],
    server: {
      port: 3000,
      open: false
    }
  };
});
