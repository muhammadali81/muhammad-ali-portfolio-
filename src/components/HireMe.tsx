import React, { useState } from 'react';
import { IMAGES } from '../images';

interface HireMeProps {
  onOpenLightbox: (url: string, title: string) => void;
}

export default function HireMe({ onOpenLightbox }: HireMeProps) {
  const [selectedService, setSelectedService] = useState('Please select a service or project');
  const [budgetRange, setBudgetRange] = useState('$10 - $50');
  const [openCategories, setOpenCategories] = useState<{ [key: string]: boolean }>({});
  const [openSubs, setOpenSubs] = useState<{ [key: string]: boolean }>({});

  const toggleCat = (cat: string) => {
    setOpenCategories(prev => ({ ...prev, [cat]: !prev[cat] }));
  };

  const toggleSub = (sub: string) => {
    setOpenSubs(prev => ({ ...prev, [sub]: !prev[sub] }));
  };

  const message = `Hello Muhammad Ali,\n\nI am interested in hiring you for: ${selectedService}.\nEstimated Budget: ${budgetRange} (Criteria: $10+)\n\nI viewed this work on your portfolio and would like to discuss my requirements, availability and project details.\n\nPlease share more details and let me know how we can proceed.\n\nThank you.`;
  const encoded = encodeURIComponent(message);
  const whatsappUrl = `https://wa.me/923426793428?text=${encoded}`;
  const gmailUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=alimuhammadhvn81@gmail.com&su=${encodeURIComponent('Hiring Inquiry — ' + selectedService)}&body=${encoded}`;

  return (
    <section id="hire" className="py-[100px]">
      <div className="container">
        <div className="section-title text-center mb-[55px]">
          <h2 className="text-[40px] font-black mb-[10px]"><span>Hire</span> Me</h2>
          <p className="text-[#818c9c]">Select a complete service or a specific project/photo • Budget criteria: $10 or above</p>
        </div>

        <div className="hire-box max-w-[950px] mx-auto bg-[#10151f] border border-[#00d9ff]/25 rounded-[18px] p-[30px]">
          {/* Budget Criteria Banner */}
          <div className="mb-6 p-3.5 bg-gradient-to-r from-[#00d9ff]/10 via-[#10151f] to-emerald-500/10 border border-[#00d9ff]/30 rounded-xl flex items-center justify-between flex-wrap gap-2 text-xs sm:text-sm">
            <div className="flex items-center gap-2 text-[#cbd5e1]">
              <span className="text-base">💰</span>
              <span><strong>Budget Criteria:</strong> Projects start from <span className="text-[#00d9ff] font-extrabold">$10 or above ($10+)</span></span>
            </div>
            <span className="text-emerald-400 font-bold bg-emerald-500/10 px-2.5 py-1 rounded-lg border border-emerald-500/20">
              Min $10 USD
            </span>
          </div>

          <div className="hire-box-title text-center mb-[25px]">
            <h3 className="text-[28px] font-bold">What would you like to <span className="text-[#00d9ff]">hire me for?</span></h3>
            <p className="text-[#929dab] text-sm mt-1">Choose the complete service or select a specific project/photo.</p>
          </div>

          {/* 1. Web Development Category */}
          <div className="hire-category border border-white/10 rounded-xl mb-3 overflow-hidden bg-[#0d121b]">
            <button onClick={() => toggleCat('web')} className="hire-category-header w-full p-[17px_20px] bg-transparent border-0 text-white flex justify-between items-center cursor-pointer font-bold">
              <span>💻 Web Development</span>
              <span className={`arrow text-[#00d9ff] transition ${openCategories['web'] ? 'rotate-180' : ''}`}>▼</span>
            </button>
            {openCategories['web'] && (
              <div className="hire-content p-[0_18px_18px]">
                <div
                  onClick={() => setSelectedService('Web Development (Full Service)')}
                  className={`full-service p-[13px_15px] bg-[#18202c] rounded-lg border cursor-pointer mb-3 ${selectedService === 'Web Development (Full Service)' ? 'border-[#00d9ff] text-[#00d9ff] font-bold' : 'border-white/10'}`}
                >
                  Entire Web Development
                </div>
                <div className="hire-sub border-t border-white/10 pt-3">
                  <div onClick={() => toggleSub('novaWeb')} className="hire-sub-title flex justify-between items-center cursor-pointer py-2 font-bold text-sm text-[#00d9ff]">
                    <span>Nova Web Studio</span>
                    <span>{openSubs['novaWeb'] ? '▲' : '▼'}</span>
                  </div>
                  {openSubs['novaWeb'] && (
                    <div className="hire-sub-content space-y-2 pt-2">
                      {[
                        { n: 1, title: 'Photo 1 — Hero Section & Personal Branding', url: IMAGES.novaWeb1 },
                        { n: 2, title: 'Photo 2 — Live Admin Dashboard & Analytics', url: IMAGES.novaWeb2 },
                        { n: 3, title: 'Photo 3 — Client Testimonials & Inquiries Portal', url: IMAGES.novaWeb3 },
                        { n: 4, title: 'Photo 4 — AI Voice Support Assistant Modal', url: IMAGES.novaWeb4 }
                      ].map(item => (
                        <div key={item.n} className="hire-photo-row flex justify-between items-center p-2.5 rounded-lg bg-[#18202c] border border-transparent hover:border-[#00d9ff]/30">
                          <span onClick={() => setSelectedService(`Web Development — Nova Web Studio — ${item.title}`)} className="cursor-pointer flex-1 text-xs text-[#cbd5e1] hover:text-[#00d9ff]">
                            {item.title}
                          </span>
                          <button onClick={() => onOpenLightbox(item.url, `Nova Web Studio — ${item.title}`)} className="photo-open border border-[#00d9ff] text-[#00d9ff] px-2.5 py-1 rounded text-xs bg-transparent cursor-pointer hover:bg-[#00d9ff]/10">
                            Open
                          </button>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            )}
          </div>

          {/* 2. Game & AI Category */}
          <div className="hire-category border border-white/10 rounded-xl mb-3 overflow-hidden bg-[#0d121b]">
            <button onClick={() => toggleCat('game')} className="hire-category-header w-full p-[17px_20px] bg-transparent border-0 text-white flex justify-between items-center cursor-pointer font-bold">
              <span>🎮 Game &amp; AI App Development</span>
              <span className={`arrow text-[#00d9ff] transition ${openCategories['game'] ? 'rotate-180' : ''}`}>▼</span>
            </button>
            {openCategories['game'] && (
              <div className="hire-content p-[0_18px_18px]">
                <div
                  onClick={() => setSelectedService('Game & AI App Development (Full Service)')}
                  className={`full-service p-[13px_15px] bg-[#18202c] rounded-lg border cursor-pointer mb-3 ${selectedService === 'Game & AI App Development (Full Service)' ? 'border-[#00d9ff] text-[#00d9ff] font-bold' : 'border-white/10'}`}
                >
                  Entire Game &amp; AI App Development
                </div>

                {/* Sub 1: Colour Block */}
                <div className="hire-sub border-t border-white/10 pt-3 mb-2">
                  <div onClick={() => toggleSub('colorBlocks')} className="hire-sub-title flex justify-between items-center cursor-pointer py-2 font-bold text-sm text-[#00d9ff]">
                    <span>Colour Block</span>
                    <span>{openSubs['colorBlocks'] ? '▲' : '▼'}</span>
                  </div>
                  {openSubs['colorBlocks'] && (
                    <div className="hire-sub-content space-y-2 pt-2">
                      {[
                        { n: 1, title: 'Photo 1 — Intro Title Screen (Ali Game Hubs)', url: IMAGES.colorBlock1 },
                        { n: 2, title: 'Photo 2 — Mobile Puzzle Gameplay (Level 35)', url: IMAGES.colorBlock2 },
                        { n: 3, title: 'Photo 3 — Free Mode Board Grid', url: IMAGES.colorBlock3 },
                        { n: 4, title: 'Photo 4 — Victory Trophy Screen (All 25 Levels)', url: IMAGES.colorBlock4 }
                      ].map(item => (
                        <div key={item.n} className="hire-photo-row flex justify-between items-center p-2.5 rounded-lg bg-[#18202c]">
                          <span onClick={() => setSelectedService(`Game & AI — Colour Block — ${item.title}`)} className="cursor-pointer flex-1 text-xs text-[#cbd5e1] hover:text-[#00d9ff]">
                            {item.title}
                          </span>
                          <button onClick={() => onOpenLightbox(item.url, `Colour Block — ${item.title}`)} className="photo-open border border-[#00d9ff] text-[#00d9ff] px-2.5 py-1 rounded text-xs bg-transparent cursor-pointer hover:bg-[#00d9ff]/10">
                            Open
                          </button>
                        </div>
                      ))}
                    </div>
                  )}
                </div>

                {/* Sub 2: Pak AI */}
                <div className="hire-sub border-t border-white/10 pt-2 mb-2">
                  <div onClick={() => toggleSub('pakAI')} className="hire-sub-title flex justify-between items-center cursor-pointer py-2 font-bold text-sm text-[#00d9ff]">
                    <span>Pak AI</span>
                    <span>{openSubs['pakAI'] ? '▲' : '▼'}</span>
                  </div>
                  {openSubs['pakAI'] && (
                    <div className="hire-sub-content space-y-2 pt-2">
                      {[
                        { n: 1, title: 'Photo 1 — PakAI Emblem & Logo', url: IMAGES.pakai1 },
                        { n: 2, title: 'Photo 2 — Smartphone UI & Pakistan Map', url: IMAGES.pakai2 },
                        { n: 3, title: 'Photo 3 — Real-Time Chat Screen', url: IMAGES.pakai3 },
                        { n: 4, title: 'Photo 4 — Smart Assistant Hero Banner', url: IMAGES.pakai4 }
                      ].map(item => (
                        <div key={item.n} className="hire-photo-row flex justify-between items-center p-2.5 rounded-lg bg-[#18202c]">
                          <span onClick={() => setSelectedService(`Game & AI — Pak AI — ${item.title}`)} className="cursor-pointer flex-1 text-xs text-[#cbd5e1] hover:text-[#00d9ff]">
                            {item.title}
                          </span>
                          <button onClick={() => onOpenLightbox(item.url, `Pak AI — ${item.title}`)} className="photo-open border border-[#00d9ff] text-[#00d9ff] px-2.5 py-1 rounded text-xs bg-transparent cursor-pointer hover:bg-[#00d9ff]/10">
                            Open
                          </button>
                        </div>
                      ))}
                    </div>
                  )}
                </div>

                {/* Sub 3: Learn Play */}
                <div className="hire-sub border-t border-white/10 pt-2">
                  <div onClick={() => toggleSub('learnPlay')} className="hire-sub-title flex justify-between items-center cursor-pointer py-2 font-bold text-sm text-[#00d9ff]">
                    <span>Learn Play</span>
                    <span>{openSubs['learnPlay'] ? '▲' : '▼'}</span>
                  </div>
                  {openSubs['learnPlay'] && (
                    <div className="hire-sub-content space-y-2 pt-2">
                      {[
                        { n: 1, title: 'Photo 1 — LearnPlay Educational Logo', url: IMAGES.learnplay1 },
                        { n: 2, title: 'Photo 2 — Tablet Dashboard & Subjects', url: IMAGES.learnplay2 },
                        { n: 3, title: 'Photo 3 — Learn Today Lead Tomorrow Banner', url: IMAGES.learnplay3 },
                        { n: 4, title: 'Photo 4 — Quiz Victory Score Popup', url: IMAGES.learnplay4 }
                      ].map(item => (
                        <div key={item.n} className="hire-photo-row flex justify-between items-center p-2.5 rounded-lg bg-[#18202c]">
                          <span onClick={() => setSelectedService(`Game & AI — Learn Play — ${item.title}`)} className="cursor-pointer flex-1 text-xs text-[#cbd5e1] hover:text-[#00d9ff]">
                            {item.title}
                          </span>
                          <button onClick={() => onOpenLightbox(item.url, `Learn Play — ${item.title}`)} className="photo-open border border-[#00d9ff] text-[#00d9ff] px-2.5 py-1 rounded text-xs bg-transparent cursor-pointer hover:bg-[#00d9ff]/10">
                            Open
                          </button>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            )}
          </div>

          {/* 3. Pixel Forge Graphic Design Category */}
          <div className="hire-category border border-white/10 rounded-xl mb-3 overflow-hidden bg-[#0d121b]">
            <button onClick={() => toggleCat('graphic')} className="hire-category-header w-full p-[17px_20px] bg-transparent border-0 text-white flex justify-between items-center cursor-pointer font-bold">
              <span>🎨 Pixel Forge Graphic Design</span>
              <span className={`arrow text-[#00d9ff] transition ${openCategories['graphic'] ? 'rotate-180' : ''}`}>▼</span>
            </button>
            {openCategories['graphic'] && (
              <div className="hire-content p-[0_18px_18px]">
                <div
                  onClick={() => setSelectedService('Pixel Forge Graphic Design (Full Service)')}
                  className={`full-service p-[13px_15px] bg-[#18202c] rounded-lg border cursor-pointer mb-3 ${selectedService === 'Pixel Forge Graphic Design (Full Service)' ? 'border-[#00d9ff] text-[#00d9ff] font-bold' : 'border-white/10'}`}
                >
                  Entire Pixel Forge Graphic Design
                </div>

                {/* Sub 1: Logo Design */}
                <div className="hire-sub border-t border-white/10 pt-3 mb-2">
                  <div onClick={() => toggleSub('logoDesign')} className="hire-sub-title flex justify-between items-center cursor-pointer py-2 font-bold text-sm text-[#00d9ff]">
                    <span>Logo Design</span>
                    <span>{openSubs['logoDesign'] ? '▲' : '▼'}</span>
                  </div>
                  {openSubs['logoDesign'] && (
                    <div className="hire-sub-content space-y-2 pt-2">
                      {[
                        { n: 1, title: 'Photo 1 — Pixel Forge Studio Creative Workspace', url: IMAGES.pixelforgeStudio },
                        { n: 2, title: 'Photo 2 — Stewerds Family Gold Crown Emblem', url: IMAGES.logoDesign2 },
                        { n: 3, title: 'Photo 3 — Luxury Gold CL Ring Logo', url: IMAGES.logoDesign3 },
                        { n: 4, title: 'Photo 4 — Gold CL Cream Badge Logo', url: IMAGES.logoDesign4 }
                      ].map(item => (
                        <div key={item.n} className="hire-photo-row flex justify-between items-center p-2.5 rounded-lg bg-[#18202c]">
                          <span onClick={() => setSelectedService(`Pixel Forge — Logo Design — ${item.title}`)} className="cursor-pointer flex-1 text-xs text-[#cbd5e1] hover:text-[#00d9ff]">
                            {item.title}
                          </span>
                          <button onClick={() => onOpenLightbox(item.url, `Logo Design — ${item.title}`)} className="photo-open border border-[#00d9ff] text-[#00d9ff] px-2.5 py-1 rounded text-xs bg-transparent cursor-pointer hover:bg-[#00d9ff]/10">
                            Open
                          </button>
                        </div>
                      ))}
                    </div>
                  )}
                </div>

                {/* Sub 2: Visiting Card */}
                <div className="hire-sub border-t border-white/10 pt-2 mb-2">
                  <div onClick={() => toggleSub('visitingCard')} className="hire-sub-title flex justify-between items-center cursor-pointer py-2 font-bold text-sm text-[#00d9ff]">
                    <span>Visiting Card</span>
                    <span>{openSubs['visitingCard'] ? '▲' : '▼'}</span>
                  </div>
                  {openSubs['visitingCard'] && (
                    <div className="hire-sub-content space-y-2 pt-2">
                      {[
                        { n: 1, title: 'Photo 1 — Muhammad Ali (Creative Developer)', url: IMAGES.visitingCard1 },
                        { n: 2, title: 'Photo 2 — Jhan Mobile Hub (Luxury Gold Card)', url: IMAGES.visitingCard2 },
                        { n: 3, title: 'Photo 3 — Anshu Mobile Shop (Tech Blue Card)', url: IMAGES.visitingCard3 },
                        { n: 4, title: 'Photo 4 — Mobile Zone (CEO Faizan Amjad)', url: IMAGES.visitingCard4 }
                      ].map(item => (
                        <div key={item.n} className="hire-photo-row flex justify-between items-center p-2.5 rounded-lg bg-[#18202c]">
                          <span onClick={() => setSelectedService(`Pixel Forge — Visiting Card — ${item.title}`)} className="cursor-pointer flex-1 text-xs text-[#cbd5e1] hover:text-[#00d9ff]">
                            {item.title}
                          </span>
                          <button onClick={() => onOpenLightbox(item.url, `Visiting Card — ${item.title}`)} className="photo-open border border-[#00d9ff] text-[#00d9ff] px-2.5 py-1 rounded text-xs bg-transparent cursor-pointer hover:bg-[#00d9ff]/10">
                            Open
                          </button>
                        </div>
                      ))}
                    </div>
                  )}
                </div>

                {/* Sub 3: Banner */}
                <div className="hire-sub border-t border-white/10 pt-2">
                  <div onClick={() => toggleSub('banner')} className="hire-sub-title flex justify-between items-center cursor-pointer py-2 font-bold text-sm text-[#00d9ff]">
                    <span>Banner</span>
                    <span>{openSubs['banner'] ? '▲' : '▼'}</span>
                  </div>
                  {openSubs['banner'] && (
                    <div className="hire-sub-content space-y-2 pt-2">
                      {[
                        { n: 1, title: 'Photo 1 — Aala Hazrat Muradabadi Biryani Banner', url: IMAGES.banner1 },
                        { n: 2, title: 'Photo 2 — Travel The World Explorer Banner', url: IMAGES.banner2 },
                        { n: 3, title: 'Photo 3 — Special Coffee Shop 30% Discount Banner', url: IMAGES.banner3 },
                        { n: 4, title: 'Photo 4 — Special Discount Food Shop Banner', url: IMAGES.banner4 }
                      ].map(item => (
                        <div key={item.n} className="hire-photo-row flex justify-between items-center p-2.5 rounded-lg bg-[#18202c]">
                          <span onClick={() => setSelectedService(`Pixel Forge — Banner — ${item.title}`)} className="cursor-pointer flex-1 text-xs text-[#cbd5e1] hover:text-[#00d9ff]">
                            {item.title}
                          </span>
                          <button onClick={() => onOpenLightbox(item.url, `Banner — ${item.title}`)} className="photo-open border border-[#00d9ff] text-[#00d9ff] px-2.5 py-1 rounded text-xs bg-transparent cursor-pointer hover:bg-[#00d9ff]/10">
                            Open
                          </button>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            )}
          </div>

          {/* 4. 2D & 3D Architecture Category */}
          <div className="hire-category border border-white/10 rounded-xl mb-3 overflow-hidden bg-[#0d121b]">
            <button onClick={() => toggleCat('architecture')} className="hire-category-header w-full p-[17px_20px] bg-transparent border-0 text-white flex justify-between items-center cursor-pointer font-bold">
              <span>🏛️ 2D &amp; 3D Architecture</span>
              <span className={`arrow text-[#00d9ff] transition ${openCategories['architecture'] ? 'rotate-180' : ''}`}>▼</span>
            </button>
            {openCategories['architecture'] && (
              <div className="hire-content p-[0_18px_18px]">
                <div
                  onClick={() => setSelectedService('2D & 3D Architecture (Full Service)')}
                  className={`full-service p-[13px_15px] bg-[#18202c] rounded-lg border cursor-pointer mb-3 ${selectedService === '2D & 3D Architecture (Full Service)' ? 'border-[#00d9ff] text-[#00d9ff] font-bold' : 'border-white/10'}`}
                >
                  Entire 2D &amp; 3D Architecture
                </div>

                {/* Sub 1: 2D Smart Flooring */}
                <div className="hire-sub border-t border-white/10 pt-3 mb-2">
                  <div onClick={() => toggleSub('smartFlooring')} className="hire-sub-title flex justify-between items-center cursor-pointer py-2 font-bold text-sm text-[#00d9ff]">
                    <span>2D Smart Flooring</span>
                    <span>{openSubs['smartFlooring'] ? '▲' : '▼'}</span>
                  </div>
                  {openSubs['smartFlooring'] && (
                    <div className="hire-sub-content space-y-2 pt-2">
                      {[
                        { n: 1, title: 'Photo 1 — 10ft x 20ft Shop & Pizza Restaurant Plan', url: IMAGES.smartFloor1 },
                        { n: 2, title: 'Photo 2 — 35x70 Ground Floor 3D Circulation Map', url: IMAGES.smartFloor2 },
                        { n: 3, title: 'Photo 3 — 35x70 Basement 3D Entertainment Suite', url: IMAGES.smartFloor3 },
                        { n: 4, title: 'Photo 4 — 35x70 Basement Multi-Suite Isometric Layout', url: IMAGES.smartFloor4 }
                      ].map(item => (
                        <div key={item.n} className="hire-photo-row flex justify-between items-center p-2.5 rounded-lg bg-[#18202c]">
                          <span onClick={() => setSelectedService(`2D Smart Flooring — ${item.title}`)} className="cursor-pointer flex-1 text-xs text-[#cbd5e1] hover:text-[#00d9ff]">
                            {item.title}
                          </span>
                          <button onClick={() => onOpenLightbox(item.url, `2D Smart Flooring — ${item.title}`)} className="photo-open border border-[#00d9ff] text-[#00d9ff] px-2.5 py-1 rounded text-xs bg-transparent cursor-pointer hover:bg-[#00d9ff]/10">
                            Open
                          </button>
                        </div>
                      ))}
                    </div>
                  )}
                </div>

                {/* Sub 2: 3D House Design */}
                <div className="hire-sub border-t border-white/10 pt-2">
                  <div onClick={() => toggleSub('houseDesign3D')} className="hire-sub-title flex justify-between items-center cursor-pointer py-2 font-bold text-sm text-[#00d9ff]">
                    <span>3D House Design</span>
                    <span>{openSubs['houseDesign3D'] ? '▲' : '▼'}</span>
                  </div>
                  {openSubs['houseDesign3D'] && (
                    <div className="hire-sub-content space-y-2 pt-2">
                      {[
                        { n: 1, title: 'Photo 1 — 10 Marla Luxury Villa Multi-Elevation Sheet', url: IMAGES.dreamhouse1 },
                        { n: 2, title: 'Photo 2 — 10 Marla 35x70 Master Presentation & Rooftop', url: IMAGES.dreamhouse2 },
                        { n: 3, title: 'Photo 3 — 10 Marla 3D Cutaway & Luxury Interiors', url: IMAGES.dreamhouse3 },
                        { n: 4, title: 'Photo 4 — 10 Marla Daytime Facade & Side Views', url: IMAGES.dreamhouse4 },
                        { n: 5, title: 'Photo 5 — 10 Marla 3-Level Isometric Furnished Layout', url: IMAGES.dreamhouse5 }
                      ].map(item => (
                        <div key={item.n} className="hire-photo-row flex justify-between items-center p-2.5 rounded-lg bg-[#18202c]">
                          <span onClick={() => setSelectedService(`3D House Design — ${item.title}`)} className="cursor-pointer flex-1 text-xs text-[#cbd5e1] hover:text-[#00d9ff]">
                            {item.title}
                          </span>
                          <button onClick={() => onOpenLightbox(item.url, `3D House Design — ${item.title}`)} className="photo-open border border-[#00d9ff] text-[#00d9ff] px-2.5 py-1 rounded text-xs bg-transparent cursor-pointer hover:bg-[#00d9ff]/10">
                            Open
                          </button>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            )}
          </div>

          {/* Selected Option & Buttons */}
          <div className="selected-service mt-[25px] p-[20px] rounded-[12px] bg-[#18202c] border border-[#00d9ff]/25 text-center">
            <p className="text-[#929dab] text-sm">Selected option</p>
            <strong className="text-[#00d9ff] block my-2 text-lg">{selectedService}</strong>

            {/* Budget Criteria Selection */}
            <div className="max-w-md mx-auto my-3 text-left">
              <label className="block text-xs font-bold text-[#818c9c] mb-1.5 flex items-center justify-between">
                <span>Select Estimated Budget (Criteria: $10+)</span>
                <span className="text-[#00d9ff] font-extrabold">Min $10 USD</span>
              </label>
              <select
                value={budgetRange}
                onChange={e => setBudgetRange(e.target.value)}
                className="w-full p-2.5 rounded-lg bg-[#0c1017] border border-white/15 text-white text-sm outline-none focus:border-[#00d9ff]"
              >
                <option value="$10 - $50">$10 – $50 (Small Task / Quick Fix)</option>
                <option value="$50 - $150">$50 – $150 (Standard Project)</option>
                <option value="$150 - $300">$150 – $300 (Advanced Project / App)</option>
                <option value="$300+">$300+ (Full-Scale Custom Solution)</option>
              </select>
            </div>

            <div className="hire-buttons flex justify-center gap-3 flex-wrap mt-4">
              <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className="hire-btn px-5 py-3 rounded-lg border border-[#00d9ff] text-[#00d9ff] font-bold">
                💬 WhatsApp
              </a>
              <a href={gmailUrl} target="_blank" rel="noopener noreferrer" className="hire-btn px-5 py-3 rounded-lg border border-[#00d9ff] text-[#00d9ff] font-bold">
                ✉️ Gmail
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
