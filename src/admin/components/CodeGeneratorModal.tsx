import React, { useState } from 'react';
import {
  KeyRound,
  Copy,
  Check,
  ShieldCheck,
  Clock,
  Sparkles,
  X,
  Trash2,
  AlertCircle,
  Search,
  Filter,
  CheckCircle2
} from 'lucide-react';
import { GeneratedCode } from '../types';

interface CodeGeneratorModalProps {
  isOpen: boolean;
  onClose: () => void;
  codes: GeneratedCode[];
  onGenerateCode: (assignedTo?: string, notes?: string) => Promise<GeneratedCode | null>;
  onDeleteCode: (item: GeneratedCode) => void;
}

export default function CodeGeneratorModal({
  isOpen,
  onClose,
  codes,
  onGenerateCode,
  onDeleteCode
}: CodeGeneratorModalProps) {
  const [assignedTo, setAssignedTo] = useState('');
  const [notes, setNotes] = useState('');
  const [latestCode, setLatestCode] = useState<GeneratedCode | null>(null);
  const [copiedCode, setCopiedCode] = useState<string | null>(null);
  const [isGenerating, setIsGenerating] = useState(false);
  const [searchFilter, setSearchFilter] = useState('');
  const [statusFilter, setStatusFilter] = useState<'All' | 'Active' | 'Used'>('All');

  if (!isOpen) return null;

  const handleGenerate = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsGenerating(true);
    try {
      const generated = await onGenerateCode(
        assignedTo.trim() || 'Client',
        notes.trim() || 'Valid until feedback is published by the client'
      );
      if (generated) {
        setLatestCode(generated);
        setAssignedTo('');
        setNotes('');
      }
    } finally {
      setIsGenerating(false);
    }
  };

  const handleCopy = (codeStr: string) => {
    navigator.clipboard.writeText(codeStr);
    setCopiedCode(codeStr);
    setTimeout(() => setCopiedCode(null), 2500);
  };

  const filteredCodes = codes.filter((c) => {
    const matchesSearch =
      c.code.toLowerCase().includes(searchFilter.toLowerCase()) ||
      (c.assignedTo && c.assignedTo.toLowerCase().includes(searchFilter.toLowerCase()));
    const matchesStatus = statusFilter === 'All' ? true : c.status === statusFilter;
    return matchesSearch && matchesStatus;
  });

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-fade-in">
      <div className="bg-[#0e1422] border border-[#00d9ff]/30 rounded-2xl w-full max-w-2xl max-h-[90vh] flex flex-col shadow-2xl overflow-hidden">
        {/* Modal Header */}
        <div className="p-5 border-b border-white/10 flex items-center justify-between bg-[#11192a]">
          <div className="flex items-center gap-3">
            <div className="p-2.5 rounded-xl bg-gradient-to-br from-[#00d9ff]/20 to-[#7c5cff]/20 text-[#00d9ff] border border-[#00d9ff]/30">
              <KeyRound className="w-5 h-5" />
            </div>
            <div>
              <h2 className="text-base font-bold text-white flex items-center gap-2">
                Feedback Code Generator <span className="text-xs text-[#00d9ff] font-mono">Ali-XXXXXX</span>
              </h2>
              <p className="text-xs text-slate-400">
                Generate single-use verification codes for verified client testimonials
              </p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-white/10 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-6 overflow-y-auto space-y-6">
          {/* Validity Guarantee Banner */}
          <div className="p-3.5 bg-gradient-to-r from-[#00d9ff]/10 to-[#7c5cff]/10 border border-[#00d9ff]/20 rounded-xl flex items-start gap-3">
            <ShieldCheck className="w-5 h-5 text-[#00d9ff] shrink-0 mt-0.5" />
            <div className="text-xs">
              <p className="font-bold text-white">Code Validity Rule:</p>
              <p className="text-slate-300 mt-0.5">
                Every generated code begins with <strong className="text-[#00d9ff]">Ali-</strong> and remains <strong>valid & active indefinitely</strong> until the client submits and publishes their feedback. Once published, it is automatically marked as <span className="text-emerald-400 font-bold">Used</span> and retired.
              </p>
            </div>
          </div>

          {/* Generator Form */}
          <form onSubmit={handleGenerate} className="p-4 bg-[#141c2c] border border-white/10 rounded-xl space-y-3">
            <h3 className="text-xs font-bold text-white uppercase tracking-wider flex items-center gap-1.5">
              <Sparkles className="w-3.5 h-3.5 text-amber-400" /> Create New Client Code
            </h3>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div>
                <label className="block text-[11px] font-semibold text-slate-300 mb-1">
                  Assign To Client / Organization (Optional)
                </label>
                <input
                  type="text"
                  value={assignedTo}
                  onChange={(e) => setAssignedTo(e.target.value)}
                  placeholder="e.g. Hamza Khan (Nova Project)"
                  className="w-full px-3 py-2 bg-[#0c111a] border border-white/10 rounded-lg text-xs text-white placeholder-slate-500 focus:outline-none focus:border-[#00d9ff]"
                />
              </div>

              <div>
                <label className="block text-[11px] font-semibold text-slate-300 mb-1">
                  Notes / Work Context (Optional)
                </label>
                <input
                  type="text"
                  value={notes}
                  onChange={(e) => setNotes(e.target.value)}
                  placeholder="e.g. Web Development completion"
                  className="w-full px-3 py-2 bg-[#0c111a] border border-white/10 rounded-lg text-xs text-white placeholder-slate-500 focus:outline-none focus:border-[#00d9ff]"
                />
              </div>
            </div>

            <button
              type="submit"
              disabled={isGenerating}
              className="w-full py-2.5 px-4 bg-gradient-to-r from-[#00d9ff] to-[#00b4d8] text-[#061017] font-bold text-xs rounded-lg hover:shadow-lg hover:shadow-[#00d9ff]/20 transition-all flex items-center justify-center gap-2 cursor-pointer disabled:opacity-60"
            >
              {isGenerating ? (
                <div className="w-4 h-4 border-2 border-[#061017] border-t-transparent rounded-full animate-spin" />
              ) : (
                <>
                  <KeyRound className="w-4 h-4" /> Generate New Ali- Code
                </>
              )}
            </button>
          </form>

          {/* Newly Generated Code Result Card */}
          {latestCode && (
            <div className="p-4 bg-emerald-500/10 border border-emerald-500/30 rounded-xl flex items-center justify-between animate-slide-up">
              <div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                  <span className="text-xs font-bold text-emerald-300">New Code Generated:</span>
                </div>
                <div className="text-xl font-black text-white font-mono tracking-wider mt-1">
                  {latestCode.code}
                </div>
                <p className="text-[11px] text-slate-300 mt-0.5">
                  Assigned to: <strong>{latestCode.assignedTo}</strong> • Status: <span className="text-emerald-400 font-bold">Active (Valid until published)</span>
                </p>
              </div>

              <button
                onClick={() => handleCopy(latestCode.code)}
                className="px-4 py-2 bg-[#00d9ff] text-[#061017] font-bold text-xs rounded-lg hover:bg-cyan-300 transition-colors flex items-center gap-1.5 cursor-pointer shadow"
              >
                {copiedCode === latestCode.code ? (
                  <>
                    <Check className="w-3.5 h-3.5" /> Copied!
                  </>
                ) : (
                  <>
                    <Copy className="w-3.5 h-3.5" /> Copy Code
                  </>
                )}
              </button>
            </div>
          )}

          {/* Code History & Management */}
          <div className="space-y-3">
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2">
              <h3 className="text-xs font-bold text-white uppercase tracking-wider">
                Generated Codes History ({codes.length})
              </h3>

              <div className="flex items-center gap-2 w-full sm:w-auto">
                <div className="relative flex-1 sm:w-44">
                  <Search className="w-3 h-3 absolute left-2.5 top-1/2 -translate-y-1/2 text-slate-400" />
                  <input
                    type="text"
                    value={searchFilter}
                    onChange={(e) => setSearchFilter(e.target.value)}
                    placeholder="Search codes..."
                    className="w-full pl-7 pr-2 py-1 bg-[#141c2c] border border-white/10 rounded-md text-[11px] text-white focus:outline-none focus:border-[#00d9ff]"
                  />
                </div>

                <select
                  value={statusFilter}
                  onChange={(e) => setStatusFilter(e.target.value as any)}
                  className="bg-[#141c2c] border border-white/10 rounded-md text-[11px] text-slate-300 px-2 py-1 focus:outline-none"
                >
                  <option value="All">All Status</option>
                  <option value="Active">Active (Valid)</option>
                  <option value="Used">Used</option>
                </select>
              </div>
            </div>

            <div className="border border-white/10 rounded-xl overflow-hidden divide-y divide-white/5 max-h-56 overflow-y-auto">
              {filteredCodes.length === 0 ? (
                <div className="p-6 text-center text-xs text-slate-400">
                  No matching codes found.
                </div>
              ) : (
                filteredCodes.map((item) => (
                  <div
                    key={item.code}
                    className="p-3 bg-[#111726] hover:bg-white/[0.02] flex items-center justify-between gap-3 text-xs"
                  >
                    <div className="flex items-center gap-3">
                      <span className="font-mono font-bold text-white bg-[#182236] px-2.5 py-1 rounded border border-white/10">
                        {item.code}
                      </span>
                      <div>
                        <p className="font-semibold text-slate-200">{item.assignedTo || 'Unassigned'}</p>
                        <p className="text-[10px] text-slate-400">Created: {item.createdAt} {item.usedAt ? `• Used: ${item.usedAt}` : ''}</p>
                      </div>
                    </div>

                    <div className="flex items-center gap-2">
                      <span
                        className={`px-2 py-0.5 rounded-full text-[10px] font-bold ${
                          item.status === 'Active'
                            ? 'bg-emerald-500/15 text-emerald-400 border border-emerald-500/20'
                            : 'bg-slate-500/15 text-slate-400'
                        }`}
                      >
                        {item.status === 'Active' ? 'Active (Valid)' : item.status}
                      </span>

                      <button
                        onClick={() => handleCopy(item.code)}
                        title="Copy Code"
                        className="p-1.5 rounded bg-white/5 hover:bg-[#00d9ff]/20 text-slate-300 hover:text-[#00d9ff] transition-colors"
                      >
                        {copiedCode === item.code ? (
                          <Check className="w-3.5 h-3.5 text-emerald-400" />
                        ) : (
                          <Copy className="w-3.5 h-3.5" />
                        )}
                      </button>

                      <button
                        onClick={() => onDeleteCode(item)}
                        title="Revoke / Delete Code"
                        className="p-1.5 rounded bg-white/5 hover:bg-rose-500/20 text-slate-400 hover:text-rose-400 transition-colors"
                      >
                        <Trash2 className="w-3.5 h-3.5" />
                      </button>
                    </div>
                  </div>
                ))
              )}
            </div>
          </div>
        </div>

        {/* Modal Footer */}
        <div className="p-4 border-t border-white/10 bg-[#11192a] flex items-center justify-between text-xs text-slate-400">
          <span>Active Codes: <strong className="text-emerald-400">{codes.filter(c => c.status === 'Active').length}</strong></span>
          <button
            onClick={onClose}
            className="px-4 py-1.5 bg-white/10 hover:bg-white/20 text-white font-semibold rounded-lg transition-colors cursor-pointer"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
}
