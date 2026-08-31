import React, { useState, useRef, useEffect } from 'react';
import { HOW_DO_YOU_KNOW_OPTIONS } from '../data/portfolioData';
import { collection, addDoc, getDocs, query, where, orderBy, updateDoc, doc } from 'firebase/firestore';
import { getDb, signInWithGoogle, getFirebaseAuth } from '../lib/firebase';
import { onAuthStateChanged } from 'firebase/auth';
import {
  Upload,
  Image as ImageIcon,
  CheckCircle2,
  X,
  ShieldCheck,
  Star,
  Search,
  ExternalLink,
  MessageSquare,
  AlertCircle,
  KeyRound,
  UserCheck,
  Sparkles,
  ArrowRight
} from 'lucide-react';

interface FeedbackCardData {
  id: string;
  clientName: string;
  clientEmail: string;
  rating: number;
  comment: string;
  source: string;
  date: string;
  codeUsed: string;
  workLink?: string;
  imageUrl?: string;
  projectImages?: string[];
  attachmentLinks?: string[];
  clientPhoto?: string;
  avatarLetter?: string;
  googleVerified?: boolean;
  adminReply?: string;
}

const INITIAL_PUBLIC_FEEDBACKS: FeedbackCardData[] = [];

interface FeedbackSectionProps {
  onOpenLightbox?: (url: string, title: string) => void;
}

