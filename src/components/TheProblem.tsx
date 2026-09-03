import React from 'react';
import { AlertCircle, HelpCircle, ArrowRight } from 'lucide-react';
import { THE_PROBLEM_QUESTIONS } from '../data/content';

interface TheProblemProps {
  onGoToCheckout: () => void;
}

export const TheProblem: React.FC<TheProblemProps> = ({ onGoToCheckout }) => {
  return (
    <section className="py-14 sm:py-20 bg-slate-100/70 border-y border-slate-200">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-10">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-rose-50 border border-rose-200 text-rose-800 text-xs font-semibold mb-3">
            <AlertCircle className="w-3.5 h-3.5 text-rose-600" />
            <span>El Desafío Real</span>
          </div>
          <h2 className="text-2xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            ChatGPT puede ayudarte a buscar trabajo. El problema es saber cómo usarlo.
          </h2>
          <p className="mt-4 text-sm sm:text-base text-slate-600 leading-relaxed">
            Muchos profesionales utilizan ChatGPT simplemente para redactar un CV o una carta de presentación estándar.
            Sin embargo, una postulación competitiva de nivel senior exige responder con exactitud a preguntas críticas:
          </p>
        </div>

        {/* Grid of the 8 critical questions */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 mb-10">
          {THE_PROBLEM_QUESTIONS.map((question, index) => (
            <div
              key={index}
              className="flex items-start gap-3 p-4 bg-white rounded-xl border border-slate-200 shadow-2xs hover:border-blue-300 transition-colors"
            >
              <div className="w-7 h-7 rounded-lg bg-blue-50 text-blue-700 font-bold flex items-center justify-center text-xs flex-shrink-0 mt-0.5 border border-blue-200">
                ?
              </div>
              <p className="text-slate-800 font-medium text-xs sm:text-sm leading-snug">
                {question}
              </p>
            </div>
          ))}
        </div>

        {/* Resolution Banner */}
        <div className="bg-slate-900 text-slate-100 rounded-2xl p-6 sm:p-8 text-center sm:text-left flex flex-col sm:flex-row items-center justify-between gap-5 border border-slate-800 shadow-md">
          <div className="max-w-xl">
            <span className="text-xs uppercase tracking-wider font-semibold text-blue-400 block mb-1">
              La solución
            </span>
            <h3 className="text-lg sm:text-xl font-bold text-white tracking-tight">
              El Sistema IA de Postulación organiza todo este proceso en un único workflow paso a paso.
            </h3>
            <p className="text-xs sm:text-sm text-slate-300 mt-1">
              Pasa de tener dudas paralizantes a tener un guion claro y defendible para cada conversación.
            </p>
          </div>

          <button
            onClick={onGoToCheckout}
            className="flex-shrink-0 inline-flex items-center gap-2 px-5 py-3 text-sm font-bold text-white bg-blue-600 hover:bg-blue-500 rounded-xl transition-all cursor-pointer shadow-xs whitespace-nowrap"
          >
            <span>Ver cómo acceder</span>
            <ArrowRight className="w-4 h-4 text-white" />
          </button>
        </div>
      </div>
    </section>
  );
};
