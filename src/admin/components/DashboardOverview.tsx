import React from 'react';
import {
  MessageSquare,
  Mail,
  Eye,
  Star,
  ThumbsUp,
  ThumbsDown,
  ArrowUpRight,
  PlusCircle,
  KeyRound,
  Sliders,
  HardDrive,
  Database,
  Image as ImageIcon,
  CheckCircle2,
  Calendar,
  Layers,
  Edit2,
  Trash2,
  FileCode2,
  PieChart as PieIcon,
  Activity
} from 'lucide-react';
import {
  PieChart,
  Pie,
  Cell,
  Tooltip,
  ResponsiveContainer,
  Legend
} from 'recharts';
import { DashboardStats, FeedbackItem, InquiryItem } from '../types';
import { AdminTab } from './AdminSidebar';

interface DashboardOverviewProps {
  stats: DashboardStats;
  feedbacks: FeedbackItem[];
  inquiries: InquiryItem[];
  onNavigateTab: (tab: AdminTab) => void;
  onOpenCodeGenerator: () => void;
  onOpenAddProject: () => void;
  onOpenAddService: () => void;
  onOpenSettings: () => void;
  onViewInquiry: (inquiry: InquiryItem) => void;
  onDeleteInquiry: (id: string) => void;
  onApproveFeedback: (id: string) => void;
}

