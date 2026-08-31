import React, { useState, useEffect, useRef } from 'react';
import { IMAGES } from './images';
import { 
  EDUCATION_DATA, 
  SKILLS_DATA, 
  FAQ_DATA 
} from './data/portfolioData';
import Projects from './components/Projects';
import Services from './components/Services';
import HireMe from './components/HireMe';
import ProfessionalExtras from './components/ProfessionalExtras';
import OverviewSection from './components/OverviewSection';
import Header from './components/Header';
import FeedbackSection from './components/FeedbackSection';
import InquirySection from './components/InquirySection';
import ContactSection from './components/ContactSection';
import ReactionSection from './components/ReactionSection';
import WhatNextSection from './components/WhatNextSection';
import CVSection from './components/CVSection';
import LightboxModal from './components/LightboxModal';
import ThreeDConstructionModal from './components/ThreeDConstructionModal';
import Aivoice from './components/Aivoice';
import ThreeDApp from './3d/ThreeDApp';
import AdminApp from './admin/AdminApp';

// =========================================================================
// CONSOLIDATED SUB-COMPONENTS
// =========================================================================

function Hero({ onTrigger3DMode, onOpenCvModal }: { onTrigger3DMode?: (e: React.MouseEvent) => void; onOpenCvModal?: (e: React.MouseEvent) => void }) {
  return (
    <section id="home" className="hero min-h-[92vh] flex items-center pt-[100px] relative overflow-hidden">
      <div className="container hero-content grid grid-cols-1 md:grid-cols-[1.2fr_0.8fr] gap-[60px] items-center relative z-10">
        <div>
          <div className="badge inline-block px-[15px] py-[8px] border border-[rgba(0,217,255,.4)] rounded-[30px] text-[#00d9ff] text-[13px] mb-[22px]">COMPUTER SCIENCE STUDENT &amp; DEVELOPER</div>
          <h1 className="text-[clamp(40px,7vw,78px)] font-black leading-[1.05] mb-[20px] tracking-tighter">I'm <span>Muhammad Ali</span></h1>
          <h2 className="text-[22px] sm:text-[24px] text-[#c5ccd7] font-medium mb-[18px]">Web Developer • Game &amp; AI App Developer • Graphic Designer</h2>
          <p className="max-w-[650px] text-[#a4adba] text-[17px] mb-[30px] leading-relaxed">I am a Computer Science student passionate about technology, creative design, web development, game development, AI applications and building innovative digital experiences.</p>
          <div className="buttons flex gap-3.5 flex-wrap mt-6">
            <a 
              href="#cv" 
              onClick={(e) => {
                e.preventDefault();
                if (onOpenCvModal) onOpenCvModal(e);
                const el = document.getElementById('cv');
                if (el) el.scrollIntoView({ behavior: 'smooth' });
              }}
              className="btn px-6 py-3.5 rounded-lg font-bold border border-[#00d9ff]/50 bg-[#00d9ff]/10 text-[#00d9ff] hover:bg-[#00d9ff]/20 transition-all flex items-center gap-2 cursor-pointer shadow-[0_0_20px_rgba(0,217,255,0.2)]"
            >
              <span>📄</span>
              <span>View CV &amp; Resume</span>
            </a>
            <a href="#projects" className="btn btn-primary px-6 py-3.5 rounded-lg font-bold">View My Projects</a>
            <a href="#hire" className="btn px-6 py-3.5 rounded-lg font-bold border border-[#00d9ff] text-[#00d9ff]">Hire Me</a>
            <a href="?mode=3d" onClick={onTrigger3DMode} className="btn px-6 py-3.5 rounded-lg font-extrabold border border-[#7c5cff] bg-gradient-to-r from-[#7c5cff]/20 to-[#00d9ff]/20 text-[#00d9ff] transition-all flex items-center gap-2 cursor-pointer"><span>◇</span><span>Enter 3D Art World</span></a>
          </div>
        </div>
        <div className="hero-photo flex justify-center items-center flex-col">
          <img 
            src={IMAGES.profile} 
            alt="Muhammad Ali Profile" 
            className="w-[320px] h-[320px] object-cover rounded-full border-4 border-[#00d9ff] shadow-[0_0_35px_rgba(0,217,255,.18)]" 
          />
          <div className="hero-photo-role mt-[18px] text-center p-[12px_18px] border border-[rgba(0,217,255,.25)] bg-[rgba(16,21,31,.78)] rounded-xl w-[min(320px,90vw)]">
            <strong className="block text-[#00d9ff] text-[19px] mb-0.5">Freelancer</strong>
            <span className="block text-[#9aa4b3] text-[13px]">CS Student • Developer • Designer • AI Creator</span>
          </div>
        </div>
      </div>
    </section>
  );
}

