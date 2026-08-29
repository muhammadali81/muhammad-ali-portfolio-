import React, { useEffect, useState } from 'react';
import { ShieldCheck, CheckCircle2, Star } from 'lucide-react';
import { collection, doc, getDoc, getDocs, query, where, updateDoc, increment, setDoc } from 'firebase/firestore';
import { db } from '../lib/firebase';

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
    const fetchStats = async () => {
      try {
        // 1. Fetch from site_stats
        const statsRef = doc(db, 'site_stats', 'global');
        const snap = await getDoc(statsRef);
        let siteData: any = null;

        if (snap.exists()) {
          siteData = snap.data();
        } else {
          siteData = {
            profileViews: 168,
            satisfiedClients: 0,
            unsatisfiedClients: 0,
            positiveReactions: 54,
            negativeReactions: 0
          };
          await setDoc(statsRef, siteData);
        }

        // 2. Fetch feedback aggregates
        const q = query(collection(db, 'feedbacks'), where('isApproved', '==', true));
        const fbSnap = await getDocs(q);
        const approvedFbs = fbSnap.docs.map(d => d.data());

        const totalApproved = approvedFbs.length;
        const avgRating = totalApproved > 0 
          ? approvedFbs.reduce((acc, curr) => acc + (curr.rating || 0), 0) / totalApproved 
          : 0;

        setStats({
          profile_views: siteData?.profileViews || 0,
          satisfied: siteData?.satisfiedClients || 0,
          unsatisfied: siteData?.unsatisfiedClients || 0,
          total_feedback: totalApproved,
          average_rating: avgRating,
          positive: siteData?.positiveReactions || 0,
          negative: siteData?.negativeReactions || 0
        });
      } catch (error) {
        console.warn("Failed to fetch real-time stats:", error);
      }
    };

    fetchStats();
    
    // Auto-refresh every 60 seconds
    const interval = setInterval(fetchStats, 60000);
    
    // Register a view once per session
    const hasViewed = sessionStorage.getItem('portfolio_viewed');
    if (!hasViewed) {
      const incrementView = async () => {
        try {
          const statsRef = doc(db, 'site_stats', 'global');
          await updateDoc(statsRef, {
            profileViews: increment(1)
          });
          sessionStorage.setItem('portfolio_viewed', 'true');
        } catch (err) {
          console.warn("View track error:", err);
        }
      };
      incrementView();
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
          <p className="text-[#818c9c] max-w-2xl mx-auto">
            A real-time snapshot of Muhammad Ali's professional reach and client satisfaction, reflecting a dedicated focus on Web, Game, AI, and Architectural innovation.
          </p>
        </div>

        {/* Dynamic Portfolio Summary */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 mb-12">
          <div className="lg:col-span-8 p-8 rounded-[32px] bg-gradient-to-br from-[#10151f] to-[#161d2b] border border-white/5 relative overflow-hidden group">
            <div className="absolute top-0 right-0 p-6 opacity-10 group-hover:opacity-20 transition-opacity">
              <ShieldCheck className="w-32 h-32 text-[#00d9ff]" />
            </div>
            <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
              <span className="w-8 h-8 rounded-lg bg-[#00d9ff]/10 flex items-center justify-center">
                <CheckCircle2 className="w-5 h-5 text-[#00d9ff]" />
              </span>
              Operational Status & Function
            </h3>
            <div className="space-y-4 text-slate-400 text-sm leading-relaxed">
              <p>
                Muhammad Ali's portfolio is currently operating as a <span className="text-[#00d9ff] font-bold">Verified Professional Studio</span>. 
                Every piece of feedback shown is authenticated via Google Identity and a unique project-specific code, ensuring 100% integrity in client reviews.
              </p>
              <p>
                The studio specializes in four high-impact divisions: <span className="text-white font-medium italic">Nova Web Studio</span> for enterprise web solutions, 
                <span className="text-white font-medium italic">Colour Block & Pak AI</span> for interactive gaming and Urdu-voice assistants, 
                <span className="text-white font-medium italic">Pixel Forge</span> for graphic identity, and <span className="text-white font-medium italic">Smart Flooring CAD</span> for architectural precision.
              </p>
              <div className="flex flex-wrap gap-3 pt-2">
                {['Verified Auth', 'Secure Inquiries', 'AI-Powered Support', 'Real-time Stats'].map(tag => (
                  <span key={tag} className="px-3 py-1 rounded-full bg-white/5 border border-white/10 text-[10px] font-bold text-slate-300 uppercase tracking-wider">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>

          <div className="lg:col-span-4 p-8 rounded-[32px] bg-[#0c111a] border border-[#00d9ff]/20 flex flex-col justify-center items-center text-center">
             <div className="w-16 h-16 rounded-2xl bg-[#00d9ff]/10 flex items-center justify-center mb-4">
                <Star className="w-8 h-8 text-[#00d9ff] fill-[#00d9ff]" />
             </div>
             <h4 className="text-2xl font-black text-white mb-1">{stats.average_rating.toFixed(1)}</h4>
             <p className="text-[10px] uppercase tracking-widest text-[#00d9ff] font-black mb-4">Global Excellence Rating</p>
             <div className="flex gap-1 mb-6">
                {[1,2,3,4,5].map(i => (
                  <Star key={i} className={`w-3 h-3 ${i <= Math.round(stats.average_rating) ? 'text-[#00d9ff] fill-[#00d9ff]' : 'text-slate-700'}`} />
                ))}
             </div>
             <button 
              onClick={() => document.getElementById('feedback')?.scrollIntoView({ behavior: 'smooth' })}
              className="w-full py-3 rounded-xl bg-[#00d9ff] text-[#061017] font-bold text-xs uppercase tracking-widest hover:bg-white transition-all shadow-lg shadow-[#00d9ff]/20"
             >
               View Client Reviews
             </button>
          </div>
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
