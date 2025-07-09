// Встановлення Service Worker
self.addEventListener('install', event => {
  console.log('Service Worker встановлюється');
  event.waitUntil(
    caches.open('rc-controller-v1').then(cache => {
      return cache.addAll([
        '/',
        '/index.html',
        '/manifest.json',
        '/icons/icon-192.png',
        '/icons/icon-512.png'
      ]);
    })
  );
});

// Активація Service Worker
self.addEventListener('activate', event => {
  console.log('Service Worker активовано');
});

// Обробка запитів
self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request)
      .then(response => response || fetch(event.request))
  );
});
