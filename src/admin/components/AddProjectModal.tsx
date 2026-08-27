import React, { useState } from 'react';
import { FolderGit2, X, PlusCircle, CheckCircle2 } from 'lucide-react';
import { ProjectItem } from '../types';

interface AddProjectModalProps {
  isOpen: boolean;
  onClose: () => void;
  onAddProject: (project: ProjectItem) => void;
}

export default function AddProjectModal({ isOpen, onClose, onAddProject }: AddProjectModalProps) {
  const [title, setTitle] = useState('');
  const [category, setCategory] = useState('Web Development');
  const [description, setDescription] = useState('');
  const [tags, setTags] = useState('React, TypeScript, Tailwind');
  const [liveUrl, setLiveUrl] = useState('');
  const [githubUrl, setGithubUrl] = useState('');

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!title.trim() || !description.trim()) return;

    const newProject: ProjectItem = {
      id: `prj-${Date.now()}`,
      title: title.trim(),
      category,
      description: description.trim(),
      tags: tags.split(',').map(t => t.trim()).filter(Boolean),
      liveUrl: liveUrl.trim() || undefined,
      githubUrl: githubUrl.trim() || undefined,
      date: '2025'
    };

    onAddProject(newProject);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-fade-in">
      <div className="bg-[#0e1422] border border-amber-500/30 rounded-2xl w-full max-w-lg shadow-2xl overflow-hidden flex flex-col">
        {/* Header */}
        <div className="p-5 border-b border-white/10 flex items-center justify-between bg-[#11192a]">
          <div className="flex items-center gap-3">
            <div className="p-2.5 rounded-xl bg-amber-500/20 text-amber-400 border border-amber-500/30">
              <FolderGit2 className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-sm font-bold text-white leading-tight">Add New Project</h3>
              <p className="text-[11px] text-slate-400">Publish a new showcase project to the portfolio</p>
            </div>
          </div>

          <button onClick={onClose} className="p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-white/10">
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="p-5 space-y-3.5 overflow-y-auto max-h-[75vh] text-xs">
          <div>
            <label className="block text-slate-300 font-semibold mb-1">Project Title</label>
            <input
              type="text"
              required
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              placeholder="e.g. NextGen Web Agency Portal"
              className="w-full p-2.5 bg-[#141c2c] border border-white/10 rounded-xl text-white focus:outline-none focus:border-amber-400"
            />
          </div>

          <div>
            <label className="block text-slate-300 font-semibold mb-1">Category</label>
            <select
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              className="w-full p-2.5 bg-[#141c2c] border border-white/10 rounded-xl text-white focus:outline-none focus:border-amber-400"
            >
              <option value="Web Development">Web Development</option>
              <option value="Game Development">Game Development</option>
              <option value="AI & Apps">AI & Apps</option>
              <option value="Graphic Design">Graphic Design & 2D</option>
            </select>
          </div>

          <div>
            <label className="block text-slate-300 font-semibold mb-1">Description</label>
            <textarea
              required
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              placeholder="Brief description of the project, features, and architecture..."
              className="w-full p-2.5 bg-[#141c2c] border border-white/10 rounded-xl text-white focus:outline-none focus:border-amber-400 min-h-[75px]"
            />
          </div>

          <div>
            <label className="block text-slate-300 font-semibold mb-1">Tech Stack Tags (Comma separated)</label>
            <input
              type="text"
              value={tags}
              onChange={(e) => setTags(e.target.value)}
              placeholder="React, TypeScript, Tailwind, Python"
              className="w-full p-2.5 bg-[#141c2c] border border-white/10 rounded-xl text-white focus:outline-none focus:border-amber-400"
            />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <div>
              <label className="block text-slate-300 font-semibold mb-1">Live URL (Optional)</label>
              <input
                type="url"
                value={liveUrl}
                onChange={(e) => setLiveUrl(e.target.value)}
                placeholder="https://..."
                className="w-full p-2.5 bg-[#141c2c] border border-white/10 rounded-xl text-white focus:outline-none focus:border-amber-400"
              />
            </div>
            <div>
              <label className="block text-slate-300 font-semibold mb-1">GitHub URL (Optional)</label>
              <input
                type="url"
                value={githubUrl}
                onChange={(e) => setGithubUrl(e.target.value)}
                placeholder="https://github.com/..."
                className="w-full p-2.5 bg-[#141c2c] border border-white/10 rounded-xl text-white focus:outline-none focus:border-amber-400"
              />
            </div>
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
              className="px-4 py-2 bg-amber-400 text-slate-950 font-bold rounded-lg hover:bg-amber-300 transition-colors flex items-center gap-1.5"
            >
              <PlusCircle className="w-4 h-4" /> Save Project
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
