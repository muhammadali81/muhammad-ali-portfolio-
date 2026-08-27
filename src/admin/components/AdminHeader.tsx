import React, { useState } from 'react';
import { Search, Bell, RotateCcw, CheckCircle2, Shield, X, MessageSquare, Mail, Menu } from 'lucide-react';
import { AdminNotification, AdminUser } from '../types';

interface AdminHeaderProps {
  title: string;
  user: AdminUser;
  notifications: AdminNotification[];
  onRefresh: () => void;
  onSearch: (query: string) => void;
  onClearNotifications: () => void;
  onToggleSidebar?: () => void;
}

export default function AdminHeader({
  title,
  user,
  notifications,
  onRefresh,
  onSearch,
  onClearNotifications,
  onToggleSidebar
}: AdminHeaderProps) {
  const [showNotifications, setShowNotifications] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [isRefreshing, setIsRefreshing] = useState(false);

  const unreadCount = notifications.filter(n => !n.read).length;

  const handleRefreshClick = () => {
    setIsRefreshing(true);
    onRefresh();
    setTimeout(() => setIsRefreshing(false), 500);
  };

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value);
    onSearch(e.target.value);
  };

  return (
    <header className="h-16 bg-[#0c111c]/90 backdrop-blur-md border-b border-white/10 px-4 sm:px-6 flex items-center justify-between sticky top-0 z-20 w-full">
      {/* Title & Mobile Menu Trigger */}
      <div className="flex items-center gap-3">
        {onToggleSidebar && (
          <button
            onClick={onToggleSidebar}
            title="Open Sidebar Navigation Floating Window"
            className="p-2 rounded-lg bg-[#121926] border border-[#00d9ff]/30 text-[#00d9ff] hover:bg-[#00d9ff]/20 transition-all lg:hidden cursor-pointer"
          >
            <Menu className="w-5 h-5" />
          </button>
        )}

        <div className="flex items-center gap-2">
          <h1 className="text-base sm:text-lg font-bold text-white tracking-tight truncate">{title}</h1>
          <span className="hidden sm:inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-[10px] font-semibold">
            <CheckCircle2 className="w-3 h-3" /> System Active
          </span>
        </div>
      </div>

      {/* Right Controls */}
      <div className="flex items-center gap-2.5">
        {/* Search Bar */}
        <div className="relative hidden md:block w-56 lg:w-64">
          <Search className="w-3.5 h-3.5 absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
          <input
            type="text"
            value={searchQuery}
            onChange={handleSearchChange}
            placeholder="Search inquiries, feedbacks..."
            className="w-full pl-9 pr-3 py-1.5 bg-[#121926] border border-white/10 rounded-lg text-xs text-white placeholder-slate-500 focus:outline-none focus:border-[#00d9ff]"
          />
          {searchQuery && (
            <button
              onClick={() => { setSearchQuery(''); onSearch(''); }}
              className="absolute right-2.5 top-1/2 -translate-y-1/2 text-slate-400 hover:text-white"
            >
              <X className="w-3 h-3" />
            </button>
          )}
        </div>

        {/* Refresh Button */}
        <button
          onClick={handleRefreshClick}
          title="Refresh Dashboard Data"
          className="p-2 rounded-lg bg-[#121926] border border-white/10 text-slate-300 hover:text-[#00d9ff] hover:border-[#00d9ff]/30 transition-all cursor-pointer"
        >
          <RotateCcw className={`w-4 h-4 ${isRefreshing ? 'animate-spin text-[#00d9ff]' : ''}`} />
        </button>

        {/* Notifications Bell & Dropdown */}
        <div className="relative">
          <button
            onClick={() => setShowNotifications(!showNotifications)}
            title="Notifications"
            className="p-2 rounded-lg bg-[#121926] border border-white/10 text-slate-300 hover:text-[#00d9ff] hover:border-[#00d9ff]/30 transition-all relative cursor-pointer"
          >
            <Bell className="w-4 h-4" />
            {unreadCount > 0 && (
              <span className="absolute -top-1 -right-1 w-4 h-4 rounded-full bg-[#00d9ff] text-[#061017] text-[9px] font-black flex items-center justify-center animate-pulse">
                {unreadCount}
              </span>
            )}
          </button>

          {/* Notifications Popover */}
          {showNotifications && (
            <div className="absolute right-0 mt-2 w-80 bg-[#101726] border border-white/15 rounded-xl shadow-2xl overflow-hidden z-50">
              <div className="p-3 border-b border-white/10 flex items-center justify-between bg-[#0e1422]">
                <span className="text-xs font-bold text-white flex items-center gap-1.5">
                  <Bell className="w-3.5 h-3.5 text-[#00d9ff]" /> Activity & Alerts
                </span>
                <button
                  onClick={onClearNotifications}
                  className="text-[10px] text-slate-400 hover:text-[#00d9ff] transition-colors"
                >
                  Clear All
                </button>
              </div>

              <div className="max-h-72 overflow-y-auto divide-y divide-white/5">
                {notifications.length === 0 ? (
                  <div className="p-6 text-center text-xs text-slate-400">
                    No new alerts or notifications.
                  </div>
                ) : (
                  notifications.map((notif) => (
                    <div key={notif.id} className="p-3 hover:bg-white/[0.02] transition-colors">
                      <div className="flex items-start justify-between gap-2">
                        <span className="text-xs font-bold text-slate-200 flex items-center gap-1.5">
                          {notif.type === 'inquiry' && <Mail className="w-3 h-3 text-[#00d9ff]" />}
                          {notif.type === 'feedback' && <MessageSquare className="w-3 h-3 text-emerald-400" />}
                          {notif.title}
                        </span>
                        <span className="text-[10px] text-slate-500 shrink-0">{notif.time}</span>
                      </div>
                      <p className="text-[11px] text-slate-400 mt-1">{notif.message}</p>
                    </div>
                  ))
                )}
              </div>
            </div>
          )}
        </div>

        {/* User Tag */}
        <div className="hidden lg:flex items-center gap-2 pl-2 border-l border-white/10">
          <div className="text-right">
            <p className="text-xs font-bold text-white">{user.name}</p>
            <p className="text-[10px] text-slate-400">Super Admin</p>
          </div>
          <div className="w-8 h-8 rounded-lg overflow-hidden bg-[#00d9ff]/20 text-[#00d9ff] flex items-center justify-center font-bold text-xs border border-[#00d9ff]/30">
            <img
              src={user.avatarUrl || '/images/profile.jpg'}
              alt={user.name}
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </header>
  );
}
