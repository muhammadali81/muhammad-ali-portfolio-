import React from 'react';

export default function WhatNextSection() {
  return (
    <section className="what-next-section py-[80px]">
      <div className="container">
        <div className="section-title text-center mb-[55px]">
          <h2 className="text-[40px] font-black mb-[10px]">What <span>Next?</span></h2>
          <p className="text-[#818c9c]">Choose your next step.</p>
        </div>
        <div className="next-journey grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-[12px]">
          <a href="#projects" className="next-step flex flex-col gap-1.5 p-[20px] border border-[rgba(255,255,255,.08)] bg-[#10151f] rounded-[18px]">
            <span className="text-xs text-[#00d9ff] font-extrabold tracking-widest">01</span>
            <strong className="text-base">Explore</strong>
            <small className="text-[#929dab]">See the work</small>
          </a>
          <a href="#services" className="next-step flex flex-col gap-1.5 p-[20px] border border-[rgba(255,255,255,.08)] bg-[#10151f] rounded-[18px]">
            <span className="text-xs text-[#00d9ff] font-extrabold tracking-widest">02</span>
            <strong className="text-base">Choose Service</strong>
            <small className="text-[#929dab]">Find the right fit</small>
          </a>
          <a href="#inquiry" className="next-step flex flex-col gap-1.5 p-[20px] border border-[rgba(255,255,255,.08)] bg-[#10151f] rounded-[18px]">
            <span className="text-xs text-[#00d9ff] font-extrabold tracking-widest">03</span>
            <strong className="text-base">Send Inquiry</strong>
            <small className="text-[#929dab]">Share your idea</small>
          </a>
          <a href="#hire" className="next-step flex flex-col gap-1.5 p-[20px] border border-[rgba(255,255,255,.08)] bg-[#10151f] rounded-[18px]">
            <span className="text-xs text-[#00d9ff] font-extrabold tracking-widest">04</span>
            <strong className="text-base">Start Project</strong>
            <small className="text-[#929dab]">Plan and build</small>
          </a>
          <a href="#feedback" className="next-step flex flex-col gap-1.5 p-[20px] border border-[rgba(255,255,255,.08)] bg-[#10151f] rounded-[18px]">
            <span className="text-xs text-[#00d9ff] font-extrabold tracking-widest">05</span>
            <strong className="text-base">Share Feedback</strong>
            <small className="text-[#929dab]">Tell me your experience</small>
          </a>
        </div>
      </div>
    </section>
  );
}
