import React, { useEffect, useRef, useState } from 'react';
import { X, Feather, Bookmark, ExternalLink } from 'lucide-react';
import { Book as BookType } from '../types';
import { BookCover } from './BookCover';

interface GrimoireModalProps {
  book: BookType;
  onClose: () => void;
}

const ContentSkeleton = () => (
  <div className="max-w-3xl mx-auto space-y-12 px-2">
    {/* Quote Box Skeleton */}
    <div className="p-8 border border-gray-800 bg-gray-900/20 rounded-sm relative">
      <div className="absolute top-0 left-0 w-1 h-full bg-gray-800" />
      <div className="h-5 w-5 rounded animate-shimmer mb-6" />
      <div className="space-y-3">
        <div className="h-3 rounded animate-shimmer w-full" />
        <div className="h-3 rounded animate-shimmer w-11/12" />
        <div className="h-3 rounded animate-shimmer w-4/5" />
      </div>
    </div>

    {/* Chapter Header Skeleton */}
    <div className="flex flex-col items-center gap-4 py-8">
      <div className="h-3 w-24 rounded animate-shimmer" />
      <div className="h-10 w-64 rounded animate-shimmer" />
      <div className="w-24 h-[1px] bg-gray-800 mt-2" />
    </div>

    {/* Text Body Skeleton */}
    <div className="space-y-4">
       <div className="h-4 rounded animate-shimmer w-full" />
       <div className="h-4 rounded animate-shimmer w-full" />
       <div className="h-4 rounded animate-shimmer w-11/12" />
       <div className="h-4 rounded animate-shimmer w-full" />
       <div className="h-4 rounded animate-shimmer w-10/12" />
       <div className="h-4 rounded animate-shimmer w-full" />
       <div className="h-4 rounded animate-shimmer w-9/12" />
    </div>
  </div>
);

