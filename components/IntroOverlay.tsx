import React, { useEffect, useState } from 'react';

interface IntroOverlayProps {
  onComplete: () => void;
}

export const IntroOverlay: React.FC<IntroOverlayProps> = ({ onComplete }) => {
  const [phase, setPhase] = useState<'pulse' | 'flare' | 'exit' | 'hidden'>('pulse');

  useEffect(() => {
    // Phase 1: Pulse (0-2s) - Handled by initial state
    
    // Phase 2: Flare (2s)
    const timer1 = setTimeout(() => {
      setPhase('flare');
    }, 2000);

    // Phase 3: Exit/Reveal (2.5s)
    const timer2 = setTimeout(() => {
      setPhase('exit');
    }, 2800);

    // Cleanup (3.5s)
    const timer3 = setTimeout(() => {
      setPhase('hidden');
      onComplete();
    }, 3800);

    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
      clearTimeout(timer3);
    };
  }, [onComplete]);

  if (phase === 'hidden') return null;

  return (
    <div className={`fixed inset-0 z-[10000] flex items-center justify-center overflow-hidden transition-opacity duration-1000 ${phase === 'exit' ? 'pointer-events-none' : 'bg-[#020003]'}`}>
      
      {/* Background Split Doors for Reveal */}
      <div className={`absolute top-0 left-0 w-full h-1/2 bg-[#020003] z-0 transition-transform duration-[1500ms] ease-[cubic-bezier(0.7,0,0.3,1)] ${phase === 'exit' ? '-translate-y-full' : 'translate-y-0'}`} />
      <div className={`absolute bottom-0 left-0 w-full h-1/2 bg-[#020003] z-0 transition-transform duration-[1500ms] ease-[cubic-bezier(0.7,0,0.3,1)] ${phase === 'exit' ? 'translate-y-full' : 'translate-y-0'}`} />

      {/* Central Rune/Logo */}
      <div className={`relative z-10 flex flex-col items-center justify-center transition-all duration-500 ${phase === 'exit' ? 'opacity-0 scale-150' : 'opacity-100'}`}>
        
        {/* Pulsing Container */}
        <div className={`relative flex items-center justify-center ${phase === 'flare' ? 'scale-110' : 'scale-100'} transition-transform duration-300`}>
          {/* Outer Glow */}
          <div className={`absolute inset-0 bg-crimson/40 blur-[60px] rounded-full transition-all duration-500 ${phase === 'flare' ? 'opacity-100 scale-150' : 'opacity-40 animate-pulse'}`} />
          
          {/* The Rune */}
          <div className="relative w-24 h-24 md:w-32 md:h-32 border-2 border-gold/30 rotate-45 flex items-center justify-center shadow-[0_0_30px_rgba(202,138,4,0.2)] bg-black/50 backdrop-blur-sm">
             <div className={`w-16 h-16 border border-crimson/60 rotate-45 transition-all duration-700 ${phase === 'flare' ? 'border-white shadow-[0_0_50px_white]' : ''}`} />
             <div className="absolute w-[1px] h-32 bg-gradient-to-b from-transparent via-gold to-transparent opacity-50" />
             <div className="absolute w-32 h-[1px] bg-gradient-to-r from-transparent via-gold to-transparent opacity-50" />
          </div>
        </div>

        {/* Text Reveal */}
        <div className="mt-12 overflow-hidden text-center">
           <h2 className="text-gold font-cinzel text-xs md:text-sm tracking-[0.5em] uppercase animate-[fade-in-up_1s_ease-out]">
             Imperial X
           </h2>
           <p className="text-crimson/80 font-mono text-[10px] tracking-[0.3em] mt-2 animate-[fade-in-up_1s_ease-out_0.3s_forwards] opacity-0">
             Presents
           </p>
        </div>

      </div>

      {/* Flash Effect on Flare */}
      <div className={`absolute inset-0 bg-white z-50 pointer-events-none transition-opacity duration-700 ${phase === 'flare' ? 'opacity-20' : 'opacity-0'}`} />

    </div>
  );
};