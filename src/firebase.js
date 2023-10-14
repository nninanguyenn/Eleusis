// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD5AVPrcfLG0K2ZjdBGGZJXNjx8Qt5R_r4",
  authDomain: "eleusis-2dfd4.firebaseapp.com",
  projectId: "eleusis-2dfd4",
  storageBucket: "eleusis-2dfd4.appspot.com",
  messagingSenderId: "132018516210",
  appId: "1:132018516210:web:976077586bf2a29f49e06b",
  measurementId: "G-JX1H5PWG0T"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
const analytics = getAnalytics(app);
export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider();

