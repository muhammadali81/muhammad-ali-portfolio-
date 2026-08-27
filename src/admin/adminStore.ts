import { DashboardStats, FeedbackItem, GeneratedCode, InquiryItem, ProjectItem, ServiceItem, AdminNotification, AdminUser } from './types';

export const DEFAULT_ADMIN_USER: AdminUser = {
  name: 'Muhammad Ali',
  email: 'alimuhammadhvn81@gmail.com',
  role: 'Administrator',
  avatarUrl: '/images/profile.jpg',
  status: 'Online'
};

const STORAGE_KEYS = {
  AUTH_TOKEN: 'ma_admin_auth_token',
  FEEDBACKS: 'ma_admin_feedbacks_data',
  INQUIRIES: 'ma_admin_inquiries_data',
  CODES: 'ma_admin_codes_data',
  PROJECTS: 'ma_admin_projects_data',
  SERVICES: 'ma_admin_services_data',
  NOTIFICATIONS: 'ma_admin_notifications_data',
  SETTINGS: 'ma_admin_site_settings',
};

export const INITIAL_STATS: DashboardStats = {
  totalFeedbacks: 25,
  totalInquiries: 12,
  profileViews: 1250,
  averageRating: 4.8,
  positiveReactions: 245,
  negativeReactions: 12,
  storageUsedGb: 2.45,
  storageTotalGb: 10,
  databaseSizeMb: 45,
  mediaFilesCount: 342,
  codesUsedCount: 85,
  codesTotalCount: 750,
  lastBackupDate: 'Aug 25, 2025',
  systemStatus: 'All Good',
  ratingBreakdown: {
    stars5: 15,
    stars4: 6,
    stars3: 2,
    stars2: 1,
    stars1: 1,
  },
  feedbackStatusBreakdown: {
    published: 15,
    pending: 6,
    archived: 4,
  },
  viewsHistory: [
    { date: 'Aug 19', views: 25 },
    { date: 'Aug 20', views: 60 },
    { date: 'Aug 21', views: 110 },
    { date: 'Aug 22', views: 95 },
    { date: 'Aug 23', views: 135 },
    { date: 'Aug 24', views: 160 },
    { date: 'Aug 25', views: 195 },
  ]
};

export const INITIAL_FEEDBACKS: FeedbackItem[] = [
  {
    id: 'fb-1',
    clientName: 'Ali Raza',
    clientEmail: 'aliraza.tech@gmail.com',
    rating: 5,
    comment: 'Great work! Highly recommended for fast web development and modern design aesthetics.',
    date: 'Aug 25, 2025',
    status: 'Published',
    codeUsed: 'Ali-9K2L8P',
    avatarLetter: 'AR',
    source: 'LinkedIn',
    adminReply: 'Thank you Ali Raza! Pleasure collaborating with you.'
  },
  {
    id: 'fb-2',
    clientName: 'Sara Khan',
    clientEmail: 'sara.k@digitalagency.pk',
    rating: 5,
    comment: 'Excellent experience working with you. The responsive layout and animations were super smooth.',
    date: 'Aug 24, 2025',
    status: 'Published',
    codeUsed: 'Ali-3M7X1V',
    avatarLetter: 'SK',
    source: 'Upwork',
    adminReply: 'Thanks Sara! Glad you loved the animations.'
  },
  {
    id: 'fb-3',
    clientName: 'Usman Ahmed',
    clientEmail: 'usman.ahmed99@outlook.com',
    rating: 5,
    comment: 'Very professional and responsive. Delivered all features on schedule.',
    date: 'Aug 23, 2025',
    status: 'Published',
    codeUsed: 'Ali-5W8N4Q',
    avatarLetter: 'UA',
    source: 'Direct Client',
    adminReply: 'Appreciate your feedback Usman!'
  },
  {
    id: 'fb-4',
    clientName: 'Hammad Ali',
    clientEmail: 'hammad.ali@creativehub.io',
    rating: 5,
    comment: 'Delivered on time and perfect. Great communication throughout the project.',
    date: 'Aug 22, 2025',
    status: 'Pending',
    codeUsed: 'Ali-7B2C9M',
    avatarLetter: 'HA',
    source: 'WhatsApp',
  },
  {
    id: 'fb-5',
    clientName: 'Zainab Noor',
    clientEmail: 'zainab.noor@studio.com',
    rating: 4,
    comment: 'Clean code architecture and very easy to maintain. Highly recommended!',
    date: 'Aug 20, 2025',
    status: 'Published',
    codeUsed: 'Ali-4K9P2W',
    avatarLetter: 'ZN',
    source: 'Referral'
  }
];

