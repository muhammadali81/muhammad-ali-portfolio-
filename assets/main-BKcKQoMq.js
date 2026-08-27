import{c as ys,r as xe,j as c,l as Dc,G as pa,S as el,A as tl,d as ma,X as ga,E as nl,a as il,b as Tr,I as Dd,i as Ld,C as Ud,M as Fd,e as Od,m as kd}from"./index-CLRENm6_.js";/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Bd=[["path",{d:"M21 8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16Z",key:"hh9hay"}],["path",{d:"m3.3 7 8.7 5 8.7-5",key:"g66t2b"}],["path",{d:"M12 22V12",key:"d0xqtd"}]],Gd=ys("box",Bd);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const zd=[["line",{x1:"6",x2:"10",y1:"11",y2:"11",key:"1gktln"}],["line",{x1:"8",x2:"8",y1:"9",y2:"13",key:"qnk9ow"}],["line",{x1:"15",x2:"15.01",y1:"12",y2:"12",key:"krot7o"}],["line",{x1:"18",x2:"18.01",y1:"10",y2:"10",key:"1lcuu1"}],["path",{d:"M17.32 5H6.68a4 4 0 0 0-3.978 3.59c-.006.052-.01.101-.017.152C2.604 9.416 2 14.456 2 16a3 3 0 0 0 3 3c1 0 1.5-.5 2-1l1.414-1.414A2 2 0 0 1 9.828 16h4.344a2 2 0 0 1 1.414.586L17 18c.5.5 1 1 2 1a3 3 0 0 0 3-3c0-1.545-.604-6.584-.685-7.258-.007-.05-.011-.1-.017-.151A4 4 0 0 0 17.32 5z",key:"mfqc10"}]],Vd=ys("gamepad-2",zd);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Hd=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M12 16v-4",key:"1dtifu"}],["path",{d:"M12 8h.01",key:"e9boi3"}]],sl=ys("info",Hd);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const jd=[["path",{d:"M12 22a1 1 0 0 1 0-20 10 9 0 0 1 10 9 5 5 0 0 1-5 5h-2.25a1.75 1.75 0 0 0-1.4 2.8l.3.4a1.75 1.75 0 0 1-1.4 2.8z",key:"e79jfc"}],["circle",{cx:"13.5",cy:"6.5",r:".5",fill:"currentColor",key:"1okk4w"}],["circle",{cx:"17.5",cy:"10.5",r:".5",fill:"currentColor",key:"f64h9f"}],["circle",{cx:"6.5",cy:"12.5",r:".5",fill:"currentColor",key:"qy21gx"}],["circle",{cx:"8.5",cy:"7.5",r:".5",fill:"currentColor",key:"fotxhn"}]],Wd=ys("palette",jd);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Xd=[["path",{d:"M12 3v12",key:"1x0j5s"}],["path",{d:"m17 8-5-5-5 5",key:"7q97r8"}],["path",{d:"M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4",key:"ih7n3h"}]],qd=ys("upload",Xd);function Yd({onTrigger3DMode:i}){const[e,t]=xe.useState(!1),[n,s]=xe.useState(()=>{const f=localStorage.getItem("luxTheme");return f?f==="light":window.matchMedia&&window.matchMedia("(prefers-color-scheme: light)").matches}),[r,a]=xe.useState(!1);xe.useEffect(()=>{n?document.body.classList.add("lux-light"):document.body.classList.remove("lux-light")},[n]),xe.useEffect(()=>{const f=()=>{a(window.scrollY>20)};return window.addEventListener("scroll",f),()=>window.removeEventListener("scroll",f)},[]);const o=()=>{const f=!n;s(f),localStorage.setItem("luxTheme",f?"light":"dark"),f?document.body.classList.add("lux-light"):document.body.classList.remove("lux-light")},l=async()=>{try{navigator.share?await navigator.share({title:"Muhammad Ali — Portfolio",text:"Explore Muhammad Ali Portfolio",url:location.href}):(await navigator.clipboard.writeText(location.href),alert("Portfolio link copied to clipboard!"))}catch{}},d=f=>{if(f.preventDefault(),i)i(f);else{const u=new URL(window.location.href);u.searchParams.set("mode","3d"),window.history.pushState({},"",u.toString()),window.dispatchEvent(new Event("popstate"))}},h=[{label:"Home",href:"#home"},{label:"About",href:"#about"},{label:"Education",href:"#education"},{label:"Skills",href:"#skills"},{label:"Projects",href:"#projects"},{label:"Services",href:"#services"},{label:"Hire Me",href:"#hire"},{label:"Feedback",href:"#feedback"},{label:"Inquiry",href:"#inquiry"},{label:"Contact",href:"#contact"}];return c.jsxs("header",{className:`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${r?"header-glass py-2.5 shadow-md":"bg-transparent py-4"}`,children:[c.jsxs("div",{className:"container flex justify-between items-center px-4 sm:px-0",children:[c.jsxs("div",{className:"flex items-center gap-3 select-none",children:[c.jsx("a",{href:"admin.html",title:"Open Admin Portal","aria-label":"Admin Portal",className:"brand-badge w-10 h-10 rounded-xl flex items-center justify-center font-brand font-black text-sm text-[#00d9ff] hover:scale-105 hover:border-[#00d9ff] transition-transform duration-300 cursor-pointer shadow-sm",children:"MA"}),c.jsxs("a",{href:"#home",className:"flex flex-col leading-tight group",children:[c.jsxs("span",{className:"brand-title text-lg sm:text-xl font-black text-[var(--lux-text)] tracking-[0.14em] uppercase transition",children:["Muhammad ",c.jsx("span",{className:"bg-gradient-to-r from-[#00d9ff] via-[#5ce1e6] to-[#7c5cff] bg-clip-text text-transparent",children:"Ali"})]}),c.jsxs("span",{className:"text-[9px] font-bold tracking-[0.22em] text-[var(--lux-text-muted)] uppercase flex items-center gap-1.5",children:[c.jsx("span",{children:"Developer"}),c.jsx("span",{className:"text-[#00d9ff] text-[7px]",children:"✦"}),c.jsx("span",{children:"Designer"})]})]})]}),c.jsx("nav",{className:"hidden lg:flex items-center gap-6 list-none",children:h.map(f=>c.jsx("a",{href:f.href,className:"text-[13px] font-semibold text-[var(--lux-text)] opacity-80 hover:opacity-100 hover:text-[#00d9ff] transition-all relative py-1 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[2px] after:bg-[#00d9ff] hover:after:w-full after:transition-all after:duration-200",children:f.label},f.label))}),c.jsxs("div",{className:"flex items-center gap-2.5 sm:gap-3",children:[c.jsxs("a",{href:"admin.html",className:"luxury-header-admin-btn hidden md:inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl text-[#00d9ff] font-bold text-xs cursor-pointer select-none",title:"Admin Dashboard","aria-label":"Admin Dashboard",children:[c.jsx("span",{className:"text-xs",children:"⚙"}),c.jsx("span",{className:"tracking-wide",children:"Admin"})]}),c.jsxs("a",{href:"?mode=3d",onClick:d,className:"luxury-header-3d-btn inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl text-[var(--lux-text)] font-extrabold text-xs tracking-wider uppercase cursor-pointer select-none",title:"Enter 3D Art World","aria-label":"Enter 3D Art World",children:[c.jsx("span",{className:"text-[#00d9ff] text-sm animate-pulse",children:"◇"}),c.jsx("span",{className:"hidden xs:inline",children:"3D World"})]}),c.jsx("button",{onClick:o,className:"w-9 h-9 rounded-xl border border-[var(--lux-border)] bg-[var(--lux-surface2)] text-[var(--lux-text)] flex items-center justify-center text-sm cursor-pointer hover:border-[#00d9ff] hover:text-[#00d9ff] transition-all duration-200 shadow-sm","aria-label":n?"Switch to Dark Mode":"Switch to Light Mode",title:n?"Switch to Dark Mode":"Switch to Light Mode",children:n?"☾":"☀"}),c.jsxs("button",{onClick:()=>t(!e),className:`hamburger-btn lg:hidden ${e?"is-active":""}`,"aria-label":"Toggle navigation menu","aria-expanded":e,children:[c.jsx("span",{className:"hamburger-line line-1"}),c.jsx("span",{className:"hamburger-line line-2"}),c.jsx("span",{className:"hamburger-line line-3"})]})]})]}),e&&c.jsxs("div",{className:"mobile-nav-drawer fixed inset-x-0 top-[65px] bottom-0 z-40 lg:hidden overflow-y-auto p-6 flex flex-col justify-between animate-fadeIn border-t border-[var(--lux-border)]",children:[c.jsxs("div",{children:[c.jsx("div",{className:"text-[10px] font-extrabold uppercase tracking-[0.2em] text-[#00d9ff] mb-4",children:"Navigation"}),c.jsx("div",{className:"grid grid-cols-2 gap-2.5 mb-6",children:h.map(f=>c.jsx("a",{href:f.href,onClick:()=>t(!1),className:"p-3 rounded-xl bg-[var(--lux-surface2)] hover:bg-[#00d9ff]/10 border border-[var(--lux-border)] hover:border-[#00d9ff]/40 text-sm font-semibold text-[var(--lux-text)] transition",children:f.label},f.label))}),c.jsx("div",{className:"text-[10px] font-extrabold uppercase tracking-[0.2em] text-[#7c5cff] mb-3",children:"Portals & Actions"}),c.jsxs("div",{className:"grid grid-cols-2 gap-3 mb-6",children:[c.jsxs("a",{href:"admin.html",onClick:()=>t(!1),className:"p-3.5 rounded-xl border border-[#00d9ff]/40 bg-[#00d9ff]/10 text-[#00d9ff] font-bold text-xs flex items-center justify-center gap-2 hover:bg-[#00d9ff] hover:text-[#061017] transition",children:[c.jsx("span",{children:"⚙"}),c.jsx("span",{children:"Admin Portal"})]}),c.jsxs("a",{href:"?mode=3d",onClick:f=>{t(!1),d(f)},className:"p-3.5 rounded-xl border border-[#7c5cff]/50 bg-[#7c5cff]/15 text-[var(--lux-text)] font-bold text-xs flex items-center justify-center gap-2 hover:bg-[#7c5cff] hover:text-white transition",children:[c.jsx("span",{className:"text-[#00d9ff]",children:"◇"}),c.jsx("span",{children:"3D Art World"})]})]})]}),c.jsxs("div",{className:"pt-4 border-t border-[var(--lux-border)] flex flex-col gap-3",children:[c.jsxs("div",{className:"flex items-center justify-between p-3 rounded-xl bg-[var(--lux-surface2)] border border-[var(--lux-border)]",children:[c.jsx("span",{className:"text-xs font-bold text-[var(--lux-text-muted)]",children:"Display Theme"}),c.jsx("button",{onClick:o,className:"flex items-center gap-1.5 text-xs font-bold px-3 py-1.5 rounded-lg bg-[#00d9ff]/10 text-[#00d9ff] border border-[#00d9ff]/30 cursor-pointer",children:c.jsx("span",{children:n?"☾ Switch to Dark":"☀ Switch to Light"})})]}),c.jsxs("div",{className:"flex gap-2",children:[c.jsxs("button",{onClick:l,className:"flex-1 p-3 rounded-xl border border-[var(--lux-border)] bg-[var(--lux-surface2)] text-xs font-bold text-[var(--lux-text)] flex items-center justify-center gap-1.5 cursor-pointer hover:border-[#00d9ff]",children:[c.jsx("span",{children:"↗"}),c.jsx("span",{children:"Share Portfolio"})]}),c.jsxs("a",{href:"CV.pdf",target:"_blank",rel:"noopener noreferrer",className:"flex-1 p-3 rounded-xl border border-[#7c5cff]/40 bg-[#7c5cff]/10 text-xs font-bold text-[var(--lux-text)] flex items-center justify-center gap-1.5 hover:border-[#7c5cff]",children:[c.jsx("span",{children:"📄"}),c.jsx("span",{children:"Download CV"})]})]})]})]})]})}function Kd({onTrigger3DMode:i}){return c.jsx("section",{id:"home",className:"hero min-h-[92vh] flex items-center pt-[100px] relative overflow-hidden",children:c.jsxs("div",{className:"container hero-content grid grid-cols-1 md:grid-cols-[1.2fr_0.8fr] gap-[60px] items-center relative z-10",children:[c.jsxs("div",{children:[c.jsx("div",{className:"badge inline-block px-[15px] py-[8px] border border-[rgba(0,217,255,.4)] rounded-[30px] text-[#00d9ff] text-[13px] mb-[22px]",children:"COMPUTER SCIENCE STUDENT & DEVELOPER"}),c.jsxs("h1",{className:"text-[clamp(40px,7vw,78px)] font-black leading-[1.05] mb-[20px] tracking-tighter",children:["I'm ",c.jsx("span",{children:"Muhammad Ali"})]}),c.jsx("h2",{className:"text-[22px] sm:text-[24px] text-[#c5ccd7] font-medium mb-[18px]",children:"Web Developer • Game & AI App Developer • Graphic Designer"}),c.jsx("p",{className:"max-w-[650px] text-[#a4adba] text-[17px] mb-[30px] leading-relaxed",children:"I am a Computer Science student passionate about technology, creative design, web development, game development, AI applications and building innovative digital experiences."}),c.jsxs("div",{className:"hero-tags flex gap-3 flex-wrap text-xs font-bold text-[#7f8a9a]",children:[c.jsx("span",{className:"px-3 py-2 border border-white/10 rounded-full bg-white/5",children:"ORIGINAL PROJECTS"}),c.jsx("span",{className:"px-3 py-2 border border-white/10 rounded-full bg-white/5",children:"CREATIVE + TECHNICAL"}),c.jsx("span",{className:"px-3 py-2 border border-white/10 rounded-full bg-white/5",children:"RESPONSIVE"})]}),c.jsxs("div",{className:"buttons flex gap-3.5 flex-wrap mt-6",children:[c.jsx("a",{href:"#projects",className:"btn btn-primary px-6 py-3.5 rounded-lg font-bold",children:"View My Projects"}),c.jsx("a",{href:"#hire",className:"btn px-6 py-3.5 rounded-lg font-bold border border-[#00d9ff] text-[#00d9ff]",children:"Hire Me"}),c.jsx("a",{href:"CV.pdf",target:"_blank",rel:"noopener noreferrer",className:"btn px-6 py-3.5 rounded-lg font-bold border border-[rgba(124,92,255,.45)] text-[#d9d3ff]",children:"Download CV"}),c.jsxs("a",{href:"?mode=3d",onClick:e=>{if(e.preventDefault(),i)i(e);else{const t=new URL(window.location.href);t.searchParams.set("mode","3d"),window.history.pushState({},"",t.toString()),window.dispatchEvent(new Event("popstate"))}},className:"btn px-6 py-3.5 rounded-lg font-extrabold border border-[#7c5cff] bg-gradient-to-r from-[#7c5cff]/20 to-[#00d9ff]/20 text-[#00d9ff] hover:shadow-[0_0_30px_rgba(0,217,255,0.4)] hover:border-[#00d9ff] transition-all flex items-center gap-2 cursor-pointer",children:[c.jsx("span",{className:"animate-pulse",children:"◇"}),c.jsx("span",{children:"Enter 3D Art World"})]})]})]}),c.jsxs("div",{className:"hero-photo flex justify-center items-center flex-col",children:[c.jsx("img",{src:"/images/profile.jpg",alt:"Muhammad Ali Profile Photo",className:"w-[320px] h-[320px] object-cover rounded-full border-4 border-[#00d9ff] shadow-[0_0_35px_rgba(0,217,255,.18)]"}),c.jsxs("div",{className:"hero-photo-role mt-[18px] text-center p-[12px_18px] border border-[rgba(0,217,255,.25)] bg-[rgba(16,21,31,.78)] rounded-xl w-[min(320px,90vw)]",children:[c.jsx("strong",{className:"block text-[#00d9ff] text-[19px] mb-0.5",children:"Freelancer"}),c.jsx("span",{className:"block text-[#9aa4b3] text-[13px]",children:"Computer Science Student • Developer • Designer • AI Creator"})]})]})]})})}function $d(){return c.jsx("section",{id:"about",className:"py-[100px] relative",children:c.jsxs("div",{className:"container",children:[c.jsxs("div",{className:"section-title text-center mb-[55px]",children:[c.jsxs("h2",{className:"text-[40px] font-black mb-[10px]",children:["About ",c.jsx("span",{children:"Me"})]}),c.jsx("p",{className:"text-[#818c9c]",children:"Get to know me"})]}),c.jsxs("div",{className:"about-grid grid grid-cols-1 md:grid-cols-2 gap-[25px]",children:[c.jsxs("div",{className:"info-card p-[30px] rounded-[16px] bg-[#10151f] border border-[rgba(255,255,255,.07)]",children:[c.jsx("h3",{className:"text-[#00d9ff] text-xl font-bold mb-[14px]",children:"Who I Am"}),c.jsx("p",{className:"text-[#a3adba] leading-relaxed",children:"I am Muhammad Ali, a Computer Science student, freelancer and creative developer from Havelian, Abbottabad. I am a Muslim who values honesty, professionalism, respect and responsible work. My interests include web development, game & AI application development, Pixel Forge graphic design, 2D & 3D architecture design, and modern technology. My aim is to communicate clearly, understand each client's needs and deliver thoughtful, reliable and high-quality digital solutions."})]}),c.jsxs("div",{className:"info-card p-[30px] rounded-[16px] bg-[#10151f] border border-[rgba(255,255,255,.07)]",children:[c.jsx("h3",{className:"text-[#00d9ff] text-xl font-bold mb-[14px]",children:"My Vision"}),c.jsx("p",{className:"text-[#a3adba] leading-relaxed",children:"My vision is to build a respected professional career through continuous learning, creativity, discipline and ethical work. I want to create practical digital products, provide dependable freelance services and turn ideas into polished experiences. I believe in improving my skills continuously, maintaining professional standards and creating work that delivers real value to clients and users."})]})]})]})})}const Zd=[{degree:"BS Computer Science",institute:"Iqra Post Graduate College, Havelian, Abbottabad",year:"Currently Studying — 3rd Semester"},{degree:"FSc in Computer Science",institute:"Pak Wattan School & College of Science, Havelian, Abbottabad",year:"Completed — 2024"},{degree:"Matric in Science",institute:"Al Arqam Academy of Excellence, Havelian, Abbottabad",year:"Completed — 2022"}],Jd=["HTML & CSS","JavaScript","Python","C++","Web Development","Game Development","AI Development","Graphic Designing","Godot","Unity","Canva"],Qd=[{question:"What is your project budget criteria?",answer:"Muhammad’s project budget criteria starts from $10 or above ($10+ USD). Final pricing depends on project scope, complexity, and custom features."},{question:"What services do you offer?",answer:"Web development, game and AI app development, graphic design, 2D visual design and custom digital projects."},{question:"How can I start a project?",answer:"Choose a service, send an inquiry with your requirements, and we can discuss scope, timeline and the best approach."},{question:"How long does a project take?",answer:"Timing depends on scope, complexity, revisions and required features. A realistic timeline is agreed before work begins."},{question:"Do you work with international clients?",answer:"Yes. Project discussions and collaboration can be handled remotely with international clients."},{question:"Can you build custom websites/apps?",answer:"Yes. Custom websites, web applications and tailored digital experiences can be planned around your requirements."},{question:"Do you provide responsive designs?",answer:"Yes. Responsive behavior across mobile, tablet and desktop is part of the development approach."},{question:"Can you redesign an existing website?",answer:"Yes. An existing website can be reviewed and redesigned for usability, responsiveness and visual quality."},{question:"Do you offer AI integration?",answer:"Yes. AI-powered features and application integrations can be discussed as part of a custom project."},{question:"Do you provide maintenance?",answer:"Maintenance, updates and future improvements can be agreed according to the project scope."},{question:"Can I request changes?",answer:"Yes. Revision requirements can be discussed and agreed before or during the project."},{question:"How do I submit feedback?",answer:"Use the Feedback section, enter your one-time Ali-XXXXXX code, write your feedback and rating, then continue with Google verification. Upload completes automatically after verification."},{question:"Can I see previous projects?",answer:"Yes. Visit the Project Gallery to explore available project previews."},{question:"How can I contact you?",answer:"Use the Inquiry form, contact section, or the available social channels."},{question:"Do you offer custom packages?",answer:"Yes. Custom packages can be discussed according to the required services, features and scope."},{question:"What information should I provide in an inquiry?",answer:"Include your project idea, required service, important features, preferred timeline and any budget guidance you can share."},{question:"How is my feedback/inquiry handled?",answer:"Feedback and inquiries are sent to the Supabase-backed portfolio system for controlled administrative review."},{question:"Can I upload images with feedback?",answer:"Yes. Feedback supports multiple image attachments within the stated size limits."},{question:"How can I rate your service?",answer:"Select a 1–5 rating when submitting feedback."},{question:"What happens after I submit an inquiry?",answer:"You receive an on-page success or error result, and a successful inquiry becomes available for admin management."},{question:"How do I know my inquiry was received?",answer:"A successful submission shows a confirmation message in the inquiry section."},{question:"Can I update my feedback?",answer:"Public feedback editing is not exposed as a visitor control. Contact Muhammad Ali if a correction is needed."},{question:"Can I submit feedback without a profile photo?",answer:"Yes. If Google does not provide a profile photo, the system uses a circular initials avatar."},{question:"Why is Google verification required?",answer:"It verifies the visitor identity used for the feedback record and automatically supplies the Google name, Gmail/email and profile photo when available."},{question:"How is my Google profile information used?",answer:"The verified name, email and profile photo are used to identify the feedback publicly; no separate visitor upload is required."},{question:"Can I use Gmail for feedback?",answer:"Yes. Google verification provides the Gmail/email associated with the verified account."},{question:"How does the one-time code work?",answer:"The code follows Ali- plus six letters/numbers and remains valid until the feedback is successfully uploaded."},{question:"What happens if the code is not used?",answer:"It remains available according to the backend code policy until it expires or is successfully consumed."},{question:"Can I submit feedback more than once?",answer:"Each one-time code is intended for a single successful feedback submission."},{question:"What happens after Google verification?",answer:"The saved feedback is uploaded automatically. You do not press Submit a second time or re-enter Google information."},{question:"How can I request a custom project?",answer:"Use the Hire Me or Inquiry section and describe the project you want to build."}],eh=[{number:"1",title:"Discuss",desc:"Understand your idea, requirements, goals and expected result."},{number:"2",title:"Plan",desc:"Choose the suitable technology, structure, design and project approach."},{number:"3",title:"Build",desc:"Develop the project and keep important progress details clear."},{number:"4",title:"Test",desc:"Check responsiveness, functionality, usability and common errors."},{number:"5",title:"Deliver",desc:"Provide the completed work and the agreed project details."},{number:"6",title:"Support",desc:"Discuss maintenance, updates or future improvements when needed."}],th=[{icon:"⚡",title:"Responsive & Modern",desc:"Projects are designed to work smoothly across phones, tablets and desktop screens."},{icon:"🔒",title:"Reliable Communication",desc:"Clear requirements, progress updates and professional communication throughout the work."},{icon:"🛠️",title:"Post-Delivery Support",desc:"Bug fixes and reasonable support can be discussed after project delivery."}],nh=["Facebook","Instagram","LinkedIn","YouTube","GitHub","TikTok","Fiverr","Upwork","Freelancer","Other Freelancing Platform","Google/Search Engine","Newspaper","Family","Friend","Other"];function ih(){return c.jsx("section",{id:"education",className:"py-[100px] relative",children:c.jsxs("div",{className:"container",children:[c.jsxs("div",{className:"section-title text-center mb-[55px]",children:[c.jsxs("h2",{className:"text-[40px] font-black mb-[10px]",children:["My ",c.jsx("span",{children:"Education"})]}),c.jsx("p",{className:"text-[#818c9c]",children:"My academic journey"})]}),c.jsx("div",{className:"education max-w-[850px] mx-auto grid gap-[20px]",children:Zd.map((i,e)=>c.jsxs("div",{className:"edu-card bg-[#10151f] border border-[rgba(255,255,255,.07)] border-l-4 border-l-[#00d9ff] rounded-[12px] p-[25px]",children:[c.jsx("h3",{className:"text-[21px] font-bold mb-[6px]",children:i.degree}),c.jsx("div",{className:"institute text-[#00d9ff] font-bold",children:i.institute}),c.jsx("div",{className:"year text-[#7e8998] text-sm mt-[5px]",children:i.year})]},e))})]})})}function sh(){return c.jsx("section",{id:"skills",className:"py-[100px] relative",children:c.jsxs("div",{className:"container",children:[c.jsxs("div",{className:"section-title text-center mb-[55px]",children:[c.jsxs("h2",{className:"text-[40px] font-black mb-[10px]",children:["My ",c.jsx("span",{children:"Skills"})]}),c.jsx("p",{className:"text-[#818c9c]",children:"Technical and creative skills"})]}),c.jsx("div",{className:"skills grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-[18px]",children:Jd.map((i,e)=>c.jsx("div",{className:"skill bg-[#10151f] border border-[rgba(255,255,255,.07)] p-[25px_15px] text-center rounded-[13px]",children:c.jsx("h3",{className:"text-[#00d9ff] font-bold text-base",children:i})},e))})]})})}const Ar=[{id:"game-ai",title:"Game & AI Development",subtitle:"Interactive games and intelligent AI applications",description:"Specialized game mechanics, custom puzzle engines, localized NLP AI architectures, and gamified learning platforms built with high performance.",icon:Vd,coverImage:"/images/pakai_4.jpg",subdivisions:[{name:"Colour Block",badge:"Division 1 • 4 Photos",description:"Interactive color block puzzle game logic featuring smooth animations, player mechanics, dynamic block matching physics, combo blast particles, and high score leaderboards.",photos:[{id:1,title:"Colour Block - Intro Title Screen (Ali Game Hubs)",url:"/images/color_block_1.jpg",caption:"Photo 1: Ali Game Hubs Presents Color Blocks title intro screen"},{id:2,title:"Colour Block - Mobile Puzzle Gameplay (Level 35)",url:"/images/color_block_2.jpg",caption:"Photo 2: Level 35 gameplay screen with Score 8,450 & Moves 23"},{id:3,title:"Colour Block - Free Mode Board Grid",url:"/images/color_block_3.jpg",caption:"Photo 3: Free Mode puzzle grid with Score 1260 and Restart/Menu controls"},{id:4,title:"Colour Block - Victory Trophy Screen (All 25 Levels)",url:"/images/color_block_4.jpg",caption:"Photo 4: You Win! All 25 Levels Complete victory screen with trophy"}]},{name:"Pak AI",badge:"Division 2 • 4 Photos",description:"Next-gen artificial intelligence platform featuring intelligent Urdu & English NLP conversational chat, real-time voice processing, and custom vector document query solutions.",photos:[{id:1,title:"Pak AI - AI Assistant Emblem & Logo",url:"/images/pakai_1.jpg",caption:"Photo 1: PakAI Logo, Brain Circuits & AI Assistant Badge"},{id:2,title:"Pak AI - Mobile App Interface & Flag Mockup",url:"/images/pakai_2.jpg",caption:"Photo 2: Smartphone UI with Assalamualaikum PakAI greeting & Pakistan map"},{id:3,title:"Pak AI - Conversational Chat UI",url:"/images/pakai_3.jpg",caption:"Photo 3: Dark theme chat screen with What is AI question & response"},{id:4,title:"Pak AI - Smart AI Assistant Promotional Banner",url:"/images/pakai_4.jpg",caption:"Photo 4: Hero banner with Chat Now button & mobile viewport"}]},{name:"Learn Play",badge:"Division 3 • 4 Photos",description:"Gamified educational learning portal empowering students with interactive quizzes, real-time logic challenges, daily streak counters, and reward badges.",photos:[{id:1,title:"Learn Play - Educational Hub Logo",url:"/images/learnplay_1.jpg",caption:"Photo 1: LearnPlay Logo with graduation cap & Learn Play Grow slogan"},{id:2,title:"Learn Play - Tablet Learning Dashboard",url:"/images/learnplay_2.jpg",caption:"Photo 2: English, Maths, Science & Quiz modules on tablet UI"},{id:3,title:"Learn Play - Student Hero Banner",url:"/images/learnplay_3.jpg",caption:"Photo 3: Learn Today, Lead Tomorrow banner with Start Learning button"},{id:4,title:"Learn Play - Quiz Victory Score Screen",url:"/images/learnplay_4.jpg",caption:"Photo 4: Well Done victory modal with 3 gold stars & Score 8/10"}]}]},{id:"pixel-forge",title:"Pixel Forge",subtitle:"Graphic design, logo identity, visiting cards, and promotional banners",description:"Comprehensive visual graphic studio providing custom vector logo branding, executive business card layouts, and eye-catching promotional advertising banners.",icon:Wd,coverImage:"/images/pixelforge_studio.jpg",subdivisions:[{name:"Logo Design",badge:"Division 1 • 4 Photos",description:"Professional vector logos, corporate brand identities, geometric emblems, gaming logos, and luxury typography crafted for digital and print media.",photos:[{id:1,title:"Pixel Forge Studio - Creative Design Workspace",url:"/images/pixelforge_studio.jpg",caption:"Photo 1: Pixel Forge Studio monitor workspace, drawing tablet & color swatches"},{id:2,title:"Logo Design - Stewerds Family Gold Crown Emblem",url:"/images/logo_design_2.jpg",caption:"Photo 2: Royal gold family logo on dark wood background"},{id:3,title:"Logo Design - Luxury Gold CL Ring Logo",url:"/images/logo_design_3.jpg",caption:"Photo 3: Metallic gold ring emblem with script typography"},{id:4,title:"Logo Design - Gold CL Cream Badge Logo",url:"/images/logo_design_4.jpg",caption:"Photo 4: Premium gold monogram script on cream circular badge"}]},{name:"Visiting Card",badge:"Division 2 • 4 Photos",description:"Modern corporate business cards, double-sided executive layouts, luxury gold foil, and custom mobile shop business card designs.",photos:[{id:1,title:"Muhammad Ali - Creative Developer Business Card",url:"/images/visiting_card_1.jpg",caption:"Photo 1: Executive double-sided blue & black design with contact details & website link"},{id:2,title:"Jhan Mobile Hub - Luxury Gold Partner Card",url:"/images/visiting_card_2.jpg",caption:"Photo 2: Gold & black mobile shop business card with smartphone repair services list & QR code"},{id:3,title:"Anshu Mobile Shop - Tech Blue Business Card",url:"/images/visiting_card_3.jpg",caption:"Photo 3: Futuristic tech blue card layout with WhatsApp chat QR code & service guide"},{id:4,title:"Mobile Zone - CEO Faizan Amjad Business Card",url:"/images/visiting_card_4.jpg",caption:"Photo 4: High-contrast orange & dark geometric corporate card with CEO details & address"}]},{name:"Banner",badge:"Division 3 • 4 Photos",description:"High-converting social media promotional banners, YouTube & Twitch channel cover artwork, e-commerce sale ads, and roll-up event display banners.",photos:[{id:1,title:"Aala Hazrat Muradabadi Biryani Banner",url:"/images/banner_1.jpg",caption:"Photo 1: Aala Hazrat Muradabadi Biryani restaurant promotional banner"},{id:2,title:"Travel The World Explorer Banner",url:"/images/banner_2.jpg",caption:"Photo 2: Travel The World adventure banner with sea & mountain scenery"},{id:3,title:"Special Coffee Shop 30% Discount Banner",url:"/images/banner_3.jpg",caption:"Photo 3: Special Coffee Shop 30% discount promotional banner"},{id:4,title:"Special Discount Food Shop Banner",url:"/images/banner_4.jpg",caption:"Photo 4: Special Discount Food Shop promotional header banner with pizza frames"}]}]},{id:"2d-3d-architecture",title:"2D and 3D Architecture",subtitle:"Smart architectural 2D floor plans and immersive 3D house exterior & interior renderings",description:"Architectural spatial planning, intelligent 2D smart floor mapping, material distribution layouts, and photorealistic 3D house renderings.",icon:Gd,coverImage:"https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&auto=format&fit=crop&q=80",subdivisions:[{name:"2D Smart Flooring",badge:"Division 1 • 4 Photos",description:"Precision architectural 2D smart flooring plans, room spatial mapping, material tile grids, and CAD property dimension blueprints.",photos:[{id:1,title:"2D Smart Flooring - Residential Interior Smart Layout",url:"https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&auto=format&fit=crop&q=80",caption:"Photo 1: Multi-room home smart flooring grid & spatial room mapping"},{id:2,title:"2D Smart Flooring - Commercial Space Blueprint",url:"https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=800&auto=format&fit=crop&q=80",caption:"Photo 2: Corporate workspace flooring layout & circulation path CAD plan"},{id:3,title:"2D Smart Flooring - Modern Tile & Material Distribution",url:"https://images.unsplash.com/photo-1524758631624-e2822e304c36?w=800&auto=format&fit=crop&q=80",caption:"Photo 3: 2.5D shaded flooring material placement & tile allocation diagram"},{id:4,title:"2D Smart Flooring - Scaled Utility & Dimension Map",url:"https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=800&auto=format&fit=crop&q=80",caption:"Photo 4: Automated CAD room boundary & smart floor heating system map"}]},{name:"3D House Design",badge:"Division 2 • 4 Photos",description:"Photorealistic 3D villa elevation renders, interior living space models, panoramic walkthrough visualizations, and architectural lighting studies.",photos:[{id:1,title:"3D House Design - Modern Exterior Elevation & Facade",url:"https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800&auto=format&fit=crop&q=80",caption:"Photo 1: High-end luxury villa facade render with glass & wood accents"},{id:2,title:"3D House Design - Luxury Living Room Interior Render",url:"https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?w=800&auto=format&fit=crop&q=80",caption:"Photo 2: Immersive 3D interior visualization with natural daylighting"},{id:3,title:"3D House Design - Panoramic Architectural Walkthrough",url:"https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800&auto=format&fit=crop&q=80",caption:"Photo 3: 360-degree spatial perspective render of courtyard & pool deck"},{id:4,title:"3D House Design - Night Exterior Lighting Study",url:"https://images.unsplash.com/photo-1600585154526-990dced4db0d?w=800&auto=format&fit=crop&q=80",caption:"Photo 4: Twilight exterior architectural lighting & landscape rendering"}]}]},{id:"nova-web",title:"Nova Web",subtitle:"Modern web development studio showcase with live website link & photos",description:"Full-stack web application featuring live website link, responsive Vite React frontend, dark theme aesthetic, and backend admin portal controls.",icon:pa,coverImage:"https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&auto=format&fit=crop&q=80",websiteUrl:"https://novawebstudio.app",subdivisions:[{name:"Nova Web Studio Showcase",badge:"Website Showcase • 4 Photos",description:"Full-stack web studio platform featuring direct live website link, clean hero sections, mobile touch responsiveness, interactive service widgets, and dark mode backend dashboard.",photos:[{id:1,title:"Nova Web - Hero Section & Landing Page",url:"https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&auto=format&fit=crop&q=80",caption:"Photo 1: Clean high-contrast hero section with call-to-action buttons"},{id:2,title:"Nova Web - Responsive Mobile & Tablet Views",url:"https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?w=800&auto=format&fit=crop&q=80",caption:"Photo 2: Cross-device responsiveness & touch-optimized mobile viewport"},{id:3,title:"Nova Web - Services & Interactive Features",url:"https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&auto=format&fit=crop&q=80",caption:"Photo 3: Live interactive service cards & real-time analytics widgets"},{id:4,title:"Nova Web - Admin Portal & Dark Theme UI",url:"https://images.unsplash.com/photo-1551836022-d5d88e9218df?w=800&auto=format&fit=crop&q=80",caption:"Photo 4: Secure backend dashboard management & metrics monitor"}]}]}];function rh({onOpenLightbox:i}){const[e,t]=xe.useState(null),[n,s]=xe.useState("All"),r=Dc.useRef(null),a=Ar.find(l=>l.id===e),o=l=>{t(l),s("All"),setTimeout(()=>{r.current&&r.current.scrollIntoView({behavior:"smooth",block:"start"})},100)};return c.jsxs("section",{id:"projects",className:"py-24 bg-[#070b12] text-slate-200 relative overflow-hidden",children:[c.jsx("div",{className:"absolute top-10 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-[#00d9ff]/5 rounded-full blur-3xl pointer-events-none"}),c.jsxs("div",{className:"max-w-7xl mx-auto px-4 sm:px-6 relative z-10",children:[c.jsxs("div",{className:"text-center mb-12",children:[c.jsxs("div",{className:"inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#00d9ff]/10 border border-[#00d9ff]/30 text-[#00d9ff] text-xs font-bold uppercase tracking-wider mb-3",children:[c.jsx(el,{className:"w-3.5 h-3.5"})," Project Showcase & Gallery"]}),c.jsxs("h2",{className:"text-3xl sm:text-5xl font-black text-white tracking-tight",children:["My Project ",c.jsx("span",{className:"text-[#00d9ff]",children:"Gallery"})]}),c.jsx("p",{className:"text-sm text-slate-400 mt-2.5 max-w-2xl mx-auto leading-relaxed",children:"Explore original work, sub-divisions with 4-photo galleries, 2D floor maps, games, AI platforms, and Nova Web studio website links."})]}),c.jsx("div",{className:"flex items-center justify-center gap-2.5 mb-10 flex-wrap",children:Ar.map(l=>{const d=l.icon,h=e===l.id;return c.jsxs("button",{onClick:()=>o(l.id),className:`px-4 py-2.5 rounded-xl text-xs font-bold transition-all flex items-center gap-2 cursor-pointer border ${h?"bg-[#00d9ff] text-[#061017] border-[#00d9ff] shadow-lg shadow-[#00d9ff]/20 scale-105":"bg-[#0f1523] text-slate-300 border-white/10 hover:border-[#00d9ff]/50 hover:text-white"}`,children:[c.jsx(d,{className:`w-4 h-4 ${h?"text-[#061017]":"text-[#00d9ff]"}`}),c.jsx("span",{children:l.title})]},l.id)})}),c.jsx("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-6",children:Ar.map(l=>{const d=l.icon,h=l.subdivisions.length,f=l.subdivisions.reduce((u,p)=>u+p.photos.length,0);return c.jsxs("div",{className:"bg-[#0f1523] border border-white/10 rounded-2xl overflow-hidden hover:border-[#00d9ff]/40 transition-all duration-300 group flex flex-col justify-between shadow-xl",children:[c.jsxs("div",{children:[c.jsxs("div",{className:"relative h-56 w-full overflow-hidden bg-[#0b101a]",children:[c.jsx("img",{src:l.coverImage,alt:l.title,className:"w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"}),c.jsx("div",{className:"absolute inset-0 bg-gradient-to-t from-[#0f1523] via-transparent to-black/30"}),c.jsxs("div",{className:"absolute top-4 left-4 flex items-center gap-2",children:[c.jsxs("span",{className:"px-3 py-1 rounded-full bg-black/70 backdrop-blur-md border border-white/15 text-[#00d9ff] text-[11px] font-bold flex items-center gap-1.5",children:[c.jsx(d,{className:"w-3.5 h-3.5"})," ",h," Subdivisions"]}),c.jsxs("span",{className:"px-2.5 py-1 rounded-full bg-[#00d9ff]/20 text-[#00d9ff] border border-[#00d9ff]/30 text-[11px] font-extrabold",children:[f," Photos"]})]}),l.websiteUrl&&c.jsxs("a",{href:l.websiteUrl,target:"_blank",rel:"noopener noreferrer",className:"absolute top-4 right-4 px-3 py-1 rounded-full bg-[#00d9ff] text-[#061017] font-extrabold text-[11px] flex items-center gap-1 hover:bg-cyan-300 transition-colors shadow-lg",children:[c.jsx(pa,{className:"w-3.5 h-3.5"})," Website Link ",c.jsx(tl,{className:"w-3 h-3"})]})]}),c.jsxs("div",{className:"p-6 space-y-3",children:[c.jsx("h3",{className:"text-xl font-black text-white group-hover:text-[#00d9ff] transition-colors flex items-center gap-2",children:l.title}),c.jsxs("div",{className:"p-3 rounded-xl bg-[#121929] border border-white/5 text-xs text-slate-300 leading-relaxed flex items-start gap-2",children:[c.jsx(sl,{className:"w-4 h-4 text-[#00d9ff] shrink-0 mt-0.5"}),c.jsx("span",{children:l.description})]}),c.jsxs("div",{className:"pt-2",children:[c.jsx("p",{className:"text-[10px] uppercase font-extrabold tracking-wider text-slate-500 mb-2",children:"Subdivisions & Photo Areas:"}),c.jsx("div",{className:"space-y-1.5",children:l.subdivisions.map((u,p)=>c.jsxs("div",{className:"p-2 rounded-lg bg-[#151e30] border border-white/5 flex flex-col sm:flex-row sm:items-center justify-between gap-1 text-[11px]",children:[c.jsxs("span",{className:"font-bold text-[#00d9ff] flex items-center gap-1.5",children:[c.jsx("span",{className:"w-1.5 h-1.5 rounded-full bg-[#00d9ff]"}),u.name]}),c.jsx("span",{className:"text-slate-400 text-[10px]",children:"4 Photo Area Slots"})]},p))})]})]})]}),c.jsxs("div",{className:"p-6 pt-0 flex items-center justify-between border-t border-white/5 mt-4",children:[l.websiteUrl?c.jsxs("a",{href:l.websiteUrl,target:"_blank",rel:"noopener noreferrer",className:"text-xs text-[#00d9ff] hover:underline font-bold flex items-center gap-1",children:[c.jsx(ma,{className:"w-3.5 h-3.5"})," Visit ",l.websiteUrl]}):c.jsx("span",{className:"text-[11px] text-slate-500 font-medium",children:"Click to view 4-photo gallery"}),c.jsxs("button",{onClick:()=>o(l.id),className:"px-4 py-2.5 rounded-xl bg-[#00d9ff]/15 hover:bg-[#00d9ff] text-[#00d9ff] hover:text-[#061017] border border-[#00d9ff]/30 font-bold text-xs transition-all flex items-center gap-1.5 cursor-pointer",children:[c.jsx("span",{children:"Open Photo Gallery"}),c.jsx(tl,{className:"w-3.5 h-3.5"})]})]})]},l.id)})}),a&&c.jsxs("div",{ref:r,id:"expanded-gallery",className:"mt-12 bg-[#0c121e] border-2 border-[#00d9ff]/40 rounded-3xl p-6 sm:p-8 shadow-2xl relative animate-fade-in scroll-mt-24",children:[c.jsxs("div",{className:"flex flex-col sm:flex-row sm:items-center justify-between pb-6 border-b border-white/10 gap-4",children:[c.jsxs("div",{children:[c.jsxs("div",{className:"flex items-center gap-2 text-xs text-[#00d9ff] font-extrabold uppercase tracking-widest mb-1",children:[c.jsx(el,{className:"w-4 h-4"})," Category Gallery Breakdown"]}),c.jsx("h3",{className:"text-2xl sm:text-3xl font-black text-white flex items-center gap-3",children:a.title}),c.jsx("p",{className:"text-xs text-slate-300 mt-2 p-3 bg-[#131c2e] border border-white/10 rounded-xl leading-relaxed max-w-3xl",children:a.description})]}),c.jsxs("div",{className:"flex items-center gap-3 shrink-0",children:[a.websiteUrl&&c.jsxs("a",{href:a.websiteUrl,target:"_blank",rel:"noopener noreferrer",className:"px-4 py-2 bg-[#00d9ff] text-[#061017] font-black text-xs rounded-xl hover:bg-cyan-300 transition-colors flex items-center gap-1.5 shadow-md",children:[c.jsx(pa,{className:"w-4 h-4"})," Visit Website Link ",c.jsx(ma,{className:"w-3.5 h-3.5"})]}),c.jsx("button",{onClick:()=>t(null),className:"p-2.5 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors cursor-pointer",title:"Close Gallery",children:c.jsx(ga,{className:"w-5 h-5"})})]})]}),a.subdivisions.length>1&&c.jsxs("div",{className:"flex items-center gap-2 mt-6 overflow-x-auto pb-2",children:[c.jsxs("button",{onClick:()=>s("All"),className:`px-3.5 py-1.5 rounded-xl text-xs font-bold transition-all cursor-pointer whitespace-nowrap ${n==="All"?"bg-[#00d9ff] text-[#061017]":"bg-[#151e30] text-slate-300 hover:text-white border border-white/10"}`,children:["All Subdivisions (",a.subdivisions.length,")"]}),a.subdivisions.map((l,d)=>c.jsxs("button",{onClick:()=>s(l.name),className:`px-3.5 py-1.5 rounded-xl text-xs font-bold transition-all cursor-pointer whitespace-nowrap ${n===l.name?"bg-[#00d9ff] text-[#061017]":"bg-[#151e30] text-slate-300 hover:text-white border border-white/10"}`,children:[l.name," (4 Photos)"]},d))]}),c.jsx("div",{className:"space-y-10 mt-8",children:a.subdivisions.filter(l=>n==="All"||n===l.name).map((l,d)=>c.jsxs("div",{className:"bg-[#101726] border border-white/10 rounded-2xl p-5 sm:p-6 space-y-4",children:[c.jsxs("div",{className:"pb-3 border-b border-white/5 space-y-2",children:[c.jsxs("div",{className:"flex flex-col sm:flex-row sm:items-center justify-between gap-2",children:[c.jsxs("div",{className:"flex items-center gap-2",children:[c.jsx("span",{className:"w-2.5 h-2.5 rounded-full bg-[#00d9ff] animate-pulse"}),c.jsx("h4",{className:"text-lg font-black text-white",children:l.name}),c.jsx("span",{className:"px-2.5 py-0.5 rounded-full bg-[#00d9ff]/20 text-[#00d9ff] text-[10px] font-extrabold border border-[#00d9ff]/30",children:l.badge})]}),c.jsx("span",{className:"text-[11px] font-mono text-slate-400",children:"Exact 4 Photos Slot Area"})]}),c.jsxs("div",{className:"p-3 bg-[#00d9ff]/5 border border-[#00d9ff]/20 rounded-xl text-xs text-slate-300 flex items-start gap-2",children:[c.jsx(sl,{className:"w-4 h-4 text-[#00d9ff] shrink-0 mt-0.5"}),c.jsxs("div",{children:[c.jsx("span",{className:"font-bold text-[#00d9ff] mr-1",children:"Subdivision Description:"}),c.jsx("span",{children:l.description})]})]})]}),c.jsx("div",{className:"grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4",children:l.photos.map(h=>c.jsxs("div",{className:"bg-[#151f33] border border-white/10 rounded-xl overflow-hidden hover:border-[#00d9ff]/50 transition-all duration-300 group flex flex-col justify-between",children:[c.jsxs("div",{className:"relative h-44 w-full overflow-hidden bg-[#0a0e17]",children:[c.jsx("img",{src:h.url,alt:h.title,onClick:()=>i(h.url,h.title),className:"w-full h-full object-cover group-hover:scale-110 transition-transform duration-500 cursor-pointer"}),c.jsxs("div",{className:"absolute top-2 left-2 px-2 py-0.5 rounded bg-black/80 backdrop-blur-sm text-[10px] font-mono text-[#00d9ff] font-bold border border-white/10",children:["Photo ",h.id," of 4"]}),c.jsxs("button",{onClick:()=>i(h.url,h.title),className:"absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center text-white gap-1.5 text-xs font-bold cursor-pointer",children:[c.jsx(nl,{className:"w-4 h-4 text-[#00d9ff]"})," Click to Zoom"]})]}),c.jsxs("div",{className:"p-3.5 space-y-2",children:[c.jsx("h5",{className:"text-xs font-bold text-white leading-tight line-clamp-1",children:h.title}),c.jsx("p",{className:"text-[11px] text-slate-400 leading-snug",children:h.caption}),c.jsxs("button",{onClick:()=>i(h.url,h.title),className:"w-full mt-1 py-1.5 px-3 rounded-lg border border-[#00d9ff]/40 text-[#00d9ff] hover:bg-[#00d9ff] hover:text-[#061017] font-bold text-xs transition-colors flex items-center justify-center gap-1 cursor-pointer",children:[c.jsx(nl,{className:"w-3.5 h-3.5"})," View Photo ",h.id]})]})]},h.id))})]},d))})]})]})]})}function ah(){return c.jsx("section",{id:"services",className:"py-[100px] relative",children:c.jsxs("div",{className:"container",children:[c.jsxs("div",{className:"section-title text-center mb-[55px]",children:[c.jsxs("h2",{className:"text-[40px] font-black mb-[10px]",children:["My ",c.jsx("span",{children:"Services"})]}),c.jsx("p",{className:"text-[#818c9c]",children:"Specialized areas of work & technical expertise"})]}),c.jsxs("div",{className:"services grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-[18px]",children:[c.jsxs("div",{className:"service bg-[#10151f] border border-[rgba(255,255,255,.07)] hover:border-[#00d9ff]/40 transition-all rounded-[15px] p-[28px_20px] text-center group",children:[c.jsx("div",{className:"service-icon text-[32px] mb-[12px] group-hover:scale-110 transition-transform",children:"💻"}),c.jsx("h3",{className:"text-[#00d9ff] font-bold text-lg mb-[8px]",children:"Web Development"}),c.jsx("p",{className:"text-[#929dab] text-xs leading-relaxed",children:"Modern responsive web applications, React Vite architectures, full-stack agency showcases (Nova Web), and custom UI/UX."})]}),c.jsxs("div",{className:"service bg-[#10151f] border border-[rgba(255,255,255,.07)] hover:border-[#00d9ff]/40 transition-all rounded-[15px] p-[28px_20px] text-center group",children:[c.jsx("div",{className:"service-icon text-[32px] mb-[12px] group-hover:scale-110 transition-transform",children:"🎮"}),c.jsx("h3",{className:"text-[#00d9ff] font-bold text-lg mb-[8px]",children:"Game & AI App Development"}),c.jsx("p",{className:"text-[#929dab] text-xs leading-relaxed",children:"Interactive puzzle engines (Colour Block), Urdu/English NLP AI assistants (Pak AI), and gamified educational portals (Learn Play)."})]}),c.jsxs("div",{className:"service bg-[#10151f] border border-[rgba(255,255,255,.07)] hover:border-[#00d9ff]/40 transition-all rounded-[15px] p-[28px_20px] text-center group",children:[c.jsx("div",{className:"service-icon text-[32px] mb-[12px] group-hover:scale-110 transition-transform",children:"🎨"}),c.jsx("h3",{className:"text-[#00d9ff] font-bold text-lg mb-[8px]",children:"Pixel Forge Graphic Design"}),c.jsx("p",{className:"text-[#929dab] text-xs leading-relaxed",children:"Corporate vector logo identity, luxury executive & mobile shop visiting cards, and high-converting promotional banners."})]}),c.jsxs("div",{className:"service bg-[#10151f] border border-[rgba(255,255,255,.07)] hover:border-[#00d9ff]/40 transition-all rounded-[15px] p-[28px_20px] text-center group",children:[c.jsx("div",{className:"service-icon text-[32px] mb-[12px] group-hover:scale-110 transition-transform",children:"🏛️"}),c.jsx("h3",{className:"text-[#00d9ff] font-bold text-lg mb-[8px]",children:"2D & 3D Architecture"}),c.jsx("p",{className:"text-[#929dab] text-xs leading-relaxed",children:"Precision 2D smart flooring room mapping diagrams, CAD material tile plans, and photorealistic 3D house exterior & interior renders."})]})]})]})})}function oh({onOpenLightbox:i}){const[e,t]=xe.useState("Please select a service or project"),[n,s]=xe.useState("$10 - $50"),[r,a]=xe.useState({}),[o,l]=xe.useState({}),d=v=>{a(g=>({...g,[v]:!g[v]}))},h=v=>{l(g=>({...g,[v]:!g[v]}))},f=`Hello Muhammad Ali,

I am interested in hiring you for: ${e}.
Estimated Budget: ${n} (Criteria: $10+)

I viewed this work on your portfolio and would like to discuss my requirements, availability and project details.

Please share more details and let me know how we can proceed.

Thank you.`,u=encodeURIComponent(f),p=`https://wa.me/923426793428?text=${u}`,x=`https://mail.google.com/mail/?view=cm&fs=1&to=alimuhammadhvn81@gmail.com&su=${encodeURIComponent("Hiring Inquiry — "+e)}&body=${u}`;return c.jsx("section",{id:"hire",className:"py-[100px]",children:c.jsxs("div",{className:"container",children:[c.jsxs("div",{className:"section-title text-center mb-[55px]",children:[c.jsxs("h2",{className:"text-[40px] font-black mb-[10px]",children:[c.jsx("span",{children:"Hire"})," Me"]}),c.jsx("p",{className:"text-[#818c9c]",children:"Select a complete service or a specific project/photo • Budget criteria: $10 or above"})]}),c.jsxs("div",{className:"hire-box max-w-[950px] mx-auto bg-[#10151f] border border-[#00d9ff]/25 rounded-[18px] p-[30px]",children:[c.jsxs("div",{className:"mb-6 p-3.5 bg-gradient-to-r from-[#00d9ff]/10 via-[#10151f] to-emerald-500/10 border border-[#00d9ff]/30 rounded-xl flex items-center justify-between flex-wrap gap-2 text-xs sm:text-sm",children:[c.jsxs("div",{className:"flex items-center gap-2 text-[#cbd5e1]",children:[c.jsx("span",{className:"text-base",children:"💰"}),c.jsxs("span",{children:[c.jsx("strong",{children:"Budget Criteria:"})," Projects start from ",c.jsx("span",{className:"text-[#00d9ff] font-extrabold",children:"$10 or above ($10+)"})]})]}),c.jsx("span",{className:"text-emerald-400 font-bold bg-emerald-500/10 px-2.5 py-1 rounded-lg border border-emerald-500/20",children:"Min $10 USD"})]}),c.jsxs("div",{className:"hire-box-title text-center mb-[25px]",children:[c.jsxs("h3",{className:"text-[28px] font-bold",children:["What would you like to ",c.jsx("span",{className:"text-[#00d9ff]",children:"hire me for?"})]}),c.jsx("p",{className:"text-[#929dab] text-sm mt-1",children:"Choose the complete service or select a specific project/photo."})]}),c.jsxs("div",{className:"hire-category border border-white/10 rounded-xl mb-3 overflow-hidden bg-[#0d121b]",children:[c.jsxs("button",{onClick:()=>d("web"),className:"hire-category-header w-full p-[17px_20px] bg-transparent border-0 text-white flex justify-between items-center cursor-pointer font-bold",children:[c.jsx("span",{children:"💻 Web Development"}),c.jsx("span",{className:`arrow text-[#00d9ff] transition ${r.web?"rotate-180":""}`,children:"▼"})]}),r.web&&c.jsxs("div",{className:"hire-content p-[0_18px_18px]",children:[c.jsx("div",{onClick:()=>t("Web Development (Full Service)"),className:`full-service p-[13px_15px] bg-[#18202c] rounded-lg border cursor-pointer mb-3 ${e==="Web Development (Full Service)"?"border-[#00d9ff] text-[#00d9ff] font-bold":"border-white/10"}`,children:"Entire Web Development"}),c.jsxs("div",{className:"hire-sub border-t border-white/10 pt-3",children:[c.jsxs("div",{onClick:()=>h("novaWeb"),className:"hire-sub-title flex justify-between items-center cursor-pointer py-2 font-bold text-sm text-[#00d9ff]",children:[c.jsx("span",{children:"Nova Web Studio"}),c.jsx("span",{children:o.novaWeb?"▲":"▼"})]}),o.novaWeb&&c.jsx("div",{className:"hire-sub-content space-y-2 pt-2",children:[{n:1,title:"Photo 1 — Hero Section & Landing Page",url:"https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&auto=format&fit=crop&q=80"},{n:2,title:"Photo 2 — Responsive Mobile & Tablet Views",url:"https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?w=800&auto=format&fit=crop&q=80"},{n:3,title:"Photo 3 — Services & Interactive Features",url:"https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&auto=format&fit=crop&q=80"},{n:4,title:"Photo 4 — Admin Portal & Dark Theme UI",url:"https://images.unsplash.com/photo-1551836022-d5d88e9218df?w=800&auto=format&fit=crop&q=80"}].map(v=>c.jsxs("div",{className:"hire-photo-row flex justify-between items-center p-2.5 rounded-lg bg-[#18202c] border border-transparent hover:border-[#00d9ff]/30",children:[c.jsx("span",{onClick:()=>t(`Web Development — Nova Web Studio — ${v.title}`),className:"cursor-pointer flex-1 text-xs text-[#cbd5e1] hover:text-[#00d9ff]",children:v.title}),c.jsx("button",{onClick:()=>i(v.url,`Nova Web Studio — ${v.title}`),className:"photo-open border border-[#00d9ff] text-[#00d9ff] px-2.5 py-1 rounded text-xs bg-transparent cursor-pointer hover:bg-[#00d9ff]/10",children:"Open"})]},v.n))})]})]})]}),c.jsxs("div",{className:"hire-category border border-white/10 rounded-xl mb-3 overflow-hidden bg-[#0d121b]",children:[c.jsxs("button",{onClick:()=>d("game"),className:"hire-category-header w-full p-[17px_20px] bg-transparent border-0 text-white flex justify-between items-center cursor-pointer font-bold",children:[c.jsx("span",{children:"🎮 Game & AI App Development"}),c.jsx("span",{className:`arrow text-[#00d9ff] transition ${r.game?"rotate-180":""}`,children:"▼"})]}),r.game&&c.jsxs("div",{className:"hire-content p-[0_18px_18px]",children:[c.jsx("div",{onClick:()=>t("Game & AI App Development (Full Service)"),className:`full-service p-[13px_15px] bg-[#18202c] rounded-lg border cursor-pointer mb-3 ${e==="Game & AI App Development (Full Service)"?"border-[#00d9ff] text-[#00d9ff] font-bold":"border-white/10"}`,children:"Entire Game & AI App Development"}),c.jsxs("div",{className:"hire-sub border-t border-white/10 pt-3 mb-2",children:[c.jsxs("div",{onClick:()=>h("colorBlocks"),className:"hire-sub-title flex justify-between items-center cursor-pointer py-2 font-bold text-sm text-[#00d9ff]",children:[c.jsx("span",{children:"Colour Block"}),c.jsx("span",{children:o.colorBlocks?"▲":"▼"})]}),o.colorBlocks&&c.jsx("div",{className:"hire-sub-content space-y-2 pt-2",children:[{n:1,title:"Photo 1 — Intro Title Screen (Ali Game Hubs)",url:"/images/color_block_1.jpg"},{n:2,title:"Photo 2 — Mobile Puzzle Gameplay (Level 35)",url:"/images/color_block_2.jpg"},{n:3,title:"Photo 3 — Free Mode Board Grid",url:"/images/color_block_3.jpg"},{n:4,title:"Photo 4 — Victory Trophy Screen (All 25 Levels)",url:"/images/color_block_4.jpg"}].map(v=>c.jsxs("div",{className:"hire-photo-row flex justify-between items-center p-2.5 rounded-lg bg-[#18202c]",children:[c.jsx("span",{onClick:()=>t(`Game & AI — Colour Block — ${v.title}`),className:"cursor-pointer flex-1 text-xs text-[#cbd5e1] hover:text-[#00d9ff]",children:v.title}),c.jsx("button",{onClick:()=>i(v.url,`Colour Block — ${v.title}`),className:"photo-open border border-[#00d9ff] text-[#00d9ff] px-2.5 py-1 rounded text-xs bg-transparent cursor-pointer hover:bg-[#00d9ff]/10",children:"Open"})]},v.n))})]}),c.jsxs("div",{className:"hire-sub border-t border-white/10 pt-2 mb-2",children:[c.jsxs("div",{onClick:()=>h("pakAI"),className:"hire-sub-title flex justify-between items-center cursor-pointer py-2 font-bold text-sm text-[#00d9ff]",children:[c.jsx("span",{children:"Pak AI"}),c.jsx("span",{children:o.pakAI?"▲":"▼"})]}),o.pakAI&&c.jsx("div",{className:"hire-sub-content space-y-2 pt-2",children:[{n:1,title:"Photo 1 — PakAI Emblem & Logo",url:"/images/pakai_1.jpg"},{n:2,title:"Photo 2 — Smartphone UI & Pakistan Map",url:"/images/pakai_2.jpg"},{n:3,title:"Photo 3 — Real-Time Chat Screen",url:"/images/pakai_3.jpg"},{n:4,title:"Photo 4 — Smart Assistant Hero Banner",url:"/images/pakai_4.jpg"}].map(v=>c.jsxs("div",{className:"hire-photo-row flex justify-between items-center p-2.5 rounded-lg bg-[#18202c]",children:[c.jsx("span",{onClick:()=>t(`Game & AI — Pak AI — ${v.title}`),className:"cursor-pointer flex-1 text-xs text-[#cbd5e1] hover:text-[#00d9ff]",children:v.title}),c.jsx("button",{onClick:()=>i(v.url,`Pak AI — ${v.title}`),className:"photo-open border border-[#00d9ff] text-[#00d9ff] px-2.5 py-1 rounded text-xs bg-transparent cursor-pointer hover:bg-[#00d9ff]/10",children:"Open"})]},v.n))})]}),c.jsxs("div",{className:"hire-sub border-t border-white/10 pt-2",children:[c.jsxs("div",{onClick:()=>h("learnPlay"),className:"hire-sub-title flex justify-between items-center cursor-pointer py-2 font-bold text-sm text-[#00d9ff]",children:[c.jsx("span",{children:"Learn Play"}),c.jsx("span",{children:o.learnPlay?"▲":"▼"})]}),o.learnPlay&&c.jsx("div",{className:"hire-sub-content space-y-2 pt-2",children:[{n:1,title:"Photo 1 — LearnPlay Educational Logo",url:"/images/learnplay_1.jpg"},{n:2,title:"Photo 2 — Tablet Dashboard & Subjects",url:"/images/learnplay_2.jpg"},{n:3,title:"Photo 3 — Learn Today Lead Tomorrow Banner",url:"/images/learnplay_3.jpg"},{n:4,title:"Photo 4 — Quiz Victory Score Popup",url:"/images/learnplay_4.jpg"}].map(v=>c.jsxs("div",{className:"hire-photo-row flex justify-between items-center p-2.5 rounded-lg bg-[#18202c]",children:[c.jsx("span",{onClick:()=>t(`Game & AI — Learn Play — ${v.title}`),className:"cursor-pointer flex-1 text-xs text-[#cbd5e1] hover:text-[#00d9ff]",children:v.title}),c.jsx("button",{onClick:()=>i(v.url,`Learn Play — ${v.title}`),className:"photo-open border border-[#00d9ff] text-[#00d9ff] px-2.5 py-1 rounded text-xs bg-transparent cursor-pointer hover:bg-[#00d9ff]/10",children:"Open"})]},v.n))})]})]})]}),c.jsxs("div",{className:"hire-category border border-white/10 rounded-xl mb-3 overflow-hidden bg-[#0d121b]",children:[c.jsxs("button",{onClick:()=>d("graphic"),className:"hire-category-header w-full p-[17px_20px] bg-transparent border-0 text-white flex justify-between items-center cursor-pointer font-bold",children:[c.jsx("span",{children:"🎨 Pixel Forge Graphic Design"}),c.jsx("span",{className:`arrow text-[#00d9ff] transition ${r.graphic?"rotate-180":""}`,children:"▼"})]}),r.graphic&&c.jsxs("div",{className:"hire-content p-[0_18px_18px]",children:[c.jsx("div",{onClick:()=>t("Pixel Forge Graphic Design (Full Service)"),className:`full-service p-[13px_15px] bg-[#18202c] rounded-lg border cursor-pointer mb-3 ${e==="Pixel Forge Graphic Design (Full Service)"?"border-[#00d9ff] text-[#00d9ff] font-bold":"border-white/10"}`,children:"Entire Pixel Forge Graphic Design"}),c.jsxs("div",{className:"hire-sub border-t border-white/10 pt-3 mb-2",children:[c.jsxs("div",{onClick:()=>h("logoDesign"),className:"hire-sub-title flex justify-between items-center cursor-pointer py-2 font-bold text-sm text-[#00d9ff]",children:[c.jsx("span",{children:"Logo Design"}),c.jsx("span",{children:o.logoDesign?"▲":"▼"})]}),o.logoDesign&&c.jsx("div",{className:"hire-sub-content space-y-2 pt-2",children:[{n:1,title:"Photo 1 — Pixel Forge Studio Creative Workspace",url:"/images/pixelforge_studio.jpg"},{n:2,title:"Photo 2 — Stewerds Family Gold Crown Emblem",url:"/images/logo_design_2.jpg"},{n:3,title:"Photo 3 — Luxury Gold CL Ring Logo",url:"/images/logo_design_3.jpg"},{n:4,title:"Photo 4 — Gold CL Cream Badge Logo",url:"/images/logo_design_4.jpg"}].map(v=>c.jsxs("div",{className:"hire-photo-row flex justify-between items-center p-2.5 rounded-lg bg-[#18202c]",children:[c.jsx("span",{onClick:()=>t(`Pixel Forge — Logo Design — ${v.title}`),className:"cursor-pointer flex-1 text-xs text-[#cbd5e1] hover:text-[#00d9ff]",children:v.title}),c.jsx("button",{onClick:()=>i(v.url,`Logo Design — ${v.title}`),className:"photo-open border border-[#00d9ff] text-[#00d9ff] px-2.5 py-1 rounded text-xs bg-transparent cursor-pointer hover:bg-[#00d9ff]/10",children:"Open"})]},v.n))})]}),c.jsxs("div",{className:"hire-sub border-t border-white/10 pt-2 mb-2",children:[c.jsxs("div",{onClick:()=>h("visitingCard"),className:"hire-sub-title flex justify-between items-center cursor-pointer py-2 font-bold text-sm text-[#00d9ff]",children:[c.jsx("span",{children:"Visiting Card"}),c.jsx("span",{children:o.visitingCard?"▲":"▼"})]}),o.visitingCard&&c.jsx("div",{className:"hire-sub-content space-y-2 pt-2",children:[{n:1,title:"Photo 1 — Muhammad Ali (Creative Developer)",url:"/images/visiting_card_1.jpg"},{n:2,title:"Photo 2 — Jhan Mobile Hub (Luxury Gold Card)",url:"/images/visiting_card_2.jpg"},{n:3,title:"Photo 3 — Anshu Mobile Shop (Tech Blue Card)",url:"/images/visiting_card_3.jpg"},{n:4,title:"Photo 4 — Mobile Zone (CEO Faizan Amjad)",url:"/images/visiting_card_4.jpg"}].map(v=>c.jsxs("div",{className:"hire-photo-row flex justify-between items-center p-2.5 rounded-lg bg-[#18202c]",children:[c.jsx("span",{onClick:()=>t(`Pixel Forge — Visiting Card — ${v.title}`),className:"cursor-pointer flex-1 text-xs text-[#cbd5e1] hover:text-[#00d9ff]",children:v.title}),c.jsx("button",{onClick:()=>i(v.url,`Visiting Card — ${v.title}`),className:"photo-open border border-[#00d9ff] text-[#00d9ff] px-2.5 py-1 rounded text-xs bg-transparent cursor-pointer hover:bg-[#00d9ff]/10",children:"Open"})]},v.n))})]}),c.jsxs("div",{className:"hire-sub border-t border-white/10 pt-2",children:[c.jsxs("div",{onClick:()=>h("banner"),className:"hire-sub-title flex justify-between items-center cursor-pointer py-2 font-bold text-sm text-[#00d9ff]",children:[c.jsx("span",{children:"Banner"}),c.jsx("span",{children:o.banner?"▲":"▼"})]}),o.banner&&c.jsx("div",{className:"hire-sub-content space-y-2 pt-2",children:[{n:1,title:"Photo 1 — Aala Hazrat Muradabadi Biryani Banner",url:"/images/banner_1.jpg"},{n:2,title:"Photo 2 — Travel The World Explorer Banner",url:"/images/banner_2.jpg"},{n:3,title:"Photo 3 — Special Coffee Shop 30% Discount Banner",url:"/images/banner_3.jpg"},{n:4,title:"Photo 4 — Special Discount Food Shop Banner",url:"/images/banner_4.jpg"}].map(v=>c.jsxs("div",{className:"hire-photo-row flex justify-between items-center p-2.5 rounded-lg bg-[#18202c]",children:[c.jsx("span",{onClick:()=>t(`Pixel Forge — Banner — ${v.title}`),className:"cursor-pointer flex-1 text-xs text-[#cbd5e1] hover:text-[#00d9ff]",children:v.title}),c.jsx("button",{onClick:()=>i(v.url,`Banner — ${v.title}`),className:"photo-open border border-[#00d9ff] text-[#00d9ff] px-2.5 py-1 rounded text-xs bg-transparent cursor-pointer hover:bg-[#00d9ff]/10",children:"Open"})]},v.n))})]})]})]}),c.jsxs("div",{className:"hire-category border border-white/10 rounded-xl mb-3 overflow-hidden bg-[#0d121b]",children:[c.jsxs("button",{onClick:()=>d("architecture"),className:"hire-category-header w-full p-[17px_20px] bg-transparent border-0 text-white flex justify-between items-center cursor-pointer font-bold",children:[c.jsx("span",{children:"🏛️ 2D & 3D Architecture"}),c.jsx("span",{className:`arrow text-[#00d9ff] transition ${r.architecture?"rotate-180":""}`,children:"▼"})]}),r.architecture&&c.jsxs("div",{className:"hire-content p-[0_18px_18px]",children:[c.jsx("div",{onClick:()=>t("2D & 3D Architecture (Full Service)"),className:`full-service p-[13px_15px] bg-[#18202c] rounded-lg border cursor-pointer mb-3 ${e==="2D & 3D Architecture (Full Service)"?"border-[#00d9ff] text-[#00d9ff] font-bold":"border-white/10"}`,children:"Entire 2D & 3D Architecture"}),c.jsxs("div",{className:"hire-sub border-t border-white/10 pt-3 mb-2",children:[c.jsxs("div",{onClick:()=>h("smartFlooring"),className:"hire-sub-title flex justify-between items-center cursor-pointer py-2 font-bold text-sm text-[#00d9ff]",children:[c.jsx("span",{children:"2D Smart Flooring"}),c.jsx("span",{children:o.smartFlooring?"▲":"▼"})]}),o.smartFlooring&&c.jsx("div",{className:"hire-sub-content space-y-2 pt-2",children:[{n:1,title:"Photo 1 — Residential Interior Smart Layout",url:"https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&auto=format&fit=crop&q=80"},{n:2,title:"Photo 2 — Commercial Space Blueprint",url:"https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=800&auto=format&fit=crop&q=80"},{n:3,title:"Photo 3 — Modern Tile & Material Distribution",url:"https://images.unsplash.com/photo-1524758631624-e2822e304c36?w=800&auto=format&fit=crop&q=80"},{n:4,title:"Photo 4 — Scaled Utility & Dimension Map",url:"https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=800&auto=format&fit=crop&q=80"}].map(v=>c.jsxs("div",{className:"hire-photo-row flex justify-between items-center p-2.5 rounded-lg bg-[#18202c]",children:[c.jsx("span",{onClick:()=>t(`2D Smart Flooring — ${v.title}`),className:"cursor-pointer flex-1 text-xs text-[#cbd5e1] hover:text-[#00d9ff]",children:v.title}),c.jsx("button",{onClick:()=>i(v.url,`2D Smart Flooring — ${v.title}`),className:"photo-open border border-[#00d9ff] text-[#00d9ff] px-2.5 py-1 rounded text-xs bg-transparent cursor-pointer hover:bg-[#00d9ff]/10",children:"Open"})]},v.n))})]}),c.jsxs("div",{className:"hire-sub border-t border-white/10 pt-2",children:[c.jsxs("div",{onClick:()=>h("houseDesign3D"),className:"hire-sub-title flex justify-between items-center cursor-pointer py-2 font-bold text-sm text-[#00d9ff]",children:[c.jsx("span",{children:"3D House Design"}),c.jsx("span",{children:o.houseDesign3D?"▲":"▼"})]}),o.houseDesign3D&&c.jsx("div",{className:"hire-sub-content space-y-2 pt-2",children:[{n:1,title:"Photo 1 — Modern Exterior Elevation & Facade",url:"https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800&auto=format&fit=crop&q=80"},{n:2,title:"Photo 2 — Luxury Living Room Interior Render",url:"https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?w=800&auto=format&fit=crop&q=80"},{n:3,title:"Photo 3 — Panoramic Architectural Walkthrough",url:"https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800&auto=format&fit=crop&q=80"},{n:4,title:"Photo 4 — Night Exterior Lighting Study",url:"https://images.unsplash.com/photo-1600585154526-990dced4db0d?w=800&auto=format&fit=crop&q=80"}].map(v=>c.jsxs("div",{className:"hire-photo-row flex justify-between items-center p-2.5 rounded-lg bg-[#18202c]",children:[c.jsx("span",{onClick:()=>t(`3D House Design — ${v.title}`),className:"cursor-pointer flex-1 text-xs text-[#cbd5e1] hover:text-[#00d9ff]",children:v.title}),c.jsx("button",{onClick:()=>i(v.url,`3D House Design — ${v.title}`),className:"photo-open border border-[#00d9ff] text-[#00d9ff] px-2.5 py-1 rounded text-xs bg-transparent cursor-pointer hover:bg-[#00d9ff]/10",children:"Open"})]},v.n))})]})]})]}),c.jsxs("div",{className:"selected-service mt-[25px] p-[20px] rounded-[12px] bg-[#18202c] border border-[#00d9ff]/25 text-center",children:[c.jsx("p",{className:"text-[#929dab] text-sm",children:"Selected option"}),c.jsx("strong",{className:"text-[#00d9ff] block my-2 text-lg",children:e}),c.jsxs("div",{className:"max-w-md mx-auto my-3 text-left",children:[c.jsxs("label",{className:"block text-xs font-bold text-[#818c9c] mb-1.5 flex items-center justify-between",children:[c.jsx("span",{children:"Select Estimated Budget (Criteria: $10+)"}),c.jsx("span",{className:"text-[#00d9ff] font-extrabold",children:"Min $10 USD"})]}),c.jsxs("select",{value:n,onChange:v=>s(v.target.value),className:"w-full p-2.5 rounded-lg bg-[#0c1017] border border-white/15 text-white text-sm outline-none focus:border-[#00d9ff]",children:[c.jsx("option",{value:"$10 - $50",children:"$10 – $50 (Small Task / Quick Fix)"}),c.jsx("option",{value:"$50 - $150",children:"$50 – $150 (Standard Project)"}),c.jsx("option",{value:"$150 - $300",children:"$150 – $300 (Advanced Project / App)"}),c.jsx("option",{value:"$300+",children:"$300+ (Full-Scale Custom Solution)"})]})]}),c.jsxs("div",{className:"hire-buttons flex justify-center gap-3 flex-wrap mt-4",children:[c.jsx("a",{href:p,target:"_blank",rel:"noopener noreferrer",className:"hire-btn px-5 py-3 rounded-lg border border-[#00d9ff] text-[#00d9ff] font-bold",children:"💬 WhatsApp"}),c.jsx("a",{href:x,target:"_blank",rel:"noopener noreferrer",className:"hire-btn px-5 py-3 rounded-lg border border-[#00d9ff] text-[#00d9ff] font-bold",children:"✉️ Gmail"})]})]})]})]})})}function lh(){return c.jsx("section",{id:"professional-extras",className:"py-[100px] relative",children:c.jsxs("div",{className:"container",children:[c.jsxs("div",{className:"section-title text-center mb-[55px]",children:[c.jsxs("h2",{className:"text-[40px] font-black mb-[10px]",children:["Why ",c.jsx("span",{children:"Work With Me"})]}),c.jsx("p",{className:"text-[#818c9c]",children:"Professional approach beyond the portfolio"})]}),c.jsx("div",{className:"professional-grid grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-[20px] max-w-[1050px] mx-auto",children:th.map((i,e)=>c.jsxs("div",{className:"professional-card bg-[#10151f] border border-[rgba(255,255,255,.07)] rounded-[16px] p-[25px]",children:[c.jsx("div",{className:"extra-icon text-[30px] mb-[12px]",children:i.icon}),c.jsx("h3",{className:"font-bold text-lg mb-[8px]",children:i.title}),c.jsx("p",{className:"text-[#929dab] text-sm",children:i.desc})]},e))}),c.jsxs("div",{className:"section-title text-center mb-[55px] mt-[75px]",children:[c.jsxs("h2",{className:"text-[40px] font-black mb-[10px]",children:["My ",c.jsx("span",{children:"Work Process"})]}),c.jsx("p",{className:"text-[#818c9c]",children:"From idea to final delivery"})]}),c.jsx("div",{className:"professional-grid grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-[20px] max-w-[1050px] mx-auto",children:eh.map((i,e)=>c.jsxs("div",{className:"professional-card bg-[#10151f] border border-[rgba(255,255,255,.07)] rounded-[16px] p-[25px]",children:[c.jsx("div",{className:"process-number w-[42px] h-[42px] rounded-full flex items-center justify-center border border-[#00d9ff] text-[#00d9ff] font-extrabold mb-[15px] bg-[#00d9ff]/10",children:i.number}),c.jsx("h3",{className:"font-bold text-lg mb-[8px]",children:i.title}),c.jsx("p",{className:"text-[#929dab] text-sm",children:i.desc})]},e))})]})})}function ch(){const[i,e]=xe.useState({profile_views:1248,satisfied:89,unsatisfied:2,total_feedback:91,average_rating:4.9,positive:145,negative:3});return c.jsx("section",{className:"overview-section py-[86px] pb-[35px] relative",id:"portfolioOverview",children:c.jsxs("div",{className:"container",children:[c.jsxs("div",{className:"section-title text-center mb-[55px]",children:[c.jsxs("h2",{className:"text-[40px] font-black mb-[10px]",children:["Portfolio ",c.jsx("span",{children:"Overview"})]}),c.jsx("p",{className:"text-[#818c9c]",children:"A live snapshot of reach, client satisfaction and community feedback."})]}),c.jsxs("div",{className:"overview-grid grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-[14px]",children:[c.jsxs("div",{className:"overview-card min-h-[138px] p-[22px] border border-[rgba(255,255,255,.08)] bg-[#10151f] rounded-[22px] flex flex-col justify-between",children:[c.jsx("strong",{className:"text-[32px] leading-none text-[#00d9ff]",children:i.profile_views.toLocaleString()}),c.jsx("span",{className:"text-[11px] uppercase tracking-[1.2px] text-[#929dab] font-black",children:"Profile Reach"}),c.jsx("small",{className:"text-[12px] text-[#929dab]",children:"Total portfolio visits"})]}),c.jsxs("div",{className:"overview-card min-h-[138px] p-[22px] border border-[rgba(255,255,255,.08)] bg-[#10151f] rounded-[22px] flex flex-col justify-between",children:[c.jsx("strong",{className:"text-[32px] leading-none text-[#00d9ff]",children:i.satisfied}),c.jsx("span",{className:"text-[11px] uppercase tracking-[1.2px] text-[#929dab] font-black",children:"Client Satisfaction"}),c.jsx("small",{className:"text-[12px] text-[#929dab]",children:"Satisfactory feedback"})]}),c.jsxs("div",{className:"overview-card min-h-[138px] p-[22px] border border-[rgba(255,255,255,.08)] bg-[#10151f] rounded-[22px] flex flex-col justify-between",children:[c.jsx("strong",{className:"text-[32px] leading-none text-[#00d9ff]",children:i.unsatisfied}),c.jsx("span",{className:"text-[11px] uppercase tracking-[1.2px] text-[#929dab] font-black",children:"Improvement Opportunities"}),c.jsx("small",{className:"text-[12px] text-[#929dab]",children:"Unsatisfactory feedback"})]}),c.jsxs("div",{className:"overview-card min-h-[138px] p-[22px] border border-[rgba(255,255,255,.08)] bg-[#10151f] rounded-[22px] flex flex-col justify-between",children:[c.jsx("strong",{className:"text-[32px] leading-none text-[#00d9ff]",children:i.total_feedback}),c.jsx("span",{className:"text-[11px] uppercase tracking-[1.2px] text-[#929dab] font-black",children:"Total Feedback"}),c.jsx("small",{className:"text-[12px] text-[#929dab]",children:"Published reviews"})]}),c.jsxs("div",{className:"overview-card min-h-[138px] p-[22px] border border-[rgba(255,255,255,.08)] bg-[#10151f] rounded-[22px] flex flex-col justify-between",children:[c.jsx("strong",{className:"text-[32px] leading-none text-[#00d9ff]",children:i.average_rating.toFixed(1)}),c.jsx("span",{className:"text-[11px] uppercase tracking-[1.2px] text-[#929dab] font-black",children:"Overall Rating"}),c.jsx("small",{className:"text-[12px] text-[#929dab]",children:"Average out of 5"})]}),c.jsxs("div",{className:"overview-card min-h-[138px] p-[22px] border border-[rgba(255,255,255,.08)] bg-[#10151f] rounded-[22px] flex flex-col justify-between",children:[c.jsx("strong",{className:"text-[32px] leading-none text-[#00d9ff]",children:i.positive}),c.jsx("span",{className:"text-[11px] uppercase tracking-[1.2px] text-[#929dab] font-black",children:"Positive Feedback"}),c.jsx("small",{className:"text-[12px] text-[#929dab]",children:"👍 community reactions"})]})]})]})})}const dh=[{id:"fb-101",clientName:"Alex Sterling",clientEmail:"alex.s@techcorp.io",rating:5,comment:"Muhammad Ali delivered a phenomenal, lightning-fast portfolio web app with pristine responsiveness and gorgeous dark theme design. Absolute pleasure to work with!",source:"LinkedIn",date:"Aug 26, 2026",codeUsed:"Ali-92K4M1",googleVerified:!0,avatarLetter:"AS",adminReply:"Thank you Alex! It was a pleasure collaborating on your agency platform."},{id:"fb-102",clientName:"Sophia Chen",clientEmail:"sophia.c@designstudio.org",rating:5,comment:"Exceptional full-stack web engineering! The admin portal and live interactive features are built to world-class standards.",source:"Fiverr / Upwork",date:"Aug 24, 2026",codeUsed:"Ali-7X9B3C",googleVerified:!0,avatarLetter:"SC",imageUrl:"https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=300&auto=format&fit=crop&q=80",adminReply:"Appreciate your awesome feedback Sophia! Best of luck with your design studio."}];function hh(){const[i,e]=xe.useState(""),[t,n]=xe.useState(""),[s,r]=xe.useState(5),[a,o]=xe.useState("Direct Client"),[l,d]=xe.useState(""),[h,f]=xe.useState(""),[u,p]=xe.useState(""),[x,v]=xe.useState(!1),[g,m]=xe.useState(!1),[M,T]=xe.useState(null),y=xe.useRef(null),[A,w]=xe.useState(!1),[R,_]=xe.useState(null),[E,N]=xe.useState(!1),[P,F]=xe.useState(dh),j=V=>{var se;const ee=(se=V.target.files)==null?void 0:se[0];if(ee){if(ee.size>5*1024*1024){p("Image size should be less than 5MB."),v(!0);return}const ge=new FileReader;ge.onloadend=()=>{T(ge.result),p("Image attached successfully."),v(!1)},ge.readAsDataURL(ee)}},K=()=>{T(null),y.current&&(y.current.value="")},k=()=>{N(!0)},X=(V,ee)=>{_({name:ee||"Verified Google Client",email:V||"client.verified@gmail.com",picture:"https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=150&auto=format&fit=crop&q=80"}),w(!0),N(!1),p("Google Identity authenticated successfully!"),v(!1)},W=async V=>{var ee;if(V.preventDefault(),v(!1),!i.trim()||!i.trim().toUpperCase().startsWith("ALI-")){p("Invalid code format. Code must start with Ali- followed by 6 alphanumeric characters (e.g. Ali-8H4F2L)."),v(!0);return}if(!t.trim()){p("Please write your feedback message."),v(!0);return}if(!s){p("Please select a rating score from 1 to 5 stars."),v(!0);return}m(!0),p("Verifying one-time Ali- code and Google identity…");try{const se=await fetch("/api/feedback/submit",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({code:i.trim(),clientName:R?R.name:"Verified Client",clientEmail:R?R.email:"client@gmail.com",rating:s,comment:t.trim(),source:a,imageUrl:M||(R?R.picture:void 0),googleVerified:A})});if(se.ok){const Xe={id:((ee=(await se.json()).feedback)==null?void 0:ee.id)||`fb-${Date.now()}`,clientName:R?R.name:"Verified Client",clientEmail:R?R.email:"client@gmail.com",rating:s,comment:t.trim(),source:a,date:new Date().toLocaleDateString("en-US",{month:"short",day:"numeric",year:"numeric"}),codeUsed:i.trim().toUpperCase(),workLink:l.trim()||void 0,imageUrl:M||(R?R.picture:void 0),avatarLetter:(R?R.name:"VC").substring(0,2).toUpperCase(),googleVerified:A||!0};F([Xe,...P]),p("Feedback submitted and published successfully! Your Ali- code has now been consumed."),v(!1),e(""),n(""),r(5),T(null),d(""),y.current&&(y.current.value="")}else{const ge=await se.json().catch(()=>({}));p(ge.error||"Feedback submission failed. Please verify your Ali- code."),v(!0)}}catch{const se={id:`fb-${Date.now()}`,clientName:R?R.name:"Verified Client",clientEmail:R?R.email:"client@gmail.com",rating:s,comment:t.trim(),source:a,date:new Date().toLocaleDateString("en-US",{month:"short",day:"numeric",year:"numeric"}),codeUsed:i.trim().toUpperCase(),workLink:l.trim()||void 0,imageUrl:M||(R?R.picture:void 0),avatarLetter:(R?R.name:"VC").substring(0,2).toUpperCase(),googleVerified:A||!0};F([se,...P]),p("Feedback published successfully! Thank you for your review."),v(!1),e(""),n(""),r(5),T(null),d(""),y.current&&(y.current.value="")}finally{m(!1)}},Q=P.filter(V=>V.clientName.toLowerCase().includes(h.toLowerCase())||V.comment.toLowerCase().includes(h.toLowerCase())||V.codeUsed.toLowerCase().includes(h.toLowerCase()));return c.jsxs("section",{id:"feedback",className:"py-20 bg-[#070b12] text-slate-200 relative overflow-hidden",children:[c.jsx("div",{className:"absolute top-1/3 left-1/2 -translate-x-1/2 w-[700px] h-[700px] bg-[#00d9ff]/5 rounded-full blur-3xl pointer-events-none"}),c.jsxs("div",{className:"max-w-6xl mx-auto px-4 relative z-10",children:[c.jsxs("div",{className:"text-center mb-12",children:[c.jsxs("h2",{className:"text-3xl sm:text-4xl font-black text-white",children:["Client ",c.jsx("span",{className:"text-[#00d9ff]",children:"Feedback & Testimonials"})]}),c.jsxs("p",{className:"text-sm text-slate-400 mt-2 max-w-lg mx-auto",children:["Submit your feedback using your single-use ",c.jsx("strong",{children:"Ali-"})," code and Google Authentication"]})]}),c.jsxs("div",{className:"max-w-4xl mx-auto bg-[#0f1523] border border-[#00d9ff]/30 rounded-2xl p-6 sm:p-8 shadow-2xl",children:[c.jsxs("form",{onSubmit:W,className:"space-y-5 bg-[#0b101c] p-6 rounded-xl border border-white/10",children:[c.jsxs("div",{children:[c.jsxs("label",{className:"block text-xs font-bold uppercase tracking-wider text-slate-300 mb-1.5 flex items-center justify-between",children:[c.jsx("span",{children:"One-Time Feedback Code (Required)"}),c.jsx("span",{className:"text-[#00d9ff] font-mono text-[11px]",children:"Format: Ali-XXXXXX"})]}),c.jsx("input",{type:"text",value:i,onChange:V=>e(V.target.value),maxLength:10,placeholder:"Ali-8H4F2L",required:!0,className:"w-full p-3 rounded-xl border border-white/15 bg-[#131b2b] text-white placeholder-slate-500 font-mono text-sm outline-none focus:border-[#00d9ff] focus:ring-1 focus:ring-[#00d9ff] transition-all"}),c.jsx("p",{className:"text-[11px] text-slate-400 mt-1",children:"Enter the unique code provided by Muhammad Ali after work completion."})]}),c.jsx("div",{className:"p-4 bg-[#121929] border border-white/10 rounded-xl",children:c.jsxs("div",{className:"flex flex-col sm:flex-row sm:items-center justify-between gap-3",children:[c.jsxs("div",{className:"flex items-center gap-3",children:[R?c.jsx("img",{src:R.picture,alt:R.name,className:"w-10 h-10 rounded-full border-2 border-emerald-400 object-cover"}):c.jsx("div",{className:"w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-slate-300",children:c.jsx(il,{className:"w-5 h-5 text-[#00d9ff]"})}),c.jsxs("div",{children:[c.jsxs("h4",{className:"text-xs font-bold text-white flex items-center gap-1.5",children:[A?R==null?void 0:R.name:"Google Identity Verification",A&&c.jsxs("span",{className:"px-2 py-0.5 rounded-full bg-emerald-500/20 text-emerald-400 border border-emerald-500/30 text-[10px] font-extrabold flex items-center gap-1",children:[c.jsx(Tr,{className:"w-3 h-3"})," Google Verified"]})]}),c.jsx("p",{className:"text-[11px] text-slate-400",children:A?R==null?void 0:R.email:"Sign in with Google to verify feedback authenticity"})]})]}),c.jsxs("button",{type:"button",onClick:k,className:`px-4 py-2 rounded-xl text-xs font-bold transition-all flex items-center justify-center gap-2 shrink-0 cursor-pointer ${A?"bg-emerald-500/15 text-emerald-300 border border-emerald-500/30 hover:bg-emerald-500/25":"bg-white text-slate-900 hover:bg-slate-100 shadow-md"}`,children:[c.jsxs("svg",{className:"w-4 h-4",viewBox:"0 0 24 24",children:[c.jsx("path",{fill:"#4285F4",d:"M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"}),c.jsx("path",{fill:"#34A853",d:"M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"}),c.jsx("path",{fill:"#FBBC05",d:"M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22.81-.63z"}),c.jsx("path",{fill:"#EA4335",d:"M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.52 6.16-4.52z"})]}),c.jsx("span",{children:A?"Change Google Account":"Sign in with Google"})]})]})}),c.jsxs("div",{children:[c.jsx("label",{className:"block text-xs font-bold uppercase tracking-wider text-slate-300 mb-1.5",children:"Written Feedback Review"}),c.jsx("textarea",{value:t,onChange:V=>n(V.target.value),placeholder:"Describe your project experience, speed of delivery, quality of work, and communication...",required:!0,className:"w-full p-3.5 rounded-xl border border-white/15 bg-[#131b2b] text-white placeholder-slate-500 text-sm outline-none focus:border-[#00d9ff] focus:ring-1 focus:ring-[#00d9ff] min-h-[120px] transition-all"})]}),c.jsxs("div",{className:"p-4 bg-[#121929] border border-white/10 rounded-xl space-y-2",children:[c.jsxs("label",{className:"block text-xs font-bold uppercase tracking-wider text-slate-300 flex items-center gap-2",children:[c.jsx(Dd,{className:"w-4 h-4 text-[#00d9ff]"})," Upload Picture / Attachment (Optional)"]}),c.jsx("p",{className:"text-[11px] text-slate-400",children:"Attach your profile photo or screenshot of the completed project/work"}),M?c.jsxs("div",{className:"relative inline-block mt-2 group",children:[c.jsx("img",{src:M,alt:"Uploaded Preview",className:"w-32 h-32 object-cover rounded-xl border-2 border-[#00d9ff]/50 shadow-lg"}),c.jsx("button",{type:"button",onClick:K,className:"absolute -top-2 -right-2 p-1.5 bg-rose-500 text-white rounded-full hover:bg-rose-600 transition-colors shadow-md cursor-pointer",title:"Remove Image",children:c.jsx(ga,{className:"w-4 h-4"})})]}):c.jsxs("div",{onClick:()=>{var V;return(V=y.current)==null?void 0:V.click()},className:"mt-2 border-2 border-dashed border-white/20 hover:border-[#00d9ff]/50 bg-[#151e30] rounded-xl p-5 text-center cursor-pointer transition-all group",children:[c.jsx(qd,{className:"w-6 h-6 mx-auto text-slate-400 group-hover:text-[#00d9ff] group-hover:scale-110 transition-all mb-1"}),c.jsx("p",{className:"text-xs font-bold text-slate-300 group-hover:text-[#00d9ff] transition-colors",children:"Click to browse or upload picture"}),c.jsx("p",{className:"text-[10px] text-slate-500 mt-0.5",children:"PNG, JPG, WEBP up to 5MB"})]}),c.jsx("input",{ref:y,type:"file",accept:"image/*",onChange:j,className:"hidden"})]}),c.jsxs("div",{children:[c.jsx("label",{className:"block text-xs font-bold uppercase tracking-wider text-slate-300 mb-1.5",children:"Rating Score"}),c.jsx("div",{className:"flex items-center gap-2 flex-wrap",children:[1,2,3,4,5].map(V=>c.jsxs("button",{type:"button",onClick:()=>r(V),className:`px-4 py-2.5 rounded-xl border text-sm font-black transition-all cursor-pointer flex items-center gap-1 ${s>=V?"bg-[#00d9ff] text-[#061017] border-[#00d9ff] shadow-md shadow-[#00d9ff]/20":"bg-[#131b2b] text-slate-400 border-white/10 hover:border-white/30"}`,children:[c.jsx("span",{children:V}),c.jsx(Ld,{className:`w-4 h-4 ${s>=V?"fill-[#061017]":""}`})]},V))})]}),c.jsxs("div",{children:[c.jsx("label",{className:"block text-xs font-bold uppercase tracking-wider text-slate-300 mb-1.5",children:"How do you know about Muhammad Ali?"}),c.jsx("div",{className:"grid grid-cols-2 sm:grid-cols-3 gap-2",children:nh.map(V=>c.jsxs("label",{className:`flex items-center gap-2 p-2.5 rounded-xl border text-xs cursor-pointer transition-all ${a===V?"border-[#00d9ff] bg-[#00d9ff]/10 text-white font-bold":"border-white/10 bg-[#131b2b] text-slate-400 hover:text-white"}`,children:[c.jsx("input",{type:"radio",name:"howDoYouKnow",value:V,checked:a===V,onChange:()=>o(V),className:"accent-[#00d9ff]"}),c.jsx("span",{className:"truncate",children:V})]},V))})]}),c.jsxs("div",{children:[c.jsx("label",{className:"block text-xs font-bold uppercase tracking-wider text-slate-300 mb-1.5",children:"Completed Project Link (Optional)"}),c.jsx("input",{type:"url",value:l,onChange:V=>d(V.target.value),placeholder:"https://yourproject.com",className:"w-full p-3 rounded-xl border border-white/15 bg-[#131b2b] text-white placeholder-slate-500 text-sm outline-none focus:border-[#00d9ff] transition-all"})]}),u&&c.jsxs("div",{className:`p-3.5 rounded-xl text-xs flex items-center gap-2 ${x?"bg-rose-500/10 border border-rose-500/30 text-rose-400":"bg-emerald-500/10 border border-emerald-500/30 text-emerald-400"}`,children:[x?c.jsx(Ud,{className:"w-4 h-4 shrink-0"}):c.jsx(Tr,{className:"w-4 h-4 shrink-0"}),c.jsx("span",{children:u})]}),c.jsx("button",{type:"submit",disabled:g,className:"w-full py-4 px-6 bg-gradient-to-r from-[#00d9ff] to-[#00b4d8] text-[#061017] font-black text-sm rounded-xl hover:shadow-xl hover:shadow-[#00d9ff]/20 active:scale-[0.99] transition-all flex items-center justify-center gap-2 cursor-pointer disabled:opacity-60",children:g?c.jsxs(c.Fragment,{children:[c.jsx("div",{className:"w-4 h-4 border-2 border-[#061017] border-t-transparent rounded-full animate-spin"}),c.jsx("span",{children:"Verifying Ali- Code & Publishing…"})]}):c.jsxs(c.Fragment,{children:[c.jsx(il,{className:"w-5 h-5"}),c.jsx("span",{children:"Submit Feedback & Publish Review"})]})})]}),c.jsxs("div",{className:"mt-10",children:[c.jsxs("div",{className:"flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-6",children:[c.jsxs("h3",{className:"text-lg font-bold text-white flex items-center gap-2",children:[c.jsx(Fd,{className:"w-5 h-5 text-[#00d9ff]"})," Community Reviews (",P.length,")"]}),c.jsxs("div",{className:"relative w-full sm:w-64",children:[c.jsx(Od,{className:"w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-slate-400"}),c.jsx("input",{type:"text",value:h,onChange:V=>f(V.target.value),placeholder:"Search reviews...",className:"w-full pl-9 pr-3 py-1.5 bg-[#0b101c] border border-white/10 rounded-xl text-xs text-white placeholder-slate-500 focus:outline-none focus:border-[#00d9ff]"})]})]}),c.jsx("div",{className:"space-y-4",children:Q.map(V=>c.jsxs("div",{className:"bg-[#0b101c] border border-white/10 rounded-2xl p-5 hover:border-white/20 transition-all space-y-3",children:[c.jsxs("div",{className:"flex items-start justify-between gap-3",children:[c.jsxs("div",{className:"flex items-center gap-3",children:[c.jsx("div",{className:"w-10 h-10 rounded-full bg-[#00d9ff]/20 text-[#00d9ff] font-bold text-sm flex items-center justify-center border border-[#00d9ff]/30 shrink-0",children:V.avatarLetter||V.clientName.substring(0,2).toUpperCase()}),c.jsxs("div",{children:[c.jsxs("h4",{className:"text-sm font-bold text-white flex items-center gap-1.5",children:[V.clientName,V.googleVerified&&c.jsxs("span",{className:"px-2 py-0.5 rounded-full bg-emerald-500/15 text-emerald-400 border border-emerald-500/30 text-[9px] font-extrabold flex items-center gap-0.5",children:[c.jsx(Tr,{className:"w-2.5 h-2.5"})," Google Verified"]})]}),c.jsxs("p",{className:"text-[11px] text-slate-400",children:[V.clientEmail," • ",V.date]})]})]}),c.jsxs("div",{className:"flex flex-col items-end gap-1",children:[c.jsx("div",{className:"flex text-amber-400 text-xs",children:"★".repeat(V.rating)}),c.jsx("span",{className:"px-2 py-0.5 rounded bg-purple-500/15 text-purple-300 border border-purple-500/20 text-[10px] font-mono",children:V.codeUsed})]})]}),c.jsxs("p",{className:"text-xs text-slate-200 leading-relaxed bg-[#121929] p-3.5 rounded-xl border border-white/5",children:['"',V.comment,'"']}),V.imageUrl&&c.jsxs("div",{className:"pt-1",children:[c.jsx("p",{className:"text-[10px] font-bold text-slate-400 mb-1",children:"Attached Picture / Screenshot:"}),c.jsx("img",{src:V.imageUrl,alt:"Attached Feedback Screenshot",className:"max-h-48 rounded-xl border border-white/10 object-cover shadow-md"})]}),V.workLink&&c.jsxs("a",{href:V.workLink,target:"_blank",rel:"noopener noreferrer",className:"inline-flex items-center gap-1.5 text-xs text-[#00d9ff] hover:underline font-medium",children:[c.jsx(ma,{className:"w-3.5 h-3.5"})," View Project Link"]}),V.adminReply&&c.jsxs("div",{className:"p-3 bg-[#00d9ff]/5 border-l-2 border-[#00d9ff] rounded-r-xl text-xs",children:[c.jsx("strong",{className:"text-[11px] text-[#00d9ff]",children:"Muhammad Ali’s reply:"}),c.jsx("p",{className:"text-slate-300 mt-0.5",children:V.adminReply})]})]},V.id))})]})]})]}),E&&c.jsx("div",{className:"fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-fade-in",children:c.jsxs("div",{className:"w-full max-w-sm bg-[#0e1420] border border-[#00d9ff]/30 rounded-2xl p-6 shadow-2xl space-y-4 relative",children:[c.jsx("button",{onClick:()=>N(!1),className:"absolute top-4 right-4 text-slate-400 hover:text-white",children:c.jsx(ga,{className:"w-5 h-5"})}),c.jsxs("div",{className:"text-center space-y-2",children:[c.jsx("div",{className:"w-12 h-12 mx-auto rounded-full bg-white flex items-center justify-center shadow-lg",children:c.jsxs("svg",{className:"w-6 h-6",viewBox:"0 0 24 24",children:[c.jsx("path",{fill:"#4285F4",d:"M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"}),c.jsx("path",{fill:"#34A853",d:"M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"}),c.jsx("path",{fill:"#FBBC05",d:"M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22.81-.63z"}),c.jsx("path",{fill:"#EA4335",d:"M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.52 6.16-4.52z"})]})}),c.jsx("h3",{className:"text-base font-bold text-white",children:"Google Accounts Sign-In"}),c.jsx("p",{className:"text-xs text-slate-400",children:"Authenticate your identity with your Google Account for feedback verification"})]}),c.jsxs("div",{className:"space-y-2 pt-2",children:[c.jsxs("button",{onClick:()=>X("alimuhammadhvn81@gmail.com","Muhammad Ali Client"),className:"w-full p-3 bg-[#162032] hover:bg-[#1f2d47] border border-white/10 rounded-xl flex items-center gap-3 text-left transition-colors cursor-pointer",children:[c.jsx("div",{className:"w-8 h-8 rounded-full bg-[#00d9ff]/20 text-[#00d9ff] font-bold text-xs flex items-center justify-center",children:"MA"}),c.jsxs("div",{children:[c.jsx("p",{className:"text-xs font-bold text-white",children:"alimuhammadhvn81@gmail.com"}),c.jsx("p",{className:"text-[10px] text-slate-400",children:"Google Verified Client Account"})]})]}),c.jsxs("button",{onClick:()=>X("client.review@gmail.com","Verified Enterprise Client"),className:"w-full p-3 bg-[#162032] hover:bg-[#1f2d47] border border-white/10 rounded-xl flex items-center gap-3 text-left transition-colors cursor-pointer",children:[c.jsx("div",{className:"w-8 h-8 rounded-full bg-purple-500/20 text-purple-300 font-bold text-xs flex items-center justify-center",children:"VE"}),c.jsxs("div",{children:[c.jsx("p",{className:"text-xs font-bold text-white",children:"client.review@gmail.com"}),c.jsx("p",{className:"text-[10px] text-slate-400",children:"Google Verified Enterprise Account"})]})]})]})]})})]})}function uh(){const[i,e]=xe.useState({name:"",email:"",subject:"",service:"",budget:"$10 - $50",message:"",website:""}),[t,n]=xe.useState(""),[s,r]=xe.useState(!1),a=async o=>{if(o.preventDefault(),!i.website){if(!i.name||!i.email||!i.message){n("Please complete your name, email and message.");return}r(!0),n("Sending inquiry securely…");try{await new Promise(l=>setTimeout(l,900)),n("Inquiry sent successfully. Thank you — your message has been received."),e({name:"",email:"",subject:"",service:"",budget:"$10 - $50",message:"",website:""})}catch{n("Unable to submit inquiry right now.")}finally{r(!1)}}};return c.jsx("section",{id:"inquiry",className:"inquiry-section py-[100px]",children:c.jsxs("div",{className:"container",children:[c.jsxs("div",{className:"section-title text-center mb-[55px]",children:[c.jsxs("h2",{className:"text-[40px] font-black mb-[10px]",children:["Submit an ",c.jsx("span",{children:"Inquiry"})]}),c.jsx("p",{className:"text-[#818c9c]",children:"Tell me what you need and I’ll receive your inquiry securely. Budget criteria: $10 or above ($10+)."})]}),c.jsxs("div",{className:"inquiry-card max-w-[980px] mx-auto p-[30px] border border-[rgba(255,255,255,.08)] bg-[#10151f] rounded-[28px]",children:[c.jsxs("div",{className:"mb-5 p-3 rounded-xl bg-[#070a10] border border-[#00d9ff]/20 flex items-center justify-between text-xs sm:text-sm text-[#a3adba]",children:[c.jsxs("span",{children:["💡 ",c.jsx("strong",{children:"Budget Criteria:"})," Projects start from ",c.jsx("span",{className:"text-[#00d9ff] font-bold",children:"$10 or above"}),"."]}),c.jsx("span",{className:"text-emerald-400 font-semibold bg-emerald-500/10 px-2 py-0.5 rounded",children:"Min $10 USD"})]}),c.jsxs("form",{onSubmit:a,children:[c.jsxs("div",{className:"inquiry-grid grid grid-cols-1 md:grid-cols-2 gap-[16px]",children:[c.jsxs("div",{className:"inquiry-field flex flex-col gap-2",children:[c.jsx("label",{htmlFor:"inquiryName",children:"Your Name"}),c.jsx("input",{id:"inquiryName",value:i.name,onChange:o=>e({...i,name:o.target.value}),required:!0,maxLength:100,className:"p-[14px_15px] rounded-[14px] border border-[rgba(255,255,255,.08)] bg-[#070a10] text-white outline-none focus:border-[#00d9ff]",placeholder:"John Doe"})]}),c.jsxs("div",{className:"inquiry-field flex flex-col gap-2",children:[c.jsx("label",{htmlFor:"inquiryEmail",children:"Your Email"}),c.jsx("input",{id:"inquiryEmail",type:"email",value:i.email,onChange:o=>e({...i,email:o.target.value}),required:!0,maxLength:180,className:"p-[14px_15px] rounded-[14px] border border-[rgba(255,255,255,.08)] bg-[#070a10] text-white outline-none focus:border-[#00d9ff]",placeholder:"john@example.com"})]}),c.jsxs("div",{className:"inquiry-field flex flex-col gap-2",children:[c.jsx("label",{htmlFor:"inquirySubject",children:"Subject"}),c.jsx("input",{id:"inquirySubject",value:i.subject,onChange:o=>e({...i,subject:o.target.value}),maxLength:180,className:"p-[14px_15px] rounded-[14px] border border-[rgba(255,255,255,.08)] bg-[#070a10] text-white outline-none focus:border-[#00d9ff]",placeholder:"Project inquiry"})]}),c.jsxs("div",{className:"inquiry-field flex flex-col gap-2",children:[c.jsx("label",{htmlFor:"inquiryService",children:"Service"}),c.jsxs("select",{id:"inquiryService",value:i.service,onChange:o=>e({...i,service:o.target.value}),className:"p-[14px_15px] rounded-[14px] border border-[rgba(255,255,255,.08)] bg-[#070a10] text-white outline-none focus:border-[#00d9ff]",children:[c.jsx("option",{value:"",children:"Select a service or project category"}),c.jsx("option",{children:"Web Development (Nova Web Studio)"}),c.jsx("option",{children:"Game & AI App Development (Colour Block, Pak AI, Learn Play)"}),c.jsx("option",{children:"Pixel Forge Graphic Design (Logo, Visiting Card, Banner)"}),c.jsx("option",{children:"2D & 3D Architecture (Smart Flooring, 3D House Design)"}),c.jsx("option",{children:"Custom Project / Consultancy"})]})]}),c.jsxs("div",{className:"inquiry-field full col-span-1 md:col-span-2 flex flex-col gap-2",children:[c.jsxs("label",{htmlFor:"inquiryBudget",className:"flex items-center justify-between",children:[c.jsx("span",{children:"Project Budget Criteria ($10 or above)"}),c.jsx("span",{className:"text-[#00d9ff] text-xs font-semibold",children:"Min $10 USD"})]}),c.jsxs("select",{id:"inquiryBudget",value:i.budget,onChange:o=>e({...i,budget:o.target.value}),className:"p-[14px_15px] rounded-[14px] border border-[rgba(255,255,255,.08)] bg-[#070a10] text-white outline-none focus:border-[#00d9ff]",children:[c.jsx("option",{value:"$10 - $50",children:"$10 – $50 (Basic Task / Quick Fix)"}),c.jsx("option",{value:"$50 - $150",children:"$50 – $150 (Standard Project)"}),c.jsx("option",{value:"$150 - $300",children:"$150 – $300 (Advanced Project / Full App)"}),c.jsx("option",{value:"$300+",children:"$300+ (Comprehensive / Commercial System)"})]})]}),c.jsxs("div",{className:"inquiry-field full col-span-1 md:col-span-2 flex flex-col gap-2",children:[c.jsx("label",{htmlFor:"inquiryMessage",children:"Message"}),c.jsx("textarea",{id:"inquiryMessage",value:i.message,onChange:o=>e({...i,message:o.target.value}),required:!0,maxLength:5e3,className:"p-[14px_15px] rounded-[14px] border border-[rgba(255,255,255,.08)] bg-[#070a10] text-white outline-none focus:border-[#00d9ff] min-h-[160px] resize-vertical",placeholder:"Describe your project, requirements, budget or timeline..."})]}),c.jsx("input",{type:"text",className:"inquiry-honeypot hidden",value:i.website,onChange:o=>e({...i,website:o.target.value}),tabIndex:-1,autoComplete:"off"})]}),c.jsx("div",{className:"inquiry-actions mt-[18px]",children:c.jsx("button",{type:"submit",disabled:s,className:"btn btn-primary px-6 py-3.5 rounded-lg font-bold",children:s?"Sending...":"Send Inquiry"})}),t&&c.jsx("div",{className:"inquiry-status mt-3 text-sm text-[#929dab]",children:t}),c.jsx("div",{className:"inquiry-note text-xs text-[#7f8a9a] mt-2",children:"Your inquiry is delivered to the portfolio backend for secure admin review."})]})]})]})})}function fh({onOpenVoiceSupport:i}){return c.jsx("section",{id:"contact",className:"py-[100px]",children:c.jsxs("div",{className:"container",children:[c.jsxs("div",{className:"section-title text-center mb-[55px]",children:[c.jsxs("h2",{className:"text-[40px] font-black mb-[10px]",children:["Contact ",c.jsx("span",{children:"Me"})]}),c.jsx("p",{className:"text-[#818c9c]",children:"Let's connect"})]}),c.jsxs("div",{className:"contact-box max-w-[850px] mx-auto text-center bg-[#10151f] border border-[rgba(255,255,255,.07)] rounded-[18px] p-[40px_25px]",children:[c.jsx("h3",{className:"text-[27px] font-bold mb-[10px]",children:"Muhammad Ali"}),c.jsx("p",{className:"text-[#929dab] mb-[25px]",children:"Have a project idea or want to get in touch? You can contact me directly or ask my AI Voice Assistant."}),c.jsxs("div",{className:"contact-details flex justify-center flex-wrap gap-[15px] mb-[28px]",children:[c.jsxs("a",{href:"tel:+923300358799",className:"contact-item bg-[#18202c] rounded-[9px] p-[12px_17px] text-[#cbd2dc] hover:border-[#00d9ff]/60 transition-all",children:[c.jsx("span",{className:"text-[#00d9ff] font-bold",children:"Call:"})," +92 330 0358799"]}),c.jsxs("a",{href:"https://wa.me/923426793428",target:"_blank",rel:"noopener noreferrer",className:"contact-item bg-[#18202c] rounded-[9px] p-[12px_17px] text-[#cbd2dc] hover:border-emerald-400/60 transition-all",children:[c.jsx("span",{className:"text-emerald-400 font-bold",children:"WhatsApp:"})," +92 342 6793428"]}),c.jsxs("button",{onClick:i,className:"contact-item relative overflow-hidden bg-gradient-to-r from-[#18202c] via-[#241018] to-[#18202c] rounded-[10px] p-[12px_20px] text-white border border-[#ff3344]/50 hover:border-[#ff3344] hover:shadow-[0_0_25px_rgba(255,51,68,0.4)] transition-all duration-300 transform hover:-translate-y-0.5 cursor-pointer flex items-center justify-center gap-2.5 group",title:"Open AI Voice Support Assistant","aria-label":"AI Voice Support",children:[c.jsx("div",{className:"absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700 pointer-events-none"}),c.jsxs("span",{className:"relative flex h-2.5 w-2.5",children:[c.jsx("span",{className:"animate-ping absolute inline-flex h-full w-full rounded-full bg-[#ff3344] opacity-75"}),c.jsx("span",{className:"relative inline-flex rounded-full h-2.5 w-2.5 bg-[#ff4d5a]"})]}),c.jsx("span",{className:"text-white font-extrabold tracking-wide text-sm group-hover:text-[#ff4d5a] transition-colors",children:"AI Voice Support"}),c.jsx("span",{className:"text-xs px-1.5 py-0.5 rounded bg-[#ff3344]/20 border border-[#ff3344]/40 text-[#ff4d5a] font-bold",children:"🎙️ Voice"})]}),c.jsxs("a",{href:"mailto:alimuhammadhvn81@gmail.com",className:"contact-item bg-[#18202c] rounded-[9px] p-[12px_17px] text-[#cbd2dc] hover:border-[#00d9ff]/60 transition-all",children:[c.jsx("span",{className:"text-[#00d9ff] font-bold",children:"Email:"})," alimuhammadhvn81@gmail.com"]})]}),c.jsx("a",{href:"mailto:alimuhammadhvn81@gmail.com",className:"btn btn-primary px-8 py-3.5 rounded-lg font-bold inline-block",children:"Send Me an Email"})]})]})})}function ph(){return c.jsx("section",{id:"faq",className:"py-[100px]",children:c.jsxs("div",{className:"container",children:[c.jsxs("div",{className:"section-title text-center mb-[55px]",children:[c.jsxs("h2",{className:"text-[40px] font-black mb-[10px]",children:["Frequently Asked ",c.jsx("span",{children:"Questions"})]}),c.jsx("p",{className:"text-[#818c9c]",children:"Quick answers for potential clients"})]}),c.jsx("div",{className:"faq-list max-w-[850px] mx-auto grid gap-[12px]",children:Qd.map((i,e)=>c.jsxs("details",{className:"bg-[#10151f] border border-[rgba(255,255,255,.07)] rounded-[12px] p-[17px_20px]",children:[c.jsx("summary",{className:"cursor-pointer font-bold text-white",children:i.question}),c.jsx("p",{className:"text-[#929dab] mt-[10px] text-sm leading-relaxed",children:i.answer})]},e))})]})})}function mh(){const[i,e]=xe.useState(()=>{const h=localStorage.getItem("portfolio_likes_count");return h?parseInt(h,10):142}),[t,n]=xe.useState(()=>{const h=localStorage.getItem("portfolio_dislikes_count");return h?parseInt(h,10):3}),[s,r]=xe.useState(()=>localStorage.getItem("portfolio_user_reaction")||null),[a,o]=xe.useState(null),l=()=>{s==="like"?(r(null),e(h=>h-1),localStorage.removeItem("portfolio_user_reaction"),o("Your feedback was removed.")):(s==="dislike"&&n(h=>h-1),r("like"),e(h=>h+1),localStorage.setItem("portfolio_user_reaction","like"),o("Thank you for liking my portfolio!"))},d=()=>{s==="dislike"?(r(null),n(h=>h-1),localStorage.removeItem("portfolio_user_reaction"),o("Your feedback was removed.")):(s==="like"&&e(h=>h-1),r("dislike"),n(h=>h+1),localStorage.setItem("portfolio_user_reaction","dislike"),o("Thank you for the feedback. I will continue improving!"))};return xe.useEffect(()=>{localStorage.setItem("portfolio_likes_count",i.toString()),localStorage.setItem("portfolio_dislikes_count",t.toString())},[i,t]),c.jsx("section",{id:"reactions",className:"py-14 sm:py-16 border-t border-[var(--lux-border)]",children:c.jsx("div",{className:"container max-w-4xl mx-auto px-4 text-center",children:c.jsxs("div",{className:"p-8 sm:p-10 rounded-2xl bg-[var(--lux-surface)] border border-[var(--lux-border)] shadow-sm transition-all",children:[c.jsx("h3",{className:"text-xl sm:text-2xl font-bold tracking-tight text-[var(--lux-text)] mb-2 font-display",children:"Did you like this portfolio?"}),c.jsx("p",{className:"text-sm text-[var(--lux-text-muted)] max-w-md mx-auto mb-6",children:"Your instant reaction helps me continuously refine my digital experiences, design aesthetic, and projects."}),c.jsxs("div",{className:"flex items-center justify-center gap-4 sm:gap-6 flex-wrap",children:[c.jsxs("button",{onClick:l,className:`flex items-center gap-2.5 px-6 py-3 rounded-xl font-bold text-sm transition-all duration-200 cursor-pointer border ${s==="like"?"bg-[#00d9ff]/15 text-[#00d9ff] border-[#00d9ff] shadow-[0_0_20px_rgba(0,217,255,0.25)]":"bg-[var(--lux-surface2)] text-[var(--lux-text)] border-[var(--lux-border)] hover:border-[#00d9ff]/50 hover:text-[#00d9ff]"}`,"aria-label":"Like portfolio",children:[c.jsx("span",{className:"text-base",children:"👍"}),c.jsx("span",{children:"Like"}),c.jsx("span",{className:"text-xs px-2 py-0.5 rounded-full bg-[var(--lux-surface)] border border-[var(--lux-border)] font-extrabold",children:i})]}),c.jsxs("button",{onClick:d,className:`flex items-center gap-2.5 px-6 py-3 rounded-xl font-bold text-sm transition-all duration-200 cursor-pointer border ${s==="dislike"?"bg-rose-500/15 text-rose-500 border-rose-500 shadow-[0_0_20px_rgba(244,63,94,0.2)]":"bg-[var(--lux-surface2)] text-[var(--lux-text-muted)] border-[var(--lux-border)] hover:border-rose-400/50 hover:text-rose-400"}`,"aria-label":"Dislike portfolio",children:[c.jsx("span",{className:"text-base",children:"👎"}),c.jsx("span",{children:"Needs Improvement"}),c.jsx("span",{className:"text-xs px-2 py-0.5 rounded-full bg-[var(--lux-surface)] border border-[var(--lux-border)] font-extrabold",children:t})]})]}),a&&c.jsx("div",{className:"mt-4 text-xs font-semibold text-[#00d9ff] animate-fadeIn",children:a})]})})})}function gh(){return c.jsx("section",{className:"what-next-section py-[80px]",children:c.jsxs("div",{className:"container",children:[c.jsxs("div",{className:"section-title text-center mb-[55px]",children:[c.jsxs("h2",{className:"text-[40px] font-black mb-[10px]",children:["What ",c.jsx("span",{children:"Next?"})]}),c.jsx("p",{className:"text-[#818c9c]",children:"Choose your next step."})]}),c.jsxs("div",{className:"next-journey grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-[12px]",children:[c.jsxs("a",{href:"#projects",className:"next-step flex flex-col gap-1.5 p-[20px] border border-[rgba(255,255,255,.08)] bg-[#10151f] rounded-[18px]",children:[c.jsx("span",{className:"text-xs text-[#00d9ff] font-extrabold tracking-widest",children:"01"}),c.jsx("strong",{className:"text-base",children:"Explore"}),c.jsx("small",{className:"text-[#929dab]",children:"See the work"})]}),c.jsxs("a",{href:"#services",className:"next-step flex flex-col gap-1.5 p-[20px] border border-[rgba(255,255,255,.08)] bg-[#10151f] rounded-[18px]",children:[c.jsx("span",{className:"text-xs text-[#00d9ff] font-extrabold tracking-widest",children:"02"}),c.jsx("strong",{className:"text-base",children:"Choose Service"}),c.jsx("small",{className:"text-[#929dab]",children:"Find the right fit"})]}),c.jsxs("a",{href:"#inquiry",className:"next-step flex flex-col gap-1.5 p-[20px] border border-[rgba(255,255,255,.08)] bg-[#10151f] rounded-[18px]",children:[c.jsx("span",{className:"text-xs text-[#00d9ff] font-extrabold tracking-widest",children:"03"}),c.jsx("strong",{className:"text-base",children:"Send Inquiry"}),c.jsx("small",{className:"text-[#929dab]",children:"Share your idea"})]}),c.jsxs("a",{href:"#hire",className:"next-step flex flex-col gap-1.5 p-[20px] border border-[rgba(255,255,255,.08)] bg-[#10151f] rounded-[18px]",children:[c.jsx("span",{className:"text-xs text-[#00d9ff] font-extrabold tracking-widest",children:"04"}),c.jsx("strong",{className:"text-base",children:"Start Project"}),c.jsx("small",{className:"text-[#929dab]",children:"Plan and build"})]}),c.jsxs("a",{href:"#feedback",className:"next-step flex flex-col gap-1.5 p-[20px] border border-[rgba(255,255,255,.08)] bg-[#10151f] rounded-[18px]",children:[c.jsx("span",{className:"text-xs text-[#00d9ff] font-extrabold tracking-widest",children:"05"}),c.jsx("strong",{className:"text-base",children:"Share Feedback"}),c.jsx("small",{className:"text-[#929dab]",children:"Tell me your experience"})]})]})]})})}function xh(){const i=new Date().getFullYear();return c.jsxs("footer",{className:"site-footer border-t border-[var(--lux-border)] bg-[var(--lux-surface)] transition-colors duration-300",children:[c.jsxs("div",{className:"container site-footer-grid grid grid-cols-1 md:grid-cols-4 gap-[28px] py-[40px]",children:[c.jsxs("div",{children:[c.jsxs("h3",{className:"text-lg font-black mb-2 text-[var(--lux-text)] font-brand tracking-wider uppercase",children:["Muhammad",c.jsx("span",{className:"text-[#00d9ff]",children:"Ali"})]}),c.jsx("p",{className:"text-xs text-[var(--lux-text-muted)] leading-relaxed",children:"Web Developer • Game & AI App Developer • Graphic Designer • 2D & 3D Architecture."})]}),c.jsxs("div",{children:[c.jsx("h4",{className:"text-xs uppercase font-extrabold tracking-wider text-[var(--lux-text)] mb-3",children:"Quick Links"}),c.jsxs("div",{className:"grid gap-2 text-xs text-[var(--lux-text-muted)]",children:[c.jsx("a",{href:"#home",className:"hover:text-[#00d9ff] transition-colors",children:"Home"}),c.jsx("a",{href:"#about",className:"hover:text-[#00d9ff] transition-colors",children:"About"}),c.jsx("a",{href:"#education",className:"hover:text-[#00d9ff] transition-colors",children:"Education"}),c.jsx("a",{href:"#skills",className:"hover:text-[#00d9ff] transition-colors",children:"Skills"}),c.jsx("a",{href:"#services",className:"hover:text-[#00d9ff] transition-colors",children:"Services"}),c.jsx("a",{href:"#projects",className:"hover:text-[#00d9ff] transition-colors",children:"Projects"}),c.jsx("a",{href:"#hire",className:"hover:text-[#00d9ff] transition-colors",children:"Hire Me"}),c.jsx("a",{href:"#feedback",className:"hover:text-[#00d9ff] transition-colors",children:"Feedback"}),c.jsx("a",{href:"#faq",className:"hover:text-[#00d9ff] transition-colors",children:"FAQ"}),c.jsx("a",{href:"#inquiry",className:"hover:text-[#00d9ff] transition-colors",children:"Inquiry"}),c.jsx("a",{href:"#contact",className:"hover:text-[#00d9ff] transition-colors",children:"Contact"}),c.jsx("a",{href:"admin.html",className:"text-[#00d9ff] font-bold hover:underline transition-colors flex items-center gap-1",children:"⚙ Admin Portal"})]})]}),c.jsxs("div",{children:[c.jsx("h4",{className:"text-xs uppercase font-extrabold tracking-wider text-[var(--lux-text)] mb-3",children:"Services"}),c.jsxs("div",{className:"grid gap-2 text-xs text-[var(--lux-text-muted)]",children:[c.jsx("a",{href:"#services",className:"hover:text-[#00d9ff] transition-colors",children:"Web Development"}),c.jsx("a",{href:"#services",className:"hover:text-[#00d9ff] transition-colors",children:"Game & AI Apps"}),c.jsx("a",{href:"#services",className:"hover:text-[#00d9ff] transition-colors",children:"Pixel Forge Design"}),c.jsx("a",{href:"#services",className:"hover:text-[#00d9ff] transition-colors",children:"2D & 3D Architecture"}),c.jsx("a",{href:"#hire",className:"hover:text-[#00d9ff] transition-colors",children:"Custom Projects"})]})]}),c.jsxs("div",{children:[c.jsx("h4",{className:"text-xs uppercase font-extrabold tracking-wider text-[var(--lux-text)] mb-3",children:"Connect"}),c.jsxs("div",{className:"footer-social-icons flex items-center gap-2.5 flex-wrap mb-4",children:[c.jsx("a",{"aria-label":"Facebook",title:"Facebook",href:"https://www.facebook.com/share/19K82QsNZv/",target:"_blank",rel:"noopener noreferrer",className:"inline-flex items-center justify-center border border-[var(--lux-border)] bg-transparent rounded-xl w-[38px] h-[38px] cursor-pointer hover:border-[#00d9ff] hover:bg-[var(--lux-surface2)] hover:scale-105 transition-all duration-300 overflow-hidden",children:c.jsx("img",{src:"/images/facebook.svg",alt:"Facebook",className:"w-[24px] h-[24px] object-contain",referrerPolicy:"no-referrer"})}),c.jsx("a",{"aria-label":"Instagram",title:"Instagram",href:"https://www.instagram.com/m_ali._.0?igsi=bGkxNHg5d3UzeWs1",target:"_blank",rel:"noopener noreferrer",className:"inline-flex items-center justify-center border border-[var(--lux-border)] bg-transparent rounded-xl w-[38px] h-[38px] cursor-pointer hover:border-[#00d9ff] hover:bg-[var(--lux-surface2)] hover:scale-105 transition-all duration-300 overflow-hidden",children:c.jsx("img",{src:"/images/instagram.svg",alt:"Instagram",className:"w-[24px] h-[24px] object-contain",referrerPolicy:"no-referrer"})}),c.jsx("a",{"aria-label":"TikTok",title:"TikTok",href:"https://www.tiktok.com/@m_ali._.0?_r=1&_t=ZS-994mBu6m1Yr",target:"_blank",rel:"noopener noreferrer",className:"inline-flex items-center justify-center border border-[var(--lux-border)] bg-transparent rounded-xl w-[38px] h-[38px] cursor-pointer hover:border-[#00d9ff] hover:bg-[var(--lux-surface2)] hover:scale-105 transition-all duration-300 overflow-hidden",children:c.jsx("img",{src:"/images/tiktok.svg",alt:"TikTok",className:"w-[24px] h-[24px] object-contain",referrerPolicy:"no-referrer"})}),c.jsx("a",{"aria-label":"Snapchat",title:"Snapchat",href:"https://www.snapchat.com/add/cdt.mali?share_id=-8JxAM19DBA&locale=en-AU",target:"_blank",rel:"noopener noreferrer",className:"inline-flex items-center justify-center border border-[var(--lux-border)] bg-transparent rounded-xl w-[38px] h-[38px] cursor-pointer hover:border-[#00d9ff] hover:bg-[var(--lux-surface2)] hover:scale-105 transition-all duration-300 overflow-hidden",children:c.jsx("img",{src:"/images/snapchat.svg",alt:"Snapchat",className:"w-[24px] h-[24px] object-contain",referrerPolicy:"no-referrer"})})]})]})]}),c.jsxs("div",{className:"site-footer-bottom border-t border-[var(--lux-border)] py-4 text-center text-[11px] text-[var(--lux-text-muted)]",children:["© ",c.jsx("span",{id:"footerYear",children:i})," Muhammad Ali. All Rights Reserved."]})]})}function _h({isOpen:i,imageSrc:e,imageTitle:t,onClose:n}){return i?c.jsxs("div",{id:"lightbox",className:"lightbox active fixed inset-0 bg-black/94 z-[5000] flex items-center justify-center p-[30px]",onClick:n,children:[c.jsx("button",{className:"lightbox-close absolute top-5 right-[25px] w-[45px] h-[45px] rounded-full border border-white bg-black/50 text-white text-[25px] cursor-pointer flex items-center justify-center hover:border-[#00d9ff] hover:text-[#00d9ff]",onClick:n,children:"×"}),c.jsx("img",{id:"lightboxImage",src:e,alt:t,className:"max-w-[90vw] max-h-[85vh] object-contain rounded-[10px] shadow-[0_20px_70px_rgba(0,0,0,.7)]"}),c.jsx("div",{id:"lightboxNumber",className:"lightbox-number absolute bottom-[25px] left-1/2 -translate-x-1/2 bg-black/65 px-[15px] py-[7px] rounded-[20px] text-[#00d9ff] font-bold text-sm",children:t})]}):null}const Se={whatsapp:"+92 342 6793428",whatsappUrl:"https://wa.me/923426793428",callNumber:"+92 330 0358799",callUrl:"tel:+923300358799",email:"alimuhammadhvn81@gmail.com",emailUrl:"mailto:alimuhammadhvn81@gmail.com",name:"Muhammad Ali",education:"Muhammad is currently pursuing his BS in Computer Science at Iqra Post Graduate College (2025–Present). Previously, he completed his FSc in Computer Science from Pak Wattan School & College of Science in 2024, and Matric in Science from Al Arqam Academy of Excellence in 2022.",languages:"Muhammad’s listed languages are Urdu, English, and Hindko.",services:"Muhammad offers 4 major service divisions: 1. Web Development (React, Node, Nova Web Studio agency showcase), 2. Game & AI App Development (Colour Block strategy game, Pak AI assistant, Learn Play education hub), 3. Pixel Forge Graphic Design (Logo Design, executive & mobile shop Visiting Cards, Banners), and 4. 2D & 3D Architecture (2D Smart Flooring plans, 3D House exterior & interior renders).",skills:"His verified technical skills include HTML, CSS, JavaScript, React, Node.js, Python, C++, Game Development (Godot, Unity), AI Development (Gemini, Speech recognition), Pixel Forge Graphic Design (Logos, Visiting Cards, Banners), 2D Smart Floor CAD mapping, 3D Architectural Rendering, and Tailwind CSS.",projects:"Muhammad's portfolio features 4 main categories with 4-photo sub-division galleries: 1. Web Development (Nova Web Studio), 2. Game & AI Development (Colour Block, Pak AI, Learn Play), 3. Pixel Forge Graphic Design (Logos, Executive & Mobile Shop Visiting Cards, Promotional Banners), and 4. 2D & 3D Architecture (2D Smart Flooring CAD blueprints and 3D House Design renders).",hireMe:"You can hire Muhammad Ali through the interactive Hire Me section by selecting an entire service or choosing specific photo slots across all 4 categories (Web, Game/AI, Pixel Forge, 2D/3D Architecture) with budget criteria starting at $10+ USD.",inquiry:"You can submit project inquiries via the secure Inquiry form, choosing your project category, budget range ($10+ USD minimum), and custom requirements for fast direct response.",pricing:"Muhammad’s project budget criteria is $10 or above ($10+ minimum). Final pricing depends on project scope, complexity, and custom features. You can contact him directly on WhatsApp at +92 342 6793428 or call +92 330 0358799 for an instant quote!",budget:"Project budget criteria is $10 or above ($10+ USD). Projects start from at least $10 depending on the scope.",professionalism:"Yes, Muhammad Ali is highly professional, reliable, and detail-oriented in his work. He focuses on clean code architecture, modern and responsive UI/UX, transparent communication, and 100% client satisfaction.",whyHire:"You should hire Muhammad Ali because of his unique hybrid expertise across Web Development, Game & AI applications, Pixel Forge Graphic Design, and 2D/3D Architectural Design. He offers fast turnaround, direct one-on-one communication, and budget-friendly pricing starting from just $10+.",about:"Muhammad Ali is a dedicated Computer Science student and software creator specializing in Web Development, Game & AI App Development, Pixel Forge Graphic Design, and 2D/3D Architecture from Pakistan.",passion:"Muhammad Ali is deeply passionate about web development, game & AI app development, graphic design, 2D/3D architectural rendering, and modern technology. He is driven by a desire to turn ideas into polished digital experiences through continuous learning, clean software architecture, and disciplined work.",workStyle:"Muhammad Ali follows a transparent, 6-step collaborative work process: 1. Discussing requirements, 2. Planning structure & design, 3. Building with clean code, 4. Testing usability, 5. Delivering on time, and 6. Providing post-delivery support.",contactAll:"You can message Muhammad on WhatsApp at +92 342 6793428, call him directly at +92 330 0358799, or email alimuhammadhvn81@gmail.com."};function bh(i){const e=i.toLowerCase().trim();return e.includes("football")||e.includes("soccer")||e.includes("cricket team")||e.includes("poem")||e.includes("poetry")||e.includes("capital of")||e.includes("recipe")||e.includes("weather in")||e.includes("president")||e.includes("prime minister")||e.includes("movie")||e.includes("song")||e.includes("joke")||e.includes("tell me a story")?{text:"Unfortunately, I am unable to answer you."}:e==="salam"||e.includes("assalam")||e.includes("salaam")||e.startsWith("hi")||e.startsWith("hello")||e.includes("hey")||e.includes("kaise ho")||e.includes("kese ho")||e.includes("how are you")?{text:"Walaikum Assalam and hello! I am Muhammad Ali’s professional AI Assistant. I can help you with portfolio information, project inquiries, technical development questions, and instant hiring quotes.",actionLinks:[{type:"whatsapp",label:"💬 Chat on WhatsApp (+92 342 6793428)",url:Se.whatsappUrl},{type:"call",label:"📞 Call (+92 330 0358799)",url:Se.callUrl}]}:e.includes("passionat")||e.includes("passion")||e.includes("drive")||e.includes("vision")||e.includes("creative approach")||e.includes("goal")?{text:Se.passion,actionLinks:[{type:"whatsapp",label:"💬 Discuss Your Project on WhatsApp",url:Se.whatsappUrl}]}:e.includes("deal with client")||e.includes("work style")||e.includes("deal")||e.includes("client")||e.includes("process")||e.includes("collaborat")||e.includes("approach")?{text:Se.workStyle,actionLinks:[{type:"whatsapp",label:"💬 Start a Project on WhatsApp",url:Se.whatsappUrl},{type:"call",label:"📞 Direct Call (+92 330 0358799)",url:Se.callUrl}]}:e.includes("professional")||e.includes("quality")||e.includes("trust")||e.includes("reliable")||e.includes("dedicated")||e.includes("good in")||e.includes("good at")||e.includes("kaisa hai")||e.includes("kaisa kam")||e.includes("work ethic")||e.includes("experience")||e.includes("honest")?{text:Se.professionalism,actionLinks:[{type:"whatsapp",label:"💬 Discuss Your Project on WhatsApp",url:Se.whatsappUrl},{type:"call",label:"📞 Call Directly (+92 330 0358799)",url:Se.callUrl}]}:e.includes("why hire")||e.includes("why choose")||e.includes("benefit")||e.includes("advantage")||e.includes("hire him")||e.includes("hire muhammad")||e.includes("reason")?{text:Se.whyHire,actionLinks:[{type:"whatsapp",label:"💬 Start a Project on WhatsApp ($10+)",url:Se.whatsappUrl},{type:"call",label:"📞 Call (+92 330 0358799)",url:Se.callUrl}]}:e.includes("who is")||e.includes("about muhammad")||e.includes("about him")||e.includes("intro")||e.includes("background")||e.includes("kon hai")||e.includes("tell me about")||e.includes("introduce")?{text:`${Se.about} He is currently continuing his BS in Computer Science at Iqra Post Graduate College and builds custom solutions starting from $10+.`,actionLinks:[{type:"whatsapp",label:"💬 Contact Muhammad on WhatsApp",url:Se.whatsappUrl},{type:"call",label:"📞 Call: +92 330 0358799",url:Se.callUrl}]}:e.includes("whatsapp")||e.includes("whats app")||e.includes("chat")&&!e.includes("gpt")?{text:"Muhammad’s official WhatsApp number is +92 342 6793428. You can click below to start a chat directly.",actionLinks:[{type:"whatsapp",label:"💬 Open WhatsApp (+92 342 6793428)",url:Se.whatsappUrl},{type:"call",label:"📞 Call (+92 330 0358799)",url:Se.callUrl}]}:e.includes("call")||e.includes("phone")||e.includes("number")||e.includes("mobile")||e.includes("dial")?{text:"You can call Muhammad directly at +92 330 0358799, or reach him on WhatsApp at +92 342 6793428.",actionLinks:[{type:"call",label:"📞 Direct Call: +92 330 0358799",url:Se.callUrl},{type:"whatsapp",label:"💬 WhatsApp: +92 342 6793428",url:Se.whatsappUrl}]}:e.includes("contact")||e.includes("hire")||e.includes("reach")||e.includes("email")||e.includes("touch")||e.includes("rabta")||e.includes("order")||e.includes("kaise order")?{text:Se.contactAll,actionLinks:[{type:"whatsapp",label:"💬 WhatsApp (+92 342 6793428)",url:Se.whatsappUrl},{type:"call",label:"📞 Call (+92 330 0358799)",url:Se.callUrl},{type:"email",label:"✉️ Send Email",url:Se.emailUrl}]}:e.includes("budget")||e.includes("price")||e.includes("cost")||e.includes("rate")||e.includes("fee")||e.includes("charge")||e.includes("10$")||e.includes("$10")||e.includes("kitna")||e.includes("paisa")||e.includes("rupee")||e.includes("dollar")?{text:Se.pricing,actionLinks:[{type:"whatsapp",label:"💬 Get Instant Quote on WhatsApp ($10+)",url:Se.whatsappUrl},{type:"call",label:"📞 Call: +92 330 0358799",url:Se.callUrl}]}:e.includes("time")||e.includes("timeline")||e.includes("delivery")||e.includes("kitne din")||e.includes("duration")||e.includes("deadline")?{text:"Project delivery time depends on scope and features. Basic tasks can be delivered within 24–48 hours, while full web or app projects take a few days to weeks. Fast turnaround is guaranteed.",actionLinks:[{type:"whatsapp",label:"💬 Discuss Timeline on WhatsApp",url:Se.whatsappUrl},{type:"call",label:"📞 Call (+92 330 0358799)",url:Se.callUrl}]}:e.includes("education")||e.includes("study")||e.includes("college")||e.includes("school")||e.includes("degree")||e.includes("matric")||e.includes("fsc")||e.includes("iqra")||e.includes("post graduate")||e.includes("parhai")||e.includes("qualification")?{text:Se.education}:e.includes("language")||e.includes("zaban")||e.includes("speak")||e.includes("urdu")||e.includes("english")||e.includes("hindko")?{text:Se.languages}:e.includes("service")||e.includes("offer")||e.includes("provide")||e.includes("what")&&e.includes("do")||e.includes("khidmaat")?{text:Se.services,actionLinks:[{type:"whatsapp",label:"💬 Discuss a Project on WhatsApp",url:Se.whatsappUrl}]}:e.includes("skill")||e.includes("tech")||e.includes("stack")||e.includes("programming")||e.includes("coding")||e.includes("python")||e.includes("react")||e.includes("c++")||e.includes("game")?{text:Se.skills}:e.includes("hire me")||e.includes("how to hire")||e.includes("hire process")?{text:Se.hireMe,actionLinks:[{type:"whatsapp",label:"💬 Hire on WhatsApp (+92 342 6793428)",url:Se.whatsappUrl},{type:"email",label:"✉️ Send Email Inquiry",url:Se.emailUrl}]}:e.includes("inquiry")||e.includes("submit message")||e.includes("send message")||e.includes("contact form")?{text:Se.inquiry,actionLinks:[{type:"whatsapp",label:"💬 Direct WhatsApp (+92 342 6793428)",url:Se.whatsappUrl},{type:"email",label:"✉️ Direct Email",url:Se.emailUrl}]}:e.includes("project")||e.includes("portfolio")||e.includes("work")||e.includes("game")||e.includes("nova")||e.includes("block")||e.includes("architecture")||e.includes("pixel forge")||e.includes("visiting card")||e.includes("pak ai")||e.includes("learn play")?{text:Se.projects,actionLinks:[{type:"whatsapp",label:"💬 Discuss Projects on WhatsApp",url:Se.whatsappUrl}]}:null}function vh({isOpen:i,onClose:e}){const[t,n]=xe.useState([{id:"welcome-1",sender:"ai",text:"Hi! I’m Muhammad Ali’s AI Voice Support Assistant. Ask me anything about his education, skills, projects, services, or contact numbers.",timestamp:new Date().toLocaleTimeString([],{hour:"2-digit",minute:"2-digit"}),actionLinks:[{type:"whatsapp",label:"💬 WhatsApp: +92 342 6793428",url:Se.whatsappUrl},{type:"call",label:"📞 Call: +92 330 0358799",url:Se.callUrl}]}]),[s,r]=xe.useState(""),[a,o]=xe.useState("IDLE"),[l,d]=xe.useState(!1),[h,f]=xe.useState(!0),[u,p]=xe.useState("Ready to talk or type."),x=xe.useRef(null),v=xe.useRef(null),g=xe.useRef(null),m=[{label:"⭐ Professionalism",query:"Is Muhammad Ali professional in his work?"},{label:"👤 Who is Muhammad Ali?",query:"Who is Muhammad Ali?"},{label:"💰 Budget ($10+)",query:"What is your project budget criteria?"},{label:"💡 Why Hire?",query:"Why should I hire Muhammad Ali?"},{label:"📞 Call Number",query:"What is Muhammad’s call number?"},{label:"💬 WhatsApp",query:"What is his WhatsApp number?"},{label:"🎓 Education",query:"Tell me about Muhammad’s education"},{label:"💼 Services",query:"What services are offered?"},{label:"⚡ Skills",query:"What are his technical skills?"},{label:"🌐 Languages",query:"What languages does he speak?"},{label:"🚀 Projects",query:"What featured projects has he built?"}],M=()=>{typeof window<"u"&&"speechSynthesis"in window&&window.speechSynthesis.cancel(),a==="SPEAKING"&&o("IDLE")};xe.useEffect(()=>{if(typeof window<"u"){const _=window.SpeechRecognition||window.webkitSpeechRecognition;if(_)try{const E=new _;E.continuous=!1,E.interimResults=!1,E.lang="en-US",E.onstart=()=>{M(),o("LISTENING"),p("Listening to your voice...")},E.onresult=N=>{const P=N.results[0][0].transcript;o("IDLE"),P&&P.trim()&&A(P.trim())},E.onerror=N=>{console.warn("Speech recognition warning:",N.error),o("IDLE"),N.error==="not-allowed"?p("Microphone access denied. You can type your question."):N.error==="no-speech"?p("I didn’t catch that. Please tap mic again or type."):p("Voice input paused. Please type your message.")},E.onend=()=>{a==="LISTENING"&&o("IDLE")},x.current=E}catch(E){console.warn("Speech recognition initialization error:",E)}}return()=>{if(M(),x.current)try{x.current.stop()}catch{}}},[]),xe.useEffect(()=>{const _=E=>{E.key==="Escape"&&i&&e()};return window.addEventListener("keydown",_),()=>window.removeEventListener("keydown",_)},[i,e]),xe.useEffect(()=>{var _;i&&((_=v.current)==null||_.scrollIntoView({behavior:"smooth"}))},[t,i,l]),xe.useEffect(()=>{if(!i){if(M(),x.current&&a==="LISTENING")try{x.current.stop()}catch{}o("IDLE")}},[i]);const T=_=>{if(!h||typeof window>"u"||!("speechSynthesis"in window)){o("IDLE");return}M();const E=_.replace(/[*_~`#>-]/g," ").replace(/[•●]/g," ").replace(/\[.*?\]/g," ").replace(/\s+/g," ").trim();try{const N=new SpeechSynthesisUtterance(E);N.rate=1.05,N.pitch=1,N.lang="en-US";const P=window.speechSynthesis.getVoices(),F=P.find(j=>j.lang.startsWith("en")&&(j.name.includes("Natural")||j.name.includes("Google")||j.name.includes("Samantha")||j.name.includes("Daniel")||j.name.includes("Arthur")))||P.find(j=>j.lang.startsWith("en"));F&&(N.voice=F),N.onstart=()=>{o("SPEAKING"),p("AI Assistant is speaking...")},N.onend=()=>{o("IDLE"),p("Ready for your next question.")},N.onerror=()=>{o("IDLE"),p("Ready to talk or type.")},g.current=N,window.speechSynthesis.speak(N)}catch(N){console.warn("Speech synthesis error:",N),o("IDLE")}},y=()=>{if(M(),!x.current){p("Voice input is not supported in this browser. Please type below.");return}if(a==="LISTENING"){try{x.current.stop()}catch{}o("IDLE"),p("Listening paused.")}else try{x.current.start()}catch(_){console.warn("Could not start recognition:",_),p("Please allow microphone permissions or type below.")}},A=async _=>{if(!_.trim())return;M();const E={id:`user-${Date.now()}`,sender:"user",text:_,timestamp:new Date().toLocaleTimeString([],{hour:"2-digit",minute:"2-digit"})};n(P=>[...P,E]),r("");const N=bh(_);if(N){const P={id:`ai-${Date.now()}`,sender:"ai",text:N.text,timestamp:new Date().toLocaleTimeString([],{hour:"2-digit",minute:"2-digit"}),actionLinks:N.actionLinks};n(F=>[...F,P]),d(!1),T(N.text);return}d(!0),p("Searching verified portfolio intelligence...");try{const F=await(await fetch("/api/voice-support",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({question:_,conversationHistory:t})})).json(),j=F.answer||F.fallbackAnswer||`You can message Muhammad on WhatsApp at ${Se.whatsapp} or call ${Se.callNumber}.`,K={id:`ai-${Date.now()}`,sender:"ai",text:j,timestamp:new Date().toLocaleTimeString([],{hour:"2-digit",minute:"2-digit"}),actionLinks:[{type:"whatsapp",label:`💬 WhatsApp: ${Se.whatsapp}`,url:Se.whatsappUrl},{type:"call",label:`📞 Call: ${Se.callNumber}`,url:Se.callUrl}]};n(k=>[...k,K]),d(!1),T(j)}catch(P){console.error("Error in voice query:",P);const F=`You can reach Muhammad directly on WhatsApp at ${Se.whatsapp} or call ${Se.callNumber}.`,j={id:`ai-err-${Date.now()}`,sender:"ai",text:F,timestamp:new Date().toLocaleTimeString([],{hour:"2-digit",minute:"2-digit"}),actionLinks:[{type:"whatsapp",label:`💬 WhatsApp: ${Se.whatsapp}`,url:Se.whatsappUrl},{type:"call",label:`📞 Call: ${Se.callNumber}`,url:Se.callUrl}]};n(K=>[...K,j]),d(!1),T(F)}},w=_=>{_.preventDefault(),s.trim()&&A(s)},R=()=>{M(),n([{id:`welcome-${Date.now()}`,sender:"ai",text:"Hi! I’m Muhammad Ali’s AI Voice Support Assistant. Ask me anything about his education, skills, projects, services, or contact numbers.",timestamp:new Date().toLocaleTimeString([],{hour:"2-digit",minute:"2-digit"}),actionLinks:[{type:"whatsapp",label:"💬 WhatsApp: +92 342 6793428",url:Se.whatsappUrl},{type:"call",label:"📞 Call: +92 330 0358799",url:Se.callUrl}]}])};return i?c.jsxs("div",{className:"fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-5 bg-black/85 backdrop-blur-2xl animate-fadeIn",children:[c.jsx("div",{className:"absolute inset-0",onClick:e}),c.jsxs("div",{className:"relative z-10 w-full max-w-2xl bg-[#080c16] border-2 border-[#ff3344]/40 rounded-[26px] shadow-[0_20px_70px_rgba(0,0,0,0.9),0_0_50px_rgba(255,51,68,0.25)] flex flex-col max-h-[92vh] overflow-hidden text-[#f3f4f6]",role:"dialog","aria-modal":"true","aria-labelledby":"voice-assistant-title",onClick:_=>_.stopPropagation(),children:[c.jsx("div",{className:"h-1.5 w-full bg-gradient-to-r from-[#ff3344] via-[#00d9ff] to-[#ff3344] animate-pulse"}),c.jsxs("div",{className:"flex items-center justify-between px-5 sm:px-7 py-4.5 border-b border-white/10 bg-gradient-to-b from-[#131b2c] via-[#0e1422] to-[#0a0f1a]",children:[c.jsxs("div",{className:"flex items-center gap-3.5",children:[c.jsxs("div",{className:`relative flex items-center justify-center w-12 h-12 rounded-2xl border transition-all duration-300 shadow-lg ${a==="SPEAKING"?"bg-[#00d9ff]/20 border-[#00d9ff] text-[#00d9ff] shadow-[0_0_25px_rgba(0,217,255,0.4)]":a==="LISTENING"?"bg-[#ff3344]/30 border-[#ff3344] text-[#ff3344] scale-105 shadow-[0_0_25px_rgba(255,51,68,0.5)]":"bg-gradient-to-br from-[#ff3344]/25 to-[#162032] border-[#ff3344]/50 text-[#ff4d5a]"}`,children:[a==="SPEAKING"?c.jsx("span",{className:"text-2xl animate-pulse",children:"🔊"}):a==="LISTENING"?c.jsx("span",{className:"text-2xl animate-bounce text-[#ff3344]",children:"🎙️"}):c.jsx("span",{className:"text-2xl",children:"🤖"}),a!=="IDLE"&&c.jsx("span",{className:`absolute -top-1 -right-1 w-4 h-4 rounded-full animate-ping ${a==="SPEAKING"?"bg-[#00d9ff]":"bg-[#ff3344]"}`})]}),c.jsxs("div",{children:[c.jsxs("div",{className:"flex items-center gap-2.5",children:[c.jsx("h3",{id:"voice-assistant-title",className:"font-extrabold text-lg sm:text-xl text-white tracking-wide",children:"AI Voice Assistant"}),c.jsx("span",{className:`text-[10px] px-2.5 py-0.5 rounded-full border font-extrabold uppercase tracking-widest transition-all duration-300 ${a==="SPEAKING"?"bg-[#00d9ff]/25 text-[#00d9ff] border-[#00d9ff]/60 shadow-[0_0_12px_rgba(0,217,255,0.4)]":a==="LISTENING"?"bg-[#ff3344]/30 text-[#ff3344] border-[#ff3344] animate-pulse shadow-[0_0_12px_rgba(255,51,68,0.5)]":"bg-[#ff3344]/20 text-[#ff4d5a] border-[#ff3344]/40"}`,children:a==="SPEAKING"?"Speaking":a==="LISTENING"?"Listening":"Instant 24/7"})]}),c.jsxs("p",{className:"text-xs text-[#94a3b8] flex items-center gap-1.5 mt-0.5",children:[c.jsx("span",{className:"w-1.5 h-1.5 rounded-full bg-emerald-400"}),c.jsx("span",{children:"Verified profile info & instantaneous voice response"})]})]})]}),c.jsxs("div",{className:"flex items-center gap-2",children:[c.jsxs("button",{onClick:R,title:"Reset Conversation",className:"hidden sm:flex items-center gap-1 px-2.5 py-1.5 rounded-xl text-xs font-bold border border-white/10 bg-white/5 hover:bg-white/10 text-[#94a3b8] hover:text-white transition cursor-pointer",children:[c.jsx("span",{children:"🔄"})," ",c.jsx("span",{children:"Reset"})]}),c.jsxs("button",{onClick:()=>{a==="SPEAKING"&&M(),f(!h)},title:h?"Mute AI Voice":"Unmute AI Voice",className:`px-3 py-1.5 rounded-xl text-xs font-bold border transition-all duration-200 cursor-pointer flex items-center gap-1.5 ${h?"bg-white/5 border-white/15 text-[#cbd5e1] hover:border-[#ff3344]/50 hover:text-white":"bg-[#ff3344]/25 border-[#ff3344]/60 text-[#ff4d5a]"}`,children:[c.jsx("span",{children:h?"🔊":"🔇"}),c.jsx("span",{className:"hidden sm:inline",children:h?"Voice On":"Muted"})]}),c.jsx("button",{onClick:e,className:"w-10 h-10 rounded-xl flex items-center justify-center border border-white/15 bg-white/5 text-[#94a3b8] hover:text-white hover:border-[#ff3344] hover:bg-[#ff3344]/15 transition-all duration-200 text-lg cursor-pointer","aria-label":"Close modal",children:"✕"})]})]}),c.jsxs("div",{className:"px-5 sm:px-7 py-2.5 bg-[#0b101c] border-b border-white/5 flex items-center justify-between flex-wrap gap-2",children:[c.jsxs("div",{className:"flex items-center gap-2.5 text-xs",children:[c.jsx("span",{className:`w-2.5 h-2.5 rounded-full ${a==="LISTENING"?"bg-[#ff3344] animate-ping":a==="SPEAKING"?"bg-[#00d9ff] animate-pulse":"bg-emerald-400"}`}),c.jsx("span",{className:"text-[#cbd5e1] font-medium",children:u})]}),c.jsxs("div",{className:"flex items-center gap-2",children:[(a==="LISTENING"||a==="SPEAKING")&&c.jsxs("div",{className:"flex items-center gap-1 h-4 px-2.5 py-0.5 rounded-full bg-black/60 border border-white/15",children:[c.jsx("span",{className:`w-1 rounded-full animate-[pulse_0.4s_ease-in-out_infinite] h-3 ${a==="SPEAKING"?"bg-[#00d9ff]":"bg-[#ff3344]"}`}),c.jsx("span",{className:`w-1 rounded-full animate-[pulse_0.6s_ease-in-out_infinite] h-4.5 ${a==="SPEAKING"?"bg-[#38bdf8]":"bg-[#ff4d5a]"}`}),c.jsx("span",{className:`w-1 rounded-full animate-[pulse_0.3s_ease-in-out_infinite] h-2.5 ${a==="SPEAKING"?"bg-[#00d9ff]":"bg-[#ff3344]"}`}),c.jsx("span",{className:`w-1 rounded-full animate-[pulse_0.5s_ease-in-out_infinite] h-4 ${a==="SPEAKING"?"bg-[#38bdf8]":"bg-[#ff4d5a]"}`}),c.jsx("span",{className:`w-1 rounded-full animate-[pulse_0.7s_ease-in-out_infinite] h-2 ${a==="SPEAKING"?"bg-[#00d9ff]":"bg-[#ff3344]"}`})]}),a==="SPEAKING"&&c.jsxs("button",{onClick:M,className:"text-[11px] px-3 py-1 rounded-lg border border-[#ff3344]/60 bg-[#ff3344]/20 text-[#ff4d5a] font-bold hover:bg-[#ff3344]/30 transition cursor-pointer flex items-center gap-1 shadow-sm",children:[c.jsx("span",{children:"⏹"})," ",c.jsx("span",{children:"Stop Voice"})]})]})]}),c.jsxs("div",{className:"flex-1 overflow-y-auto p-4 sm:p-6 space-y-4.5 min-h-[260px] max-h-[400px] bg-[#060911] scrollbar-thin",children:[t.map(_=>c.jsx("div",{className:`flex flex-col ${_.sender==="user"?"items-end":"items-start"}`,children:c.jsxs("div",{className:`max-w-[90%] rounded-2xl p-4 text-sm leading-relaxed ${_.sender==="user"?"bg-gradient-to-r from-[#ff3344] to-[#c71728] text-white shadow-lg rounded-br-none font-medium":"bg-[#111726] border border-white/10 text-[#e2e8f0] rounded-bl-none shadow-md"}`,children:[c.jsxs("div",{className:"flex items-center justify-between gap-3 mb-2 text-[10px] opacity-80 font-bold",children:[c.jsx("span",{className:"uppercase tracking-wider flex items-center gap-1.5 text-[#ff4d5a]",children:_.sender==="user"?"👤 You":"⚡ Muhammad Ali AI"}),c.jsx("span",{className:"text-[#94a3b8]",children:_.timestamp})]}),c.jsx("div",{className:"whitespace-pre-wrap font-normal leading-relaxed",children:_.text}),_.actionLinks&&_.actionLinks.length>0&&c.jsx("div",{className:"mt-3.5 pt-3 border-t border-white/10 flex flex-wrap gap-2",children:_.actionLinks.map((E,N)=>c.jsxs("a",{href:E.url,target:E.type==="whatsapp"?"_blank":void 0,rel:E.type==="whatsapp"?"noopener noreferrer":void 0,className:`text-xs px-3 py-1.5 rounded-xl font-bold transition flex items-center gap-1.5 shadow-sm ${E.type==="whatsapp"?"bg-emerald-500/20 text-emerald-400 border border-emerald-500/40 hover:bg-emerald-500/30":E.type==="call"?"bg-[#00d9ff]/20 text-[#00d9ff] border border-[#00d9ff]/40 hover:bg-[#00d9ff]/30":"bg-white/10 text-white border border-white/20 hover:bg-white/15"}`,children:[c.jsx("span",{children:E.label}),c.jsx("span",{children:"↗"})]},N))}),_.sender==="ai"&&h&&c.jsxs("div",{className:"mt-3 pt-2 flex items-center justify-between gap-2 text-[11px]",children:[c.jsx("button",{onClick:()=>T(_.text),className:"text-[#00d9ff] hover:text-white font-semibold flex items-center gap-1 cursor-pointer transition",title:"Play voice response again",children:c.jsx("span",{children:"🔊 Replay Voice"})}),c.jsx("span",{className:"text-[10px] text-[#64748b] font-mono",children:"100% Verified"})]})]})},_.id)),l&&c.jsx("div",{className:"flex flex-col items-start",children:c.jsxs("div",{className:"bg-[#111726] border border-[#ff3344]/40 rounded-2xl rounded-bl-none p-4 text-xs text-[#cbd5e1] flex items-center gap-3 shadow-md",children:[c.jsx("span",{className:"w-2.5 h-2.5 rounded-full bg-[#ff3344] animate-ping"}),c.jsx("span",{children:"Preparing verified instantaneous response..."})]})}),c.jsx("div",{ref:v})]}),c.jsxs("div",{className:"px-5 py-2.5 bg-[#0a0e18] border-t border-white/10 flex items-center gap-2 overflow-x-auto no-scrollbar",children:[c.jsx("span",{className:"text-[11px] font-extrabold text-[#7e8b9d] shrink-0 uppercase tracking-wider",children:"Quick Ask:"}),m.map((_,E)=>c.jsx("button",{onClick:()=>A(_.query),disabled:l||a==="LISTENING",className:"text-xs shrink-0 px-3.5 py-1.5 rounded-full bg-[#131b2b] border border-white/10 hover:border-[#ff3344] hover:text-[#ff4d5a] hover:bg-[#1a2336] text-[#cbd5e1] transition-all duration-200 cursor-pointer disabled:opacity-50 font-medium",children:_.label},E))]}),c.jsxs("div",{className:"p-4 sm:p-5 bg-gradient-to-t from-[#101522] via-[#0d121c] to-[#090d16] border-t border-white/10 flex flex-col gap-3",children:[c.jsxs("form",{onSubmit:w,className:"flex items-center gap-2.5",children:[c.jsxs("button",{type:"button",onClick:y,disabled:l,title:a==="LISTENING"?"Stop Listening":"Speak to AI",className:`h-12 px-4 sm:px-5 rounded-xl flex items-center justify-center gap-2 font-black text-xs tracking-wide transition-all duration-300 cursor-pointer ${a==="LISTENING"?"bg-gradient-to-r from-[#ff3344] via-[#e61b30] to-[#ff3344] text-white shadow-[0_0_25px_rgba(255,51,68,0.7)] border border-white/50 animate-pulse":"bg-[#182032] hover:bg-[#ff3344]/20 border border-[#ff3344]/50 hover:border-[#ff3344] text-[#ff4d5a] shadow-md"}`,children:[c.jsx("span",{className:"text-lg",children:a==="LISTENING"?"🔴":"🎙️"}),c.jsx("span",{className:"hidden xs:inline",children:a==="LISTENING"?"Listening...":"Voice"})]}),c.jsx("div",{className:"flex-1 relative",children:c.jsx("input",{type:"text",value:s,onChange:_=>r(_.target.value),placeholder:"Ask about WhatsApp, Call, Education, Skills, or Services...",disabled:l||a==="LISTENING",className:"w-full h-12 px-4.5 rounded-xl bg-[#05080e] border border-white/20 text-white placeholder-[#64748b] text-sm focus:outline-none focus:border-[#ff3344] focus:ring-2 focus:ring-[#ff3344]/30 transition-all duration-200 font-medium"})}),c.jsxs("button",{type:"submit",disabled:l||a==="LISTENING"||!s.trim(),className:"h-12 px-5 sm:px-7 rounded-xl bg-gradient-to-r from-[#ff3344] via-[#e61b30] to-[#b30e1f] text-white font-extrabold text-xs tracking-wider uppercase hover:shadow-[0_0_25px_rgba(255,51,68,0.6)] disabled:opacity-40 disabled:cursor-not-allowed transition-all duration-300 flex items-center justify-center gap-2 cursor-pointer",children:[c.jsx("span",{children:"Ask"}),c.jsx("span",{children:"➔"})]})]}),c.jsxs("div",{className:"flex items-center justify-between text-[11px] text-[#94a3b8] flex-wrap gap-2 pt-2 border-t border-white/5 font-mono",children:[c.jsx("span",{className:"font-semibold text-[#818c9c]",children:"Direct Verified Contacts:"}),c.jsxs("div",{className:"flex items-center gap-4",children:[c.jsxs("a",{href:Se.callUrl,className:"text-[#00d9ff] hover:text-white transition flex items-center gap-1 font-bold",children:[c.jsx("span",{children:"📞 Call:"})," ",c.jsx("span",{children:"+92 330 0358799"})]}),c.jsxs("a",{href:Se.whatsappUrl,target:"_blank",rel:"noopener noreferrer",className:"text-emerald-400 hover:text-white transition flex items-center gap-1 font-bold",children:[c.jsx("span",{children:"💬 WhatsApp:"})," ",c.jsx("span",{children:"+92 342 6793428"})]})]})]})]})]})]}):null}function yh({onOpen:i}){return c.jsx("div",{className:"fixed bottom-5 right-5 z-40 select-none animate-fadeIn",children:c.jsxs("button",{onClick:i,className:"group relative flex items-center gap-3 p-1.5 pr-4 sm:pr-5 rounded-full bg-[#0b101b]/95 hover:bg-[#101726] border border-[#ff3344]/40 hover:border-[#ff3344] shadow-[0_8px_30px_rgba(0,0,0,0.6),0_0_20px_rgba(255,51,68,0.25)] hover:shadow-[0_8px_35px_rgba(255,51,68,0.45)] backdrop-blur-xl transition-all duration-300 transform hover:-translate-y-1 active:translate-y-0 cursor-pointer","aria-label":"Open AI Voice Support Assistant",children:[c.jsx("div",{className:"absolute inset-0 rounded-full overflow-hidden pointer-events-none",children:c.jsx("div",{className:"absolute -inset-full bg-gradient-to-r from-transparent via-white/10 to-transparent transform -skew-x-12 group-hover:translate-x-full transition-transform duration-1000"})}),c.jsxs("div",{className:"relative flex items-center justify-center w-11 h-11 rounded-full bg-gradient-to-br from-[#ff3344] via-[#e61b30] to-[#b30e1f] text-white shadow-[0_0_15px_rgba(255,51,68,0.5)] group-hover:scale-105 transition-transform duration-300",children:[c.jsx("span",{className:"text-lg",children:"🎙️"}),c.jsx("span",{className:"absolute inset-0 rounded-full border border-white/40 animate-ping opacity-30 pointer-events-none"}),c.jsx("span",{className:"absolute -top-0.5 -right-0.5 w-3.5 h-3.5 rounded-full bg-emerald-400 border-2 border-[#0b101b] shadow-sm"})]}),c.jsxs("div",{className:"flex flex-col text-left",children:[c.jsxs("div",{className:"flex items-center gap-1.5",children:[c.jsx("span",{className:"text-[13px] sm:text-sm font-extrabold tracking-wide text-white group-hover:text-[#ff4d5a] transition-colors",children:"AI Voice Support"}),c.jsx("span",{className:"hidden sm:inline-block text-[9px] px-1.5 py-0.5 rounded-full bg-[#ff3344]/20 text-[#ff4d5a] border border-[#ff3344]/40 font-bold uppercase tracking-wider",children:"Live"})]}),c.jsx("p",{className:"text-[11px] text-[#94a3b8] group-hover:text-[#cbd5e1] transition-colors leading-tight hidden xs:block",children:"Ask by voice or text 24/7"})]}),c.jsxs("div",{className:"flex items-center gap-0.5 sm:gap-1 h-3.5 pl-1",children:[c.jsx("span",{className:"w-0.5 sm:w-1 bg-[#ff3344] rounded-full h-2 group-hover:h-3.5 transition-all duration-300 animate-[pulse_0.6s_ease-in-out_infinite]"}),c.jsx("span",{className:"w-0.5 sm:w-1 bg-[#00d9ff] rounded-full h-3.5 group-hover:h-2 transition-all duration-300 animate-[pulse_0.4s_ease-in-out_infinite]"}),c.jsx("span",{className:"w-0.5 sm:w-1 bg-[#ff4d5a] rounded-full h-1.5 group-hover:h-3 transition-all duration-300 animate-[pulse_0.5s_ease-in-out_infinite]"}),c.jsx("span",{className:"w-0.5 sm:w-1 bg-[#00d9ff] rounded-full h-3 group-hover:h-1.5 transition-all duration-300 animate-[pulse_0.3s_ease-in-out_infinite]"})]})]})})}/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const fo="185",Li={ROTATE:0,DOLLY:1,PAN:2},Di={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},Sh=0,rl=1,Mh=2,tr=1,Lc=2,os=3,kn=0,Ht=1,_n=2,Fn=0,Ui=1,al=2,ol=3,ll=4,Eh=5,li=100,wh=101,Th=102,Ah=103,Rh=104,Ch=200,Nh=201,Ph=202,Ih=203,xa=204,_a=205,Dh=206,Lh=207,Uh=208,Fh=209,Oh=210,kh=211,Bh=212,Gh=213,zh=214,ba=0,va=1,ya=2,Bi=3,Sa=4,Ma=5,Ea=6,wa=7,Uc=0,Vh=1,Hh=2,yn=0,Fc=1,Oc=2,kc=3,Bc=4,Gc=5,zc=6,Vc=7,cl="attached",jh="detached",Hc=300,fi=301,Gi=302,Rr=303,Cr=304,xr=306,zi=1e3,bn=1001,lr=1002,Mt=1003,jc=1004,ls=1005,Et=1006,nr=1007,Ln=1008,Yt=1009,Wc=1010,Xc=1011,fs=1012,po=1013,Mn=1014,Qt=1015,Bn=1016,mo=1017,go=1018,ps=1020,qc=35902,Yc=35899,Kc=1021,$c=1022,en=1023,Gn=1026,di=1027,xo=1028,_o=1029,pi=1030,bo=1031,vo=1033,ir=33776,sr=33777,rr=33778,ar=33779,Ta=35840,Aa=35841,Ra=35842,Ca=35843,Na=36196,Pa=37492,Ia=37496,Da=37488,La=37489,cr=37490,Ua=37491,Fa=37808,Oa=37809,ka=37810,Ba=37811,Ga=37812,za=37813,Va=37814,Ha=37815,ja=37816,Wa=37817,Xa=37818,qa=37819,Ya=37820,Ka=37821,$a=36492,Za=36494,Ja=36495,Qa=36283,eo=36284,dr=36285,to=36286,ms=2300,gs=2301,Nr=2302,dl=2303,hl=2400,ul=2401,fl=2402,Wh=2500,Xh=0,Zc=1,no=2,qh=3200,io=0,Yh=1,Jn="",Pt="srgb",Kt="srgb-linear",hr="linear",Je="srgb",xi=7680,pl=519,Kh=512,$h=513,Zh=514,yo=515,Jh=516,Qh=517,So=518,eu=519,so=35044,ml="300 es",vn=2e3,xs=2001;function tu(i){for(let e=i.length-1;e>=0;--e)if(i[e]>=65535)return!0;return!1}function nu(i){return ArrayBuffer.isView(i)&&!(i instanceof DataView)}function _s(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function iu(){const i=_s("canvas");return i.style.display="block",i}const gl={};function ur(...i){const e="THREE."+i.shift();console.log(e,...i)}function Jc(i){const e=i[0];if(typeof e=="string"&&e.startsWith("TSL:")){const t=i[1];t&&t.isStackTrace?i[0]+=" "+t.getLocation():i[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return i}function Me(...i){i=Jc(i);const e="THREE."+i.shift();{const t=i[0];t&&t.isStackTrace?console.warn(t.getError(e)):console.warn(e,...i)}}function De(...i){i=Jc(i);const e="THREE."+i.shift();{const t=i[0];t&&t.isStackTrace?console.error(t.getError(e)):console.error(e,...i)}}function Fi(...i){const e=i.join(" ");e in gl||(gl[e]=!0,Me(...i))}function su(i,e,t){return new Promise(function(n,s){function r(){switch(i.clientWaitSync(e,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:s();break;case i.TIMEOUT_EXPIRED:setTimeout(r,t);break;default:n()}}setTimeout(r,t)})}const ru={[ba]:va,[ya]:Ea,[Sa]:wa,[Bi]:Ma,[va]:ba,[Ea]:ya,[wa]:Sa,[Ma]:Bi};class ti{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){const n=this._listeners;return n===void 0?!1:n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){const n=this._listeners;if(n===void 0)return;const s=n[e];if(s!==void 0){const r=s.indexOf(t);r!==-1&&s.splice(r,1)}}dispatchEvent(e){const t=this._listeners;if(t===void 0)return;const n=t[e.type];if(n!==void 0){e.target=this;const s=n.slice(0);for(let r=0,a=s.length;r<a;r++)s[r].call(this,e);e.target=null}}}const Lt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let xl=1234567;const ds=Math.PI/180,Vi=180/Math.PI;function on(){const i=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Lt[i&255]+Lt[i>>8&255]+Lt[i>>16&255]+Lt[i>>24&255]+"-"+Lt[e&255]+Lt[e>>8&255]+"-"+Lt[e>>16&15|64]+Lt[e>>24&255]+"-"+Lt[t&63|128]+Lt[t>>8&255]+"-"+Lt[t>>16&255]+Lt[t>>24&255]+Lt[n&255]+Lt[n>>8&255]+Lt[n>>16&255]+Lt[n>>24&255]).toLowerCase()}function Ve(i,e,t){return Math.max(e,Math.min(t,i))}function Mo(i,e){return(i%e+e)%e}function au(i,e,t,n,s){return n+(i-e)*(s-n)/(t-e)}function ou(i,e,t){return i!==e?(t-i)/(e-i):0}function hs(i,e,t){return(1-t)*i+t*e}function lu(i,e,t,n){return hs(i,e,1-Math.exp(-t*n))}function cu(i,e=1){return e-Math.abs(Mo(i,e*2)-e)}function du(i,e,t){return i<=e?0:i>=t?1:(i=(i-e)/(t-e),i*i*(3-2*i))}function hu(i,e,t){return i<=e?0:i>=t?1:(i=(i-e)/(t-e),i*i*i*(i*(i*6-15)+10))}function uu(i,e){return i+Math.floor(Math.random()*(e-i+1))}function fu(i,e){return i+Math.random()*(e-i)}function pu(i){return i*(.5-Math.random())}function mu(i){i!==void 0&&(xl=i);let e=xl+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function gu(i){return i*ds}function xu(i){return i*Vi}function _u(i){return(i&i-1)===0&&i!==0}function bu(i){return Math.pow(2,Math.ceil(Math.log(i)/Math.LN2))}function vu(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))}function yu(i,e,t,n,s){const r=Math.cos,a=Math.sin,o=r(t/2),l=a(t/2),d=r((e+n)/2),h=a((e+n)/2),f=r((e-n)/2),u=a((e-n)/2),p=r((n-e)/2),x=a((n-e)/2);switch(s){case"XYX":i.set(o*h,l*f,l*u,o*d);break;case"YZY":i.set(l*u,o*h,l*f,o*d);break;case"ZXZ":i.set(l*f,l*u,o*h,o*d);break;case"XZX":i.set(o*h,l*x,l*p,o*d);break;case"YXY":i.set(l*p,o*h,l*x,o*d);break;case"ZYZ":i.set(l*x,l*p,o*h,o*d);break;default:Me("MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+s)}}function rn(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("THREE.MathUtils: Invalid component type.")}}function Qe(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("THREE.MathUtils: Invalid component type.")}}const Qc={DEG2RAD:ds,RAD2DEG:Vi,generateUUID:on,clamp:Ve,euclideanModulo:Mo,mapLinear:au,inverseLerp:ou,lerp:hs,damp:lu,pingpong:cu,smoothstep:du,smootherstep:hu,randInt:uu,randFloat:fu,randFloatSpread:pu,seededRandom:mu,degToRad:gu,radToDeg:xu,isPowerOfTwo:_u,ceilPowerOfTwo:bu,floorPowerOfTwo:vu,setQuaternionFromProperEuler:yu,normalize:Qe,denormalize:rn},Go=class Go{constructor(e=0,t=0){this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("THREE.Vector2: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,n=this.y,s=e.elements;return this.x=s[0]*t+s[3]*n+s[6],this.y=s[1]*t+s[4]*n+s[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Ve(this.x,e.x,t.x),this.y=Ve(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=Ve(this.x,e,t),this.y=Ve(this.y,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Ve(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(Ve(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const n=Math.cos(t),s=Math.sin(t),r=this.x-e.x,a=this.y-e.y;return this.x=r*n-a*s+e.x,this.y=r*s+a*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}};Go.prototype.isVector2=!0;let Ce=Go;class cn{constructor(e=0,t=0,n=0,s=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=s}static slerpFlat(e,t,n,s,r,a,o){let l=n[s+0],d=n[s+1],h=n[s+2],f=n[s+3],u=r[a+0],p=r[a+1],x=r[a+2],v=r[a+3];if(f!==v||l!==u||d!==p||h!==x){let g=l*u+d*p+h*x+f*v;g<0&&(u=-u,p=-p,x=-x,v=-v,g=-g);let m=1-o;if(g<.9995){const M=Math.acos(g),T=Math.sin(M);m=Math.sin(m*M)/T,o=Math.sin(o*M)/T,l=l*m+u*o,d=d*m+p*o,h=h*m+x*o,f=f*m+v*o}else{l=l*m+u*o,d=d*m+p*o,h=h*m+x*o,f=f*m+v*o;const M=1/Math.sqrt(l*l+d*d+h*h+f*f);l*=M,d*=M,h*=M,f*=M}}e[t]=l,e[t+1]=d,e[t+2]=h,e[t+3]=f}static multiplyQuaternionsFlat(e,t,n,s,r,a){const o=n[s],l=n[s+1],d=n[s+2],h=n[s+3],f=r[a],u=r[a+1],p=r[a+2],x=r[a+3];return e[t]=o*x+h*f+l*p-d*u,e[t+1]=l*x+h*u+d*f-o*p,e[t+2]=d*x+h*p+o*u-l*f,e[t+3]=h*x-o*f-l*u-d*p,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,s){return this._x=e,this._y=t,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const n=e._x,s=e._y,r=e._z,a=e._order,o=Math.cos,l=Math.sin,d=o(n/2),h=o(s/2),f=o(r/2),u=l(n/2),p=l(s/2),x=l(r/2);switch(a){case"XYZ":this._x=u*h*f+d*p*x,this._y=d*p*f-u*h*x,this._z=d*h*x+u*p*f,this._w=d*h*f-u*p*x;break;case"YXZ":this._x=u*h*f+d*p*x,this._y=d*p*f-u*h*x,this._z=d*h*x-u*p*f,this._w=d*h*f+u*p*x;break;case"ZXY":this._x=u*h*f-d*p*x,this._y=d*p*f+u*h*x,this._z=d*h*x+u*p*f,this._w=d*h*f-u*p*x;break;case"ZYX":this._x=u*h*f-d*p*x,this._y=d*p*f+u*h*x,this._z=d*h*x-u*p*f,this._w=d*h*f+u*p*x;break;case"YZX":this._x=u*h*f+d*p*x,this._y=d*p*f+u*h*x,this._z=d*h*x-u*p*f,this._w=d*h*f-u*p*x;break;case"XZY":this._x=u*h*f-d*p*x,this._y=d*p*f-u*h*x,this._z=d*h*x+u*p*f,this._w=d*h*f+u*p*x;break;default:Me("Quaternion: .setFromEuler() encountered an unknown order: "+a)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const n=t/2,s=Math.sin(n);return this._x=e.x*s,this._y=e.y*s,this._z=e.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,n=t[0],s=t[4],r=t[8],a=t[1],o=t[5],l=t[9],d=t[2],h=t[6],f=t[10],u=n+o+f;if(u>0){const p=.5/Math.sqrt(u+1);this._w=.25/p,this._x=(h-l)*p,this._y=(r-d)*p,this._z=(a-s)*p}else if(n>o&&n>f){const p=2*Math.sqrt(1+n-o-f);this._w=(h-l)/p,this._x=.25*p,this._y=(s+a)/p,this._z=(r+d)/p}else if(o>f){const p=2*Math.sqrt(1+o-n-f);this._w=(r-d)/p,this._x=(s+a)/p,this._y=.25*p,this._z=(l+h)/p}else{const p=2*Math.sqrt(1+f-n-o);this._w=(a-s)/p,this._x=(r+d)/p,this._y=(l+h)/p,this._z=.25*p}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<1e-8?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Ve(this.dot(e),-1,1)))}rotateTowards(e,t){const n=this.angleTo(e);if(n===0)return this;const s=Math.min(1,t/n);return this.slerp(e,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const n=e._x,s=e._y,r=e._z,a=e._w,o=t._x,l=t._y,d=t._z,h=t._w;return this._x=n*h+a*o+s*d-r*l,this._y=s*h+a*l+r*o-n*d,this._z=r*h+a*d+n*l-s*o,this._w=a*h-n*o-s*l-r*d,this._onChangeCallback(),this}slerp(e,t){let n=e._x,s=e._y,r=e._z,a=e._w,o=this.dot(e);o<0&&(n=-n,s=-s,r=-r,a=-a,o=-o);let l=1-t;if(o<.9995){const d=Math.acos(o),h=Math.sin(d);l=Math.sin(l*d)/h,t=Math.sin(t*d)/h,this._x=this._x*l+n*t,this._y=this._y*l+s*t,this._z=this._z*l+r*t,this._w=this._w*l+a*t,this._onChangeCallback()}else this._x=this._x*l+n*t,this._y=this._y*l+s*t,this._z=this._z*l+r*t,this._w=this._w*l+a*t,this.normalize();return this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),s=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(s*Math.sin(e),s*Math.cos(e),r*Math.sin(t),r*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}const zo=class zo{constructor(e=0,t=0,n=0){this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("THREE.Vector3: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(_l.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(_l.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,n=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6]*s,this.y=r[1]*t+r[4]*n+r[7]*s,this.z=r[2]*t+r[5]*n+r[8]*s,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,n=this.y,s=this.z,r=e.elements,a=1/(r[3]*t+r[7]*n+r[11]*s+r[15]);return this.x=(r[0]*t+r[4]*n+r[8]*s+r[12])*a,this.y=(r[1]*t+r[5]*n+r[9]*s+r[13])*a,this.z=(r[2]*t+r[6]*n+r[10]*s+r[14])*a,this}applyQuaternion(e){const t=this.x,n=this.y,s=this.z,r=e.x,a=e.y,o=e.z,l=e.w,d=2*(a*s-o*n),h=2*(o*t-r*s),f=2*(r*n-a*t);return this.x=t+l*d+a*f-o*h,this.y=n+l*h+o*d-r*f,this.z=s+l*f+r*h-a*d,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,n=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[4]*n+r[8]*s,this.y=r[1]*t+r[5]*n+r[9]*s,this.z=r[2]*t+r[6]*n+r[10]*s,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Ve(this.x,e.x,t.x),this.y=Ve(this.y,e.y,t.y),this.z=Ve(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=Ve(this.x,e,t),this.y=Ve(this.y,e,t),this.z=Ve(this.z,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Ve(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const n=e.x,s=e.y,r=e.z,a=t.x,o=t.y,l=t.z;return this.x=s*l-r*o,this.y=r*a-n*l,this.z=n*o-s*a,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return Pr.copy(this).projectOnVector(e),this.sub(Pr)}reflect(e){return this.sub(Pr.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(Ve(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y,s=this.z-e.z;return t*t+n*n+s*s}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){const s=Math.sin(t)*e;return this.x=s*Math.sin(n),this.y=Math.cos(t)*e,this.z=s*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),s=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=s,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}};zo.prototype.isVector3=!0;let D=zo;const Pr=new D,_l=new cn,Vo=class Vo{constructor(e,t,n,s,r,a,o,l,d){this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,s,r,a,o,l,d)}set(e,t,n,s,r,a,o,l,d){const h=this.elements;return h[0]=e,h[1]=s,h[2]=o,h[3]=t,h[4]=r,h[5]=l,h[6]=n,h[7]=a,h[8]=d,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,s=t.elements,r=this.elements,a=n[0],o=n[3],l=n[6],d=n[1],h=n[4],f=n[7],u=n[2],p=n[5],x=n[8],v=s[0],g=s[3],m=s[6],M=s[1],T=s[4],y=s[7],A=s[2],w=s[5],R=s[8];return r[0]=a*v+o*M+l*A,r[3]=a*g+o*T+l*w,r[6]=a*m+o*y+l*R,r[1]=d*v+h*M+f*A,r[4]=d*g+h*T+f*w,r[7]=d*m+h*y+f*R,r[2]=u*v+p*M+x*A,r[5]=u*g+p*T+x*w,r[8]=u*m+p*y+x*R,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],a=e[4],o=e[5],l=e[6],d=e[7],h=e[8];return t*a*h-t*o*d-n*r*h+n*o*l+s*r*d-s*a*l}invert(){const e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],a=e[4],o=e[5],l=e[6],d=e[7],h=e[8],f=h*a-o*d,u=o*l-h*r,p=d*r-a*l,x=t*f+n*u+s*p;if(x===0)return this.set(0,0,0,0,0,0,0,0,0);const v=1/x;return e[0]=f*v,e[1]=(s*d-h*n)*v,e[2]=(o*n-s*a)*v,e[3]=u*v,e[4]=(h*t-s*l)*v,e[5]=(s*r-o*t)*v,e[6]=p*v,e[7]=(n*l-d*t)*v,e[8]=(a*t-n*r)*v,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,s,r,a,o){const l=Math.cos(r),d=Math.sin(r);return this.set(n*l,n*d,-n*(l*a+d*o)+a+e,-s*d,s*l,-s*(-d*a+l*o)+o+t,0,0,1),this}scale(e,t){return Fi("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(Ir.makeScale(e,t)),this}rotate(e){return Fi("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(Ir.makeRotation(-e)),this}translate(e,t){return Fi("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(Ir.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,n=e.elements;for(let s=0;s<9;s++)if(t[s]!==n[s])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}};Vo.prototype.isMatrix3=!0;let Ue=Vo;const Ir=new Ue,bl=new Ue().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),vl=new Ue().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function Su(){const i={enabled:!0,workingColorSpace:Kt,spaces:{},convert:function(s,r,a){return this.enabled===!1||r===a||!r||!a||(this.spaces[r].transfer===Je&&(s.r=On(s.r),s.g=On(s.g),s.b=On(s.b)),this.spaces[r].primaries!==this.spaces[a].primaries&&(s.applyMatrix3(this.spaces[r].toXYZ),s.applyMatrix3(this.spaces[a].fromXYZ)),this.spaces[a].transfer===Je&&(s.r=Oi(s.r),s.g=Oi(s.g),s.b=Oi(s.b))),s},workingToColorSpace:function(s,r){return this.convert(s,this.workingColorSpace,r)},colorSpaceToWorking:function(s,r){return this.convert(s,r,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===Jn?hr:this.spaces[s].transfer},getToneMappingMode:function(s){return this.spaces[s].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(s,r=this.workingColorSpace){return s.fromArray(this.spaces[r].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,r,a){return s.copy(this.spaces[r].toXYZ).multiply(this.spaces[a].fromXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(s,r){return Fi("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),i.workingToColorSpace(s,r)},toWorkingColorSpace:function(s,r){return Fi("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),i.colorSpaceToWorking(s,r)}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],n=[.3127,.329];return i.define({[Kt]:{primaries:e,whitePoint:n,transfer:hr,toXYZ:bl,fromXYZ:vl,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:Pt},outputColorSpaceConfig:{drawingBufferColorSpace:Pt}},[Pt]:{primaries:e,whitePoint:n,transfer:Je,toXYZ:bl,fromXYZ:vl,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:Pt}}}),i}const je=Su();function On(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function Oi(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}let _i;class Mu{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let n;if(e instanceof HTMLCanvasElement)n=e;else{_i===void 0&&(_i=_s("canvas")),_i.width=e.width,_i.height=e.height;const s=_i.getContext("2d");e instanceof ImageData?s.putImageData(e,0,0):s.drawImage(e,0,0,e.width,e.height),n=_i}return n.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=_s("canvas");t.width=e.width,t.height=e.height;const n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);const s=n.getImageData(0,0,e.width,e.height),r=s.data;for(let a=0;a<r.length;a++)r[a]=On(r[a]/255)*255;return n.putImageData(s,0,0),t}else if(e.data){const t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(On(t[n]/255)*255):t[n]=On(t[n]);return{data:t,width:e.width,height:e.height}}else return Me("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let Eu=0;class Eo{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Eu++}),this.uuid=on(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){const t=this.data;return typeof HTMLVideoElement<"u"&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):typeof VideoFrame<"u"&&t instanceof VideoFrame?e.set(t.displayWidth,t.displayHeight,0):t!==null?e.set(t.width,t.height,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let a=0,o=s.length;a<o;a++)s[a].isDataTexture?r.push(Dr(s[a].image)):r.push(Dr(s[a]))}else r=Dr(s);n.url=r}return t||(e.images[this.uuid]=n),n}}function Dr(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?Mu.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(Me("Texture: Unable to serialize Texture."),{})}let wu=0;const Lr=new D;class Ct extends ti{constructor(e=Ct.DEFAULT_IMAGE,t=Ct.DEFAULT_MAPPING,n=bn,s=bn,r=Et,a=Ln,o=en,l=Yt,d=Ct.DEFAULT_ANISOTROPY,h=Jn){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:wu++}),this.uuid=on(),this.name="",this.source=new Eo(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=s,this.magFilter=r,this.minFilter=a,this.anisotropy=d,this.format=o,this.internalFormat=null,this.type=l,this.offset=new Ce(0,0),this.repeat=new Ce(1,1),this.center=new Ce(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Ue,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0,this.normalized=!1}get width(){return this.source.getSize(Lr).x}get height(){return this.source.getSize(Lr).y}get depth(){return this.source.getSize(Lr).z}get image(){return this.source.data}set image(e){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.normalized=e.normalized,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(const t in e){const n=e[t];if(n===void 0){Me(`Texture.setValues(): parameter '${t}' has value of undefined.`);continue}const s=this[t];if(s===void 0){Me(`Texture.setValues(): property '${t}' does not exist.`);continue}s&&n&&s.isVector2&&n.isVector2||s&&n&&s.isVector3&&n.isVector3||s&&n&&s.isMatrix3&&n.isMatrix3?s.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const n={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Hc)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case zi:e.x=e.x-Math.floor(e.x);break;case bn:e.x=e.x<0?0:1;break;case lr:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case zi:e.y=e.y-Math.floor(e.y);break;case bn:e.y=e.y<0?0:1;break;case lr:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}Ct.DEFAULT_IMAGE=null;Ct.DEFAULT_MAPPING=Hc;Ct.DEFAULT_ANISOTROPY=1;const Ho=class Ho{constructor(e=0,t=0,n=0,s=1){this.x=e,this.y=t,this.z=n,this.w=s}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,s){return this.x=e,this.y=t,this.z=n,this.w=s,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("THREE.Vector4: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,n=this.y,s=this.z,r=this.w,a=e.elements;return this.x=a[0]*t+a[4]*n+a[8]*s+a[12]*r,this.y=a[1]*t+a[5]*n+a[9]*s+a[13]*r,this.z=a[2]*t+a[6]*n+a[10]*s+a[14]*r,this.w=a[3]*t+a[7]*n+a[11]*s+a[15]*r,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,s,r;const l=e.elements,d=l[0],h=l[4],f=l[8],u=l[1],p=l[5],x=l[9],v=l[2],g=l[6],m=l[10];if(Math.abs(h-u)<.01&&Math.abs(f-v)<.01&&Math.abs(x-g)<.01){if(Math.abs(h+u)<.1&&Math.abs(f+v)<.1&&Math.abs(x+g)<.1&&Math.abs(d+p+m-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const T=(d+1)/2,y=(p+1)/2,A=(m+1)/2,w=(h+u)/4,R=(f+v)/4,_=(x+g)/4;return T>y&&T>A?T<.01?(n=0,s=.707106781,r=.707106781):(n=Math.sqrt(T),s=w/n,r=R/n):y>A?y<.01?(n=.707106781,s=0,r=.707106781):(s=Math.sqrt(y),n=w/s,r=_/s):A<.01?(n=.707106781,s=.707106781,r=0):(r=Math.sqrt(A),n=R/r,s=_/r),this.set(n,s,r,t),this}let M=Math.sqrt((g-x)*(g-x)+(f-v)*(f-v)+(u-h)*(u-h));return Math.abs(M)<.001&&(M=1),this.x=(g-x)/M,this.y=(f-v)/M,this.z=(u-h)/M,this.w=Math.acos((d+p+m-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Ve(this.x,e.x,t.x),this.y=Ve(this.y,e.y,t.y),this.z=Ve(this.z,e.z,t.z),this.w=Ve(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=Ve(this.x,e,t),this.y=Ve(this.y,e,t),this.z=Ve(this.z,e,t),this.w=Ve(this.w,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Ve(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}};Ho.prototype.isVector4=!0;let it=Ho;class Tu extends ti{constructor(e=1,t=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Et,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},n),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=n.depth,this.scissor=new it(0,0,e,t),this.scissorTest=!1,this.viewport=new it(0,0,e,t),this.textures=[];const s={width:e,height:t,depth:n.depth},r=new Ct(s),a=n.count;for(let o=0;o<a;o++)this.textures[o]=r.clone(),this.textures[o].isRenderTargetTexture=!0,this.textures[o].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview,this.useArrayDepthTexture=n.useArrayDepthTexture}_setTextureOptions(e={}){const t={minFilter:Et,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let n=0;n<this.textures.length;n++)this.textures[n].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=e,this.textures[s].image.height=t,this.textures[s].image.depth=n,this.textures[s].isData3DTexture!==!0&&(this.textures[s].isArrayTexture=this.textures[s].image.depth>1);this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,n=e.textures.length;t<n;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;const s=Object.assign({},e.textures[t].image);this.textures[t].source=new Eo(s)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this.multiview=e.multiview,this.useArrayDepthTexture=e.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Sn extends Tu{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}}class ed extends Ct{constructor(e=null,t=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:s},this.magFilter=Mt,this.minFilter=Mt,this.wrapR=bn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class Au extends Ct{constructor(e=null,t=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:s},this.magFilter=Mt,this.minFilter=Mt,this.wrapR=bn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const gr=class gr{constructor(e,t,n,s,r,a,o,l,d,h,f,u,p,x,v,g){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,s,r,a,o,l,d,h,f,u,p,x,v,g)}set(e,t,n,s,r,a,o,l,d,h,f,u,p,x,v,g){const m=this.elements;return m[0]=e,m[4]=t,m[8]=n,m[12]=s,m[1]=r,m[5]=a,m[9]=o,m[13]=l,m[2]=d,m[6]=h,m[10]=f,m[14]=u,m[3]=p,m[7]=x,m[11]=v,m[15]=g,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new gr().fromArray(this.elements)}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){const t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return this.determinantAffine()===0?(e.set(1,0,0),t.set(0,1,0),n.set(0,0,1),this):(e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this)}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){if(e.determinantAffine()===0)return this.identity();const t=this.elements,n=e.elements,s=1/bi.setFromMatrixColumn(e,0).length(),r=1/bi.setFromMatrixColumn(e,1).length(),a=1/bi.setFromMatrixColumn(e,2).length();return t[0]=n[0]*s,t[1]=n[1]*s,t[2]=n[2]*s,t[3]=0,t[4]=n[4]*r,t[5]=n[5]*r,t[6]=n[6]*r,t[7]=0,t[8]=n[8]*a,t[9]=n[9]*a,t[10]=n[10]*a,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,n=e.x,s=e.y,r=e.z,a=Math.cos(n),o=Math.sin(n),l=Math.cos(s),d=Math.sin(s),h=Math.cos(r),f=Math.sin(r);if(e.order==="XYZ"){const u=a*h,p=a*f,x=o*h,v=o*f;t[0]=l*h,t[4]=-l*f,t[8]=d,t[1]=p+x*d,t[5]=u-v*d,t[9]=-o*l,t[2]=v-u*d,t[6]=x+p*d,t[10]=a*l}else if(e.order==="YXZ"){const u=l*h,p=l*f,x=d*h,v=d*f;t[0]=u+v*o,t[4]=x*o-p,t[8]=a*d,t[1]=a*f,t[5]=a*h,t[9]=-o,t[2]=p*o-x,t[6]=v+u*o,t[10]=a*l}else if(e.order==="ZXY"){const u=l*h,p=l*f,x=d*h,v=d*f;t[0]=u-v*o,t[4]=-a*f,t[8]=x+p*o,t[1]=p+x*o,t[5]=a*h,t[9]=v-u*o,t[2]=-a*d,t[6]=o,t[10]=a*l}else if(e.order==="ZYX"){const u=a*h,p=a*f,x=o*h,v=o*f;t[0]=l*h,t[4]=x*d-p,t[8]=u*d+v,t[1]=l*f,t[5]=v*d+u,t[9]=p*d-x,t[2]=-d,t[6]=o*l,t[10]=a*l}else if(e.order==="YZX"){const u=a*l,p=a*d,x=o*l,v=o*d;t[0]=l*h,t[4]=v-u*f,t[8]=x*f+p,t[1]=f,t[5]=a*h,t[9]=-o*h,t[2]=-d*h,t[6]=p*f+x,t[10]=u-v*f}else if(e.order==="XZY"){const u=a*l,p=a*d,x=o*l,v=o*d;t[0]=l*h,t[4]=-f,t[8]=d*h,t[1]=u*f+v,t[5]=a*h,t[9]=p*f-x,t[2]=x*f-p,t[6]=o*h,t[10]=v*f+u}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(Ru,e,Cu)}lookAt(e,t,n){const s=this.elements;return Xt.subVectors(e,t),Xt.lengthSq()===0&&(Xt.z=1),Xt.normalize(),jn.crossVectors(n,Xt),jn.lengthSq()===0&&(Math.abs(n.z)===1?Xt.x+=1e-4:Xt.z+=1e-4,Xt.normalize(),jn.crossVectors(n,Xt)),jn.normalize(),Ts.crossVectors(Xt,jn),s[0]=jn.x,s[4]=Ts.x,s[8]=Xt.x,s[1]=jn.y,s[5]=Ts.y,s[9]=Xt.y,s[2]=jn.z,s[6]=Ts.z,s[10]=Xt.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,s=t.elements,r=this.elements,a=n[0],o=n[4],l=n[8],d=n[12],h=n[1],f=n[5],u=n[9],p=n[13],x=n[2],v=n[6],g=n[10],m=n[14],M=n[3],T=n[7],y=n[11],A=n[15],w=s[0],R=s[4],_=s[8],E=s[12],N=s[1],P=s[5],F=s[9],j=s[13],K=s[2],k=s[6],X=s[10],W=s[14],Q=s[3],V=s[7],ee=s[11],se=s[15];return r[0]=a*w+o*N+l*K+d*Q,r[4]=a*R+o*P+l*k+d*V,r[8]=a*_+o*F+l*X+d*ee,r[12]=a*E+o*j+l*W+d*se,r[1]=h*w+f*N+u*K+p*Q,r[5]=h*R+f*P+u*k+p*V,r[9]=h*_+f*F+u*X+p*ee,r[13]=h*E+f*j+u*W+p*se,r[2]=x*w+v*N+g*K+m*Q,r[6]=x*R+v*P+g*k+m*V,r[10]=x*_+v*F+g*X+m*ee,r[14]=x*E+v*j+g*W+m*se,r[3]=M*w+T*N+y*K+A*Q,r[7]=M*R+T*P+y*k+A*V,r[11]=M*_+T*F+y*X+A*ee,r[15]=M*E+T*j+y*W+A*se,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[4],s=e[8],r=e[12],a=e[1],o=e[5],l=e[9],d=e[13],h=e[2],f=e[6],u=e[10],p=e[14],x=e[3],v=e[7],g=e[11],m=e[15],M=l*p-d*u,T=o*p-d*f,y=o*u-l*f,A=a*p-d*h,w=a*u-l*h,R=a*f-o*h;return t*(v*M-g*T+m*y)-n*(x*M-g*A+m*w)+s*(x*T-v*A+m*R)-r*(x*y-v*w+g*R)}determinantAffine(){const e=this.elements,t=e[0],n=e[4],s=e[8],r=e[1],a=e[5],o=e[9],l=e[2],d=e[6],h=e[10];return t*(a*h-o*d)-n*(r*h-o*l)+s*(r*d-a*l)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){const s=this.elements;return e.isVector3?(s[12]=e.x,s[13]=e.y,s[14]=e.z):(s[12]=e,s[13]=t,s[14]=n),this}invert(){const e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],a=e[4],o=e[5],l=e[6],d=e[7],h=e[8],f=e[9],u=e[10],p=e[11],x=e[12],v=e[13],g=e[14],m=e[15],M=t*o-n*a,T=t*l-s*a,y=t*d-r*a,A=n*l-s*o,w=n*d-r*o,R=s*d-r*l,_=h*v-f*x,E=h*g-u*x,N=h*m-p*x,P=f*g-u*v,F=f*m-p*v,j=u*m-p*g,K=M*j-T*F+y*P+A*N-w*E+R*_;if(K===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const k=1/K;return e[0]=(o*j-l*F+d*P)*k,e[1]=(s*F-n*j-r*P)*k,e[2]=(v*R-g*w+m*A)*k,e[3]=(u*w-f*R-p*A)*k,e[4]=(l*N-a*j-d*E)*k,e[5]=(t*j-s*N+r*E)*k,e[6]=(g*y-x*R-m*T)*k,e[7]=(h*R-u*y+p*T)*k,e[8]=(a*F-o*N+d*_)*k,e[9]=(n*N-t*F-r*_)*k,e[10]=(x*w-v*y+m*M)*k,e[11]=(f*y-h*w-p*M)*k,e[12]=(o*E-a*P-l*_)*k,e[13]=(t*P-n*E+s*_)*k,e[14]=(v*T-x*A-g*M)*k,e[15]=(h*A-f*T+u*M)*k,this}scale(e){const t=this.elements,n=e.x,s=e.y,r=e.z;return t[0]*=n,t[4]*=s,t[8]*=r,t[1]*=n,t[5]*=s,t[9]*=r,t[2]*=n,t[6]*=s,t[10]*=r,t[3]*=n,t[7]*=s,t[11]*=r,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],s=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,s))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const n=Math.cos(t),s=Math.sin(t),r=1-n,a=e.x,o=e.y,l=e.z,d=r*a,h=r*o;return this.set(d*a+n,d*o-s*l,d*l+s*o,0,d*o+s*l,h*o+n,h*l-s*a,0,d*l-s*o,h*l+s*a,r*l*l+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,s,r,a){return this.set(1,n,r,0,e,1,a,0,t,s,1,0,0,0,0,1),this}compose(e,t,n){const s=this.elements,r=t._x,a=t._y,o=t._z,l=t._w,d=r+r,h=a+a,f=o+o,u=r*d,p=r*h,x=r*f,v=a*h,g=a*f,m=o*f,M=l*d,T=l*h,y=l*f,A=n.x,w=n.y,R=n.z;return s[0]=(1-(v+m))*A,s[1]=(p+y)*A,s[2]=(x-T)*A,s[3]=0,s[4]=(p-y)*w,s[5]=(1-(u+m))*w,s[6]=(g+M)*w,s[7]=0,s[8]=(x+T)*R,s[9]=(g-M)*R,s[10]=(1-(u+v))*R,s[11]=0,s[12]=e.x,s[13]=e.y,s[14]=e.z,s[15]=1,this}decompose(e,t,n){const s=this.elements;e.x=s[12],e.y=s[13],e.z=s[14];const r=this.determinantAffine();if(r===0)return n.set(1,1,1),t.identity(),this;let a=bi.set(s[0],s[1],s[2]).length();const o=bi.set(s[4],s[5],s[6]).length(),l=bi.set(s[8],s[9],s[10]).length();r<0&&(a=-a),tn.copy(this);const d=1/a,h=1/o,f=1/l;return tn.elements[0]*=d,tn.elements[1]*=d,tn.elements[2]*=d,tn.elements[4]*=h,tn.elements[5]*=h,tn.elements[6]*=h,tn.elements[8]*=f,tn.elements[9]*=f,tn.elements[10]*=f,t.setFromRotationMatrix(tn),n.x=a,n.y=o,n.z=l,this}makePerspective(e,t,n,s,r,a,o=vn,l=!1){const d=this.elements,h=2*r/(t-e),f=2*r/(n-s),u=(t+e)/(t-e),p=(n+s)/(n-s);let x,v;if(l)x=r/(a-r),v=a*r/(a-r);else if(o===vn)x=-(a+r)/(a-r),v=-2*a*r/(a-r);else if(o===xs)x=-a/(a-r),v=-a*r/(a-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return d[0]=h,d[4]=0,d[8]=u,d[12]=0,d[1]=0,d[5]=f,d[9]=p,d[13]=0,d[2]=0,d[6]=0,d[10]=x,d[14]=v,d[3]=0,d[7]=0,d[11]=-1,d[15]=0,this}makeOrthographic(e,t,n,s,r,a,o=vn,l=!1){const d=this.elements,h=2/(t-e),f=2/(n-s),u=-(t+e)/(t-e),p=-(n+s)/(n-s);let x,v;if(l)x=1/(a-r),v=a/(a-r);else if(o===vn)x=-2/(a-r),v=-(a+r)/(a-r);else if(o===xs)x=-1/(a-r),v=-r/(a-r);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return d[0]=h,d[4]=0,d[8]=0,d[12]=u,d[1]=0,d[5]=f,d[9]=0,d[13]=p,d[2]=0,d[6]=0,d[10]=x,d[14]=v,d[3]=0,d[7]=0,d[11]=0,d[15]=1,this}equals(e){const t=this.elements,n=e.elements;for(let s=0;s<16;s++)if(t[s]!==n[s])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}};gr.prototype.isMatrix4=!0;let Ge=gr;const bi=new D,tn=new Ge,Ru=new D(0,0,0),Cu=new D(1,1,1),jn=new D,Ts=new D,Xt=new D,yl=new Ge,Sl=new cn;class ei{constructor(e=0,t=0,n=0,s=ei.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=s}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,s=this._order){return this._x=e,this._y=t,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){const s=e.elements,r=s[0],a=s[4],o=s[8],l=s[1],d=s[5],h=s[9],f=s[2],u=s[6],p=s[10];switch(t){case"XYZ":this._y=Math.asin(Ve(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-h,p),this._z=Math.atan2(-a,r)):(this._x=Math.atan2(u,d),this._z=0);break;case"YXZ":this._x=Math.asin(-Ve(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(o,p),this._z=Math.atan2(l,d)):(this._y=Math.atan2(-f,r),this._z=0);break;case"ZXY":this._x=Math.asin(Ve(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(-f,p),this._z=Math.atan2(-a,d)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-Ve(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(u,p),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-a,d));break;case"YZX":this._z=Math.asin(Ve(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,d),this._y=Math.atan2(-f,r)):(this._x=0,this._y=Math.atan2(o,p));break;case"XZY":this._z=Math.asin(-Ve(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(u,d),this._y=Math.atan2(o,r)):(this._x=Math.atan2(-h,p),this._y=0);break;default:Me("Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return yl.makeRotationFromQuaternion(e),this.setFromRotationMatrix(yl,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Sl.setFromEuler(this),this.setFromQuaternion(Sl,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}ei.DEFAULT_ORDER="XYZ";class td{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let Nu=0;const Ml=new D,vi=new cn,Rn=new Ge,As=new D,$i=new D,Pu=new D,Iu=new cn,El=new D(1,0,0),wl=new D(0,1,0),Tl=new D(0,0,1),Al={type:"added"},Du={type:"removed"},yi={type:"childadded",child:null},Ur={type:"childremoved",child:null};class ct extends ti{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Nu++}),this.uuid=on(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=ct.DEFAULT_UP.clone();const e=new D,t=new ei,n=new cn,s=new D(1,1,1);function r(){n.setFromEuler(t,!1)}function a(){t.setFromQuaternion(n,void 0,!1)}t._onChange(r),n._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new Ge},normalMatrix:{value:new Ue}}),this.matrix=new Ge,this.matrixWorld=new Ge,this.matrixAutoUpdate=ct.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=ct.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new td,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return vi.setFromAxisAngle(e,t),this.quaternion.multiply(vi),this}rotateOnWorldAxis(e,t){return vi.setFromAxisAngle(e,t),this.quaternion.premultiply(vi),this}rotateX(e){return this.rotateOnAxis(El,e)}rotateY(e){return this.rotateOnAxis(wl,e)}rotateZ(e){return this.rotateOnAxis(Tl,e)}translateOnAxis(e,t){return Ml.copy(e).applyQuaternion(this.quaternion),this.position.add(Ml.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(El,e)}translateY(e){return this.translateOnAxis(wl,e)}translateZ(e){return this.translateOnAxis(Tl,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Rn.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?As.copy(e):As.set(e,t,n);const s=this.parent;this.updateWorldMatrix(!0,!1),$i.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Rn.lookAt($i,As,this.up):Rn.lookAt(As,$i,this.up),this.quaternion.setFromRotationMatrix(Rn),s&&(Rn.extractRotation(s.matrixWorld),vi.setFromRotationMatrix(Rn),this.quaternion.premultiply(vi.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(De("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(Al),yi.child=e,this.dispatchEvent(yi),yi.child=null):De("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(Du),Ur.child=e,this.dispatchEvent(Ur),Ur.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Rn.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Rn.multiply(e.parent.matrixWorld)),e.applyMatrix4(Rn),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(Al),yi.child=e,this.dispatchEvent(yi),yi.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,s=this.children.length;n<s;n++){const a=this.children[n].getObjectByProperty(e,t);if(a!==void 0)return a}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);const s=this.children;for(let r=0,a=s.length;r<a;r++)s[r].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose($i,e,Pu),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose($i,Iu,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);const e=this.pivot;if(e!==null){const t=e.x,n=e.y,s=e.z,r=this.matrix.elements;r[12]+=t-r[0]*t-r[4]*n-r[8]*s,r[13]+=n-r[1]*t-r[5]*n-r[9]*s,r[14]+=s-r[2]*t-r[6]*n-r[10]*s}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t,n=!1){const s=this.parent;if(e===!0&&s!==null&&s.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||n)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,n=!0),t===!0){const r=this.children;for(let a=0,o=r.length;a<o;a++)r[a].updateWorldMatrix(!1,!0,n)}}toJSON(e){const t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),this.static!==!1&&(s.static=this.static),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.pivot!==null&&(s.pivot=this.pivot.toArray()),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.morphTargetDictionary!==void 0&&(s.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(s.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.geometryInfo=this._geometryInfo.map(o=>({...o,boundingBox:o.boundingBox?o.boundingBox.toJSON():void 0,boundingSphere:o.boundingSphere?o.boundingSphere.toJSON():void 0})),s.instanceInfo=this._instanceInfo.map(o=>({...o})),s.availableInstanceIds=this._availableInstanceIds.slice(),s.availableGeometryIds=this._availableGeometryIds.slice(),s.nextIndexStart=this._nextIndexStart,s.nextVertexStart=this._nextVertexStart,s.geometryCount=this._geometryCount,s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.matricesTexture=this._matricesTexture.toJSON(e),s.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(s.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(s.boundingBox=this.boundingBox.toJSON()));function r(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(e.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const l=o.shapes;if(Array.isArray(l))for(let d=0,h=l.length;d<h;d++){const f=l[d];r(e.shapes,f)}else r(e.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let l=0,d=this.material.length;l<d;l++)o.push(r(e.materials,this.material[l]));s.material=o}else s.material=r(e.materials,this.material);if(this.children.length>0){s.children=[];for(let o=0;o<this.children.length;o++)s.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){s.animations=[];for(let o=0;o<this.animations.length;o++){const l=this.animations[o];s.animations.push(r(e.animations,l))}}if(t){const o=a(e.geometries),l=a(e.materials),d=a(e.textures),h=a(e.images),f=a(e.shapes),u=a(e.skeletons),p=a(e.animations),x=a(e.nodes);o.length>0&&(n.geometries=o),l.length>0&&(n.materials=l),d.length>0&&(n.textures=d),h.length>0&&(n.images=h),f.length>0&&(n.shapes=f),u.length>0&&(n.skeletons=u),p.length>0&&(n.animations=p),x.length>0&&(n.nodes=x)}return n.object=s,n;function a(o){const l=[];for(const d in o){const h=o[d];delete h.metadata,l.push(h)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.pivot=e.pivot!==null?e.pivot.clone():null,this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.static=e.static,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){const s=e.children[n];this.add(s.clone())}return this}}ct.DEFAULT_UP=new D(0,1,0);ct.DEFAULT_MATRIX_AUTO_UPDATE=!0;ct.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;class hi extends ct{constructor(){super(),this.isGroup=!0,this.type="Group"}}const Lu={type:"move"};class Fr{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new hi,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new hi,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new D,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new D),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new hi,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new D,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new D,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let s=null,r=null,a=null;const o=this._targetRay,l=this._grip,d=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(d&&e.hand){a=!0;for(const v of e.hand.values()){const g=t.getJointPose(v,n),m=this._getHandJoint(d,v);g!==null&&(m.matrix.fromArray(g.transform.matrix),m.matrix.decompose(m.position,m.rotation,m.scale),m.matrixWorldNeedsUpdate=!0,m.jointRadius=g.radius),m.visible=g!==null}const h=d.joints["index-finger-tip"],f=d.joints["thumb-tip"],u=h.position.distanceTo(f.position),p=.02,x=.005;d.inputState.pinching&&u>p+x?(d.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!d.inputState.pinching&&u<=p-x&&(d.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(r=t.getPose(e.gripSpace,n),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1,l.eventsEnabled&&l.dispatchEvent({type:"gripUpdated",data:e,target:this})));o!==null&&(s=t.getPose(e.targetRaySpace,n),s===null&&r!==null&&(s=r),s!==null&&(o.matrix.fromArray(s.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,s.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(s.linearVelocity)):o.hasLinearVelocity=!1,s.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(s.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(Lu)))}return o!==null&&(o.visible=s!==null),l!==null&&(l.visible=r!==null),d!==null&&(d.visible=a!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const n=new hi;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}}const nd={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Wn={h:0,s:0,l:0},Rs={h:0,s:0,l:0};function Or(i,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?i+(e-i)*6*t:t<1/2?e:t<2/3?i+(e-i)*6*(2/3-t):i}class Ie{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){const s=e;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Pt){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,je.colorSpaceToWorking(this,t),this}setRGB(e,t,n,s=je.workingColorSpace){return this.r=e,this.g=t,this.b=n,je.colorSpaceToWorking(this,s),this}setHSL(e,t,n,s=je.workingColorSpace){if(e=Mo(e,1),t=Ve(t,0,1),n=Ve(n,0,1),t===0)this.r=this.g=this.b=n;else{const r=n<=.5?n*(1+t):n+t-n*t,a=2*n-r;this.r=Or(a,r,e+1/3),this.g=Or(a,r,e),this.b=Or(a,r,e-1/3)}return je.colorSpaceToWorking(this,s),this}setStyle(e,t=Pt){function n(r){r!==void 0&&parseFloat(r)<1&&Me("Color: Alpha component of "+e+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(e)){let r;const a=s[1],o=s[2];switch(a){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,t);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,t);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,t);break;default:Me("Color: Unknown color model "+e)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(e)){const r=s[1],a=r.length;if(a===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,t);if(a===6)return this.setHex(parseInt(r,16),t);Me("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=Pt){const n=nd[e.toLowerCase()];return n!==void 0?this.setHex(n,t):Me("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=On(e.r),this.g=On(e.g),this.b=On(e.b),this}copyLinearToSRGB(e){return this.r=Oi(e.r),this.g=Oi(e.g),this.b=Oi(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Pt){return je.workingToColorSpace(Ut.copy(this),e),Math.round(Ve(Ut.r*255,0,255))*65536+Math.round(Ve(Ut.g*255,0,255))*256+Math.round(Ve(Ut.b*255,0,255))}getHexString(e=Pt){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=je.workingColorSpace){je.workingToColorSpace(Ut.copy(this),t);const n=Ut.r,s=Ut.g,r=Ut.b,a=Math.max(n,s,r),o=Math.min(n,s,r);let l,d;const h=(o+a)/2;if(o===a)l=0,d=0;else{const f=a-o;switch(d=h<=.5?f/(a+o):f/(2-a-o),a){case n:l=(s-r)/f+(s<r?6:0);break;case s:l=(r-n)/f+2;break;case r:l=(n-s)/f+4;break}l/=6}return e.h=l,e.s=d,e.l=h,e}getRGB(e,t=je.workingColorSpace){return je.workingToColorSpace(Ut.copy(this),t),e.r=Ut.r,e.g=Ut.g,e.b=Ut.b,e}getStyle(e=Pt){je.workingToColorSpace(Ut.copy(this),e);const t=Ut.r,n=Ut.g,s=Ut.b;return e!==Pt?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(s*255)})`}offsetHSL(e,t,n){return this.getHSL(Wn),this.setHSL(Wn.h+e,Wn.s+t,Wn.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(Wn),e.getHSL(Rs);const n=hs(Wn.h,Rs.h,t),s=hs(Wn.s,Rs.s,t),r=hs(Wn.l,Rs.l,t);return this.setHSL(n,s,r),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,n=this.g,s=this.b,r=e.elements;return this.r=r[0]*t+r[3]*n+r[6]*s,this.g=r[1]*t+r[4]*n+r[7]*s,this.b=r[2]*t+r[5]*n+r[8]*s,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Ut=new Ie;Ie.NAMES=nd;class wo{constructor(e,t=25e-5){this.isFogExp2=!0,this.name="",this.color=new Ie(e),this.density=t}clone(){return new wo(this.color,this.density)}toJSON(){return{type:"FogExp2",name:this.name,color:this.color.getHex(),density:this.density}}}class Uu extends ct{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new ei,this.environmentIntensity=1,this.environmentRotation=new ei,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}}const nn=new D,Cn=new D,kr=new D,Nn=new D,Si=new D,Mi=new D,Rl=new D,Br=new D,Gr=new D,zr=new D,Vr=new it,Hr=new it,jr=new it;class an{constructor(e=new D,t=new D,n=new D){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,s){s.subVectors(n,t),nn.subVectors(e,t),s.cross(nn);const r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(e,t,n,s,r){nn.subVectors(s,t),Cn.subVectors(n,t),kr.subVectors(e,t);const a=nn.dot(nn),o=nn.dot(Cn),l=nn.dot(kr),d=Cn.dot(Cn),h=Cn.dot(kr),f=a*d-o*o;if(f===0)return r.set(0,0,0),null;const u=1/f,p=(d*l-o*h)*u,x=(a*h-o*l)*u;return r.set(1-p-x,x,p)}static containsPoint(e,t,n,s){return this.getBarycoord(e,t,n,s,Nn)===null?!1:Nn.x>=0&&Nn.y>=0&&Nn.x+Nn.y<=1}static getInterpolation(e,t,n,s,r,a,o,l){return this.getBarycoord(e,t,n,s,Nn)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,Nn.x),l.addScaledVector(a,Nn.y),l.addScaledVector(o,Nn.z),l)}static getInterpolatedAttribute(e,t,n,s,r,a){return Vr.setScalar(0),Hr.setScalar(0),jr.setScalar(0),Vr.fromBufferAttribute(e,t),Hr.fromBufferAttribute(e,n),jr.fromBufferAttribute(e,s),a.setScalar(0),a.addScaledVector(Vr,r.x),a.addScaledVector(Hr,r.y),a.addScaledVector(jr,r.z),a}static isFrontFacing(e,t,n,s){return nn.subVectors(n,t),Cn.subVectors(e,t),nn.cross(Cn).dot(s)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,s){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[s]),this}setFromAttributeAndIndices(e,t,n,s){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,s),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return nn.subVectors(this.c,this.b),Cn.subVectors(this.a,this.b),nn.cross(Cn).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return an.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return an.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,n,s,r){return an.getInterpolation(e,this.a,this.b,this.c,t,n,s,r)}containsPoint(e){return an.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return an.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const n=this.a,s=this.b,r=this.c;let a,o;Si.subVectors(s,n),Mi.subVectors(r,n),Br.subVectors(e,n);const l=Si.dot(Br),d=Mi.dot(Br);if(l<=0&&d<=0)return t.copy(n);Gr.subVectors(e,s);const h=Si.dot(Gr),f=Mi.dot(Gr);if(h>=0&&f<=h)return t.copy(s);const u=l*f-h*d;if(u<=0&&l>=0&&h<=0)return a=l/(l-h),t.copy(n).addScaledVector(Si,a);zr.subVectors(e,r);const p=Si.dot(zr),x=Mi.dot(zr);if(x>=0&&p<=x)return t.copy(r);const v=p*d-l*x;if(v<=0&&d>=0&&x<=0)return o=d/(d-x),t.copy(n).addScaledVector(Mi,o);const g=h*x-p*f;if(g<=0&&f-h>=0&&p-x>=0)return Rl.subVectors(r,s),o=(f-h)/(f-h+(p-x)),t.copy(s).addScaledVector(Rl,o);const m=1/(g+v+u);return a=v*m,o=u*m,t.copy(n).addScaledVector(Si,a).addScaledVector(Mi,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}class wn{constructor(e=new D(1/0,1/0,1/0),t=new D(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(sn.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(sn.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const n=sn.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const n=e.geometry;if(n!==void 0){const r=n.getAttribute("position");if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0)for(let a=0,o=r.count;a<o;a++)e.isMesh===!0?e.getVertexPosition(a,sn):sn.fromBufferAttribute(r,a),sn.applyMatrix4(e.matrixWorld),this.expandByPoint(sn);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Cs.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),Cs.copy(n.boundingBox)),Cs.applyMatrix4(e.matrixWorld),this.union(Cs)}const s=e.children;for(let r=0,a=s.length;r<a;r++)this.expandByObject(s[r],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,sn),sn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Zi),Ns.subVectors(this.max,Zi),Ei.subVectors(e.a,Zi),wi.subVectors(e.b,Zi),Ti.subVectors(e.c,Zi),Xn.subVectors(wi,Ei),qn.subVectors(Ti,wi),ii.subVectors(Ei,Ti);let t=[0,-Xn.z,Xn.y,0,-qn.z,qn.y,0,-ii.z,ii.y,Xn.z,0,-Xn.x,qn.z,0,-qn.x,ii.z,0,-ii.x,-Xn.y,Xn.x,0,-qn.y,qn.x,0,-ii.y,ii.x,0];return!Wr(t,Ei,wi,Ti,Ns)||(t=[1,0,0,0,1,0,0,0,1],!Wr(t,Ei,wi,Ti,Ns))?!1:(Ps.crossVectors(Xn,qn),t=[Ps.x,Ps.y,Ps.z],Wr(t,Ei,wi,Ti,Ns))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,sn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(sn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Pn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Pn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Pn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Pn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Pn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Pn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Pn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Pn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Pn),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}}const Pn=[new D,new D,new D,new D,new D,new D,new D,new D],sn=new D,Cs=new wn,Ei=new D,wi=new D,Ti=new D,Xn=new D,qn=new D,ii=new D,Zi=new D,Ns=new D,Ps=new D,si=new D;function Wr(i,e,t,n,s){for(let r=0,a=i.length-3;r<=a;r+=3){si.fromArray(i,r);const o=s.x*Math.abs(si.x)+s.y*Math.abs(si.y)+s.z*Math.abs(si.z),l=e.dot(si),d=t.dot(si),h=n.dot(si);if(Math.max(-Math.max(l,d,h),Math.min(l,d,h))>o)return!1}return!0}const vt=new D,Is=new Ce;let Fu=0;class Ft extends ti{constructor(e,t,n=!1){if(super(),Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:Fu++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=so,this.updateRanges=[],this.gpuType=Qt,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[e+s]=t.array[n+s];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)Is.fromBufferAttribute(this,t),Is.applyMatrix3(e),this.setXY(t,Is.x,Is.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)vt.fromBufferAttribute(this,t),vt.applyMatrix3(e),this.setXYZ(t,vt.x,vt.y,vt.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)vt.fromBufferAttribute(this,t),vt.applyMatrix4(e),this.setXYZ(t,vt.x,vt.y,vt.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)vt.fromBufferAttribute(this,t),vt.applyNormalMatrix(e),this.setXYZ(t,vt.x,vt.y,vt.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)vt.fromBufferAttribute(this,t),vt.transformDirection(e),this.setXYZ(t,vt.x,vt.y,vt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=rn(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=Qe(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=rn(t,this.array)),t}setX(e,t){return this.normalized&&(t=Qe(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=rn(t,this.array)),t}setY(e,t){return this.normalized&&(t=Qe(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=rn(t,this.array)),t}setZ(e,t){return this.normalized&&(t=Qe(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=rn(t,this.array)),t}setW(e,t){return this.normalized&&(t=Qe(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=Qe(t,this.array),n=Qe(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,s){return e*=this.itemSize,this.normalized&&(t=Qe(t,this.array),n=Qe(n,this.array),s=Qe(s,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=s,this}setXYZW(e,t,n,s,r){return e*=this.itemSize,this.normalized&&(t=Qe(t,this.array),n=Qe(n,this.array),s=Qe(s,this.array),r=Qe(r,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=s,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==so&&(e.usage=this.usage),e}dispose(){this.dispatchEvent({type:"dispose"})}}class id extends Ft{constructor(e,t,n){super(new Uint16Array(e),t,n)}}class sd extends Ft{constructor(e,t,n){super(new Uint32Array(e),t,n)}}class It extends Ft{constructor(e,t,n){super(new Float32Array(e),t,n)}}const Ou=new wn,Ji=new D,Xr=new D;class Tn{constructor(e=new D,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const n=this.center;t!==void 0?n.copy(t):Ou.setFromPoints(e).getCenter(n);let s=0;for(let r=0,a=e.length;r<a;r++)s=Math.max(s,n.distanceToSquared(e[r]));return this.radius=Math.sqrt(s),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Ji.subVectors(e,this.center);const t=Ji.lengthSq();if(t>this.radius*this.radius){const n=Math.sqrt(t),s=(n-this.radius)*.5;this.center.addScaledVector(Ji,s/n),this.radius+=s}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Xr.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Ji.copy(e.center).add(Xr)),this.expandByPoint(Ji.copy(e.center).sub(Xr))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}}let ku=0;const Zt=new Ge,qr=new ct,Ai=new D,qt=new wn,Qi=new wn,Rt=new D;class Ot extends ti{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:ku++}),this.uuid=on(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(tu(e)?sd:id)(e,1):this.index=e,this}setIndirect(e,t=0){return this.indirect=e,this.indirectOffset=t,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const r=new Ue().getNormalMatrix(e);n.applyNormalMatrix(r),n.needsUpdate=!0}const s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(e),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(e){return Zt.makeRotationFromQuaternion(e),this.applyMatrix4(Zt),this}rotateX(e){return Zt.makeRotationX(e),this.applyMatrix4(Zt),this}rotateY(e){return Zt.makeRotationY(e),this.applyMatrix4(Zt),this}rotateZ(e){return Zt.makeRotationZ(e),this.applyMatrix4(Zt),this}translate(e,t,n){return Zt.makeTranslation(e,t,n),this.applyMatrix4(Zt),this}scale(e,t,n){return Zt.makeScale(e,t,n),this.applyMatrix4(Zt),this}lookAt(e){return qr.lookAt(e),qr.updateMatrix(),this.applyMatrix4(qr.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Ai).negate(),this.translate(Ai.x,Ai.y,Ai.z),this}setFromPoints(e){const t=this.getAttribute("position");if(t===void 0){const n=[];for(let s=0,r=e.length;s<r;s++){const a=e[s];n.push(a.x,a.y,a.z||0)}this.setAttribute("position",new It(n,3))}else{const n=Math.min(e.length,t.count);for(let s=0;s<n;s++){const r=e[s];t.setXYZ(s,r.x,r.y,r.z||0)}e.length>t.count&&Me("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new wn);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){De("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new D(-1/0,-1/0,-1/0),new D(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,s=t.length;n<s;n++){const r=t[n];qt.setFromBufferAttribute(r),this.morphTargetsRelative?(Rt.addVectors(this.boundingBox.min,qt.min),this.boundingBox.expandByPoint(Rt),Rt.addVectors(this.boundingBox.max,qt.max),this.boundingBox.expandByPoint(Rt)):(this.boundingBox.expandByPoint(qt.min),this.boundingBox.expandByPoint(qt.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&De('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Tn);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){De("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new D,1/0);return}if(e){const n=this.boundingSphere.center;if(qt.setFromBufferAttribute(e),t)for(let r=0,a=t.length;r<a;r++){const o=t[r];Qi.setFromBufferAttribute(o),this.morphTargetsRelative?(Rt.addVectors(qt.min,Qi.min),qt.expandByPoint(Rt),Rt.addVectors(qt.max,Qi.max),qt.expandByPoint(Rt)):(qt.expandByPoint(Qi.min),qt.expandByPoint(Qi.max))}qt.getCenter(n);let s=0;for(let r=0,a=e.count;r<a;r++)Rt.fromBufferAttribute(e,r),s=Math.max(s,n.distanceToSquared(Rt));if(t)for(let r=0,a=t.length;r<a;r++){const o=t[r],l=this.morphTargetsRelative;for(let d=0,h=o.count;d<h;d++)Rt.fromBufferAttribute(o,d),l&&(Ai.fromBufferAttribute(e,d),Rt.add(Ai)),s=Math.max(s,n.distanceToSquared(Rt))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&De('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){De("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=t.position,s=t.normal,r=t.uv;let a=this.getAttribute("tangent");(a===void 0||a.count!==n.count)&&(a=new Ft(new Float32Array(4*n.count),4),this.setAttribute("tangent",a));const o=[],l=[];for(let _=0;_<n.count;_++)o[_]=new D,l[_]=new D;const d=new D,h=new D,f=new D,u=new Ce,p=new Ce,x=new Ce,v=new D,g=new D;function m(_,E,N){d.fromBufferAttribute(n,_),h.fromBufferAttribute(n,E),f.fromBufferAttribute(n,N),u.fromBufferAttribute(r,_),p.fromBufferAttribute(r,E),x.fromBufferAttribute(r,N),h.sub(d),f.sub(d),p.sub(u),x.sub(u);const P=1/(p.x*x.y-x.x*p.y);isFinite(P)&&(v.copy(h).multiplyScalar(x.y).addScaledVector(f,-p.y).multiplyScalar(P),g.copy(f).multiplyScalar(p.x).addScaledVector(h,-x.x).multiplyScalar(P),o[_].add(v),o[E].add(v),o[N].add(v),l[_].add(g),l[E].add(g),l[N].add(g))}let M=this.groups;M.length===0&&(M=[{start:0,count:e.count}]);for(let _=0,E=M.length;_<E;++_){const N=M[_],P=N.start,F=N.count;for(let j=P,K=P+F;j<K;j+=3)m(e.getX(j+0),e.getX(j+1),e.getX(j+2))}const T=new D,y=new D,A=new D,w=new D;function R(_){A.fromBufferAttribute(s,_),w.copy(A);const E=o[_];T.copy(E),T.sub(A.multiplyScalar(A.dot(E))).normalize(),y.crossVectors(w,E);const P=y.dot(l[_])<0?-1:1;a.setXYZW(_,T.x,T.y,T.z,P)}for(let _=0,E=M.length;_<E;++_){const N=M[_],P=N.start,F=N.count;for(let j=P,K=P+F;j<K;j+=3)R(e.getX(j+0)),R(e.getX(j+1)),R(e.getX(j+2))}this._transformed=!0}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0||n.count!==t.count)n=new Ft(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let u=0,p=n.count;u<p;u++)n.setXYZ(u,0,0,0);const s=new D,r=new D,a=new D,o=new D,l=new D,d=new D,h=new D,f=new D;if(e)for(let u=0,p=e.count;u<p;u+=3){const x=e.getX(u+0),v=e.getX(u+1),g=e.getX(u+2);s.fromBufferAttribute(t,x),r.fromBufferAttribute(t,v),a.fromBufferAttribute(t,g),h.subVectors(a,r),f.subVectors(s,r),h.cross(f),o.fromBufferAttribute(n,x),l.fromBufferAttribute(n,v),d.fromBufferAttribute(n,g),o.add(h),l.add(h),d.add(h),n.setXYZ(x,o.x,o.y,o.z),n.setXYZ(v,l.x,l.y,l.z),n.setXYZ(g,d.x,d.y,d.z)}else for(let u=0,p=t.count;u<p;u+=3)s.fromBufferAttribute(t,u+0),r.fromBufferAttribute(t,u+1),a.fromBufferAttribute(t,u+2),h.subVectors(a,r),f.subVectors(s,r),h.cross(f),n.setXYZ(u+0,h.x,h.y,h.z),n.setXYZ(u+1,h.x,h.y,h.z),n.setXYZ(u+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)Rt.fromBufferAttribute(e,t),Rt.normalize(),e.setXYZ(t,Rt.x,Rt.y,Rt.z)}toNonIndexed(){function e(o,l){const d=o.array,h=o.itemSize,f=o.normalized,u=new d.constructor(l.length*h);let p=0,x=0;for(let v=0,g=l.length;v<g;v++){o.isInterleavedBufferAttribute?p=l[v]*o.data.stride+o.offset:p=l[v]*h;for(let m=0;m<h;m++)u[x++]=d[p++]}return new Ft(u,h,f)}if(this.index===null)return Me("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new Ot,n=this.index.array,s=this.attributes;for(const o in s){const l=s[o],d=e(l,n);t.setAttribute(o,d)}const r=this.morphAttributes;for(const o in r){const l=[],d=r[o];for(let h=0,f=d.length;h<f;h++){const u=d[h],p=e(u,n);l.push(p)}t.morphAttributes[o]=l}t.morphTargetsRelative=this.morphTargetsRelative;const a=this.groups;for(let o=0,l=a.length;o<l;o++){const d=a[o];t.addGroup(d.start,d.count,d.materialIndex)}return t}toJSON(){const e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){const l=this.parameters;for(const d in l)l[d]!==void 0&&(e[d]=l[d]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const n=this.attributes;for(const l in n){const d=n[l];e.data.attributes[l]=d.toJSON(e.data)}const s={};let r=!1;for(const l in this.morphAttributes){const d=this.morphAttributes[l],h=[];for(let f=0,u=d.length;f<u;f++){const p=d[f];h.push(p.toJSON(e.data))}h.length>0&&(s[l]=h,r=!0)}r&&(e.data.morphAttributes=s,e.data.morphTargetsRelative=this.morphTargetsRelative);const a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));const o=this.boundingSphere;return o!==null&&(e.data.boundingSphere=o.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const n=e.index;n!==null&&this.setIndex(n.clone());const s=e.attributes;for(const d in s){const h=s[d];this.setAttribute(d,h.clone(t))}const r=e.morphAttributes;for(const d in r){const h=[],f=r[d];for(let u=0,p=f.length;u<p;u++)h.push(f[u].clone(t));this.morphAttributes[d]=h}this.morphTargetsRelative=e.morphTargetsRelative;const a=e.groups;for(let d=0,h=a.length;d<h;d++){const f=a[d];this.addGroup(f.start,f.count,f.materialIndex)}const o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this._transformed=e._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Bu{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=so,this.updateRanges=[],this.version=0,this.uuid=on()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,n){e*=this.stride,n*=t.stride;for(let s=0,r=this.stride;s<r;s++)this.array[e+s]=t.array[n+s];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=on()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const t=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(t,this.stride);return n.setUsage(this.usage),n}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){return e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=on()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}}const kt=new D;class To{constructor(e,t,n,s=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=n,this.normalized=s}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,n=this.data.count;t<n;t++)kt.fromBufferAttribute(this,t),kt.applyMatrix4(e),this.setXYZ(t,kt.x,kt.y,kt.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)kt.fromBufferAttribute(this,t),kt.applyNormalMatrix(e),this.setXYZ(t,kt.x,kt.y,kt.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)kt.fromBufferAttribute(this,t),kt.transformDirection(e),this.setXYZ(t,kt.x,kt.y,kt.z);return this}getComponent(e,t){let n=this.array[e*this.data.stride+this.offset+t];return this.normalized&&(n=rn(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=Qe(n,this.array)),this.data.array[e*this.data.stride+this.offset+t]=n,this}setX(e,t){return this.normalized&&(t=Qe(t,this.array)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=Qe(t,this.array)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=Qe(t,this.array)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=Qe(t,this.array)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=rn(t,this.array)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=rn(t,this.array)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=rn(t,this.array)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=rn(t,this.array)),t}setXY(e,t,n){return e=e*this.data.stride+this.offset,this.normalized&&(t=Qe(t,this.array),n=Qe(n,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this}setXYZ(e,t,n,s){return e=e*this.data.stride+this.offset,this.normalized&&(t=Qe(t,this.array),n=Qe(n,this.array),s=Qe(s,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=s,this}setXYZW(e,t,n,s,r){return e=e*this.data.stride+this.offset,this.normalized&&(t=Qe(t,this.array),n=Qe(n,this.array),s=Qe(s,this.array),r=Qe(r,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=s,this.data.array[e+3]=r,this}clone(e){if(e===void 0){ur("InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let n=0;n<this.count;n++){const s=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[s+r])}return new Ft(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new To(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){ur("InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let n=0;n<this.count;n++){const s=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[s+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}let Gu=0;class ln extends ti{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Gu++}),this.uuid=on(),this.name="",this.type="Material",this.blending=Ui,this.side=kn,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=xa,this.blendDst=_a,this.blendEquation=li,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Ie(0,0,0),this.blendAlpha=0,this.depthFunc=Bi,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=pl,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=xi,this.stencilZFail=xi,this.stencilZPass=xi,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const n=e[t];if(n===void 0){Me(`Material: parameter '${t}' has value of undefined.`);continue}const s=this[t];if(s===void 0){Me(`Material: '${t}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(n):s&&s.isVector2&&n&&n.isVector2||s&&s.isEuler&&n&&n.isEuler||s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const n={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==Ui&&(n.blending=this.blending),this.side!==kn&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==xa&&(n.blendSrc=this.blendSrc),this.blendDst!==_a&&(n.blendDst=this.blendDst),this.blendEquation!==li&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==Bi&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==pl&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==xi&&(n.stencilFail=this.stencilFail),this.stencilZFail!==xi&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==xi&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.allowOverride===!1&&(n.allowOverride=!1),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function s(r){const a=[];for(const o in r){const l=r[o];delete l.metadata,a.push(l)}return a}if(t){const r=s(e.textures),a=s(e.images);r.length>0&&(n.textures=r),a.length>0&&(n.images=a)}return n}fromJSON(e,t){if(e.uuid!==void 0&&(this.uuid=e.uuid),e.name!==void 0&&(this.name=e.name),e.color!==void 0&&this.color!==void 0&&this.color.setHex(e.color),e.roughness!==void 0&&(this.roughness=e.roughness),e.metalness!==void 0&&(this.metalness=e.metalness),e.sheen!==void 0&&(this.sheen=e.sheen),e.sheenColor!==void 0&&(this.sheenColor=new Ie().setHex(e.sheenColor)),e.sheenRoughness!==void 0&&(this.sheenRoughness=e.sheenRoughness),e.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(e.emissive),e.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(e.specular),e.specularIntensity!==void 0&&(this.specularIntensity=e.specularIntensity),e.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(e.specularColor),e.shininess!==void 0&&(this.shininess=e.shininess),e.clearcoat!==void 0&&(this.clearcoat=e.clearcoat),e.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=e.clearcoatRoughness),e.dispersion!==void 0&&(this.dispersion=e.dispersion),e.iridescence!==void 0&&(this.iridescence=e.iridescence),e.iridescenceIOR!==void 0&&(this.iridescenceIOR=e.iridescenceIOR),e.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessRange=e.iridescenceThicknessRange),e.transmission!==void 0&&(this.transmission=e.transmission),e.thickness!==void 0&&(this.thickness=e.thickness),e.attenuationDistance!==void 0&&(this.attenuationDistance=e.attenuationDistance),e.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(e.attenuationColor),e.anisotropy!==void 0&&(this.anisotropy=e.anisotropy),e.anisotropyRotation!==void 0&&(this.anisotropyRotation=e.anisotropyRotation),e.fog!==void 0&&(this.fog=e.fog),e.flatShading!==void 0&&(this.flatShading=e.flatShading),e.blending!==void 0&&(this.blending=e.blending),e.combine!==void 0&&(this.combine=e.combine),e.side!==void 0&&(this.side=e.side),e.shadowSide!==void 0&&(this.shadowSide=e.shadowSide),e.opacity!==void 0&&(this.opacity=e.opacity),e.transparent!==void 0&&(this.transparent=e.transparent),e.alphaTest!==void 0&&(this.alphaTest=e.alphaTest),e.alphaHash!==void 0&&(this.alphaHash=e.alphaHash),e.depthFunc!==void 0&&(this.depthFunc=e.depthFunc),e.depthTest!==void 0&&(this.depthTest=e.depthTest),e.depthWrite!==void 0&&(this.depthWrite=e.depthWrite),e.colorWrite!==void 0&&(this.colorWrite=e.colorWrite),e.blendSrc!==void 0&&(this.blendSrc=e.blendSrc),e.blendDst!==void 0&&(this.blendDst=e.blendDst),e.blendEquation!==void 0&&(this.blendEquation=e.blendEquation),e.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=e.blendSrcAlpha),e.blendDstAlpha!==void 0&&(this.blendDstAlpha=e.blendDstAlpha),e.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=e.blendEquationAlpha),e.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(e.blendColor),e.blendAlpha!==void 0&&(this.blendAlpha=e.blendAlpha),e.stencilWriteMask!==void 0&&(this.stencilWriteMask=e.stencilWriteMask),e.stencilFunc!==void 0&&(this.stencilFunc=e.stencilFunc),e.stencilRef!==void 0&&(this.stencilRef=e.stencilRef),e.stencilFuncMask!==void 0&&(this.stencilFuncMask=e.stencilFuncMask),e.stencilFail!==void 0&&(this.stencilFail=e.stencilFail),e.stencilZFail!==void 0&&(this.stencilZFail=e.stencilZFail),e.stencilZPass!==void 0&&(this.stencilZPass=e.stencilZPass),e.stencilWrite!==void 0&&(this.stencilWrite=e.stencilWrite),e.wireframe!==void 0&&(this.wireframe=e.wireframe),e.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=e.wireframeLinewidth),e.wireframeLinecap!==void 0&&(this.wireframeLinecap=e.wireframeLinecap),e.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=e.wireframeLinejoin),e.rotation!==void 0&&(this.rotation=e.rotation),e.linewidth!==void 0&&(this.linewidth=e.linewidth),e.dashSize!==void 0&&(this.dashSize=e.dashSize),e.gapSize!==void 0&&(this.gapSize=e.gapSize),e.scale!==void 0&&(this.scale=e.scale),e.polygonOffset!==void 0&&(this.polygonOffset=e.polygonOffset),e.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=e.polygonOffsetFactor),e.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=e.polygonOffsetUnits),e.dithering!==void 0&&(this.dithering=e.dithering),e.alphaToCoverage!==void 0&&(this.alphaToCoverage=e.alphaToCoverage),e.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=e.premultipliedAlpha),e.forceSinglePass!==void 0&&(this.forceSinglePass=e.forceSinglePass),e.allowOverride!==void 0&&(this.allowOverride=e.allowOverride),e.visible!==void 0&&(this.visible=e.visible),e.toneMapped!==void 0&&(this.toneMapped=e.toneMapped),e.userData!==void 0&&(this.userData=e.userData),e.vertexColors!==void 0&&(typeof e.vertexColors=="number"?this.vertexColors=e.vertexColors>0:this.vertexColors=e.vertexColors),e.size!==void 0&&(this.size=e.size),e.sizeAttenuation!==void 0&&(this.sizeAttenuation=e.sizeAttenuation),e.map!==void 0&&(this.map=t[e.map]||null),e.matcap!==void 0&&(this.matcap=t[e.matcap]||null),e.alphaMap!==void 0&&(this.alphaMap=t[e.alphaMap]||null),e.bumpMap!==void 0&&(this.bumpMap=t[e.bumpMap]||null),e.bumpScale!==void 0&&(this.bumpScale=e.bumpScale),e.normalMap!==void 0&&(this.normalMap=t[e.normalMap]||null),e.normalMapType!==void 0&&(this.normalMapType=e.normalMapType),e.normalScale!==void 0){let n=e.normalScale;Array.isArray(n)===!1&&(n=[n,n]),this.normalScale=new Ce().fromArray(n)}return e.displacementMap!==void 0&&(this.displacementMap=t[e.displacementMap]||null),e.displacementScale!==void 0&&(this.displacementScale=e.displacementScale),e.displacementBias!==void 0&&(this.displacementBias=e.displacementBias),e.roughnessMap!==void 0&&(this.roughnessMap=t[e.roughnessMap]||null),e.metalnessMap!==void 0&&(this.metalnessMap=t[e.metalnessMap]||null),e.emissiveMap!==void 0&&(this.emissiveMap=t[e.emissiveMap]||null),e.emissiveIntensity!==void 0&&(this.emissiveIntensity=e.emissiveIntensity),e.specularMap!==void 0&&(this.specularMap=t[e.specularMap]||null),e.specularIntensityMap!==void 0&&(this.specularIntensityMap=t[e.specularIntensityMap]||null),e.specularColorMap!==void 0&&(this.specularColorMap=t[e.specularColorMap]||null),e.envMap!==void 0&&(this.envMap=t[e.envMap]||null),e.envMapRotation!==void 0&&this.envMapRotation.fromArray(e.envMapRotation),e.envMapIntensity!==void 0&&(this.envMapIntensity=e.envMapIntensity),e.reflectivity!==void 0&&(this.reflectivity=e.reflectivity),e.refractionRatio!==void 0&&(this.refractionRatio=e.refractionRatio),e.lightMap!==void 0&&(this.lightMap=t[e.lightMap]||null),e.lightMapIntensity!==void 0&&(this.lightMapIntensity=e.lightMapIntensity),e.aoMap!==void 0&&(this.aoMap=t[e.aoMap]||null),e.aoMapIntensity!==void 0&&(this.aoMapIntensity=e.aoMapIntensity),e.gradientMap!==void 0&&(this.gradientMap=t[e.gradientMap]||null),e.clearcoatMap!==void 0&&(this.clearcoatMap=t[e.clearcoatMap]||null),e.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=t[e.clearcoatRoughnessMap]||null),e.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=t[e.clearcoatNormalMap]||null),e.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new Ce().fromArray(e.clearcoatNormalScale)),e.iridescenceMap!==void 0&&(this.iridescenceMap=t[e.iridescenceMap]||null),e.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=t[e.iridescenceThicknessMap]||null),e.transmissionMap!==void 0&&(this.transmissionMap=t[e.transmissionMap]||null),e.thicknessMap!==void 0&&(this.thicknessMap=t[e.thicknessMap]||null),e.anisotropyMap!==void 0&&(this.anisotropyMap=t[e.anisotropyMap]||null),e.sheenColorMap!==void 0&&(this.sheenColorMap=t[e.sheenColorMap]||null),e.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=t[e.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let n=null;if(t!==null){const s=t.length;n=new Array(s);for(let r=0;r!==s;++r)n[r]=t[r].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}const In=new D,Yr=new D,Ds=new D,Yn=new D,Kr=new D,Ls=new D,$r=new D;class Ss{constructor(e=new D,t=new D(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,In)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=In.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(In.copy(this.origin).addScaledVector(this.direction,t),In.distanceToSquared(e))}distanceSqToSegment(e,t,n,s){Yr.copy(e).add(t).multiplyScalar(.5),Ds.copy(t).sub(e).normalize(),Yn.copy(this.origin).sub(Yr);const r=e.distanceTo(t)*.5,a=-this.direction.dot(Ds),o=Yn.dot(this.direction),l=-Yn.dot(Ds),d=Yn.lengthSq(),h=Math.abs(1-a*a);let f,u,p,x;if(h>0)if(f=a*l-o,u=a*o-l,x=r*h,f>=0)if(u>=-x)if(u<=x){const v=1/h;f*=v,u*=v,p=f*(f+a*u+2*o)+u*(a*f+u+2*l)+d}else u=r,f=Math.max(0,-(a*u+o)),p=-f*f+u*(u+2*l)+d;else u=-r,f=Math.max(0,-(a*u+o)),p=-f*f+u*(u+2*l)+d;else u<=-x?(f=Math.max(0,-(-a*r+o)),u=f>0?-r:Math.min(Math.max(-r,-l),r),p=-f*f+u*(u+2*l)+d):u<=x?(f=0,u=Math.min(Math.max(-r,-l),r),p=u*(u+2*l)+d):(f=Math.max(0,-(a*r+o)),u=f>0?r:Math.min(Math.max(-r,-l),r),p=-f*f+u*(u+2*l)+d);else u=a>0?-r:r,f=Math.max(0,-(a*u+o)),p=-f*f+u*(u+2*l)+d;return n&&n.copy(this.origin).addScaledVector(this.direction,f),s&&s.copy(Yr).addScaledVector(Ds,u),p}intersectSphere(e,t){In.subVectors(e.center,this.origin);const n=In.dot(this.direction),s=In.dot(In)-n*n,r=e.radius*e.radius;if(s>r)return null;const a=Math.sqrt(r-s),o=n-a,l=n+a;return l<0?null:o<0?this.at(l,t):this.at(o,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){const n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,s,r,a,o,l;const d=1/this.direction.x,h=1/this.direction.y,f=1/this.direction.z,u=this.origin;return d>=0?(n=(e.min.x-u.x)*d,s=(e.max.x-u.x)*d):(n=(e.max.x-u.x)*d,s=(e.min.x-u.x)*d),h>=0?(r=(e.min.y-u.y)*h,a=(e.max.y-u.y)*h):(r=(e.max.y-u.y)*h,a=(e.min.y-u.y)*h),n>a||r>s||((r>n||isNaN(n))&&(n=r),(a<s||isNaN(s))&&(s=a),f>=0?(o=(e.min.z-u.z)*f,l=(e.max.z-u.z)*f):(o=(e.max.z-u.z)*f,l=(e.min.z-u.z)*f),n>l||o>s)||((o>n||n!==n)&&(n=o),(l<s||s!==s)&&(s=l),s<0)?null:this.at(n>=0?n:s,t)}intersectsBox(e){return this.intersectBox(e,In)!==null}intersectTriangle(e,t,n,s,r){Kr.subVectors(t,e),Ls.subVectors(n,e),$r.crossVectors(Kr,Ls);let a=this.direction.dot($r),o;if(a>0){if(s)return null;o=1}else if(a<0)o=-1,a=-a;else return null;Yn.subVectors(this.origin,e);const l=o*this.direction.dot(Ls.crossVectors(Yn,Ls));if(l<0)return null;const d=o*this.direction.dot(Kr.cross(Yn));if(d<0||l+d>a)return null;const h=-o*Yn.dot($r);return h<0?null:this.at(h/a,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class ui extends ln{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Ie(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new ei,this.combine=Uc,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const Cl=new Ge,ri=new Ss,Us=new Tn,Nl=new D,Fs=new D,Os=new D,ks=new D,Zr=new D,Bs=new D,Pl=new D,Gs=new D;class jt extends ct{constructor(e=new Ot,t=new ui){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){const o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}getVertexPosition(e,t){const n=this.geometry,s=n.attributes.position,r=n.morphAttributes.position,a=n.morphTargetsRelative;t.fromBufferAttribute(s,e);const o=this.morphTargetInfluences;if(r&&o){Bs.set(0,0,0);for(let l=0,d=r.length;l<d;l++){const h=o[l],f=r[l];h!==0&&(Zr.fromBufferAttribute(f,e),a?Bs.addScaledVector(Zr,h):Bs.addScaledVector(Zr.sub(t),h))}t.add(Bs)}return t}raycast(e,t){const n=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),Us.copy(n.boundingSphere),Us.applyMatrix4(r),ri.copy(e.ray).recast(e.near),!(Us.containsPoint(ri.origin)===!1&&(ri.intersectSphere(Us,Nl)===null||ri.origin.distanceToSquared(Nl)>(e.far-e.near)**2))&&(Cl.copy(r).invert(),ri.copy(e.ray).applyMatrix4(Cl),!(n.boundingBox!==null&&ri.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,ri)))}_computeIntersections(e,t,n){let s;const r=this.geometry,a=this.material,o=r.index,l=r.attributes.position,d=r.attributes.uv,h=r.attributes.uv1,f=r.attributes.normal,u=r.groups,p=r.drawRange;if(o!==null)if(Array.isArray(a))for(let x=0,v=u.length;x<v;x++){const g=u[x],m=a[g.materialIndex],M=Math.max(g.start,p.start),T=Math.min(o.count,Math.min(g.start+g.count,p.start+p.count));for(let y=M,A=T;y<A;y+=3){const w=o.getX(y),R=o.getX(y+1),_=o.getX(y+2);s=zs(this,m,e,n,d,h,f,w,R,_),s&&(s.faceIndex=Math.floor(y/3),s.face.materialIndex=g.materialIndex,t.push(s))}}else{const x=Math.max(0,p.start),v=Math.min(o.count,p.start+p.count);for(let g=x,m=v;g<m;g+=3){const M=o.getX(g),T=o.getX(g+1),y=o.getX(g+2);s=zs(this,a,e,n,d,h,f,M,T,y),s&&(s.faceIndex=Math.floor(g/3),t.push(s))}}else if(l!==void 0)if(Array.isArray(a))for(let x=0,v=u.length;x<v;x++){const g=u[x],m=a[g.materialIndex],M=Math.max(g.start,p.start),T=Math.min(l.count,Math.min(g.start+g.count,p.start+p.count));for(let y=M,A=T;y<A;y+=3){const w=y,R=y+1,_=y+2;s=zs(this,m,e,n,d,h,f,w,R,_),s&&(s.faceIndex=Math.floor(y/3),s.face.materialIndex=g.materialIndex,t.push(s))}}else{const x=Math.max(0,p.start),v=Math.min(l.count,p.start+p.count);for(let g=x,m=v;g<m;g+=3){const M=g,T=g+1,y=g+2;s=zs(this,a,e,n,d,h,f,M,T,y),s&&(s.faceIndex=Math.floor(g/3),t.push(s))}}}}function zu(i,e,t,n,s,r,a,o){let l;if(e.side===Ht?l=n.intersectTriangle(a,r,s,!0,o):l=n.intersectTriangle(s,r,a,e.side===kn,o),l===null)return null;Gs.copy(o),Gs.applyMatrix4(i.matrixWorld);const d=t.ray.origin.distanceTo(Gs);return d<t.near||d>t.far?null:{distance:d,point:Gs.clone(),object:i}}function zs(i,e,t,n,s,r,a,o,l,d){i.getVertexPosition(o,Fs),i.getVertexPosition(l,Os),i.getVertexPosition(d,ks);const h=zu(i,e,t,n,Fs,Os,ks,Pl);if(h){const f=new D;an.getBarycoord(Pl,Fs,Os,ks,f),s&&(h.uv=an.getInterpolatedAttribute(s,o,l,d,f,new Ce)),r&&(h.uv1=an.getInterpolatedAttribute(r,o,l,d,f,new Ce)),a&&(h.normal=an.getInterpolatedAttribute(a,o,l,d,f,new D),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));const u={a:o,b:l,c:d,normal:new D,materialIndex:0};an.getNormal(Fs,Os,ks,u.normal),h.face=u,h.barycoord=f}return h}const es=new it,Il=new it,Dl=new it,Vu=new it,Ll=new Ge,Vs=new D,Jr=new Tn,Ul=new Ge,Qr=new Ss;class Hu extends jt{constructor(e,t){super(e,t),this.isSkinnedMesh=!0,this.type="SkinnedMesh",this.bindMode=cl,this.bindMatrix=new Ge,this.bindMatrixInverse=new Ge,this.boundingBox=null,this.boundingSphere=null}computeBoundingBox(){const e=this.geometry;this.boundingBox===null&&(this.boundingBox=new wn),this.boundingBox.makeEmpty();const t=e.getAttribute("position");for(let n=0;n<t.count;n++)this.getVertexPosition(n,Vs),this.boundingBox.expandByPoint(Vs)}computeBoundingSphere(){const e=this.geometry;this.boundingSphere===null&&(this.boundingSphere=new Tn),this.boundingSphere.makeEmpty();const t=e.getAttribute("position");for(let n=0;n<t.count;n++)this.getVertexPosition(n,Vs),this.boundingSphere.expandByPoint(Vs)}copy(e,t){return super.copy(e,t),this.bindMode=e.bindMode,this.bindMatrix.copy(e.bindMatrix),this.bindMatrixInverse.copy(e.bindMatrixInverse),this.skeleton=e.skeleton,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}raycast(e,t){const n=this.material,s=this.matrixWorld;n!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Jr.copy(this.boundingSphere),Jr.applyMatrix4(s),e.ray.intersectsSphere(Jr)!==!1&&(Ul.copy(s).invert(),Qr.copy(e.ray).applyMatrix4(Ul),!(this.boundingBox!==null&&Qr.intersectsBox(this.boundingBox)===!1)&&this._computeIntersections(e,t,Qr)))}getVertexPosition(e,t){return super.getVertexPosition(e,t),this.applyBoneTransform(e,t),t}bind(e,t){this.skeleton=e,t===void 0&&(this.updateMatrixWorld(!0),this.skeleton.calculateInverses(),t=this.matrixWorld),this.bindMatrix.copy(t),this.bindMatrixInverse.copy(t).invert()}pose(){this.skeleton.pose()}normalizeSkinWeights(){const e=new it,t=this.geometry.attributes.skinWeight;for(let n=0,s=t.count;n<s;n++){e.fromBufferAttribute(t,n);const r=1/e.manhattanLength();r!==1/0?e.multiplyScalar(r):e.set(1,0,0,0),t.setXYZW(n,e.x,e.y,e.z,e.w)}}updateMatrixWorld(e){super.updateMatrixWorld(e),this.bindMode===cl?this.bindMatrixInverse.copy(this.matrixWorld).invert():this.bindMode===jh?this.bindMatrixInverse.copy(this.bindMatrix).invert():Me("SkinnedMesh: Unrecognized bindMode: "+this.bindMode)}applyBoneTransform(e,t){const n=this.skeleton,s=this.geometry;Il.fromBufferAttribute(s.attributes.skinIndex,e),Dl.fromBufferAttribute(s.attributes.skinWeight,e),t.isVector4?(es.copy(t),t.set(0,0,0,0)):(es.set(...t,1),t.set(0,0,0)),es.applyMatrix4(this.bindMatrix);for(let r=0;r<4;r++){const a=Dl.getComponent(r);if(a!==0){const o=Il.getComponent(r);Ll.multiplyMatrices(n.bones[o].matrixWorld,n.boneInverses[o]),t.addScaledVector(Vu.copy(es).applyMatrix4(Ll),a)}}return t.isVector4&&(t.w=es.w),t.applyMatrix4(this.bindMatrixInverse)}}class rd extends ct{constructor(){super(),this.isBone=!0,this.type="Bone"}}class Ao extends Ct{constructor(e=null,t=1,n=1,s,r,a,o,l,d=Mt,h=Mt,f,u){super(null,a,o,l,d,h,s,r,f,u),this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const Fl=new Ge,ju=new Ge;class Ro{constructor(e=[],t=[]){this.uuid=on(),this.bones=e.slice(0),this.boneInverses=t,this.boneMatrices=null,this.boneTexture=null,this.init()}init(){const e=this.bones,t=this.boneInverses;if(this.boneMatrices=new Float32Array(e.length*16),t.length===0)this.calculateInverses();else if(e.length!==t.length){Me("Skeleton: Number of inverse bone matrices does not match amount of bones."),this.boneInverses=[];for(let n=0,s=this.bones.length;n<s;n++)this.boneInverses.push(new Ge)}}calculateInverses(){this.boneInverses.length=0;for(let e=0,t=this.bones.length;e<t;e++){const n=new Ge;this.bones[e]&&n.copy(this.bones[e].matrixWorld).invert(),this.boneInverses.push(n)}}pose(){for(let e=0,t=this.bones.length;e<t;e++){const n=this.bones[e];n&&n.matrixWorld.copy(this.boneInverses[e]).invert()}for(let e=0,t=this.bones.length;e<t;e++){const n=this.bones[e];n&&(n.parent&&n.parent.isBone?(n.matrix.copy(n.parent.matrixWorld).invert(),n.matrix.multiply(n.matrixWorld)):n.matrix.copy(n.matrixWorld),n.matrix.decompose(n.position,n.quaternion,n.scale))}}update(){const e=this.bones,t=this.boneInverses,n=this.boneMatrices,s=this.boneTexture;for(let r=0,a=e.length;r<a;r++){const o=e[r]?e[r].matrixWorld:ju;Fl.multiplyMatrices(o,t[r]),Fl.toArray(n,r*16)}s!==null&&(s.needsUpdate=!0)}clone(){return new Ro(this.bones,this.boneInverses)}computeBoneTexture(){let e=Math.sqrt(this.bones.length*4);e=Math.ceil(e/4)*4,e=Math.max(e,4);const t=new Float32Array(e*e*4);t.set(this.boneMatrices);const n=new Ao(t,e,e,en,Qt);return n.needsUpdate=!0,this.boneMatrices=t,this.boneTexture=n,this}getBoneByName(e){for(let t=0,n=this.bones.length;t<n;t++){const s=this.bones[t];if(s.name===e)return s}}dispose(){this.boneTexture!==null&&(this.boneTexture.dispose(),this.boneTexture=null)}fromJSON(e,t){this.uuid=e.uuid;for(let n=0,s=e.bones.length;n<s;n++){const r=e.bones[n];let a=t[r];a===void 0&&(Me("Skeleton: No bone found with UUID:",r),a=new rd),this.bones.push(a),this.boneInverses.push(new Ge().fromArray(e.boneInverses[n]))}return this.init(),this}toJSON(){const e={metadata:{version:4.7,type:"Skeleton",generator:"Skeleton.toJSON"},bones:[],boneInverses:[]};e.uuid=this.uuid;const t=this.bones,n=this.boneInverses;for(let s=0,r=t.length;s<r;s++){const a=t[s];e.bones.push(a.uuid);const o=n[s];e.boneInverses.push(o.toArray())}return e}}class ro extends Ft{constructor(e,t,n,s=1){super(e,t,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=s}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){const e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}}const Ri=new Ge,Ol=new Ge,Hs=[],kl=new wn,Wu=new Ge,ts=new jt,ns=new Tn;class Xu extends jt{constructor(e,t,n){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new ro(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let s=0;s<n;s++)this.setMatrixAt(s,Wu)}computeBoundingBox(){const e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new wn),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,Ri),kl.copy(e.boundingBox).applyMatrix4(Ri),this.boundingBox.union(kl)}computeBoundingSphere(){const e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new Tn),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,Ri),ns.copy(e.boundingSphere).applyMatrix4(Ri),this.boundingSphere.union(ns)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),e.morphTexture!==null&&(this.morphTexture=e.morphTexture.clone()),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}getColorAt(e,t){return this.instanceColor===null?t.setRGB(1,1,1):t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){return t.fromArray(this.instanceMatrix.array,e*16)}getMorphAt(e,t){const n=t.morphTargetInfluences,s=this.morphTexture.source.data.data,r=n.length+1,a=e*r+1;for(let o=0;o<n.length;o++)n[o]=s[a+o]}raycast(e,t){const n=this.matrixWorld,s=this.count;if(ts.geometry=this.geometry,ts.material=this.material,ts.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),ns.copy(this.boundingSphere),ns.applyMatrix4(n),e.ray.intersectsSphere(ns)!==!1))for(let r=0;r<s;r++){this.getMatrixAt(r,Ri),Ol.multiplyMatrices(n,Ri),ts.matrixWorld=Ol,ts.raycast(e,Hs);for(let a=0,o=Hs.length;a<o;a++){const l=Hs[a];l.instanceId=r,l.object=this,t.push(l)}Hs.length=0}}setColorAt(e,t){return this.instanceColor===null&&(this.instanceColor=new ro(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),t.toArray(this.instanceColor.array,e*3),this}setMatrixAt(e,t){return t.toArray(this.instanceMatrix.array,e*16),this}setMorphAt(e,t){const n=t.morphTargetInfluences,s=n.length+1;this.morphTexture===null&&(this.morphTexture=new Ao(new Float32Array(s*this.count),s,this.count,xo,Qt));const r=this.morphTexture.source.data.data;let a=0;for(let d=0;d<n.length;d++)a+=n[d];const o=this.geometry.morphTargetsRelative?1:1-a,l=s*e;return r[l]=o,r.set(n,l+1),this}updateMorphTargets(){}dispose(){this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}}const ea=new D,qu=new D,Yu=new Ue;class Zn{constructor(e=new D(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,s){return this.normal.set(e,t,n),this.constant=s,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){const s=ea.subVectors(n,t).cross(qu.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(s,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t,n=!0){const s=e.delta(ea),r=this.normal.dot(s);if(r===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const a=-(e.start.dot(this.normal)+this.constant)/r;return n===!0&&(a<0||a>1)?null:t.copy(e.start).addScaledVector(s,a)}intersectsLine(e){const t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const n=t||Yu.getNormalMatrix(e),s=this.coplanarPoint(ea).applyMatrix4(e),r=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const ai=new Tn,Ku=new Ce(.5,.5),js=new D;class Co{constructor(e=new Zn,t=new Zn,n=new Zn,s=new Zn,r=new Zn,a=new Zn){this.planes=[e,t,n,s,r,a]}set(e,t,n,s,r,a){const o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(n),o[3].copy(s),o[4].copy(r),o[5].copy(a),this}copy(e){const t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=vn,n=!1){const s=this.planes,r=e.elements,a=r[0],o=r[1],l=r[2],d=r[3],h=r[4],f=r[5],u=r[6],p=r[7],x=r[8],v=r[9],g=r[10],m=r[11],M=r[12],T=r[13],y=r[14],A=r[15];if(s[0].setComponents(d-a,p-h,m-x,A-M).normalize(),s[1].setComponents(d+a,p+h,m+x,A+M).normalize(),s[2].setComponents(d+o,p+f,m+v,A+T).normalize(),s[3].setComponents(d-o,p-f,m-v,A-T).normalize(),n)s[4].setComponents(l,u,g,y).normalize(),s[5].setComponents(d-l,p-u,m-g,A-y).normalize();else if(s[4].setComponents(d-l,p-u,m-g,A-y).normalize(),t===vn)s[5].setComponents(d+l,p+u,m+g,A+y).normalize();else if(t===xs)s[5].setComponents(l,u,g,y).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),ai.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),ai.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(ai)}intersectsSprite(e){ai.center.set(0,0,0);const t=Ku.distanceTo(e.center);return ai.radius=.7071067811865476+t,ai.applyMatrix4(e.matrixWorld),this.intersectsSphere(ai)}intersectsSphere(e){const t=this.planes,n=e.center,s=-e.radius;for(let r=0;r<6;r++)if(t[r].distanceToPoint(n)<s)return!1;return!0}intersectsBox(e){const t=this.planes;for(let n=0;n<6;n++){const s=t[n];if(js.x=s.normal.x>0?e.max.x:e.min.x,js.y=s.normal.y>0?e.max.y:e.min.y,js.z=s.normal.z>0?e.max.z:e.min.z,s.distanceToPoint(js)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class _r extends ln{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new Ie(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const fr=new D,pr=new D,Bl=new Ge,is=new Ss,Ws=new Tn,ta=new D,Gl=new D;class No extends ct{constructor(e=new Ot,t=new _r){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,n=[0];for(let s=1,r=t.count;s<r;s++)fr.fromBufferAttribute(t,s-1),pr.fromBufferAttribute(t,s),n[s]=n[s-1],n[s]+=fr.distanceTo(pr);e.setAttribute("lineDistance",new It(n,1))}else Me("Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){const n=this.geometry,s=this.matrixWorld,r=e.params.Line.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Ws.copy(n.boundingSphere),Ws.applyMatrix4(s),Ws.radius+=r,e.ray.intersectsSphere(Ws)===!1)return;Bl.copy(s).invert(),is.copy(e.ray).applyMatrix4(Bl);const o=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,d=this.isLineSegments?2:1,h=n.index,u=n.attributes.position;if(h!==null){const p=Math.max(0,a.start),x=Math.min(h.count,a.start+a.count);for(let v=p,g=x-1;v<g;v+=d){const m=h.getX(v),M=h.getX(v+1),T=Xs(this,e,is,l,m,M,v);T&&t.push(T)}if(this.isLineLoop){const v=h.getX(x-1),g=h.getX(p),m=Xs(this,e,is,l,v,g,x-1);m&&t.push(m)}}else{const p=Math.max(0,a.start),x=Math.min(u.count,a.start+a.count);for(let v=p,g=x-1;v<g;v+=d){const m=Xs(this,e,is,l,v,v+1,v);m&&t.push(m)}if(this.isLineLoop){const v=Xs(this,e,is,l,x-1,p,x-1);v&&t.push(v)}}}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){const o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}}function Xs(i,e,t,n,s,r,a){const o=i.geometry.attributes.position;if(fr.fromBufferAttribute(o,s),pr.fromBufferAttribute(o,r),t.distanceSqToSegment(fr,pr,ta,Gl)>n)return;ta.applyMatrix4(i.matrixWorld);const d=e.ray.origin.distanceTo(ta);if(!(d<e.near||d>e.far))return{distance:d,point:Gl.clone().applyMatrix4(i.matrixWorld),index:a,face:null,faceIndex:null,barycoord:null,object:i}}const zl=new D,Vl=new D;class Po extends No{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,n=[];for(let s=0,r=t.count;s<r;s+=2)zl.fromBufferAttribute(t,s),Vl.fromBufferAttribute(t,s+1),n[s]=s===0?0:n[s-1],n[s+1]=n[s]+zl.distanceTo(Vl);e.setAttribute("lineDistance",new It(n,1))}else Me("LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class $u extends No{constructor(e,t){super(e,t),this.isLineLoop=!0,this.type="LineLoop"}}class Io extends ln{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new Ie(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const Hl=new Ge,ao=new Ss,qs=new Tn,Ys=new D;class ad extends ct{constructor(e=new Ot,t=new Io){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,t){const n=this.geometry,s=this.matrixWorld,r=e.params.Points.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),qs.copy(n.boundingSphere),qs.applyMatrix4(s),qs.radius+=r,e.ray.intersectsSphere(qs)===!1)return;Hl.copy(s).invert(),ao.copy(e.ray).applyMatrix4(Hl);const o=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,d=n.index,f=n.attributes.position;if(d!==null){const u=Math.max(0,a.start),p=Math.min(d.count,a.start+a.count);for(let x=u,v=p;x<v;x++){const g=d.getX(x);Ys.fromBufferAttribute(f,g),jl(Ys,g,l,s,e,t,this)}}else{const u=Math.max(0,a.start),p=Math.min(f.count,a.start+a.count);for(let x=u,v=p;x<v;x++)Ys.fromBufferAttribute(f,x),jl(Ys,x,l,s,e,t,this)}}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){const o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}}function jl(i,e,t,n,s,r,a){const o=ao.distanceSqToPoint(i);if(o<t){const l=new D;ao.closestPointToPoint(i,l),l.applyMatrix4(n);const d=s.ray.origin.distanceTo(l);if(d<s.near||d>s.far)return;r.push({distance:d,distanceToRay:Math.sqrt(o),point:l,index:e,face:null,faceIndex:null,barycoord:null,object:a})}}class od extends Ct{constructor(e=[],t=fi,n,s,r,a,o,l,d,h){super(e,t,n,s,r,a,o,l,d,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class Hi extends Ct{constructor(e,t,n=Mn,s,r,a,o=Mt,l=Mt,d,h=Gn,f=1){if(h!==Gn&&h!==di)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const u={width:e,height:t,depth:f};super(u,s,r,a,o,l,h,n,d),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new Eo(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}class Zu extends Hi{constructor(e,t=Mn,n=fi,s,r,a=Mt,o=Mt,l,d=Gn){const h={width:e,height:e,depth:1},f=[h,h,h,h,h,h];super(e,e,t,n,s,r,a,o,l,d),this.image=f,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}}class ld extends Ct{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}}class Ms extends Ot{constructor(e=1,t=1,n=1,s=1,r=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:s,heightSegments:r,depthSegments:a};const o=this;s=Math.floor(s),r=Math.floor(r),a=Math.floor(a);const l=[],d=[],h=[],f=[];let u=0,p=0;x("z","y","x",-1,-1,n,t,e,a,r,0),x("z","y","x",1,-1,n,t,-e,a,r,1),x("x","z","y",1,1,e,n,t,s,a,2),x("x","z","y",1,-1,e,n,-t,s,a,3),x("x","y","z",1,-1,e,t,n,s,r,4),x("x","y","z",-1,-1,e,t,-n,s,r,5),this.setIndex(l),this.setAttribute("position",new It(d,3)),this.setAttribute("normal",new It(h,3)),this.setAttribute("uv",new It(f,2));function x(v,g,m,M,T,y,A,w,R,_,E){const N=y/R,P=A/_,F=y/2,j=A/2,K=w/2,k=R+1,X=_+1;let W=0,Q=0;const V=new D;for(let ee=0;ee<X;ee++){const se=ee*P-j;for(let ge=0;ge<k;ge++){const Xe=ge*N-F;V[v]=Xe*M,V[g]=se*T,V[m]=K,d.push(V.x,V.y,V.z),V[v]=0,V[g]=0,V[m]=w>0?1:-1,h.push(V.x,V.y,V.z),f.push(ge/R),f.push(1-ee/_),W+=1}}for(let ee=0;ee<_;ee++)for(let se=0;se<R;se++){const ge=u+se+k*ee,Xe=u+se+k*(ee+1),dt=u+(se+1)+k*(ee+1),Ke=u+(se+1)+k*ee;l.push(ge,Xe,Ke),l.push(Xe,dt,Ke),Q+=6}o.addGroup(p,Q,E),p+=Q,u+=W}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Ms(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}class Do extends Ot{constructor(e=[],t=[],n=1,s=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:e,indices:t,radius:n,detail:s};const r=[],a=[];o(s),d(n),h(),this.setAttribute("position",new It(r,3)),this.setAttribute("normal",new It(r.slice(),3)),this.setAttribute("uv",new It(a,2)),s===0?this.computeVertexNormals():this.normalizeNormals();function o(M){const T=new D,y=new D,A=new D;for(let w=0;w<t.length;w+=3)p(t[w+0],T),p(t[w+1],y),p(t[w+2],A),l(T,y,A,M)}function l(M,T,y,A){const w=A+1,R=[];for(let _=0;_<=w;_++){R[_]=[];const E=M.clone().lerp(y,_/w),N=T.clone().lerp(y,_/w),P=w-_;for(let F=0;F<=P;F++)F===0&&_===w?R[_][F]=E:R[_][F]=E.clone().lerp(N,F/P)}for(let _=0;_<w;_++)for(let E=0;E<2*(w-_)-1;E++){const N=Math.floor(E/2);E%2===0?(u(R[_][N+1]),u(R[_+1][N]),u(R[_][N])):(u(R[_][N+1]),u(R[_+1][N+1]),u(R[_+1][N]))}}function d(M){const T=new D;for(let y=0;y<r.length;y+=3)T.x=r[y+0],T.y=r[y+1],T.z=r[y+2],T.normalize().multiplyScalar(M),r[y+0]=T.x,r[y+1]=T.y,r[y+2]=T.z}function h(){const M=new D;for(let T=0;T<r.length;T+=3){M.x=r[T+0],M.y=r[T+1],M.z=r[T+2];const y=g(M)/2/Math.PI+.5,A=m(M)/Math.PI+.5;a.push(y,1-A)}x(),f()}function f(){for(let M=0;M<a.length;M+=6){const T=a[M+0],y=a[M+2],A=a[M+4],w=Math.max(T,y,A),R=Math.min(T,y,A);w>.9&&R<.1&&(T<.2&&(a[M+0]+=1),y<.2&&(a[M+2]+=1),A<.2&&(a[M+4]+=1))}}function u(M){r.push(M.x,M.y,M.z)}function p(M,T){const y=M*3;T.x=e[y+0],T.y=e[y+1],T.z=e[y+2]}function x(){const M=new D,T=new D,y=new D,A=new D,w=new Ce,R=new Ce,_=new Ce;for(let E=0,N=0;E<r.length;E+=9,N+=6){M.set(r[E+0],r[E+1],r[E+2]),T.set(r[E+3],r[E+4],r[E+5]),y.set(r[E+6],r[E+7],r[E+8]),w.set(a[N+0],a[N+1]),R.set(a[N+2],a[N+3]),_.set(a[N+4],a[N+5]),A.copy(M).add(T).add(y).divideScalar(3);const P=g(A);v(w,N+0,M,P),v(R,N+2,T,P),v(_,N+4,y,P)}}function v(M,T,y,A){A<0&&M.x===1&&(a[T]=M.x-1),y.x===0&&y.z===0&&(a[T]=A/2/Math.PI+.5)}function g(M){return Math.atan2(M.z,-M.x)}function m(M){return Math.atan2(-M.y,Math.sqrt(M.x*M.x+M.z*M.z))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Do(e.vertices,e.indices,e.radius,e.detail)}}class Lo extends Do{constructor(e=1,t=0){const n=(1+Math.sqrt(5))/2,s=[-1,n,0,1,n,0,-1,-n,0,1,-n,0,0,-1,n,0,1,n,0,-1,-n,0,1,-n,n,0,-1,n,0,1,-n,0,-1,-n,0,1],r=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(s,r,e,t),this.type="IcosahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new Lo(e.radius,e.detail)}}class br extends Ot{constructor(e=1,t=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:s};const r=e/2,a=t/2,o=Math.floor(n),l=Math.floor(s),d=o+1,h=l+1,f=e/o,u=t/l,p=[],x=[],v=[],g=[];for(let m=0;m<h;m++){const M=m*u-a;for(let T=0;T<d;T++){const y=T*f-r;x.push(y,-M,0),v.push(0,0,1),g.push(T/o),g.push(1-m/l)}}for(let m=0;m<l;m++)for(let M=0;M<o;M++){const T=M+d*m,y=M+d*(m+1),A=M+1+d*(m+1),w=M+1+d*m;p.push(T,y,w),p.push(y,A,w)}this.setIndex(p),this.setAttribute("position",new It(x,3)),this.setAttribute("normal",new It(v,3)),this.setAttribute("uv",new It(g,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new br(e.width,e.height,e.widthSegments,e.heightSegments)}}class Ju extends Ot{constructor(e=null){if(super(),this.type="WireframeGeometry",this.parameters={geometry:e},e!==null){const t=[],n=new Set,s=new D,r=new D;if(e.index!==null){const a=e.attributes.position,o=e.index;let l=e.groups;l.length===0&&(l=[{start:0,count:o.count,materialIndex:0}]);for(let d=0,h=l.length;d<h;++d){const f=l[d],u=f.start,p=f.count;for(let x=u,v=u+p;x<v;x+=3)for(let g=0;g<3;g++){const m=o.getX(x+g),M=o.getX(x+(g+1)%3);s.fromBufferAttribute(a,m),r.fromBufferAttribute(a,M),Wl(s,r,n)===!0&&(t.push(s.x,s.y,s.z),t.push(r.x,r.y,r.z))}}}else{const a=e.attributes.position;for(let o=0,l=a.count/3;o<l;o++)for(let d=0;d<3;d++){const h=3*o+d,f=3*o+(d+1)%3;s.fromBufferAttribute(a,h),r.fromBufferAttribute(a,f),Wl(s,r,n)===!0&&(t.push(s.x,s.y,s.z),t.push(r.x,r.y,r.z))}}this.setAttribute("position",new It(t,3))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}}function Wl(i,e,t){const n=`${i.x},${i.y},${i.z}-${e.x},${e.y},${e.z}`,s=`${e.x},${e.y},${e.z}-${i.x},${i.y},${i.z}`;return t.has(n)===!0||t.has(s)===!0?!1:(t.add(n),t.add(s),!0)}function ji(i){const e={};for(const t in i){e[t]={};for(const n in i[t]){const s=i[t][n];if(Xl(s))s.isRenderTargetTexture?(Me("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=s.clone();else if(Array.isArray(s))if(Xl(s[0])){const r=[];for(let a=0,o=s.length;a<o;a++)r[a]=s[a].clone();e[t][n]=r}else e[t][n]=s.slice();else e[t][n]=s}}return e}function Bt(i){const e={};for(let t=0;t<i.length;t++){const n=ji(i[t]);for(const s in n)e[s]=n[s]}return e}function Xl(i){return i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)}function Qu(i){const e=[];for(let t=0;t<i.length;t++)e.push(i[t].clone());return e}function cd(i){const e=i.getRenderTarget();return e===null?i.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:je.workingColorSpace}const ef={clone:ji,merge:Bt};var tf=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,nf=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class En extends ln{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=tf,this.fragmentShader=nf,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=ji(e.uniforms),this.uniformsGroups=Qu(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const s in this.uniforms){const a=this.uniforms[s].value;a&&a.isTexture?t.uniforms[s]={type:"t",value:a.toJSON(e).uuid}:a&&a.isColor?t.uniforms[s]={type:"c",value:a.getHex()}:a&&a.isVector2?t.uniforms[s]={type:"v2",value:a.toArray()}:a&&a.isVector3?t.uniforms[s]={type:"v3",value:a.toArray()}:a&&a.isVector4?t.uniforms[s]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?t.uniforms[s]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?t.uniforms[s]={type:"m4",value:a.toArray()}:t.uniforms[s]={value:a}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const n={};for(const s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}fromJSON(e,t){if(super.fromJSON(e,t),e.uniforms!==void 0)for(const n in e.uniforms){const s=e.uniforms[n];switch(this.uniforms[n]={},s.type){case"t":this.uniforms[n].value=t[s.value]||null;break;case"c":this.uniforms[n].value=new Ie().setHex(s.value);break;case"v2":this.uniforms[n].value=new Ce().fromArray(s.value);break;case"v3":this.uniforms[n].value=new D().fromArray(s.value);break;case"v4":this.uniforms[n].value=new it().fromArray(s.value);break;case"m3":this.uniforms[n].value=new Ue().fromArray(s.value);break;case"m4":this.uniforms[n].value=new Ge().fromArray(s.value);break;default:this.uniforms[n].value=s.value}}if(e.defines!==void 0&&(this.defines=e.defines),e.vertexShader!==void 0&&(this.vertexShader=e.vertexShader),e.fragmentShader!==void 0&&(this.fragmentShader=e.fragmentShader),e.glslVersion!==void 0&&(this.glslVersion=e.glslVersion),e.extensions!==void 0)for(const n in e.extensions)this.extensions[n]=e.extensions[n];return e.lights!==void 0&&(this.lights=e.lights),e.clipping!==void 0&&(this.clipping=e.clipping),this}}class sf extends En{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class Uo extends ln{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new Ie(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Ie(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=io,this.normalScale=new Ce(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new ei,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class An extends Uo{constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new Ce(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return Ve(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(t){this.ior=(1+.4*t)/(1-.4*t)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new Ie(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new Ie(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new Ie(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._dispersion=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(e)}get anisotropy(){return this._anisotropy}set anisotropy(e){this._anisotropy>0!=e>0&&this.version++,this._anisotropy=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get dispersion(){return this._dispersion}set dispersion(e){this._dispersion>0!=e>0&&this.version++,this._dispersion=e}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=e.anisotropy,this.anisotropyRotation=e.anisotropyRotation,this.anisotropyMap=e.anisotropyMap,this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.dispersion=e.dispersion,this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessRange=[...e.iridescenceThicknessRange],this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}}class rf extends ln{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=qh,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class af extends ln{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}function Ks(i,e){return!i||i.constructor===e?i:typeof e.BYTES_PER_ELEMENT=="number"?new e(i):Array.prototype.slice.call(i)}function of(i){function e(s,r){return i[s]-i[r]}const t=i.length,n=new Array(t);for(let s=0;s!==t;++s)n[s]=s;return n.sort(e),n}function ql(i,e,t){const n=i.length,s=new i.constructor(n);for(let r=0,a=0;a!==n;++r){const o=t[r]*e;for(let l=0;l!==e;++l)s[a++]=i[o+l]}return s}function lf(i,e,t,n){let s=1,r=i[0];for(;r!==void 0&&r[n]===void 0;)r=i[s++];if(r===void 0)return;let a=r[n];if(a!==void 0)if(Array.isArray(a))do a=r[n],a!==void 0&&(e.push(r.time),t.push(...a)),r=i[s++];while(r!==void 0);else if(a.toArray!==void 0)do a=r[n],a!==void 0&&(e.push(r.time),a.toArray(t,t.length)),r=i[s++];while(r!==void 0);else do a=r[n],a!==void 0&&(e.push(r.time),t.push(a)),r=i[s++];while(r!==void 0)}class Wi{constructor(e,t,n,s){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=s!==void 0?s:new t.constructor(n),this.sampleValues=t,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(e){const t=this.parameterPositions;let n=this._cachedIndex,s=t[n],r=t[n-1];n:{e:{let a;t:{i:if(!(e<s)){for(let o=n+2;;){if(s===void 0){if(e<r)break i;return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===o)break;if(r=s,s=t[++n],e<s)break e}a=t.length;break t}if(!(e>=r)){const o=t[1];e<o&&(n=2,r=o);for(let l=n-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===l)break;if(s=r,r=t[--n-1],e>=r)break e}a=n,n=0;break t}break n}for(;n<a;){const o=n+a>>>1;e<t[o]?a=o:n=o+1}if(s=t[n],r=t[n-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(s===void 0)return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,r,s)}return this.interpolate_(n,r,e,s)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){const t=this.resultBuffer,n=this.sampleValues,s=this.valueSize,r=e*s;for(let a=0;a!==s;++a)t[a]=n[r+a];return t}interpolate_(){throw new Error("THREE.Interpolant: Call to abstract method.")}intervalChanged_(){}}class cf extends Wi{constructor(e,t,n,s){super(e,t,n,s),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:hl,endingEnd:hl}}intervalChanged_(e,t,n){const s=this.parameterPositions;let r=e-2,a=e+1,o=s[r],l=s[a];if(o===void 0)switch(this.getSettings_().endingStart){case ul:r=e,o=2*t-n;break;case fl:r=s.length-2,o=t+s[r]-s[r+1];break;default:r=e,o=n}if(l===void 0)switch(this.getSettings_().endingEnd){case ul:a=e,l=2*n-t;break;case fl:a=1,l=n+s[1]-s[0];break;default:a=e-1,l=t}const d=(n-t)*.5,h=this.valueSize;this._weightPrev=d/(t-o),this._weightNext=d/(l-n),this._offsetPrev=r*h,this._offsetNext=a*h}interpolate_(e,t,n,s){const r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=e*o,d=l-o,h=this._offsetPrev,f=this._offsetNext,u=this._weightPrev,p=this._weightNext,x=(n-t)/(s-t),v=x*x,g=v*x,m=-u*g+2*u*v-u*x,M=(1+u)*g+(-1.5-2*u)*v+(-.5+u)*x+1,T=(-1-p)*g+(1.5+p)*v+.5*x,y=p*g-p*v;for(let A=0;A!==o;++A)r[A]=m*a[h+A]+M*a[d+A]+T*a[l+A]+y*a[f+A];return r}}class df extends Wi{constructor(e,t,n,s){super(e,t,n,s)}interpolate_(e,t,n,s){const r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=e*o,d=l-o,h=(n-t)/(s-t),f=1-h;for(let u=0;u!==o;++u)r[u]=a[d+u]*f+a[l+u]*h;return r}}class hf extends Wi{constructor(e,t,n,s){super(e,t,n,s)}interpolate_(e){return this.copySampleValue_(e-1)}}class uf extends Wi{interpolate_(e,t,n,s){const r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=e*o,d=l-o,h=this.inTangents,f=this.outTangents;if(!h||!f){const x=(n-t)/(s-t),v=1-x;for(let g=0;g!==o;++g)r[g]=a[d+g]*v+a[l+g]*x;return r}const u=o*2,p=e-1;for(let x=0;x!==o;++x){const v=a[d+x],g=a[l+x],m=p*u+x*2,M=f[m],T=f[m+1],y=e*u+x*2,A=h[y],w=h[y+1];let R=(n-t)/(s-t),_,E,N,P,F;for(let j=0;j<8;j++){_=R*R,E=_*R,N=1-R,P=N*N,F=P*N;const k=F*t+3*P*R*M+3*N*_*A+E*s-n;if(Math.abs(k)<1e-10)break;const X=3*P*(M-t)+6*N*R*(A-M)+3*_*(s-A);if(Math.abs(X)<1e-10)break;R=R-k/X,R=Math.max(0,Math.min(1,R))}r[x]=F*v+3*P*R*T+3*N*_*w+E*g}return r}}class dn{constructor(e,t,n,s){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=Ks(t,this.TimeBufferType),this.values=Ks(n,this.ValueBufferType),this.setInterpolation(s||this.DefaultInterpolation)}static toJSON(e){const t=e.constructor;let n;if(t.toJSON!==this.toJSON)n=t.toJSON(e);else{n={name:e.name,times:Ks(e.times,Array),values:Ks(e.values,Array)};const s=e.getInterpolation();s!==e.DefaultInterpolation&&(n.interpolation=s)}return n.type=e.ValueTypeName,n}InterpolantFactoryMethodDiscrete(e){return new hf(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new df(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new cf(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodBezier(e){const t=new uf(this.times,this.values,this.getValueSize(),e);return this.settings&&(t.inTangents=this.settings.inTangents,t.outTangents=this.settings.outTangents),t}setInterpolation(e){let t;switch(e){case ms:t=this.InterpolantFactoryMethodDiscrete;break;case gs:t=this.InterpolantFactoryMethodLinear;break;case Nr:t=this.InterpolantFactoryMethodSmooth;break;case dl:t=this.InterpolantFactoryMethodBezier;break}if(t===void 0){const n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return Me("KeyframeTrack:",n),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return ms;case this.InterpolantFactoryMethodLinear:return gs;case this.InterpolantFactoryMethodSmooth:return Nr;case this.InterpolantFactoryMethodBezier:return dl}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){const t=this.times;for(let n=0,s=t.length;n!==s;++n)t[n]+=e}return this}scale(e){if(e!==1){const t=this.times;for(let n=0,s=t.length;n!==s;++n)t[n]*=e}return this}trim(e,t){const n=this.times,s=n.length;let r=0,a=s-1;for(;r!==s&&n[r]<e;)++r;for(;a!==-1&&n[a]>t;)--a;if(++a,r!==0||a!==s){r>=a&&(a=Math.max(a,1),r=a-1);const o=this.getValueSize();this.times=n.slice(r,a),this.values=this.values.slice(r*o,a*o)}return this}validate(){let e=!0;const t=this.getValueSize();t-Math.floor(t)!==0&&(De("KeyframeTrack: Invalid value size in track.",this),e=!1);const n=this.times,s=this.values,r=n.length;r===0&&(De("KeyframeTrack: Track is empty.",this),e=!1);let a=null;for(let o=0;o!==r;o++){const l=n[o];if(typeof l=="number"&&isNaN(l)){De("KeyframeTrack: Time is not a valid number.",this,o,l),e=!1;break}if(a!==null&&a>l){De("KeyframeTrack: Out of order keys.",this,o,l,a),e=!1;break}a=l}if(s!==void 0&&nu(s))for(let o=0,l=s.length;o!==l;++o){const d=s[o];if(isNaN(d)){De("KeyframeTrack: Value is not a valid number.",this,o,d),e=!1;break}}return e}optimize(){const e=this.times.slice(),t=this.values.slice(),n=this.getValueSize(),s=this.getInterpolation()===Nr,r=e.length-1;let a=1;for(let o=1;o<r;++o){let l=!1;const d=e[o],h=e[o+1];if(d!==h&&(o!==1||d!==e[0]))if(s)l=!0;else{const f=o*n,u=f-n,p=f+n;for(let x=0;x!==n;++x){const v=t[f+x];if(v!==t[u+x]||v!==t[p+x]){l=!0;break}}}if(l){if(o!==a){e[a]=e[o];const f=o*n,u=a*n;for(let p=0;p!==n;++p)t[u+p]=t[f+p]}++a}}if(r>0){e[a]=e[r];for(let o=r*n,l=a*n,d=0;d!==n;++d)t[l+d]=t[o+d];++a}return a!==e.length?(this.times=e.slice(0,a),this.values=t.slice(0,a*n)):(this.times=e,this.values=t),this}clone(){const e=this.times.slice(),t=this.values.slice(),n=this.constructor,s=new n(this.name,e,t);return s.createInterpolant=this.createInterpolant,s}}dn.prototype.ValueTypeName="";dn.prototype.TimeBufferType=Float32Array;dn.prototype.ValueBufferType=Float32Array;dn.prototype.DefaultInterpolation=gs;class Xi extends dn{constructor(e,t,n){super(e,t,n)}}Xi.prototype.ValueTypeName="bool";Xi.prototype.ValueBufferType=Array;Xi.prototype.DefaultInterpolation=ms;Xi.prototype.InterpolantFactoryMethodLinear=void 0;Xi.prototype.InterpolantFactoryMethodSmooth=void 0;class dd extends dn{constructor(e,t,n,s){super(e,t,n,s)}}dd.prototype.ValueTypeName="color";class bs extends dn{constructor(e,t,n,s){super(e,t,n,s)}}bs.prototype.ValueTypeName="number";class ff extends Wi{constructor(e,t,n,s){super(e,t,n,s)}interpolate_(e,t,n,s){const r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=(n-t)/(s-t);let d=e*o;for(let h=d+o;d!==h;d+=4)cn.slerpFlat(r,0,a,d-o,a,d,l);return r}}class vs extends dn{constructor(e,t,n,s){super(e,t,n,s)}InterpolantFactoryMethodLinear(e){return new ff(this.times,this.values,this.getValueSize(),e)}}vs.prototype.ValueTypeName="quaternion";vs.prototype.InterpolantFactoryMethodSmooth=void 0;class qi extends dn{constructor(e,t,n){super(e,t,n)}}qi.prototype.ValueTypeName="string";qi.prototype.ValueBufferType=Array;qi.prototype.DefaultInterpolation=ms;qi.prototype.InterpolantFactoryMethodLinear=void 0;qi.prototype.InterpolantFactoryMethodSmooth=void 0;class mr extends dn{constructor(e,t,n,s){super(e,t,n,s)}}mr.prototype.ValueTypeName="vector";class pf{constructor(e="",t=-1,n=[],s=Wh){this.name=e,this.tracks=n,this.duration=t,this.blendMode=s,this.uuid=on(),this.userData={},this.duration<0&&this.resetDuration()}static parse(e){const t=[],n=e.tracks,s=1/(e.fps||1);for(let a=0,o=n.length;a!==o;++a)t.push(gf(n[a]).scale(s));const r=new this(e.name,e.duration,t,e.blendMode);return r.uuid=e.uuid,r.userData=JSON.parse(e.userData||"{}"),r}static toJSON(e){const t=[],n=e.tracks,s={name:e.name,duration:e.duration,tracks:t,uuid:e.uuid,blendMode:e.blendMode,userData:JSON.stringify(e.userData)};for(let r=0,a=n.length;r!==a;++r)t.push(dn.toJSON(n[r]));return s}static CreateFromMorphTargetSequence(e,t,n,s){const r=t.length,a=[];for(let o=0;o<r;o++){let l=[],d=[];l.push((o+r-1)%r,o,(o+1)%r),d.push(0,1,0);const h=of(l);l=ql(l,1,h),d=ql(d,1,h),!s&&l[0]===0&&(l.push(r),d.push(d[0])),a.push(new bs(".morphTargetInfluences["+t[o].name+"]",l,d).scale(1/n))}return new this(e,-1,a)}static findByName(e,t){let n=e;if(!Array.isArray(e)){const s=e;n=s.geometry&&s.geometry.animations||s.animations}for(let s=0;s<n.length;s++)if(n[s].name===t)return n[s];return null}static CreateClipsFromMorphTargetSequences(e,t,n){const s={},r=/^([\w-]*?)([\d]+)$/;for(let o=0,l=e.length;o<l;o++){const d=e[o],h=d.name.match(r);if(h&&h.length>1){const f=h[1];let u=s[f];u||(s[f]=u=[]),u.push(d)}}const a=[];for(const o in s)a.push(this.CreateFromMorphTargetSequence(o,s[o],t,n));return a}resetDuration(){const e=this.tracks;let t=0;for(let n=0,s=e.length;n!==s;++n){const r=this.tracks[n];t=Math.max(t,r.times[r.times.length-1])}return this.duration=t,this}trim(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].trim(0,this.duration);return this}validate(){let e=!0;for(let t=0;t<this.tracks.length;t++)e=e&&this.tracks[t].validate();return e}optimize(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].optimize();return this}clone(){const e=[];for(let n=0;n<this.tracks.length;n++)e.push(this.tracks[n].clone());const t=new this.constructor(this.name,this.duration,e,this.blendMode);return t.userData=JSON.parse(JSON.stringify(this.userData)),t}toJSON(){return this.constructor.toJSON(this)}}function mf(i){switch(i.toLowerCase()){case"scalar":case"double":case"float":case"number":case"integer":return bs;case"vector":case"vector2":case"vector3":case"vector4":return mr;case"color":return dd;case"quaternion":return vs;case"bool":case"boolean":return Xi;case"string":return qi}throw new Error("THREE.KeyframeTrack: Unsupported typeName: "+i)}function gf(i){if(i.type===void 0)throw new Error("THREE.KeyframeTrack: track type undefined, can not parse");const e=mf(i.type);if(i.times===void 0){const t=[],n=[];lf(i.keys,t,n,"value"),i.times=t,i.values=n}return e.parse!==void 0?e.parse(i):new e(i.name,i.times,i.values,i.interpolation)}const Un={enabled:!1,files:{},add:function(i,e){this.enabled!==!1&&(Yl(i)||(this.files[i]=e))},get:function(i){if(this.enabled!==!1&&!Yl(i))return this.files[i]},remove:function(i){delete this.files[i]},clear:function(){this.files={}}};function Yl(i){try{const e=i.slice(i.indexOf(":")+1);return new URL(e).protocol==="blob:"}catch{return!1}}class xf{constructor(e,t,n){const s=this;let r=!1,a=0,o=0,l;const d=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this._abortController=null,this.itemStart=function(h){o++,r===!1&&s.onStart!==void 0&&s.onStart(h,a,o),r=!0},this.itemEnd=function(h){a++,s.onProgress!==void 0&&s.onProgress(h,a,o),a===o&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(h){s.onError!==void 0&&s.onError(h)},this.resolveURL=function(h){return h=h.normalize("NFC"),l?l(h):h},this.setURLModifier=function(h){return l=h,this},this.addHandler=function(h,f){return d.push(h,f),this},this.removeHandler=function(h){const f=d.indexOf(h);return f!==-1&&d.splice(f,2),this},this.getHandler=function(h){for(let f=0,u=d.length;f<u;f+=2){const p=d[f],x=d[f+1];if(p.global&&(p.lastIndex=0),p.test(h))return x}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||(this._abortController=new AbortController),this._abortController}}const _f=new xf;class Yi{constructor(e){this.manager=e!==void 0?e:_f,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}load(){}loadAsync(e,t){const n=this;return new Promise(function(s,r){n.load(e,s,t,r)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}abort(){return this}}Yi.DEFAULT_MATERIAL_NAME="__DEFAULT";const Dn={};class bf extends Error{constructor(e,t){super(e),this.response=t}}class hd extends Yi{constructor(e){super(e),this.mimeType="",this.responseType="",this._abortController=new AbortController}load(e,t,n,s){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const r=Un.get(`file:${e}`);if(r!==void 0){this.manager.itemStart(e),setTimeout(()=>{t&&t(r),this.manager.itemEnd(e)},0);return}if(Dn[e]!==void 0){Dn[e].push({onLoad:t,onProgress:n,onError:s});return}Dn[e]=[],Dn[e].push({onLoad:t,onProgress:n,onError:s});const a=new Request(e,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin",signal:typeof AbortSignal.any=="function"?AbortSignal.any([this._abortController.signal,this.manager.abortController.signal]):this._abortController.signal}),o=this.mimeType,l=this.responseType;fetch(a).then(d=>{if(d.status===200||d.status===0){if(d.status===0&&Me("FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||d.body===void 0||d.body.getReader===void 0)return d;const h=Dn[e],f=d.body.getReader(),u=d.headers.get("X-File-Size")||d.headers.get("Content-Length"),p=u?parseInt(u):0,x=p!==0;let v=0;const g=new ReadableStream({start(m){M();function M(){f.read().then(({done:T,value:y})=>{if(T)m.close();else{v+=y.byteLength;const A=new ProgressEvent("progress",{lengthComputable:x,loaded:v,total:p});for(let w=0,R=h.length;w<R;w++){const _=h[w];_.onProgress&&_.onProgress(A)}m.enqueue(y),M()}},T=>{m.error(T)})}}});return new Response(g)}else throw new bf(`fetch for "${d.url}" responded with ${d.status}: ${d.statusText}`,d)}).then(d=>{switch(l){case"arraybuffer":return d.arrayBuffer();case"blob":return d.blob();case"document":return d.text().then(h=>new DOMParser().parseFromString(h,o));case"json":return d.json();default:if(o==="")return d.text();{const f=/charset="?([^;"\s]*)"?/i.exec(o),u=f&&f[1]?f[1].toLowerCase():void 0,p=new TextDecoder(u);return d.arrayBuffer().then(x=>p.decode(x))}}}).then(d=>{Un.add(`file:${e}`,d);const h=Dn[e];delete Dn[e];for(let f=0,u=h.length;f<u;f++){const p=h[f];p.onLoad&&p.onLoad(d)}}).catch(d=>{const h=Dn[e];if(h===void 0)throw this.manager.itemError(e),d;delete Dn[e];for(let f=0,u=h.length;f<u;f++){const p=h[f];p.onError&&p.onError(d)}this.manager.itemError(e)}).finally(()=>{this.manager.itemEnd(e)}),this.manager.itemStart(e)}setResponseType(e){return this.responseType=e,this}setMimeType(e){return this.mimeType=e,this}abort(){return this._abortController.abort(),this._abortController=new AbortController,this}}const Ci=new WeakMap;class vf extends Yi{constructor(e){super(e)}load(e,t,n,s){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const r=this,a=Un.get(`image:${e}`);if(a!==void 0){if(a.complete===!0)r.manager.itemStart(e),setTimeout(function(){t&&t(a),r.manager.itemEnd(e)},0);else{let f=Ci.get(a);f===void 0&&(f=[],Ci.set(a,f)),f.push({onLoad:t,onError:s})}return a}const o=_s("img");function l(){h(),t&&t(this);const f=Ci.get(this)||[];for(let u=0;u<f.length;u++){const p=f[u];p.onLoad&&p.onLoad(this)}Ci.delete(this),r.manager.itemEnd(e)}function d(f){h(),s&&s(f),Un.remove(`image:${e}`);const u=Ci.get(this)||[];for(let p=0;p<u.length;p++){const x=u[p];x.onError&&x.onError(f)}Ci.delete(this),r.manager.itemError(e),r.manager.itemEnd(e)}function h(){o.removeEventListener("load",l,!1),o.removeEventListener("error",d,!1)}return o.addEventListener("load",l,!1),o.addEventListener("error",d,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(o.crossOrigin=this.crossOrigin),Un.add(`image:${e}`,o),r.manager.itemStart(e),o.src=e,o}}class yf extends Yi{constructor(e){super(e)}load(e,t,n,s){const r=new Ct,a=new vf(this.manager);return a.setCrossOrigin(this.crossOrigin),a.setPath(this.path),a.load(e,function(o){r.image=o,r.needsUpdate=!0,t!==void 0&&t(r)},n,s),r}}class vr extends ct{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new Ie(e),this.intensity=t}dispose(){this.dispatchEvent({type:"dispose"})}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,t}}const na=new Ge,Kl=new D,$l=new D;class Fo{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Ce(512,512),this.mapType=Yt,this.map=null,this.mapPass=null,this.matrix=new Ge,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Co,this._frameExtents=new Ce(1,1),this._viewportCount=1,this._viewports=[new it(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,n=this.matrix;Kl.setFromMatrixPosition(e.matrixWorld),t.position.copy(Kl),$l.setFromMatrixPosition(e.target.matrixWorld),t.lookAt($l),t.updateMatrixWorld(),na.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(na,t.coordinateSystem,t.reversedDepth),t.coordinateSystem===xs||t.reversedDepth?n.set(.5,0,0,.5,0,.5,0,.5,0,0,1,0,0,0,0,1):n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(na)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this.biasNode=e.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}const $s=new D,Zs=new cn,pn=new D;class ud extends ct{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Ge,this.projectionMatrix=new Ge,this.projectionMatrixInverse=new Ge,this.coordinateSystem=vn,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorld.decompose($s,Zs,pn),pn.x===1&&pn.y===1&&pn.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose($s,Zs,pn.set(1,1,1)).invert()}updateWorldMatrix(e,t,n=!1){super.updateWorldMatrix(e,t,n),this.matrixWorld.decompose($s,Zs,pn),pn.x===1&&pn.y===1&&pn.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose($s,Zs,pn.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}}const Kn=new D,Zl=new Ce,Jl=new Ce;class Gt extends ud{constructor(e=50,t=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=Vi*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(ds*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Vi*2*Math.atan(Math.tan(ds*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){Kn.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(Kn.x,Kn.y).multiplyScalar(-e/Kn.z),Kn.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Kn.x,Kn.y).multiplyScalar(-e/Kn.z)}getViewSize(e,t){return this.getViewBounds(e,Zl,Jl),t.subVectors(Jl,Zl)}setViewOffset(e,t,n,s,r,a){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(ds*.5*this.fov)/this.zoom,n=2*t,s=this.aspect*n,r=-.5*s;const a=this.view;if(this.view!==null&&this.view.enabled){const l=a.fullWidth,d=a.fullHeight;r+=a.offsetX*s/l,t-=a.offsetY*n/d,s*=a.width/l,n*=a.height/d}const o=this.filmOffset;o!==0&&(r+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,t,t-n,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}class Sf extends Fo{constructor(){super(new Gt(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1,this.aspect=1}updateMatrices(e){const t=this.camera,n=Vi*2*e.angle*this.focus,s=this.mapSize.width/this.mapSize.height*this.aspect,r=e.distance||t.far;(n!==t.fov||s!==t.aspect||r!==t.far)&&(t.fov=n,t.aspect=s,t.far=r,t.updateProjectionMatrix()),super.updateMatrices(e)}copy(e){return super.copy(e),this.focus=e.focus,this}}class Mf extends vr{constructor(e,t,n=0,s=Math.PI/3,r=0,a=2){super(e,t),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(ct.DEFAULT_UP),this.updateMatrix(),this.target=new ct,this.distance=n,this.angle=s,this.penumbra=r,this.decay=a,this.map=null,this.shadow=new Sf}get power(){return this.intensity*Math.PI}set power(e){this.intensity=e/Math.PI}dispose(){super.dispose(),this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.angle=e.angle,this.penumbra=e.penumbra,this.decay=e.decay,this.target=e.target.clone(),this.map=e.map,this.shadow=e.shadow.clone(),this}toJSON(e){const t=super.toJSON(e);return t.object.distance=this.distance,t.object.angle=this.angle,t.object.decay=this.decay,t.object.penumbra=this.penumbra,t.object.target=this.target.uuid,this.map&&this.map.isTexture&&(t.object.map=this.map.toJSON(e).uuid),t.object.shadow=this.shadow.toJSON(),t}}class Ef extends Fo{constructor(){super(new Gt(90,1,.5,500)),this.isPointLightShadow=!0}}class fd extends vr{constructor(e,t,n=0,s=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=s,this.shadow=new Ef}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){super.dispose(),this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}toJSON(e){const t=super.toJSON(e);return t.object.distance=this.distance,t.object.decay=this.decay,t.object.shadow=this.shadow.toJSON(),t}}class yr extends ud{constructor(e=-1,t=1,n=1,s=-1,r=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=s,this.near=r,this.far=a,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,s,r,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2;let r=n-e,a=n+e,o=s+t,l=s-t;if(this.view!==null&&this.view.enabled){const d=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=d*this.view.offsetX,a=r+d*this.view.width,o-=h*this.view.offsetY,l=o-h*this.view.height}this.projectionMatrix.makeOrthographic(r,a,o,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}class wf extends Fo{constructor(){super(new yr(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class oo extends vr{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(ct.DEFAULT_UP),this.updateMatrix(),this.target=new ct,this.shadow=new wf}dispose(){super.dispose(),this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}toJSON(e){const t=super.toJSON(e);return t.object.shadow=this.shadow.toJSON(),t.object.target=this.target.uuid,t}}class Tf extends vr{constructor(e,t){super(e,t),this.isAmbientLight=!0,this.type="AmbientLight"}}class us{static extractUrlBase(e){const t=e.lastIndexOf("/");return t===-1?"./":e.slice(0,t+1)}static resolveURL(e,t){return typeof e!="string"||e===""?"":(/^https?:\/\//i.test(t)&&/^\//.test(e)&&(t=t.replace(/(^https?:\/\/[^\/]+).*/i,"$1")),/^(https?:)?\/\//i.test(e)||/^data:.*,.*$/i.test(e)||/^blob:.*$/i.test(e)?e:t+e)}}const ia=new WeakMap;class Af extends Yi{constructor(e){super(e),this.isImageBitmapLoader=!0,typeof createImageBitmap>"u"&&Me("ImageBitmapLoader: createImageBitmap() not supported."),typeof fetch>"u"&&Me("ImageBitmapLoader: fetch() not supported."),this.options={premultiplyAlpha:"none"},this._abortController=new AbortController}setOptions(e){return this.options=e,this}load(e,t,n,s){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const r=this,a=Un.get(`image-bitmap:${e}`);if(a!==void 0){if(r.manager.itemStart(e),a.then){a.then(d=>{ia.has(a)===!0?(s&&s(ia.get(a)),r.manager.itemError(e),r.manager.itemEnd(e)):(t&&t(d),r.manager.itemEnd(e))});return}setTimeout(function(){t&&t(a),r.manager.itemEnd(e)},0);return}const o={};o.credentials=this.crossOrigin==="anonymous"?"same-origin":"include",o.headers=this.requestHeader,o.signal=typeof AbortSignal.any=="function"?AbortSignal.any([this._abortController.signal,this.manager.abortController.signal]):this._abortController.signal;const l=fetch(e,o).then(function(d){return d.blob()}).then(function(d){return createImageBitmap(d,Object.assign(r.options,{colorSpaceConversion:"none"}))}).then(function(d){Un.add(`image-bitmap:${e}`,d),t&&t(d),r.manager.itemEnd(e)}).catch(function(d){s&&s(d),ia.set(l,d),Un.remove(`image-bitmap:${e}`),r.manager.itemError(e),r.manager.itemEnd(e)});Un.add(`image-bitmap:${e}`,l),r.manager.itemStart(e)}abort(){return this._abortController.abort(),this._abortController=new AbortController,this}}const Ni=-90,Pi=1;class Rf extends ct{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const s=new Gt(Ni,Pi,e,t);s.layers=this.layers,this.add(s);const r=new Gt(Ni,Pi,e,t);r.layers=this.layers,this.add(r);const a=new Gt(Ni,Pi,e,t);a.layers=this.layers,this.add(a);const o=new Gt(Ni,Pi,e,t);o.layers=this.layers,this.add(o);const l=new Gt(Ni,Pi,e,t);l.layers=this.layers,this.add(l);const d=new Gt(Ni,Pi,e,t);d.layers=this.layers,this.add(d)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[n,s,r,a,o,l]=t;for(const d of t)this.remove(d);if(e===vn)n.up.set(0,1,0),n.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===xs)n.up.set(0,-1,0),n.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const d of t)this.add(d),d.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:s}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[r,a,o,l,d,h]=this.children,f=e.getRenderTarget(),u=e.getActiveCubeFace(),p=e.getActiveMipmapLevel(),x=e.xr.enabled;e.xr.enabled=!1;const v=n.texture.generateMipmaps;n.texture.generateMipmaps=!1;let g=!1;e.isWebGLRenderer===!0?g=e.state.buffers.depth.getReversed():g=e.reversedDepthBuffer,e.setRenderTarget(n,0,s),g&&e.autoClear===!1&&e.clearDepth(),e.render(t,r),e.setRenderTarget(n,1,s),g&&e.autoClear===!1&&e.clearDepth(),e.render(t,a),e.setRenderTarget(n,2,s),g&&e.autoClear===!1&&e.clearDepth(),e.render(t,o),e.setRenderTarget(n,3,s),g&&e.autoClear===!1&&e.clearDepth(),e.render(t,l),e.setRenderTarget(n,4,s),g&&e.autoClear===!1&&e.clearDepth(),e.render(t,d),n.texture.generateMipmaps=v,e.setRenderTarget(n,5,s),g&&e.autoClear===!1&&e.clearDepth(),e.render(t,h),e.setRenderTarget(f,u,p),e.xr.enabled=x,n.texture.needsPMREMUpdate=!0}}class Cf extends Gt{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}}const Oo="\\[\\]\\.:\\/",Nf=new RegExp("["+Oo+"]","g"),ko="[^"+Oo+"]",Pf="[^"+Oo.replace("\\.","")+"]",If=/((?:WC+[\/:])*)/.source.replace("WC",ko),Df=/(WCOD+)?/.source.replace("WCOD",Pf),Lf=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",ko),Uf=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",ko),Ff=new RegExp("^"+If+Df+Lf+Uf+"$"),Of=["material","materials","bones","map"];class kf{constructor(e,t,n){const s=n||et.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,s)}getValue(e,t){this.bind();const n=this._targetGroup.nCachedObjects_,s=this._bindings[n];s!==void 0&&s.getValue(e,t)}setValue(e,t){const n=this._bindings;for(let s=this._targetGroup.nCachedObjects_,r=n.length;s!==r;++s)n[s].setValue(e,t)}bind(){const e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].bind()}unbind(){const e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].unbind()}}class et{constructor(e,t,n){this.path=t,this.parsedPath=n||et.parseTrackName(t),this.node=et.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,n){return e&&e.isAnimationObjectGroup?new et.Composite(e,t,n):new et(e,t,n)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(Nf,"")}static parseTrackName(e){const t=Ff.exec(e);if(t===null)throw new Error("THREE.PropertyBinding: Cannot parse trackName: "+e);const n={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},s=n.nodeName&&n.nodeName.lastIndexOf(".");if(s!==void 0&&s!==-1){const r=n.nodeName.substring(s+1);Of.indexOf(r)!==-1&&(n.nodeName=n.nodeName.substring(0,s),n.objectName=r)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("THREE.PropertyBinding: can not parse propertyName from trackName: "+e);return n}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){const n=e.skeleton.getBoneByName(t);if(n!==void 0)return n}if(e.children){const n=function(r){for(let a=0;a<r.length;a++){const o=r[a];if(o.name===t||o.uuid===t)return o;const l=n(o.children);if(l)return l}return null},s=n(e.children);if(s)return s}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){const n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)e[t++]=n[s]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){const n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=e[t++]}_setValue_array_setNeedsUpdate(e,t){const n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){const n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node;const t=this.parsedPath,n=t.objectName,s=t.propertyName;let r=t.propertyIndex;if(e||(e=et.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){Me("PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let d=t.objectIndex;switch(n){case"materials":if(!e.material){De("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){De("PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){De("PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let h=0;h<e.length;h++)if(e[h].name===d){d=h;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){De("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){De("PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[n]===void 0){De("PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[n]}if(d!==void 0){if(e[d]===void 0){De("PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[d]}}const a=e[s];if(a===void 0){const d=t.nodeName;De("PropertyBinding: Trying to update property for track: "+d+"."+s+" but it wasn't found.",e);return}let o=this.Versioning.None;this.targetObject=e,e.isMaterial===!0?o=this.Versioning.NeedsUpdate:e.isObject3D===!0&&(o=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(r!==void 0){if(s==="morphTargetInfluences"){if(!e.geometry){De("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){De("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[r]!==void 0&&(r=e.morphTargetDictionary[r])}l=this.BindingType.ArrayElement,this.resolvedProperty=a,this.propertyIndex=r}else a.fromArray!==void 0&&a.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=a):Array.isArray(a)?(l=this.BindingType.EntireArray,this.resolvedProperty=a):this.propertyName=s;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][o]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}}et.Composite=kf;et.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};et.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};et.prototype.GetterByBindingType=[et.prototype._getValue_direct,et.prototype._getValue_array,et.prototype._getValue_arrayElement,et.prototype._getValue_toArray];et.prototype.SetterByBindingTypeAndVersioning=[[et.prototype._setValue_direct,et.prototype._setValue_direct_setNeedsUpdate,et.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[et.prototype._setValue_array,et.prototype._setValue_array_setNeedsUpdate,et.prototype._setValue_array_setMatrixWorldNeedsUpdate],[et.prototype._setValue_arrayElement,et.prototype._setValue_arrayElement_setNeedsUpdate,et.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[et.prototype._setValue_fromArray,et.prototype._setValue_fromArray_setNeedsUpdate,et.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];class Bf{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1,Me("Clock: This module has been deprecated. Please use THREE.Timer instead.")}start(){this.startTime=performance.now(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const t=performance.now();e=(t-this.oldTime)/1e3,this.oldTime=t,this.elapsedTime+=e}return e}}class Ql{constructor(e=1,t=0,n=0){this.radius=e,this.phi=t,this.theta=n}set(e,t,n){return this.radius=e,this.phi=t,this.theta=n,this}copy(e){return this.radius=e.radius,this.phi=e.phi,this.theta=e.theta,this}makeSafe(){return this.phi=Ve(this.phi,1e-6,Math.PI-1e-6),this}setFromVector3(e){return this.setFromCartesianCoords(e.x,e.y,e.z)}setFromCartesianCoords(e,t,n){return this.radius=Math.sqrt(e*e+t*t+n*n),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(e,n),this.phi=Math.acos(Ve(t/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}const jo=class jo{constructor(e,t,n,s){this.elements=[1,0,0,1],e!==void 0&&this.set(e,t,n,s)}identity(){return this.set(1,0,0,1),this}fromArray(e,t=0){for(let n=0;n<4;n++)this.elements[n]=e[n+t];return this}set(e,t,n,s){const r=this.elements;return r[0]=e,r[2]=t,r[1]=n,r[3]=s,this}};jo.prototype.isMatrix2=!0;let ec=jo;class Gf extends Po{constructor(e=10,t=10,n=4473924,s=8947848){n=new Ie(n),s=new Ie(s);const r=t/2,a=e/t,o=e/2,l=[],d=[];for(let u=0,p=0,x=-o;u<=t;u++,x+=a){l.push(-o,0,x,o,0,x),l.push(x,0,-o,x,0,o);const v=u===r?n:s;v.toArray(d,p),p+=3,v.toArray(d,p),p+=3,v.toArray(d,p),p+=3,v.toArray(d,p),p+=3}const h=new Ot;h.setAttribute("position",new It(l,3)),h.setAttribute("color",new It(d,3));const f=new _r({vertexColors:!0,toneMapped:!1});super(h,f),this.type="GridHelper"}dispose(){this.geometry.dispose(),this.material.dispose()}}class zf extends ti{constructor(e,t=null){super(),this.object=e,this.domElement=t,this.enabled=!0,this.state=-1,this.keys={},this.mouseButtons={LEFT:null,MIDDLE:null,RIGHT:null},this.touches={ONE:null,TWO:null}}connect(e){if(e===void 0){Me("Controls: connect() now requires an element.");return}this.domElement!==null&&this.disconnect(),this.domElement=e}disconnect(){}dispose(){}update(){}}function tc(i,e,t,n){const s=Vf(n);switch(t){case Kc:return i*e;case xo:return i*e/s.components*s.byteLength;case _o:return i*e/s.components*s.byteLength;case pi:return i*e*2/s.components*s.byteLength;case bo:return i*e*2/s.components*s.byteLength;case $c:return i*e*3/s.components*s.byteLength;case en:return i*e*4/s.components*s.byteLength;case vo:return i*e*4/s.components*s.byteLength;case ir:case sr:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case rr:case ar:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case Aa:case Ca:return Math.max(i,16)*Math.max(e,8)/4;case Ta:case Ra:return Math.max(i,8)*Math.max(e,8)/2;case Na:case Pa:case Da:case La:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case Ia:case cr:case Ua:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case Fa:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case Oa:return Math.floor((i+4)/5)*Math.floor((e+3)/4)*16;case ka:return Math.floor((i+4)/5)*Math.floor((e+4)/5)*16;case Ba:return Math.floor((i+5)/6)*Math.floor((e+4)/5)*16;case Ga:return Math.floor((i+5)/6)*Math.floor((e+5)/6)*16;case za:return Math.floor((i+7)/8)*Math.floor((e+4)/5)*16;case Va:return Math.floor((i+7)/8)*Math.floor((e+5)/6)*16;case Ha:return Math.floor((i+7)/8)*Math.floor((e+7)/8)*16;case ja:return Math.floor((i+9)/10)*Math.floor((e+4)/5)*16;case Wa:return Math.floor((i+9)/10)*Math.floor((e+5)/6)*16;case Xa:return Math.floor((i+9)/10)*Math.floor((e+7)/8)*16;case qa:return Math.floor((i+9)/10)*Math.floor((e+9)/10)*16;case Ya:return Math.floor((i+11)/12)*Math.floor((e+9)/10)*16;case Ka:return Math.floor((i+11)/12)*Math.floor((e+11)/12)*16;case $a:case Za:case Ja:return Math.ceil(i/4)*Math.ceil(e/4)*16;case Qa:case eo:return Math.ceil(i/4)*Math.ceil(e/4)*8;case dr:case to:return Math.ceil(i/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function Vf(i){switch(i){case Yt:case Wc:return{byteLength:1,components:1};case fs:case Xc:case Bn:return{byteLength:2,components:1};case mo:case go:return{byteLength:2,components:4};case Mn:case po:case Qt:return{byteLength:4,components:1};case qc:case Yc:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${i}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:fo}}));typeof window<"u"&&(window.__THREE__?Me("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=fo);/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function pd(){let i=null,e=!1,t=null,n=null;function s(r,a){t(r,a),n=i.requestAnimationFrame(s)}return{start:function(){e!==!0&&t!==null&&i!==null&&(n=i.requestAnimationFrame(s),e=!0)},stop:function(){i!==null&&i.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(r){t=r},setContext:function(r){i=r}}}function Hf(i){const e=new WeakMap;function t(o,l){const d=o.array,h=o.usage,f=d.byteLength,u=i.createBuffer();i.bindBuffer(l,u),i.bufferData(l,d,h),o.onUploadCallback();let p;if(d instanceof Float32Array)p=i.FLOAT;else if(typeof Float16Array<"u"&&d instanceof Float16Array)p=i.HALF_FLOAT;else if(d instanceof Uint16Array)o.isFloat16BufferAttribute?p=i.HALF_FLOAT:p=i.UNSIGNED_SHORT;else if(d instanceof Int16Array)p=i.SHORT;else if(d instanceof Uint32Array)p=i.UNSIGNED_INT;else if(d instanceof Int32Array)p=i.INT;else if(d instanceof Int8Array)p=i.BYTE;else if(d instanceof Uint8Array)p=i.UNSIGNED_BYTE;else if(d instanceof Uint8ClampedArray)p=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+d);return{buffer:u,type:p,bytesPerElement:d.BYTES_PER_ELEMENT,version:o.version,size:f}}function n(o,l,d){const h=l.array,f=l.updateRanges;if(i.bindBuffer(d,o),f.length===0)i.bufferSubData(d,0,h);else{f.sort((p,x)=>p.start-x.start);let u=0;for(let p=1;p<f.length;p++){const x=f[u],v=f[p];v.start<=x.start+x.count+1?x.count=Math.max(x.count,v.start+v.count-x.start):(++u,f[u]=v)}f.length=u+1;for(let p=0,x=f.length;p<x;p++){const v=f[p];i.bufferSubData(d,v.start*h.BYTES_PER_ELEMENT,h,v.start,v.count)}l.clearUpdateRanges()}l.onUploadCallback()}function s(o){return o.isInterleavedBufferAttribute&&(o=o.data),e.get(o)}function r(o){o.isInterleavedBufferAttribute&&(o=o.data);const l=e.get(o);l&&(i.deleteBuffer(l.buffer),e.delete(o))}function a(o,l){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){const h=e.get(o);(!h||h.version<o.version)&&e.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}const d=e.get(o);if(d===void 0)e.set(o,t(o,l));else if(d.version<o.version){if(d.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(d.buffer,o,l),d.version=o.version}}return{get:s,remove:r,update:a}}var jf=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Wf=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,Xf=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,qf=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Yf=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Kf=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,$f=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,Zf=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Jf=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec4 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 );
	}
#endif`,Qf=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,ep=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,tp=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,np=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,ip=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,sp=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,rp=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,ap=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,op=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,lp=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,cp=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,dp=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,hp=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,up=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec4( 1.0 );
#endif
#ifdef USE_COLOR_ALPHA
	vColor *= color;
#elif defined( USE_COLOR )
	vColor.rgb *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.rgb *= instanceColor.rgb;
#endif
#ifdef USE_BATCHING_COLOR
	vColor *= getBatchingColor( getIndirectIndex( gl_DrawID ) );
#endif`,fp=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
#define inverseTransformDirection transformDirectionByInverseViewMatrix
vec3 transformNormalByInverseViewMatrix( in vec3 normal, in mat4 viewMatrix ) {
	return normalize( ( vec4( normal, 0.0 ) * viewMatrix ).xyz );
}
vec3 transformDirectionByInverseViewMatrix( in vec3 dir, in mat4 viewMatrix ) {
	return normalize( ( vec4( dir, 0.0 ) * viewMatrix ).xyz );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,pp=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,mp=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
#endif`,gp=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,xp=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,_p=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,bp=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,vp="gl_FragColor = linearToOutputTexel( gl_FragColor );",yp=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Sp=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * reflectVec );
		#ifdef ENVMAP_BLENDING_MULTIPLY
			outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_MIX )
			outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_ADD )
			outgoingLight += envColor.xyz * specularStrength * reflectivity;
		#endif
	#endif
#endif`,Mp=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,Ep=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,wp=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Tp=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,Ap=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Rp=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Cp=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Np=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Pp=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,Ip=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Dp=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Lp=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Up=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif
#include <lightprobes_pars_fragment>`,Fp=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, pow4( roughness ) ) );
			reflectVec = transformDirectionByInverseViewMatrix( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,Op=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,kp=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Bp=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Gp=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,zp=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.diffuseContribution = diffuseColor.rgb * ( 1.0 - metalnessFactor );
material.metalness = metalnessFactor;
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor;
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = vec3( 0.04 );
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.0001, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,Vp=`uniform sampler2D dfgLUT;
struct PhysicalMaterial {
	vec3 diffuseColor;
	vec3 diffuseContribution;
	vec3 specularColor;
	vec3 specularColorBlended;
	float roughness;
	float metalness;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
		vec3 iridescenceFresnelDielectric;
		vec3 iridescenceFresnelMetallic;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		return 0.5 / max( gv + gl, EPSILON );
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColorBlended;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transpose( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float rInv = 1.0 / ( roughness + 0.1 );
	float a = -1.9362 + 1.0678 * roughness + 0.4573 * r2 - 0.8469 * rInv;
	float b = -0.6014 + 0.5538 * roughness - 0.4670 * r2 - 0.1255 * rInv;
	float DG = exp( a * dotNV + b );
	return saturate( DG );
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
vec3 BRDF_GGX_Multiscatter( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 singleScatter = BRDF_GGX( lightDir, viewDir, normal, material );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 dfgV = texture2D( dfgLUT, vec2( material.roughness, dotNV ) ).rg;
	vec2 dfgL = texture2D( dfgLUT, vec2( material.roughness, dotNL ) ).rg;
	vec3 FssEss_V = material.specularColorBlended * dfgV.x + material.specularF90 * dfgV.y;
	vec3 FssEss_L = material.specularColorBlended * dfgL.x + material.specularF90 * dfgL.y;
	float Ess_V = dfgV.x + dfgV.y;
	float Ess_L = dfgL.x + dfgL.y;
	float Ems_V = 1.0 - Ess_V;
	float Ems_L = 1.0 - Ess_L;
	vec3 Favg = material.specularColorBlended + ( 1.0 - material.specularColorBlended ) * 0.047619;
	vec3 Fms = FssEss_V * FssEss_L * Favg / ( 1.0 - Ems_V * Ems_L * Favg + EPSILON );
	float compensationFactor = Ems_V * Ems_L;
	vec3 multiScatter = Fms * compensationFactor;
	return singleScatter + multiScatter;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColorBlended * t2.x + ( material.specularF90 - material.specularColorBlended ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseContribution * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
		#ifdef USE_CLEARCOAT
			vec3 Ncc = geometryClearcoatNormal;
			vec2 uvClearcoat = LTC_Uv( Ncc, viewDir, material.clearcoatRoughness );
			vec4 t1Clearcoat = texture2D( ltc_1, uvClearcoat );
			vec4 t2Clearcoat = texture2D( ltc_2, uvClearcoat );
			mat3 mInvClearcoat = mat3(
				vec3( t1Clearcoat.x, 0, t1Clearcoat.y ),
				vec3(             0, 1,             0 ),
				vec3( t1Clearcoat.z, 0, t1Clearcoat.w )
			);
			vec3 fresnelClearcoat = material.clearcoatF0 * t2Clearcoat.x + ( material.clearcoatF90 - material.clearcoatF0 ) * t2Clearcoat.y;
			clearcoatSpecularDirect += lightColor * fresnelClearcoat * LTC_Evaluate( Ncc, viewDir, position, mInvClearcoat, rectCoords );
		#endif
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
 
 		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
 
 		float sheenAlbedoV = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
 		float sheenAlbedoL = IBLSheenBRDF( geometryNormal, directLight.direction, material.sheenRoughness );
 
 		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * max( sheenAlbedoV, sheenAlbedoL );
 
 		irradiance *= sheenEnergyComp;
 
 	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX_Multiscatter( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseContribution );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 diffuse = irradiance * BRDF_Lambert( material.diffuseContribution );
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		diffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectDiffuse += diffuse;
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness ) * RECIPROCAL_PI;
 	#endif
	vec3 singleScatteringDielectric = vec3( 0.0 );
	vec3 multiScatteringDielectric = vec3( 0.0 );
	vec3 singleScatteringMetallic = vec3( 0.0 );
	vec3 multiScatteringMetallic = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnelDielectric, material.roughness, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.diffuseColor, material.specularF90, material.iridescence, material.iridescenceFresnelMetallic, material.roughness, singleScatteringMetallic, multiScatteringMetallic );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscattering( geometryNormal, geometryViewDir, material.diffuseColor, material.specularF90, material.roughness, singleScatteringMetallic, multiScatteringMetallic );
	#endif
	vec3 singleScattering = mix( singleScatteringDielectric, singleScatteringMetallic, material.metalness );
	vec3 multiScattering = mix( multiScatteringDielectric, multiScatteringMetallic, material.metalness );
	vec3 totalScatteringDielectric = singleScatteringDielectric + multiScatteringDielectric;
	vec3 diffuse = material.diffuseContribution * ( 1.0 - totalScatteringDielectric );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	vec3 indirectSpecular = radiance * singleScattering;
	indirectSpecular += multiScattering * cosineWeightedIrradiance;
	vec3 indirectDiffuse = diffuse * cosineWeightedIrradiance;
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		indirectSpecular *= sheenEnergyComp;
		indirectDiffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectSpecular += indirectSpecular;
	reflectedLight.indirectDiffuse += indirectDiffuse;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,Hp=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnelDielectric = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceFresnelMetallic = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.diffuseColor );
		material.iridescenceFresnel = mix( material.iridescenceFresnelDielectric, material.iridescenceFresnelMetallic, material.metalness );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS ) && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
	#ifdef USE_LIGHT_PROBES_GRID
		vec3 probeWorldPos = ( ( vec4( geometryPosition, 1.0 ) - viewMatrix[ 3 ] ) * viewMatrix ).xyz;
		vec3 probeWorldNormal = transformNormalByInverseViewMatrix( geometryNormal, viewMatrix );
		irradiance += getLightProbeGridIrradiance( probeWorldPos, probeWorldNormal );
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,jp=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( ENVMAP_TYPE_CUBE_UV )
		#if defined( STANDARD ) || defined( LAMBERT ) || defined( PHONG )
			iblIrradiance += getIBLIrradiance( geometryNormal );
		#endif
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,Wp=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Xp=`#ifdef USE_LIGHT_PROBES_GRID
uniform highp sampler3D probesSH;
uniform vec3 probesMin;
uniform vec3 probesMax;
uniform vec3 probesResolution;
vec3 getLightProbeGridIrradiance( vec3 worldPos, vec3 worldNormal ) {
	vec3 res = probesResolution;
	vec3 gridRange = probesMax - probesMin;
	vec3 resMinusOne = res - 1.0;
	vec3 probeSpacing = gridRange / resMinusOne;
	vec3 samplePos = worldPos + worldNormal * probeSpacing * 0.5;
	vec3 uvw = clamp( ( samplePos - probesMin ) / gridRange, 0.0, 1.0 );
	uvw = uvw * resMinusOne / res + 0.5 / res;
	float nz          = res.z;
	float paddedSlices = nz + 2.0;
	float atlasDepth  = 7.0 * paddedSlices;
	float uvZBase     = uvw.z * nz + 1.0;
	vec4 s0 = texture( probesSH, vec3( uvw.xy, ( uvZBase                       ) / atlasDepth ) );
	vec4 s1 = texture( probesSH, vec3( uvw.xy, ( uvZBase +       paddedSlices   ) / atlasDepth ) );
	vec4 s2 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 2.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s3 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 3.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s4 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 4.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s5 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 5.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s6 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 6.0 * paddedSlices   ) / atlasDepth ) );
	vec3 c0 = s0.xyz;
	vec3 c1 = vec3( s0.w, s1.xy );
	vec3 c2 = vec3( s1.zw, s2.x );
	vec3 c3 = s2.yzw;
	vec3 c4 = s3.xyz;
	vec3 c5 = vec3( s3.w, s4.xy );
	vec3 c6 = vec3( s4.zw, s5.x );
	vec3 c7 = s5.yzw;
	vec3 c8 = s6.xyz;
	float x = worldNormal.x, y = worldNormal.y, z = worldNormal.z;
	vec3 result = c0 * 0.886227;
	result += c1 * 2.0 * 0.511664 * y;
	result += c2 * 2.0 * 0.511664 * z;
	result += c3 * 2.0 * 0.511664 * x;
	result += c4 * 2.0 * 0.429043 * x * y;
	result += c5 * 2.0 * 0.429043 * y * z;
	result += c6 * ( 0.743125 * z * z - 0.247708 );
	result += c7 * 2.0 * 0.429043 * x * z;
	result += c8 * 0.429043 * ( x * x - y * y );
	return max( result, vec3( 0.0 ) );
}
#endif`,qp=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Yp=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Kp=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,$p=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Zp=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Jp=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Qp=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,em=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,tm=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,nm=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,im=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,sm=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,rm=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,am=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,om=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,lm=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#ifdef DOUBLE_SIDED
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#ifdef DOUBLE_SIDED
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,cm=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#if defined( USE_PACKED_NORMALMAP )
		mapN = vec3( mapN.xy, sqrt( saturate( 1.0 - dot( mapN.xy, mapN.xy ) ) ) );
	#endif
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,dm=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,hm=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,um=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,fm=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,pm=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,mm=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,gm=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,xm=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,_m=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,bm=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	#ifdef USE_REVERSED_DEPTH_BUFFER
	
		return depth * ( far - near ) - far;
	#else
		return depth * ( near - far ) - near;
	#endif
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	
	#ifdef USE_REVERSED_DEPTH_BUFFER
		return ( near * far ) / ( ( near - far ) * depth - near );
	#else
		return ( near * far ) / ( ( far - near ) * depth - far );
	#endif
}`,vm=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,ym=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Sm=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Mm=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Em=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,wm=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Tm=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#else
			uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#endif
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#else
			uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#endif
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform samplerCubeShadow pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#elif defined( SHADOWMAP_TYPE_BASIC )
			uniform samplerCube pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#endif
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float interleavedGradientNoise( vec2 position ) {
			return fract( 52.9829189 * fract( dot( position, vec2( 0.06711056, 0.00583715 ) ) ) );
		}
		vec2 vogelDiskSample( int sampleIndex, int samplesCount, float phi ) {
			const float goldenAngle = 2.399963229728653;
			float r = sqrt( ( float( sampleIndex ) + 0.5 ) / float( samplesCount ) );
			float theta = float( sampleIndex ) * goldenAngle + phi;
			return vec2( cos( theta ), sin( theta ) ) * r;
		}
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float getShadow( sampler2DShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			shadowCoord.z += shadowBias;
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
				float radius = shadowRadius * texelSize.x;
				float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
				shadow = (
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 0, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 1, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 2, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 3, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 4, 5, phi ) * radius, shadowCoord.z ) )
				) * 0.2;
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#elif defined( SHADOWMAP_TYPE_VSM )
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 distribution = texture2D( shadowMap, shadowCoord.xy ).rg;
				float mean = distribution.x;
				float variance = distribution.y * distribution.y;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					float hard_shadow = step( mean, shadowCoord.z );
				#else
					float hard_shadow = step( shadowCoord.z, mean );
				#endif
				
				if ( hard_shadow == 1.0 ) {
					shadow = 1.0;
				} else {
					variance = max( variance, 0.0000001 );
					float d = shadowCoord.z - mean;
					float p_max = variance / ( variance + d * d );
					p_max = clamp( ( p_max - 0.3 ) / 0.65, 0.0, 1.0 );
					shadow = max( hard_shadow, p_max );
				}
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#else
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				float depth = texture2D( shadowMap, shadowCoord.xy ).r;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					shadow = step( depth, shadowCoord.z );
				#else
					shadow = step( shadowCoord.z, depth );
				#endif
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	#if defined( SHADOWMAP_TYPE_PCF )
	float getPointShadow( samplerCubeShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 bd3D = normalize( lightToPosition );
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			#ifdef USE_REVERSED_DEPTH_BUFFER
				float dp = ( shadowCameraNear * ( shadowCameraFar - viewSpaceZ ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp -= shadowBias;
			#else
				float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp += shadowBias;
			#endif
			float texelSize = shadowRadius / shadowMapSize.x;
			vec3 absDir = abs( bd3D );
			vec3 tangent = absDir.x > absDir.z ? vec3( 0.0, 1.0, 0.0 ) : vec3( 1.0, 0.0, 0.0 );
			tangent = normalize( cross( bd3D, tangent ) );
			vec3 bitangent = cross( bd3D, tangent );
			float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
			vec2 sample0 = vogelDiskSample( 0, 5, phi );
			vec2 sample1 = vogelDiskSample( 1, 5, phi );
			vec2 sample2 = vogelDiskSample( 2, 5, phi );
			vec2 sample3 = vogelDiskSample( 3, 5, phi );
			vec2 sample4 = vogelDiskSample( 4, 5, phi );
			shadow = (
				texture( shadowMap, vec4( bd3D + ( tangent * sample0.x + bitangent * sample0.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample1.x + bitangent * sample1.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample2.x + bitangent * sample2.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample3.x + bitangent * sample3.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample4.x + bitangent * sample4.y ) * texelSize, dp ) )
			) * 0.2;
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#elif defined( SHADOWMAP_TYPE_BASIC )
	float getPointShadow( samplerCube shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			float depth = textureCube( shadowMap, bd3D ).r;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				depth = 1.0 - depth;
			#endif
			shadow = step( dp, depth );
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#endif
	#endif
#endif`,Am=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,Rm=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	#ifdef HAS_NORMAL
		vec3 shadowWorldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
	#else
		vec3 shadowWorldNormal = vec3( 0.0 );
	#endif
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,Cm=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0 && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,Nm=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Pm=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,Im=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Dm=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,Lm=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Um=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Fm=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Om=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,km=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseContribution, material.specularColorBlended, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,Bm=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,Gm=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,zm=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,Vm=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,Hm=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const jm=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Wm=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Xm=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,qm=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vWorldDirection );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Ym=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Km=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,$m=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,Zm=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	#ifdef USE_REVERSED_DEPTH_BUFFER
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,Jm=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,Qm=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = vec4( dist, 0.0, 0.0, 1.0 );
}`,eg=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,tg=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,ng=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,ig=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,sg=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,rg=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,ag=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,og=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,lg=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,cg=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,dg=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,hg=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( normalize( normal ) * 0.5 + 0.5, diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,ug=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,fg=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,pg=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,mg=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
 
		outgoingLight = outgoingLight + sheenSpecularDirect + sheenSpecularIndirect;
 
 	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,gg=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,xg=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,_g=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,bg=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,vg=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,yg=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Sg=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,Mg=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Be={alphahash_fragment:jf,alphahash_pars_fragment:Wf,alphamap_fragment:Xf,alphamap_pars_fragment:qf,alphatest_fragment:Yf,alphatest_pars_fragment:Kf,aomap_fragment:$f,aomap_pars_fragment:Zf,batching_pars_vertex:Jf,batching_vertex:Qf,begin_vertex:ep,beginnormal_vertex:tp,bsdfs:np,iridescence_fragment:ip,bumpmap_pars_fragment:sp,clipping_planes_fragment:rp,clipping_planes_pars_fragment:ap,clipping_planes_pars_vertex:op,clipping_planes_vertex:lp,color_fragment:cp,color_pars_fragment:dp,color_pars_vertex:hp,color_vertex:up,common:fp,cube_uv_reflection_fragment:pp,defaultnormal_vertex:mp,displacementmap_pars_vertex:gp,displacementmap_vertex:xp,emissivemap_fragment:_p,emissivemap_pars_fragment:bp,colorspace_fragment:vp,colorspace_pars_fragment:yp,envmap_fragment:Sp,envmap_common_pars_fragment:Mp,envmap_pars_fragment:Ep,envmap_pars_vertex:wp,envmap_physical_pars_fragment:Fp,envmap_vertex:Tp,fog_vertex:Ap,fog_pars_vertex:Rp,fog_fragment:Cp,fog_pars_fragment:Np,gradientmap_pars_fragment:Pp,lightmap_pars_fragment:Ip,lights_lambert_fragment:Dp,lights_lambert_pars_fragment:Lp,lights_pars_begin:Up,lights_toon_fragment:Op,lights_toon_pars_fragment:kp,lights_phong_fragment:Bp,lights_phong_pars_fragment:Gp,lights_physical_fragment:zp,lights_physical_pars_fragment:Vp,lights_fragment_begin:Hp,lights_fragment_maps:jp,lights_fragment_end:Wp,lightprobes_pars_fragment:Xp,logdepthbuf_fragment:qp,logdepthbuf_pars_fragment:Yp,logdepthbuf_pars_vertex:Kp,logdepthbuf_vertex:$p,map_fragment:Zp,map_pars_fragment:Jp,map_particle_fragment:Qp,map_particle_pars_fragment:em,metalnessmap_fragment:tm,metalnessmap_pars_fragment:nm,morphinstance_vertex:im,morphcolor_vertex:sm,morphnormal_vertex:rm,morphtarget_pars_vertex:am,morphtarget_vertex:om,normal_fragment_begin:lm,normal_fragment_maps:cm,normal_pars_fragment:dm,normal_pars_vertex:hm,normal_vertex:um,normalmap_pars_fragment:fm,clearcoat_normal_fragment_begin:pm,clearcoat_normal_fragment_maps:mm,clearcoat_pars_fragment:gm,iridescence_pars_fragment:xm,opaque_fragment:_m,packing:bm,premultiplied_alpha_fragment:vm,project_vertex:ym,dithering_fragment:Sm,dithering_pars_fragment:Mm,roughnessmap_fragment:Em,roughnessmap_pars_fragment:wm,shadowmap_pars_fragment:Tm,shadowmap_pars_vertex:Am,shadowmap_vertex:Rm,shadowmask_pars_fragment:Cm,skinbase_vertex:Nm,skinning_pars_vertex:Pm,skinning_vertex:Im,skinnormal_vertex:Dm,specularmap_fragment:Lm,specularmap_pars_fragment:Um,tonemapping_fragment:Fm,tonemapping_pars_fragment:Om,transmission_fragment:km,transmission_pars_fragment:Bm,uv_pars_fragment:Gm,uv_pars_vertex:zm,uv_vertex:Vm,worldpos_vertex:Hm,background_vert:jm,background_frag:Wm,backgroundCube_vert:Xm,backgroundCube_frag:qm,cube_vert:Ym,cube_frag:Km,depth_vert:$m,depth_frag:Zm,distance_vert:Jm,distance_frag:Qm,equirect_vert:eg,equirect_frag:tg,linedashed_vert:ng,linedashed_frag:ig,meshbasic_vert:sg,meshbasic_frag:rg,meshlambert_vert:ag,meshlambert_frag:og,meshmatcap_vert:lg,meshmatcap_frag:cg,meshnormal_vert:dg,meshnormal_frag:hg,meshphong_vert:ug,meshphong_frag:fg,meshphysical_vert:pg,meshphysical_frag:mg,meshtoon_vert:gg,meshtoon_frag:xg,points_vert:_g,points_frag:bg,shadow_vert:vg,shadow_frag:yg,sprite_vert:Sg,sprite_frag:Mg},ue={common:{diffuse:{value:new Ie(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Ue},alphaMap:{value:null},alphaMapTransform:{value:new Ue},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Ue}},envmap:{envMap:{value:null},envMapRotation:{value:new Ue},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Ue}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Ue}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Ue},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Ue},normalScale:{value:new Ce(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Ue},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Ue}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Ue}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Ue}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Ie(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:null},probesMin:{value:new D},probesMax:{value:new D},probesResolution:{value:new D}},points:{diffuse:{value:new Ie(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Ue},alphaTest:{value:0},uvTransform:{value:new Ue}},sprite:{diffuse:{value:new Ie(16777215)},opacity:{value:1},center:{value:new Ce(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Ue},alphaMap:{value:null},alphaMapTransform:{value:new Ue},alphaTest:{value:0}}},xn={basic:{uniforms:Bt([ue.common,ue.specularmap,ue.envmap,ue.aomap,ue.lightmap,ue.fog]),vertexShader:Be.meshbasic_vert,fragmentShader:Be.meshbasic_frag},lambert:{uniforms:Bt([ue.common,ue.specularmap,ue.envmap,ue.aomap,ue.lightmap,ue.emissivemap,ue.bumpmap,ue.normalmap,ue.displacementmap,ue.fog,ue.lights,{emissive:{value:new Ie(0)},envMapIntensity:{value:1}}]),vertexShader:Be.meshlambert_vert,fragmentShader:Be.meshlambert_frag},phong:{uniforms:Bt([ue.common,ue.specularmap,ue.envmap,ue.aomap,ue.lightmap,ue.emissivemap,ue.bumpmap,ue.normalmap,ue.displacementmap,ue.fog,ue.lights,{emissive:{value:new Ie(0)},specular:{value:new Ie(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:Be.meshphong_vert,fragmentShader:Be.meshphong_frag},standard:{uniforms:Bt([ue.common,ue.envmap,ue.aomap,ue.lightmap,ue.emissivemap,ue.bumpmap,ue.normalmap,ue.displacementmap,ue.roughnessmap,ue.metalnessmap,ue.fog,ue.lights,{emissive:{value:new Ie(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Be.meshphysical_vert,fragmentShader:Be.meshphysical_frag},toon:{uniforms:Bt([ue.common,ue.aomap,ue.lightmap,ue.emissivemap,ue.bumpmap,ue.normalmap,ue.displacementmap,ue.gradientmap,ue.fog,ue.lights,{emissive:{value:new Ie(0)}}]),vertexShader:Be.meshtoon_vert,fragmentShader:Be.meshtoon_frag},matcap:{uniforms:Bt([ue.common,ue.bumpmap,ue.normalmap,ue.displacementmap,ue.fog,{matcap:{value:null}}]),vertexShader:Be.meshmatcap_vert,fragmentShader:Be.meshmatcap_frag},points:{uniforms:Bt([ue.points,ue.fog]),vertexShader:Be.points_vert,fragmentShader:Be.points_frag},dashed:{uniforms:Bt([ue.common,ue.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Be.linedashed_vert,fragmentShader:Be.linedashed_frag},depth:{uniforms:Bt([ue.common,ue.displacementmap]),vertexShader:Be.depth_vert,fragmentShader:Be.depth_frag},normal:{uniforms:Bt([ue.common,ue.bumpmap,ue.normalmap,ue.displacementmap,{opacity:{value:1}}]),vertexShader:Be.meshnormal_vert,fragmentShader:Be.meshnormal_frag},sprite:{uniforms:Bt([ue.sprite,ue.fog]),vertexShader:Be.sprite_vert,fragmentShader:Be.sprite_frag},background:{uniforms:{uvTransform:{value:new Ue},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Be.background_vert,fragmentShader:Be.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Ue}},vertexShader:Be.backgroundCube_vert,fragmentShader:Be.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Be.cube_vert,fragmentShader:Be.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Be.equirect_vert,fragmentShader:Be.equirect_frag},distance:{uniforms:Bt([ue.common,ue.displacementmap,{referencePosition:{value:new D},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Be.distance_vert,fragmentShader:Be.distance_frag},shadow:{uniforms:Bt([ue.lights,ue.fog,{color:{value:new Ie(0)},opacity:{value:1}}]),vertexShader:Be.shadow_vert,fragmentShader:Be.shadow_frag}};xn.physical={uniforms:Bt([xn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Ue},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Ue},clearcoatNormalScale:{value:new Ce(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Ue},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Ue},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Ue},sheen:{value:0},sheenColor:{value:new Ie(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Ue},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Ue},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Ue},transmissionSamplerSize:{value:new Ce},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Ue},attenuationDistance:{value:0},attenuationColor:{value:new Ie(0)},specularColor:{value:new Ie(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Ue},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Ue},anisotropyVector:{value:new Ce},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Ue}}]),vertexShader:Be.meshphysical_vert,fragmentShader:Be.meshphysical_frag};const Js={r:0,b:0,g:0},Eg=new Ge,md=new Ue;md.set(-1,0,0,0,1,0,0,0,1);function wg(i,e,t,n,s,r){const a=new Ie(0);let o=s===!0?0:1,l,d,h=null,f=0,u=null;function p(M){let T=M.isScene===!0?M.background:null;if(T&&T.isTexture){const y=M.backgroundBlurriness>0;T=e.get(T,y)}return T}function x(M){let T=!1;const y=p(M);y===null?g(a,o):y&&y.isColor&&(g(y,1),T=!0);const A=i.xr.getEnvironmentBlendMode();A==="additive"?t.buffers.color.setClear(0,0,0,1,r):A==="alpha-blend"&&t.buffers.color.setClear(0,0,0,0,r),(i.autoClear||T)&&(t.buffers.depth.setTest(!0),t.buffers.depth.setMask(!0),t.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function v(M,T){const y=p(T);y&&(y.isCubeTexture||y.mapping===xr)?(d===void 0&&(d=new jt(new Ms(1,1,1),new En({name:"BackgroundCubeMaterial",uniforms:ji(xn.backgroundCube.uniforms),vertexShader:xn.backgroundCube.vertexShader,fragmentShader:xn.backgroundCube.fragmentShader,side:Ht,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),d.geometry.deleteAttribute("normal"),d.geometry.deleteAttribute("uv"),d.onBeforeRender=function(A,w,R){this.matrixWorld.copyPosition(R.matrixWorld)},Object.defineProperty(d.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),n.update(d)),d.material.uniforms.envMap.value=y,d.material.uniforms.backgroundBlurriness.value=T.backgroundBlurriness,d.material.uniforms.backgroundIntensity.value=T.backgroundIntensity,d.material.uniforms.backgroundRotation.value.setFromMatrix4(Eg.makeRotationFromEuler(T.backgroundRotation)).transpose(),y.isCubeTexture&&y.isRenderTargetTexture===!1&&d.material.uniforms.backgroundRotation.value.premultiply(md),d.material.toneMapped=je.getTransfer(y.colorSpace)!==Je,(h!==y||f!==y.version||u!==i.toneMapping)&&(d.material.needsUpdate=!0,h=y,f=y.version,u=i.toneMapping),d.layers.enableAll(),M.unshift(d,d.geometry,d.material,0,0,null)):y&&y.isTexture&&(l===void 0&&(l=new jt(new br(2,2),new En({name:"BackgroundMaterial",uniforms:ji(xn.background.uniforms),vertexShader:xn.background.vertexShader,fragmentShader:xn.background.fragmentShader,side:kn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),n.update(l)),l.material.uniforms.t2D.value=y,l.material.uniforms.backgroundIntensity.value=T.backgroundIntensity,l.material.toneMapped=je.getTransfer(y.colorSpace)!==Je,y.matrixAutoUpdate===!0&&y.updateMatrix(),l.material.uniforms.uvTransform.value.copy(y.matrix),(h!==y||f!==y.version||u!==i.toneMapping)&&(l.material.needsUpdate=!0,h=y,f=y.version,u=i.toneMapping),l.layers.enableAll(),M.unshift(l,l.geometry,l.material,0,0,null))}function g(M,T){M.getRGB(Js,cd(i)),t.buffers.color.setClear(Js.r,Js.g,Js.b,T,r)}function m(){d!==void 0&&(d.geometry.dispose(),d.material.dispose(),d=void 0),l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0)}return{getClearColor:function(){return a},setClearColor:function(M,T=1){a.set(M),o=T,g(a,o)},getClearAlpha:function(){return o},setClearAlpha:function(M){o=M,g(a,o)},render:x,addToRenderList:v,dispose:m}}function Tg(i,e){const t=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},s=u(null);let r=s,a=!1;function o(P,F,j,K,k){let X=!1;const W=f(P,K,j,F);r!==W&&(r=W,d(r.object)),X=p(P,K,j,k),X&&x(P,K,j,k),k!==null&&e.update(k,i.ELEMENT_ARRAY_BUFFER),(X||a)&&(a=!1,y(P,F,j,K),k!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,e.get(k).buffer))}function l(){return i.createVertexArray()}function d(P){return i.bindVertexArray(P)}function h(P){return i.deleteVertexArray(P)}function f(P,F,j,K){const k=K.wireframe===!0;let X=n[F.id];X===void 0&&(X={},n[F.id]=X);const W=P.isInstancedMesh===!0?P.id:0;let Q=X[W];Q===void 0&&(Q={},X[W]=Q);let V=Q[j.id];V===void 0&&(V={},Q[j.id]=V);let ee=V[k];return ee===void 0&&(ee=u(l()),V[k]=ee),ee}function u(P){const F=[],j=[],K=[];for(let k=0;k<t;k++)F[k]=0,j[k]=0,K[k]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:F,enabledAttributes:j,attributeDivisors:K,object:P,attributes:{},index:null}}function p(P,F,j,K){const k=r.attributes,X=F.attributes;let W=0;const Q=j.getAttributes();for(const V in Q)if(Q[V].location>=0){const se=k[V];let ge=X[V];if(ge===void 0&&(V==="instanceMatrix"&&P.instanceMatrix&&(ge=P.instanceMatrix),V==="instanceColor"&&P.instanceColor&&(ge=P.instanceColor)),se===void 0||se.attribute!==ge||ge&&se.data!==ge.data)return!0;W++}return r.attributesNum!==W||r.index!==K}function x(P,F,j,K){const k={},X=F.attributes;let W=0;const Q=j.getAttributes();for(const V in Q)if(Q[V].location>=0){let se=X[V];se===void 0&&(V==="instanceMatrix"&&P.instanceMatrix&&(se=P.instanceMatrix),V==="instanceColor"&&P.instanceColor&&(se=P.instanceColor));const ge={};ge.attribute=se,se&&se.data&&(ge.data=se.data),k[V]=ge,W++}r.attributes=k,r.attributesNum=W,r.index=K}function v(){const P=r.newAttributes;for(let F=0,j=P.length;F<j;F++)P[F]=0}function g(P){m(P,0)}function m(P,F){const j=r.newAttributes,K=r.enabledAttributes,k=r.attributeDivisors;j[P]=1,K[P]===0&&(i.enableVertexAttribArray(P),K[P]=1),k[P]!==F&&(i.vertexAttribDivisor(P,F),k[P]=F)}function M(){const P=r.newAttributes,F=r.enabledAttributes;for(let j=0,K=F.length;j<K;j++)F[j]!==P[j]&&(i.disableVertexAttribArray(j),F[j]=0)}function T(P,F,j,K,k,X,W){W===!0?i.vertexAttribIPointer(P,F,j,k,X):i.vertexAttribPointer(P,F,j,K,k,X)}function y(P,F,j,K){v();const k=K.attributes,X=j.getAttributes(),W=F.defaultAttributeValues;for(const Q in X){const V=X[Q];if(V.location>=0){let ee=k[Q];if(ee===void 0&&(Q==="instanceMatrix"&&P.instanceMatrix&&(ee=P.instanceMatrix),Q==="instanceColor"&&P.instanceColor&&(ee=P.instanceColor)),ee!==void 0){const se=ee.normalized,ge=ee.itemSize,Xe=e.get(ee);if(Xe===void 0)continue;const dt=Xe.buffer,Ke=Xe.type,J=Xe.bytesPerElement,ae=Ke===i.INT||Ke===i.UNSIGNED_INT||ee.gpuType===po;if(ee.isInterleavedBufferAttribute){const ne=ee.data,Le=ne.stride,Fe=ee.offset;if(ne.isInstancedInterleavedBuffer){for(let Ne=0;Ne<V.locationSize;Ne++)m(V.location+Ne,ne.meshPerAttribute);P.isInstancedMesh!==!0&&K._maxInstanceCount===void 0&&(K._maxInstanceCount=ne.meshPerAttribute*ne.count)}else for(let Ne=0;Ne<V.locationSize;Ne++)g(V.location+Ne);i.bindBuffer(i.ARRAY_BUFFER,dt);for(let Ne=0;Ne<V.locationSize;Ne++)T(V.location+Ne,ge/V.locationSize,Ke,se,Le*J,(Fe+ge/V.locationSize*Ne)*J,ae)}else{if(ee.isInstancedBufferAttribute){for(let ne=0;ne<V.locationSize;ne++)m(V.location+ne,ee.meshPerAttribute);P.isInstancedMesh!==!0&&K._maxInstanceCount===void 0&&(K._maxInstanceCount=ee.meshPerAttribute*ee.count)}else for(let ne=0;ne<V.locationSize;ne++)g(V.location+ne);i.bindBuffer(i.ARRAY_BUFFER,dt);for(let ne=0;ne<V.locationSize;ne++)T(V.location+ne,ge/V.locationSize,Ke,se,ge*J,ge/V.locationSize*ne*J,ae)}}else if(W!==void 0){const se=W[Q];if(se!==void 0)switch(se.length){case 2:i.vertexAttrib2fv(V.location,se);break;case 3:i.vertexAttrib3fv(V.location,se);break;case 4:i.vertexAttrib4fv(V.location,se);break;default:i.vertexAttrib1fv(V.location,se)}}}}M()}function A(){E();for(const P in n){const F=n[P];for(const j in F){const K=F[j];for(const k in K){const X=K[k];for(const W in X)h(X[W].object),delete X[W];delete K[k]}}delete n[P]}}function w(P){if(n[P.id]===void 0)return;const F=n[P.id];for(const j in F){const K=F[j];for(const k in K){const X=K[k];for(const W in X)h(X[W].object),delete X[W];delete K[k]}}delete n[P.id]}function R(P){for(const F in n){const j=n[F];for(const K in j){const k=j[K];if(k[P.id]===void 0)continue;const X=k[P.id];for(const W in X)h(X[W].object),delete X[W];delete k[P.id]}}}function _(P){for(const F in n){const j=n[F],K=P.isInstancedMesh===!0?P.id:0,k=j[K];if(k!==void 0){for(const X in k){const W=k[X];for(const Q in W)h(W[Q].object),delete W[Q];delete k[X]}delete j[K],Object.keys(j).length===0&&delete n[F]}}}function E(){N(),a=!0,r!==s&&(r=s,d(r.object))}function N(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:o,reset:E,resetDefaultState:N,dispose:A,releaseStatesOfGeometry:w,releaseStatesOfObject:_,releaseStatesOfProgram:R,initAttributes:v,enableAttribute:g,disableUnusedAttributes:M}}function Ag(i,e,t){let n;function s(l){n=l}function r(l,d){i.drawArrays(n,l,d),t.update(d,n,1)}function a(l,d,h){h!==0&&(i.drawArraysInstanced(n,l,d,h),t.update(d,n,h))}function o(l,d,h){if(h===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,l,0,d,0,h);let u=0;for(let p=0;p<h;p++)u+=d[p];t.update(u,n,1)}this.setMode=s,this.render=r,this.renderInstances=a,this.renderMultiDraw=o}function Rg(i,e,t,n){let s;function r(){if(s!==void 0)return s;if(e.has("EXT_texture_filter_anisotropic")===!0){const R=e.get("EXT_texture_filter_anisotropic");s=i.getParameter(R.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function a(R){return!(R!==en&&n.convert(R)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(R){const _=R===Bn&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(R!==Yt&&n.convert(R)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE)&&R!==Qt&&!_)}function l(R){if(R==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";R="mediump"}return R==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let d=t.precision!==void 0?t.precision:"highp";const h=l(d);h!==d&&(Me("WebGLRenderer:",d,"not supported, using",h,"instead."),d=h);const f=t.logarithmicDepthBuffer===!0,u=t.reversedDepthBuffer===!0&&e.has("EXT_clip_control");t.reversedDepthBuffer===!0&&u===!1&&Me("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.");const p=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),x=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),v=i.getParameter(i.MAX_TEXTURE_SIZE),g=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),m=i.getParameter(i.MAX_VERTEX_ATTRIBS),M=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),T=i.getParameter(i.MAX_VARYING_VECTORS),y=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),A=i.getParameter(i.MAX_SAMPLES),w=i.getParameter(i.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:a,textureTypeReadable:o,precision:d,logarithmicDepthBuffer:f,reversedDepthBuffer:u,maxTextures:p,maxVertexTextures:x,maxTextureSize:v,maxCubemapSize:g,maxAttributes:m,maxVertexUniforms:M,maxVaryings:T,maxFragmentUniforms:y,maxSamples:A,samples:w}}function Cg(i){const e=this;let t=null,n=0,s=!1,r=!1;const a=new Zn,o=new Ue,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(f,u){const p=f.length!==0||u||n!==0||s;return s=u,n=f.length,p},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(f,u){t=h(f,u,0)},this.setState=function(f,u,p){const x=f.clippingPlanes,v=f.clipIntersection,g=f.clipShadows,m=i.get(f);if(!s||x===null||x.length===0||r&&!g)r?h(null):d();else{const M=r?0:n,T=M*4;let y=m.clippingState||null;l.value=y,y=h(x,u,T,p);for(let A=0;A!==T;++A)y[A]=t[A];m.clippingState=y,this.numIntersection=v?this.numPlanes:0,this.numPlanes+=M}};function d(){l.value!==t&&(l.value=t,l.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function h(f,u,p,x){const v=f!==null?f.length:0;let g=null;if(v!==0){if(g=l.value,x!==!0||g===null){const m=p+v*4,M=u.matrixWorldInverse;o.getNormalMatrix(M),(g===null||g.length<m)&&(g=new Float32Array(m));for(let T=0,y=p;T!==v;++T,y+=4)a.copy(f[T]).applyMatrix4(M,o),a.normal.toArray(g,y),g[y+3]=a.constant}l.value=g,l.needsUpdate=!0}return e.numPlanes=v,e.numIntersection=0,g}}const Qn=4,nc=[.125,.215,.35,.446,.526,.582],ci=20,Ng=256,ss=new yr,ic=new Ie;let sa=null,ra=0,aa=0,oa=!1;const Pg=new D;class sc{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._sigmas=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(e,t=0,n=.1,s=100,r={}){const{size:a=256,position:o=Pg}=r;sa=this._renderer.getRenderTarget(),ra=this._renderer.getActiveCubeFace(),aa=this._renderer.getActiveMipmapLevel(),oa=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(a);const l=this._allocateTargets();return l.depthBuffer=!0,this._sceneToCubeUV(e,n,s,l,o),t>0&&this._blur(l,0,0,t),this._applyPMREM(l),this._cleanup(l),l}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=oc(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=ac(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodMeshes.length;e++)this._lodMeshes[e].geometry.dispose()}_cleanup(e){this._renderer.setRenderTarget(sa,ra,aa),this._renderer.xr.enabled=oa,e.scissorTest=!1,Ii(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===fi||e.mapping===Gi?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),sa=this._renderer.getRenderTarget(),ra=this._renderer.getActiveCubeFace(),aa=this._renderer.getActiveMipmapLevel(),oa=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:Et,minFilter:Et,generateMipmaps:!1,type:Bn,format:en,colorSpace:Kt,depthBuffer:!1},s=rc(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=rc(e,t,n);const{_lodMax:r}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods,sigmas:this._sigmas}=Ig(r)),this._blurMaterial=Lg(r,e,t),this._ggxMaterial=Dg(r,e,t)}return s}_compileMaterial(e){const t=new jt(new Ot,e);this._renderer.compile(t,ss)}_sceneToCubeUV(e,t,n,s,r){const l=new Gt(90,1,t,n),d=[1,-1,1,1,1,1],h=[1,1,1,-1,-1,-1],f=this._renderer,u=f.autoClear,p=f.toneMapping;f.getClearColor(ic),f.toneMapping=yn,f.autoClear=!1,f.state.buffers.depth.getReversed()&&(f.setRenderTarget(s),f.clearDepth(),f.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new jt(new Ms,new ui({name:"PMREM.Background",side:Ht,depthWrite:!1,depthTest:!1})));const v=this._backgroundBox,g=v.material;let m=!1;const M=e.background;M?M.isColor&&(g.color.copy(M),e.background=null,m=!0):(g.color.copy(ic),m=!0);for(let T=0;T<6;T++){const y=T%3;y===0?(l.up.set(0,d[T],0),l.position.set(r.x,r.y,r.z),l.lookAt(r.x+h[T],r.y,r.z)):y===1?(l.up.set(0,0,d[T]),l.position.set(r.x,r.y,r.z),l.lookAt(r.x,r.y+h[T],r.z)):(l.up.set(0,d[T],0),l.position.set(r.x,r.y,r.z),l.lookAt(r.x,r.y,r.z+h[T]));const A=this._cubeSize;Ii(s,y*A,T>2?A:0,A,A),f.setRenderTarget(s),m&&f.render(v,l),f.render(e,l)}f.toneMapping=p,f.autoClear=u,e.background=M}_textureToCubeUV(e,t){const n=this._renderer,s=e.mapping===fi||e.mapping===Gi;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=oc()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=ac());const r=s?this._cubemapMaterial:this._equirectMaterial,a=this._lodMeshes[0];a.material=r;const o=r.uniforms;o.envMap.value=e;const l=this._cubeSize;Ii(t,0,0,3*l,2*l),n.setRenderTarget(t),n.render(a,ss)}_applyPMREM(e){const t=this._renderer,n=t.autoClear;t.autoClear=!1;const s=this._lodMeshes.length;for(let r=1;r<s;r++)this._applyGGXFilter(e,r-1,r);t.autoClear=n}_applyGGXFilter(e,t,n){const s=this._renderer,r=this._pingPongRenderTarget,a=this._ggxMaterial,o=this._lodMeshes[n];o.material=a;const l=a.uniforms,d=n/(this._lodMeshes.length-1),h=t/(this._lodMeshes.length-1),f=Math.sqrt(d*d-h*h),u=0+d*1.25,p=f*u,{_lodMax:x}=this,v=this._sizeLods[n],g=3*v*(n>x-Qn?n-x+Qn:0),m=4*(this._cubeSize-v);l.envMap.value=e.texture,l.roughness.value=p,l.mipInt.value=x-t,Ii(r,g,m,3*v,2*v),s.setRenderTarget(r),s.render(o,ss),l.envMap.value=r.texture,l.roughness.value=0,l.mipInt.value=x-n,Ii(e,g,m,3*v,2*v),s.setRenderTarget(e),s.render(o,ss)}_blur(e,t,n,s,r){const a=this._pingPongRenderTarget;this._halfBlur(e,a,t,n,s,"latitudinal",r),this._halfBlur(a,e,n,n,s,"longitudinal",r)}_halfBlur(e,t,n,s,r,a,o){const l=this._renderer,d=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&De("blur direction must be either latitudinal or longitudinal!");const h=3,f=this._lodMeshes[s];f.material=d;const u=d.uniforms,p=this._sizeLods[n]-1,x=isFinite(r)?Math.PI/(2*p):2*Math.PI/(2*ci-1),v=r/x,g=isFinite(r)?1+Math.floor(h*v):ci;g>ci&&Me(`sigmaRadians, ${r}, is too large and will clip, as it requested ${g} samples when the maximum is set to ${ci}`);const m=[];let M=0;for(let R=0;R<ci;++R){const _=R/v,E=Math.exp(-_*_/2);m.push(E),R===0?M+=E:R<g&&(M+=2*E)}for(let R=0;R<m.length;R++)m[R]=m[R]/M;u.envMap.value=e.texture,u.samples.value=g,u.weights.value=m,u.latitudinal.value=a==="latitudinal",o&&(u.poleAxis.value=o);const{_lodMax:T}=this;u.dTheta.value=x,u.mipInt.value=T-n;const y=this._sizeLods[s],A=3*y*(s>T-Qn?s-T+Qn:0),w=4*(this._cubeSize-y);Ii(t,A,w,3*y,2*y),l.setRenderTarget(t),l.render(f,ss)}}function Ig(i){const e=[],t=[],n=[];let s=i;const r=i-Qn+1+nc.length;for(let a=0;a<r;a++){const o=Math.pow(2,s);e.push(o);let l=1/o;a>i-Qn?l=nc[a-i+Qn-1]:a===0&&(l=0),t.push(l);const d=1/(o-2),h=-d,f=1+d,u=[h,h,f,h,f,f,h,h,f,f,h,f],p=6,x=6,v=3,g=2,m=1,M=new Float32Array(v*x*p),T=new Float32Array(g*x*p),y=new Float32Array(m*x*p);for(let w=0;w<p;w++){const R=w%3*2/3-1,_=w>2?0:-1,E=[R,_,0,R+2/3,_,0,R+2/3,_+1,0,R,_,0,R+2/3,_+1,0,R,_+1,0];M.set(E,v*x*w),T.set(u,g*x*w);const N=[w,w,w,w,w,w];y.set(N,m*x*w)}const A=new Ot;A.setAttribute("position",new Ft(M,v)),A.setAttribute("uv",new Ft(T,g)),A.setAttribute("faceIndex",new Ft(y,m)),n.push(new jt(A,null)),s>Qn&&s--}return{lodMeshes:n,sizeLods:e,sigmas:t}}function rc(i,e,t){const n=new Sn(i,e,t);return n.texture.mapping=xr,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function Ii(i,e,t,n,s){i.viewport.set(e,t,n,s),i.scissor.set(e,t,n,s)}function Dg(i,e,t){return new En({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:Ng,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:Sr(),fragmentShader:`

			precision highp float;
			precision highp int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform float roughness;
			uniform float mipInt;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			#define PI 3.14159265359

			// Van der Corput radical inverse
			float radicalInverse_VdC(uint bits) {
				bits = (bits << 16u) | (bits >> 16u);
				bits = ((bits & 0x55555555u) << 1u) | ((bits & 0xAAAAAAAAu) >> 1u);
				bits = ((bits & 0x33333333u) << 2u) | ((bits & 0xCCCCCCCCu) >> 2u);
				bits = ((bits & 0x0F0F0F0Fu) << 4u) | ((bits & 0xF0F0F0F0u) >> 4u);
				bits = ((bits & 0x00FF00FFu) << 8u) | ((bits & 0xFF00FF00u) >> 8u);
				return float(bits) * 2.3283064365386963e-10; // / 0x100000000
			}

			// Hammersley sequence
			vec2 hammersley(uint i, uint N) {
				return vec2(float(i) / float(N), radicalInverse_VdC(i));
			}

			// GGX VNDF importance sampling (Eric Heitz 2018)
			// "Sampling the GGX Distribution of Visible Normals"
			// https://jcgt.org/published/0007/04/01/
			vec3 importanceSampleGGX_VNDF(vec2 Xi, vec3 V, float roughness) {
				float alpha = roughness * roughness;

				// Section 4.1: Orthonormal basis
				vec3 T1 = vec3(1.0, 0.0, 0.0);
				vec3 T2 = cross(V, T1);

				// Section 4.2: Parameterization of projected area
				float r = sqrt(Xi.x);
				float phi = 2.0 * PI * Xi.y;
				float t1 = r * cos(phi);
				float t2 = r * sin(phi);
				float s = 0.5 * (1.0 + V.z);
				t2 = (1.0 - s) * sqrt(1.0 - t1 * t1) + s * t2;

				// Section 4.3: Reprojection onto hemisphere
				vec3 Nh = t1 * T1 + t2 * T2 + sqrt(max(0.0, 1.0 - t1 * t1 - t2 * t2)) * V;

				// Section 3.4: Transform back to ellipsoid configuration
				return normalize(vec3(alpha * Nh.x, alpha * Nh.y, max(0.0, Nh.z)));
			}

			void main() {
				vec3 N = normalize(vOutputDirection);
				vec3 V = N; // Assume view direction equals normal for pre-filtering

				vec3 prefilteredColor = vec3(0.0);
				float totalWeight = 0.0;

				// For very low roughness, just sample the environment directly
				if (roughness < 0.001) {
					gl_FragColor = vec4(bilinearCubeUV(envMap, N, mipInt), 1.0);
					return;
				}

				// Tangent space basis for VNDF sampling
				vec3 up = abs(N.z) < 0.999 ? vec3(0.0, 0.0, 1.0) : vec3(1.0, 0.0, 0.0);
				vec3 tangent = normalize(cross(up, N));
				vec3 bitangent = cross(N, tangent);

				for(uint i = 0u; i < uint(GGX_SAMPLES); i++) {
					vec2 Xi = hammersley(i, uint(GGX_SAMPLES));

					// For PMREM, V = N, so in tangent space V is always (0, 0, 1)
					vec3 H_tangent = importanceSampleGGX_VNDF(Xi, vec3(0.0, 0.0, 1.0), roughness);

					// Transform H back to world space
					vec3 H = normalize(tangent * H_tangent.x + bitangent * H_tangent.y + N * H_tangent.z);
					vec3 L = normalize(2.0 * dot(V, H) * H - V);

					float NdotL = max(dot(N, L), 0.0);

					if(NdotL > 0.0) {
						// Sample environment at fixed mip level
						// VNDF importance sampling handles the distribution filtering
						vec3 sampleColor = bilinearCubeUV(envMap, L, mipInt);

						// Weight by NdotL for the split-sum approximation
						// VNDF PDF naturally accounts for the visible microfacet distribution
						prefilteredColor += sampleColor * NdotL;
						totalWeight += NdotL;
					}
				}

				if (totalWeight > 0.0) {
					prefilteredColor = prefilteredColor / totalWeight;
				}

				gl_FragColor = vec4(prefilteredColor, 1.0);
			}
		`,blending:Fn,depthTest:!1,depthWrite:!1})}function Lg(i,e,t){const n=new Float32Array(ci),s=new D(0,1,0);return new En({name:"SphericalGaussianBlur",defines:{n:ci,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:Sr(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:Fn,depthTest:!1,depthWrite:!1})}function ac(){return new En({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Sr(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:Fn,depthTest:!1,depthWrite:!1})}function oc(){return new En({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Sr(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Fn,depthTest:!1,depthWrite:!1})}function Sr(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}class gd extends Sn{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const n={width:e,height:e,depth:1},s=[n,n,n,n,n,n];this.texture=new od(s),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},s=new Ms(5,5,5),r=new En({name:"CubemapFromEquirect",uniforms:ji(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Ht,blending:Fn});r.uniforms.tEquirect.value=t;const a=new jt(s,r),o=t.minFilter;return t.minFilter===Ln&&(t.minFilter=Et),new Rf(1,10,this).update(e,a),t.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(e,t=!0,n=!0,s=!0){const r=e.getRenderTarget();for(let a=0;a<6;a++)e.setRenderTarget(this,a),e.clear(t,n,s);e.setRenderTarget(r)}}function Ug(i){let e=new WeakMap,t=new WeakMap,n=null;function s(u,p=!1){return u==null?null:p?a(u):r(u)}function r(u){if(u&&u.isTexture){const p=u.mapping;if(p===Rr||p===Cr)if(e.has(u)){const x=e.get(u).texture;return o(x,u.mapping)}else{const x=u.image;if(x&&x.height>0){const v=new gd(x.height);return v.fromEquirectangularTexture(i,u),e.set(u,v),u.addEventListener("dispose",d),o(v.texture,u.mapping)}else return null}}return u}function a(u){if(u&&u.isTexture){const p=u.mapping,x=p===Rr||p===Cr,v=p===fi||p===Gi;if(x||v){let g=t.get(u);const m=g!==void 0?g.texture.pmremVersion:0;if(u.isRenderTargetTexture&&u.pmremVersion!==m)return n===null&&(n=new sc(i)),g=x?n.fromEquirectangular(u,g):n.fromCubemap(u,g),g.texture.pmremVersion=u.pmremVersion,t.set(u,g),g.texture;if(g!==void 0)return g.texture;{const M=u.image;return x&&M&&M.height>0||v&&M&&l(M)?(n===null&&(n=new sc(i)),g=x?n.fromEquirectangular(u):n.fromCubemap(u),g.texture.pmremVersion=u.pmremVersion,t.set(u,g),u.addEventListener("dispose",h),g.texture):null}}}return u}function o(u,p){return p===Rr?u.mapping=fi:p===Cr&&(u.mapping=Gi),u}function l(u){let p=0;const x=6;for(let v=0;v<x;v++)u[v]!==void 0&&p++;return p===x}function d(u){const p=u.target;p.removeEventListener("dispose",d);const x=e.get(p);x!==void 0&&(e.delete(p),x.dispose())}function h(u){const p=u.target;p.removeEventListener("dispose",h);const x=t.get(p);x!==void 0&&(t.delete(p),x.dispose())}function f(){e=new WeakMap,t=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:s,dispose:f}}function Fg(i){const e={};function t(n){if(e[n]!==void 0)return e[n];const s=i.getExtension(n);return e[n]=s,s}return{has:function(n){return t(n)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(n){const s=t(n);return s===null&&Fi("WebGLRenderer: "+n+" extension not supported."),s}}}function Og(i,e,t,n){const s={},r=new WeakMap;function a(f){const u=f.target;u.index!==null&&e.remove(u.index);for(const x in u.attributes)e.remove(u.attributes[x]);u.removeEventListener("dispose",a),delete s[u.id];const p=r.get(u);p&&(e.remove(p),r.delete(u)),n.releaseStatesOfGeometry(u),u.isInstancedBufferGeometry===!0&&delete u._maxInstanceCount,t.memory.geometries--}function o(f,u){return s[u.id]===!0||(u.addEventListener("dispose",a),s[u.id]=!0,t.memory.geometries++),u}function l(f){const u=f.attributes;for(const p in u)e.update(u[p],i.ARRAY_BUFFER)}function d(f){const u=[],p=f.index,x=f.attributes.position;let v=0;if(x===void 0)return;if(p!==null){const M=p.array;v=p.version;for(let T=0,y=M.length;T<y;T+=3){const A=M[T+0],w=M[T+1],R=M[T+2];u.push(A,w,w,R,R,A)}}else{const M=x.array;v=x.version;for(let T=0,y=M.length/3-1;T<y;T+=3){const A=T+0,w=T+1,R=T+2;u.push(A,w,w,R,R,A)}}const g=new(x.count>=65535?sd:id)(u,1);g.version=v;const m=r.get(f);m&&e.remove(m),r.set(f,g)}function h(f){const u=r.get(f);if(u){const p=f.index;p!==null&&u.version<p.version&&d(f)}else d(f);return r.get(f)}return{get:o,update:l,getWireframeAttribute:h}}function kg(i,e,t){let n;function s(f){n=f}let r,a;function o(f){r=f.type,a=f.bytesPerElement}function l(f,u){i.drawElements(n,u,r,f*a),t.update(u,n,1)}function d(f,u,p){p!==0&&(i.drawElementsInstanced(n,u,r,f*a,p),t.update(u,n,p))}function h(f,u,p){if(p===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,u,0,r,f,0,p);let v=0;for(let g=0;g<p;g++)v+=u[g];t.update(v,n,1)}this.setMode=s,this.setIndex=o,this.render=l,this.renderInstances=d,this.renderMultiDraw=h}function Bg(i){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,a,o){switch(t.calls++,a){case i.TRIANGLES:t.triangles+=o*(r/3);break;case i.LINES:t.lines+=o*(r/2);break;case i.LINE_STRIP:t.lines+=o*(r-1);break;case i.LINE_LOOP:t.lines+=o*r;break;case i.POINTS:t.points+=o*r;break;default:De("WebGLInfo: Unknown draw mode:",a);break}}function s(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:s,update:n}}function Gg(i,e,t){const n=new WeakMap,s=new it;function r(a,o,l){const d=a.morphTargetInfluences,h=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,f=h!==void 0?h.length:0;let u=n.get(o);if(u===void 0||u.count!==f){let E=function(){R.dispose(),n.delete(o),o.removeEventListener("dispose",E)};u!==void 0&&u.texture.dispose();const p=o.morphAttributes.position!==void 0,x=o.morphAttributes.normal!==void 0,v=o.morphAttributes.color!==void 0,g=o.morphAttributes.position||[],m=o.morphAttributes.normal||[],M=o.morphAttributes.color||[];let T=0;p===!0&&(T=1),x===!0&&(T=2),v===!0&&(T=3);let y=o.attributes.position.count*T,A=1;y>e.maxTextureSize&&(A=Math.ceil(y/e.maxTextureSize),y=e.maxTextureSize);const w=new Float32Array(y*A*4*f),R=new ed(w,y,A,f);R.type=Qt,R.needsUpdate=!0;const _=T*4;for(let N=0;N<f;N++){const P=g[N],F=m[N],j=M[N],K=y*A*4*N;for(let k=0;k<P.count;k++){const X=k*_;p===!0&&(s.fromBufferAttribute(P,k),w[K+X+0]=s.x,w[K+X+1]=s.y,w[K+X+2]=s.z,w[K+X+3]=0),x===!0&&(s.fromBufferAttribute(F,k),w[K+X+4]=s.x,w[K+X+5]=s.y,w[K+X+6]=s.z,w[K+X+7]=0),v===!0&&(s.fromBufferAttribute(j,k),w[K+X+8]=s.x,w[K+X+9]=s.y,w[K+X+10]=s.z,w[K+X+11]=j.itemSize===4?s.w:1)}}u={count:f,texture:R,size:new Ce(y,A)},n.set(o,u),o.addEventListener("dispose",E)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)l.getUniforms().setValue(i,"morphTexture",a.morphTexture,t);else{let p=0;for(let v=0;v<d.length;v++)p+=d[v];const x=o.morphTargetsRelative?1:1-p;l.getUniforms().setValue(i,"morphTargetBaseInfluence",x),l.getUniforms().setValue(i,"morphTargetInfluences",d)}l.getUniforms().setValue(i,"morphTargetsTexture",u.texture,t),l.getUniforms().setValue(i,"morphTargetsTextureSize",u.size)}return{update:r}}function zg(i,e,t,n,s){let r=new WeakMap;function a(d){const h=s.render.frame,f=d.geometry,u=e.get(d,f);if(r.get(u)!==h&&(e.update(u),r.set(u,h)),d.isInstancedMesh&&(d.hasEventListener("dispose",l)===!1&&d.addEventListener("dispose",l),r.get(d)!==h&&(t.update(d.instanceMatrix,i.ARRAY_BUFFER),d.instanceColor!==null&&t.update(d.instanceColor,i.ARRAY_BUFFER),r.set(d,h))),d.isSkinnedMesh){const p=d.skeleton;r.get(p)!==h&&(p.update(),r.set(p,h))}return u}function o(){r=new WeakMap}function l(d){const h=d.target;h.removeEventListener("dispose",l),n.releaseStatesOfObject(h),t.remove(h.instanceMatrix),h.instanceColor!==null&&t.remove(h.instanceColor)}return{update:a,dispose:o}}const Vg={[Fc]:"LINEAR_TONE_MAPPING",[Oc]:"REINHARD_TONE_MAPPING",[kc]:"CINEON_TONE_MAPPING",[Bc]:"ACES_FILMIC_TONE_MAPPING",[zc]:"AGX_TONE_MAPPING",[Vc]:"NEUTRAL_TONE_MAPPING",[Gc]:"CUSTOM_TONE_MAPPING"};function Hg(i,e,t,n,s,r){const a=new Sn(e,t,{type:i,depthBuffer:s,stencilBuffer:r,samples:n?4:0,depthTexture:s?new Hi(e,t):void 0}),o=new Sn(e,t,{type:Bn,depthBuffer:!1,stencilBuffer:!1}),l=new Ot;l.setAttribute("position",new It([-1,3,0,-1,-1,0,3,-1,0],3)),l.setAttribute("uv",new It([0,2,0,0,2,0],2));const d=new sf({uniforms:{tDiffuse:{value:null}},vertexShader:`
			precision highp float;

			uniform mat4 modelViewMatrix;
			uniform mat4 projectionMatrix;

			attribute vec3 position;
			attribute vec2 uv;

			varying vec2 vUv;

			void main() {
				vUv = uv;
				gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
			}`,fragmentShader:`
			precision highp float;

			uniform sampler2D tDiffuse;

			varying vec2 vUv;

			#include <tonemapping_pars_fragment>
			#include <colorspace_pars_fragment>

			void main() {
				gl_FragColor = texture2D( tDiffuse, vUv );

				#ifdef LINEAR_TONE_MAPPING
					gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );
				#elif defined( REINHARD_TONE_MAPPING )
					gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );
				#elif defined( CINEON_TONE_MAPPING )
					gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );
				#elif defined( ACES_FILMIC_TONE_MAPPING )
					gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );
				#elif defined( AGX_TONE_MAPPING )
					gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );
				#elif defined( NEUTRAL_TONE_MAPPING )
					gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );
				#elif defined( CUSTOM_TONE_MAPPING )
					gl_FragColor.rgb = CustomToneMapping( gl_FragColor.rgb );
				#endif

				#ifdef SRGB_TRANSFER
					gl_FragColor = sRGBTransferOETF( gl_FragColor );
				#endif
			}`,depthTest:!1,depthWrite:!1}),h=new jt(l,d),f=new yr(-1,1,1,-1,0,1);let u=null,p=null,x=!1,v,g=null,m=[],M=!1;this.setSize=function(T,y){a.setSize(T,y),o.setSize(T,y);for(let A=0;A<m.length;A++){const w=m[A];w.setSize&&w.setSize(T,y)}},this.setEffects=function(T){m=T,M=m.length>0&&m[0].isRenderPass===!0;const y=a.width,A=a.height;for(let w=0;w<m.length;w++){const R=m[w];R.setSize&&R.setSize(y,A)}},this.begin=function(T,y){if(x||T.toneMapping===yn&&m.length===0)return!1;if(g=y,y!==null){const A=y.width,w=y.height;(a.width!==A||a.height!==w)&&this.setSize(A,w)}return M===!1&&T.setRenderTarget(a),v=T.toneMapping,T.toneMapping=yn,!0},this.hasRenderPass=function(){return M},this.end=function(T,y){T.toneMapping=v,x=!0;let A=a,w=o;for(let R=0;R<m.length;R++){const _=m[R];if(_.enabled!==!1&&(_.render(T,w,A,y),_.needsSwap!==!1)){const E=A;A=w,w=E}}if(u!==T.outputColorSpace||p!==T.toneMapping){u=T.outputColorSpace,p=T.toneMapping,d.defines={},je.getTransfer(u)===Je&&(d.defines.SRGB_TRANSFER="");const R=Vg[p];R&&(d.defines[R]=""),d.needsUpdate=!0}d.uniforms.tDiffuse.value=A.texture,T.setRenderTarget(g),T.render(h,f),g=null,x=!1},this.isCompositing=function(){return x},this.dispose=function(){a.depthTexture&&a.depthTexture.dispose(),a.dispose(),o.dispose(),l.dispose(),d.dispose()}}const xd=new Ct,lo=new Hi(1,1),_d=new ed,bd=new Au,vd=new od,lc=[],cc=[],dc=new Float32Array(16),hc=new Float32Array(9),uc=new Float32Array(4);function Ki(i,e,t){const n=i[0];if(n<=0||n>0)return i;const s=e*t;let r=lc[s];if(r===void 0&&(r=new Float32Array(s),lc[s]=r),e!==0){n.toArray(r,0);for(let a=1,o=0;a!==e;++a)o+=t,i[a].toArray(r,o)}return r}function wt(i,e){if(i.length!==e.length)return!1;for(let t=0,n=i.length;t<n;t++)if(i[t]!==e[t])return!1;return!0}function Tt(i,e){for(let t=0,n=e.length;t<n;t++)i[t]=e[t]}function Mr(i,e){let t=cc[e];t===void 0&&(t=new Int32Array(e),cc[e]=t);for(let n=0;n!==e;++n)t[n]=i.allocateTextureUnit();return t}function jg(i,e){const t=this.cache;t[0]!==e&&(i.uniform1f(this.addr,e),t[0]=e)}function Wg(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(wt(t,e))return;i.uniform2fv(this.addr,e),Tt(t,e)}}function Xg(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(i.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(wt(t,e))return;i.uniform3fv(this.addr,e),Tt(t,e)}}function qg(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(wt(t,e))return;i.uniform4fv(this.addr,e),Tt(t,e)}}function Yg(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(wt(t,e))return;i.uniformMatrix2fv(this.addr,!1,e),Tt(t,e)}else{if(wt(t,n))return;uc.set(n),i.uniformMatrix2fv(this.addr,!1,uc),Tt(t,n)}}function Kg(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(wt(t,e))return;i.uniformMatrix3fv(this.addr,!1,e),Tt(t,e)}else{if(wt(t,n))return;hc.set(n),i.uniformMatrix3fv(this.addr,!1,hc),Tt(t,n)}}function $g(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(wt(t,e))return;i.uniformMatrix4fv(this.addr,!1,e),Tt(t,e)}else{if(wt(t,n))return;dc.set(n),i.uniformMatrix4fv(this.addr,!1,dc),Tt(t,n)}}function Zg(i,e){const t=this.cache;t[0]!==e&&(i.uniform1i(this.addr,e),t[0]=e)}function Jg(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(wt(t,e))return;i.uniform2iv(this.addr,e),Tt(t,e)}}function Qg(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(wt(t,e))return;i.uniform3iv(this.addr,e),Tt(t,e)}}function ex(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(wt(t,e))return;i.uniform4iv(this.addr,e),Tt(t,e)}}function tx(i,e){const t=this.cache;t[0]!==e&&(i.uniform1ui(this.addr,e),t[0]=e)}function nx(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(wt(t,e))return;i.uniform2uiv(this.addr,e),Tt(t,e)}}function ix(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(wt(t,e))return;i.uniform3uiv(this.addr,e),Tt(t,e)}}function sx(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(wt(t,e))return;i.uniform4uiv(this.addr,e),Tt(t,e)}}function rx(i,e,t){const n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let r;this.type===i.SAMPLER_2D_SHADOW?(lo.compareFunction=t.isReversedDepthBuffer()?So:yo,r=lo):r=xd,t.setTexture2D(e||r,s)}function ax(i,e,t){const n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTexture3D(e||bd,s)}function ox(i,e,t){const n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTextureCube(e||vd,s)}function lx(i,e,t){const n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTexture2DArray(e||_d,s)}function cx(i){switch(i){case 5126:return jg;case 35664:return Wg;case 35665:return Xg;case 35666:return qg;case 35674:return Yg;case 35675:return Kg;case 35676:return $g;case 5124:case 35670:return Zg;case 35667:case 35671:return Jg;case 35668:case 35672:return Qg;case 35669:case 35673:return ex;case 5125:return tx;case 36294:return nx;case 36295:return ix;case 36296:return sx;case 35678:case 36198:case 36298:case 36306:case 35682:return rx;case 35679:case 36299:case 36307:return ax;case 35680:case 36300:case 36308:case 36293:return ox;case 36289:case 36303:case 36311:case 36292:return lx}}function dx(i,e){i.uniform1fv(this.addr,e)}function hx(i,e){const t=Ki(e,this.size,2);i.uniform2fv(this.addr,t)}function ux(i,e){const t=Ki(e,this.size,3);i.uniform3fv(this.addr,t)}function fx(i,e){const t=Ki(e,this.size,4);i.uniform4fv(this.addr,t)}function px(i,e){const t=Ki(e,this.size,4);i.uniformMatrix2fv(this.addr,!1,t)}function mx(i,e){const t=Ki(e,this.size,9);i.uniformMatrix3fv(this.addr,!1,t)}function gx(i,e){const t=Ki(e,this.size,16);i.uniformMatrix4fv(this.addr,!1,t)}function xx(i,e){i.uniform1iv(this.addr,e)}function _x(i,e){i.uniform2iv(this.addr,e)}function bx(i,e){i.uniform3iv(this.addr,e)}function vx(i,e){i.uniform4iv(this.addr,e)}function yx(i,e){i.uniform1uiv(this.addr,e)}function Sx(i,e){i.uniform2uiv(this.addr,e)}function Mx(i,e){i.uniform3uiv(this.addr,e)}function Ex(i,e){i.uniform4uiv(this.addr,e)}function wx(i,e,t){const n=this.cache,s=e.length,r=Mr(t,s);wt(n,r)||(i.uniform1iv(this.addr,r),Tt(n,r));let a;this.type===i.SAMPLER_2D_SHADOW?a=lo:a=xd;for(let o=0;o!==s;++o)t.setTexture2D(e[o]||a,r[o])}function Tx(i,e,t){const n=this.cache,s=e.length,r=Mr(t,s);wt(n,r)||(i.uniform1iv(this.addr,r),Tt(n,r));for(let a=0;a!==s;++a)t.setTexture3D(e[a]||bd,r[a])}function Ax(i,e,t){const n=this.cache,s=e.length,r=Mr(t,s);wt(n,r)||(i.uniform1iv(this.addr,r),Tt(n,r));for(let a=0;a!==s;++a)t.setTextureCube(e[a]||vd,r[a])}function Rx(i,e,t){const n=this.cache,s=e.length,r=Mr(t,s);wt(n,r)||(i.uniform1iv(this.addr,r),Tt(n,r));for(let a=0;a!==s;++a)t.setTexture2DArray(e[a]||_d,r[a])}function Cx(i){switch(i){case 5126:return dx;case 35664:return hx;case 35665:return ux;case 35666:return fx;case 35674:return px;case 35675:return mx;case 35676:return gx;case 5124:case 35670:return xx;case 35667:case 35671:return _x;case 35668:case 35672:return bx;case 35669:case 35673:return vx;case 5125:return yx;case 36294:return Sx;case 36295:return Mx;case 36296:return Ex;case 35678:case 36198:case 36298:case 36306:case 35682:return wx;case 35679:case 36299:case 36307:return Tx;case 35680:case 36300:case 36308:case 36293:return Ax;case 36289:case 36303:case 36311:case 36292:return Rx}}class Nx{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=cx(t.type)}}class Px{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=Cx(t.type)}}class Ix{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){const s=this.seq;for(let r=0,a=s.length;r!==a;++r){const o=s[r];o.setValue(e,t[o.id],n)}}}const la=/(\w+)(\])?(\[|\.)?/g;function fc(i,e){i.seq.push(e),i.map[e.id]=e}function Dx(i,e,t){const n=i.name,s=n.length;for(la.lastIndex=0;;){const r=la.exec(n),a=la.lastIndex;let o=r[1];const l=r[2]==="]",d=r[3];if(l&&(o=o|0),d===void 0||d==="["&&a+2===s){fc(t,d===void 0?new Nx(o,i,e):new Px(o,i,e));break}else{let f=t.map[o];f===void 0&&(f=new Ix(o),fc(t,f)),t=f}}}class or{constructor(e,t){this.seq=[],this.map={};const n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let a=0;a<n;++a){const o=e.getActiveUniform(t,a),l=e.getUniformLocation(t,o.name);Dx(o,l,this)}const s=[],r=[];for(const a of this.seq)a.type===e.SAMPLER_2D_SHADOW||a.type===e.SAMPLER_CUBE_SHADOW||a.type===e.SAMPLER_2D_ARRAY_SHADOW?s.push(a):r.push(a);s.length>0&&(this.seq=s.concat(r))}setValue(e,t,n,s){const r=this.map[t];r!==void 0&&r.setValue(e,n,s)}setOptional(e,t,n){const s=t[n];s!==void 0&&this.setValue(e,n,s)}static upload(e,t,n,s){for(let r=0,a=t.length;r!==a;++r){const o=t[r],l=n[o.id];l.needsUpdate!==!1&&o.setValue(e,l.value,s)}}static seqWithValue(e,t){const n=[];for(let s=0,r=e.length;s!==r;++s){const a=e[s];a.id in t&&n.push(a)}return n}}function pc(i,e,t){const n=i.createShader(e);return i.shaderSource(n,t),i.compileShader(n),n}const Lx=37297;let Ux=0;function Fx(i,e){const t=i.split(`
`),n=[],s=Math.max(e-6,0),r=Math.min(e+6,t.length);for(let a=s;a<r;a++){const o=a+1;n.push(`${o===e?">":" "} ${o}: ${t[a]}`)}return n.join(`
`)}const mc=new Ue;function Ox(i){je._getMatrix(mc,je.workingColorSpace,i);const e=`mat3( ${mc.elements.map(t=>t.toFixed(4))} )`;switch(je.getTransfer(i)){case hr:return[e,"LinearTransferOETF"];case Je:return[e,"sRGBTransferOETF"];default:return Me("WebGLProgram: Unsupported color space: ",i),[e,"LinearTransferOETF"]}}function gc(i,e,t){const n=i.getShaderParameter(e,i.COMPILE_STATUS),r=(i.getShaderInfoLog(e)||"").trim();if(n&&r==="")return"";const a=/ERROR: 0:(\d+)/.exec(r);if(a){const o=parseInt(a[1]);return t.toUpperCase()+`

`+r+`

`+Fx(i.getShaderSource(e),o)}else return r}function kx(i,e){const t=Ox(e);return[`vec4 ${i}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}const Bx={[Fc]:"Linear",[Oc]:"Reinhard",[kc]:"Cineon",[Bc]:"ACESFilmic",[zc]:"AgX",[Vc]:"Neutral",[Gc]:"Custom"};function Gx(i,e){const t=Bx[e];return t===void 0?(Me("WebGLProgram: Unsupported toneMapping:",e),"vec3 "+i+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+i+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const Qs=new D;function zx(){je.getLuminanceCoefficients(Qs);const i=Qs.x.toFixed(4),e=Qs.y.toFixed(4),t=Qs.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function Vx(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(cs).join(`
`)}function Hx(i){const e=[];for(const t in i){const n=i[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function jx(i,e){const t={},n=i.getProgramParameter(e,i.ACTIVE_ATTRIBUTES);for(let s=0;s<n;s++){const r=i.getActiveAttrib(e,s),a=r.name;let o=1;r.type===i.FLOAT_MAT2&&(o=2),r.type===i.FLOAT_MAT3&&(o=3),r.type===i.FLOAT_MAT4&&(o=4),t[a]={type:r.type,location:i.getAttribLocation(e,a),locationSize:o}}return t}function cs(i){return i!==""}function xc(i,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function _c(i,e){return i.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const Wx=/^[ \t]*#include +<([\w\d./]+)>/gm;function co(i){return i.replace(Wx,qx)}const Xx=new Map;function qx(i,e){let t=Be[e];if(t===void 0){const n=Xx.get(e);if(n!==void 0)t=Be[n],Me('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,n);else throw new Error("THREE.WebGLProgram: Can not resolve #include <"+e+">")}return co(t)}const Yx=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function bc(i){return i.replace(Yx,Kx)}function Kx(i,e,t,n){let s="";for(let r=parseInt(e);r<parseInt(t);r++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function vc(i){let e=`precision ${i.precision} float;
	precision ${i.precision} int;
	precision ${i.precision} sampler2D;
	precision ${i.precision} samplerCube;
	precision ${i.precision} sampler3D;
	precision ${i.precision} sampler2DArray;
	precision ${i.precision} sampler2DShadow;
	precision ${i.precision} samplerCubeShadow;
	precision ${i.precision} sampler2DArrayShadow;
	precision ${i.precision} isampler2D;
	precision ${i.precision} isampler3D;
	precision ${i.precision} isamplerCube;
	precision ${i.precision} isampler2DArray;
	precision ${i.precision} usampler2D;
	precision ${i.precision} usampler3D;
	precision ${i.precision} usamplerCube;
	precision ${i.precision} usampler2DArray;
	`;return i.precision==="highp"?e+=`
#define HIGH_PRECISION`:i.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:i.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}const $x={[tr]:"SHADOWMAP_TYPE_PCF",[os]:"SHADOWMAP_TYPE_VSM"};function Zx(i){return $x[i.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}const Jx={[fi]:"ENVMAP_TYPE_CUBE",[Gi]:"ENVMAP_TYPE_CUBE",[xr]:"ENVMAP_TYPE_CUBE_UV"};function Qx(i){return i.envMap===!1?"ENVMAP_TYPE_CUBE":Jx[i.envMapMode]||"ENVMAP_TYPE_CUBE"}const e0={[Gi]:"ENVMAP_MODE_REFRACTION"};function t0(i){return i.envMap===!1?"ENVMAP_MODE_REFLECTION":e0[i.envMapMode]||"ENVMAP_MODE_REFLECTION"}const n0={[Uc]:"ENVMAP_BLENDING_MULTIPLY",[Vh]:"ENVMAP_BLENDING_MIX",[Hh]:"ENVMAP_BLENDING_ADD"};function i0(i){return i.envMap===!1?"ENVMAP_BLENDING_NONE":n0[i.combine]||"ENVMAP_BLENDING_NONE"}function s0(i){const e=i.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:n,maxMip:t}}function r0(i,e,t,n){const s=i.getContext(),r=t.defines;let a=t.vertexShader,o=t.fragmentShader;const l=Zx(t),d=Qx(t),h=t0(t),f=i0(t),u=s0(t),p=Vx(t),x=Hx(r),v=s.createProgram();let g,m,M=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(g=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,x].filter(cs).join(`
`),g.length>0&&(g+=`
`),m=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,x].filter(cs).join(`
`),m.length>0&&(m+=`
`)):(g=[vc(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,x,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+h:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexNormals?"#define HAS_NORMAL":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(cs).join(`
`),m=[vc(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,x,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+d:"",t.envMap?"#define "+h:"",t.envMap?"#define "+f:"",u?"#define CUBEUV_TEXEL_WIDTH "+u.texelWidth:"",u?"#define CUBEUV_TEXEL_HEIGHT "+u.texelHeight:"",u?"#define CUBEUV_MAX_MIP "+u.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas||t.batchingColor?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.numLightProbeGrids>0?"#define USE_LIGHT_PROBES_GRID":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==yn?"#define TONE_MAPPING":"",t.toneMapping!==yn?Be.tonemapping_pars_fragment:"",t.toneMapping!==yn?Gx("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",Be.colorspace_pars_fragment,kx("linearToOutputTexel",t.outputColorSpace),zx(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(cs).join(`
`)),a=co(a),a=xc(a,t),a=_c(a,t),o=co(o),o=xc(o,t),o=_c(o,t),a=bc(a),o=bc(o),t.isRawShaderMaterial!==!0&&(M=`#version 300 es
`,g=[p,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+g,m=["#define varying in",t.glslVersion===ml?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===ml?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+m);const T=M+g+a,y=M+m+o,A=pc(s,s.VERTEX_SHADER,T),w=pc(s,s.FRAGMENT_SHADER,y);s.attachShader(v,A),s.attachShader(v,w),t.index0AttributeName!==void 0?s.bindAttribLocation(v,0,t.index0AttributeName):t.hasPositionAttribute===!0&&s.bindAttribLocation(v,0,"position"),s.linkProgram(v);function R(P){if(i.debug.checkShaderErrors){const F=s.getProgramInfoLog(v)||"",j=s.getShaderInfoLog(A)||"",K=s.getShaderInfoLog(w)||"",k=F.trim(),X=j.trim(),W=K.trim();let Q=!0,V=!0;if(s.getProgramParameter(v,s.LINK_STATUS)===!1)if(Q=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(s,v,A,w);else{const ee=gc(s,A,"vertex"),se=gc(s,w,"fragment");De("WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(v,s.VALIDATE_STATUS)+`

Material Name: `+P.name+`
Material Type: `+P.type+`

Program Info Log: `+k+`
`+ee+`
`+se)}else k!==""?Me("WebGLProgram: Program Info Log:",k):(X===""||W==="")&&(V=!1);V&&(P.diagnostics={runnable:Q,programLog:k,vertexShader:{log:X,prefix:g},fragmentShader:{log:W,prefix:m}})}s.deleteShader(A),s.deleteShader(w),_=new or(s,v),E=jx(s,v)}let _;this.getUniforms=function(){return _===void 0&&R(this),_};let E;this.getAttributes=function(){return E===void 0&&R(this),E};let N=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return N===!1&&(N=s.getProgramParameter(v,Lx)),N},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(v),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=Ux++,this.cacheKey=e,this.usedTimes=1,this.program=v,this.vertexShader=A,this.fragmentShader=w,this}let a0=0;class o0{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e,t,n){const s=this._getShaderCacheForMaterial(e);return s.has(t)===!1&&(s.add(t),t.usedTimes++),s.has(n)===!1&&(s.add(n),n.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderStage(e){return this._getShaderStage(e.vertexShader)}getFragmentShaderStage(e){return this._getShaderStage(e.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){const t=this.shaderCache;let n=t.get(e);return n===void 0&&(n=new l0(e),t.set(e,n)),n}}class l0{constructor(e){this.id=a0++,this.code=e,this.usedTimes=0}}function c0(i){return i===pi||i===cr||i===dr}function d0(i,e,t,n,s,r){const a=new td,o=new o0,l=new Set,d=[],h=new Map,f=n.logarithmicDepthBuffer;let u=n.precision;const p={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function x(_){return l.add(_),_===0?"uv":`uv${_}`}function v(_,E,N,P,F,j){const K=P.fog,k=F.geometry,X=_.isMeshStandardMaterial||_.isMeshLambertMaterial||_.isMeshPhongMaterial?P.environment:null,W=_.isMeshStandardMaterial||_.isMeshLambertMaterial&&!_.envMap||_.isMeshPhongMaterial&&!_.envMap,Q=e.get(_.envMap||X,W),V=Q&&Q.mapping===xr?Q.image.height:null,ee=p[_.type];_.precision!==null&&(u=n.getMaxPrecision(_.precision),u!==_.precision&&Me("WebGLProgram.getParameters:",_.precision,"not supported, using",u,"instead."));const se=k.morphAttributes.position||k.morphAttributes.normal||k.morphAttributes.color,ge=se!==void 0?se.length:0;let Xe=0;k.morphAttributes.position!==void 0&&(Xe=1),k.morphAttributes.normal!==void 0&&(Xe=2),k.morphAttributes.color!==void 0&&(Xe=3);let dt,Ke,J,ae;if(ee){const ve=xn[ee];dt=ve.vertexShader,Ke=ve.fragmentShader}else{dt=_.vertexShader,Ke=_.fragmentShader;const ve=o.getVertexShaderStage(_),ut=o.getFragmentShaderStage(_);o.update(_,ve,ut),J=ve.id,ae=ut.id}const ne=i.getRenderTarget(),Le=i.state.buffers.depth.getReversed(),Fe=F.isInstancedMesh===!0,Ne=F.isBatchedMesh===!0,pt=!!_.map,We=!!_.matcap,st=!!Q,$e=!!_.aoMap,qe=!!_.lightMap,_t=!!_.bumpMap&&_.wireframe===!1,yt=!!_.normalMap,At=!!_.displacementMap,Nt=!!_.emissiveMap,ht=!!_.metalnessMap,bt=!!_.roughnessMap,L=_.anisotropy>0,zt=_.clearcoat>0,Ze=_.dispersion>0,C=_.iridescence>0,b=_.sheen>0,O=_.transmission>0,z=L&&!!_.anisotropyMap,q=zt&&!!_.clearcoatMap,ie=zt&&!!_.clearcoatNormalMap,oe=zt&&!!_.clearcoatRoughnessMap,Y=C&&!!_.iridescenceMap,Z=C&&!!_.iridescenceThicknessMap,le=b&&!!_.sheenColorMap,we=b&&!!_.sheenRoughnessMap,he=!!_.specularMap,ce=!!_.specularColorMap,Re=!!_.specularIntensityMap,Pe=O&&!!_.transmissionMap,Oe=O&&!!_.thicknessMap,I=!!_.gradientMap,re=!!_.alphaMap,$=_.alphaTest>0,de=!!_.alphaHash,me=!!_.extensions;let te=yn;_.toneMapped&&(ne===null||ne.isXRRenderTarget===!0)&&(te=i.toneMapping);const Ee={shaderID:ee,shaderType:_.type,shaderName:_.name,vertexShader:dt,fragmentShader:Ke,defines:_.defines,customVertexShaderID:J,customFragmentShaderID:ae,isRawShaderMaterial:_.isRawShaderMaterial===!0,glslVersion:_.glslVersion,precision:u,batching:Ne,batchingColor:Ne&&F._colorsTexture!==null,instancing:Fe,instancingColor:Fe&&F.instanceColor!==null,instancingMorph:Fe&&F.morphTexture!==null,outputColorSpace:ne===null?i.outputColorSpace:ne.isXRRenderTarget===!0?ne.texture.colorSpace:je.workingColorSpace,alphaToCoverage:!!_.alphaToCoverage,map:pt,matcap:We,envMap:st,envMapMode:st&&Q.mapping,envMapCubeUVHeight:V,aoMap:$e,lightMap:qe,bumpMap:_t,normalMap:yt,displacementMap:At,emissiveMap:Nt,normalMapObjectSpace:yt&&_.normalMapType===Yh,normalMapTangentSpace:yt&&_.normalMapType===io,packedNormalMap:yt&&_.normalMapType===io&&c0(_.normalMap.format),metalnessMap:ht,roughnessMap:bt,anisotropy:L,anisotropyMap:z,clearcoat:zt,clearcoatMap:q,clearcoatNormalMap:ie,clearcoatRoughnessMap:oe,dispersion:Ze,iridescence:C,iridescenceMap:Y,iridescenceThicknessMap:Z,sheen:b,sheenColorMap:le,sheenRoughnessMap:we,specularMap:he,specularColorMap:ce,specularIntensityMap:Re,transmission:O,transmissionMap:Pe,thicknessMap:Oe,gradientMap:I,opaque:_.transparent===!1&&_.blending===Ui&&_.alphaToCoverage===!1,alphaMap:re,alphaTest:$,alphaHash:de,combine:_.combine,mapUv:pt&&x(_.map.channel),aoMapUv:$e&&x(_.aoMap.channel),lightMapUv:qe&&x(_.lightMap.channel),bumpMapUv:_t&&x(_.bumpMap.channel),normalMapUv:yt&&x(_.normalMap.channel),displacementMapUv:At&&x(_.displacementMap.channel),emissiveMapUv:Nt&&x(_.emissiveMap.channel),metalnessMapUv:ht&&x(_.metalnessMap.channel),roughnessMapUv:bt&&x(_.roughnessMap.channel),anisotropyMapUv:z&&x(_.anisotropyMap.channel),clearcoatMapUv:q&&x(_.clearcoatMap.channel),clearcoatNormalMapUv:ie&&x(_.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:oe&&x(_.clearcoatRoughnessMap.channel),iridescenceMapUv:Y&&x(_.iridescenceMap.channel),iridescenceThicknessMapUv:Z&&x(_.iridescenceThicknessMap.channel),sheenColorMapUv:le&&x(_.sheenColorMap.channel),sheenRoughnessMapUv:we&&x(_.sheenRoughnessMap.channel),specularMapUv:he&&x(_.specularMap.channel),specularColorMapUv:ce&&x(_.specularColorMap.channel),specularIntensityMapUv:Re&&x(_.specularIntensityMap.channel),transmissionMapUv:Pe&&x(_.transmissionMap.channel),thicknessMapUv:Oe&&x(_.thicknessMap.channel),alphaMapUv:re&&x(_.alphaMap.channel),vertexTangents:!!k.attributes.tangent&&(yt||L),vertexNormals:!!k.attributes.normal,vertexColors:_.vertexColors,vertexAlphas:_.vertexColors===!0&&!!k.attributes.color&&k.attributes.color.itemSize===4,pointsUvs:F.isPoints===!0&&!!k.attributes.uv&&(pt||re),fog:!!K,useFog:_.fog===!0,fogExp2:!!K&&K.isFogExp2,flatShading:_.wireframe===!1&&(_.flatShading===!0||k.attributes.normal===void 0&&yt===!1&&(_.isMeshLambertMaterial||_.isMeshPhongMaterial||_.isMeshStandardMaterial||_.isMeshPhysicalMaterial)),sizeAttenuation:_.sizeAttenuation===!0,logarithmicDepthBuffer:f,reversedDepthBuffer:Le,skinning:F.isSkinnedMesh===!0,hasPositionAttribute:k.attributes.position!==void 0,morphTargets:k.morphAttributes.position!==void 0,morphNormals:k.morphAttributes.normal!==void 0,morphColors:k.morphAttributes.color!==void 0,morphTargetsCount:ge,morphTextureStride:Xe,numDirLights:E.directional.length,numPointLights:E.point.length,numSpotLights:E.spot.length,numSpotLightMaps:E.spotLightMap.length,numRectAreaLights:E.rectArea.length,numHemiLights:E.hemi.length,numDirLightShadows:E.directionalShadowMap.length,numPointLightShadows:E.pointShadowMap.length,numSpotLightShadows:E.spotShadowMap.length,numSpotLightShadowsWithMaps:E.numSpotLightShadowsWithMaps,numLightProbes:E.numLightProbes,numLightProbeGrids:j.length,numClippingPlanes:r.numPlanes,numClipIntersection:r.numIntersection,dithering:_.dithering,shadowMapEnabled:i.shadowMap.enabled&&N.length>0,shadowMapType:i.shadowMap.type,toneMapping:te,decodeVideoTexture:pt&&_.map.isVideoTexture===!0&&je.getTransfer(_.map.colorSpace)===Je,decodeVideoTextureEmissive:Nt&&_.emissiveMap.isVideoTexture===!0&&je.getTransfer(_.emissiveMap.colorSpace)===Je,premultipliedAlpha:_.premultipliedAlpha,doubleSided:_.side===_n,flipSided:_.side===Ht,useDepthPacking:_.depthPacking>=0,depthPacking:_.depthPacking||0,index0AttributeName:_.index0AttributeName,extensionClipCullDistance:me&&_.extensions.clipCullDistance===!0&&t.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(me&&_.extensions.multiDraw===!0||Ne)&&t.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:t.has("KHR_parallel_shader_compile"),customProgramCacheKey:_.customProgramCacheKey()};return Ee.vertexUv1s=l.has(1),Ee.vertexUv2s=l.has(2),Ee.vertexUv3s=l.has(3),l.clear(),Ee}function g(_){const E=[];if(_.shaderID?E.push(_.shaderID):(E.push(_.customVertexShaderID),E.push(_.customFragmentShaderID)),_.defines!==void 0)for(const N in _.defines)E.push(N),E.push(_.defines[N]);return _.isRawShaderMaterial===!1&&(m(E,_),M(E,_),E.push(i.outputColorSpace)),E.push(_.customProgramCacheKey),E.join()}function m(_,E){_.push(E.precision),_.push(E.outputColorSpace),_.push(E.envMapMode),_.push(E.envMapCubeUVHeight),_.push(E.mapUv),_.push(E.alphaMapUv),_.push(E.lightMapUv),_.push(E.aoMapUv),_.push(E.bumpMapUv),_.push(E.normalMapUv),_.push(E.displacementMapUv),_.push(E.emissiveMapUv),_.push(E.metalnessMapUv),_.push(E.roughnessMapUv),_.push(E.anisotropyMapUv),_.push(E.clearcoatMapUv),_.push(E.clearcoatNormalMapUv),_.push(E.clearcoatRoughnessMapUv),_.push(E.iridescenceMapUv),_.push(E.iridescenceThicknessMapUv),_.push(E.sheenColorMapUv),_.push(E.sheenRoughnessMapUv),_.push(E.specularMapUv),_.push(E.specularColorMapUv),_.push(E.specularIntensityMapUv),_.push(E.transmissionMapUv),_.push(E.thicknessMapUv),_.push(E.combine),_.push(E.fogExp2),_.push(E.sizeAttenuation),_.push(E.morphTargetsCount),_.push(E.morphAttributeCount),_.push(E.numDirLights),_.push(E.numPointLights),_.push(E.numSpotLights),_.push(E.numSpotLightMaps),_.push(E.numHemiLights),_.push(E.numRectAreaLights),_.push(E.numDirLightShadows),_.push(E.numPointLightShadows),_.push(E.numSpotLightShadows),_.push(E.numSpotLightShadowsWithMaps),_.push(E.numLightProbes),_.push(E.shadowMapType),_.push(E.toneMapping),_.push(E.numClippingPlanes),_.push(E.numClipIntersection),_.push(E.depthPacking)}function M(_,E){a.disableAll(),E.instancing&&a.enable(0),E.instancingColor&&a.enable(1),E.instancingMorph&&a.enable(2),E.matcap&&a.enable(3),E.envMap&&a.enable(4),E.normalMapObjectSpace&&a.enable(5),E.normalMapTangentSpace&&a.enable(6),E.clearcoat&&a.enable(7),E.iridescence&&a.enable(8),E.alphaTest&&a.enable(9),E.vertexColors&&a.enable(10),E.vertexAlphas&&a.enable(11),E.vertexUv1s&&a.enable(12),E.vertexUv2s&&a.enable(13),E.vertexUv3s&&a.enable(14),E.vertexTangents&&a.enable(15),E.anisotropy&&a.enable(16),E.alphaHash&&a.enable(17),E.batching&&a.enable(18),E.dispersion&&a.enable(19),E.batchingColor&&a.enable(20),E.gradientMap&&a.enable(21),E.packedNormalMap&&a.enable(22),E.vertexNormals&&a.enable(23),_.push(a.mask),a.disableAll(),E.fog&&a.enable(0),E.useFog&&a.enable(1),E.flatShading&&a.enable(2),E.logarithmicDepthBuffer&&a.enable(3),E.reversedDepthBuffer&&a.enable(4),E.skinning&&a.enable(5),E.morphTargets&&a.enable(6),E.morphNormals&&a.enable(7),E.morphColors&&a.enable(8),E.premultipliedAlpha&&a.enable(9),E.shadowMapEnabled&&a.enable(10),E.doubleSided&&a.enable(11),E.flipSided&&a.enable(12),E.useDepthPacking&&a.enable(13),E.dithering&&a.enable(14),E.transmission&&a.enable(15),E.sheen&&a.enable(16),E.opaque&&a.enable(17),E.pointsUvs&&a.enable(18),E.decodeVideoTexture&&a.enable(19),E.decodeVideoTextureEmissive&&a.enable(20),E.alphaToCoverage&&a.enable(21),E.numLightProbeGrids>0&&a.enable(22),E.hasPositionAttribute&&a.enable(23),_.push(a.mask)}function T(_){const E=p[_.type];let N;if(E){const P=xn[E];N=ef.clone(P.uniforms)}else N=_.uniforms;return N}function y(_,E){let N=h.get(E);return N!==void 0?++N.usedTimes:(N=new r0(i,E,_,s),d.push(N),h.set(E,N)),N}function A(_){if(--_.usedTimes===0){const E=d.indexOf(_);d[E]=d[d.length-1],d.pop(),h.delete(_.cacheKey),_.destroy()}}function w(_){o.remove(_)}function R(){o.dispose()}return{getParameters:v,getProgramCacheKey:g,getUniforms:T,acquireProgram:y,releaseProgram:A,releaseShaderCache:w,programs:d,dispose:R}}function h0(){let i=new WeakMap;function e(a){return i.has(a)}function t(a){let o=i.get(a);return o===void 0&&(o={},i.set(a,o)),o}function n(a){i.delete(a)}function s(a,o,l){i.get(a)[o]=l}function r(){i=new WeakMap}return{has:e,get:t,remove:n,update:s,dispose:r}}function u0(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.material.id!==e.material.id?i.material.id-e.material.id:i.materialVariant!==e.materialVariant?i.materialVariant-e.materialVariant:i.z!==e.z?i.z-e.z:i.id-e.id}function yc(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.z!==e.z?e.z-i.z:i.id-e.id}function Sc(){const i=[];let e=0;const t=[],n=[],s=[];function r(){e=0,t.length=0,n.length=0,s.length=0}function a(u){let p=0;return u.isInstancedMesh&&(p+=2),u.isSkinnedMesh&&(p+=1),p}function o(u,p,x,v,g,m){let M=i[e];return M===void 0?(M={id:u.id,object:u,geometry:p,material:x,materialVariant:a(u),groupOrder:v,renderOrder:u.renderOrder,z:g,group:m},i[e]=M):(M.id=u.id,M.object=u,M.geometry=p,M.material=x,M.materialVariant=a(u),M.groupOrder=v,M.renderOrder=u.renderOrder,M.z=g,M.group=m),e++,M}function l(u,p,x,v,g,m){const M=o(u,p,x,v,g,m);x.transmission>0?n.push(M):x.transparent===!0?s.push(M):t.push(M)}function d(u,p,x,v,g,m){const M=o(u,p,x,v,g,m);x.transmission>0?n.unshift(M):x.transparent===!0?s.unshift(M):t.unshift(M)}function h(u,p,x){t.length>1&&t.sort(u||u0),n.length>1&&n.sort(p||yc),s.length>1&&s.sort(p||yc),x&&(t.reverse(),n.reverse(),s.reverse())}function f(){for(let u=e,p=i.length;u<p;u++){const x=i[u];if(x.id===null)break;x.id=null,x.object=null,x.geometry=null,x.material=null,x.group=null}}return{opaque:t,transmissive:n,transparent:s,init:r,push:l,unshift:d,finish:f,sort:h}}function f0(){let i=new WeakMap;function e(n,s){const r=i.get(n);let a;return r===void 0?(a=new Sc,i.set(n,[a])):s>=r.length?(a=new Sc,r.push(a)):a=r[s],a}function t(){i=new WeakMap}return{get:e,dispose:t}}function p0(){const i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new D,color:new Ie};break;case"SpotLight":t={position:new D,direction:new D,color:new Ie,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new D,color:new Ie,distance:0,decay:0};break;case"HemisphereLight":t={direction:new D,skyColor:new Ie,groundColor:new Ie};break;case"RectAreaLight":t={color:new Ie,position:new D,halfWidth:new D,halfHeight:new D};break}return i[e.id]=t,t}}}function m0(){const i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ce};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ce};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ce,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[e.id]=t,t}}}let g0=0;function x0(i,e){return(e.castShadow?2:0)-(i.castShadow?2:0)+(e.map?1:0)-(i.map?1:0)}function _0(i){const e=new p0,t=m0(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let d=0;d<9;d++)n.probe.push(new D);const s=new D,r=new Ge,a=new Ge;function o(d){let h=0,f=0,u=0;for(let E=0;E<9;E++)n.probe[E].set(0,0,0);let p=0,x=0,v=0,g=0,m=0,M=0,T=0,y=0,A=0,w=0,R=0;d.sort(x0);for(let E=0,N=d.length;E<N;E++){const P=d[E],F=P.color,j=P.intensity,K=P.distance;let k=null;if(P.shadow&&P.shadow.map&&(P.shadow.map.texture.format===pi?k=P.shadow.map.texture:k=P.shadow.map.depthTexture||P.shadow.map.texture),P.isAmbientLight)h+=F.r*j,f+=F.g*j,u+=F.b*j;else if(P.isLightProbe){for(let X=0;X<9;X++)n.probe[X].addScaledVector(P.sh.coefficients[X],j);R++}else if(P.isDirectionalLight){const X=e.get(P);if(X.color.copy(P.color).multiplyScalar(P.intensity),P.castShadow){const W=P.shadow,Q=t.get(P);Q.shadowIntensity=W.intensity,Q.shadowBias=W.bias,Q.shadowNormalBias=W.normalBias,Q.shadowRadius=W.radius,Q.shadowMapSize=W.mapSize,n.directionalShadow[p]=Q,n.directionalShadowMap[p]=k,n.directionalShadowMatrix[p]=P.shadow.matrix,M++}n.directional[p]=X,p++}else if(P.isSpotLight){const X=e.get(P);X.position.setFromMatrixPosition(P.matrixWorld),X.color.copy(F).multiplyScalar(j),X.distance=K,X.coneCos=Math.cos(P.angle),X.penumbraCos=Math.cos(P.angle*(1-P.penumbra)),X.decay=P.decay,n.spot[v]=X;const W=P.shadow;if(P.map&&(n.spotLightMap[A]=P.map,A++,W.updateMatrices(P),P.castShadow&&w++),n.spotLightMatrix[v]=W.matrix,P.castShadow){const Q=t.get(P);Q.shadowIntensity=W.intensity,Q.shadowBias=W.bias,Q.shadowNormalBias=W.normalBias,Q.shadowRadius=W.radius,Q.shadowMapSize=W.mapSize,n.spotShadow[v]=Q,n.spotShadowMap[v]=k,y++}v++}else if(P.isRectAreaLight){const X=e.get(P);X.color.copy(F).multiplyScalar(j),X.halfWidth.set(P.width*.5,0,0),X.halfHeight.set(0,P.height*.5,0),n.rectArea[g]=X,g++}else if(P.isPointLight){const X=e.get(P);if(X.color.copy(P.color).multiplyScalar(P.intensity),X.distance=P.distance,X.decay=P.decay,P.castShadow){const W=P.shadow,Q=t.get(P);Q.shadowIntensity=W.intensity,Q.shadowBias=W.bias,Q.shadowNormalBias=W.normalBias,Q.shadowRadius=W.radius,Q.shadowMapSize=W.mapSize,Q.shadowCameraNear=W.camera.near,Q.shadowCameraFar=W.camera.far,n.pointShadow[x]=Q,n.pointShadowMap[x]=k,n.pointShadowMatrix[x]=P.shadow.matrix,T++}n.point[x]=X,x++}else if(P.isHemisphereLight){const X=e.get(P);X.skyColor.copy(P.color).multiplyScalar(j),X.groundColor.copy(P.groundColor).multiplyScalar(j),n.hemi[m]=X,m++}}g>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=ue.LTC_FLOAT_1,n.rectAreaLTC2=ue.LTC_FLOAT_2):(n.rectAreaLTC1=ue.LTC_HALF_1,n.rectAreaLTC2=ue.LTC_HALF_2)),n.ambient[0]=h,n.ambient[1]=f,n.ambient[2]=u;const _=n.hash;(_.directionalLength!==p||_.pointLength!==x||_.spotLength!==v||_.rectAreaLength!==g||_.hemiLength!==m||_.numDirectionalShadows!==M||_.numPointShadows!==T||_.numSpotShadows!==y||_.numSpotMaps!==A||_.numLightProbes!==R)&&(n.directional.length=p,n.spot.length=v,n.rectArea.length=g,n.point.length=x,n.hemi.length=m,n.directionalShadow.length=M,n.directionalShadowMap.length=M,n.pointShadow.length=T,n.pointShadowMap.length=T,n.spotShadow.length=y,n.spotShadowMap.length=y,n.directionalShadowMatrix.length=M,n.pointShadowMatrix.length=T,n.spotLightMatrix.length=y+A-w,n.spotLightMap.length=A,n.numSpotLightShadowsWithMaps=w,n.numLightProbes=R,_.directionalLength=p,_.pointLength=x,_.spotLength=v,_.rectAreaLength=g,_.hemiLength=m,_.numDirectionalShadows=M,_.numPointShadows=T,_.numSpotShadows=y,_.numSpotMaps=A,_.numLightProbes=R,n.version=g0++)}function l(d,h){let f=0,u=0,p=0,x=0,v=0;const g=h.matrixWorldInverse;for(let m=0,M=d.length;m<M;m++){const T=d[m];if(T.isDirectionalLight){const y=n.directional[f];y.direction.setFromMatrixPosition(T.matrixWorld),s.setFromMatrixPosition(T.target.matrixWorld),y.direction.sub(s),y.direction.transformDirection(g),f++}else if(T.isSpotLight){const y=n.spot[p];y.position.setFromMatrixPosition(T.matrixWorld),y.position.applyMatrix4(g),y.direction.setFromMatrixPosition(T.matrixWorld),s.setFromMatrixPosition(T.target.matrixWorld),y.direction.sub(s),y.direction.transformDirection(g),p++}else if(T.isRectAreaLight){const y=n.rectArea[x];y.position.setFromMatrixPosition(T.matrixWorld),y.position.applyMatrix4(g),a.identity(),r.copy(T.matrixWorld),r.premultiply(g),a.extractRotation(r),y.halfWidth.set(T.width*.5,0,0),y.halfHeight.set(0,T.height*.5,0),y.halfWidth.applyMatrix4(a),y.halfHeight.applyMatrix4(a),x++}else if(T.isPointLight){const y=n.point[u];y.position.setFromMatrixPosition(T.matrixWorld),y.position.applyMatrix4(g),u++}else if(T.isHemisphereLight){const y=n.hemi[v];y.direction.setFromMatrixPosition(T.matrixWorld),y.direction.transformDirection(g),v++}}}return{setup:o,setupView:l,state:n}}function Mc(i){const e=new _0(i),t=[],n=[],s=[];function r(u){f.camera=u,t.length=0,n.length=0,s.length=0}function a(u){t.push(u)}function o(u){n.push(u)}function l(u){s.push(u)}function d(){e.setup(t)}function h(u){e.setupView(t,u)}const f={lightsArray:t,shadowsArray:n,lightProbeGridArray:s,camera:null,lights:e,transmissionRenderTarget:{},textureUnits:0};return{init:r,state:f,setupLights:d,setupLightsView:h,pushLight:a,pushShadow:o,pushLightProbeGrid:l}}function b0(i){let e=new WeakMap;function t(s,r=0){const a=e.get(s);let o;return a===void 0?(o=new Mc(i),e.set(s,[o])):r>=a.length?(o=new Mc(i),a.push(o)):o=a[r],o}function n(){e=new WeakMap}return{get:t,dispose:n}}const v0=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,y0=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ).rg;
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ).r;
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( max( 0.0, squared_mean - mean * mean ) );
	gl_FragColor = vec4( mean, std_dev, 0.0, 1.0 );
}`,S0=[new D(1,0,0),new D(-1,0,0),new D(0,1,0),new D(0,-1,0),new D(0,0,1),new D(0,0,-1)],M0=[new D(0,-1,0),new D(0,-1,0),new D(0,0,1),new D(0,0,-1),new D(0,-1,0),new D(0,-1,0)],Ec=new Ge,rs=new D,ca=new D;function E0(i,e,t){let n=new Co;const s=new Ce,r=new Ce,a=new it,o=new rf,l=new af,d={},h=t.maxTextureSize,f={[kn]:Ht,[Ht]:kn,[_n]:_n},u=new En({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Ce},radius:{value:4}},vertexShader:v0,fragmentShader:y0}),p=u.clone();p.defines.HORIZONTAL_PASS=1;const x=new Ot;x.setAttribute("position",new Ft(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const v=new jt(x,u),g=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=tr;let m=this.type;this.render=function(w,R,_){if(g.enabled===!1||g.autoUpdate===!1&&g.needsUpdate===!1||w.length===0)return;this.type===Lc&&(Me("WebGLShadowMap: PCFSoftShadowMap has been deprecated. Using PCFShadowMap instead."),this.type=tr);const E=i.getRenderTarget(),N=i.getActiveCubeFace(),P=i.getActiveMipmapLevel(),F=i.state;F.setBlending(Fn),F.buffers.depth.getReversed()===!0?F.buffers.color.setClear(0,0,0,0):F.buffers.color.setClear(1,1,1,1),F.buffers.depth.setTest(!0),F.setScissorTest(!1);const j=m!==this.type;j&&R.traverse(function(K){K.material&&(Array.isArray(K.material)?K.material.forEach(k=>k.needsUpdate=!0):K.material.needsUpdate=!0)});for(let K=0,k=w.length;K<k;K++){const X=w[K],W=X.shadow;if(W===void 0){Me("WebGLShadowMap:",X,"has no shadow.");continue}if(W.autoUpdate===!1&&W.needsUpdate===!1)continue;s.copy(W.mapSize);const Q=W.getFrameExtents();s.multiply(Q),r.copy(W.mapSize),(s.x>h||s.y>h)&&(s.x>h&&(r.x=Math.floor(h/Q.x),s.x=r.x*Q.x,W.mapSize.x=r.x),s.y>h&&(r.y=Math.floor(h/Q.y),s.y=r.y*Q.y,W.mapSize.y=r.y));const V=i.state.buffers.depth.getReversed();if(W.camera._reversedDepth=V,W.map===null||j===!0){if(W.map!==null&&(W.map.depthTexture!==null&&(W.map.depthTexture.dispose(),W.map.depthTexture=null),W.map.dispose()),this.type===os){if(X.isPointLight){Me("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}W.map=new Sn(s.x,s.y,{format:pi,type:Bn,minFilter:Et,magFilter:Et,generateMipmaps:!1}),W.map.texture.name=X.name+".shadowMap",W.map.depthTexture=new Hi(s.x,s.y,Qt),W.map.depthTexture.name=X.name+".shadowMapDepth",W.map.depthTexture.format=Gn,W.map.depthTexture.compareFunction=null,W.map.depthTexture.minFilter=Mt,W.map.depthTexture.magFilter=Mt}else X.isPointLight?(W.map=new gd(s.x),W.map.depthTexture=new Zu(s.x,Mn)):(W.map=new Sn(s.x,s.y),W.map.depthTexture=new Hi(s.x,s.y,Mn)),W.map.depthTexture.name=X.name+".shadowMap",W.map.depthTexture.format=Gn,this.type===tr?(W.map.depthTexture.compareFunction=V?So:yo,W.map.depthTexture.minFilter=Et,W.map.depthTexture.magFilter=Et):(W.map.depthTexture.compareFunction=null,W.map.depthTexture.minFilter=Mt,W.map.depthTexture.magFilter=Mt);W.camera.updateProjectionMatrix()}const ee=W.map.isWebGLCubeRenderTarget?6:1;for(let se=0;se<ee;se++){if(W.map.isWebGLCubeRenderTarget)i.setRenderTarget(W.map,se),i.clear();else{se===0&&(i.setRenderTarget(W.map),i.clear());const ge=W.getViewport(se);a.set(r.x*ge.x,r.y*ge.y,r.x*ge.z,r.y*ge.w),F.viewport(a)}if(X.isPointLight){const ge=W.camera,Xe=W.matrix,dt=X.distance||ge.far;dt!==ge.far&&(ge.far=dt,ge.updateProjectionMatrix()),rs.setFromMatrixPosition(X.matrixWorld),ge.position.copy(rs),ca.copy(ge.position),ca.add(S0[se]),ge.up.copy(M0[se]),ge.lookAt(ca),ge.updateMatrixWorld(),Xe.makeTranslation(-rs.x,-rs.y,-rs.z),Ec.multiplyMatrices(ge.projectionMatrix,ge.matrixWorldInverse),W._frustum.setFromProjectionMatrix(Ec,ge.coordinateSystem,ge.reversedDepth)}else W.updateMatrices(X);n=W.getFrustum(),y(R,_,W.camera,X,this.type)}W.isPointLightShadow!==!0&&this.type===os&&M(W,_),W.needsUpdate=!1}m=this.type,g.needsUpdate=!1,i.setRenderTarget(E,N,P)};function M(w,R){const _=e.update(v);u.defines.VSM_SAMPLES!==w.blurSamples&&(u.defines.VSM_SAMPLES=w.blurSamples,p.defines.VSM_SAMPLES=w.blurSamples,u.needsUpdate=!0,p.needsUpdate=!0),w.mapPass===null&&(w.mapPass=new Sn(s.x,s.y,{format:pi,type:Bn})),u.uniforms.shadow_pass.value=w.map.depthTexture,u.uniforms.resolution.value=w.mapSize,u.uniforms.radius.value=w.radius,i.setRenderTarget(w.mapPass),i.clear(),i.renderBufferDirect(R,null,_,u,v,null),p.uniforms.shadow_pass.value=w.mapPass.texture,p.uniforms.resolution.value=w.mapSize,p.uniforms.radius.value=w.radius,i.setRenderTarget(w.map),i.clear(),i.renderBufferDirect(R,null,_,p,v,null)}function T(w,R,_,E){let N=null;const P=_.isPointLight===!0?w.customDistanceMaterial:w.customDepthMaterial;if(P!==void 0)N=P;else if(N=_.isPointLight===!0?l:o,i.localClippingEnabled&&R.clipShadows===!0&&Array.isArray(R.clippingPlanes)&&R.clippingPlanes.length!==0||R.displacementMap&&R.displacementScale!==0||R.alphaMap&&R.alphaTest>0||R.map&&R.alphaTest>0||R.alphaToCoverage===!0){const F=N.uuid,j=R.uuid;let K=d[F];K===void 0&&(K={},d[F]=K);let k=K[j];k===void 0&&(k=N.clone(),K[j]=k,R.addEventListener("dispose",A)),N=k}if(N.visible=R.visible,N.wireframe=R.wireframe,E===os?N.side=R.shadowSide!==null?R.shadowSide:R.side:N.side=R.shadowSide!==null?R.shadowSide:f[R.side],N.alphaMap=R.alphaMap,N.alphaTest=R.alphaToCoverage===!0?.5:R.alphaTest,N.map=R.map,N.clipShadows=R.clipShadows,N.clippingPlanes=R.clippingPlanes,N.clipIntersection=R.clipIntersection,N.displacementMap=R.displacementMap,N.displacementScale=R.displacementScale,N.displacementBias=R.displacementBias,N.wireframeLinewidth=R.wireframeLinewidth,N.linewidth=R.linewidth,_.isPointLight===!0&&N.isMeshDistanceMaterial===!0){const F=i.properties.get(N);F.light=_}return N}function y(w,R,_,E,N){if(w.visible===!1)return;if(w.layers.test(R.layers)&&(w.isMesh||w.isLine||w.isPoints)&&(w.castShadow||w.receiveShadow&&N===os)&&(!w.frustumCulled||n.intersectsObject(w))){w.modelViewMatrix.multiplyMatrices(_.matrixWorldInverse,w.matrixWorld);const j=e.update(w),K=w.material;if(Array.isArray(K)){const k=j.groups;for(let X=0,W=k.length;X<W;X++){const Q=k[X],V=K[Q.materialIndex];if(V&&V.visible){const ee=T(w,V,E,N);w.onBeforeShadow(i,w,R,_,j,ee,Q),i.renderBufferDirect(_,null,j,ee,w,Q),w.onAfterShadow(i,w,R,_,j,ee,Q)}}}else if(K.visible){const k=T(w,K,E,N);w.onBeforeShadow(i,w,R,_,j,k,null),i.renderBufferDirect(_,null,j,k,w,null),w.onAfterShadow(i,w,R,_,j,k,null)}}const F=w.children;for(let j=0,K=F.length;j<K;j++)y(F[j],R,_,E,N)}function A(w){w.target.removeEventListener("dispose",A);for(const _ in d){const E=d[_],N=w.target.uuid;N in E&&(E[N].dispose(),delete E[N])}}}function w0(i,e){function t(){let I=!1;const re=new it;let $=null;const de=new it(0,0,0,0);return{setMask:function(me){$!==me&&!I&&(i.colorMask(me,me,me,me),$=me)},setLocked:function(me){I=me},setClear:function(me,te,Ee,ve,ut){ut===!0&&(me*=ve,te*=ve,Ee*=ve),re.set(me,te,Ee,ve),de.equals(re)===!1&&(i.clearColor(me,te,Ee,ve),de.copy(re))},reset:function(){I=!1,$=null,de.set(-1,0,0,0)}}}function n(){let I=!1,re=!1,$=null,de=null,me=null;return{setReversed:function(te){if(re!==te){const Ee=e.get("EXT_clip_control");te?Ee.clipControlEXT(Ee.LOWER_LEFT_EXT,Ee.ZERO_TO_ONE_EXT):Ee.clipControlEXT(Ee.LOWER_LEFT_EXT,Ee.NEGATIVE_ONE_TO_ONE_EXT),re=te;const ve=me;me=null,this.setClear(ve)}},getReversed:function(){return re},setTest:function(te){te?ne(i.DEPTH_TEST):Le(i.DEPTH_TEST)},setMask:function(te){$!==te&&!I&&(i.depthMask(te),$=te)},setFunc:function(te){if(re&&(te=ru[te]),de!==te){switch(te){case ba:i.depthFunc(i.NEVER);break;case va:i.depthFunc(i.ALWAYS);break;case ya:i.depthFunc(i.LESS);break;case Bi:i.depthFunc(i.LEQUAL);break;case Sa:i.depthFunc(i.EQUAL);break;case Ma:i.depthFunc(i.GEQUAL);break;case Ea:i.depthFunc(i.GREATER);break;case wa:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}de=te}},setLocked:function(te){I=te},setClear:function(te){me!==te&&(me=te,re&&(te=1-te),i.clearDepth(te))},reset:function(){I=!1,$=null,de=null,me=null,re=!1}}}function s(){let I=!1,re=null,$=null,de=null,me=null,te=null,Ee=null,ve=null,ut=null;return{setTest:function(ot){I||(ot?ne(i.STENCIL_TEST):Le(i.STENCIL_TEST))},setMask:function(ot){re!==ot&&!I&&(i.stencilMask(ot),re=ot)},setFunc:function(ot,hn,un){($!==ot||de!==hn||me!==un)&&(i.stencilFunc(ot,hn,un),$=ot,de=hn,me=un)},setOp:function(ot,hn,un){(te!==ot||Ee!==hn||ve!==un)&&(i.stencilOp(ot,hn,un),te=ot,Ee=hn,ve=un)},setLocked:function(ot){I=ot},setClear:function(ot){ut!==ot&&(i.clearStencil(ot),ut=ot)},reset:function(){I=!1,re=null,$=null,de=null,me=null,te=null,Ee=null,ve=null,ut=null}}}const r=new t,a=new n,o=new s,l=new WeakMap,d=new WeakMap;let h={},f={},u={},p=new WeakMap,x=[],v=null,g=!1,m=null,M=null,T=null,y=null,A=null,w=null,R=null,_=new Ie(0,0,0),E=0,N=!1,P=null,F=null,j=null,K=null,k=null;const X=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let W=!1,Q=0;const V=i.getParameter(i.VERSION);V.indexOf("WebGL")!==-1?(Q=parseFloat(/^WebGL (\d)/.exec(V)[1]),W=Q>=1):V.indexOf("OpenGL ES")!==-1&&(Q=parseFloat(/^OpenGL ES (\d)/.exec(V)[1]),W=Q>=2);let ee=null,se={};const ge=i.getParameter(i.SCISSOR_BOX),Xe=i.getParameter(i.VIEWPORT),dt=new it().fromArray(ge),Ke=new it().fromArray(Xe);function J(I,re,$,de){const me=new Uint8Array(4),te=i.createTexture();i.bindTexture(I,te),i.texParameteri(I,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(I,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let Ee=0;Ee<$;Ee++)I===i.TEXTURE_3D||I===i.TEXTURE_2D_ARRAY?i.texImage3D(re,0,i.RGBA,1,1,de,0,i.RGBA,i.UNSIGNED_BYTE,me):i.texImage2D(re+Ee,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,me);return te}const ae={};ae[i.TEXTURE_2D]=J(i.TEXTURE_2D,i.TEXTURE_2D,1),ae[i.TEXTURE_CUBE_MAP]=J(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),ae[i.TEXTURE_2D_ARRAY]=J(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),ae[i.TEXTURE_3D]=J(i.TEXTURE_3D,i.TEXTURE_3D,1,1),r.setClear(0,0,0,1),a.setClear(1),o.setClear(0),ne(i.DEPTH_TEST),a.setFunc(Bi),_t(!1),yt(rl),ne(i.CULL_FACE),$e(Fn);function ne(I){h[I]!==!0&&(i.enable(I),h[I]=!0)}function Le(I){h[I]!==!1&&(i.disable(I),h[I]=!1)}function Fe(I,re){return u[I]!==re?(i.bindFramebuffer(I,re),u[I]=re,I===i.DRAW_FRAMEBUFFER&&(u[i.FRAMEBUFFER]=re),I===i.FRAMEBUFFER&&(u[i.DRAW_FRAMEBUFFER]=re),!0):!1}function Ne(I,re){let $=x,de=!1;if(I){$=p.get(re),$===void 0&&($=[],p.set(re,$));const me=I.textures;if($.length!==me.length||$[0]!==i.COLOR_ATTACHMENT0){for(let te=0,Ee=me.length;te<Ee;te++)$[te]=i.COLOR_ATTACHMENT0+te;$.length=me.length,de=!0}}else $[0]!==i.BACK&&($[0]=i.BACK,de=!0);de&&i.drawBuffers($)}function pt(I){return v!==I?(i.useProgram(I),v=I,!0):!1}const We={[li]:i.FUNC_ADD,[wh]:i.FUNC_SUBTRACT,[Th]:i.FUNC_REVERSE_SUBTRACT};We[Ah]=i.MIN,We[Rh]=i.MAX;const st={[Ch]:i.ZERO,[Nh]:i.ONE,[Ph]:i.SRC_COLOR,[xa]:i.SRC_ALPHA,[Oh]:i.SRC_ALPHA_SATURATE,[Uh]:i.DST_COLOR,[Dh]:i.DST_ALPHA,[Ih]:i.ONE_MINUS_SRC_COLOR,[_a]:i.ONE_MINUS_SRC_ALPHA,[Fh]:i.ONE_MINUS_DST_COLOR,[Lh]:i.ONE_MINUS_DST_ALPHA,[kh]:i.CONSTANT_COLOR,[Bh]:i.ONE_MINUS_CONSTANT_COLOR,[Gh]:i.CONSTANT_ALPHA,[zh]:i.ONE_MINUS_CONSTANT_ALPHA};function $e(I,re,$,de,me,te,Ee,ve,ut,ot){if(I===Fn){g===!0&&(Le(i.BLEND),g=!1);return}if(g===!1&&(ne(i.BLEND),g=!0),I!==Eh){if(I!==m||ot!==N){if((M!==li||A!==li)&&(i.blendEquation(i.FUNC_ADD),M=li,A=li),ot)switch(I){case Ui:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case al:i.blendFunc(i.ONE,i.ONE);break;case ol:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case ll:i.blendFuncSeparate(i.DST_COLOR,i.ONE_MINUS_SRC_ALPHA,i.ZERO,i.ONE);break;default:De("WebGLState: Invalid blending: ",I);break}else switch(I){case Ui:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case al:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE,i.ONE,i.ONE);break;case ol:De("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case ll:De("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:De("WebGLState: Invalid blending: ",I);break}T=null,y=null,w=null,R=null,_.set(0,0,0),E=0,m=I,N=ot}return}me=me||re,te=te||$,Ee=Ee||de,(re!==M||me!==A)&&(i.blendEquationSeparate(We[re],We[me]),M=re,A=me),($!==T||de!==y||te!==w||Ee!==R)&&(i.blendFuncSeparate(st[$],st[de],st[te],st[Ee]),T=$,y=de,w=te,R=Ee),(ve.equals(_)===!1||ut!==E)&&(i.blendColor(ve.r,ve.g,ve.b,ut),_.copy(ve),E=ut),m=I,N=!1}function qe(I,re){I.side===_n?Le(i.CULL_FACE):ne(i.CULL_FACE);let $=I.side===Ht;re&&($=!$),_t($),I.blending===Ui&&I.transparent===!1?$e(Fn):$e(I.blending,I.blendEquation,I.blendSrc,I.blendDst,I.blendEquationAlpha,I.blendSrcAlpha,I.blendDstAlpha,I.blendColor,I.blendAlpha,I.premultipliedAlpha),a.setFunc(I.depthFunc),a.setTest(I.depthTest),a.setMask(I.depthWrite),r.setMask(I.colorWrite);const de=I.stencilWrite;o.setTest(de),de&&(o.setMask(I.stencilWriteMask),o.setFunc(I.stencilFunc,I.stencilRef,I.stencilFuncMask),o.setOp(I.stencilFail,I.stencilZFail,I.stencilZPass)),Nt(I.polygonOffset,I.polygonOffsetFactor,I.polygonOffsetUnits),I.alphaToCoverage===!0?ne(i.SAMPLE_ALPHA_TO_COVERAGE):Le(i.SAMPLE_ALPHA_TO_COVERAGE)}function _t(I){P!==I&&(I?i.frontFace(i.CW):i.frontFace(i.CCW),P=I)}function yt(I){I!==Sh?(ne(i.CULL_FACE),I!==F&&(I===rl?i.cullFace(i.BACK):I===Mh?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):Le(i.CULL_FACE),F=I}function At(I){I!==j&&(W&&i.lineWidth(I),j=I)}function Nt(I,re,$){I?(ne(i.POLYGON_OFFSET_FILL),(K!==re||k!==$)&&(K=re,k=$,a.getReversed()&&(re=-re),i.polygonOffset(re,$))):Le(i.POLYGON_OFFSET_FILL)}function ht(I){I?ne(i.SCISSOR_TEST):Le(i.SCISSOR_TEST)}function bt(I){I===void 0&&(I=i.TEXTURE0+X-1),ee!==I&&(i.activeTexture(I),ee=I)}function L(I,re,$){$===void 0&&(ee===null?$=i.TEXTURE0+X-1:$=ee);let de=se[$];de===void 0&&(de={type:void 0,texture:void 0},se[$]=de),(de.type!==I||de.texture!==re)&&(ee!==$&&(i.activeTexture($),ee=$),i.bindTexture(I,re||ae[I]),de.type=I,de.texture=re)}function zt(){const I=se[ee];I!==void 0&&I.type!==void 0&&(i.bindTexture(I.type,null),I.type=void 0,I.texture=void 0)}function Ze(){try{i.compressedTexImage2D(...arguments)}catch(I){De("WebGLState:",I)}}function C(){try{i.compressedTexImage3D(...arguments)}catch(I){De("WebGLState:",I)}}function b(){try{i.texSubImage2D(...arguments)}catch(I){De("WebGLState:",I)}}function O(){try{i.texSubImage3D(...arguments)}catch(I){De("WebGLState:",I)}}function z(){try{i.compressedTexSubImage2D(...arguments)}catch(I){De("WebGLState:",I)}}function q(){try{i.compressedTexSubImage3D(...arguments)}catch(I){De("WebGLState:",I)}}function ie(){try{i.texStorage2D(...arguments)}catch(I){De("WebGLState:",I)}}function oe(){try{i.texStorage3D(...arguments)}catch(I){De("WebGLState:",I)}}function Y(){try{i.texImage2D(...arguments)}catch(I){De("WebGLState:",I)}}function Z(){try{i.texImage3D(...arguments)}catch(I){De("WebGLState:",I)}}function le(I){return f[I]!==void 0?f[I]:i.getParameter(I)}function we(I,re){f[I]!==re&&(i.pixelStorei(I,re),f[I]=re)}function he(I){dt.equals(I)===!1&&(i.scissor(I.x,I.y,I.z,I.w),dt.copy(I))}function ce(I){Ke.equals(I)===!1&&(i.viewport(I.x,I.y,I.z,I.w),Ke.copy(I))}function Re(I,re){let $=d.get(re);$===void 0&&($=new WeakMap,d.set(re,$));let de=$.get(I);de===void 0&&(de=i.getUniformBlockIndex(re,I.name),$.set(I,de))}function Pe(I,re){const de=d.get(re).get(I);l.get(re)!==de&&(i.uniformBlockBinding(re,de,I.__bindingPointIndex),l.set(re,de))}function Oe(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),a.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),i.pixelStorei(i.PACK_ALIGNMENT,4),i.pixelStorei(i.UNPACK_ALIGNMENT,4),i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,!1),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,i.BROWSER_DEFAULT_WEBGL),i.pixelStorei(i.PACK_ROW_LENGTH,0),i.pixelStorei(i.PACK_SKIP_PIXELS,0),i.pixelStorei(i.PACK_SKIP_ROWS,0),i.pixelStorei(i.UNPACK_ROW_LENGTH,0),i.pixelStorei(i.UNPACK_IMAGE_HEIGHT,0),i.pixelStorei(i.UNPACK_SKIP_PIXELS,0),i.pixelStorei(i.UNPACK_SKIP_ROWS,0),i.pixelStorei(i.UNPACK_SKIP_IMAGES,0),h={},f={},ee=null,se={},u={},p=new WeakMap,x=[],v=null,g=!1,m=null,M=null,T=null,y=null,A=null,w=null,R=null,_=new Ie(0,0,0),E=0,N=!1,P=null,F=null,j=null,K=null,k=null,dt.set(0,0,i.canvas.width,i.canvas.height),Ke.set(0,0,i.canvas.width,i.canvas.height),r.reset(),a.reset(),o.reset()}return{buffers:{color:r,depth:a,stencil:o},enable:ne,disable:Le,bindFramebuffer:Fe,drawBuffers:Ne,useProgram:pt,setBlending:$e,setMaterial:qe,setFlipSided:_t,setCullFace:yt,setLineWidth:At,setPolygonOffset:Nt,setScissorTest:ht,activeTexture:bt,bindTexture:L,unbindTexture:zt,compressedTexImage2D:Ze,compressedTexImage3D:C,texImage2D:Y,texImage3D:Z,pixelStorei:we,getParameter:le,updateUBOMapping:Re,uniformBlockBinding:Pe,texStorage2D:ie,texStorage3D:oe,texSubImage2D:b,texSubImage3D:O,compressedTexSubImage2D:z,compressedTexSubImage3D:q,scissor:he,viewport:ce,reset:Oe}}function T0(i,e,t,n,s,r,a){const o=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),d=new Ce,h=new WeakMap,f=new Set;let u;const p=new WeakMap;let x=!1;try{x=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function v(C,b){return x?new OffscreenCanvas(C,b):_s("canvas")}function g(C,b,O){let z=1;const q=Ze(C);if((q.width>O||q.height>O)&&(z=O/Math.max(q.width,q.height)),z<1)if(typeof HTMLImageElement<"u"&&C instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&C instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&C instanceof ImageBitmap||typeof VideoFrame<"u"&&C instanceof VideoFrame){const ie=Math.floor(z*q.width),oe=Math.floor(z*q.height);u===void 0&&(u=v(ie,oe));const Y=b?v(ie,oe):u;return Y.width=ie,Y.height=oe,Y.getContext("2d").drawImage(C,0,0,ie,oe),Me("WebGLRenderer: Texture has been resized from ("+q.width+"x"+q.height+") to ("+ie+"x"+oe+")."),Y}else return"data"in C&&Me("WebGLRenderer: Image in DataTexture is too big ("+q.width+"x"+q.height+")."),C;return C}function m(C){return C.generateMipmaps}function M(C){i.generateMipmap(C)}function T(C){return C.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:C.isWebGL3DRenderTarget?i.TEXTURE_3D:C.isWebGLArrayRenderTarget||C.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function y(C,b,O,z,q,ie=!1){if(C!==null){if(i[C]!==void 0)return i[C];Me("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+C+"'")}let oe;z&&(oe=e.get("EXT_texture_norm16"),oe||Me("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let Y=b;if(b===i.RED&&(O===i.FLOAT&&(Y=i.R32F),O===i.HALF_FLOAT&&(Y=i.R16F),O===i.UNSIGNED_BYTE&&(Y=i.R8),O===i.UNSIGNED_SHORT&&oe&&(Y=oe.R16_EXT),O===i.SHORT&&oe&&(Y=oe.R16_SNORM_EXT)),b===i.RED_INTEGER&&(O===i.UNSIGNED_BYTE&&(Y=i.R8UI),O===i.UNSIGNED_SHORT&&(Y=i.R16UI),O===i.UNSIGNED_INT&&(Y=i.R32UI),O===i.BYTE&&(Y=i.R8I),O===i.SHORT&&(Y=i.R16I),O===i.INT&&(Y=i.R32I)),b===i.RG&&(O===i.FLOAT&&(Y=i.RG32F),O===i.HALF_FLOAT&&(Y=i.RG16F),O===i.UNSIGNED_BYTE&&(Y=i.RG8),O===i.UNSIGNED_SHORT&&oe&&(Y=oe.RG16_EXT),O===i.SHORT&&oe&&(Y=oe.RG16_SNORM_EXT)),b===i.RG_INTEGER&&(O===i.UNSIGNED_BYTE&&(Y=i.RG8UI),O===i.UNSIGNED_SHORT&&(Y=i.RG16UI),O===i.UNSIGNED_INT&&(Y=i.RG32UI),O===i.BYTE&&(Y=i.RG8I),O===i.SHORT&&(Y=i.RG16I),O===i.INT&&(Y=i.RG32I)),b===i.RGB_INTEGER&&(O===i.UNSIGNED_BYTE&&(Y=i.RGB8UI),O===i.UNSIGNED_SHORT&&(Y=i.RGB16UI),O===i.UNSIGNED_INT&&(Y=i.RGB32UI),O===i.BYTE&&(Y=i.RGB8I),O===i.SHORT&&(Y=i.RGB16I),O===i.INT&&(Y=i.RGB32I)),b===i.RGBA_INTEGER&&(O===i.UNSIGNED_BYTE&&(Y=i.RGBA8UI),O===i.UNSIGNED_SHORT&&(Y=i.RGBA16UI),O===i.UNSIGNED_INT&&(Y=i.RGBA32UI),O===i.BYTE&&(Y=i.RGBA8I),O===i.SHORT&&(Y=i.RGBA16I),O===i.INT&&(Y=i.RGBA32I)),b===i.RGB&&(O===i.UNSIGNED_SHORT&&oe&&(Y=oe.RGB16_EXT),O===i.SHORT&&oe&&(Y=oe.RGB16_SNORM_EXT),O===i.UNSIGNED_INT_5_9_9_9_REV&&(Y=i.RGB9_E5),O===i.UNSIGNED_INT_10F_11F_11F_REV&&(Y=i.R11F_G11F_B10F)),b===i.RGBA){const Z=ie?hr:je.getTransfer(q);O===i.FLOAT&&(Y=i.RGBA32F),O===i.HALF_FLOAT&&(Y=i.RGBA16F),O===i.UNSIGNED_BYTE&&(Y=Z===Je?i.SRGB8_ALPHA8:i.RGBA8),O===i.UNSIGNED_SHORT&&oe&&(Y=oe.RGBA16_EXT),O===i.SHORT&&oe&&(Y=oe.RGBA16_SNORM_EXT),O===i.UNSIGNED_SHORT_4_4_4_4&&(Y=i.RGBA4),O===i.UNSIGNED_SHORT_5_5_5_1&&(Y=i.RGB5_A1)}return(Y===i.R16F||Y===i.R32F||Y===i.RG16F||Y===i.RG32F||Y===i.RGBA16F||Y===i.RGBA32F)&&e.get("EXT_color_buffer_float"),Y}function A(C,b){let O;return C?b===null||b===Mn||b===ps?O=i.DEPTH24_STENCIL8:b===Qt?O=i.DEPTH32F_STENCIL8:b===fs&&(O=i.DEPTH24_STENCIL8,Me("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):b===null||b===Mn||b===ps?O=i.DEPTH_COMPONENT24:b===Qt?O=i.DEPTH_COMPONENT32F:b===fs&&(O=i.DEPTH_COMPONENT16),O}function w(C,b){return m(C)===!0||C.isFramebufferTexture&&C.minFilter!==Mt&&C.minFilter!==Et?Math.log2(Math.max(b.width,b.height))+1:C.mipmaps!==void 0&&C.mipmaps.length>0?C.mipmaps.length:C.isCompressedTexture&&Array.isArray(C.image)?b.mipmaps.length:1}function R(C){const b=C.target;b.removeEventListener("dispose",R),E(b),b.isVideoTexture&&h.delete(b),b.isHTMLTexture&&f.delete(b)}function _(C){const b=C.target;b.removeEventListener("dispose",_),P(b)}function E(C){const b=n.get(C);if(b.__webglInit===void 0)return;const O=C.source,z=p.get(O);if(z){const q=z[b.__cacheKey];q.usedTimes--,q.usedTimes===0&&N(C),Object.keys(z).length===0&&p.delete(O)}n.remove(C)}function N(C){const b=n.get(C);i.deleteTexture(b.__webglTexture);const O=C.source,z=p.get(O);delete z[b.__cacheKey],a.memory.textures--}function P(C){const b=n.get(C);if(C.depthTexture&&(C.depthTexture.dispose(),n.remove(C.depthTexture)),C.isWebGLCubeRenderTarget)for(let z=0;z<6;z++){if(Array.isArray(b.__webglFramebuffer[z]))for(let q=0;q<b.__webglFramebuffer[z].length;q++)i.deleteFramebuffer(b.__webglFramebuffer[z][q]);else i.deleteFramebuffer(b.__webglFramebuffer[z]);b.__webglDepthbuffer&&i.deleteRenderbuffer(b.__webglDepthbuffer[z])}else{if(Array.isArray(b.__webglFramebuffer))for(let z=0;z<b.__webglFramebuffer.length;z++)i.deleteFramebuffer(b.__webglFramebuffer[z]);else i.deleteFramebuffer(b.__webglFramebuffer);if(b.__webglDepthbuffer&&i.deleteRenderbuffer(b.__webglDepthbuffer),b.__webglMultisampledFramebuffer&&i.deleteFramebuffer(b.__webglMultisampledFramebuffer),b.__webglColorRenderbuffer)for(let z=0;z<b.__webglColorRenderbuffer.length;z++)b.__webglColorRenderbuffer[z]&&i.deleteRenderbuffer(b.__webglColorRenderbuffer[z]);b.__webglDepthRenderbuffer&&i.deleteRenderbuffer(b.__webglDepthRenderbuffer)}const O=C.textures;for(let z=0,q=O.length;z<q;z++){const ie=n.get(O[z]);ie.__webglTexture&&(i.deleteTexture(ie.__webglTexture),a.memory.textures--),n.remove(O[z])}n.remove(C)}let F=0;function j(){F=0}function K(){return F}function k(C){F=C}function X(){const C=F;return C>=s.maxTextures&&Me("WebGLTextures: Trying to use "+C+" texture units while this GPU supports only "+s.maxTextures),F+=1,C}function W(C){const b=[];return b.push(C.wrapS),b.push(C.wrapT),b.push(C.wrapR||0),b.push(C.magFilter),b.push(C.minFilter),b.push(C.anisotropy),b.push(C.internalFormat),b.push(C.format),b.push(C.type),b.push(C.generateMipmaps),b.push(C.premultiplyAlpha),b.push(C.flipY),b.push(C.unpackAlignment),b.push(C.colorSpace),b.join()}function Q(C,b){const O=n.get(C);if(C.isVideoTexture&&L(C),C.isRenderTargetTexture===!1&&C.isExternalTexture!==!0&&C.version>0&&O.__version!==C.version){const z=C.image;if(z===null)Me("WebGLRenderer: Texture marked for update but no image data found.");else if(z.complete===!1)Me("WebGLRenderer: Texture marked for update but image is incomplete");else{Le(O,C,b);return}}else C.isExternalTexture&&(O.__webglTexture=C.sourceTexture?C.sourceTexture:null);t.bindTexture(i.TEXTURE_2D,O.__webglTexture,i.TEXTURE0+b)}function V(C,b){const O=n.get(C);if(C.isRenderTargetTexture===!1&&C.version>0&&O.__version!==C.version){Le(O,C,b);return}else C.isExternalTexture&&(O.__webglTexture=C.sourceTexture?C.sourceTexture:null);t.bindTexture(i.TEXTURE_2D_ARRAY,O.__webglTexture,i.TEXTURE0+b)}function ee(C,b){const O=n.get(C);if(C.isRenderTargetTexture===!1&&C.version>0&&O.__version!==C.version){Le(O,C,b);return}t.bindTexture(i.TEXTURE_3D,O.__webglTexture,i.TEXTURE0+b)}function se(C,b){const O=n.get(C);if(C.isCubeDepthTexture!==!0&&C.version>0&&O.__version!==C.version){Fe(O,C,b);return}t.bindTexture(i.TEXTURE_CUBE_MAP,O.__webglTexture,i.TEXTURE0+b)}const ge={[zi]:i.REPEAT,[bn]:i.CLAMP_TO_EDGE,[lr]:i.MIRRORED_REPEAT},Xe={[Mt]:i.NEAREST,[jc]:i.NEAREST_MIPMAP_NEAREST,[ls]:i.NEAREST_MIPMAP_LINEAR,[Et]:i.LINEAR,[nr]:i.LINEAR_MIPMAP_NEAREST,[Ln]:i.LINEAR_MIPMAP_LINEAR},dt={[Kh]:i.NEVER,[eu]:i.ALWAYS,[$h]:i.LESS,[yo]:i.LEQUAL,[Zh]:i.EQUAL,[So]:i.GEQUAL,[Jh]:i.GREATER,[Qh]:i.NOTEQUAL};function Ke(C,b){if(b.type===Qt&&e.has("OES_texture_float_linear")===!1&&(b.magFilter===Et||b.magFilter===nr||b.magFilter===ls||b.magFilter===Ln||b.minFilter===Et||b.minFilter===nr||b.minFilter===ls||b.minFilter===Ln)&&Me("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(C,i.TEXTURE_WRAP_S,ge[b.wrapS]),i.texParameteri(C,i.TEXTURE_WRAP_T,ge[b.wrapT]),(C===i.TEXTURE_3D||C===i.TEXTURE_2D_ARRAY)&&i.texParameteri(C,i.TEXTURE_WRAP_R,ge[b.wrapR]),i.texParameteri(C,i.TEXTURE_MAG_FILTER,Xe[b.magFilter]),i.texParameteri(C,i.TEXTURE_MIN_FILTER,Xe[b.minFilter]),b.compareFunction&&(i.texParameteri(C,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(C,i.TEXTURE_COMPARE_FUNC,dt[b.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(b.magFilter===Mt||b.minFilter!==ls&&b.minFilter!==Ln||b.type===Qt&&e.has("OES_texture_float_linear")===!1)return;if(b.anisotropy>1||n.get(b).__currentAnisotropy){const O=e.get("EXT_texture_filter_anisotropic");i.texParameterf(C,O.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(b.anisotropy,s.getMaxAnisotropy())),n.get(b).__currentAnisotropy=b.anisotropy}}}function J(C,b){let O=!1;C.__webglInit===void 0&&(C.__webglInit=!0,b.addEventListener("dispose",R));const z=b.source;let q=p.get(z);q===void 0&&(q={},p.set(z,q));const ie=W(b);if(ie!==C.__cacheKey){q[ie]===void 0&&(q[ie]={texture:i.createTexture(),usedTimes:0},a.memory.textures++,O=!0),q[ie].usedTimes++;const oe=q[C.__cacheKey];oe!==void 0&&(q[C.__cacheKey].usedTimes--,oe.usedTimes===0&&N(b)),C.__cacheKey=ie,C.__webglTexture=q[ie].texture}return O}function ae(C,b,O){return Math.floor(Math.floor(C/O)/b)}function ne(C,b,O,z){const ie=C.updateRanges;if(ie.length===0)t.texSubImage2D(i.TEXTURE_2D,0,0,0,b.width,b.height,O,z,b.data);else{ie.sort((we,he)=>we.start-he.start);let oe=0;for(let we=1;we<ie.length;we++){const he=ie[oe],ce=ie[we],Re=he.start+he.count,Pe=ae(ce.start,b.width,4),Oe=ae(he.start,b.width,4);ce.start<=Re+1&&Pe===Oe&&ae(ce.start+ce.count-1,b.width,4)===Pe?he.count=Math.max(he.count,ce.start+ce.count-he.start):(++oe,ie[oe]=ce)}ie.length=oe+1;const Y=t.getParameter(i.UNPACK_ROW_LENGTH),Z=t.getParameter(i.UNPACK_SKIP_PIXELS),le=t.getParameter(i.UNPACK_SKIP_ROWS);t.pixelStorei(i.UNPACK_ROW_LENGTH,b.width);for(let we=0,he=ie.length;we<he;we++){const ce=ie[we],Re=Math.floor(ce.start/4),Pe=Math.ceil(ce.count/4),Oe=Re%b.width,I=Math.floor(Re/b.width),re=Pe,$=1;t.pixelStorei(i.UNPACK_SKIP_PIXELS,Oe),t.pixelStorei(i.UNPACK_SKIP_ROWS,I),t.texSubImage2D(i.TEXTURE_2D,0,Oe,I,re,$,O,z,b.data)}C.clearUpdateRanges(),t.pixelStorei(i.UNPACK_ROW_LENGTH,Y),t.pixelStorei(i.UNPACK_SKIP_PIXELS,Z),t.pixelStorei(i.UNPACK_SKIP_ROWS,le)}}function Le(C,b,O){let z=i.TEXTURE_2D;(b.isDataArrayTexture||b.isCompressedArrayTexture)&&(z=i.TEXTURE_2D_ARRAY),b.isData3DTexture&&(z=i.TEXTURE_3D);const q=J(C,b),ie=b.source;t.bindTexture(z,C.__webglTexture,i.TEXTURE0+O);const oe=n.get(ie);if(ie.version!==oe.__version||q===!0){if(t.activeTexture(i.TEXTURE0+O),(typeof ImageBitmap<"u"&&b.image instanceof ImageBitmap)===!1){const $=je.getPrimaries(je.workingColorSpace),de=b.colorSpace===Jn?null:je.getPrimaries(b.colorSpace),me=b.colorSpace===Jn||$===de?i.NONE:i.BROWSER_DEFAULT_WEBGL;t.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,b.flipY),t.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,b.premultiplyAlpha),t.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,me)}t.pixelStorei(i.UNPACK_ALIGNMENT,b.unpackAlignment);let Z=g(b.image,!1,s.maxTextureSize);Z=zt(b,Z);const le=r.convert(b.format,b.colorSpace),we=r.convert(b.type);let he=y(b.internalFormat,le,we,b.normalized,b.colorSpace,b.isVideoTexture);Ke(z,b);let ce;const Re=b.mipmaps,Pe=b.isVideoTexture!==!0,Oe=oe.__version===void 0||q===!0,I=ie.dataReady,re=w(b,Z);if(b.isDepthTexture)he=A(b.format===di,b.type),Oe&&(Pe?t.texStorage2D(i.TEXTURE_2D,1,he,Z.width,Z.height):t.texImage2D(i.TEXTURE_2D,0,he,Z.width,Z.height,0,le,we,null));else if(b.isDataTexture)if(Re.length>0){Pe&&Oe&&t.texStorage2D(i.TEXTURE_2D,re,he,Re[0].width,Re[0].height);for(let $=0,de=Re.length;$<de;$++)ce=Re[$],Pe?I&&t.texSubImage2D(i.TEXTURE_2D,$,0,0,ce.width,ce.height,le,we,ce.data):t.texImage2D(i.TEXTURE_2D,$,he,ce.width,ce.height,0,le,we,ce.data);b.generateMipmaps=!1}else Pe?(Oe&&t.texStorage2D(i.TEXTURE_2D,re,he,Z.width,Z.height),I&&ne(b,Z,le,we)):t.texImage2D(i.TEXTURE_2D,0,he,Z.width,Z.height,0,le,we,Z.data);else if(b.isCompressedTexture)if(b.isCompressedArrayTexture){Pe&&Oe&&t.texStorage3D(i.TEXTURE_2D_ARRAY,re,he,Re[0].width,Re[0].height,Z.depth);for(let $=0,de=Re.length;$<de;$++)if(ce=Re[$],b.format!==en)if(le!==null)if(Pe){if(I)if(b.layerUpdates.size>0){const me=tc(ce.width,ce.height,b.format,b.type);for(const te of b.layerUpdates){const Ee=ce.data.subarray(te*me/ce.data.BYTES_PER_ELEMENT,(te+1)*me/ce.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,$,0,0,te,ce.width,ce.height,1,le,Ee)}b.clearLayerUpdates()}else t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,$,0,0,0,ce.width,ce.height,Z.depth,le,ce.data)}else t.compressedTexImage3D(i.TEXTURE_2D_ARRAY,$,he,ce.width,ce.height,Z.depth,0,ce.data,0,0);else Me("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Pe?I&&t.texSubImage3D(i.TEXTURE_2D_ARRAY,$,0,0,0,ce.width,ce.height,Z.depth,le,we,ce.data):t.texImage3D(i.TEXTURE_2D_ARRAY,$,he,ce.width,ce.height,Z.depth,0,le,we,ce.data)}else{Pe&&Oe&&t.texStorage2D(i.TEXTURE_2D,re,he,Re[0].width,Re[0].height);for(let $=0,de=Re.length;$<de;$++)ce=Re[$],b.format!==en?le!==null?Pe?I&&t.compressedTexSubImage2D(i.TEXTURE_2D,$,0,0,ce.width,ce.height,le,ce.data):t.compressedTexImage2D(i.TEXTURE_2D,$,he,ce.width,ce.height,0,ce.data):Me("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Pe?I&&t.texSubImage2D(i.TEXTURE_2D,$,0,0,ce.width,ce.height,le,we,ce.data):t.texImage2D(i.TEXTURE_2D,$,he,ce.width,ce.height,0,le,we,ce.data)}else if(b.isDataArrayTexture)if(Pe){if(Oe&&t.texStorage3D(i.TEXTURE_2D_ARRAY,re,he,Z.width,Z.height,Z.depth),I)if(b.layerUpdates.size>0){const $=tc(Z.width,Z.height,b.format,b.type);for(const de of b.layerUpdates){const me=Z.data.subarray(de*$/Z.data.BYTES_PER_ELEMENT,(de+1)*$/Z.data.BYTES_PER_ELEMENT);t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,de,Z.width,Z.height,1,le,we,me)}b.clearLayerUpdates()}else t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,Z.width,Z.height,Z.depth,le,we,Z.data)}else t.texImage3D(i.TEXTURE_2D_ARRAY,0,he,Z.width,Z.height,Z.depth,0,le,we,Z.data);else if(b.isData3DTexture)Pe?(Oe&&t.texStorage3D(i.TEXTURE_3D,re,he,Z.width,Z.height,Z.depth),I&&t.texSubImage3D(i.TEXTURE_3D,0,0,0,0,Z.width,Z.height,Z.depth,le,we,Z.data)):t.texImage3D(i.TEXTURE_3D,0,he,Z.width,Z.height,Z.depth,0,le,we,Z.data);else if(b.isFramebufferTexture){if(Oe)if(Pe)t.texStorage2D(i.TEXTURE_2D,re,he,Z.width,Z.height);else{let $=Z.width,de=Z.height;for(let me=0;me<re;me++)t.texImage2D(i.TEXTURE_2D,me,he,$,de,0,le,we,null),$>>=1,de>>=1}}else if(b.isHTMLTexture){if("texElementImage2D"in i){const $=i.canvas;if($.hasAttribute("layoutsubtree")||$.setAttribute("layoutsubtree","true"),Z.parentNode!==$){$.appendChild(Z),f.add(b),$.onpaint=de=>{const me=de.changedElements;for(const te of f)me.includes(te.image)&&(te.needsUpdate=!0)},$.requestPaint();return}if(i.texElementImage2D.length===3)i.texElementImage2D(i.TEXTURE_2D,i.RGBA8,Z);else{const me=i.RGBA,te=i.RGBA,Ee=i.UNSIGNED_BYTE;i.texElementImage2D(i.TEXTURE_2D,0,me,te,Ee,Z)}i.texParameteri(i.TEXTURE_2D,i.TEXTURE_MIN_FILTER,i.LINEAR),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_WRAP_S,i.CLAMP_TO_EDGE),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_WRAP_T,i.CLAMP_TO_EDGE)}}else if(Re.length>0){if(Pe&&Oe){const $=Ze(Re[0]);t.texStorage2D(i.TEXTURE_2D,re,he,$.width,$.height)}for(let $=0,de=Re.length;$<de;$++)ce=Re[$],Pe?I&&t.texSubImage2D(i.TEXTURE_2D,$,0,0,le,we,ce):t.texImage2D(i.TEXTURE_2D,$,he,le,we,ce);b.generateMipmaps=!1}else if(Pe){if(Oe){const $=Ze(Z);t.texStorage2D(i.TEXTURE_2D,re,he,$.width,$.height)}I&&t.texSubImage2D(i.TEXTURE_2D,0,0,0,le,we,Z)}else t.texImage2D(i.TEXTURE_2D,0,he,le,we,Z);m(b)&&M(z),oe.__version=ie.version,b.onUpdate&&b.onUpdate(b)}C.__version=b.version}function Fe(C,b,O){if(b.image.length!==6)return;const z=J(C,b),q=b.source;t.bindTexture(i.TEXTURE_CUBE_MAP,C.__webglTexture,i.TEXTURE0+O);const ie=n.get(q);if(q.version!==ie.__version||z===!0){t.activeTexture(i.TEXTURE0+O);const oe=je.getPrimaries(je.workingColorSpace),Y=b.colorSpace===Jn?null:je.getPrimaries(b.colorSpace),Z=b.colorSpace===Jn||oe===Y?i.NONE:i.BROWSER_DEFAULT_WEBGL;t.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,b.flipY),t.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,b.premultiplyAlpha),t.pixelStorei(i.UNPACK_ALIGNMENT,b.unpackAlignment),t.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Z);const le=b.isCompressedTexture||b.image[0].isCompressedTexture,we=b.image[0]&&b.image[0].isDataTexture,he=[];for(let te=0;te<6;te++)!le&&!we?he[te]=g(b.image[te],!0,s.maxCubemapSize):he[te]=we?b.image[te].image:b.image[te],he[te]=zt(b,he[te]);const ce=he[0],Re=r.convert(b.format,b.colorSpace),Pe=r.convert(b.type),Oe=y(b.internalFormat,Re,Pe,b.normalized,b.colorSpace),I=b.isVideoTexture!==!0,re=ie.__version===void 0||z===!0,$=q.dataReady;let de=w(b,ce);Ke(i.TEXTURE_CUBE_MAP,b);let me;if(le){I&&re&&t.texStorage2D(i.TEXTURE_CUBE_MAP,de,Oe,ce.width,ce.height);for(let te=0;te<6;te++){me=he[te].mipmaps;for(let Ee=0;Ee<me.length;Ee++){const ve=me[Ee];b.format!==en?Re!==null?I?$&&t.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+te,Ee,0,0,ve.width,ve.height,Re,ve.data):t.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+te,Ee,Oe,ve.width,ve.height,0,ve.data):Me("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):I?$&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+te,Ee,0,0,ve.width,ve.height,Re,Pe,ve.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+te,Ee,Oe,ve.width,ve.height,0,Re,Pe,ve.data)}}}else{if(me=b.mipmaps,I&&re){me.length>0&&de++;const te=Ze(he[0]);t.texStorage2D(i.TEXTURE_CUBE_MAP,de,Oe,te.width,te.height)}for(let te=0;te<6;te++)if(we){I?$&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+te,0,0,0,he[te].width,he[te].height,Re,Pe,he[te].data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+te,0,Oe,he[te].width,he[te].height,0,Re,Pe,he[te].data);for(let Ee=0;Ee<me.length;Ee++){const ut=me[Ee].image[te].image;I?$&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+te,Ee+1,0,0,ut.width,ut.height,Re,Pe,ut.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+te,Ee+1,Oe,ut.width,ut.height,0,Re,Pe,ut.data)}}else{I?$&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+te,0,0,0,Re,Pe,he[te]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+te,0,Oe,Re,Pe,he[te]);for(let Ee=0;Ee<me.length;Ee++){const ve=me[Ee];I?$&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+te,Ee+1,0,0,Re,Pe,ve.image[te]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+te,Ee+1,Oe,Re,Pe,ve.image[te])}}}m(b)&&M(i.TEXTURE_CUBE_MAP),ie.__version=q.version,b.onUpdate&&b.onUpdate(b)}C.__version=b.version}function Ne(C,b,O,z,q,ie){const oe=r.convert(O.format,O.colorSpace),Y=r.convert(O.type),Z=y(O.internalFormat,oe,Y,O.normalized,O.colorSpace),le=n.get(b),we=n.get(O);if(we.__renderTarget=b,!le.__hasExternalTextures){const he=Math.max(1,b.width>>ie),ce=Math.max(1,b.height>>ie);q===i.TEXTURE_3D||q===i.TEXTURE_2D_ARRAY?t.texImage3D(q,ie,Z,he,ce,b.depth,0,oe,Y,null):t.texImage2D(q,ie,Z,he,ce,0,oe,Y,null)}t.bindFramebuffer(i.FRAMEBUFFER,C),bt(b)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,z,q,we.__webglTexture,0,ht(b)):(q===i.TEXTURE_2D||q>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&q<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,z,q,we.__webglTexture,ie),t.bindFramebuffer(i.FRAMEBUFFER,null)}function pt(C,b,O){if(i.bindRenderbuffer(i.RENDERBUFFER,C),b.depthBuffer){const z=b.depthTexture,q=z&&z.isDepthTexture?z.type:null,ie=A(b.stencilBuffer,q),oe=b.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;bt(b)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,ht(b),ie,b.width,b.height):O?i.renderbufferStorageMultisample(i.RENDERBUFFER,ht(b),ie,b.width,b.height):i.renderbufferStorage(i.RENDERBUFFER,ie,b.width,b.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,oe,i.RENDERBUFFER,C)}else{const z=b.textures;for(let q=0;q<z.length;q++){const ie=z[q],oe=r.convert(ie.format,ie.colorSpace),Y=r.convert(ie.type),Z=y(ie.internalFormat,oe,Y,ie.normalized,ie.colorSpace);bt(b)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,ht(b),Z,b.width,b.height):O?i.renderbufferStorageMultisample(i.RENDERBUFFER,ht(b),Z,b.width,b.height):i.renderbufferStorage(i.RENDERBUFFER,Z,b.width,b.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function We(C,b,O){const z=b.isWebGLCubeRenderTarget===!0;if(t.bindFramebuffer(i.FRAMEBUFFER,C),!(b.depthTexture&&b.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");const q=n.get(b.depthTexture);if(q.__renderTarget=b,(!q.__webglTexture||b.depthTexture.image.width!==b.width||b.depthTexture.image.height!==b.height)&&(b.depthTexture.image.width=b.width,b.depthTexture.image.height=b.height,b.depthTexture.needsUpdate=!0),z){if(q.__webglInit===void 0&&(q.__webglInit=!0,b.depthTexture.addEventListener("dispose",R)),q.__webglTexture===void 0){q.__webglTexture=i.createTexture(),t.bindTexture(i.TEXTURE_CUBE_MAP,q.__webglTexture),Ke(i.TEXTURE_CUBE_MAP,b.depthTexture);const le=r.convert(b.depthTexture.format),we=r.convert(b.depthTexture.type);let he;b.depthTexture.format===Gn?he=i.DEPTH_COMPONENT24:b.depthTexture.format===di&&(he=i.DEPTH24_STENCIL8);for(let ce=0;ce<6;ce++)i.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ce,0,he,b.width,b.height,0,le,we,null)}}else Q(b.depthTexture,0);const ie=q.__webglTexture,oe=ht(b),Y=z?i.TEXTURE_CUBE_MAP_POSITIVE_X+O:i.TEXTURE_2D,Z=b.depthTexture.format===di?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;if(b.depthTexture.format===Gn)bt(b)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,Z,Y,ie,0,oe):i.framebufferTexture2D(i.FRAMEBUFFER,Z,Y,ie,0);else if(b.depthTexture.format===di)bt(b)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,Z,Y,ie,0,oe):i.framebufferTexture2D(i.FRAMEBUFFER,Z,Y,ie,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function st(C){const b=n.get(C),O=C.isWebGLCubeRenderTarget===!0;if(b.__boundDepthTexture!==C.depthTexture){const z=C.depthTexture;if(b.__depthDisposeCallback&&b.__depthDisposeCallback(),z){const q=()=>{delete b.__boundDepthTexture,delete b.__depthDisposeCallback,z.removeEventListener("dispose",q)};z.addEventListener("dispose",q),b.__depthDisposeCallback=q}b.__boundDepthTexture=z}if(C.depthTexture&&!b.__autoAllocateDepthBuffer)if(O)for(let z=0;z<6;z++)We(b.__webglFramebuffer[z],C,z);else{const z=C.texture.mipmaps;z&&z.length>0?We(b.__webglFramebuffer[0],C,0):We(b.__webglFramebuffer,C,0)}else if(O){b.__webglDepthbuffer=[];for(let z=0;z<6;z++)if(t.bindFramebuffer(i.FRAMEBUFFER,b.__webglFramebuffer[z]),b.__webglDepthbuffer[z]===void 0)b.__webglDepthbuffer[z]=i.createRenderbuffer(),pt(b.__webglDepthbuffer[z],C,!1);else{const q=C.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,ie=b.__webglDepthbuffer[z];i.bindRenderbuffer(i.RENDERBUFFER,ie),i.framebufferRenderbuffer(i.FRAMEBUFFER,q,i.RENDERBUFFER,ie)}}else{const z=C.texture.mipmaps;if(z&&z.length>0?t.bindFramebuffer(i.FRAMEBUFFER,b.__webglFramebuffer[0]):t.bindFramebuffer(i.FRAMEBUFFER,b.__webglFramebuffer),b.__webglDepthbuffer===void 0)b.__webglDepthbuffer=i.createRenderbuffer(),pt(b.__webglDepthbuffer,C,!1);else{const q=C.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,ie=b.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,ie),i.framebufferRenderbuffer(i.FRAMEBUFFER,q,i.RENDERBUFFER,ie)}}t.bindFramebuffer(i.FRAMEBUFFER,null)}function $e(C,b,O){const z=n.get(C);b!==void 0&&Ne(z.__webglFramebuffer,C,C.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),O!==void 0&&st(C)}function qe(C){const b=C.texture,O=n.get(C),z=n.get(b);C.addEventListener("dispose",_);const q=C.textures,ie=C.isWebGLCubeRenderTarget===!0,oe=q.length>1;if(oe||(z.__webglTexture===void 0&&(z.__webglTexture=i.createTexture()),z.__version=b.version,a.memory.textures++),ie){O.__webglFramebuffer=[];for(let Y=0;Y<6;Y++)if(b.mipmaps&&b.mipmaps.length>0){O.__webglFramebuffer[Y]=[];for(let Z=0;Z<b.mipmaps.length;Z++)O.__webglFramebuffer[Y][Z]=i.createFramebuffer()}else O.__webglFramebuffer[Y]=i.createFramebuffer()}else{if(b.mipmaps&&b.mipmaps.length>0){O.__webglFramebuffer=[];for(let Y=0;Y<b.mipmaps.length;Y++)O.__webglFramebuffer[Y]=i.createFramebuffer()}else O.__webglFramebuffer=i.createFramebuffer();if(oe)for(let Y=0,Z=q.length;Y<Z;Y++){const le=n.get(q[Y]);le.__webglTexture===void 0&&(le.__webglTexture=i.createTexture(),a.memory.textures++)}if(C.samples>0&&bt(C)===!1){O.__webglMultisampledFramebuffer=i.createFramebuffer(),O.__webglColorRenderbuffer=[],t.bindFramebuffer(i.FRAMEBUFFER,O.__webglMultisampledFramebuffer);for(let Y=0;Y<q.length;Y++){const Z=q[Y];O.__webglColorRenderbuffer[Y]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,O.__webglColorRenderbuffer[Y]);const le=r.convert(Z.format,Z.colorSpace),we=r.convert(Z.type),he=y(Z.internalFormat,le,we,Z.normalized,Z.colorSpace,C.isXRRenderTarget===!0),ce=ht(C);i.renderbufferStorageMultisample(i.RENDERBUFFER,ce,he,C.width,C.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Y,i.RENDERBUFFER,O.__webglColorRenderbuffer[Y])}i.bindRenderbuffer(i.RENDERBUFFER,null),C.depthBuffer&&(O.__webglDepthRenderbuffer=i.createRenderbuffer(),pt(O.__webglDepthRenderbuffer,C,!0)),t.bindFramebuffer(i.FRAMEBUFFER,null)}}if(ie){t.bindTexture(i.TEXTURE_CUBE_MAP,z.__webglTexture),Ke(i.TEXTURE_CUBE_MAP,b);for(let Y=0;Y<6;Y++)if(b.mipmaps&&b.mipmaps.length>0)for(let Z=0;Z<b.mipmaps.length;Z++)Ne(O.__webglFramebuffer[Y][Z],C,b,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+Y,Z);else Ne(O.__webglFramebuffer[Y],C,b,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+Y,0);m(b)&&M(i.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(oe){for(let Y=0,Z=q.length;Y<Z;Y++){const le=q[Y],we=n.get(le);let he=i.TEXTURE_2D;(C.isWebGL3DRenderTarget||C.isWebGLArrayRenderTarget)&&(he=C.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),t.bindTexture(he,we.__webglTexture),Ke(he,le),Ne(O.__webglFramebuffer,C,le,i.COLOR_ATTACHMENT0+Y,he,0),m(le)&&M(he)}t.unbindTexture()}else{let Y=i.TEXTURE_2D;if((C.isWebGL3DRenderTarget||C.isWebGLArrayRenderTarget)&&(Y=C.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),t.bindTexture(Y,z.__webglTexture),Ke(Y,b),b.mipmaps&&b.mipmaps.length>0)for(let Z=0;Z<b.mipmaps.length;Z++)Ne(O.__webglFramebuffer[Z],C,b,i.COLOR_ATTACHMENT0,Y,Z);else Ne(O.__webglFramebuffer,C,b,i.COLOR_ATTACHMENT0,Y,0);m(b)&&M(Y),t.unbindTexture()}C.depthBuffer&&st(C)}function _t(C){const b=C.textures;for(let O=0,z=b.length;O<z;O++){const q=b[O];if(m(q)){const ie=T(C),oe=n.get(q).__webglTexture;t.bindTexture(ie,oe),M(ie),t.unbindTexture()}}}const yt=[],At=[];function Nt(C){if(C.samples>0){if(bt(C)===!1){const b=C.textures,O=C.width,z=C.height;let q=i.COLOR_BUFFER_BIT;const ie=C.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,oe=n.get(C),Y=b.length>1;if(Y)for(let le=0;le<b.length;le++)t.bindFramebuffer(i.FRAMEBUFFER,oe.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+le,i.RENDERBUFFER,null),t.bindFramebuffer(i.FRAMEBUFFER,oe.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+le,i.TEXTURE_2D,null,0);t.bindFramebuffer(i.READ_FRAMEBUFFER,oe.__webglMultisampledFramebuffer);const Z=C.texture.mipmaps;Z&&Z.length>0?t.bindFramebuffer(i.DRAW_FRAMEBUFFER,oe.__webglFramebuffer[0]):t.bindFramebuffer(i.DRAW_FRAMEBUFFER,oe.__webglFramebuffer);for(let le=0;le<b.length;le++){if(C.resolveDepthBuffer&&(C.depthBuffer&&(q|=i.DEPTH_BUFFER_BIT),C.stencilBuffer&&C.resolveStencilBuffer&&(q|=i.STENCIL_BUFFER_BIT)),Y){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,oe.__webglColorRenderbuffer[le]);const we=n.get(b[le]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,we,0)}i.blitFramebuffer(0,0,O,z,0,0,O,z,q,i.NEAREST),l===!0&&(yt.length=0,At.length=0,yt.push(i.COLOR_ATTACHMENT0+le),C.depthBuffer&&C.resolveDepthBuffer===!1&&(yt.push(ie),At.push(ie),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,At)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,yt))}if(t.bindFramebuffer(i.READ_FRAMEBUFFER,null),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),Y)for(let le=0;le<b.length;le++){t.bindFramebuffer(i.FRAMEBUFFER,oe.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+le,i.RENDERBUFFER,oe.__webglColorRenderbuffer[le]);const we=n.get(b[le]).__webglTexture;t.bindFramebuffer(i.FRAMEBUFFER,oe.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+le,i.TEXTURE_2D,we,0)}t.bindFramebuffer(i.DRAW_FRAMEBUFFER,oe.__webglMultisampledFramebuffer)}else if(C.depthBuffer&&C.resolveDepthBuffer===!1&&l){const b=C.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[b])}}}function ht(C){return Math.min(s.maxSamples,C.samples)}function bt(C){const b=n.get(C);return C.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&b.__useRenderToTexture!==!1}function L(C){const b=a.render.frame;h.get(C)!==b&&(h.set(C,b),C.update())}function zt(C,b){const O=C.colorSpace,z=C.format,q=C.type;return C.isCompressedTexture===!0||C.isVideoTexture===!0||O!==Kt&&O!==Jn&&(je.getTransfer(O)===Je?(z!==en||q!==Yt)&&Me("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):De("WebGLTextures: Unsupported texture color space:",O)),b}function Ze(C){return typeof HTMLImageElement<"u"&&C instanceof HTMLImageElement?(d.width=C.naturalWidth||C.width,d.height=C.naturalHeight||C.height):typeof VideoFrame<"u"&&C instanceof VideoFrame?(d.width=C.displayWidth,d.height=C.displayHeight):(d.width=C.width,d.height=C.height),d}this.allocateTextureUnit=X,this.resetTextureUnits=j,this.getTextureUnits=K,this.setTextureUnits=k,this.setTexture2D=Q,this.setTexture2DArray=V,this.setTexture3D=ee,this.setTextureCube=se,this.rebindTextures=$e,this.setupRenderTarget=qe,this.updateRenderTargetMipmap=_t,this.updateMultisampleRenderTarget=Nt,this.setupDepthRenderbuffer=st,this.setupFrameBufferTexture=Ne,this.useMultisampledRTT=bt,this.isReversedDepthBuffer=function(){return t.buffers.depth.getReversed()}}function A0(i,e){function t(n,s=Jn){let r;const a=je.getTransfer(s);if(n===Yt)return i.UNSIGNED_BYTE;if(n===mo)return i.UNSIGNED_SHORT_4_4_4_4;if(n===go)return i.UNSIGNED_SHORT_5_5_5_1;if(n===qc)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===Yc)return i.UNSIGNED_INT_10F_11F_11F_REV;if(n===Wc)return i.BYTE;if(n===Xc)return i.SHORT;if(n===fs)return i.UNSIGNED_SHORT;if(n===po)return i.INT;if(n===Mn)return i.UNSIGNED_INT;if(n===Qt)return i.FLOAT;if(n===Bn)return i.HALF_FLOAT;if(n===Kc)return i.ALPHA;if(n===$c)return i.RGB;if(n===en)return i.RGBA;if(n===Gn)return i.DEPTH_COMPONENT;if(n===di)return i.DEPTH_STENCIL;if(n===xo)return i.RED;if(n===_o)return i.RED_INTEGER;if(n===pi)return i.RG;if(n===bo)return i.RG_INTEGER;if(n===vo)return i.RGBA_INTEGER;if(n===ir||n===sr||n===rr||n===ar)if(a===Je)if(r=e.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===ir)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===sr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===rr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===ar)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=e.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===ir)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===sr)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===rr)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===ar)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===Ta||n===Aa||n===Ra||n===Ca)if(r=e.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===Ta)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===Aa)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===Ra)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===Ca)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===Na||n===Pa||n===Ia||n===Da||n===La||n===cr||n===Ua)if(r=e.get("WEBGL_compressed_texture_etc"),r!==null){if(n===Na||n===Pa)return a===Je?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===Ia)return a===Je?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC;if(n===Da)return r.COMPRESSED_R11_EAC;if(n===La)return r.COMPRESSED_SIGNED_R11_EAC;if(n===cr)return r.COMPRESSED_RG11_EAC;if(n===Ua)return r.COMPRESSED_SIGNED_RG11_EAC}else return null;if(n===Fa||n===Oa||n===ka||n===Ba||n===Ga||n===za||n===Va||n===Ha||n===ja||n===Wa||n===Xa||n===qa||n===Ya||n===Ka)if(r=e.get("WEBGL_compressed_texture_astc"),r!==null){if(n===Fa)return a===Je?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===Oa)return a===Je?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===ka)return a===Je?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===Ba)return a===Je?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===Ga)return a===Je?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===za)return a===Je?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===Va)return a===Je?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===Ha)return a===Je?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===ja)return a===Je?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===Wa)return a===Je?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===Xa)return a===Je?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===qa)return a===Je?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===Ya)return a===Je?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===Ka)return a===Je?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===$a||n===Za||n===Ja)if(r=e.get("EXT_texture_compression_bptc"),r!==null){if(n===$a)return a===Je?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===Za)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===Ja)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===Qa||n===eo||n===dr||n===to)if(r=e.get("EXT_texture_compression_rgtc"),r!==null){if(n===Qa)return r.COMPRESSED_RED_RGTC1_EXT;if(n===eo)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===dr)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===to)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===ps?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:t}}const R0=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,C0=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class N0{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){const n=new ld(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=n}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,n=new En({vertexShader:R0,fragmentShader:C0,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new jt(new br(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class P0 extends ti{constructor(e,t){super();const n=this;let s=null,r=1,a=null,o="local-floor",l=1,d=null,h=null,f=null,u=null,p=null,x=null;const v=typeof XRWebGLBinding<"u",g=new N0,m={},M=t.getContextAttributes();let T=null,y=null;const A=[],w=[],R=new Ce;let _=null;const E=new Gt;E.viewport=new it;const N=new Gt;N.viewport=new it;const P=[E,N],F=new Cf;let j=null,K=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(J){let ae=A[J];return ae===void 0&&(ae=new Fr,A[J]=ae),ae.getTargetRaySpace()},this.getControllerGrip=function(J){let ae=A[J];return ae===void 0&&(ae=new Fr,A[J]=ae),ae.getGripSpace()},this.getHand=function(J){let ae=A[J];return ae===void 0&&(ae=new Fr,A[J]=ae),ae.getHandSpace()};function k(J){const ae=w.indexOf(J.inputSource);if(ae===-1)return;const ne=A[ae];ne!==void 0&&(ne.update(J.inputSource,J.frame,d||a),ne.dispatchEvent({type:J.type,data:J.inputSource}))}function X(){s.removeEventListener("select",k),s.removeEventListener("selectstart",k),s.removeEventListener("selectend",k),s.removeEventListener("squeeze",k),s.removeEventListener("squeezestart",k),s.removeEventListener("squeezeend",k),s.removeEventListener("end",X),s.removeEventListener("inputsourceschange",W);for(let J=0;J<A.length;J++){const ae=w[J];ae!==null&&(w[J]=null,A[J].disconnect(ae))}j=null,K=null,g.reset();for(const J in m)delete m[J];e.setRenderTarget(T),p=null,u=null,f=null,s=null,y=null,Ke.stop(),n.isPresenting=!1,e.setPixelRatio(_),e.setSize(R.width,R.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(J){r=J,n.isPresenting===!0&&Me("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(J){o=J,n.isPresenting===!0&&Me("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return d||a},this.setReferenceSpace=function(J){d=J},this.getBaseLayer=function(){return u!==null?u:p},this.getBinding=function(){return f===null&&v&&(f=new XRWebGLBinding(s,t)),f},this.getFrame=function(){return x},this.getSession=function(){return s},this.setSession=async function(J){if(s=J,s!==null){if(T=e.getRenderTarget(),s.addEventListener("select",k),s.addEventListener("selectstart",k),s.addEventListener("selectend",k),s.addEventListener("squeeze",k),s.addEventListener("squeezestart",k),s.addEventListener("squeezeend",k),s.addEventListener("end",X),s.addEventListener("inputsourceschange",W),M.xrCompatible!==!0&&await t.makeXRCompatible(),_=e.getPixelRatio(),e.getSize(R),v&&"createProjectionLayer"in XRWebGLBinding.prototype){let ne=null,Le=null,Fe=null;M.depth&&(Fe=M.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,ne=M.stencil?di:Gn,Le=M.stencil?ps:Mn);const Ne={colorFormat:t.RGBA8,depthFormat:Fe,scaleFactor:r};f=this.getBinding(),u=f.createProjectionLayer(Ne),s.updateRenderState({layers:[u]}),e.setPixelRatio(1),e.setSize(u.textureWidth,u.textureHeight,!1),y=new Sn(u.textureWidth,u.textureHeight,{format:en,type:Yt,depthTexture:new Hi(u.textureWidth,u.textureHeight,Le,void 0,void 0,void 0,void 0,void 0,void 0,ne),stencilBuffer:M.stencil,colorSpace:e.outputColorSpace,samples:M.antialias?4:0,resolveDepthBuffer:u.ignoreDepthValues===!1,resolveStencilBuffer:u.ignoreDepthValues===!1})}else{const ne={antialias:M.antialias,alpha:!0,depth:M.depth,stencil:M.stencil,framebufferScaleFactor:r};p=new XRWebGLLayer(s,t,ne),s.updateRenderState({baseLayer:p}),e.setPixelRatio(1),e.setSize(p.framebufferWidth,p.framebufferHeight,!1),y=new Sn(p.framebufferWidth,p.framebufferHeight,{format:en,type:Yt,colorSpace:e.outputColorSpace,stencilBuffer:M.stencil,resolveDepthBuffer:p.ignoreDepthValues===!1,resolveStencilBuffer:p.ignoreDepthValues===!1})}y.isXRRenderTarget=!0,this.setFoveation(l),d=null,a=await s.requestReferenceSpace(o),Ke.setContext(s),Ke.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return g.getDepthTexture()};function W(J){for(let ae=0;ae<J.removed.length;ae++){const ne=J.removed[ae],Le=w.indexOf(ne);Le>=0&&(w[Le]=null,A[Le].disconnect(ne))}for(let ae=0;ae<J.added.length;ae++){const ne=J.added[ae];let Le=w.indexOf(ne);if(Le===-1){for(let Ne=0;Ne<A.length;Ne++)if(Ne>=w.length){w.push(ne),Le=Ne;break}else if(w[Ne]===null){w[Ne]=ne,Le=Ne;break}if(Le===-1)break}const Fe=A[Le];Fe&&Fe.connect(ne)}}const Q=new D,V=new D;function ee(J,ae,ne){Q.setFromMatrixPosition(ae.matrixWorld),V.setFromMatrixPosition(ne.matrixWorld);const Le=Q.distanceTo(V),Fe=ae.projectionMatrix.elements,Ne=ne.projectionMatrix.elements,pt=Fe[14]/(Fe[10]-1),We=Fe[14]/(Fe[10]+1),st=(Fe[9]+1)/Fe[5],$e=(Fe[9]-1)/Fe[5],qe=(Fe[8]-1)/Fe[0],_t=(Ne[8]+1)/Ne[0],yt=pt*qe,At=pt*_t,Nt=Le/(-qe+_t),ht=Nt*-qe;if(ae.matrixWorld.decompose(J.position,J.quaternion,J.scale),J.translateX(ht),J.translateZ(Nt),J.matrixWorld.compose(J.position,J.quaternion,J.scale),J.matrixWorldInverse.copy(J.matrixWorld).invert(),Fe[10]===-1)J.projectionMatrix.copy(ae.projectionMatrix),J.projectionMatrixInverse.copy(ae.projectionMatrixInverse);else{const bt=pt+Nt,L=We+Nt,zt=yt-ht,Ze=At+(Le-ht),C=st*We/L*bt,b=$e*We/L*bt;J.projectionMatrix.makePerspective(zt,Ze,C,b,bt,L),J.projectionMatrixInverse.copy(J.projectionMatrix).invert()}}function se(J,ae){ae===null?J.matrixWorld.copy(J.matrix):J.matrixWorld.multiplyMatrices(ae.matrixWorld,J.matrix),J.matrixWorldInverse.copy(J.matrixWorld).invert()}this.updateCamera=function(J){if(s===null)return;let ae=J.near,ne=J.far;g.texture!==null&&(g.depthNear>0&&(ae=g.depthNear),g.depthFar>0&&(ne=g.depthFar)),F.near=N.near=E.near=ae,F.far=N.far=E.far=ne,(j!==F.near||K!==F.far)&&(s.updateRenderState({depthNear:F.near,depthFar:F.far}),j=F.near,K=F.far),F.layers.mask=J.layers.mask|6,E.layers.mask=F.layers.mask&-5,N.layers.mask=F.layers.mask&-3;const Le=J.parent,Fe=F.cameras;se(F,Le);for(let Ne=0;Ne<Fe.length;Ne++)se(Fe[Ne],Le);Fe.length===2?ee(F,E,N):F.projectionMatrix.copy(E.projectionMatrix),ge(J,F,Le)};function ge(J,ae,ne){ne===null?J.matrix.copy(ae.matrixWorld):(J.matrix.copy(ne.matrixWorld),J.matrix.invert(),J.matrix.multiply(ae.matrixWorld)),J.matrix.decompose(J.position,J.quaternion,J.scale),J.updateMatrixWorld(!0),J.projectionMatrix.copy(ae.projectionMatrix),J.projectionMatrixInverse.copy(ae.projectionMatrixInverse),J.isPerspectiveCamera&&(J.fov=Vi*2*Math.atan(1/J.projectionMatrix.elements[5]),J.zoom=1)}this.getCamera=function(){return F},this.getFoveation=function(){if(!(u===null&&p===null))return l},this.setFoveation=function(J){l=J,u!==null&&(u.fixedFoveation=J),p!==null&&p.fixedFoveation!==void 0&&(p.fixedFoveation=J)},this.hasDepthSensing=function(){return g.texture!==null},this.getDepthSensingMesh=function(){return g.getMesh(F)},this.getCameraTexture=function(J){return m[J]};let Xe=null;function dt(J,ae){if(h=ae.getViewerPose(d||a),x=ae,h!==null){const ne=h.views;p!==null&&(e.setRenderTargetFramebuffer(y,p.framebuffer),e.setRenderTarget(y));let Le=!1;ne.length!==F.cameras.length&&(F.cameras.length=0,Le=!0);for(let We=0;We<ne.length;We++){const st=ne[We];let $e=null;if(p!==null)$e=p.getViewport(st);else{const _t=f.getViewSubImage(u,st);$e=_t.viewport,We===0&&(e.setRenderTargetTextures(y,_t.colorTexture,_t.depthStencilTexture),e.setRenderTarget(y))}let qe=P[We];qe===void 0&&(qe=new Gt,qe.layers.enable(We),qe.viewport=new it,P[We]=qe),qe.matrix.fromArray(st.transform.matrix),qe.matrix.decompose(qe.position,qe.quaternion,qe.scale),qe.projectionMatrix.fromArray(st.projectionMatrix),qe.projectionMatrixInverse.copy(qe.projectionMatrix).invert(),qe.viewport.set($e.x,$e.y,$e.width,$e.height),We===0&&(F.matrix.copy(qe.matrix),F.matrix.decompose(F.position,F.quaternion,F.scale)),Le===!0&&F.cameras.push(qe)}const Fe=s.enabledFeatures;if(Fe&&Fe.includes("depth-sensing")&&s.depthUsage=="gpu-optimized"&&v){f=n.getBinding();const We=f.getDepthInformation(ne[0]);We&&We.isValid&&We.texture&&g.init(We,s.renderState)}if(Fe&&Fe.includes("camera-access")&&v){e.state.unbindTexture(),f=n.getBinding();for(let We=0;We<ne.length;We++){const st=ne[We].camera;if(st){let $e=m[st];$e||($e=new ld,m[st]=$e);const qe=f.getCameraImage(st);$e.sourceTexture=qe}}}}for(let ne=0;ne<A.length;ne++){const Le=w[ne],Fe=A[ne];Le!==null&&Fe!==void 0&&Fe.update(Le,ae,d||a)}Xe&&Xe(J,ae),ae.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:ae}),x=null}const Ke=new pd;Ke.setAnimationLoop(dt),this.setAnimationLoop=function(J){Xe=J},this.dispose=function(){}}}const I0=new Ge,yd=new Ue;yd.set(-1,0,0,0,1,0,0,0,1);function D0(i,e){function t(g,m){g.matrixAutoUpdate===!0&&g.updateMatrix(),m.value.copy(g.matrix)}function n(g,m){m.color.getRGB(g.fogColor.value,cd(i)),m.isFog?(g.fogNear.value=m.near,g.fogFar.value=m.far):m.isFogExp2&&(g.fogDensity.value=m.density)}function s(g,m,M,T,y){m.isNodeMaterial?m.uniformsNeedUpdate=!1:m.isMeshBasicMaterial?r(g,m):m.isMeshLambertMaterial?(r(g,m),m.envMap&&(g.envMapIntensity.value=m.envMapIntensity)):m.isMeshToonMaterial?(r(g,m),f(g,m)):m.isMeshPhongMaterial?(r(g,m),h(g,m),m.envMap&&(g.envMapIntensity.value=m.envMapIntensity)):m.isMeshStandardMaterial?(r(g,m),u(g,m),m.isMeshPhysicalMaterial&&p(g,m,y)):m.isMeshMatcapMaterial?(r(g,m),x(g,m)):m.isMeshDepthMaterial?r(g,m):m.isMeshDistanceMaterial?(r(g,m),v(g,m)):m.isMeshNormalMaterial?r(g,m):m.isLineBasicMaterial?(a(g,m),m.isLineDashedMaterial&&o(g,m)):m.isPointsMaterial?l(g,m,M,T):m.isSpriteMaterial?d(g,m):m.isShadowMaterial?(g.color.value.copy(m.color),g.opacity.value=m.opacity):m.isShaderMaterial&&(m.uniformsNeedUpdate=!1)}function r(g,m){g.opacity.value=m.opacity,m.color&&g.diffuse.value.copy(m.color),m.emissive&&g.emissive.value.copy(m.emissive).multiplyScalar(m.emissiveIntensity),m.map&&(g.map.value=m.map,t(m.map,g.mapTransform)),m.alphaMap&&(g.alphaMap.value=m.alphaMap,t(m.alphaMap,g.alphaMapTransform)),m.bumpMap&&(g.bumpMap.value=m.bumpMap,t(m.bumpMap,g.bumpMapTransform),g.bumpScale.value=m.bumpScale,m.side===Ht&&(g.bumpScale.value*=-1)),m.normalMap&&(g.normalMap.value=m.normalMap,t(m.normalMap,g.normalMapTransform),g.normalScale.value.copy(m.normalScale),m.side===Ht&&g.normalScale.value.negate()),m.displacementMap&&(g.displacementMap.value=m.displacementMap,t(m.displacementMap,g.displacementMapTransform),g.displacementScale.value=m.displacementScale,g.displacementBias.value=m.displacementBias),m.emissiveMap&&(g.emissiveMap.value=m.emissiveMap,t(m.emissiveMap,g.emissiveMapTransform)),m.specularMap&&(g.specularMap.value=m.specularMap,t(m.specularMap,g.specularMapTransform)),m.alphaTest>0&&(g.alphaTest.value=m.alphaTest);const M=e.get(m),T=M.envMap,y=M.envMapRotation;T&&(g.envMap.value=T,g.envMapRotation.value.setFromMatrix4(I0.makeRotationFromEuler(y)).transpose(),T.isCubeTexture&&T.isRenderTargetTexture===!1&&g.envMapRotation.value.premultiply(yd),g.reflectivity.value=m.reflectivity,g.ior.value=m.ior,g.refractionRatio.value=m.refractionRatio),m.lightMap&&(g.lightMap.value=m.lightMap,g.lightMapIntensity.value=m.lightMapIntensity,t(m.lightMap,g.lightMapTransform)),m.aoMap&&(g.aoMap.value=m.aoMap,g.aoMapIntensity.value=m.aoMapIntensity,t(m.aoMap,g.aoMapTransform))}function a(g,m){g.diffuse.value.copy(m.color),g.opacity.value=m.opacity,m.map&&(g.map.value=m.map,t(m.map,g.mapTransform))}function o(g,m){g.dashSize.value=m.dashSize,g.totalSize.value=m.dashSize+m.gapSize,g.scale.value=m.scale}function l(g,m,M,T){g.diffuse.value.copy(m.color),g.opacity.value=m.opacity,g.size.value=m.size*M,g.scale.value=T*.5,m.map&&(g.map.value=m.map,t(m.map,g.uvTransform)),m.alphaMap&&(g.alphaMap.value=m.alphaMap,t(m.alphaMap,g.alphaMapTransform)),m.alphaTest>0&&(g.alphaTest.value=m.alphaTest)}function d(g,m){g.diffuse.value.copy(m.color),g.opacity.value=m.opacity,g.rotation.value=m.rotation,m.map&&(g.map.value=m.map,t(m.map,g.mapTransform)),m.alphaMap&&(g.alphaMap.value=m.alphaMap,t(m.alphaMap,g.alphaMapTransform)),m.alphaTest>0&&(g.alphaTest.value=m.alphaTest)}function h(g,m){g.specular.value.copy(m.specular),g.shininess.value=Math.max(m.shininess,1e-4)}function f(g,m){m.gradientMap&&(g.gradientMap.value=m.gradientMap)}function u(g,m){g.metalness.value=m.metalness,m.metalnessMap&&(g.metalnessMap.value=m.metalnessMap,t(m.metalnessMap,g.metalnessMapTransform)),g.roughness.value=m.roughness,m.roughnessMap&&(g.roughnessMap.value=m.roughnessMap,t(m.roughnessMap,g.roughnessMapTransform)),m.envMap&&(g.envMapIntensity.value=m.envMapIntensity)}function p(g,m,M){g.ior.value=m.ior,m.sheen>0&&(g.sheenColor.value.copy(m.sheenColor).multiplyScalar(m.sheen),g.sheenRoughness.value=m.sheenRoughness,m.sheenColorMap&&(g.sheenColorMap.value=m.sheenColorMap,t(m.sheenColorMap,g.sheenColorMapTransform)),m.sheenRoughnessMap&&(g.sheenRoughnessMap.value=m.sheenRoughnessMap,t(m.sheenRoughnessMap,g.sheenRoughnessMapTransform))),m.clearcoat>0&&(g.clearcoat.value=m.clearcoat,g.clearcoatRoughness.value=m.clearcoatRoughness,m.clearcoatMap&&(g.clearcoatMap.value=m.clearcoatMap,t(m.clearcoatMap,g.clearcoatMapTransform)),m.clearcoatRoughnessMap&&(g.clearcoatRoughnessMap.value=m.clearcoatRoughnessMap,t(m.clearcoatRoughnessMap,g.clearcoatRoughnessMapTransform)),m.clearcoatNormalMap&&(g.clearcoatNormalMap.value=m.clearcoatNormalMap,t(m.clearcoatNormalMap,g.clearcoatNormalMapTransform),g.clearcoatNormalScale.value.copy(m.clearcoatNormalScale),m.side===Ht&&g.clearcoatNormalScale.value.negate())),m.dispersion>0&&(g.dispersion.value=m.dispersion),m.iridescence>0&&(g.iridescence.value=m.iridescence,g.iridescenceIOR.value=m.iridescenceIOR,g.iridescenceThicknessMinimum.value=m.iridescenceThicknessRange[0],g.iridescenceThicknessMaximum.value=m.iridescenceThicknessRange[1],m.iridescenceMap&&(g.iridescenceMap.value=m.iridescenceMap,t(m.iridescenceMap,g.iridescenceMapTransform)),m.iridescenceThicknessMap&&(g.iridescenceThicknessMap.value=m.iridescenceThicknessMap,t(m.iridescenceThicknessMap,g.iridescenceThicknessMapTransform))),m.transmission>0&&(g.transmission.value=m.transmission,g.transmissionSamplerMap.value=M.texture,g.transmissionSamplerSize.value.set(M.width,M.height),m.transmissionMap&&(g.transmissionMap.value=m.transmissionMap,t(m.transmissionMap,g.transmissionMapTransform)),g.thickness.value=m.thickness,m.thicknessMap&&(g.thicknessMap.value=m.thicknessMap,t(m.thicknessMap,g.thicknessMapTransform)),g.attenuationDistance.value=m.attenuationDistance,g.attenuationColor.value.copy(m.attenuationColor)),m.anisotropy>0&&(g.anisotropyVector.value.set(m.anisotropy*Math.cos(m.anisotropyRotation),m.anisotropy*Math.sin(m.anisotropyRotation)),m.anisotropyMap&&(g.anisotropyMap.value=m.anisotropyMap,t(m.anisotropyMap,g.anisotropyMapTransform))),g.specularIntensity.value=m.specularIntensity,g.specularColor.value.copy(m.specularColor),m.specularColorMap&&(g.specularColorMap.value=m.specularColorMap,t(m.specularColorMap,g.specularColorMapTransform)),m.specularIntensityMap&&(g.specularIntensityMap.value=m.specularIntensityMap,t(m.specularIntensityMap,g.specularIntensityMapTransform))}function x(g,m){m.matcap&&(g.matcap.value=m.matcap)}function v(g,m){const M=e.get(m).light;g.referencePosition.value.setFromMatrixPosition(M.matrixWorld),g.nearDistance.value=M.shadow.camera.near,g.farDistance.value=M.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:s}}function L0(i,e,t,n){let s={},r={},a=[];const o=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function l(y,A){const w=A.program;n.uniformBlockBinding(y,w)}function d(y,A){let w=s[y.id];w===void 0&&(g(y),w=h(y),s[y.id]=w,y.addEventListener("dispose",M));const R=A.program;n.updateUBOMapping(y,R);const _=e.render.frame;r[y.id]!==_&&(u(y),r[y.id]=_)}function h(y){const A=f();y.__bindingPointIndex=A;const w=i.createBuffer(),R=y.__size,_=y.usage;return i.bindBuffer(i.UNIFORM_BUFFER,w),i.bufferData(i.UNIFORM_BUFFER,R,_),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,A,w),w}function f(){for(let y=0;y<o;y++)if(a.indexOf(y)===-1)return a.push(y),y;return De("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function u(y){const A=s[y.id],w=y.uniforms,R=y.__cache;i.bindBuffer(i.UNIFORM_BUFFER,A);for(let _=0,E=w.length;_<E;_++){const N=w[_];if(Array.isArray(N))for(let P=0,F=N.length;P<F;P++)p(N[P],_,P,R);else p(N,_,0,R)}i.bindBuffer(i.UNIFORM_BUFFER,null)}function p(y,A,w,R){if(v(y,A,w,R)===!0){const _=y.__offset,E=y.value;if(Array.isArray(E)){let N=0;for(let P=0;P<E.length;P++){const F=E[P],j=m(F);x(F,y.__data,N),typeof F!="number"&&typeof F!="boolean"&&!F.isMatrix3&&!ArrayBuffer.isView(F)&&(N+=j.storage/Float32Array.BYTES_PER_ELEMENT)}}else x(E,y.__data,0);i.bufferSubData(i.UNIFORM_BUFFER,_,y.__data)}}function x(y,A,w){typeof y=="number"||typeof y=="boolean"?A[0]=y:y.isMatrix3?(A[0]=y.elements[0],A[1]=y.elements[1],A[2]=y.elements[2],A[3]=0,A[4]=y.elements[3],A[5]=y.elements[4],A[6]=y.elements[5],A[7]=0,A[8]=y.elements[6],A[9]=y.elements[7],A[10]=y.elements[8],A[11]=0):ArrayBuffer.isView(y)?A.set(new y.constructor(y.buffer,y.byteOffset,A.length)):y.toArray(A,w)}function v(y,A,w,R){const _=y.value,E=A+"_"+w;if(R[E]===void 0)return typeof _=="number"||typeof _=="boolean"?R[E]=_:ArrayBuffer.isView(_)?R[E]=_.slice():R[E]=_.clone(),!0;{const N=R[E];if(typeof _=="number"||typeof _=="boolean"){if(N!==_)return R[E]=_,!0}else{if(ArrayBuffer.isView(_))return!0;if(N.equals(_)===!1)return N.copy(_),!0}}return!1}function g(y){const A=y.uniforms;let w=0;const R=16;for(let E=0,N=A.length;E<N;E++){const P=Array.isArray(A[E])?A[E]:[A[E]];for(let F=0,j=P.length;F<j;F++){const K=P[F],k=Array.isArray(K.value)?K.value:[K.value];for(let X=0,W=k.length;X<W;X++){const Q=k[X],V=m(Q),ee=w%R,se=ee%V.boundary,ge=ee+se;w+=se,ge!==0&&R-ge<V.storage&&(w+=R-ge),K.__data=new Float32Array(V.storage/Float32Array.BYTES_PER_ELEMENT),K.__offset=w,w+=V.storage}}}const _=w%R;return _>0&&(w+=R-_),y.__size=w,y.__cache={},this}function m(y){const A={boundary:0,storage:0};return typeof y=="number"||typeof y=="boolean"?(A.boundary=4,A.storage=4):y.isVector2?(A.boundary=8,A.storage=8):y.isVector3||y.isColor?(A.boundary=16,A.storage=12):y.isVector4?(A.boundary=16,A.storage=16):y.isMatrix3?(A.boundary=48,A.storage=48):y.isMatrix4?(A.boundary=64,A.storage=64):y.isTexture?Me("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(y)?(A.boundary=16,A.storage=y.byteLength):Me("WebGLRenderer: Unsupported uniform value type.",y),A}function M(y){const A=y.target;A.removeEventListener("dispose",M);const w=a.indexOf(A.__bindingPointIndex);a.splice(w,1),i.deleteBuffer(s[A.id]),delete s[A.id],delete r[A.id]}function T(){for(const y in s)i.deleteBuffer(s[y]);a=[],s={},r={}}return{bind:l,update:d,dispose:T}}const U0=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]);let mn=null;function F0(){return mn===null&&(mn=new Ao(U0,16,16,pi,Bn),mn.name="DFG_LUT",mn.minFilter=Et,mn.magFilter=Et,mn.wrapS=bn,mn.wrapT=bn,mn.generateMipmaps=!1,mn.needsUpdate=!0),mn}class O0{constructor(e={}){const{canvas:t=iu(),context:n=null,depth:s=!0,stencil:r=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:d=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:f=!1,reversedDepthBuffer:u=!1,outputBufferType:p=Yt}=e;this.isWebGLRenderer=!0;let x;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");x=n.getContextAttributes().alpha}else x=a;const v=p,g=new Set([vo,bo,_o]),m=new Set([Yt,Mn,fs,ps,mo,go]),M=new Uint32Array(4),T=new Int32Array(4),y=new D;let A=null,w=null;const R=[],_=[];let E=null;this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=yn,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const N=this;let P=!1,F=null,j=null,K=null,k=null;this._outputColorSpace=Pt;let X=0,W=0,Q=null,V=-1,ee=null;const se=new it,ge=new it;let Xe=null;const dt=new Ie(0);let Ke=0,J=t.width,ae=t.height,ne=1,Le=null,Fe=null;const Ne=new it(0,0,J,ae),pt=new it(0,0,J,ae);let We=!1;const st=new Co;let $e=!1,qe=!1;const _t=new Ge,yt=new D,At=new it,Nt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let ht=!1;function bt(){return Q===null?ne:1}let L=n;function zt(S,U){return t.getContext(S,U)}try{const S={alpha:!0,depth:s,stencil:r,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:d,powerPreference:h,failIfMajorPerformanceCaveat:f};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${fo}`),t.addEventListener("webglcontextlost",ut,!1),t.addEventListener("webglcontextrestored",ot,!1),t.addEventListener("webglcontextcreationerror",hn,!1),L===null){const U="webgl2";if(L=zt(U,S),L===null)throw zt(U)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}}catch(S){throw De("WebGLRenderer: "+S.message),S}let Ze,C,b,O,z,q,ie,oe,Y,Z,le,we,he,ce,Re,Pe,Oe,I,re,$,de,me,te;function Ee(){Ze=new Fg(L),Ze.init(),de=new A0(L,Ze),C=new Rg(L,Ze,e,de),b=new w0(L,Ze),C.reversedDepthBuffer&&u&&b.buffers.depth.setReversed(!0),j=L.createFramebuffer(),K=L.createFramebuffer(),k=L.createFramebuffer(),O=new Bg(L),z=new h0,q=new T0(L,Ze,b,z,C,de,O),ie=new Ug(N),oe=new Hf(L),me=new Tg(L,oe),Y=new Og(L,oe,O,me),Z=new zg(L,Y,oe,me,O),I=new Gg(L,C,q),Re=new Cg(z),le=new d0(N,ie,Ze,C,me,Re),we=new D0(N,z),he=new f0,ce=new b0(Ze),Oe=new wg(N,ie,b,Z,x,l),Pe=new E0(N,Z,C),te=new L0(L,O,C,b),re=new Ag(L,Ze,O),$=new kg(L,Ze,O),O.programs=le.programs,N.capabilities=C,N.extensions=Ze,N.properties=z,N.renderLists=he,N.shadowMap=Pe,N.state=b,N.info=O}Ee(),v!==Yt&&(E=new Hg(v,t.width,t.height,o,s,r));const ve=new P0(N,L);this.xr=ve,this.getContext=function(){return L},this.getContextAttributes=function(){return L.getContextAttributes()},this.forceContextLoss=function(){const S=Ze.get("WEBGL_lose_context");S&&S.loseContext()},this.forceContextRestore=function(){const S=Ze.get("WEBGL_lose_context");S&&S.restoreContext()},this.getPixelRatio=function(){return ne},this.setPixelRatio=function(S){S!==void 0&&(ne=S,this.setSize(J,ae,!1))},this.getSize=function(S){return S.set(J,ae)},this.setSize=function(S,U,H=!0){if(ve.isPresenting){Me("WebGLRenderer: Can't change size while VR device is presenting.");return}J=S,ae=U,t.width=Math.floor(S*ne),t.height=Math.floor(U*ne),H===!0&&(t.style.width=S+"px",t.style.height=U+"px"),E!==null&&E.setSize(t.width,t.height),this.setViewport(0,0,S,U)},this.getDrawingBufferSize=function(S){return S.set(J*ne,ae*ne).floor()},this.setDrawingBufferSize=function(S,U,H){J=S,ae=U,ne=H,t.width=Math.floor(S*H),t.height=Math.floor(U*H),this.setViewport(0,0,S,U)},this.setEffects=function(S){if(v===Yt){De("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(S){for(let U=0;U<S.length;U++)if(S[U].isOutputPass===!0){Me("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}E.setEffects(S||[])},this.getCurrentViewport=function(S){return S.copy(se)},this.getViewport=function(S){return S.copy(Ne)},this.setViewport=function(S,U,H,B){S.isVector4?Ne.set(S.x,S.y,S.z,S.w):Ne.set(S,U,H,B),b.viewport(se.copy(Ne).multiplyScalar(ne).round())},this.getScissor=function(S){return S.copy(pt)},this.setScissor=function(S,U,H,B){S.isVector4?pt.set(S.x,S.y,S.z,S.w):pt.set(S,U,H,B),b.scissor(ge.copy(pt).multiplyScalar(ne).round())},this.getScissorTest=function(){return We},this.setScissorTest=function(S){b.setScissorTest(We=S)},this.setOpaqueSort=function(S){Le=S},this.setTransparentSort=function(S){Fe=S},this.getClearColor=function(S){return S.copy(Oe.getClearColor())},this.setClearColor=function(){Oe.setClearColor(...arguments)},this.getClearAlpha=function(){return Oe.getClearAlpha()},this.setClearAlpha=function(){Oe.setClearAlpha(...arguments)},this.clear=function(S=!0,U=!0,H=!0){let B=0;if(S){let G=!1;if(Q!==null){const pe=Q.texture.format;G=g.has(pe)}if(G){const pe=Q.texture.type,be=m.has(pe),fe=Oe.getClearColor(),ye=Oe.getClearAlpha(),Te=fe.r,ke=fe.g,ze=fe.b;be?(M[0]=Te,M[1]=ke,M[2]=ze,M[3]=ye,L.clearBufferuiv(L.COLOR,0,M)):(T[0]=Te,T[1]=ke,T[2]=ze,T[3]=ye,L.clearBufferiv(L.COLOR,0,T))}else B|=L.COLOR_BUFFER_BIT}U&&(B|=L.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),H&&(B|=L.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),B!==0&&L.clear(B)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(S){S.setRenderer(this),F=S},this.dispose=function(){t.removeEventListener("webglcontextlost",ut,!1),t.removeEventListener("webglcontextrestored",ot,!1),t.removeEventListener("webglcontextcreationerror",hn,!1),Oe.dispose(),he.dispose(),ce.dispose(),z.dispose(),ie.dispose(),Z.dispose(),me.dispose(),te.dispose(),le.dispose(),ve.dispose(),ve.removeEventListener("sessionstart",Xo),ve.removeEventListener("sessionend",qo),ni.stop()};function ut(S){S.preventDefault(),ur("WebGLRenderer: Context Lost."),P=!0}function ot(){ur("WebGLRenderer: Context Restored."),P=!1;const S=O.autoReset,U=Pe.enabled,H=Pe.autoUpdate,B=Pe.needsUpdate,G=Pe.type;Ee(),O.autoReset=S,Pe.enabled=U,Pe.autoUpdate=H,Pe.needsUpdate=B,Pe.type=G}function hn(S){De("WebGLRenderer: A WebGL context could not be created. Reason: ",S.statusMessage)}function un(S){const U=S.target;U.removeEventListener("dispose",un),Td(U)}function Td(S){Ad(S),z.remove(S)}function Ad(S){const U=z.get(S).programs;U!==void 0&&(U.forEach(function(H){le.releaseProgram(H)}),S.isShaderMaterial&&le.releaseShaderCache(S))}this.renderBufferDirect=function(S,U,H,B,G,pe){U===null&&(U=Nt);const be=G.isMesh&&G.matrixWorld.determinantAffine()<0,fe=Nd(S,U,H,B,G);b.setMaterial(B,be);let ye=H.index,Te=1;if(B.wireframe===!0){if(ye=Y.getWireframeAttribute(H),ye===void 0)return;Te=2}const ke=H.drawRange,ze=H.attributes.position;let Ae=ke.start*Te,tt=(ke.start+ke.count)*Te;pe!==null&&(Ae=Math.max(Ae,pe.start*Te),tt=Math.min(tt,(pe.start+pe.count)*Te)),ye!==null?(Ae=Math.max(Ae,0),tt=Math.min(tt,ye.count)):ze!=null&&(Ae=Math.max(Ae,0),tt=Math.min(tt,ze.count));const mt=tt-Ae;if(mt<0||mt===1/0)return;me.setup(G,B,fe,H,ye);let ft,rt=re;if(ye!==null&&(ft=oe.get(ye),rt=$,rt.setIndex(ft)),G.isMesh)B.wireframe===!0?(b.setLineWidth(B.wireframeLinewidth*bt()),rt.setMode(L.LINES)):rt.setMode(L.TRIANGLES);else if(G.isLine){let Dt=B.linewidth;Dt===void 0&&(Dt=1),b.setLineWidth(Dt*bt()),G.isLineSegments?rt.setMode(L.LINES):G.isLineLoop?rt.setMode(L.LINE_LOOP):rt.setMode(L.LINE_STRIP)}else G.isPoints?rt.setMode(L.POINTS):G.isSprite&&rt.setMode(L.TRIANGLES);if(G.isBatchedMesh)if(Ze.get("WEBGL_multi_draw"))rt.renderMultiDraw(G._multiDrawStarts,G._multiDrawCounts,G._multiDrawCount);else{const Dt=G._multiDrawStarts,_e=G._multiDrawCounts,Wt=G._multiDrawCount,Ye=ye?oe.get(ye).bytesPerElement:1,$t=z.get(B).currentProgram.getUniforms();for(let fn=0;fn<Wt;fn++)$t.setValue(L,"_gl_DrawID",fn),rt.render(Dt[fn]/Ye,_e[fn])}else if(G.isInstancedMesh)rt.renderInstances(Ae,mt,G.count);else if(H.isInstancedBufferGeometry){const Dt=H._maxInstanceCount!==void 0?H._maxInstanceCount:1/0,_e=Math.min(H.instanceCount,Dt);rt.renderInstances(Ae,mt,_e)}else rt.render(Ae,mt)};function Wo(S,U,H){S.transparent===!0&&S.side===_n&&S.forceSinglePass===!1?(S.side=Ht,S.needsUpdate=!0,ws(S,U,H),S.side=kn,S.needsUpdate=!0,ws(S,U,H),S.side=_n):ws(S,U,H)}this.compile=function(S,U,H=null){H===null&&(H=S),w=ce.get(H),w.init(U),_.push(w),H.traverseVisible(function(G){G.isLight&&G.layers.test(U.layers)&&(w.pushLight(G),G.castShadow&&w.pushShadow(G))}),S!==H&&S.traverseVisible(function(G){G.isLight&&G.layers.test(U.layers)&&(w.pushLight(G),G.castShadow&&w.pushShadow(G))}),w.setupLights();const B=new Set;return S.traverse(function(G){if(!(G.isMesh||G.isPoints||G.isLine||G.isSprite))return;const pe=G.material;if(pe)if(Array.isArray(pe))for(let be=0;be<pe.length;be++){const fe=pe[be];Wo(fe,H,G),B.add(fe)}else Wo(pe,H,G),B.add(pe)}),w=_.pop(),B},this.compileAsync=function(S,U,H=null){const B=this.compile(S,U,H);return new Promise(G=>{function pe(){if(B.forEach(function(be){z.get(be).currentProgram.isReady()&&B.delete(be)}),B.size===0){G(S);return}setTimeout(pe,10)}Ze.get("KHR_parallel_shader_compile")!==null?pe():setTimeout(pe,10)})};let Er=null;function Rd(S){Er&&Er(S)}function Xo(){ni.stop()}function qo(){ni.start()}const ni=new pd;ni.setAnimationLoop(Rd),typeof self<"u"&&ni.setContext(self),this.setAnimationLoop=function(S){Er=S,ve.setAnimationLoop(S),S===null?ni.stop():ni.start()},ve.addEventListener("sessionstart",Xo),ve.addEventListener("sessionend",qo),this.render=function(S,U){if(U!==void 0&&U.isCamera!==!0){De("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(P===!0)return;F!==null&&F.renderStart(S,U);const H=ve.enabled===!0&&ve.isPresenting===!0,B=E!==null&&(Q===null||H)&&E.begin(N,Q);if(S.matrixWorldAutoUpdate===!0&&S.updateMatrixWorld(),U.parent===null&&U.matrixWorldAutoUpdate===!0&&U.updateMatrixWorld(),ve.enabled===!0&&ve.isPresenting===!0&&(E===null||E.isCompositing()===!1)&&(ve.cameraAutoUpdate===!0&&ve.updateCamera(U),U=ve.getCamera()),S.isScene===!0&&S.onBeforeRender(N,S,U,Q),w=ce.get(S,_.length),w.init(U),w.state.textureUnits=q.getTextureUnits(),_.push(w),_t.multiplyMatrices(U.projectionMatrix,U.matrixWorldInverse),st.setFromProjectionMatrix(_t,vn,U.reversedDepth),qe=this.localClippingEnabled,$e=Re.init(this.clippingPlanes,qe),A=he.get(S,R.length),A.init(),R.push(A),ve.enabled===!0&&ve.isPresenting===!0){const be=N.xr.getDepthSensingMesh();be!==null&&wr(be,U,-1/0,N.sortObjects)}wr(S,U,0,N.sortObjects),A.finish(),N.sortObjects===!0&&A.sort(Le,Fe,U.reversedDepth),ht=ve.enabled===!1||ve.isPresenting===!1||ve.hasDepthSensing()===!1,ht&&Oe.addToRenderList(A,S),this.info.render.frame++,this.info.autoReset===!0&&this.info.reset(),$e===!0&&Re.beginShadows();const G=w.state.shadowsArray;if(Pe.render(G,S,U),$e===!0&&Re.endShadows(),(B&&E.hasRenderPass())===!1){const be=A.opaque,fe=A.transmissive;if(w.setupLights(),U.isArrayCamera){const ye=U.cameras;if(fe.length>0)for(let Te=0,ke=ye.length;Te<ke;Te++){const ze=ye[Te];Ko(be,fe,S,ze)}ht&&Oe.render(S);for(let Te=0,ke=ye.length;Te<ke;Te++){const ze=ye[Te];Yo(A,S,ze,ze.viewport)}}else fe.length>0&&Ko(be,fe,S,U),ht&&Oe.render(S),Yo(A,S,U)}Q!==null&&W===0&&(q.updateMultisampleRenderTarget(Q),q.updateRenderTargetMipmap(Q)),B&&E.end(N),S.isScene===!0&&S.onAfterRender(N,S,U),me.resetDefaultState(),V=-1,ee=null,_.pop(),_.length>0?(w=_[_.length-1],q.setTextureUnits(w.state.textureUnits),$e===!0&&Re.setGlobalState(N.clippingPlanes,w.state.camera)):w=null,R.pop(),R.length>0?A=R[R.length-1]:A=null,F!==null&&F.renderEnd()};function wr(S,U,H,B){if(S.visible===!1)return;if(S.layers.test(U.layers)){if(S.isGroup)H=S.renderOrder;else if(S.isLOD)S.autoUpdate===!0&&S.update(U);else if(S.isLightProbeGrid)w.pushLightProbeGrid(S);else if(S.isLight)w.pushLight(S),S.castShadow&&w.pushShadow(S);else if(S.isSprite){if(!S.frustumCulled||st.intersectsSprite(S)){B&&At.setFromMatrixPosition(S.matrixWorld).applyMatrix4(_t);const be=Z.update(S),fe=S.material;fe.visible&&A.push(S,be,fe,H,At.z,null)}}else if((S.isMesh||S.isLine||S.isPoints)&&(!S.frustumCulled||st.intersectsObject(S))){const be=Z.update(S),fe=S.material;if(B&&(S.boundingSphere!==void 0?(S.boundingSphere===null&&S.computeBoundingSphere(),At.copy(S.boundingSphere.center)):(be.boundingSphere===null&&be.computeBoundingSphere(),At.copy(be.boundingSphere.center)),At.applyMatrix4(S.matrixWorld).applyMatrix4(_t)),Array.isArray(fe)){const ye=be.groups;for(let Te=0,ke=ye.length;Te<ke;Te++){const ze=ye[Te],Ae=fe[ze.materialIndex];Ae&&Ae.visible&&A.push(S,be,Ae,H,At.z,ze)}}else fe.visible&&A.push(S,be,fe,H,At.z,null)}}const pe=S.children;for(let be=0,fe=pe.length;be<fe;be++)wr(pe[be],U,H,B)}function Yo(S,U,H,B){const{opaque:G,transmissive:pe,transparent:be}=S;w.setupLightsView(H),$e===!0&&Re.setGlobalState(N.clippingPlanes,H),B&&b.viewport(se.copy(B)),G.length>0&&Es(G,U,H),pe.length>0&&Es(pe,U,H),be.length>0&&Es(be,U,H),b.buffers.depth.setTest(!0),b.buffers.depth.setMask(!0),b.buffers.color.setMask(!0),b.setPolygonOffset(!1)}function Ko(S,U,H,B){if((H.isScene===!0?H.overrideMaterial:null)!==null)return;if(w.state.transmissionRenderTarget[B.id]===void 0){const Ae=Ze.has("EXT_color_buffer_half_float")||Ze.has("EXT_color_buffer_float");w.state.transmissionRenderTarget[B.id]=new Sn(1,1,{generateMipmaps:!0,type:Ae?Bn:Yt,minFilter:Ln,samples:Math.max(4,C.samples),stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:je.workingColorSpace})}const pe=w.state.transmissionRenderTarget[B.id],be=B.viewport||se;pe.setSize(be.z*N.transmissionResolutionScale,be.w*N.transmissionResolutionScale);const fe=N.getRenderTarget(),ye=N.getActiveCubeFace(),Te=N.getActiveMipmapLevel();N.setRenderTarget(pe),N.getClearColor(dt),Ke=N.getClearAlpha(),Ke<1&&N.setClearColor(16777215,.5),N.clear(),ht&&Oe.render(H);const ke=N.toneMapping;N.toneMapping=yn;const ze=B.viewport;if(B.viewport!==void 0&&(B.viewport=void 0),w.setupLightsView(B),$e===!0&&Re.setGlobalState(N.clippingPlanes,B),Es(S,H,B),q.updateMultisampleRenderTarget(pe),q.updateRenderTargetMipmap(pe),Ze.has("WEBGL_multisampled_render_to_texture")===!1){let Ae=!1;for(let tt=0,mt=U.length;tt<mt;tt++){const ft=U[tt],{object:rt,geometry:Dt,material:_e,group:Wt}=ft;if(_e.side===_n&&rt.layers.test(B.layers)){const Ye=_e.side;_e.side=Ht,_e.needsUpdate=!0,$o(rt,H,B,Dt,_e,Wt),_e.side=Ye,_e.needsUpdate=!0,Ae=!0}}Ae===!0&&(q.updateMultisampleRenderTarget(pe),q.updateRenderTargetMipmap(pe))}N.setRenderTarget(fe,ye,Te),N.setClearColor(dt,Ke),ze!==void 0&&(B.viewport=ze),N.toneMapping=ke}function Es(S,U,H){const B=U.isScene===!0?U.overrideMaterial:null;for(let G=0,pe=S.length;G<pe;G++){const be=S[G],{object:fe,geometry:ye,group:Te}=be;let ke=be.material;ke.allowOverride===!0&&B!==null&&(ke=B),fe.layers.test(H.layers)&&$o(fe,U,H,ye,ke,Te)}}function $o(S,U,H,B,G,pe){S.onBeforeRender(N,U,H,B,G,pe),S.modelViewMatrix.multiplyMatrices(H.matrixWorldInverse,S.matrixWorld),S.normalMatrix.getNormalMatrix(S.modelViewMatrix),G.onBeforeRender(N,U,H,B,S,pe),G.transparent===!0&&G.side===_n&&G.forceSinglePass===!1?(G.side=Ht,G.needsUpdate=!0,N.renderBufferDirect(H,U,B,G,S,pe),G.side=kn,G.needsUpdate=!0,N.renderBufferDirect(H,U,B,G,S,pe),G.side=_n):N.renderBufferDirect(H,U,B,G,S,pe),S.onAfterRender(N,U,H,B,G,pe)}function ws(S,U,H){U.isScene!==!0&&(U=Nt);const B=z.get(S),G=w.state.lights,pe=w.state.shadowsArray,be=G.state.version,fe=le.getParameters(S,G.state,pe,U,H,w.state.lightProbeGridArray),ye=le.getProgramCacheKey(fe);let Te=B.programs;B.environment=S.isMeshStandardMaterial||S.isMeshLambertMaterial||S.isMeshPhongMaterial?U.environment:null,B.fog=U.fog;const ke=S.isMeshStandardMaterial||S.isMeshLambertMaterial&&!S.envMap||S.isMeshPhongMaterial&&!S.envMap;B.envMap=ie.get(S.envMap||B.environment,ke),B.envMapRotation=B.environment!==null&&S.envMap===null?U.environmentRotation:S.envMapRotation,Te===void 0&&(S.addEventListener("dispose",un),Te=new Map,B.programs=Te);let ze=Te.get(ye);if(ze!==void 0){if(B.currentProgram===ze&&B.lightsStateVersion===be)return Jo(S,fe),ze}else fe.uniforms=le.getUniforms(S),F!==null&&S.isNodeMaterial&&F.build(S,H,fe),S.onBeforeCompile(fe,N),ze=le.acquireProgram(fe,ye),Te.set(ye,ze),B.uniforms=fe.uniforms;const Ae=B.uniforms;return(!S.isShaderMaterial&&!S.isRawShaderMaterial||S.clipping===!0)&&(Ae.clippingPlanes=Re.uniform),Jo(S,fe),B.needsLights=Id(S),B.lightsStateVersion=be,B.needsLights&&(Ae.ambientLightColor.value=G.state.ambient,Ae.lightProbe.value=G.state.probe,Ae.directionalLights.value=G.state.directional,Ae.directionalLightShadows.value=G.state.directionalShadow,Ae.spotLights.value=G.state.spot,Ae.spotLightShadows.value=G.state.spotShadow,Ae.rectAreaLights.value=G.state.rectArea,Ae.ltc_1.value=G.state.rectAreaLTC1,Ae.ltc_2.value=G.state.rectAreaLTC2,Ae.pointLights.value=G.state.point,Ae.pointLightShadows.value=G.state.pointShadow,Ae.hemisphereLights.value=G.state.hemi,Ae.directionalShadowMatrix.value=G.state.directionalShadowMatrix,Ae.spotLightMatrix.value=G.state.spotLightMatrix,Ae.spotLightMap.value=G.state.spotLightMap,Ae.pointShadowMatrix.value=G.state.pointShadowMatrix),B.lightProbeGrid=w.state.lightProbeGridArray.length>0,B.currentProgram=ze,B.uniformsList=null,ze}function Zo(S){if(S.uniformsList===null){const U=S.currentProgram.getUniforms();S.uniformsList=or.seqWithValue(U.seq,S.uniforms)}return S.uniformsList}function Jo(S,U){const H=z.get(S);H.outputColorSpace=U.outputColorSpace,H.batching=U.batching,H.batchingColor=U.batchingColor,H.instancing=U.instancing,H.instancingColor=U.instancingColor,H.instancingMorph=U.instancingMorph,H.skinning=U.skinning,H.morphTargets=U.morphTargets,H.morphNormals=U.morphNormals,H.morphColors=U.morphColors,H.morphTargetsCount=U.morphTargetsCount,H.numClippingPlanes=U.numClippingPlanes,H.numIntersection=U.numClipIntersection,H.vertexAlphas=U.vertexAlphas,H.vertexTangents=U.vertexTangents,H.toneMapping=U.toneMapping}function Cd(S,U){if(S.length===0)return null;if(S.length===1)return S[0].texture!==null?S[0]:null;y.setFromMatrixPosition(U.matrixWorld);for(let H=0,B=S.length;H<B;H++){const G=S[H];if(G.texture!==null&&G.boundingBox.containsPoint(y))return G}return null}function Nd(S,U,H,B,G){U.isScene!==!0&&(U=Nt),q.resetTextureUnits();const pe=U.fog,be=B.isMeshStandardMaterial||B.isMeshLambertMaterial||B.isMeshPhongMaterial?U.environment:null,fe=Q===null?N.outputColorSpace:Q.isXRRenderTarget===!0?Q.texture.colorSpace:je.workingColorSpace,ye=B.isMeshStandardMaterial||B.isMeshLambertMaterial&&!B.envMap||B.isMeshPhongMaterial&&!B.envMap,Te=ie.get(B.envMap||be,ye),ke=B.vertexColors===!0&&!!H.attributes.color&&H.attributes.color.itemSize===4,ze=!!H.attributes.tangent&&(!!B.normalMap||B.anisotropy>0),Ae=!!H.morphAttributes.position,tt=!!H.morphAttributes.normal,mt=!!H.morphAttributes.color;let ft=yn;B.toneMapped&&(Q===null||Q.isXRRenderTarget===!0)&&(ft=N.toneMapping);const rt=H.morphAttributes.position||H.morphAttributes.normal||H.morphAttributes.color,Dt=rt!==void 0?rt.length:0,_e=z.get(B),Wt=w.state.lights;if($e===!0&&(qe===!0||S!==ee)){const lt=S===ee&&B.id===V;Re.setState(B,S,lt)}let Ye=!1;B.version===_e.__version?(_e.needsLights&&_e.lightsStateVersion!==Wt.state.version||_e.outputColorSpace!==fe||G.isBatchedMesh&&_e.batching===!1||!G.isBatchedMesh&&_e.batching===!0||G.isBatchedMesh&&_e.batchingColor===!0&&G.colorTexture===null||G.isBatchedMesh&&_e.batchingColor===!1&&G.colorTexture!==null||G.isInstancedMesh&&_e.instancing===!1||!G.isInstancedMesh&&_e.instancing===!0||G.isSkinnedMesh&&_e.skinning===!1||!G.isSkinnedMesh&&_e.skinning===!0||G.isInstancedMesh&&_e.instancingColor===!0&&G.instanceColor===null||G.isInstancedMesh&&_e.instancingColor===!1&&G.instanceColor!==null||G.isInstancedMesh&&_e.instancingMorph===!0&&G.morphTexture===null||G.isInstancedMesh&&_e.instancingMorph===!1&&G.morphTexture!==null||_e.envMap!==Te||B.fog===!0&&_e.fog!==pe||_e.numClippingPlanes!==void 0&&(_e.numClippingPlanes!==Re.numPlanes||_e.numIntersection!==Re.numIntersection)||_e.vertexAlphas!==ke||_e.vertexTangents!==ze||_e.morphTargets!==Ae||_e.morphNormals!==tt||_e.morphColors!==mt||_e.toneMapping!==ft||_e.morphTargetsCount!==Dt||!!_e.lightProbeGrid!=w.state.lightProbeGridArray.length>0)&&(Ye=!0):(Ye=!0,_e.__version=B.version);let $t=_e.currentProgram;Ye===!0&&($t=ws(B,U,G),F&&B.isNodeMaterial&&F.onUpdateProgram(B,$t,_e));let fn=!1,zn=!1,mi=!1;const at=$t.getUniforms(),gt=_e.uniforms;if(b.useProgram($t.program)&&(fn=!0,zn=!0,mi=!0),B.id!==V&&(V=B.id,zn=!0),_e.needsLights){const lt=Cd(w.state.lightProbeGridArray,G);_e.lightProbeGrid!==lt&&(_e.lightProbeGrid=lt,zn=!0)}if(fn||ee!==S){b.buffers.depth.getReversed()&&S.reversedDepth!==!0&&(S._reversedDepth=!0,S.updateProjectionMatrix()),at.setValue(L,"projectionMatrix",S.projectionMatrix),at.setValue(L,"viewMatrix",S.matrixWorldInverse);const Hn=at.map.cameraPosition;Hn!==void 0&&Hn.setValue(L,yt.setFromMatrixPosition(S.matrixWorld)),C.logarithmicDepthBuffer&&at.setValue(L,"logDepthBufFC",2/(Math.log(S.far+1)/Math.LN2)),(B.isMeshPhongMaterial||B.isMeshToonMaterial||B.isMeshLambertMaterial||B.isMeshBasicMaterial||B.isMeshStandardMaterial||B.isShaderMaterial)&&at.setValue(L,"isOrthographic",S.isOrthographicCamera===!0),ee!==S&&(ee=S,zn=!0,mi=!0)}if(_e.needsLights&&(Wt.state.directionalShadowMap.length>0&&at.setValue(L,"directionalShadowMap",Wt.state.directionalShadowMap,q),Wt.state.spotShadowMap.length>0&&at.setValue(L,"spotShadowMap",Wt.state.spotShadowMap,q),Wt.state.pointShadowMap.length>0&&at.setValue(L,"pointShadowMap",Wt.state.pointShadowMap,q)),G.isSkinnedMesh){at.setOptional(L,G,"bindMatrix"),at.setOptional(L,G,"bindMatrixInverse");const lt=G.skeleton;lt&&(lt.boneTexture===null&&lt.computeBoneTexture(),at.setValue(L,"boneTexture",lt.boneTexture,q))}G.isBatchedMesh&&(at.setOptional(L,G,"batchingTexture"),at.setValue(L,"batchingTexture",G._matricesTexture,q),at.setOptional(L,G,"batchingIdTexture"),at.setValue(L,"batchingIdTexture",G._indirectTexture,q),at.setOptional(L,G,"batchingColorTexture"),G._colorsTexture!==null&&at.setValue(L,"batchingColorTexture",G._colorsTexture,q));const Vn=H.morphAttributes;if((Vn.position!==void 0||Vn.normal!==void 0||Vn.color!==void 0)&&I.update(G,H,$t),(zn||_e.receiveShadow!==G.receiveShadow)&&(_e.receiveShadow=G.receiveShadow,at.setValue(L,"receiveShadow",G.receiveShadow)),(B.isMeshStandardMaterial||B.isMeshLambertMaterial||B.isMeshPhongMaterial)&&B.envMap===null&&U.environment!==null&&(gt.envMapIntensity.value=U.environmentIntensity),gt.dfgLUT!==void 0&&(gt.dfgLUT.value=F0()),zn){if(at.setValue(L,"toneMappingExposure",N.toneMappingExposure),_e.needsLights&&Pd(gt,mi),pe&&B.fog===!0&&we.refreshFogUniforms(gt,pe),we.refreshMaterialUniforms(gt,B,ne,ae,w.state.transmissionRenderTarget[S.id]),_e.needsLights&&_e.lightProbeGrid){const lt=_e.lightProbeGrid;gt.probesSH.value=lt.texture,gt.probesMin.value.copy(lt.boundingBox.min),gt.probesMax.value.copy(lt.boundingBox.max),gt.probesResolution.value.copy(lt.resolution)}or.upload(L,Zo(_e),gt,q)}if(B.isShaderMaterial&&B.uniformsNeedUpdate===!0&&(or.upload(L,Zo(_e),gt,q),B.uniformsNeedUpdate=!1),B.isSpriteMaterial&&at.setValue(L,"center",G.center),at.setValue(L,"modelViewMatrix",G.modelViewMatrix),at.setValue(L,"normalMatrix",G.normalMatrix),at.setValue(L,"modelMatrix",G.matrixWorld),B.uniformsGroups!==void 0){const lt=B.uniformsGroups;for(let Hn=0,gi=lt.length;Hn<gi;Hn++){const Qo=lt[Hn];te.update(Qo,$t),te.bind(Qo,$t)}}return $t}function Pd(S,U){S.ambientLightColor.needsUpdate=U,S.lightProbe.needsUpdate=U,S.directionalLights.needsUpdate=U,S.directionalLightShadows.needsUpdate=U,S.pointLights.needsUpdate=U,S.pointLightShadows.needsUpdate=U,S.spotLights.needsUpdate=U,S.spotLightShadows.needsUpdate=U,S.rectAreaLights.needsUpdate=U,S.hemisphereLights.needsUpdate=U}function Id(S){return S.isMeshLambertMaterial||S.isMeshToonMaterial||S.isMeshPhongMaterial||S.isMeshStandardMaterial||S.isShadowMaterial||S.isShaderMaterial&&S.lights===!0}this.getActiveCubeFace=function(){return X},this.getActiveMipmapLevel=function(){return W},this.getRenderTarget=function(){return Q},this.setRenderTargetTextures=function(S,U,H){const B=z.get(S);B.__autoAllocateDepthBuffer=S.resolveDepthBuffer===!1,B.__autoAllocateDepthBuffer===!1&&(B.__useRenderToTexture=!1),z.get(S.texture).__webglTexture=U,z.get(S.depthTexture).__webglTexture=B.__autoAllocateDepthBuffer?void 0:H,B.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(S,U){const H=z.get(S);H.__webglFramebuffer=U,H.__useDefaultFramebuffer=U===void 0},this.setRenderTarget=function(S,U=0,H=0){Q=S,X=U,W=H;let B=null,G=!1,pe=!1;if(S){const fe=z.get(S);if(fe.__useDefaultFramebuffer!==void 0){b.bindFramebuffer(L.FRAMEBUFFER,fe.__webglFramebuffer),se.copy(S.viewport),ge.copy(S.scissor),Xe=S.scissorTest,b.viewport(se),b.scissor(ge),b.setScissorTest(Xe),V=-1;return}else if(fe.__webglFramebuffer===void 0)q.setupRenderTarget(S);else if(fe.__hasExternalTextures)q.rebindTextures(S,z.get(S.texture).__webglTexture,z.get(S.depthTexture).__webglTexture);else if(S.depthBuffer){const ke=S.depthTexture;if(fe.__boundDepthTexture!==ke){if(ke!==null&&z.has(ke)&&(S.width!==ke.image.width||S.height!==ke.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");q.setupDepthRenderbuffer(S)}}const ye=S.texture;(ye.isData3DTexture||ye.isDataArrayTexture||ye.isCompressedArrayTexture)&&(pe=!0);const Te=z.get(S).__webglFramebuffer;S.isWebGLCubeRenderTarget?(Array.isArray(Te[U])?B=Te[U][H]:B=Te[U],G=!0):S.samples>0&&q.useMultisampledRTT(S)===!1?B=z.get(S).__webglMultisampledFramebuffer:Array.isArray(Te)?B=Te[H]:B=Te,se.copy(S.viewport),ge.copy(S.scissor),Xe=S.scissorTest}else se.copy(Ne).multiplyScalar(ne).floor(),ge.copy(pt).multiplyScalar(ne).floor(),Xe=We;if(H!==0&&(B=j),b.bindFramebuffer(L.FRAMEBUFFER,B)&&b.drawBuffers(S,B),b.viewport(se),b.scissor(ge),b.setScissorTest(Xe),G){const fe=z.get(S.texture);L.framebufferTexture2D(L.FRAMEBUFFER,L.COLOR_ATTACHMENT0,L.TEXTURE_CUBE_MAP_POSITIVE_X+U,fe.__webglTexture,H)}else if(pe){const fe=U;for(let ye=0;ye<S.textures.length;ye++){const Te=z.get(S.textures[ye]);L.framebufferTextureLayer(L.FRAMEBUFFER,L.COLOR_ATTACHMENT0+ye,Te.__webglTexture,H,fe)}}else if(S!==null&&H!==0){const fe=z.get(S.texture);L.framebufferTexture2D(L.FRAMEBUFFER,L.COLOR_ATTACHMENT0,L.TEXTURE_2D,fe.__webglTexture,H)}V=-1},this.readRenderTargetPixels=function(S,U,H,B,G,pe,be,fe=0){if(!(S&&S.isWebGLRenderTarget)){De("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let ye=z.get(S).__webglFramebuffer;if(S.isWebGLCubeRenderTarget&&be!==void 0&&(ye=ye[be]),ye){b.bindFramebuffer(L.FRAMEBUFFER,ye);try{const Te=S.textures[fe],ke=Te.format,ze=Te.type;if(S.textures.length>1&&L.readBuffer(L.COLOR_ATTACHMENT0+fe),!C.textureFormatReadable(ke)){De("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!C.textureTypeReadable(ze)){De("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}U>=0&&U<=S.width-B&&H>=0&&H<=S.height-G&&L.readPixels(U,H,B,G,de.convert(ke),de.convert(ze),pe)}finally{const Te=Q!==null?z.get(Q).__webglFramebuffer:null;b.bindFramebuffer(L.FRAMEBUFFER,Te)}}},this.readRenderTargetPixelsAsync=async function(S,U,H,B,G,pe,be,fe=0){if(!(S&&S.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let ye=z.get(S).__webglFramebuffer;if(S.isWebGLCubeRenderTarget&&be!==void 0&&(ye=ye[be]),ye)if(U>=0&&U<=S.width-B&&H>=0&&H<=S.height-G){b.bindFramebuffer(L.FRAMEBUFFER,ye);const Te=S.textures[fe],ke=Te.format,ze=Te.type;if(S.textures.length>1&&L.readBuffer(L.COLOR_ATTACHMENT0+fe),!C.textureFormatReadable(ke))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!C.textureTypeReadable(ze))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const Ae=L.createBuffer();L.bindBuffer(L.PIXEL_PACK_BUFFER,Ae),L.bufferData(L.PIXEL_PACK_BUFFER,pe.byteLength,L.STREAM_READ),L.readPixels(U,H,B,G,de.convert(ke),de.convert(ze),0);const tt=Q!==null?z.get(Q).__webglFramebuffer:null;b.bindFramebuffer(L.FRAMEBUFFER,tt);const mt=L.fenceSync(L.SYNC_GPU_COMMANDS_COMPLETE,0);return L.flush(),await su(L,mt,4),L.bindBuffer(L.PIXEL_PACK_BUFFER,Ae),L.getBufferSubData(L.PIXEL_PACK_BUFFER,0,pe),L.deleteBuffer(Ae),L.deleteSync(mt),pe}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(S,U=null,H=0){const B=Math.pow(2,-H),G=Math.floor(S.image.width*B),pe=Math.floor(S.image.height*B),be=U!==null?U.x:0,fe=U!==null?U.y:0;q.setTexture2D(S,0),L.copyTexSubImage2D(L.TEXTURE_2D,H,0,0,be,fe,G,pe),b.unbindTexture()},this.copyTextureToTexture=function(S,U,H=null,B=null,G=0,pe=0){let be,fe,ye,Te,ke,ze,Ae,tt,mt;const ft=S.isCompressedTexture?S.mipmaps[pe]:S.image;if(H!==null)be=H.max.x-H.min.x,fe=H.max.y-H.min.y,ye=H.isBox3?H.max.z-H.min.z:1,Te=H.min.x,ke=H.min.y,ze=H.isBox3?H.min.z:0;else{const gt=Math.pow(2,-G);be=Math.floor(ft.width*gt),fe=Math.floor(ft.height*gt),S.isDataArrayTexture?ye=ft.depth:S.isData3DTexture?ye=Math.floor(ft.depth*gt):ye=1,Te=0,ke=0,ze=0}B!==null?(Ae=B.x,tt=B.y,mt=B.z):(Ae=0,tt=0,mt=0);const rt=de.convert(U.format),Dt=de.convert(U.type);let _e;U.isData3DTexture?(q.setTexture3D(U,0),_e=L.TEXTURE_3D):U.isDataArrayTexture||U.isCompressedArrayTexture?(q.setTexture2DArray(U,0),_e=L.TEXTURE_2D_ARRAY):(q.setTexture2D(U,0),_e=L.TEXTURE_2D),b.activeTexture(L.TEXTURE0),b.pixelStorei(L.UNPACK_FLIP_Y_WEBGL,U.flipY),b.pixelStorei(L.UNPACK_PREMULTIPLY_ALPHA_WEBGL,U.premultiplyAlpha),b.pixelStorei(L.UNPACK_ALIGNMENT,U.unpackAlignment);const Wt=b.getParameter(L.UNPACK_ROW_LENGTH),Ye=b.getParameter(L.UNPACK_IMAGE_HEIGHT),$t=b.getParameter(L.UNPACK_SKIP_PIXELS),fn=b.getParameter(L.UNPACK_SKIP_ROWS),zn=b.getParameter(L.UNPACK_SKIP_IMAGES);b.pixelStorei(L.UNPACK_ROW_LENGTH,ft.width),b.pixelStorei(L.UNPACK_IMAGE_HEIGHT,ft.height),b.pixelStorei(L.UNPACK_SKIP_PIXELS,Te),b.pixelStorei(L.UNPACK_SKIP_ROWS,ke),b.pixelStorei(L.UNPACK_SKIP_IMAGES,ze);const mi=S.isDataArrayTexture||S.isData3DTexture,at=U.isDataArrayTexture||U.isData3DTexture;if(S.isDepthTexture){const gt=z.get(S),Vn=z.get(U),lt=z.get(gt.__renderTarget),Hn=z.get(Vn.__renderTarget);b.bindFramebuffer(L.READ_FRAMEBUFFER,lt.__webglFramebuffer),b.bindFramebuffer(L.DRAW_FRAMEBUFFER,Hn.__webglFramebuffer);for(let gi=0;gi<ye;gi++)mi&&(L.framebufferTextureLayer(L.READ_FRAMEBUFFER,L.COLOR_ATTACHMENT0,z.get(S).__webglTexture,G,ze+gi),L.framebufferTextureLayer(L.DRAW_FRAMEBUFFER,L.COLOR_ATTACHMENT0,z.get(U).__webglTexture,pe,mt+gi)),L.blitFramebuffer(Te,ke,be,fe,Ae,tt,be,fe,L.DEPTH_BUFFER_BIT,L.NEAREST);b.bindFramebuffer(L.READ_FRAMEBUFFER,null),b.bindFramebuffer(L.DRAW_FRAMEBUFFER,null)}else if(G!==0||S.isRenderTargetTexture||z.has(S)){const gt=z.get(S),Vn=z.get(U);b.bindFramebuffer(L.READ_FRAMEBUFFER,K),b.bindFramebuffer(L.DRAW_FRAMEBUFFER,k);for(let lt=0;lt<ye;lt++)mi?L.framebufferTextureLayer(L.READ_FRAMEBUFFER,L.COLOR_ATTACHMENT0,gt.__webglTexture,G,ze+lt):L.framebufferTexture2D(L.READ_FRAMEBUFFER,L.COLOR_ATTACHMENT0,L.TEXTURE_2D,gt.__webglTexture,G),at?L.framebufferTextureLayer(L.DRAW_FRAMEBUFFER,L.COLOR_ATTACHMENT0,Vn.__webglTexture,pe,mt+lt):L.framebufferTexture2D(L.DRAW_FRAMEBUFFER,L.COLOR_ATTACHMENT0,L.TEXTURE_2D,Vn.__webglTexture,pe),G!==0?L.blitFramebuffer(Te,ke,be,fe,Ae,tt,be,fe,L.COLOR_BUFFER_BIT,L.NEAREST):at?L.copyTexSubImage3D(_e,pe,Ae,tt,mt+lt,Te,ke,be,fe):L.copyTexSubImage2D(_e,pe,Ae,tt,Te,ke,be,fe);b.bindFramebuffer(L.READ_FRAMEBUFFER,null),b.bindFramebuffer(L.DRAW_FRAMEBUFFER,null)}else at?S.isDataTexture||S.isData3DTexture?L.texSubImage3D(_e,pe,Ae,tt,mt,be,fe,ye,rt,Dt,ft.data):U.isCompressedArrayTexture?L.compressedTexSubImage3D(_e,pe,Ae,tt,mt,be,fe,ye,rt,ft.data):L.texSubImage3D(_e,pe,Ae,tt,mt,be,fe,ye,rt,Dt,ft):S.isDataTexture?L.texSubImage2D(L.TEXTURE_2D,pe,Ae,tt,be,fe,rt,Dt,ft.data):S.isCompressedTexture?L.compressedTexSubImage2D(L.TEXTURE_2D,pe,Ae,tt,ft.width,ft.height,rt,ft.data):L.texSubImage2D(L.TEXTURE_2D,pe,Ae,tt,be,fe,rt,Dt,ft);b.pixelStorei(L.UNPACK_ROW_LENGTH,Wt),b.pixelStorei(L.UNPACK_IMAGE_HEIGHT,Ye),b.pixelStorei(L.UNPACK_SKIP_PIXELS,$t),b.pixelStorei(L.UNPACK_SKIP_ROWS,fn),b.pixelStorei(L.UNPACK_SKIP_IMAGES,zn),pe===0&&U.generateMipmaps&&L.generateMipmap(_e),b.unbindTexture()},this.initRenderTarget=function(S){z.get(S).__webglFramebuffer===void 0&&q.setupRenderTarget(S)},this.initTexture=function(S){S.isCubeTexture?q.setTextureCube(S,0):S.isData3DTexture?q.setTexture3D(S,0):S.isDataArrayTexture||S.isCompressedArrayTexture?q.setTexture2DArray(S,0):q.setTexture2D(S,0),b.unbindTexture()},this.resetState=function(){X=0,W=0,Q=null,b.reset(),me.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return vn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=je._getDrawingBufferColorSpace(e),t.unpackColorSpace=je._getUnpackColorSpace()}}const wc={type:"change"},Bo={type:"start"},Sd={type:"end"},er=new Ss,Tc=new Zn,k0=Math.cos(70*Qc.DEG2RAD),St=new D,Vt=2*Math.PI,nt={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6},da=1e-6;class B0 extends zf{constructor(e,t=null){super(e,t),this.state=nt.NONE,this.target=new D,this.cursor=new D,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.keyRotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:Li.ROTATE,MIDDLE:Li.DOLLY,RIGHT:Li.PAN},this.touches={ONE:Di.ROTATE,TWO:Di.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._cursorStyle="auto",this._domElementKeyEvents=null,this._lastPosition=new D,this._lastQuaternion=new cn,this._lastTargetPosition=new D,this._quat=new cn().setFromUnitVectors(e.up,new D(0,1,0)),this._quatInverse=this._quat.clone().invert(),this._spherical=new Ql,this._sphericalDelta=new Ql,this._scale=1,this._panOffset=new D,this._rotateStart=new Ce,this._rotateEnd=new Ce,this._rotateDelta=new Ce,this._panStart=new Ce,this._panEnd=new Ce,this._panDelta=new Ce,this._dollyStart=new Ce,this._dollyEnd=new Ce,this._dollyDelta=new Ce,this._dollyDirection=new D,this._mouse=new Ce,this._performCursorZoom=!1,this._pointers=[],this._pointerPositions={},this._controlActive=!1,this._onPointerMove=z0.bind(this),this._onPointerDown=G0.bind(this),this._onPointerUp=V0.bind(this),this._onContextMenu=K0.bind(this),this._onMouseWheel=W0.bind(this),this._onKeyDown=X0.bind(this),this._onTouchStart=q0.bind(this),this._onTouchMove=Y0.bind(this),this._onMouseDown=H0.bind(this),this._onMouseMove=j0.bind(this),this._interceptControlDown=$0.bind(this),this._interceptControlUp=Z0.bind(this),this.domElement!==null&&this.connect(this.domElement),this.update()}set cursorStyle(e){this._cursorStyle=e,e==="grab"?this.domElement.style.cursor="grab":this.domElement.style.cursor="auto"}get cursorStyle(){return this._cursorStyle}connect(e){super.connect(e),this.domElement.addEventListener("pointerdown",this._onPointerDown),this.domElement.addEventListener("pointercancel",this._onPointerUp),this.domElement.addEventListener("contextmenu",this._onContextMenu),this.domElement.addEventListener("wheel",this._onMouseWheel,{passive:!1}),this.domElement.getRootNode().addEventListener("keydown",this._interceptControlDown,{passive:!0,capture:!0}),this.domElement.style.touchAction="none"}disconnect(){this.domElement.removeEventListener("pointerdown",this._onPointerDown),this.domElement.ownerDocument.removeEventListener("pointermove",this._onPointerMove),this.domElement.ownerDocument.removeEventListener("pointerup",this._onPointerUp),this.domElement.removeEventListener("pointercancel",this._onPointerUp),this.domElement.removeEventListener("wheel",this._onMouseWheel),this.domElement.removeEventListener("contextmenu",this._onContextMenu),this.stopListenToKeyEvents(),this.domElement.getRootNode().removeEventListener("keydown",this._interceptControlDown,{capture:!0}),this.domElement.style.touchAction=""}dispose(){this.disconnect()}getPolarAngle(){return this._spherical.phi}getAzimuthalAngle(){return this._spherical.theta}getDistance(){return this.object.position.distanceTo(this.target)}listenToKeyEvents(e){e.addEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=e}stopListenToKeyEvents(){this._domElementKeyEvents!==null&&(this._domElementKeyEvents.removeEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=null)}saveState(){this.target0.copy(this.target),this.position0.copy(this.object.position),this.zoom0=this.object.zoom}reset(){this.target.copy(this.target0),this.object.position.copy(this.position0),this.object.zoom=this.zoom0,this.object.updateProjectionMatrix(),this.dispatchEvent(wc),this.update(),this.state=nt.NONE}pan(e,t){this._pan(e,t),this.update()}dollyIn(e){this._dollyIn(e),this.update()}dollyOut(e){this._dollyOut(e),this.update()}rotateLeft(e){this._rotateLeft(e),this.update()}rotateUp(e){this._rotateUp(e),this.update()}update(e=null){const t=this.object.position;St.copy(t).sub(this.target),St.applyQuaternion(this._quat),this._spherical.setFromVector3(St),this.autoRotate&&this.state===nt.NONE&&this._rotateLeft(this._getAutoRotationAngle(e)),this.enableDamping?(this._spherical.theta+=this._sphericalDelta.theta*this.dampingFactor,this._spherical.phi+=this._sphericalDelta.phi*this.dampingFactor):(this._spherical.theta+=this._sphericalDelta.theta,this._spherical.phi+=this._sphericalDelta.phi);let n=this.minAzimuthAngle,s=this.maxAzimuthAngle;isFinite(n)&&isFinite(s)&&(n<-Math.PI?n+=Vt:n>Math.PI&&(n-=Vt),s<-Math.PI?s+=Vt:s>Math.PI&&(s-=Vt),n<=s?this._spherical.theta=Math.max(n,Math.min(s,this._spherical.theta)):this._spherical.theta=this._spherical.theta>(n+s)/2?Math.max(n,this._spherical.theta):Math.min(s,this._spherical.theta)),this._spherical.phi=Math.max(this.minPolarAngle,Math.min(this.maxPolarAngle,this._spherical.phi)),this._spherical.makeSafe(),this.enableDamping===!0?this.target.addScaledVector(this._panOffset,this.dampingFactor):this.target.add(this._panOffset),this.target.sub(this.cursor),this.target.clampLength(this.minTargetRadius,this.maxTargetRadius),this.target.add(this.cursor);let r=!1;if(this.zoomToCursor&&this._performCursorZoom||this.object.isOrthographicCamera)this._spherical.radius=this._clampDistance(this._spherical.radius);else{const a=this._spherical.radius;this._spherical.radius=this._clampDistance(this._spherical.radius*this._scale),r=a!=this._spherical.radius}if(St.setFromSpherical(this._spherical),St.applyQuaternion(this._quatInverse),t.copy(this.target).add(St),this.object.lookAt(this.target),this.enableDamping===!0?(this._sphericalDelta.theta*=1-this.dampingFactor,this._sphericalDelta.phi*=1-this.dampingFactor,this._panOffset.multiplyScalar(1-this.dampingFactor)):(this._sphericalDelta.set(0,0,0),this._panOffset.set(0,0,0)),this.zoomToCursor&&this._performCursorZoom){let a=null;if(this.object.isPerspectiveCamera){const o=St.length();a=this._clampDistance(o*this._scale);const l=o-a;this.object.position.addScaledVector(this._dollyDirection,l),this.object.updateMatrixWorld(),r=!!l}else if(this.object.isOrthographicCamera){const o=new D(this._mouse.x,this._mouse.y,0);o.unproject(this.object);const l=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),this.object.updateProjectionMatrix(),r=l!==this.object.zoom;const d=new D(this._mouse.x,this._mouse.y,0);d.unproject(this.object),this.object.position.sub(d).add(o),this.object.updateMatrixWorld(),a=St.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),this.zoomToCursor=!1;a!==null&&(this.screenSpacePanning?this.target.set(0,0,-1).transformDirection(this.object.matrix).multiplyScalar(a).add(this.object.position):(er.origin.copy(this.object.position),er.direction.set(0,0,-1).transformDirection(this.object.matrix),Math.abs(this.object.up.dot(er.direction))<k0?this.object.lookAt(this.target):(Tc.setFromNormalAndCoplanarPoint(this.object.up,this.target),er.intersectPlane(Tc,this.target))))}else if(this.object.isOrthographicCamera){const a=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),a!==this.object.zoom&&(this.object.updateProjectionMatrix(),r=!0)}return this._scale=1,this._performCursorZoom=!1,r||this._lastPosition.distanceToSquared(this.object.position)>da||8*(1-this._lastQuaternion.dot(this.object.quaternion))>da||this._lastTargetPosition.distanceToSquared(this.target)>da?(this.dispatchEvent(wc),this._lastPosition.copy(this.object.position),this._lastQuaternion.copy(this.object.quaternion),this._lastTargetPosition.copy(this.target),!0):!1}_getAutoRotationAngle(e){return e!==null?Vt/60*this.autoRotateSpeed*e:Vt/60/60*this.autoRotateSpeed}_getZoomScale(e){const t=Math.abs(e*.01);return Math.pow(.95,this.zoomSpeed*t)}_rotateLeft(e){this._sphericalDelta.theta-=e}_rotateUp(e){this._sphericalDelta.phi-=e}_panLeft(e,t){St.setFromMatrixColumn(t,0),St.multiplyScalar(-e),this._panOffset.add(St)}_panUp(e,t){this.screenSpacePanning===!0?St.setFromMatrixColumn(t,1):(St.setFromMatrixColumn(t,0),St.crossVectors(this.object.up,St)),St.multiplyScalar(e),this._panOffset.add(St)}_pan(e,t){const n=this.domElement;if(this.object.isPerspectiveCamera){const s=this.object.position;St.copy(s).sub(this.target);let r=St.length();r*=Math.tan(this.object.fov/2*Math.PI/180),this._panLeft(2*e*r/n.clientHeight,this.object.matrix),this._panUp(2*t*r/n.clientHeight,this.object.matrix)}else this.object.isOrthographicCamera?(this._panLeft(e*(this.object.right-this.object.left)/this.object.zoom/n.clientWidth,this.object.matrix),this._panUp(t*(this.object.top-this.object.bottom)/this.object.zoom/n.clientHeight,this.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),this.enablePan=!1)}_dollyOut(e){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale/=e:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_dollyIn(e){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale*=e:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_updateZoomParameters(e,t){if(!this.zoomToCursor)return;this._performCursorZoom=!0;const n=this.domElement.getBoundingClientRect(),s=e-n.left,r=t-n.top,a=n.width,o=n.height;this._mouse.x=s/a*2-1,this._mouse.y=-(r/o)*2+1,this._dollyDirection.set(this._mouse.x,this._mouse.y,1).unproject(this.object).sub(this.object.position).normalize()}_clampDistance(e){return Math.max(this.minDistance,Math.min(this.maxDistance,e))}_handleMouseDownRotate(e){this._rotateStart.set(e.clientX,e.clientY)}_handleMouseDownDolly(e){this._updateZoomParameters(e.clientX,e.clientX),this._dollyStart.set(e.clientX,e.clientY)}_handleMouseDownPan(e){this._panStart.set(e.clientX,e.clientY)}_handleMouseMoveRotate(e){this._rotateEnd.set(e.clientX,e.clientY),this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const t=this.domElement;this._rotateLeft(Vt*this._rotateDelta.x/t.clientHeight),this._rotateUp(Vt*this._rotateDelta.y/t.clientHeight),this._rotateStart.copy(this._rotateEnd),this.update()}_handleMouseMoveDolly(e){this._dollyEnd.set(e.clientX,e.clientY),this._dollyDelta.subVectors(this._dollyEnd,this._dollyStart),this._dollyDelta.y>0?this._dollyOut(this._getZoomScale(this._dollyDelta.y)):this._dollyDelta.y<0&&this._dollyIn(this._getZoomScale(this._dollyDelta.y)),this._dollyStart.copy(this._dollyEnd),this.update()}_handleMouseMovePan(e){this._panEnd.set(e.clientX,e.clientY),this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd),this.update()}_handleMouseWheel(e){this._updateZoomParameters(e.clientX,e.clientY),e.deltaY<0?this._dollyIn(this._getZoomScale(e.deltaY)):e.deltaY>0&&this._dollyOut(this._getZoomScale(e.deltaY)),this.update()}_handleKeyDown(e){let t=!1;switch(e.code){case this.keys.UP:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateUp(Vt*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,this.keyPanSpeed),t=!0;break;case this.keys.BOTTOM:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateUp(-Vt*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,-this.keyPanSpeed),t=!0;break;case this.keys.LEFT:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateLeft(Vt*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(this.keyPanSpeed,0),t=!0;break;case this.keys.RIGHT:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateLeft(-Vt*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(-this.keyPanSpeed,0),t=!0;break}t&&(e.preventDefault(),this.update())}_handleTouchStartRotate(e){if(this._pointers.length===1)this._rotateStart.set(e.pageX,e.pageY);else{const t=this._getSecondPointerPosition(e),n=.5*(e.pageX+t.x),s=.5*(e.pageY+t.y);this._rotateStart.set(n,s)}}_handleTouchStartPan(e){if(this._pointers.length===1)this._panStart.set(e.pageX,e.pageY);else{const t=this._getSecondPointerPosition(e),n=.5*(e.pageX+t.x),s=.5*(e.pageY+t.y);this._panStart.set(n,s)}}_handleTouchStartDolly(e){const t=this._getSecondPointerPosition(e),n=e.pageX-t.x,s=e.pageY-t.y,r=Math.sqrt(n*n+s*s);this._dollyStart.set(0,r)}_handleTouchStartDollyPan(e){this.enableZoom&&this._handleTouchStartDolly(e),this.enablePan&&this._handleTouchStartPan(e)}_handleTouchStartDollyRotate(e){this.enableZoom&&this._handleTouchStartDolly(e),this.enableRotate&&this._handleTouchStartRotate(e)}_handleTouchMoveRotate(e){if(this._pointers.length==1)this._rotateEnd.set(e.pageX,e.pageY);else{const n=this._getSecondPointerPosition(e),s=.5*(e.pageX+n.x),r=.5*(e.pageY+n.y);this._rotateEnd.set(s,r)}this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const t=this.domElement;this._rotateLeft(Vt*this._rotateDelta.x/t.clientHeight),this._rotateUp(Vt*this._rotateDelta.y/t.clientHeight),this._rotateStart.copy(this._rotateEnd)}_handleTouchMovePan(e){if(this._pointers.length===1)this._panEnd.set(e.pageX,e.pageY);else{const t=this._getSecondPointerPosition(e),n=.5*(e.pageX+t.x),s=.5*(e.pageY+t.y);this._panEnd.set(n,s)}this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd)}_handleTouchMoveDolly(e){const t=this._getSecondPointerPosition(e),n=e.pageX-t.x,s=e.pageY-t.y,r=Math.sqrt(n*n+s*s);this._dollyEnd.set(0,r),this._dollyDelta.set(0,Math.pow(this._dollyEnd.y/this._dollyStart.y,this.zoomSpeed)),this._dollyOut(this._dollyDelta.y),this._dollyStart.copy(this._dollyEnd);const a=(e.pageX+t.x)*.5,o=(e.pageY+t.y)*.5;this._updateZoomParameters(a,o)}_handleTouchMoveDollyPan(e){this.enableZoom&&this._handleTouchMoveDolly(e),this.enablePan&&this._handleTouchMovePan(e)}_handleTouchMoveDollyRotate(e){this.enableZoom&&this._handleTouchMoveDolly(e),this.enableRotate&&this._handleTouchMoveRotate(e)}_addPointer(e){this._pointers.push(e.pointerId)}_removePointer(e){delete this._pointerPositions[e.pointerId];for(let t=0;t<this._pointers.length;t++)if(this._pointers[t]==e.pointerId){this._pointers.splice(t,1);return}}_isTrackingPointer(e){for(let t=0;t<this._pointers.length;t++)if(this._pointers[t]==e.pointerId)return!0;return!1}_trackPointer(e){let t=this._pointerPositions[e.pointerId];t===void 0&&(t=new Ce,this._pointerPositions[e.pointerId]=t),t.set(e.pageX,e.pageY)}_getSecondPointerPosition(e){const t=e.pointerId===this._pointers[0]?this._pointers[1]:this._pointers[0];return this._pointerPositions[t]}_customWheelEvent(e){const t=e.deltaMode,n={clientX:e.clientX,clientY:e.clientY,deltaY:e.deltaY};switch(t){case 1:n.deltaY*=16;break;case 2:n.deltaY*=100;break}return e.ctrlKey&&!this._controlActive&&(n.deltaY*=10),n}}function G0(i){this.enabled!==!1&&(this._pointers.length===0&&(this.domElement.setPointerCapture(i.pointerId),this.domElement.ownerDocument.addEventListener("pointermove",this._onPointerMove),this.domElement.ownerDocument.addEventListener("pointerup",this._onPointerUp)),!this._isTrackingPointer(i)&&(this._addPointer(i),i.pointerType==="touch"?this._onTouchStart(i):this._onMouseDown(i),this._cursorStyle==="grab"&&(this.domElement.style.cursor="grabbing")))}function z0(i){this.enabled!==!1&&(i.pointerType==="touch"?this._onTouchMove(i):this._onMouseMove(i))}function V0(i){switch(this._removePointer(i),this._pointers.length){case 0:this.domElement.releasePointerCapture(i.pointerId),this.domElement.ownerDocument.removeEventListener("pointermove",this._onPointerMove),this.domElement.ownerDocument.removeEventListener("pointerup",this._onPointerUp),this.dispatchEvent(Sd),this.state=nt.NONE,this._cursorStyle==="grab"&&(this.domElement.style.cursor="grab");break;case 1:const e=this._pointers[0],t=this._pointerPositions[e];this._onTouchStart({pointerId:e,pageX:t.x,pageY:t.y});break}}function H0(i){let e;switch(i.button){case 0:e=this.mouseButtons.LEFT;break;case 1:e=this.mouseButtons.MIDDLE;break;case 2:e=this.mouseButtons.RIGHT;break;default:e=-1}switch(e){case Li.DOLLY:if(this.enableZoom===!1)return;this._handleMouseDownDolly(i),this.state=nt.DOLLY;break;case Li.ROTATE:if(i.ctrlKey||i.metaKey||i.shiftKey){if(this.enablePan===!1)return;this._handleMouseDownPan(i),this.state=nt.PAN}else{if(this.enableRotate===!1)return;this._handleMouseDownRotate(i),this.state=nt.ROTATE}break;case Li.PAN:if(i.ctrlKey||i.metaKey||i.shiftKey){if(this.enableRotate===!1)return;this._handleMouseDownRotate(i),this.state=nt.ROTATE}else{if(this.enablePan===!1)return;this._handleMouseDownPan(i),this.state=nt.PAN}break;default:this.state=nt.NONE}this.state!==nt.NONE&&this.dispatchEvent(Bo)}function j0(i){switch(this.state){case nt.ROTATE:if(this.enableRotate===!1)return;this._handleMouseMoveRotate(i);break;case nt.DOLLY:if(this.enableZoom===!1)return;this._handleMouseMoveDolly(i);break;case nt.PAN:if(this.enablePan===!1)return;this._handleMouseMovePan(i);break}}function W0(i){this.enabled===!1||this.enableZoom===!1||this.state!==nt.NONE||(i.preventDefault(),this.dispatchEvent(Bo),this._handleMouseWheel(this._customWheelEvent(i)),this.dispatchEvent(Sd))}function X0(i){this.enabled!==!1&&this._handleKeyDown(i)}function q0(i){switch(this._trackPointer(i),this._pointers.length){case 1:switch(this.touches.ONE){case Di.ROTATE:if(this.enableRotate===!1)return;this._handleTouchStartRotate(i),this.state=nt.TOUCH_ROTATE;break;case Di.PAN:if(this.enablePan===!1)return;this._handleTouchStartPan(i),this.state=nt.TOUCH_PAN;break;default:this.state=nt.NONE}break;case 2:switch(this.touches.TWO){case Di.DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchStartDollyPan(i),this.state=nt.TOUCH_DOLLY_PAN;break;case Di.DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchStartDollyRotate(i),this.state=nt.TOUCH_DOLLY_ROTATE;break;default:this.state=nt.NONE}break;default:this.state=nt.NONE}this.state!==nt.NONE&&this.dispatchEvent(Bo)}function Y0(i){switch(this._trackPointer(i),this.state){case nt.TOUCH_ROTATE:if(this.enableRotate===!1)return;this._handleTouchMoveRotate(i),this.update();break;case nt.TOUCH_PAN:if(this.enablePan===!1)return;this._handleTouchMovePan(i),this.update();break;case nt.TOUCH_DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchMoveDollyPan(i),this.update();break;case nt.TOUCH_DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchMoveDollyRotate(i),this.update();break;default:this.state=nt.NONE}}function K0(i){this.enabled!==!1&&i.preventDefault()}function $0(i){i.key==="Control"&&(this._controlActive=!0,this.domElement.getRootNode().addEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}function Z0(i){i.key==="Control"&&(this._controlActive=!1,this.domElement.getRootNode().removeEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}function Ac(i,e){if(e===Xh)return console.warn("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Geometry already defined as triangles."),i;if(e===no||e===Zc){let t=i.getIndex();if(t===null){const a=[],o=i.getAttribute("position");if(o!==void 0){for(let l=0;l<o.count;l++)a.push(l);i.setIndex(a),t=i.getIndex()}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Undefined position attribute. Processing not possible."),i}const n=t.count-2,s=[];if(e===no)for(let a=1;a<=n;a++)s.push(t.getX(0)),s.push(t.getX(a)),s.push(t.getX(a+1));else for(let a=0;a<n;a++)a%2===0?(s.push(t.getX(a)),s.push(t.getX(a+1)),s.push(t.getX(a+2))):(s.push(t.getX(a+2)),s.push(t.getX(a+1)),s.push(t.getX(a)));s.length/3!==n&&console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unable to generate correct amount of triangles.");const r=i.clone();return r.setIndex(s),r.clearGroups(),r}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unknown draw mode:",e),i}function J0(i){const e=new Map,t=new Map,n=i.clone();return Md(i,n,function(s,r){e.set(r,s),t.set(s,r)}),n.traverse(function(s){if(!s.isSkinnedMesh)return;const r=s,a=e.get(s),o=a.skeleton.bones;r.skeleton=a.skeleton.clone(),r.bindMatrix.copy(a.bindMatrix),r.skeleton.bones=o.map(function(l){return t.get(l)}),r.bind(r.skeleton,r.bindMatrix)}),n}function Md(i,e,t){t(i,e);for(let n=0;n<i.children.length;n++)Md(i.children[n],e.children[n],t)}class Q0 extends Yi{constructor(e){super(e),this.dracoLoader=null,this.ktx2Loader=null,this.meshoptDecoder=null,this.pluginCallbacks=[],this.register(function(t){return new s_(t)}),this.register(function(t){return new r_(t)}),this.register(function(t){return new p_(t)}),this.register(function(t){return new m_(t)}),this.register(function(t){return new g_(t)}),this.register(function(t){return new o_(t)}),this.register(function(t){return new l_(t)}),this.register(function(t){return new c_(t)}),this.register(function(t){return new d_(t)}),this.register(function(t){return new i_(t)}),this.register(function(t){return new h_(t)}),this.register(function(t){return new a_(t)}),this.register(function(t){return new f_(t)}),this.register(function(t){return new u_(t)}),this.register(function(t){return new t_(t)}),this.register(function(t){return new Rc(t,He.EXT_MESHOPT_COMPRESSION)}),this.register(function(t){return new Rc(t,He.KHR_MESHOPT_COMPRESSION)}),this.register(function(t){return new x_(t)})}load(e,t,n,s){const r=this;let a;if(this.resourcePath!=="")a=this.resourcePath;else if(this.path!==""){const d=us.extractUrlBase(e);a=us.resolveURL(d,this.path)}else a=us.extractUrlBase(e);this.manager.itemStart(e);const o=function(d){s?s(d):console.error(d),r.manager.itemError(e),r.manager.itemEnd(e)},l=new hd(this.manager);l.setPath(this.path),l.setResponseType("arraybuffer"),l.setRequestHeader(this.requestHeader),l.setWithCredentials(this.withCredentials),l.load(e,function(d){try{r.parse(d,a,function(h){t(h),r.manager.itemEnd(e)},o)}catch(h){o(h)}},n,o)}setDRACOLoader(e){return this.dracoLoader=e,this}setKTX2Loader(e){return this.ktx2Loader=e,this}setMeshoptDecoder(e){return this.meshoptDecoder=e,this}register(e){return this.pluginCallbacks.indexOf(e)===-1&&this.pluginCallbacks.push(e),this}unregister(e){return this.pluginCallbacks.indexOf(e)!==-1&&this.pluginCallbacks.splice(this.pluginCallbacks.indexOf(e),1),this}parse(e,t,n,s){let r;const a={},o={},l=new TextDecoder;if(typeof e=="string")r=JSON.parse(e);else if(e instanceof ArrayBuffer)if(l.decode(new Uint8Array(e,0,4))===Ed){try{a[He.KHR_BINARY_GLTF]=new __(e)}catch(f){s&&s(f);return}r=JSON.parse(a[He.KHR_BINARY_GLTF].content)}else r=JSON.parse(l.decode(e));else r=e;if(r.asset===void 0||r.asset.version[0]<2){s&&s(new Error("THREE.GLTFLoader: Unsupported asset. glTF versions >=2.0 are supported."));return}const d=new P_(r,{path:t||this.resourcePath||"",crossOrigin:this.crossOrigin,requestHeader:this.requestHeader,manager:this.manager,ktx2Loader:this.ktx2Loader,meshoptDecoder:this.meshoptDecoder});d.fileLoader.setRequestHeader(this.requestHeader);for(let h=0;h<this.pluginCallbacks.length;h++){const f=this.pluginCallbacks[h](d);f.name||console.error("THREE.GLTFLoader: Invalid plugin found: missing name"),o[f.name]=f,a[f.name]=!0}if(r.extensionsUsed)for(let h=0;h<r.extensionsUsed.length;++h){const f=r.extensionsUsed[h],u=r.extensionsRequired||[];switch(f){case He.KHR_MATERIALS_UNLIT:a[f]=new n_;break;case He.KHR_DRACO_MESH_COMPRESSION:a[f]=new b_(r,this.dracoLoader);break;case He.KHR_TEXTURE_TRANSFORM:a[f]=new v_;break;case He.KHR_MESH_QUANTIZATION:a[f]=new y_;break;default:u.indexOf(f)>=0&&o[f]===void 0&&console.warn('THREE.GLTFLoader: Unknown extension "'+f+'".')}}d.setExtensions(a),d.setPlugins(o),d.parse(n,s)}parseAsync(e,t){const n=this;return new Promise(function(s,r){n.parse(e,t,s,r)})}}function e_(){let i={};return{get:function(e){return i[e]},add:function(e,t){i[e]=t},remove:function(e){delete i[e]},removeAll:function(){i={}}}}function xt(i,e,t){const n=i.json.materials[e];return n.extensions&&n.extensions[t]?n.extensions[t]:null}const He={KHR_BINARY_GLTF:"KHR_binary_glTF",KHR_DRACO_MESH_COMPRESSION:"KHR_draco_mesh_compression",KHR_LIGHTS_PUNCTUAL:"KHR_lights_punctual",KHR_MATERIALS_CLEARCOAT:"KHR_materials_clearcoat",KHR_MATERIALS_DISPERSION:"KHR_materials_dispersion",KHR_MATERIALS_IOR:"KHR_materials_ior",KHR_MATERIALS_SHEEN:"KHR_materials_sheen",KHR_MATERIALS_SPECULAR:"KHR_materials_specular",KHR_MATERIALS_TRANSMISSION:"KHR_materials_transmission",KHR_MATERIALS_IRIDESCENCE:"KHR_materials_iridescence",KHR_MATERIALS_ANISOTROPY:"KHR_materials_anisotropy",KHR_MATERIALS_UNLIT:"KHR_materials_unlit",KHR_MATERIALS_VOLUME:"KHR_materials_volume",KHR_TEXTURE_BASISU:"KHR_texture_basisu",KHR_TEXTURE_TRANSFORM:"KHR_texture_transform",KHR_MESH_QUANTIZATION:"KHR_mesh_quantization",KHR_MATERIALS_EMISSIVE_STRENGTH:"KHR_materials_emissive_strength",EXT_MATERIALS_BUMP:"EXT_materials_bump",EXT_TEXTURE_WEBP:"EXT_texture_webp",EXT_TEXTURE_AVIF:"EXT_texture_avif",EXT_MESHOPT_COMPRESSION:"EXT_meshopt_compression",KHR_MESHOPT_COMPRESSION:"KHR_meshopt_compression",EXT_MESH_GPU_INSTANCING:"EXT_mesh_gpu_instancing"};class t_{constructor(e){this.parser=e,this.name=He.KHR_LIGHTS_PUNCTUAL,this.cache={refs:{},uses:{}}}_markDefs(){const e=this.parser,t=this.parser.json.nodes||[];for(let n=0,s=t.length;n<s;n++){const r=t[n];r.extensions&&r.extensions[this.name]&&r.extensions[this.name].light!==void 0&&e._addNodeRef(this.cache,r.extensions[this.name].light)}}_loadLight(e){const t=this.parser,n="light:"+e;let s=t.cache.get(n);if(s)return s;const r=t.json,l=((r.extensions&&r.extensions[this.name]||{}).lights||[])[e];let d;const h=new Ie(16777215);l.color!==void 0&&h.setRGB(l.color[0],l.color[1],l.color[2],Kt);const f=l.range!==void 0?l.range:0;switch(l.type){case"directional":d=new oo(h),d.target.position.set(0,0,-1),d.add(d.target);break;case"point":d=new fd(h),d.distance=f;break;case"spot":d=new Mf(h),d.distance=f,l.spot=l.spot||{},l.spot.innerConeAngle=l.spot.innerConeAngle!==void 0?l.spot.innerConeAngle:0,l.spot.outerConeAngle=l.spot.outerConeAngle!==void 0?l.spot.outerConeAngle:Math.PI/4,d.angle=l.spot.outerConeAngle,d.penumbra=1-l.spot.innerConeAngle/l.spot.outerConeAngle,d.target.position.set(0,0,-1),d.add(d.target);break;default:throw new Error("THREE.GLTFLoader: Unexpected light type: "+l.type)}return d.position.set(0,0,0),gn(d,l),l.intensity!==void 0&&(d.intensity=l.intensity),d.name=t.createUniqueName(l.name||"light_"+e),s=Promise.resolve(d),t.cache.add(n,s),s}getDependency(e,t){if(e==="light")return this._loadLight(t)}createNodeAttachment(e){const t=this,n=this.parser,r=n.json.nodes[e],o=(r.extensions&&r.extensions[this.name]||{}).light;return o===void 0?null:this._loadLight(o).then(function(l){return n._getNodeRef(t.cache,o,l)})}}class n_{constructor(){this.name=He.KHR_MATERIALS_UNLIT}getMaterialType(){return ui}extendParams(e,t,n){const s=[];e.color=new Ie(1,1,1),e.opacity=1;const r=t.pbrMetallicRoughness;if(r){if(Array.isArray(r.baseColorFactor)){const a=r.baseColorFactor;e.color.setRGB(a[0],a[1],a[2],Kt),e.opacity=a[3]}r.baseColorTexture!==void 0&&s.push(n.assignTexture(e,"map",r.baseColorTexture,Pt))}return Promise.all(s)}}class i_{constructor(e){this.parser=e,this.name=He.KHR_MATERIALS_EMISSIVE_STRENGTH}extendMaterialParams(e,t){const n=xt(this.parser,e,this.name);return n===null||n.emissiveStrength!==void 0&&(t.emissiveIntensity=n.emissiveStrength),Promise.resolve()}}class s_{constructor(e){this.parser=e,this.name=He.KHR_MATERIALS_CLEARCOAT}getMaterialType(e){return xt(this.parser,e,this.name)!==null?An:null}extendMaterialParams(e,t){const n=xt(this.parser,e,this.name);if(n===null)return Promise.resolve();const s=[];if(n.clearcoatFactor!==void 0&&(t.clearcoat=n.clearcoatFactor),n.clearcoatTexture!==void 0&&s.push(this.parser.assignTexture(t,"clearcoatMap",n.clearcoatTexture)),n.clearcoatRoughnessFactor!==void 0&&(t.clearcoatRoughness=n.clearcoatRoughnessFactor),n.clearcoatRoughnessTexture!==void 0&&s.push(this.parser.assignTexture(t,"clearcoatRoughnessMap",n.clearcoatRoughnessTexture)),n.clearcoatNormalTexture!==void 0&&(s.push(this.parser.assignTexture(t,"clearcoatNormalMap",n.clearcoatNormalTexture)),n.clearcoatNormalTexture.scale!==void 0)){const r=n.clearcoatNormalTexture.scale;t.clearcoatNormalScale=new Ce(r,r)}return Promise.all(s)}}class r_{constructor(e){this.parser=e,this.name=He.KHR_MATERIALS_DISPERSION}getMaterialType(e){return xt(this.parser,e,this.name)!==null?An:null}extendMaterialParams(e,t){const n=xt(this.parser,e,this.name);return n===null||(t.dispersion=n.dispersion!==void 0?n.dispersion:0),Promise.resolve()}}class a_{constructor(e){this.parser=e,this.name=He.KHR_MATERIALS_IRIDESCENCE}getMaterialType(e){return xt(this.parser,e,this.name)!==null?An:null}extendMaterialParams(e,t){const n=xt(this.parser,e,this.name);if(n===null)return Promise.resolve();const s=[];return n.iridescenceFactor!==void 0&&(t.iridescence=n.iridescenceFactor),n.iridescenceTexture!==void 0&&s.push(this.parser.assignTexture(t,"iridescenceMap",n.iridescenceTexture)),n.iridescenceIor!==void 0&&(t.iridescenceIOR=n.iridescenceIor),t.iridescenceThicknessRange===void 0&&(t.iridescenceThicknessRange=[100,400]),n.iridescenceThicknessMinimum!==void 0&&(t.iridescenceThicknessRange[0]=n.iridescenceThicknessMinimum),n.iridescenceThicknessMaximum!==void 0&&(t.iridescenceThicknessRange[1]=n.iridescenceThicknessMaximum),n.iridescenceThicknessTexture!==void 0&&s.push(this.parser.assignTexture(t,"iridescenceThicknessMap",n.iridescenceThicknessTexture)),Promise.all(s)}}class o_{constructor(e){this.parser=e,this.name=He.KHR_MATERIALS_SHEEN}getMaterialType(e){return xt(this.parser,e,this.name)!==null?An:null}extendMaterialParams(e,t){const n=xt(this.parser,e,this.name);if(n===null)return Promise.resolve();const s=[];if(t.sheenColor=new Ie(0,0,0),t.sheenRoughness=0,t.sheen=1,n.sheenColorFactor!==void 0){const r=n.sheenColorFactor;t.sheenColor.setRGB(r[0],r[1],r[2],Kt)}return n.sheenRoughnessFactor!==void 0&&(t.sheenRoughness=n.sheenRoughnessFactor),n.sheenColorTexture!==void 0&&s.push(this.parser.assignTexture(t,"sheenColorMap",n.sheenColorTexture,Pt)),n.sheenRoughnessTexture!==void 0&&s.push(this.parser.assignTexture(t,"sheenRoughnessMap",n.sheenRoughnessTexture)),Promise.all(s)}}class l_{constructor(e){this.parser=e,this.name=He.KHR_MATERIALS_TRANSMISSION}getMaterialType(e){return xt(this.parser,e,this.name)!==null?An:null}extendMaterialParams(e,t){const n=xt(this.parser,e,this.name);if(n===null)return Promise.resolve();const s=[];return n.transmissionFactor!==void 0&&(t.transmission=n.transmissionFactor),n.transmissionTexture!==void 0&&s.push(this.parser.assignTexture(t,"transmissionMap",n.transmissionTexture)),Promise.all(s)}}class c_{constructor(e){this.parser=e,this.name=He.KHR_MATERIALS_VOLUME}getMaterialType(e){return xt(this.parser,e,this.name)!==null?An:null}extendMaterialParams(e,t){const n=xt(this.parser,e,this.name);if(n===null)return Promise.resolve();const s=[];t.thickness=n.thicknessFactor!==void 0?n.thicknessFactor:0,n.thicknessTexture!==void 0&&s.push(this.parser.assignTexture(t,"thicknessMap",n.thicknessTexture)),t.attenuationDistance=n.attenuationDistance||1/0;const r=n.attenuationColor||[1,1,1];return t.attenuationColor=new Ie().setRGB(r[0],r[1],r[2],Kt),Promise.all(s)}}class d_{constructor(e){this.parser=e,this.name=He.KHR_MATERIALS_IOR}getMaterialType(e){return xt(this.parser,e,this.name)!==null?An:null}extendMaterialParams(e,t){const n=xt(this.parser,e,this.name);return n===null||(t.ior=n.ior!==void 0?n.ior:1.5,t.ior===0&&(t.ior=1e3)),Promise.resolve()}}class h_{constructor(e){this.parser=e,this.name=He.KHR_MATERIALS_SPECULAR}getMaterialType(e){return xt(this.parser,e,this.name)!==null?An:null}extendMaterialParams(e,t){const n=xt(this.parser,e,this.name);if(n===null)return Promise.resolve();const s=[];t.specularIntensity=n.specularFactor!==void 0?n.specularFactor:1,n.specularTexture!==void 0&&s.push(this.parser.assignTexture(t,"specularIntensityMap",n.specularTexture));const r=n.specularColorFactor||[1,1,1];return t.specularColor=new Ie().setRGB(r[0],r[1],r[2],Kt),n.specularColorTexture!==void 0&&s.push(this.parser.assignTexture(t,"specularColorMap",n.specularColorTexture,Pt)),Promise.all(s)}}class u_{constructor(e){this.parser=e,this.name=He.EXT_MATERIALS_BUMP}getMaterialType(e){return xt(this.parser,e,this.name)!==null?An:null}extendMaterialParams(e,t){const n=xt(this.parser,e,this.name);if(n===null)return Promise.resolve();const s=[];return t.bumpScale=n.bumpFactor!==void 0?n.bumpFactor:1,n.bumpTexture!==void 0&&s.push(this.parser.assignTexture(t,"bumpMap",n.bumpTexture)),Promise.all(s)}}class f_{constructor(e){this.parser=e,this.name=He.KHR_MATERIALS_ANISOTROPY}getMaterialType(e){return xt(this.parser,e,this.name)!==null?An:null}extendMaterialParams(e,t){const n=xt(this.parser,e,this.name);if(n===null)return Promise.resolve();const s=[];return n.anisotropyStrength!==void 0&&(t.anisotropy=n.anisotropyStrength),n.anisotropyRotation!==void 0&&(t.anisotropyRotation=n.anisotropyRotation),n.anisotropyTexture!==void 0&&s.push(this.parser.assignTexture(t,"anisotropyMap",n.anisotropyTexture)),Promise.all(s)}}class p_{constructor(e){this.parser=e,this.name=He.KHR_TEXTURE_BASISU}loadTexture(e){const t=this.parser,n=t.json,s=n.textures[e];if(!s.extensions||!s.extensions[this.name])return null;const r=s.extensions[this.name],a=t.options.ktx2Loader;if(!a){if(n.extensionsRequired&&n.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setKTX2Loader must be called before loading KTX2 textures");return null}return t.loadTextureImage(e,r.source,a)}}class m_{constructor(e){this.parser=e,this.name=He.EXT_TEXTURE_WEBP}loadTexture(e){const t=this.name,n=this.parser,s=n.json,r=s.textures[e];if(!r.extensions||!r.extensions[t])return null;const a=r.extensions[t],o=s.images[a.source];let l=n.textureLoader;if(o.uri){const d=n.options.manager.getHandler(o.uri);d!==null&&(l=d)}return n.loadTextureImage(e,a.source,l)}}class g_{constructor(e){this.parser=e,this.name=He.EXT_TEXTURE_AVIF}loadTexture(e){const t=this.name,n=this.parser,s=n.json,r=s.textures[e];if(!r.extensions||!r.extensions[t])return null;const a=r.extensions[t],o=s.images[a.source];let l=n.textureLoader;if(o.uri){const d=n.options.manager.getHandler(o.uri);d!==null&&(l=d)}return n.loadTextureImage(e,a.source,l)}}class Rc{constructor(e,t){this.name=t,this.parser=e}loadBufferView(e){const t=this.parser.json,n=t.bufferViews[e];if(n.extensions&&n.extensions[this.name]){const s=n.extensions[this.name],r=this.parser.getDependency("buffer",s.buffer),a=this.parser.options.meshoptDecoder;if(!a||!a.supported){if(t.extensionsRequired&&t.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setMeshoptDecoder must be called before loading compressed files");return null}return r.then(function(o){const l=s.byteOffset||0,d=s.byteLength||0,h=s.count,f=s.byteStride,u=new Uint8Array(o,l,d);return a.decodeGltfBufferAsync?a.decodeGltfBufferAsync(h,f,u,s.mode,s.filter).then(function(p){return p.buffer}):a.ready.then(function(){const p=new ArrayBuffer(h*f);return a.decodeGltfBuffer(new Uint8Array(p),h,f,u,s.mode,s.filter),p})})}else return null}}class x_{constructor(e){this.name=He.EXT_MESH_GPU_INSTANCING,this.parser=e}createNodeMesh(e){const t=this.parser.json,n=t.nodes[e];if(!n.extensions||!n.extensions[this.name]||n.mesh===void 0)return null;const s=t.meshes[n.mesh];for(const d of s.primitives)if(d.mode!==Jt.TRIANGLES&&d.mode!==Jt.TRIANGLE_STRIP&&d.mode!==Jt.TRIANGLE_FAN&&d.mode!==void 0)return null;const a=n.extensions[this.name].attributes,o=[],l={};for(const d in a)o.push(this.parser.getDependency("accessor",a[d]).then(h=>(l[d]=h,l[d])));return o.length<1?null:(o.push(this.parser.createNodeMesh(e)),Promise.all(o).then(d=>{const h=d.pop(),f=h.isGroup?h.children:[h],u=d[0].count,p=[];for(const x of f){const v=new Ge,g=new D,m=new cn,M=new D(1,1,1),T=new Xu(x.geometry,x.material,u);for(let y=0;y<u;y++)l.TRANSLATION&&g.fromBufferAttribute(l.TRANSLATION,y),l.ROTATION&&m.fromBufferAttribute(l.ROTATION,y),l.SCALE&&M.fromBufferAttribute(l.SCALE,y),T.setMatrixAt(y,v.compose(g,m,M));for(const y in l)if(y==="_COLOR_0"){const A=l[y];T.instanceColor=new ro(A.array,A.itemSize,A.normalized)}else y!=="TRANSLATION"&&y!=="ROTATION"&&y!=="SCALE"&&x.geometry.setAttribute(y,l[y]);ct.prototype.copy.call(T,x),this.parser.assignFinalMaterial(T),p.push(T)}return h.isGroup?(h.clear(),h.add(...p),h):p[0]}))}}const Ed="glTF",as=12,Cc={JSON:1313821514,BIN:5130562};class __{constructor(e){this.name=He.KHR_BINARY_GLTF,this.content=null,this.body=null;const t=new DataView(e,0,as),n=new TextDecoder;if(this.header={magic:n.decode(new Uint8Array(e.slice(0,4))),version:t.getUint32(4,!0),length:t.getUint32(8,!0)},this.header.magic!==Ed)throw new Error("THREE.GLTFLoader: Unsupported glTF-Binary header.");if(this.header.version<2)throw new Error("THREE.GLTFLoader: Legacy binary file detected.");const s=this.header.length-as,r=new DataView(e,as);let a=0;for(;a<s;){const o=r.getUint32(a,!0);a+=4;const l=r.getUint32(a,!0);if(a+=4,l===Cc.JSON){const d=new Uint8Array(e,as+a,o);this.content=n.decode(d)}else if(l===Cc.BIN){const d=as+a;this.body=e.slice(d,d+o)}a+=o}if(this.content===null)throw new Error("THREE.GLTFLoader: JSON content not found.")}}class b_{constructor(e,t){if(!t)throw new Error("THREE.GLTFLoader: No DRACOLoader instance provided.");this.name=He.KHR_DRACO_MESH_COMPRESSION,this.json=e,this.dracoLoader=t,this.dracoLoader.preload()}decodePrimitive(e,t){const n=this.json,s=this.dracoLoader,r=e.extensions[this.name].bufferView,a=e.extensions[this.name].attributes,o={},l={},d={};for(const h in a){const f=ho[h]||h.toLowerCase();o[f]=a[h]}for(const h in e.attributes){const f=ho[h]||h.toLowerCase();if(a[h]!==void 0){const u=n.accessors[e.attributes[h]],p=ki[u.componentType];d[f]=p.name,l[f]=u.normalized===!0}}return t.getDependency("bufferView",r).then(function(h){return new Promise(function(f,u){s.decodeDracoFile(h,function(p){for(const x in p.attributes){const v=p.attributes[x],g=l[x];g!==void 0&&(v.normalized=g)}f(p)},o,d,Kt,u)})})}}class v_{constructor(){this.name=He.KHR_TEXTURE_TRANSFORM}extendTexture(e,t){return(t.texCoord===void 0||t.texCoord===e.channel)&&t.offset===void 0&&t.rotation===void 0&&t.scale===void 0||(e=e.clone(),t.texCoord!==void 0&&(e.channel=t.texCoord),t.offset!==void 0&&e.offset.fromArray(t.offset),t.rotation!==void 0&&(e.rotation=t.rotation),t.scale!==void 0&&e.repeat.fromArray(t.scale),e.needsUpdate=!0),e}}class y_{constructor(){this.name=He.KHR_MESH_QUANTIZATION}}class wd extends Wi{constructor(e,t,n,s){super(e,t,n,s)}copySampleValue_(e){const t=this.resultBuffer,n=this.sampleValues,s=this.valueSize,r=e*s*3+s;for(let a=0;a!==s;a++)t[a]=n[r+a];return t}interpolate_(e,t,n,s){const r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=o*2,d=o*3,h=s-t,f=(n-t)/h,u=f*f,p=u*f,x=e*d,v=x-d,g=-2*p+3*u,m=p-u,M=1-g,T=m-u+f;for(let y=0;y!==o;y++){const A=a[v+y+o],w=a[v+y+l]*h,R=a[x+y+o],_=a[x+y]*h;r[y]=M*A+T*w+g*R+m*_}return r}}const S_=new cn;class M_ extends wd{interpolate_(e,t,n,s){const r=super.interpolate_(e,t,n,s);return S_.fromArray(r).normalize().toArray(r),r}}const Jt={POINTS:0,LINES:1,LINE_LOOP:2,LINE_STRIP:3,TRIANGLES:4,TRIANGLE_STRIP:5,TRIANGLE_FAN:6},ki={5120:Int8Array,5121:Uint8Array,5122:Int16Array,5123:Uint16Array,5125:Uint32Array,5126:Float32Array},Nc={9728:Mt,9729:Et,9984:jc,9985:nr,9986:ls,9987:Ln},Pc={33071:bn,33648:lr,10497:zi},ha={SCALAR:1,VEC2:2,VEC3:3,VEC4:4,MAT2:4,MAT3:9,MAT4:16},ho={POSITION:"position",NORMAL:"normal",TANGENT:"tangent",TEXCOORD_0:"uv",TEXCOORD_1:"uv1",TEXCOORD_2:"uv2",TEXCOORD_3:"uv3",COLOR_0:"color",WEIGHTS_0:"skinWeight",JOINTS_0:"skinIndex"},$n={scale:"scale",translation:"position",rotation:"quaternion",weights:"morphTargetInfluences"},E_={CUBICSPLINE:void 0,LINEAR:gs,STEP:ms},ua={OPAQUE:"OPAQUE",MASK:"MASK",BLEND:"BLEND"};function w_(i){return i.DefaultMaterial===void 0&&(i.DefaultMaterial=new Uo({color:16777215,emissive:0,metalness:1,roughness:1,transparent:!1,depthTest:!0,side:kn})),i.DefaultMaterial}function oi(i,e,t){for(const n in t.extensions)i[n]===void 0&&(e.userData.gltfExtensions=e.userData.gltfExtensions||{},e.userData.gltfExtensions[n]=t.extensions[n])}function gn(i,e){e.extras!==void 0&&(typeof e.extras=="object"?Object.assign(i.userData,e.extras):console.warn("THREE.GLTFLoader: Ignoring primitive type .extras, "+e.extras))}function T_(i,e,t){let n=!1,s=!1,r=!1;for(let d=0,h=e.length;d<h;d++){const f=e[d];if(f.POSITION!==void 0&&(n=!0),f.NORMAL!==void 0&&(s=!0),f.COLOR_0!==void 0&&(r=!0),n&&s&&r)break}if(!n&&!s&&!r)return Promise.resolve(i);const a=[],o=[],l=[];for(let d=0,h=e.length;d<h;d++){const f=e[d];if(n){const u=f.POSITION!==void 0?t.getDependency("accessor",f.POSITION):i.attributes.position;a.push(u)}if(s){const u=f.NORMAL!==void 0?t.getDependency("accessor",f.NORMAL):i.attributes.normal;o.push(u)}if(r){const u=f.COLOR_0!==void 0?t.getDependency("accessor",f.COLOR_0):i.attributes.color;l.push(u)}}return Promise.all([Promise.all(a),Promise.all(o),Promise.all(l)]).then(function(d){const h=d[0],f=d[1],u=d[2];return n&&(i.morphAttributes.position=h),s&&(i.morphAttributes.normal=f),r&&(i.morphAttributes.color=u),i.morphTargetsRelative=!0,i})}function A_(i,e){if(i.updateMorphTargets(),e.weights!==void 0)for(let t=0,n=e.weights.length;t<n;t++)i.morphTargetInfluences[t]=e.weights[t];if(e.extras&&Array.isArray(e.extras.targetNames)){const t=e.extras.targetNames;if(i.morphTargetInfluences.length===t.length){i.morphTargetDictionary={};for(let n=0,s=t.length;n<s;n++)i.morphTargetDictionary[t[n]]=n}else console.warn("THREE.GLTFLoader: Invalid extras.targetNames length. Ignoring names.")}}function R_(i){let e;const t=i.extensions&&i.extensions[He.KHR_DRACO_MESH_COMPRESSION];if(t?e="draco:"+t.bufferView+":"+t.indices+":"+fa(t.attributes):e=i.indices+":"+fa(i.attributes)+":"+i.mode,i.targets!==void 0)for(let n=0,s=i.targets.length;n<s;n++)e+=":"+fa(i.targets[n]);return e}function fa(i){let e="";const t=Object.keys(i).sort();for(let n=0,s=t.length;n<s;n++)e+=t[n]+":"+i[t[n]]+";";return e}function uo(i){switch(i){case Int8Array:return 1/127;case Uint8Array:return 1/255;case Int16Array:return 1/32767;case Uint16Array:return 1/65535;default:throw new Error("THREE.GLTFLoader: Unsupported normalized accessor component type.")}}function C_(i){return i.search(/\.jpe?g($|\?)/i)>0||i.search(/^data\:image\/jpeg/)===0?"image/jpeg":i.search(/\.webp($|\?)/i)>0||i.search(/^data\:image\/webp/)===0?"image/webp":i.search(/\.ktx2($|\?)/i)>0||i.search(/^data\:image\/ktx2/)===0?"image/ktx2":"image/png"}const N_=new Ge;class P_{constructor(e={},t={}){this.json=e,this.extensions={},this.plugins={},this.options=t,this.cache=new e_,this.associations=new Map,this.primitiveCache={},this.nodeCache={},this.meshCache={refs:{},uses:{}},this.cameraCache={refs:{},uses:{}},this.lightCache={refs:{},uses:{}},this.sourceCache={},this.textureCache={},this.nodeNamesUsed={};let n=!1,s=-1,r=!1,a=-1;if(typeof navigator<"u"&&typeof navigator.userAgent<"u"){const o=navigator.userAgent;n=/^((?!chrome|android).)*safari/i.test(o)===!0;const l=o.match(/Version\/(\d+)/);s=n&&l?parseInt(l[1],10):-1,r=o.indexOf("Firefox")>-1,a=r?o.match(/Firefox\/([0-9]+)\./)[1]:-1}typeof createImageBitmap>"u"||n&&s<17||r&&a<98?this.textureLoader=new yf(this.options.manager):this.textureLoader=new Af(this.options.manager),this.textureLoader.setCrossOrigin(this.options.crossOrigin),this.textureLoader.setRequestHeader(this.options.requestHeader),this.fileLoader=new hd(this.options.manager),this.fileLoader.setResponseType("arraybuffer"),this.options.crossOrigin==="use-credentials"&&this.fileLoader.setWithCredentials(!0)}setExtensions(e){this.extensions=e}setPlugins(e){this.plugins=e}parse(e,t){const n=this,s=this.json,r=this.extensions;this.cache.removeAll(),this.nodeCache={},this._invokeAll(function(a){return a._markDefs&&a._markDefs()}),Promise.all(this._invokeAll(function(a){return a.beforeRoot&&a.beforeRoot()})).then(function(){return Promise.all([n.getDependencies("scene"),n.getDependencies("animation"),n.getDependencies("camera")])}).then(function(a){const o={scene:a[0][s.scene||0],scenes:a[0],animations:a[1],cameras:a[2],asset:s.asset,parser:n,userData:{}};return oi(r,o,s),gn(o,s),Promise.all(n._invokeAll(function(l){return l.afterRoot&&l.afterRoot(o)})).then(function(){for(const l of o.scenes)l.updateMatrixWorld();e(o)})}).catch(t)}_markDefs(){const e=this.json.nodes||[],t=this.json.skins||[],n=this.json.meshes||[];for(let s=0,r=t.length;s<r;s++){const a=t[s].joints;for(let o=0,l=a.length;o<l;o++)e[a[o]].isBone=!0}for(let s=0,r=e.length;s<r;s++){const a=e[s];a.mesh!==void 0&&(this._addNodeRef(this.meshCache,a.mesh),a.skin!==void 0&&(n[a.mesh].isSkinnedMesh=!0)),a.camera!==void 0&&this._addNodeRef(this.cameraCache,a.camera)}}_addNodeRef(e,t){t!==void 0&&(e.refs[t]===void 0&&(e.refs[t]=e.uses[t]=0),e.refs[t]++)}_getNodeRef(e,t,n){if(e.refs[t]<=1)return n;const s=n.clone(),r=(a,o)=>{const l=this.associations.get(a);l!=null&&this.associations.set(o,l);for(const[d,h]of a.children.entries())r(h,o.children[d])};return r(n,s),s.name+="_instance_"+e.uses[t]++,s}_invokeOne(e){const t=Object.values(this.plugins);t.push(this);for(let n=0;n<t.length;n++){const s=e(t[n]);if(s)return s}return null}_invokeAll(e){const t=Object.values(this.plugins);t.unshift(this);const n=[];for(let s=0;s<t.length;s++){const r=e(t[s]);r&&n.push(r)}return n}getDependency(e,t){const n=e+":"+t;let s=this.cache.get(n);if(!s){switch(e){case"scene":s=this.loadScene(t);break;case"node":s=this._invokeOne(function(r){return r.loadNode&&r.loadNode(t)});break;case"mesh":s=this._invokeOne(function(r){return r.loadMesh&&r.loadMesh(t)});break;case"accessor":s=this.loadAccessor(t);break;case"bufferView":s=this._invokeOne(function(r){return r.loadBufferView&&r.loadBufferView(t)});break;case"buffer":s=this.loadBuffer(t);break;case"material":s=this._invokeOne(function(r){return r.loadMaterial&&r.loadMaterial(t)});break;case"texture":s=this._invokeOne(function(r){return r.loadTexture&&r.loadTexture(t)});break;case"skin":s=this.loadSkin(t);break;case"animation":s=this._invokeOne(function(r){return r.loadAnimation&&r.loadAnimation(t)});break;case"camera":s=this.loadCamera(t);break;default:if(s=this._invokeOne(function(r){return r!=this&&r.getDependency&&r.getDependency(e,t)}),!s)throw new Error("Unknown type: "+e);break}this.cache.add(n,s)}return s}getDependencies(e){let t=this.cache.get(e);if(!t){const n=this,s=this.json[e+(e==="mesh"?"es":"s")]||[];t=Promise.all(s.map(function(r,a){return n.getDependency(e,a)})),this.cache.add(e,t)}return t}loadBuffer(e){const t=this.json.buffers[e],n=this.fileLoader;if(t.type&&t.type!=="arraybuffer")throw new Error("THREE.GLTFLoader: "+t.type+" buffer type is not supported.");if(t.uri===void 0&&e===0)return Promise.resolve(this.extensions[He.KHR_BINARY_GLTF].body);const s=this.options;return new Promise(function(r,a){n.load(us.resolveURL(t.uri,s.path),r,void 0,function(){a(new Error('THREE.GLTFLoader: Failed to load buffer "'+t.uri+'".'))})})}loadBufferView(e){const t=this.json.bufferViews[e];return this.getDependency("buffer",t.buffer).then(function(n){const s=t.byteLength||0,r=t.byteOffset||0;return n.slice(r,r+s)})}loadAccessor(e){const t=this,n=this.json,s=this.json.accessors[e];if(s.bufferView===void 0&&s.sparse===void 0){const a=ha[s.type],o=ki[s.componentType],l=s.normalized===!0,d=new o(s.count*a);return Promise.resolve(new Ft(d,a,l))}const r=[];return s.bufferView!==void 0?r.push(this.getDependency("bufferView",s.bufferView)):r.push(null),s.sparse!==void 0&&(r.push(this.getDependency("bufferView",s.sparse.indices.bufferView)),r.push(this.getDependency("bufferView",s.sparse.values.bufferView))),Promise.all(r).then(function(a){const o=a[0],l=ha[s.type],d=ki[s.componentType],h=d.BYTES_PER_ELEMENT,f=h*l,u=s.byteOffset||0,p=s.bufferView!==void 0?n.bufferViews[s.bufferView].byteStride:void 0,x=s.normalized===!0;let v,g;if(p&&p!==f){const m=Math.floor(u/p),M="InterleavedBuffer:"+s.bufferView+":"+s.componentType+":"+m+":"+s.count;let T=t.cache.get(M);T||(v=new d(o,m*p,s.count*p/h),T=new Bu(v,p/h),t.cache.add(M,T)),g=new To(T,l,u%p/h,x)}else o===null?v=new d(s.count*l):v=new d(o,u,s.count*l),g=new Ft(v,l,x);if(s.sparse!==void 0){const m=ha.SCALAR,M=ki[s.sparse.indices.componentType],T=s.sparse.indices.byteOffset||0,y=s.sparse.values.byteOffset||0,A=new M(a[1],T,s.sparse.count*m),w=new d(a[2],y,s.sparse.count*l);o!==null&&(g=new Ft(g.array.slice(),g.itemSize,g.normalized)),g.normalized=!1;for(let R=0,_=A.length;R<_;R++){const E=A[R];if(g.setX(E,w[R*l]),l>=2&&g.setY(E,w[R*l+1]),l>=3&&g.setZ(E,w[R*l+2]),l>=4&&g.setW(E,w[R*l+3]),l>=5)throw new Error("THREE.GLTFLoader: Unsupported itemSize in sparse BufferAttribute.")}g.normalized=x}return g})}loadTexture(e){const t=this.json,n=this.options,r=t.textures[e].source,a=t.images[r];let o=this.textureLoader;if(a.uri){const l=n.manager.getHandler(a.uri);l!==null&&(o=l)}return this.loadTextureImage(e,r,o)}loadTextureImage(e,t,n){const s=this,r=this.json,a=r.textures[e],o=r.images[t],l=(o.uri||o.bufferView)+":"+a.sampler;if(this.textureCache[l])return this.textureCache[l];const d=this.loadImageSource(t,n).then(function(h){h.flipY=!1,h.name=a.name||o.name||"",h.name===""&&typeof o.uri=="string"&&o.uri.startsWith("data:image/")===!1&&(h.name=o.uri);const u=(r.samplers||{})[a.sampler]||{};return h.magFilter=Nc[u.magFilter]||Et,h.minFilter=Nc[u.minFilter]||Ln,h.wrapS=Pc[u.wrapS]||zi,h.wrapT=Pc[u.wrapT]||zi,h.generateMipmaps=!h.isCompressedTexture&&h.minFilter!==Mt&&h.minFilter!==Et,s.associations.set(h,{textures:e}),h}).catch(function(){return null});return this.textureCache[l]=d,d}loadImageSource(e,t){const n=this,s=this.json,r=this.options;if(this.sourceCache[e]!==void 0)return this.sourceCache[e].then(f=>f.clone());const a=s.images[e],o=self.URL||self.webkitURL;let l=a.uri||"",d=!1;if(a.bufferView!==void 0)l=n.getDependency("bufferView",a.bufferView).then(function(f){d=!0;const u=new Blob([f],{type:a.mimeType});return l=o.createObjectURL(u),l});else if(a.uri===void 0)throw new Error("THREE.GLTFLoader: Image "+e+" is missing URI and bufferView");const h=Promise.resolve(l).then(function(f){return new Promise(function(u,p){let x=u;t.isImageBitmapLoader===!0&&(x=function(v){const g=new Ct(v);g.needsUpdate=!0,u(g)}),t.load(us.resolveURL(f,r.path),x,void 0,p)})}).then(function(f){return d===!0&&o.revokeObjectURL(l),gn(f,a),f.userData.mimeType=a.mimeType||C_(a.uri),f}).catch(function(f){throw console.error("THREE.GLTFLoader: Couldn't load texture",l),f});return this.sourceCache[e]=h,h}assignTexture(e,t,n,s){const r=this;return this.getDependency("texture",n.index).then(function(a){if(!a)return null;if(n.texCoord!==void 0&&n.texCoord>0&&(a=a.clone(),a.channel=n.texCoord),r.extensions[He.KHR_TEXTURE_TRANSFORM]){const o=n.extensions!==void 0?n.extensions[He.KHR_TEXTURE_TRANSFORM]:void 0;if(o){const l=r.associations.get(a);a=r.extensions[He.KHR_TEXTURE_TRANSFORM].extendTexture(a,o),r.associations.set(a,l)}}return s!==void 0&&(a.colorSpace=s),e[t]=a,a})}assignFinalMaterial(e){const t=e.geometry;let n=e.material;const s=t.attributes.tangent===void 0,r=t.attributes.color!==void 0,a=t.attributes.normal===void 0;if(e.isPoints){const o="PointsMaterial:"+n.uuid;let l=this.cache.get(o);l||(l=new Io,ln.prototype.copy.call(l,n),l.color.copy(n.color),l.map=n.map,l.sizeAttenuation=!1,this.cache.add(o,l)),n=l}else if(e.isLine){const o="LineBasicMaterial:"+n.uuid;let l=this.cache.get(o);l||(l=new _r,ln.prototype.copy.call(l,n),l.color.copy(n.color),l.map=n.map,this.cache.add(o,l)),n=l}if(s||r||a){let o="ClonedMaterial:"+n.uuid+":";s&&(o+="derivative-tangents:"),r&&(o+="vertex-colors:"),a&&(o+="flat-shading:");let l=this.cache.get(o);l||(l=n.clone(),r&&(l.vertexColors=!0),a&&(l.flatShading=!0),s&&(l.normalScale&&(l.normalScale.y*=-1),l.clearcoatNormalScale&&(l.clearcoatNormalScale.y*=-1)),this.cache.add(o,l),this.associations.set(l,this.associations.get(n))),n=l}e.material=n}getMaterialType(){return Uo}loadMaterial(e){const t=this,n=this.json,s=this.extensions,r=n.materials[e];let a;const o={},l=r.extensions||{},d=[];if(l[He.KHR_MATERIALS_UNLIT]){const f=s[He.KHR_MATERIALS_UNLIT];a=f.getMaterialType(),d.push(f.extendParams(o,r,t))}else{const f=r.pbrMetallicRoughness||{};if(o.color=new Ie(1,1,1),o.opacity=1,Array.isArray(f.baseColorFactor)){const u=f.baseColorFactor;o.color.setRGB(u[0],u[1],u[2],Kt),o.opacity=u[3]}f.baseColorTexture!==void 0&&d.push(t.assignTexture(o,"map",f.baseColorTexture,Pt)),o.metalness=f.metallicFactor!==void 0?f.metallicFactor:1,o.roughness=f.roughnessFactor!==void 0?f.roughnessFactor:1,f.metallicRoughnessTexture!==void 0&&(d.push(t.assignTexture(o,"metalnessMap",f.metallicRoughnessTexture)),d.push(t.assignTexture(o,"roughnessMap",f.metallicRoughnessTexture))),a=this._invokeOne(function(u){return u.getMaterialType&&u.getMaterialType(e)}),d.push(Promise.all(this._invokeAll(function(u){return u.extendMaterialParams&&u.extendMaterialParams(e,o)})))}r.doubleSided===!0&&(o.side=_n);const h=r.alphaMode||ua.OPAQUE;if(h===ua.BLEND?(o.transparent=!0,o.depthWrite=!1):(o.transparent=!1,h===ua.MASK&&(o.alphaTest=r.alphaCutoff!==void 0?r.alphaCutoff:.5)),r.normalTexture!==void 0&&a!==ui&&(d.push(t.assignTexture(o,"normalMap",r.normalTexture)),o.normalScale=new Ce(1,1),r.normalTexture.scale!==void 0)){const f=r.normalTexture.scale;o.normalScale.set(f,f)}if(r.occlusionTexture!==void 0&&a!==ui&&(d.push(t.assignTexture(o,"aoMap",r.occlusionTexture)),r.occlusionTexture.strength!==void 0&&(o.aoMapIntensity=r.occlusionTexture.strength)),r.emissiveFactor!==void 0&&a!==ui){const f=r.emissiveFactor;o.emissive=new Ie().setRGB(f[0],f[1],f[2],Kt)}return r.emissiveTexture!==void 0&&a!==ui&&d.push(t.assignTexture(o,"emissiveMap",r.emissiveTexture,Pt)),Promise.all(d).then(function(){const f=new a(o);return r.name&&(f.name=r.name),gn(f,r),t.associations.set(f,{materials:e}),r.extensions&&oi(s,f,r),f})}createUniqueName(e){const t=et.sanitizeNodeName(e||"");return t in this.nodeNamesUsed?t+"_"+ ++this.nodeNamesUsed[t]:(this.nodeNamesUsed[t]=0,t)}loadGeometries(e){const t=this,n=this.extensions,s=this.primitiveCache;function r(o){return n[He.KHR_DRACO_MESH_COMPRESSION].decodePrimitive(o,t).then(function(l){return Ic(l,o,t)})}const a=[];for(let o=0,l=e.length;o<l;o++){const d=e[o],h=R_(d),f=s[h];if(f)a.push(f.promise);else{let u;d.extensions&&d.extensions[He.KHR_DRACO_MESH_COMPRESSION]?u=r(d):u=Ic(new Ot,d,t),s[h]={primitive:d,promise:u},a.push(u)}}return Promise.all(a)}loadMesh(e){const t=this,n=this.json,s=this.extensions,r=n.meshes[e],a=r.primitives,o=[];for(let l=0,d=a.length;l<d;l++){const h=a[l].material===void 0?w_(this.cache):this.getDependency("material",a[l].material);o.push(h)}return o.push(t.loadGeometries(a)),Promise.all(o).then(function(l){const d=l.slice(0,l.length-1),h=l[l.length-1],f=[];for(let p=0,x=h.length;p<x;p++){const v=h[p],g=a[p];let m;const M=d[p];if(g.mode===Jt.TRIANGLES||g.mode===Jt.TRIANGLE_STRIP||g.mode===Jt.TRIANGLE_FAN||g.mode===void 0)m=r.isSkinnedMesh===!0?new Hu(v,M):new jt(v,M),m.isSkinnedMesh===!0&&m.normalizeSkinWeights(),g.mode===Jt.TRIANGLE_STRIP?m.geometry=Ac(m.geometry,Zc):g.mode===Jt.TRIANGLE_FAN&&(m.geometry=Ac(m.geometry,no));else if(g.mode===Jt.LINES)m=new Po(v,M);else if(g.mode===Jt.LINE_STRIP)m=new No(v,M);else if(g.mode===Jt.LINE_LOOP)m=new $u(v,M);else if(g.mode===Jt.POINTS)m=new ad(v,M);else throw new Error("THREE.GLTFLoader: Primitive mode unsupported: "+g.mode);Object.keys(m.geometry.morphAttributes).length>0&&A_(m,r),m.name=t.createUniqueName(r.name||"mesh_"+e),gn(m,r),g.extensions&&oi(s,m,g),t.assignFinalMaterial(m),f.push(m)}for(let p=0,x=f.length;p<x;p++)t.associations.set(f[p],{meshes:e,primitives:p});if(f.length===1)return r.extensions&&oi(s,f[0],r),f[0];const u=new hi;r.extensions&&oi(s,u,r),t.associations.set(u,{meshes:e});for(let p=0,x=f.length;p<x;p++)u.add(f[p]);return u})}loadCamera(e){let t;const n=this.json.cameras[e],s=n[n.type];if(!s){console.warn("THREE.GLTFLoader: Missing camera parameters.");return}return n.type==="perspective"?t=new Gt(Qc.radToDeg(s.yfov),s.aspectRatio||1,s.znear||1,s.zfar||2e6):n.type==="orthographic"&&(t=new yr(-s.xmag,s.xmag,s.ymag,-s.ymag,s.znear,s.zfar)),n.name&&(t.name=this.createUniqueName(n.name)),gn(t,n),Promise.resolve(t)}loadSkin(e){const t=this.json.skins[e],n=[];for(let s=0,r=t.joints.length;s<r;s++)n.push(this._loadNodeShallow(t.joints[s]));return t.inverseBindMatrices!==void 0?n.push(this.getDependency("accessor",t.inverseBindMatrices)):n.push(null),Promise.all(n).then(function(s){const r=s.pop(),a=s,o=[],l=[];for(let d=0,h=a.length;d<h;d++){const f=a[d];if(f){o.push(f);const u=new Ge;r!==null&&u.fromArray(r.array,d*16),l.push(u)}else console.warn('THREE.GLTFLoader: Joint "%s" could not be found.',t.joints[d])}return new Ro(o,l)})}loadAnimation(e){const t=this.json,n=this,s=t.animations[e],r=s.name?s.name:"animation_"+e,a=[],o=[],l=[],d=[],h=[];for(let f=0,u=s.channels.length;f<u;f++){const p=s.channels[f],x=s.samplers[p.sampler],v=p.target,g=v.node,m=s.parameters!==void 0?s.parameters[x.input]:x.input,M=s.parameters!==void 0?s.parameters[x.output]:x.output;v.node!==void 0&&(a.push(this.getDependency("node",g)),o.push(this.getDependency("accessor",m)),l.push(this.getDependency("accessor",M)),d.push(x),h.push(v))}return Promise.all([Promise.all(a),Promise.all(o),Promise.all(l),Promise.all(d),Promise.all(h)]).then(function(f){const u=f[0],p=f[1],x=f[2],v=f[3],g=f[4],m=[];for(let T=0,y=u.length;T<y;T++){const A=u[T],w=p[T],R=x[T],_=v[T],E=g[T];if(A===void 0)continue;A.updateMatrix&&A.updateMatrix();const N=n._createAnimationTracks(A,w,R,_,E);if(N)for(let P=0;P<N.length;P++)m.push(N[P])}const M=new pf(r,void 0,m);return gn(M,s),M})}createNodeMesh(e){const t=this.json,n=this,s=t.nodes[e];return s.mesh===void 0?null:n.getDependency("mesh",s.mesh).then(function(r){const a=n._getNodeRef(n.meshCache,s.mesh,r);return s.weights!==void 0&&a.traverse(function(o){if(o.isMesh)for(let l=0,d=s.weights.length;l<d;l++)o.morphTargetInfluences[l]=s.weights[l]}),a})}loadNode(e){const t=this.json,n=this,s=t.nodes[e],r=n._loadNodeShallow(e),a=[],o=s.children||[];for(let d=0,h=o.length;d<h;d++)a.push(n.getDependency("node",o[d]));const l=s.skin===void 0?Promise.resolve(null):n.getDependency("skin",s.skin);return Promise.all([r,Promise.all(a),l]).then(function(d){const h=d[0],f=d[1],u=d[2];u!==null&&h.traverse(function(p){p.isSkinnedMesh&&p.bind(u,N_)});for(let p=0,x=f.length;p<x;p++)h.add(f[p]);if(h.userData.pivot!==void 0&&f.length>0){const p=h.userData.pivot,x=f[0];h.pivot=new D().fromArray(p),h.position.x-=p[0],h.position.y-=p[1],h.position.z-=p[2],x.position.set(0,0,0),delete h.userData.pivot}return h})}_loadNodeShallow(e){const t=this.json,n=this.extensions,s=this;if(this.nodeCache[e]!==void 0)return this.nodeCache[e];const r=t.nodes[e],a=r.name?s.createUniqueName(r.name):"",o=[],l=s._invokeOne(function(d){return d.createNodeMesh&&d.createNodeMesh(e)});return l&&o.push(l),r.camera!==void 0&&o.push(s.getDependency("camera",r.camera).then(function(d){return s._getNodeRef(s.cameraCache,r.camera,d)})),s._invokeAll(function(d){return d.createNodeAttachment&&d.createNodeAttachment(e)}).forEach(function(d){o.push(d)}),this.nodeCache[e]=Promise.all(o).then(function(d){let h;if(r.isBone===!0?h=new rd:d.length>1?h=new hi:d.length===1?h=d[0]:h=new ct,h!==d[0])for(let f=0,u=d.length;f<u;f++)h.add(d[f]);if(r.name&&(h.userData.name=r.name,h.name=a),gn(h,r),r.extensions&&oi(n,h,r),r.matrix!==void 0){const f=new Ge;f.fromArray(r.matrix),h.applyMatrix4(f)}else r.translation!==void 0&&h.position.fromArray(r.translation),r.rotation!==void 0&&h.quaternion.fromArray(r.rotation),r.scale!==void 0&&h.scale.fromArray(r.scale);if(!s.associations.has(h))s.associations.set(h,{});else if(r.mesh!==void 0&&s.meshCache.refs[r.mesh]>1){const f=s.associations.get(h);s.associations.set(h,{...f})}return s.associations.get(h).nodes=e,h}),this.nodeCache[e]}loadScene(e){const t=this.extensions,n=this.json.scenes[e],s=this,r=new hi;n.name&&(r.name=s.createUniqueName(n.name)),gn(r,n),n.extensions&&oi(t,r,n);const a=n.nodes||[],o=[];for(let l=0,d=a.length;l<d;l++)o.push(s.getDependency("node",a[l]));return Promise.all(o).then(function(l){for(let h=0,f=l.length;h<f;h++){const u=l[h];u.parent!==null?r.add(J0(u)):r.add(u)}const d=h=>{const f=new Map;for(const[u,p]of s.associations)(u instanceof ln||u instanceof Ct)&&f.set(u,p);return h.traverse(u=>{const p=s.associations.get(u);p!=null&&f.set(u,p)}),f};return s.associations=d(r),r})}_createAnimationTracks(e,t,n,s,r){const a=[],o=e.name?e.name:e.uuid,l=[];function d(p){p.morphTargetInfluences&&l.push(p.name?p.name:p.uuid)}$n[r.path]===$n.weights?(d(e),e.isGroup&&e.children.forEach(d)):l.push(o);let h;switch($n[r.path]){case $n.weights:h=bs;break;case $n.rotation:h=vs;break;case $n.translation:case $n.scale:h=mr;break;default:switch(n.itemSize){case 1:h=bs;break;case 2:case 3:default:h=mr;break}break}const f=s.interpolation!==void 0?E_[s.interpolation]:gs,u=this._getArrayFromAccessor(n);for(let p=0,x=l.length;p<x;p++){const v=new h(l[p]+"."+$n[r.path],t.array,u,f);s.interpolation==="CUBICSPLINE"&&this._createCubicSplineTrackInterpolant(v),a.push(v)}return a}_getArrayFromAccessor(e){let t=e.array;if(e.normalized){const n=uo(t.constructor),s=new Float32Array(t.length);for(let r=0,a=t.length;r<a;r++)s[r]=t[r]*n;t=s}return t}_createCubicSplineTrackInterpolant(e){e.createInterpolant=function(n){const s=this instanceof vs?M_:wd;return new s(this.times,this.values,this.getValueSize()/3,n)},e.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline=!0}}function I_(i,e,t){const n=e.attributes,s=new wn;if(n.POSITION!==void 0){const o=t.json.accessors[n.POSITION],l=o.min,d=o.max;if(l!==void 0&&d!==void 0){if(s.set(new D(l[0],l[1],l[2]),new D(d[0],d[1],d[2])),o.normalized){const h=uo(ki[o.componentType]);s.min.multiplyScalar(h),s.max.multiplyScalar(h)}}else{console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.");return}}else return;const r=e.targets;if(r!==void 0){const o=new D,l=new D;for(let d=0,h=r.length;d<h;d++){const f=r[d];if(f.POSITION!==void 0){const u=t.json.accessors[f.POSITION],p=u.min,x=u.max;if(p!==void 0&&x!==void 0){if(l.setX(Math.max(Math.abs(p[0]),Math.abs(x[0]))),l.setY(Math.max(Math.abs(p[1]),Math.abs(x[1]))),l.setZ(Math.max(Math.abs(p[2]),Math.abs(x[2]))),u.normalized){const v=uo(ki[u.componentType]);l.multiplyScalar(v)}o.max(l)}else console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.")}}s.expandByVector(o)}i.boundingBox=s;const a=new Tn;s.getCenter(a.center),a.radius=s.min.distanceTo(s.max)/2,i.boundingSphere=a}function Ic(i,e,t){const n=e.attributes,s=[];function r(a,o){return t.getDependency("accessor",a).then(function(l){i.setAttribute(o,l)})}for(const a in n){const o=ho[a]||a.toLowerCase();o in i.attributes||s.push(r(n[a],o))}if(e.indices!==void 0&&!i.index){const a=t.getDependency("accessor",e.indices).then(function(o){i.setIndex(o)});s.push(a)}return je.workingColorSpace!==Kt&&"COLOR_0"in n&&console.warn(`THREE.GLTFLoader: Converting vertex colors from "srgb-linear" to "${je.workingColorSpace}" not supported.`),gn(i,e),I_(i,e,t),Promise.all(s).then(function(){return e.targets!==void 0?T_(i,e.targets,t):i})}function D_(){try{const i=document.createElement("canvas"),e=!!(window.WebGLRenderingContext&&(i.getContext("webgl")||i.getContext("experimental-webgl"))),t=!!(window.WebGL2RenderingContext&&i.getContext("webgl2"));return e||t}catch{return!1}}function L_({modelFile:i,onLoadStatus:e,onError:t}){const n=xe.useRef(null),s=xe.useRef(null),r=xe.useRef(null),a=xe.useRef(null),o=xe.useRef(null),[l,d]=xe.useState(!0),[h,f]=xe.useState(0);return xe.useEffect(()=>{const u=D_();if(d(u),!u){let p;const x=()=>{f(v=>(v+1)%360),p=requestAnimationFrame(x)};return p=requestAnimationFrame(x),()=>cancelAnimationFrame(p)}},[]),xe.useEffect(()=>{if(!l||!n.current)return;const u=n.current.clientWidth||window.innerWidth,p=n.current.clientHeight||window.innerHeight,x=new Uu;x.background=new Ie(132364),x.fog=new wo(132364,.015),r.current=x;const v=new Gt(45,u/p,.1,1e3);v.position.set(0,3,8);let g=null;try{g=new O0({antialias:!1,alpha:!1,powerPreference:"high-performance",failIfMajorPerformanceCaveat:!1}),g.setSize(u,p),g.setPixelRatio(Math.min(window.devicePixelRatio,1.5)),g.shadowMap.enabled=!0,g.shadowMap.type=Lc;const ee=g.domElement;n.current.appendChild(ee),s.current=g}catch(ee){console.warn("WebGL Renderer error caught during WebGLRenderer initialization:",ee),d(!1);return}let m;try{m=new B0(v,g.domElement),m.enableDamping=!0,m.dampingFactor=.05,m.maxDistance=50,m.minDistance=2,m.target.set(0,0,0)}catch(ee){console.warn("OrbitControls creation failed:",ee),d(!1);return}const M=new Tf(661037,1.5);x.add(M);const T=new oo(55807,3.5);T.position.set(5,10,7),T.castShadow=!0,T.shadow.mapSize.width=1024,T.shadow.mapSize.height=1024,x.add(T);const y=new oo(8150271,2.5);y.position.set(-5,5,-5),x.add(y);const A=new fd(16739072,2,10);A.position.set(0,-1,0),x.add(A);const w=new Gf(20,20,55807,1252661);w.position.y=-1.5,w.material instanceof ln&&(w.material.opacity=.4,w.material.transparent=!0),x.add(w);const R=300,_=new Ot,E=new Float32Array(R*3);for(let ee=0;ee<R*3;ee+=3)E[ee]=(Math.random()-.5)*30,E[ee+1]=(Math.random()-.5)*20,E[ee+2]=(Math.random()-.5)*30;_.setAttribute("position",new Ft(E,3));const N=new Io({color:55807,size:.06,transparent:!0,opacity:.6}),P=new ad(_,N);x.add(P);const F=new Lo(1.5,1),j=new Ju(F),K=new _r({color:55807,transparent:!0,opacity:.8}),k=new Po(j,K);o.current=k,x.add(k);const X=()=>{if(!n.current||!s.current)return;const ee=n.current.clientWidth,se=n.current.clientHeight;v.aspect=ee/se,v.updateProjectionMatrix(),s.current.setSize(ee,se)};window.addEventListener("resize",X);let W;const Q=new Bf,V=()=>{W=requestAnimationFrame(V);const ee=Q.getElapsedTime();o.current&&(o.current.rotation.y=ee*.25,o.current.rotation.x=ee*.15),a.current&&(a.current.rotation.y=ee*.15),P.rotation.y=ee*.03,m.update(),g&&g.render(x,v)};return V(),()=>{if(cancelAnimationFrame(W),window.removeEventListener("resize",X),n.current&&s.current)try{n.current.contains(s.current.domElement)&&n.current.removeChild(s.current.domElement)}catch{}try{g&&g.dispose()}catch{}}},[l]),xe.useEffect(()=>{if(!l||!i||!r.current){!l&&i&&(e("parsing"),setTimeout(()=>{e("loaded")},1e3));return}e("parsing"),o.current&&(o.current.visible=!1),a.current&&(r.current.remove(a.current),a.current=null);const u=new FileReader;u.readAsArrayBuffer(i),u.onload=p=>{var g;const x=(g=p.target)==null?void 0:g.result;if(!x||typeof x=="string"){t("Could not read file array buffer.");return}new Q0().parse(x,"",m=>{var R;const M=m.scene,T=new wn().setFromObject(M),y=T.getSize(new D),A=T.getCenter(new D);M.position.x+=M.position.x-A.x,M.position.y+=M.position.y-A.y,M.position.z+=M.position.z-A.z;const w=Math.max(y.x,y.y,y.z);if(w>0){const _=3.5/w;M.scale.set(_,_,_)}M.traverse(_=>{_ instanceof jt&&(_.castShadow=!0,_.receiveShadow=!0,_.material&&(_.material.roughness=Math.min(_.material.roughness||.5,.8)))}),(R=r.current)==null||R.add(M),a.current=M,e("loaded")},m=>{console.error("Error parsing GLTF file:",m),t("Error parsing GLTF / GLB model geometry."),o.current&&(o.current.visible=!0)})},u.onerror=()=>{t("Error reading file from disk."),o.current&&(o.current.visible=!0)}},[i,l]),l?c.jsx("div",{ref:n,className:"w-full h-full cursor-grab active:cursor-grabbing",id:"threed-viewport-container"}):c.jsxs("div",{className:"w-full h-full bg-[#02050c] flex flex-col items-center justify-center p-6 text-center select-none relative overflow-hidden",children:[c.jsx("div",{className:"absolute inset-0 bg-[linear-gradient(to_right,#1e293b12_1px,transparent_1px),linear-gradient(to_bottom,#1e293b12_1px,transparent_1px)] bg-[size:24px_24px] pointer-events-none"}),c.jsx("div",{className:"absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(0,217,255,0.08)_0%,transparent_70%)] pointer-events-none"}),c.jsx("div",{className:"relative w-48 h-48 mb-8 flex items-center justify-center",style:{perspective:"800px"},children:c.jsxs("div",{className:"w-32 h-32 border border-[#00d9ff]/30 rounded-2xl flex items-center justify-center transition-transform duration-75 relative",style:{transform:`rotateY(${h}deg) rotateX(30deg)`,transformStyle:"preserve-3d",boxShadow:"0 0 40px rgba(0, 217, 255, 0.1)"},children:[c.jsx("div",{className:"absolute inset-2 border border-[#7c5cff]/40 rounded-full animate-ping opacity-30"}),c.jsx("div",{className:"absolute inset-6 border border-[#00d9ff]/50 rounded-xl flex items-center justify-center",children:c.jsx("span",{className:"text-[#00d9ff] font-mono text-xs font-black animate-pulse",children:"3D"})}),i&&c.jsx("div",{className:"absolute -bottom-8 bg-[#00d9ff]/10 text-[#00d9ff] border border-[#00d9ff]/30 text-[10px] font-mono px-2 py-0.5 rounded backdrop-blur-md",style:{transform:"translateZ(40px)"},children:"CONNECTED"})]})}),c.jsxs("div",{className:"p-5 rounded-2xl bg-white/5 border border-[#00d9ff]/10 max-w-sm backdrop-blur-xl z-10 shadow-[0_10px_30px_rgba(0,0,0,0.5)]",children:[c.jsxs("h4",{className:"text-sm font-bold text-white mb-2 uppercase tracking-wider flex items-center justify-center gap-2",children:[c.jsx("span",{className:"text-[#00d9ff]",children:"✦"})," 3D SIMULATOR CONNECTION ACTIVE ",c.jsx("span",{className:"text-[#00d9ff]",children:"✦"})]}),c.jsxs("p",{className:"text-xs text-slate-400 leading-relaxed mb-4",children:["We detected that your browser's sandboxed environment has WebGL Hardware Acceleration disabled. However, our ",c.jsx("span",{className:"text-[#00d9ff] font-bold",children:"2D Vector Emulator"})," is fully connected!"]}),c.jsxs("div",{className:"text-[10px] font-mono text-[#00d9ff]/80 bg-[#00d9ff]/5 py-2 px-3 rounded-lg border border-[#00d9ff]/20 text-left space-y-1",children:[c.jsxs("div",{className:"flex justify-between",children:[c.jsx("span",{children:"HOLOGRAPHIC EMULATOR:"}),c.jsx("span",{className:"font-bold text-emerald-400",children:"ONLINE"})]}),c.jsxs("div",{className:"flex justify-between",children:[c.jsx("span",{children:"ACTIVE MODEL FILE:"}),c.jsx("span",{className:"font-bold text-white truncate max-w-[150px]",children:i?i.name:"HOLOGRAM_NODE.GLB"})]}),i&&c.jsxs("div",{className:"flex justify-between",children:[c.jsx("span",{children:"FILE SIZE:"}),c.jsxs("span",{className:"font-bold text-white",children:[(i.size/1024/1024).toFixed(2)," MB"]})]})]})]})]})}function U_({onExitTo2D:i,initialModelFile:e=null}){const[t,n]=xe.useState(e),[s,r]=xe.useState("idle"),[a,o]=xe.useState(""),[l,d]=xe.useState(!1),h=xe.useRef(null),f=m=>{if(m.target.files&&m.target.files[0]){const M=m.target.files[0];M.name.endsWith(".glb")||M.name.endsWith(".gltf")?(n(M),o("")):(o("Unsupported format. Please select a valid 3D file (.glb or .gltf)."),r("error"))}},u=m=>{m.preventDefault(),d(!0)},p=()=>{d(!1)},x=m=>{if(m.preventDefault(),d(!1),m.dataTransfer.files&&m.dataTransfer.files[0]){const M=m.dataTransfer.files[0];M.name.endsWith(".glb")||M.name.endsWith(".gltf")?(n(M),o("")):(o("Unsupported format. Please drop a valid 3D file (.glb or .gltf)."),r("error"))}},v=()=>{n(null),r("idle"),o(""),h.current&&(h.current.value="")},g=()=>{i?i():window.location.href="index.html"};return c.jsxs("div",{className:"w-screen h-screen overflow-hidden bg-[#02050c] text-[#e2e8f0] flex flex-col relative font-sans",children:[c.jsxs("header",{className:"absolute top-0 left-0 right-0 z-50 p-4 flex justify-between items-center bg-[#060b18]/80 backdrop-blur-xl border-b border-[#00d9ff]/10",children:[c.jsxs("button",{onClick:g,className:"group flex items-center gap-2 px-4 py-2 rounded-xl bg-gradient-to-r from-[#00d9ff] to-[#7c5cff] text-[#03060f] font-black text-xs tracking-wider transition-all duration-300 hover:scale-105 shadow-[0_0_20px_rgba(0,217,255,0.3)] cursor-pointer",title:"Return to 2D Portfolio",children:[c.jsx("span",{children:"←"}),c.jsx("span",{children:"2D PORTFOLIO SHIFTER"})]}),c.jsxs("div",{className:"flex flex-col text-right leading-none",children:[c.jsx("span",{className:"text-xs font-black tracking-widest text-white uppercase",children:"3D FILE CONNECTOR"}),c.jsx("span",{className:"text-[10px] font-mono text-[#00d9ff] uppercase mt-1",children:"DYNAMIC MODEL BINDING LIVE"})]})]}),c.jsxs("div",{className:"w-full h-full relative",children:[c.jsx(L_,{modelFile:t,onLoadStatus:r,onError:m=>{o(m),r("error")}}),c.jsxs("div",{className:"absolute top-24 left-4 z-40 w-full max-w-sm bg-[#060b19]/90 backdrop-blur-2xl border border-[#00d9ff]/20 rounded-2xl p-5 shadow-[0_0_30px_rgba(0,217,255,0.15)] flex flex-col gap-4",children:[c.jsxs("div",{className:"flex items-center justify-between border-b border-white/5 pb-3",children:[c.jsxs("div",{className:"flex items-center gap-2",children:[c.jsx("span",{className:`w-2.5 h-2.5 rounded-full ${s==="loaded"?"bg-[#38ef7d]":s==="parsing"?"bg-[#ff6b00]":"bg-[#00d9ff]"} animate-pulse`}),c.jsx("h3",{className:"text-sm font-black uppercase tracking-wider text-white",children:"3D Portfolio Connection"})]}),c.jsxs("span",{className:"text-[9px] font-mono px-2 py-0.5 rounded bg-white/5 text-slate-400",children:["STATE: ",s.toUpperCase()]})]}),c.jsxs("p",{className:"text-xs text-slate-400 leading-relaxed",children:["Drag-and-drop or select any 3D object file (",c.jsx("span",{className:"text-[#00d9ff] font-mono",children:".glb"})," or ",c.jsx("span",{className:"text-[#00d9ff] font-mono",children:".gltf"}),") to automatically bind it and render it live on your portfolio scene."]}),c.jsxs("div",{onDragOver:u,onDragLeave:p,onDrop:x,onClick:()=>{var m;return(m=h.current)==null?void 0:m.click()},className:`border-2 border-dashed rounded-xl p-6 text-center cursor-pointer transition-all ${l?"border-[#00d9ff] bg-[#00d9ff]/10 shadow-[0_0_20px_rgba(0,217,255,0.2)]":"border-white/10 bg-white/5 hover:border-[#00d9ff]/40 hover:bg-white/10"}`,children:[c.jsx("input",{type:"file",ref:h,onChange:f,accept:".glb,.gltf",className:"hidden"}),c.jsx("div",{className:"text-2xl mb-2",children:"📁"}),c.jsx("p",{className:"text-xs font-bold text-white mb-1",children:t?t.name:"Choose 3D Asset File"}),c.jsx("p",{className:"text-[10px] text-slate-400",children:t?`${(t.size/1024/1024).toFixed(2)} MB`:"Drag & drop .glb / .gltf files here"})]}),s==="parsing"&&c.jsx("div",{className:"p-3 rounded-xl bg-[#ff6b00]/10 border border-[#ff6b00]/20 text-center animate-pulse",children:c.jsx("span",{className:"text-[11px] text-[#ff6b00] font-bold",children:"⚙ PARSING MODEL GEOMETRY..."})}),s==="loaded"&&c.jsxs("div",{className:"flex flex-col gap-2",children:[c.jsx("div",{className:"p-3 rounded-xl bg-emerald-500/10 border border-emerald-500/20 text-center",children:c.jsx("span",{className:"text-[11px] text-emerald-400 font-bold",children:"✔ 3D MODEL CONNECTED SUCCESSFULLY"})}),c.jsx("button",{onClick:v,className:"w-full py-2 rounded-xl bg-red-500/10 border border-red-500/30 text-red-400 hover:bg-red-500 hover:text-white transition-all font-bold text-xs",children:"Disconnect Model"})]}),s==="error"&&c.jsxs("div",{className:"p-3 rounded-xl bg-red-500/10 border border-red-500/20",children:[c.jsx("p",{className:"text-[11px] text-red-400 font-bold text-center mb-1",children:"❌ CONNECTION FAILED"}),c.jsx("p",{className:"text-[10px] text-slate-400 text-center",children:a||"Invalid asset configuration."})]}),c.jsx("div",{className:"text-[10px] text-slate-500 text-center border-t border-white/5 pt-3",children:"✨ Orbit / Pan / Zoom with mouse drag or touch controls."})]})]})]})}function F_(){const[i,e]=xe.useState(()=>new URLSearchParams(window.location.search).get("mode")==="3d"?"3d":"2d"),[t,n]=xe.useState({isOpen:!1,src:"",title:""}),[s,r]=xe.useState(!1),[a,o]=xe.useState(null),l=Dc.useRef(null);xe.useEffect(()=>{const p=()=>{const x=new URLSearchParams(window.location.search);e(x.get("mode")==="3d"?"3d":"2d")};return window.addEventListener("popstate",p),()=>{window.removeEventListener("popstate",p)}},[]);const d=()=>{o(null),e("2d");const p=new URL(window.location.href);p.searchParams.delete("mode"),window.history.pushState({},"",p.toString())},h=(p,x)=>{n({isOpen:!0,src:p,title:x})},f=p=>{var x;p.preventDefault(),(x=l.current)==null||x.click()},u=p=>{if(p.target.files&&p.target.files[0]){const x=p.target.files[0];if(x.name.endsWith(".glb")||x.name.endsWith(".gltf")){o(x),e("3d");const v=new URL(window.location.href);v.searchParams.set("mode","3d"),window.history.pushState({},"",v.toString())}else alert("Unsupported format. Please select a valid 3D file (.glb or .gltf) to start.")}};return i==="3d"?c.jsx(U_,{onExitTo2D:d,initialModelFile:a}):c.jsxs("div",{className:"min-h-screen bg-[var(--lux-bg)] text-[var(--lux-text)] font-sans antialiased selection:bg-[#00d9ff] selection:text-[#061017] transition-colors duration-300",children:[c.jsx("div",{className:"scroll-progress"}),c.jsx("input",{type:"file",ref:l,onChange:u,accept:".glb,.gltf",className:"hidden"}),c.jsx(Yd,{onTrigger3DMode:f}),c.jsxs("main",{id:"main-content",children:[c.jsx(Kd,{onTrigger3DMode:f}),c.jsx($d,{}),c.jsx(ih,{}),c.jsx(sh,{}),c.jsx(rh,{onOpenLightbox:h}),c.jsx(ah,{}),c.jsx(oh,{onOpenLightbox:h}),c.jsx(lh,{}),c.jsx(ch,{}),c.jsx(hh,{}),c.jsx(uh,{}),c.jsx(fh,{onOpenVoiceSupport:()=>r(!0)}),c.jsx(ph,{}),c.jsx(mh,{}),c.jsx(gh,{})]}),c.jsx(xh,{}),c.jsx(_h,{isOpen:t.isOpen,imageSrc:t.src,imageTitle:t.title,onClose:()=>n({isOpen:!1,src:"",title:""})}),c.jsx(vh,{isOpen:s,onClose:()=>r(!1)}),c.jsx(yh,{onOpen:()=>r(!0)})]})}kd.createRoot(document.getElementById("root")).render(c.jsx(xe.StrictMode,{children:c.jsx(F_,{})}));
