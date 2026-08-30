import { initializeApp } from "firebase/app";
import { getAuth, signInWithEmailAndPassword, createUserWithEmailAndPassword } from "firebase/auth";
import fs from 'fs';

const config = JSON.parse(fs.readFileSync('./firebase-applet-config.json', 'utf8'));
const app = initializeApp(config);
const auth = getAuth(app);

async function testAuth() {
  const email = "admin_server@portfolio.local";
  const pass = "SuperSecretPassword123!";
  try {
    const userCredential = await signInWithEmailAndPassword(auth, email, pass);
    console.log("Signed in:", userCredential.user.uid);
  } catch(e) {
    if (e.code === 'auth/user-not-found' || e.code === 'auth/invalid-credential') {
      try {
        const userCredential = await createUserWithEmailAndPassword(auth, email, pass);
        console.log("Created user:", userCredential.user.uid);
      } catch (err) {
        console.error("Failed to create:", err.message);
      }
    } else {
      console.error("Error signing in:", e.message);
    }
  }
}
testAuth();
