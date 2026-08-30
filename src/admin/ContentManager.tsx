import React, { useState, useEffect } from 'react';
import { Save, RefreshCw, Plus, Trash2, Info, Layout, User, Briefcase, Star, MessageSquare } from 'lucide-react';
import { doc, getDoc, setDoc } from 'firebase/firestore';
import { getDb } from '../lib/firebase';

interface ContentData {
  personalInfo: {
    name: string;
    role: string;
    email: string;
    whatsapp: string;
    call: string;
  };
  skills: string[];
  education: {
    degree: string;
    institute: string;
    year: string;
  }[];
}

const INITIAL_CONTENT: ContentData = {
  personalInfo: {
    name: 'Muhammad Ali',
    role: 'Full-Stack, AI & 2D Game Developer',
    email: 'alimuhammadhvn81@gmail.com',
    whatsapp: '+92 342 6793428',
    call: '+92 330 0358799'
  },
  skills: [
    'HTML & CSS', 'JavaScript', 'Python', 'C++', 'Web Development',
    'Game Development', 'AI Development', 'Graphic Designing', 'Godot', 'Unity', 'Canva'
  ],
  education: [
    {
      degree: 'BS Computer Science',
      institute: 'Iqra Post Graduate College, Havelian, Abbottabad',
      year: 'Currently Studying — 3rd Semester'
    },
    {
      degree: 'FSc in Computer Science',
      institute: 'Pak Wattan School & College of Science, Havelian, Abbottabad',
      year: 'Completed — 2024'
    }
  ]
};

