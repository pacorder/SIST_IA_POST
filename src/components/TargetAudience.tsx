import React from 'react';
import { Check, ShieldAlert, UserCheck, X } from 'lucide-react';
import { FOR_WHOM_ITEMS, NOT_ITEMS } from '../data/content';

export const TargetAudience: React.FC = () => {
  return (
    <section className="py-14 sm:py-20 bg-slate-100/70 border-t border-slate-200">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Column: Para Quién Es (7 cols) */}
          <div className="lg:col-span-7 bg-white p-6 sm:p-8 rounded-2xl border border-slate-200 shadow-2xs">
            <div className="flex items-center gap-2 mb-2">
              <div className="w-8 h-8 rounded-lg bg-blue-100 text-blue-800 flex items-center justify-center">
                <UserCheck className="w-4 h-4" />
              </div>
              <span className="text-xs uppercase tracking-wider font-bold text-blue-800">
                Alineación precisa
              </span>
            </div>

            <h3 className="text-xl sm:text-2xl font-extrabold text-slate-900 tracking-tight mb-2">
              ¿Para quién es este sistema?
            </h3>
            <p className="text-xs sm:text-sm text-slate-600 mb-6 leading-relaxed">
              Especialmente diseñado para profesionales con trayectoria en Latinoamérica (ingenieros, jefaturas, gerencias, consultores y especialistas) que:
            </p>

            <ul className="space-y-3">
              {FOR_WHOM_ITEMS.map((item, idx) => (
                <li key={idx} className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full bg-blue-100 text-blue-700 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Check className="w-3 h-3" />
                  </div>
                  <span className="text-slate-800 text-xs sm:text-sm font-medium leading-normal">
                    {item}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* Right Column: Qué NO Es (5 cols) */}
          <div className="lg:col-span-5 bg-white p-6 sm:p-8 rounded-2xl border border-slate-200 shadow-2xs">
            <div className="flex items-center gap-2 mb-2">
              <div className="w-8 h-8 rounded-lg bg-rose-100 text-rose-800 flex items-center justify-center">
                <ShieldAlert className="w-4 h-4" />
              </div>
              <span className="text-xs uppercase tracking-wider font-bold text-rose-800">
                Expectativas claras
              </span>
            </div>

            <h3 className="text-xl sm:text-2xl font-extrabold text-slate-900 tracking-tight mb-2">
              ¿Qué NO es este sistema?
            </h3>
            <p className="text-xs sm:text-sm text-slate-600 mb-6 leading-relaxed">
              Cero promesas vacías o atajos irrealistas que arriesguen tu reputación:
            </p>

            <div className="space-y-4">
              {NOT_ITEMS.map((item, idx) => (
                <div key={idx} className="p-3.5 rounded-xl bg-slate-50 border border-slate-200">
                  <div className="flex items-center gap-2 font-bold text-slate-900 text-xs sm:text-sm mb-1">
                    <X className="w-4 h-4 text-rose-600 flex-shrink-0" />
                    <span>{item.title}</span>
                  </div>
                  <p className="text-slate-600 text-xs leading-relaxed pl-6">
                    {item.desc}
                  </p>
                </div>
              ))}
            </div>

            <div className="mt-6 pt-5 border-t border-slate-200 text-center">
              <p className="text-xs text-slate-700 font-semibold italic">
                “Es un sistema para ayudarte a presentar mejor tu experiencia real y llegar mejor preparado a cada proceso de selección.”
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
