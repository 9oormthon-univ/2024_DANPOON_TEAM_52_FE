self.addEventListener('install', (e) => {
  console.log('Service Worker: Installed');
  self.skipWaiting();
})

self.addEventListener('activate', (e) => {
  console.log('Service Worker: Activated');
})

self.addEventListener('push', e => {
  if (!e.data.json()) return;

  const resultData = e.data.json().notification;

  const options = {
    body: resultData.body,
    icon: resultData.image,
    image: resultData.image,
  };
  e.waitUntil(
    self.registration.showNotification(resultData.title, options)
  );
});

self.addEventListener("notificationclick", function (event) {
  const url = "/";
  event.notification.close();
  event.waitUntil(clients.openWindow(url));
});