// src/lib/firebase.ts
import { initializeApp, getApps, FirebaseApp } from "firebase/app";
import { getAuth, GoogleAuthProvider, signInWithPopup, getRedirectResult, Auth } from "firebase/auth";
import { getFirestore } from 'firebase/firestore';
import firebaseConfig from '../../firebase-applet-config.json';

export const GOOGLE_CLIENT_ID = import.meta.env.VITE_GOOGLE_CLIENT_ID || firebaseConfig.oAuthClientId || "456371132973-jmra1kk9au7un81au95vm3mg5e8feud5.apps.googleusercontent.com";

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

export const db = getFirestore(getFirebaseApp(), firebaseConfig.firestoreDatabaseId);
