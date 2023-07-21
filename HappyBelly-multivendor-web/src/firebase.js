// Import the functions you need from the SDKs you need
import * as firebase from "firebase/app";
import { getMessaging, isSupported } from "firebase/messaging";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
   apiKey: "AIzaSyCb0MFJKpBJ2WNC1njRT7oKTaX6l87FNZE",
  authDomain: "happybelly-391722.firebaseapp.com",
  databaseURL: "https://happybelly-391722-default-rtdb.firebaseio.com",
  projectId: "happybelly-391722",
  storageBucket: "happybelly-391722.appspot.com",
  messagingSenderId: "1039230728072",
  appId: "1:1039230728072:web:3b0978ad4ddcccf467ac3d",
  measurementId: "G-7YCV2SJCH9"
};

export const initialize = () => {
   // Initialize Firebase
   const app = firebase.initializeApp(firebaseConfig);
   const messaging = getMessaging(app);
   return messaging;
};

export const isFirebaseSupported = async () => {
   return await isSupported();
};
