import React, { useRef, useState, useEffect } from 'react';
import { TIMELINE_EPOCHS } from '../constants';
import { History, ArrowRight, Circle, Disc } from 'lucide-react';

export const Timeline: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);

  const handleEpochClick = (index: number) => {
    setActiveIndex(index);
  };

  return (
    <section className="w-full relative py-24 bg-[#050505] border-t border-white/5 overflow-hidden">
      {/* Background Decor */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-crimson/5 rounded-full blur-[100px]" />
        <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-gold/5 rounded-full blur-[100px]" />
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-cinzel text-gold mb-3 tracking-[0.2em]">THE AGES OF THE REALM</h2>
          <p className="text-gray-500 font-montserrat text-sm uppercase tracking-widest">A History of Silence and Truth</p>
        </div>

        {/* Desktop Layout (Horizontal Carousel) */}
        <div className="hidden md:flex flex-col">
          {/* Timeline Bar */}
          <div className="relative h-1 w-full bg-gray-900 rounded-full mb-16 flex justify-between items-center px-12">
            <div 
              className="absolute left-0 top-0 h-full bg-gradient-to-r from-crimson to-gold transition-all duration-500 rounded-full"
              style={{ width: `${(activeIndex / (TIMELINE_EPOCHS.length - 1)) * 100}%` }}
            />
            {TIMELINE_EPOCHS.map((epoch, idx) => (
              <button
                key={epoch.id}
                onClick={() => handleEpochClick(idx)}
                className={`relative z-10 w-4 h-4 rounded-full transition-all duration-300 transform ${activeIndex === idx ? 'scale-150 bg-white shadow-[0_0_15px_rgba(255,255,255,0.8)]' : 'bg-gray-700 hover:bg-gray-500'} ${idx <= activeIndex ? 'bg-gold' : ''}`}
              >
                {activeIndex === idx && (
                  <div className="absolute -top-10 left-1/2 -translate-x-1/2 text-xs font-cinzel text-gold whitespace-nowrap opacity-0 animate-fade-in-up">
                    {epoch.year}
                  </div>
                )}
              </button>
            ))}
          </div>

          {/* Active Content Card */}
          <div className="relative h-[400px] w-full">
            {TIMELINE_EPOCHS.map((epoch, idx) => (
              <div 
                key={epoch.id}
                className={`absolute inset-0 transition-all duration-700 ease-out transform ${
                  activeIndex === idx 
                    ? 'opacity-100 translate-x-0 scale-100 z-20' 
                    : activeIndex > idx 
                      ? 'opacity-0 -translate-x-20 scale-95 z-0' 
                      : 'opacity-0 translate-x-20 scale-95 z-0'
                }`}
              >
                <div className="w-full h-full flex items-center justify-center p-8">
                  <div className="w-full max-w-4xl bg-gradient-to-br from-[#0a0a0a] to-[#050505] border border-gray-800 p-12 rounded-sm shadow-[0_0_50px_rgba(0,0,0,0.5)] relative overflow-hidden group">
                    <div className="absolute top-0 right-0 p-8 opacity-10 group-hover:opacity-20 transition-opacity duration-700">
                      <History size={120} className="text-gray-500" />
                    </div>
                    
                    <div className="relative z-10 flex gap-12 items-center">
                      <div className="w-1/3 text-right border-r border-crimson/30 pr-12">
                        <span className="block text-6xl font-cinzel text-gray-800 font-bold opacity-50 mb-2">{idx + 1}</span>
                        <h3 className="text-3xl font-cinzel text-gold">{epoch.year}</h3>
                      </div>
                      <div className="w-2/3">
                        <h4 className="text-2xl font-cinzel text-white mb-6">{epoch.title}</h4>
                        <p className="text-gray-400 font-montserrat text-lg leading-relaxed">{epoch.description}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Mobile Layout (Vertical Timeline) */}
        <div className="md:hidden space-y-8 relative pl-8 border-l border-gray-800 ml-4">
          {TIMELINE_EPOCHS.map((epoch, idx) => (
            <div 
              key={epoch.id}
              className={`relative p-6 bg-[#0a0a0a] border ${activeIndex === idx ? 'border-crimson/50 bg-void shadow-[0_0_20px_rgba(138,28,28,0.1)]' : 'border-gray-800'} rounded-sm transition-all duration-300`}
              onClick={() => handleEpochClick(idx)}
            >
              {/* Connector Dot */}
              <div className={`absolute -left-[41px] top-8 w-6 h-6 rounded-full border-4 border-[#050505] flex items-center justify-center transition-colors ${activeIndex === idx ? 'bg-crimson' : 'bg-gray-700'}`}>
                {activeIndex === idx && <div className="w-2 h-2 bg-white rounded-full animate-pulse" />}
              </div>

              <span className="text-xs font-cinzel text-gold tracking-widest uppercase mb-1 block">{epoch.year}</span>
              <h3 className="text-xl font-cinzel text-white mb-3">{epoch.title}</h3>
              <p className="text-sm text-gray-400 font-montserrat leading-relaxed">{epoch.description}</p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};