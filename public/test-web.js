import { initializeApp } from "firebase/app";
import { getFirestore, collection, getDocs, doc, setDoc } from "firebase/firestore";
import fs from 'fs';

const config = JSON.parse(fs.readFileSync('./firebase-applet-config.json', 'utf8'));

const app = initializeApp(config);
const db = getFirestore(app, config.firestoreDatabaseId);

async function run() {
  try {
    await setDoc(doc(db, "test", "1"), { hello: "world" });
    console.log("Write success!");
    const snap = await getDocs(collection(db, "test"));
    console.log("Read success:", snap.size);
  } catch(e) {
    console.error("Error:", e);
  }
}
run();
