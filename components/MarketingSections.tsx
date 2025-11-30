import React, { useState } from 'react';
import { ChevronDown, ChevronUp, Download, Mail, Sparkles, User, Sword, Scroll } from 'lucide-react';
import { BIO_TEXT, BIO_QUOTE, LORE_ITEMS, CHARACTERS, DOWNLOADS } from '../constants';

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
  const [openId, setOpenId] = useState<string | null>(null);

  return (
    <section className="py-24 px-4 bg-[#080808]">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-cinzel text-gold mb-2 tracking-[0.2em]">KNOWLEDGE OF THE VOID</h2>
          <div className="w-16 h-[1px] bg-crimson mx-auto" />
        </div>
        <div className="space-y-4">
          {LORE_ITEMS.map((item) => (
            <div key={item.id} className="border border-gray-900 bg-[#050505]">
              <button
                onClick={() => setOpenId(openId === item.id ? null : item.id)}
                className="w-full flex items-center justify-between p-6 text-left hover:bg-gray-900/50 transition-colors group"
              >
                <span className="text-xl font-cinzel text-gray-300 group-hover:text-crimson transition-colors">
                  {item.term}
                </span>
                {openId === item.id ? <ChevronUp className="text-gold" /> : <ChevronDown className="text-gray-600" />}
              </button>
              <div 
                className={`overflow-hidden transition-all duration-500 ease-in-out ${
                  openId === item.id ? 'max-h-40 opacity-100' : 'max-h-0 opacity-0'
                }`}
              >
                <div className="p-6 pt-0 text-gray-400 font-montserrat border-t border-gray-900/50">
                  {item.definition}
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
export const CharacterSection: React.FC = () => (
  <section className="py-24 px-4 max-w-7xl mx-auto">
    <div className="text-center mb-16">
      <h2 className="text-3xl font-cinzel text-white mb-2 tracking-[0.2em]">DRAMATIS PERSONAE</h2>
    </div>
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      {CHARACTERS.map((char) => (
        <div key={char.id} className="group relative border border-gray-800 bg-[#0a0a0a] p-8 hover:border-crimson/50 transition-all duration-500 hover:-translate-y-2">
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

// 7. THE VAULT (Downloads)
export const VaultSection: React.FC = () => (
  <section className="py-24 px-4 bg-gradient-to-b from-void to-[#0a0a0a]">
    <div className="max-w-4xl mx-auto text-center">
      <h2 className="text-3xl font-cinzel text-gold mb-12 tracking-[0.2em]">THE ARCHIVE</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {DOWNLOADS.map((item) => (
          <div key={item.id} className="border border-gray-800 p-8 flex flex-col items-center hover:bg-gray-900/30 transition-colors group">
            <Download className="w-8 h-8 text-gray-600 mb-4 group-hover:text-crimson group-hover:animate-bounce" />
            <h4 className="text-white font-cinzel mb-2">{item.title}</h4>
            <span className="text-xs text-gray-500 font-mono mb-6">{item.type} • {item.size}</span>
            <button className="px-6 py-2 border border-gray-700 text-xs font-cinzel text-gray-400 hover:text-white hover:border-white transition-all uppercase tracking-widest">
              Access File
            </button>
          </div>
        ))}
      </div>
      <div className="mt-16">
        <button className="px-10 py-4 bg-gold text-black font-cinzel font-bold tracking-widest hover:bg-white transition-colors animate-pulse-slow">
          DOWNLOAD STARTER PACK - FREE
        </button>
        <p className="mt-4 text-xs text-gray-600 font-montserrat uppercase">No Signup Required • Direct Link</p>
      </div>
    </div>
  </section>
);

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
      <Scroll className="w-8 h-8 text-gray-700 mx-auto mb-6" />
      <h3 className="text-sm font-cinzel text-gray-500 tracking-[0.3em] uppercase mb-6">Behind The Veil</h3>
      <p className="text-xl md:text-2xl font-serif text-gray-300 leading-relaxed italic">
        "Veiled Realm started as a question: 'What remains when the world insists you don’t exist?' Every story is a fragment of something I refused to forget."
      </p>
      <div className="mt-8 text-gold font-cinzel text-sm">— Imperial X</div>
    </div>
  </section>
);