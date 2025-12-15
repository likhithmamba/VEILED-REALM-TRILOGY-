import React, { useState } from 'react';
import { ChevronRight } from 'lucide-react';

interface IntroOverlayProps {
  onComplete: () => void;
}

export const IntroOverlay: React.FC<IntroOverlayProps> = ({ onComplete }) => {
  const [phase, setPhase] = useState<'locked' | 'flare' | 'exit' | 'hidden'>('locked');

  const handleEnter = () => {
    if (phase !== 'locked') return;
    
    // 1. Flare Phase (Bright Flash)
    setPhase('flare');

    // 2. Exit Phase (Doors Open)
    setTimeout(() => {
      setPhase('exit');
      onComplete(); // Tell App to trigger Hero animations immediately as doors open
    }, 800);

    // 3. Cleanup
    setTimeout(() => {
      setPhase('hidden');
    }, 2500); // Allow time for doors to fully slide out
  };

  if (phase === 'hidden') return null;

  return (
    <div className={`fixed inset-0 z-[10000] flex items-center justify-center overflow-hidden ${phase === 'exit' ? 'pointer-events-none' : ''}`}>
      
      {/* 
        DOOR LAYERS 
        We use two separate absolute divs for Top/Bottom doors so we can animate them apart.
        The background is solid black.
      */}
      <div 
        className={`absolute top-0 left-0 w-full h-1/2 bg-[#020003] z-10 transition-transform duration-[1500ms] ease-[cubic-bezier(0.7,0,0.3,1)] will-change-transform border-b border-white/5 ${phase === 'exit' ? '-translate-y-full' : 'translate-y-0'}`} 
      />
      <div 
        className={`absolute bottom-0 left-0 w-full h-1/2 bg-[#020003] z-10 transition-transform duration-[1500ms] ease-[cubic-bezier(0.7,0,0.3,1)] will-change-transform border-t border-white/5 ${phase === 'exit' ? 'translate-y-full' : 'translate-y-0'}`} 
      />

      {/* CENTER CONTENT (Rune & Button) - Sits on top of doors (z-20) */}
      <div className={`relative z-20 flex flex-col items-center justify-center transition-all duration-500 ${phase === 'exit' ? 'opacity-0 scale-150' : 'opacity-100'}`}>
        
        {/* Pulsing Rune Container */}
        <div className={`relative mb-12 flex items-center justify-center transition-transform duration-700 ${phase === 'flare' ? 'scale-[2] rotate-45' : 'scale-100'}`}>
          {/* Outer Glow */}
          <div className={`absolute inset-0 bg-crimson/20 blur-[60px] rounded-full animate-pulse-slow`} />
          
          {/* The Rune */}
          <div className="relative w-32 h-32 border border-gold/20 rotate-45 flex items-center justify-center shadow-[0_0_30px_rgba(202,138,4,0.1)] bg-black/80 backdrop-blur-sm group">
             {/* Inner Rotating square */}
             <div className="absolute inset-4 border border-crimson/40 rotate-45" />
             <div className="w-20 h-20 border border-white/10 flex items-center justify-center">
                <div className={`w-2 h-2 bg-gold rotate-45 transition-all duration-300 ${phase === 'flare' ? 'shadow-[0_0_50px_#fff] bg-white scale-150' : ''}`} />
             </div>
          </div>
        </div>

        {/* Text & Button Area */}
        <div className={`flex flex-col items-center transition-all duration-500 ${phase === 'flare' ? 'opacity-0' : 'opacity-100'}`}>
           <h2 className="text-gold/80 font-cinzel text-xs tracking-[0.5em] uppercase mb-8">
             Imperial X
           </h2>

           <button 
             onClick={handleEnter}
             className="group relative px-10 py-4 bg-transparent overflow-hidden"
           >
             <div className="absolute inset-0 border border-white/10 group-hover:border-crimson/50 transition-colors duration-500" />
             <div className="absolute inset-0 bg-crimson/0 group-hover:bg-crimson/10 transition-colors duration-500" />
             
             {/* Animated Corner Brackets */}
             <div className="absolute top-0 left-0 w-2 h-2 border-t border-l border-white/30 group-hover:w-full group-hover:h-full group-hover:border-crimson transition-all duration-500" />
             <div className="absolute bottom-0 right-0 w-2 h-2 border-b border-r border-white/30 group-hover:w-full group-hover:h-full group-hover:border-crimson transition-all duration-500" />

             <span className="relative z-10 font-cinzel text-white text-sm tracking-[0.3em] font-bold flex items-center gap-3">
               ENTER REALM <ChevronRight className="w-4 h-4 text-crimson group-hover:translate-x-1 transition-transform" />
             </span>
           </button>
        </div>

      </div>

      {/* FLASH EFFECT (White Overlay) */}
      <div className={`absolute inset-0 bg-white z-[10001] pointer-events-none transition-opacity duration-[800ms] ${phase === 'flare' ? 'opacity-20' : 'opacity-0'}`} />

    </div>
  );
};