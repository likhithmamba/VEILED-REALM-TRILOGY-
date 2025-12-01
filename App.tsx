import React, { useState, useEffect } from 'react';
import { 
  X,
  Twitter,
  Instagram
} from 'lucide-react';
import { BOOKS, STARTER_PACK } from './constants';
import { Timeline } from './components/Timeline';
import { BookCover } from './components/BookCover';
import { BookGrid } from './components/BookGrid';
import { GrimoireModal } from './components/GrimoireModal';
import { AboutSection, LoreSection, CharacterSection, VaultSection, NewsletterSection, AuthorNoteSection } from './components/MarketingSections';
import { Hero } from './components/Hero';

// --- MAIN COMPONENT ---
export default function App() {
  const [email, setEmail] = useState("");
  const [formStatus, setFormStatus] = useState("idle");
  const [activeBook, setActiveBook] = useState(null);
  const [showStarterPack, setShowStarterPack] = useState(false);

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

  return (
    <div className="min-h-screen bg-gray-950 text-gray-200 font-body selection:bg-red-900 selection:text-white overflow-x-hidden relative">
      
      {/* Global Cinematic Grain Texture */}
      <div className="fixed inset-0 pointer-events-none z-[9999] opacity-[0.04] mix-blend-overlay bg-[url('https://www.transparenttextures.com/patterns/noise.png')]"></div>

      {/* --- 1. HERO SECTION --- */}
      <Hero />

      {/* --- 2. ABOUT IMPERIALX (Preface Content) --- */}
      <AboutSection />

      {/* --- 3. THE TRILOGY (Interactive Cards) --- */}
      <section id="books" className="py-32 px-6 bg-gradient-to-b from-gray-950 to-gray-900 relative">
        {/* Subtle Divider */}
        <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-red-900/30 to-transparent"></div>
        
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-24 animate-fade-in-up">
            <h2 className="text-5xl md:text-6xl font-fantasy text-gray-100 mb-4 drop-shadow-lg tracking-wide">The Trilogy</h2>
            <div className="w-24 h-1 bg-red-800 mx-auto rounded-full mb-6"></div>
            <p className="text-gray-400 max-w-2xl mx-auto text-lg font-light leading-relaxed">
              A story of rebellion, of love sharpened into a weapon, and of worlds rebuilt by choice instead of destiny.
            </p>
          </div>

          <BookGrid onBookSelect={setActiveBook} />
        </div>
      </section>

      {/* --- 4. LORE / UNIVERSE (The World Bible) --- */}
      <LoreSection />

      {/* --- 5. CHARACTER PROFILES --- */}
      <CharacterSection />

      {/* --- 6. TIMELINE (Modular Component) --- */}
      <Timeline />

      {/* --- 7. THE VAULT (Downloads) --- */}
      <VaultSection onOpenStarterPack={() => setShowStarterPack(true)} />

      {/* --- 8. NEWSLETTER --- */}
      <NewsletterSection />
      
      {/* --- 9. AUTHOR NOTE --- */}
      <AuthorNoteSection />

      {/* --- 10. FOOTER --- */}
      <footer className="py-16 bg-black border-t border-white/5 text-sm text-gray-500 font-sans relative z-10">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="text-center md:text-left">
            <h4 className="text-yellow-600 font-fantasy text-lg mb-2 tracking-widest opacity-80">IMPERIAL X</h4>
            <p className="font-light">© 2025 ImperialX — All rights reserved.</p>
          </div>
          
          <div className="flex gap-8">
            <a href="#" className="hover:text-red-600 transition-colors transform hover:scale-110 duration-300"><Twitter size={20} /></a>
            <a href="#" className="hover:text-red-600 transition-colors transform hover:scale-110 duration-300"><Instagram size={20} /></a>
          </div>

          <div className="text-center md:text-right">
            <a href="mailto:reach@imperialxfiction.com" className="hover:text-gray-300 transition-colors font-light">reach@imperialxfiction.com</a>
          </div>
        </div>
      </footer>

      {/* --- MODAL FOR SAMPLE CHAPTERS --- */}
      {activeBook && (
        <GrimoireModal book={activeBook} onClose={() => setActiveBook(null)} />
      )}

      {/* --- MODAL FOR STARTER PACK READER --- */}
      {showStarterPack && (
        <GrimoireModal book={STARTER_PACK} onClose={() => setShowStarterPack(false)} />
      )}

    </div>
  );
}