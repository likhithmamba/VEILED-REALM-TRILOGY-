import React from 'react';
import { TIMELINE_EPOCHS } from '../constants';
import { Clock } from 'lucide-react';

export const Timeline: React.FC = () => {
  return (
    <div className="w-full relative py-12">
      {/* Fade Edges */}
      <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-void to-transparent z-10 pointer-events-none" />
      <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-void to-transparent z-10 pointer-events-none" />

      {/* Scroll Container */}
      <div className="flex overflow-x-auto snap-x snap-mandatory pb-12 pt-4 px-8 md:px-[30vw] scrollbar-hide gap-12">
        {TIMELINE_EPOCHS.map((epoch, index) => (
          <div 
            key={epoch.id}
            className="snap-center shrink-0 w-[85vw] md:w-[500px] bg-[#0a0a0a] border border-gray-800 hover:border-crimson/50 transition-colors duration-500 p-8 relative group"
          >
            <div className="absolute top-0 left-0 w-full h-1 bg-gray-800 group-hover:bg-crimson transition-colors duration-500" />
            
            <div className="flex items-baseline justify-between mb-6">
              <span className="text-5xl font-cinzel text-gray-800 group-hover:text-crimson/20 transition-colors duration-500 font-bold">
                {epoch.year}
              </span>
              <Clock className="w-5 h-5 text-gold opacity-50" />
            </div>

            <h3 className="text-2xl font-cinzel text-gold mb-4 group-hover:translate-x-2 transition-transform duration-300">
              {epoch.title}
            </h3>
            
            <p className="text-gray-400 font-montserrat leading-relaxed text-sm">
              {epoch.description}
            </p>
          </div>
        ))}
      </div>
      
      {/* Indicators */}
      <div className="flex justify-center mt-4 gap-3">
        {TIMELINE_EPOCHS.map((_, idx) => (
          <div key={idx} className="w-1.5 h-1.5 rounded-full bg-gray-800" />
        ))}
      </div>
    </div>
  );
};