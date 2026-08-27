import React, { useState, useEffect } from 'react';
import AdminLogin from './AdminLogin';
import AdminSidebar, { AdminTab } from './components/AdminSidebar';
import AdminHeader from './components/AdminHeader';
import DashboardOverview from './components/DashboardOverview';
import FeedbacksTab from './components/FeedbacksTab';
import InquiriesTab from './components/InquiriesTab';
import CodeGeneratorModal from './components/CodeGeneratorModal';
import InquiryDetailModal from './components/InquiryDetailModal';
import AddProjectModal from './components/AddProjectModal';
import AddServiceModal from './components/AddServiceModal';
import SettingsModal from './components/SettingsModal';
import {
  ProjectsTab,
  ServicesTab,
  ReactionsTab,
  ViewsTab,
  SettingsTab,
  ProfileTab
} from './components/OtherTabs';
import {
  DEFAULT_ADMIN_USER,
  INITIAL_STATS,
  INITIAL_FEEDBACKS,
  INITIAL_INQUIRIES,
  INITIAL_PROJECTS,
  INITIAL_SERVICES,
  INITIAL_NOTIFICATIONS,
  INITIAL_CODES,
  generateAliCode
} from './adminStore';
import { AdminUser, FeedbackItem, InquiryItem, ProjectItem, ServiceItem, GeneratedCode, AdminNotification } from './types';

