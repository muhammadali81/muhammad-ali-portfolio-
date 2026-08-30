import React from 'react';

interface ContactSectionProps {
  onOpenVoiceSupport?: () => void;
}

export default function ContactSection({ onOpenVoiceSupport }: ContactSectionProps) {
  return (
    <section id="contact" className="py-[100px]">
      <div className="container">
        <div className="section-title text-center mb-[55px]">
          <h2 className="text-[40px] font-black mb-[10px]">Contact <span>Me</span></h2>
          <p className="text-[#818c9c]">Let's connect</p>
        </div>
        <div className="contact-box max-w-[850px] mx-auto text-center bg-[#10151f] border border-[rgba(255,255,255,.07)] rounded-[18px] p-[40px_25px]">
          <h3 className="text-[27px] font-bold mb-[10px]">Muhammad Ali</h3>
          <p className="text-[#929dab] mb-[25px]">
            Have a project idea or want to get in touch? You can contact me directly or ask my AI Voice Assistant.
          </p>
          <div className="contact-details flex justify-center flex-wrap gap-[15px] mb-[28px]">
            <a href="tel:+923300358799" className="contact-item bg-[#18202c] rounded-[9px] p-[12px_17px] text-[#cbd2dc] hover:border-[#00d9ff]/60 transition-all">
              <span className="text-[#00d9ff] font-bold">Call:</span> +92 330 0358799
            </a>
            <a href="https://wa.me/923426793428" target="_blank" rel="noopener noreferrer" className="contact-item bg-[#18202c] rounded-[9px] p-[12px_17px] text-[#cbd2dc] hover:border-emerald-400/60 transition-all">
              <span className="text-emerald-400 font-bold">WhatsApp:</span> +92 342 6793428
            </a>
            {/* Luxury AI Voice Support Button */}
            <button
              onClick={onOpenVoiceSupport}
              className="contact-item relative overflow-hidden bg-gradient-to-r from-[#18202c] via-[#241018] to-[#18202c] rounded-[10px] p-[12px_20px] text-white border border-[#ff3344]/50 hover:border-[#ff3344] hover:shadow-[0_0_25px_rgba(255,51,68,0.4)] transition-all duration-300 transform hover:-translate-y-0.5 cursor-pointer flex items-center justify-center gap-2.5 group"
              title="Open AI Voice Support Assistant"
              aria-label="AI Voice Support"
            >
              {/* Subtle top sheen */}
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700 pointer-events-none" />
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#ff3344] opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-[#ff4d5a]"></span>
              </span>
              <span className="text-white font-extrabold tracking-wide text-sm group-hover:text-[#ff4d5a] transition-colors">
                AI Voice Support
              </span>
              <span className="text-xs px-1.5 py-0.5 rounded bg-[#ff3344]/20 border border-[#ff3344]/40 text-[#ff4d5a] font-bold">
                🎙️ Voice
              </span>
            </button>
            <a href="mailto:alimuhammadhvn81@gmail.com" className="contact-item bg-[#18202c] rounded-[9px] p-[12px_17px] text-[#cbd2dc] hover:border-[#00d9ff]/60 transition-all">
              <span className="text-[#00d9ff] font-bold">Email:</span> alimuhammadhvn81@gmail.com
            </a>
          </div>
          <a href="mailto:alimuhammadhvn81@gmail.com" className="btn btn-primary px-8 py-3.5 rounded-lg font-bold inline-block">
            Send Me an Email
          </a>
        </div>
      </div>
    </section>
  );
}
