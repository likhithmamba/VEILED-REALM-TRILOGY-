import React, { useState, useEffect } from 'react';
import { 
  BookOpen, 
  Feather, 
  Scroll, 
  Map, 
  Download, 
  Mail, 
  ChevronDown, 
  Sparkles, 
  X,
  Twitter,
  Instagram,
  Eye,
  ShieldAlert,
  Swords
} from 'lucide-react';
import { BOOKS, CHARACTERS, LORE_ITEMS, DOWNLOADS, BIO_TEXT, BIO_QUOTE } from './constants';
import { Timeline } from './components/Timeline';
import { BookCover } from './components/BookCover';
import { AboutSection, LoreSection, CharacterSection, VaultSection, NewsletterSection, AuthorNoteSection } from './components/MarketingSections';

/* DEPENDENCIES: npm install lucide-react
   FONTS: Ensure 'Cinzel' and 'Montserrat' are imported in your index.css
*/

// --- MAIN COMPONENT ---
export default function App() {
  const [email, setEmail] = useState("");
  const [formStatus, setFormStatus] = useState("idle");
  const [activeBook, setActiveBook] = useState(null);

  // SEO: Title update
  useEffect(() => {
    document.title = "Veiled Realm Trilogy | ImperialX";
  }, []);

  const handleSubscribe = (e) => {
    e.preventDefault();
    setFormStatus("loading");
    setTimeout(() => {
      setFormStatus("success");
      setEmail("");
    }, 1500);
  };

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) element.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-void text-mist font-body selection:bg-crimson selection:text-white overflow-x-hidden">
      
      {/* --- 1. HERO SECTION --- */}
      <header className="relative h-screen flex flex-col items-center justify-center text-center px-6 overflow-hidden bg-cosmic-red bg-fixed bg-cover">
        <div className="absolute inset-0 bg-black/50 z-0"></div>
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/stardust.png')] opacity-20 pointer-events-none z-0"></div>
        
        <div className="relative z-10 max-w-5xl animate-fade-in-up">
          <span className="text-gold tracking-[0.4em] uppercase text-xs md:text-sm font-bold mb-6 block opacity-80">
            ImperialX Presents
          </span>
          <h1 className="text-6xl md:text-9xl font-fantasy text-transparent bg-clip-text bg-gradient-to-b from-white to-gray-400 mb-6 drop-shadow-[0_5px_15px_rgba(0,0,0,0.8)]">
            VEILED REALM
          </h1>
          <p className="text-xl md:text-2xl font-light text-gray-200 mb-10 max-w-3xl mx-auto leading-relaxed drop-shadow-md">
            A dark fantasy about truth, memory, and rebellion against the gods.
          </p>
          
          {/* Source:  */}
          <div className="border-l-4 border-crimson pl-6 py-2 my-10 max-w-xl mx-auto text-left bg-black/30 backdrop-blur-sm">
            <p className="italic text-gray-300 font-serif text-lg">
              “Every world ends twice — first in memory, then in belief.”
            </p>
          </div>

          <div className="flex flex-col md:flex-row gap-6 justify-center mt-12">
            <button 
              onClick={() => scrollToSection('trilogy')}
              className="px-10 py-4 bg-crimson border border-crimson text-white hover:bg-red-900 transition-all duration-300 font-fantasy tracking-wider uppercase shadow-[0_0_20px_rgba(138,28,28,0.4)]"
            >
              Read Sample Chapters
            </button>
            <button 
              onClick={() => scrollToSection('newsletter')}
              className="px-10 py-4 bg-transparent border border-gold text-gold hover:bg-gold hover:text-void transition-all duration-300 font-fantasy tracking-wider uppercase"
            >
              Join the Realm
            </button>
          </div>
        </div>
      </header>

      {/* --- 2. ABOUT IMPERIALX (Preface Content) --- */}
      <AboutSection />

      {/* --- 3. THE TRILOGY (Interactive Cards) --- */}
      <section id="trilogy" className="py-24 px-6 bg-[#080808]">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-fantasy text-white mb-6">The Trilogy</h2>
            {/* Source: [cite: 676] */}
            <p className="text-gray-400 max-w-2xl mx-auto text-lg">
              A story of rebellion, of love sharpened into a weapon, and of worlds rebuilt by choice instead of destiny.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {BOOKS.map((book) => (
              <div key={book.id} className="group relative p-8 border border-white/5 bg-gradient-to-b from-void to-black hover:border-crimson/50 hover:bg-[#0c0c0c] transition-all duration-500 flex flex-col">
                
                {/* Simulated Book Cover Area */}
                <div 
                  className="mb-8 h-[450px] flex flex-col items-center justify-center border border-white/10 group-hover:shadow-[0_0_50px_rgba(138,28,28,0.2)] transition-all duration-500 relative overflow-hidden bg-black cursor-pointer transform group-hover:-translate-y-2"
                  onClick={() => setActiveBook(book)}
                >
                   <BookCover book={book} className="w-full h-full" />
                   
                   {/* Hover Overlay - Subtle hint */}
                   <div className="absolute inset-0 bg-gradient-to-t from-crimson/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
                </div>

                <div className="flex-grow flex flex-col items-center text-center">
                  <h3 className="text-2xl font-fantasy text-white mb-2 group-hover:text-gold transition-colors">{book.title}</h3>
                  <div className="h-[1px] w-12 bg-crimson mb-4 opacity-50"></div>
                  
                  {/* Fixed Description - No truncation */}
                  <p className="text-sm text-gray-200 mb-8 leading-7 opacity-80 font-montserrat">
                    {book.description}
                  </p>
                  
                  <div className="mt-auto w-full">
                    <button 
                      onClick={() => setActiveBook(book)}
                      className="w-full py-4 border border-gold/30 text-gold uppercase tracking-[0.2em] text-xs font-bold hover:bg-gold hover:text-black hover:border-gold transition-all duration-300 shadow-[0_0_15px_rgba(0,0,0,0.5)] flex items-center justify-center gap-2 group-hover:shadow-[0_0_20px_rgba(212,175,55,0.1)]"
                    >
                      <BookOpen className="w-4 h-4" />
                      Read Excerpt
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* --- 4. LORE / UNIVERSE (The World Bible) --- */}
      <LoreSection />

      {/* --- 5. CHARACTER PROFILES --- */}
      <CharacterSection />

      {/* --- 6. TIMELINE (Modular Component) --- */}
      <Timeline />

      {/* --- 7. THE VAULT (Downloads) --- */}
      <VaultSection />

      {/* --- 8. NEWSLETTER --- */}
      <NewsletterSection />
      
      {/* --- 9. AUTHOR NOTE --- */}
      <AuthorNoteSection />

      {/* --- 10. FOOTER --- */}
      <footer className="py-12 bg-black border-t border-white/5 text-sm text-gray-600 font-sans">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="text-center md:text-left">
            <h4 className="text-gold font-fantasy text-lg mb-1 tracking-widest">IMPERIAL X</h4>
            <p>© 2025 ImperialX — All rights reserved.</p>
          </div>
          
          <div className="flex gap-8">
            <a href="#" className="hover:text-crimson transition-colors"><Twitter size={20} /></a>
            <a href="#" className="hover:text-crimson transition-colors"><Instagram size={20} /></a>
          </div>

          <div className="text-center md:text-right">
            <a href="mailto:reach@imperialxfiction.com" className="hover:text-white transition-colors">reach@imperialxfiction.com</a>
          </div>
        </div>
      </footer>

      {/* --- MODAL FOR SAMPLE CHAPTERS --- */}
      {activeBook && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          <div className="absolute inset-0 bg-black/95 backdrop-blur-sm" onClick={() => setActiveBook(null)}></div>
          <div className="relative z-10 w-full max-w-2xl bg-[#0f0f0f] border border-crimson/30 shadow-2xl h-[80vh] flex flex-col animate-fade-in">
            
            <div className="flex justify-between items-center p-6 border-b border-white/10 bg-[#0a0a0a]">
              <div>
                <span className="text-crimson text-xs uppercase tracking-widest font-bold">Excerpt</span>
                <h3 className="text-xl font-fantasy text-gold mt-1">{activeBook.title}</h3>
              </div>
              <button onClick={() => setActiveBook(null)} className="text-gray-500 hover:text-white transition-colors">
                <X size={24} />
              </button>
            </div>

            <div className="p-8 overflow-y-auto font-serif text-lg leading-loose text-gray-300 custom-scrollbar">
              <h4 className="text-center font-fantasy text-2xl text-white mb-8 border-b border-gray-800 pb-4">
                {activeBook.chapters[0]?.title || activeBook.sampleChapterTitle}
              </h4>
              <p className="first-letter:text-5xl first-letter:font-fantasy first-letter:text-crimson first-letter:float-left first-letter:mr-3 first-letter:mt-[-8px]">
                {activeBook.chapters[0]?.content || activeBook.sampleText}
              </p>
              <p className="mt-8 text-center text-gray-500 italic text-sm">
                [...Download the Starter Pack to continue reading...]
              </p>
            </div>

            <div className="p-6 border-t border-white/10 bg-[#0a0a0a] text-center">
              <button className="text-gold text-sm font-bold uppercase tracking-widest hover:text-white transition-colors">
                Get Full Book &rarr;
              </button>
            </div>
          </div>
        </div>
      )}

    </div>
  );
}