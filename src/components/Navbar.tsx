import React, { useState, useEffect } from 'react';

interface NavbarProps {
  onTrigger3DMode?: (e: React.MouseEvent) => void;
  onOpenAdmin?: (e: React.MouseEvent) => void;
}

export default function Navbar({ onTrigger3DMode, onOpenAdmin }: NavbarProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isLight, setIsLight] = useState(() => {
    const saved = localStorage.getItem('luxTheme');
    if (saved) return saved === 'light';
    return window.matchMedia && window.matchMedia('(prefers-color-scheme: light)').matches;
  });
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    // Initial sync
    if (isLight) {
      document.body.classList.add('lux-light');
    } else {
      document.body.classList.remove('lux-light');
    }
  }, [isLight]);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleTheme = () => {
    const next = !isLight;
    setIsLight(next);
    localStorage.setItem('luxTheme', next ? 'light' : 'dark');
    if (next) {
      document.body.classList.add('lux-light');
    } else {
      document.body.classList.remove('lux-light');
    }
  };

  const handleShare = async () => {
    try {
      if (navigator.share) {
        await navigator.share({ title: 'Muhammad Ali — Portfolio', text: 'Explore Muhammad Ali Portfolio', url: location.href });
      } else {
        await navigator.clipboard.writeText(location.href);
        alert('Portfolio link copied to clipboard!');
      }
    } catch {}
  };

  const handleEnter3D = (e: React.MouseEvent) => {
    e.preventDefault();
    if (onTrigger3DMode) {
      onTrigger3DMode(e);
    } else {
      const url = new URL(window.location.href);
      url.searchParams.set('mode', '3d');
      window.history.pushState({}, '', url.toString());
      window.dispatchEvent(new Event('popstate'));
    }
  };

  const navLinks = [
    { label: 'Home', href: '#home' },
    { label: 'About', href: '#about' },
    { label: 'Education', href: '#education' },
    { label: 'Skills', href: '#skills' },
    { label: 'Projects', href: '#projects' },
    { label: 'Services', href: '#services' },
    { label: 'Hire Me', href: '#hire' },
    { label: 'Feedback', href: '#feedback' },
    { label: 'Inquiry', href: '#inquiry' },
    { label: 'Contact', href: '#contact' },
  ];

  return (
    <header className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${scrolled ? 'header-glass py-2.5 shadow-md' : 'bg-transparent py-4'}`}>
      <div className="container flex justify-between items-center px-4 sm:px-0">
        {/* Unique Luxury Brand Identity with MA triggering Admin */}
        <div className="flex items-center gap-3 select-none">
          {/* MA Badge - Performs Admin Button Function */}
          <a
            href="/admin"
            onClick={onOpenAdmin}
            title="Open Admin Portal"
            aria-label="Admin Portal"
            className="brand-badge w-10 h-10 rounded-xl flex items-center justify-center font-brand font-black text-sm text-[#00d9ff] hover:scale-105 hover:border-[#00d9ff] transition-transform duration-300 cursor-pointer shadow-sm"
          >
            MA
          </a>
          <a href="#home" className="flex flex-col leading-tight group">
            <span className="brand-title text-lg sm:text-xl font-black text-[var(--lux-text)] tracking-[0.14em] uppercase transition">
              Muhammad <span className="bg-gradient-to-r from-[#00d9ff] via-[#5ce1e6] to-[#7c5cff] bg-clip-text text-transparent">Ali</span>
            </span>
            <span className="text-[9px] font-bold tracking-[0.22em] text-[var(--lux-text-muted)] uppercase flex items-center gap-1.5">
              <span>Developer</span>
              <span className="text-[#00d9ff] text-[7px]">✦</span>
              <span>Designer</span>
            </span>
          </a>
        </div>

        {/* Desktop Navigation Links */}
        <nav className="hidden lg:flex items-center gap-6 list-none">
          {navLinks.map(link => (
            <a
              key={link.label}
              href={link.href}
              className="text-[13px] font-semibold text-[var(--lux-text)] opacity-80 hover:opacity-100 hover:text-[#00d9ff] transition-all relative py-1 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[2px] after:bg-[#00d9ff] hover:after:w-full after:transition-all after:duration-200"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Header Actions */}
        <div className="flex items-center gap-2.5 sm:gap-3">
          {/* Luxury Admin Button */}
          <a
            href="/admin"
            onClick={onOpenAdmin}
            className="luxury-header-admin-btn hidden md:inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl text-[#00d9ff] font-bold text-xs cursor-pointer select-none"
            title="Admin Dashboard"
            aria-label="Admin Dashboard"
          >
            <span className="text-xs">⚙</span>
            <span className="tracking-wide">Admin</span>
          </a>

          {/* Luxury 3D Shifter Button */}
          <a
            href="?mode=3d"
            onClick={handleEnter3D}
            className="luxury-header-3d-btn inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl text-[var(--lux-text)] font-extrabold text-xs tracking-wider uppercase cursor-pointer select-none"
            title="Enter 3D Art World"
            aria-label="Enter 3D Art World"
          >
            <span className="text-[#00d9ff] text-sm animate-pulse">◇</span>
            <span className="hidden xs:inline">3D World</span>
          </a>

          {/* Icon-Only Theme Switcher Button */}
          <button
            onClick={toggleTheme}
            className="w-9 h-9 rounded-xl border border-[var(--lux-border)] bg-[var(--lux-surface2)] text-[var(--lux-text)] flex items-center justify-center text-sm cursor-pointer hover:border-[#00d9ff] hover:text-[#00d9ff] transition-all duration-200 shadow-sm"
            aria-label={isLight ? 'Switch to Dark Mode' : 'Switch to Light Mode'}
            title={isLight ? 'Switch to Dark Mode' : 'Switch to Light Mode'}
          >
            {isLight ? '☾' : '☀'}
          </button>

          {/* Hamburger Menu Toggle (Mobile & Tablet) */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className={`hamburger-btn lg:hidden ${mobileMenuOpen ? 'is-active' : ''}`}
            aria-label="Toggle navigation menu"
            aria-expanded={mobileMenuOpen}
          >
            <span className="hamburger-line line-1"></span>
            <span className="hamburger-line line-2"></span>
            <span className="hamburger-line line-3"></span>
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="mobile-nav-drawer fixed inset-x-0 top-[65px] bottom-0 z-40 lg:hidden overflow-y-auto p-6 flex flex-col justify-between animate-fadeIn border-t border-[var(--lux-border)]">
          <div>
            <div className="text-[10px] font-extrabold uppercase tracking-[0.2em] text-[#00d9ff] mb-4">
              Navigation
            </div>
            <div className="grid grid-cols-2 gap-2.5 mb-6">
              {navLinks.map(link => (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="p-3 rounded-xl bg-[var(--lux-surface2)] hover:bg-[#00d9ff]/10 border border-[var(--lux-border)] hover:border-[#00d9ff]/40 text-sm font-semibold text-[var(--lux-text)] transition"
                >
                  {link.label}
                </a>
              ))}
            </div>

            <div className="text-[10px] font-extrabold uppercase tracking-[0.2em] text-[#7c5cff] mb-3">
              Portals &amp; Actions
            </div>
            <div className="grid grid-cols-2 gap-3 mb-6">
              <a
                href="/admin"
                onClick={(e) => {
                  setMobileMenuOpen(false);
                  if (onOpenAdmin) onOpenAdmin(e);
                }}
                className="p-3.5 rounded-xl border border-[#00d9ff]/40 bg-[#00d9ff]/10 text-[#00d9ff] font-bold text-xs flex items-center justify-center gap-2 hover:bg-[#00d9ff] hover:text-[#061017] transition"
              >
                <span>⚙</span>
                <span>Admin Portal</span>
              </a>
              <a
                href="?mode=3d"
                onClick={(e) => {
                  setMobileMenuOpen(false);
                  handleEnter3D(e);
                }}
                className="p-3.5 rounded-xl border border-[#7c5cff]/50 bg-[#7c5cff]/15 text-[var(--lux-text)] font-bold text-xs flex items-center justify-center gap-2 hover:bg-[#7c5cff] hover:text-white transition"
              >
                <span className="text-[#00d9ff]">◇</span>
                <span>3D Art World</span>
              </a>
            </div>
          </div>

          <div className="pt-4 border-t border-[var(--lux-border)] flex flex-col gap-3">
            <div className="flex items-center justify-between p-3 rounded-xl bg-[var(--lux-surface2)] border border-[var(--lux-border)]">
              <span className="text-xs font-bold text-[var(--lux-text-muted)]">Display Theme</span>
              <button
                onClick={toggleTheme}
                className="flex items-center gap-1.5 text-xs font-bold px-3 py-1.5 rounded-lg bg-[#00d9ff]/10 text-[#00d9ff] border border-[#00d9ff]/30 cursor-pointer"
              >
                <span>{isLight ? '☾ Switch to Dark' : '☀ Switch to Light'}</span>
              </button>
            </div>
            <div className="flex gap-2">
              <button
                onClick={handleShare}
                className="flex-1 p-3 rounded-xl border border-[var(--lux-border)] bg-[var(--lux-surface2)] text-xs font-bold text-[var(--lux-text)] flex items-center justify-center gap-1.5 cursor-pointer hover:border-[#00d9ff]"
              >
                <span>↗</span>
                <span>Share Portfolio</span>
              </button>
              <a
                href="CV.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 p-3 rounded-xl border border-[#7c5cff]/40 bg-[#7c5cff]/10 text-xs font-bold text-[var(--lux-text)] flex items-center justify-center gap-1.5 hover:border-[#7c5cff]"
              >
                <span>📄</span>
                <span>Download CV</span>
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
