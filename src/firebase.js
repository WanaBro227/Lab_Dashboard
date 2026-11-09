import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyCyY82IVukreBBIs1KBsa5KbOSXeDT23YQ",
  authDomain: "esp-32-testing-77732.firebaseapp.com",
  databaseURL: "https://esp-32-testing-77732-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "esp-32-testing-77732",
  storageBucket: "esp-32-testing-77732.firebasestorage.app",
  messagingSenderId: "359162333514",
  appId: "1:359162333514:web:462175229eddc1bb9c59b3",
  measurementId: "G-ELQE1VBWFD"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Realtime Database and export it
export const db = getDatabase(app);