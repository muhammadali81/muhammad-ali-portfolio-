export interface ProjectItem {
  id: string;
  title: string;
  category: 'gameAI' | 'pixelForge' | 'webDevelopment';
  subCategory?: string;
  description: string;
  image: string;
  photos: { url: string; label: string }[];
  link?: string;
}

export interface FeedbackItem {
  id: string;
  code: string;
  visitorName: string;
  visitorEmail: string;
  visitorAvatar: string;
  date: string;
  source: string;
  rating: number;
  feedback: string;
  workLink?: string;
  images: string[];
  auto_reply?: string;
  status?: 'pending' | 'published' | 'hidden';
  likes?: number;
  dislikes?: number;
}

export interface InquiryItem {
  id: string;
  name: string;
  email: string;
  subject?: string;
  service?: string;
  message: string;
  created_at: string;
  status: 'unread' | 'read' | 'replied';
}

export interface EducationItem {
  degree: string;
  institute: string;
  year: string;
}

export interface FaqItem {
  question: string;
  answer: string;
}

