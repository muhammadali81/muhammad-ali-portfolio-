import React from 'react';
import { WHY_WORK_WITH_ME, WORK_PROCESS } from '../data/portfolioData';

export default function ProfessionalExtras() {
  return (
    <section id="professional-extras" className="py-[100px] relative">
      <div className="container">
        <div className="section-title text-center mb-[55px]">
          <h2 className="text-[40px] font-black mb-[10px]">Why <span>Work With Me</span></h2>
          <p className="text-[#818c9c]">Professional approach beyond the portfolio</p>
        </div>
        <div className="professional-grid grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-[20px] max-w-[1050px] mx-auto">
          {WHY_WORK_WITH_ME.map((item, idx) => (
            <div key={idx} className="professional-card bg-[#10151f] border border-[rgba(255,255,255,.07)] rounded-[16px] p-[25px]">
              <div className="extra-icon text-[30px] mb-[12px]">{item.icon}</div>
              <h3 className="font-bold text-lg mb-[8px]">{item.title}</h3>
              <p className="text-[#929dab] text-sm">{item.desc}</p>
            </div>
          ))}
        </div>

        <div className="section-title text-center mb-[55px] mt-[75px]">
          <h2 className="text-[40px] font-black mb-[10px]">My <span>Work Process</span></h2>
          <p className="text-[#818c9c]">From idea to final delivery</p>
        </div>
        <div className="professional-grid grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-[20px] max-w-[1050px] mx-auto">
          {WORK_PROCESS.map((proc, idx) => (
            <div key={idx} className="professional-card bg-[#10151f] border border-[rgba(255,255,255,.07)] rounded-[16px] p-[25px]">
              <div className="process-number w-[42px] h-[42px] rounded-full flex items-center justify-center border border-[#00d9ff] text-[#00d9ff] font-extrabold mb-[15px] bg-[#00d9ff]/10">
                {proc.number}
              </div>
              <h3 className="font-bold text-lg mb-[8px]">{proc.title}</h3>
              <p className="text-[#929dab] text-sm">{proc.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
