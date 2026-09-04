import React from 'react';
import { Mail, Shield } from 'lucide-react';
import { HitCounter } from './HitCounter';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-900 text-slate-400 py-12 border-t border-slate-800 text-xs">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 pb-8 border-b border-slate-800">
          <div>
            <div className="flex items-center gap-2 text-white font-bold text-base mb-1">
              <span className="w-6 h-6 rounded bg-blue-700 text-white flex items-center justify-center text-xs">
                IA
              </span>
              <span>Sistema IA de Postulación</span>
            </div>
            <p className="text-slate-400 text-xs">
              De la oferta de trabajo a la entrevista preparada. Para profesionales en Latinoamérica.
            </p>
          </div>

          <div className="flex items-center gap-6 text-slate-300">
            <div className="flex items-center gap-1.5">
              <Shield className="w-4 h-4 text-blue-400" />
              <span>Garantía 7 días</span>
            </div>
            <div className="flex items-center gap-1.5">
              <Mail className="w-4 h-4 text-slate-400" />
              <span>Soporte directo</span>
            </div>
          </div>
        </div>

        {/* Contador discreto FeedPulse */}
        <div className="py-6 border-b border-slate-800/80 flex justify-center">
          <HitCounter />
        </div>

        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-slate-500 text-[11px] leading-relaxed">
          <p>
            © {new Date().getFullYear()} Sistema IA de Postulación. Todos los derechos reservados.
          </p>
          <p className="text-slate-500 max-w-md text-center sm:text-right">
            Metodología independiente. No está afiliada ni respaldada por OpenAI ni ChatGPT. ChatGPT es marca registrada de OpenAI, LLC.
          </p>
        </div>
      </div>
    </footer>
  );
};
