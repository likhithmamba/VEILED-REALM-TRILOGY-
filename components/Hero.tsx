import React, { useEffect, useState } from 'react';
import { ChevronDown, Sparkles, ScrollText } from 'lucide-react';

export const Hero: React.FC = () => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="relative h-screen w-full flex items-center justify-center overflow-hidden bg-cosmic-red bg-cover bg-fixed">
      {/* Noise Texture Overlay */}
      <div 
        className="absolute inset-0 z-0 opacity-20 pointer-events-none mix-blend-overlay" 
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 250 250' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`
        }}
      />

      <div 
        className="relative z-10 text-center px-4 max-w-5xl mx-auto flex flex-col items-center will-change-transform"
        style={{ transform: `translateY(${scrollY * 0.2}px)`, opacity: Math.max(0, 1 - scrollY / 700) }}
      >
        <div className="mb-8 flex items-center justify-center space-x-4 opacity-0 animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
          <div className="h-[1px] w-12 bg-gold"></div>
          <span className="text-gold font-cinzel tracking-[0.3em] text-sm md:text-base">IMPERIAL X PRESENTS</span>
          <div className="h-[1px] w-12 bg-gold"></div>
        </div>
        
        <h1 className="text-6xl md:text-9xl font-cinzel font-bold text-transparent bg-clip-text bg-gradient-to-b from-gray-100 to-gray-500 mb-6 drop-shadow-lg tracking-wider opacity-0 animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
          VEILED REALM™
        </h1>
        
        <p className="text-lg md:text-2xl text-gray-300 font-montserrat font-light tracking-wide mb-8 max-w-3xl opacity-0 animate-fade-in-up" style={{ animationDelay: '0.6s' }}>
          A dark fantasy about truth, memory, and rebellion against the gods.
        </p>

        <blockquote className="text-crimson font-cinzel italic text-xl md:text-2xl mb-12 opacity-0 animate-fade-in-up" style={{ animationDelay: '0.8s' }}>
          “Every world ends twice — first in memory, then in belief.”
        </blockquote>
        
        <div className="flex flex-col md:flex-row gap-6 opacity-0 animate-fade-in-up" style={{ animationDelay: '1s' }}>
          <button 
            onClick={() => scrollToSection('books')}
            className="group relative px-8 py-4 bg-transparent border border-gold/50 text-gold font-cinzel font-bold tracking-widest hover:bg-gold hover:text-black transition-all duration-300 ease-out overflow-hidden shadow-[0_0_15px_rgba(212,175,55,0.2)] hover:shadow-[0_0_25px_rgba(212,175,55,0.6)]"
          >
            <span className="relative z-10 flex items-center gap-2">
              READ SAMPLE
              <ScrollText className="w-4 h-4" />
            </span>
          </button>

          <button 
            onClick={() => scrollToSection('newsletter')}
            className="group relative px-8 py-4 bg-crimson border border-crimson text-white font-cinzel font-bold tracking-widest hover:bg-transparent hover:text-crimson transition-all duration-300 ease-out overflow-hidden shadow-glow"
          >
            <span className="relative z-10 flex items-center gap-2">
              JOIN THE REALM
              <Sparkles className="w-4 h-4" />
            </span>
          </button>
        </div>
      </div>

      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-float text-gold">
        <ChevronDown className="w-8 h-8 opacity-70" />
      </div>
    </div>
  );
};