import React, { useEffect, useRef, useState } from 'react';
import { BOOKS } from '../constants';
import { Book } from '../types';
import { BookCover } from './BookCover';

interface BookGridProps {
  onBookSelect: (book: Book) => void;
}

// 3D Tilt Card Component
const TiltCard = ({ children, onClick, className, delay }: { children: React.ReactNode, onClick: () => void, className?: string, delay: number }) => {
  const cardRef = useRef<HTMLDivElement>(null);
  const [rotation, setRotation] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Fade in animation
    const timer = setTimeout(() => setIsVisible(true), delay);
    return () => clearTimeout(timer);
  }, [delay]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;

    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    const rotateX = ((y - centerY) / centerY) * -10; // Max rotation deg
    const rotateY = ((x - centerX) / centerX) * 10;

    setRotation({ x: rotateX, y: rotateY });
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    setRotation({ x: 0, y: 0 });
  };

  return (
    <div 
      className={`transition-all duration-1000 ease-out transform ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-24'}`}
    >
      <div 
        ref={cardRef}
        className={`relative h-full perspective-1000 ${className}`}
        onMouseMove={(e) => { setIsHovered(true); handleMouseMove(e); }}
        onMouseLeave={handleMouseLeave}
        onClick={onClick}
        style={{
          transformStyle: 'preserve-3d',
          transform: isHovered 
            ? `perspective(1000px) rotateX(${rotation.x}deg) rotateY(${rotation.y}deg) scale3d(1.02, 1.02, 1.02)` 
            : 'perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)',
          transition: isHovered ? 'transform 0.1s ease-out' : 'transform 0.5s ease-out'
        }}
      >
        {children}
      </div>
    </div>
  );
};

export const BookGrid: React.FC<BookGridProps> = ({ onBookSelect }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-10 lg:gap-14 max-w-7xl mx-auto px-4 perspective-container">
      {BOOKS.map((book, idx) => (
        <TiltCard 
          key={book.id} 
          delay={idx * 150}
          onClick={() => onBookSelect(book)}
          className="cursor-pointer"
        >
          <div className="relative h-full flex flex-col p-8 rounded-sm border border-white/5 bg-white/[0.03] backdrop-blur-sm shadow-xl transition-colors duration-500 hover:bg-white/[0.06] hover:border-red-900/30 hover:shadow-[0_0_40px_rgba(153,27,27,0.15)] h-full">
            
            {/* Glossy Sheen Effect */}
            <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/5 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-500 pointer-events-none rounded-sm z-40" />

            {/* Cover Area */}
            <div className="relative w-full aspect-[2/3] mb-8 overflow-hidden rounded-sm shadow-2xl transition-shadow duration-500 transform-style-3d">
              <BookCover book={book} className="w-full h-full" />
            </div>

            <div className="flex-grow text-center transform-style-3d">
              <span className="text-red-500 text-[10px] font-bold uppercase tracking-[0.25em] mb-3 block transform translate-z-10">
                {book.subtitle}
              </span>
              <h3 className="text-xl font-cinzel text-white mb-4 hover:text-yellow-400 transition-colors duration-300 leading-snug">
                {book.title}
              </h3>
              <p className="text-sm text-gray-300 leading-relaxed font-normal line-clamp-4">
                {book.description}
              </p>
            </div>
          </div>
        </TiltCard>
      ))}
    </div>
  );
};