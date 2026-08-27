import React from 'react';
import {
  LayoutDashboard,
  MessageSquare,
  Mail,
  FolderGit2,
  Wrench,
  Heart,
  Eye,
  Settings,
  User,
  LogOut,
  ExternalLink,
  X
} from 'lucide-react';
import { AdminUser } from '../types';

export type AdminTab =
  | 'dashboard'
  | 'feedbacks'
  | 'inquiries'
  | 'projects'
  | 'services'
  | 'reactions'
  | 'views'
  | 'settings'
  | 'profile';

interface AdminSidebarProps {
  activeTab: AdminTab;
  onTabChange: (tab: AdminTab) => void;
  onLogout: () => void;
  user: AdminUser;
  pendingFeedbacksCount?: number;
  newInquiriesCount?: number;
  isMobileOpen?: boolean;
  onCloseMobile?: () => void;
}

export default function AdminSidebar({
  activeTab,
  onTabChange,
  onLogout,
  user,
  pendingFeedbacksCount = 1,
  newInquiriesCount = 2,
  isMobileOpen = false,
  onCloseMobile
}: AdminSidebarProps) {
  const menuItems = [
    { id: 'dashboard' as AdminTab, label: 'Dashboard', icon: LayoutDashboard },
    { id: 'feedbacks' as AdminTab, label: 'Feedbacks', icon: MessageSquare, badge: pendingFeedbacksCount },
    { id: 'inquiries' as AdminTab, label: 'Inquiries', icon: Mail, badge: newInquiriesCount },
    { id: 'projects' as AdminTab, label: 'Projects', icon: FolderGit2 },
    { id: 'services' as AdminTab, label: 'Services', icon: Wrench },
    { id: 'reactions' as AdminTab, label: 'Reactions', icon: Heart },
    { id: 'views' as AdminTab, label: 'Profile Views', icon: Eye },
    { id: 'settings' as AdminTab, label: 'Settings', icon: Settings },
    { id: 'profile' as AdminTab, label: 'Profile', icon: User },
  ];

  const handleSelectTab = (tab: AdminTab) => {
    onTabChange(tab);
    if (onCloseMobile) onCloseMobile();
  };

  const sidebarContent = (
    <div className="w-64 bg-[#0a0e17] border-r border-white/10 flex flex-col justify-between shrink-0 h-full select-none">
      {/* Top Section */}
      <div className="p-5 flex flex-col overflow-y-auto">
        {/* Mobile Header Close */}
        {onCloseMobile && (
          <div className="flex lg:hidden items-center justify-between mb-4 pb-3 border-b border-white/10">
            <span className="text-xs font-bold text-[#00d9ff]">Navigation Menu</span>
            <button
              onClick={onCloseMobile}
              className="p-1 rounded-lg text-slate-400 hover:text-white hover:bg-white/10 transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        )}

        {/* Administrator Profile Card */}
        <div className="flex items-center gap-3 p-3.5 rounded-xl bg-[#111726] border border-white/5 mb-6">
          <div className="relative">
            <div className="w-11 h-11 rounded-full overflow-hidden border-2 border-[#00d9ff]/40 bg-[#162032] flex items-center justify-center">
              <img
                src={user.avatarUrl || '/images/profile.jpg'}
                alt={user.name}
                className="w-full h-full object-cover"
              />
            </div>
            <span className="absolute bottom-0 right-0 w-3 h-3 bg-emerald-400 border-2 border-[#0a0e17] rounded-full ring-2 ring-emerald-500/20" />
          </div>
          <div className="flex-1 min-w-0">
            <h3 className="text-sm font-bold text-white truncate">{user.name}</h3>
            <p className="text-[11px] text-slate-400 truncate">{user.role}</p>
            <div className="flex items-center gap-1.5 mt-0.5">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
              <span className="text-[10px] text-emerald-400 font-medium tracking-wide">Online</span>
            </div>
          </div>
        </div>

        {/* Navigation Menu */}
        <nav className="space-y-1">
          {menuItems.map((item) => {
            const Icon = item.icon;
            const isActive = activeTab === item.id;

            return (
              <button
                key={item.id}
                onClick={() => handleSelectTab(item.id)}
                className={`w-full flex items-center justify-between px-3.5 py-2.5 rounded-xl text-xs font-semibold transition-all group cursor-pointer ${
                  isActive
                    ? 'bg-[#182438] text-[#00d9ff] border border-[#00d9ff]/30 shadow-sm shadow-[#00d9ff]/10'
                    : 'text-slate-400 hover:text-slate-200 hover:bg-white/[0.04]'
                }`}
              >
                <div className="flex items-center gap-3">
                  <Icon
                    className={`w-4 h-4 transition-transform group-hover:scale-110 ${
                      isActive ? 'text-[#00d9ff]' : 'text-slate-400'
                    }`}
                  />
                  <span>{item.label}</span>
                </div>
                {item.badge !== undefined && item.badge > 0 && (
                  <span
                    className={`px-1.5 py-0.5 rounded-full text-[10px] font-bold ${
                      isActive
                        ? 'bg-[#00d9ff] text-[#061017]'
                        : 'bg-[#00d9ff]/20 text-[#00d9ff]'
                    }`}
                  >
                    {item.badge}
                  </span>
                )}
              </button>
            );
          })}
        </nav>
      </div>

      {/* Bottom Section */}
      <div className="p-5 border-t border-white/5 space-y-2">
        {/* Main Website Link */}
        <a
          href="/"
          target="_blank"
          rel="noopener noreferrer"
          className="w-full flex items-center justify-between px-3.5 py-2 rounded-xl text-xs font-medium text-slate-400 hover:text-[#00d9ff] hover:bg-white/[0.03] transition-colors"
        >
          <span className="flex items-center gap-2.5">
            <ExternalLink className="w-3.5 h-3.5" />
            Live Website
          </span>
          <span className="text-[10px] text-slate-500">Main Site</span>
        </a>

        {/* Logout Button */}
        <button
          onClick={onLogout}
          className="w-full flex items-center gap-3 px-3.5 py-2.5 rounded-xl text-xs font-semibold text-rose-400 hover:bg-rose-500/10 hover:text-rose-300 transition-colors cursor-pointer"
        >
          <LogOut className="w-4 h-4" />
          <span>Logout</span>
        </button>
      </div>
    </div>
  );

  return (
    <>
      {/* Desktop Permanent Sidebar */}
      <aside className="hidden lg:block h-screen sticky top-0 shrink-0 z-30">
        {sidebarContent}
      </aside>

      {/* Mobile Floating Overlay Drawer Sidebar */}
      {isMobileOpen && (
        <div className="fixed inset-0 z-50 flex lg:hidden bg-black/80 backdrop-blur-sm animate-fade-in">
          <div className="h-full animate-slide-right shadow-2xl">
            {sidebarContent}
          </div>
          <div className="flex-1" onClick={onCloseMobile} />
        </div>
      )}
    </>
  );
}
