// src/lib/firebase.ts
import { initializeApp, getApps, FirebaseApp } from "firebase/app";
import { getAuth, GoogleAuthProvider, signInWithPopup, Auth } from "firebase/auth";

const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN,
  projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID,
  storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID,
  appId: import.meta.env.VITE_FIREBASE_APP_ID,
};

let app: FirebaseApp | null = null;
let auth: Auth | null = null;
const googleProvider = new GoogleAuthProvider();

export const getFirebaseApp = () => {
  if (!app) {
    if (!firebaseConfig.apiKey) {
      console.error("Firebase API Key is missing. Check your VITE_FIREBASE_API_KEY environment variable.");
      return null;
    }
    if (getApps().length === 0) {
      app = initializeApp(firebaseConfig);
    } else {
      app = getApps()[0];
    }
  }
  return app;
};

export const getFirebaseAuth = () => {
  const firebaseApp = getFirebaseApp();
  if (!auth && firebaseApp) {
    auth = getAuth(firebaseApp);
  }
  return auth;
};

export { googleProvider };

export const signInWithGoogle = async () => {
  const firebaseAuth = getFirebaseAuth();
  if (!firebaseAuth) {
    throw new Error("Firebase is not configured. Please check your environment variables.");
  }
  try {
    const result = await signInWithPopup(firebaseAuth, googleProvider);
    return result.user;
  } catch (error: any) {
    if (error?.code !== 'auth/popup-closed-by-user' && error?.code !== 'auth/cancelled-popup-request') {
      console.error("Error signing in with Google:", error);
    }
    throw error;
  }
};
