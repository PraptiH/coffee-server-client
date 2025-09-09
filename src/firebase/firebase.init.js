// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDYkvYUc-Mkks0YuEid3BC8b4Jp1JTV_Xs",
  authDomain: "coffee-store-app-4242c.firebaseapp.com",
  projectId: "coffee-store-app-4242c",
  storageBucket: "coffee-store-app-4242c.firebasestorage.app",
  messagingSenderId: "621900202481",
  appId: "1:621900202481:web:59bb88830572efde4fc450"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);