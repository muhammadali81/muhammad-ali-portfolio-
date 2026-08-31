import React, { useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, Sparkles, ArrowLeft, Eye, ShieldCheck, Box, HardHat } from 'lucide-react';
import { IMAGES } from '../images';

interface ThreeDConstructionModalProps {
  isOpen: boolean;
  onClose: () => void;
  onOpenDirect3D?: () => void;
}

export default function ThreeDConstructionModal({
  isOpen,
  onClose,
  onOpenDirect3D,
}: ThreeDConstructionModalProps) {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) {
      window.addEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'hidden';
    }
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = '';
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <div 
        id="threed-construction-modal-overlay" 
        className="fixed inset-0 z-[9999] flex items-center justify-center p-3 sm:p-6 bg-[#020612]/90 backdrop-blur-2xl overflow-y-auto"
        onClick={onClose}
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.92, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.92, y: 20 }}
          transition={{ duration: 0.3, ease: 'easeOut' }}
          onClick={(e) => e.stopPropagation()}
          className="relative w-full max-w-5xl bg-[#080d1e] border border-[#ffb703]/30 rounded-2xl sm:rounded-3xl shadow-[0_0_60px_rgba(255,183,3,0.25)] overflow-hidden my-auto"
        >
          {/* Top Decorative Amber/Cyan Accent Glow Bar */}
          <div className="h-1.5 w-full bg-gradient-to-r from-[#ffb703] via-[#00d9ff] to-[#7c5cff]" />

          {/* Modal Header */}
          <div className="p-4 sm:p-6 pb-2 sm:pb-3 flex items-center justify-between border-b border-white/10 bg-[#0c1328]/80 backdrop-blur-md">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-[#ffb703]/10 border border-[#ffb703]/30 flex items-center justify-center text-[#ffb703] shadow-[0_0_15px_rgba(255,183,3,0.2)]">
                <HardHat className="w-5 h-5 animate-pulse" />
              </div>
              <div>
                <div className="flex items-center gap-2">
                  <span className="text-xs font-black tracking-widest uppercase text-[#ffb703]">
                    3D Shifter Active
                  </span>
                  <span className="px-2 py-0.5 rounded-full text-[10px] font-bold bg-[#ffb703]/20 text-[#ffb703] border border-[#ffb703]/40">
                    IN PROGRESS
                  </span>
                </div>
                <h2 className="text-base sm:text-lg font-bold text-white tracking-tight">
                  3D Interface is Under Construction
                </h2>
              </div>
            </div>

            <div className="flex items-center gap-2">
              <button
                id="close-threed-modal-btn"
                onClick={onClose}
                className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-white/5 border border-white/10 hover:bg-white/15 hover:border-white/30 text-slate-300 hover:text-white flex items-center justify-center transition-all cursor-pointer"
                title="Close and return to portfolio"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* Modal Body - Main Image Presentation */}
          <div className="p-4 sm:p-6 flex flex-col items-center">
            {/* Image Container with Gold/Cyber Border Frame */}
            <div className="relative w-full rounded-xl sm:rounded-2xl overflow-hidden border border-[#ffb703]/40 shadow-[0_0_40px_rgba(0,0,0,0.8)] bg-black/60 group">
              <img
                src={IMAGES.underConstruction3d}
                alt="3D Interface is Under Construction - insha'Allah Coming Soon - Muhammad Ali"
                className="w-full h-auto object-contain max-h-[68vh] mx-auto select-none rounded-xl"
              />

              {/* Hover Badge Notice */}
              <div className="absolute bottom-3 left-3 right-3 sm:bottom-4 sm:left-4 sm:right-4 p-3 rounded-xl bg-[#060a17]/85 backdrop-blur-md border border-[#ffb703]/30 flex flex-wrap items-center justify-between gap-2 opacity-95 transition-opacity">
                <div className="flex items-center gap-2 text-xs text-slate-200">
                  <Sparkles className="w-4 h-4 text-[#ffb703] shrink-0" />
                  <span>
                    <strong className="text-[#ffb703]">Insha'Allah Coming Soon:</strong> High-performance Three.js spatial gallery &amp; 3D model engine.
                  </span>
                </div>
                <span className="text-[11px] font-mono text-[#00d9ff]">Director: Muhammad Ali</span>
              </div>
            </div>

            {/* Feature Highlights Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5 sm:gap-3 w-full mt-4">
              <div className="p-2.5 sm:p-3 rounded-xl bg-[#0e172e] border border-white/5 flex items-center gap-2.5">
                <Box className="w-4 h-4 text-[#ffb703] shrink-0" />
                <div className="text-left">
                  <p className="text-[11px] font-bold text-white leading-none">3D Experience</p>
                  <p className="text-[9px] text-slate-400 mt-0.5">In Progress</p>
                </div>
              </div>
              <div className="p-2.5 sm:p-3 rounded-xl bg-[#0e172e] border border-white/5 flex items-center gap-2.5">
                <Eye className="w-4 h-4 text-[#00d9ff] shrink-0" />
                <div className="text-left">
                  <p className="text-[11px] font-bold text-white leading-none">Better Visuals</p>
                  <p className="text-[9px] text-slate-400 mt-0.5">Ahead</p>
                </div>
              </div>
              <div className="p-2.5 sm:p-3 rounded-xl bg-[#0e172e] border border-white/5 flex items-center gap-2.5">
                <Sparkles className="w-4 h-4 text-[#a855f7] shrink-0" />
                <div className="text-left">
                  <p className="text-[11px] font-bold text-white leading-none">Enhanced</p>
                  <p className="text-[9px] text-slate-400 mt-0.5">Interaction</p>
                </div>
              </div>
              <div className="p-2.5 sm:p-3 rounded-xl bg-[#0e172e] border border-white/5 flex items-center gap-2.5">
                <ShieldCheck className="w-4 h-4 text-[#10b981] shrink-0" />
                <div className="text-left">
                  <p className="text-[11px] font-bold text-white leading-none">Premium Quality</p>
                  <p className="text-[9px] text-slate-400 mt-0.5">Experience</p>
                </div>
              </div>
            </div>

            {/* Action Bar */}
            <div className="flex flex-wrap items-center justify-between gap-3 w-full mt-4 pt-3 border-t border-white/10">
              <button
                onClick={onClose}
                className="flex-1 sm:flex-initial flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-[#ffb703] to-[#fb8500] hover:from-[#fb8500] hover:to-[#ffb703] text-black font-black text-xs uppercase tracking-wider transition-all duration-300 shadow-[0_0_25px_rgba(255,183,3,0.3)] hover:scale-[1.02] cursor-pointer"
              >
                <ArrowLeft className="w-4 h-4" />
                <span>Return to 2D Portfolio</span>
              </button>

              {onOpenDirect3D && (
                <button
                  onClick={onOpenDirect3D}
                  className="px-4 py-3 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 text-xs font-semibold text-slate-300 hover:text-white transition-all cursor-pointer"
                  title="Test 3D Model file loader preview"
                >
                  Inspect 3D Engine Preview (.glb / .gltf)
                </button>
              )}
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
