import React from 'react';
import { ArrowRight, CheckCircle2, ShieldCheck, Users, Zap } from 'lucide-react';
import { WorkflowDiagram } from './WorkflowDiagram';

interface HeroProps {
  onGoToCheckout: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onGoToCheckout }) => {
  return (
    <section className="relative pt-8 pb-14 sm:pt-14 sm:pb-20 overflow-hidden">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        {/* Eyebrow badge */}
        <div className="flex justify-center mb-5">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50 border border-blue-200 text-blue-900 text-xs font-semibold tracking-wide">
            <span className="w-2 h-2 rounded-full bg-blue-600"></span>
            <span>Sistema IA de Postulación</span>
            <span className="text-blue-300 font-normal">|</span>
            <span className="text-blue-700 font-normal">Para profesionales con experiencia</span>
          </div>
        </div>

        {/* Main Headline */}
        <div className="text-center max-w-4xl mx-auto mb-6">
          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold text-slate-900 tracking-tight leading-[1.12]">
            De la oferta de trabajo a la{' '}
            <span className="text-slate-900 underline decoration-blue-400 decoration-wavy underline-offset-4">
              entrevista preparada
            </span>
            .
          </h1>
          <p className="mt-5 text-base sm:text-xl text-slate-600 leading-relaxed font-normal max-w-2xl mx-auto">
            Convierte una oferta de trabajo y tu experiencia profesional en una postulación mejor posicionada y una preparación de entrevista personalizada usando ChatGPT.
          </p>
        </div>

        {/* 3 Core negative-rule assurances */}
        <div className="flex flex-wrap items-center justify-center gap-y-2 gap-x-6 text-xs sm:text-sm text-slate-700 font-medium mb-8 max-w-2xl mx-auto">
          <div className="flex items-center gap-1.5">
            <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0" />
            <span>Sin depender de múltiples herramientas de IA</span>
          </div>
          <div className="flex items-center gap-1.5">
            <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0" />
            <span>Sin copiar respuestas genéricas</span>
          </div>
          <div className="flex items-center gap-1.5">
            <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0" />
            <span>Sin inventar experiencia que no tienes</span>
          </div>
        </div>

        {/* Conversion Action Card in Hero */}
        <div className="max-w-xl mx-auto bg-slate-900 text-white rounded-2xl p-5 sm:p-6 shadow-xl mb-12 border border-slate-800 text-center">
          <div className="flex items-baseline justify-center gap-2 mb-2">
            <span className="text-xs uppercase tracking-wider text-slate-400 font-semibold">Precio fundador:</span>
            <span className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">US$29</span>
            <span className="text-xs text-slate-400 font-medium">pago único</span>
          </div>

          <a
            id="hero-cta-button"
            href="https://www.flow.cl/btn.php?token=vf9408fafdd00d6c2f8f3aa5a265e228af52cc9a"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full mt-2 inline-flex items-center justify-center gap-2 px-6 py-3.5 sm:py-4 text-base sm:text-lg font-bold text-white bg-blue-600 hover:bg-blue-500 rounded-xl shadow-md transition-all transform active:scale-[0.99] cursor-pointer text-center"
          >
            <span>Pagar con Flow — US$29</span>
            <ArrowRight className="w-5 h-5 text-white" />
          </a>

          <div className="mt-3 flex items-center justify-center gap-2 text-xs text-slate-300">
            <Users className="w-3.5 h-3.5 text-amber-400" />
            <span className="font-semibold text-white">Primera edición limitada a 10 usuarios.</span>
            <span className="text-slate-400">(Solo 3 cupos restantes)</span>
          </div>
        </div>

        {/* Central Workflow Visual Schema */}
        <div className="w-full">
          <WorkflowDiagram />
        </div>
      </div>
    </section>
  );
};
