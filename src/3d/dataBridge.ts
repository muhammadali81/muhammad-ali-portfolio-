import { INITIAL_PROJECTS, INITIAL_SERVICES, INITIAL_FEEDBACKS, INITIAL_STATS, loadFromStorage } from '../admin/adminStore';
import { ProjectItem, ServiceItem, FeedbackItem, DashboardStats } from '../admin/types';
import { EDUCATION_DATA, SKILLS_DATA, FAQ_DATA } from '../data/portfolioData';
import { IMAGES } from '../images';

const STORAGE_KEYS = {
  PROJECTS: 'ma_admin_projects_data',
  SERVICES: 'ma_admin_services_data',
  FEEDBACKS: 'ma_admin_feedbacks_data',
  STATS: 'ma_admin_site_settings',
};

export interface Shared3DData {
  profile: {
    name: string;
    title: string;
    avatarUrl: string;
    email: string;
    phone: string;
    location: string;
    bio: string;
    skills: string[];
    values: string[];
  };
  stats: DashboardStats;
  projects: ProjectItem[];
  services: ServiceItem[];
  education: Array<{
    degree: string;
    institution: string;
    year: string;
    details: string;
  }>;
  feedbacks: FeedbackItem[];
  faqs: Array<{
    question: string;
    answer: string;
  }>;
  contactInfo: {
    whatsapp: string;
    email: string;
    availability: string;
  };
  allPhotoShowcase: Array<{
    id: string;
    title: string;
    category: string;
    url: string;
    caption: string;
  }>;
}

