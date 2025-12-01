import React, { useEffect, useRef, useState } from 'react';
import { X, ExternalLink, Share2, BookOpen } from 'lucide-react';
import { Book as BookType } from '../types';

interface GrimoireModalProps {
  book: BookType;
  onClose: () => void;
}

const ContentSkeleton = () => (
  <div className="max-w-2xl mx-auto space-y-8 px-4 opacity-30 mt-20">
    <div className="h-40 w-full bg-gradient-to-b from-gray-800 to-transparent rounded-sm" />
    <div className="space-y-4">
       <div className="h-4 bg-gray-800 rounded w-full" />
       <div className="h-4 bg-gray-800 rounded w-11/12" />
       <div className="h-4 bg-gray-800 rounded w-full" />
       <div className="h-4 bg-gray-800 rounded w-3/4" />
    </div>
  </div>
);

// Ornamental Divider SVG
const Divider = () => (
  <div className="py-12 flex justify-center opacity-40">
    <svg width="100" height="15" viewBox="0 0 100 15" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M50 7.5L45 0H55L50 7.5Z" fill="#d4af37"/>
      <path d="M0 7.5H40" stroke="#d4af37" strokeWidth="0.5"/>
      <path d="M60 7.5H100" stroke="#d4af37" strokeWidth="0.5"/>
      <circle cx="50" cy="7.5" r="1.5" fill="#d4af37"/>
    </svg>
  </div>
);

