import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Education from './components/Education';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Services from './components/Services';
import HireMe from './components/HireMe';
import ProfessionalExtras from './components/ProfessionalExtras';
import OverviewSection from './components/OverviewSection';
import FeedbackSection from './components/FeedbackSection';
import InquirySection from './components/InquirySection';
import ContactSection from './components/ContactSection';
import FaqSection from './components/FaqSection';
import ReactionSection from './components/ReactionSection';
import WhatNextSection from './components/WhatNextSection';
import FooterSection from './components/FooterSection';
import LightboxModal from './components/LightboxModal';
import AIVoiceSupportModal from './components/AIVoiceSupportModal';
import AIFloatingBar from './components/AIFloatingBar';
import ThreeDApp from './3d/ThreeDApp';

export default function App() {
  const [viewMode, setViewMode] = useState<'2d' | '3d'>(() => {
    const urlParams = new URLSearchParams(window.location.search);
    return urlParams.get('mode') === '3d' ? '3d' : '2d';
  });
  const [lightboxState, setLightboxState] = useState({ isOpen: false, src: '', title: '' });
  const [isVoiceSupportOpen, setIsVoiceSupportOpen] = useState(false);
  const [uploaded3DFile, setUploaded3DFile] = useState<File | null>(null);
  const fileInputRef = React.useRef<HTMLInputElement>(null);

  useEffect(() => {
    const handleLocationChange = () => {
      const urlParams = new URLSearchParams(window.location.search);
      setViewMode(urlParams.get('mode') === '3d' ? '3d' : '2d');
    };
    window.addEventListener('popstate', handleLocationChange);
    return () => {
      window.removeEventListener('popstate', handleLocationChange);
    };
  }, []);

  const handleExitTo2D = () => {
    setUploaded3DFile(null);
    setViewMode('2d');
    const url = new URL(window.location.href);
    url.searchParams.delete('mode');
    window.history.pushState({}, '', url.toString());
  };

  const handleOpenLightbox = (src: string, title: string) => {
    setLightboxState({ isOpen: true, src, title });
  };

  const handleTrigger3DMode = (e: React.MouseEvent) => {
    e.preventDefault();
    fileInputRef.current?.click();
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0];
      if (file.name.endsWith('.glb') || file.name.endsWith('.gltf')) {
        setUploaded3DFile(file);
        setViewMode('3d');
        const url = new URL(window.location.href);
        url.searchParams.set('mode', '3d');
        window.history.pushState({}, '', url.toString());
      } else {
        alert('Unsupported format. Please select a valid 3D file (.glb or .gltf) to start.');
      }
    }
  };

  if (viewMode === '3d') {
    return <ThreeDApp onExitTo2D={handleExitTo2D} initialModelFile={uploaded3DFile} />;
  }

  return (
    <div className="min-h-screen bg-[var(--lux-bg)] text-[var(--lux-text)] font-sans antialiased selection:bg-[#00d9ff] selection:text-[#061017] transition-colors duration-300">
      {/* Scroll Progress Bar */}
      <div className="scroll-progress"></div>

      {/* Hidden 3D File Preloader */}
      <input
        type="file"
        ref={fileInputRef}
        onChange={handleFileChange}
        accept=".glb,.gltf"
        className="hidden"
      />

      {/* Navbar */}
      <Navbar onTrigger3DMode={handleTrigger3DMode} />

      {/* Main Content */}
      <main id="main-content">
        <Hero onTrigger3DMode={handleTrigger3DMode} />
        <About />
        <Education />
        <Skills />
        <Projects onOpenLightbox={handleOpenLightbox} />
        <Services />
        <HireMe onOpenLightbox={handleOpenLightbox} />
        <ProfessionalExtras />
        <OverviewSection />
        <FeedbackSection />
        <InquirySection />
        <ContactSection onOpenVoiceSupport={() => setIsVoiceSupportOpen(true)} />
        <FaqSection />
        <ReactionSection />
        <WhatNextSection />
      </main>

      {/* Footer */}
      <FooterSection />

      {/* Lightbox Modal */}
      <LightboxModal
        isOpen={lightboxState.isOpen}
        imageSrc={lightboxState.src}
        imageTitle={lightboxState.title}
        onClose={() => setLightboxState({ isOpen: false, src: '', title: '' })}
      />

      {/* AI Voice Support Assistant Modal */}
      <AIVoiceSupportModal
        isOpen={isVoiceSupportOpen}
        onClose={() => setIsVoiceSupportOpen(false)}
      />

      {/* Floating Bottom-Right AI Assistant Bar */}
      <AIFloatingBar
        onOpen={() => setIsVoiceSupportOpen(true)}
      />
    </div>
  );
}