export const INITIAL_INQUIRIES: InquiryItem[] = [
  {
    id: 'inq-1',
    name: 'Hamza Khan',
    email: 'hamza.khan@enterprise.com',
    phone: '+92 300 1234567',
    subject: 'Website Project',
    service: 'Web Development',
    budget: '$50 - $150',
    message: 'Need a modern responsive corporate web portal with contact form and dark theme.',
    status: 'New',
    date: 'Aug 25, 2025'
  },
  {
    id: 'inq-2',
    name: 'Ayesha Malik',
    email: 'ayesha.design@brand.com',
    phone: '+92 321 7654321',
    subject: 'Logo Design',
    service: 'Graphic Design',
    budget: '$10 - $50',
    message: 'Looking for a clean minimalist brand identity and vector logo package.',
    status: 'Read',
    date: 'Aug 24, 2025'
  },
  {
    id: 'inq-3',
    name: 'Bilal Ahmed',
    email: 'bilal.ahmed@innovate.pk',
    phone: '+92 333 9988776',
    subject: 'AI Chat App',
    service: 'Game & AI Apps',
    budget: '$150 - $300',
    message: 'We want to integrate Gemini AI voice & text chat assistant into our existing website.',
    status: 'Replied',
    date: 'Aug 24, 2025'
  },
  {
    id: 'inq-4',
    name: 'Daniyal Raza',
    email: 'daniyal.game@play.io',
    phone: '+92 312 4455667',
    subject: '2D Game Design',
    service: '2D Visual Design',
    budget: '$50 - $150',
    message: 'Require 2D sprite sheets, background assets, and UI hud elements for Godot 2D game.',
    status: 'New',
    date: 'Aug 23, 2025'
  },
  {
    id: 'inq-5',
    name: 'Irfan Ali',
    email: 'irfan.ali@webpro.com',
    phone: '+92 345 1122334',
    subject: 'Portfolio Website',
    service: 'Web Development',
    budget: '$50 - $150',
    message: 'Need a personal portfolio similar to your style with interactive projects showcase.',
    status: 'Read',
    date: 'Aug 22, 2025'
  }
];

export const INITIAL_CODES: GeneratedCode[] = [
  { code: 'Ali-9K2L8P', createdAt: 'Aug 24, 2025', status: 'Used', assignedTo: 'Ali Raza', usedAt: 'Aug 25, 2025', feedbackId: 'fb-1', notes: 'Corporate Web Client' },
  { code: 'Ali-3M7X1V', createdAt: 'Aug 23, 2025', status: 'Used', assignedTo: 'Sara Khan', usedAt: 'Aug 24, 2025', feedbackId: 'fb-2', notes: 'Agency Partner' },
  { code: 'Ali-5W8N4Q', createdAt: 'Aug 22, 2025', status: 'Used', assignedTo: 'Usman Ahmed', usedAt: 'Aug 23, 2025', feedbackId: 'fb-3', notes: 'Freelance Contract' },
  { code: 'Ali-7B2C9M', createdAt: 'Aug 21, 2025', status: 'Used', assignedTo: 'Hammad Ali', usedAt: 'Aug 22, 2025', feedbackId: 'fb-4', notes: 'Web App' },
  { code: 'Ali-4K9P2W', createdAt: 'Aug 20, 2025', status: 'Used', assignedTo: 'Zainab Noor', usedAt: 'Aug 20, 2025', feedbackId: 'fb-5', notes: 'Design Client' },
  { code: 'Ali-8H4F2L', createdAt: 'Aug 26, 2025', status: 'Active', assignedTo: 'Hamza Khan', notes: 'Valid until feedback is published' },
  { code: 'Ali-6D1V9Z', createdAt: 'Aug 27, 2025', status: 'Active', assignedTo: 'New Client', notes: 'Valid until feedback is published' },
  { code: 'Ali-2R7T5M', createdAt: 'Aug 27, 2025', status: 'Active', assignedTo: 'General Client', notes: 'Valid until feedback is published' },
];

