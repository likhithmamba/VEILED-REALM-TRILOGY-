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

/* DEPENDENCIES: npm install lucide-react
   FONTS: Ensure 'Cinzel' and 'Montserrat' are imported in your index.css
*/

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

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) element.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-void text-mist font-body selection:bg-crimson selection:text-white overflow-x-hidden">
      
      {/* --- 1. HERO SECTION --- */}
      <Hero />

      {/* --- 2. ABOUT IMPERIALX (Preface Content) --- */}
      <AboutSection />

      {/* --- 3. THE TRILOGY (Interactive Cards) --- */}
      <section id="books" className="py-24 px-6 bg-[#080808]">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-fantasy text-white mb-6">The Trilogy</h2>
            {/* Source: [cite: 676] */}
            <p className="text-gray-400 max-w-2xl mx-auto text-lg">
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
        <GrimoireModal book={activeBook} onClose={() => setActiveBook(null)} />
      )}

      {/* --- MODAL FOR STARTER PACK READER --- */}
      {showStarterPack && (
        <GrimoireModal book={STARTER_PACK} onClose={() => setShowStarterPack(false)} />
      )}

    </div>
  );
}
