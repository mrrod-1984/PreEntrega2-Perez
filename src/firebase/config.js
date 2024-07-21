import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";


const firebaseConfig = {
  apiKey: "AIzaSyB5HNjGUMRfpjWc21WZJ_j0ey2yvcw_t78",
  authDomain: "e-commerce-coderhouse-0724.firebaseapp.com",
  projectId: "e-commerce-coderhouse-0724",
  storageBucket: "e-commerce-coderhouse-0724.appspot.com",
  messagingSenderId: "329970518420",
  appId: "1:329970518420:web:25d8329f5086bca0036781"
};


const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);