export default function AdminApp() {
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);
  const [user, setUser] = useState<AdminUser>(DEFAULT_ADMIN_USER);
  const [activeTab, setActiveTab] = useState<AdminTab>('dashboard');
  const [isMobileSidebarOpen, setIsMobileSidebarOpen] = useState(false);

  // State Stores
  const [stats, setStats] = useState(INITIAL_STATS);
  const [feedbacks, setFeedbacks] = useState<FeedbackItem[]>(INITIAL_FEEDBACKS);
  const [inquiries, setInquiries] = useState<InquiryItem[]>(INITIAL_INQUIRIES);
  const [projects, setProjects] = useState<ProjectItem[]>(INITIAL_PROJECTS);
  const [services, setServices] = useState<ServiceItem[]>(INITIAL_SERVICES);
  const [codes, setCodes] = useState<GeneratedCode[]>(INITIAL_CODES);
  const [notifications, setNotifications] = useState<AdminNotification[]>(INITIAL_NOTIFICATIONS);

  // Modals
  const [isCodeModalOpen, setIsCodeModalOpen] = useState(false);
  const [selectedInquiry, setSelectedInquiry] = useState<InquiryItem | null>(null);
  const [isAddProjectOpen, setIsAddProjectOpen] = useState(false);
  const [isAddServiceOpen, setIsAddServiceOpen] = useState(false);
  const [isSettingsOpen, setIsSettingsOpen] = useState(false);

  // Check existing session on load
  useEffect(() => {
    const token = localStorage.getItem('ma_admin_auth_token') || sessionStorage.getItem('ma_admin_auth_token');
    if (token) {
      setIsAuthenticated(true);
      const savedUser = localStorage.getItem('ma_admin_user') || sessionStorage.getItem('ma_admin_user');
      if (savedUser) {
        try {
          setUser(JSON.parse(savedUser));
        } catch {
          // ignore
        }
      }
    }
    fetchCodes();
  }, []);

  const fetchCodes = async () => {
    try {
      const res = await fetch('/api/admin/codes');
      if (res.ok) {
        const data = await res.json();
        if (data.codes && Array.isArray(data.codes)) {
          setCodes(data.codes);
        }
      }
    } catch {
      // fallback
    }
  };

  const handleLoginSuccess = (_token: string, loggedUser: AdminUser) => {
    setUser(loggedUser);
    setIsAuthenticated(true);
    fetchCodes();
  };

  const handleLogout = () => {
    localStorage.removeItem('ma_admin_auth_token');
    localStorage.removeItem('ma_admin_user');
    sessionStorage.removeItem('ma_admin_auth_token');
    sessionStorage.removeItem('ma_admin_user');
    setIsAuthenticated(false);
  };

  // Code Generation Handler (starts with Ali-, valid until feedback submitted)
  const handleGenerateCode = async (assignedTo?: string, notes?: string): Promise<GeneratedCode | null> => {
    try {
      const res = await fetch('/api/admin/codes/generate', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ assignedTo, notes })
      });
      if (res.ok) {
        const data = await res.json();
        if (data.code) {
          setCodes((prev) => [data.code, ...prev]);
          setStats((prev) => ({ ...prev, activeCodesCount: prev.activeCodesCount + 1 }));
          return data.code;
        }
      }
    } catch (e) {
      console.warn('Backend code generation fallback to local generator', e);
    }

    const fallbackCode = generateAliCode(assignedTo, notes);
    setCodes((prev) => [fallbackCode, ...prev]);
    return fallbackCode;
  };

  const handleDeleteCode = async (codeStr: string) => {
    try {
      await fetch(`/api/admin/codes/${codeStr}`, { method: 'DELETE' });
    } catch {
      // ignore
    }
    setCodes((prev) => prev.filter((c) => c.code !== codeStr));
  };

  // Feedback Actions
  const handleApproveFeedback = (id: string) => {
    setFeedbacks((prev) =>
      prev.map((fb) => (fb.id === id ? { ...fb, status: 'Published' as const } : fb))
    );
  };

  const handleRejectFeedback = (id: string) => {
    setFeedbacks((prev) =>
      prev.map((fb) => (fb.id === id ? { ...fb, status: 'Archived' as const } : fb))
    );
  };

  const handleDeleteFeedback = (id: string) => {
    setFeedbacks((prev) => prev.filter((fb) => fb.id !== id));
    setStats((prev) => ({ ...prev, totalFeedbacks: prev.totalFeedbacks - 1 }));
  };

  const handleReplyFeedback = (id: string, replyText: string) => {
    setFeedbacks((prev) =>
      prev.map((fb) => (fb.id === id ? { ...fb, adminReply: replyText } : fb))
    );
  };

  // Inquiry Actions
  const handleUpdateInquiryStatus = (id: string, newStatus: 'New' | 'Read' | 'Replied') => {
    setInquiries((prev) =>
      prev.map((inq) => (inq.id === id ? { ...inq, status: newStatus } : inq))
    );
  };

  const handleDeleteInquiry = (id: string) => {
    setInquiries((prev) => prev.filter((inq) => inq.id !== id));
    setStats((prev) => ({ ...prev, totalInquiries: prev.totalInquiries - 1 }));
  };

  // Add Project / Service
  const handleAddProject = (project: ProjectItem) => {
    setProjects((prev) => [project, ...prev]);
    setNotifications((prev) => [
      {
        id: `nt-${Date.now()}`,
        title: 'Project Added',
        message: `"${project.title}" was added to the showcase.`,
        time: 'Just now',
        read: false,
        type: 'system'
      },
      ...prev
    ]);
  };

  const handleDeleteProject = (id: string) => {
    setProjects((prev) => prev.filter((p) => p.id !== id));
  };

  const handleAddService = (service: ServiceItem) => {
    setServices((prev) => [service, ...prev]);
  };

  const handleDeleteService = (id: string) => {
    setServices((prev) => prev.filter((s) => s.id !== id));
  };

  const handleClearNotifications = () => {
    setNotifications([]);
  };

  const handleRefresh = () => {
    fetchCodes();
  };

  // If not logged in, display the dedicated Login Portal
  if (!isAuthenticated) {
    return <AdminLogin onLoginSuccess={handleLoginSuccess} />;
  }

  // Active Tab Title
  const tabTitles: Record<AdminTab, string> = {
    dashboard: 'Admin Dashboard Overview',
    feedbacks: 'Feedback & Testimonial Reviews',
    inquiries: 'Client Inquiries & Messages',
    projects: 'Showcase Projects',
    services: 'Services & Pricing Management',
    reactions: 'Visitor Sentiment & Reactions',
    views: 'Profile Traffic Analytics',
    settings: 'System & Security Settings',
    profile: 'Administrator Profile'
  };

  return (
    <div className="min-h-screen w-full bg-[#070b12] text-slate-200 flex overflow-hidden">
      {/* 1. SIDEBAR (Full Responsive Floating Window Drawer for Mobile, Static for Desktop) */}
      <AdminSidebar
        activeTab={activeTab}
        onTabChange={(tab) => {
          setActiveTab(tab);
          setIsMobileSidebarOpen(false);
        }}
        onLogout={handleLogout}
        user={user}
        pendingFeedbacksCount={feedbacks.filter((f) => f.status === 'Pending').length}
        newInquiriesCount={inquiries.filter((i) => i.status === 'New').length}
        isMobileOpen={isMobileSidebarOpen}
        onCloseMobile={() => setIsMobileSidebarOpen(false)}
      />

      {/* 2. MAIN FULL-SCREEN CONTENT AREA */}
      <div className="flex-1 flex flex-col min-w-0 w-full h-screen overflow-y-auto">
        {/* Header */}
        <AdminHeader
          title={tabTitles[activeTab]}
          user={user}
          notifications={notifications}
          onRefresh={handleRefresh}
          onSearch={(_q) => {}}
          onClearNotifications={handleClearNotifications}
          onToggleSidebar={() => setIsMobileSidebarOpen(true)}
        />

        {/* Tab Content Body */}
        <main className="p-4 sm:p-6 lg:p-8 flex-1 w-full max-w-full mx-auto">
          {activeTab === 'dashboard' && (
            <DashboardOverview
              stats={stats}
              feedbacks={feedbacks}
              inquiries={inquiries}
              onNavigateTab={setActiveTab}
              onOpenCodeGenerator={() => setIsCodeModalOpen(true)}
              onOpenAddProject={() => setIsAddProjectOpen(true)}
              onOpenAddService={() => setIsAddServiceOpen(true)}
              onOpenSettings={() => setIsSettingsOpen(true)}
              onViewInquiry={(inq) => setSelectedInquiry(inq)}
              onDeleteInquiry={handleDeleteInquiry}
              onApproveFeedback={handleApproveFeedback}
            />
          )}

          {activeTab === 'feedbacks' && (
            <FeedbacksTab
              feedbacks={feedbacks}
              onApprove={handleApproveFeedback}
              onReject={handleRejectFeedback}
              onDelete={handleDeleteFeedback}
              onReply={handleReplyFeedback}
              onOpenCodeGenerator={() => setIsCodeModalOpen(true)}
            />
          )}

          {activeTab === 'inquiries' && (
            <InquiriesTab
              inquiries={inquiries}
              onViewInquiry={(inq) => setSelectedInquiry(inq)}
              onDeleteInquiry={handleDeleteInquiry}
            />
          )}

          {activeTab === 'projects' && (
            <ProjectsTab
              projects={projects}
              onOpenAddProject={() => setIsAddProjectOpen(true)}
              onDeleteProject={handleDeleteProject}
            />
          )}

          {activeTab === 'services' && (
            <ServicesTab
              services={services}
              onOpenAddService={() => setIsAddServiceOpen(true)}
              onDeleteService={handleDeleteService}
            />
          )}

          {activeTab === 'reactions' && (
            <ReactionsTab
              positive={stats.positiveReactions}
              negative={stats.negativeReactions}
            />
          )}

          {activeTab === 'views' && <ViewsTab />}

          {activeTab === 'settings' && <SettingsTab />}

          {activeTab === 'profile' && <ProfileTab user={user} />}
        </main>
      </div>

      {/* 3. WORKING MODALS */}
      {/* Code Generator Modal (Ali-) */}
      <CodeGeneratorModal
        isOpen={isCodeModalOpen}
        onClose={() => setIsCodeModalOpen(false)}
        codes={codes}
        onGenerateCode={handleGenerateCode}
        onDeleteCode={handleDeleteCode}
      />

      {/* Inquiry Detail Modal */}
      <InquiryDetailModal
        inquiry={selectedInquiry}
        onClose={() => setSelectedInquiry(null)}
        onUpdateStatus={handleUpdateInquiryStatus}
        onDelete={handleDeleteInquiry}
      />

      {/* Add Project Modal */}
      <AddProjectModal
        isOpen={isAddProjectOpen}
        onClose={() => setIsAddProjectOpen(false)}
        onAddProject={handleAddProject}
      />

      {/* Add Service Modal */}
      <AddServiceModal
        isOpen={isAddServiceOpen}
        onClose={() => setIsAddServiceOpen(false)}
        onAddService={handleAddService}
      />

      {/* Settings Modal */}
      <SettingsModal
        isOpen={isSettingsOpen}
        onClose={() => setIsSettingsOpen(false)}
      />
    </div>
  );
}
