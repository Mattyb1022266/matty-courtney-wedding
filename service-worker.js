// ============================================================
// SERVICE WORKER — Matty & Courtney Wedding App
// Enables offline use and home screen installation
// Version: bump this number whenever you deploy an update
// e.g. change 'v1' to 'v2' to force all guests to get the new version
// ============================================================
const CACHE_NAME = 'wedding-app-v11';

const ASSETS = [
  '/',
  '/index.html',
  '/manifest.json',
  '/icon.png',
  'https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,500;1,400&family=Lato:wght@300;400;700&display=swap'
];

// Install — cache all core assets
self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME).then(cache => cache.addAll(ASSETS))
  );
  self.skipWaiting();
});

// Activate — remove old caches
self.addEventListener('activate', event => {
  event.waitUntil(
    caches.keys().then(keys =>
      Promise.all(keys.filter(k => k !== CACHE_NAME).map(k => caches.delete(k)))
    )
  );
  self.clients.claim();
});

// Fetch — serve from cache, fall back to network
self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request).then(cached => cached || fetch(event.request))
  );
});
