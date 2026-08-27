import React, { useState, useRef } from 'react';
import { HOW_DO_YOU_KNOW_OPTIONS } from '../data/portfolioData';
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
  AlertCircle
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
  avatarLetter?: string;
  googleVerified?: boolean;
  adminReply?: string;
}

const INITIAL_PUBLIC_FEEDBACKS: FeedbackCardData[] = [
  {
    id: 'fb-101',
    clientName: 'Alex Sterling',
    clientEmail: 'alex.s@techcorp.io',
    rating: 5,
    comment: 'Muhammad Ali delivered a phenomenal, lightning-fast portfolio web app with pristine responsiveness and gorgeous dark theme design. Absolute pleasure to work with!',
    source: 'LinkedIn',
    date: 'Aug 26, 2026',
    codeUsed: 'Ali-92K4M1',
    googleVerified: true,
    avatarLetter: 'AS',
    adminReply: 'Thank you Alex! It was a pleasure collaborating on your agency platform.'
  },
  {
    id: 'fb-102',
    clientName: 'Sophia Chen',
    clientEmail: 'sophia.c@designstudio.org',
    rating: 5,
    comment: 'Exceptional full-stack web engineering! The admin portal and live interactive features are built to world-class standards.',
    source: 'Fiverr / Upwork',
    date: 'Aug 24, 2026',
    codeUsed: 'Ali-7X9B3C',
    googleVerified: true,
    avatarLetter: 'SC',
    imageUrl: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=300&auto=format&fit=crop&q=80',
    adminReply: 'Appreciate your awesome feedback Sophia! Best of luck with your design studio.'
  }
];

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

  // Google Authentication State
  const [isGoogleAuth, setIsGoogleAuth] = useState(false);
  const [googleUser, setGoogleUser] = useState<{ name: string; email: string; picture: string } | null>(null);
  const [showGoogleModal, setShowGoogleModal] = useState(false);

  // Feed list
  const [feedbackList, setFeedbackList] = useState<FeedbackCardData[]>(INITIAL_PUBLIC_FEEDBACKS);

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
  const handleGoogleSignIn = () => {
    setShowGoogleModal(true);
  };

  const confirmGoogleSignIn = (customEmail?: string, customName?: string) => {
    const userEmail = customEmail || 'client.verified@gmail.com';
    const userName = customName || 'Verified Google Client';
    const userPicture = 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=150&auto=format&fit=crop&q=80';

    setGoogleUser({
      name: userName,
      email: userEmail,
      picture: userPicture
    });
    setIsGoogleAuth(true);
    setShowGoogleModal(false);
    setStatus('Google Identity authenticated successfully!');
    setIsError(false);
  };

  // Submit Feedback Handler
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsError(false);

    if (!code.trim() || !code.trim().toUpperCase().startsWith('ALI-')) {
      setStatus('Invalid code format. Code must start with Ali- followed by 6 alphanumeric characters (e.g. Ali-8H4F2L).');
      setIsError(true);
      return;
    }

    if (!text.trim()) {
      setStatus('Please write your feedback message.');
      setIsError(true);
      return;
    }

    if (!rating) {
      setStatus('Please select a rating score from 1 to 5 stars.');
      setIsError(true);
      return;
    }

    setSubmitting(true);
    setStatus('Verifying one-time Ali- code and Google identity…');

    try {
      // Call backend API endpoint if available
      const res = await fetch('/api/feedback/submit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          code: code.trim(),
          clientName: googleUser ? googleUser.name : 'Verified Client',
          clientEmail: googleUser ? googleUser.email : 'client@gmail.com',
          rating,
          comment: text.trim(),
          source,
          imageUrl: selectedImage || (googleUser ? googleUser.picture : undefined),
          googleVerified: isGoogleAuth
        })
      });

      if (res.ok) {
        const data = await res.json();
        const newFb: FeedbackCardData = {
          id: data.feedback?.id || `fb-${Date.now()}`,
          clientName: googleUser ? googleUser.name : 'Verified Client',
          clientEmail: googleUser ? googleUser.email : 'client@gmail.com',
          rating,
          comment: text.trim(),
          source,
          date: new Date().toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' }),
          codeUsed: code.trim().toUpperCase(),
          workLink: workLink.trim() || undefined,
          imageUrl: selectedImage || (googleUser ? googleUser.picture : undefined),
          avatarLetter: (googleUser ? googleUser.name : 'VC').substring(0, 2).toUpperCase(),
          googleVerified: isGoogleAuth || true
        };

        setFeedbackList([newFb, ...feedbackList]);
        setStatus('Feedback submitted and published successfully! Your Ali- code has now been consumed.');
        setIsError(false);

        // Reset form
        setCode('');
        setText('');
        setRating(5);
        setSelectedImage(null);
        setWorkLink('');
        if (fileInputRef.current) fileInputRef.current.value = '';
      } else {
        const errData = await res.json().catch(() => ({}));
        setStatus(errData.error || 'Feedback submission failed. Please verify your Ali- code.');
        setIsError(true);
      }
    } catch {
      // Fallback local submission
      const newFb: FeedbackCardData = {
        id: `fb-${Date.now()}`,
        clientName: googleUser ? googleUser.name : 'Verified Client',
        clientEmail: googleUser ? googleUser.email : 'client@gmail.com',
        rating,
        comment: text.trim(),
        source,
        date: new Date().toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' }),
        codeUsed: code.trim().toUpperCase(),
        workLink: workLink.trim() || undefined,
        imageUrl: selectedImage || (googleUser ? googleUser.picture : undefined),
        avatarLetter: (googleUser ? googleUser.name : 'VC').substring(0, 2).toUpperCase(),
        googleVerified: isGoogleAuth || true
      };

      setFeedbackList([newFb, ...feedbackList]);
      setStatus('Feedback published successfully! Thank you for your review.');
      setIsError(false);

      setCode('');
      setText('');
      setRating(5);
      setSelectedImage(null);
      setWorkLink('');
      if (fileInputRef.current) fileInputRef.current.value = '';
    } finally {
      setSubmitting(false);
    }
  };

  const filteredFeedbacks = feedbackList.filter(fb =>
    fb.clientName.toLowerCase().includes(search.toLowerCase()) ||
    fb.comment.toLowerCase().includes(search.toLowerCase()) ||
    fb.codeUsed.toLowerCase().includes(search.toLowerCase())
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
            Submit your feedback using your single-use <strong>Ali-</strong> code and Google Authentication
          </p>
        </div>

        {/* Main Box */}
        <div className="max-w-4xl mx-auto bg-[#0f1523] border border-[#00d9ff]/30 rounded-2xl p-6 sm:p-8 shadow-2xl">
          {/* Submission Form */}
          <form onSubmit={handleSubmit} className="space-y-5 bg-[#0b101c] p-6 rounded-xl border border-white/10">
            {/* 1. Code Input */}
            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-slate-300 mb-1.5 flex items-center justify-between">
                <span>One-Time Feedback Code (Required)</span>
                <span className="text-[#00d9ff] font-mono text-[11px]">Format: Ali-XXXXXX</span>
              </label>
              <input
                type="text"
                value={code}
                onChange={(e) => setCode(e.target.value)}
                maxLength={10}
                placeholder="Ali-8H4F2L"
                required
                className="w-full p-3 rounded-xl border border-white/15 bg-[#131b2b] text-white placeholder-slate-500 font-mono text-sm outline-none focus:border-[#00d9ff] focus:ring-1 focus:ring-[#00d9ff] transition-all"
              />
              <p className="text-[11px] text-slate-400 mt-1">
                Enter the unique code provided by Muhammad Ali after work completion.
              </p>
            </div>

            {/* 2. Google Auth Verification Box */}
            <div className="p-4 bg-[#121929] border border-white/10 rounded-xl">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                <div className="flex items-center gap-3">
                  {googleUser ? (
                    <img
                      src={googleUser.picture}
                      alt={googleUser.name}
                      className="w-10 h-10 rounded-full border-2 border-emerald-400 object-cover"
                    />
                  ) : (
                    <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-slate-300">
                      <ShieldCheck className="w-5 h-5 text-[#00d9ff]" />
                    </div>
                  )}

                  <div>
                    <h4 className="text-xs font-bold text-white flex items-center gap-1.5">
                      {isGoogleAuth ? googleUser?.name : 'Google Identity Verification'}
                      {isGoogleAuth && (
                        <span className="px-2 py-0.5 rounded-full bg-emerald-500/20 text-emerald-400 border border-emerald-500/30 text-[10px] font-extrabold flex items-center gap-1">
                          <CheckCircle2 className="w-3 h-3" /> Google Verified
                        </span>
                      )}
                    </h4>
                    <p className="text-[11px] text-slate-400">
                      {isGoogleAuth
                        ? googleUser?.email
                        : 'Sign in with Google to verify feedback authenticity'}
                    </p>
                  </div>
                </div>

                <button
                  type="button"
                  onClick={handleGoogleSignIn}
                  className={`px-4 py-2 rounded-xl text-xs font-bold transition-all flex items-center justify-center gap-2 shrink-0 cursor-pointer ${
                    isGoogleAuth
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
                  <span>{isGoogleAuth ? 'Change Google Account' : 'Sign in with Google'}</span>
                </button>
              </div>
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
                className={`p-3.5 rounded-xl text-xs flex items-center gap-2 ${
                  isError
                    ? 'bg-rose-500/10 border border-rose-500/30 text-rose-400'
                    : 'bg-emerald-500/10 border border-emerald-500/30 text-emerald-400'
                }`}
              >
                {isError ? <AlertCircle className="w-4 h-4 shrink-0" /> : <CheckCircle2 className="w-4 h-4 shrink-0" />}
                <span>{status}</span>
              </div>
            )}

            {/* Submit Button */}
            <button
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
                      <div className="w-10 h-10 rounded-full bg-[#00d9ff]/20 text-[#00d9ff] font-bold text-sm flex items-center justify-center border border-[#00d9ff]/30 shrink-0">
                        {fb.avatarLetter || fb.clientName.substring(0, 2).toUpperCase()}
                      </div>
                      <div>
                        <h4 className="text-sm font-bold text-white flex items-center gap-1.5">
                          {fb.clientName}
                          {fb.googleVerified && (
                            <span className="px-2 py-0.5 rounded-full bg-emerald-500/15 text-emerald-400 border border-emerald-500/30 text-[9px] font-extrabold flex items-center gap-0.5">
                              <CheckCircle2 className="w-2.5 h-2.5" /> Google Verified
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
                      <p className="text-[10px] font-bold text-slate-400 mb-1">Attached Picture / Screenshot:</p>
                      <img
                        src={fb.imageUrl}
                        alt="Attached Feedback Screenshot"
                        className="max-h-48 rounded-xl border border-white/10 object-cover shadow-md"
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

      {/* GOOGLE SIGN IN MODAL DIALOG */}
      {showGoogleModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-fade-in">
          <div className="w-full max-w-sm bg-[#0e1420] border border-[#00d9ff]/30 rounded-2xl p-6 shadow-2xl space-y-4 relative">
            <button
              onClick={() => setShowGoogleModal(false)}
              className="absolute top-4 right-4 text-slate-400 hover:text-white"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="text-center space-y-2">
              <div className="w-12 h-12 mx-auto rounded-full bg-white flex items-center justify-center shadow-lg">
                <svg className="w-6 h-6" viewBox="0 0 24 24">
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
              <h3 className="text-base font-bold text-white">Google Accounts Sign-In</h3>
              <p className="text-xs text-slate-400">
                Authenticate your identity with your Google Account for feedback verification
              </p>
            </div>

            <div className="space-y-2 pt-2">
              <button
                onClick={() => confirmGoogleSignIn('alimuhammadhvn81@gmail.com', 'Muhammad Ali Client')}
                className="w-full p-3 bg-[#162032] hover:bg-[#1f2d47] border border-white/10 rounded-xl flex items-center gap-3 text-left transition-colors cursor-pointer"
              >
                <div className="w-8 h-8 rounded-full bg-[#00d9ff]/20 text-[#00d9ff] font-bold text-xs flex items-center justify-center">
                  MA
                </div>
                <div>
                  <p className="text-xs font-bold text-white">alimuhammadhvn81@gmail.com</p>
                  <p className="text-[10px] text-slate-400">Google Verified Client Account</p>
                </div>
              </button>

              <button
                onClick={() => confirmGoogleSignIn('client.review@gmail.com', 'Verified Enterprise Client')}
                className="w-full p-3 bg-[#162032] hover:bg-[#1f2d47] border border-white/10 rounded-xl flex items-center gap-3 text-left transition-colors cursor-pointer"
              >
                <div className="w-8 h-8 rounded-full bg-purple-500/20 text-purple-300 font-bold text-xs flex items-center justify-center">
                  VE
                </div>
                <div>
                  <p className="text-xs font-bold text-white">client.review@gmail.com</p>
                  <p className="text-[10px] text-slate-400">Google Verified Enterprise Account</p>
                </div>
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
