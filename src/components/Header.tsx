import React from 'react';
import { ArrowRight, ShieldCheck, Sparkles } from 'lucide-react';

interface HeaderProps {
  onGoToCheckout: () => void;
}

export const Header: React.FC<HeaderProps> = ({ onGoToCheckout }) => {
  return (
    <header className="sticky top-0 z-40 w-full bg-white/90 backdrop-blur-md border-b border-slate-200/80 transition-all">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between">
        {/* Brand / Logo */}
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 rounded-lg bg-blue-700 text-white flex items-center justify-center font-bold text-sm tracking-tight shadow-sm">
            IA
          </div>
          <div>
            <span className="font-bold text-slate-900 text-sm sm:text-base tracking-tight block leading-tight">
              Sistema IA de Postulación
            </span>
            <span className="text-[11px] text-slate-500 hidden sm:block font-medium">
              Metodología con ChatGPT para profesionales
            </span>
          </div>
        </div>

        {/* Founder Badge & Quick CTA */}
        <div className="flex items-center gap-2.5 sm:gap-4">
          <div className="hidden md:flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-blue-50 text-blue-700 border border-blue-200 text-xs font-medium">
            <span className="w-1.5 h-1.5 rounded-full bg-blue-600 animate-pulse"></span>
            Fase Fundador: Solo 10 cupos
          </div>

          <a
            id="header-cta-button"
            href="https://www.flow.cl/btn.php?token=vf9408fafdd00d6c2f8f3aa5a265e228af52cc9a"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-1.5 px-3.5 py-2 sm:px-4 sm:py-2 text-xs sm:text-sm font-semibold text-white bg-blue-700 hover:bg-blue-800 rounded-lg shadow-sm transition-colors cursor-pointer"
          >
            <span>Pagar $19.990 CLP</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </a>
        </div>
      </div>
    </header>
  );
};
