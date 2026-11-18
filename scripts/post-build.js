import fs from 'fs';
import path from 'path';

// 1. Copy app.html to index.html and 404.html for SPA fallback
fs.copyFileSync('dist/app.html', 'dist/index.html');
fs.copyFileSync('dist/app.html', 'dist/404.html');

// 2. Copy static HTML pages into dist
const files = fs.readdirSync('.');
for (const f of files) {
  if (f.endsWith('.html') && f !== 'index.html' && f !== 'app.html') {
    fs.copyFileSync(f, path.join('dist', f));
  }
}

// 3. Copy css and js folders into dist
if (!fs.existsSync('dist/css')) fs.mkdirSync('dist/css', { recursive: true });
for (const f of fs.readdirSync('css')) {
  fs.copyFileSync(path.join('css', f), path.join('dist/css', f));
}

if (!fs.existsSync('dist/js')) fs.mkdirSync('dist/js', { recursive: true });
for (const f of fs.readdirSync('js')) {
  fs.copyFileSync(path.join('js', f), path.join('dist/js', f));
}

console.log('Post-build: successfully synchronized all HTML pages, CSS, JS, and SPA entrypoints into dist/');
