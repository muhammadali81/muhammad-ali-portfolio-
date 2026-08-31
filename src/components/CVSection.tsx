import React, { useState } from 'react';
import { 
  FileText, 
  Download, 
  Printer, 
  Phone, 
  Mail, 
  MapPin, 
  Globe, 
  Linkedin, 
  GraduationCap, 
  Briefcase, 
  Code, 
  Layers, 
  Sparkles, 
  CheckCircle2, 
  Copy, 
  Check, 
  ExternalLink,
  Award,
  Gamepad2,
  Camera,
  Palette,
  Bot
} from 'lucide-react';
import { motion } from 'motion/react';
import { IMAGES } from '../images';

export interface CVSectionProps {
  externalModalOpen?: boolean;
  onCloseModal?: () => void;
}

export default function CVSection({ externalModalOpen, onCloseModal }: CVSectionProps = {}) {
  const [copiedContact, setCopiedContact] = useState(false);
  const [internalModalOpen, setInternalModalOpen] = useState(false);

  const isPdfModalOpen = externalModalOpen !== undefined ? externalModalOpen : internalModalOpen;
  const setIsPdfModalOpen = (open: boolean) => {
    if (onCloseModal && !open) onCloseModal();
    setInternalModalOpen(open);
  };

  const handlePrint = () => {
    window.print();
  };

  const handleDownloadPdf = () => {
    const cvContent = `MUHAMMAD ALI\nWeb Developer | Game & AI App Developer | Graphic Designer | 3D Designer\n\nCONTACT:\n- Phone: +92 330 0358799 / +92 342 6793428\n- Email: alimuhammadhvn81@gmail.com\n- Location: Havelian, Abbottabad, KPK\n- Portfolio: muhammadali81.github.io\n- LinkedIn: linkedin.com/in/muhammadali81\n\nABOUT ME:\nI am a passionate and dedicated Computer Science student with expertise in Web Development, Game & AI App Development, Graphic Design, and 3D Design.\n\nEDUCATION:\n- BS Computer Science (2025 - Present) - Iqra Post Graduate College\n- Intermediate (2024) - Pakwattan School and College of Science (753/1200 | Grade B)\n- Matriculation (2022) - Al Arqam Academy of Excellence (795/1100 | Grade A)\n\nEXPERIENCE:\n- Frontend Developer (2022 - Present) - Freelance\n- Graphic Designer (2021 - Present) - Freelance\n- 3D Designer (2021 - Present) - Freelance\n\nSKILLS:\nHTML5, CSS3, JavaScript, Bootstrap, React.js, Node.js, Express.js, MongoDB, Git & GitHub, UI/UX Design, Adobe Photoshop, 3D Modeling\n\nLANGUAGES:\nUrdu, English, Hindko\n\nINTERESTS:\nCoding, Gaming, Photography, Designing`;
    
    const blob = new Blob([cvContent], { type: 'application/pdf' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'Muhammad_Ali_CV.pdf';
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  };

  const handleCopyContact = () => {
    const text = `Muhammad Ali - Web & AI Developer | Graphic & 3D Designer\nPhone: +92 330 0358799 / +92 342 6793428\nEmail: alimuhammadhvn81@gmail.com\nLocation: Havelian, Abbottabad, KPK\nPortfolio: muhammadali81.github.io\nLinkedIn: linkedin.com/in/muhammadali81`;
    navigator.clipboard.writeText(text);
    setCopiedContact(true);
    setTimeout(() => setCopiedContact(false), 2500);
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
      desc: 'Personal portfolio website built with HTML, CSS, JavaScript & React, featuring 3D virtual exhibition, interactive voice support, and verified feedback verification.',
      icon: Globe,
      tag: 'Web & UI'
    },
    {
      title: 'Shooting Game',
      period: '2024 - Present',
      desc: 'A 3D action shooting game developed using Unity and C#, featuring enemy AI navigation, weapon physics, responsive camera rigging, and dynamic lighting.',
      icon: Gamepad2,
      tag: 'Game Dev (Unity)'
    },
    {
      title: 'AI Chat Assistant',
      period: '2025 - Present',
      desc: 'AI based web application integrated with smart conversational features, instant query resolution, and live verified knowledge engine.',
      icon: Bot,
      tag: 'AI & Full Stack'
    }
  ];

  return (
    <section id="cv" className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto relative print:p-0 print:m-0 print:max-w-none">
      {/* Background Decorative Lighting */}
      <div className="absolute top-1/4 -left-20 w-80 h-80 bg-[#00d9ff]/10 rounded-full blur-3xl pointer-events-none print:hidden" />
      <div className="absolute bottom-1/4 -right-20 w-80 h-80 bg-[#7c5cff]/10 rounded-full blur-3xl pointer-events-none print:hidden" />

      {/* Section Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6 print:hidden">
        <div>
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-[#00d9ff]/30 bg-[#00d9ff]/10 text-[#00d9ff] text-xs font-bold tracking-widest uppercase mb-3">
            <FileText className="w-3.5 h-3.5" />
            <span>Curriculum Vitae</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight">
            Professional <span className="text-[#00d9ff]">CV &amp; Resume</span>
          </h2>
          <p className="text-slate-400 text-sm sm:text-base mt-2 max-w-2xl">
            Verified academic background, professional freelance experience, technical skill levels, and portfolio achievements.
          </p>
        </div>

        {/* Action Toolbar */}
        <div className="flex flex-wrap items-center gap-3">
          <button
            onClick={handleCopyContact}
            className="flex items-center gap-2 px-4 py-2.5 rounded-xl bg-slate-900/90 hover:bg-slate-800 border border-white/10 text-xs font-bold text-slate-200 transition-all hover:border-[#00d9ff]/50 shadow-md cursor-pointer"
            title="Copy contact details"
          >
            {copiedContact ? (
              <>
                <Check className="w-4 h-4 text-emerald-400" />
                <span className="text-emerald-400">Copied to Clipboard!</span>
              </>
            ) : (
              <>
                <Copy className="w-4 h-4 text-[#00d9ff]" />
                <span>Copy Info</span>
              </>
            )}
          </button>

          <button
            onClick={() => setIsPdfModalOpen(true)}
            className="flex items-center gap-2 px-5 py-2.5 rounded-xl bg-gradient-to-r from-[#00d9ff] to-[#7c5cff] text-[#03060f] font-black text-xs uppercase tracking-wider transition-all duration-300 hover:scale-105 shadow-[0_0_20px_rgba(0,217,255,0.3)] cursor-pointer"
            title="Open, Print or Save CV as PDF"
          >
            <Printer className="w-4 h-4" />
            <span>Print / Save PDF</span>
          </button>
        </div>
      </div>

      {/* Main CV Board - Designed in the exact style of the uploaded CV */}
      <div className="cv-container bg-[#030712] border border-[#00d9ff]/30 rounded-3xl overflow-hidden shadow-[0_0_50px_rgba(0,217,255,0.15)] grid grid-cols-1 lg:grid-cols-[340px_1fr] print:border-none print:shadow-none print:rounded-none">
        
        {/* ========================================================================= */}
        {/* LEFT COLUMN: Sidebar Profile, Contact, Skills, Languages & Interests */}
        {/* ========================================================================= */}
        <div className="bg-[#060c1d] border-b lg:border-b-0 lg:border-r border-[#00d9ff]/20 p-6 sm:p-8 flex flex-col gap-8">
          
          {/* Profile Photo with Cyan Halo */}
          <div className="flex flex-col items-center text-center">
            <div className="relative w-36 h-36 sm:w-40 sm:h-40 rounded-full p-1.5 border-2 border-[#00d9ff] shadow-[0_0_30px_rgba(0,217,255,0.3)] mb-4">
              <img
                src={IMAGES.profile}
                alt="Muhammad Ali"
                className="w-full h-full object-cover rounded-full"
              />
              <span className="absolute bottom-2 right-2 w-4 h-4 bg-emerald-400 rounded-full border-2 border-[#060c1d] shadow-sm" />
            </div>
            <h3 className="text-xl font-black text-white tracking-wider uppercase">
              Muhammad Ali
            </h3>
            <p className="text-xs text-[#00d9ff] font-bold mt-1 tracking-wide">
              Computer Science Student &amp; Creator
            </p>
          </div>

          {/* CONTACT Section */}
          <div className="space-y-3">
            <div className="flex items-center gap-2 text-xs font-black text-[#00d9ff] uppercase tracking-widest pb-1 border-b border-[#00d9ff]/20">
              <span className="w-2 h-2 rounded-full bg-[#00d9ff]" />
              <h4>Contact</h4>
            </div>

            <div className="space-y-2.5 text-xs text-slate-300">
              <a 
                href="tel:+923300358799" 
                className="flex items-center gap-2.5 p-2 rounded-lg hover:bg-white/5 transition-colors group"
              >
                <div className="w-6 h-6 rounded bg-[#00d9ff]/10 flex items-center justify-center text-[#00d9ff] shrink-0">
                  <Phone className="w-3.5 h-3.5" />
                </div>
                <div className="flex flex-col">
                  <span className="text-[10px] text-slate-500 font-mono">TEL (Direct)</span>
                  <span className="font-bold text-slate-200 group-hover:text-[#00d9ff]">+92 330 0358799</span>
                </div>
              </a>

              <a 
                href="https://wa.me/923426793428" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="flex items-center gap-2.5 p-2 rounded-lg hover:bg-white/5 transition-colors group"
              >
                <div className="w-6 h-6 rounded bg-[#00d9ff]/10 flex items-center justify-center text-[#00d9ff] shrink-0">
                  <Phone className="w-3.5 h-3.5" />
                </div>
                <div className="flex flex-col">
                  <span className="text-[10px] text-slate-500 font-mono">TEL (WhatsApp)</span>
                  <span className="font-bold text-slate-200 group-hover:text-[#00d9ff]">+92 342 6793428</span>
                </div>
              </a>

              <a 
                href="mailto:alimuhammadhvn81@gmail.com" 
                className="flex items-center gap-2.5 p-2 rounded-lg hover:bg-white/5 transition-colors group"
              >
                <div className="w-6 h-6 rounded bg-[#00d9ff]/10 flex items-center justify-center text-[#00d9ff] shrink-0">
                  <Mail className="w-3.5 h-3.5" />
                </div>
                <div className="flex flex-col min-w-0">
                  <span className="text-[10px] text-slate-500 font-mono">MAIL</span>
                  <span className="font-medium text-slate-200 group-hover:text-[#00d9ff] truncate">alimuhammadhvn81@gmail.com</span>
                </div>
              </a>

              <div className="flex items-center gap-2.5 p-2 rounded-lg">
                <div className="w-6 h-6 rounded bg-[#00d9ff]/10 flex items-center justify-center text-[#00d9ff] shrink-0">
                  <MapPin className="w-3.5 h-3.5" />
                </div>
                <div className="flex flex-col">
                  <span className="text-[10px] text-slate-500 font-mono">LOC</span>
                  <span className="font-medium text-slate-200">Havelian, Abbottabad, KPK</span>
                </div>
              </div>

              <a 
                href="https://muhammadali81.github.io" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="flex items-center gap-2.5 p-2 rounded-lg hover:bg-white/5 transition-colors group"
              >
                <div className="w-6 h-6 rounded bg-[#00d9ff]/10 flex items-center justify-center text-[#00d9ff] shrink-0">
                  <Globe className="w-3.5 h-3.5" />
                </div>
                <div className="flex flex-col">
                  <span className="text-[10px] text-slate-500 font-mono">WEB</span>
                  <span className="font-medium text-slate-200 group-hover:text-[#00d9ff]">muhammadali81.github.io</span>
                </div>
              </a>

              <a 
                href="https://linkedin.com/in/muhammadali81" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="flex items-center gap-2.5 p-2 rounded-lg hover:bg-white/5 transition-colors group"
              >
                <div className="w-6 h-6 rounded bg-[#00d9ff]/10 flex items-center justify-center text-[#00d9ff] shrink-0">
                  <Linkedin className="w-3.5 h-3.5" />
                </div>
                <div className="flex flex-col">
                  <span className="text-[10px] text-slate-500 font-mono">IN</span>
                  <span className="font-medium text-slate-200 group-hover:text-[#00d9ff]">linkedin.com/in/muhammadali81</span>
                </div>
              </a>
            </div>
          </div>

          {/* SKILLS Section with Progress Bars */}
          <div className="space-y-3">
            <div className="flex items-center gap-2 text-xs font-black text-[#00d9ff] uppercase tracking-widest pb-1 border-b border-[#00d9ff]/20">
              <span className="w-2 h-2 rounded-full bg-[#00d9ff]" />
              <h4>Skills</h4>
            </div>

            <div className="space-y-2.5">
              {skillsWithLevel.map(skill => (
                <div key={skill.name} className="space-y-1">
                  <div className="flex justify-between items-center text-xs">
                    <span className="text-slate-300 font-medium">{skill.name}</span>
                    <span className="text-[10px] font-mono text-[#00d9ff]">{skill.level}%</span>
                  </div>
                  <div className="h-1.5 w-full bg-[#0f172a] rounded-full overflow-hidden border border-white/5">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: `${skill.level}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.8, ease: 'easeOut' }}
                      className="h-full bg-gradient-to-r from-[#00d9ff] to-[#7c5cff] rounded-full shadow-[0_0_8px_rgba(0,217,255,0.4)]"
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* LANGUAGES Section */}
          <div className="space-y-3">
            <div className="flex items-center gap-2 text-xs font-black text-[#00d9ff] uppercase tracking-widest pb-1 border-b border-[#00d9ff]/20">
              <span className="w-2 h-2 rounded-full bg-[#00d9ff]" />
              <h4>Languages</h4>
            </div>

            <div className="grid grid-cols-3 gap-2">
              <div className="p-2 rounded-lg bg-[#0c142b] border border-white/5 text-center">
                <span className="text-xs font-bold text-white block">Urdu</span>
                <span className="text-[9px] text-[#00d9ff] block mt-0.5">Native</span>
              </div>
              <div className="p-2 rounded-lg bg-[#0c142b] border border-white/5 text-center">
                <span className="text-xs font-bold text-white block">English</span>
                <span className="text-[9px] text-[#00d9ff] block mt-0.5">Fluent</span>
              </div>
              <div className="p-2 rounded-lg bg-[#0c142b] border border-white/5 text-center">
                <span className="text-xs font-bold text-white block">Hindko</span>
                <span className="text-[9px] text-[#00d9ff] block mt-0.5">Native</span>
              </div>
            </div>
          </div>

          {/* INTERESTS Section */}
          <div className="space-y-3">
            <div className="flex items-center gap-2 text-xs font-black text-[#00d9ff] uppercase tracking-widest pb-1 border-b border-[#00d9ff]/20">
              <span className="w-2 h-2 rounded-full bg-[#00d9ff]" />
              <h4>Interests</h4>
            </div>

            <div className="grid grid-cols-2 gap-2">
              <div className="flex items-center gap-2 p-2 rounded-lg bg-[#0c142b] border border-white/5">
                <Code className="w-3.5 h-3.5 text-[#00d9ff]" />
                <span className="text-xs text-slate-300 font-medium">Coding</span>
              </div>
              <div className="flex items-center gap-2 p-2 rounded-lg bg-[#0c142b] border border-white/5">
                <Gamepad2 className="w-3.5 h-3.5 text-[#00d9ff]" />
                <span className="text-xs text-slate-300 font-medium">Gaming</span>
              </div>
              <div className="flex items-center gap-2 p-2 rounded-lg bg-[#0c142b] border border-white/5">
                <Camera className="w-3.5 h-3.5 text-[#00d9ff]" />
                <span className="text-xs text-slate-300 font-medium">Photography</span>
              </div>
              <div className="flex items-center gap-2 p-2 rounded-lg bg-[#0c142b] border border-white/5">
                <Palette className="w-3.5 h-3.5 text-[#00d9ff]" />
                <span className="text-xs text-slate-300 font-medium">Designing</span>
              </div>
            </div>
          </div>

        </div>

        {/* ========================================================================= */}
        {/* RIGHT COLUMN: Header, About, Education, Experience, Projects, Services */}
        {/* ========================================================================= */}
        <div className="p-6 sm:p-10 flex flex-col gap-10 bg-[#040817]">
          
          {/* Main Title & Role Banner */}
          <div className="border-b border-[#00d9ff]/20 pb-6">
            <h1 className="text-3xl sm:text-5xl font-black text-white tracking-tight uppercase leading-none">
              Muhammad Ali
            </h1>
            <p className="text-xs sm:text-sm md:text-base font-bold text-[#00d9ff] mt-2.5 tracking-wide flex flex-wrap items-center gap-2">
              <span>Web Developer</span>
              <span className="text-slate-600">|</span>
              <span>Game &amp; AI App Developer</span>
              <span className="text-slate-600">|</span>
              <span>Graphic Designer</span>
              <span className="text-slate-600">|</span>
              <span>3D Designer</span>
            </p>
          </div>

          {/* ABOUT ME */}
          <div className="space-y-3">
            <div className="flex items-center gap-2.5 text-sm font-black text-[#00d9ff] uppercase tracking-widest pb-1 border-b border-[#00d9ff]/20">
              <span className="w-2.5 h-2.5 rounded-full bg-[#00d9ff]" />
              <h3>About Me</h3>
            </div>
            <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
              I am a passionate and dedicated Computer Science student with expertise in Web Development, Game &amp; AI
              App Development, Graphic Design, and 3D Design. I love turning ideas into real world solutions with
              clean code and creative designs.
            </p>
          </div>

          {/* EDUCATION */}
          <div className="space-y-4">
            <div className="flex items-center gap-2.5 text-sm font-black text-[#00d9ff] uppercase tracking-widest pb-1 border-b border-[#00d9ff]/20">
              <span className="w-2.5 h-2.5 rounded-full bg-[#00d9ff]" />
              <h3>Education</h3>
            </div>

            <div className="space-y-4">
              {educationList.map((edu, idx) => (
                <div 
                  key={idx} 
                  className="p-4 rounded-xl bg-[#091126] border border-white/5 hover:border-[#00d9ff]/30 transition-all flex flex-col sm:flex-row sm:items-center justify-between gap-2"
                >
                  <div className="space-y-1">
                    <div className="flex items-center gap-2">
                      <GraduationCap className="w-4 h-4 text-[#00d9ff] shrink-0" />
                      <h4 className="text-sm font-bold text-white">{edu.degree}</h4>
                    </div>
                    <p className="text-xs text-slate-400 ml-6">{edu.institution} • <span className="text-slate-500">{edu.location}</span></p>
                  </div>

                  <div className="flex sm:flex-col items-center sm:items-end justify-between sm:justify-center gap-1 shrink-0 pt-2 sm:pt-0 border-t sm:border-t-0 border-white/5">
                    <span className="px-2.5 py-0.5 rounded-full text-[10px] font-mono font-bold bg-[#00d9ff]/10 text-[#00d9ff] border border-[#00d9ff]/30">
                      {edu.period}
                    </span>
                    <span className="text-[11px] font-semibold text-slate-300">{edu.score}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* EXPERIENCE */}
          <div className="space-y-4">
            <div className="flex items-center gap-2.5 text-sm font-black text-[#00d9ff] uppercase tracking-widest pb-1 border-b border-[#00d9ff]/20">
              <span className="w-2.5 h-2.5 rounded-full bg-[#00d9ff]" />
              <h3>Experience</h3>
            </div>

            <div className="space-y-4">
              {experienceList.map((exp, idx) => (
                <div 
                  key={idx} 
                  className="p-4 rounded-xl bg-[#091126] border border-white/5 hover:border-[#00d9ff]/30 transition-all space-y-2"
                >
                  <div className="flex flex-wrap items-center justify-between gap-2">
                    <div className="flex items-center gap-2">
                      <Briefcase className="w-4 h-4 text-[#00d9ff] shrink-0" />
                      <h4 className="text-sm font-bold text-white">{exp.role}</h4>
                      <span className="text-xs text-slate-400">({exp.type})</span>
                    </div>
                    <span className="px-2.5 py-0.5 rounded-full text-[10px] font-mono font-bold bg-[#7c5cff]/15 text-[#7c5cff] border border-[#7c5cff]/30">
                      {exp.period}
                    </span>
                  </div>
                  <p className="text-xs text-slate-300 leading-relaxed ml-6">
                    {exp.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* PROJECTS */}
          <div className="space-y-4">
            <div className="flex items-center gap-2.5 text-sm font-black text-[#00d9ff] uppercase tracking-widest pb-1 border-b border-[#00d9ff]/20">
              <span className="w-2.5 h-2.5 rounded-full bg-[#00d9ff]" />
              <h3>Projects</h3>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {projectsList.map((prj, idx) => {
                const IconComponent = prj.icon;
                return (
                  <div 
                    key={idx} 
                    className="p-4 rounded-xl bg-[#091126] border border-white/5 hover:border-[#00d9ff]/40 transition-all flex flex-col justify-between group"
                  >
                    <div>
                      <div className="flex items-center justify-between mb-2">
                        <div className="w-8 h-8 rounded-lg bg-[#00d9ff]/10 border border-[#00d9ff]/30 flex items-center justify-center text-[#00d9ff] group-hover:scale-110 transition-transform">
                          <IconComponent className="w-4 h-4" />
                        </div>
                        <span className="text-[10px] font-mono text-[#00d9ff] bg-[#00d9ff]/10 px-2 py-0.5 rounded border border-[#00d9ff]/20">
                          {prj.period}
                        </span>
                      </div>
                      <h4 className="text-sm font-bold text-white group-hover:text-[#00d9ff] transition-colors">
                        {prj.title}
                      </h4>
                      <p className="text-xs text-slate-400 mt-1.5 leading-relaxed">
                        {prj.desc}
                      </p>
                    </div>

                    <div className="mt-4 pt-2 border-t border-white/5 flex items-center justify-between text-[10px] text-slate-500 font-mono">
                      <span>{prj.tag}</span>
                      <span className="text-[#00d9ff]">Active</span>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* SERVICES & REFERENCES */}
          <div className="grid grid-cols-1 md:grid-cols-[1.4fr_0.6fr] gap-4 pt-2">
            {/* Services */}
            <div className="p-4 rounded-xl bg-[#091126] border border-white/5 space-y-2">
              <div className="flex items-center gap-2 text-xs font-black text-[#00d9ff] uppercase tracking-widest">
                <Sparkles className="w-3.5 h-3.5" />
                <h4>Services</h4>
              </div>
              <div className="flex flex-wrap gap-2 pt-1">
                {['Web Development', 'Game & AI App Development', 'Graphic Design', '3D Design'].map(s => (
                  <span key={s} className="px-3 py-1 rounded-lg text-xs font-semibold bg-white/5 border border-white/10 text-slate-200 hover:border-[#00d9ff]/40 transition-colors">
                    {s}
                  </span>
                ))}
              </div>
            </div>

            {/* References */}
            <div className="p-4 rounded-xl bg-[#091126] border border-white/5 space-y-2 flex flex-col justify-center">
              <div className="flex items-center gap-2 text-xs font-black text-[#00d9ff] uppercase tracking-widest">
                <Award className="w-3.5 h-3.5" />
                <h4>References</h4>
              </div>
              <p className="text-xs text-slate-400 italic">
                Available on request.
              </p>
            </div>
          </div>

        </div>

      </div>

      {/* PDF View / Download Modal */}
      {isPdfModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md">
          <div className="relative w-full max-w-4xl max-h-[90vh] bg-[#030712] border border-[#00d9ff]/40 rounded-3xl shadow-[0_0_80px_rgba(0,217,255,0.25)] flex flex-col overflow-hidden animate-in fade-in zoom-in duration-200">
            
            {/* Modal Header */}
            <div className="flex items-center justify-between px-6 py-4 bg-[#060c1d] border-b border-white/10">
              <div className="flex items-center gap-3">
                <div className="p-2 rounded-xl bg-[#00d9ff]/10 text-[#00d9ff]">
                  <FileText className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-sm font-black text-white uppercase tracking-wider">Muhammad_Ali_CV.pdf</h3>
                  <p className="text-[11px] text-slate-400">Official Curriculum Vitae • Verified Document</p>
                </div>
              </div>

              <div className="flex items-center gap-2.5">
                <button
                  onClick={handleDownloadPdf}
                  className="relative group overflow-hidden flex items-center gap-2 px-5 py-2.5 rounded-xl bg-gradient-to-r from-[#00d9ff] via-[#38bdf8] to-[#7c5cff] text-[#03060f] font-black text-xs uppercase tracking-wider transition-all duration-300 hover:scale-105 active:scale-95 shadow-[0_0_25px_rgba(0,217,255,0.4)] cursor-pointer"
                  title="Download Official PDF Resume"
                >
                  <span className="absolute inset-0 bg-white/20 opacity-0 group-hover:opacity-100 transition-opacity"></span>
                  <Download className="w-4 h-4 transition-transform group-hover:-translate-y-0.5" />
                  <span>Download PDF</span>
                </button>
                <button
                  onClick={handlePrint}
                  className="flex items-center gap-2 px-4 py-2.5 rounded-xl bg-slate-800/80 hover:bg-slate-700/80 border border-white/10 text-white font-bold text-xs uppercase tracking-wider transition-all hover:border-[#00d9ff]/50 shadow-md cursor-pointer"
                  title="Print Resume"
                >
                  <Printer className="w-4 h-4 text-[#00d9ff]" />
                  <span>Print</span>
                </button>
                <button
                  onClick={() => setIsPdfModalOpen(false)}
                  className="p-2.5 rounded-xl bg-white/5 hover:bg-rose-500/20 text-slate-400 hover:text-rose-400 border border-white/5 hover:border-rose-500/30 transition-all cursor-pointer ml-2"
                  title="Close Modal"
                >
                  ✕
                </button>
              </div>
            </div>

            {/* Modal PDF Body Preview */}
            <div className="p-6 sm:p-8 overflow-y-auto space-y-6 bg-[#030712] max-h-[calc(90vh-120px)]">
              <div className="p-6 sm:p-8 rounded-2xl bg-[#060c1d] border border-[#00d9ff]/20 space-y-6">
                <div className="flex flex-col sm:flex-row items-center gap-6 border-b border-white/10 pb-6">
                  <img src={IMAGES.profile} alt="Muhammad Ali" className="w-24 h-24 rounded-full object-cover border-2 border-[#00d9ff] shadow-[0_0_20px_rgba(0,217,255,0.3)]" />
                  <div className="text-center sm:text-left">
                    <h2 className="text-2xl font-black text-white uppercase tracking-wide">Muhammad Ali</h2>
                    <p className="text-xs text-[#00d9ff] font-bold mt-1">Web Developer | Game & AI App Developer | Graphic Designer | 3D Designer</p>
                    <p className="text-xs text-slate-300 mt-2">Havelian, Abbottabad, KPK | Tel: +92 330 0358799 | Email: alimuhammadhvn81@gmail.com</p>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-xs text-slate-300">
                  <div className="space-y-3 p-4 rounded-xl bg-white/5 border border-white/5">
                    <h4 className="text-xs font-black text-[#00d9ff] uppercase tracking-wider">Education & Academic</h4>
                    <p><strong>BS Computer Science</strong> (2025 - Present)<br/><span className="text-slate-400">Iqra Post Graduate College</span></p>
                    <p><strong>Intermediate</strong> (2024)<br/><span className="text-slate-400">Pakwattan School & College (753/1200 | Grade B)</span></p>
                    <p><strong>Matriculation</strong> (2022)<br/><span className="text-slate-400">Al Arqam Academy (795/1100 | Grade A)</span></p>
                  </div>
                  <div className="space-y-3 p-4 rounded-xl bg-white/5 border border-white/5">
                    <h4 className="text-xs font-black text-[#00d9ff] uppercase tracking-wider">Professional Experience</h4>
                    <p><strong>Frontend Developer</strong> (2022 - Present)<br/><span className="text-slate-400">Freelance</span></p>
                    <p><strong>Graphic Designer</strong> (2021 - Present)<br/><span className="text-slate-400">Freelance</span></p>
                    <p><strong>3D Designer</strong> (2021 - Present)<br/><span className="text-slate-400">Freelance</span></p>
                  </div>
                </div>

                <div className="pt-4 border-t border-white/10 flex flex-col sm:flex-row justify-between items-center gap-2 text-[11px] text-slate-400 font-mono">
                  <span>Portfolio: muhammadali81.github.io</span>
                  <span>LinkedIn: linkedin.com/in/muhammadali81</span>
                </div>
              </div>
            </div>

          </div>
        </div>
      )}
    </section>
  );
}
