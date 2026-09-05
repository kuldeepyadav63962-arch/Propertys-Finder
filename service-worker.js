// Realestate_portal — service worker
// Strategy: network-first, so every visit/app-open always tries to fetch
// the latest version first. This is what makes "you update the website,
// everyone's installed app updates automatically" work — there is no
// separate app store review or app rebuild needed for content changes.
const CACHE_NAME = 'realestate-portal-v1';

self.addEventListener('install', (event) => {
  self.skipWaiting(); // activate the new version immediately, don't wait
});

self.addEventListener('activate', (event) => {
  event.waitUntil(clients.claim()); // take control of all open tabs/app instances right away
});

self.addEventListener('fetch', (event) => {
  if(event.request.method !== 'GET') return;
  event.respondWith(
    fetch(event.request)
      .then((response) => {
        const copy = response.clone();
        caches.open(CACHE_NAME).then((cache) => cache.put(event.request, copy));
        return response;
      })
      .catch(() => caches.match(event.request)) // only used if there's no internet at all
  );
});
