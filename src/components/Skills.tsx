import React from 'react';
import { SKILLS_DATA } from '../data/portfolioData';

export default function Skills() {
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
