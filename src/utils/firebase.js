// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAZOmvodPjL3EzBx2PllvmTZ4SH1PCDA58",
  authDomain: "netflixgpt-d2464.firebaseapp.com",
  projectId: "netflixgpt-d2464",
  storageBucket: "netflixgpt-d2464.appspot.com",
  messagingSenderId: "1097530344805",
  appId: "1:1097530344805:web:2b125c69501f63756ccd8c",
  measurementId: "G-VPMM9PNSHF"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();