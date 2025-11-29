import React, { useState } from 'react';
import { Hero } from './components/Hero';
import { BookGrid } from './components/BookGrid';
import { Timeline } from './components/Timeline';
import { GrimoireModal } from './components/GrimoireModal';
import { Footer } from './components/Footer';
import { Book } from './types';

const App: React.FC = () => {
  const [selectedBook, setSelectedBook] = useState<Book | null>(null);

  const handleBookSelect = (book: Book) => {
    setSelectedBook(book);
  };

  const handleCloseModal = () => {
    setSelectedBook(null);
  };

  return (
    <div className="min-h-screen flex flex-col relative bg-void overflow-x-hidden">
      {/* Background Ambience */}
      <div className="fixed inset-0 pointer-events-none z-0">
        <div className="absolute top-[-20%] left-[-10%] w-[60%] h-[60%] bg-crimson/5 rounded-full blur-[150px]" />
        <div className="absolute top-[20%] right-[-20%] w-[50%] h-[50%] bg-shadow/10 rounded-full blur-[120px]" />
        <div className="absolute bottom-[-10%] left-[20%] w-[40%] h-[40%] bg-crimson/5 rounded-full blur-[130px]" />
      </div>

      <main className="relative z-10">
        <Hero />
        
        <div id="books" className="py-24 px-4 md:px-8 max-w-7xl mx-auto relative">
           <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1px] h-24 bg-gradient-to-b from-transparent via-gold/30 to-transparent" />
           
          <div className="text-center mb-20">
            <h2 className="text-3xl md:text-5xl font-cinzel text-white mb-4 tracking-[0.2em]">
              THE TRILOGY
            </h2>
            <p className="text-gray-500 font-montserrat text-sm uppercase tracking-widest max-w-lg mx-auto">
              Three books to bind the darkness
            </p>
          </div>
          <BookGrid onBookSelect={handleBookSelect} />
        </div>

        <div id="timeline" className="py-24 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-b from-void via-shadow/5 to-void pointer-events-none" />
          <div className="relative z-10">
            <div className="text-center mb-16 px-4">
              <h2 className="text-3xl md:text-4xl font-cinzel text-gray-200 mb-4 tracking-wider">
                CHRONICLES OF THE REALM
              </h2>
              <div className="w-16 h-1 bg-crimson mx-auto" />
            </div>
            <Timeline />
          </div>
        </div>
      </main>

      <Footer />

      {selectedBook && (
        <GrimoireModal book={selectedBook} onClose={handleCloseModal} />
      )}
    </div>
  );
};

export default App;