const CACHE_NAME = "linktree-cache-v2";
const urlsToCache = [
  "/",
  "/index.html",
  "/style.css",
  "/script.js",
  "/particles.min.js",
  "/assets/bg gb dark.png",
  "/assets/bg gb white.png",
  "/assets/MoonStars.svg",
  "/assets/Sun.svg",
  "/assets/foto gabriel oliveira.JPEG",
  "/assets/logo sem fundo.png",
];

self.addEventListener("activate", (event) => {
  event.waitUntil(
    caches.keys().then((cacheNames) => {
      return Promise.all(
        cacheNames.map((cacheName) => {
          if (cacheName !== CACHE_NAME) {
            return caches.delete(cacheName);
          }
        })
      );
    })
  );
});

self.addEventListener("install", (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => cache.addAll(urlsToCache))
  );
});

self.addEventListener("fetch", (event) => {
  event.respondWith(
    caches.match(event.request).then((response) => {
      return fetch(event.request)
        .then((networkResponse) => {
          if (networkResponse) {
            const responseToCache = networkResponse.clone();
            caches.open(CACHE_NAME).then((cache) => {
              cache.put(event.request, responseToCache);
            });
          }
          return networkResponse;
        })
        .catch(() => response);
    })
  );
});
