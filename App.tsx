import React, { useState } from 'react';
import { Hero } from './components/Hero';
import { BookGrid } from './components/BookGrid';
import { Timeline } from './components/Timeline';
import { GrimoireModal } from './components/GrimoireModal';
import { Footer } from './components/Footer';
import { 
  AboutSection, 
  LoreSection, 
  CharacterSection, 
  VaultSection, 
  NewsletterSection, 
  AuthorNoteSection 
} from './components/MarketingSections';
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
    <div className="min-h-screen flex flex-col relative bg-void overflow-x-hidden selection:bg-crimson selection:text-white">
      {/* 1. HERO */}
      <Hero />
      
      {/* 2. ABOUT IMPERIALX */}
      <AboutSection />

      {/* 3. THE TRILOGY */}
      <section id="books" className="py-24 relative">
         <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1px] h-24 bg-gradient-to-b from-transparent via-gold/30 to-transparent" />
         <div className="text-center mb-20 px-4">
           <h2 className="text-4xl md:text-6xl font-cinzel text-white mb-4 tracking-[0.1em]">
             THE TRILOGY
           </h2>
           <p className="text-gray-500 font-montserrat text-sm uppercase tracking-widest">
             Three books to bind the darkness
           </p>
         </div>
         <BookGrid onBookSelect={handleBookSelect} />
      </section>

      {/* 4. LORE */}
      <LoreSection />

      {/* 5. CHARACTERS */}
      <CharacterSection />

      {/* 6. TIMELINE */}
      <section id="timeline" className="py-12 bg-[#050505]">
        <div className="text-center mb-10 px-4">
           <h2 className="text-3xl font-cinzel text-gray-200 mb-2 tracking-wider">CHRONICLES OF AGES</h2>
           <div className="w-12 h-1 bg-crimson mx-auto" />
        </div>
        <Timeline />
      </section>

      {/* 7. THE VAULT */}
      <VaultSection />

      {/* 8. NEWSLETTER */}
      <NewsletterSection />

      {/* 9. BEHIND THE VEIL */}
      <AuthorNoteSection />

      {/* 10. FOOTER */}
      <Footer />

      {/* Modal */}
      {selectedBook && (
        <GrimoireModal book={selectedBook} onClose={handleCloseModal} />
      )}
    </div>
  );
};

export default App;