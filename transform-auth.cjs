const fs = require('fs');

let content = fs.readFileSync('src/lib/firebase.ts', 'utf8');

content = content.replace(
  /\/\*\*[\s\S]*?export const signInWithGoogle = async \(\): Promise<GoogleUserProfile> => \{[\s\S]*?throw new Error\("Google Identity could not be initialized\."\);\n\};/,
  `export const signInWithGoogle = async (): Promise<GoogleUserProfile> => {
  const firebaseAuth = getFirebaseAuth();
  if (firebaseAuth) {
    try {
      const result = await signInWithPopup(firebaseAuth, googleProvider);
      if (result?.user) {
        return {
          name: result.user.displayName || "Verified Client",
          email: result.user.email || "",
          picture: result.user.photoURL || \`https://ui-avatars.com/api/?name=\${encodeURIComponent(result.user.displayName || "Client")}&background=00d9ff&color=061017&bold=true\`,
          provider: 'Google'
        };
      }
    } catch (fbError: any) {
      console.error("Firebase Popup Auth Error:", fbError);
      throw fbError;
    }
  }
  throw new Error("Google Identity could not be initialized.");
};`
);

fs.writeFileSync('src/lib/firebase.ts', content);
