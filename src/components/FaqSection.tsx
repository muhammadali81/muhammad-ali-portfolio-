import React from 'react';
import { FAQ_DATA } from '../data/portfolioData';

export default function FaqSection() {
  return (
    <section id="faq" className="py-[100px]">
      <div className="container">
        <div className="section-title text-center mb-[55px]">
          <h2 className="text-[40px] font-black mb-[10px]">Frequently Asked <span>Questions</span></h2>
          <p className="text-[#818c9c]">Quick answers for potential clients</p>
        </div>
        <div className="faq-list max-w-[850px] mx-auto grid gap-[12px]">
          {FAQ_DATA.map((faq, idx) => (
            <details key={idx} className="bg-[#10151f] border border-[rgba(255,255,255,.07)] rounded-[12px] p-[17px_20px]">
              <summary className="cursor-pointer font-bold text-white">{faq.question}</summary>
              <p className="text-[#929dab] mt-[10px] text-sm leading-relaxed">{faq.answer}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
