// src/lib/firebase.ts
import { initializeApp, getApps, FirebaseApp } from "firebase/app";
import { getAuth, GoogleAuthProvider, signInWithPopup, signInWithRedirect, getRedirectResult, Auth } from "firebase/auth";

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
    const apiKey = import.meta.env.VITE_FIREBASE_API_KEY;
    if (!apiKey) {
      console.error("Firebase API Key is missing in the browser environment. Please ensure VITE_FIREBASE_API_KEY is set.");
      // Fallback: try to see if it's available in some other way or just return null
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

export const signInWithGoogle = async (useRedirect = false) => {
  const firebaseAuth = getFirebaseAuth();
  if (!firebaseAuth) {
    console.error("Auth object is null during signInWithGoogle call.");
    throw new Error("Firebase Auth could not be initialized. Missing config?");
  }
  try {
    if (useRedirect || (window.self !== window.top)) {
       console.log("Using Redirect instead of Popup (due to iframe or manual request)...");
       return await signInWithRedirect(firebaseAuth, googleProvider);
    }
    console.log("Attempting Google Sign-In with Popup...");
    const result = await signInWithPopup(firebaseAuth, googleProvider);
    console.log("Google Sign-In successful for:", result.user.email);
    return result.user;
  } catch (error: any) {
    console.error("Full Firebase Auth Error:", error);
    if (error?.code !== 'auth/popup-closed-by-user' && error?.code !== 'auth/cancelled-popup-request') {
      console.error("Error signing in with Google:", error);
    }
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
    console.error("Error getting redirect result:", error);
    return null;
  }
};

