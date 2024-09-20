// src/firebase.js
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';

// Firebase configuration object
const firebaseConfig = {
  apiKey: "AIzaSyBX5nVh4-4ZRxZaKNjjBKd01ElZHtooUCs",
  authDomain: "em-caller.firebaseapp.com",
  projectId: "em-caller",
  storageBucket: "em-caller.appspot.com",
  messagingSenderId: "71742665686",
  appId: "1:71742665686:web:e442027b9830dbd4a76a77"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export { auth };
