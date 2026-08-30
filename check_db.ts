import { db } from './src/db';
import { feedback } from './src/db/schema';
async function check() {
  const all = await db.select().from(feedback);
  console.log('Feedback count:', all.length);
  process.exit(0);
}
check();
