import React, { useRef, useState, useEffect } from 'react';
import { TIMELINE_EPOCHS } from '../constants';
import { Clock, ChevronLeft, ChevronRight, History } from 'lucide-react';

export const Timeline: React.FC = () => {
  const scrollContainer = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  // Update active index based on scroll position
  useEffect(() => {
    const handleScroll = () => {
      if (scrollContainer.current) {
        const center = scrollContainer.current.scrollLeft + scrollContainer.current.offsetWidth / 2;
        const children = Array.from(scrollContainer.current.children) as HTMLElement[];
        
        let closestIndex = 0;
        let minDiff = Infinity;

        children.forEach((child, index) => {
          const childCenter = child.offsetLeft + child.offsetWidth / 2;
          const diff = Math.abs(center - childCenter);
          if (diff < minDiff) {
            minDiff = diff;
            closestIndex = index;
          }
        });

        setActiveIndex(closestIndex);
      }
    };

    const container = scrollContainer.current;
    if (container) {
      container.addEventListener('scroll', handleScroll, { passive: true });
      return () => container.removeEventListener('scroll', handleScroll);
    }
  }, []);

  const scroll = (direction: 'left' | 'right') => {
    if (scrollContainer.current) {
      const scrollAmount = window.innerWidth < 768 ? 320 : 500;
      scrollContainer.current.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth'
      });
    }
  };

  const scrollToIdx = (index: number) => {
    if (scrollContainer.current) {
      const children = Array.from(scrollContainer.current.children) as HTMLElement[];
      const target = children[index];
      if (target) {
        // Calculate position to center the element
        const containerWidth = scrollContainer.current.offsetWidth;
        const targetLeft = target.offsetLeft;
        const targetWidth = target.offsetWidth;
        
        scrollContainer.current.scrollTo({
          left: targetLeft - (containerWidth / 2) + (targetWidth / 2),
          behavior: 'smooth'
        });
      }
    }
  };

  return (
    <div className="w-full relative py-24 group/timeline border-b border-white/5 bg-[#030303] overflow-hidden">
       {/* Background Effects */}
       <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,_rgba(45,27,78,0.2),_transparent_70%)] pointer-events-none" />
       
       <div className="max-w-7xl mx-auto px-6 mb-16 relative z-10 flex flex-col md:flex-row justify-between items-end gap-6">
          <div>
            <h2 className="text-4xl font-fantasy text-gold mb-2 drop-shadow-md">The Ages of the Realm</h2>
            <p className="text-gray-400 text-sm max-w-md">Drag to traverse the epochs of history, from the First Rewrite to the Eclipsed Dawn.</p>
          </div>
          
          {/* Progress Indicators */}
          <div className="flex gap-2">
            {TIMELINE_EPOCHS.map((_, idx) => (
              <button 
                key={idx}
                onClick={() => scrollToIdx(idx)}
                className={`h-1 transition-all duration-300 rounded-full ${activeIndex === idx ? 'w-8 bg-crimson' : 'w-2 bg-gray-800 hover:bg-gray-600'}`}
                aria-label={`Go to age ${idx + 1}`}
              />
            ))}
          </div>
       </div>

      {/* Decorative Connector Line */}
      <div className="absolute top-[65%] left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-gray-800 to-transparent z-0" />

      {/* Navigation Buttons */}
      <div className="absolute top-[65%] left-0 w-full px-4 md:px-12 -translate-y-1/2 flex justify-between pointer-events-none z-30">
        <button 
          onClick={() => scroll('left')}
          className="pointer-events-auto w-12 h-12 flex items-center justify-center rounded-full border border-gray-700 bg-black/80 text-white hover:border-crimson hover:bg-crimson/20 transition-all duration-300 backdrop-blur-md shadow-[0_0_20px_rgba(0,0,0,0.5)]"
        >
          <ChevronLeft className="w-6 h-6" />
        </button>
        <button 
          onClick={() => scroll('right')}
          className="pointer-events-auto w-12 h-12 flex items-center justify-center rounded-full border border-gray-700 bg-black/80 text-white hover:border-crimson hover:bg-crimson/20 transition-all duration-300 backdrop-blur-md shadow-[0_0_20px_rgba(0,0,0,0.5)]"
        >
          <ChevronRight className="w-6 h-6" />
        </button>
      </div>

      {/* Scroll Container */}
      <div 
        ref={scrollContainer}
        className="flex overflow-x-auto snap-x snap-mandatory pb-20 pt-10 px-8 md:px-[calc(50vw-250px)] scrollbar-hide gap-8 md:gap-16 relative z-10 items-center"
      >
        {TIMELINE_EPOCHS.map((epoch, idx) => {
          const isActive = idx === activeIndex;
          
          return (
            <div 
              key={epoch.id}
              onClick={() => scrollToIdx(idx)}
              className={`snap-center shrink-0 w-[85vw] md:w-[500px] transition-all duration-500 relative group cursor-pointer ${isActive ? 'scale-100 opacity-100' : 'scale-90 opacity-40 blur-[1px] hover:opacity-70 hover:blur-0'}`}
            >
              {/* Card Container */}
              <div className={`
                relative p-8 md:p-10 border backdrop-blur-xl transition-all duration-500 overflow-hidden
                ${isActive 
                  ? 'bg-void/80 border-crimson/50 shadow-[0_0_50px_rgba(138,28,28,0.15)]' 
                  : 'bg-black/40 border-gray-800 hover:border-gray-600'}
              `}>
                {/* Active Glow Overlay */}
                <div className={`absolute inset-0 bg-gradient-to-br from-crimson/10 to-transparent opacity-0 transition-opacity duration-500 ${isActive ? 'opacity-100' : ''}`} />
                
                {/* Top Label */}
                <div className="flex items-center justify-between mb-6 relative z-10">
                   <span className={`text-xs font-montserrat tracking-[0.3em] uppercase ${isActive ? 'text-crimson' : 'text-gray-500'}`}>
                     Epoch {idx + 1}
                   </span>
                   <div className={`w-8 h-8 rounded-full border flex items-center justify-center transition-colors ${isActive ? 'border-gold bg-gold/10' : 'border-gray-800'}`}>
                      <History className={`w-4 h-4 ${isActive ? 'text-gold' : 'text-gray-600'}`} />
                   </div>
                </div>

                {/* Content */}
                <div className="relative z-10">
                  <h3 className={`text-4xl md:text-5xl font-fantasy mb-4 transition-colors duration-300 ${isActive ? 'text-white' : 'text-gray-400'}`}>
                    {epoch.year}
                  </h3>
                  <div className={`text-xl font-cinzel mb-4 ${isActive ? 'text-gold' : 'text-gray-500'}`}>
                    {epoch.title}
                  </div>
                  <div className={`h-[1px] w-12 mb-6 ${isActive ? 'bg-crimson' : 'bg-gray-800'}`} />
                  <p className={`font-montserrat text-sm leading-relaxed ${isActive ? 'text-gray-300' : 'text-gray-600'}`}>
                    {epoch.description}
                  </p>
                </div>

                {/* Decorative Borders */}
                <div className={`absolute top-0 left-0 w-2 h-2 border-t border-l transition-colors ${isActive ? 'border-gold' : 'border-transparent'}`} />
                <div className={`absolute top-0 right-0 w-2 h-2 border-t border-r transition-colors ${isActive ? 'border-gold' : 'border-transparent'}`} />
                <div className={`absolute bottom-0 left-0 w-2 h-2 border-b border-l transition-colors ${isActive ? 'border-gold' : 'border-transparent'}`} />
                <div className={`absolute bottom-0 right-0 w-2 h-2 border-b border-r transition-colors ${isActive ? 'border-gold' : 'border-transparent'}`} />
              </div>

              {/* Connector Node on Line */}
              <div className={`
                hidden md:block absolute -bottom-[3.25rem] left-1/2 -translate-x-1/2 w-4 h-4 rounded-full border-2 z-20 transition-all duration-500
                ${isActive ? 'bg-void border-crimson scale-125 shadow-[0_0_15px_rgba(138,28,28,0.8)]' : 'bg-gray-900 border-gray-700'}
              `} />
            </div>
          );
        })}
      </div>
    </div>
  );
};