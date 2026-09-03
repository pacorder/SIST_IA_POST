import React from 'react';
import {
  CheckCircle2,
  ExternalLink,
  Lock,
  Mail,
  ShieldCheck,
  Sparkles,
  Users,
  Zap
} from 'lucide-react';

export const FLOW_PAYMENT_URL =
  'https://www.flow.cl/btn.php?token=vf9408fafdd00d6c2f8f3aa5a265e228af52cc9a';

interface FounderPricingCheckoutProps {
  initialCountry?: string;
}

export const FounderPricingCheckout: React.FC<FounderPricingCheckoutProps> = () => {
  const spotsTaken = 7; // 7/10 taken initially

  return (
    <section id="checkout" className="py-14 sm:py-24 max-w-5xl mx-auto px-4 sm:px-6 scroll-mt-20">
      {/* Title & Founder Value Proposition */}
      <div className="text-center max-w-2xl mx-auto mb-10">
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-50 border border-blue-200 text-blue-800 text-xs font-semibold tracking-wide mb-3">
          <Sparkles className="w-3.5 h-3.5 text-blue-600" />
          <span>OFERTA FUNDADOR — PREVENTA EXCLUSIVA</span>
        </div>
        <h2 className="text-3xl sm:text-5xl font-extrabold text-slate-900 tracking-tight">
          Primera edición — US$29
        </h2>
        <p className="mt-3 text-slate-600 text-sm sm:text-base leading-relaxed">
          Acceso limitado inicialmente a <strong className="text-slate-900">10 usuarios</strong>. Los primeros usuarios obtendrán acceso a la primera versión completa del Sistema IA de Postulación y actualizaciones futuras.
        </p>

        {/* Urgency Progress Bar */}
        <div className="mt-6 max-w-md mx-auto bg-slate-100 p-4 rounded-xl border border-slate-200 shadow-2xs">
          <div className="flex items-center justify-between text-xs font-semibold mb-2">
            <span className="text-slate-700 flex items-center gap-1.5">
              <Users className="w-4 h-4 text-blue-700" />
              Cupos Fundador Disponibles
            </span>
            <span className="text-blue-700 font-bold">
              {spotsTaken} de 10 reservados ({10 - spotsTaken} restantes)
            </span>
          </div>
          <div className="w-full bg-slate-200 h-2.5 rounded-full overflow-hidden">
            <div
              className="bg-blue-700 h-full rounded-full transition-all duration-700 ease-out"
              style={{ width: `${(spotsTaken / 10) * 100}%` }}
            ></div>
          </div>
        </div>
      </div>

      {/* Main Pricing & Flow Checkout Card */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Left Column: Value summary & Deliverables (6 cols) */}
        <div className="lg:col-span-6 space-y-5">
          <div className="bg-slate-900 text-slate-100 rounded-2xl p-6 sm:p-8 border border-slate-800 shadow-md">
            <span className="text-[11px] font-bold tracking-wider text-blue-400 uppercase block mb-1">
              Resumen del Sistema
            </span>
            <h3 className="text-xl sm:text-2xl font-bold text-white mb-4">
              Sistema IA de Postulación
            </h3>

            <div className="space-y-3 pb-6 border-b border-slate-800 text-xs sm:text-sm text-slate-300">
              <div className="flex items-start gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-blue-400 flex-shrink-0 mt-0.5" />
                <span>Workflow completo de 7 etapas estructuradas para ChatGPT</span>
              </div>
              <div className="flex items-start gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-blue-400 flex-shrink-0 mt-0.5" />
                <span>Fórmula de calibración de preguntas: Vacante × CV × Gaps</span>
              </div>
              <div className="flex items-start gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-blue-400 flex-shrink-0 mt-0.5" />
                <span>Protocolo de mock interview con ChatGPT Voice (voz en tiempo real)</span>
              </div>
              <div className="flex items-start gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-blue-400 flex-shrink-0 mt-0.5" />
                <span>Templates, prompts testeados y casos prácticos de antes/después</span>
              </div>
              <div className="flex items-start gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-blue-400 flex-shrink-0 mt-0.5" />
                <span>Actualizaciones de por vida para los 10 primeros usuarios fundadores</span>
              </div>
            </div>

            <div className="pt-5 space-y-2 text-xs sm:text-sm">
              <div className="flex justify-between text-slate-400">
                <span>Precio regular futuro:</span>
                <span className="line-through text-slate-500">US$ 75.00</span>
              </div>
              <div className="flex justify-between text-blue-400 font-medium">
                <span>Descuento fase fundador (-61%):</span>
                <span>- US$ 46.00</span>
              </div>
              <div className="flex justify-between text-base font-bold text-white pt-2 border-t border-slate-800">
                <span>Total precio fundador:</span>
                <span className="text-2xl font-extrabold text-white">US$ 29.00</span>
              </div>
            </div>
          </div>

          {/* 7 Days Guarantee Box */}
          <div className="bg-white rounded-xl p-5 border border-slate-200 shadow-2xs">
            <div className="flex items-start gap-3">
              <ShieldCheck className="w-6 h-6 text-blue-600 flex-shrink-0 mt-0.5" />
              <div>
                <h4 className="font-bold text-slate-900 text-xs sm:text-sm">
                  Garantía de Satisfacción Total por 7 Días
                </h4>
                <p className="text-slate-600 text-xs mt-1 leading-relaxed">
                  Prueba el sistema en tu próxima postulación real. Si sientes que la metodología no clarifica tu estrategia ni te prepara con solidez, te devolvemos el 100% de tu dinero sin preguntas.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Right Column: Direct Flow Payment Gateway (6 cols) */}
        <div className="lg:col-span-6 bg-white rounded-2xl p-6 sm:p-8 border border-slate-200 shadow-md flex flex-col justify-between">
          <div>
            {/* Header / Security indicator */}
            <div className="flex items-center justify-between pb-4 border-b border-slate-200 mb-6">
              <div className="flex items-center gap-2">
                <Lock className="w-4 h-4 text-blue-600" />
                <span className="font-bold text-slate-900 text-sm sm:text-base">
                  Pago Seguro con Flow
                </span>
              </div>
              <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded text-[11px] font-semibold bg-emerald-50 text-emerald-700 border border-emerald-200">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-600"></span>
                Pasarela Oficial
              </span>
            </div>

            {/* Pricing Callout */}
            <div className="bg-slate-50 rounded-xl p-5 border border-slate-200 mb-6 text-center">
              <span className="text-xs uppercase tracking-wider font-semibold text-slate-500 block mb-1">
                Total a pagar
              </span>
              <div className="text-4xl font-extrabold text-slate-900 tracking-tight">
                US$ 29<span className="text-lg font-medium text-slate-500">.00</span>
              </div>
              <span className="text-xs text-slate-500 block mt-1">
                Pago único • Sin cobros recurrentes • Acceso inmediato
              </span>
            </div>

            {/* Instructions */}
            <div className="space-y-3 text-xs sm:text-sm text-slate-700 mb-6">
              <div className="flex items-start gap-2">
                <Zap className="w-4 h-4 text-blue-600 flex-shrink-0 mt-0.5" />
                <span>
                  El pago se realiza directamente en la plataforma certificada de <strong>Flow.cl</strong>.
                </span>
              </div>
              <div className="flex items-start gap-2">
                <Mail className="w-4 h-4 text-blue-600 flex-shrink-0 mt-0.5" />
                <span>
                  Una vez completada la transacción, recibirás el acceso completo y los materiales directamente en tu correo electrónico.
                </span>
              </div>
            </div>

            {/* Big Flow Button */}
            <a
              id="flow-payment-button"
              href={FLOW_PAYMENT_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full inline-flex items-center justify-center gap-2.5 px-6 py-4 text-base sm:text-lg font-bold text-white bg-blue-700 hover:bg-blue-800 rounded-xl shadow-md hover:shadow-lg transition-all transform active:scale-[0.99] text-center"
            >
              <span>Pagar US$29 con Flow</span>
              <ExternalLink className="w-4 h-4" />
            </a>

            <p className="text-[11px] text-slate-500 text-center mt-3">
              Serás redirigido a Flow.cl para completar tu pago de forma 100% cifrada y segura.
            </p>
          </div>

          {/* Payment Methods Badges supported by Flow */}
          <div className="mt-8 pt-6 border-t border-slate-200">
            <span className="text-[11px] uppercase tracking-wider font-semibold text-slate-500 block text-center mb-3">
              Medios de pago procesados por Flow:
            </span>
            <div className="flex flex-wrap items-center justify-center gap-2 text-xs font-semibold text-slate-700">
              <span className="px-2.5 py-1 bg-slate-100 rounded-md border border-slate-200">
                Webpay Plus
              </span>
              <span className="px-2.5 py-1 bg-slate-100 rounded-md border border-slate-200">
                Tarjetas de Crédito / Débito
              </span>
              <span className="px-2.5 py-1 bg-slate-100 rounded-md border border-slate-200">
                Visa
              </span>
              <span className="px-2.5 py-1 bg-slate-100 rounded-md border border-slate-200">
                Mastercard
              </span>
              <span className="px-2.5 py-1 bg-slate-100 rounded-md border border-slate-200">
                Redcompra
              </span>
              <span className="px-2.5 py-1 bg-slate-100 rounded-md border border-slate-200">
                Mach / Onepay
              </span>
              <span className="px-2.5 py-1 bg-slate-100 rounded-md border border-slate-200">
                Transferencia
              </span>
            </div>

            <div className="flex items-center justify-center gap-3 pt-4 text-[11px] text-slate-500">
              <span className="flex items-center gap-1">
                <Lock className="w-3 h-3 text-slate-600" />
                Cifrado SSL 256-bit
              </span>
              <span>•</span>
              <span>Garantía de 7 días</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
