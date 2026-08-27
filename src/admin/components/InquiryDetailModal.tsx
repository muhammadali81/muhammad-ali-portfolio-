import React, { useState } from 'react';
import { Mail, Phone, Calendar, CheckCircle2, MessageSquare, X, Trash2, Send, ExternalLink } from 'lucide-react';
import { InquiryItem } from '../types';

interface InquiryDetailModalProps {
  inquiry: InquiryItem | null;
  onClose: () => void;
  onUpdateStatus: (id: string, newStatus: 'New' | 'Read' | 'Replied') => void;
  onDelete: (id: string) => void;
}

export default function InquiryDetailModal({
  inquiry,
  onClose,
  onUpdateStatus,
  onDelete
}: InquiryDetailModalProps) {
  const [replyText, setReplyText] = useState('');
  const [isSending, setIsSending] = useState(false);
  const [replySuccess, setReplySuccess] = useState(false);

  if (!inquiry) return null;

  const handleSendReply = (e: React.FormEvent) => {
    e.preventDefault();
    if (!replyText.trim()) return;
    setIsSending(true);
    setTimeout(() => {
      onUpdateStatus(inquiry.id, 'Replied');
      setIsSending(false);
      setReplySuccess(true);
      setTimeout(() => setReplySuccess(false), 3000);
    }, 500);
  };

  const whatsappMessage = encodeURIComponent(
    `Hello ${inquiry.name}, thank you for reaching out regarding "${inquiry.subject}". This is Muhammad Ali.`
  );
  const whatsappUrl = `https://wa.me/${inquiry.phone?.replace(/[^0-9]/g, '') || '923426793428'}?text=${whatsappMessage}`;
  const mailtoUrl = `mailto:${inquiry.email}?subject=Re: ${encodeURIComponent(inquiry.subject)}`;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-fade-in">
      <div className="bg-[#0e1422] border border-white/15 rounded-2xl w-full max-w-lg shadow-2xl overflow-hidden flex flex-col">
        {/* Header */}
        <div className="p-5 border-b border-white/10 flex items-center justify-between bg-[#11192a]">
          <div className="flex items-center gap-3">
            <div className="p-2.5 rounded-xl bg-purple-500/20 text-purple-400 border border-purple-500/30">
              <Mail className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-sm font-bold text-white leading-tight">Inquiry Details</h3>
              <p className="text-[11px] text-slate-400">Received on {inquiry.date}</p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-white/10"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content */}
        <div className="p-5 space-y-4 overflow-y-auto max-h-[75vh]">
          {/* Client Details Card */}
          <div className="p-4 bg-[#141c2c] border border-white/5 rounded-xl space-y-2 text-xs">
            <div className="flex items-center justify-between">
              <span className="text-slate-400">Client Name:</span>
              <strong className="text-white text-sm">{inquiry.name}</strong>
            </div>

            <div className="flex items-center justify-between">
              <span className="text-slate-400">Email Address:</span>
              <a href={`mailto:${inquiry.email}`} className="text-[#00d9ff] hover:underline font-mono">
                {inquiry.email}
              </a>
            </div>

            {inquiry.phone && (
              <div className="flex items-center justify-between">
                <span className="text-slate-400">Phone / WhatsApp:</span>
                <span className="text-slate-200 font-mono">{inquiry.phone}</span>
              </div>
            )}

            <div className="flex items-center justify-between">
              <span className="text-slate-400">Service Category:</span>
              <span className="px-2 py-0.5 rounded bg-[#00d9ff]/10 text-[#00d9ff] font-semibold">
                {inquiry.service}
              </span>
            </div>

            {inquiry.budget && (
              <div className="flex items-center justify-between">
                <span className="text-slate-400">Client Budget:</span>
                <span className="text-emerald-400 font-bold">{inquiry.budget}</span>
              </div>
            )}

            <div className="flex items-center justify-between pt-1 border-t border-white/5">
              <span className="text-slate-400">Status:</span>
              <div className="flex items-center gap-1.5">
                {(['New', 'Read', 'Replied'] as const).map((st) => (
                  <button
                    key={st}
                    onClick={() => onUpdateStatus(inquiry.id, st)}
                    className={`px-2 py-0.5 rounded-full text-[10px] font-bold transition-colors cursor-pointer ${
                      inquiry.status === st
                        ? st === 'New'
                          ? 'bg-emerald-500 text-slate-900'
                          : st === 'Read'
                          ? 'bg-cyan-500 text-slate-900'
                          : 'bg-purple-500 text-white'
                        : 'bg-white/5 text-slate-400 hover:text-white'
                    }`}
                  >
                    {st}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Client Message */}
          <div>
            <label className="block text-xs font-bold text-slate-300 uppercase tracking-wider mb-1.5">
              Subject: {inquiry.subject}
            </label>
            <div className="p-3.5 bg-[#0b0f17] border border-white/10 rounded-xl text-xs text-slate-200 leading-relaxed whitespace-pre-wrap">
              {inquiry.message}
            </div>
          </div>

          {/* Quick Direct Actions */}
          <div className="flex gap-2">
            <a
              href={mailtoUrl}
              className="flex-1 py-2 px-3 rounded-lg bg-blue-500/20 text-blue-300 border border-blue-500/30 text-xs font-semibold hover:bg-blue-500/30 transition-colors flex items-center justify-center gap-1.5"
            >
              <Mail className="w-3.5 h-3.5" /> Email Client
            </a>

            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 py-2 px-3 rounded-lg bg-emerald-500/20 text-emerald-300 border border-emerald-500/30 text-xs font-semibold hover:bg-emerald-500/30 transition-colors flex items-center justify-center gap-1.5"
            >
              <ExternalLink className="w-3.5 h-3.5" /> Chat WhatsApp
            </a>
          </div>

          {/* Direct In-App Reply Form */}
          <form onSubmit={handleSendReply} className="space-y-2 pt-2 border-t border-white/5">
            <label className="block text-xs font-bold text-slate-300">
              Compose Quick Reply Note
            </label>
            <textarea
              value={replyText}
              onChange={(e) => setReplyText(e.target.value)}
              placeholder="Type your response notes or draft..."
              className="w-full p-2.5 bg-[#141c2c] border border-white/10 rounded-xl text-xs text-white placeholder-slate-500 focus:outline-none focus:border-[#00d9ff] min-h-[70px]"
            />
            {replySuccess && (
              <p className="text-[11px] text-emerald-400 font-semibold flex items-center gap-1">
                <CheckCircle2 className="w-3.5 h-3.5" /> Status marked as Replied!
              </p>
            )}
            <div className="flex items-center justify-between">
              <button
                type="button"
                onClick={() => {
                  onDelete(inquiry.id);
                  onClose();
                }}
                className="text-xs text-rose-400 hover:underline flex items-center gap-1 cursor-pointer"
              >
                <Trash2 className="w-3.5 h-3.5" /> Delete Inquiry
              </button>

              <button
                type="submit"
                disabled={isSending || !replyText.trim()}
                className="py-1.5 px-3.5 bg-[#00d9ff] text-[#061017] text-xs font-bold rounded-lg hover:bg-cyan-300 transition-colors flex items-center gap-1.5 cursor-pointer disabled:opacity-50"
              >
                <Send className="w-3 h-3" /> Save & Mark Replied
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
