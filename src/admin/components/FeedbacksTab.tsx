import React, { useState } from 'react';
import { MessageSquare, Star, CheckCircle2, XCircle, Trash2, KeyRound, Search, Filter, MessageCircle } from 'lucide-react';
import { FeedbackItem } from '../types';

interface FeedbacksTabProps {
  feedbacks: FeedbackItem[];
  onApprove: (id: string) => void;
  onReject: (id: string) => void;
  onDelete: (id: string) => void;
  onReply: (id: string, replyText: string) => void;
  onOpenCodeGenerator: () => void;
}

export default function FeedbacksTab({
  feedbacks,
  onApprove,
  onReject,
  onDelete,
  onReply,
  onOpenCodeGenerator
}: FeedbacksTabProps) {
  const [search, setSearch] = useState('');
  const [statusFilter, setStatusFilter] = useState<'All' | 'Published' | 'Pending' | 'Archived'>('All');
  const [replyId, setReplyId] = useState<string | null>(null);
  const [replyText, setReplyText] = useState('');

  const filteredFeedbacks = feedbacks.filter((fb) => {
    const matchesSearch =
      fb.clientName.toLowerCase().includes(search.toLowerCase()) ||
      fb.comment.toLowerCase().includes(search.toLowerCase()) ||
      (fb.codeUsed && fb.codeUsed.toLowerCase().includes(search.toLowerCase()));
    const matchesStatus = statusFilter === 'All' ? true : fb.status === statusFilter;
    return matchesSearch && matchesStatus;
  });

  const handleReplySubmit = (id: string) => {
    if (!replyText.trim()) return;
    onReply(id, replyText.trim());
    setReplyId(null);
    setReplyText('');
  };

  return (
    <div className="space-y-5 pb-12">
      {/* Header & Actions */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 bg-[#0f1523] border border-white/10 p-5 rounded-2xl">
        <div>
          <h2 className="text-lg font-bold text-white flex items-center gap-2">
            <MessageSquare className="w-5 h-5 text-[#00d9ff]" /> Client Testimonials & Feedbacks
          </h2>
          <p className="text-xs text-slate-400">
            Review and publish client reviews verified via single-use <strong>Ali-</strong> codes
          </p>
        </div>

        <button
          onClick={onOpenCodeGenerator}
          className="px-4 py-2.5 bg-[#00d9ff] text-[#061017] text-xs font-bold rounded-xl hover:bg-cyan-300 transition-colors flex items-center gap-2 cursor-pointer shadow-lg shadow-[#00d9ff]/10"
        >
          <KeyRound className="w-4 h-4" /> Generate Client Code (Ali-)
        </button>
      </div>

      {/* Filters Bar */}
      <div className="flex flex-col sm:flex-row items-center justify-between gap-3 bg-[#0f1523] border border-white/10 p-3.5 rounded-xl">
        <div className="relative w-full sm:w-72">
          <Search className="w-3.5 h-3.5 absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
          <input
            type="text"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Search by client, comment, or code..."
            className="w-full pl-9 pr-3 py-1.5 bg-[#141c2c] border border-white/10 rounded-lg text-xs text-white placeholder-slate-500 focus:outline-none focus:border-[#00d9ff]"
          />
        </div>

        <div className="flex items-center gap-2 w-full sm:w-auto">
          {(['All', 'Published', 'Pending', 'Archived'] as const).map((st) => (
            <button
              key={st}
              onClick={() => setStatusFilter(st)}
              className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-all cursor-pointer ${
                statusFilter === st
                  ? 'bg-[#00d9ff] text-[#061017]'
                  : 'bg-[#141c2c] text-slate-400 hover:text-white border border-white/5'
              }`}
            >
              {st}
            </button>
          ))}
        </div>
      </div>

      {/* Feedback Cards Feed */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {filteredFeedbacks.length === 0 ? (
          <div className="col-span-full p-12 text-center text-slate-400 bg-[#0f1523] border border-white/10 rounded-2xl text-xs">
            No testimonials match your filter criteria.
          </div>
        ) : (
          filteredFeedbacks.map((fb) => (
            <div
              key={fb.id}
              className="bg-[#0f1523] border border-white/10 hover:border-white/20 rounded-2xl p-5 flex flex-col justify-between transition-all"
            >
              <div>
                {/* Card Top */}
                <div className="flex items-start justify-between gap-3">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-[#00d9ff]/20 text-[#00d9ff] font-bold text-sm flex items-center justify-center border border-[#00d9ff]/30">
                      {fb.avatarLetter || fb.clientName.charAt(0)}
                    </div>
                    <div>
                      <h4 className="text-sm font-bold text-white">{fb.clientName}</h4>
                      <p className="text-[11px] text-slate-400">{fb.clientEmail || fb.date}</p>
                    </div>
                  </div>

                  <div className="flex flex-col items-end gap-1">
                    <span
                      className={`px-2.5 py-0.5 rounded-full text-[10px] font-bold ${
                        fb.status === 'Published'
                          ? 'bg-emerald-500/15 text-emerald-400 border border-emerald-500/20'
                          : fb.status === 'Pending'
                          ? 'bg-amber-500/15 text-amber-400 border border-amber-500/20'
                          : 'bg-slate-500/15 text-slate-400'
                      }`}
                    >
                      {fb.status}
                    </span>
                    <div className="flex text-amber-400 text-xs">
                      {'★'.repeat(fb.rating)}
                    </div>
                  </div>
                </div>

                {/* Code Tag & Source & Google badge */}
                <div className="flex items-center gap-2 mt-3 text-[10px] flex-wrap">
                  {fb.codeUsed && (
                    <span className="px-2 py-0.5 rounded bg-purple-500/10 border border-purple-500/20 text-purple-300 font-mono">
                      Code: {fb.codeUsed}
                    </span>
                  )}
                  {fb.source && (
                    <span className="px-2 py-0.5 rounded bg-white/5 text-slate-400">
                      Source: {fb.source}
                    </span>
                  )}
                  {fb.googleVerified && (
                    <span className="px-2 py-0.5 rounded bg-emerald-500/15 border border-emerald-500/30 text-emerald-400 font-bold flex items-center gap-1">
                      <CheckCircle2 className="w-2.5 h-2.5" /> Google Verified
                    </span>
                  )}
                </div>

                {/* Comment Text */}
                <p className="text-xs text-slate-200 mt-3 leading-relaxed bg-[#131a29] p-3 rounded-xl border border-white/5">
                  "{fb.comment}"
                </p>

                {/* Attached Picture Screenshot if available */}
                {fb.imageUrl && (
                  <div className="mt-2">
                    <p className="text-[10px] text-slate-400 mb-1 font-semibold">Attached Image / Screenshot:</p>
                    <img
                      src={fb.imageUrl}
                      alt="Client Attachment"
                      className="max-h-36 rounded-lg border border-white/10 object-cover"
                    />
                  </div>
                )}

                {/* Admin Reply */}
                {fb.adminReply && (
                  <div className="mt-3 p-2.5 bg-[#00d9ff]/5 border-l-2 border-[#00d9ff] rounded-r-lg text-xs">
                    <strong className="text-[11px] text-[#00d9ff]">Muhammad Ali's Reply:</strong>
                    <p className="text-slate-300 mt-0.5">{fb.adminReply}</p>
                  </div>
                )}
              </div>

              {/* Reply Box or Action Buttons */}
              <div className="mt-4 pt-3 border-t border-white/5">
                {replyId === fb.id ? (
                  <div className="space-y-2">
                    <textarea
                      value={replyText}
                      onChange={(e) => setReplyText(e.target.value)}
                      placeholder="Write your public reply to this client..."
                      className="w-full p-2 bg-[#141c2c] border border-white/10 rounded-lg text-xs text-white placeholder-slate-500 focus:outline-none focus:border-[#00d9ff]"
                    />
                    <div className="flex items-center justify-end gap-2">
                      <button
                        onClick={() => setReplyId(null)}
                        className="px-3 py-1 bg-white/5 hover:bg-white/10 text-slate-300 text-xs rounded-md"
                      >
                        Cancel
                      </button>
                      <button
                        onClick={() => handleReplySubmit(fb.id)}
                        className="px-3 py-1 bg-[#00d9ff] text-[#061017] text-xs font-bold rounded-md hover:bg-cyan-300"
                      >
                        Post Reply
                      </button>
                    </div>
                  </div>
                ) : (
                  <div className="flex items-center justify-between">
                    <button
                      onClick={() => {
                        setReplyId(fb.id);
                        setReplyText(fb.adminReply || '');
                      }}
                      className="text-xs text-[#00d9ff] hover:underline flex items-center gap-1 cursor-pointer font-medium"
                    >
                      <MessageCircle className="w-3.5 h-3.5" />
                      {fb.adminReply ? 'Edit Reply' : 'Add Reply'}
                    </button>

                    <div className="flex items-center gap-1.5">
                      {fb.status === 'Pending' && (
                        <button
                          onClick={() => onApprove(fb.id)}
                          className="px-2.5 py-1 bg-emerald-500/20 text-emerald-300 hover:bg-emerald-500/30 border border-emerald-500/30 text-xs font-bold rounded-lg transition-colors flex items-center gap-1 cursor-pointer"
                        >
                          <CheckCircle2 className="w-3 h-3" /> Approve
                        </button>
                      )}

                      {fb.status === 'Published' && (
                        <button
                          onClick={() => onReject(fb.id)}
                          className="px-2.5 py-1 bg-amber-500/10 text-amber-300 hover:bg-amber-500/20 border border-amber-500/20 text-xs rounded-lg transition-colors cursor-pointer"
                        >
                          Archive
                        </button>
                      )}

                      <button
                        onClick={() => onDelete(fb.id)}
                        className="p-1.5 text-slate-400 hover:text-rose-400 hover:bg-rose-500/10 rounded-lg transition-colors cursor-pointer"
                        title="Delete Feedback"
                      >
                        <Trash2 className="w-3.5 h-3.5" />
                      </button>
                    </div>
                  </div>
                )}
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
}