export function getShared3DData(): Shared3DData {
  const projects = loadFromStorage<ProjectItem[]>(STORAGE_KEYS.PROJECTS, INITIAL_PROJECTS);
  const services = loadFromStorage<ServiceItem[]>(STORAGE_KEYS.SERVICES, INITIAL_SERVICES);
  const feedbacks = loadFromStorage<FeedbackItem[]>(STORAGE_KEYS.FEEDBACKS, INITIAL_FEEDBACKS);

  const photoShowcase = [
    // Game & AI - Colour Block
    { id: 'cb-1', title: 'Colour Block — Intro Screen', category: 'Game & AI', url: IMAGES.colorBlock1, caption: 'Ali Game Hubs Presents Color Blocks title intro screen' },
    { id: 'cb-2', title: 'Colour Block — Level 35 Gameplay', category: 'Game & AI', url: IMAGES.colorBlock2, caption: 'Level 35 gameplay screen with Score 8,450 & Moves 23' },
    { id: 'cb-3', title: 'Colour Block — Free Mode Grid', category: 'Game & AI', url: IMAGES.colorBlock3, caption: 'Free Mode puzzle grid with Score 1260 and Restart/Menu controls' },
    { id: 'cb-4', title: 'Colour Block — Victory Trophy', category: 'Game & AI', url: IMAGES.colorBlock4, caption: 'You Win! All 25 Levels Complete victory screen with trophy' },

    // Game & AI - PakAI
    { id: 'pak-1', title: 'PakAI — Smart Logo & Badge', category: 'Game & AI', url: IMAGES.pakai1, caption: 'PakAI Logo with Brain Circuit emblem & AI Assistant Badge' },
    { id: 'pak-2', title: 'PakAI — Smartphone UI', category: 'Game & AI', url: IMAGES.pakai2, caption: 'Assalam-o-Alaikum PakAI home greeting with Pakistan map' },
    { id: 'pak-3', title: 'PakAI — Chat Interface', category: 'Game & AI', url: IMAGES.pakai3, caption: 'Dark theme conversation with What is AI question' },
    { id: 'pak-4', title: 'PakAI — Hero Banner', category: 'Game & AI', url: IMAGES.pakai4, caption: 'Dark green promotional showcase with Chat Now action' },

    // Game & AI - LearnPlay
    { id: 'lp-1', title: 'LearnPlay — Educational Emblem', category: 'Game & AI', url: IMAGES.learnplay1, caption: 'Graduation cap emblem & Learn Play Grow logo' },
    { id: 'lp-2', title: 'LearnPlay — Tablet Dashboard', category: 'Game & AI', url: IMAGES.learnplay2, caption: 'Interactive subjects dashboard with English, Maths, Science & Quiz' },
    { id: 'lp-3', title: 'LearnPlay — Hero Showcase', category: 'Game & AI', url: IMAGES.learnplay3, caption: 'Learn Today Lead Tomorrow banner' },
    { id: 'lp-4', title: 'LearnPlay — Quiz Score Victory', category: 'Game & AI', url: IMAGES.learnplay4, caption: 'Score 8/10 popup with 3 gold stars & trophy' },

    // Graphic Design - Banners
    { id: 'bnr-1', title: 'Muradabadi Biryani Banner', category: 'Graphic Design', url: IMAGES.banner1, caption: 'Aala Hazrat Muradabadi Biryani promotional banner' },
    { id: 'bnr-2', title: 'Travel The World Banner', category: 'Graphic Design', url: IMAGES.banner2, caption: 'Travel The World adventure banner with sea & mountain views' },
    { id: 'bnr-3', title: 'Coffee Shop 30% Off Banner', category: 'Graphic Design', url: IMAGES.banner3, caption: 'Special Coffee Shop 30% discount promo banner' },
    { id: 'bnr-4', title: 'Special Discount Food Shop', category: 'Graphic Design', url: IMAGES.banner4, caption: 'Special Discount Food Shop promotional banner' },

    // Graphic Design - Business Cards
    { id: 'vc-1', title: 'Muhammad Ali Business Card', category: 'Graphic Design', url: IMAGES.visitingCard1, caption: 'Executive double-sided blue & black developer card' },
    { id: 'vc-2', title: 'Jhan Mobile Hub Gold Card', category: 'Graphic Design', url: IMAGES.visitingCard2, caption: 'Gold & black mobile shop business card with QR code' },
    { id: 'vc-3', title: 'Anshu Mobile Tech Blue Card', category: 'Graphic Design', url: IMAGES.visitingCard3, caption: 'Futuristic tech blue card layout with WhatsApp QR code' },
    { id: 'vc-4', title: 'Mobile Zone CEO Card', category: 'Graphic Design', url: IMAGES.visitingCard4, caption: 'High-contrast orange & dark geometric corporate card' },

    // Web Development - Nova Web Studio
    { id: 'nw-1', title: 'Nova Web — Hero Section & Branding', category: 'Web Development', url: IMAGES.novaWeb1, caption: 'High-impact hero section with Muhammad Ali profile, glowing avatar frame, and quick action buttons' },
    { id: 'nw-2', title: 'Nova Web — Admin Dashboard & Analytics', category: 'Web Development', url: IMAGES.novaWeb2, caption: 'Full-screen administrator portal with 7-day traffic trends, feedback stats, and Recharts analytics' },
    { id: 'nw-3', title: 'Nova Web — Client Feedback & Inquiries', category: 'Web Development', url: IMAGES.novaWeb3, caption: 'Star rating reviews, Ali- verification code entry, project uploader, and inquiry forms' },
    { id: 'nw-4', title: 'Nova Web — AI Voice Support Assistant', category: 'Web Development', url: IMAGES.novaWeb4, caption: 'Interactive AI Voice Assistant dialog with audio waveforms, WhatsApp, and direct contact buttons' },

    // Graphic Design - Logos & Studio
    { id: 'pf-1', title: 'Pixel Forge Studio Workspace', category: 'Graphic Design', url: IMAGES.pixelforgeStudio, caption: 'Pixel Forge Studio monitor workspace & drawing tablet' },
    { id: 'lg-2', title: 'Stewerds Family Gold Emblem', category: 'Graphic Design', url: IMAGES.logoDesign2, caption: 'Royal gold family crown emblem on dark wood texture' },
    { id: 'lg-3', title: 'Luxury Gold CL Ring Logo', category: 'Graphic Design', url: IMAGES.logoDesign3, caption: 'Metallic gold ring emblem with script typography' },
    { id: 'lg-4', title: 'Gold CL Cream Badge Logo', category: 'Graphic Design', url: IMAGES.logoDesign4, caption: 'Premium gold monogram script on cream circular badge' },

    // 2D & 3D Architecture - 2D Smart Flooring
    { id: 'arch-c1', title: '2D & 3D Architecture Master Suite', category: 'Architecture', url: IMAGES.archCover3d, caption: '10 Marla Luxury Residence twilight elevation with LED accents & blueprints' },
    { id: 'fl-1', title: 'Smart Floor — 10x20 Shop & Pizza Restaurant', category: 'Architecture', url: IMAGES.smartFloor1, caption: 'Two separate shops commercial floor plan and 3D dining layout' },
    { id: 'fl-2', title: 'Smart Floor — 35x70 Ground Floor Flow Map', category: 'Architecture', url: IMAGES.smartFloor2, caption: 'Ground floor 3D circulation mapping with double height lobby & master suites' },
    { id: 'fl-3', title: 'Smart Floor — 35x70 Basement Entertainment Suite', category: 'Architecture', url: IMAGES.smartFloor3, caption: 'Basement 3D floor plan with home theater, indoor pool & gaming room' },
    { id: 'fl-4', title: 'Smart Floor — 35x70 Basement Multi-Suite Plan', category: 'Architecture', url: IMAGES.smartFloor4, caption: '3D cutaway layout with guest bedroom, central bethak & elevator' },

    // 2D & 3D Architecture - 3D House Design
    { id: 'dh-1', title: 'DreamHouse 3D — Multi-Elevation & Plans Sheet', category: 'Architecture', url: IMAGES.dreamhouse1, caption: 'Luxury villa front right/left/rear views & multi-floor CAD plans' },
    { id: 'dh-2', title: 'DreamHouse 3D — 35x70 Master Presentation Board', category: 'Architecture', url: IMAGES.dreamhouse2, caption: 'Plot size 35x70 master presentation with rooftop deck lounge' },
    { id: 'dh-3', title: 'DreamHouse 3D — 3D Cutaways & Interior Gallery', category: 'Architecture', url: IMAGES.dreamhouse3, caption: '3D isometric cutaways with TV lounge, master bed, indoor pool & theater' },
    { id: 'dh-4', title: 'DreamHouse 3D — Daylight Facade & Side Elevations', category: 'Architecture', url: IMAGES.dreamhouse4, caption: 'Daytime architectural facade with timber louvers & clean floor layouts' },
    { id: 'dh-5', title: 'DreamHouse 3D — 3-Level Cutaway Furnished Layout', category: 'Architecture', url: IMAGES.dreamhouse5, caption: '3-level (Basement, Ground, First Floor) furnished layout with night villa' }
  ];

  return {
    profile: {
      name: 'Muhammad Ali',
      title: 'Web Developer • Game & AI Developer • Graphic Designer',
      avatarUrl: IMAGES.profile,
      email: 'alimuhammadhvn81@gmail.com',
      phone: '+92 342 6793428',
      location: 'Havelian, Abbottabad, Pakistan (Worldwide Remote)',
      bio: "I am Muhammad Ali, a Computer Science student, freelancer and creative developer from Havelian, Abbottabad. I am a Muslim who values honesty, professionalism, respect and responsible work. My interests include web development, game & AI application development, Pixel Forge graphic design, 2D & 3D architecture design, and modern technology. My aim is to communicate clearly, understand each client's needs and deliver thoughtful, reliable and high-quality digital solutions.",
      skills: SKILLS_DATA,
      values: ['Muslim Values (Honesty & Respect)', 'Pixel-Perfect Precision', 'High Performance & Speed', 'Ethical & Responsible Work', 'Client Satisfaction First'],
    },
    stats: INITIAL_STATS,
    projects,
    services,
    education: EDUCATION_DATA.map(edu => ({
      degree: edu.degree,
      institution: edu.institute,
      year: edu.year,
      details: `Successfully completed or pursuing academic milestones at ${edu.institute}.`
    })),
    feedbacks: feedbacks.filter((f) => f.status === 'Published'),
    faqs: FAQ_DATA.slice(0, 8).map(faq => ({
      question: faq.question,
      answer: faq.answer
    })),
    contactInfo: {
      whatsapp: '+92 342 6793428',
      email: 'alimuhammadhvn81@gmail.com',
      availability: 'Available for Remote Contracts & Freelance Projects (Call: +92 330 0358799)',
    },
    allPhotoShowcase: photoShowcase,
  };
}
