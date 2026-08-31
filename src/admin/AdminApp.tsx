import React, { useState, useEffect } from 'react';
import { collection, doc, getDoc, getDocs, query, where, orderBy, updateDoc, doc as firestoreDoc, deleteDoc, addDoc, setDoc, increment, enableNetwork } from 'firebase/firestore';
import { getDb, getFirebaseAuth } from '../lib/firebase';
import { signInWithEmailAndPassword, onAuthStateChanged, signOut, signInAnonymously } from 'firebase/auth';
import {
  Lock, Mail, Eye, EyeOff, ShieldCheck, ArrowRight, Sparkles, CheckCircle2,
  AlertCircle, X, KeyRound, Phone, Globe, Award, LayoutDashboard,
  MessageSquare, Star, Briefcase, Settings, LogOut, ChevronRight, Search,
  Bell, RefreshCw, Plus, Trash2, ExternalLink, Filter, MoreHorizontal,
  ChevronLeft, Smartphone, Laptop, Tablet, History, User, CreditCard,
  Target, Info, XCircle, Save, Send, Clock, PieChart as PieChartIcon, BarChart2, Check,
  Copy, CheckCheck, MessageCircle, ArrowUpRight, ThumbsUp, ThumbsDown,
  Layers, Wrench, Heart, Eye as ViewIcon, ChevronDown, ChevronUp, Database,
  HardDrive, FileText, CheckCircle, Shield, Key
} from 'lucide-react';
import {
  ResponsiveContainer,
  AreaChart,
  Area,
  XAxis,
  YAxis,
  Tooltip,
  PieChart,
  Pie,
  Cell
} from 'recharts';
import {
  DEFAULT_ADMIN_USER,
  INITIAL_STATS,
  INITIAL_FEEDBACKS,
  INITIAL_INQUIRIES,
  INITIAL_CODES
} from './adminStore';
import { AdminUser, FeedbackItem, InquiryItem, GeneratedCode, DashboardStats } from './types';
import ContentManager from './ContentManager';
import { IMAGES } from '../images';

// =========================================================================
// SCREENSHOT 1: EXACT MATCH ADMIN LOGIN PORTAL
// =========================================================================

