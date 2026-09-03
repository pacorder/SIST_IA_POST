import React, { useEffect, useState } from 'react';
import { ArrowRight, Sparkles } from 'lucide-react';

interface StickyBottomBarProps {
  onGoToCheckout: () => void;
}

export const StickyBottomBar: React.FC<StickyBottomBarProps> = ({ onGoToCheckout }) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Show when scrolled down more than 450px and not yet at the absolute bottom
      if (window.scrollY > 450) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-0 inset-x-0 z-40 bg-white/95 backdrop-blur-md border-t border-slate-200 py-3 px-4 shadow-lg transition-all animate-in fade-in slide-in-from-bottom duration-300">
      <div className="max-w-5xl mx-auto flex items-center justify-between gap-3">
        <div className="flex items-center gap-2 sm:gap-3">
          <div className="hidden sm:flex w-7 h-7 rounded-lg bg-blue-700 text-white items-center justify-center text-xs font-bold">
            IA
          </div>
          <div>
            <div className="flex items-center gap-1.5 font-bold text-slate-900 text-xs sm:text-sm">
              <span>Edición Fundador</span>
              <span className="text-slate-400 font-normal">|</span>
              <span className="text-blue-700 font-extrabold text-sm sm:text-base">US$ 29</span>
            </div>
            <span className="text-[11px] text-slate-500 hidden xs:inline">
              Fase 1 limitada a 10 cupos (Solo 3 restantes)
            </span>
          </div>
        </div>

        <a
          id="sticky-checkout-button"
          href="https://www.flow.cl/btn.php?token=vf9408fafdd00d6c2f8f3aa5a265e228af52cc9a"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center justify-center gap-1.5 px-4 py-2 sm:px-5 sm:py-2.5 text-xs sm:text-sm font-bold text-white bg-blue-700 hover:bg-blue-800 rounded-lg shadow-sm transition-all cursor-pointer whitespace-nowrap"
        >
          <span>Pagar con Flow — US$29</span>
          <ArrowRight className="w-3.5 h-3.5" />
        </a>
      </div>
    </div>
  );
};
