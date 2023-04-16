import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAX6sUfsn3LETcgPuuMRcqMMPrkcBJxnzg",
  authDomain: "fundpe-28b3f.firebaseapp.com",
  projectId: "fundpe-28b3f",
  storageBucket: "fundpe-28b3f.appspot.com",
  messagingSenderId: "531122555343",
  appId: "1:531122555343:web:0bce242f6d1fef78736aba",
  measurementId: "G-KHE0YSZC5L",
};

export const app = initializeApp(firebaseConfig);
export const database = getFirestore(app);
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();
