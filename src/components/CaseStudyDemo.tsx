import React from 'react';
import { ArrowDown, Check, CheckCircle2, Quote, Sparkles, XCircle } from 'lucide-react';
import { CASE_STUDY } from '../data/content';

export const CaseStudyDemo: React.FC = () => {
  return (
    <section className="py-14 sm:py-20 bg-slate-100/70 border-y border-slate-200">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-10">
          <span className="text-xs uppercase tracking-wider font-semibold text-blue-700 block mb-1">
            Demostración en un caso real
          </span>
          <h2 className="text-2xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            De “no tengo experiencia directa” a una candidatura defendible
          </h2>
          <p className="mt-3 text-slate-600 text-sm sm:text-base">
            {CASE_STUDY.context}
          </p>
        </div>

        {/* Transformation Flow Cards */}
        <div className="space-y-4">
          {/* Card 1: ANTES */}
          <div className="bg-white rounded-2xl p-5 sm:p-6 border border-slate-200 shadow-2xs">
            <div className="flex items-center gap-2 mb-2">
              <span className="w-2.5 h-2.5 rounded-full bg-rose-500"></span>
              <span className="text-xs font-bold uppercase tracking-wider text-rose-700">
                {CASE_STUDY.before.tag}
              </span>
            </div>
            <div className="bg-rose-50/70 border border-rose-200/80 rounded-xl p-4 mb-2 text-rose-950 italic text-sm sm:text-base font-medium">
              {CASE_STUDY.before.quote}
            </div>
            <p className="text-xs sm:text-sm text-slate-600">
              <strong className="text-slate-800">Consecuencia:</strong> {CASE_STUDY.before.result}
            </p>
          </div>

          {/* Transition Icon */}
          <div className="flex justify-center text-slate-400 py-1">
            <ArrowDown className="w-5 h-5" />
          </div>

          {/* Card 2: ANÁLISIS IA */}
          <div className="bg-slate-900 text-white rounded-2xl p-5 sm:p-6 shadow-md border border-slate-800">
            <div className="flex items-center justify-between gap-2 mb-3">
              <div className="flex items-center gap-2">
                <Sparkles className="w-4 h-4 text-amber-400" />
                <span className="text-xs font-bold uppercase tracking-wider text-amber-300">
                  {CASE_STUDY.aiAnalysis.tag}
                </span>
              </div>
              <span className="text-[11px] font-mono text-slate-400 hidden sm:inline">
                {CASE_STUDY.aiAnalysis.formula}
              </span>
            </div>

            <p className="text-xs sm:text-sm text-slate-300 mb-4">
              El sistema analiza minuciosamente el CV del profesional de energías renovables y la descripción del nuevo puesto, extrayendo las competencias transferibles de alto calibre:
            </p>

            {/* 8 Identified Competencies Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
              {CASE_STUDY.aiAnalysis.competencies.map((comp, idx) => (
                <div
                  key={idx}
                  className="flex items-center gap-2 px-3 py-2 bg-slate-800/90 rounded-lg border border-slate-700/60 text-xs sm:text-sm text-slate-200"
                >
                  <Check className="w-3.5 h-3.5 text-emerald-400 flex-shrink-0" />
                  <span>{comp}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Transition Icon */}
          <div className="flex justify-center text-slate-400 py-1">
            <ArrowDown className="w-5 h-5" />
          </div>

          {/* Card 3: DESPUÉS */}
          <div className="bg-white rounded-2xl p-5 sm:p-6 border border-emerald-200 shadow-2xs">
            <div className="flex items-center gap-2 mb-2">
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-600"></span>
              <span className="text-xs font-bold uppercase tracking-wider text-emerald-800">
                {CASE_STUDY.after.tag}
              </span>
            </div>
            <div className="bg-emerald-50/70 border border-emerald-200/80 rounded-xl p-4 mb-2 text-emerald-950 text-sm sm:text-base font-semibold">
              {CASE_STUDY.after.quote}
            </div>
            <p className="text-xs sm:text-sm text-slate-600">
              <strong className="text-slate-800">Resultado:</strong> {CASE_STUDY.after.result}
            </p>
          </div>
        </div>

        {/* Important Core Takeaway Banner */}
        <div className="mt-8 bg-white rounded-2xl p-6 border-2 border-slate-900 shadow-sm text-center">
          <Quote className="w-6 h-6 text-blue-400 mx-auto mb-2" />
          <p className="text-base sm:text-xl font-bold text-slate-900 leading-snug">
            “La IA no inventa un candidato mejor. Ayuda a comunicar mejor la experiencia que realmente tienes.”
          </p>
          <span className="text-xs text-slate-500 mt-2 block font-medium">
            Principio rector del Sistema IA de Postulación
          </span>
        </div>
      </div>
    </section>
  );
};
