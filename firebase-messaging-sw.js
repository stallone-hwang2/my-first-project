importScripts('https://www.gstatic.com/firebasejs/10.12.0/firebase-app-compat.js');
importScripts('https://www.gstatic.com/firebasejs/10.12.0/firebase-messaging-compat.js');

firebase.initializeApp({
    apiKey: "AIzaSyBjzRu6d87W9LjPhqkoo3JVVeGNyB8fnB0",
    projectId: "blazorwasmtest1",
    messagingSenderId: "692860921646",
    appId: "1:692860921646:web:4ba593d1f24ca9ee69fcbf"
});

const messaging = firebase.messaging();

// 當網頁關閉或在背景時，處理推播訊息
messaging.onBackgroundMessage((payload) => {
    const notificationTitle = payload.notification.title;
    const notificationOptions = {
        body: payload.notification.body,
        icon: 'icon-512.png'
    };
    self.registration.showNotification(notificationTitle, notificationOptions);
});