function About() {
  return (
    <section id="about" className="py-[100px] relative">
      <div className="container">
        <div className="section-title text-center mb-[55px]">
          <h2 className="text-[40px] font-black mb-[10px]">About <span>Me</span></h2>
          <p className="text-[#818c9c]">Get to know me</p>
        </div>
        <div className="about-grid grid grid-cols-1 md:grid-cols-2 gap-[25px]">
          <div className="info-card p-[30px] rounded-[16px] bg-[#10151f] border border-[rgba(255,255,255,.07)]">
            <h3 className="text-[#00d9ff] text-xl font-bold mb-[14px]">Who I Am</h3>
            <p className="text-[#a3adba] leading-relaxed">I am Muhammad Ali, a Computer Science student, freelancer and creative developer from Havelian, Abbottabad. I value honesty, professionalism, and responsible work.</p>
          </div>
          <div className="info-card p-[30px] rounded-[16px] bg-[#10151f] border border-[rgba(255,255,255,.07)]">
            <h3 className="text-[#00d9ff] text-xl font-bold mb-[14px]">My Vision</h3>
            <p className="text-[#a3adba] leading-relaxed">My vision is to build a respected professional career through continuous learning, creativity, and discipline. I aim to turn ideas into polished digital experiences.</p>
          </div>
        </div>
      </div>
    </section>
  );
}

