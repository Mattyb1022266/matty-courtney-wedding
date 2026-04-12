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

// Handle background push notifications
messaging.onBackgroundMessage(function(payload) {
  const { title, body } = payload.notification;
  self.registration.showNotification(title, {
    body,
    icon:  '/icon.png',
    badge: '/icon.png',
    vibrate: [200, 100, 200],
    data: { url: 'https://matty-courtney-wedding.matty-b60.workers.dev' }
  });
});

// Click notification → open app
self.addEventListener('notificationclick', function(event) {
  event.notification.close();
  event.waitUntil(
    clients.openWindow('https://matty-courtney-wedding.matty-b60.workers.dev')
  );
});
