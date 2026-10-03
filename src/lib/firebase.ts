import { initializeApp, getApps, getApp } from "firebase/app";
import { getAnalytics, isSupported } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyC9NPl9DpjCE4sjSjmQ1FhCR3Wzha39-Oo",
  authDomain: "build-your-personal-webpage.firebaseapp.com",
  projectId: "build-your-personal-webpage",
  storageBucket: "build-your-personal-webpage.firebasestorage.app",
  messagingSenderId: "835535854975",
  appId: "1:835535854975:web:9db7517b5de794e4da0e4a",
  measurementId: "G-3SWJCYYL6M"
};

// Initialize Firebase (singleton pattern safe for SSR/Client)
export const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();

// Initialize Analytics conditionally only in browser environment
export let analytics: any = null;
if (typeof window !== "undefined") {
  isSupported().then((supported) => {
    if (supported) {
      analytics = getAnalytics(app);
    }
  });
}
