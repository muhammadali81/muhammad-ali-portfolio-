import { initializeApp } from "firebase-admin/app";
import { getFirestore } from "firebase-admin/firestore";
import fs from 'fs';

async function seed() {
  const config = JSON.parse(fs.readFileSync('./firebase-applet-config.json', 'utf8'));
  
  // Note: This script assumes it has environment credentials for firebase-admin
  // In AI Studio, we usually don't have a service account key directly, 
  // but we can try initializing with project ID if running in a GCP environment.
  
  try {
    const app = initializeApp({
      projectId: config.projectId
    });
    const db = getFirestore(app);
    
    const statsRef = db.collection('site_stats').doc('global');
    const snap = await statsRef.get();
    
    if (!snap.exists) {
      console.log("Seeding global stats...");
      await statsRef.set({
        profileViews: 168,
        satisfiedClients: 0,
        unsatisfiedClients: 0,
        positiveReactions: 54,
        negativeReactions: 0
      });
      console.log("Stats seeded successfully.");
    } else {
      console.log("Global stats already exist.");
    }
  } catch (err) {
    console.error("Seed failed:", err);
  }
}

seed();
