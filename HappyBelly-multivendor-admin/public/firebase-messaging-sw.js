// // Give the service worker access to Firebase Messaging.
// // Note that you can only use Firebase Messaging here, other Firebase libraries
// // are not available in the service worker.
importScripts(
    "https://www.gstatic.com/firebasejs/9.4.0/firebase-app-compat.js"
 );
 importScripts(
    "https://www.gstatic.com/firebasejs/9.4.0/firebase-messaging-compat.js"
 );
// // Initialize the Firebase app in the service worker by passing in the
// // messagingSenderId.
firebase.initializeApp({
    apiKey: "AIzaSyAzhLmsR9WBS-oNRNU7BHNW5ctZHugI3eA",
  authDomain: "happybelly-389902.firebaseapp.com",
  databaseURL: "https://happybelly-389902-default-rtdb.firebaseio.com",
  projectId: "happybelly-389902",
  storageBucket: "happybelly-389902.appspot.com",
  messagingSenderId: "540904364505",
  appId: "1:540904364505:web:3fbd2c7bb6982bd61f21c8",
  measurementId: "G-9Z70N6NEDZ"
});


// // Retrieve an instance of Firebase Messaging so that it can handle background
// // messages.
const messaging = firebase.messaging();


messaging.onBackgroundMessage(function (payload) {
    try {
        console.log('onBackgroundMessage')
        // Customize notification here
        const { title, body } = payload.notification;
        console.log('title', title, body)
        const notificationOptions = {
           body,
           icon: "/favicon.png",
        };
     
        // eslint-disable-next-line no-restricted-globals
        self.registration.showNotification(title, notificationOptions); 
    } catch (error) {
        console.log('error', error)
    }
    
 });
 