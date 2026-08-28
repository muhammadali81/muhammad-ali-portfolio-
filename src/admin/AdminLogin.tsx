import React, { useState } from 'react';
import {
  Lock,
  Mail,
  Eye,
  EyeOff,
  ShieldCheck,
  ArrowRight,
  Sparkles,
  CheckCircle2,
  AlertCircle,
  X,
  UserCheck,
  KeyRound,
  Phone,
  Globe,
  Award
} from 'lucide-react';
import { DEFAULT_ADMIN_USER } from './adminStore';

interface AdminLoginProps {
  onLoginSuccess: (token: string, user: typeof DEFAULT_ADMIN_USER) => void;
}

export default function AdminLogin({ onLoginSuccess }: AdminLoginProps) {
  const [email, setEmail] = useState('alimuhammadhvn81@gmail.com');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [rememberMe, setRememberMe] = useState(true);
  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const [successMessage, setSuccessMessage] = useState('');
  const [isProfileSlidingOpen, setIsProfileSlidingOpen] = useState(false);

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
        setSuccessMessage('Authentication successful. Loading Admin Dashboard...');
        if (rememberMe) {
          localStorage.setItem('ma_admin_auth_token', data.token);
          localStorage.setItem('ma_admin_user', JSON.stringify(data.user));
        } else {
          sessionStorage.setItem('ma_admin_auth_token', data.token);
          sessionStorage.setItem('ma_admin_user', JSON.stringify(data.user));
        }

        setTimeout(() => {
          onLoginSuccess(data.token, data.user);
        }, 500);
      } else {
        setErrorMessage(data.error || 'Invalid credentials. Please verify your email and password.');
      }
    } catch {
      // Offline / Fallback check
      if (password === 'Ali2007') {
        const token = `ma_sess_${Date.now()}`;
        setSuccessMessage('Authenticated successfully. Welcome Muhammad Ali!');
        if (rememberMe) {
          localStorage.setItem('ma_admin_auth_token', token);
        }
        setTimeout(() => {
          onLoginSuccess(token, DEFAULT_ADMIN_USER);
        }, 500);
      } else {
        setErrorMessage('Invalid credentials. Please enter the correct admin master password.');
      }
    } finally {
      setLoading(false);
    }
  };

  const handleAutoFill = () => {
    setEmail('alimuhammadhvn81@gmail.com');
    setPassword('Ali2007');
    setSuccessMessage('Credentials auto-filled! Click Sign In to proceed.');
    setIsProfileSlidingOpen(false);
  };

  return (
    <div className="min-h-screen bg-[#070b12] flex flex-col justify-center items-center p-4 relative overflow-hidden text-slate-200">
      {/* Ambient background glow */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-br from-[#00d9ff]/10 via-[#7c5cff]/10 to-transparent rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -bottom-20 -right-20 w-96 h-96 bg-[#00d9ff]/5 rounded-full blur-2xl pointer-events-none" />

      {/* Main Login Card */}
      <div className="w-full max-w-md bg-[#0e1420]/90 backdrop-blur-xl border border-white/10 rounded-2xl p-8 shadow-2xl relative z-10">
        {/* Brand & Clickable Profile Photo */}
        <div className="text-center mb-8 flex flex-col items-center">
          <div className="relative group">
            <button
              type="button"
              onClick={() => setIsProfileSlidingOpen(true)}
              className="relative cursor-pointer transition-transform transform group-hover:scale-105 active:scale-95 focus:outline-none"
              title="Click to open Administrator Profile details"
            >
              <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-[#00d9ff] to-[#7c5cff] p-0.5 shadow-xl shadow-[#00d9ff]/20">
                <div className="w-full h-full bg-[#0a0e17] rounded-[14px] flex items-center justify-center overflow-hidden relative">
                  <img
                    src="images/profile.jpg"
                    alt="Muhammad Ali"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                    <UserCheck className="w-6 h-6 text-[#00d9ff]" />
                  </div>
                </div>
              </div>

              {/* Status Dot */}
              <span className="absolute -bottom-1 -right-1 w-5 h-5 rounded-full bg-emerald-500 border-2 border-[#0e1420] flex items-center justify-center">
                <span className="w-2 h-2 rounded-full bg-white animate-pulse" />
              </span>
            </button>
          </div>

          <button
            type="button"
            onClick={() => setIsProfileSlidingOpen(true)}
            className="mt-3 text-xs font-bold text-[#00d9ff] hover:underline flex items-center gap-1 cursor-pointer"
          >
            Muhammad Ali Profile <Sparkles className="w-3 h-3 text-amber-400" />
          </button>

          <h1 className="text-2xl font-black tracking-tight text-white flex items-center justify-center gap-2 mt-1">
            Admin Portal <ShieldCheck className="w-5 h-5 text-[#00d9ff]" />
          </h1>
          <p className="text-xs text-slate-400 mt-0.5">
            Full-Screen Portfolio Management & System Control
          </p>
        </div>

        {/* Alerts */}
        {errorMessage && (
          <div className="mb-5 p-3.5 bg-red-500/10 border border-red-500/30 rounded-xl flex items-start gap-3 text-red-400 text-xs animate-shake">
            <AlertCircle className="w-4 h-4 shrink-0 mt-0.5" />
            <span>{errorMessage}</span>
          </div>
        )}

        {successMessage && (
          <div className="mb-5 p-3.5 bg-emerald-500/10 border border-emerald-500/30 rounded-xl flex items-start gap-3 text-emerald-400 text-xs">
            <CheckCircle2 className="w-4 h-4 shrink-0 mt-0.5" />
            <span>{successMessage}</span>
          </div>
        )}

        {/* Login Form */}
        <form onSubmit={handleLogin} className="space-y-4">
          {/* Email field */}
          <div>
            <label className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-1.5">
              Admin Email Address
            </label>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-400">
                <Mail className="w-4 h-4 text-[#00d9ff]/70" />
              </div>
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Admin Email..."
                className="w-full pl-10 pr-4 py-3 bg-[#131b2b] border border-white/10 rounded-xl text-sm text-white placeholder-slate-500 focus:outline-none focus:border-[#00d9ff] focus:ring-1 focus:ring-[#00d9ff] transition-all"
              />
            </div>
          </div>

          {/* Password field */}
          <div>
            <div className="flex items-center justify-between mb-1.5">
              <label className="block text-xs font-semibold text-slate-300 uppercase tracking-wider">
                Admin Password
              </label>
              <span className="text-[11px] text-[#00d9ff]/80 font-mono">Private</span>
            </div>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-400">
                <Lock className="w-4 h-4 text-[#00d9ff]/70" />
              </div>
              <input
                type={showPassword ? 'text' : 'password'}
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Enter password..."
                className="w-full pl-10 pr-11 py-3 bg-[#131b2b] border border-white/10 rounded-xl text-sm text-white placeholder-slate-500 focus:outline-none focus:border-[#00d9ff] focus:ring-1 focus:ring-[#00d9ff] transition-all"
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute inset-y-0 right-0 pr-3.5 flex items-center text-slate-400 hover:text-white transition-colors cursor-pointer"
                title={showPassword ? 'Hide password' : 'Show password'}
              >
                {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
              </button>
            </div>
          </div>

          {/* Remember me */}
          <div className="flex items-center justify-between pt-1">
            <label className="flex items-center gap-2 cursor-pointer select-none">
              <input
                type="checkbox"
                checked={rememberMe}
                onChange={(e) => setRememberMe(e.target.checked)}
                className="w-4 h-4 rounded border-white/20 bg-[#131b2b] text-[#00d9ff] focus:ring-[#00d9ff] focus:ring-offset-0"
              />
              <span className="text-xs text-slate-300">Keep me signed in</span>
            </label>

            <a
              href="/"
              className="text-xs text-slate-400 hover:text-[#00d9ff] transition-colors"
            >
              ← Back to Website
            </a>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            disabled={loading}
            className="w-full mt-2 py-3.5 px-4 bg-gradient-to-r from-[#00d9ff] to-[#00b4d8] text-[#061017] font-bold text-sm rounded-xl hover:shadow-lg hover:shadow-[#00d9ff]/20 active:scale-[0.99] transition-all flex items-center justify-center gap-2 disabled:opacity-60 cursor-pointer"
          >
            {loading ? (
              <div className="w-5 h-5 border-2 border-[#061017] border-t-transparent rounded-full animate-spin" />
            ) : (
              <>
                Sign In to Full Dashboard <ArrowRight className="w-4 h-4" />
              </>
            )}
          </button>
        </form>

        {/* Backend Note Box */}
        <div className="mt-6 p-3 bg-white/[0.03] border border-white/5 rounded-xl text-center flex items-center justify-between text-xs">
          <span className="text-slate-400 text-[11px]">Protected Master Admin Portal</span>
          <span className="px-2.5 py-1 bg-[#00d9ff]/15 text-[#00d9ff] border border-[#00d9ff]/30 rounded-lg font-semibold text-[11px]">
            Encrypted Session
          </span>
        </div>
      </div>

      {/* SLIDING SCREEN / PROFILE DRAWER OVERLAY */}
      {isProfileSlidingOpen && (
        <div className="fixed inset-0 z-50 flex justify-end bg-black/80 backdrop-blur-sm animate-fade-in">
          <div
            className="w-full sm:w-[420px] h-full bg-[#0b101c] border-l border-[#00d9ff]/30 p-6 flex flex-col justify-between overflow-y-auto shadow-2xl relative transition-all animate-slide-left"
          >
            <div>
              {/* Drawer Header */}
              <div className="flex items-center justify-between pb-4 border-b border-white/10">
                <div className="flex items-center gap-2 text-[#00d9ff] font-bold text-sm">
                  <ShieldCheck className="w-5 h-5" /> Administrator Profile
                </div>
                <button
                  onClick={() => setIsProfileSlidingOpen(false)}
                  className="p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-white/10 transition-colors cursor-pointer"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Profile Main Card */}
              <div className="mt-6 text-center bg-[#101726] border border-white/10 p-6 rounded-2xl relative overflow-hidden">
                <div className="w-24 h-24 mx-auto rounded-full bg-gradient-to-tr from-[#00d9ff] to-[#7c5cff] p-1 shadow-xl mb-3">
                  <img
                    src="images/profile.jpg"
                    alt="Muhammad Ali"
                    className="w-full h-full object-cover rounded-full"
                  />
                </div>
                <h2 className="text-xl font-extrabold text-white">Muhammad Ali</h2>
                <p className="text-xs text-[#00d9ff] font-semibold mt-0.5">Full Stack Web Developer & Studio Lead</p>

                <div className="inline-flex items-center gap-1.5 px-3 py-1 mt-3 rounded-full bg-emerald-500/15 border border-emerald-500/30 text-emerald-400 text-xs font-bold">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
                  Master Admin Privileges Active
                </div>
              </div>

              {/* Information List */}
              <div className="mt-6 space-y-3 text-xs">
                <div className="p-3.5 bg-[#121a2d] border border-white/10 rounded-xl flex items-center justify-between">
                  <span className="text-slate-400 flex items-center gap-2">
                    <Mail className="w-4 h-4 text-[#00d9ff]" /> Admin Email
                  </span>
                  <span className="font-mono text-white font-bold">alimuhammadhvn81@gmail.com</span>
                </div>

                <div className="p-3.5 bg-[#121a2d] border border-white/10 rounded-xl flex items-center justify-between">
                  <span className="text-slate-400 flex items-center gap-2">
                    <KeyRound className="w-4 h-4 text-amber-400" /> Security Key
                  </span>
                  <span className="font-mono text-amber-400 font-bold">•••••••• (Protected)</span>
                </div>

                <div className="p-3.5 bg-[#121a2d] border border-white/10 rounded-xl flex items-center justify-between">
                  <span className="text-slate-400 flex items-center gap-2">
                    <Phone className="w-4 h-4 text-emerald-400" /> Direct WhatsApp
                  </span>
                  <span className="font-mono text-white font-bold">+92 342 6793428</span>
                </div>

                <div className="p-3.5 bg-[#121a2d] border border-white/10 rounded-xl flex items-center justify-between">
                  <span className="text-slate-400 flex items-center gap-2">
                    <Globe className="w-4 h-4 text-purple-400" /> Web Application
                  </span>
                  <span className="text-white font-bold">Muhammad Ali Studio</span>
                </div>
              </div>

              {/* Security Shield Note */}
              <div className="mt-6 p-4 bg-gradient-to-br from-[#00d9ff]/10 to-[#7c5cff]/10 border border-[#00d9ff]/20 rounded-xl space-y-2">
                <h4 className="text-xs font-bold text-white uppercase tracking-wider flex items-center gap-1.5">
                  <Award className="w-4 h-4 text-[#00d9ff]" /> Private Access Shield
                </h4>
                <p className="text-[11px] text-slate-300">
                  This administration portal is strictly restricted to Muhammad Ali. Credentials and tokens are encrypted end-to-end.
                </p>
              </div>
            </div>

            <div className="pt-4 border-t border-white/10 text-center">
              <button
                onClick={() => setIsProfileSlidingOpen(false)}
                className="w-full py-2.5 bg-white/10 hover:bg-white/20 text-white font-bold text-xs rounded-xl transition-colors cursor-pointer"
              >
                Close Profile Screen
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Footer copyright */}
      <div className="mt-8 text-center text-xs text-slate-500">
        © 2025 Muhammad Ali Portfolio. All Rights Reserved.
      </div>
    </div>
  );
}
