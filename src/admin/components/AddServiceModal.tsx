import React, { useState } from 'react';
import { Layers, X, PlusCircle } from 'lucide-react';
import { ServiceItem } from '../types';

interface AddServiceModalProps {
  isOpen: boolean;
  onClose: () => void;
  onAddService: (service: ServiceItem) => void;
}

export default function AddServiceModal({ isOpen, onClose, onAddService }: AddServiceModalProps) {
  const [title, setTitle] = useState('');
  const [category, setCategory] = useState('Frontend & Full-Stack');
  const [description, setDescription] = useState('');
  const [startingPrice, setStartingPrice] = useState('$10+');

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!title.trim() || !description.trim()) return;

    const newService: ServiceItem = {
      id: `srv-${Date.now()}`,
      title: title.trim(),
      category,
      description: description.trim(),
      startingPrice: startingPrice.trim() || '$10+',
      iconName: 'Code',
      active: true
    };

    onAddService(newService);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-fade-in">
      <div className="bg-[#0e1422] border border-cyan-500/30 rounded-2xl w-full max-w-lg shadow-2xl overflow-hidden flex flex-col">
        {/* Header */}
        <div className="p-5 border-b border-white/10 flex items-center justify-between bg-[#11192a]">
          <div className="flex items-center gap-3">
            <div className="p-2.5 rounded-xl bg-cyan-500/20 text-cyan-400 border border-cyan-500/30">
              <Layers className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-sm font-bold text-white leading-tight">Add New Service</h3>
              <p className="text-[11px] text-slate-400">Offer a new development or design capability</p>
            </div>
          </div>

          <button onClick={onClose} className="p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-white/10">
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="p-5 space-y-3.5 overflow-y-auto max-h-[75vh] text-xs">
          <div>
            <label className="block text-slate-300 font-semibold mb-1">Service Title</label>
            <input
              type="text"
              required
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              placeholder="e.g. AI Workflow & API Integration"
              className="w-full p-2.5 bg-[#141c2c] border border-white/10 rounded-xl text-white focus:outline-none focus:border-cyan-400"
            />
          </div>

          <div>
            <label className="block text-slate-300 font-semibold mb-1">Category</label>
            <select
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              className="w-full p-2.5 bg-[#141c2c] border border-white/10 rounded-xl text-white focus:outline-none focus:border-cyan-400"
            >
              <option value="Frontend & Full-Stack">Frontend & Full-Stack</option>
              <option value="Interactive & Intelligence">Interactive & Intelligence</option>
              <option value="Branding & Creatives">Branding & Creatives</option>
              <option value="Custom Solutions">Custom Solutions</option>
            </select>
          </div>

          <div>
            <label className="block text-slate-300 font-semibold mb-1">Starting Price Criteria</label>
            <input
              type="text"
              required
              value={startingPrice}
              onChange={(e) => setStartingPrice(e.target.value)}
              placeholder="$10+ (Starts from $10 or above)"
              className="w-full p-2.5 bg-[#141c2c] border border-white/10 rounded-xl text-white focus:outline-none focus:border-cyan-400"
            />
          </div>

          <div>
            <label className="block text-slate-300 font-semibold mb-1">Service Scope & Description</label>
            <textarea
              required
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              placeholder="Detail what client receives, deliverables, and tech stack..."
              className="w-full p-2.5 bg-[#141c2c] border border-white/10 rounded-xl text-white focus:outline-none focus:border-cyan-400 min-h-[85px]"
            />
          </div>

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
              className="px-4 py-2 bg-cyan-400 text-slate-950 font-bold rounded-lg hover:bg-cyan-300 transition-colors flex items-center gap-1.5"
            >
              <PlusCircle className="w-4 h-4" /> Save Service
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
