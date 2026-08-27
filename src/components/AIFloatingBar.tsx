import React from 'react';

interface AIFloatingBarProps {
  onOpen: () => void;
}

export default function AIFloatingBar({ onOpen }: AIFloatingBarProps) {
  return (
    <div className="fixed bottom-5 right-5 z-40 select-none animate-fadeIn">
      {/* Outer Luxury Glow Container */}
      <button
        onClick={onOpen}
        className="group relative flex items-center gap-3 p-1.5 pr-4 sm:pr-5 rounded-full bg-[#0b101b]/95 hover:bg-[#101726] border border-[#ff3344]/40 hover:border-[#ff3344] shadow-[0_8px_30px_rgba(0,0,0,0.6),0_0_20px_rgba(255,51,68,0.25)] hover:shadow-[0_8px_35px_rgba(255,51,68,0.45)] backdrop-blur-xl transition-all duration-300 transform hover:-translate-y-1 active:translate-y-0 cursor-pointer"
        aria-label="Open AI Voice Support Assistant"
      >
        {/* Shimmer Light Sweep Effect */}
        <div className="absolute inset-0 rounded-full overflow-hidden pointer-events-none">
          <div className="absolute -inset-full bg-gradient-to-r from-transparent via-white/10 to-transparent transform -skew-x-12 group-hover:translate-x-full transition-transform duration-1000" />
        </div>

        {/* Pulsing Avatar Icon / Mic Ring */}
        <div className="relative flex items-center justify-center w-11 h-11 rounded-full bg-gradient-to-br from-[#ff3344] via-[#e61b30] to-[#b30e1f] text-white shadow-[0_0_15px_rgba(255,51,68,0.5)] group-hover:scale-105 transition-transform duration-300">
          <span className="text-lg">🎙️</span>
          {/* Animated Ambient Ping Rings */}
          <span className="absolute inset-0 rounded-full border border-white/40 animate-ping opacity-30 pointer-events-none" />
          <span className="absolute -top-0.5 -right-0.5 w-3.5 h-3.5 rounded-full bg-emerald-400 border-2 border-[#0b101b] shadow-sm" />
        </div>

        {/* Text Details */}
        <div className="flex flex-col text-left">
          <div className="flex items-center gap-1.5">
            <span className="text-[13px] sm:text-sm font-extrabold tracking-wide text-white group-hover:text-[#ff4d5a] transition-colors">
              AI Voice Support
            </span>
            <span className="hidden sm:inline-block text-[9px] px-1.5 py-0.5 rounded-full bg-[#ff3344]/20 text-[#ff4d5a] border border-[#ff3344]/40 font-bold uppercase tracking-wider">
              Live
            </span>
          </div>
          <p className="text-[11px] text-[#94a3b8] group-hover:text-[#cbd5e1] transition-colors leading-tight hidden xs:block">
            Ask by voice or text 24/7
          </p>
        </div>

        {/* Animated Equalizer Waveform Bars */}
        <div className="flex items-center gap-0.5 sm:gap-1 h-3.5 pl-1">
          <span className="w-0.5 sm:w-1 bg-[#ff3344] rounded-full h-2 group-hover:h-3.5 transition-all duration-300 animate-[pulse_0.6s_ease-in-out_infinite]" />
          <span className="w-0.5 sm:w-1 bg-[#00d9ff] rounded-full h-3.5 group-hover:h-2 transition-all duration-300 animate-[pulse_0.4s_ease-in-out_infinite]" />
          <span className="w-0.5 sm:w-1 bg-[#ff4d5a] rounded-full h-1.5 group-hover:h-3 transition-all duration-300 animate-[pulse_0.5s_ease-in-out_infinite]" />
          <span className="w-0.5 sm:w-1 bg-[#00d9ff] rounded-full h-3 group-hover:h-1.5 transition-all duration-300 animate-[pulse_0.3s_ease-in-out_infinite]" />
        </div>
      </button>
    </div>
  );
}
