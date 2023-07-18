// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAHkOn7yD-gsSA24ziZsVk-GjJhzNZu2q8",
  authDomain: "chatroom-e560e.firebaseapp.com",
  projectId: "chatroom-e560e",
  storageBucket: "chatroom-e560e.appspot.com",
  messagingSenderId: "274033926705",
  appId: "1:274033926705:web:dac1fca9e2a1fb54102b10"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
 export const auth = getAuth(app);
  export const db = getFirestore(app);
