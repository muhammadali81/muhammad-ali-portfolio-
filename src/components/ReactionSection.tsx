import React, { useState, useEffect } from 'react';
import { doc, getDoc, updateDoc, increment, setDoc } from 'firebase/firestore';
import { getDb } from '../lib/firebase';

export default function ReactionSection() {
  const db = getDb();
  const [likes, setLikes] = useState(0);
  const [dislikes, setDislikes] = useState(0);
  const [userReaction, setUserReaction] = useState<'like' | 'dislike' | null>(() => {
    return (localStorage.getItem('portfolio_user_reaction') as 'like' | 'dislike' | null) || null;
  });
  const [feedbackNotice, setFeedbackNotice] = useState<string | null>(null);

  // Fetch real counts from Firestore
  useEffect(() => {
    const fetchCounts = async () => {
      try {
        const statsRef = doc(db, 'site_stats', 'global');
        const snap = await getDoc(statsRef);
        
        if (snap.exists()) {
          const data = snap.data();
          setLikes(data.positiveReactions || 0);
          setDislikes(data.negativeReactions || 0);
        } else {
          // Initialize if not exists
          await setDoc(statsRef, {
            profileViews: 168,
            satisfiedClients: 0,
            unsatisfiedClients: 0,
            positiveReactions: 54,
            negativeReactions: 0
          });
          setLikes(54);
          setDislikes(0);
        }
      } catch (err) {
        console.warn("Transient fetch error for reaction counts:", err);
      }
    };
    fetchCounts();
  }, []);

  const handleReaction = async (type: 'like' | 'dislike') => {
    const previousReaction = userReaction;
    const isRemoving = previousReaction === type;
    
    // Calculate increments
    let likeInc = 0;
    let dislikeInc = 0;

    if (isRemoving) {
      setUserReaction(null);
      if (type === 'like') {
        setLikes(prev => prev - 1);
        likeInc = -1;
      } else {
        setDislikes(prev => prev - 1);
        dislikeInc = -1;
      }
      localStorage.removeItem('portfolio_user_reaction');
      setFeedbackNotice('Your feedback was removed.');
    } else {
      if (previousReaction === 'like') {
        setLikes(prev => prev - 1);
        likeInc -= 1;
      }
      if (previousReaction === 'dislike') {
        setDislikes(prev => prev - 1);
        dislikeInc -= 1;
      }

      setUserReaction(type);
      if (type === 'like') {
        setLikes(prev => prev + 1);
        likeInc += 1;
        setFeedbackNotice('Thank you for liking my portfolio!');
      } else {
        setDislikes(prev => prev + 1);
        dislikeInc += 1;
        setFeedbackNotice('Thank you for the feedback. I will continue improving!');
      }
      localStorage.setItem('portfolio_user_reaction', type);
    }

    try {
      // Update counts in Firestore
      const statsRef = doc(db, 'site_stats', 'global');
      await updateDoc(statsRef, {
        positiveReactions: increment(likeInc),
        negativeReactions: increment(dislikeInc)
      });
    } catch (err) {
      console.error("Failed to update reaction on Firestore:", err);
    }
  };

  return (
    <section id="reactions" className="py-14 sm:py-16 border-t border-[var(--lux-border)]">
      <div className="container max-w-4xl mx-auto px-4 text-center">
        <div className="p-8 sm:p-10 rounded-2xl bg-[var(--lux-surface)] border border-[var(--lux-border)] shadow-sm transition-all">
          <h3 className="text-xl sm:text-2xl font-bold tracking-tight text-[var(--lux-text)] mb-2 font-display">
            Did you like this portfolio?
          </h3>
          <p className="text-sm text-[var(--lux-text-muted)] max-w-md mx-auto mb-6">
            Your instant reaction helps me continuously refine my digital experiences, design aesthetic, and projects.
          </p>

          <div className="flex items-center justify-center gap-4 sm:gap-6 flex-wrap">
            {/* Like Button */}
            <button
              onClick={() => handleReaction('like')}
              className={`flex items-center gap-2.5 px-6 py-3 rounded-xl font-bold text-sm transition-all duration-200 cursor-pointer border ${
                userReaction === 'like'
                  ? 'bg-[#00d9ff]/15 text-[#00d9ff] border-[#00d9ff] shadow-[0_0_20px_rgba(0,217,255,0.25)]'
                  : 'bg-[var(--lux-surface2)] text-[var(--lux-text)] border-[var(--lux-border)] hover:border-[#00d9ff]/50 hover:text-[#00d9ff]'
              }`}
              aria-label="Like portfolio"
            >
              <span className="text-base">👍</span>
              <span>Like</span>
              <span className="text-xs px-2 py-0.5 rounded-full bg-[var(--lux-surface)] border border-[var(--lux-border)] font-extrabold">
                {likes}
              </span>
            </button>

            {/* Dislike Button */}
            <button
              onClick={() => handleReaction('dislike')}
              className={`flex items-center gap-2.5 px-6 py-3 rounded-xl font-bold text-sm transition-all duration-200 cursor-pointer border ${
                userReaction === 'dislike'
                  ? 'bg-rose-500/15 text-rose-500 border-rose-500 shadow-[0_0_20px_rgba(244,63,94,0.2)]'
                  : 'bg-[var(--lux-surface2)] text-[var(--lux-text-muted)] border-[var(--lux-border)] hover:border-rose-400/50 hover:text-rose-400'
              }`}
              aria-label="Dislike portfolio"
            >
              <span className="text-base">👎</span>
              <span>Needs Improvement</span>
              <span className="text-xs px-2 py-0.5 rounded-full bg-[var(--lux-surface)] border border-[var(--lux-border)] font-extrabold">
                {dislikes}
              </span>
            </button>
          </div>

          {feedbackNotice && (
            <div className="mt-4 text-xs font-semibold text-[#00d9ff] animate-fadeIn">
              {feedbackNotice}
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
