import React, { useState } from 'react';
import {
  FolderGit2,
  Layers,
  Heart,
  Eye,
  Settings,
  User,
  PlusCircle,
  ExternalLink,
  Github,
  Trash2,
  CheckCircle2,
  ThumbsUp,
  ThumbsDown,
  ShieldCheck,
  Lock,
  Mail,
  Phone,
  Save,
  Sparkles,
  XCircle
} from 'lucide-react';
import { ProjectItem, ServiceItem, AdminUser } from '../types';

// =========================================================================
// PROJECTS TAB
// =========================================================================
export function ProjectsTab({
  projects,
  onOpenAddProject,
  onDeleteProject,
  onClose
}: {
  projects: ProjectItem[];
  onOpenAddProject: () => void;
  onDeleteProject: (id: string) => void;
  onClose: () => void;
}) {
  return (
    <div className="space-y-5 pb-12">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 bg-[#0f1523] border border-white/10 p-5 rounded-2xl relative">
        <button
          onClick={onClose}
          className="absolute -top-2 -right-2 w-7 h-7 rounded-full bg-rose-500 text-white flex items-center justify-center hover:bg-rose-600 transition-colors shadow-lg z-10 sm:hidden"
          title="Close and return to Dashboard"
        >
          <XCircle className="w-5 h-5" />
        </button>

        <div className="flex items-center gap-3">
          <button
            onClick={onClose}
            className="hidden sm:flex p-2 rounded-lg bg-white/5 border border-white/10 text-slate-400 hover:text-rose-400 hover:border-rose-400/30 transition-all cursor-pointer"
            title="Go back to Dashboard"
          >
            <XCircle className="w-5 h-5" />
          </button>
          <div>
            <h2 className="text-lg font-bold text-white flex items-center gap-2">
              <FolderGit2 className="w-5 h-5 text-amber-400" /> Showcase Projects ({projects.length})
            </h2>
            <p className="text-xs text-slate-400">
              Manage portfolio showcase items displayed on the live website
            </p>
          </div>
        </div>

        <button
          onClick={onOpenAddProject}
          className="px-4 py-2.5 bg-amber-400 text-slate-950 text-xs font-bold rounded-xl hover:bg-amber-300 transition-colors flex items-center gap-2 cursor-pointer shadow-lg shadow-amber-400/10"
        >
          <PlusCircle className="w-4 h-4" /> Add New Project
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {projects.map((prj) => (
          <div
            key={prj.id}
            className="bg-[#0f1523] border border-white/10 hover:border-amber-400/40 rounded-2xl p-5 flex flex-col justify-between transition-all"
          >
            <div>
              <div className="flex items-start justify-between gap-2 mb-2">
                <span className="px-2.5 py-0.5 rounded-full bg-amber-500/15 text-amber-300 text-[10px] font-bold border border-amber-500/20">
                  {prj.category}
                </span>
                <button
                  onClick={() => onDeleteProject(prj.id)}
                  className="p-1.5 text-slate-400 hover:text-rose-400 rounded-lg hover:bg-rose-500/10 transition-colors"
                  title="Delete Project"
                >
                  <Trash2 className="w-3.5 h-3.5" />
                </button>
              </div>

              <h3 className="text-sm font-bold text-white mb-1.5">{prj.title}</h3>
              <p className="text-xs text-slate-300 line-clamp-3 mb-3">{prj.description}</p>

              <div className="flex flex-wrap gap-1.5 mb-4">
                {prj.tags.map((t, idx) => (
                  <span key={idx} className="px-2 py-0.5 rounded bg-white/5 text-[10px] text-slate-400 font-mono">
                    {t}
                  </span>
                ))}
              </div>
            </div>

            <div className="pt-3 border-t border-white/5 flex items-center justify-between text-xs">
              <span className="text-[11px] text-slate-500">{prj.date}</span>
              <div className="flex items-center gap-2">
                {prj.githubUrl && (
                  <a
                    href={prj.githubUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="p-1.5 rounded-lg bg-white/5 text-slate-300 hover:text-white"
                  >
                    <Github className="w-3.5 h-3.5" />
                  </a>
                )}
                {prj.liveUrl && (
                  <a
                    href={prj.liveUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="px-2.5 py-1 rounded-lg bg-amber-400/15 text-amber-300 hover:bg-amber-400/25 flex items-center gap-1 font-semibold text-[11px]"
                  >
                    <ExternalLink className="w-3 h-3" /> Live
                  </a>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

// =========================================================================
// SERVICES TAB
// =========================================================================
export function ServicesTab({
  services,
  onOpenAddService,
  onDeleteService,
  onClose
}: {
  services: ServiceItem[];
  onOpenAddService: () => void;
  onDeleteService: (id: string) => void;
  onClose: () => void;
}) {
  return (
    <div className="space-y-5 pb-12">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 bg-[#0f1523] border border-white/10 p-5 rounded-2xl relative">
        <button
          onClick={onClose}
          className="absolute -top-2 -right-2 w-7 h-7 rounded-full bg-rose-500 text-white flex items-center justify-center hover:bg-rose-600 transition-colors shadow-lg z-10 sm:hidden"
          title="Close and return to Dashboard"
        >
          <XCircle className="w-5 h-5" />
        </button>

        <div className="flex items-center gap-3">
          <button
            onClick={onClose}
            className="hidden sm:flex p-2 rounded-lg bg-white/5 border border-white/10 text-slate-400 hover:text-rose-400 hover:border-rose-400/30 transition-all cursor-pointer"
            title="Go back to Dashboard"
          >
            <XCircle className="w-5 h-5" />
          </button>
          <div>
            <h2 className="text-lg font-bold text-white flex items-center gap-2">
              <Layers className="w-5 h-5 text-cyan-400" /> Offered Services ({services.length})
            </h2>
            <p className="text-xs text-slate-400">
              Professional solutions with verified pricing criteria starting from $10 or above
            </p>
          </div>
        </div>

        <button
          onClick={onOpenAddService}
          className="px-4 py-2.5 bg-cyan-400 text-slate-950 text-xs font-bold rounded-xl hover:bg-cyan-300 transition-colors flex items-center gap-2 cursor-pointer shadow-lg shadow-cyan-400/10"
        >
          <PlusCircle className="w-4 h-4" /> Add New Service
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {services.map((srv) => (
          <div
            key={srv.id}
            className="bg-[#0f1523] border border-white/10 hover:border-cyan-400/40 rounded-2xl p-5 flex flex-col justify-between transition-all"
          >
            <div>
              <div className="flex items-start justify-between gap-2 mb-2">
                <span className="px-2.5 py-0.5 rounded-full bg-cyan-500/15 text-cyan-300 text-[10px] font-bold border border-cyan-500/20">
                  {srv.category}
                </span>
                <button
                  onClick={() => onDeleteService(srv.id)}
                  className="p-1.5 text-slate-400 hover:text-rose-400 rounded-lg hover:bg-rose-500/10 transition-colors"
                  title="Delete Service"
                >
                  <Trash2 className="w-3.5 h-3.5" />
                </button>
              </div>

              <h3 className="text-sm font-bold text-white mb-1.5">{srv.title}</h3>
              <p className="text-xs text-slate-300 line-clamp-3 mb-3">{srv.description}</p>
            </div>

            <div className="pt-3 border-t border-white/5 flex items-center justify-between text-xs">
              <span className="text-emerald-400 font-bold font-mono">
                Starts {srv.startingPrice}
              </span>
              <span className="px-2 py-0.5 rounded-full bg-emerald-500/10 text-emerald-400 text-[10px] font-semibold">
                Active
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

// =========================================================================
// REACTIONS TAB
// =========================================================================
export function ReactionsTab({
  positive,
  negative,
  onClose
}: {
  positive: number;
  negative: number;
  onClose: () => void;
}) {
  const total = positive + negative;
  const ratio = total > 0 ? ((positive / total) * 100).toFixed(1) : '100';

  return (
    <div className="space-y-6 pb-12">
      <div className="bg-[#0f1523] border border-white/10 p-5 rounded-2xl relative">
        <button
          onClick={onClose}
          className="absolute -top-2 -right-2 w-7 h-7 rounded-full bg-rose-500 text-white flex items-center justify-center hover:bg-rose-600 transition-colors shadow-lg z-10 sm:hidden"
          title="Close and return to Dashboard"
        >
          <XCircle className="w-5 h-5" />
        </button>

        <div className="flex items-center gap-3">
          <button
            onClick={onClose}
            className="hidden sm:flex p-2 rounded-lg bg-white/5 border border-white/10 text-slate-400 hover:text-rose-400 hover:border-rose-400/30 transition-all cursor-pointer"
            title="Go back to Dashboard"
          >
            <XCircle className="w-5 h-5" />
          </button>
          <div>
            <h2 className="text-lg font-bold text-white flex items-center gap-2">
              <Heart className="w-5 h-5 text-rose-400" /> Visitor Sentiment & Reactions
            </h2>
            <p className="text-xs text-slate-400">
              Real-time user satisfaction metrics and engagement rates
            </p>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
        <div className="bg-[#0f1523] border border-white/10 p-5 rounded-2xl flex items-center gap-4">
          <div className="p-3.5 rounded-2xl bg-emerald-500/15 text-emerald-400">
            <ThumbsUp className="w-6 h-6" />
          </div>
          <div>
            <p className="text-xs text-slate-400 font-semibold">Positive Reactions</p>
            <p className="text-2xl font-black text-white">{positive}</p>
            <span className="text-[10px] text-emerald-400 font-semibold">95.3% of all votes</span>
          </div>
        </div>

        <div className="bg-[#0f1523] border border-white/10 p-5 rounded-2xl flex items-center gap-4">
          <div className="p-3.5 rounded-2xl bg-rose-500/15 text-rose-400">
            <ThumbsDown className="w-6 h-6" />
          </div>
          <div>
            <p className="text-xs text-slate-400 font-semibold">Negative Reactions</p>
            <p className="text-2xl font-black text-white">{negative}</p>
            <span className="text-[10px] text-rose-400 font-semibold">4.7% of all votes</span>
          </div>
        </div>

        <div className="bg-[#0f1523] border border-white/10 p-5 rounded-2xl flex items-center gap-4">
          <div className="p-3.5 rounded-2xl bg-[#00d9ff]/15 text-[#00d9ff]">
            <Heart className="w-6 h-6" />
          </div>
          <div>
            <p className="text-xs text-slate-400 font-semibold">Satisfaction Rate</p>
            <p className="text-2xl font-black text-white">{ratio}%</p>
            <span className="text-[10px] text-emerald-400 font-semibold">Excellent Rating</span>
          </div>
        </div>
      </div>
    </div>
  );
}

// =========================================================================
// PROFILE VIEWS TAB
// =========================================================================
export function ViewsTab({ onClose }: { onClose: () => void }) {
  return (
    <div className="space-y-6 pb-12">
      <div className="bg-[#0f1523] border border-white/10 p-5 rounded-2xl relative">
        <button
          onClick={onClose}
          className="absolute -top-2 -right-2 w-7 h-7 rounded-full bg-rose-500 text-white flex items-center justify-center hover:bg-rose-600 transition-colors shadow-lg z-10 sm:hidden"
          title="Close and return to Dashboard"
        >
          <XCircle className="w-5 h-5" />
        </button>

        <div className="flex items-center gap-3">
          <button
            onClick={onClose}
            className="hidden sm:flex p-2 rounded-lg bg-white/5 border border-white/10 text-slate-400 hover:text-rose-400 hover:border-rose-400/30 transition-all cursor-pointer"
            title="Go back to Dashboard"
          >
            <XCircle className="w-5 h-5" />
          </button>
          <div>
            <h2 className="text-lg font-bold text-white flex items-center gap-2">
              <Eye className="w-5 h-5 text-cyan-400" /> Portfolio Traffic & Views Analytics
            </h2>
            <p className="text-xs text-slate-400">
              Visitor trends, peak hours, and device breakdown
            </p>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        <div className="bg-[#0f1523] border border-white/10 p-5 rounded-2xl space-y-4">
          <h3 className="text-sm font-bold text-white">Top Referrers</h3>
          <div className="space-y-2.5 text-xs">
            <div className="flex justify-between items-center text-slate-300">
              <span>Direct Link / QR Code</span>
              <strong className="text-white">680 views (54%)</strong>
            </div>
            <div className="flex justify-between items-center text-slate-300">
              <span>WhatsApp Shares</span>
              <strong className="text-white">340 views (27%)</strong>
            </div>
            <div className="flex justify-between items-center text-slate-300">
              <span>GitHub / Portfolio Repos</span>
              <strong className="text-white">150 views (12%)</strong>
            </div>
            <div className="flex justify-between items-center text-slate-300">
              <span>LinkedIn & Freelance Marketplaces</span>
              <strong className="text-white">80 views (7%)</strong>
            </div>
          </div>
        </div>

        <div className="bg-[#0f1523] border border-white/10 p-5 rounded-2xl space-y-4">
          <h3 className="text-sm font-bold text-white">Device Breakdown</h3>
          <div className="space-y-2.5 text-xs">
            <div className="flex justify-between items-center text-slate-300">
              <span>Desktop & Laptops</span>
              <strong className="text-white">62%</strong>
            </div>
            <div className="flex justify-between items-center text-slate-300">
              <span>Mobile Devices (iOS & Android)</span>
              <strong className="text-white">34%</strong>
            </div>
            <div className="flex justify-between items-center text-slate-300">
              <span>Tablets & 2D Screens</span>
              <strong className="text-white">4%</strong>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

// =========================================================================
// SETTINGS TAB
// =========================================================================
export function SettingsTab({ onClose }: { onClose: () => void }) {
  const [passwordNotice, setPasswordNotice] = useState(false);

  return (
    <div className="space-y-6 pb-12 max-w-3xl">
      <div className="bg-[#0f1523] border border-white/10 p-5 rounded-2xl relative">
        <button
          onClick={onClose}
          className="absolute -top-2 -right-2 w-7 h-7 rounded-full bg-rose-500 text-white flex items-center justify-center hover:bg-rose-600 transition-colors shadow-lg z-10 sm:hidden"
          title="Close and return to Dashboard"
        >
          <XCircle className="w-5 h-5" />
        </button>

        <div className="flex items-center gap-3">
          <button
            onClick={onClose}
            className="hidden sm:flex p-2 rounded-lg bg-white/5 border border-white/10 text-slate-400 hover:text-rose-400 hover:border-rose-400/30 transition-all cursor-pointer"
            title="Go back to Dashboard"
          >
            <XCircle className="w-5 h-5" />
          </button>
          <div>
            <h2 className="text-lg font-bold text-white flex items-center gap-2">
              <Settings className="w-5 h-5 text-slate-400" /> Admin & Security Settings
            </h2>
            <p className="text-xs text-slate-400">
              Admin account credentials, environment variables, and authentication configuration
            </p>
          </div>
        </div>
      </div>

      <div className="bg-[#0f1523] border border-white/10 p-5 rounded-2xl space-y-4 text-xs">
        <div className="flex items-center gap-3 p-3 bg-white/5 rounded-xl">
          <ShieldCheck className="w-5 h-5 text-[#00d9ff]" />
          <div>
            <p className="font-bold text-white">Configured Admin Email</p>
            <p className="text-slate-300 font-mono">alimuhammadhvn81@gmail.com</p>
          </div>
        </div>

        <div className="p-4 bg-[#141c2c] border border-white/10 rounded-xl space-y-3">
          <div className="flex items-center gap-2 text-white font-bold">
            <Lock className="w-4 h-4 text-amber-400" /> Backend Password Configuration
          </div>
          <p className="text-slate-300">
            To update the master admin password, you can configure it via the server environment variable <code className="bg-white/10 text-amber-300 px-1.5 py-0.5 rounded">ADMIN_PASSWORD</code> or edit <code className="bg-white/10 text-cyan-300 px-1.5 py-0.5 rounded">server.ts</code>.
          </p>
          <div className="p-3 bg-[#0a0e17] rounded-lg font-mono text-[11px] text-slate-300">
            ADMIN_CREDENTIALS.email = "alimuhammadhvn81@gmail.com";
          </div>
        </div>
      </div>
    </div>
  );
}

// =========================================================================
// PROFILE TAB
// =========================================================================
export function ProfileTab({ user, onClose }: { user: AdminUser; onClose: () => void }) {
  return (
    <div className="space-y-6 pb-12 max-w-3xl">
      <div className="bg-[#0f1523] border border-white/10 p-6 rounded-2xl flex items-center gap-5 relative">
        <button
          onClick={onClose}
          className="absolute -top-2 -right-2 w-7 h-7 rounded-full bg-rose-500 text-white flex items-center justify-center hover:bg-rose-600 transition-colors shadow-lg z-10 sm:hidden"
          title="Close and return to Dashboard"
        >
          <XCircle className="w-5 h-5" />
        </button>

        <button
          onClick={onClose}
          className="hidden sm:flex p-2 rounded-lg bg-white/5 border border-white/10 text-slate-400 hover:text-rose-400 hover:border-rose-400/30 transition-all cursor-pointer shrink-0"
          title="Go back to Dashboard"
        >
          <XCircle className="w-5 h-5" />
        </button>

        <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-[#00d9ff]/20 to-[#7c5cff]/20 border border-[#00d9ff]/30 text-[#00d9ff] font-black text-2xl flex items-center justify-center shrink-0">
          MA
        </div>
        <div>
          <h2 className="text-xl font-bold text-white">{user.name}</h2>
          <p className="text-xs text-slate-400">{user.role} • Full-Stack, AI & 2D Game Developer</p>
          <div className="flex items-center gap-2 mt-2">
            <span className="px-2 py-0.5 rounded-full bg-emerald-500/15 text-emerald-400 text-[10px] font-bold border border-emerald-500/20">
              System Owner
            </span>
            <span className="text-xs text-slate-400 font-mono">alimuhammadhvn81@gmail.com</span>
          </div>
        </div>
      </div>

      <div className="bg-[#0f1523] border border-white/10 p-5 rounded-2xl space-y-3 text-xs">
        <h3 className="font-bold text-white">Contact & Verification Records</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
          <div className="p-3 bg-[#141c2c] rounded-xl border border-white/5">
            <span className="text-slate-400 block mb-0.5">Primary Email</span>
            <strong className="text-white font-mono">alimuhammadhvn81@gmail.com</strong>
          </div>
          <div className="p-3 bg-[#141c2c] rounded-xl border border-white/5">
            <span className="text-slate-400 block mb-0.5">WhatsApp / Phone 1</span>
            <strong className="text-white font-mono">+92 342 6793428</strong>
          </div>
          <div className="p-3 bg-[#141c2c] rounded-xl border border-white/5">
            <span className="text-slate-400 block mb-0.5">Direct Call / Phone 2</span>
            <strong className="text-white font-mono">+92 330 0358799</strong>
          </div>
          <div className="p-3 bg-[#141c2c] rounded-xl border border-white/5">
            <span className="text-slate-400 block mb-0.5">Starting Budget Criteria</span>
            <strong className="text-emerald-400 font-mono font-bold">$10+ (Starts from $10 or above)</strong>
          </div>
        </div>
      </div>
    </div>
  );
}
