import React, { useEffect, useRef, useState } from 'react';
import { X, Feather, Bookmark, ExternalLink, BookOpen, ChevronRight } from 'lucide-react';
import { Book as BookType } from '../types';
import { BookCover } from './BookCover';

interface GrimoireModalProps {
  book: BookType;
  onClose: () => void;
}

const ContentSkeleton = () => (
  <div className="max-w-3xl mx-auto space-y-12 px-2 opacity-50">
    <div className="p-8 border border-crimson/20 bg-crimson/5 rounded-sm relative">
      <div className="absolute top-0 left-0 w-1 h-full bg-crimson" />
      <div className="h-5 w-5 rounded bg-crimson/20 mb-6" />
      <div className="space-y-3">
        <div className="h-3 bg-crimson/10 rounded w-full" />
        <div className="h-3 bg-crimson/10 rounded w-11/12" />
        <div className="h-3 bg-crimson/10 rounded w-4/5" />
      </div>
    </div>
    <div className="space-y-4">
       <div className="h-4 bg-gray-800 rounded w-full" />
       <div className="h-4 bg-gray-800 rounded w-11/12" />
       <div className="h-4 bg-gray-800 rounded w-full" />
    </div>
  </div>
);

export const GrimoireModal: React.FC<GrimoireModalProps> = ({ book, onClose }) => {
  const contentRef = useRef<HTMLDivElement>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [activeChapter, setActiveChapter] = useState<string>("");

  useEffect(() => {
    setIsLoading(true);
    const timer = setTimeout(() => setIsLoading(false), 800);
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

  const scrollToChapter = (chapterId: string) => {
    const element = document.getElementById(chapterId);
    if (element && contentRef.current) {
      const headerOffset = 120;
      const elementPosition = element.offsetTop;
      contentRef.current.scrollTo({
        top: elementPosition - headerOffset,
        behavior: 'smooth'
      });
      setActiveChapter(chapterId);
    }
  };

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-0 md:p-6 lg:p-12">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-[#020005]/95 backdrop-blur-xl transition-opacity duration-500 animate-in fade-in" 
        onClick={onClose}
      />
      
      {/* Modal Container */}
      <div className="relative w-full h-full max-w-[1600px] bg-[#050000] border border-crimson/30 shadow-[0_0_150px_rgba(138,28,28,0.15)] flex overflow-hidden animate-in zoom-in-95 duration-500 rounded-sm">
        
        {/* Close Button */}
        <button 
          onClick={onClose}
          className="absolute top-6 right-6 z-50 text-gray-500 hover:text-white hover:rotate-90 transition-all duration-300"
        >
          <X className="w-8 h-8" />
        </button>

        {/* Sidebar (Navigation) */}
        <div className="hidden lg:flex w-80 flex-col border-r border-crimson/10 bg-black/40 backdrop-blur-md relative z-20">
          <div className="p-8 border-b border-crimson/10 bg-gradient-to-b from-crimson/5 to-transparent">
            <span className="text-crimson text-[10px] font-cinzel tracking-[0.3em] uppercase block mb-3">
              Table of Contents
            </span>
            <h2 className="text-xl font-cinzel text-white leading-tight">
              {book.title}
            </h2>
          </div>
          
          <div className="flex-1 overflow-y-auto custom-scrollbar p-4 space-y-1">
            {book.chapters.map((chapter, idx) => (
              <button
                key={chapter.id}
                onClick={() => scrollToChapter(chapter.id)}
                className={`w-full text-left p-4 rounded-sm transition-all duration-300 group relative border border-transparent ${activeChapter === chapter.id ? 'bg-crimson/10 border-crimson/30' : 'hover:bg-white/5'}`}
              >
                <div className="flex items-start gap-3">
                  <span className={`text-[10px] font-mono mt-1 ${activeChapter === chapter.id ? 'text-crimson' : 'text-gray-600 group-hover:text-gray-400'}`}>
                    {(idx + 1).toString().padStart(2, '0')}
                  </span>
                  <div>
                    <span className={`block font-cinzel text-xs tracking-wide mb-1 ${activeChapter === chapter.id ? 'text-gold' : 'text-gray-400 group-hover:text-white'}`}>
                      SECTION {idx + 1}
                    </span>
                    <span className={`block font-montserrat text-[11px] leading-tight line-clamp-2 ${activeChapter === chapter.id ? 'text-white' : 'text-gray-500 group-hover:text-gray-300'}`}>
                      {chapter.title}
                    </span>
                  </div>
                </div>
              </button>
            ))}
          </div>

          <div className="p-6 border-t border-crimson/10 bg-black/60">
             <div className="flex items-center gap-3 opacity-60">
                <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                <span className="text-[10px] font-mono text-gray-400 uppercase">System Online</span>
             </div>
          </div>
        </div>

        {/* Main Content Area */}
        <div className="flex-1 flex flex-col relative bg-[#050000]">
          
          {/* Top Bar */}
          <div className="h-20 border-b border-crimson/10 flex items-center justify-between px-8 bg-gradient-to-r from-crimson/5 to-transparent sticky top-0 z-10 backdrop-blur-sm">
             <div className="flex items-center gap-4">
                <BookOpen className="w-5 h-5 text-crimson" />
                <span className="text-gray-400 font-cinzel text-sm tracking-widest uppercase">Reading Mode</span>
             </div>
             <div className="hidden md:block w-32 h-[1px] bg-gradient-to-r from-transparent via-crimson/50 to-transparent" />
          </div>

          {/* Text Scroll Area */}
          <div 
            ref={contentRef}
            className="flex-1 overflow-y-auto custom-scrollbar scroll-smooth relative"
          >
            {/* Texture & Glow Background */}
            <div className="absolute inset-0 pointer-events-none z-0 bg-[url('https://www.transparenttextures.com/patterns/stardust.png')] opacity-10 mix-blend-overlay" />
            <div className="absolute inset-0 pointer-events-none z-0 bg-[radial-gradient(circle_at_50%_0%,_rgba(138,28,28,0.08)_0%,_transparent_70%)]" />

            {isLoading ? (
              <div className="max-w-3xl mx-auto py-24">
                <ContentSkeleton />
              </div>
            ) : (
              <div className="relative z-10 max-w-4xl mx-auto px-6 md:px-12 py-24 pb-48">
                
                {/* Book Header */}
                <div className="text-center mb-24 relative">
                   <div className="absolute top-1/2 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-gray-800 to-transparent" />
                   <div className="relative inline-block bg-[#050000] px-6">
                      <div className="w-16 h-16 mx-auto mb-6 border border-gold/30 rotate-45 flex items-center justify-center">
                         <div className="w-12 h-12 border border-crimson/30 flex items-center justify-center">
                            <Feather className="w-5 h-5 text-gold -rotate-45" />
                         </div>
                      </div>
                   </div>
                   <h1 className="text-3xl md:text-5xl font-cinzel text-white mb-6 drop-shadow-lg">{book.title}</h1>
                   <p className="text-gray-400 font-montserrat text-sm md:text-lg italic max-w-2xl mx-auto leading-relaxed">
                      "{book.excerpt}"
                   </p>
                </div>

                {/* Chapters */}
                <div className="space-y-32">
                  {book.chapters.map((chapter, idx) => (
                    <div key={chapter.id} id={chapter.id} className="relative group">
                      
                      {/* Chapter Marker */}
                      <div className="flex items-center gap-4 mb-12 opacity-50 group-hover:opacity-100 transition-opacity">
                         <span className="font-mono text-crimson text-xs">0{idx + 1}</span>
                         <div className="h-[1px] flex-1 bg-gradient-to-r from-crimson/50 to-transparent" />
                      </div>

                      {/* Chapter Title */}
                      <h3 className="text-2xl md:text-3xl font-cinzel text-gold mb-10 pl-6 border-l-2 border-crimson">
                        {chapter.title}
                      </h3>

                      {/* Text Content */}
                      <div className="prose prose-invert prose-lg max-w-none">
                        <p className="text-gray-300 font-montserrat leading-[2.2] font-light text-justify text-lg md:text-xl tracking-wide">
                          <span className="float-left text-6xl font-cinzel text-crimson mr-4 mt-[-10px] leading-none drop-shadow-[0_0_15px_rgba(138,28,28,0.6)]">
                            {chapter.content.charAt(0)}
                          </span>
                          {chapter.content.slice(1)}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Footer Message */}
                <div className="mt-32 p-12 border border-crimson/20 bg-gradient-to-b from-crimson/5 to-transparent text-center relative overflow-hidden">
                   <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-crimson/50 to-transparent" />
                   <h4 className="text-2xl font-cinzel text-white mb-4">The Journey Continues</h4>
                   <p className="text-gray-400 font-montserrat mb-8 max-w-lg mx-auto">
                      You have reached the edge of the preview. The full truth awaits in the complete volume.
                   </p>
                   <a 
                     href={book.buyUrl} 
                     target="_blank" 
                     rel="noopener noreferrer"
                     className="inline-flex items-center gap-3 px-8 py-4 bg-crimson text-white font-cinzel font-bold tracking-[0.2em] hover:bg-white hover:text-black transition-all duration-300 shadow-[0_0_30px_rgba(138,28,28,0.4)]"
                   >
                      ACQUIRE FULL TOMES <ChevronRight className="w-4 h-4" />
                   </a>
                </div>

              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};