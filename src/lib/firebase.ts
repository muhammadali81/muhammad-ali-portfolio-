// src/lib/firebase.ts
import { initializeApp, getApps, FirebaseApp, getApp } from "firebase/app";
import { getAuth, GoogleAuthProvider, signInWithPopup, getRedirectResult, Auth, browserPopupRedirectResolver } from "firebase/auth";
import { getFirestore, initializeFirestore, CACHE_SIZE_UNLIMITED, Firestore } from 'firebase/firestore';
import firebaseConfig from '../../firebase-applet-config.json';

export const GOOGLE_CLIENT_ID = import.meta.env.VITE_GOOGLE_CLIENT_ID || firebaseConfig.oAuthClientId || "1057584179825-ebgauidoppj7qfc4d3lrf99c7rokag9c.apps.googleusercontent.com";

// Singleton-ish initialization
let appInstance: FirebaseApp;
let authInstance: Auth;
let googleProviderInstance: GoogleAuthProvider;

export const getFirebaseApp = () => {
  if (!appInstance) {
    const apps = getApps();
    appInstance = apps.length === 0 ? initializeApp(firebaseConfig) : apps[0];
  }
  return appInstance;
};

let dbInstance: Firestore | null = null;

// Simplified Firestore access to avoid assertion errors and fix connectivity
export const getDb = (): Firestore => {
  if (dbInstance) return dbInstance;
  
  const app = getFirebaseApp();
  try {
    dbInstance = initializeFirestore(app, {
      cacheSizeBytes: CACHE_SIZE_UNLIMITED,
      experimentalForceLongPolling: true,
      ignoreUndefinedProperties: true,
    }, (firebaseConfig as any).firestoreDatabaseId || "(default)");
  } catch (e) {
    // If already initialized (e.g. during HMR), use getFirestore
    dbInstance = getFirestore(app, (firebaseConfig as any).firestoreDatabaseId || "(default)");
  }
  return dbInstance;
};

export const getFirebaseAuth = () => {
  if (!authInstance) {
    const app = getFirebaseApp();
    authInstance = getAuth(app);
  }
  return authInstance;
};

export const getGoogleProvider = () => {
  if (!googleProviderInstance) {
    googleProviderInstance = new GoogleAuthProvider();
    googleProviderInstance.setCustomParameters({ prompt: 'select_account' });
  }
  return googleProviderInstance;
};

// Standard exports that initialize correctly
export const db = getDb();
export const auth = getFirebaseAuth();
export const googleProvider = getGoogleProvider();

export interface GoogleUserProfile {
  name: string;
  email: string;
  picture: string;
  provider: 'Google';
}

const ensureGoogleGIS = (): Promise<boolean> => {
  return new Promise((resolve) => {
    if (typeof window === "undefined") {
      resolve(false);
      return;
    }
    if ((window as any).google?.accounts?.oauth2) {
      resolve(true);
      return;
    }
    const existing = document.querySelector('script[src*="accounts.google.com/gsi/client"]');
    if (existing) {
      let attempts = 0;
      const interval = setInterval(() => {
        attempts++;
        if ((window as any).google?.accounts?.oauth2) {
          clearInterval(interval);
          resolve(true);
        } else if (attempts > 40) { // 2 seconds
          clearInterval(interval);
          resolve(false);
        }
      }, 50);
      return;
    }
    const script = document.createElement('script');
    script.src = 'https://accounts.google.com/gsi/client';
    script.async = true;
    script.defer = true;
    script.onload = () => {
      let attempts = 0;
      const interval = setInterval(() => {
        attempts++;
        if ((window as any).google?.accounts?.oauth2) {
          clearInterval(interval);
          resolve(true);
        } else if (attempts > 20) {
          clearInterval(interval);
          resolve(false);
        }
      }, 50);
    };
    script.onerror = () => resolve(false);
    document.head.appendChild(script);
  });
};

export const signInWithGoogle = async (): Promise<GoogleUserProfile> => {
  // Method 1: Google Identity Services (GIS) Token Client (100% Direct Google OAuth - No 404)
  await ensureGoogleGIS();
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
              if (!res.ok) {
                reject(new Error(`Google userinfo returned status ${res.status}`));
                return;
              }
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
          provider: 'Google'
        };
      }
    } catch (fbError: any) {
      console.error("Firebase Popup Auth Error:", fbError);
      if (fbError.message?.includes('referer') || fbError.code?.includes('unauthorized-domain') || fbError.code?.includes('referer-blocked')) {
        throw new Error("AUTH DOMAIN PENDING: If you have already added the domain, please refresh and wait 2-3 minutes. Google services sometimes take a moment to sync new authorized domains.");
      }
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
