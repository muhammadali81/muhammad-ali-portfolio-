import React from 'react';

export default function About() {
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
            <p className="text-[#a3adba] leading-relaxed">
              I am Muhammad Ali, a Computer Science student, freelancer and creative developer from Havelian, Abbottabad. I am a Muslim who values honesty, professionalism, respect and responsible work. My interests include web development, game & AI application development, Pixel Forge graphic design, 2D & 3D architecture design, and modern technology. My aim is to communicate clearly, understand each client's needs and deliver thoughtful, reliable and high-quality digital solutions.
            </p>
          </div>
          <div className="info-card p-[30px] rounded-[16px] bg-[#10151f] border border-[rgba(255,255,255,.07)]">
            <h3 className="text-[#00d9ff] text-xl font-bold mb-[14px]">My Vision</h3>
            <p className="text-[#a3adba] leading-relaxed">
              My vision is to build a respected professional career through continuous learning, creativity, discipline and ethical work. I want to create practical digital products, provide dependable freelance services and turn ideas into polished experiences. I believe in improving my skills continuously, maintaining professional standards and creating work that delivers real value to clients and users.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
