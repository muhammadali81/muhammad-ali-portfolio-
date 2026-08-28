import React, { useEffect, useState } from 'react';

export default function OverviewSection() {
  const [stats, setStats] = useState({
    profile_views: 0,
    satisfied: 0,
    unsatisfied: 0,
    total_feedback: 0,
    average_rating: 0,
    positive: 0,
    negative: 0
  });

  useEffect(() => {
    let retryCount = 0;
    const maxRetries = 3;

    const fetchStats = async () => {
      try {
        const response = await fetch('/api/stats');
        if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`);
        const data = await response.json();
        setStats({
          profile_views: data.profileViews || 0,
          satisfied: data.satisfiedClients || 0,
          unsatisfied: data.unsatisfiedClients || 0,
          total_feedback: data.totalFeedback || 0,
          average_rating: data.averageRating || 0,
          positive: data.positiveReactions || 0,
          negative: data.negativeReactions || 0
        });
        retryCount = 0; // Reset on success
      } catch (error) {
        // Only log if we have exhausted retries or it's not a standard network error
        if (retryCount >= maxRetries) {
          console.error("Failed to fetch real-time stats after retries:", error);
        } else {
          console.warn(`Transient fetch error (attempt ${retryCount + 1}/${maxRetries}):`, error instanceof Error ? error.message : error);
        }

        if (retryCount < maxRetries) {
          retryCount++;
          setTimeout(fetchStats, 2000 * retryCount);
        }
      }
    };

    fetchStats();
    
    // Auto-refresh every 30 seconds for real-time feel
    const interval = setInterval(fetchStats, 30000);
    
    // Register a view once per session
    const hasViewed = sessionStorage.getItem('portfolio_viewed');
    if (!hasViewed) {
      fetch('/api/stats/view', { method: 'POST' }).catch(() => {
        // Ignore view count network errors to prevent console noise
      });
      sessionStorage.setItem('portfolio_viewed', 'true');
    }

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="overview-section py-[86px] pb-[35px] relative" id="portfolioOverview">
      <div className="container">
        <div className="section-title text-center mb-[55px]">
          <div className="flex items-center justify-center gap-2 mb-2">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
            <span className="text-[10px] font-bold text-emerald-500 uppercase tracking-widest">Live System Statistics</span>
          </div>
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