export const GrimoireModal: React.FC<GrimoireModalProps> = ({ book, onClose }) => {
  const contentRef = useRef<HTMLDivElement>(null);
  const [isLoading, setIsLoading] = useState(true);

  // Simulate loading delay for effect
  useEffect(() => {
    setIsLoading(true);
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 800);
    return () => clearTimeout(timer);
  }, [book]);

  // Close on Escape key
  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleEsc);
    return () => window.removeEventListener('keydown', handleEsc);
  }, [onClose]);

  // Prevent background scrolling
  useEffect(() => {
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, []);

  const scrollToChapter = (chapterId: string) => {
    const element = document.getElementById(chapterId);
    if (element && contentRef.current) {
      // Calculate offset to account for sticky header
      const headerOffset = 100;
      const elementPosition = element.offsetTop;
      
      contentRef.current.scrollTo({
        top: elementPosition - headerOffset,
        behavior: 'smooth'
      });
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-0 md:p-8">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-void/95 backdrop-blur-lg transition-opacity duration-500 animate-in fade-in" 
        onClick={onClose}
      />
      
      {/* Modal Content */}
      <div className="relative w-full max-w-7xl h-full md:h-[90vh] bg-void border border-gray-800 shadow-[0_0_100px_rgba(138,28,28,0.2)] flex flex-col md:flex-row overflow-hidden animate-in zoom-in-95 duration-300 rounded-sm">
        
        {/* Close Button */}
        <button 
          onClick={onClose}
          className="absolute top-4 right-4 z-50 text-gray-400 hover:text-crimson hover:bg-void/80 transition-all rounded-full p-2 border border-transparent hover:border-crimson/50"
        >
          <X className="w-6 h-6" />
        </button>

        {/* Left: Cover Side */}
        <div className="hidden md:block w-1/3 max-w-sm relative border-r border-gray-800 bg-void">
          {/* Fallback to generic cover style if no ID matches 1-3 */}
          <BookCover book={book} className="w-full h-full opacity-90" />
          <div className="absolute inset-0 bg-gradient-to-t from-void via-void/20 to-transparent" />
          
          <div className="absolute bottom-10 left-8 right-8 z-20">
             <div className="w-12 h-1 bg-crimson mb-6" />
             <span className="text-gold font-cinzel text-xs tracking-[0.2em] uppercase mb-2 block">
                Reading Now
             </span>
             <h3 className="text-white font-cinzel text-3xl font-bold leading-tight">
                {book.title}
             </h3>
             <p className="text-gray-400 font-montserrat text-xs mt-4 leading-relaxed">
                {book.description}
             </p>
          </div>
        </div>

        {/* Right: Content Side */}
        <div className="flex-1 flex flex-col bg-void relative">
          
          {/* Header */}
          <div className="px-8 py-6 border-b border-gray-800 bg-void/95 backdrop-blur-sm z-30 flex items-center justify-between sticky top-0">
            <div>
              <span className="text-crimson font-cinzel text-xs tracking-[0.3em] uppercase block mb-1">
                Grimoire Entry
              </span>
              <h2 className="text-xl md:text-2xl font-cinzel text-gray-200">
                {book.subtitle}
              </h2>
            </div>
            {/* Mobile Title */}
            <div className="md:hidden text-right pr-8">
               <span className="text-gold text-xs font-cinzel truncate block max-w-[150px]">{book.title}</span>
            </div>
          </div>

          {/* Body Container */}
          <div className="flex flex-1 overflow-hidden relative">
            
            {/* Chapter Navigation (Sidebar) */}
            <div className="hidden lg:block w-72 border-r border-gray-800 bg-[#080808] overflow-y-auto custom-scrollbar">
              <div className="p-6 sticky top-0 bg-[#080808] z-10 border-b border-gray-900 mb-2">
                <h4 className="text-gray-500 font-cinzel text-xs uppercase tracking-wider flex items-center gap-2">
                  <Bookmark className="w-3 h-3 text-crimson" /> Table of Contents
                </h4>
              </div>
              <div className="px-4 pb-6 space-y-1">
                {book.chapters.map((chapter, idx) => (
                  <button
                    key={chapter.id}
                    onClick={() => scrollToChapter(chapter.id)}
                    className="w-full text-left p-3 rounded-sm transition-all duration-300 group hover:bg-gray-900 border-l-2 border-transparent hover:border-crimson"
                  >
                    <span className="block text-gray-600 text-[10px] font-cinzel tracking-wider mb-1 group-hover:text-crimson transition-colors">
                      SECTION {idx + 1}
                    </span>
                    <span className="block text-gray-400 font-montserrat text-xs group-hover:text-gray-100 transition-colors line-clamp-2 leading-tight">
                      {chapter.title}
                    </span>
                  </button>
                ))}
              </div>
            </div>

            {/* Scrollable Text Content */}
            <div 
              ref={contentRef}
              className="flex-1 p-6 md:p-12 overflow-y-auto custom-scrollbar scroll-smooth bg-[url('https://www.transparenttextures.com/patterns/stardust.png')] bg-fixed"
            >
              {isLoading ? (
                <ContentSkeleton />
              ) : (
                <div className="max-w-3xl mx-auto animate-in fade-in slide-in-from-bottom-4 duration-700 fill-mode-forwards pb-24">
                  {/* Intro / Excerpt */}
                  <div className="mb-16 p-8 border border-gray-800 bg-gray-900/30 rounded-sm relative overflow-hidden">
                     <div className="absolute top-0 left-0 w-1 h-full bg-crimson" />
                     <Feather className="w-5 h-5 text-gold mb-4" />
                     <p className="text-gray-300 font-serif text-lg italic leading-8">
                        "{book.excerpt}"
                     </p>
                  </div>

                  {/* Dynamic Chapters */}
                  <div className="space-y-24">
                    {book.chapters.map((chapter, idx) => (
                      <div key={chapter.id} id={chapter.id} className="scroll-mt-32 relative">
                        {/* Chapter Header */}
                        <div className="flex flex-col items-center text-center mb-10">
                          <span className="text-6xl font-cinzel text-gray-800/50 font-bold absolute -top-10 select-none">
                            {idx + 1}
                          </span>
                          <span className="text-crimson text-xs font-cinzel tracking-[0.4em] uppercase mb-3 relative z-10 bg-void px-4">
                            Section {idx + 1}
                          </span>
                          <h3 className="text-2xl md:text-3xl font-cinzel text-gold relative z-10 max-w-lg leading-tight">
                            {chapter.title}
                          </h3>
                          <div className="w-24 h-[1px] bg-gray-800 mt-6" />
                        </div>

                        {/* Content */}
                        <div className="prose prose-invert prose-lg max-w-none">
                          <p className="text-gray-300 font-montserrat leading-8 font-light text-justify">
                            <span className="float-left text-5xl font-cinzel text-crimson mr-3 mt-[-6px] leading-none">
                              {chapter.content.charAt(0)}
                            </span>
                            {chapter.content.slice(1)}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* End Marker */}
                  <div className="mt-32 mb-16 flex flex-col items-center opacity-50 gap-4">
                     <div className="w-[1px] h-12 bg-gradient-to-b from-gray-800 to-transparent" />
                     <div className="text-xs font-cinzel tracking-widest text-gray-600">END OF PREVIEW</div>
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Footer with Buy Button */}
          <div className="p-6 border-t border-gray-800 bg-[#050505] z-30 flex items-center justify-between shrink-0 shadow-[0_-10px_40px_rgba(0,0,0,0.8)]">
             <div className="hidden md:flex flex-col">
               <span className="text-xs font-cinzel text-gold tracking-widest uppercase">The Collection</span>
               <span className="text-[10px] font-montserrat text-gray-500">Support the Author</span>
             </div>
             <a 
               href={book.buyUrl || "#"} 
               target="_blank" 
               rel="noopener noreferrer"
               className="group relative px-8 py-3 bg-transparent border border-crimson/30 text-crimson font-cinzel font-bold text-sm tracking-[0.2em] hover:bg-crimson hover:text-white transition-all duration-500 ease-out flex items-center gap-3 overflow-hidden rounded-sm w-full md:w-auto justify-center shadow-[0_0_20px_rgba(138,28,28,0.1)] hover:shadow-[0_0_30px_rgba(138,28,28,0.4)]"
             >
               <span className="relative z-10 flex items-center gap-2">
                 ACQUIRE FULL VERSION <ExternalLink className="w-3 h-3 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 transition-transform duration-300" />
               </span>
               <div className="absolute inset-0 w-full h-full bg-crimson transform translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-out -z-0" />
             </a>
          </div>

        </div>
      </div>
    </div>
  );
};
