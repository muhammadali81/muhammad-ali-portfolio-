export const GOOGLE_CLIENT_ID = import.meta.env.VITE_GOOGLE_CLIENT_ID || "456371132973-jmra1kk9au7un81au95vm3mg5e8feud5.apps.googleusercontent.com";

let app: FirebaseApp | null = null;
let auth: Auth | null = null;
let provider: GoogleAuthProvider | null = null;

try {
  app = getApps().length > 0 ? getApps()[0] : initializeApp(firebaseConfig);
  auth = getAuth(app);
  provider = new GoogleAuthProvider();
  
  // Configure Google provider options
  provider.setCustomParameters({
    prompt: 'select_account'
  });
  provider.addScope('profile');
  provider.addScope('email');
  
} catch (error) {
  console.warn("Firebase initialization skipped (usually expected in server context):", error);
}
