export interface AdminUser {
  name: string;
  email: string;
  role: string;
  avatarUrl: string;
  status: 'Online' | 'Busy' | 'Offline';
}

export interface FeedbackItem {
  id: string;
  clientName: string;
  clientEmail?: string;
  rating: number;
  comment: string;
  date: string;
  status: 'Published' | 'Pending' | 'Archived';
  codeUsed?: string;
  avatarLetter?: string;
  source?: string;
  adminReply?: string;
  imageUrl?: string;
  googleVerified?: boolean;
}

export interface InquiryItem {
  id: string;
  name: string;
  email: string;
  phone?: string;
  subject: string;
  service: string;
  budget?: string;
  message: string;
  status: 'New' | 'Read' | 'Replied';
  date: string;
}

export interface GeneratedCode {
  code: string;
  createdAt: string;
  status: 'Active' | 'Used' | 'Revoked';
  assignedTo?: string;
  usedAt?: string;
  feedbackId?: string;
  notes?: string;
}

export interface ProjectItem {
  id: string;
  title: string;
  category: string;
  description: string;
  tags: string[];
  imageUrl?: string;
  liveUrl?: string;
  githubUrl?: string;
  date: string;
}

export interface ServiceItem {
  id: string;
  title: string;
  category: string;
  description: string;
  startingPrice: string;
  iconName: string;
  active: boolean;
}

export interface DashboardStats {
  totalFeedbacks: number;
  totalInquiries: number;
  profileViews: number;
  averageRating: number;
  positiveReactions: number;
  negativeReactions: number;
  storageUsedGb: number;
  storageTotalGb: number;
  databaseSizeMb: number;
  mediaFilesCount: number;
  codesUsedCount: number;
  codesTotalCount: number;
  lastBackupDate: string;
  systemStatus: string;
  ratingBreakdown: {
    stars5: number;
    stars4: number;
    stars3: number;
    stars2: number;
    stars1: number;
  };
  feedbackStatusBreakdown: {
    published: number;
    pending: number;
    archived: number;
  };
  viewsHistory: {
    date: string;
    views: number;
  }[];
}

export interface AdminNotification {
  id: string;
  title: string;
  message: string;
  time: string;
  type: 'inquiry' | 'feedback' | 'system' | 'code';
  read: boolean;
}
