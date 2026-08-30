import { DashboardStats, FeedbackItem, GeneratedCode, InquiryItem, ProjectItem, ServiceItem, AdminNotification, AdminUser } from './types';

export const DEFAULT_ADMIN_USER: AdminUser = {
  name: 'Muhammad Ali',
  email: 'alimuhammadhvn81@gmail.com',
  role: 'Administrator',
  avatarUrl: '/src/assets/images/avatar_developer_3d_1787859991162.jpg',
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
  totalFeedbacks: 0,
  totalInquiries: 0,
  profileViews: 0,
  averageRating: 0,
  positiveReactions: 0,
  negativeReactions: 0,
  satisfiedClients: 0,
  unsatisfiedClients: 0,
  storageUsedGb: 0,
  storageTotalGb: 10,
  databaseSizeMb: 0,
  mediaFilesCount: 0,
  codesUsedCount: 0,
  codesTotalCount: 0,
  lastBackupDate: '-',
  systemStatus: 'Online',
  ratingBreakdown: { stars5: 0, stars4: 0, stars3: 0, stars2: 0, stars1: 0 },
  feedbackStatusBreakdown: { published: 0, pending: 0, archived: 0 },
  viewsHistory: []
};

export const INITIAL_FEEDBACKS: FeedbackItem[] = [];
export const INITIAL_INQUIRIES: InquiryItem[] = [];
export const INITIAL_CODES: GeneratedCode[] = [];

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

export const INITIAL_NOTIFICATIONS: AdminNotification[] = [];

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
