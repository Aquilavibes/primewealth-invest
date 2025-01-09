// Import Firebase SDK
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth"; // Uncommented for authentication use
import { getStorage } from "firebase/storage";

// Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAIzBO1HGHemnsR01rOfK5_iqpU5mJJhQU",
  authDomain: "crypto-investment-903c5.firebaseapp.com",
  projectId: "crypto-investment-903c5",
  storageBucket: "crypto-investment-903c5.firebasestorage.app",
  messagingSenderId: "990793686849",
  appId: "1:990793686849:web:50ba12def614654e974bc0",
  measurementId: "G-JXKBYWLM5H"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app); // Pass the initialized app
const auth = getAuth(app); // If you plan to use Authentication
const storage = getStorage(app);

export {
db,
auth,
storage
}