export default function ContentManager() {
  const db = getDb();
  const [content, setContent] = useState<ContentData>(INITIAL_CONTENT);
  const [isSaving, setIsSaving] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [status, setStatus] = useState('');

  useEffect(() => {
    fetchContent();
  }, []);

  const fetchContent = async () => {
    setIsLoading(true);
    try {
      const docRef = doc(db, 'site_content', 'main');
      const snap = await getDoc(docRef);
      if (snap.exists()) {
        setContent(snap.data() as ContentData);
      } else {
        // Initialize with defaults if not exists
        await setDoc(docRef, INITIAL_CONTENT);
      }
    } catch (e) {
      console.error("Error fetching content:", e);
    } finally {
      setIsLoading(false);
    }
  };

  const handleSave = async () => {
    setIsSaving(true);
    setStatus('Saving...');
    try {
      await setDoc(doc(db, 'site_content', 'main'), content);
      setStatus('Successfully saved!');
      setTimeout(() => setStatus(''), 3000);
    } catch (e) {
      console.error("Error saving content:", e);
      setStatus('Error saving data');
    } finally {
      setIsSaving(false);
    }
  };

  if (isLoading) {
    return (
      <div className="flex items-center justify-center h-64">
        <RefreshCw className="w-8 h-8 text-[#00d9ff] animate-spin" />
      </div>
    );
  }

  return (
    <div className="space-y-6 animate-fadeIn">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-xl font-black text-white">Content Manager</h2>
          <p className="text-xs text-slate-400">Edit your portfolio data and personal info</p>
        </div>
        <button
          onClick={handleSave}
          disabled={isSaving}
          className="px-4 py-2 bg-[#00d9ff] text-[#061017] font-bold text-xs rounded-xl hover:bg-cyan-300 transition-all flex items-center gap-2 shadow-lg disabled:opacity-50"
        >
          {isSaving ? <RefreshCw className="w-3.5 h-3.5 animate-spin" /> : <Save className="w-3.5 h-3.5" />}
          {isSaving ? 'Saving...' : 'Save Changes'}
        </button>
      </div>

      {status && (
        <div className={`p-3 rounded-xl text-xs font-bold ${status.includes('Error') ? 'bg-red-500/10 text-red-400 border border-red-500/20' : 'bg-emerald-500/10 text-emerald-400 border border-emerald-500/20'}`}>
          {status}
        </div>
      )}

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Personal Info */}
        <section className="bg-[#0f1523] border border-white/10 rounded-2xl p-5 space-y-4">
          <div className="flex items-center gap-2 pb-3 border-b border-white/5">
            <User className="w-4 h-4 text-[#00d9ff]" />
            <h3 className="text-sm font-bold text-white uppercase tracking-wider">Personal Info</h3>
          </div>
          
          <div className="space-y-3">
            <div>
              <label className="text-[10px] font-bold text-slate-500 uppercase mb-1 block">Full Name</label>
              <input
                type="text"
                value={content.personalInfo.name}
                onChange={(e) => setContent({...content, personalInfo: {...content.personalInfo, name: e.target.value}})}
                className="w-full bg-[#070b14] border border-white/10 rounded-lg px-3 py-2 text-xs text-white focus:border-[#00d9ff] outline-none"
              />
            </div>
            <div>
              <label className="text-[10px] font-bold text-slate-500 uppercase mb-1 block">Role / Title</label>
              <input
                type="text"
                value={content.personalInfo.role}
                onChange={(e) => setContent({...content, personalInfo: {...content.personalInfo, role: e.target.value}})}
                className="w-full bg-[#070b14] border border-white/10 rounded-lg px-3 py-2 text-xs text-white focus:border-[#00d9ff] outline-none"
              />
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div>
                <label className="text-[10px] font-bold text-slate-500 uppercase mb-1 block">WhatsApp</label>
                <input
                  type="text"
                  value={content.personalInfo.whatsapp}
                  onChange={(e) => setContent({...content, personalInfo: {...content.personalInfo, whatsapp: e.target.value}})}
                  className="w-full bg-[#070b14] border border-white/10 rounded-lg px-3 py-2 text-xs text-white focus:border-[#00d9ff] outline-none"
                />
              </div>
              <div>
                <label className="text-[10px] font-bold text-slate-500 uppercase mb-1 block">Call Number</label>
                <input
                  type="text"
                  value={content.personalInfo.call}
                  onChange={(e) => setContent({...content, personalInfo: {...content.personalInfo, call: e.target.value}})}
                  className="w-full bg-[#070b14] border border-white/10 rounded-lg px-3 py-2 text-xs text-white focus:border-[#00d9ff] outline-none"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Skills */}
        <section className="bg-[#0f1523] border border-white/10 rounded-2xl p-5 space-y-4">
          <div className="flex items-center gap-2 pb-3 border-b border-white/5">
            <Layout className="w-4 h-4 text-[#00d9ff]" />
            <h3 className="text-sm font-bold text-white uppercase tracking-wider">Skills</h3>
          </div>
          
          <div className="flex flex-wrap gap-2">
            {content.skills.map((skill, idx) => (
              <div key={idx} className="flex items-center gap-1.5 px-2.5 py-1.5 bg-[#070b14] border border-white/10 rounded-lg text-[10px] text-slate-300">
                <span>{skill}</span>
                <button
                  onClick={() => setContent({...content, skills: content.skills.filter((_, i) => i !== idx)})}
                  className="text-slate-500 hover:text-red-400"
                >
                  <X className="w-3 h-3" />
                </button>
              </div>
            ))}
            <button
              onClick={() => {
                const s = prompt('Enter new skill:');
                if (s) setContent({...content, skills: [...content.skills, s]});
              }}
              className="px-2.5 py-1.5 bg-[#00d9ff]/10 border border-[#00d9ff]/30 rounded-lg text-[10px] text-[#00d9ff] font-bold hover:bg-[#00d9ff]/20 transition-all"
            >
              + Add Skill
            </button>
          </div>
        </section>

        {/* Education */}
        <section className="bg-[#0f1523] border border-white/10 rounded-2xl p-5 space-y-4 lg:col-span-2">
          <div className="flex items-center gap-2 pb-3 border-b border-white/5">
            <Briefcase className="w-4 h-4 text-[#00d9ff]" />
            <h3 className="text-sm font-bold text-white uppercase tracking-wider">Education</h3>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {content.education.map((edu, idx) => (
              <div key={idx} className="p-4 bg-[#070b14] border border-white/10 rounded-xl relative group">
                <button
                  onClick={() => setContent({...content, education: content.education.filter((_, i) => i !== idx)})}
                  className="absolute top-2 right-2 text-slate-500 hover:text-red-400 opacity-0 group-hover:opacity-100 transition-opacity"
                >
                  <Trash2 className="w-3.5 h-3.5" />
                </button>
                <div className="space-y-3">
                  <input
                    type="text"
                    placeholder="Degree"
                    value={edu.degree}
                    onChange={(e) => {
                      const newEdu = [...content.education];
                      newEdu[idx].degree = e.target.value;
                      setContent({...content, education: newEdu});
                    }}
                    className="w-full bg-transparent border-b border-white/10 py-1 text-xs text-white font-bold outline-none focus:border-[#00d9ff]"
                  />
                  <input
                    type="text"
                    placeholder="Institute"
                    value={edu.institute}
                    onChange={(e) => {
                      const newEdu = [...content.education];
                      newEdu[idx].institute = e.target.value;
                      setContent({...content, education: newEdu});
                    }}
                    className="w-full bg-transparent border-b border-white/10 py-1 text-[10px] text-slate-400 outline-none focus:border-[#00d9ff]"
                  />
                  <input
                    type="text"
                    placeholder="Year / Duration"
                    value={edu.year}
                    onChange={(e) => {
                      const newEdu = [...content.education];
                      newEdu[idx].year = e.target.value;
                      setContent({...content, education: newEdu});
                    }}
                    className="w-full bg-transparent border-b border-white/10 py-1 text-[10px] text-[#00d9ff] font-medium outline-none focus:border-[#00d9ff]"
                  />
                </div>
              </div>
            ))}
            <button
              onClick={() => setContent({...content, education: [...content.education, { degree: '', institute: '', year: '' }]})}
              className="flex items-center justify-center gap-2 p-6 border-2 border-dashed border-white/10 rounded-xl text-slate-500 hover:border-[#00d9ff]/50 hover:text-[#00d9ff] transition-all"
            >
              <Plus className="w-5 h-5" />
              <span className="text-xs font-bold uppercase tracking-widest">Add Education</span>
            </button>
          </div>
        </section>
      </div>
    </div>
  );
}

function X({ className }: { className?: string }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <path d="M18 6 6 18"/><path d="m6 6 12 12"/>
    </svg>
  );
}
