import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyCPWZ5FpUgUIhhvE7301hXQ4Q080f3tgh4",
  authDomain: "team-games-33327.firebaseapp.com",
  projectId: "team-games-33327",
  storageBucket: "team-games-33327.appspot.com",
  messagingSenderId: "1075225414323",
  appId: "1:1075225414323:web:b5773877e5b66f42c67ec6",
  measurementId: "G-GP8BJXE2NM"
};

export const firebase_app = initializeApp(firebaseConfig);
export const firebase_db = getFirestore(firebase_app);