function AdminLogin({
  onLoginSuccess,
  onBackToWebsite
}: {
  onLoginSuccess: (token: string, user: AdminUser) => void;
  onBackToWebsite?: () => void;
}) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [keepSignedIn, setKeepSignedIn] = useState(true);
  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const [successMessage, setSuccessMessage] = useState('');
  const [isProfileOpen, setIsProfileOpen] = useState(false);
  const [accessCode, setAccessCode] = useState('');
  const [useAccessCode, setUseAccessCode] = useState(false);

  // Fallback Master Access Code
  const MASTER_ACCESS_CODE = "ali-786-portfolio";

  const handleAccessCodeLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMessage('');
    setSuccessMessage('');
    setLoading(true);

    // Artificial delay for security feel
    await new Promise(resolve => setTimeout(resolve, 800));

    if (accessCode.trim() === MASTER_ACCESS_CODE) {
      try {
        const auth = getFirebaseAuth();
        if (!auth) throw new Error('Auth not initialized');
        await signInAnonymously(auth);

        setSuccessMessage('Access Granted! Welcome, Muhammad Ali.');
        const adminUser: AdminUser = {
          name: 'Muhammad Ali (Master)',
          email: 'alimuhammadhvn81@gmail.com',
          role: 'Master Admin',
          avatarUrl: IMAGES.profile,
          status: 'Online'
        };

        const fakeToken = "bypass_token_" + Date.now();
        if (keepSignedIn) {
          localStorage.setItem('ma_admin_auth_token', fakeToken);
          localStorage.setItem('ma_admin_user', JSON.stringify(adminUser));
        } else {
          sessionStorage.setItem('ma_admin_auth_token', fakeToken);
          sessionStorage.setItem('ma_admin_user', JSON.stringify(adminUser));
        }
        setTimeout(() => onLoginSuccess(fakeToken, adminUser), 500);
      } catch (authError: any) {
        console.warn("Auth Domain Pending (Proceeding via Bypass):", authError.message);
        // Even if auth fails (domain blocked), we proceed because we relaxed Firestore rules
        setSuccessMessage('Secure Access Granted! Redirecting...');
        const adminUser: AdminUser = {
          name: 'Muhammad Ali (Bypass)',
          email: 'alimuhammadhvn81@gmail.com',
          role: 'Master Admin',
          avatarUrl: IMAGES.profile,
          status: 'Online'
        };

        const fakeToken = "bypass_token_" + Date.now();
        if (keepSignedIn) {
          localStorage.setItem('ma_admin_auth_token', fakeToken);
          localStorage.setItem('ma_admin_user', JSON.stringify(adminUser));
        } else {
          sessionStorage.setItem('ma_admin_auth_token', fakeToken);
          sessionStorage.setItem('ma_admin_user', JSON.stringify(adminUser));
        }
        setTimeout(() => onLoginSuccess(fakeToken, adminUser), 500);
      } finally {
        setLoading(false);
      }
      return;
    } else {
      setErrorMessage('Invalid Security Access Code. Access Denied.');
    }
    setLoading(false);
  };

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMessage('');
    setSuccessMessage('');
    setLoading(true);
    
    const auth = getFirebaseAuth();
    if (!auth) {
      setErrorMessage('Firebase Auth not initialized.');
      setLoading(false);
      return;
    }

    try {
      const userCredential = await signInWithEmailAndPassword(auth, email.trim(), password);
      const user = userCredential.user;
      
      if (user.uid === 'QyheR7VsOJZTmDFRclcA2PuLr7q1' || user.email === 'alimuhammadhvn81@gmail.com') {
        setSuccessMessage('Authenticated successfully! Loading Full Dashboard...');
        const adminUser: AdminUser = {
          name: user.displayName || 'Muhammad Ali',
          email: user.email || email,
          role: 'Master Admin',
          avatarUrl: user.photoURL || IMAGES.profile,
          status: 'Online'
        };
        
        const token = await user.getIdToken();
        if (keepSignedIn) {
          localStorage.setItem('ma_admin_auth_token', token);
          localStorage.setItem('ma_admin_user', JSON.stringify(adminUser));
        } else {
          sessionStorage.setItem('ma_admin_auth_token', token);
          sessionStorage.setItem('ma_admin_user', JSON.stringify(adminUser));
        }
        setTimeout(() => onLoginSuccess(token, adminUser), 500);
      } else {
        await signOut(auth);
        setErrorMessage('Access Denied: You do not have administrator privileges.');
      }
    } catch (error: any) {
      const msg = error.message || '';
      if (msg.includes('referer') || msg.includes('domain') || msg.includes('unauthorized') || msg.includes('network-request-failed')) {
        console.warn("Auth Service Issue:", msg);
        setErrorMessage("NETWORK OR DOMAIN ISSUE: Firebase authentication is currently unreachable or restricted on this domain. Please use the 'Security Access Code' login method below to enter the dashboard immediately.");
      } else {
        console.error("Login error:", error);
        setErrorMessage(msg || 'Invalid administrator credentials.');
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-[#070b14] flex flex-col justify-between items-center p-4 sm:p-6 relative overflow-hidden text-slate-200">
      {/* Background Radial Glow */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-[#00d9ff]/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="w-full flex-1 flex items-center justify-center relative z-10 my-auto py-8">
        <div className="w-full max-w-[420px] bg-[#0c1220]/95 backdrop-blur-2xl border border-white/10 rounded-3xl p-6 sm:p-8 shadow-[0_20px_50px_rgba(0,0,0,0.8)] relative">
          {/* Glowing Profile Avatar with Online Dot */}
          <div className="text-center mb-6 flex flex-col items-center">
            <div 
              className="relative cursor-pointer group"
              onClick={() => setIsProfileOpen(true)}
              title="View Admin ID Card"
            >
              <div className="w-20 h-20 rounded-2xl p-[2px] bg-gradient-to-tr from-[#00d9ff] via-[#38bdf8] to-[#0ea5e9] shadow-[0_0_20px_rgba(0,217,255,0.4)]">
                <img 
                  src={IMAGES.profile} 
                  alt="Muhammad Ali" 
                  className="w-full h-full object-cover rounded-[14px]" 
                />
              </div>
              <span className="absolute -bottom-1 -right-1 w-4 h-4 rounded-full bg-emerald-400 border-2 border-[#0c1220] ring-2 ring-emerald-400/40 animate-pulse" />
            </div>

            <button 
              type="button" 
              onClick={() => setIsProfileOpen(true)}
              className="text-xs font-semibold text-[#00d9ff] mt-3 hover:underline flex items-center gap-1 cursor-pointer"
            >
              Muhammad Ali Profile <Sparkles size={13} className="text-amber-400" />
            </button>

            <h1 className="text-xl sm:text-2xl font-black text-white flex items-center gap-2 mt-1">
              Admin Portal <ShieldCheck size={20} className="text-[#00d9ff]" />
            </h1>
            <p className="text-[11px] text-slate-400 mt-1">
              Full-Screen Portfolio Management & System Control
            </p>
          </div>

          {errorMessage && (
            <div className="mb-4 p-3 bg-rose-500/10 border border-rose-500/30 rounded-xl text-rose-300 text-xs flex items-center gap-2">
              <AlertCircle size={15} className="shrink-0" />
              <span>{errorMessage}</span>
            </div>
          )}

          {successMessage && (
            <div className="mb-4 p-3 bg-emerald-500/10 border border-emerald-500/30 rounded-xl text-emerald-300 text-xs flex items-center gap-2">
              <CheckCircle2 size={15} className="shrink-0" />
              <span>{successMessage}</span>
            </div>
          )}

          {!useAccessCode ? (
            <form onSubmit={handleLogin} className="space-y-4">
              {/* Email Field */}
              <div>
                <label className="block text-[11px] font-bold tracking-wider text-slate-400 uppercase mb-1.5">
                  Admin Email Address
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-500">
                    <Mail size={16} />
                  </div>
                  <input 
                    type="email" 
                    value={email} 
                    onChange={e => setEmail(e.target.value)} 
                    className="w-full pl-10 pr-4 py-3 bg-[#111928] border border-white/10 rounded-xl text-xs sm:text-sm text-white placeholder-slate-500 focus:border-[#00d9ff] focus:ring-1 focus:ring-[#00d9ff] focus:outline-none transition-all" 
                    placeholder="alimuhammadhvn81@gmail.com" 
                    required
                  />
                </div>
              </div>

              {/* Password Field */}
              <div>
                <div className="flex items-center justify-between mb-1.5">
                  <label className="block text-[11px] font-bold tracking-wider text-slate-400 uppercase">
                    Admin Password
                  </label>
                  <span className="text-[10px] text-slate-500 font-semibold uppercase">Private</span>
                </div>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-500">
                    <Lock size={16} />
                  </div>
                  <input 
                    type={showPassword ? 'text' : 'password'} 
                    value={password} 
                    onChange={e => setPassword(e.target.value)} 
                    className="w-full pl-10 pr-10 py-3 bg-[#111928] border border-white/10 rounded-xl text-xs sm:text-sm text-white placeholder-slate-500 focus:border-[#00d9ff] focus:ring-1 focus:ring-[#00d9ff] focus:outline-none transition-all" 
                    placeholder="Enter password..." 
                    required
                  />
                  <button 
                    type="button" 
                    onClick={() => setShowPassword(!showPassword)} 
                    className="absolute inset-y-0 right-0 pr-3.5 flex items-center text-slate-500 hover:text-white cursor-pointer"
                  >
                    {showPassword ? <EyeOff size={16} /> : <Eye size={16} />}
                  </button>
                </div>
              </div>

              {/* Remember Me & Back to Website */}
              <div className="flex items-center justify-between pt-1 text-xs">
                <label className="flex items-center gap-2 cursor-pointer text-slate-400 hover:text-slate-300 select-none">
                  <input 
                    type="checkbox" 
                    checked={keepSignedIn} 
                    onChange={e => setKeepSignedIn(e.target.checked)} 
                    className="w-3.5 h-3.5 rounded bg-[#111928] border-white/20 text-[#00d9ff] focus:ring-0 focus:ring-offset-0 cursor-pointer"
                  />
                  <span>Keep me signed in</span>
                </label>

                {onBackToWebsite && (
                  <button 
                    type="button" 
                    onClick={onBackToWebsite} 
                    className="text-slate-400 hover:text-[#00d9ff] text-xs transition-colors cursor-pointer"
                  >
                    ← Back to Website
                  </button>
                )}
              </div>

              {/* Submit Button */}
              <button 
                type="submit" 
                disabled={loading} 
                className="w-full py-3.5 px-4 bg-gradient-to-r from-[#00d9ff] to-[#00b4d8] text-[#061017] font-black rounded-xl text-sm flex justify-center items-center gap-2 shadow-[0_0_25px_rgba(0,217,255,0.35)] hover:shadow-[0_0_35px_rgba(0,217,255,0.5)] transition-all cursor-pointer disabled:opacity-50 mt-2"
              >
                {loading ? (
                  <div className="w-5 h-5 border-2 border-[#061017] border-t-transparent rounded-full animate-spin" />
                ) : (
                  <>Sign In to Full Dashboard <ArrowRight size={17} /></>
                )}
              </button>

              <button 
                type="button"
                onClick={() => setUseAccessCode(true)}
                className="w-full py-2.5 bg-white/5 border border-white/5 rounded-xl text-slate-400 font-bold text-[10px] uppercase tracking-widest hover:bg-white/10 transition-all mt-2 cursor-pointer"
              >
                Login via Security Access Code
              </button>
            </form>
          ) : (
            <form onSubmit={handleAccessCodeLogin} className="space-y-4">
              <div>
                <label className="block text-[11px] font-bold tracking-wider text-slate-400 uppercase mb-1.5">
                  Master Access Code
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-[#00d9ff]">
                    <ShieldCheck size={16} />
                  </div>
                  <input 
                    type="password" 
                    value={accessCode} 
                    onChange={e => setAccessCode(e.target.value)} 
                    className="w-full pl-10 pr-4 py-4 bg-[#111928] border border-[#00d9ff]/30 rounded-xl text-xs sm:text-sm text-white placeholder-slate-500 focus:border-[#00d9ff] focus:ring-2 focus:ring-[#00d9ff]/20 focus:outline-none transition-all" 
                    placeholder="Enter security code..." 
                    autoFocus
                    required
                  />
                </div>
              </div>

              <button 
                type="submit" 
                disabled={loading}
                className="w-full py-4 bg-gradient-to-r from-[#00d9ff] to-[#7c5cff] rounded-xl text-white font-black text-xs uppercase tracking-[0.15em] flex items-center justify-center gap-2 shadow-lg shadow-[#00d9ff]/20 hover:scale-[1.02] active:scale-[0.98] transition-all disabled:opacity-50 cursor-pointer"
              >
                {loading ? (
                  <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                ) : (
                  <>
                    <Key size={18} />
                    Verify & Enter
                  </>
                )}
              </button>

              <button 
                type="button"
                onClick={() => setUseAccessCode(false)}
                className="w-full py-2.5 text-slate-500 font-bold text-[10px] uppercase tracking-widest hover:text-white transition-all mt-2 cursor-pointer"
              >
                Back to Standard Login
              </button>
            </form>
          )}

          {/* Footer Card Pill */}
          <div className="mt-6 pt-4 border-t border-white/5 flex items-center justify-between text-[11px] text-slate-500">
            <span>Protected Master Admin Portal</span>
            <span className="px-2.5 py-1 rounded-md bg-[#00d9ff]/10 text-[#00d9ff] font-semibold border border-[#00d9ff]/20 text-[10px]">
              Encrypted Session
            </span>
          </div>
        </div>
      </div>

      {/* Bottom Copyright */}
      <footer className="text-center text-[11px] text-slate-600 pb-4 relative z-10">
        © 2025 Muhammad Ali Portfolio. All Rights Reserved.
      </footer>

      {/* Profile ID Modal */}
      {isProfileOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-md p-4" onClick={() => setIsProfileOpen(false)}>
          <div className="w-full max-w-sm bg-[#0e1422] border border-[#00d9ff]/30 rounded-3xl p-6 relative shadow-2xl" onClick={e => e.stopPropagation()}>
            <button onClick={() => setIsProfileOpen(false)} className="absolute top-4 right-4 text-slate-400 hover:text-white p-1 rounded-lg bg-white/5">
              <X size={18} />
            </button>
            <div className="text-center">
              <div className="w-20 h-20 mx-auto rounded-2xl p-1 bg-gradient-to-tr from-[#00d9ff] to-[#38bdf8] mb-3">
                <img src={IMAGES.profile} className="w-full h-full object-cover rounded-xl" alt="Muhammad Ali" />
              </div>
              <h3 className="text-lg font-black text-white">Muhammad Ali</h3>
              <p className="text-xs text-[#00d9ff] font-semibold">Full-Stack, AI & 2D Game Developer</p>
              <div className="mt-4 pt-4 border-t border-white/10 text-left space-y-2 text-xs text-slate-300">
                <p><span className="text-slate-500 font-semibold">Email:</span> alimuhammadhvn81@gmail.com</p>
                <p><span className="text-slate-500 font-semibold">WhatsApp:</span> +92 342 6793428</p>
                <p><span className="text-slate-500 font-semibold">Call:</span> +92 330 0358799</p>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

// =========================================================================
// MAIN FULL DASHBOARD (SCREENSHOT 2 & 3)
// =========================================================================

export default function AdminApp({ onBack }: { onBack?: () => void }) {
  const db = getDb();
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [user, setUser] = useState<AdminUser>(DEFAULT_ADMIN_USER);
  const [activeTab, setActiveTab] = useState<string>('dashboard');
  const [stats, setStats] = useState<DashboardStats>(INITIAL_STATS);
  const [feedbacks, setFeedbacks] = useState<FeedbackItem[]>(INITIAL_FEEDBACKS);
  const [inquiries, setInquiries] = useState<InquiryItem[]>(INITIAL_INQUIRIES);
  const [codes, setCodes] = useState<GeneratedCode[]>(INITIAL_CODES);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isRefreshing, setIsRefreshing] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [status, setStatus] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  // Expandable Quick Sections
  const [isRecentFeedbacksOpen, setIsRecentFeedbacksOpen] = useState(false);
  const [isRecentInquiriesOpen, setIsRecentInquiriesOpen] = useState(false);

  // New Code Form State
  const [assignedClient, setAssignedClient] = useState('');
  const [isGeneratingCode, setIsGeneratingCode] = useState(false);
  const [copiedCodeId, setCopiedCodeId] = useState<string | null>(null);
  const [isProfileModalOpen, setIsProfileModalOpen] = useState(false);

  // Profile traffic data for Line/Area chart
  const trafficData = [
    { date: 'Aug 22', views: 820 },
    { date: 'Aug 23', views: 950 },
    { date: 'Aug 24', views: 1100 },
    { date: 'Aug 25', views: 1040 },
    { date: 'Aug 26', views: 1180 },
    { date: 'Aug 27', views: 1250 }
  ];

  // Feedback Donut Chart Data
  const starRatingData = [
    { name: '1 Star', value: 1, color: '#ef4444' },
    { name: '2 Stars', value: 1, color: '#f97316' },
    { name: '3 Stars', value: 2, color: '#eab308' },
    { name: '4 Stars', value: 5, color: '#38bdf8' },
    { name: '5 Stars', value: 16, color: '#00d9ff' }
  ];

  const approvalStatusData = [
    { name: 'Archived', value: 2, color: '#38bdf8' },
    { name: 'Pending Review', value: 4, color: '#eab308' },
    { name: 'Published', value: 16, color: '#10b981' }
  ];

  const serviceShareData = [
    { name: 'Web Development', value: 45, color: '#00d9ff' },
    { name: 'Game & AI', value: 30, color: '#a855f7' },
    { name: 'Pixel Forge', value: 15, color: '#f59e0b' },
    { name: 'Architecture', value: 10, color: '#10b981' }
  ];

  useEffect(() => {
    const auth = getFirebaseAuth();
    if (!auth) return;

    const unsubscribe = onAuthStateChanged(auth, async (firebaseUser) => {
      const storedToken = localStorage.getItem('ma_admin_auth_token') || sessionStorage.getItem('ma_admin_auth_token');
      const isBypass = storedToken && storedToken.startsWith('bypass_token_');

      if (firebaseUser && (firebaseUser.uid === 'QyheR7VsOJZTmDFRclcA2PuLr7q1' || firebaseUser.email === 'alimuhammadhvn81@gmail.com' || firebaseUser.isAnonymous)) {
        const adminUser: AdminUser = {
          name: firebaseUser.displayName || 'Muhammad Ali',
          email: firebaseUser.email || '',
          role: 'Master Admin',
          avatarUrl: firebaseUser.photoURL || IMAGES.profile,
          status: 'Online'
        };
        setUser(adminUser);
        setIsAuthenticated(true);
        const token = await firebaseUser.getIdToken();
        localStorage.setItem('ma_admin_auth_token', token);
        localStorage.setItem('ma_admin_user', JSON.stringify(adminUser));
        
        // Fetch data after successful auth
        fetchAllData();
      } else {
        if (!storedToken) {
          setIsAuthenticated(false);
        } else {
          // If we have a token (real or bypass), consider authenticated for the UI
          if (isBypass) {
            const storedUser = localStorage.getItem('ma_admin_user') || sessionStorage.getItem('ma_admin_user');
            if (storedUser) {
              setUser(JSON.parse(storedUser));
            }
          }
          setIsAuthenticated(true);
          // Fetch data after successful bypass auth
          fetchAllData();
        }
      }
    });

    return () => unsubscribe();
  }, []);

  const fetchAllData = async () => {
    setIsRefreshing(true);
    setErrorMessage('');

    try {
      // 1. Fetch site_stats
      const statsRef = firestoreDoc(db, 'site_stats', 'global');
      const snap = await getDoc(statsRef);
      
      let sData: any = null;

      if (snap.exists()) {
        sData = snap.data();
      } else {
        // Initialize if not exists
        sData = {
          profileViews: 168,
          satisfiedClients: 0,
          unsatisfiedClients: 0,
          positiveReactions: 54,
          negativeReactions: 0
        };
        await setDoc(statsRef, sData);
      }

      // 2. Fetch all feedbacks
      const fbSnap = await getDocs(collection(db, 'feedbacks'));
      const fRaw = fbSnap.docs.map(d => d.data());

      const approved = fRaw?.filter(f => f.isApproved) || [];
      const totalApproved = approved.length;
      const avgRating = totalApproved > 0 
        ? approved.reduce((acc, curr) => acc + (curr.rating || 0), 0) / totalApproved 
        : 0;

      // Calculate rating breakdown for chart
      const breakdown = {
        stars5: approved.filter(f => f.rating === 5).length,
        stars4: approved.filter(f => f.rating === 4).length,
        stars3: approved.filter(f => f.rating === 3).length,
        stars2: approved.filter(f => f.rating === 2).length,
        stars1: approved.filter(f => f.rating === 1).length,
      };

      setStats(prev => ({
        ...prev,
        totalFeedbacks: totalApproved,
        profileViews: sData?.profileViews || prev.profileViews,
        averageRating: avgRating,
        positiveReactions: sData?.positiveReactions || prev.positiveReactions,
        negativeReactions: sData?.negativeReactions || prev.negativeReactions,
        satisfiedClients: sData?.satisfiedClients || prev.satisfiedClients,
        ratingBreakdown: breakdown
      }));

      // 3. Fetch Feedbacks list
      const fbListSnap = await getDocs(query(collection(db, 'feedbacks'), orderBy('date', 'desc')));
      setFeedbacks(fbListSnap.docs.map(doc => {
        const f = doc.data();
        return {
          id: doc.id,
          clientName: f.clientName,
          clientEmail: f.clientEmail,
          clientPhoto: f.clientPhoto,
          rating: f.rating,
          comment: f.comment,
          source: f.source,
          date: f.date ? new Date(f.date).toLocaleDateString() : 'Today',
          status: f.isApproved ? 'Published' : 'Pending',
          adminReply: f.adminReply,
          imageUrl: f.projectScreenshot,
          projectImages: f.projectImages || [],
          attachmentLinks: f.attachmentLinks || [],
          googleVerified: f.googleVerified
        };
      }));

      // 4. Fetch Codes
      const codesSnap = await getDocs(query(collection(db, 'feedback_codes'), orderBy('createdAt', 'desc')));
      setCodes(codesSnap.docs.map(doc => {
        const c = doc.data();
        return {
          id: doc.id,
          code: c.code,
          assignedTo: c.assignedTo || 'General Client',
          status: c.isUsed ? 'Used' : 'Active',
          createdAt: c.createdAt ? new Date(c.createdAt).toLocaleDateString() : 'Today',
          usedAt: c.usedAt
        };
      }));

      // 5. Fetch Inquiries
      const inqSnap = await getDocs(query(collection(db, 'inquiries'), orderBy('date', 'desc')));
      setInquiries(inqSnap.docs.map(doc => {
        const inq = doc.data();
        return {
          id: doc.id,
          name: inq.name || 'Client',
          email: inq.email || '',
          phone: inq.phone,
          subject: inq.subject || 'Project Inquiry',
          service: inq.service || 'Web Development',
          budget: inq.budget || '$10+ USD',
          message: inq.message || '',
          status: inq.status || 'New',
          date: inq.date ? new Date(inq.date).toLocaleDateString() : 'Today'
        };
      }));

    } catch (err: any) {
      console.error("Error fetching dashboard data:", err);
      let msg = "Failed to load dashboard data.";
      if (err.message?.includes('offline')) {
        msg = "The system is offline or connection to database is blocked. Please check your internet and try the 'Retry' button.";
      } else if (err.code === 'permission-denied') {
        msg = "Access Denied: You do not have administrator permissions.";
      }
      setErrorMessage(msg);
    }

    setIsRefreshing(false);
  };

  const handleLogout = async () => {
    const auth = getFirebaseAuth();
    if (auth) {
      try {
        await signOut(auth);
      } catch (err) {
        console.error("Sign out error:", err);
      }
    }
    localStorage.removeItem('ma_admin_auth_token');
    sessionStorage.removeItem('ma_admin_auth_token');
    localStorage.removeItem('ma_admin_user');
    setIsAuthenticated(false);
    if (onBack) onBack();
  };

  const handleGenerateCode = async (e?: React.FormEvent) => {
    if (e) e.preventDefault();
    setIsGeneratingCode(true);
    const clientName = (assignedClient || '').trim() || 'VIP Client';
    
    // Create random 6-character suffix
    const chars = "ABCDEFGHJKLMNPQRSTUVWXYZ23456789";
    let suffix = "";
    for (let i = 0; i < 6; i++) {
      suffix += chars.charAt(Math.floor(Math.random() * chars.length));
    }
    const newGeneratedCode = `Ali-${suffix}`;

    try {
      await setDoc(doc(db, 'feedback_codes', newGeneratedCode), {
        code: newGeneratedCode,
        assignedTo: clientName,
        isUsed: false,
        createdAt: new Date().toISOString()
      });
      
      setCodes(prev => [
        {
          id: newGeneratedCode,
          code: newGeneratedCode,
          assignedTo: clientName,
          status: 'Active',
          createdAt: 'Today',
          usedAt: undefined
        },
        ...prev
      ]);
      setAssignedClient('');
    } catch (err: any) {
      console.error("Code generation error:", err);
      // Fallback
      const fallbackCode: GeneratedCode = {
        id: `code-${Date.now()}`,
        code: newGeneratedCode,
        assignedTo: clientName,
        status: 'Active',
        createdAt: 'Today'
      };
      setCodes(prev => [fallbackCode, ...prev]);
      setAssignedClient('');
    } finally {
      setIsGeneratingCode(false);
    }
  };

  const handleDeleteCode = async (id: string) => {
    try {
      await deleteDoc(firestoreDoc(db, 'feedback_codes', id));
    } catch (err) {
      console.error(err);
    }
    setCodes(prev => prev.filter(c => c.id !== id));
  };

  const handleToggleCode = async (id: string) => {
    const code = codes.find(c => c.id === id);
    if (!code) return;
    const newStatus = code.status === 'Active' ? true : false;
    try {
      await updateDoc(firestoreDoc(db, 'feedback_codes', id), { isUsed: newStatus });
    } catch (err) {
      console.error(err);
    }
    setCodes(prev => prev.map(c => c.id === id ? { ...c, status: c.status === 'Active' ? 'Used' : 'Active' } : c));
  };

  const handleCopyCode = (codeText: string, id: string) => {
    navigator.clipboard.writeText(codeText);
    setCopiedCodeId(id);
    setTimeout(() => setCopiedCodeId(null), 2000);
  };

  const handleApproveFeedback = async (id: string) => {
    try {
      await updateDoc(firestoreDoc(db, 'feedbacks', id), { isApproved: true });
      
      setFeedbacks(prev => prev.map(f => f.id === id ? { 
        ...f, 
        status: 'Published'
      } : f));
    } catch (err) {
      console.error(err);
    }
  };

  const handleRegenerateReply = async (id: string) => {
    // Note: AI generation usually happens on server, but for now we can just use a random one or keep current
    // In a real app we'd call a Supabase function or our server
    setStatus('Regenerating reply...');
    // Mocking for now to avoid breaking UI flow without server
  };

  const handleDeleteFeedback = async (id: string) => {
    try {
      await deleteDoc(firestoreDoc(db, 'feedbacks', id));
      setFeedbacks(prev => prev.filter(f => f.id !== id));
    } catch (err) {
      console.error(err);
    }
  };

  const handleUpdateInquiryStatus = async (id: string, status: 'New' | 'Read' | 'Replied') => {
    try {
      await updateDoc(firestoreDoc(db, 'inquiries', id), { status });
      setInquiries(prev => prev.map(i => i.id === id ? { ...i, status } : i));
    } catch (err) {
      console.error(err);
    }
  };

  const handleDeleteInquiry = async (id: string) => {
    try {
      await deleteDoc(firestoreDoc(db, 'inquiries', id));
      setInquiries(prev => prev.filter(i => i.id !== id));
    } catch (err) {
      console.error(err);
    }
  };

  if (!isAuthenticated) {
    return (
      <AdminLogin 
        onLoginSuccess={(_t, u) => { setUser(u); setIsAuthenticated(true); fetchAllData(); }} 
        onBackToWebsite={onBack}
      />
    );
  }

  // Filtered inquiries for search
  const filteredInquiries = inquiries.filter(i => 
    i.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    i.subject.toLowerCase().includes(searchQuery.toLowerCase()) ||
    i.service.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="min-h-screen w-full bg-[#070b14] text-slate-200 flex overflow-hidden">
      {/* =========================================================================
          SCREENSHOT 2: NAVIGATION MENU SIDEBAR / DRAWER
         ========================================================================= */}
      {/* Mobile Backdrop */}
      {isSidebarOpen && (
        <div 
          className="fixed inset-0 z-40 bg-black/70 backdrop-blur-sm lg:hidden"
          onClick={() => setIsSidebarOpen(false)}
        />
      )}

      <aside className={`fixed inset-y-0 left-0 z-50 w-72 bg-[#0a0f1c] border-r border-white/10 flex flex-col justify-between transform transition-transform duration-300 lg:translate-x-0 lg:static ${isSidebarOpen ? 'translate-x-0' : '-translate-x-full'}`}>
        <div>
          {/* Navigation Menu Header */}
          <div className="p-5 flex items-center justify-between border-b border-white/5">
            <span className="text-xs font-bold text-slate-400 tracking-wider">Navigation Menu</span>
            <button 
              onClick={() => setIsSidebarOpen(false)} 
              className="p-1 rounded-lg text-slate-400 hover:text-white hover:bg-white/5 lg:hidden"
            >
              <X size={18} />
            </button>
          </div>

          {/* User Profile Card */}
          <div className="p-4">
            <div 
              onClick={() => { setActiveTab('profile'); setIsSidebarOpen(false); }}
              className="bg-[#101726] border border-white/10 hover:border-[#00d9ff]/40 rounded-2xl p-3.5 flex items-center gap-3 shadow-lg cursor-pointer transition-all group"
              title="Open Profile Settings"
            >
              <div className="relative">
                <div className="w-11 h-11 rounded-xl p-0.5 bg-gradient-to-tr from-[#00d9ff] to-[#38bdf8] group-hover:shadow-[0_0_12px_rgba(0,217,255,0.4)] transition-all">
                  <img src={IMAGES.profile} alt="Muhammad Ali" className="w-full h-full object-cover rounded-[10px]" />
                </div>
                <span className="absolute -bottom-0.5 -right-0.5 w-3 h-3 rounded-full bg-emerald-400 border-2 border-[#101726]" />
              </div>
              <div className="overflow-hidden flex-1">
                <h3 className="text-sm font-bold text-white truncate group-hover:text-[#00d9ff] transition-colors">Muhammad Ali</h3>
                <p className="text-[11px] text-slate-400">Administrator</p>
                <span className="inline-flex items-center gap-1.5 text-[10px] text-emerald-400 font-semibold mt-0.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" /> Online
                </span>
              </div>
              <ChevronRight size={14} className="text-slate-600 group-hover:text-[#00d9ff] transition-colors" />
            </div>
          </div>

          {/* Navigation Items (Exact Match to Screenshot 2) */}
          <nav className="px-3 space-y-1 mt-1">
            {[
              { id: 'dashboard', label: 'Dashboard', icon: LayoutDashboard },
              { id: 'feedbacks', label: 'Feedbacks', icon: MessageSquare, count: feedbacks.length },
              { id: 'inquiries', label: 'Inquiries', icon: Mail, count: inquiries.filter(i => i.status === 'New').length },
              { id: 'content', label: 'Content Manager', icon: FileText },
              { id: 'projects', label: 'Projects', icon: Layers },
              { id: 'services', label: 'Services', icon: Wrench },
              { id: 'reactions', label: 'Reactions', icon: Heart },
              { id: 'profile-views', label: 'Profile Views', icon: ViewIcon },
              { id: 'settings', label: 'Settings', icon: Settings },
              { id: 'profile', label: 'Profile', icon: User }
            ].map(item => {
              const Icon = item.icon;
              const isActive = activeTab === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => { setActiveTab(item.id); setIsSidebarOpen(false); }}
                  className={`w-full flex items-center justify-between px-3.5 py-2.5 rounded-xl text-xs font-semibold transition-all cursor-pointer ${
                    isActive
                      ? 'bg-[#00d9ff]/10 text-[#00d9ff] border border-[#00d9ff]/30 shadow-[0_0_15px_rgba(0,217,255,0.15)]'
                      : 'text-slate-400 hover:text-white hover:bg-white/5'
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <Icon size={16} />
                    <span>{item.label}</span>
                  </div>
                  {item.count !== undefined && item.count > 0 && (
                    <span className={`px-2 py-0.2 rounded-full text-[10px] font-bold ${
                      isActive ? 'bg-[#00d9ff]/20 text-[#00d9ff]' : 'bg-white/10 text-slate-300'
                    }`}>
                      {item.count}
                    </span>
                  )}
                </button>
              );
            })}
          </nav>
        </div>

        {/* Sidebar Bottom Footer */}
        <div className="p-4 border-t border-white/5 space-y-2">
          {onBack && (
            <button 
              onClick={onBack}
              className="w-full flex items-center justify-between px-3.5 py-2 rounded-xl text-xs font-medium text-slate-400 hover:text-white hover:bg-white/5 transition-colors cursor-pointer"
            >
              <div className="flex items-center gap-2">
                <ExternalLink size={14} />
                <span>Live Website</span>
              </div>
              <span className="text-[10px] text-slate-500 font-semibold">Main Site</span>
            </button>
          )}

          <button 
            onClick={handleLogout}
            className="w-full flex items-center gap-2 px-3.5 py-2 rounded-xl text-xs font-semibold text-rose-400 hover:bg-rose-500/10 transition-colors cursor-pointer"
          >
            <LogOut size={14} />
            <span>Logout</span>
          </button>
        </div>
      </aside>

      {/* =========================================================================
          SCREENSHOT 3: MAIN ADMIN DASHBOARD CONTENT
         ========================================================================= */}
      <div className="flex-1 flex flex-col overflow-hidden">
        {/* Top Header Bar */}
        <header className="h-16 bg-[#0a0f1c]/90 backdrop-blur-md border-b border-white/10 flex items-center justify-between px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-3">
            <button 
              onClick={() => setIsSidebarOpen(true)}
              className="p-2 rounded-xl bg-white/5 text-slate-400 hover:text-white lg:hidden cursor-pointer"
            >
              <div className="w-4 h-3.5 flex flex-col justify-between">
                <span className="w-full h-0.5 bg-current rounded" />
                <span className="w-full h-0.5 bg-current rounded" />
                <span className="w-full h-0.5 bg-current rounded" />
              </div>
            </button>

            <div className="flex items-center gap-2.5">
              <h1 className="text-sm sm:text-base font-bold text-white">Admin Dashboard Overview</h1>
              <span className="hidden sm:inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-[11px] font-semibold">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" /> System Active
              </span>
            </div>
          </div>

          <div className="flex items-center gap-3">
            {/* Search input */}
            <div className="relative hidden md:block">
              <Search size={14} className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-500" />
              <input 
                type="text" 
                value={searchQuery}
                onChange={e => setSearchQuery(e.target.value)}
                placeholder="Search inquiries, feedbacks..."
                className="w-56 lg:w-64 pl-8 pr-3 py-1.5 bg-[#101726] border border-white/10 rounded-xl text-xs text-white placeholder-slate-500 focus:border-[#00d9ff] focus:outline-none"
              />
            </div>

            {/* Refresh Button */}
            <button 
              onClick={fetchAllData}
              disabled={isRefreshing}
              className="p-2 rounded-xl bg-[#101726] border border-white/10 text-slate-400 hover:text-[#00d9ff] hover:border-[#00d9ff]/30 transition-all cursor-pointer disabled:opacity-50"
              title="Refresh Data"
            >
              <RefreshCw size={15} className={isRefreshing ? 'animate-spin text-[#00d9ff]' : ''} />
            </button>

            {/* Notification Bell */}
            <button 
              className="p-2 rounded-xl bg-[#101726] border border-white/10 text-slate-400 hover:text-white hover:border-white/20 transition-all cursor-pointer relative"
              title="Notifications"
            >
              <Bell size={15} />
              {inquiries.some(i => i.status === 'New') && (
                <span className="absolute top-1 right-1 w-2 h-2 rounded-full bg-[#00d9ff]" />
              )}
            </button>

            {/* Admin Profile Picture Icon Button */}
            <button
              onClick={() => setActiveTab('profile')}
              className="flex items-center gap-2 pl-1.5 pr-2.5 py-1 rounded-xl bg-[#101726] border border-white/10 hover:border-[#00d9ff]/50 transition-all cursor-pointer group"
              title="Muhammad Ali Profile — Administrator"
            >
              <div className="relative w-7 h-7 rounded-lg overflow-hidden border border-[#00d9ff]/60 group-hover:shadow-[0_0_8px_rgba(0,217,255,0.4)] transition-all">
                <img 
                  src={IMAGES.profile} 
                  alt="Muhammad Ali" 
                  className="w-full h-full object-cover" 
                />
                <span className="absolute -bottom-0.5 -right-0.5 w-2 h-2 rounded-full bg-emerald-400 border border-[#101726]" />
              </div>
              <span className="hidden sm:inline text-xs font-bold text-slate-300 group-hover:text-[#00d9ff] transition-colors">
                Ali
              </span>
            </button>
          </div>
        </header>

        {/* Scrollable Dashboard Body */}
        <main className="flex-1 overflow-y-auto p-4 sm:p-6 lg:p-8 space-y-6">

          {/* MAIN DASHBOARD TAB VIEW */}
          {activeTab === 'dashboard' && (
            <div className="space-y-6 max-w-7xl mx-auto">
              {/* 1. Six Metric Summary Cards (2 Rows of 3) */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {/* Total Feedbacks */}
                <div className="bg-[#0e1422] border border-white/10 p-5 rounded-2xl flex flex-col justify-between hover:border-white/20 transition-all">
                  <div className="flex items-start justify-between">
                    <span className="text-xs font-semibold text-slate-400">Total Feedbacks</span>
                    <div className="p-2 rounded-lg bg-[#00d9ff]/10 text-[#00d9ff] border border-[#00d9ff]/20">
                      <MessageSquare size={16} />
                    </div>
                  </div>
                  <div className="mt-4 flex items-end justify-between">
                    <span className="text-2xl font-black text-white">{feedbacks.length}</span>
                    <button onClick={() => setActiveTab('feedbacks')} className="text-xs text-[#00d9ff] hover:underline flex items-center gap-0.5 cursor-pointer">
                      View All <ArrowUpRight size={14} />
                    </button>
                  </div>
                </div>

                {/* Total Inquiries */}
                <div className="bg-[#0e1422] border border-white/10 p-5 rounded-2xl flex flex-col justify-between hover:border-white/20 transition-all">
                  <div className="flex items-start justify-between">
                    <span className="text-xs font-semibold text-slate-400">Total Inquiries</span>
                    <div className="p-2 rounded-lg bg-purple-500/10 text-purple-400 border border-purple-500/20">
                      <Mail size={16} />
                    </div>
                  </div>
                  <div className="mt-4 flex items-end justify-between">
                    <span className="text-2xl font-black text-white">{inquiries.length}</span>
                    <button onClick={() => setActiveTab('inquiries')} className="text-xs text-[#00d9ff] hover:underline flex items-center gap-0.5 cursor-pointer">
                      View All <ArrowUpRight size={14} />
                    </button>
                  </div>
                </div>

                {/* Profile Views */}
                <div className="bg-[#0e1422] border border-white/10 p-5 rounded-2xl flex flex-col justify-between hover:border-white/20 transition-all">
                  <div className="flex items-start justify-between">
                    <span className="text-xs font-semibold text-slate-400">Profile Views</span>
                    <div className="p-2 rounded-lg bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                      <ViewIcon size={16} />
                    </div>
                  </div>
                  <div className="mt-4 flex items-end justify-between">
                    <span className="text-2xl font-black text-white">{stats.profileViews}</span>
                    <button onClick={() => setActiveTab('profile-views')} className="text-xs text-[#00d9ff] hover:underline flex items-center gap-0.5 cursor-pointer">
                      View All <ArrowUpRight size={14} />
                    </button>
                  </div>
                </div>

                {/* Average Rating */}
                <div className="bg-[#0e1422] border border-white/10 p-5 rounded-2xl flex flex-col justify-between hover:border-white/20 transition-all">
                  <div className="flex items-start justify-between">
                    <span className="text-xs font-semibold text-slate-400">Average Rating</span>
                    <div className="p-2 rounded-lg bg-amber-500/10 text-amber-400 border border-amber-500/20">
                      <Star size={16} />
                    </div>
                  </div>
                  <div className="mt-4 flex items-end justify-between">
                    <span className="text-2xl font-black text-white">{stats.averageRating.toFixed(1)}</span>
                    <button onClick={() => setActiveTab('feedbacks')} className="text-xs text-[#00d9ff] hover:underline flex items-center gap-0.5 cursor-pointer">
                      View All <ArrowUpRight size={14} />
                    </button>
                  </div>
                </div>

                {/* Positive Reactions */}
                <div className="bg-[#0e1422] border border-white/10 p-5 rounded-2xl flex flex-col justify-between hover:border-white/20 transition-all">
                  <div className="flex items-start justify-between">
                    <span className="text-xs font-semibold text-slate-400">Positive Reactions</span>
                    <div className="p-2 rounded-lg bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                      <ThumbsUp size={16} />
                    </div>
                  </div>
                  <div className="mt-4 flex items-end justify-between">
                    <span className="text-2xl font-black text-white">{stats.positiveReactions}</span>
                    <button onClick={() => setActiveTab('reactions')} className="text-xs text-[#00d9ff] hover:underline flex items-center gap-0.5 cursor-pointer">
                      View All <ArrowUpRight size={14} />
                    </button>
                  </div>
                </div>

                {/* Negative Reactions */}
                <div className="bg-[#0e1422] border border-white/10 p-5 rounded-2xl flex flex-col justify-between hover:border-white/20 transition-all">
                  <div className="flex items-start justify-between">
                    <span className="text-xs font-semibold text-slate-400">Negative Reactions</span>
                    <div className="p-2 rounded-lg bg-rose-500/10 text-rose-400 border border-rose-500/20">
                      <ThumbsDown size={16} />
                    </div>
                  </div>
                  <div className="mt-4 flex items-end justify-between">
                    <span className="text-2xl font-black text-white">{stats.negativeReactions}</span>
                    <button onClick={() => setActiveTab('reactions')} className="text-xs text-[#00d9ff] hover:underline flex items-center gap-0.5 cursor-pointer">
                      View All <ArrowUpRight size={14} />
                    </button>
                  </div>
                </div>
              </div>

              {/* 2. Collapsible Quick Bars: Recent Feedbacks & Recent Inquiries */}
              <div className="space-y-3">
                {/* Recent Feedbacks Accordion */}
                <div className="bg-[#0e1422] border border-white/10 rounded-2xl overflow-hidden">
                  <div 
                    onClick={() => setIsRecentFeedbacksOpen(!isRecentFeedbacksOpen)}
                    className="p-4.5 flex items-center justify-between cursor-pointer hover:bg-white/[0.02] transition-colors"
                  >
                    <div className="flex items-center gap-2.5 text-sm font-bold text-white">
                      <MessageSquare size={16} className="text-[#00d9ff]" />
                      <span>Recent Feedbacks</span>
                      <span className="text-xs text-slate-500 font-normal">({feedbacks.length})</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <button 
                        onClick={(e) => { e.stopPropagation(); setActiveTab('feedbacks'); }} 
                        className="text-xs text-[#00d9ff] hover:underline"
                      >
                        View All
                      </button>
                      {isRecentFeedbacksOpen ? <ChevronUp size={16} className="text-slate-400" /> : <ChevronDown size={16} className="text-slate-400" />}
                    </div>
                  </div>
                  {isRecentFeedbacksOpen && (
                    <div className="p-4 pt-0 border-t border-white/5 space-y-2">
                      {feedbacks.slice(0, 3).map(fb => (
                        <div key={fb.id} className="p-3 bg-[#111827] rounded-xl flex items-center justify-between gap-4 text-xs">
                          <div>
                            <span className="font-bold text-white">{fb.clientName}</span>
                            <span className="text-amber-400 font-bold ml-2">{fb.rating} ★</span>
                            <p className="text-slate-400 text-[11px] truncate max-w-md mt-0.5">"{fb.comment}"</p>
                          </div>
                          <span className={`px-2 py-0.5 rounded text-[10px] font-bold ${fb.status === 'Published' ? 'bg-emerald-500/15 text-emerald-400' : 'bg-amber-500/15 text-amber-300'}`}>
                            {fb.status}
                          </span>
                        </div>
                      ))}
                    </div>
                  )}
                </div>

                {/* Recent Inquiries Accordion */}
                <div className="bg-[#0e1422] border border-white/10 rounded-2xl overflow-hidden">
                  <div 
                    onClick={() => setIsRecentInquiriesOpen(!isRecentInquiriesOpen)}
                    className="p-4.5 flex items-center justify-between cursor-pointer hover:bg-white/[0.02] transition-colors"
                  >
                    <div className="flex items-center gap-2.5 text-sm font-bold text-white">
                      <Mail size={16} className="text-purple-400" />
                      <span>Recent Inquiries</span>
                      <span className="text-xs text-slate-500 font-normal">({inquiries.length})</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <button 
                        onClick={(e) => { e.stopPropagation(); setActiveTab('inquiries'); }} 
                        className="text-xs text-[#00d9ff] hover:underline"
                      >
                        View All
                      </button>
                      {isRecentInquiriesOpen ? <ChevronUp size={16} className="text-slate-400" /> : <ChevronDown size={16} className="text-slate-400" />}
                    </div>
                  </div>
                  {isRecentInquiriesOpen && (
                    <div className="p-4 pt-0 border-t border-white/5 space-y-2">
                      {inquiries.slice(0, 3).map(inq => (
                        <div key={inq.id} className="p-3 bg-[#111827] rounded-xl flex items-center justify-between gap-4 text-xs">
                          <div>
                            <span className="font-bold text-white">{inq.name}</span>
                            <span className="text-[#00d9ff] ml-2">({inq.service})</span>
                            <p className="text-slate-400 text-[11px] truncate max-w-md mt-0.5">{inq.subject}</p>
                          </div>
                          <span className="text-[11px] font-semibold text-emerald-400">{inq.budget}</span>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              </div>

              {/* 3. Profile Traffic Chart (Exact match to Screenshot 3) */}
              <div className="bg-[#0e1422] border border-white/10 rounded-2xl p-6 shadow-xl">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-2">
                    <Sparkles size={16} className="text-[#00d9ff]" />
                    <h3 className="text-sm font-bold text-white">Profile Traffic</h3>
                  </div>
                  <span className="text-xs text-slate-400 font-medium">Last 7 Days</span>
                </div>

                <div className="flex items-baseline gap-2 mb-6">
                  <span className="text-3xl font-black text-white">1,250</span>
                  <span className="text-xs font-bold text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded-full border border-emerald-500/20">
                    +18.4%
                  </span>
                </div>

                <div className="h-56 w-full">
                  <ResponsiveContainer width="100%" height="100%">
                    <AreaChart data={trafficData} margin={{ top: 10, right: 10, left: -20, bottom: 0 }}>
                      <defs>
                        <linearGradient id="trafficGradient" x1="0" y1="0" x2="0" y2="1">
                          <stop offset="5%" stopColor="#00d9ff" stopOpacity={0.35} />
                          <stop offset="95%" stopColor="#00d9ff" stopOpacity={0} />
                        </linearGradient>
                      </defs>
                      <XAxis 
                        dataKey="date" 
                        stroke="#64748b" 
                        fontSize={11} 
                        tickLine={false} 
                        axisLine={false} 
                      />
                      <YAxis 
                        stroke="#64748b" 
                        fontSize={11} 
                        tickLine={false} 
                        axisLine={false} 
                      />
                      <Tooltip 
                        contentStyle={{ 
                          backgroundColor: '#0c1220', 
                          borderColor: 'rgba(255,255,255,0.1)', 
                          borderRadius: '12px',
                          color: '#fff',
                          fontSize: '12px'
                        }} 
                      />
                      <Area 
                        type="monotone" 
                        dataKey="views" 
                        stroke="#00d9ff" 
                        strokeWidth={3} 
                        fillOpacity={1} 
                        fill="url(#trafficGradient)" 
                        dot={{ r: 4, fill: '#00d9ff', stroke: '#070b14', strokeWidth: 2 }}
                        activeDot={{ r: 6, fill: '#00d9ff' }}
                      />
                    </AreaChart>
                  </ResponsiveContainer>
                </div>
              </div>

              {/* 4. Visual Analytics & Analytics Distribution (3 Donut/Pie Charts) */}
              <div className="bg-[#0e1422] border border-white/10 rounded-2xl p-6 shadow-xl">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pb-5 border-b border-white/5">
                  <div>
                    <div className="flex items-center gap-2">
                      <PieChartIcon size={16} className="text-[#00d9ff]" />
                      <h3 className="text-sm font-bold text-white">Visual Analytics & Analytics Distribution</h3>
                    </div>
                    <p className="text-xs text-slate-400 mt-0.5">Pie Circle & Donut Charts breakdown for client feedback & services</p>
                  </div>
                  <span className="self-start sm:self-auto px-3 py-1 rounded-full text-[10px] font-bold bg-[#00d9ff]/10 text-[#00d9ff] border border-[#00d9ff]/20">
                    Interactive Recharts
                  </span>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6">
                  {/* Card 1: Feedbacks by Star Rating */}
                  <div className="bg-[#101726] border border-white/5 rounded-2xl p-5 flex flex-col items-center text-center">
                    <h4 className="text-xs font-bold text-white">Feedbacks by Star Rating (Donut)</h4>
                    <p className="text-[11px] text-slate-400 mt-0.5">Distribution of rating scores</p>

                    <div className="h-44 w-44 my-3 relative flex items-center justify-center">
                      <ResponsiveContainer width="100%" height="100%">
                        <PieChart>
                          <Pie 
                            data={starRatingData} 
                            innerRadius={50} 
                            outerRadius={68} 
                            paddingAngle={3} 
                            dataKey="value"
                          >
                            {starRatingData.map((entry, index) => (
                              <Cell key={`cell-${index}`} fill={entry.color} />
                            ))}
                          </Pie>
                        </PieChart>
                      </ResponsiveContainer>
                      <div className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none">
                        <span className="text-xl font-black text-white">25</span>
                        <span className="text-[10px] text-slate-400">Feedbacks</span>
                      </div>
                    </div>

                    <div className="flex flex-wrap justify-center gap-x-2.5 gap-y-1 text-[10px] text-slate-400 mt-1">
                      {starRatingData.map(item => (
                        <div key={item.name} className="flex items-center gap-1">
                          <span className="w-2 h-2 rounded-full" style={{ backgroundColor: item.color }} />
                          <span>{item.name}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Card 2: Feedback Approval Status */}
                  <div className="bg-[#101726] border border-white/5 rounded-2xl p-5 flex flex-col items-center text-center">
                    <h4 className="text-xs font-bold text-white">Feedback Approval Status (Donut)</h4>
                    <p className="text-[11px] text-slate-400 mt-0.5">Published vs Pending</p>

                    <div className="h-44 w-44 my-3 relative flex items-center justify-center">
                      <ResponsiveContainer width="100%" height="100%">
                        <PieChart>
                          <Pie 
                            data={approvalStatusData} 
                            innerRadius={50} 
                            outerRadius={68} 
                            paddingAngle={3} 
                            dataKey="value"
                          >
                            {approvalStatusData.map((entry, index) => (
                              <Cell key={`cell-${index}`} fill={entry.color} />
                            ))}
                          </Pie>
                        </PieChart>
                      </ResponsiveContainer>
                      <div className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none">
                        <span className="text-xl font-black text-emerald-400">16</span>
                        <span className="text-[10px] text-slate-400">Published</span>
                      </div>
                    </div>

                    <div className="flex flex-wrap justify-center gap-x-2.5 gap-y-1 text-[10px] text-slate-400 mt-1">
                      {approvalStatusData.map(item => (
                        <div key={item.name} className="flex items-center gap-1">
                          <span className="w-2 h-2 rounded-full" style={{ backgroundColor: item.color }} />
                          <span>{item.name}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Card 3: Inquiry Service Share */}
                  <div className="bg-[#101726] border border-white/5 rounded-2xl p-5 flex flex-col items-center text-center">
                    <h4 className="text-xs font-bold text-white">Inquiry Service Share (Pie Circle)</h4>
                    <p className="text-[11px] text-slate-400 mt-0.5">Category distribution %</p>

                    <div className="h-44 w-44 my-3 relative flex items-center justify-center">
                      <ResponsiveContainer width="100%" height="100%">
                        <PieChart>
                          <Pie 
                            data={serviceShareData} 
                            outerRadius={68} 
                            dataKey="value"
                          >
                            {serviceShareData.map((entry, index) => (
                              <Cell key={`cell-${index}`} fill={entry.color} />
                            ))}
                          </Pie>
                        </PieChart>
                      </ResponsiveContainer>
                      <div className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none">
                        <span className="text-xs font-black text-[#00d9ff]">Services</span>
                      </div>
                    </div>

                    <div className="flex flex-wrap justify-center gap-x-2.5 gap-y-1 text-[10px] text-slate-400 mt-1">
                      {serviceShareData.map(item => (
                        <div key={item.name} className="flex items-center gap-1">
                          <span className="w-2 h-2 rounded-full" style={{ backgroundColor: item.color }} />
                          <span>{item.name}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* 5. Quick Actions & System Overview (Exact Match to Screenshot 3) */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                {/* Left: Quick Actions */}
                <div className="bg-[#0e1422] border border-white/10 rounded-2xl p-6 shadow-xl">
                  <h3 className="text-sm font-bold text-white mb-4">Quick Actions</h3>
                  <div className="grid grid-cols-2 gap-3">
                    <button 
                      onClick={() => setActiveTab('projects')}
                      className="p-4 bg-[#111827] border border-amber-500/30 hover:border-amber-400 rounded-2xl text-left flex items-center justify-between group transition-all cursor-pointer"
                    >
                      <div className="flex items-center gap-2.5">
                        <Plus size={16} className="text-amber-400" />
                        <span className="text-xs font-bold text-white group-hover:text-amber-300">Add Project</span>
                      </div>
                      <ArrowUpRight size={14} className="text-slate-500 group-hover:text-amber-400" />
                    </button>

                    <button 
                      onClick={() => setActiveTab('services')}
                      className="p-4 bg-[#111827] border border-[#00d9ff]/30 hover:border-[#00d9ff] rounded-2xl text-left flex items-center justify-between group transition-all cursor-pointer"
                    >
                      <div className="flex items-center gap-2.5">
                        <Layers size={16} className="text-[#00d9ff]" />
                        <span className="text-xs font-bold text-white group-hover:text-[#00d9ff]">Add Service</span>
                      </div>
                      <ArrowUpRight size={14} className="text-slate-500 group-hover:text-[#00d9ff]" />
                    </button>

                    <button 
                      onClick={() => setActiveTab('codes')}
                      className="p-4 bg-[#111827] border border-purple-500/30 hover:border-purple-400 rounded-2xl text-left flex items-center justify-between group transition-all cursor-pointer"
                    >
                      <div className="flex items-center gap-2.5">
                        <KeyRound size={16} className="text-purple-400" />
                        <div>
                          <span className="text-xs font-bold text-white block group-hover:text-purple-300">Generate Code</span>
                          <span className="text-[10px] text-slate-500 font-mono">(Ali-)</span>
                        </div>
                      </div>
                      <span className="px-2 py-0.5 rounded bg-[#00d9ff]/20 text-[#00d9ff] text-[10px] font-bold">Instant</span>
                    </button>

                    <button 
                      onClick={() => setActiveTab('settings')}
                      className="p-4 bg-[#111827] border border-white/10 hover:border-white/20 rounded-2xl text-left flex items-center justify-between group transition-all cursor-pointer"
                    >
                      <div className="flex items-center gap-2.5">
                        <Settings size={16} className="text-slate-400" />
                        <span className="text-xs font-bold text-white">Site Settings</span>
                      </div>
                      <ArrowUpRight size={14} className="text-slate-500 group-hover:text-white" />
                    </button>
                  </div>
                </div>

                {/* Right: System Overview */}
                <div className="bg-[#0e1422] border border-white/10 rounded-2xl p-6 shadow-xl">
                  <h3 className="text-sm font-bold text-white mb-4">System Overview</h3>
                  <div className="grid grid-cols-2 gap-4 text-xs">
                    <div className="p-3 bg-[#111827] rounded-xl flex items-center justify-between">
                      <div className="flex items-center gap-2 text-slate-400">
                        <HardDrive size={15} className="text-[#00d9ff]" />
                        <span>Storage Used</span>
                      </div>
                      <span className="font-bold text-white">2.45 GB / 10 GB</span>
                    </div>

                    <div className="p-3 bg-[#111827] rounded-xl flex items-center justify-between">
                      <div className="flex items-center gap-2 text-slate-400">
                        <Database size={15} className="text-emerald-400" />
                        <span>Database Size</span>
                      </div>
                      <span className="font-bold text-white">45 MB</span>
                    </div>

                    <div className="p-3 bg-[#111827] rounded-xl flex items-center justify-between">
                      <div className="flex items-center gap-2 text-slate-400">
                        <FileText size={15} className="text-purple-400" />
                        <span>Media Files</span>
                      </div>
                      <span className="font-bold text-white">342 Files</span>
                    </div>

                    <div className="p-3 bg-[#111827] rounded-xl flex items-center justify-between">
                      <div className="flex items-center gap-2 text-slate-400">
                        <KeyRound size={15} className="text-[#00d9ff]" />
                        <span>Ali- Code Usage</span>
                      </div>
                      <span className="px-2 py-0.5 rounded bg-[#00d9ff]/20 text-[#00d9ff] font-bold text-[11px]">85 Active</span>
                    </div>

                    <div className="p-3 bg-[#111827] rounded-xl flex items-center justify-between">
                      <div className="flex items-center gap-2 text-slate-400">
                        <Clock size={15} className="text-amber-400" />
                        <span>Last Backup</span>
                      </div>
                      <span className="font-bold text-slate-400">-</span>
                    </div>

                    <div className="p-3 bg-[#111827] rounded-xl flex items-center justify-between">
                      <div className="flex items-center gap-2 text-slate-400">
                        <CheckCircle size={15} className="text-emerald-400" />
                        <span>System Status</span>
                      </div>
                      <span className="px-2 py-0.5 rounded bg-emerald-500/20 text-emerald-300 font-bold text-[11px]">All Good</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* 6. Latest Client Inquiries Table (Exact Match to Screenshot 3) */}
              <div className="bg-[#0e1422] border border-white/10 rounded-2xl p-6 shadow-xl">
                <div className="flex items-center justify-between mb-4">
                  <div>
                    <h3 className="text-sm font-bold text-white">Latest Client Inquiries</h3>
                    <p className="text-xs text-slate-400 mt-0.5">Real-time incoming contact & project submissions</p>
                  </div>
                  <button 
                    onClick={() => setActiveTab('inquiries')}
                    className="text-xs text-[#00d9ff] hover:underline font-semibold flex items-center gap-1 cursor-pointer"
                  >
                    View All Inquiries →
                  </button>
                </div>

                <div className="overflow-x-auto">
                  <table className="w-full text-left text-xs">
                    <thead>
                      <tr className="border-b border-white/5 text-[10px] font-bold uppercase tracking-wider text-slate-500">
                        <th className="pb-3">Name</th>
                        <th className="pb-3">Subject</th>
                        <th className="pb-3">Service</th>
                        <th className="pb-3">Status</th>
                        <th className="pb-3">Date</th>
                        <th className="pb-3 text-right">Actions</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-white/5">
                      {filteredInquiries.slice(0, 5).map(inq => (
                        <tr key={inq.id} className="hover:bg-white/[0.02] transition-colors">
                          <td className="py-3.5 font-bold text-white flex items-center gap-2">
                            <span className="w-6 h-6 rounded-full bg-[#111827] text-[#00d9ff] font-bold flex items-center justify-center text-[10px]">
                              {inq.name.charAt(0)}
                            </span>
                            <span>{inq.name}</span>
                          </td>
                          <td className="py-3.5 text-slate-300 truncate max-w-xs">{inq.subject}</td>
                          <td className="py-3.5 text-slate-400">{inq.service}</td>
                          <td className="py-3.5">
                            <span className={`px-2.5 py-0.5 rounded-full text-[10px] font-bold uppercase ${
                              inq.status === 'New' 
                                ? 'bg-[#00d9ff]/20 text-[#00d9ff] border border-[#00d9ff]/30' 
                                : inq.status === 'Replied'
                                ? 'bg-emerald-500/20 text-emerald-300'
                                : 'bg-slate-500/20 text-slate-400'
                            }`}>
                              {inq.status}
                            </span>
                          </td>
                          <td className="py-3.5 text-slate-500">{inq.date}</td>
                          <td className="py-3.5 text-right">
                            <div className="flex items-center justify-end gap-1.5">
                              {inq.email && (
                                <a 
                                  href={`mailto:${inq.email}?subject=Re: ${encodeURIComponent(inq.subject)}`}
                                  className="p-1.5 rounded-lg bg-white/5 hover:bg-white/10 text-slate-300"
                                  title="Send Email"
                                >
                                  <Mail size={13} />
                                </a>
                              )}
                              <button 
                                onClick={() => handleUpdateInquiryStatus(inq.id, 'Replied')}
                                className="p-1.5 rounded-lg bg-[#00d9ff]/10 hover:bg-[#00d9ff]/20 text-[#00d9ff]"
                                title="Mark Replied"
                              >
                                <Check size={13} />
                              </button>
                            </div>
                          </td>
                        </tr>
                      ))}

                      {filteredInquiries.length === 0 && (
                        <tr>
                          <td colSpan={6} className="py-8 text-center text-slate-500 text-xs">
                            No inquiries recorded matching search.
                          </td>
                        </tr>
                      )}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          )}

          {/* FEEDBACKS TAB */}
          {activeTab === 'content' && (
            <div className="p-4 sm:p-6 lg:p-8">
              <ContentManager />
            </div>
          )}
          {activeTab === 'feedbacks' && (
            <div className="space-y-6 max-w-5xl mx-auto">
              <div className="flex items-center justify-between">
                <div>
                  <h2 className="text-xl font-black text-white">Client Feedbacks & Testimonials</h2>
                  <p className="text-xs text-slate-400 mt-1">Review, approve, and manage customer reviews.</p>
                </div>
                <button onClick={fetchAllData} className="px-4 py-2 bg-white/5 hover:bg-white/10 rounded-xl text-xs font-semibold flex items-center gap-2 cursor-pointer">
                  <RefreshCw size={14} className={isRefreshing ? 'animate-spin' : ''} /> <span>Refresh</span>
                </button>
              </div>

              <div className="grid gap-4">
                {feedbacks.map(fb => (
                  <div key={fb.id} className="bg-[#0e1422] border border-white/10 p-5 rounded-2xl flex flex-col gap-4">
                    <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                      <div className="flex items-start gap-4">
                        <div className="w-12 h-12 rounded-xl bg-[#111827] border border-white/10 overflow-hidden shrink-0 flex items-center justify-center font-bold text-[#00d9ff]">
                          {fb.clientPhoto ? <img src={fb.clientPhoto} alt={fb.clientName} className="w-full h-full object-cover" /> : fb.clientName.charAt(0)}
                        </div>
                        <div>
                          <div className="flex items-center gap-2 flex-wrap">
                            <span className="font-bold text-white text-sm">{fb.clientName}</span>
                            <span className="text-amber-400 font-bold text-xs bg-amber-400/10 px-2 py-0.5 rounded border border-amber-400/20">{fb.rating} ★</span>
                            <span className={`text-[10px] font-bold px-2 py-0.5 rounded-full uppercase ${fb.status === 'Published' ? 'bg-emerald-500/15 text-emerald-300' : 'bg-amber-500/15 text-amber-300'}`}>{fb.status}</span>
                            {fb.codeUsed && <span className="text-[10px] font-mono text-[#00d9ff] bg-[#00d9ff]/10 px-2 py-0.5 rounded border border-[#00d9ff]/20">{fb.codeUsed}</span>}
                          </div>
                          <p className="text-xs text-slate-300 mt-1.5 italic">"{fb.comment}"</p>
                          <p className="text-[10px] text-slate-500 mt-2">{fb.date} {fb.clientEmail && `• ${fb.clientEmail}`}</p>
                          
                          {/* Admin Dashboard: Project Assets Preview */}
                          {(fb.projectImages && fb.projectImages.length > 0) && (
                            <div className="mt-3 flex gap-2 overflow-x-auto pb-2">
                              {fb.projectImages.map((img, i) => (
                                <a key={i} href={img} target="_blank" rel="noopener noreferrer" className="shrink-0 w-16 h-12 rounded-lg border border-white/10 overflow-hidden hover:border-[#00d9ff]/50 transition-all">
                                  <img src={img} alt="project" className="w-full h-full object-cover" />
                                </a>
                              ))}
                            </div>
                          )}

                          {fb.attachmentLinks && fb.attachmentLinks.length > 0 && (
                            <div className="mt-2 flex flex-wrap gap-2">
                              {fb.attachmentLinks.map((link, i) => (
                                <a key={i} href={link} target="_blank" rel="noopener noreferrer" className="px-2 py-1 bg-white/5 border border-white/10 rounded-lg text-[10px] text-slate-400 hover:text-[#00d9ff] flex items-center gap-1">
                                  <ExternalLink size={10} /> Link {i + 1}
                                </a>
                              ))}
                            </div>
                          )}
                        </div>
                      </div>

                      <div className="flex items-center gap-2 self-end md:self-center shrink-0">
                        {fb.status === 'Pending' && (
                          <button onClick={() => handleApproveFeedback(fb.id)} className="px-3.5 py-1.5 bg-emerald-500 text-[#061017] font-bold text-xs rounded-xl cursor-pointer">
                            Approve
                          </button>
                        )}
                        <button 
                          onClick={() => handleRegenerateReply(fb.id)}
                          className="px-3 py-1.5 rounded-xl bg-purple-500/15 hover:bg-purple-500/25 text-purple-300 border border-purple-500/20 text-xs font-semibold flex items-center gap-1.5 cursor-pointer"
                          title="Regenerate star auto-reply message"
                        >
                          <RefreshCw size={12} />
                          <span>Sync Auto-Reply</span>
                        </button>
                        <button onClick={() => handleDeleteFeedback(fb.id)} className="p-2 rounded-xl bg-white/5 hover:bg-rose-500/20 text-slate-400 hover:text-rose-400 transition-colors cursor-pointer">
                          <Trash2 size={15} />
                        </button>
                      </div>
                    </div>

                    {/* Developer Auto-Reply preview in Admin */}
                    {fb.adminReply && (
                      <div className="bg-[#121929] border border-[#00d9ff]/20 rounded-xl p-3 text-xs space-y-1">
                        <div className="flex items-center justify-between">
                          <span className="text-[11px] font-bold text-[#00d9ff] flex items-center gap-1.5">
                            <span className="w-1.5 h-1.5 rounded-full bg-[#00d9ff] animate-pulse" />
                            Auto-Reply ({fb.rating}★ Rating Rule):
                          </span>
                          <span className="text-[10px] text-emerald-400 font-semibold">Published to Client</span>
                        </div>
                        <p className="text-slate-300 italic text-[11px]">"{fb.adminReply}"</p>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* INQUIRIES TAB */}
          {activeTab === 'inquiries' && (
            <div className="space-y-6 max-w-5xl mx-auto">
              <div className="flex items-center justify-between">
                <div>
                  <h2 className="text-xl font-black text-white">Client Project Inquiries</h2>
                  <p className="text-xs text-slate-400 mt-1">Direct project requests submitted through portfolio channels.</p>
                </div>
                <button onClick={fetchAllData} className="px-4 py-2 bg-white/5 hover:bg-white/10 rounded-xl text-xs font-semibold flex items-center gap-2 cursor-pointer">
                  <RefreshCw size={14} className={isRefreshing ? 'animate-spin' : ''} /> <span>Refresh</span>
                </button>
              </div>

              <div className="grid gap-4">
                {inquiries.map(inq => (
                  <div key={inq.id} className="bg-[#0e1422] border border-white/10 p-6 rounded-2xl space-y-4">
                    <div className="flex items-center justify-between pb-3 border-b border-white/5">
                      <div>
                        <div className="flex items-center gap-2">
                          <span className="text-base font-bold text-white">{inq.name}</span>
                          <span className="text-xs text-[#00d9ff] font-semibold">({inq.service})</span>
                        </div>
                        <p className="text-xs text-slate-400 mt-0.5">{inq.subject}</p>
                      </div>
                      <span className="text-xs font-bold text-emerald-400 bg-emerald-500/10 px-2.5 py-1 rounded-lg border border-emerald-500/20">{inq.budget}</span>
                    </div>

                    <p className="text-xs text-slate-300 leading-relaxed bg-[#111827] p-4 rounded-xl">{inq.message}</p>

                    <div className="flex items-center justify-between pt-2 text-xs">
                      <span className="text-slate-500">{inq.date} {inq.email && `• ${inq.email}`} {inq.phone && `• ${inq.phone}`}</span>
                      <div className="flex items-center gap-2">
                        {inq.email && (
                          <a href={`mailto:${inq.email}`} className="px-3 py-1.5 rounded-lg bg-white/5 hover:bg-white/10 text-slate-300 flex items-center gap-1.5">
                            <Mail size={13} /> <span>Email</span>
                          </a>
                        )}
                        <button onClick={() => handleDeleteInquiry(inq.id)} className="p-1.5 rounded-lg text-slate-500 hover:text-rose-400">
                          <Trash2 size={15} />
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* VERIFICATION CODES / QUICK ACTIONS */}
          {activeTab === 'codes' && (
            <div className="space-y-6 max-w-5xl mx-auto">
              <div>
                <h2 className="text-xl font-black text-white">Client Verification Codes</h2>
                <p className="text-xs text-slate-400 mt-1">Codes starting with <code className="text-[#00d9ff]">Ali-</code> grant clients instant testimonial submission access.</p>
              </div>

              <div className="bg-[#0e1422] border border-white/10 p-5 rounded-2xl">
                <form onSubmit={handleGenerateCode} className="flex flex-col sm:flex-row gap-3 items-center">
                  <input 
                    type="text" 
                    value={assignedClient} 
                    onChange={e => setAssignedClient(e.target.value)} 
                    placeholder="Client or Project Name (e.g. Nova Web Studio Client)" 
                    className="flex-1 w-full px-4 py-3 bg-[#111827] border border-white/10 rounded-xl text-xs text-white focus:border-[#00d9ff] focus:outline-none"
                  />
                  <button 
                    type="submit" 
                    disabled={isGeneratingCode} 
                    className="w-full sm:w-auto px-6 py-3 bg-[#00d9ff] text-[#061017] font-black text-xs rounded-xl flex items-center justify-center gap-2 cursor-pointer disabled:opacity-50"
                  >
                    <Plus size={16} /> <span>Generate Ali- Code</span>
                  </button>
                </form>
              </div>

              <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
                {codes.map(c => {
                  const codeId = c.id?.toString() || c.code;
                  const isCopied = copiedCodeId === codeId;
                  return (
                    <div key={codeId} className="bg-[#0e1422] border border-white/10 p-4 rounded-2xl flex flex-col justify-between">
                      <div>
                        <div className="flex items-center justify-between mb-2">
                          <span className="font-mono text-sm font-black text-[#00d9ff] bg-[#00d9ff]/10 px-2.5 py-1 rounded-lg border border-[#00d9ff]/20">
                            {c.code}
                          </span>
                          <span className={`text-[10px] font-bold px-2 py-0.5 rounded-full uppercase ${c.status === 'Active' ? 'bg-emerald-500/15 text-emerald-300' : 'bg-slate-500/15 text-slate-400'}`}>
                            {c.status}
                          </span>
                        </div>
                        <p className="text-xs font-semibold text-white mt-2 truncate">{c.assignedTo}</p>
                        <p className="text-[10px] text-slate-500 mt-0.5">Created: {c.createdAt}</p>
                      </div>
                      <div className="mt-4 pt-3 border-t border-white/5 flex items-center justify-between gap-1 flex-wrap">
                        <button 
                          onClick={() => handleCopyCode(c.code, codeId)} 
                          className="px-3 py-1.5 rounded-lg bg-white/5 hover:bg-white/10 text-xs font-semibold text-slate-300 flex items-center gap-1.5 cursor-pointer"
                        >
                          {isCopied ? <CheckCheck size={13} className="text-emerald-400" /> : <Copy size={13} />}
                          <span>{isCopied ? 'Copied' : 'Copy'}</span>
                        </button>

                        <div className="flex items-center gap-1">
                          <button
                            onClick={() => handleToggleCode(codeId)}
                            className="px-2.5 py-1.5 rounded-lg bg-white/5 hover:bg-white/10 text-[11px] font-medium text-slate-400 hover:text-slate-200 cursor-pointer"
                            title="Toggle status between Active and Used"
                          >
                            {c.status === 'Active' ? 'Mark Used' : 'Mark Active'}
                          </button>
                          <button
                            onClick={() => handleDeleteCode(codeId)}
                            className="p-1.5 rounded-lg text-slate-500 hover:text-rose-400 hover:bg-rose-500/10 cursor-pointer"
                            title="Delete code"
                          >
                            <Trash2 size={14} />
                          </button>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          )}

          {/* PROJECTS TAB */}
          {activeTab === 'projects' && (
            <div className="space-y-6 max-w-5xl mx-auto">
              <div className="flex items-center justify-between">
                <div>
                  <h2 className="text-xl font-black text-white">Featured Portfolio Projects</h2>
                  <p className="text-xs text-slate-400 mt-1">Manage project cards, live demos, and descriptions.</p>
                </div>
              </div>
              <div className="grid gap-4 sm:grid-cols-2">
                {[
                  { title: 'Nova Web Studio', cat: 'Full-Stack Web App', status: 'Live', tech: 'React, Node, Tailwind' },
                  { title: 'Colour Block', cat: '2D Puzzle Game', status: 'Active', tech: 'Canvas, TypeScript, Audio API' },
                  { title: 'Pak AI Assistant', cat: 'AI & NLP Agent', status: 'Deployed', tech: 'Gemini, Next.js, Cloud Run' },
                  { title: 'Learn Play Portal', cat: 'Gamified EdTech', status: 'Live', tech: 'React, Firebase, Tailwind' }
                ].map(p => (
                  <div key={p.title} className="bg-[#0e1422] border border-white/10 p-5 rounded-2xl space-y-3">
                    <div className="flex items-center justify-between">
                      <h3 className="font-bold text-white text-sm">{p.title}</h3>
                      <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-[#00d9ff]/20 text-[#00d9ff]">{p.status}</span>
                    </div>
                    <p className="text-xs text-slate-400">{p.cat}</p>
                    <div className="pt-2 border-t border-white/5 flex items-center justify-between text-[11px] text-slate-500">
                      <span>{p.tech}</span>
                      <button className="text-[#00d9ff] hover:underline font-semibold cursor-pointer">Edit Project →</button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* SERVICES TAB */}
          {activeTab === 'services' && (
            <div className="space-y-6 max-w-5xl mx-auto">
              <div>
                <h2 className="text-xl font-black text-white">Services & Pricing Tiers</h2>
                <p className="text-xs text-slate-400 mt-1">Custom services with minimum $10+ USD budget criteria.</p>
              </div>
              <div className="grid gap-4 sm:grid-cols-2">
                {[
                  { name: 'Full-Stack Web Development', min: '$10+ USD', desc: 'Modern responsive SPAs and full-stack web applications.' },
                  { name: '2D Game & Interactive Dev', min: '$15+ USD', desc: 'Canvas games, custom puzzles, and educational portals.' },
                  { name: 'Pixel Forge Graphic Design', min: '$10+ USD', desc: 'Brand assets, visiting cards, logos, and YouTube banners.' },
                  { name: '2D & 3D Architectural Plans', min: '$20+ USD', desc: 'Smart flooring layouts and 3D architectural renders.' }
                ].map(s => (
                  <div key={s.name} className="bg-[#0e1422] border border-white/10 p-5 rounded-2xl space-y-2">
                    <div className="flex items-center justify-between">
                      <h3 className="font-bold text-white text-sm">{s.name}</h3>
                      <span className="text-xs font-bold text-emerald-400">{s.min}</span>
                    </div>
                    <p className="text-xs text-slate-400">{s.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* REACTIONS & PROFILE VIEWS TAB */}
          {(activeTab === 'reactions' || activeTab === 'profile-views') && (
            <div className="space-y-6 max-w-5xl mx-auto">
              <div>
                <h2 className="text-xl font-black text-white">Engagement & Visitor Metrics</h2>
                <p className="text-xs text-slate-400 mt-1">Real-time visitor feedback, reactions, and retention rates.</p>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <div className="bg-[#0e1422] border border-white/10 p-6 rounded-2xl text-center">
                  <span className="text-xs text-slate-400">Total Profile Impressions</span>
                  <div className="text-3xl font-black text-[#00d9ff] mt-2">{stats.profileViews}</div>
                </div>
                <div className="bg-[#0e1422] border border-white/10 p-6 rounded-2xl text-center">
                  <span className="text-xs text-slate-400">Positive Likes</span>
                  <div className="text-3xl font-black text-emerald-400 mt-2">{stats.positiveReactions}</div>
                </div>
                <div className="bg-[#0e1422] border border-white/10 p-6 rounded-2xl text-center">
                  <span className="text-xs text-slate-400">Negative Feedback</span>
                  <div className="text-3xl font-black text-rose-400 mt-2">{stats.negativeReactions}</div>
                </div>
              </div>
            </div>
          )}

          {/* PROFILE TAB */}
          {activeTab === 'profile' && (
            <div className="space-y-6 max-w-4xl mx-auto">
              <div className="flex items-center justify-between">
                <div>
                  <h2 className="text-xl font-black text-white">Admin Profile & Identity</h2>
                  <p className="text-xs text-slate-400 mt-1">Master Administrator credentials, official details and professional background.</p>
                </div>
                <button
                  onClick={() => setIsProfileModalOpen(true)}
                  className="flex items-center gap-2 px-3.5 py-2 rounded-xl bg-[#00d9ff]/10 border border-[#00d9ff]/30 text-[#00d9ff] text-xs font-bold hover:bg-[#00d9ff]/20 transition-all cursor-pointer shadow-[0_0_15px_rgba(0,217,255,0.15)]"
                >
                  <Sparkles size={14} />
                  <span>View ID Card</span>
                </button>
              </div>

              {/* Main Profile Showcase Card */}
              <div className="bg-[#0e1422] border border-white/10 rounded-3xl p-6 sm:p-8 relative overflow-hidden shadow-2xl">
                <div className="absolute top-0 right-0 w-80 h-80 bg-gradient-to-br from-[#00d9ff]/10 via-[#7c5cff]/5 to-transparent rounded-full blur-3xl pointer-events-none" />

                <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6 pb-6 border-b border-white/10 relative z-10">
                  <div className="relative shrink-0">
                    <div className="w-24 h-24 sm:w-28 sm:h-28 rounded-2xl p-1 bg-gradient-to-tr from-[#00d9ff] via-[#38bdf8] to-[#7c5cff] shadow-[0_0_25px_rgba(0,217,255,0.35)]">
                      <img 
                        src={IMAGES.profile} 
                        alt="Muhammad Ali" 
                        className="w-full h-full object-cover rounded-[14px]" 
                      />
                    </div>
                    <span className="absolute -bottom-1 -right-1 w-5 h-5 rounded-full bg-emerald-400 border-3 border-[#0e1422] ring-2 ring-emerald-400/40 animate-pulse" />
                  </div>

                  <div className="flex-1 space-y-1.5">
                    <div className="flex items-center gap-2.5 flex-wrap">
                      <h3 className="text-xl sm:text-2xl font-black text-white">Muhammad Ali</h3>
                      <span className="px-2.5 py-0.5 rounded-full bg-[#00d9ff]/15 border border-[#00d9ff]/30 text-[#00d9ff] text-[10px] font-extrabold uppercase tracking-wider">
                        Master Administrator
                      </span>
                    </div>
                    <p className="text-xs sm:text-sm font-semibold text-[#00d9ff]">
                      Web Developer • Game &amp; AI Developer • Graphic Designer
                    </p>
                    <p className="text-xs text-slate-400 flex items-center gap-1.5">
                      <Globe size={13} className="text-slate-500" />
                      <span>Havelian, Abbottabad, Pakistan (Worldwide Remote)</span>
                    </p>
                  </div>
                </div>

                {/* Direct Contact Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-6 relative z-10 text-xs">
                  <a 
                    href="mailto:alimuhammadhvn81@gmail.com"
                    className="p-3.5 rounded-2xl bg-[#121a2c] border border-white/5 hover:border-[#00d9ff]/40 transition-all flex items-center gap-3 group"
                  >
                    <div className="w-9 h-9 rounded-xl bg-blue-500/10 text-blue-400 flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform">
                      <Mail size={16} />
                    </div>
                    <div className="overflow-hidden">
                      <span className="text-[10px] text-slate-400 block font-medium">Email Address</span>
                      <span className="text-white font-semibold truncate block group-hover:text-[#00d9ff] transition-colors">
                        alimuhammadhvn81@gmail.com
                      </span>
                    </div>
                  </a>

                  <a 
                    href="https://wa.me/923426793428"
                    target="_blank"
                    rel="noreferrer"
                    className="p-3.5 rounded-2xl bg-[#121a2c] border border-white/5 hover:border-emerald-500/40 transition-all flex items-center gap-3 group"
                  >
                    <div className="w-9 h-9 rounded-xl bg-emerald-500/10 text-emerald-400 flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform">
                      <Phone size={16} />
                    </div>
                    <div className="overflow-hidden">
                      <span className="text-[10px] text-slate-400 block font-medium">WhatsApp Direct</span>
                      <span className="text-white font-semibold truncate block group-hover:text-emerald-400 transition-colors">
                        +92 342 6793428
                      </span>
                    </div>
                  </a>

                  <a 
                    href="tel:+923300358799"
                    className="p-3.5 rounded-2xl bg-[#121a2c] border border-white/5 hover:border-[#00d9ff]/40 transition-all flex items-center gap-3 group"
                  >
                    <div className="w-9 h-9 rounded-xl bg-purple-500/10 text-purple-400 flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform">
                      <Phone size={16} />
                    </div>
                    <div className="overflow-hidden">
                      <span className="text-[10px] text-slate-400 block font-medium">Direct Voice Line</span>
                      <span className="text-white font-semibold truncate block group-hover:text-[#00d9ff] transition-colors">
                        +92 330 0358799
                      </span>
                    </div>
                  </a>
                </div>
              </div>

              {/* Bio & Core Values */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="bg-[#0e1422] border border-white/10 rounded-2xl p-5 space-y-3">
                  <h4 className="text-xs font-bold text-white uppercase tracking-wider flex items-center gap-2">
                    <User size={14} className="text-[#00d9ff]" />
                    <span>Personal &amp; Professional Bio</span>
                  </h4>
                  <p className="text-xs text-slate-300 leading-relaxed">
                    I am Muhammad Ali, a Computer Science student, freelancer and creative developer from Havelian, Abbottabad. I value honesty, professionalism, respect and responsible work. My expertise spans web development, game &amp; AI application development, Pixel Forge graphic design, 2D &amp; 3D architecture, and modern cloud technologies.
                  </p>
                </div>

                <div className="bg-[#0e1422] border border-white/10 rounded-2xl p-5 space-y-3">
                  <h4 className="text-xs font-bold text-white uppercase tracking-wider flex items-center gap-2">
                    <Shield size={14} className="text-emerald-400" />
                    <span>Guiding Muslim Values</span>
                  </h4>
                  <div className="grid grid-cols-1 gap-2 text-xs">
                    {[
                      { title: 'Honesty & Integrity (Amanah)', desc: 'Transparent communication & sincere delivery.' },
                      { title: 'Respect & Politeness (Adab)', desc: 'Professional conduct and courteous client care.' },
                      { title: 'Pixel-Perfect Quality', desc: 'Craftsmanship in code, design and architecture.' },
                      { title: 'Ethical & Responsible Work', desc: 'Strict standard of reliability and data privacy.' }
                    ].map((val, idx) => (
                      <div key={idx} className="p-2 rounded-xl bg-[#121a2c] flex items-center gap-2.5">
                        <CheckCircle2 size={14} className="text-emerald-400 shrink-0" />
                        <div>
                          <span className="text-white font-semibold text-[11px] block">{val.title}</span>
                          <span className="text-[10px] text-slate-400">{val.desc}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Education & Academic Milestones */}
              <div className="bg-[#0e1422] border border-white/10 rounded-2xl p-5 space-y-3">
                <h4 className="text-xs font-bold text-white uppercase tracking-wider flex items-center gap-2">
                  <Award size={14} className="text-amber-400" />
                  <span>Academic Milestones</span>
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                  {[
                    { degree: 'BS Computer Science', inst: 'Iqra Post Graduate College, Havelian', status: '3rd Semester (Active)', color: 'border-[#00d9ff]/30 text-[#00d9ff]' },
                    { degree: 'FSc Computer Science', inst: 'Pak Wattan School & College', status: 'Completed (2024)', color: 'border-emerald-500/30 text-emerald-400' },
                    { degree: 'Matric in Science', inst: 'Al Arqam Academy of Excellence', status: 'Completed (2022)', color: 'border-purple-500/30 text-purple-400' }
                  ].map((edu, idx) => (
                    <div key={idx} className={`p-3.5 rounded-xl bg-[#121a2c] border ${edu.color} flex flex-col justify-between`}>
                      <div>
                        <span className="text-white font-bold text-xs block">{edu.degree}</span>
                        <span className="text-[10px] text-slate-400 mt-1 block">{edu.inst}</span>
                      </div>
                      <span className="text-[10px] font-semibold mt-2 block opacity-90">{edu.status}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* SETTINGS TAB */}
          {activeTab === 'settings' && (
            <div className="space-y-6 max-w-3xl mx-auto">
              <div>
                <h2 className="text-xl font-black text-white">System Settings &amp; Security</h2>
                <p className="text-xs text-slate-400 mt-1">Administrative credentials and system parameters.</p>
              </div>
              <div className="bg-[#0e1422] border border-white/10 p-6 rounded-2xl space-y-4">
                <div className="flex items-center gap-4 pb-4 border-b border-white/5">
                  <div className="w-16 h-16 rounded-2xl p-0.5 bg-[#00d9ff]">
                    <img src={IMAGES.profile} alt="Muhammad Ali" className="w-full h-full object-cover rounded-[14px]" />
                  </div>
                  <div>
                    <h3 className="font-bold text-white text-base">Muhammad Ali</h3>
                    <p className="text-xs text-[#00d9ff]">alimuhammadhvn81@gmail.com</p>
                    <span className="text-[10px] text-emerald-400 font-bold uppercase">Master Administrator</span>
                  </div>
                </div>

                <div className="space-y-3 text-xs">
                  <div className="flex items-center justify-between p-3 bg-[#111827] rounded-xl">
                    <span className="text-slate-400">Master Password Status</span>
                    <span className="font-semibold text-emerald-400">Encrypted (Ali2007)</span>
                  </div>
                  <div className="flex items-center justify-between p-3 bg-[#111827] rounded-xl">
                    <span className="text-slate-400">Active Database Mode</span>
                    <span className="font-semibold text-[#00d9ff]">Durable In-Memory + Disk Sync</span>
                  </div>
                  <div className="flex items-center justify-between p-3 bg-[#111827] rounded-xl">
                    <span className="text-slate-400">AI Assistant Integration</span>
                    <span className="font-semibold text-purple-400">Gemini 2.5 Flash Connected</span>
                  </div>
                </div>
              </div>
            </div>
          )}

        </main>
      </div>

      {/* Admin Profile ID Modal */}
      {isProfileModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-md p-4" onClick={() => setIsProfileModalOpen(false)}>
          <div className="w-full max-w-sm bg-[#0e1422] border border-[#00d9ff]/30 rounded-3xl p-6 relative shadow-2xl" onClick={e => e.stopPropagation()}>
            <button onClick={() => setIsProfileModalOpen(false)} className="absolute top-4 right-4 text-slate-400 hover:text-white p-1 rounded-lg bg-white/5">
              <X size={18} />
            </button>
            <div className="text-center">
              <div className="w-20 h-20 mx-auto rounded-2xl p-1 bg-gradient-to-tr from-[#00d9ff] to-[#38bdf8] mb-3">
                <img src={IMAGES.profile} className="w-full h-full object-cover rounded-xl" alt="Muhammad Ali" />
              </div>
              <h3 className="text-lg font-black text-white">Muhammad Ali</h3>
              <p className="text-xs text-[#00d9ff] font-semibold">Web Developer • Game &amp; AI Developer</p>
              <div className="mt-4 pt-4 border-t border-white/10 text-left space-y-2 text-xs text-slate-300">
                <p><span className="text-slate-500 font-semibold">Email:</span> alimuhammadhvn81@gmail.com</p>
                <p><span className="text-slate-500 font-semibold">WhatsApp:</span> +92 342 6793428</p>
                <p><span className="text-slate-500 font-semibold">Call:</span> +92 330 0358799</p>
                <p><span className="text-slate-500 font-semibold">Location:</span> Havelian, Abbottabad, Pakistan</p>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
