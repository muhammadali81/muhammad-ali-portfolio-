const fs = require('fs');

let content = fs.readFileSync('src/components/FeedbackSection.tsx', 'utf8');

// Replace handleLaunchOfficialGoogleOAuth
content = content.replace(
  /const handleLaunchOfficialGoogleOAuth = async \(\) => \{[\s\S]*?const handleConfirmGoogleIdentity/m,
  `const handleLaunchOfficialGoogleOAuth = async () => {
    setIsError(false);
    setIsSigningInWithGoogle(true);
    setStatus('Opening official Google Sign-In...');

    try {
      const user = await signInWithGoogle();
      if (user && user.email) {
        setAuthUser({
          name: user.name || 'Verified User',
          email: user.email,
          picture: user.picture || \`https://ui-avatars.com/api/?name=\${encodeURIComponent(user.name || 'User')}&background=1a73e8&color=ffffff\`,
          provider: 'Google'
        });
        setIsAuth(true);
        setStatus(\`Google Account verified for \${user.name}!\`);
      }
    } catch (err: any) {
      console.warn("Client Google Sign-In Error:", err);
      if (err.message?.includes('popup')) {
        setStatus('Please allow popups for this site to sign in with Google.');
      } else {
        setStatus('Google sign-in failed. Please try again.');
      }
      setIsError(true);
    } finally {
      setIsSigningInWithGoogle(false);
    }
  };

  const handleConfirmGoogleIdentity`
);

// We can also remove `handleConfirmGoogleIdentity` if it's not used anywhere else.
// Let's check if it's used elsewhere.

fs.writeFileSync('src/components/FeedbackSection.tsx', content);