export default function FeedbackSection({ onOpenLightbox }: FeedbackSectionProps = {}) {
  const db = getDb();
  const [text, setText] = useState('');
  const [rating, setRating] = useState(5);
  const [source, setSource] = useState('Direct Client');
  const [workLink, setWorkLink] = useState('');
  const [search, setSearch] = useState('');
  const [status, setStatus] = useState('');
  const [isError, setIsError] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  // Picture Upload State
  const [selectedImages, setSelectedImages] = useState<string[]>([]);
  const fileInputRef = useRef<HTMLInputElement>(null);

  // Attachment Links State
  const [links, setLinks] = useState<string[]>([]);
  const [currentLink, setCurrentLink] = useState('');

  // One-Time Ali Code State
  const [aliCode, setAliCode] = useState('');
  const [isCodeValid, setIsCodeValid] = useState(false);
  const [verifyingCode, setVerifyingCode] = useState(false);

  // Google Authentication State
  const [isAuth, setIsAuth] = useState(false);
  const [authUser, setAuthUser] = useState<{ name: string; email: string; picture: string; provider: 'Google' | '' } | null>(null);
  const [isAuthenticating, setIsAuthenticating] = useState(false);

  // Sync auth state on mount
  useEffect(() => {
    const auth = getFirebaseAuth();
    if (!auth) return;

    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setAuthUser({
          name: user.displayName || user.email?.split('@')[0] || 'Verified User',
          email: user.email || '',
          picture: user.photoURL || '',
          provider: 'Google'
        });
        setIsAuth(true);
      } else {
        setAuthUser(null);
        setIsAuth(false);
      }
    });

    return () => unsubscribe();
  }, []);

  // Feed list
  const [feedbackList, setFeedbackList] = useState<FeedbackCardData[]>(INITIAL_PUBLIC_FEEDBACKS);

  // Fetch feedbacks on load
  useEffect(() => {
    const fetchFeedbacks = async () => {
      try {
        const q = query(
          collection(db, 'feedbacks'),
          where('isApproved', '==', true),
          orderBy('date', 'desc')
        );
        
        const querySnapshot = await getDocs(q);
        const data = querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));

        setFeedbackList(data.map((fb: any) => ({
          id: fb.id,
          clientName: fb.clientName,
          clientEmail: fb.clientEmail,
          rating: fb.rating,
          comment: fb.comment,
          source: fb.source,
          date: fb.date ? new Date(fb.date).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' }) : 'Recent',
          codeUsed: fb.codeUsed || 'VERIFIED-CLIENT',
          imageUrl: fb.projectScreenshot,
          projectImages: fb.projectImages || [],
          attachmentLinks: fb.attachmentLinks || [],
          clientPhoto: fb.clientPhoto,
          googleVerified: fb.googleVerified,
          adminReply: fb.adminReply
        })));
      } catch (err) {
        console.error("Failed to fetch feedbacks:", err);
      }
    };
    fetchFeedbacks();
  }, []);

  // Handle Multiple Image Upload
  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (files) {
      Array.from(files).forEach((file: File) => {
        if (file.size > 5 * 1024 * 1024) {
          setStatus('One or more images exceed 5MB limit.');
          setIsError(true);
          return;
        }
        const reader = new FileReader();
        reader.onloadend = () => {
          setSelectedImages(prev => [...prev, reader.result as string]);
        };
        reader.readAsDataURL(file);
      });
      setStatus('Images attached successfully.');
      setIsError(false);
    }
  };

  const handleRemoveImage = (index: number) => {
    setSelectedImages(prev => prev.filter((_, i) => i !== index));
  };

  const addLink = () => {
    if (currentLink.trim() && /^https?:\/\/.+/.test(currentLink.trim())) {
      setLinks(prev => [...prev, currentLink.trim()]);
      setCurrentLink('');
    } else {
      setStatus('Please enter a valid URL starting with http:// or https://');
      setIsError(true);
    }
  };

  const removeLink = (index: number) => {
    setLinks(prev => prev.filter((_, i) => i !== index));
  };

  // Verify One-Time Code
  const handleVerifyCode = async () => {
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
      const q = query(collection(db, 'feedback_codes'), where('code', '==', trimmed));
      const querySnapshot = await getDocs(q);
      
      if (!querySnapshot.empty) {
        const data = querySnapshot.docs[0].data();
        if (!data.isUsed) {
          setIsCodeValid(true);
          setAliCode(data.code);
          setStatus(`Code verified for ${data.assignedTo || 'client'}! You can now submit your review.`);
          setIsError(false);
        } else {
          setIsCodeValid(false);
          setStatus('This code has already been used.');
          setIsError(true);
        }
      } else {
        setIsCodeValid(false);
        setStatus('Invalid Ali-Code. Please check your code and try again.');
        setIsError(true);
      }
    } catch (err: any) {
      console.error("Code Verification Error:", err);
      setStatus('Failed to verify code. Please check your connection.');
      setIsError(true);
    } finally {
      setVerifyingCode(false);
    }
  };

  // Real Google OAuth & Identity Verification
  const [isSigningInWithGoogle, setIsSigningInWithGoogle] = useState(false);

  // Launch Official Modern Google OAuth 2.0 Login
  const handleLaunchOfficialGoogleOAuth = async () => {
    setIsError(false);
    setIsSigningInWithGoogle(true);
    setStatus('Opening official Google Sign-In...');

    try {
      const user = await signInWithGoogle();
      if (user) {
        setAuthUser(user);
        setIsAuth(true);
        setStatus(`Successfully verified with Google as ${user.name}!`);
        setIsError(false);
      }
    } catch (err: any) {
      console.error("Google Sign-In Error:", err);
      setStatus(`Google sign-in failed: ${err.message || 'Please try again'}`);
      setIsError(true);
    } finally {
      setIsSigningInWithGoogle(false);
    }
  };

  const handleSignOut = async () => {
    const auth = getFirebaseAuth();
    if (auth) {
      await auth.signOut();
      setAuthUser(null);
      setIsAuth(false);
      setStatus('Signed out of Google identity.');
      setIsError(false);
    }
  };

  // Submit Feedback Handler
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsError(false);

    if (!text.trim()) {
      setStatus('Please write your feedback review message.');
      setIsError(true);
      return;
    }

    if (authUser?.email === 'alimuhammadhvn81@gmail.com') {
      setStatus('Admin cannot post feedback. You can only reply from the admin dashboard.');
      setIsError(true);
      return;
    }

    // MANDATORY: Both Google Verification AND Ali- Code are required
    if (!isCodeValid) {
      setStatus('Please enter and verify your unique "Ali-" feedback code first.');
      setIsError(true);
      return;
    }

    let currentUser = authUser;
    if (!isAuth) {
      setSubmitting(true);
      setStatus('Opening official Google Sign-In for mandatory identity verification...');
      try {
        const user = await signInWithGoogle();
        if (!user) {
          setSubmitting(false);
          setStatus('Identity verification is mandatory to post reviews.');
          setIsError(true);
          return;
        }
        currentUser = user;
        setAuthUser(user);
        setIsAuth(true);
      } catch (err: any) {
        setSubmitting(false);
        setStatus(`Verification failed: ${err.message || 'Please try again'}`);
        setIsError(true);
        return;
      }
    }

    setSubmitting(true);
    setStatus('Submitting verified feedback…');

    const clientName = currentUser?.name || (aliCode ? `Client (${aliCode})` : 'Verified Client');
    const clientEmail = currentUser?.email || (aliCode ? `${aliCode.toLowerCase()}@client.verified` : 'client@verified.review');
    const clientPhoto = currentUser?.picture || (selectedImages[0] || `https://ui-avatars.com/api/?name=${encodeURIComponent(clientName)}&background=00d9ff&color=061017&bold=true`);

    try {
      const fallbackReply = rating === 5
        ? `Thank you so much ${clientName.split(' ')[0]} for the stellar 5-star review! It was an absolute pleasure working together on your project. Wishing you massive success, and I look forward to collaborating again on future milestones! 🚀`
        : rating === 4
        ? `Thank you very much ${clientName.split(' ')[0]} for the great 4-star feedback and for trusting my services! I am delighted with the project outcome, and I remain available anytime if you need any adjustments or enhancements.`
        : rating === 3
        ? `Thank you for sharing your feedback, ${clientName.split(' ')[0]}. I value your honest review and strive to make every single delivery a 5-star experience. Please feel free to reach out anytime if there is anything we can optimize or refine further!`
        : `Thank you for your review, ${clientName.split(' ')[0]}. Client satisfaction is my top priority. Please reach out to me directly at alimuhammadhvn81@gmail.com or WhatsApp (+92 342 6793428) so I can immediately assist and resolve any concerns.`;

      // Insert into Firestore
      const docRef = await addDoc(collection(db, 'feedbacks'), {
        clientName,
        clientEmail,
        clientPhoto,
        rating,
        comment: text.trim(),
        source,
        codeUsed: aliCode.trim(),
        projectScreenshot: selectedImages[0] || null,
        projectImages: selectedImages,
        attachmentLinks: links,
        googleVerified: isAuth,
        adminReply: fallbackReply,
        isApproved: false, // Requires admin approval
        date: new Date().toISOString()
      });

      // Update code status if used in DB
      if (aliCode.trim()) {
        const q = query(collection(db, 'feedback_codes'), where('code', '==', aliCode.trim()));
        const querySnapshot = await getDocs(q);
        if (!querySnapshot.empty) {
          const codeDocId = querySnapshot.docs[0].id;
          await updateDoc(doc(db, 'feedback_codes', codeDocId), {
            isUsed: true,
            usedAt: new Date().toISOString()
          });
        }
      }

      const newFb: FeedbackCardData = {
        id: docRef.id,
        clientName,
        clientEmail,
        rating,
        comment: text.trim(),
        source,
        date: new Date().toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' }),
        codeUsed: aliCode.trim() || 'VERIFIED-CLIENT',
        imageUrl: selectedImages[0] || undefined,
        projectImages: selectedImages,
        attachmentLinks: links,
        clientPhoto,
        googleVerified: isAuth,
        adminReply: fallbackReply
      };

      setFeedbackList(prev => [newFb, ...prev]);
      setStatus('Feedback submitted successfully! It will appear publicly once approved by Muhammad Ali.');
      setIsError(false);

      // Reset form
      setText('');
      setRating(5);
      setSelectedImages([]);
      setLinks([]);
      setWorkLink('');
      if (fileInputRef.current) fileInputRef.current.value = '';
    } catch (err: any) {
      console.error(err);
      setStatus(`An error occurred during submission: ${err.message || 'Please try again later'}`);
      setIsError(true);
    } finally {
      setSubmitting(false);
    }
  };

  const filteredFeedbacks = feedbackList.filter(fb =>
    fb.clientName.toLowerCase().includes(search.toLowerCase()) ||
    fb.comment.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <section id="feedback" className="py-20 bg-[#070b12] text-slate-200 relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[700px] h-[700px] bg-[#00d9ff]/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 relative z-10">
        {/* Section Title */}
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-black text-white">
            Client <span className="text-[#00d9ff]">Feedback & Testimonials</span>
          </h2>
          <p className="text-sm text-slate-400 mt-2 max-w-lg mx-auto">
            Submit your feedback verified with your Google Account or Unique "Ali-" Client Code
          </p>
        </div>

        {/* Main Box */}
        <div className="max-w-4xl mx-auto bg-[#0f1523] border border-[#00d9ff]/30 rounded-2xl p-6 sm:p-8 shadow-2xl">
          {/* Submission Form */}
          <form onSubmit={handleSubmit} className="space-y-5 bg-[#0b101c] p-6 rounded-xl border border-white/10">
            {/* 1. Rating Selection */}
            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-slate-300 mb-1.5">
                Rating Score
              </label>
              <div className="flex items-center gap-2 flex-wrap">
                {[1, 2, 3, 4, 5].map((star) => (
                  <button
                    key={star}
                    type="button"
                    onClick={() => setRating(star)}
                    className={`px-4 py-2.5 rounded-xl border text-sm font-black transition-all cursor-pointer flex items-center gap-1.5 ${
                      rating >= star
                        ? 'bg-[#00d9ff] text-[#061017] border-[#00d9ff] shadow-md shadow-[#00d9ff]/20'
                        : 'bg-[#131b2b] text-slate-400 border-white/10 hover:border-white/30'
                    }`}
                  >
                    <span>{star}</span>
                    <Star className={`w-4 h-4 ${rating >= star ? 'fill-[#061017]' : ''}`} />
                  </button>
                ))}
              </div>
            </div>

            {/* 2. Written Feedback */}
            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-slate-300 mb-1.5">
                Written Feedback Review
              </label>
              <textarea
                value={text}
                onChange={(e) => setText(e.target.value)}
                placeholder="Describe your project experience, speed of delivery, quality of work, and communication..."
                required
                className="w-full p-3.5 rounded-xl border border-white/15 bg-[#131b2b] text-white placeholder-slate-500 text-sm outline-none focus:border-[#00d9ff] focus:ring-1 focus:ring-[#00d9ff] min-h-[120px] transition-all"
              />
            </div>

            {/* 3. One-Time Feedback Code Input (Ali-XXXXXX) */}
            <div className={`p-4 rounded-xl border transition-all ${isCodeValid ? 'bg-emerald-500/5 border-emerald-500/30' : 'bg-[#121929] border-white/10'}`}>
              <label className="block text-xs font-bold uppercase tracking-wider text-slate-300 mb-2 flex items-center justify-between">
                <span className="flex items-center gap-2">
                  <KeyRound className="w-4 h-4 text-[#00d9ff]" /> Ali- Feedback Code (Mandatory)
                </span>
                {isCodeValid && (
                  <span className="text-emerald-400 text-[11px] font-bold flex items-center gap-1">
                    <CheckCircle2 className="w-3.5 h-3.5" /> Code Verified
                  </span>
                )}
              </label>

              <div className="flex gap-2">
                <input
                  type="text"
                  value={aliCode}
                  onChange={(e) => {
                    setAliCode(e.target.value);
                    setIsCodeValid(false);
                  }}
                  disabled={isCodeValid}
                  placeholder="Ali-XXXXXX"
                  className={`flex-1 p-3 rounded-xl border bg-[#0c111a] text-white placeholder-slate-600 text-sm font-mono tracking-widest outline-none transition-all ${
                    isCodeValid ? 'border-emerald-500/50 text-emerald-400' : 'border-white/10 focus:border-[#00d9ff]'
                  }`}
                />
                {!isCodeValid && aliCode.trim() && (
                  <button
                    type="button"
                    onClick={handleVerifyCode}
                    disabled={verifyingCode}
                    className="px-4 py-2 bg-[#00d9ff] text-[#061017] font-bold text-xs rounded-xl hover:bg-cyan-300 disabled:opacity-50 transition-all flex items-center gap-2 cursor-pointer shrink-0"
                  >
                    {verifyingCode ? (
                      <div className="w-3 h-3 border-2 border-[#061017] border-t-transparent rounded-full animate-spin" />
                    ) : (
                      <CheckCircle2 className="w-4 h-4" />
                    )}
                    <span>Verify Code</span>
                  </button>
                )}
              </div>
            </div>

            {/* 4. Multiple Photos Area */}
            <div className="p-4 bg-[#121929] border border-white/10 rounded-xl space-y-3">
              <label className="block text-xs font-bold uppercase tracking-wider text-slate-300 flex items-center gap-2">
                <ImageIcon className="w-4 h-4 text-[#00d9ff]" /> Project Portfolio (Multiple Photos)
              </label>

              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                {selectedImages.map((img, idx) => (
                  <div key={idx} className="relative group aspect-square">
                    <img
                      src={img}
                      alt={`Preview ${idx}`}
                      className="w-full h-full object-cover rounded-xl border border-white/20"
                    />
                    <button
                      type="button"
                      onClick={() => handleRemoveImage(idx)}
                      className="absolute -top-1.5 -right-1.5 p-1 bg-rose-500 text-white rounded-full hover:bg-rose-600 transition-colors shadow-md cursor-pointer"
                    >
                      <X className="w-3.5 h-3.5" />
                    </button>
                  </div>
                ))}
                {selectedImages.length < 8 && (
                  <div
                    onClick={() => fileInputRef.current?.click()}
                    className="border-2 border-dashed border-white/10 hover:border-[#00d9ff]/50 bg-[#0c111a] rounded-xl flex flex-col items-center justify-center cursor-pointer transition-all aspect-square"
                  >
                    <Upload className="w-5 h-5 text-slate-500 mb-1" />
                    <span className="text-[10px] font-bold text-slate-400">Add Photo</span>
                  </div>
                )}
              </div>

              <input
                ref={fileInputRef}
                type="file"
                accept="image/*"
                multiple
                onChange={handleImageChange}
                className="hidden"
              />
            </div>

            {/* 5. Attachment Links Dashboard Area */}
            <div className="p-4 bg-[#121929] border border-white/10 rounded-xl space-y-3">
              <label className="block text-xs font-bold uppercase tracking-wider text-slate-300 flex items-center gap-2">
                <ExternalLink className="w-4 h-4 text-[#00d9ff]" /> Project & Delivery Links
              </label>
              
              <div className="flex gap-2">
                <input
                  type="url"
                  value={currentLink}
                  onChange={(e) => setCurrentLink(e.target.value)}
                  placeholder="https://github.com/ali/project"
                  className="flex-1 p-2.5 rounded-xl border border-white/15 bg-[#0c111a] text-white text-xs outline-none focus:border-[#00d9ff]"
                />
                <button
                  type="button"
                  onClick={addLink}
                  className="px-4 py-2 bg-[#00d9ff]/10 text-[#00d9ff] border border-[#00d9ff]/30 rounded-xl text-xs font-bold hover:bg-[#00d9ff]/20 transition-all"
                >
                  Add Link
                </button>
              </div>

              {links.length > 0 && (
                <div className="flex flex-wrap gap-2 pt-1">
                  {links.map((link, idx) => (
                    <div key={idx} className="flex items-center gap-2 px-3 py-1.5 bg-[#0b101c] border border-white/10 rounded-lg text-[10px] text-slate-300">
                      <span className="truncate max-w-[120px]">{link}</span>
                      <button onClick={() => removeLink(idx)} className="text-rose-400 hover:text-rose-300">
                        <X className="w-3 h-3" />
                      </button>
                    </div>
                  ))}
                </div>
              )}
            </div>

            {/* Status Message */}
            {status && (
              <div
                className={`p-3.5 rounded-xl text-xs flex flex-col gap-2 ${
                  isError
                    ? 'bg-rose-500/10 border border-rose-500/30 text-rose-400'
                    : 'bg-emerald-500/10 border border-emerald-500/30 text-emerald-400'
                }`}
              >
                <div className="flex items-center gap-2">
                  {isError ? <AlertCircle className="w-4 h-4 shrink-0" /> : <CheckCircle2 className="w-4 h-4 shrink-0" />}
                  <span>{status}</span>
                </div>
              </div>
            )}

            {/* Submit Button */}
            <div className="pt-2">
              <button
                id="submit-feedback-button"
                type="submit"
                disabled={submitting}
                className={`w-full py-4 px-6 font-black text-sm rounded-xl hover:shadow-xl active:scale-[0.99] transition-all flex flex-col items-center justify-center gap-1 cursor-pointer disabled:opacity-60 ${
                  (!isAuth || !isCodeValid)
                    ? 'bg-white text-slate-900 hover:bg-slate-100' 
                    : 'bg-gradient-to-r from-[#00d9ff] to-[#00b4d8] text-[#061017] hover:shadow-[#00d9ff]/20'
                }`}
              >
                {submitting ? (
                  <div className="flex items-center gap-2">
                    <div className="w-4 h-4 border-2 border-current border-t-transparent rounded-full animate-spin" />
                    <span>Publishing Review…</span>
                  </div>
                ) : (
                  <>
                    <div className="flex items-center gap-2">
                      {(!isAuth || !isCodeValid) ? (
                        <ShieldCheck className="w-5 h-5 text-slate-400" />
                      ) : (
                        <ShieldCheck className="w-5 h-5" />
                      )}
                      <span>
                        {!isCodeValid 
                          ? 'Enter Ali- Code & Submit' 
                          : !isAuth 
                            ? 'Verify with Google & Submit' 
                            : 'Submit Verified Feedback'
                        }
                      </span>
                    </div>
                    {isAuth && authUser && (
                      <span className="text-[10px] opacity-70 font-bold">Verified User: {authUser.name}</span>
                    )}
                  </>
                )}
              </button>
              
              {isAuth && (
                <button
                  type="button"
                  onClick={handleSignOut}
                  className="w-full mt-2 text-[10px] text-slate-500 hover:text-rose-400 transition-colors"
                >
                  Not you? Sign Out
                </button>
              )}
            </div>
          </form>

          {/* Public Feedback Feed */}
          <div className="mt-10">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-6">
              <h3 className="text-lg font-bold text-white flex items-center gap-2">
                <MessageSquare className="w-5 h-5 text-[#00d9ff]" /> Community Reviews ({feedbackList.length})
              </h3>

              <div className="relative w-full sm:w-64">
                <Search className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
                <input
                  type="text"
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                  placeholder="Search reviews..."
                  className="w-full pl-9 pr-3 py-1.5 bg-[#0b101c] border border-white/10 rounded-xl text-xs text-white placeholder-slate-500 focus:outline-none focus:border-[#00d9ff]"
                />
              </div>
            </div>

            {/* Cards List */}
            <div className="space-y-4">
              {filteredFeedbacks.map((fb) => (
                <div
                  key={fb.id}
                  className="bg-[#0b101c] border border-white/10 rounded-2xl p-5 hover:border-white/20 transition-all space-y-3"
                >
                  <div className="flex items-start justify-between gap-3">
                    <div className="flex items-center gap-3.5">
                      <div className="relative shrink-0">
                        {fb.clientPhoto ? (
                          <img 
                            src={fb.clientPhoto} 
                            alt={fb.clientName} 
                            className="w-11 h-11 rounded-full border-2 border-[#1a73e8]/50 object-cover shadow"
                          />
                        ) : (
                          <div className="w-11 h-11 rounded-full bg-[#1a73e8] text-white font-bold text-sm flex items-center justify-center border border-white/20 shadow">
                            {fb.avatarLetter || fb.clientName.substring(0, 2).toUpperCase()}
                          </div>
                        )}
                        {fb.googleVerified && (
                          <div className="absolute -bottom-1 -right-1 w-5 h-5 rounded-full bg-white flex items-center justify-center shadow-md border border-slate-200" title="Google Verified Account">
                            <svg className="w-3.5 h-3.5" viewBox="0 0 24 24">
                              <path
                                fill="#4285F4"
                                d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                              />
                              <path
                                fill="#34A853"
                                d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                              />
                              <path
                                fill="#FBBC05"
                                d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22.81-.63z"
                              />
                              <path
                                fill="#EA4335"
                                d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.52 6.16-4.52z"
                              />
                            </svg>
                          </div>
                        )}
                      </div>
                      <div>
                        <h4 className="text-sm font-bold text-white flex items-center gap-1.5 flex-wrap">
                          <span>{fb.clientName}</span>
                          {fb.googleVerified && (
                            <span className="px-2 py-0.5 rounded-full bg-blue-500/15 text-blue-400 border border-blue-500/30 text-[9px] font-extrabold flex items-center gap-1">
                              <CheckCircle2 className="w-2.5 h-2.5" /> Google Verified
                            </span>
                          )}
                        </h4>
                        <div className="flex items-center gap-1.5 flex-wrap text-[11px] text-slate-400 mt-0.5">
                          <span className="text-slate-300 font-medium">{fb.clientEmail}</span>
                          <span>•</span>
                          <span>{fb.date}</span>
                        </div>
                      </div>
                    </div>

                    <div className="flex flex-col items-end gap-1">
                      <div className="flex text-amber-400 text-xs">
                        {'★'.repeat(fb.rating)}
                      </div>
                      <span className="px-2 py-0.5 rounded bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 text-[10px] font-semibold flex items-center gap-1">
                        <CheckCircle2 className="w-3 h-3" /> {fb.codeUsed || 'Verified'}
                      </span>
                    </div>
                  </div>

                  {/* Comment */}
                  <p className="text-xs text-slate-200 leading-relaxed bg-[#121929] p-3.5 rounded-xl border border-white/5">
                    "{fb.comment}"
                  </p>

                  {/* Attached Pictures Gallery */}
                  {fb.projectImages && fb.projectImages.length > 0 ? (
                    <div className="pt-2 space-y-2">
                      <p className="text-[10px] font-bold text-slate-400">Project Portfolio ({fb.projectImages.length} Photos):</p>
                      <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                        {fb.projectImages.map((img, idx) => (
                          <div 
                            key={idx} 
                            onClick={() => onOpenLightbox ? onOpenLightbox(img, `${fb.clientName}'s Project Photo ${idx + 1}`) : window.open(img, '_blank')} 
                            className="block aspect-video overflow-hidden rounded-lg border border-white/10 hover:border-[#00d9ff]/50 transition-all cursor-pointer group relative"
                          >
                            <img
                              src={img}
                              alt={`Project ${idx}`}
                              className="w-full h-full object-cover group-hover:scale-105 transition-transform"
                            />
                            <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center text-[#00d9ff] text-[10px] font-bold">
                              Zoom Photo
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  ) : fb.imageUrl && (
                    <div className="pt-1">
                      <p className="text-[10px] font-bold text-slate-400 mb-1">Project Screenshot / Work Attachment:</p>
                      <img
                        src={fb.imageUrl}
                        alt="Project Screenshot"
                        onClick={() => onOpenLightbox ? onOpenLightbox(fb.imageUrl!, `${fb.clientName}'s Project Screenshot`) : undefined}
                        className="w-full max-h-[300px] rounded-xl border border-white/10 object-contain bg-black/20 shadow-md cursor-pointer hover:border-[#00d9ff]/50 transition-colors"
                      />
                    </div>
                  )}

                  {/* Attachment Links Dashboard Area */}
                  {fb.attachmentLinks && fb.attachmentLinks.length > 0 && (
                    <div className="pt-2 flex flex-wrap gap-2">
                      {fb.attachmentLinks.map((link, idx) => (
                        <a
                          key={idx}
                          href={link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="px-2.5 py-1.5 bg-[#00d9ff]/5 border border-[#00d9ff]/20 rounded-lg text-[10px] text-[#00d9ff] hover:bg-[#00d9ff]/10 transition-all flex items-center gap-1.5 font-bold"
                        >
                          <ExternalLink className="w-3 h-3" /> Link #{idx + 1}
                        </a>
                      ))}
                    </div>
                  )}

                  {/* Work link (Legacy) */}
                  {fb.workLink && !fb.attachmentLinks?.length && (
                    <a
                      href={fb.workLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-xs text-[#00d9ff] hover:underline font-medium"
                    >
                      <ExternalLink className="w-3.5 h-3.5" /> View Project Link
                    </a>
                  )}

                  {/* Developer Auto-Reply */}
                  {fb.adminReply && (
                    <div className="p-3.5 bg-[#00d9ff]/5 border border-[#00d9ff]/20 rounded-xl text-xs space-y-2 mt-2">
                      <div className="flex items-center justify-between gap-2">
                        <div className="flex items-center gap-2">
                          <img
                            src="https://ui-avatars.com/api/?name=Muhammad+Ali&background=00d9ff&color=061017&bold=true"
                            alt="Muhammad Ali"
                            className="w-6 h-6 rounded-full object-cover border border-[#00d9ff]/40 shadow-sm shrink-0"
                          />
                          <div className="flex items-center gap-1.5 flex-wrap">
                            <span className="font-bold text-white text-[11px]">Muhammad Ali</span>
                            <span className="px-1.5 py-0.2 rounded-full bg-[#00d9ff]/15 text-[#00d9ff] border border-[#00d9ff]/30 text-[9px] font-extrabold flex items-center gap-0.5">
                              <CheckCircle2 className="w-2.5 h-2.5" /> Developer Response
                            </span>
                          </div>
                        </div>
                        <span className="text-[10px] text-slate-400 font-medium">
                          Auto-Replied ({fb.rating}★ Review)
                        </span>
                      </div>
                      <p className="text-slate-300 text-xs leading-relaxed pl-8">
                        "{fb.adminReply}"
                      </p>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

