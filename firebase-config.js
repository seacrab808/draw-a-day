import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

import {
  getAuth,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword
} from "firebase/auth"

const firebaseConfig = {
  apiKey: "AIzaSyA1hSi9sdP0K5ovS1uP6A8jNc_8EYgOdvM",
  authDomain: "draw-a-day-ba256.firebaseapp.com",
  projectId: "draw-a-day-ba256",
  storageBucket: "draw-a-day-ba256.appspot.com",
  messagingSenderId: "1053375506310",
  appId: "1:1053375506310:web:08e010c9655fbcfa0b6e07",
};

const app = initializeApp(firebaseConfig);
// 계정 생성
export const auth = getAuth(app);

// 회원가입
export const signin = (email, password) => {
  return signInWithEmailAndPassword(auth, email, password);
};

// 로그인 (유저 생성)
export const loginEmail = (email, password) => {
  return createUserWithEmailAndPassword(auth, email, password);
};

// DB
export const db = getFirestore(app);
