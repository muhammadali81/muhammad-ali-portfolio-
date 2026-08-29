const fs = require('fs');

let content = fs.readFileSync('src/admin/AdminApp.tsx', 'utf8');

// We will just patch the functions
content = content.replace(
  "import React, { useState, useEffect } from 'react';",
  "import React, { useState, useEffect } from 'react';\nimport { db, signInWithGoogle } from '../lib/firebase';\nimport { collection, getDocs, doc, setDoc, updateDoc, deleteDoc, query, orderBy, addDoc } from 'firebase/firestore';"
);

// handleLogin
content = content.replace(
  /const handleLogin = async \(e: React\.FormEvent\) => \{[\s\S]*?catch \(err\) \{[\s\S]*?\}\n  \};/,
  `const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setIsLoading(true);
    try {
      if (email.toLowerCase() === 'alimuhammadhvn81@gmail.com' && password === 'Ali2007') {
        const user = await signInWithGoogle();
        if (user.email === 'alimuhammadhvn81@gmail.com') {
          setIsAuthenticated(true);
        } else {
          setError('Unauthorized Google Account.');
        }
      } else {
        setError('Invalid credentials.');
      }
    } catch (err) {
      setError('Login failed.');
    } finally {
      setIsLoading(false);
    }
  };`
);

// loadData
content = content.replace(
  /const loadData = async \(\) => \{[\s\S]*?setStats\(sData\);[\s\S]*?catch \(err\) \{[\s\S]*?\}\n  \};/,
  `const loadData = async () => {
    setIsRefreshing(true);
    try {
      const fSnap = await getDocs(query(collection(db, 'feedbacks')));
      const fData = fSnap.docs.map(d => ({ id: d.id, ...d.data() }));
      setFeedbacks(fData);

      const cSnap = await getDocs(query(collection(db, 'feedbackCodes')));
      const cData = cSnap.docs.map(d => ({ id: d.id, ...d.data() }));
      setCodes(cData);

      const iSnap = await getDocs(query(collection(db, 'inquiries')));
      const iData = iSnap.docs.map(d => ({ id: d.id, ...d.data() }));
      setInquiries(iData);
      
      setStats({
        profileViews: 120,
        satisfiedClients: fData.filter(f => f.isApproved).length,
        projectsCompleted: 85,
        globalReach: 12
      });
    } catch (err) {
      console.error(err);
    } finally {
      setIsRefreshing(false);
    }
  };`
);

// handleGenerateCode
content = content.replace(
  /const handleGenerateCode = async \(assignedTo: string\) => \{[\s\S]*?catch \(err\) \{\}[\s\S]*?\n  \};/,
  `const handleGenerateCode = async (assignedTo: string) => {
    try {
      const newCode = {
        code: \`Ali-\${Math.random().toString(36).substring(2, 8).toUpperCase()}\`,
        assignedTo: assignedTo || "Client",
        isUsed: false,
        createdAt: new Date().toISOString()
      };
      const docRef = await addDoc(collection(db, 'feedbackCodes'), newCode);
      setCodes(prev => [{ id: docRef.id, ...newCode }, ...prev]);
    } catch (err) {}
  };`
);

// handleDeleteCode
content = content.replace(
  /const handleDeleteCode = async \(id: string\) => \{[\s\S]*?catch \{\} \n  \};/,
  `const handleDeleteCode = async (id: string) => {
    try {
      await deleteDoc(doc(db, 'feedbackCodes', id));
      setCodes(prev => prev.filter(c => c.id !== id));
    } catch {} 
  };`
);

// handleToggleCode
content = content.replace(
  /const handleToggleCode = async \(id: string\) => \{[\s\S]*?catch \{\} \n  \};/,
  `const handleToggleCode = async (id: string) => {
    try {
      const code = codes.find(c => c.id === id);
      if (code) {
        await updateDoc(doc(db, 'feedbackCodes', id), { isUsed: !code.isUsed });
        setCodes(prev => prev.map(c => c.id === id ? { ...c, isUsed: !c.isUsed } : c));
      }
    } catch {} 
  };`
);

// handleApproveFeedback
content = content.replace(
  /const handleApproveFeedback = async \(id: string\) => \{[\s\S]*?catch \{\} \n  \};/,
  `const handleApproveFeedback = async (id: string) => {
    try {
      await updateDoc(doc(db, 'feedbacks', id), { isApproved: true });
      setFeedbacks(prev => prev.map(f => f.id === id ? { ...f, isApproved: true } : f));
    } catch {} 
  };`
);

// handleReplyFeedback
content = content.replace(
  /const handleReplyFeedback = async \(id: string\) => \{[\s\S]*?catch \{\} \n  \};/,
  `const handleReplyFeedback = async (id: string) => {
    try {
      const reply = "Thank you for the review!";
      await updateDoc(doc(db, 'feedbacks', id), { adminReply: reply });
      setFeedbacks(prev => prev.map(f => f.id === id ? { ...f, adminReply: reply } : f));
    } catch {} 
  };`
);

// handleDeleteFeedback
content = content.replace(
  /const handleDeleteFeedback = async \(id: string\) => \{[\s\S]*?catch \{\} \n  \};/,
  `const handleDeleteFeedback = async (id: string) => {
    try {
      await deleteDoc(doc(db, 'feedbacks', id));
      setFeedbacks(prev => prev.filter(f => f.id !== id));
    } catch {} 
  };`
);

// handleUpdateInquiryStatus
content = content.replace(
  /const handleUpdateInquiryStatus = async \(id: string, status: 'New' \| 'Read' \| 'Replied'\) => \{[\s\S]*?catch \{\} \n  \};/,
  `const handleUpdateInquiryStatus = async (id: string, status: 'New' | 'Read' | 'Replied') => {
    try {
      await updateDoc(doc(db, 'inquiries', id), { status });
      setInquiries(prev => prev.map(i => i.id === id ? { ...i, status } : i));
    } catch {} 
  };`
);

// handleDeleteInquiry
content = content.replace(
  /const handleDeleteInquiry = async \(id: string\) => \{[\s\S]*?catch \{\} \n  \};/,
  `const handleDeleteInquiry = async (id: string) => {
    try {
      await deleteDoc(doc(db, 'inquiries', id));
      setInquiries(prev => prev.filter(i => i.id !== id));
    } catch {} 
  };`
);

fs.writeFileSync('src/admin/AdminApp.tsx', content);
