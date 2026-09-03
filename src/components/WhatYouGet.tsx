import React from 'react';
import { CheckCircle2, FileCode, Layers, ShieldCheck, Sparkles } from 'lucide-react';
import { WHAT_YOU_RECEIVE_ITEMS } from '../data/content';

export const WhatYouGet: React.FC = () => {
  return (
    <section className="py-14 sm:py-20 max-w-5xl mx-auto px-4 sm:px-6">
      <div className="text-center max-w-2xl mx-auto mb-12">
        <span className="text-xs uppercase tracking-wider font-semibold text-blue-700 block mb-1">
          Entregables Claros
        </span>
        <h2 className="text-2xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
          Qué recibes con el Sistema IA de Postulación
        </h2>
        <p className="mt-3 text-slate-600 text-sm sm:text-base">
          Un kit operativo diseñado para ser ejecutado con ChatGPT (versión gratuita o Plus), con templates listos y explicaciones en español neutro.
        </p>
      </div>

      {/* 11 Checklist Items */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-3.5 mb-10">
        {WHAT_YOU_RECEIVE_ITEMS.map((item, idx) => (
          <div
            key={idx}
            className="flex items-start gap-3.5 p-4 rounded-xl bg-white border border-slate-200/90 shadow-2xs hover:border-blue-300 transition-colors"
          >
            <CheckCircle2 className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
            <div className="flex-1">
              <span className="text-slate-900 font-semibold text-xs sm:text-sm block">
                {item.text}
              </span>
              <span className="inline-block mt-1 text-[10px] font-semibold uppercase tracking-wider px-2 py-0.5 rounded bg-blue-50 text-blue-700">
                {item.tag}
              </span>
            </div>
          </div>
        ))}
      </div>

      {/* Materials included box */}
      <div className="p-6 rounded-2xl bg-slate-100 border border-slate-200 text-slate-800 shadow-2xs">
        <div className="flex flex-col sm:flex-row items-center gap-4 text-center sm:text-left">
          <div className="w-12 h-12 rounded-xl bg-blue-700 text-white flex items-center justify-center flex-shrink-0 shadow-sm">
            <Layers className="w-6 h-6" />
          </div>
          <div className="flex-1">
            <h4 className="font-bold text-slate-900 text-sm sm:text-base">
              Todo empaquetado para ejecución directa
            </h4>
            <p className="text-xs sm:text-sm text-slate-600 mt-0.5">
              Incluye instrucciones paso a paso, prompts testeados, ejemplos reales de antes/después y templates listos para copiar y pegar en cada proceso de postulación.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
