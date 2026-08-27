import React from 'react';

export default function Services() {
  return (
    <section id="services" className="py-[100px] relative">
      <div className="container">
        <div className="section-title text-center mb-[55px]">
          <h2 className="text-[40px] font-black mb-[10px]">My <span>Services</span></h2>
          <p className="text-[#818c9c]">Specialized areas of work &amp; technical expertise</p>
        </div>
        <div className="services grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-[18px]">
          {/* 1. Web Development */}
          <div className="service bg-[#10151f] border border-[rgba(255,255,255,.07)] hover:border-[#00d9ff]/40 transition-all rounded-[15px] p-[28px_20px] text-center group">
            <div className="service-icon text-[32px] mb-[12px] group-hover:scale-110 transition-transform">💻</div>
            <h3 className="text-[#00d9ff] font-bold text-lg mb-[8px]">Web Development</h3>
            <p className="text-[#929dab] text-xs leading-relaxed">
              Modern responsive web applications, React Vite architectures, full-stack agency showcases (Nova Web), and custom UI/UX.
            </p>
          </div>

          {/* 2. Game & AI Development */}
          <div className="service bg-[#10151f] border border-[rgba(255,255,255,.07)] hover:border-[#00d9ff]/40 transition-all rounded-[15px] p-[28px_20px] text-center group">
            <div className="service-icon text-[32px] mb-[12px] group-hover:scale-110 transition-transform">🎮</div>
            <h3 className="text-[#00d9ff] font-bold text-lg mb-[8px]">Game &amp; AI App Development</h3>
            <p className="text-[#929dab] text-xs leading-relaxed">
              Interactive puzzle engines (Colour Block), Urdu/English NLP AI assistants (Pak AI), and gamified educational portals (Learn Play).
            </p>
          </div>

          {/* 3. Pixel Forge Graphic Design */}
          <div className="service bg-[#10151f] border border-[rgba(255,255,255,.07)] hover:border-[#00d9ff]/40 transition-all rounded-[15px] p-[28px_20px] text-center group">
            <div className="service-icon text-[32px] mb-[12px] group-hover:scale-110 transition-transform">🎨</div>
            <h3 className="text-[#00d9ff] font-bold text-lg mb-[8px]">Pixel Forge Graphic Design</h3>
            <p className="text-[#929dab] text-xs leading-relaxed">
              Corporate vector logo identity, luxury executive &amp; mobile shop visiting cards, and high-converting promotional banners.
            </p>
          </div>

          {/* 4. 2D & 3D Architecture */}
          <div className="service bg-[#10151f] border border-[rgba(255,255,255,.07)] hover:border-[#00d9ff]/40 transition-all rounded-[15px] p-[28px_20px] text-center group">
            <div className="service-icon text-[32px] mb-[12px] group-hover:scale-110 transition-transform">🏛️</div>
            <h3 className="text-[#00d9ff] font-bold text-lg mb-[8px]">2D &amp; 3D Architecture</h3>
            <p className="text-[#929dab] text-xs leading-relaxed">
              Precision 2D smart flooring room mapping diagrams, CAD material tile plans, and photorealistic 3D house exterior &amp; interior renders.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

