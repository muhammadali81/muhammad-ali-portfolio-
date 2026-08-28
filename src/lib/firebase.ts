// src/lib/firebase.ts
import { initializeApp, getApps, FirebaseApp } from "firebase/app";
import { getAuth, GoogleAuthProvider, signInWithPopup, signInWithRedirect, getRedirectResult, Auth } from "firebase/auth";

// These values are sourced from the provisioned Firebase project for this applet
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY || "AIzaSyDDocF1doKNDFgQPaANDbUnPWvj7q1b3m0",
  authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN || "rugged-objective-d7dgj.firebaseapp.com",
  projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID || "rugged-objective-d7dgj",
  storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET || "rugged-objective-d7dgj.firebasestorage.app",
  messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID || "973064181447",
  appId: import.meta.env.VITE_FIREBASE_APP_ID || "1:973064181447:web:0bc14d9d39a3c39bec90e2",
};

let app: FirebaseApp | null = null;
let auth: Auth | null = null;
const googleProvider = new GoogleAuthProvider();
googleProvider.setCustomParameters({ prompt: 'select_account' });

export const getFirebaseApp = () => {
  if (!app) {
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
  if (!firebaseAuth) throw new Error("Firebase Auth could not be initialized.");

  try {
    console.log("Opening Google Sign-In Popup...");
    const result = await signInWithPopup(firebaseAuth, googleProvider);
    return result.user;
  } catch (error: any) {
    console.error("Firebase Auth Error:", error);
    throw error;
  }
};

export const getGoogleRedirectResult = async () => {
  const firebaseAuth = getFirebaseAuth();
  if (!firebaseAuth) return null;
  try {
    const result = await getRedirectResult(firebaseAuth);
    return result?.user || null;
  } catch (error) {
    // Redirect not used inside iframe to avoid 403
    return null;
  }
};
