import React, { useState } from 'react';
import { 
  FileText, 
  Download, 
  Printer
} from 'lucide-react';
import { IMAGES } from '../images';

export interface CVSectionProps {
  externalModalOpen?: boolean;
  onCloseModal?: () => void;
}

export default function CVSection({ externalModalOpen, onCloseModal }: CVSectionProps = {}) {
  const [internalModalOpen, setInternalModalOpen] = useState(false);
  const [modalTab, setModalTab] = useState<'digital' | 'document'>('digital');

  const isPdfModalOpen = externalModalOpen !== undefined ? externalModalOpen : internalModalOpen;
  const setIsPdfModalOpen = (open: boolean) => {
    if (onCloseModal && !open) onCloseModal();
    setInternalModalOpen(open);
  };

  const handlePrint = () => {
    window.print();
  };

  const handleDownloadPdf = () => {
    const a = document.createElement('a');
    a.href = `/cv_document.jpg?t=${new Date().getTime()}`;
    a.download = 'Muhammad_Ali_CV.jpg';
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
  };

  const skillsWithLevel = [
    { name: 'HTML5', level: 95 },
    { name: 'CSS3', level: 90 },
    { name: 'JavaScript', level: 88 },
    { name: 'Bootstrap', level: 90 },
    { name: 'React.js', level: 86 },
    { name: 'Node.js', level: 82 },
    { name: 'Express.js', level: 80 },
    { name: 'MongoDB', level: 78 },
    { name: 'Git & GitHub', level: 88 },
    { name: 'UI/UX Design', level: 92 },
    { name: 'Adobe Photoshop', level: 94 },
    { name: '3D Modeling', level: 84 },
  ];

  const educationList = [
    {
      degree: 'Bachelor of Science in Computer Science',
      period: '2025 - Present',
      institution: 'Iqra Post Graduate College',
      location: 'Havelian, Abbottabad',
      score: 'Currently Studying'
    },
    {
      degree: 'Intermediate',
      period: '2024',
      institution: 'Pakwattan School and College of Science',
      location: 'Havelian, Abbottabad',
      score: '753/1200 | Grade B'
    },
    {
      degree: 'Matriculation',
      period: '2022',
      institution: 'Al Arqam Academy of Excellence',
      location: 'Havelian, Abbottabad',
      score: '795/1100 | Grade A'
    }
  ];

  const experienceList = [
    {
      role: 'Frontend Developer',
      type: 'Freelance',
      period: '2022 - Present',
      desc: 'Developed responsive and user-friendly websites using HTML, CSS, JavaScript, React and Bootstrap with cross-browser compatibility and optimized loading performance.'
    },
    {
      role: 'Graphic Designer',
      type: 'Freelance',
      period: '2021 - Present',
      desc: 'Designed logos, commercial banners, executive visiting cards, social media marketing posts, and complete brand identities for various corporate and retail clients.'
    },
    {
      role: '3D Designer',
      type: 'Freelance',
      period: '2021 - Present',
      desc: 'Created high-end 3D architectural models, 2D smart floor CAD blueprints, interior & exterior renders for product visualization, walkthroughs, and animations.'
    }
  ];

  const projectsList = [
    {
      title: 'Portfolio Website',
      period: '2024 - Present',
      desc: 'Personal portfolio website built with HTML, CSS, JavaScript & React, featuring 3D virtual exhibition, interactive voice support, and verified feedback verification.'
    },
    {
      title: 'Shooting Game',
      period: '2024 - Present',
      desc: 'A 3D action shooting game developed using Unity and C#, featuring enemy AI navigation, weapon physics, responsive camera rigging, and dynamic lighting.'
    },
    {
      title: 'AI Chat Assistant',
      period: '2025 - Present',
      desc: 'AI based web application integrated with smart conversational features, instant query resolution, and live verified knowledge engine.'
    }
  ];

  if (!isPdfModalOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-2 sm:p-4 bg-black/85 backdrop-blur-md">
      <div className="relative w-full max-w-5xl max-h-[92vh] bg-[#030712] border border-[#00d9ff]/40 rounded-3xl shadow-[0_0_80px_rgba(0,217,255,0.25)] flex flex-col overflow-hidden animate-in fade-in zoom-in duration-200">
        
        {/* Modal Header */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between px-5 py-3.5 bg-[#060c1d] border-b border-white/10 gap-3 shrink-0">
          <div className="flex items-center gap-3">
            <div className="p-2 rounded-xl bg-[#00d9ff]/10 text-[#00d9ff]">
              <FileText className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-sm font-black text-white uppercase tracking-wider">Muhammad Ali — Professional CV</h3>
              <p className="text-[11px] text-slate-400">Verified Curriculum Vitae &amp; Portfolio Document</p>
            </div>
          </div>

          {/* View Switcher Tabs & Actions */}
          <div className="flex flex-wrap items-center gap-2">
            <div className="bg-[#030712] p-1 rounded-xl border border-white/10 flex items-center gap-1">
              <button
                onClick={() => setModalTab('digital')}
                className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all cursor-pointer ${
                  modalTab === 'digital'
                    ? 'bg-[#00d9ff] text-[#03060f] shadow-[0_0_12px_rgba(0,217,255,0.4)]'
                    : 'text-slate-400 hover:text-white'
                }`}
              >
                Interactive CV
              </button>
              <button
                onClick={() => setModalTab('document')}
                className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all cursor-pointer ${
                  modalTab === 'document'
                    ? 'bg-[#00d9ff] text-[#03060f] shadow-[0_0_12px_rgba(0,217,255,0.4)]'
                    : 'text-slate-400 hover:text-white'
                }`}
              >
                1-Page Document
              </button>
            </div>

            <button
              onClick={handleDownloadPdf}
              className="relative group overflow-hidden flex items-center gap-1.5 px-3.5 py-2 rounded-xl bg-gradient-to-r from-[#00d9ff] via-[#38bdf8] to-[#7c5cff] text-[#03060f] font-black text-xs uppercase tracking-wider transition-all duration-300 hover:scale-105 active:scale-95 shadow-[0_0_20px_rgba(0,217,255,0.3)] cursor-pointer"
              title="Download Official CV"
            >
              <Download className="w-3.5 h-3.5" />
              <span className="hidden sm:inline">Download</span>
            </button>
            <button
              onClick={handlePrint}
              className="flex items-center gap-1.5 px-3 py-2 rounded-xl bg-slate-800/80 hover:bg-slate-700/80 border border-white/10 text-white font-bold text-xs uppercase tracking-wider transition-all hover:border-[#00d9ff]/50 shadow-md cursor-pointer"
              title="Print Resume"
            >
              <Printer className="w-3.5 h-3.5 text-[#00d9ff]" />
              <span className="hidden sm:inline">Print</span>
            </button>
            <button
              onClick={() => setIsPdfModalOpen(false)}
              className="p-2 rounded-xl bg-white/5 hover:bg-rose-500/20 text-slate-400 hover:text-rose-400 border border-white/5 hover:border-rose-500/30 transition-all cursor-pointer ml-1"
              title="Close Modal"
            >
              ✕
            </button>
          </div>
        </div>

        {/* Modal Body Preview */}
        <div className="p-4 sm:p-6 overflow-y-auto max-h-[calc(92vh-80px)] bg-[#030712]">
          {modalTab === 'digital' ? (
            <div className="cv-container bg-[#030712] border border-[#00d9ff]/30 rounded-2xl overflow-hidden shadow-[0_0_30px_rgba(0,217,255,0.15)] grid grid-cols-1 lg:grid-cols-[300px_1fr]">
              {/* LEFT COLUMN: Sidebar Profile, Contact, Skills, Languages & Interests */}
              <div className="bg-[#060c1d] border-b lg:border-b-0 lg:border-r border-[#00d9ff]/20 p-5 flex flex-col gap-6">
                {/* Profile Photo */}
                <div className="flex flex-col items-center text-center">
                  <div className="relative w-28 h-28 rounded-full p-1 border-2 border-[#00d9ff] shadow-[0_0_20px_rgba(0,217,255,0.3)] mb-3">
                    <img src={IMAGES.profile} alt="Muhammad Ali" className="w-full h-full object-cover rounded-full" />
                  </div>
                  <h3 className="text-lg font-black text-white uppercase tracking-wide">Muhammad Ali</h3>
                  <p className="text-xs text-[#00d9ff] font-bold mt-0.5">Computer Science Student &amp; Creator</p>
                </div>

                {/* Contact Details */}
                <div className="space-y-2 text-xs">
                  <h4 className="font-black text-[#00d9ff] uppercase text-[11px] border-b border-[#00d9ff]/20 pb-1">Contact Details</h4>
                  <p className="text-slate-300"><strong>TEL:</strong> +92 330 0358799</p>
                  <p className="text-slate-300"><strong>TEL (WA):</strong> +92 342 6793428</p>
                  <p className="text-slate-300 truncate"><strong>MAIL:</strong> alimuhammadhvn81@gmail.com</p>
                  <p className="text-slate-300"><strong>LOC:</strong> Havelian, Abbottabad, KPK</p>
                  <p className="text-slate-300"><strong>WEB:</strong> muhammadali81.github.io</p>
                  <p className="text-slate-300 truncate"><strong>IN:</strong> linkedin.com/in/muhammadali81</p>
                </div>

                {/* Skills */}
                <div className="space-y-2 text-xs">
                  <h4 className="font-black text-[#00d9ff] uppercase text-[11px] border-b border-[#00d9ff]/20 pb-1">Skills &amp; Proficiency</h4>
                  <div className="flex flex-wrap gap-1.5">
                    {skillsWithLevel.map(s => (
                      <span key={s.name} className="px-2 py-0.5 rounded bg-[#00d9ff]/10 text-[#00d9ff] border border-[#00d9ff]/20 text-[10px] font-semibold">
                        {s.name} ({s.level}%)
                      </span>
                    ))}
                  </div>
                </div>

                {/* Languages & Interests */}
                <div className="space-y-2 text-xs">
                  <h4 className="font-black text-[#00d9ff] uppercase text-[11px] border-b border-[#00d9ff]/20 pb-1">Languages &amp; Hobbies</h4>
                  <p className="text-slate-300"><strong>Languages:</strong> Urdu, English, Hindko</p>
                  <p className="text-slate-300"><strong>Interests:</strong> Coding, Gaming, Photography, Designing</p>
                </div>
              </div>

              {/* RIGHT COLUMN */}
              <div className="p-5 sm:p-6 flex flex-col gap-6 bg-[#040817]">
                <div>
                  <h2 className="text-2xl sm:text-3xl font-black text-white uppercase tracking-tight">Muhammad Ali</h2>
                  <p className="text-xs font-bold text-[#00d9ff] mt-1">Web Developer | Game &amp; AI App Developer | Graphic Designer | 3D Designer</p>
                </div>

                <div className="space-y-1.5">
                  <h4 className="text-xs font-black text-[#00d9ff] uppercase border-b border-[#00d9ff]/20 pb-1">About Me</h4>
                  <p className="text-xs text-slate-300 leading-relaxed">
                    I am a passionate Computer Science student with expertise in Web Development, Game &amp; AI App Development, Graphic Design, and 3D Design. I love turning ideas into real world solutions with clean code and creative designs.
                  </p>
                </div>

                <div className="space-y-2">
                  <h4 className="text-xs font-black text-[#00d9ff] uppercase border-b border-[#00d9ff]/20 pb-1">Education</h4>
                  {educationList.map((edu, idx) => (
                    <div key={idx} className="p-2.5 rounded-lg bg-[#091126] border border-white/5 text-xs flex justify-between items-center gap-2">
                      <div>
                        <p className="font-bold text-white">{edu.degree}</p>
                        <p className="text-[11px] text-slate-400">{edu.institution} • {edu.location}</p>
                      </div>
                      <div className="text-right shrink-0">
                        <span className="text-[10px] text-[#00d9ff] font-mono font-bold block">{edu.period}</span>
                        <span className="text-[10px] text-slate-300 font-medium block">{edu.score}</span>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="space-y-2">
                  <h4 className="text-xs font-black text-[#00d9ff] uppercase border-b border-[#00d9ff]/20 pb-1">Experience</h4>
                  {experienceList.map((exp, idx) => (
                    <div key={idx} className="p-2.5 rounded-lg bg-[#091126] border border-white/5 text-xs">
                      <div className="flex justify-between items-center font-bold text-white mb-1">
                        <span>{exp.role} ({exp.type})</span>
                        <span className="text-[#7c5cff] font-mono text-[10px]">{exp.period}</span>
                      </div>
                      <p className="text-[11px] text-slate-300 leading-relaxed">{exp.desc}</p>
                    </div>
                  ))}
                </div>

                <div className="space-y-2">
                  <h4 className="text-xs font-black text-[#00d9ff] uppercase border-b border-[#00d9ff]/20 pb-1">Featured Projects</h4>
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
                    {projectsList.map((p, idx) => (
                      <div key={idx} className="p-2.5 rounded-lg bg-[#091126] border border-white/5 text-xs">
                        <p className="font-bold text-white">{p.title}</p>
                        <p className="text-[10px] text-[#00d9ff] font-mono">{p.period}</p>
                        <p className="text-[11px] text-slate-400 mt-1 line-clamp-2">{p.desc}</p>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-2 text-xs text-slate-400 pt-2 border-t border-white/10">
                  <span>Services: Web Dev • Game &amp; AI Dev • Graphic Design • 3D Design</span>
                  <span className="text-[#00d9ff] italic">References: Available on request</span>
                </div>
              </div>
            </div>
          ) : (
            <div className="flex justify-center items-center">
              <div className="w-full max-w-3xl rounded-2xl overflow-hidden border border-[#00d9ff]/30 shadow-[0_0_30px_rgba(0,217,255,0.2)] bg-black">
                <img 
                  src={`/cv_document.jpg?t=${new Date().getTime()}`} 
                  alt="Muhammad Ali Official CV" 
                  className="w-full h-auto object-contain select-none"
                  onContextMenu={(e) => e.preventDefault()}
                />
              </div>
            </div>
          )}
        </div>

      </div>
    </div>
  );
}
