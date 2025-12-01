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
    <div className="relative h-screen w-full flex items-center justify-center overflow-hidden bg-gray-950">
      
      {/* Animated Background Layer */}
      <div className="absolute inset-0 w-full h-full overflow-hidden">
         {/* Nebula Image with Slow Zoom Animation */}
         <div 
            className="absolute inset-0 bg-cover bg-center animate-slow-zoom"
            style={{ 
              backgroundImage: "url('https://images.unsplash.com/photo-1534796636912-3b95b3ab5980?q=80&w=2072&auto=format&fit=crop')",
              opacity: 0.6
            }} 
         />
         {/* Gradient Overlay to darken */}
         <div className="absolute inset-0 bg-gradient-to-b from-gray-950/80 via-gray-950/20 to-gray-950"></div>
         <div className="absolute inset-0 bg-gradient-to-r from-gray-950/50 via-transparent to-gray-950/50"></div>
      </div>

      {/* Foreground Content */}
      <div 
        className="relative z-10 text-center px-6 max-w-5xl mx-auto flex flex-col items-center"
        style={{ transform: `translateY(${scrollY * 0.3}px)`, opacity: Math.max(0, 1 - scrollY / 600) }}
      >
        {/* Animated Reveal Header */}
        <div className="mb-8 flex items-center justify-center space-x-4 opacity-0 animate-fade-in-up" style={{ animationDelay: '0.1s' }}>
          <div className="h-[1px] w-16 bg-yellow-500/50"></div>
          <span className="text-yellow-400 font-cinzel tracking-[0.4em] text-xs font-bold uppercase">Imperial X Presents</span>
          <div className="h-[1px] w-16 bg-yellow-500/50"></div>
        </div>
        
        <h1 className="text-6xl md:text-9xl font-cinzel font-bold text-white drop-shadow-2xl tracking-wide opacity-0 animate-fade-in-up mb-6" style={{ animationDelay: '0.3s' }}>
          VEILED REALM
        </h1>
        
        <p className="text-lg md:text-2xl text-gray-200 font-montserrat font-normal tracking-wide mb-10 max-w-3xl opacity-0 animate-fade-in-up drop-shadow-md leading-relaxed" style={{ animationDelay: '0.5s' }}>
          A dark fantasy about truth, memory, and rebellion against the gods.
        </p>

        <div className="border-l-2 border-red-600 pl-6 py-2 max-w-xl mx-auto text-left bg-gradient-to-r from-gray-900/60 to-transparent backdrop-blur-sm opacity-0 animate-fade-in-up mb-12" style={{ animationDelay: '0.7s' }}>
          <p className="italic text-gray-300 font-serif text-xl font-normal">
            “Every world ends twice — first in memory, then in belief.”
          </p>
        </div>
        
        <div className="flex flex-col md:flex-row gap-6 opacity-0 animate-fade-in-up" style={{ animationDelay: '0.9s' }}>
          <button 
            onClick={() => scrollToSection('books')}
            className="group relative px-8 py-4 overflow-hidden bg-white/5 border border-white/10 text-gray-100 font-cinzel font-bold tracking-widest transition-all duration-300 hover:border-red-500/50 hover:bg-red-900/20 backdrop-blur-sm"
          >
            <div className="absolute top-0 -inset-full h-full w-1/2 z-5 block transform -skew-x-12 bg-gradient-to-r from-transparent to-white opacity-20 group-hover:animate-shine" />
            <span className="relative z-10 flex items-center gap-3">
              READ SAMPLE
              <ScrollText className="w-4 h-4 text-red-500" />
            </span>
          </button>

          <button 
            onClick={() => scrollToSection('newsletter')}
            className="group relative px-8 py-4 overflow-hidden bg-red-700 text-white font-cinzel font-bold tracking-widest transition-all duration-300 hover:bg-red-600 shadow-lg hover:shadow-[0_0_20px_rgba(220,38,38,0.4)]"
          >
            <span className="relative z-10 flex items-center gap-3">
              JOIN THE REALM
              <Sparkles className="w-4 h-4 text-yellow-400" />
            </span>
          </button>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce text-gray-400 z-20">
        <ChevronDown className="w-6 h-6 opacity-80" />
      </div>
    </div>
  );
};