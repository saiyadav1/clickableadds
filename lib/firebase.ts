import { initializeApp, getApps, getApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

// const firebaseConfig = {
//   apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
//   authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
//   projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
//   storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
//   messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
//   appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID,
//   measurementId: "G-E3HK3MYFXG"
// };



const firebaseConfig = {
  apiKey: "AIzaSyCKAYgW0Ykn7gyYHpTfspn5IpN4WSi79JY",
  authDomain: "clickable-adds.firebaseapp.com",
  projectId: "clickable-adds",
  storageBucket: "clickable-adds.firebasestorage.app",
  messagingSenderId: "914117343196",
  appId: "1:914117343196:web:25335e5b0fb0c43a684119",
  measurementId: "G-E3HK3MYFXG"
};

const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();

export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);