export const INITIAL_PROJECTS: ProjectItem[] = [
  { id: 'prj-1', title: 'Colour Block Game', category: 'Game & AI Development', description: 'Interactive color block puzzle game logic featuring smooth animations, player mechanics, dynamic block matching physics, combo blast particles, and high score leaderboards.', tags: ['Godot', 'Canvas', 'Logic', 'Game Loop'], date: '2025' },
  { id: 'prj-2', title: 'Pak AI', category: 'Game & AI Development', description: 'Next-gen artificial intelligence platform featuring intelligent Urdu & English NLP conversational chat, real-time voice processing, and custom vector document query solutions.', tags: ['Gemini API', 'NLP', 'React', 'Voice Processing'], date: '2025' },
  { id: 'prj-3', title: 'Learn Play', category: 'Game & AI Development', description: 'Gamified educational learning portal empowering students with interactive quizzes, real-time logic challenges, daily streak counters, and reward badges.', tags: ['React', 'TypeScript', 'Gamified Quiz'], date: '2025' },
  { id: 'prj-4', title: 'Pixel Forge Logo Design', category: 'Pixel Forge Graphic Design', description: 'Professional vector logos, corporate brand identities, geometric emblems, gaming logos, and luxury typography crafted for digital and print media.', tags: ['Vector Logo', 'Canva', 'Branding', 'Typography'], date: '2025' },
  { id: 'prj-5', title: 'Executive Visiting Cards', category: 'Pixel Forge Graphic Design', description: 'Modern corporate business cards, double-sided executive layouts, luxury gold foil, and custom mobile shop business card designs.', tags: ['Business Cards', 'Branding', 'Print Layout'], date: '2025' },
  { id: 'prj-6', title: 'Promotional Banners', category: 'Pixel Forge Graphic Design', description: 'High-converting social media promotional banners, YouTube & Twitch channel cover artwork, e-commerce sale ads, and roll-up event display banners.', tags: ['Banner Design', 'Ad Campaigns', 'Social Assets'], date: '2025' },
  { id: 'prj-7', title: '2D Smart Flooring', category: '2D & 3D Architecture', description: 'Precision architectural 2D smart flooring plans, room spatial mapping, material tile grids, and CAD property dimension blueprints.', tags: ['CAD', 'Blueprints', 'Spatial Mapping'], date: '2025' },
  { id: 'prj-8', title: '3D House Design', category: '2D & 3D Architecture', description: 'Photorealistic 3D villa elevation renders, interior living space models, panoramic walkthrough visualizations, and architectural lighting studies.', tags: ['3D Render', 'Exterior Facade', 'Interior Walkthrough'], date: '2025' },
  { id: 'prj-9', title: 'Nova Web Studio Showcase', category: 'Web Development', description: 'Full-stack web studio platform featuring direct live website link, clean hero sections, mobile touch responsiveness, interactive service widgets, and dark mode backend dashboard.', tags: ['React', 'TypeScript', 'Tailwind', 'Vite', 'Full-Stack'], date: '2025' },
];

export const INITIAL_SERVICES: ServiceItem[] = [
  { id: 'srv-1', title: 'Web Development', category: 'Frontend & Full-Stack', description: 'Modern responsive web applications, React Vite architectures, full-stack agency showcases (Nova Web), and custom UI/UX.', startingPrice: '$10+', iconName: 'Globe', active: true },
  { id: 'srv-2', title: 'Game & AI App Development', category: 'Interactive & Intelligence', description: 'Interactive puzzle engines (Colour Block), Urdu/English NLP AI assistants (Pak AI), and gamified educational portals (Learn Play).', startingPrice: '$10+', iconName: 'Gamepad2', active: true },
  { id: 'srv-3', title: 'Pixel Forge Graphic Design', category: 'Branding & Creatives', description: 'Corporate vector logo identity, luxury executive & mobile shop visiting cards, and high-converting promotional banners.', startingPrice: '$10+', iconName: 'Palette', active: true },
  { id: 'srv-4', title: '2D & 3D Architecture', category: 'Spatial & Visualization', description: 'Precision 2D smart flooring room mapping diagrams, CAD material tile plans, and photorealistic 3D house renders.', startingPrice: '$10+', iconName: 'Box', active: true },
];

export const INITIAL_NOTIFICATIONS: AdminNotification[] = [
  { id: 'notif-1', title: 'New Inquiry Received', message: 'Hamza Khan submitted an inquiry for Website Project ($50 - $150).', time: '10 mins ago', type: 'inquiry', read: false },
  { id: 'notif-2', title: 'Feedback Pending Review', message: 'Hammad Ali submitted a 5-star feedback using code Ali-7B2C9M.', time: '1 hour ago', type: 'feedback', read: false },
  { id: 'notif-3', title: 'Code Generated', message: 'New feedback code Ali-2R7T5M generated successfully.', time: '3 hours ago', type: 'code', read: true },
  { id: 'notif-4', title: 'System Backup Complete', message: 'Automated database and storage backup verified successfully.', time: '1 day ago', type: 'system', read: true },
];

// Helper functions for LocalStorage Persistence
export function loadFromStorage<T>(key: string, defaultValue: T): T {
  try {
    const item = localStorage.getItem(key);
    return item ? JSON.parse(item) : defaultValue;
  } catch {
    return defaultValue;
  }
}

export function saveToStorage<T>(key: string, value: T): void {
  try {
    localStorage.setItem(key, JSON.stringify(value));
  } catch (err) {
    console.error(`Error saving ${key} to storage`, err);
  }
}

// Generate code starting with Ali-
export function generateAliCode(assignedTo?: string, notes?: string): GeneratedCode {
  const chars = 'ABCDEFGHJKLMNPQRSTUVWXYZ23456789';
  let randomSuffix = '';
  for (let i = 0; i < 6; i++) {
    randomSuffix += chars.charAt(Math.floor(Math.random() * chars.length));
  }
  const codeString = `Ali-${randomSuffix}`;
  
  const newCode: GeneratedCode = {
    code: codeString,
    createdAt: new Date().toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' }),
    status: 'Active',
    assignedTo: assignedTo || 'Client',
    notes: notes || 'Valid until feedback is published by the client'
  };

  return newCode;
}
