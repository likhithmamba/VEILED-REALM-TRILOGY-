import React from 'react';
import { Book } from '../types';

interface BookCoverProps {
  book: Book;
  className?: string;
}

export const BookCover: React.FC<BookCoverProps> = ({ book, className = "" }) => {
  // Shared texture overlay
  const TextureOverlay = () => (
    <div className="absolute inset-0 z-20 pointer-events-none mix-blend-overlay opacity-20">
      <div className="w-full h-full bg-[url('https://www.transparenttextures.com/patterns/stardust.png')]" />
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/30" />
    </div>
  );

  const renderCoverArt = () => {
    switch (book.id) {
      case 1: // Threads of the Forgotten - The Crimson Eye
        return (
          <div className="absolute inset-0 bg-[#050000] overflow-hidden">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_40%,_#500000_0%,_#000000_70%)]" />
            <div className="absolute top-[55%] left-1/2 -translate-x-1/2 -translate-y-1/2 w-[160%] h-[100%]">
              <svg viewBox="0 0 200 150" className="w-full h-full">
                <defs>
                  <radialGradient id="iris-sharp" cx="0.5" cy="0.5" r="0.5">
                    <stop offset="0%" stopColor="#ff0000" />
                    <stop offset="60%" stopColor="#600000" />
                    <stop offset="100%" stopColor="#000000" />
                  </radialGradient>
                </defs>
                <g opacity="0.9">
                  {[...Array(20)].map((_, i) => (
                    <path
                      key={i}
                      d={`M0,${75 + (i % 2 === 0 ? 15 : -15)} C60,${20 + i * 8} 140,${130 - i * 8} 200,${75 + (i % 2 === 0 ? 15 : -15)}`}
                      fill="none"
                      stroke={i % 3 === 0 ? "#8a1c1c" : "#4a0000"}
                      strokeWidth={i % 2 === 0 ? "0.5" : "1"}
                      opacity="0.7"
                    />
                  ))}
                </g>
                <circle cx="100" cy="75" r="30" fill="url(#iris-sharp)" stroke="#200" strokeWidth="0.5" />
                <path d="M100,75 m-8,0 a8,8 0 1,0 16,0 a8,8 0 1,0 -16,0" fill="#000" />
                <path d="M100,75 L100,55" stroke="#000" strokeWidth="1" />
                <circle cx="94" cy="70" r="2" fill="white" opacity="0.9" />
              </svg>
            </div>
          </div>
        );

      case 2: // Echoes of the Eclipsed Oath - The Portal
        return (
          <div className="absolute inset-0 bg-black overflow-hidden">
            <div className="absolute inset-[-60%] animate-[spin_30s_linear_infinite] opacity-80">
              <div className="w-full h-full bg-[conic-gradient(from_0deg,_#000_0%,_#800_10%,_#f00_15%,_#800_20%,_#000_30%,_#000_100%)]" />
            </div>
            <div className="absolute top-[55%] left-1/2 -translate-x-1/2 -translate-y-1/2 flex items-center justify-center">
              <div className="relative w-16 h-48 bg-white overflow-hidden shadow-[0_0_30px_rgba(220,20,60,0.6)]">
                 <div className="absolute inset-0 bg-crimson mix-blend-multiply" />
                 <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black" />
                 <div className="absolute left-1/2 -translate-x-1/2 top-0 bottom-0 w-[1px] bg-white opacity-80" />
              </div>
              <div className="absolute w-40 h-40 border border-crimson rounded-full opacity-60" />
            </div>
          </div>
        );

      case 3: // The Dawn No One Predicted - Shattered Sphere
        return (
          <div className="absolute inset-0 bg-[#0a0a0a] overflow-hidden">
            <div className="absolute top-[55%] left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-red-900/30 blur-[60px]" />
            <div className="absolute top-[55%] left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-48">
              <svg viewBox="0 0 100 100" className="w-full h-full drop-shadow-2xl">
                <defs>
                   <linearGradient id="magma" x1="0" y1="0" x2="1" y2="1">
                      <stop offset="0%" stopColor="#ffff00" />
                      <stop offset="50%" stopColor="#ff0000" />
                      <stop offset="100%" stopColor="#550000" />
                   </linearGradient>
                </defs>
                <circle cx="50" cy="50" r="44" fill="url(#magma)" />
                <g fill="#111" stroke="#000" strokeWidth="0.5">
                   <path d="M5,50 A45,45 0 0,1 50,5 L50,45 L40,55 L15,55 Z" />
                   <path d="M55,5 A45,45 0 0,1 95,50 L60,55 L55,45 Z" />
                   <path d="M95,55 A45,45 0 0,1 50,95 L55,60 L70,55 Z" />
                   <path d="M45,95 A45,45 0 0,1 5,55 L35,60 L45,55 Z" />
                </g>
                <path d="M40,55 L60,45" stroke="#fff" strokeWidth="1" strokeLinecap="round" opacity="0.8" />
              </svg>
            </div>
          </div>
        );
        
      default:
        return null;
    }
  };

  return (
    <div className={`relative w-full h-full bg-[#080808] shadow-2xl overflow-hidden group ${className}`}>
      {renderCoverArt()}
      <TextureOverlay />

      <div className="absolute top-0 w-full pt-10 pb-4 flex flex-col items-center z-30 pointer-events-none">
        <h1 className="font-cinzel font-bold text-2xl text-[#d4af37] drop-shadow-[0_1px_3px_rgba(0,0,0,0.8)] tracking-[0.15em] scale-y-90 opacity-95">
          VEILED REALM
        </h1>
        <div className="mt-1 px-4 border-b border-crimson/0 group-hover:border-crimson/80 transition-all duration-700 pb-1">
          <h2 className="font-cinzel text-gray-200 text-[10px] font-medium tracking-[0.2em] uppercase text-center drop-shadow-md">
            {book.title}
          </h2>
        </div>
      </div>

      <div className="absolute bottom-6 w-full px-5 flex justify-between items-end z-30 pointer-events-none">
         <span className="font-montserrat text-gray-400 text-[10px] font-bold uppercase tracking-widest drop-shadow-md">
           Book {book.id === 1 ? 'I' : book.id === 2 ? 'II' : 'III'}
         </span>
         <div className="flex items-center gap-1">
            <span className="font-cinzel text-[9px] text-gray-400 tracking-[0.2em]">IMPERIAL</span>
            <span className="font-serif text-white text-xl font-bold italic leading-none text-shadow-sm">X</span>
         </div>
      </div>
      
      <div className="absolute inset-0 border border-white/10 z-40 pointer-events-none" />
    </div>
  );
};