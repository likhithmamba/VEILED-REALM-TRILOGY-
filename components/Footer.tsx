import React from 'react';

export const Footer: React.FC = () => {
  return (
    <footer className="py-12 border-t border-gray-900 bg-black text-center relative z-10">
      <div className="flex flex-col items-center justify-center gap-4">
        <h3 className="font-cinzel text-2xl text-gray-700 tracking-[0.2em]">VEILED REALM</h3>
        <div className="flex gap-6 text-sm text-gray-500 font-montserrat">
          <a href="#" className="hover:text-crimson transition-colors">Privacy</a>
          <a href="#" className="hover:text-crimson transition-colors">Terms</a>
          <a href="#" className="hover:text-crimson transition-colors">Contact</a>
        </div>
        <p className="text-xs text-gray-800 mt-8 font-mono">
          © {new Date().getFullYear()} Veiled Realm Chronicles. All rights reserved.
        </p>
      </div>
    </footer>
  );
};