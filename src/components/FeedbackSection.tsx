import React, { useState, useRef, useEffect } from 'react';
import { HOW_DO_YOU_KNOW_OPTIONS } from '../data/portfolioData';
import { signInWithGoogle, getFirebaseAuth, getGoogleRedirectResult } from '../lib/firebase';
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
  KeyRound
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
  clientPhoto?: string;
  avatarLetter?: string;
  googleVerified?: boolean;
  adminReply?: string;
}

const INITIAL_PUBLIC_FEEDBACKS: FeedbackCardData[] = [];

export default function FeedbackSection() {
  const [code, setCode] = useState('');
  const [text, setText] = useState('');
  const [rating, setRating] = useState(5);
  const [source, setSource] = useState('Direct Client');
  const [workLink, setWorkLink] = useState('');
  const [search, setSearch] = useState('');
  const [status, setStatus] = useState('');
  const [isError, setIsError] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  // Picture Upload State
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  // Authentication State
  const [isAuth, setIsAuth] = useState(false);
  const [authUser, setAuthUser] = useState<{ name: string; email: string; picture: string, provider: 'Google' | '' } | null>(null);
  const [isAuthenticating, setIsAuthenticating] = useState(false);
  const [aliCode, setAliCode] = useState('');
  const [isCodeValid, setIsCodeValid] = useState(false);
  const [verifyingCode, setVerifyingCode] = useState(false);

  // Sync auth state
  useEffect(() => {
    const auth = getFirebaseAuth();
    if (!auth) return;

    // Check for redirect result on mount
    getGoogleRedirectResult().then(user => {
      if (user) {
        console.log("Found redirect user:", user.email);
        setAuthUser({
          name: user.displayName || 'Verified User',
          email: user.email || '',
          picture: user.photoURL || '',
          provider: 'Google'
        });
        setIsAuth(true);
        setStatus('Welcome back! Identity verified via Google.');
      }
    });

    const unsubscribe = auth.onAuthStateChanged((user) => {
      if (user) {
        setAuthUser({
          name: user.displayName || 'Verified User',
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
        const res = await fetch('/api/feedback');
        if (res.ok) {
          const data = await res.json();
          setFeedbackList(data.map((fb: any) => ({
            id: fb.id,
            clientName: fb.clientName,
            clientEmail: fb.clientEmail,
            rating: fb.rating,
            comment: fb.comment,
            source: fb.source,
            date: new Date(fb.date).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' }),
            codeUsed: fb.codeUsed || 'GOOGLE-VERIFIED',
            imageUrl: fb.projectScreenshot,
            clientPhoto: fb.clientPhoto,
            googleVerified: fb.googleVerified,
            adminReply: fb.adminReply
          })));
        }
      } catch (err) {
        console.error("Failed to fetch feedbacks:", err);
      }
    };
    fetchFeedbacks();
  }, []);

  // Handle Image Upload
  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      if (file.size > 5 * 1024 * 1024) {
        setStatus('Image size should be less than 5MB.');
        setIsError(true);
        return;
      }
      const reader = new FileReader();
      reader.onloadend = () => {
        setSelectedImage(reader.result as string);
        setStatus('Image attached successfully.');
        setIsError(false);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleRemoveImage = () => {
    setSelectedImage(null);
    if (fileInputRef.current) {
      fileInputRef.current.value = '';
    }
  };

  // Google Authentication Trigger
  const handleGoogleSignIn = async () => {
    console.log("Google Button Clicked");
    if (isAuthenticating) return;
    setIsAuthenticating(true);
    setStatus('Initializing Google Identity...');
    setIsError(false);
    try {
      const auth = getFirebaseAuth();
      if (!auth) {
        const msg = "Firebase is not initialized. Please ensure VITE_FIREBASE_API_KEY is available in the browser.";
        console.error(msg);
        setStatus(msg);
        setIsError(true);
        setIsAuthenticating(false);
        return;
      }
      setStatus('Waiting for Google authentication popup...');
      console.log("Starting Google Sign-In process...");
      const user = await signInWithGoogle();
      setStatus('Google Identity authenticated successfully!');
      setIsError(false);
    } catch (error: any) {
      console.error("Login Handler Error:", error);
      if (error?.code === 'auth/cancelled-popup-request' || error?.code === 'auth/popup-closed-by-user') {
        setStatus('Google Sign-In was cancelled by user.');
      } else {
        setStatus(`Google Sign-In failed: ${error.message || 'Please check your internet connection and try again.'}`);
      }
      setIsError(true);
    } finally {
      setIsAuthenticating(false);
    }
  };

  // Verify Ali- Code
  const handleVerifyCode = async () => {
    const trimmedCode = aliCode.trim();
    if (!trimmedCode.toLowerCase().startsWith('ali-')) {
      setStatus('Code must start with "Ali-".');
      setIsError(true);
      return;
    }

    setVerifyingCode(true);
    setIsError(false);
    setStatus('Verifying your unique feedback code...');

    try {
      console.log("Verifying code:", trimmedCode);
      const res = await fetch('/api/feedback/verify-code', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ code: trimmedCode })
      }).catch(err => {
        throw new Error(`Fetch failed: ${err.message}. The server might be unreachable.`);
      });

      if (res.ok) {
        const data = await res.json().catch(() => {
          throw new Error("Server returned invalid JSON.");
        });
        console.log("Verification success:", data);
        setIsCodeValid(true);
        setAliCode(data.code); 
        setStatus(`Code verified for ${data.assignedTo || 'client'}. You can now proceed.`);
        setIsError(false);
      } else {
        let errMsg = 'Invalid or used code.';
        try {
          const err = await res.json();
          errMsg = err.error || errMsg;
        } catch (e) {
          errMsg = `Server Error (${res.status}): ${res.statusText}`;
        }
        console.warn("Verification failed response:", errMsg);
        setStatus(errMsg);
        setIsError(true);
        setIsCodeValid(false);
      }
    } catch (err: any) {
      console.error("Verification fetch error:", err);
      setStatus(`Verification Error: ${err.message}`);
      setIsError(true);
    } finally {
      setVerifyingCode(false);
    }
  };

  // Submit Feedback Handler
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsError(false);

    if (!isCodeValid) {
      setStatus('Please provide and verify your unique "Ali-" code provided by the admin.');
      setIsError(true);
      return;
    }

    if (!isAuth) {
      setStatus('Please sign in with Google to verify your identity.');
      setIsError(true);
      return;
    }

    if (!text.trim()) {
      setStatus('Please write your feedback message.');
      setIsError(true);
      return;
    }

    setSubmitting(true);
    setStatus('Submitting verified feedback…');

    try {
      const token = await getFirebaseAuth()?.currentUser?.getIdToken();
      const res = await fetch('/api/feedback/submit-verified', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          token,
          rating,
          comment: text.trim(),
          source,
          code: aliCode.trim(),
          projectScreenshot: selectedImage
        })
      });

      if (res.ok) {
        const data = await res.json();
        const newFb: FeedbackCardData = {
          id: data.feedback?.id || `fb-${Date.now()}`,
          clientName: authUser!.name,
          clientEmail: authUser!.email,
          rating,
          comment: text.trim(),
          source,
          date: new Date().toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' }),
          codeUsed: aliCode.trim(),
          imageUrl: selectedImage || undefined,
          clientPhoto: authUser!.picture,
          googleVerified: true
        };

        setFeedbackList([newFb, ...feedbackList]);
        setStatus('Feedback submitted and published successfully! Thank you for your verified review.');
        setIsError(false);

        // Reset form
        setText('');
        setRating(5);
        setSelectedImage(null);
        setWorkLink('');
        if (fileInputRef.current) fileInputRef.current.value = '';
      } else {
        const errData = await res.json();
        setStatus(errData.error || 'Feedback submission failed.');
        setIsError(true);
      }
    } catch (err) {
      console.error(err);
      setStatus('An error occurred during submission.');
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
            Submit your feedback using **Real Google Authentication** for verification
          </p>
        </div>

        {/* Main Box */}
        <div className="max-w-4xl mx-auto bg-[#0f1523] border border-[#00d9ff]/30 rounded-2xl p-6 sm:p-8 shadow-2xl">
          {/* Submission Form */}
          <form onSubmit={handleSubmit} className="space-y-5 bg-[#0b101c] p-6 rounded-xl border border-white/10">
            {/* 1. Google Auth Verification Box */}
            <div className="p-4 bg-[#121929] border border-white/10 rounded-xl">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                <div className="flex items-center gap-3">
                  {authUser ? (
                    <img
                      src={authUser.picture || `https://ui-avatars.com/api/?name=${authUser.name}&background=random`}
                      alt={authUser.name}
                      className="w-10 h-10 rounded-full border-2 border-emerald-400 object-cover"
                    />
                  ) : (
                    <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-slate-300">
                      <ShieldCheck className="w-5 h-5 text-[#00d9ff]" />
                    </div>
                  )}

                  <div>
                    <h4 className="text-xs font-bold text-white flex items-center gap-1.5">
                      {isAuth ? authUser?.name : 'Google Identity Verification'}
                      {isAuth && (
                        <span className="px-2 py-0.5 rounded-full bg-emerald-500/20 text-emerald-400 border border-emerald-500/30 text-[10px] font-extrabold flex items-center gap-1">
                          <CheckCircle2 className="w-3 h-3" /> Google Verified
                        </span>
                      )}
                    </h4>
                    <p className="text-[11px] text-slate-400">
                      {isAuth
                        ? authUser?.email
                        : 'Sign in with Google to verify feedback authenticity'}
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-2">
                  <button
                    id="google-signin-button"
                    type="button"
                    onClick={handleGoogleSignIn}
                    disabled={isAuthenticating}
                    className={`px-4 py-2 rounded-xl text-xs font-bold transition-all flex items-center justify-center gap-2 shrink-0 ${
                      isAuthenticating ? 'opacity-50 cursor-not-allowed' : 'cursor-pointer'
                    } ${
                      isAuth && authUser?.provider === 'Google'
                        ? 'bg-emerald-500/15 text-emerald-300 border border-emerald-500/30 hover:bg-emerald-500/25'
                        : 'bg-white text-slate-900 hover:bg-slate-100 shadow-md'
                    }`}
                  >
                    <svg className="w-4 h-4" viewBox="0 0 24 24">
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
                    <span>{isAuth && authUser?.provider === 'Google' ? 'Change Google Account' : 'Sign in with Google'}</span>
                  </button>
                </div>
              </div>
            </div>

            {/* 2. Feedback Code Verification */}
            <div className={`p-4 rounded-xl border transition-all ${isCodeValid ? 'bg-emerald-500/5 border-emerald-500/30' : 'bg-[#121929] border-white/10'}`}>
              <label className="block text-xs font-bold uppercase tracking-wider text-slate-300 mb-2 flex items-center gap-2">
                <KeyRound className="w-4 h-4 text-[#00d9ff]" /> Enter Unique Feedback Code
              </label>
              <div className="flex gap-2">
                <input
                  type="text"
                  value={aliCode}
                  onChange={(e) => {
                    setAliCode(e.target.value);
                    setIsCodeValid(false);
                  }}
                  onKeyDown={(e) => {
                    if (e.key === 'Enter') {
                      e.preventDefault();
                      if (!isCodeValid && aliCode.toLowerCase().startsWith('ali-')) {
                        handleVerifyCode();
                      }
                    }
                  }}
                  disabled={isCodeValid}
                  placeholder="Ali-XXXXXX"
                  className={`flex-1 p-3 rounded-xl border bg-[#0c111a] text-white placeholder-slate-600 text-sm font-mono tracking-widest outline-none transition-all ${
                    isCodeValid ? 'border-emerald-500/50 text-emerald-400' : 'border-white/10 focus:border-[#00d9ff]'
                  }`}
                />
                {!isCodeValid ? (
                  <button
                    id="verify-code-button"
                    type="button"
                    onClick={handleVerifyCode}
                    disabled={verifyingCode || !aliCode.toLowerCase().startsWith('ali-')}
                    className="px-4 py-2 bg-[#00d9ff] text-[#061017] font-bold text-xs rounded-xl hover:bg-cyan-300 disabled:opacity-50 transition-all flex items-center gap-2"
                  >
                    {verifyingCode ? <div className="w-3 h-3 border-2 border-[#061017] border-t-transparent rounded-full animate-spin" /> : <CheckCircle2 className="w-4 h-4" />}
                    Verify
                  </button>
                ) : (
                  <div className="px-4 py-2 bg-emerald-500/20 text-emerald-400 border border-emerald-500/30 rounded-xl flex items-center gap-2 text-xs font-bold">
                    <CheckCircle2 className="w-4 h-4" /> Verified
                  </div>
                )}
              </div>
              <p className="text-[10px] text-slate-400 mt-2">
                This code is provided by Muhammad Ali specifically for your project feedback.
              </p>
            </div>

            {/* 3. Written Feedback */}
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

            {/* 4. Picture Uploading Option */}
            <div className="p-4 bg-[#121929] border border-white/10 rounded-xl space-y-2">
              <label className="block text-xs font-bold uppercase tracking-wider text-slate-300 flex items-center gap-2">
                <ImageIcon className="w-4 h-4 text-[#00d9ff]" /> Upload Picture / Attachment (Optional)
              </label>
              <p className="text-[11px] text-slate-400">
                Attach your profile photo or screenshot of the completed project/work
              </p>

              {selectedImage ? (
                <div className="relative inline-block mt-2 group">
                  <img
                    src={selectedImage}
                    alt="Uploaded Preview"
                    className="w-32 h-32 object-cover rounded-xl border-2 border-[#00d9ff]/50 shadow-lg"
                  />
                  <button
                    type="button"
                    onClick={handleRemoveImage}
                    className="absolute -top-2 -right-2 p-1.5 bg-rose-500 text-white rounded-full hover:bg-rose-600 transition-colors shadow-md cursor-pointer"
                    title="Remove Image"
                  >
                    <X className="w-4 h-4" />
                  </button>
                </div>
              ) : (
                <div
                  onClick={() => fileInputRef.current?.click()}
                  className="mt-2 border-2 border-dashed border-white/20 hover:border-[#00d9ff]/50 bg-[#151e30] rounded-xl p-5 text-center cursor-pointer transition-all group"
                >
                  <Upload className="w-6 h-6 mx-auto text-slate-400 group-hover:text-[#00d9ff] group-hover:scale-110 transition-all mb-1" />
                  <p className="text-xs font-bold text-slate-300 group-hover:text-[#00d9ff] transition-colors">
                    Click to browse or upload picture
                  </p>
                  <p className="text-[10px] text-slate-500 mt-0.5">PNG, JPG, WEBP up to 5MB</p>
                </div>
              )}

              <input
                ref={fileInputRef}
                type="file"
                accept="image/*"
                onChange={handleImageChange}
                className="hidden"
              />
            </div>

            {/* 5. Rating Selection */}
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
                    className={`px-4 py-2.5 rounded-xl border text-sm font-black transition-all cursor-pointer flex items-center gap-1 ${
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

            {/* 6. How do you know about me? */}
            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-slate-300 mb-1.5">
                How do you know about Muhammad Ali?
              </label>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                {HOW_DO_YOU_KNOW_OPTIONS.map((opt) => (
                  <label
                    key={opt}
                    className={`flex items-center gap-2 p-2.5 rounded-xl border text-xs cursor-pointer transition-all ${
                      source === opt
                        ? 'border-[#00d9ff] bg-[#00d9ff]/10 text-white font-bold'
                        : 'border-white/10 bg-[#131b2b] text-slate-400 hover:text-white'
                    }`}
                  >
                    <input
                      type="radio"
                      name="howDoYouKnow"
                      value={opt}
                      checked={source === opt}
                      onChange={() => setSource(opt)}
                      className="accent-[#00d9ff]"
                    />
                    <span className="truncate">{opt}</span>
                  </label>
                ))}
              </div>
            </div>

            {/* 7. Optional Project Link */}
            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-slate-300 mb-1.5">
                Completed Project Link (Optional)
              </label>
              <input
                type="url"
                value={workLink}
                onChange={(e) => setWorkLink(e.target.value)}
                placeholder="https://yourproject.com"
                className="w-full p-3 rounded-xl border border-white/15 bg-[#131b2b] text-white placeholder-slate-500 text-sm outline-none focus:border-[#00d9ff] transition-all"
              />
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
                {isError && (
                  <div className="flex gap-2 mt-1">
                    <button 
                      type="button"
                      onClick={() => window.open(window.location.href, '_blank')}
                      className="px-3 py-1 bg-white/10 hover:bg-white/20 rounded-lg text-[10px] font-bold border border-white/10 flex items-center gap-1"
                    >
                      <ExternalLink className="w-3 h-3" /> Open in New Tab
                    </button>
                    <button 
                      type="button"
                      onClick={async () => {
                        try {
                          const res = await fetch('/api/health');
                          const data = await res.json();
                          alert(`Connection Test: ${data.status === 'ok' ? 'SUCCESS ✅' : 'FAILED ❌'}`);
                        } catch (e) {
                          alert('Connection Test: FAILED ❌ (Could not reach server)');
                        }
                      }}
                      className="px-3 py-1 bg-white/10 hover:bg-white/20 rounded-lg text-[10px] font-bold border border-white/10 flex items-center gap-1"
                    >
                      <ShieldCheck className="w-3 h-3" /> Test Connection
                    </button>
                  </div>
                )}
              </div>
            )}

            {/* Submit Button */}
            <button
              id="submit-feedback-button"
              type="submit"
              disabled={submitting}
              className="w-full py-4 px-6 bg-gradient-to-r from-[#00d9ff] to-[#00b4d8] text-[#061017] font-black text-sm rounded-xl hover:shadow-xl hover:shadow-[#00d9ff]/20 active:scale-[0.99] transition-all flex items-center justify-center gap-2 cursor-pointer disabled:opacity-60"
            >
              {submitting ? (
                <>
                  <div className="w-4 h-4 border-2 border-[#061017] border-t-transparent rounded-full animate-spin" />
                  <span>Verifying Ali- Code & Publishing…</span>
                </>
              ) : (
                <>
                  <ShieldCheck className="w-5 h-5" />
                  <span>Submit Feedback & Publish Review</span>
                </>
              )}
            </button>
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
                    <div className="flex items-center gap-3">
                      {fb.clientPhoto ? (
                        <img 
                          src={fb.clientPhoto} 
                          alt={fb.clientName} 
                          className="w-10 h-10 rounded-full border border-[#00d9ff]/30 object-cover shrink-0"
                        />
                      ) : (
                        <div className="w-10 h-10 rounded-full bg-[#00d9ff]/20 text-[#00d9ff] font-bold text-sm flex items-center justify-center border border-[#00d9ff]/30 shrink-0">
                          {fb.avatarLetter || fb.clientName.substring(0, 2).toUpperCase()}
                        </div>
                      )}
                      <div>
                        <h4 className="text-sm font-bold text-white flex items-center gap-1.5">
                          {fb.clientName}
                          {fb.googleVerified && (
                            <span className="px-2 py-0.5 rounded-full bg-emerald-500/15 text-emerald-400 border border-emerald-500/30 text-[9px] font-extrabold flex items-center gap-0.5">
                              <CheckCircle2 className="w-2.5 h-2.5" /> Verified Identity
                            </span>
                          )}
                        </h4>
                        <p className="text-[11px] text-slate-400">
                          {fb.clientEmail} • {fb.date}
                        </p>
                      </div>
                    </div>

                    <div className="flex flex-col items-end gap-1">
                      <div className="flex text-amber-400 text-xs">
                        {'★'.repeat(fb.rating)}
                      </div>
                      <span className="px-2 py-0.5 rounded bg-purple-500/15 text-purple-300 border border-purple-500/20 text-[10px] font-mono">
                        {fb.codeUsed}
                      </span>
                    </div>
                  </div>

                  {/* Comment */}
                  <p className="text-xs text-slate-200 leading-relaxed bg-[#121929] p-3.5 rounded-xl border border-white/5">
                    "{fb.comment}"
                  </p>

                  {/* Attached Picture Screenshot / Photo if available */}
                  {fb.imageUrl && (
                    <div className="pt-1">
                      <p className="text-[10px] font-bold text-slate-400 mb-1">Project Screenshot / Work Attachment:</p>
                      <img
                        src={fb.imageUrl}
                        alt="Project Screenshot"
                        className="w-full max-h-[300px] rounded-xl border border-white/10 object-contain bg-black/20 shadow-md"
                      />
                    </div>
                  )}

                  {/* Work link */}
                  {fb.workLink && (
                    <a
                      href={fb.workLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-xs text-[#00d9ff] hover:underline font-medium"
                    >
                      <ExternalLink className="w-3.5 h-3.5" /> View Project Link
                    </a>
                  )}

                  {/* Admin Reply */}
                  {fb.adminReply && (
                    <div className="p-3 bg-[#00d9ff]/5 border-l-2 border-[#00d9ff] rounded-r-xl text-xs">
                      <strong className="text-[11px] text-[#00d9ff]">Muhammad Ali’s reply:</strong>
                      <p className="text-slate-300 mt-0.5">{fb.adminReply}</p>
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
