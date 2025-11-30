import React, { useState, useEffect, useRef } from 'react';
import { ChevronDown, Download, Mail, User, BookOpen } from 'lucide-react';
import { BIO_TEXT, BIO_QUOTE, LORE_ITEMS, CHARACTERS, DOWNLOADS } from '../constants';

// Helper Hook for Scroll Animations
const useScrollObserver = () => {
  const [isVisible, setIsVisible] = useState(false);
  const elementRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect(); // Only animate once
        }
      },
      { threshold: 0.1, rootMargin: '50px' }
    );

    if (elementRef.current) {
      observer.observe(elementRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return { elementRef, isVisible };
};

// 2. ABOUT IMPERIALX
export const AboutSection: React.FC = () => (
  <section className="py-24 px-4 max-w-5xl mx-auto flex flex-col md:flex-row items-center gap-12">
    <div className="md:w-1/2 relative group">
      <div className="absolute inset-0 bg-crimson blur-[80px] opacity-20 group-hover:opacity-30 transition-opacity duration-1000" />
      <div className="relative border border-gray-800 p-8 bg-void/50 backdrop-blur-sm">
        <h3 className="text-gold font-cinzel text-sm tracking-widest uppercase mb-4">The Architect</h3>
        <h2 className="text-4xl font-cinzel text-white mb-6">IMPERIAL X</h2>
        <p className="text-gray-400 font-montserrat leading-loose text-lg">
          {BIO_TEXT}
        </p>
      </div>
    </div>
    <div className="md:w-1/2 text-center md:text-left">
      <blockquote className="text-2xl font-cinzel text-crimson italic leading-normal border-l-4 border-gold pl-6 py-2">
        "{BIO_QUOTE}"
      </blockquote>
    </div>
  </section>
);

// 4. LORE (Interactive Accordion)
export const LoreSection: React.FC = () => {
  const { elementRef, isVisible } = useScrollObserver();
  const [openId, setOpenId] = useState<string | null>(null);

  return (
    <section ref={elementRef} className="py-32 px-4 bg-[#050505] relative overflow-hidden border-t border-white/5 flex flex-col items-center">
      {/* Background Decor */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-4xl h-full bg-gradient-to-b from-void via-shadow/5 to-void opacity-50" />
      </div>

      <div className="max-w-3xl w-full relative z-10">
        <div className={`text-center mb-16 transition-all duration-700 transform ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h2 className="text-4xl font-cinzel text-gold mb-3 tracking-[0.2em] drop-shadow-md">GLOSSARY OF THE REALM</h2>
          <p className="text-gray-500 font-montserrat text-sm uppercase tracking-widest">Truths the Veil tried to erase</p>
          <div className="w-24 h-[1px] bg-gradient-to-r from-transparent via-crimson to-transparent mx-auto mt-6" />
        </div>

        <div className="space-y-4">
          {LORE_ITEMS.map((item, index) => (
            <div 
              key={item.id} 
              className={`
                group relative border bg-[#0a0a0a] transition-all duration-500 transform overflow-hidden
                ${openId === item.id ? 'border-crimson/50 shadow-[0_0_20px_rgba(138,28,28,0.15)] bg-[#0f0f0f]' : 'border-white/5 hover:border-gold/30'}
                ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}
              `}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              {/* Active Glow */}
              <div className={`absolute inset-0 bg-gradient-to-r from-crimson/5 to-transparent transition-opacity duration-500 pointer-events-none ${openId === item.id ? 'opacity-100' : 'opacity-0'}`} />

              <button
                onClick={() => setOpenId(openId === item.id ? null : item.id)}
                className="w-full flex items-center justify-between p-6 text-left relative z-10"
              >
                <span className={`text-lg font-cinzel tracking-wide transition-colors duration-300 ${openId === item.id ? 'text-gold' : 'text-gray-300 group-hover:text-white'}`}>
                  {item.term}
                </span>
                <span className={`transition-transform duration-500 ${openId === item.id ? 'rotate-180 text-crimson' : 'text-gray-600 group-hover:text-gold'}`}>
                  <ChevronDown />
                </span>
              </button>

              <div 
                className={`overflow-hidden transition-all duration-500 ease-in-out ${
                  openId === item.id ? 'max-h-48 opacity-100' : 'max-h-0 opacity-0'
                }`}
              >
                <div className="p-6 pt-0 text-gray-400 font-montserrat leading-relaxed text-sm md:text-base border-t border-white/5 mx-6">
                  <div className="pt-4">{item.definition}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

// 5. CHARACTERS (Grid)
export const CharacterSection: React.FC = () => {
  const { elementRef, isVisible } = useScrollObserver();

  return (
    <section ref={elementRef} className="py-24 px-4 max-w-7xl mx-auto">
      <div className={`text-center mb-16 transition-all duration-700 transform ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
        <h2 className="text-3xl font-cinzel text-white mb-2 tracking-[0.2em]">DRAMATIS PERSONAE</h2>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {CHARACTERS.map((char, index) => (
          <div 
            key={char.id} 
            className={`group relative border border-gray-800 bg-[#0a0a0a] p-8 hover:border-crimson/50 transition-all duration-700 hover:-translate-y-2 transform ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
            style={{ transitionDelay: `${index * 150}ms` }}
          >
            <div className="absolute inset-0 bg-gradient-to-b from-transparent to-crimson/5 opacity-0 group-hover:opacity-100 transition-opacity" />
            <div className="relative z-10 text-center">
              <div className="w-16 h-16 mx-auto mb-6 bg-gray-900 rounded-full flex items-center justify-center border border-gray-800 group-hover:border-gold transition-colors">
                <User className="w-6 h-6 text-gray-500 group-hover:text-gold" />
              </div>
              <h3 className="text-xl font-cinzel text-white mb-2">{char.name}</h3>
              <span className="text-xs font-montserrat text-crimson tracking-widest uppercase block mb-6">{char.role}</span>
              <p className="text-gray-400 text-sm italic font-serif">"{char.quote}"</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

// 7. THE VAULT (Downloads)
interface VaultSectionProps {
  onOpenStarterPack?: () => void;
}

export const VaultSection: React.FC<VaultSectionProps> = ({ onOpenStarterPack }) => {
  const { elementRef, isVisible } = useScrollObserver();

  return (
    <section ref={elementRef} className="py-32 px-4 bg-gradient-to-b from-void to-[#0a0a0a] border-t border-white/5">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className={`text-4xl font-cinzel text-gold mb-4 tracking-[0.2em] transition-all duration-700 transform ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          THE ARCHIVE
        </h2>
        <p className="text-gray-500 mb-16 uppercase tracking-widest text-xs">Knowledge is the only currency here</p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {DOWNLOADS.map((item, index) => (
            <div 
              key={item.id} 
              className={`
                relative border border-gray-800 p-10 flex flex-col items-center bg-[#080808] hover:bg-[#0c0c0c] transition-all duration-500 group transform 
                ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}
                hover:border-gold/30 hover:shadow-[0_0_30px_rgba(212,175,55,0.05)]
              `}
              style={{ transitionDelay: `${index * 200}ms` }}
            >
              <Download className="w-10 h-10 text-gray-700 mb-6 group-hover:text-gold group-hover:animate-bounce transition-colors" />
              <h4 className="text-white font-cinzel text-xl mb-2">{item.title}</h4>
              <span className="text-xs text-gray-500 font-mono mb-8 border px-2 py-1 border-gray-800 rounded">{item.type} • {item.size}</span>
              
              <button 
                onClick={item.title.includes('Free Sample') && onOpenStarterPack ? onOpenStarterPack : undefined}
                className="w-full py-4 border border-gray-800 text-xs font-cinzel text-gray-400 hover:text-white hover:border-gold hover:bg-gold/10 transition-all uppercase tracking-[0.2em] font-bold"
              >
                Access File
              </button>
            </div>
          ))}
        </div>
        
        <div className={`mt-20 transition-all duration-1000 delay-700 transform ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <button 
            onClick={onOpenStarterPack}
            className="px-12 py-5 bg-gold text-black font-cinzel font-bold tracking-[0.2em] hover:bg-white transition-colors shadow-[0_0_20px_rgba(212,175,55,0.4)] hover:shadow-[0_0_40px_rgba(255,255,255,0.6)]"
          >
            DOWNLOAD STARTER PACK - FREE
          </button>
          <p className="mt-6 text-xs text-gray-600 font-montserrat uppercase tracking-wider">No Signup Required • Direct Link</p>
        </div>
      </div>
    </section>
  );
};

// 8. NEWSLETTER
export const NewsletterSection: React.FC = () => (
  <section id="newsletter" className="py-24 px-4 relative overflow-hidden">
    <div className="absolute inset-0 bg-crimson/5" />
    <div className="max-w-3xl mx-auto text-center relative z-10">
      <Mail className="w-12 h-12 text-gold mx-auto mb-6 opacity-80" />
      <h2 className="text-4xl font-cinzel text-white mb-6">JOIN THE REALM</h2>
      <p className="text-gray-400 font-montserrat mb-10 text-lg">
        The Veil whispers only to those who remember. Subscribe for lore drops and hidden codes.
      </p>
      <form className="flex flex-col md:flex-row gap-4 max-w-lg mx-auto" onSubmit={(e) => e.preventDefault()}>
        <input 
          type="email" 
          placeholder="Enter your email..." 
          className="flex-1 bg-black border border-gray-800 px-6 py-4 text-white focus:outline-none focus:border-gold transition-colors font-montserrat"
        />
        <button className="bg-crimson text-white px-8 py-4 font-cinzel font-bold tracking-widest hover:bg-red-900 transition-colors shadow-glow">
          SUBSCRIBE
        </button>
      </form>
    </div>
  </section>
);

// 9. BEHIND THE VEIL (Author Note)
export const AuthorNoteSection: React.FC = () => (
  <section className="py-24 px-4 bg-void border-t border-gray-900">
    <div className="max-w-3xl mx-auto text-center">
      <div className="w-12 h-1 bg-gray-800 mx-auto mb-8" />
      <h3 className="text-sm font-cinzel text-gray-500 tracking-[0.3em] uppercase mb-6">Behind The Veil</h3>
      <p className="text-xl md:text-2xl font-serif text-gray-300 leading-relaxed italic">
        "Veiled Realm started as a question: 'What remains when the world insists you don’t exist?' Every story is a fragment of something I refused to forget."
      </p>
      <div className="mt-8 text-gold font-cinzel text-sm tracking-widest">— Imperial X</div>
    </div>
  </section>
);
