const fs = require('fs');

let content = fs.readFileSync('src/components/FeedbackSection.tsx', 'utf8');

// Remove activeSigningEmail
content = content.replace(/const \[activeSigningEmail, setActiveSigningEmail\] = useState\(''\);\n/g, '');

// Remove handleConfirmGoogleIdentity
content = content.replace(
  /const handleConfirmGoogleIdentity = \(name: string, email: string\) => \{[\s\S]*?\}, 500\);\n  \};/m,
  ''
);

fs.writeFileSync('src/components/FeedbackSection.tsx', content);
