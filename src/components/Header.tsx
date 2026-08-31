import React, { useState, useEffect } from 'react';
import { Menu, X, Sun, Moon, Cpu, Box, Settings, ShieldCheck } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { IMAGES } from '../images';

interface HeaderProps {
  onTrigger3DMode?: (e: React.MouseEvent) => void;
  onOpenAdmin?: (e: React.MouseEvent) => void;
}

const Header: React.FC<HeaderProps> = ({ onTrigger3DMode, onOpenAdmin }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isLight, setIsLight] = useState(() => {
    const saved = localStorage.getItem('luxTheme');
    if (saved) return saved === 'light';
    return window.matchMedia && window.matchMedia('(prefers-color-scheme: light)').matches;
  });
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    if (isLight) document.body.classList.add('lux-light');
    else document.body.classList.remove('lux-light');
  }, [isLight]);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleTheme = () => {
    const next = !isLight;
    setIsLight(next);
    localStorage.setItem('luxTheme', next ? 'light' : 'dark');
    if (next) document.body.classList.add('lux-light');
    else document.body.classList.remove('lux-light');
  };

  const navLinks = [
    { label: 'Home', href: '#home' },
    { label: 'About', href: '#about' },
    { label: 'CV', href: '#cv' },
    { label: 'Skills', href: '#skills' },
    { label: 'Projects', href: '#projects' },
    { label: 'Services', href: '#services' },
    { label: 'Feedback', href: '#feedback' },
    { label: 'Contact', href: '#contact' },
  ];

  return (
    <motion.header 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
        scrolled 
          ? 'bg-[#020617]/90 backdrop-blur-xl border-b border-white/5 py-3 shadow-2xl shadow-black/50' 
          : 'bg-transparent py-7'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center">
        {/* Logo & Name */}
        <motion.div 
          whileHover={{ scale: 1.02 }}
          className="flex items-center gap-4 group"
        >
          <div 
            onClick={onOpenAdmin}
            className="w-12 h-12 rounded-2xl bg-gradient-to-br from-[#00d9ff] via-[#5ce1e6] to-[#7c5cff] flex items-center justify-center font-black text-white text-xl shadow-lg shadow-[#00d9ff]/20 cursor-pointer transition-all duration-500 group-hover:rotate-[360deg] group-hover:shadow-[#00d9ff]/40"
          >
            MA
          </div>
          <a href="#home" className="flex flex-col">
            <span className="text-xl font-black text-white tracking-[0.2em] uppercase group-hover:text-[#00d9ff] transition-colors duration-300">
              MUHAMMAD <span className="text-[#00d9ff]">ALI</span>
            </span>
            <span className="text-[10px] font-bold tracking-[0.4em] text-slate-400 uppercase flex items-center gap-1.5">
              <span className="text-[#00d9ff]/80">Havelian</span> <span className="text-[#00d9ff] text-[8px] animate-pulse">✦</span> <span>Innovator</span>
            </span>
          </a>
        </motion.div>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-2">
          {navLinks.map((link, idx) => (
            <motion.a 
              key={link.label} 
              href={link.href}
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 + idx * 0.05 }}
              className="px-4 py-2 text-[12px] font-black tracking-widest text-slate-400 hover:text-[#00d9ff] transition-all relative group uppercase"
            >
              {link.label}
              <motion.span 
                className="absolute bottom-0 left-4 right-4 h-[2px] bg-gradient-to-r from-[#00d9ff] to-[#7c5cff] origin-left"
                initial={{ scaleX: 0 }}
                whileHover={{ scaleX: 1 }}
                transition={{ duration: 0.3 }}
              />
            </motion.a>
          ))}
        </nav>

        {/* Action Buttons */}
        <div className="flex items-center gap-3">
          {/* Admin Toggle with Profile Picture */}
          <motion.button 
            whileHover={{ scale: 1.08 }}
            whileTap={{ scale: 0.92 }}
            onClick={onOpenAdmin}
            className="hidden sm:flex w-10 h-10 rounded-xl overflow-hidden border border-[#00d9ff]/40 bg-slate-900/80 items-center justify-center relative group shadow-md shadow-[#00d9ff]/15 hover:border-[#00d9ff] transition-all"
            title="Admin Portal (Muhammad Ali)"
          >
            <img 
              src={IMAGES.profile} 
              alt="Admin Profile" 
              className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-115" 
            />
            <div className="absolute inset-0 bg-[#00d9ff]/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center backdrop-blur-[1px]">
              <Settings className="w-4 h-4 text-white drop-shadow-md animate-spin" style={{ animationDuration: '4s' }} />
            </div>
            <span className="absolute -bottom-0.5 -right-0.5 w-2.5 h-2.5 rounded-full bg-emerald-400 border border-[#020617] ring-1 ring-emerald-400/50" />
          </motion.button>

          {/* 3D Mode */}
          <motion.button 
            whileHover={{ y: -2, boxShadow: '0 0 20px rgba(0,217,255,0.3)' }}
            whileTap={{ scale: 0.95 }}
            onClick={onTrigger3DMode}
            className="hidden md:flex items-center gap-3 px-6 py-2.5 rounded-xl bg-slate-900/80 border border-white/10 text-[10px] font-black tracking-[0.2em] text-white uppercase hover:border-[#00d9ff]/50 transition-all group overflow-hidden relative"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-[#7c5cff]/10 to-[#00d9ff]/10 opacity-0 group-hover:opacity-100 transition-opacity" />
            <Box className="w-4 h-4 text-[#00d9ff] animate-bounce" />
            <span className="relative z-10">3D Art World</span>
          </motion.button>

          {/* Theme Toggle */}
          <motion.button 
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9, rotate: 180 }}
            onClick={toggleTheme}
            className="w-10 h-10 rounded-xl bg-slate-800/50 border border-white/5 flex items-center justify-center text-slate-300 hover:text-[#00d9ff] hover:border-[#00d9ff]/30 transition-all"
          >
            {isLight ? <Moon className="w-5 h-5" /> : <Sun className="w-5 h-5" />}
          </motion.button>

          {/* Mobile Menu Button */}
          <motion.button 
            whileTap={{ scale: 0.9 }}
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden w-10 h-10 rounded-xl bg-slate-800/50 border border-white/5 flex items-center justify-center text-slate-300"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </motion.button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            className="fixed inset-0 z-[60] lg:hidden bg-[#020617]/98 backdrop-blur-3xl"
          >
            {/* Header in mobile menu */}
            <div className="p-6 flex justify-between items-center border-b border-white/5">
              <span className="text-xl font-black text-white tracking-widest uppercase">
                NAV<span className="text-[#00d9ff]">IGATION</span>
              </span>
              <button 
                onClick={() => setMobileMenuOpen(false)}
                className="w-12 h-12 rounded-2xl bg-slate-800 flex items-center justify-center text-white"
              >
                <X className="w-6 h-6" />
              </button>
            </div>
            
            {/* Content */}
            <nav className="h-[calc(100%-80px)] flex flex-col p-10 gap-4 overflow-y-auto">
              {navLinks.map((link, idx) => (
                <motion.a 
                  key={link.label} 
                  href={link.href}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.2 + idx * 0.05 }}
                  onClick={() => setMobileMenuOpen(false)}
                  className="text-4xl font-black text-slate-500 hover:text-white transition-all flex items-center gap-4 group"
                >
                  <span className="text-[12px] font-black text-[#00d9ff] opacity-0 group-hover:opacity-100 transition-opacity">0{idx + 1}</span>
                  {link.label}
                </motion.a>
              ))}
              
              <div className="mt-auto grid grid-cols-1 gap-4 pt-10">
                <button 
                  onClick={(e) => { setMobileMenuOpen(false); onOpenAdmin?.(e); }}
                  className="flex items-center justify-between p-5 rounded-3xl bg-slate-900 border border-[#00d9ff]/20 text-white font-bold"
                >
                  <div className="flex items-center gap-3.5">
                    <div className="w-10 h-10 rounded-xl overflow-hidden border border-[#00d9ff]/50 relative shrink-0">
                      <img src={IMAGES.profile} alt="Admin" className="w-full h-full object-cover" />
                      <span className="absolute -bottom-0.5 -right-0.5 w-2.5 h-2.5 rounded-full bg-emerald-400 border border-[#020617]" />
                    </div>
                    <div className="text-left">
                      <span className="text-base font-bold block">Admin Portal</span>
                      <span className="text-[10px] text-[#00d9ff] font-medium">Muhammad Ali Control</span>
                    </div>
                  </div>
                  <Settings className="w-5 h-5 text-[#00d9ff]" />
                </button>
                <button 
                  onClick={(e) => { setMobileMenuOpen(false); onTrigger3DMode?.(e); }}
                  className="flex items-center justify-between p-6 rounded-3xl bg-gradient-to-r from-[#7c5cff] to-[#00d9ff] text-white font-black uppercase tracking-widest shadow-2xl shadow-[#00d9ff]/20"
                >
                  <div className="flex items-center gap-4">
                    <Box className="w-6 h-6" />
                    <span className="text-lg">3D Art World</span>
                  </div>
                  <div className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center">→</div>
                </button>
              </div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
};

export default Header;
