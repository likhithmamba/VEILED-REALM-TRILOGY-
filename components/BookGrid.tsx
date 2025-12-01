import React, { useEffect, useRef, useState } from 'react';
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
    <div ref={containerRef} className="grid grid-cols-1 md:grid-cols-3 gap-10 lg:gap-14 max-w-7xl mx-auto px-4">
      {BOOKS.map((book, idx) => (
        <div 
          key={book.id}
          data-index={idx}
          className={`book-card group relative flex flex-col transition-all duration-1000 ease-out transform ${
            visible.includes(idx) 
              ? 'opacity-100 translate-y-0' 
              : 'opacity-0 translate-y-24'
          }`}
          style={{ transitionDelay: `${idx * 150}ms` }}
        >
          <div className="relative h-full flex flex-col p-8 rounded-sm border border-white/5 bg-white/[0.03] backdrop-blur-sm hover:bg-white/[0.06] hover:border-red-900/30 hover:shadow-[0_0_40px_rgba(153,27,27,0.15)] transition-all duration-500 group-hover:-translate-y-2">
            
            {/* Cover Area */}
            <div 
              className="relative w-full aspect-[2/3] mb-8 overflow-hidden rounded-sm shadow-2xl cursor-pointer group-hover:shadow-[0_0_25px_rgba(0,0,0,0.7)] transition-shadow duration-500"
              onClick={() => onBookSelect(book)}
            >
              <BookCover book={book} className="w-full h-full transform group-hover:scale-105 transition-transform duration-700 ease-out" />
              
              {/* Subtle sheen overlay on hover */}
              <div className="absolute inset-0 bg-gradient-to-tr from-white/0 via-white/5 to-white/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
            </div>

            <div className="flex-grow text-center">
              <span className="text-red-500 text-[10px] font-bold uppercase tracking-[0.25em] mb-3 block">
                {book.subtitle}
              </span>
              <h3 className="text-xl font-cinzel text-white mb-4 group-hover:text-yellow-400 transition-colors duration-300 leading-snug">
                {book.title}
              </h3>
              <p className="text-sm text-gray-200 leading-relaxed font-normal line-clamp-4">
                {book.description}
              </p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};