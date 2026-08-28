import React from 'react';

interface HeroProps {
  onTrigger3DMode?: (e: React.MouseEvent) => void;
}

export default function Hero({ onTrigger3DMode }: HeroProps) {
  return (
    <section id="home" className="hero min-h-[92vh] flex items-center pt-[100px] relative overflow-hidden">
      <div className="container hero-content grid grid-cols-1 md:grid-cols-[1.2fr_0.8fr] gap-[60px] items-center relative z-10">
        <div>
          <div className="badge inline-block px-[15px] py-[8px] border border-[rgba(0,217,255,.4)] rounded-[30px] text-[#00d9ff] text-[13px] mb-[22px]">
            COMPUTER SCIENCE STUDENT &amp; DEVELOPER
          </div>
          <h1 className="text-[clamp(40px,7vw,78px)] font-black leading-[1.05] mb-[20px] tracking-tighter">
            I'm <span>Muhammad Ali</span>
          </h1>
          <h2 className="text-[22px] sm:text-[24px] text-[#c5ccd7] font-medium mb-[18px]">
            Web Developer • Game &amp; AI App Developer • Graphic Designer
          </h2>
          <p className="max-w-[650px] text-[#a4adba] text-[17px] mb-[30px] leading-relaxed">
            I am a Computer Science student passionate about technology, creative design, web development, game development, AI applications and building innovative digital experiences.
          </p>
          <div className="hero-tags flex gap-3 flex-wrap text-xs font-bold text-[#7f8a9a]">
            <span className="px-3 py-2 border border-white/10 rounded-full bg-white/5">ORIGINAL PROJECTS</span>
            <span className="px-3 py-2 border border-white/10 rounded-full bg-white/5">CREATIVE + TECHNICAL</span>
            <span className="px-3 py-2 border border-white/10 rounded-full bg-white/5">RESPONSIVE</span>
          </div>
          <div className="buttons flex gap-3.5 flex-wrap mt-6">
            <a href="#projects" className="btn btn-primary px-6 py-3.5 rounded-lg font-bold">
              View My Projects
            </a>
            <a href="#hire" className="btn px-6 py-3.5 rounded-lg font-bold border border-[#00d9ff] text-[#00d9ff]">
              Hire Me
            </a>
            <a href="CV.pdf" target="_blank" rel="noopener noreferrer" className="btn px-6 py-3.5 rounded-lg font-bold border border-[rgba(124,92,255,.45)] text-[#d9d3ff]">
              Download CV
            </a>
            <a
              href="?mode=3d"
              onClick={(e) => {
                e.preventDefault();
                if (onTrigger3DMode) {
                  onTrigger3DMode(e);
                } else {
                  const url = new URL(window.location.href);
                  url.searchParams.set('mode', '3d');
                  window.history.pushState({}, '', url.toString());
                  window.dispatchEvent(new Event('popstate'));
                }
              }}
              className="btn px-6 py-3.5 rounded-lg font-extrabold border border-[#7c5cff] bg-gradient-to-r from-[#7c5cff]/20 to-[#00d9ff]/20 text-[#00d9ff] hover:shadow-[0_0_30px_rgba(0,217,255,0.4)] hover:border-[#00d9ff] transition-all flex items-center gap-2 cursor-pointer"
            >
              <span className="animate-pulse">◇</span>
              <span>Enter 3D Art World</span>
            </a>
          </div>
        </div>

        <div className="hero-photo flex justify-center items-center flex-col">
          <img
            src="images/profile.jpg"
            alt="Muhammad Ali Profile Photo"
            className="w-[320px] h-[320px] object-cover rounded-full border-4 border-[#00d9ff] shadow-[0_0_35px_rgba(0,217,255,.18)]"
          />
          <div className="hero-photo-role mt-[18px] text-center p-[12px_18px] border border-[rgba(0,217,255,.25)] bg-[rgba(16,21,31,.78)] rounded-xl w-[min(320px,90vw)]">
            <strong className="block text-[#00d9ff] text-[19px] mb-0.5">Freelancer</strong>
            <span className="block text-[#9aa4b3] text-[13px]">Computer Science Student • Developer • Designer • AI Creator</span>
          </div>
        </div>
      </div>
    </section>
  );
}
