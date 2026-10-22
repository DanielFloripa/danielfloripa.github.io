// Service worker for Daniel Camargo's website
const CACHE_NAME = 'daniel-camargo-site-v3';
// Only real URLs: cache.addAll() rejects the whole install if any entry fails
const urlsToCache = [
  '/',
  '/index.html',
  '/curriculum.html',
  '/greenhop.html',
  '/chave.html',
  '/thanks.html',
  '/assets/style.css',
  '/assets/script.js',
  '/assets/particles.json'
];

// Install a service worker
self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => cache.addAll(urlsToCache))
      .then(() => self.skipWaiting())
  );
});

function cacheResponse(request, response) {
  // Only cache valid same-origin responses
  if (response && response.status === 200 && response.type === 'basic') {
    const responseToCache = response.clone();
    caches.open(CACHE_NAME).then(cache => cache.put(request, responseToCache));
  }
  return response;
}

self.addEventListener('fetch', event => {
  const request = event.request;
  if (request.method !== 'GET' || new URL(request.url).origin !== self.location.origin) {
    return;
  }

  // Pages: network first, so content updates show up right after a deploy
  if (request.mode === 'navigate' || (request.headers.get('accept') || '').includes('text/html')) {
    event.respondWith(
      fetch(request)
        .then(response => cacheResponse(request, response))
        .catch(() => caches.match(request))
    );
    return;
  }

  // Static assets: cache first, then network
  event.respondWith(
    caches.match(request)
      .then(response => response || fetch(request).then(res => cacheResponse(request, res)))
  );
});

// Update a service worker
self.addEventListener('activate', event => {
  const cacheWhitelist = [CACHE_NAME];
  event.waitUntil(
    caches.keys().then(cacheNames => {
      return Promise.all(
        cacheNames.map(cacheName => {
          if (cacheWhitelist.indexOf(cacheName) === -1) {
            return caches.delete(cacheName);
          }
        })
      );
    }).then(() => self.clients.claim())
  );
});
