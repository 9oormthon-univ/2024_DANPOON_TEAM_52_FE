import { getToken } from 'firebase/messaging';
import { messaging } from './firebase';

export async function requestPermission() {
  const permission = await Notification.requestPermission();
  if (permission !== "granted") {
    console.warn("알림 권한을 허용해주세요.");
  }

  navigator.serviceWorker
    .register("/firebase-messaging-sw.js")
    .then(function (registration) {
      console.log("Service Worker 등록 성공:", registration);
    })
    .catch(function (error) {
      console.log("Service Worker 등록 실패:", error);
    });
}

export async function getDeviceToken() {
  const token = await getToken(messaging, {
    vapidKey: process.env.REACT_APP_FIREBASE_VAPID_KEY,
  });

  console.log("Device Token:", token);
  return token;
}