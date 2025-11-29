import React, { useEffect, useState } from 'react';
import { ChevronDown, Sparkles } from 'lucide-react';

export const Hero: React.FC = () => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToBooks = () => {
    const element = document.getElementById('books');
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
        className="relative z-10 text-center px-4 max-w-4xl mx-auto flex flex-col items-center will-change-transform"
        style={{ transform: `translateY(${scrollY * 0.2}px)`, opacity: Math.max(0, 1 - scrollY / 700) }}
      >
        <div className="mb-6 flex items-center justify-center space-x-4 opacity-80">
          <div className="h-[1px] w-12 bg-gold"></div>
          <span className="text-gold font-cinzel tracking-[0.3em] text-sm md:text-base">THE TRILOGY</span>
          <div className="h-[1px] w-12 bg-gold"></div>
        </div>
        
        <h1 className="text-5xl md:text-8xl font-cinzel font-bold text-transparent bg-clip-text bg-gradient-to-b from-gray-100 to-gray-500 mb-6 drop-shadow-lg tracking-wider">
          VEILED REALM
        </h1>
        
        <p className="text-lg md:text-2xl text-gray-400 font-montserrat font-light tracking-wide mb-10 max-w-2xl">
          The Shadow's Embrace awaits those who dare to look beyond the veil.
        </p>
        
        <button 
          onClick={scrollToBooks}
          className="group relative px-8 py-4 bg-transparent border border-crimson text-crimson font-cinzel font-bold tracking-widest hover:bg-crimson hover:text-white transition-all duration-300 ease-out overflow-hidden"
        >
          <span className="relative z-10 flex items-center gap-2">
            BEGIN JOURNEY
            <Sparkles className="w-4 h-4" />
          </span>
          <div className="absolute inset-0 w-full h-full bg-crimson transform -translate-x-full skew-x-12 group-hover:translate-x-0 transition-transform duration-500 ease-out -z-0 opacity-20" />
        </button>
      </div>

      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce text-gray-600">
        <ChevronDown className="w-8 h-8 opacity-50" />
      </div>
    </div>
  );
};