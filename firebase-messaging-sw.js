importScripts('https://www.gstatic.com/firebasejs/10.8.0/firebase-app-compat.js');
importScripts('https://www.gstatic.com/firebasejs/10.8.0/firebase-messaging-compat.js');

firebase.initializeApp({
  apiKey:            "AIzaSyDfhLutM-WEKvI0b7ygZpCcXCvSl8TK1x4",
  authDomain:        "wedding-notifications-606ad.firebaseapp.com",
  projectId:         "wedding-notifications-606ad",
  storageBucket:     "wedding-notifications-606ad.firebasestorage.app",
  messagingSenderId: "397211596151",
  appId:             "1:397211596151:web:6cda670dd7debfeebedd72"
});

const messaging = firebase.messaging();

// Handle background messages from Firebase
messaging.onBackgroundMessage(function(payload) {
  console.log('Background message received:', payload);

  const title = payload.notification?.title || 'Matty & Courtney ✨';
  const body  = payload.notification?.body  || payload.data?.body || 'New announcement!';

  return self.registration.showNotification(title, {
    body,
    icon:    '/icon.png',
    badge:   '/icon.png',
    vibrate: [200, 100, 200],
    tag:     'wedding-announcement',
    renotify: true,
    requireInteraction: true,
    data: { url: 'https://matty-courtney-wedding.matty-b60.workers.dev' }
  });
});

// Raw push fallback — catches anything Firebase misses
self.addEventListener('push', function(event) {
  console.log('Raw push received');
  if (!event.data) return;

  let payload;
  try { payload = event.data.json(); }
  catch(e) { payload = { notification: { title: 'Matty & Courtney ✨', body: event.data.text() } }; }

  const title = payload.notification?.title || 'Matty & Courtney ✨';
  const body  = payload.notification?.body  || payload.data?.body || 'New announcement!';

  event.waitUntil(
    self.registration.showNotification(title, {
      body,
      icon:    '/icon.png',
      badge:   '/icon.png',
      vibrate: [200, 100, 200],
      tag:     'wedding-announcement',
      renotify: true,
      data:    { url: 'https://matty-courtney-wedding.matty-b60.workers.dev' }
    })
  );
});

// Click notification → open app
self.addEventListener('notificationclick', function(event) {
  event.notification.close();
  const url = event.notification.data?.url || 'https://matty-courtney-wedding.matty-b60.workers.dev';
  event.waitUntil(
    clients.matchAll({ type: 'window', includeUncontrolled: true }).then(function(clientList) {
      for (const client of clientList) {
        if (client.url === url && 'focus' in client) return client.focus();
      }
      if (clients.openWindow) return clients.openWindow(url);
    })
  );
});
