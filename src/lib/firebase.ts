// src/lib/firebase.ts
import { initializeApp, getApps, FirebaseApp } from "firebase/app";
import { getAuth, GoogleAuthProvider, signInWithPopup, getRedirectResult, Auth } from "firebase/auth";

// Sourced from the provisioned Firebase project for this applet
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY || "AIzaSyDDocF1doKNDFgQPaANDbUnPWvj7q1b3m0",
  authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN || "rugged-objective-d7dgj.firebaseapp.com",
  projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID || "rugged-objective-d7dgj",
  storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET || "rugged-objective-d7dgj.firebasestorage.app",
  messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID || "973064181447",
  appId: import.meta.env.VITE_FIREBASE_APP_ID || "1:973064181447:web:0bc14d9d39a3c39bec90e2",
};

export const GOOGLE_CLIENT_ID = "973064181447-j731ukhsltta6c47fks7holhcr40pgga.apps.googleusercontent.com";

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

export interface GoogleUserProfile {
  name: string;
  email: string;
  picture: string;
  provider: 'Google';
}

/**
 * Initiates Google Identity sign-in using Google Identity Services (GIS)
 * with graceful fallback to Firebase Popup.
 */
export const signInWithGoogle = async (): Promise<GoogleUserProfile> => {
  // Method 1: Google Identity Services (GIS) Token Client (Authentic Google Account OAuth)
  if (typeof window !== "undefined" && (window as any).google?.accounts?.oauth2) {
    try {
      const userProfile = await new Promise<GoogleUserProfile>((resolve, reject) => {
        const client = (window as any).google.accounts.oauth2.initTokenClient({
          client_id: GOOGLE_CLIENT_ID,
          scope: "openid profile email",
          callback: async (tokenResponse: any) => {
            if (tokenResponse.error) {
              reject(new Error(tokenResponse.error_description || tokenResponse.error));
              return;
            }
            try {
              const res = await fetch("https://www.googleapis.com/oauth2/v3/userinfo", {
                headers: { Authorization: `Bearer ${tokenResponse.access_token}` },
              });
              const info = await res.json();
              if (info && (info.email || info.name)) {
                resolve({
                  name: info.name || info.given_name || "Verified Client",
                  email: info.email || "client.review@gmail.com",
                  picture: info.picture || `https://ui-avatars.com/api/?name=${encodeURIComponent(info.name || "Client")}&background=00d9ff&color=061017&bold=true`,
                  provider: "Google"
                });
              } else {
                reject(new Error("Unable to retrieve Google user profile"));
              }
            } catch (err) {
              reject(err);
            }
          },
          error_callback: (err: any) => {
            reject(new Error(err?.message || "Google popup closed"));
          }
        });

        client.requestAccessToken({ prompt: "select_account" });
      });

      if (userProfile) return userProfile;
    } catch (gisError) {
      console.warn("GIS token flow failed, falling back to Firebase popup:", gisError);
    }
  }

  // Method 2: Firebase signInWithPopup
  const firebaseAuth = getFirebaseAuth();
  if (firebaseAuth) {
    try {
      const result = await signInWithPopup(firebaseAuth, googleProvider);
      if (result?.user) {
        return {
          name: result.user.displayName || "Verified Client",
          email: result.user.email || "",
          picture: result.user.photoURL || `https://ui-avatars.com/api/?name=${encodeURIComponent(result.user.displayName || "Client")}&background=00d9ff&color=061017&bold=true`,
          provider: "Google"
        };
      }
    } catch (fbError: any) {
      console.error("Firebase Popup Auth Error:", fbError);
      throw fbError;
    }
  }

  throw new Error("Google Identity could not be initialized.");
};

export const getGoogleRedirectResult = async () => {
  const firebaseAuth = getFirebaseAuth();
  if (!firebaseAuth) return null;
  try {
    const result = await getRedirectResult(firebaseAuth);
    return result?.user || null;
  } catch {
    return null;
  }
};

