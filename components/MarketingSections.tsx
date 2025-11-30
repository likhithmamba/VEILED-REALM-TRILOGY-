
import React, { useState, useEffect, useRef } from 'react';
import { ChevronDown, Download, Mail, User, BookOpen, Database, FileText, Lock, Sparkles, Zap } from 'lucide-react';
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

// 7. THE ARCHIVE (Vault Redesign - Premium Upgrade)
interface VaultSectionProps {
  onOpenStarterPack?: () => void;
}

export const VaultSection: React.FC<VaultSectionProps> = ({ onOpenStarterPack }) => {
  const { elementRef, isVisible } = useScrollObserver();

  return (
    <section ref={elementRef} className="relative py-40 px-6 bg-[#030005] overflow-hidden border-t border-white/5">
      {/* Dynamic Lighting Background */}
      <div className="absolute inset-0 z-0 bg-[radial-gradient(circle_at_20%_20%,_rgba(45,27,78,0.15)_0%,_transparent_50%)]" />
      <div className="absolute inset-0 z-0 bg-[radial-gradient(circle_at_80%_80%,_rgba(138,28,28,0.1)_0%,_transparent_50%)]" />
      <div className="absolute inset-0 z-0 opacity-[0.03]" style={{ backgroundImage: 'linear-gradient(rgba(255, 255, 255, 0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255, 255, 255, 0.1) 1px, transparent 1px)', backgroundSize: '50px 50px' }} />
      
      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Header */}
        <div className={`flex flex-col items-center mb-24 transition-all duration-1000 ${isVisible ? 'opacity-100' : 'opacity-0 translate-y-10'}`}>
           <div className="flex items-center gap-3 mb-4">
             <div className="h-[1px] w-8 bg-crimson" />
             <span className="text-crimson font-mono text-xs tracking-[0.2em] font-bold">SECURE CONNECTION ESTABLISHED</span>
             <div className="h-[1px] w-8 bg-crimson" />
           </div>
           <h2 className="text-5xl md:text-7xl font-cinzel text-white mb-6 tracking-[0.1em] drop-shadow-[0_0_15px_rgba(255,255,255,0.1)]">THE ARCHIVE</h2>
           <p className="text-gray-400 uppercase tracking-[0.3em] text-xs md:text-sm">Knowledge is the first weapon</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          
          {/* Left: Artifact Visual - Holographic Projector */}
          <div className={`relative order-2 lg:order-1 transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-20'}`}>
             <div className="relative aspect-square max-w-md mx-auto perspective-1000">
                {/* Core Glow */}
                <div className="absolute inset-0 bg-gold/5 blur-[100px] rounded-full animate-pulse-slow" />
                
                {/* Rotating Rings */}
                <div className="absolute inset-0 border border-gold/10 rounded-full animate-spin-slow" style={{ animationDuration: '30s' }} />
                <div className="absolute inset-8 border border-dashed border-crimson/20 rounded-full animate-spin-slow" style={{ animationDirection: 'reverse', animationDuration: '20s' }} />
                <div className="absolute inset-16 border border-white/5 rounded-full animate-pulse" />

                {/* Central Datapad */}
                <div className="absolute inset-12 bg-gradient-to-br from-[#1a1a1a] to-black border border-white/10 rounded-sm flex flex-col items-center justify-center shadow-2xl backdrop-blur-xl group hover:border-gold/30 transition-colors duration-500">
                   <div className="relative mb-6">
                      <div className="absolute inset-0 bg-gold blur-2xl opacity-20" />
                      <Database className="w-20 h-20 text-gold relative z-10 opacity-90 group-hover:scale-110 transition-transform duration-500" />
                   </div>
                   
                   <div className="w-2/3 h-[1px] bg-gradient-to-r from-transparent via-white/20 to-transparent mb-6" />
                   
                   <div className="space-y-3 w-full px-8">
                      <div className="flex items-center justify-between text-[10px] font-mono text-gray-500 bg-white/5 p-2 rounded border border-white/5">
                         <span className="flex items-center gap-2"><Zap className="w-3 h-3 text-gold" /> STATUS</span>
                         <span className="text-green-500">ONLINE</span>
                      </div>
                      <div className="flex items-center justify-between text-[10px] font-mono text-gray-500 bg-white/5 p-2 rounded border border-white/5">
                         <span className="flex items-center gap-2"><Lock className="w-3 h-3 text-crimson" /> ENCRYPTION</span>
                         <span>AES-4096</span>
                      </div>
                   </div>
                </div>
             </div>
          </div>

          {/* Right: Premium Downloads */}
          <div className={`order-1 lg:order-2 space-y-10 transition-all duration-1000 delay-500 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-20'}`}>
             
             {/* Primary Card: Starter Pack */}
             <div 
                className="relative group cursor-pointer" 
                onClick={onOpenStarterPack}
             >
                {/* Hover Glow Effect */}
                <div className="absolute -inset-1 bg-gradient-to-r from-gold/20 via-crimson/20 to-gold/20 rounded-lg blur opacity-0 group-hover:opacity-70 transition duration-700" />
                
                <div className="relative bg-[#080808] border border-white/10 p-10 md:p-12 overflow-hidden rounded-sm transition-all duration-500 group-hover:border-gold/40 group-hover:shadow-[0_0_50px_rgba(212,175,55,0.1)]">
                   
                   {/* Scanning Line Animation */}
                   <div className="absolute top-0 left-0 w-full h-[2px] bg-gold/50 shadow-[0_0_15px_#d4af37] opacity-0 group-hover:opacity-100 animate-[scan_2s_linear_infinite]" />

                   <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-30 transition-opacity">
                      <BookOpen size={100} />
                   </div>

                   <div className="relative z-10">
                      <div className="flex justify-between items-start mb-6">
                         <div>
                            <span className="text-crimson font-mono text-[10px] tracking-widest mb-2 block">RECOMMENDED ENTRY POINT</span>
                            <h3 className="text-3xl md:text-4xl font-cinzel text-white group-hover:text-gold transition-colors text-shadow-sm">STARTER PACK</h3>
                         </div>
                      </div>
                      
                      <p className="text-gray-400 font-montserrat text-lg leading-relaxed mb-8 max-w-lg">
                         The first step into the Veiled Realm. Contains the full Prologues and first 5 Chapters of all three books.
                      </p>

                      <div className="flex flex-wrap gap-3 mb-10">
                         <span className="text-xs font-mono border border-white/10 px-3 py-1 text-gray-400 bg-white/5 rounded">PDF v1.4</span>
                         <span className="text-xs font-mono border border-white/10 px-3 py-1 text-gray-400 bg-white/5 rounded">2.4 MB</span>
                         <span className="text-xs font-mono border border-crimson/30 px-3 py-1 text-crimson bg-crimson/5 rounded flex items-center gap-2">
                            <Sparkles className="w-3 h-3" /> EXCLUSIVE CONTENT
                         </span>
                      </div>

                      <button className="w-full relative overflow-hidden group/btn bg-gradient-to-r from-[#d4af37] via-[#f3d97f] to-[#d4af37] text-black font-cinzel font-bold tracking-[0.2em] py-5 rounded-sm shadow-[0_0_20px_rgba(212,175,55,0.3)] hover:shadow-[0_0_30px_rgba(212,175,55,0.6)] transition-all duration-300">
                         <span className="relative z-10 flex items-center justify-center gap-3">
                            INITIATE DOWNLOAD <Download className="w-5 h-5" />
                         </span>
                         <div className="absolute inset-0 bg-white/30 translate-x-[-100%] group-hover/btn:translate-x-[100%] transition-transform duration-700 ease-in-out" />
                      </button>
                   </div>
                </div>
             </div>

             {/* Secondary Card: Assets */}
             <div className="grid grid-cols-2 gap-4">
                {DOWNLOADS.filter(d => !d.title.includes('Free Sample')).map(item => (
                   <div key={item.id} className="border border-white/5 p-6 bg-white/[0.02] hover:bg-white/[0.05] transition-colors group rounded-sm hover:border-crimson/30">
                      <div className="flex items-center justify-between mb-3">
                         <span className="text-gray-300 font-cinzel text-sm group-hover:text-white transition-colors">{item.title}</span>
                         <Download className="w-4 h-4 text-gray-600 group-hover:text-crimson transition-colors" />
                      </div>
                      <div className="w-full h-[1px] bg-white/5 mb-3" />
                      <div className="flex justify-between items-center text-[10px] text-gray-500 font-mono">
                         <span>{item.type}</span>
                         <span>{item.size}</span>
                      </div>
                   </div>
                ))}
             </div>

          </div>

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
