import { initializeApp, getApps, getApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDpVfpqW3dN8G2VkHfZgYaiK5UhAV7o-dA",
  authDomain: "daksha-2f39a.firebaseapp.com",
  projectId: "daksha-2f39a",
  storageBucket: "daksha-2f39a.firebasestorage.app",
  messagingSenderId: "367424545901",
  appId: "1:367424545901:web:97467e075edb9ef1bacb64",
  measurementId: "G-W4MZZXFTHF",
};

// Initialize Firebase
const app = !getApps.length ? initializeApp(firebaseConfig) : getApp();

export const auth = getAuth(app);
export const db = getFirestore(app);
