// Service Worker for R Analytics Toolkit
const CACHE_NAME = 'r-analytics-v1.8.1';
const STATIC_CACHE = 'r-analytics-static-v1.8.1';
const DYNAMIC_CACHE = 'r-analytics-dynamic-v1.8.1';

const staticAssets = [
    '/',
    '/index.html',
    '/styles/main.css',
    '/styles/mindmap.css',
    '/styles/virtual-lab.css',
    '/js/app.js',
    '/js/data.js',
    '/js/components-clean.js',
    '/js/mindmap.js',
    '/js/virtual-lab.js',
    '/js/unit1-content.js',
    '/js/unit2-content.js',
    '/js/unit3-content.js',
    '/js/unit4-content.js',
    '/js/projects-content.js',
    '/js/quizzes.js',
    '/js/quizzes-enhanced.js',
    '/assets/logo.png',
    '/assets/DP_profile.png',
    '/assets/Making_Data_Memorable.mp4',
    '/manifest.json'
];

// Install event - cache resources
self.addEventListener('install', event => {
    event.waitUntil(
        caches.open(STATIC_CACHE)
            .then(cache => {
                console.log('Opened static cache');
                return cache.addAll(staticAssets);
            })
            .catch(err => {
                console.log('Cache install failed:', err);
            })
    );
    self.skipWaiting();
});

// Fetch event - network first for HTML/JS, cache first for assets
self.addEventListener('fetch', event => {
    const { request } = event;
    const url = new URL(request.url);

    // Skip non-GET requests
    if (request.method !== 'GET') {
        return;
    }

    // Network first for HTML and JS files (always get latest)
    if (url.pathname.endsWith('.html') || url.pathname.endsWith('.js') || url.pathname.endsWith('.css')) {
        event.respondWith(
            fetch(request)
                .then(response => {
                    if (!response || response.status !== 200) {
                        return response;
                    }
                    const responseClone = response.clone();
                    caches.open(DYNAMIC_CACHE).then(cache => {
                        cache.put(request, responseClone);
                    });
                    return response;
                })
                .catch(() => {
                    return caches.match(request)
                        .then(response => response || caches.match('/index.html'));
                })
        );
    } else {
        // Cache first for images and other assets
        event.respondWith(
            caches.match(request)
                .then(response => {
                    if (response) {
                        return response;
                    }
                    return fetch(request)
                        .then(response => {
                            if (!response || response.status !== 200) {
                                return response;
                            }
                            const responseClone = response.clone();
                            caches.open(DYNAMIC_CACHE).then(cache => {
                                cache.put(request, responseClone);
                            });
                            return response;
                        })
                        .catch(() => {
                            return caches.match('/index.html');
                        });
                })
        );
    }
});

// Activate event - clean up old caches
self.addEventListener('activate', event => {
    const cacheWhitelist = [STATIC_CACHE, DYNAMIC_CACHE];

    event.waitUntil(
        caches.keys().then(cacheNames => {
            return Promise.all(
                cacheNames.map(cacheName => {
                    if (cacheWhitelist.indexOf(cacheName) === -1) {
                        console.log('Deleting old cache:', cacheName);
                        return caches.delete(cacheName);
                    }
                })
            );
        })
    );

    return self.clients.claim();
});

// Message event - handle messages from clients
self.addEventListener('message', event => {
    if (event.data && event.data.type === 'SKIP_WAITING') {
        self.skipWaiting();
    }
});
