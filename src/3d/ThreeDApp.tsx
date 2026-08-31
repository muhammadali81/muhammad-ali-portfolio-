import React, { useState, useRef } from 'react';
import ThreeDCanvas from './ThreeDCanvas';
import { IMAGES } from '../images';
import { HardHat, Sparkles, Box, Eye, ShieldCheck, ArrowLeft, Layers } from 'lucide-react';

interface ThreeDAppProps {
  onExitTo2D?: () => void;
  initialModelFile?: File | null;
}

export default function ThreeDApp({ onExitTo2D, initialModelFile = null }: ThreeDAppProps) {
  const [modelFile, setModelFile] = useState<File | null>(initialModelFile);
  const [loadStatus, setLoadStatus] = useState<'idle' | 'parsing' | 'loaded' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState<string>('');
  const [isDragOver, setIsDragOver] = useState<boolean>(false);
  const [activeView, setActiveView] = useState<'banner' | 'canvas'>('banner');
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0];
      if (file.name.endsWith('.glb') || file.name.endsWith('.gltf')) {
        setModelFile(file);
        setErrorMessage('');
        setActiveView('canvas');
      } else {
        setErrorMessage('Unsupported format. Please select a valid 3D file (.glb or .gltf).');
        setLoadStatus('error');
      }
    }
  };

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragOver(true);
  };

  const handleDragLeave = () => {
    setIsDragOver(false);
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragOver(false);
    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      const file = e.dataTransfer.files[0];
      if (file.name.endsWith('.glb') || file.name.endsWith('.gltf')) {
        setModelFile(file);
        setErrorMessage('');
        setActiveView('canvas');
      } else {
        setErrorMessage('Unsupported format. Please drop a valid 3D file (.glb or .gltf).');
        setLoadStatus('error');
      }
    }
  };

  const handleRemoveModel = () => {
    setModelFile(null);
    setLoadStatus('idle');
    setErrorMessage('');
    if (fileInputRef.current) {
      fileInputRef.current.value = '';
    }
  };

  const handleShiftTo2D = () => {
    if (onExitTo2D) {
      onExitTo2D();
    } else {
      window.location.href = '/';
    }
  };

  return (
    <div className="w-screen h-screen overflow-hidden bg-[#02050c] text-[#e2e8f0] flex flex-col relative font-sans">
      {/* 1. Header with 2D Mode Shifter */}
      <header className="absolute top-0 left-0 right-0 z-50 p-3 sm:p-4 flex justify-between items-center bg-[#060b18]/90 backdrop-blur-xl border-b border-[#ffb703]/20 shadow-lg">
        <button
          onClick={handleShiftTo2D}
          className="group flex items-center gap-2 px-4 py-2.5 rounded-xl bg-gradient-to-r from-[#ffb703] to-[#fb8500] text-black font-black text-xs tracking-wider transition-all duration-300 hover:scale-105 shadow-[0_0_20px_rgba(255,183,3,0.35)] cursor-pointer"
          title="Return to 2D Portfolio"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>← 2D PORTFOLIO SHIFTER</span>
        </button>

        <div className="flex items-center gap-2">
          <button
            onClick={() => setActiveView('banner')}
            className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all cursor-pointer ${
              activeView === 'banner'
                ? 'bg-[#ffb703] text-black shadow-[0_0_12px_rgba(255,183,3,0.4)]'
                : 'bg-white/5 text-slate-300 hover:bg-white/10'
            }`}
          >
            🚧 Status Notice
          </button>
          <button
            onClick={() => setActiveView('canvas')}
            className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all cursor-pointer ${
              activeView === 'canvas'
                ? 'bg-[#00d9ff] text-black shadow-[0_0_12px_rgba(0,217,255,0.4)]'
                : 'bg-white/5 text-slate-300 hover:bg-white/10'
            }`}
          >
            🎮 3D Engine Preview
          </button>
        </div>

        <div className="hidden sm:flex flex-col text-right leading-none">
          <span className="text-xs font-black tracking-widest text-[#ffb703] uppercase">
            3D INTERFACE UNDER CONSTRUCTION
          </span>
          <span className="text-[10px] font-mono text-slate-400 uppercase mt-1">
            insha'Allah COMING SOON
          </span>
        </div>
      </header>

      {/* 2. Main View Modes */}
      {activeView === 'banner' ? (
        <div className="w-full h-full pt-16 sm:pt-20 pb-6 px-4 sm:px-8 overflow-y-auto flex flex-col items-center justify-center relative bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-[#131c38] via-[#050914] to-[#020409]">
          <div className="max-w-4xl w-full flex flex-col items-center my-auto">
            {/* Banner Frame */}
            <div className="relative w-full rounded-2xl overflow-hidden border-2 border-[#ffb703]/50 shadow-[0_0_60px_rgba(255,183,3,0.25)] bg-black/80">
              <img
                src={IMAGES.underConstruction3d}
                alt="3D Interface is Under Construction - insha'Allah Coming Soon - Muhammad Ali"
                className="w-full h-auto object-contain max-h-[70vh] mx-auto select-none"
              />
            </div>

            {/* Quick Feature Chips */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 w-full mt-4">
              <div className="p-3 rounded-xl bg-[#0b1226] border border-white/10 flex items-center gap-2.5">
                <Box className="w-4 h-4 text-[#ffb703]" />
                <span className="text-xs font-semibold text-slate-200">3D Experience in Progress</span>
              </div>
              <div className="p-3 rounded-xl bg-[#0b1226] border border-white/10 flex items-center gap-2.5">
                <Eye className="w-4 h-4 text-[#00d9ff]" />
                <span className="text-xs font-semibold text-slate-200">Better Visuals Ahead</span>
              </div>
              <div className="p-3 rounded-xl bg-[#0b1226] border border-white/10 flex items-center gap-2.5">
                <Sparkles className="w-4 h-4 text-[#a855f7]" />
                <span className="text-xs font-semibold text-slate-200">Enhanced Interaction</span>
              </div>
              <div className="p-3 rounded-xl bg-[#0b1226] border border-white/10 flex items-center gap-2.5">
                <ShieldCheck className="w-4 h-4 text-[#10b981]" />
                <span className="text-xs font-semibold text-slate-200">Premium Quality</span>
              </div>
            </div>

            {/* Quick Action Bar */}
            <div className="flex flex-wrap items-center justify-center gap-4 mt-5">
              <button
                onClick={handleShiftTo2D}
                className="px-6 py-3 rounded-xl bg-gradient-to-r from-[#ffb703] to-[#fb8500] text-black font-black text-xs uppercase tracking-wider transition-all duration-300 shadow-[0_0_25px_rgba(255,183,3,0.3)] hover:scale-105 cursor-pointer flex items-center gap-2"
              >
                <ArrowLeft className="w-4 h-4" />
                <span>Return to 2D Portfolio</span>
              </button>
              <button
                onClick={() => setActiveView('canvas')}
                className="px-6 py-3 rounded-xl bg-white/5 hover:bg-white/10 border border-white/15 text-white font-bold text-xs uppercase tracking-wider transition-all cursor-pointer flex items-center gap-2"
              >
                <Layers className="w-4 h-4 text-[#00d9ff]" />
                <span>Test 3D Model Loader Preview</span>
              </button>
            </div>
          </div>
        </div>
      ) : (
        <div className="w-full h-full relative">
          <ThreeDCanvas
            modelFile={modelFile}
            onLoadStatus={(status) => setLoadStatus(status as any)}
            onError={(err) => {
              setErrorMessage(err);
              setLoadStatus('error');
            }}
          />

          {/* Floating Asset Connector Card */}
          <div className="absolute top-24 left-4 z-40 w-full max-w-sm bg-[#060b19]/90 backdrop-blur-2xl border border-[#00d9ff]/20 rounded-2xl p-5 shadow-[0_0_30px_rgba(0,217,255,0.15)] flex flex-col gap-4">
            <div className="flex items-center justify-between border-b border-white/5 pb-3">
              <div className="flex items-center gap-2">
                <span className={`w-2.5 h-2.5 rounded-full ${
                  loadStatus === 'loaded' ? 'bg-[#38ef7d]' : loadStatus === 'parsing' ? 'bg-[#ff6b00]' : 'bg-[#00d9ff]'
                } animate-pulse`} />
                <h3 className="text-sm font-black uppercase tracking-wider text-white">3D Portfolio Connection</h3>
              </div>
              <span className="text-[9px] font-mono px-2 py-0.5 rounded bg-white/5 text-slate-400">STATE: {loadStatus.toUpperCase()}</span>
            </div>

            <p className="text-xs text-slate-400 leading-relaxed">
              Drag-and-drop or select any 3D object file (<span className="text-[#00d9ff] font-mono">.glb</span> or <span className="text-[#00d9ff] font-mono">.gltf</span>) to test previewing it in 3D.
            </p>

            {/* Drag & Drop File Area */}
            <div
              onDragOver={handleDragOver}
              onDragLeave={handleDragLeave}
              onDrop={handleDrop}
              onClick={() => fileInputRef.current?.click()}
              className={`border-2 border-dashed rounded-xl p-6 text-center cursor-pointer transition-all ${
                isDragOver
                  ? 'border-[#00d9ff] bg-[#00d9ff]/10 shadow-[0_0_20px_rgba(0,217,255,0.2)]'
                  : 'border-white/10 bg-white/5 hover:border-[#00d9ff]/40 hover:bg-white/10'
              }`}
            >
              <input
                type="file"
                ref={fileInputRef}
                onChange={handleFileChange}
                accept=".glb,.gltf"
                className="hidden"
              />
              <div className="text-2xl mb-2">📁</div>
              <p className="text-xs font-bold text-white mb-1">
                {modelFile ? modelFile.name : 'Choose 3D Asset File'}
              </p>
              <p className="text-[10px] text-slate-400">
                {modelFile ? `${(modelFile.size / 1024 / 1024).toFixed(2)} MB` : 'Drag & drop .glb / .gltf files here'}
              </p>
            </div>

            {/* Load/Error Status Display */}
            {loadStatus === 'parsing' && (
              <div className="p-3 rounded-xl bg-[#ff6b00]/10 border border-[#ff6b00]/20 text-center animate-pulse">
                <span className="text-[11px] text-[#ff6b00] font-bold">⚙ PARSING MODEL GEOMETRY...</span>
              </div>
            )}

            {loadStatus === 'loaded' && (
              <div className="flex flex-col gap-2">
                <div className="p-3 rounded-xl bg-emerald-500/10 border border-emerald-500/20 text-center">
                  <span className="text-[11px] text-emerald-400 font-bold">✔ 3D MODEL CONNECTED SUCCESSFULLY</span>
                </div>
                <button
                  onClick={handleRemoveModel}
                  className="w-full py-2 rounded-xl bg-red-500/10 border border-red-500/30 text-red-400 hover:bg-red-500 hover:text-white transition-all font-bold text-xs"
                >
                  Disconnect Model
                </button>
              </div>
            )}

            {loadStatus === 'error' && (
              <div className="p-3 rounded-xl bg-red-500/10 border border-red-500/20">
                <p className="text-[11px] text-red-400 font-bold text-center mb-1">❌ CONNECTION FAILED</p>
                <p className="text-[10px] text-slate-400 text-center">{errorMessage || 'Invalid asset configuration.'}</p>
              </div>
            )}

            {/* Quick guide helper */}
            <div className="text-[10px] text-slate-500 text-center border-t border-white/5 pt-3">
              ✨ Orbit / Pan / Zoom with mouse drag or touch controls.
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