export const GrimoireModal: React.FC<GrimoireModalProps> = ({ book, onClose }) => {
  const contentRef = useRef<HTMLDivElement>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [activeChapter, setActiveChapter] = useState<string>("");
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    setIsLoading(true);
    const timer = setTimeout(() => setIsLoading(false), 600);
    return () => clearTimeout(timer);
  }, [book]);

  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleEsc);
    document.body.style.overflow = 'hidden';
    return () => {
      window.removeEventListener('keydown', handleEsc);
      document.body.style.overflow = 'unset';
    };
  }, [onClose]);

  // Track scroll progress
  const handleScroll = () => {
    if (contentRef.current) {
      const { scrollTop, scrollHeight, clientHeight } = contentRef.current;
      const progress = (scrollTop / (scrollHeight - clientHeight)) * 100;
      setScrollProgress(progress);
    }
  };

  const scrollToChapter = (chapterId: string) => {
    const element = document.getElementById(chapterId);
    if (element && contentRef.current) {
      const headerOffset = 100;
      const elementPosition = element.offsetTop;
      contentRef.current.scrollTo({
        top: elementPosition - headerOffset,
        behavior: 'smooth'
      });
      setActiveChapter(chapterId);
    }
  };

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-0 overflow-hidden antialiased">
      
      {/* Immersive Backdrop (Void Gradient) */}
      <div 
        className="absolute inset-0 bg-[#020003] animate-in fade-in duration-700"
      />
      
      {/* Background Ambience (No Grain) */}
      <div className="absolute inset-0 pointer-events-none">
         <div className="absolute top-[-20%] left-[-10%] w-[50%] h-[50%] bg-crimson/10 blur-[150px] rounded-full opacity-40" />
         <div className="absolute bottom-[-20%] right-[-10%] w-[50%] h-[50%] bg-gold/5 blur-[150px] rounded-full opacity-30" />
      </div>

      {/* Main Layout Container */}
      <div className="relative w-full h-full flex flex-col md:flex-row bg-transparent backdrop-blur-sm overflow-hidden">
        
        {/* Sidebar - Glass Navigation Rail */}
        <div className="hidden md:flex w-72 flex-col border-r border-white/5 bg-[#0a0a0a]/40 backdrop-blur-xl relative z-20">
          <div className="p-8 pb-4">
            <span className="text-crimson font-cinzel text-[10px] tracking-[0.3em] uppercase block mb-2 opacity-80">
              Veiled Realm
            </span>
            <h1 className="text-xl font-display text-white italic leading-tight">
              {book.title}
            </h1>
          </div>
          
          <div className="flex-1 overflow-y-auto custom-scrollbar px-6 py-4 space-y-6">
            {/* Table of Contents */}
            <div className="relative border-l border-white/5 ml-2 pl-6 space-y-1">
              {book.chapters.map((chapter, idx) => {
                if (chapter.isSeparator) {
                  return (
                    <div key={chapter.id} className="pt-6 pb-2 -ml-6">
                      <span className="text-gold/60 font-cinzel text-[10px] tracking-[0.2em] font-bold block pl-6 border-b border-white/5 pb-2">
                        {chapter.title}
                      </span>
                    </div>
                  );
                }
                
                const isActive = activeChapter === chapter.id;
                
                return (
                  <button
                    key={chapter.id}
                    onClick={() => scrollToChapter(chapter.id)}
                    className={`block w-full text-left transition-all duration-300 group ${isActive ? 'translate-x-1' : ''}`}
                  >
                    <div className="flex flex-col">
                      <span className={`text-[10px] font-mono mb-1 transition-colors ${isActive ? 'text-crimson' : 'text-gray-500 group-hover:text-gray-300'}`}>
                        {(idx + 1).toString().padStart(2, '0')}
                      </span>
                      <span className={`font-medium text-xs font-montserrat leading-snug transition-colors line-clamp-2 ${isActive ? 'text-white' : 'text-gray-400 group-hover:text-gray-200'}`}>
                        {chapter.title.split('—')[1] || chapter.title}
                      </span>
                    </div>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Sidebar Footer */}
          <div className="p-6 border-t border-white/5">
             <a href={book.buyUrl} target="_blank" rel="noreferrer" className="flex items-center gap-2 text-yellow-500 hover:text-white transition-colors text-xs font-cinzel tracking-widest uppercase">
                Acquire Tome <ExternalLink className="w-3 h-3" />
             </a>
          </div>
        </div>

        {/* Reading Content Area */}
        <div className="flex-1 flex flex-col relative h-full bg-[#030005]">
          
          {/* Top Floating Header */}
          <div className="absolute top-0 left-0 w-full z-30">
             {/* Progress Bar */}
             <div className="h-[2px] w-full bg-white/5">
                <div 
                  className="h-full bg-gradient-to-r from-crimson via-gold to-crimson shadow-[0_0_10px_#d4af37]"
                  style={{ width: `${scrollProgress}%`, transition: 'width 0.1s linear' }}
                />
             </div>
             
             {/* Controls */}
             <div className="flex items-center justify-between px-6 py-4 bg-gradient-to-b from-[#030005] to-transparent">
                <div className="md:hidden">
                   <h2 className="text-gray-300 font-cinzel text-xs tracking-widest truncate max-w-[200px]">{book.title}</h2>
                </div>
                <div className="hidden md:block">
                   {/* Empty on desktop to keep right aligned */}
                </div>
                <div className="flex items-center gap-4">
                   <button className="text-gray-400 hover:text-yellow-400 transition-colors" title="Share">
                      <Share2 className="w-5 h-5" />
                   </button>
                   <button 
                      onClick={onClose}
                      className="text-gray-400 hover:text-white hover:rotate-90 transition-all duration-300 bg-white/5 p-2 rounded-full hover:bg-white/10"
                   >
                      <X className="w-5 h-5" />
                   </button>
                </div>
             </div>
          </div>

          {/* Scrollable Text Canvas */}
          <div 
            ref={contentRef}
            onScroll={handleScroll}
            className="flex-1 overflow-y-auto custom-scrollbar scroll-smooth relative"
          >
            {isLoading ? (
              <ContentSkeleton />
            ) : (
              <div className="max-w-3xl mx-auto px-6 md:px-12 pb-48 pt-24">
                
                {/* Minimalist Book Title Page */}
                <div className="text-center py-20 mb-20 border-b border-white/5 relative">
                   <div className="inline-block p-4 border border-yellow-500/20 rotate-45 mb-8">
                      <div className="w-3 h-3 bg-crimson shadow-[0_0_15px_#8a1c1c] -rotate-45" />
                   </div>
                   <h1 className="text-4xl md:text-6xl font-display font-bold text-white mb-6 tracking-tight">
                     {book.title}
                   </h1>
                   <p className="text-gray-300 font-reading italic text-lg leading-relaxed max-w-xl mx-auto">
                      "{book.excerpt}"
                   </p>
                </div>

                {/* Chapter Content Rendering */}
                <div className="space-y-24">
                  {book.chapters.map((chapter, idx) => {
                    // Separator / Book Cover Page within Scroll
                    if (chapter.isSeparator) {
                      return (
                        <div key={chapter.id} id={chapter.id} className="min-h-[50vh] flex flex-col items-center justify-center text-center my-12 relative group">
                           <div className="absolute inset-0 bg-gradient-to-b from-crimson/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-1000" />
                           <span className="font-cinzel text-red-500 text-sm tracking-[0.5em] uppercase mb-6 relative z-10">Part of the Trilogy</span>
                           <h2 className="text-6xl md:text-8xl font-display text-white relative z-10 drop-shadow-2xl">
                             {chapter.title}
                           </h2>
                           <div className="w-1 h-20 bg-gradient-to-b from-gold to-transparent mt-12 opacity-50" />
                        </div>
                      );
                    }

                    // Standard Chapter
                    return (
                      <div key={chapter.id} id={chapter.id} className="relative animate-in fade-in slide-in-from-bottom-8 duration-700">
                        
                        <div className="mb-12 text-center">
                           <span className="font-mono text-red-500/60 text-xs mb-2 block">0{idx + 1}</span>
                           <h3 className="text-3xl font-display text-white">
                             {chapter.title.includes('—') ? chapter.title.split('—')[1] : chapter.title}
                           </h3>
                        </div>

                        <div className="font-reading text-lg md:text-[1.15rem] leading-loose text-gray-200 text-justify tracking-wide space-y-8 selection:bg-crimson/30 selection:text-white">
                          {chapter.content.split('\n\n').map((paragraph, pIdx) => {
                            // Drop Cap Logic for first paragraph
                            if (pIdx === 0) {
                              const firstChar = paragraph.charAt(0);
                              const rest = paragraph.slice(1);
                              return (
                                <p key={pIdx} className="relative">
                                  <span className="float-left text-7xl font-display font-bold text-transparent bg-clip-text bg-gradient-to-br from-yellow-400 to-red-600 mr-3 mt-[-8px] leading-[0.8] drop-shadow-sm">
                                    {firstChar}
                                  </span>
                                  {rest}
                                </p>
                              );
                            }
                            return <p key={pIdx}>{paragraph}</p>;
                          })}
                        </div>

                        <Divider />
                      </div>
                    );
                  })}
                </div>

                {/* End of Preview CTA */}
                <div className="mt-24 p-1 bg-gradient-to-r from-transparent via-red-900/30 to-transparent rounded-sm">
                   <div className="bg-[#080808] p-12 text-center">
                      <BookOpen className="w-8 h-8 text-yellow-500 mx-auto mb-6 opacity-80" />
                      <h4 className="text-2xl font-display text-white mb-4">The Story Continues</h4>
                      <p className="text-gray-300 font-reading mb-8">
                         The threads of fate are not yet cut. Secure the complete trilogy to witness the end.
                      </p>
                      <button className="px-10 py-4 bg-white text-black font-cinzel font-bold tracking-[0.2em] text-xs hover:bg-yellow-400 transition-colors shadow-[0_0_30px_rgba(255,255,255,0.1)]">
                         PURCHASE FULL EDITION
                      </button>
                   </div>
                </div>

              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};