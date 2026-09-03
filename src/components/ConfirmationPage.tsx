import React from 'react';
import {
  ArrowLeft,
  Calendar,
  CheckCircle2,
  Clock,
  ExternalLink,
  Mail,
  Printer,
  ShieldCheck,
  Sparkles
} from 'lucide-react';

export const ConfirmationPage: React.FC = () => {
  const currentDate = new Date().toLocaleDateString('es-ES', {
    day: '2-digit',
    month: 'short',
    year: 'numeric'
  });

  return (
    <div className="min-h-screen flex flex-col justify-between bg-slate-50 text-slate-900 selection:bg-blue-700 selection:text-white">
      {/* Header */}
      <header className="border-b border-slate-200 bg-white/80 backdrop-blur-md sticky top-0 z-10">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between">
          <a
            href="/"
            className="flex items-center gap-2 font-bold text-slate-900 text-sm sm:text-base hover:opacity-80 transition-opacity"
          >
            <span className="w-7 h-7 rounded-lg bg-blue-700 text-white flex items-center justify-center text-xs font-black shadow-xs">
              IA
            </span>
            <span>Sistema IA de Postulación</span>
          </a>
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-emerald-50 text-emerald-700 border border-emerald-200">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
            Transacción aprobada
          </span>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-1 max-w-3xl mx-auto w-full px-4 sm:px-6 py-10 sm:py-16">
        <div className="bg-white rounded-3xl p-6 sm:p-10 border border-slate-200 shadow-xl relative overflow-hidden">
          {/* Accent strip */}
          <div className="absolute top-0 inset-x-0 h-2 bg-gradient-to-r from-blue-700 via-blue-600 to-indigo-600"></div>

          {/* Success Icon */}
          <div className="text-center mb-6">
            <div className="w-16 h-16 sm:w-20 sm:h-20 bg-emerald-50 text-emerald-600 rounded-full flex items-center justify-center mx-auto mb-4 border border-emerald-200 shadow-xs">
              <CheckCircle2 className="w-8 h-8 sm:w-10 sm:h-10 text-emerald-600" />
            </div>
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-50 border border-blue-200 text-blue-800 text-xs font-bold uppercase tracking-wider mb-2">
              <Sparkles className="w-3.5 h-3.5 text-blue-600" />
              EDICIÓN FUNDADOR CONFIRMADA
            </div>
            <h1 className="text-2xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
              ¡COMPRA CONFIRMADA!
            </h1>
            <p className="mt-3 text-sm sm:text-base text-slate-600 max-w-xl mx-auto leading-relaxed">
              Tu pago ha sido procesado exitosamente por Flow. Has asegurado uno de los{' '}
              <strong className="text-slate-900">10 cupos de la fase fundador</strong>.
            </p>
          </div>

          {/* Core Message Callout */}
          <div className="bg-blue-50/80 border border-blue-200 rounded-2xl p-5 sm:p-6 mb-8 text-slate-800 shadow-2xs">
            <div className="flex items-start gap-3.5">
              <div className="w-10 h-10 rounded-xl bg-blue-700 text-white flex items-center justify-center flex-shrink-0 mt-0.5 shadow-xs">
                <Calendar className="w-5 h-5" />
              </div>
              <div>
                <h2 className="text-base sm:text-lg font-bold text-slate-900">
                  Recibirás el Sistema IA de Postulación en 5 DÍAS
                </h2>
                <p className="mt-1 text-xs sm:text-sm text-slate-600 leading-relaxed">
                  Como usuario fundador tendrás acceso a esta{' '}
                  <strong>primera versión completa</strong> y a{' '}
                  <strong>todas las futuras mejoras y actualizaciones</strong> de esta edición de forma permanente.
                </p>
              </div>
            </div>
          </div>

          {/* Order Summary Details */}
          <div className="bg-slate-50 rounded-2xl p-5 sm:p-6 border border-slate-200 space-y-3 mb-8 text-xs sm:text-sm">
            <div className="text-xs uppercase tracking-wider font-bold text-slate-500 pb-2 border-b border-slate-200 flex justify-between items-center">
              <span>Resumen del pedido</span>
              <span className="font-mono text-[11px] text-slate-400">{currentDate}</span>
            </div>

            <div className="flex justify-between py-1">
              <span className="text-slate-600">Producto adquirido:</span>
              <span className="font-bold text-slate-900 text-right">
                Sistema IA de Postulación (Edición Fundador)
              </span>
            </div>

            <div className="flex justify-between py-1">
              <span className="text-slate-600">Total pagado:</span>
              <span className="font-extrabold text-blue-700 text-base">US$ 29.00</span>
            </div>

            <div className="flex justify-between py-1">
              <span className="text-slate-600">Método de procesamiento:</span>
              <span className="font-medium text-slate-800 flex items-center gap-1.5">
                <span>Pasarela Flow.cl</span>
                <span className="text-emerald-600 font-semibold text-xs">✓ Aprobado</span>
              </span>
            </div>

            <div className="flex justify-between py-1">
              <span className="text-slate-600">Plazo de entrega de materiales:</span>
              <span className="font-bold text-slate-900">5 días hábiles</span>
            </div>

            <div className="flex justify-between pt-2 border-t border-slate-200">
              <span className="text-slate-600">Garantía:</span>
              <span className="font-semibold text-slate-800">7 días de satisfacción total</span>
            </div>
          </div>

          {/* What happens next */}
          <div className="mb-8">
            <h3 className="text-sm sm:text-base font-bold text-slate-900 mb-3 flex items-center gap-2">
              <Clock className="w-4 h-4 text-blue-700" />
              ¿Qué pasará a continuación?
            </h3>
            <ul className="space-y-3 text-xs sm:text-sm text-slate-600">
              <li className="flex items-start gap-2.5">
                <span className="w-5 h-5 rounded-full bg-blue-100 text-blue-800 flex items-center justify-center font-bold text-[11px] flex-shrink-0 mt-0.5">
                  1
                </span>
                <span>
                  <strong>Comprobante de Flow:</strong> Recibirás en tu correo el recibo formal de la transacción emitido por Flow.
                </span>
              </li>
              <li className="flex items-start gap-2.5">
                <span className="w-5 h-5 rounded-full bg-blue-100 text-blue-800 flex items-center justify-center font-bold text-[11px] flex-shrink-0 mt-0.5">
                  2
                </span>
                <span>
                  <strong>Envío del Sistema (dentro de los 5 días):</strong> Se enviará a tu casilla el paquete completo con el workflow de 7 etapas, los prompts estructurados, la guía de ChatGPT Voice y los templates de postulación.
                </span>
              </li>
              <li className="flex items-start gap-2.5">
                <span className="w-5 h-5 rounded-full bg-blue-100 text-blue-800 flex items-center justify-center font-bold text-[11px] flex-shrink-0 mt-0.5">
                  3
                </span>
                <span>
                  <strong>Condición Fundador:</strong> Quedas registrado con acceso vitalicio para recibir futuras iteraciones y ampliaciones de esta metodología.
                </span>
              </li>
            </ul>
          </div>

          {/* Support contact box */}
          <div className="p-4 sm:p-5 rounded-2xl bg-slate-100 border border-slate-200 text-xs sm:text-sm text-slate-700 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 mb-8">
            <div>
              <div className="font-bold text-slate-900">¿Tienes alguna pregunta o consulta sobre tu acceso?</div>
              <div className="text-slate-600 text-xs mt-0.5">Estamos a tu disposición para ayudarte con cualquier detalle.</div>
            </div>
            <a
              href="mailto:patricioecv@gmail.com"
              className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-lg bg-white border border-slate-300 text-slate-800 font-semibold text-xs hover:bg-slate-50 transition-colors"
            >
              <Mail className="w-3.5 h-3.5 text-blue-700" />
              <span>Contactar soporte</span>
            </a>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-3 pt-2">
            <button
              onClick={() => window.print()}
              className="flex-1 inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-800 font-bold text-xs sm:text-sm transition-colors cursor-pointer"
            >
              <Printer className="w-4 h-4" />
              <span>Imprimir / Guardar comprobante</span>
            </button>
            <a
              href="/"
              className="flex-1 inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-blue-700 hover:bg-blue-800 text-white font-bold text-xs sm:text-sm transition-colors text-center"
            >
              <ArrowLeft className="w-4 h-4" />
              <span>Volver a la página de inicio</span>
            </a>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="border-t border-slate-200 bg-white py-6 text-center text-xs text-slate-500">
        <div className="max-w-4xl mx-auto px-4">
          <p>© {new Date().getFullYear()} Sistema IA de Postulación. Todos los derechos reservados.</p>
          <p className="text-[11px] text-slate-400 mt-1">
            Transacción procesada por Flow.cl de conformidad con los estándares de seguridad de comercio electrónico.
          </p>
        </div>
      </footer>
    </div>
  );
};
