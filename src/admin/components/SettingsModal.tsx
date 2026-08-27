import React, { useState } from 'react';
import { Settings, X, Save, CheckCircle2, ShieldCheck } from 'lucide-react';

interface SettingsModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function SettingsModal({ isOpen, onClose }: SettingsModalProps) {
  const [whatsapp, setWhatsapp] = useState('+92 342 6793428');
  const [directPhone, setDirectPhone] = useState('+92 330 0358799');
  const [email, setEmail] = useState('alimuhammadhvn81@gmail.com');
  const [minimumBudget, setMinimumBudget] = useState('$10+');
  const [saved, setSaved] = useState(false);

  if (!isOpen) return null;

  const handleSave = (e: React.FormEvent) => {
    e.preventDefault();
    setSaved(true);
    setTimeout(() => {
      setSaved(false);
      onClose();
    }, 1000);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-fade-in">
      <div className="bg-[#0e1422] border border-white/15 rounded-2xl w-full max-w-lg shadow-2xl overflow-hidden flex flex-col">
        {/* Header */}
        <div className="p-5 border-b border-white/10 flex items-center justify-between bg-[#11192a]">
          <div className="flex items-center gap-3">
            <div className="p-2.5 rounded-xl bg-slate-500/20 text-slate-300 border border-white/10">
              <Settings className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-sm font-bold text-white leading-tight">Site & Contact Settings</h3>
              <p className="text-[11px] text-slate-400">Verified portfolio configuration and criteria</p>
            </div>
          </div>

          <button onClick={onClose} className="p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-white/10">
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Form */}
        <form onSubmit={handleSave} className="p-5 space-y-3.5 text-xs">
          <div>
            <label className="block text-slate-300 font-semibold mb-1">WhatsApp Contact Number</label>
            <input
              type="text"
              value={whatsapp}
              onChange={(e) => setWhatsapp(e.target.value)}
              className="w-full p-2.5 bg-[#141c2c] border border-white/10 rounded-xl text-white focus:outline-none focus:border-[#00d9ff]"
            />
          </div>

          <div>
            <label className="block text-slate-300 font-semibold mb-1">Direct Calling Number</label>
            <input
              type="text"
              value={directPhone}
              onChange={(e) => setDirectPhone(e.target.value)}
              className="w-full p-2.5 bg-[#141c2c] border border-white/10 rounded-xl text-white focus:outline-none focus:border-[#00d9ff]"
            />
          </div>

          <div>
            <label className="block text-slate-300 font-semibold mb-1">Admin / Inquiry Email</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full p-2.5 bg-[#141c2c] border border-white/10 rounded-xl text-white focus:outline-none focus:border-[#00d9ff]"
            />
          </div>

          <div>
            <label className="block text-slate-300 font-semibold mb-1">Minimum Budget Criteria</label>
            <input
              type="text"
              value={minimumBudget}
              onChange={(e) => setMinimumBudget(e.target.value)}
              className="w-full p-2.5 bg-[#141c2c] border border-white/10 rounded-xl text-white focus:outline-none focus:border-[#00d9ff]"
            />
            <span className="text-[10px] text-slate-500 mt-0.5 block">Starts from $10 or above ($10+)</span>
          </div>

          {saved && (
            <div className="p-3 bg-emerald-500/15 border border-emerald-500/30 text-emerald-400 rounded-xl flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4" />
              <span>Settings updated successfully!</span>
            </div>
          )}

          <div className="pt-3 flex items-center justify-end gap-2 border-t border-white/5">
            <button
              type="button"
              onClick={onClose}
              className="px-4 py-2 bg-white/5 hover:bg-white/10 text-slate-300 rounded-lg"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="px-4 py-2 bg-[#00d9ff] text-[#061017] font-bold rounded-lg hover:bg-cyan-300 transition-colors flex items-center gap-1.5"
            >
              <Save className="w-4 h-4" /> Save Changes
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
