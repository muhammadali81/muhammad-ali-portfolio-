import { initializeApp, applicationDefault } from 'firebase-admin/app';
import { getFirestore } from 'firebase-admin/firestore';
import fs from 'fs';

const config = JSON.parse(fs.readFileSync('./firebase-applet-config.json', 'utf8'));

try {
  const app = initializeApp({
    credential: applicationDefault(),
    projectId: config.projectId
  });
  
  // Note: getting named database in admin SDK
  const db = getFirestore(app, config.firestoreDatabaseId);
  
  async function run() {
    await db.collection("test").doc("1").set({ hello: "admin" });
    console.log("Admin write success");
  }
  run();
} catch(e) {
  console.error(e);
}
