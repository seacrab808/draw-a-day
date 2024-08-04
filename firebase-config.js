import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyA1hSi9sdP0K5ovS1uP6A8jNc_8EYgOdvM",
  authDomain: "draw-a-day-ba256.firebaseapp.com",
  projectId: "draw-a-day-ba256",
  storageBucket: "draw-a-day-ba256.appspot.com",
  messagingSenderId: "1053375506310",
  appId: "1:1053375506310:web:08e010c9655fbcfa0b6e07",
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
