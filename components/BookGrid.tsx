import React, { useEffect, useRef, useState } from 'react';
import { BookOpen, ShoppingBag } from 'lucide-react';
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
    <div ref={containerRef} className="grid grid-cols-1 md:grid-cols-3 gap-12 lg:gap-16 perspective-1000 max-w-7xl mx-auto px-4">
      {BOOKS.map((book, idx) => (
        <div 
          key={book.id}
          data-index={idx}
          className={`book-card group relative flex flex-col items-center transition-all duration-1000 cubic-bezier(0.2, 0.8, 0.2, 1) transform ${
            visible.includes(idx) 
              ? 'opacity-100 translate-y-0' 
              : 'opacity-0 translate-y-32'
          }`}
          style={{ transitionDelay: `${idx * 200}ms` }}
        >
          {/* 3D Card Container */}
          <div 
            className="relative w-full aspect-[2/3] max-w-[350px] mb-8 cursor-pointer transform transition-all duration-500 ease-out group-hover:-translate-y-6 group-hover:scale-105 group-hover:shadow-crimson rounded-sm overflow-hidden border border-gray-900 bg-[#0a0a0a]"
            onClick={() => onBookSelect(book)}
          >
            {/* Custom Book Cover Component */}
            <BookCover book={book} className="w-full h-full" />
            
            {/* Interaction Overlay */}
            <div className="absolute inset-0 bg-void/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center p-8 text-center backdrop-blur-[2px] z-50">
              
              <button 
                className="mb-6 px-6 py-3 border border-gold text-gold font-cinzel tracking-widest text-sm hover:bg-gold hover:text-black transition-colors duration-300 flex items-center gap-2 transform translate-y-4 group-hover:translate-y-0 transition-transform delay-100"
              >
                 <BookOpen className="w-4 h-4" /> READ SAMPLE
              </button>

              <p className="text-gray-300 font-montserrat text-xs italic translate-y-4 group-hover:translate-y-0 transition-transform delay-150 max-w-[80%]">
                "{book.excerpt.substring(0, 80)}..."
              </p>
            </div>
          </div>

          {/* Title Below */}
          <h3 className="text-xl font-cinzel text-gray-200 mt-2 text-center group-hover:text-crimson transition-colors duration-300">
            {book.title}
          </h3>
          <span className="text-xs font-montserrat text-gold tracking-widest uppercase mt-1">
            {book.subtitle}
          </span>
        </div>
      ))}
    </div>
  );
};