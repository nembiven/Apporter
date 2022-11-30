import React from 'react';
export interface FirebaseInterface {}
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
export const firebaseConfig = {
  apiKey: "AIzaSyCCZwAuzK1uDiqVxtzY890E7fmUMUD-mAg",
  authDomain: "apporter-2238c.firebaseapp.com",
  projectId: "apporter-2238c",
  storageBucket: "apporter-2238c.appspot.com",
  messagingSenderId: "853142764680",
  appId: "1:853142764680:web:4de636c3df82e0a514333d"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);