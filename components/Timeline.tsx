import React from 'react';
import { TIMELINE_EPOCHS } from '../constants';
import { Clock } from 'lucide-react';

export const Timeline: React.FC = () => {
  return (
    <div className="w-full overflow-hidden relative">
      <div className="absolute left-0 top-0 bottom-0 w-16 bg-gradient-to-r from-void to-transparent z-10 pointer-events-none" />
      <div className="absolute right-0 top-0 bottom-0 w-16 bg-gradient-to-l from-void to-transparent z-10 pointer-events-none" />

      <div className="flex overflow-x-auto snap-x snap-mandatory pb-8 pt-4 px-8 md:px-[25vw] scrollbar-hide gap-8">
        {TIMELINE_EPOCHS.map((epoch, index) => (
          <div 
            key={epoch.id}
            className="snap-center shrink-0 w-[85vw] md:w-[600px] flex flex-col md:flex-row bg-void border border-gray-900 hover:border-shadow transition-colors duration-300 p-6 md:p-10 relative group"
          >
            {/* Connector Line (visual only) */}
            <div className="hidden md:block absolute top-1/2 -left-4 w-8 h-[1px] bg-gray-800" />
            <div className="hidden md:block absolute top-1/2 -right-4 w-8 h-[1px] bg-gray-800" />

            <div className="md:w-1/3 flex flex-col border-b md:border-b-0 md:border-r border-gray-800 pb-4 md:pb-0 md:pr-6 mb-4 md:mb-0 justify-center text-center md:text-right">
              <span className="text-4xl md:text-6xl font-cinzel text-gray-800 group-hover:text-shadow/50 transition-colors duration-500 font-bold block">
                0{index + 1}
              </span>
              <span className="text-crimson font-montserrat font-bold tracking-wider text-sm mt-2">
                {epoch.year}
              </span>
            </div>

            <div className="md:w-2/3 md:pl-8 flex flex-col justify-center text-center md:text-left">
              <div className="flex items-center justify-center md:justify-start gap-3 mb-3">
                <Clock className="w-5 h-5 text-gold" />
                <h3 className="text-2xl font-cinzel text-gray-200">
                  {epoch.title}
                </h3>
              </div>
              <p className="text-gray-400 font-montserrat leading-relaxed">
                {epoch.description}
              </p>
            </div>
          </div>
        ))}
      </div>
      
      <div className="flex justify-center mt-6 gap-2">
        {TIMELINE_EPOCHS.map((_, idx) => (
          <div key={idx} className="w-2 h-2 rounded-full bg-gray-800" />
        ))}
      </div>
    </div>
  );
};