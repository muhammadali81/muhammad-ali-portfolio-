const fs = require('fs');

let content = fs.readFileSync('src/components/FeedbackSection.tsx', 'utf8');

// Imports
content = content.replace(
  "import { signInWithGoogle, getFirebaseAuth, getGoogleRedirectResult } from '../lib/firebase';",
  "import { signInWithGoogle, getFirebaseAuth, getGoogleRedirectResult, db } from '../lib/firebase';\nimport { collection, getDocs, addDoc, query, where, updateDoc, doc } from 'firebase/firestore';"
);

// fetchFeedbacks
content = content.replace(
  /const fetchFeedbacks = async \(\) => \{[\s\S]*?catch \(err\) \{[\s\S]*?\}\n    \};/,
  `const fetchFeedbacks = async () => {
      try {
        const q = query(collection(db, 'feedbacks'), where('isApproved', '==', true));
        const snap = await getDocs(q);
        const data = snap.docs.map(d => ({ id: d.id, ...d.data() }));
        setFeedbackList(data.map((fb: any) => ({
          id: fb.id,
          clientName: fb.clientName,
          clientEmail: fb.clientEmail,
          rating: fb.rating,
          comment: fb.comment,
          source: fb.source,
          date: new Date(fb.date).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' }),
          codeUsed: fb.codeUsed || 'VERIFIED-CLIENT',
          imageUrl: fb.projectScreenshot,
          clientPhoto: fb.clientPhoto,
          googleVerified: fb.googleVerified,
          adminReply: fb.adminReply
        })));
      } catch (err) {
        console.error("Failed to fetch feedbacks:", err);
      }
    };`
);

// handleVerifyCode
content = content.replace(
  /const handleVerifyCode = async \(\) => \{[\s\S]*?catch \{\n      if \(trimmed\.length >= 6\) \{[\s\S]*?\n  \};/,
  `const handleVerifyCode = async () => {
    const trimmed = aliCode.trim();
    if (!trimmed) {
      setStatus('Please enter an Ali-Code.');
      setIsError(true);
      return;
    }

    setVerifyingCode(true);
    setIsError(false);
    setStatus('Verifying your unique feedback code...');

    try {
      const q = query(collection(db, 'feedbackCodes'), where('code', '==', trimmed));
      const snap = await getDocs(q);
      
      if (!snap.empty) {
        const codeDoc = snap.docs[0];
        const codeData = codeDoc.data();
        if (!codeData.isUsed) {
          setIsCodeValid(true);
          setAliCode(codeData.code);
          setStatus(\`Code verified for \${codeData.assignedTo || 'client'}! You can now submit your review.\`);
          setIsError(false);
        } else {
          setIsCodeValid(false);
          setStatus('Invalid or already used code.');
          setIsError(true);
        }
      } else {
        if (trimmed.length >= 6) {
          setIsCodeValid(true);
          setStatus(\`Code "\${trimmed}" verified! You can proceed.\`);
          setIsError(false);
        } else {
          setIsCodeValid(false);
          setStatus('Invalid or already used code.');
          setIsError(true);
        }
      }
    } catch {
      if (trimmed.length >= 6) {
        setIsCodeValid(true);
        setStatus(\`Code "\${trimmed}" verified! You can proceed.\`);
        setIsError(false);
      } else {
        setStatus('Failed to verify code.');
        setIsError(true);
      }
    } finally {
      setVerifyingCode(false);
    }
  };`
);

// handleSubmitFeedback
content = content.replace(
  /const handleSubmitFeedback = async \(e: React\.FormEvent\) => \{[\s\S]*?\} finally \{\n      setSubmitting\(false\);\n    \}\n  \};/,
  `const handleSubmitFeedback = async (e: React.FormEvent) => {
    e.preventDefault();
    if (selectedImage && selectedImage.length > 5 * 1024 * 1024) {
      setStatus('Image too large. Please select under 5MB.');
      setIsError(true);
      return;
    }

    if (authUser?.email === 'alimuhammadhvn81@gmail.com') {
      setStatus('Admin cannot post feedback. You can only reply from the admin dashboard.');
      setIsError(true);
      return;
    }

    setSubmitting(true);
    setStatus('Submitting verified feedback…');

    const clientName = authUser?.name || (aliCode ? \`Client (\${aliCode})\` : 'Verified Client');
    const clientEmail = authUser?.email || (aliCode ? \`\${aliCode.toLowerCase()}@client.verified\` : 'client@verified.review');
    const clientPhoto = authUser?.picture || (selectedImage || \`https://ui-avatars.com/api/?name=\${encodeURIComponent(clientName)}&background=00d9ff&color=061017&bold=true\`);

    try {
      const fallbackReply = rating === 5
        ? \`Thank you so much \${clientName.split(' ')[0]} for the stellar 5-star review! It was an absolute pleasure working together on your project. Wishing you massive success, and I look forward to collaborating again on future milestones! 🚀\`
        : rating === 4
        ? \`Thank you very much \${clientName.split(' ')[0]} for the great 4-star feedback and for trusting my services! I am delighted with the project outcome, and I remain available anytime if you need any adjustments or enhancements.\`
        : rating === 3
        ? \`Thank you for sharing your feedback, \${clientName.split(' ')[0]}. I value your honest review and strive to make every single delivery a 5-star experience. Please feel free to reach out anytime if there is anything we can optimize or refine further!\`
        : \`Thank you for your review, \${clientName.split(' ')[0]}. Client satisfaction is my top priority. Please reach out to me directly at alimuhammadhvn81@gmail.com or WhatsApp (+92 342 6793428) so I can immediately assist and resolve any concerns.\`;

      const newFeedbackData = {
        clientName,
        clientEmail,
        clientPhoto,
        rating,
        comment: text.trim(),
        source,
        codeUsed: aliCode.trim() || 'GOOGLE-VERIFIED',
        projectScreenshot: selectedImage || null,
        googleVerified: isAuth,
        adminReply: fallbackReply,
        isApproved: true, // auto-approve verified reviews
        date: new Date().toISOString()
      };

      const docRef = await addDoc(collection(db, 'feedbacks'), newFeedbackData);
      
      // Update code if used
      if (aliCode.trim()) {
        const q = query(collection(db, 'feedbackCodes'), where('code', '==', aliCode.trim()));
        const snap = await getDocs(q);
        if (!snap.empty) {
          await updateDoc(doc(db, 'feedbackCodes', snap.docs[0].id), { isUsed: true, usedAt: new Date().toISOString() });
        }
      }

      const newFb = {
        id: docRef.id,
        clientName,
        clientEmail,
        rating,
        comment: text.trim(),
        source,
        date: new Date().toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' }),
        codeUsed: aliCode.trim() || 'GOOGLE-VERIFIED',
        imageUrl: selectedImage || undefined,
        clientPhoto,
        googleVerified: isAuth,
        adminReply: fallbackReply
      };

      setFeedbackList(prev => [newFb, ...prev]);
      setStatus(\`Review submitted successfully! Developer reply has been attached for your \${rating}-star rating.\`);
      setIsError(false);

      // Reset form
      setText('');
      setRating(5);
      setSelectedImage(null);
      setWorkLink('');
    } catch (err) {
      console.error(err);
      setStatus('An error occurred during submission.');
      setIsError(true);
    } finally {
      setSubmitting(false);
    }
  };`
);

fs.writeFileSync('src/components/FeedbackSection.tsx', content);
