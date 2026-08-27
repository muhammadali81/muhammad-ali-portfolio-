import React from 'react';
import { EDUCATION_DATA } from '../data/portfolioData';

export default function Education() {
  return (
    <section id="education" className="py-[100px] relative">
      <div className="container">
        <div className="section-title text-center mb-[55px]">
          <h2 className="text-[40px] font-black mb-[10px]">My <span>Education</span></h2>
          <p className="text-[#818c9c]">My academic journey</p>
        </div>
        <div className="education max-w-[850px] mx-auto grid gap-[20px]">
          {EDUCATION_DATA.map((edu, idx) => (
            <div key={idx} className="edu-card bg-[#10151f] border border-[rgba(255,255,255,.07)] border-l-4 border-l-[#00d9ff] rounded-[12px] p-[25px]">
              <h3 className="text-[21px] font-bold mb-[6px]">{edu.degree}</h3>
              <div className="institute text-[#00d9ff] font-bold">{edu.institute}</div>
              <div className="year text-[#7e8998] text-sm mt-[5px]">{edu.year}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
