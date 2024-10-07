
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getDatabase } from "firebase/database";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDQTTZq4Fwk_mq0Ov0xWtsF4GjABBfj8mg",
  authDomain: "rentiya-dev.firebaseapp.com",
  projectId: "rentiya-dev",
  storageBucket: "rentiya-dev.appspot.com",
  messagingSenderId: "539673222320",
  appId: "1:539673222320:web:c7296cc68319cd95ae6f75",
  measurementId: "G-JLCH7WTLDM"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getDatabase(app) ;
export const analytics = getAnalytics(app);
export const auth = getAuth(app)