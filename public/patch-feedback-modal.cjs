const fs = require('fs');
let content = fs.readFileSync('src/components/FeedbackSection.tsx', 'utf8');

// Remove the overlay modal completely
content = content.replace(
  /\{.*?isSigningInWithGoogle && \(\s*<div className="fixed inset-0 z-50 flex items-center[\s\S]*?<\/div>\s*\)\}/,
  ""
);

// We can just set it to not render that. I will use a precise replace or just use string split/join.
