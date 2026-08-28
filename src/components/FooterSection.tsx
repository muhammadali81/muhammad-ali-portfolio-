import React from 'react';

export default function FooterSection() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="site-footer border-t border-[var(--lux-border)] bg-[var(--lux-surface)] transition-colors duration-300">
      <div className="container site-footer-grid grid grid-cols-1 md:grid-cols-4 gap-[28px] py-[40px]">
        <div>
          <h3 className="text-lg font-black mb-2 text-[var(--lux-text)] font-brand tracking-wider uppercase">
            Muhammad<span className="text-[#00d9ff]">Ali</span>
          </h3>
          <p className="text-xs text-[var(--lux-text-muted)] leading-relaxed">
            Web Developer • Game &amp; AI App Developer • Graphic Designer • 2D &amp; 3D Architecture.
          </p>
        </div>
        <div>
          <h4 className="text-xs uppercase font-extrabold tracking-wider text-[var(--lux-text)] mb-3">Quick Links</h4>
          <div className="grid gap-2 text-xs text-[var(--lux-text-muted)]">
            <a href="#home" className="hover:text-[#00d9ff] transition-colors">Home</a>
            <a href="#about" className="hover:text-[#00d9ff] transition-colors">About</a>
            <a href="#education" className="hover:text-[#00d9ff] transition-colors">Education</a>
            <a href="#skills" className="hover:text-[#00d9ff] transition-colors">Skills</a>
            <a href="#services" className="hover:text-[#00d9ff] transition-colors">Services</a>
            <a href="#projects" className="hover:text-[#00d9ff] transition-colors">Projects</a>
            <a href="#hire" className="hover:text-[#00d9ff] transition-colors">Hire Me</a>
            <a href="#feedback" className="hover:text-[#00d9ff] transition-colors">Feedback</a>
            <a href="#faq" className="hover:text-[#00d9ff] transition-colors">FAQ</a>
            <a href="#inquiry" className="hover:text-[#00d9ff] transition-colors">Inquiry</a>
            <a href="#contact" className="hover:text-[#00d9ff] transition-colors">Contact</a>
            <a href="admin.html" className="text-[#00d9ff] font-bold hover:underline transition-colors flex items-center gap-1">⚙ Admin Portal</a>
          </div>
        </div>
        <div>
          <h4 className="text-xs uppercase font-extrabold tracking-wider text-[var(--lux-text)] mb-3">Services</h4>
          <div className="grid gap-2 text-xs text-[var(--lux-text-muted)]">
            <a href="#services" className="hover:text-[#00d9ff] transition-colors">Web Development</a>
            <a href="#services" className="hover:text-[#00d9ff] transition-colors">Game &amp; AI Apps</a>
            <a href="#services" className="hover:text-[#00d9ff] transition-colors">Pixel Forge Design</a>
            <a href="#services" className="hover:text-[#00d9ff] transition-colors">2D &amp; 3D Architecture</a>
            <a href="#hire" className="hover:text-[#00d9ff] transition-colors">Custom Projects</a>
          </div>
        </div>
        <div>
          <h4 className="text-xs uppercase font-extrabold tracking-wider text-[var(--lux-text)] mb-3">Connect</h4>
          <div className="footer-social-icons flex items-center gap-2.5 flex-wrap mb-4">
            <a
              aria-label="Facebook"
              title="Facebook"
              href="https://www.facebook.com/share/19K82QsNZv/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center border border-[var(--lux-border)] bg-transparent rounded-xl w-[38px] h-[38px] cursor-pointer hover:border-[#00d9ff] hover:bg-[var(--lux-surface2)] hover:scale-105 transition-all duration-300 overflow-hidden"
            >
              <img
                src="images/facebook.svg"
                alt="Facebook"
                className="w-[24px] h-[24px] object-contain"
                referrerPolicy="no-referrer"
              />
            </a>
            <a
              aria-label="Instagram"
              title="Instagram"
              href="https://www.instagram.com/m_ali._.0?igsi=bGkxNHg5d3UzeWs1"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center border border-[var(--lux-border)] bg-transparent rounded-xl w-[38px] h-[38px] cursor-pointer hover:border-[#00d9ff] hover:bg-[var(--lux-surface2)] hover:scale-105 transition-all duration-300 overflow-hidden"
            >
              <img
                src="images/instagram.svg"
                alt="Instagram"
                className="w-[24px] h-[24px] object-contain"
                referrerPolicy="no-referrer"
              />
            </a>
            <a
              aria-label="TikTok"
              title="TikTok"
              href="https://www.tiktok.com/@m_ali._.0?_r=1&_t=ZS-994mBu6m1Yr"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center border border-[var(--lux-border)] bg-transparent rounded-xl w-[38px] h-[38px] cursor-pointer hover:border-[#00d9ff] hover:bg-[var(--lux-surface2)] hover:scale-105 transition-all duration-300 overflow-hidden"
            >
              <img
                src="images/tiktok.svg"
                alt="TikTok"
                className="w-[24px] h-[24px] object-contain"
                referrerPolicy="no-referrer"
              />
            </a>
            <a
              aria-label="Snapchat"
              title="Snapchat"
              href="https://www.snapchat.com/add/cdt.mali?share_id=-8JxAM19DBA&locale=en-AU"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center border border-[var(--lux-border)] bg-transparent rounded-xl w-[38px] h-[38px] cursor-pointer hover:border-[#00d9ff] hover:bg-[var(--lux-surface2)] hover:scale-105 transition-all duration-300 overflow-hidden"
            >
              <img
                src="images/snapchat.svg"
                alt="Snapchat"
                className="w-[24px] h-[24px] object-contain"
                referrerPolicy="no-referrer"
              />
            </a>
          </div>
        </div>
      </div>
      <div className="site-footer-bottom border-t border-[var(--lux-border)] py-4 text-center text-[11px] text-[var(--lux-text-muted)]">
        © <span id="footerYear">{currentYear}</span> Muhammad Ali. All Rights Reserved.
      </div>
    </footer>
  );
}
