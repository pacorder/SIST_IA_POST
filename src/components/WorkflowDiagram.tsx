import React from 'react';
import { ArrowDown, ArrowRight, CheckCircle2, FileSpreadsheet, FileText, Mic, Sparkles, Target, Trophy } from 'lucide-react';

export const WorkflowDiagram: React.FC = () => {
  const steps = [
    { name: 'ANALIZAR', desc: 'Requisitos y keywords', icon: FileSpreadsheet },
    { name: 'POSICIONAR', desc: 'Fit y experiencia transferible', icon: Target },
    { name: 'ADAPTAR', desc: 'CV sin clichés genéricos', icon: FileText },
    { name: 'PREPARAR', desc: 'Vacante × CV × Gaps', icon: Sparkles },
    { name: 'PRACTICAR', desc: 'ChatGPT Voice en vivo', icon: Mic },
    { name: 'MEJORAR', desc: 'Feedback estructurado', icon: CheckCircle2 },
  ];

  return (
    <div className="w-full bg-white border border-slate-200 rounded-2xl p-4 sm:p-7 shadow-xs">
      <div className="text-center mb-6">
        <span className="text-[11px] uppercase tracking-wider font-semibold text-slate-500 block mb-1">
          Arquitectura del Sistema
        </span>
        <h4 className="text-base sm:text-lg font-bold text-slate-900">
          De inputs desordenados a una candidatura de alto impacto
        </h4>
      </div>

      {/* Input node */}
      <div className="flex flex-col items-center">
        <div className="w-full max-w-md bg-slate-50 border border-slate-200 rounded-xl p-3 sm:p-4 text-center shadow-xs">
          <span className="text-xs font-semibold text-slate-500 uppercase tracking-wider block mb-1">
            Punto de partida
          </span>
          <div className="flex items-center justify-center gap-2 font-bold text-slate-900 text-sm sm:text-base">
            <span className="px-2.5 py-1 bg-white rounded-md border border-slate-200">Oferta de trabajo</span>
            <span className="text-slate-400 font-normal">+</span>
            <span className="px-2.5 py-1 bg-white rounded-md border border-slate-200">Tu CV actual</span>
          </div>
        </div>

        {/* Down Arrow */}
        <div className="py-2 text-slate-400">
          <ArrowDown className="w-5 h-5 animate-bounce" />
        </div>

        {/* Workflow Chain */}
        <div className="w-full grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-2.5 sm:gap-3 my-1">
          {steps.map((step, idx) => {
            const Icon = step.icon;
            return (
              <div
                key={step.name}
                className="relative flex flex-col items-center p-3 rounded-xl bg-slate-50/80 border border-slate-200 text-center hover:bg-white hover:border-blue-300 transition-colors shadow-2xs"
              >
                <div className="w-7 h-7 rounded-lg bg-blue-700 text-white flex items-center justify-center text-xs font-bold mb-2 shadow-xs">
                  {idx + 1}
                </div>
                <div className="flex items-center gap-1 font-bold text-slate-900 text-xs sm:text-sm tracking-tight mb-0.5">
                  <Icon className="w-3.5 h-3.5 text-blue-700 hidden xs:inline" />
                  <span>{step.name}</span>
                </div>
                <span className="text-[11px] text-slate-500 leading-tight">
                  {step.desc}
                </span>

                {/* Arrow connector between steps on lg screens */}
                {idx < steps.length - 1 && (
                  <div className="hidden lg:block absolute -right-2 top-1/2 -translate-y-1/2 z-10 text-slate-400">
                    <ArrowRight className="w-3.5 h-3.5" />
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Down Arrow */}
        <div className="py-2 text-slate-400">
          <ArrowDown className="w-5 h-5" />
        </div>

        {/* Result node */}
        <div className="w-full max-w-md bg-slate-900 text-slate-100 rounded-xl p-3 sm:p-4 text-center shadow-md border border-slate-800">
          <div className="flex items-center justify-center gap-2 mb-0.5">
            <Trophy className="w-4 h-4 text-amber-400" />
            <span className="text-xs uppercase tracking-wider font-semibold text-slate-300">
              Resultado final garantizado
            </span>
          </div>
          <div className="text-base sm:text-lg font-bold text-white tracking-tight">
            Entrevista Preparada con Solvencia Real
          </div>
          <p className="text-xs text-slate-400 mt-1">
            Respuestas convincentes, historias STAR listas y defensas claras para tus gaps.
          </p>
        </div>
      </div>
    </div>
  );
};
