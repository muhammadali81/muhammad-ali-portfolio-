import React, { useState } from 'react';
import { ExternalLink, Eye, Gamepad2, Palette, Box, Globe, ArrowUpRight, Sparkles, X, Info } from 'lucide-react';
import { IMAGES } from '../images';

interface ProjectsProps {
  onOpenLightbox: (url: string, title: string) => void;
}

interface PhotoItem {
  id: number;
  title: string;
  url: string;
  caption: string;
}

interface Subdivision {
  name: string;
  badge: string;
  description: string;
  photos: PhotoItem[];
}

interface ProjectCategory {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  icon: React.ElementType;
  coverImage: string;
  subdivisions: Subdivision[];
  websiteUrl?: string;
}

const PROJECT_CATEGORIES: ProjectCategory[] = [
  {
    id: 'game-ai',
    title: 'Game & AI Development',
    subtitle: 'Interactive games and intelligent AI applications',
    description: 'Specialized game mechanics, custom puzzle engines, localized NLP AI architectures, and gamified learning platforms built with high performance.',
    icon: Gamepad2,
    coverImage: IMAGES.pakai4,
    subdivisions: [
      {
        name: 'Colour Block',
        badge: 'Division 1 • 4 Photos',
        description: 'Interactive color block puzzle game logic featuring smooth animations, player mechanics, dynamic block matching physics, combo blast particles, and high score leaderboards.',
        photos: [
          { id: 1, title: 'Colour Block - Intro Title Screen (Ali Game Hubs)', url: IMAGES.colorBlock1, caption: 'Photo 1: Ali Game Hubs Presents Color Blocks title intro screen' },
          { id: 2, title: 'Colour Block - Mobile Puzzle Gameplay (Level 35)', url: IMAGES.colorBlock2, caption: 'Photo 2: Level 35 gameplay screen with Score 8,450 & Moves 23' },
          { id: 3, title: 'Colour Block - Free Mode Board Grid', url: IMAGES.colorBlock3, caption: 'Photo 3: Free Mode puzzle grid with Score 1260 and Restart/Menu controls' },
          { id: 4, title: 'Colour Block - Victory Trophy Screen (All 25 Levels)', url: IMAGES.colorBlock4, caption: 'Photo 4: You Win! All 25 Levels Complete victory screen with trophy' }
        ]
      },
      {
        name: 'Pak AI',
        badge: 'Division 2 • 4 Photos',
        description: 'Next-gen artificial intelligence platform featuring intelligent Urdu & English NLP conversational chat, real-time voice processing, and custom vector document query solutions.',
        photos: [
          { id: 1, title: 'Pak AI - AI Assistant Emblem & Logo', url: IMAGES.pakai1, caption: 'Photo 1: PakAI Logo, Brain Circuits & AI Assistant Badge' },
          { id: 2, title: 'Pak AI - Mobile App Interface & Flag Mockup', url: IMAGES.pakai2, caption: 'Photo 2: Smartphone UI with Assalamualaikum PakAI greeting & Pakistan map' },
          { id: 3, title: 'Pak AI - Conversational Chat UI', url: IMAGES.pakai3, caption: 'Photo 3: Dark theme chat screen with What is AI question & response' },
          { id: 4, title: 'Pak AI - Smart AI Assistant Promotional Banner', url: IMAGES.pakai4, caption: 'Photo 4: Hero banner with Chat Now button & mobile viewport' }
        ]
      },
      {
        name: 'Learn Play',
        badge: 'Division 3 • 4 Photos',
        description: 'Gamified educational learning portal empowering students with interactive quizzes, real-time logic challenges, daily streak counters, and reward badges.',
        photos: [
          { id: 1, title: 'Learn Play - Educational Hub Logo', url: IMAGES.learnplay1, caption: 'Photo 1: LearnPlay Logo with graduation cap & Learn Play Grow slogan' },
          { id: 2, title: 'Learn Play - Tablet Learning Dashboard', url: IMAGES.learnplay2, caption: 'Photo 2: English, Maths, Science & Quiz modules on tablet UI' },
          { id: 3, title: 'Learn Play - Student Hero Banner', url: IMAGES.learnplay3, caption: 'Photo 3: Learn Today, Lead Tomorrow banner with Start Learning button' },
          { id: 4, title: 'Learn Play - Quiz Victory Score Screen', url: IMAGES.learnplay4, caption: 'Photo 4: Well Done victory modal with 3 gold stars & Score 8/10' }
        ]
      }
    ]
  },
  {
    id: 'pixel-forge',
    title: 'Pixel Forge',
    subtitle: 'Graphic design, logo identity, visiting cards, and promotional banners',
    description: 'Comprehensive visual graphic studio providing custom vector logo branding, executive business card layouts, and eye-catching promotional advertising banners.',
    icon: Palette,
    coverImage: IMAGES.pixelforgeStudio,
    subdivisions: [
      {
        name: 'Logo Design',
        badge: 'Division 1 • 4 Photos',
        description: 'Professional vector logos, corporate brand identities, geometric emblems, gaming logos, and luxury typography crafted for digital and print media.',
        photos: [
          { id: 1, title: 'Pixel Forge Studio - Creative Design Workspace', url: IMAGES.pixelforgeStudio, caption: 'Photo 1: Pixel Forge Studio monitor workspace, drawing tablet & color swatches' },
          { id: 2, title: 'Logo Design - Stewerds Family Gold Crown Emblem', url: IMAGES.logoDesign2, caption: 'Photo 2: Royal gold family logo on dark wood background' },
          { id: 3, title: 'Logo Design - Luxury Gold CL Ring Logo', url: IMAGES.logoDesign3, caption: 'Photo 3: Metallic gold ring emblem with script typography' },
          { id: 4, title: 'Logo Design - Gold CL Cream Badge Logo', url: IMAGES.logoDesign4, caption: 'Photo 4: Premium gold monogram script on cream circular badge' }
        ]
      },
      {
        name: 'Visiting Card',
        badge: 'Division 2 • 4 Photos',
        description: 'Modern corporate business cards, double-sided executive layouts, luxury gold foil, and custom mobile shop business card designs.',
        photos: [
          { id: 1, title: 'Muhammad Ali - Creative Developer Business Card', url: IMAGES.visitingCard1, caption: 'Photo 1: Executive double-sided blue & black design with contact details & website link' },
          { id: 2, title: 'Jhan Mobile Hub - Luxury Gold Partner Card', url: IMAGES.visitingCard2, caption: 'Photo 2: Gold & black mobile shop business card with smartphone repair services list & QR code' },
          { id: 3, title: 'Anshu Mobile Shop - Tech Blue Business Card', url: IMAGES.visitingCard3, caption: 'Photo 3: Futuristic tech blue card layout with WhatsApp chat QR code & service guide' },
          { id: 4, title: 'Mobile Zone - CEO Faizan Amjad Business Card', url: IMAGES.visitingCard4, caption: 'Photo 4: High-contrast orange & dark geometric corporate card with CEO details & address' }
        ]
      },
      {
        name: 'Banner',
        badge: 'Division 3 • 4 Photos',
        description: 'High-converting social media promotional banners, YouTube & Twitch channel cover artwork, e-commerce sale ads, and roll-up event display banners.',
        photos: [
          { id: 1, title: 'Aala Hazrat Muradabadi Biryani Banner', url: IMAGES.banner1, caption: 'Photo 1: Aala Hazrat Muradabadi Biryani restaurant promotional banner' },
          { id: 2, title: 'Travel The World Explorer Banner', url: IMAGES.banner2, caption: 'Photo 2: Travel The World adventure banner with sea & mountain scenery' },
          { id: 3, title: 'Special Coffee Shop 30% Discount Banner', url: IMAGES.banner3, caption: 'Photo 3: Special Coffee Shop 30% discount promotional banner' },
          { id: 4, title: 'Special Discount Food Shop Banner', url: IMAGES.banner4, caption: 'Photo 4: Special Discount Food Shop promotional header banner with pizza frames' }
        ]
      }
    ]
  },
  {
    id: '2d-3d-architecture',
    title: '2D and 3D Architecture',
    subtitle: 'Smart architectural 2D floor plans and immersive 3D house exterior & interior renderings',
    description: 'Architectural spatial planning, intelligent 2D smart floor mapping, circulation flow analysis, material distribution layouts, and photorealistic 3D house renderings.',
    icon: Box,
    coverImage: IMAGES.archCover3d,
    subdivisions: [
      {
        name: '2D Smart Flooring',
        badge: 'Division 1 • 4 Photos',
        description: 'Precision architectural 2D smart flooring plans, room circulation mapping, commercial restaurant layouts, and high-definition CAD property dimension blueprints.',
        photos: [
          { id: 1, title: '10ft x 20ft Commercial Shop & Pizza Restaurant Plan', url: IMAGES.smartFloor1, caption: 'Photo 1: 10ft x 20ft two separate shops floor plan, 3D interior dining layout, front elevation & section view' },
          { id: 2, title: '35x70 Ground Floor 3D Circulation & Flow Mapping', url: IMAGES.smartFloor2, caption: 'Photo 2: Ground floor 3D circulation mapping with double-height lobby, 16-seater dining area & master suites' },
          { id: 3, title: '35x70 Basement Floor Plan (3D Entertainment Suite)', url: IMAGES.smartFloor3, caption: 'Photo 3: Approx 2,100 sq.ft basement plan with home theater, indoor pool, games area & traditional bethak' },
          { id: 4, title: '35x70 Basement Multi-Suite Isometric Layout', url: IMAGES.smartFloor4, caption: 'Photo 4: 3D cutaway basement layout with guest suite, central lobby, elevator lift & room specification chart' }
        ]
      },
      {
        name: '3D House Design',
        badge: 'Division 2 • 5 Photos',
        description: 'Photorealistic 3D villa elevation renders, 10 Marla multi-level cutaway models, interior living room & pool visualization, and architectural lighting studies.',
        photos: [
          { id: 1, title: '10 Marla Luxury Residence Multi-Elevation Sheet', url: IMAGES.dreamhouse1, caption: 'Photo 1: Modern luxury villa front right/left/rear views, cross-section and multi-floor plans (Design 123)' },
          { id: 2, title: '10 Marla Luxury Residence 35x70 Master Presentation', url: IMAGES.dreamhouse2, caption: 'Photo 2: Plot size 35x70 master presentation with rooftop deck lounge, 4 CAD floor plans & design highlights' },
          { id: 3, title: '10 Marla Luxury Villa 3D Cutaway & Interior Showcase', url: IMAGES.dreamhouse3, caption: 'Photo 3: 3D isometric cutaways with luxury TV lounge, master bedroom, indoor swimming pool & home theater' },
          { id: 4, title: '10 Marla Luxury Residence Daylight Facade & Side Views', url: IMAGES.dreamhouse4, caption: 'Photo 4: Daytime architectural facade with timber louvers, left/right side elevations & clean blueprint plans' },
          { id: 5, title: '10 Marla 3-Level Isometric Cutaway & Room Gallery', url: IMAGES.dreamhouse5, caption: 'Photo 5: 3 levels (Basement, Ground, First Floor) furnished layout with night exterior villa & amenities' }
        ]
      }
    ]
  },
  {
    id: 'nova-web',
    title: 'Nova Web',
    subtitle: 'Modern web development studio showcase with live website link & photos',
    description: 'Full-stack web application featuring live website link, responsive Vite React frontend, dark theme aesthetic, client feedback engine, and backend admin portal controls.',
    icon: Globe,
    coverImage: IMAGES.novaWeb1,
    websiteUrl: 'https://muhammadali81.github.io/muhammad-ali-portfolio-/',
    subdivisions: [
      {
        name: 'Nova Web Studio Showcase',
        badge: 'Website Showcase • 4 Photos',
        description: 'Full-stack web studio platform featuring direct live website link, clean hero section with personal branding, real-time admin analytics dashboard, client testimonials portal, and interactive AI voice support assistant.',
        photos: [
          { id: 1, title: 'Nova Web - Hero Section & Personal Branding', url: IMAGES.novaWeb1, caption: 'Photo 1: High-impact hero section with Muhammad Ali profile, glowing avatar frame, and quick action buttons' },
          { id: 2, title: 'Nova Web - Live Admin Dashboard & Analytics', url: IMAGES.novaWeb2, caption: 'Photo 2: Full-screen administrator portal with 7-day traffic trends, feedback stats, and Recharts analytics' },
          { id: 3, title: 'Nova Web - Client Testimonials & Inquiries Portal', url: IMAGES.novaWeb3, caption: 'Photo 3: Star rating reviews, Ali- verification code entry, project uploader, and inquiry forms' },
          { id: 4, title: 'Nova Web - AI Voice Support Assistant Modal', url: IMAGES.novaWeb4, caption: 'Photo 4: Interactive AI Voice Assistant dialog with audio waveforms, WhatsApp, and direct contact buttons' }
        ]
      }
    ]
  }
];