export default function DashboardOverview({
  stats,
  feedbacks,
  inquiries,
  onNavigateTab,
  onOpenCodeGenerator,
  onOpenAddProject,
  onOpenAddService,
  onOpenSettings,
  onViewInquiry,
  onDeleteInquiry,
  onApproveFeedback
}: DashboardOverviewProps) {
  // 6 Metric Cards
  const kpiCards = [
    {
      title: 'Total Feedbacks',
      value: stats.totalFeedbacks,
      icon: MessageSquare,
      color: 'from-blue-500/20 to-blue-600/10 border-blue-500/30 text-blue-400',
      iconBg: 'bg-blue-500/20 text-blue-400',
      tab: 'feedbacks' as AdminTab
    },
    {
      title: 'Total Inquiries',
      value: stats.totalInquiries,
      icon: Mail,
      color: 'from-purple-500/20 to-purple-600/10 border-purple-500/30 text-purple-400',
      iconBg: 'bg-purple-500/20 text-purple-400',
      tab: 'inquiries' as AdminTab
    },
    {
      title: 'Profile Views',
      value: stats.profileViews.toLocaleString(),
      icon: Eye,
      color: 'from-cyan-500/20 to-cyan-600/10 border-cyan-500/30 text-cyan-400',
      iconBg: 'bg-cyan-500/20 text-cyan-400',
      tab: 'views' as AdminTab
    },
    {
      title: 'Average Rating',
      value: `${stats.averageRating}`,
      icon: Star,
      color: 'from-amber-500/20 to-amber-600/10 border-amber-500/30 text-amber-400',
      iconBg: 'bg-amber-500/20 text-amber-400',
      tab: 'feedbacks' as AdminTab
    },
    {
      title: 'Positive Reactions',
      value: stats.positiveReactions,
      icon: ThumbsUp,
      color: 'from-emerald-500/20 to-emerald-600/10 border-emerald-500/30 text-emerald-400',
      iconBg: 'bg-emerald-500/20 text-emerald-400',
      tab: 'reactions' as AdminTab
    },
    {
      title: 'Negative Reactions',
      value: stats.negativeReactions,
      icon: ThumbsDown,
      color: 'from-rose-500/20 to-rose-600/10 border-rose-500/30 text-rose-400',
      iconBg: 'bg-rose-500/20 text-rose-400',
      tab: 'reactions' as AdminTab
    }
  ];

  // Data for Rating Donut Chart
  const ratingData = [
    { name: '5 Stars', value: 16, color: '#3b82f6' },
    { name: '4 Stars', value: 6, color: '#06b6d4' },
    { name: '3 Stars', value: 2, color: '#f59e0b' },
    { name: '2 Stars', value: 1, color: '#f43f5e' },
    { name: '1 Star', value: 1, color: '#991b1b' }
  ];

  // Data for Feedback Status Donut Chart
  const feedbackStatusData = [
    { name: 'Published', value: 16, color: '#10b981' },
    { name: 'Pending Review', value: 6, color: '#f59e0b' },
    { name: 'Archived', value: 3, color: '#06b6d4' }
  ];

  // Data for Inquiries Service Category Pie Circle Chart
  const inquiryServicesData = [
    { name: 'Web Applications', value: 42, color: '#00d9ff' },
    { name: 'AI & Bot Solutions', value: 28, color: '#a855f7' },
    { name: 'Mobile / Game Dev', value: 18, color: '#ec4899' },
    { name: 'Consulting & Tech', value: 12, color: '#f59e0b' }
  ];

  return (
    <div className="space-y-6 pb-12 w-full max-w-full overflow-hidden">
      {/* 1. TOP 6 METRIC CARDS */}
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3.5">
        {kpiCards.map((kpi, idx) => {
          const Icon = kpi.icon;
          return (
            <div
              key={idx}
              className="bg-[#0f1523] border border-white/10 rounded-xl p-3.5 flex flex-col justify-between hover:border-[#00d9ff]/30 transition-all group"
            >
              <div className="flex items-center justify-between mb-2">
                <span className="text-[11px] font-semibold text-slate-400 truncate">{kpi.title}</span>
                <div className={`p-1.5 rounded-lg ${kpi.iconBg}`}>
                  <Icon className="w-3.5 h-3.5" />
                </div>
              </div>
              <div className="flex items-end justify-between mt-1">
                <span className="text-xl font-black text-white tracking-tight">{kpi.value}</span>
                <button
                  onClick={() => onNavigateTab(kpi.tab)}
                  className="text-[10px] text-slate-400 hover:text-[#00d9ff] flex items-center gap-0.5 group-hover:translate-x-0.5 transition-all cursor-pointer"
                >
                  View All <ArrowUpRight className="w-2.5 h-2.5" />
                </button>
              </div>
            </div>
          );
        })}
      </div>

      {/* 2. MIDDLE ROW: Recent Feedbacks & Recent Inquiries & Views */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-5">
        {/* Recent Feedbacks Card */}
        <div className="bg-[#0f1523] border border-white/10 rounded-2xl p-5 flex flex-col justify-between">
          <div>
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-sm font-bold text-white flex items-center gap-2">
                <MessageSquare className="w-4 h-4 text-[#00d9ff]" /> Recent Feedbacks
              </h3>
              <button
                onClick={() => onNavigateTab('feedbacks')}
                className="text-xs text-[#00d9ff] hover:underline font-medium"
              >
                View All
              </button>
            </div>

            <div className="space-y-3">
              {feedbacks.slice(0, 4).map((fb) => (
                <div
                  key={fb.id}
                  className="p-3 bg-[#131b2c] border border-white/5 rounded-xl hover:border-white/15 transition-colors"
                >
                  <div className="flex items-start justify-between gap-2">
                    <div className="flex items-center gap-2.5">
                      <div className="w-7 h-7 rounded-full bg-[#00d9ff]/20 text-[#00d9ff] font-bold text-xs flex items-center justify-center shrink-0">
                        {fb.avatarLetter || fb.clientName.charAt(0)}
                      </div>
                      <div className="min-w-0">
                        <p className="text-xs font-bold text-white leading-tight truncate">{fb.clientName}</p>
                        <div className="flex items-center gap-1 text-amber-400 text-[10px] mt-0.5">
                          {'★'.repeat(fb.rating)}
                        </div>
                      </div>
                    </div>

                    <span
                      className={`px-2 py-0.5 rounded-full text-[10px] font-bold shrink-0 ${
                        fb.status === 'Published'
                          ? 'bg-emerald-500/15 text-emerald-400 border border-emerald-500/20'
                          : fb.status === 'Pending'
                          ? 'bg-amber-500/15 text-amber-400 border border-amber-500/20'
                          : 'bg-slate-500/15 text-slate-400'
                      }`}
                    >
                      {fb.status}
                    </span>
                  </div>

                  <p className="text-[11px] text-slate-300 mt-2 line-clamp-2 italic">
                    "{fb.comment}"
                  </p>
                  <div className="flex items-center justify-between text-[10px] text-slate-500 mt-1.5">
                    <span>{fb.date}</span>
                    {fb.status === 'Pending' && (
                      <button
                        onClick={() => onApproveFeedback(fb.id)}
                        className="text-[#00d9ff] hover:underline font-bold"
                      >
                        Approve & Publish
                      </button>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Recent Inquiries Card */}
        <div className="bg-[#0f1523] border border-white/10 rounded-2xl p-5 flex flex-col justify-between">
          <div>
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-sm font-bold text-white flex items-center gap-2">
                <Mail className="w-4 h-4 text-purple-400" /> Recent Inquiries
              </h3>
              <button
                onClick={() => onNavigateTab('inquiries')}
                className="text-xs text-[#00d9ff] hover:underline font-medium"
              >
                View All
              </button>
            </div>

            <div className="space-y-3">
              {inquiries.slice(0, 4).map((inq) => (
                <div
                  key={inq.id}
                  onClick={() => onViewInquiry(inq)}
                  className="p-3 bg-[#131b2c] border border-white/5 rounded-xl hover:border-[#00d9ff]/30 transition-all cursor-pointer group"
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2.5 min-w-0">
                      <div className="p-1.5 rounded-lg bg-purple-500/10 text-purple-400 group-hover:bg-[#00d9ff]/20 group-hover:text-[#00d9ff] transition-colors shrink-0">
                        <Mail className="w-3.5 h-3.5" />
                      </div>
                      <div className="min-w-0">
                        <p className="text-xs font-bold text-white group-hover:text-[#00d9ff] transition-colors truncate">
                          {inq.name}
                        </p>
                        <p className="text-[11px] text-slate-400 truncate">{inq.subject}</p>
                      </div>
                    </div>

                    <span
                      className={`px-2 py-0.5 rounded-full text-[10px] font-bold shrink-0 ${
                        inq.status === 'New'
                          ? 'bg-emerald-500/15 text-emerald-400 border border-emerald-500/20'
                          : inq.status === 'Read'
                          ? 'bg-cyan-500/15 text-cyan-400 border border-cyan-500/20'
                          : 'bg-purple-500/15 text-purple-400 border border-purple-500/20'
                      }`}
                    >
                      {inq.status}
                    </span>
                  </div>
                  <div className="text-[10px] text-slate-500 mt-1.5 text-right">{inq.date}</div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Profile Views Chart Card */}
        <div className="bg-[#0f1523] border border-white/10 rounded-2xl p-5 flex flex-col justify-between">
          <div>
            <div className="flex items-center justify-between mb-2">
              <h3 className="text-sm font-bold text-white flex items-center gap-2">
                <Activity className="w-4 h-4 text-cyan-400" /> Profile Traffic
              </h3>
              <span className="text-[10px] text-slate-400 font-medium">Last 7 Days</span>
            </div>
            <p className="text-2xl font-black text-white tracking-tight mb-4">
              1,250 <span className="text-xs text-emerald-400 font-semibold font-sans">+18.4%</span>
            </p>

            <div className="h-48 w-full relative pt-2">
              <svg viewBox="0 0 300 130" className="w-full h-full overflow-visible">
                <defs>
                  <linearGradient id="viewsGradient" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor="#00d9ff" stopOpacity="0.35" />
                    <stop offset="100%" stopColor="#00d9ff" stopOpacity="0.0" />
                  </linearGradient>
                </defs>

                <line x1="0" y1="110" x2="300" y2="110" stroke="#ffffff10" strokeDasharray="3 3" />
                <line x1="0" y1="65" x2="300" y2="65" stroke="#ffffff10" strokeDasharray="3 3" />
                <line x1="0" y1="20" x2="300" y2="20" stroke="#ffffff10" strokeDasharray="3 3" />

                <path
                  d="M 25 110 L 25 95 L 75 70 L 125 35 L 175 45 L 225 25 L 275 12 L 275 110 Z"
                  fill="url(#viewsGradient)"
                />

                <path
                  d="M 25 95 L 75 70 L 125 35 L 175 45 L 225 25 L 275 12"
                  fill="none"
                  stroke="#00d9ff"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />

                {[
                  { x: 25, y: 95 },
                  { x: 75, y: 70 },
                  { x: 125, y: 35 },
                  { x: 175, y: 45 },
                  { x: 225, y: 25 },
                  { x: 275, y: 12 }
                ].map((pt, i) => (
                  <circle
                    key={i}
                    cx={pt.x}
                    cy={pt.y}
                    r="4"
                    fill="#0a0e17"
                    stroke="#00d9ff"
                    strokeWidth="2"
                    className="hover:r-6 cursor-pointer transition-all"
                  />
                ))}

                <text x="25" y="125" fill="#64748b" fontSize="8" textAnchor="middle">Aug 22</text>
                <text x="100" y="125" fill="#64748b" fontSize="8" textAnchor="middle">Aug 24</text>
                <text x="175" y="125" fill="#64748b" fontSize="8" textAnchor="middle">Aug 26</text>
                <text x="250" y="125" fill="#64748b" fontSize="8" textAnchor="middle">Aug 27</text>
              </svg>
            </div>
          </div>
        </div>
      </div>

      {/* 3. CHARTS SECTION: PIE CIRCLE & DONUT CHARTS (Recharts) */}
      <div className="bg-[#0f1523] border border-white/10 rounded-2xl p-5">
        <div className="flex items-center justify-between mb-4">
          <div>
            <h3 className="text-base font-bold text-white flex items-center gap-2">
              <PieIcon className="w-5 h-5 text-[#00d9ff]" /> Visual Analytics & Analytics Distribution
            </h3>
            <p className="text-xs text-slate-400">Pie Circle & Donut Charts breakdown for client feedback & services</p>
          </div>
          <span className="text-xs px-2.5 py-1 bg-[#00d9ff]/10 text-[#00d9ff] border border-[#00d9ff]/30 rounded-full font-bold">
            Interactive Recharts
          </span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Chart 1: Donut Chart - Feedbacks by Rating */}
          <div className="bg-[#121929] border border-white/5 rounded-xl p-4 flex flex-col items-center">
            <h4 className="text-xs font-bold text-white mb-1">Feedbacks by Star Rating (Donut)</h4>
            <p className="text-[10px] text-slate-400 mb-2">Distribution of rating scores</p>

            <div className="w-full h-52 relative">
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie
                    data={ratingData}
                    cx="50%"
                    cy="50%"
                    innerRadius={45}
                    outerRadius={70}
                    paddingAngle={3}
                    dataKey="value"
                  >
                    {ratingData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={entry.color} />
                    ))}
                  </Pie>
                  <Tooltip
                    contentStyle={{ backgroundColor: '#0e1422', borderColor: '#00d9ff30', borderRadius: '8px', color: '#fff', fontSize: '12px' }}
                  />
                  <Legend iconSize={8} wrapperStyle={{ fontSize: '10px', color: '#cbd2dc' }} />
                </PieChart>
              </ResponsiveContainer>
              <div className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none pb-6">
                <span className="text-lg font-black text-white">25</span>
                <span className="text-[9px] text-slate-400 font-medium">Feedbacks</span>
              </div>
            </div>
          </div>

          {/* Chart 2: Donut Chart - Feedbacks by Status */}
          <div className="bg-[#121929] border border-white/5 rounded-xl p-4 flex flex-col items-center">
            <h4 className="text-xs font-bold text-white mb-1">Feedback Approval Status (Donut)</h4>
            <p className="text-[10px] text-slate-400 mb-2">Published vs Pending</p>

            <div className="w-full h-52 relative">
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie
                    data={feedbackStatusData}
                    cx="50%"
                    cy="50%"
                    innerRadius={45}
                    outerRadius={70}
                    paddingAngle={4}
                    dataKey="value"
                  >
                    {feedbackStatusData.map((entry, index) => (
                      <Cell key={`cell-status-${index}`} fill={entry.color} />
                    ))}
                  </Pie>
                  <Tooltip
                    contentStyle={{ backgroundColor: '#0e1422', borderColor: '#10b98130', borderRadius: '8px', color: '#fff', fontSize: '12px' }}
                  />
                  <Legend iconSize={8} wrapperStyle={{ fontSize: '10px', color: '#cbd2dc' }} />
                </PieChart>
              </ResponsiveContainer>
              <div className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none pb-6">
                <span className="text-lg font-black text-emerald-400">16</span>
                <span className="text-[9px] text-slate-400 font-medium">Published</span>
              </div>
            </div>
          </div>

          {/* Chart 3: Pie Circle Chart - Inquiries by Service Category */}
          <div className="bg-[#121929] border border-white/5 rounded-xl p-4 flex flex-col items-center">
            <h4 className="text-xs font-bold text-white mb-1">Inquiry Service Share (Pie Circle)</h4>
            <p className="text-[10px] text-slate-400 mb-2">Category distribution %</p>

            <div className="w-full h-52">
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie
                    data={inquiryServicesData}
                    cx="50%"
                    cy="50%"
                    outerRadius={70}
                    dataKey="value"
                    label={({ name, percent }) => `${(percent * 100).toFixed(0)}%`}
                    labelLine={false}
                  >
                    {inquiryServicesData.map((entry, index) => (
                      <Cell key={`cell-service-${index}`} fill={entry.color} />
                    ))}
                  </Pie>
                  <Tooltip
                    contentStyle={{ backgroundColor: '#0e1422', borderColor: '#a855f730', borderRadius: '8px', color: '#fff', fontSize: '12px' }}
                  />
                  <Legend iconSize={8} wrapperStyle={{ fontSize: '10px', color: '#cbd2dc' }} />
                </PieChart>
              </ResponsiveContainer>
            </div>
          </div>
        </div>
      </div>

      {/* 4. LOWER-MIDDLE ROW: Quick Actions & System Overview */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        {/* Quick Actions */}
        <div className="bg-[#0f1523] border border-white/10 rounded-2xl p-5 flex flex-col justify-between">
          <div>
            <h3 className="text-sm font-bold text-white mb-3">Quick Actions</h3>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <button
                onClick={onOpenAddProject}
                className="flex items-center justify-between p-3.5 rounded-xl bg-[#131b2c] border border-amber-500/20 text-amber-300 hover:bg-amber-500/10 hover:border-amber-500/40 transition-all font-semibold text-xs cursor-pointer group"
              >
                <span className="flex items-center gap-2.5">
                  <PlusCircle className="w-4 h-4 text-amber-400" /> Add Project
                </span>
                <ArrowUpRight className="w-3.5 h-3.5 opacity-60 group-hover:opacity-100" />
              </button>

              <button
                onClick={onOpenAddService}
                className="flex items-center justify-between p-3.5 rounded-xl bg-[#131b2c] border border-cyan-500/20 text-cyan-300 hover:bg-cyan-500/10 hover:border-cyan-500/40 transition-all font-semibold text-xs cursor-pointer group"
              >
                <span className="flex items-center gap-2.5">
                  <Layers className="w-4 h-4 text-cyan-400" /> Add Service
                </span>
                <ArrowUpRight className="w-3.5 h-3.5 opacity-60 group-hover:opacity-100" />
              </button>

              {/* Working Code Generator Button starting with Ali- */}
              <button
                onClick={onOpenCodeGenerator}
                className="flex items-center justify-between p-3.5 rounded-xl bg-gradient-to-r from-purple-500/15 to-[#00d9ff]/15 border border-[#00d9ff]/30 text-[#00d9ff] hover:shadow-md hover:shadow-[#00d9ff]/10 transition-all font-bold text-xs cursor-pointer group"
              >
                <span className="flex items-center gap-2.5">
                  <KeyRound className="w-4 h-4 text-[#00d9ff]" /> Generate Code (Ali-)
                </span>
                <span className="text-[10px] px-1.5 py-0.5 rounded bg-[#00d9ff]/20 text-[#00d9ff]">
                  Instant
                </span>
              </button>

              <button
                onClick={onOpenSettings}
                className="flex items-center justify-between p-3.5 rounded-xl bg-[#131b2c] border border-white/10 text-slate-300 hover:bg-white/5 hover:text-white transition-all font-semibold text-xs cursor-pointer group"
              >
                <span className="flex items-center gap-2.5">
                  <Sliders className="w-4 h-4 text-slate-400" /> Site Settings
                </span>
                <ArrowUpRight className="w-3.5 h-3.5 opacity-60 group-hover:opacity-100" />
              </button>
            </div>
          </div>
        </div>

        {/* System Overview */}
        <div className="bg-[#0f1523] border border-white/10 rounded-2xl p-5 flex flex-col justify-between">
          <div>
            <h3 className="text-sm font-bold text-white mb-3">System Overview</h3>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-3 text-xs">
              <div>
                <div className="flex items-center justify-between text-slate-300 mb-1">
                  <span className="flex items-center gap-1.5 text-slate-400">
                    <HardDrive className="w-3.5 h-3.5 text-cyan-400" /> Storage Used
                  </span>
                  <span className="font-bold text-white">2.45 GB / 10 GB</span>
                </div>
                <div className="w-full h-1.5 bg-[#182236] rounded-full overflow-hidden">
                  <div className="h-full bg-cyan-400 rounded-full" style={{ width: '24.5%' }} />
                </div>
              </div>

              <div className="flex items-center justify-between text-slate-300 pt-1 border-t sm:border-t-0 border-white/5">
                <span className="flex items-center gap-1.5 text-slate-400">
                  <Database className="w-3.5 h-3.5 text-emerald-400" /> Database Size
                </span>
                <span className="font-bold text-white">45 MB</span>
              </div>

              <div className="flex items-center justify-between text-slate-300 pt-1 border-t border-white/5">
                <span className="flex items-center gap-1.5 text-slate-400">
                  <ImageIcon className="w-3.5 h-3.5 text-purple-400" /> Media Files
                </span>
                <span className="font-bold text-white">342 Files</span>
              </div>

              <div className="flex items-center justify-between text-slate-300 pt-1 border-t border-white/5">
                <span className="flex items-center gap-1.5 text-slate-400">
                  <FileCode2 className="w-3.5 h-3.5 text-[#00d9ff]" /> Ali- Code Usage
                </span>
                <span className="font-bold text-[#00d9ff]">85 Active</span>
              </div>

              <div className="flex items-center justify-between text-slate-300 pt-1 border-t border-white/5">
                <span className="flex items-center gap-1.5 text-slate-400">
                  <Calendar className="w-3.5 h-3.5 text-amber-400" /> Last Backup
                </span>
                <span className="font-bold text-white">{stats.lastBackupDate}</span>
              </div>

              <div className="flex items-center justify-between text-slate-300 pt-1 border-t border-white/5">
                <span className="flex items-center gap-1.5 text-slate-400">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" /> System Status
                </span>
                <span className="px-2 py-0.5 rounded-full bg-emerald-500/15 text-emerald-400 text-[10px] font-bold border border-emerald-500/20">
                  All Good
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* 5. BOTTOM SECTION: Latest Inquiries Table */}
      <div className="bg-[#0f1523] border border-white/10 rounded-2xl p-5">
        <div className="flex items-center justify-between mb-4">
          <div>
            <h3 className="text-base font-bold text-white">Latest Client Inquiries</h3>
            <p className="text-xs text-slate-400">Real-time incoming contact & project submissions</p>
          </div>
          <button
            onClick={() => onNavigateTab('inquiries')}
            className="text-xs text-[#00d9ff] hover:underline font-bold"
          >
            View All Inquiries →
          </button>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-left text-xs text-slate-300">
            <thead className="bg-[#131a2a] text-slate-400 uppercase tracking-wider text-[10px] border-y border-white/10">
              <tr>
                <th className="py-3 px-4">Name</th>
                <th className="py-3 px-4">Subject</th>
                <th className="py-3 px-4">Service</th>
                <th className="py-3 px-4">Status</th>
                <th className="py-3 px-4">Date</th>
                <th className="py-3 px-4 text-right">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-white/5">
              {inquiries.map((inq) => (
                <tr key={inq.id} className="hover:bg-white/[0.02] transition-colors">
                  <td className="py-3.5 px-4 font-bold text-white">{inq.name}</td>
                  <td className="py-3.5 px-4 text-slate-200">{inq.subject}</td>
                  <td className="py-3.5 px-4">
                    <span className="px-2 py-0.5 rounded bg-white/5 text-slate-300 text-[11px]">
                      {inq.service}
                    </span>
                  </td>
                  <td className="py-3.5 px-4">
                    <span
                      className={`px-2 py-0.5 rounded-full text-[10px] font-bold ${
                        inq.status === 'New'
                          ? 'bg-emerald-500/15 text-emerald-400 border border-emerald-500/20'
                          : inq.status === 'Read'
                          ? 'bg-cyan-500/15 text-cyan-400 border border-cyan-500/20'
                          : 'bg-purple-500/15 text-purple-400 border border-purple-500/20'
                      }`}
                    >
                      {inq.status}
                    </span>
                  </td>
                  <td className="py-3.5 px-4 text-slate-400">{inq.date}</td>
                  <td className="py-3.5 px-4 text-right">
                    <div className="flex items-center justify-end gap-1.5">
                      <button
                        onClick={() => onViewInquiry(inq)}
                        title="View Details"
                        className="p-1.5 rounded-lg bg-white/5 hover:bg-[#00d9ff]/20 text-slate-300 hover:text-[#00d9ff] transition-colors cursor-pointer"
                      >
                        <Eye className="w-3.5 h-3.5" />
                      </button>
                      <button
                        onClick={() => onViewInquiry(inq)}
                        title="Edit / Reply"
                        className="p-1.5 rounded-lg bg-white/5 hover:bg-amber-500/20 text-slate-300 hover:text-amber-400 transition-colors cursor-pointer"
                      >
                        <Edit2 className="w-3.5 h-3.5" />
                      </button>
                      <button
                        onClick={() => onDeleteInquiry(inq.id)}
                        title="Delete Inquiry"
                        className="p-1.5 rounded-lg bg-white/5 hover:bg-rose-500/20 text-slate-300 hover:text-rose-400 transition-colors cursor-pointer"
                      >
                        <Trash2 className="w-3.5 h-3.5" />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
