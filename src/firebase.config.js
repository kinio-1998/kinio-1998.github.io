import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"; // ✅ esto es lo que necesitas

const firebaseConfig = {
  apiKey: "AIzaSyB3nSfOC4ZL4onyyaA_FI7Cfl0uWFLO8J0",
  authDomain: "portfoliodb-306f5.firebaseapp.com",
  projectId: "portfoliodb-306f5",
  storageBucket: "portfoliodb-306f5.appspot.com",
  messagingSenderId: "273121937921",
  appId: "1:273121937921:web:5894318d963d49e0990e00",
  measurementId: "G-09N2J9Z4QC"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app); // ✅ usar Firestore, no Analytics
export default db;