export default function Projects({ onOpenLightbox }: ProjectsProps) {
  const [activeCategoryId, setActiveCategoryId] = useState<string | null>(null);
  const [selectedSubdivisionFilter, setSelectedSubdivisionFilter] = useState<string>('All');
  const galleryRef = React.useRef<HTMLDivElement>(null);

  const selectedCategory = PROJECT_CATEGORIES.find((cat) => cat.id === activeCategoryId);

  const handleOpenCategory = (id: string) => {
    setActiveCategoryId(id);
    setSelectedSubdivisionFilter('All');

    // Auto-scroll to photos gallery section smoothly
    setTimeout(() => {
      if (galleryRef.current) {
        galleryRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }, 100);
  };

  return (
    <section id="projects" className="py-24 bg-[#070b12] text-slate-200 relative overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute top-10 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-[#00d9ff]/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#00d9ff]/10 border border-[#00d9ff]/30 text-[#00d9ff] text-xs font-bold uppercase tracking-wider mb-3">
            <Sparkles className="w-3.5 h-3.5" /> Project Showcase & Gallery
          </div>
          <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight">
            My Project <span className="text-[#00d9ff]">Gallery</span>
          </h2>
          <p className="text-sm text-slate-400 mt-2.5 max-w-2xl mx-auto leading-relaxed">
            Explore original work, sub-divisions with 4-photo galleries, 2D floor maps, games, AI platforms, and Nova Web studio website links.
          </p>
        </div>

        {/* Quick Category Selector Pills */}
        <div className="flex items-center justify-center gap-2.5 mb-10 flex-wrap">
          {PROJECT_CATEGORIES.map((cat) => {
            const Icon = cat.icon;
            const isActive = activeCategoryId === cat.id;
            return (
              <button
                key={cat.id}
                onClick={() => handleOpenCategory(cat.id)}
                className={`px-4 py-2.5 rounded-xl text-xs font-bold transition-all flex items-center gap-2 cursor-pointer border ${
                  isActive
                    ? 'bg-[#00d9ff] text-[#061017] border-[#00d9ff] shadow-lg shadow-[#00d9ff]/20 scale-105'
                    : 'bg-[#0f1523] text-slate-300 border-white/10 hover:border-[#00d9ff]/50 hover:text-white'
                }`}
              >
                <Icon className={`w-4 h-4 ${isActive ? 'text-[#061017]' : 'text-[#00d9ff]'}`} />
                <span>{cat.title}</span>
              </button>
            );
          })}
        </div>

        {/* Main 4 Project Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {PROJECT_CATEGORIES.map((cat) => {
            const Icon = cat.icon;
            const totalSubdivisions = cat.subdivisions.length;
            const totalPhotos = cat.subdivisions.reduce((acc, sub) => acc + sub.photos.length, 0);

            return (
              <div
                key={cat.id}
                className="bg-[#0f1523] border border-white/10 rounded-2xl overflow-hidden hover:border-[#00d9ff]/40 transition-all duration-300 group flex flex-col justify-between shadow-xl"
              >
                <div>
                  {/* Top Cover Image */}
                  <div className="relative h-56 w-full overflow-hidden bg-[#0b101a]">
                    <img
                      src={cat.coverImage}
                      alt={cat.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0f1523] via-transparent to-black/30" />

                    {/* Top Badges */}
                    <div className="absolute top-4 left-4 flex items-center gap-2">
                      <span className="px-3 py-1 rounded-full bg-black/70 backdrop-blur-md border border-white/15 text-[#00d9ff] text-[11px] font-bold flex items-center gap-1.5">
                        <Icon className="w-3.5 h-3.5" /> {totalSubdivisions} Subdivisions
                      </span>
                      <span className="px-2.5 py-1 rounded-full bg-[#00d9ff]/20 text-[#00d9ff] border border-[#00d9ff]/30 text-[11px] font-extrabold">
                        {totalPhotos} Photos
                      </span>
                    </div>

                    {cat.websiteUrl && (
                      <a
                        href={cat.websiteUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="absolute top-4 right-4 px-3 py-1 rounded-full bg-[#00d9ff] text-[#061017] font-extrabold text-[11px] flex items-center gap-1 hover:bg-cyan-300 transition-colors shadow-lg"
                      >
                        <Globe className="w-3.5 h-3.5" /> Website Link <ArrowUpRight className="w-3 h-3" />
                      </a>
                    )}
                  </div>

                  {/* Info Body */}
                  <div className="p-6 space-y-3">
                    <h3 className="text-xl font-black text-white group-hover:text-[#00d9ff] transition-colors flex items-center gap-2">
                      {cat.title}
                    </h3>

                    {/* Section Description */}
                    <div className="p-3 rounded-xl bg-[#121929] border border-white/5 text-xs text-slate-300 leading-relaxed flex items-start gap-2">
                      <Info className="w-4 h-4 text-[#00d9ff] shrink-0 mt-0.5" />
                      <span>{cat.description}</span>
                    </div>

                    {/* Subdivisions List & Mini Descriptions */}
                    <div className="pt-2">
                      <p className="text-[10px] uppercase font-extrabold tracking-wider text-slate-500 mb-2">
                        Subdivisions & Photo Areas:
                      </p>
                      <div className="space-y-1.5">
                        {cat.subdivisions.map((sub, idx) => (
                          <div
                            key={idx}
                            className="p-2 rounded-lg bg-[#151e30] border border-white/5 flex flex-col sm:flex-row sm:items-center justify-between gap-1 text-[11px]"
                          >
                            <span className="font-bold text-[#00d9ff] flex items-center gap-1.5">
                              <span className="w-1.5 h-1.5 rounded-full bg-[#00d9ff]" />
                              {sub.name}
                            </span>
                            <span className="text-slate-400 text-[10px]">
                              4 Photo Area Slots
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Footer Action */}
                <div className="p-6 pt-0 flex items-center justify-between border-t border-white/5 mt-4">
                  {cat.websiteUrl ? (
                    <a
                      href={cat.websiteUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-xs text-[#00d9ff] hover:underline font-bold flex items-center gap-1"
                    >
                      <ExternalLink className="w-3.5 h-3.5" /> Visit {cat.websiteUrl}
                    </a>
                  ) : (
                    <span className="text-[11px] text-slate-500 font-medium">Click to view 4-photo gallery</span>
                  )}

                  <button
                    onClick={() => handleOpenCategory(cat.id)}
                    className="px-4 py-2.5 rounded-xl bg-[#00d9ff]/15 hover:bg-[#00d9ff] text-[#00d9ff] hover:text-[#061017] border border-[#00d9ff]/30 font-bold text-xs transition-all flex items-center gap-1.5 cursor-pointer"
                  >
                    <span>Open Photo Gallery</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            );
          })}
        </div>

        {/* EXPANDED PROJECT GALLERY MODAL / DRAWER SECTION */}
        {selectedCategory && (
          <div ref={galleryRef} id="expanded-gallery" className="mt-12 bg-[#0c121e] border-2 border-[#00d9ff]/40 rounded-3xl p-6 sm:p-8 shadow-2xl relative animate-fade-in scroll-mt-24">
            {/* Modal Header */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-6 border-b border-white/10 gap-4">
              <div>
                <div className="flex items-center gap-2 text-xs text-[#00d9ff] font-extrabold uppercase tracking-widest mb-1">
                  <Sparkles className="w-4 h-4" /> Category Gallery Breakdown
                </div>
                <h3 className="text-2xl sm:text-3xl font-black text-white flex items-center gap-3">
                  {selectedCategory.title}
                </h3>
                {/* Main Category Description */}
                <p className="text-xs text-slate-300 mt-2 p-3 bg-[#131c2e] border border-white/10 rounded-xl leading-relaxed max-w-3xl">
                  {selectedCategory.description}
                </p>
              </div>

              <div className="flex items-center gap-3 shrink-0">
                {selectedCategory.websiteUrl && (
                  <a
                    href={selectedCategory.websiteUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-4 py-2 bg-[#00d9ff] text-[#061017] font-black text-xs rounded-xl hover:bg-cyan-300 transition-colors flex items-center gap-1.5 shadow-md"
                  >
                    <Globe className="w-4 h-4" /> Visit Website Link <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                )}

                <button
                  onClick={() => setActiveCategoryId(null)}
                  className="p-2.5 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors cursor-pointer"
                  title="Close Gallery"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
            </div>

            {/* Filter Tabs for Subdivisions */}
            {selectedCategory.subdivisions.length > 1 && (
              <div className="flex items-center gap-2 mt-6 overflow-x-auto pb-2">
                <button
                  onClick={() => setSelectedSubdivisionFilter('All')}
                  className={`px-3.5 py-1.5 rounded-xl text-xs font-bold transition-all cursor-pointer whitespace-nowrap ${
                    selectedSubdivisionFilter === 'All'
                      ? 'bg-[#00d9ff] text-[#061017]'
                      : 'bg-[#151e30] text-slate-300 hover:text-white border border-white/10'
                  }`}
                >
                  All Subdivisions ({selectedCategory.subdivisions.length})
                </button>
                {selectedCategory.subdivisions.map((sub, idx) => (
                  <button
                    key={idx}
                    onClick={() => setSelectedSubdivisionFilter(sub.name)}
                    className={`px-3.5 py-1.5 rounded-xl text-xs font-bold transition-all cursor-pointer whitespace-nowrap ${
                      selectedSubdivisionFilter === sub.name
                        ? 'bg-[#00d9ff] text-[#061017]'
                        : 'bg-[#151e30] text-slate-300 hover:text-white border border-white/10'
                    }`}
                  >
                    {sub.name} (4 Photos)
                  </button>
                ))}
              </div>
            )}

            {/* Subdivisions Content Loop */}
            <div className="space-y-10 mt-8">
              {selectedCategory.subdivisions
                .filter(
                  (sub) =>
                    selectedSubdivisionFilter === 'All' || selectedSubdivisionFilter === sub.name
                )
                .map((subdivision, sIdx) => (
                  <div
                    key={sIdx}
                    className="bg-[#101726] border border-white/10 rounded-2xl p-5 sm:p-6 space-y-4"
                  >
                    {/* Subdivision Heading & Badge */}
                    <div className="pb-3 border-b border-white/5 space-y-2">
                      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                        <div className="flex items-center gap-2">
                          <span className="w-2.5 h-2.5 rounded-full bg-[#00d9ff] animate-pulse" />
                          <h4 className="text-lg font-black text-white">{subdivision.name}</h4>
                          <span className="px-2.5 py-0.5 rounded-full bg-[#00d9ff]/20 text-[#00d9ff] text-[10px] font-extrabold border border-[#00d9ff]/30">
                            {subdivision.badge}
                          </span>
                        </div>

                        <span className="text-[11px] font-mono text-slate-400">
                          Exact 4 Photos Slot Area
                        </span>
                      </div>

                      {/* Small Description Box for Subdivision */}
                      <div className="p-3 bg-[#00d9ff]/5 border border-[#00d9ff]/20 rounded-xl text-xs text-slate-300 flex items-start gap-2">
                        <Info className="w-4 h-4 text-[#00d9ff] shrink-0 mt-0.5" />
                        <div>
                          <span className="font-bold text-[#00d9ff] mr-1">Subdivision Description:</span>
                          <span>{subdivision.description}</span>
                        </div>
                      </div>
                    </div>

                    {/* 4 Photos Grid */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                      {subdivision.photos.map((photo) => (
                        <div
                          key={photo.id}
                          className="bg-[#151f33] border border-white/10 rounded-xl overflow-hidden hover:border-[#00d9ff]/50 transition-all duration-300 group flex flex-col justify-between"
                        >
                          <div className="relative h-44 w-full overflow-hidden bg-[#0a0e17]">
                            <img
                              src={photo.url}
                              alt={photo.title}
                              onClick={() => onOpenLightbox(photo.url, photo.title)}
                              className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500 cursor-pointer"
                            />
                            <div className="absolute top-2 left-2 px-2 py-0.5 rounded bg-black/80 backdrop-blur-sm text-[10px] font-mono text-[#00d9ff] font-bold border border-white/10">
                              Photo {photo.id} of 4
                            </div>
                            <button
                              onClick={() => onOpenLightbox(photo.url, photo.title)}
                              className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center text-white gap-1.5 text-xs font-bold cursor-pointer"
                            >
                              <Eye className="w-4 h-4 text-[#00d9ff]" /> Click to Zoom
                            </button>
                          </div>

                          <div className="p-3.5 space-y-2">
                            <h5 className="text-xs font-bold text-white leading-tight line-clamp-1">
                              {photo.title}
                            </h5>
                            <p className="text-[11px] text-slate-400 leading-snug">
                              {photo.caption}
                            </p>

                            <button
                              onClick={() => onOpenLightbox(photo.url, photo.title)}
                              className="w-full mt-1 py-1.5 px-3 rounded-lg border border-[#00d9ff]/40 text-[#00d9ff] hover:bg-[#00d9ff] hover:text-[#061017] font-bold text-xs transition-colors flex items-center justify-center gap-1 cursor-pointer"
                            >
                              <Eye className="w-3.5 h-3.5" /> View Photo {photo.id}
                            </button>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
