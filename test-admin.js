import admin from 'firebase-admin';
import fs from 'fs';

const config = JSON.parse(fs.readFileSync('./firebase-applet-config.json', 'utf8'));

admin.initializeApp({
  projectId: config.projectId,
});

try {
  const db = admin.firestore();
  // We need to use the specific database
  console.log("Firebase Admin loaded.");
} catch(e) {
  console.error("Error:", e);
}
