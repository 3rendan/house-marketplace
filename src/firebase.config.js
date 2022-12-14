// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore'

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCjhL9d3J7DIJ0T0DqAGXPCxZuf1g-iBTg",
  authDomain: "house-marketplace-app-32f2e.firebaseapp.com",
  projectId: "house-marketplace-app-32f2e",
  storageBucket: "house-marketplace-app-32f2e.appspot.com",
  messagingSenderId: "433448333939",
  appId: "1:433448333939:web:23f2d0314648fd574b3006"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore();