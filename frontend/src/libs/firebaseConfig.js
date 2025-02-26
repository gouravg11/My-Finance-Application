// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDntWIttaCYooE323uAemqexZb91mivqqo",
  authDomain: "my-finance-application-cdc49.firebaseapp.com",
  projectId: "my-finance-application-cdc49",
  storageBucket: "my-finance-application-cdc49.firebasestorage.app",
  messagingSenderId: "34622571452",
  appId: "1:34622571452:web:cdf8747c61d4f99b9ee1b9",
  measurementId: "G-XXRJ9JXQXB",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app);

export { app, auth };