function Education() {
  return (
    <section id="education" className="py-[100px] relative">
      <div className="container">
        <div className="section-title text-center mb-[55px]">
          <h2 className="text-[40px] font-black mb-[10px]">My <span>Education</span></h2>
          <p className="text-[#818c9c]">My academic journey</p>
        </div>
        <div className="education max-w-[850px] mx-auto grid gap-[20px]">
          {EDUCATION_DATA.map((edu, idx) => (
            <div key={idx} className="edu-card bg-[#10151f] border border-[rgba(255,255,255,.07)] border-l-4 border-l-[#00d9ff] rounded-[12px] p-[25px]">
              <h3 className="text-[21px] font-bold mb-[6px]">{edu.degree}</h3>
              <div className="institute text-[#00d9ff] font-bold">{edu.institute}</div>
              <div className="year text-[#7e8998] text-sm mt-[5px]">{edu.year}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Skills() {
  return (
    <section id="skills" className="py-[100px] relative">
      <div className="container">
        <div className="section-title text-center mb-[55px]">
          <h2 className="text-[40px] font-black mb-[10px]">My <span>Skills</span></h2>
          <p className="text-[#818c9c]">Technical and creative skills</p>
        </div>
        <div className="skills grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-[18px]">
          {SKILLS_DATA.map((skill, idx) => (
            <div key={idx} className="skill bg-[#10151f] border border-[rgba(255,255,255,.07)] p-[25px_15px] text-center rounded-[13px]">
              <h3 className="text-[#00d9ff] font-bold text-base">{skill}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function FaqSection() {
  return (
    <section id="faq" className="py-[100px]">
      <div className="container">
        <div className="section-title text-center mb-[55px]">
          <h2 className="text-[40px] font-black mb-[10px]">Frequently Asked <span>Questions</span></h2>
          <p className="text-[#818c9c]">Quick answers for potential clients</p>
        </div>
        <div className="faq-list max-w-[850px] mx-auto grid gap-[12px]">
          {FAQ_DATA.map((faq, idx) => (
            <details key={idx} className="bg-[#10151f] border border-[rgba(255,255,255,.07)] rounded-[12px] p-[17px_20px]">
              <summary className="cursor-pointer font-bold text-white">{faq.question}</summary>
              <p className="text-[#929dab] mt-[10px] text-sm leading-relaxed">{faq.answer}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}

function FooterSection() {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="site-footer bg-[#080c16] border-t border-[var(--lux-border)] pt-[80px]">
      <div className="container grid grid-cols-1 md:grid-cols-4 gap-[40px] pb-[60px]">
        <div className="md:col-span-1">
          <div className="brand-logo text-2xl font-black text-white mb-4">MA</div>
          <p className="text-[#818c9c] text-sm leading-relaxed">Muhammad Ali is a Computer Science student and software creator from Havelian, Abbottabad.</p>
        </div>
        <div className="md:col-span-1">
          <h4 className="text-xs uppercase font-extrabold tracking-wider text-[var(--lux-text)] mb-3">Links</h4>
          <div className="flex flex-col gap-2 text-sm text-[var(--lux-text-muted)]">
            <a href="#home" className="hover:text-[#00d9ff]">Home</a>
            <a href="#about" className="hover:text-[#00d9ff]">About</a>
            <a href="#projects" className="hover:text-[#00d9ff]">Projects</a>
            <a href="#contact" className="hover:text-[#00d9ff]">Contact</a>
          </div>
        </div>
        <div className="md:col-span-1">
          <h4 className="text-xs uppercase font-extrabold tracking-wider text-[var(--lux-text)] mb-3">Divisions</h4>
          <div className="flex flex-col gap-2 text-sm text-[var(--lux-text-muted)]">
            <a href="#services" className="hover:text-[#00d9ff]">Web Development</a>
            <a href="#services" className="hover:text-[#00d9ff]">Game & AI Apps</a>
            <a href="#services" className="hover:text-[#00d9ff]">Pixel Forge Design</a>
          </div>
        </div>
        <div>
          <h4 className="text-xs uppercase font-extrabold tracking-wider text-[var(--lux-text)] mb-3">Connect</h4>
          <div className="flex items-center gap-3 flex-wrap">
            {/* GitHub */}
            <a 
              href="https://github.com/muhammadali81" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="p-2.5 rounded-xl bg-transparent hover:bg-white/5 border border-[var(--lux-border)] text-slate-300 hover:text-[#00d9ff] hover:border-[#00d9ff]/50 transition-all flex items-center justify-center group"
              title="GitHub Profile"
              aria-label="GitHub"
            >
              <svg className="w-4 h-4 fill-current transition-transform group-hover:scale-110" viewBox="0 0 24 24">
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235_1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
              </svg>
            </a>

            {/* Facebook */}
            <a 
              href="https://www.facebook.com/share/19K82QsNZv/" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="p-2.5 rounded-xl bg-transparent hover:bg-white/5 border border-[var(--lux-border)] text-slate-300 hover:text-[#00d9ff] hover:border-[#00d9ff]/50 transition-all flex items-center justify-center group"
              title="Facebook Profile"
              aria-label="Facebook"
            >
              <svg className="w-4 h-4 fill-current transition-transform group-hover:scale-110" viewBox="0 0 24 24">
                <path d="M9 8H6v4h3v12h5V12h3.642L18 8h-4V6.333C14 5.379 14.5 5 15.5 5H18V0h-3.808C10.59 0 9 1.588 9 4.7V8z"/>
              </svg>
            </a>

            {/* Instagram */}
            <a 
              href="https://www.instagram.com/m_ali._.0?igsi=bGkxNHg5d3UzeWs1" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="p-2.5 rounded-xl bg-transparent hover:bg-white/5 border border-[var(--lux-border)] text-slate-300 hover:text-[#00d9ff] hover:border-[#00d9ff]/50 transition-all flex items-center justify-center group"
              title="Instagram Profile"
              aria-label="Instagram"
            >
              <svg className="w-4 h-4 fill-current transition-transform group-hover:scale-110" viewBox="0 0 24 24">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
              </svg>
            </a>

            {/* TikTok */}
            <a 
              href="https://www.tiktok.com/@m_ali._.0?_r=1&_t=ZS-99KII17PA7o" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="p-2.5 rounded-xl bg-transparent hover:bg-white/5 border border-[var(--lux-border)] text-slate-300 hover:text-[#00d9ff] hover:border-[#00d9ff]/50 transition-all flex items-center justify-center group"
              title="TikTok Profile"
              aria-label="TikTok"
            >
              <svg className="w-4 h-4 fill-current transition-transform group-hover:scale-110" viewBox="0 0 24 24">
                <path d="M19.589 6.686a4.793 4.793 0 0 1-3.77-4.245V2h-3.445v13.672a2.896 2.896 0 0 1-5.201 1.743l-.002-.001.002.001a2.895 2.895 0 0 1 3.183-4.51v-3.5a6.329 6.329 0 0 0-5.394 10.692 6.33 6.33 0 0 0 10.857-4.424V8.687a8.182 8.182 0 0 0 4.773 1.526V6.79a4.853 4.853 0 0 1-1.015-.104z"/>
              </svg>
            </a>

            {/* Snapchat */}
            <a 
              href="https://www.snapchat.com/add/cdt.mali?share_id=DGft9LUfnPY&locale=en-AU" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="p-2.5 rounded-xl bg-transparent hover:bg-white/5 border border-[var(--lux-border)] text-slate-300 hover:text-[#00d9ff] hover:border-[#00d9ff]/50 transition-all flex items-center justify-center group"
              title="Snapchat Profile"
              aria-label="Snapchat"
            >
              <svg className="w-4 h-4 fill-current transition-transform group-hover:scale-110" viewBox="0 0 24 24">
                <path d="M12.017 0C7.296 0 3.5 3.796 3.5 8.517c0 3.32 1.83 6.22 4.542 7.74-.298.397-.502.873-.556 1.408-.095.946.338 1.637 1.042 1.848.337.101.693.107 1.054.017 1.018-.255 1.564-.99 1.688-1.572.036-.171.054-.347.054-.523h.382c0 .176.018.352.054.523.124.582.67 1.317 1.688 1.572.361.09.717.084 1.054-.017.704-.211 1.137-.902 1.042-1.848-.054-.535-.258-1.011-.556-1.408 2.712-1.52 4.542-4.42 4.542-7.74C20.534 3.796 16.738 0 12.017 0z"/>
              </svg>
            </a>
          </div>
        </div>
      </div>
      <div className="site-footer-bottom border-t border-[var(--lux-border)] py-4 text-center text-[11px] text-[var(--lux-text-muted)]">
        © <span>{currentYear}</span> Muhammad Ali. All Rights Reserved.
      </div>
    </footer>
  );
}

function AIFloatingBar({ onOpen }: { onOpen: () => void }) {
  return (
    <div className="fixed bottom-5 right-5 z-40 animate-fadeIn">
      <button onClick={onOpen} className="group relative flex items-center gap-3 p-1.5 pr-5 rounded-full bg-[#0b101b]/95 border border-[#ff3344]/40 hover:border-[#ff3344] shadow-[0_8px_30px_rgba(0,0,0,0.6)] transition-all duration-300 transform hover:-translate-y-1">
        <div className="relative flex items-center justify-center w-11 h-11 rounded-full bg-[#ff3344] text-white">
          <span className="text-lg">🎙️</span>
        </div>
        <div className="flex flex-col text-left">
          <span className="text-[13px] font-extrabold tracking-wide text-white group-hover:text-[#ff4d5a]">AI Voice Support</span>
          <p className="text-[11px] text-[#94a3b8] leading-tight">Ask by voice or text 24/7</p>
        </div>
      </button>
    </div>
  );
}

// =========================================================================
// MAIN APP COMPONENT
// =========================================================================

export default function App() {
  const [viewMode, setViewMode] = useState<'2d' | '3d' | 'admin'>(() => {
    const path = window.location.pathname;
    if (path.endsWith('/admin') || path.includes('/admin/')) return 'admin';
    const urlParams = new URLSearchParams(window.location.search);
    return urlParams.get('mode') === '3d' ? '3d' : '2d';
  });
  const [lightboxState, setLightboxState] = useState({ isOpen: false, src: '', title: '' });
  const [is3DConstructionOpen, setIs3DConstructionOpen] = useState(false);
  const [isVoiceSupportOpen, setIsVoiceSupportOpen] = useState(false);
  const [isCvModalOpen, setIsCvModalOpen] = useState(false);
  const [uploaded3DFile, setUploaded3DFile] = useState<File | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    const handleLocationChange = () => {
      const path = window.location.pathname;
      if (path.endsWith('/admin') || path.includes('/admin/')) setViewMode('admin');
      else {
        const urlParams = new URLSearchParams(window.location.search);
        setViewMode(urlParams.get('mode') === '3d' ? '3d' : '2d');
      }
    };
    window.addEventListener('popstate', handleLocationChange);
    return () => window.removeEventListener('popstate', handleLocationChange);
  }, []);

  const handleExitTo2D = () => {
    setUploaded3DFile(null);
    setViewMode('2d');
    setIs3DConstructionOpen(false);
    const url = new URL(window.location.href);
    url.searchParams.delete('mode');
    window.history.pushState({}, '', url.pathname + url.search);
  };

  const handleOpenLightbox = (src: string, title: string) => setLightboxState({ isOpen: true, src, title });
  const handleTrigger3DMode = (e?: React.MouseEvent) => { 
    if (e) e.preventDefault(); 
    setIs3DConstructionOpen(true); 
  };

  const handleOpenDirect3D = () => {
    setIs3DConstructionOpen(false);
    setViewMode('3d');
    const url = new URL(window.location.href);
    url.searchParams.set('mode', '3d');
    window.history.pushState({}, '', url.pathname + url.search);
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0];
      if (file.name.endsWith('.glb') || file.name.endsWith('.gltf')) {
        setUploaded3DFile(file);
        setViewMode('3d');
        const url = new URL(window.location.href);
        url.searchParams.set('mode', '3d');
        window.history.pushState({}, '', url.pathname + url.search);
      } else alert('Unsupported 3D format.');
    }
  };

  const handleOpenAdmin = (e?: React.MouseEvent) => {
    if (e) e.preventDefault();
    setViewMode('admin');
    const url = new URL(window.location.href);
    const newPath = url.pathname.endsWith('/') ? url.pathname + 'admin' : url.pathname + '/admin';
    window.history.pushState({}, '', newPath);
  };

  const handleBackToPortfolio = () => {
    setViewMode('2d');
    const url = new URL(window.location.href);
    const newPath = url.pathname.replace(/\/admin\/?$/, '') || '/';
    window.history.pushState({}, '', newPath);
  };

  if (viewMode === 'admin') return <AdminApp onBack={handleBackToPortfolio} />;
  if (viewMode === '3d') return <ThreeDApp onExitTo2D={handleExitTo2D} initialModelFile={uploaded3DFile} />;

  return (
    <div className="min-h-screen bg-[var(--lux-bg)] text-[var(--lux-text)] antialiased">
      <input type="file" ref={fileInputRef} onChange={handleFileChange} accept=".glb,.gltf" className="hidden" />
      <Header onTrigger3DMode={handleTrigger3DMode} onOpenAdmin={handleOpenAdmin} onOpenCvModal={() => setIsCvModalOpen(true)} />
      <main id="main-content">
        <Hero onTrigger3DMode={handleTrigger3DMode} onOpenCvModal={() => setIsCvModalOpen(true)} />
        <About />
        <Education />
        <Skills />
        <CVSection externalModalOpen={isCvModalOpen} onCloseModal={() => setIsCvModalOpen(false)} />
        <Projects onOpenLightbox={handleOpenLightbox} />
        <Services />
        <HireMe onOpenLightbox={handleOpenLightbox} />
        <ProfessionalExtras />
        <OverviewSection />
        <FeedbackSection onOpenLightbox={handleOpenLightbox} />
        <InquirySection />
        <ContactSection onOpenVoiceSupport={() => setIsVoiceSupportOpen(true)} />
        <FaqSection />
        <ReactionSection />
        <WhatNextSection />
      </main>
      <FooterSection />
      <LightboxModal isOpen={lightboxState.isOpen} imageSrc={lightboxState.src} imageTitle={lightboxState.title} onClose={() => setLightboxState({ isOpen: false, src: '', title: '' })} />
      <ThreeDConstructionModal 
        isOpen={is3DConstructionOpen} 
        onClose={() => setIs3DConstructionOpen(false)} 
        onOpenDirect3D={handleOpenDirect3D}
      />
      <Aivoice isOpen={isVoiceSupportOpen} onClose={() => setIsVoiceSupportOpen(false)} />
      <AIFloatingBar onOpen={() => setIsVoiceSupportOpen(true)} />
    </div>
  );
}

