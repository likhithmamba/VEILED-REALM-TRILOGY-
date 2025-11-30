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
    <div className="relative h-screen w-full flex items-center justify-center overflow-hidden bg-void">
      
      {/* Parallax Background Layer - Moves slower than scroll (0.5) to appear far away */}
      <div 
        className="absolute inset-0 w-full h-[120%] -top-[10%] bg-cosmic-red bg-cover z-0 will-change-transform"
        style={{ transform: `translateY(${scrollY * 0.5}px)` }}
      >
         {/* Noise Texture inside background container so it moves with it */}
         <div 
          className="absolute inset-0 opacity-20 mix-blend-overlay" 
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 250 250' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`
          }}
        />
      </div>

      {/* Floating Particles System (Middle Layer) - Moves at medium speed (0.3) */}
       <div className="absolute inset-0 z-0 pointer-events-none" style={{ transform: `translateY(${scrollY * 0.3}px)` }}>
        <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-crimson rounded-full animate-float opacity-50 blur-[1px]" />
        <div className="absolute top-3/4 left-1/3 w-1 h-1 bg-gold rounded-full animate-float opacity-30 blur-[0.5px]" style={{ animationDelay: '1s' }} />
        <div className="absolute top-1/2 right-1/4 w-3 h-3 bg-shadow rounded-full animate-float opacity-40 blur-[2px]" style={{ animationDelay: '2s' }} />
        <div className="absolute top-1/3 right-1/3 w-1 h-1 bg-crimson rounded-full animate-float opacity-60" style={{ animationDelay: '3s' }} />
      </div>

      {/* Foreground Content - Moves slightly (0.15) to detach from background */}
      <div 
        className="relative z-10 text-center px-4 max-w-5xl mx-auto flex flex-col items-center will-change-transform"
        style={{ transform: `translateY(${scrollY * 0.15}px)`, opacity: Math.max(0, 1 - scrollY / 700) }}
      >
        <div className="mb-8 flex items-center justify-center space-x-4 opacity-0 animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
          <div className="h-[1px] w-12 bg-gold shadow-[0_0_10px_#d4af37]"></div>
          <span className="text-gold font-cinzel tracking-[0.3em] text-sm md:text-base drop-shadow-md">IMPERIAL X PRESENTS</span>
          <div className="h-[1px] w-12 bg-gold shadow-[0_0_10px_#d4af37]"></div>
        </div>
        
        {/* Glitch Effect Container */}
        <div className="relative group mb-6">
            <h1 className="text-6xl md:text-9xl font-cinzel font-bold text-transparent bg-clip-text bg-gradient-to-b from-gray-100 to-gray-500 drop-shadow-lg tracking-wider opacity-0 animate-fade-in-up group-hover:animate-glitch" style={{ animationDelay: '0.4s' }}>
            VEILED REALM™
            </h1>
            <h1 className="absolute top-0 left-0 text-6xl md:text-9xl font-cinzel font-bold text-crimson opacity-0 group-hover:opacity-70 group-hover:animate-glitch mix-blend-screen" style={{ clipPath: 'polygon(0 0, 100% 0, 100% 45%, 0 45%)', transform: 'translate(-2px, 2px)' }}>
            VEILED REALM™
            </h1>
            <h1 className="absolute top-0 left-0 text-6xl md:text-9xl font-cinzel font-bold text-blue-500 opacity-0 group-hover:opacity-70 group-hover:animate-glitch mix-blend-screen" style={{ clipPath: 'polygon(0 80%, 100% 20%, 100% 100%, 0 100%)', transform: 'translate(2px, -2px)' }}>
            VEILED REALM™
            </h1>
        </div>
        
        <p className="text-lg md:text-2xl text-gray-300 font-montserrat font-light tracking-wide mb-8 max-w-3xl opacity-0 animate-fade-in-up drop-shadow-md" style={{ animationDelay: '0.6s' }}>
          A dark fantasy about truth, memory, and rebellion against the gods.
        </p>

        <blockquote className="text-crimson font-cinzel italic text-xl md:text-2xl mb-12 opacity-0 animate-fade-in-up drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)]" style={{ animationDelay: '0.8s' }}>
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

      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-float text-gold z-20" style={{ opacity: Math.max(0, 1 - scrollY / 300) }}>
        <ChevronDown className="w-8 h-8 opacity-70" />
      </div>
    </div>
  );
};