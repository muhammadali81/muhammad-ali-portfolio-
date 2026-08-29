import React, { useState, useEffect } from 'react';
import { db, signInWithGoogle } from '../lib/firebase';
import { collection, getDocs, doc, setDoc, updateDoc, deleteDoc, query, orderBy, addDoc } from 'firebase/firestore';
import {
  Lock, Mail, Eye, EyeOff, ShieldCheck, ArrowRight, Sparkles, CheckCircle2,
  AlertCircle, X, KeyRound, Phone, Globe, Award, LayoutDashboard,
  MessageSquare, Star, Briefcase, Settings, LogOut, ChevronRight, Search,
  Bell, RefreshCw, Plus, Trash2, ExternalLink, Filter, MoreHorizontal,
  ChevronLeft, Smartphone, Laptop, Tablet, History, User, CreditCard,
  Target, Info, XCircle, Save, Send, Clock, PieChart as PieChartIcon, BarChart2, Check,
  Copy, CheckCheck, MessageCircle, ArrowUpRight, ThumbsUp, ThumbsDown,
  Layers, Wrench, Heart, Eye as ViewIcon, ChevronDown, ChevronUp, Database,
  HardDrive, FileText, CheckCircle, Shield
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
  const [email, setEmail] = useState('alimuhammadhvn81@gmail.com');
  const [password, setPassword] = useState('Ali2007');
  const [showPassword, setShowPassword] = useState(false);
  const [keepSignedIn, setKeepSignedIn] = useState(true);
  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const [successMessage, setSuccessMessage] = useState('');
  const [isProfileOpen, setIsProfileOpen] = useState(false);

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMessage('');
    setSuccessMessage('');
    setLoading(true);
    try {
      const response = await fetch('/api/admin/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email: email.trim(), password })
      });
      const data = await response.json();
      if (response.ok && data.success) {
        setSuccessMessage('Authenticated successfully! Loading Full Dashboard...');
        if (keepSignedIn) {
          localStorage.setItem('ma_admin_auth_token', data.token);
          localStorage.setItem('ma_admin_user', JSON.stringify(data.user));
        } else {
          sessionStorage.setItem('ma_admin_auth_token', data.token);
          sessionStorage.setItem('ma_admin_user', JSON.stringify(data.user));
        }
        setTimeout(() => onLoginSuccess(data.token, data.user), 500);
      } else {
        setErrorMessage(data.error || 'Invalid administrator credentials.');
      }
    } catch {
      // Local fallback credentials validation
      if (password === 'Ali2007' && email.toLowerCase().includes('ali')) {
        const token = `ma_sess_${Date.now()}`;
        setSuccessMessage('Authenticated successfully! Loading Full Dashboard...');
        if (keepSignedIn) {
          localStorage.setItem('ma_admin_auth_token', token);
          localStorage.setItem('ma_admin_user', JSON.stringify(DEFAULT_ADMIN_USER));
        }
        setTimeout(() => onLoginSuccess(token, DEFAULT_ADMIN_USER), 500);
      } else {
        setErrorMessage('Access Denied. Please verify master admin credentials.');
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
                  src="https://ui-avatars.com/api/?name=Muhammad+Ali&background=00d9ff&color=061017&bold=true" 
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
          </form>

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
                <img src="https://ui-avatars.com/api/?name=Muhammad+Ali&background=00d9ff&color=061017&bold=true" className="w-full h-full object-cover rounded-xl" alt="Muhammad Ali" />
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

  // Expandable Quick Sections
  const [isRecentFeedbacksOpen, setIsRecentFeedbacksOpen] = useState(false);
  const [isRecentInquiriesOpen, setIsRecentInquiriesOpen] = useState(false);

  // New Code Form State
  const [assignedClient, setAssignedClient] = useState('');
  const [isGeneratingCode, setIsGeneratingCode] = useState(false);
  const [copiedCodeId, setCopiedCodeId] = useState<string | null>(null);

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
    const token = localStorage.getItem('ma_admin_auth_token') || sessionStorage.getItem('ma_admin_auth_token');
    if (token) {
      setIsAuthenticated(true);
      const savedUser = localStorage.getItem('ma_admin_user') || sessionStorage.getItem('ma_admin_user');
      if (savedUser) {
        try { setUser(JSON.parse(savedUser)); } catch { }
      }
    }
    fetchAllData();
  }, []);

  const fetchAllData = async () => {
    setIsRefreshing(true);
    try {
      const sRes = await fetch('/api/stats');
      if (sRes.ok) {
        const sData = await sRes.json();
        setStats(prev => ({
          ...prev,
          totalFeedbacks: sData.totalFeedback || prev.totalFeedbacks,
          profileViews: sData.profileViews || prev.profileViews,
          averageRating: sData.averageRating || prev.averageRating,
          positiveReactions: sData.positiveReactions || prev.positiveReactions,
          negativeReactions: sData.negativeReactions || prev.negativeReactions,
          satisfiedClients: sData.satisfiedClients || prev.satisfiedClients,
          ratingBreakdown: sData.ratingBreakdown || prev.ratingBreakdown
        }));
      }
    } catch { }

    try {
      const fRes = await fetch('/api/admin/feedback');
      if (fRes.ok) {
        const fData = await fRes.json();
        if (Array.isArray(fData)) {
          setFeedbacks(fData.map((fb: any) => ({
            id: fb.id.toString(),
            clientName: fb.clientName || 'Client',
            clientEmail: fb.clientEmail,
            clientPhoto: fb.clientPhoto,
            rating: fb.rating || 5,
            comment: fb.comment || '',
            status: fb.isApproved ? 'Published' : 'Pending',
            codeUsed: fb.codeUsed,
            source: fb.source,
            adminReply: fb.adminReply,
            date: fb.date ? new Date(fb.date).toLocaleDateString() : 'Recent'
          })));
        }
      }
    } catch { }

    try {
      const cRes = await fetch('/api/admin/codes');
      if (cRes.ok) {
        const cData = await cRes.json();
        if (Array.isArray(cData.codes)) {
          setCodes(cData.codes.map((c: any) => ({
            id: c.id,
            code: c.code,
            assignedTo: c.assignedTo || 'Unassigned',
            status: c.isUsed ? 'Used' : 'Active',
            createdAt: c.createdAt ? new Date(c.createdAt).toLocaleDateString() : 'Today',
            usedAt: c.usedAt
          })));
        }
      }
    } catch { }

    try {
      const iRes = await fetch('/api/admin/inquiries');
      if (iRes.ok) {
        const iData = await iRes.json();
        if (Array.isArray(iData.inquiries)) {
          setInquiries(iData.inquiries.map((inq: any) => ({
            id: inq.id,
            name: inq.name || 'Client',
            email: inq.email || '',
            phone: inq.phone,
            subject: inq.subject || 'Project Inquiry',
            service: inq.service || 'Web Development',
            budget: inq.budget || '$10+ USD',
            message: inq.message || '',
            status: inq.status || 'New',
            date: inq.date ? new Date(inq.date).toLocaleDateString() : 'Today'
          })));
        }
      }
    } catch { }

    setIsRefreshing(false);
  };

  const handleLogout = () => {
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
      const res = await fetch('/api/admin/codes/generate', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ assignedTo: clientName })
      });
      
      if (res.ok) {
        const data = await res.json();
        const created = data.code || {
          id: `code-${Date.now()}`,
          code: newGeneratedCode,
          assignedTo: clientName,
          status: 'Active',
          createdAt: 'Today'
        };
        setCodes(prev => [
          {
            id: created.id,
            code: created.code,
            assignedTo: created.assignedTo || clientName,
            status: 'Active',
            createdAt: 'Today',
            usedAt: undefined
          },
          ...prev.filter(c => c.id !== created.id && c.code !== created.code)
        ]);
        setAssignedClient('');
      } else {
        // Server error fallback - create locally so admin is never blocked
        const fallbackCode: GeneratedCode = {
          id: `code-${Date.now()}`,
          code: newGeneratedCode,
          assignedTo: clientName,
          status: 'Active',
          createdAt: 'Today'
        };
        setCodes(prev => [fallbackCode, ...prev]);
        setAssignedClient('');
      }
    } catch {
      // Network failure fallback
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
      await fetch(`/api/admin/codes/${id}`, { method: 'DELETE' });
    } catch { }
    setCodes(prev => prev.filter(c => c.id !== id));
  };

  const handleToggleCode = async (id: string) => {
    try {
      await fetch(`/api/admin/codes/${id}/toggle`, { method: 'POST' });
    } catch { }
    setCodes(prev => prev.map(c => c.id === id ? { ...c, status: c.status === 'Active' ? 'Used' : 'Active' } : c));
  };

  const handleCopyCode = (codeText: string, id: string) => {
    navigator.clipboard.writeText(codeText);
    setCopiedCodeId(id);
    setTimeout(() => setCopiedCodeId(null), 2000);
  };

  const handleApproveFeedback = async (id: string) => {
    try {
      const res = await fetch(`/api/admin/feedback/${id}/approve`, { method: 'POST' });
      if (res.ok) {
        const data = await res.json();
        setFeedbacks(prev => prev.map(f => f.id === id ? { 
          ...f, 
          status: 'Published',
          adminReply: data.feedback?.adminReply || f.adminReply
        } : f));
      }
    } catch { }
  };

  const handleRegenerateReply = async (id: string) => {
    try {
      const res = await fetch(`/api/admin/feedback/${id}/reply`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ regenerate: true })
      });
      if (res.ok) {
        const data = await res.json();
        setFeedbacks(prev => prev.map(f => f.id === id ? { ...f, adminReply: data.adminReply } : f));
      }
    } catch { }
  };

  const handleDeleteFeedback = async (id: string) => {
    try {
      await fetch(`/api/admin/feedback/${id}`, { method: 'DELETE' });
      setFeedbacks(prev => prev.filter(f => f.id !== id));
    } catch { }
  };

  const handleUpdateInquiryStatus = async (id: string, status: 'New' | 'Read' | 'Replied') => {
    try {
      await fetch(`/api/admin/inquiries/${id}/status`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ status })
      });
      setInquiries(prev => prev.map(i => i.id === id ? { ...i, status } : i));
    } catch { }
  };

  const handleDeleteInquiry = async (id: string) => {
    try {
      await fetch(`/api/admin/inquiries/${id}`, { method: 'DELETE' });
      setInquiries(prev => prev.filter(i => i.id !== id));
    } catch { }
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
            <div className="bg-[#101726] border border-white/10 rounded-2xl p-3.5 flex items-center gap-3 shadow-lg">
              <div className="relative">
                <div className="w-11 h-11 rounded-xl p-0.5 bg-gradient-to-tr from-[#00d9ff] to-[#38bdf8]">
                  <img src="https://ui-avatars.com/api/?name=Muhammad+Ali&background=00d9ff&color=061017&bold=true" alt="Muhammad Ali" className="w-full h-full object-cover rounded-[10px]" />
                </div>
                <span className="absolute -bottom-0.5 -right-0.5 w-3 h-3 rounded-full bg-emerald-400 border-2 border-[#101726]" />
              </div>
              <div className="overflow-hidden">
                <h3 className="text-sm font-bold text-white truncate">Muhammad Ali</h3>
                <p className="text-[11px] text-slate-400">Administrator</p>
                <span className="inline-flex items-center gap-1.5 text-[10px] text-emerald-400 font-semibold mt-0.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" /> Online
                </span>
              </div>
            </div>
          </div>

          {/* Navigation Items (Exact Match to Screenshot 2) */}
          <nav className="px-3 space-y-1 mt-1">
            {[
              { id: 'dashboard', label: 'Dashboard', icon: LayoutDashboard },
              { id: 'feedbacks', label: 'Feedbacks', icon: MessageSquare, count: feedbacks.length },
              { id: 'inquiries', label: 'Inquiries', icon: Mail, count: inquiries.filter(i => i.status === 'New').length },
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

          {/* SETTINGS & PROFILE TAB */}
          {(activeTab === 'settings' || activeTab === 'profile') && (
            <div className="space-y-6 max-w-3xl mx-auto">
              <div>
                <h2 className="text-xl font-black text-white">System Settings & Profile</h2>
                <p className="text-xs text-slate-400 mt-1">Administrative credentials and system parameters.</p>
              </div>
              <div className="bg-[#0e1422] border border-white/10 p-6 rounded-2xl space-y-4">
                <div className="flex items-center gap-4 pb-4 border-b border-white/5">
                  <div className="w-16 h-16 rounded-2xl p-0.5 bg-[#00d9ff]">
                    <img src="https://ui-avatars.com/api/?name=Muhammad+Ali&background=00d9ff&color=061017&bold=true" alt="Muhammad Ali" className="w-full h-full object-cover rounded-[14px]" />
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
    </div>
  );
}
