// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "food-41767.firebaseapp.com",
  projectId: "food-41767",
  storageBucket: "food-41767.firebasestorage.app",
  messagingSenderId: "512651140585",
  appId: "1:512651140585:web:491a8c5ee95fffd0e3ff78",
  // authDomain: "vingo-food-delivery-b6990.firebaseapp.com",
  // projectId: "vingo-food-delivery-b6990",
  // storageBucket: "vingo-food-delivery-b6990.firebasestorage.app",
  // messagingSenderId: "675396715500",
  // appId: "1:675396715500:web:bb8dc048e33e7a109ab6c9"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export { app, auth };
