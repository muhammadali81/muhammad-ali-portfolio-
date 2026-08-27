import React, { useEffect, useState } from 'react';

export default function OverviewSection() {
  const [stats, setStats] = useState({
    profile_views: 1248,
    satisfied: 89,
    unsatisfied: 2,
    total_feedback: 91,
    average_rating: 4.9,
    positive: 145,
    negative: 3
  });

  return (
    <section className="overview-section py-[86px] pb-[35px] relative" id="portfolioOverview">
      <div className="container">
        <div className="section-title text-center mb-[55px]">
          <h2 className="text-[40px] font-black mb-[10px]">Portfolio <span>Overview</span></h2>
          <p className="text-[#818c9c]">A live snapshot of reach, client satisfaction and community feedback.</p>
        </div>
        <div className="overview-grid grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-[14px]">
          <div className="overview-card min-h-[138px] p-[22px] border border-[rgba(255,255,255,.08)] bg-[#10151f] rounded-[22px] flex flex-col justify-between">
            <strong className="text-[32px] leading-none text-[#00d9ff]">{stats.profile_views.toLocaleString()}</strong>
            <span className="text-[11px] uppercase tracking-[1.2px] text-[#929dab] font-black">Profile Reach</span>
            <small className="text-[12px] text-[#929dab]">Total portfolio visits</small>
          </div>
          <div className="overview-card min-h-[138px] p-[22px] border border-[rgba(255,255,255,.08)] bg-[#10151f] rounded-[22px] flex flex-col justify-between">
            <strong className="text-[32px] leading-none text-[#00d9ff]">{stats.satisfied}</strong>
            <span className="text-[11px] uppercase tracking-[1.2px] text-[#929dab] font-black">Client Satisfaction</span>
            <small className="text-[12px] text-[#929dab]">Satisfactory feedback</small>
          </div>
          <div className="overview-card min-h-[138px] p-[22px] border border-[rgba(255,255,255,.08)] bg-[#10151f] rounded-[22px] flex flex-col justify-between">
            <strong className="text-[32px] leading-none text-[#00d9ff]">{stats.unsatisfied}</strong>
            <span className="text-[11px] uppercase tracking-[1.2px] text-[#929dab] font-black">Improvement Opportunities</span>
            <small className="text-[12px] text-[#929dab]">Unsatisfactory feedback</small>
          </div>
          <div className="overview-card min-h-[138px] p-[22px] border border-[rgba(255,255,255,.08)] bg-[#10151f] rounded-[22px] flex flex-col justify-between">
            <strong className="text-[32px] leading-none text-[#00d9ff]">{stats.total_feedback}</strong>
            <span className="text-[11px] uppercase tracking-[1.2px] text-[#929dab] font-black">Total Feedback</span>
            <small className="text-[12px] text-[#929dab]">Published reviews</small>
          </div>
          <div className="overview-card min-h-[138px] p-[22px] border border-[rgba(255,255,255,.08)] bg-[#10151f] rounded-[22px] flex flex-col justify-between">
            <strong className="text-[32px] leading-none text-[#00d9ff]">{stats.average_rating.toFixed(1)}</strong>
            <span className="text-[11px] uppercase tracking-[1.2px] text-[#929dab] font-black">Overall Rating</span>
            <small className="text-[12px] text-[#929dab]">Average out of 5</small>
          </div>
          <div className="overview-card min-h-[138px] p-[22px] border border-[rgba(255,255,255,.08)] bg-[#10151f] rounded-[22px] flex flex-col justify-between">
            <strong className="text-[32px] leading-none text-[#00d9ff]">{stats.positive}</strong>
            <span className="text-[11px] uppercase tracking-[1.2px] text-[#929dab] font-black">Positive Feedback</span>
            <small className="text-[12px] text-[#929dab]">👍 community reactions</small>
          </div>
        </div>
      </div>
    </section>
  );
}
