import React from 'react';
import {
  ArrowRight,
  BrainCircuit,
  Compass,
  FileText,
  Mic,
  RotateCw,
  Scale,
  Search,
  Sparkles,
  Volume2
} from 'lucide-react';
import { WORKFLOW_STEPS } from '../data/content';

interface HowItWorksProps {
  onGoToCheckout: () => void;
}

export const HowItWorks: React.FC<HowItWorksProps> = ({ onGoToCheckout }) => {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'Search':
        return <Search className="w-5 h-5 text-blue-700" />;
      case 'Scale':
        return <Scale className="w-5 h-5 text-blue-700" />;
      case 'Compass':
        return <Compass className="w-5 h-5 text-blue-700" />;
      case 'FileText':
        return <FileText className="w-5 h-5 text-blue-700" />;
      case 'BrainCircuit':
        return <BrainCircuit className="w-5 h-5 text-blue-700" />;
      case 'Mic':
        return <Mic className="w-5 h-5 text-blue-700" />;
      case 'RotateCw':
        return <RotateCw className="w-5 h-5 text-blue-700" />;
      default:
        return <Sparkles className="w-5 h-5 text-blue-700" />;
    }
  };

  return (
    <section id="como-funciona" className="py-14 sm:py-20 max-w-5xl mx-auto px-4 sm:px-6">
      {/* Header */}
      <div className="text-center max-w-2xl mx-auto mb-12">
        <span className="text-xs uppercase tracking-wider font-semibold text-blue-700 block mb-1">
          Metodología Paso a Paso
        </span>
        <h2 className="text-2xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
          Una vacante. Tu experiencia. Un sistema.
        </h2>
        <p className="mt-3 text-slate-600 text-sm sm:text-base">
          No es un curso teórico de 20 horas ni una lista pasiva de prompts. Es una guía operativa estructurada que ejecutas paso a paso con cada postulación real.
        </p>
      </div>

      {/* 7 Steps List */}
      <div className="space-y-4 mb-12">
        {WORKFLOW_STEPS.map((step) => {
          const isVoiceStep = step.number === 6;
          return (
            <div
              key={step.number}
              className={`p-5 sm:p-6 rounded-2xl border transition-all ${
                isVoiceStep
                  ? 'bg-blue-50/40 border-blue-300 ring-1 ring-blue-200'
                  : 'bg-white border-slate-200 hover:border-slate-300 shadow-2xs'
              }`}
            >
              <div className="flex flex-col sm:flex-row sm:items-start gap-4">
                {/* Step number badge & icon */}
                <div className="flex items-center gap-3 sm:flex-col sm:items-center sm:gap-2 flex-shrink-0">
                  <div
                    className={`w-10 h-10 rounded-xl flex items-center justify-center font-bold text-sm shadow-xs ${
                      isVoiceStep
                        ? 'bg-blue-600 text-white'
                        : 'bg-slate-900 text-white'
                    }`}
                  >
                    0{step.number}
                  </div>
                  <div className="hidden sm:block">
                    {getIcon(step.iconName)}
                  </div>
                </div>

                {/* Content */}
                <div className="flex-1">
                  <div className="flex flex-wrap items-center gap-2 mb-1.5">
                    <h3 className="text-base sm:text-lg font-bold text-slate-900">
                      {step.title}
                    </h3>
                    {step.highlight && (
                      <span
                        className={`text-[11px] font-semibold px-2 py-0.5 rounded-full ${
                          isVoiceStep
                            ? 'bg-blue-100 text-blue-800'
                            : 'bg-slate-100 text-slate-800'
                        }`}
                      >
                        {step.highlight}
                      </span>
                    )}
                  </div>

                  <p className="text-slate-800 text-sm font-semibold mb-1">
                    {step.description}
                  </p>
                  <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
                    {step.detail}
                  </p>

                  {/* Special callout inside step 7 showing the loop */}
                  {step.number === 7 && (
                    <div className="mt-3.5 inline-flex items-center gap-2 px-3 py-1.5 bg-slate-100 rounded-lg text-xs font-bold text-slate-800 border border-slate-200">
                      <RotateCw className="w-3.5 h-3.5 text-blue-700 animate-spin" style={{ animationDuration: '6s' }} />
                      <span>Ciclo de dominio: PRACTICA → FEEDBACK → MEJORA → PRACTICA</span>
                    </div>
                  )}

                  {/* Special audio simulation note inside step 6 */}
                  {isVoiceStep && (
                    <div className="mt-3.5 p-3 bg-white rounded-xl border border-blue-200 flex items-start gap-2.5 text-xs text-slate-700 shadow-2xs">
                      <Volume2 className="w-4 h-4 text-blue-600 flex-shrink-0 mt-0.5" />
                      <div>
                        <span className="font-semibold text-blue-950 block">Simulación auditiva realista</span>
                        Practicas en tu celular o computadora hablando directamente. El sistema instruye a ChatGPT para actuar como reclutador senior o hiring manager de la industria específica, evaluando dicción, claridad y profundidad técnica.
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* CTA right after workflow as requested */}
      <div className="text-center bg-slate-100 rounded-2xl p-6 border border-slate-200 max-w-xl mx-auto shadow-2xs">
        <span className="text-xs uppercase tracking-wider font-semibold text-slate-500 block mb-1">
          Acceso inmediato
        </span>
        <h3 className="text-base sm:text-lg font-bold text-slate-900 mb-3">
          Obtén la metodología completa lista para tu próxima postulación
        </h3>
        <a
          href="https://www.flow.cl/btn.php?token=vf9408fafdd00d6c2f8f3aa5a265e228af52cc9a"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center justify-center gap-2 px-6 py-3 text-sm sm:text-base font-bold text-white bg-blue-700 hover:bg-blue-800 rounded-xl shadow-sm transition-all cursor-pointer w-full sm:w-auto"
        >
          <span>Pagar con Flow — $19.990 CLP</span>
          <ArrowRight className="w-4 h-4" />
        </a>
        <span className="block mt-2 text-xs text-slate-500">
          Edición fundador • Incluye templates, prompts y guías
        </span>
      </div>
    </section>
  );
};
