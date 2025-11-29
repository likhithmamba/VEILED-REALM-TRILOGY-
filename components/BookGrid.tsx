import React, { useEffect, useRef, useState } from 'react';
import { BookOpen, ShoppingBag, ArrowRight } from 'lucide-react';
import { BOOKS } from '../constants';
import { Book } from '../types';
import { BookCover } from './BookCover';

interface BookGridProps {
  onBookSelect: (book: Book) => void;
}

export const BookGrid: React.FC<BookGridProps> = ({ onBookSelect }) => {
  const [visible, setVisible] = useState<number[]>([]);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = Number(entry.target.getAttribute('data-index'));
            setVisible((prev) => (prev.includes(index) ? prev : [...prev, index]));
          }
        });
      },
      { threshold: 0.1, rootMargin: '50px' }
    );

    const elements = containerRef.current?.querySelectorAll('.book-card');
    elements?.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <div ref={containerRef} className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12 perspective-1000">
      {BOOKS.map((book, idx) => (
        <div 
          key={book.id}
          data-index={idx}
          className={`book-card group relative flex flex-col items-center transition-all duration-1000 cubic-bezier(0.2, 0.8, 0.2, 1) transform ${
            visible.includes(idx) 
              ? 'opacity-100 translate-y-0 scale-100 blur-0' 
              : 'opacity-0 translate-y-32 scale-90 blur-sm'
          }`}
          style={{ transitionDelay: `${idx * 150}ms` }}
        >
          {/* Card Container */}
          <div 
            className="relative w-full aspect-[2/3] max-w-[350px] mb-8 cursor-default transform transition-all duration-500 group-hover:-translate-y-4 group-hover:scale-[1.03] group-hover:shadow-[0_25px_50px_-12px_rgba(138,28,28,0.5)] rounded-sm overflow-hidden border border-gray-900"
          >
            {/* Custom Book Cover Component */}
            <BookCover book={book} className="w-full h-full" />
            
            {/* Interaction Overlay */}
            <div className="absolute inset-0 bg-void/90 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-between p-8 text-center backdrop-blur-[4px] z-50">
              
              <div className="flex-1 flex flex-col items-center justify-center w-full">
                {/* Read Button */}
                <button 
                  onClick={() => onBookSelect(book)}
                  className="group/btn relative w-full px-6 py-4 bg-transparent border border-gray-600 hover:border-crimson text-white transition-all duration-300 flex items-center justify-center gap-3 overflow-hidden mb-4"
                >
                   <div className="absolute inset-0 bg-crimson translate-y-full group-hover/btn:translate-y-0 transition-transform duration-300 z-0" />
                   <BookOpen className="w-5 h-5 relative z-10" />
                   <span className="font-cinzel text-xs tracking-widest uppercase relative z-10">Read Sample</span>
                </button>

                <p className="text-gray-400 font-montserrat text-xs italic opacity-0 group-hover:translate-y-0 translate-y-4 transition-all duration-500 delay-100">
                  "Dive into the abyss..."
                </p>
              </div>

              {/* Buy Button - Animated Slide Up */}
              <a 
                href={book.buyUrl}
                target="_blank"
                rel="noreferrer"
                className="w-full translate-y-8 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500 delay-200"
              >
                 <div className="border-t border-gray-800 pt-6 mt-2 w-full">
                    <button className="w-full flex items-center justify-between text-gold hover:text-white transition-colors group/buy">
                       <div className="flex flex-col items-start">
                         <span className="text-[10px] font-cinzel tracking-widest uppercase text-gray-500 group-hover/buy:text-crimson transition-colors">Own the Legend</span>
                         <span className="text-sm font-bold font-cinzel">CLAIM TOME</span>
                       </div>
                       <div className="w-10 h-10 rounded-full border border-gray-800 group-hover/buy:border-gold flex items-center justify-center transition-colors">
                          <ShoppingBag className="w-4 h-4" />
                       </div>
                    </button>
                 </div>
              </a>

            </div>
          </div>
        </div>
      ))}
    </div>
  );
};