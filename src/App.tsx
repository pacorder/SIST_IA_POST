import React, { useEffect, useState } from 'react';
import { Analytics } from '@vercel/analytics/react';
import { CaseStudyDemo } from './components/CaseStudyDemo';
import { ConfirmationPage } from './components/ConfirmationPage';
import { Footer } from './components/Footer';
import { FounderPricingCheckout } from './components/FounderPricingCheckout';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { HowItWorks } from './components/HowItWorks';
import { StickyBottomBar } from './components/StickyBottomBar';
import { TargetAudience } from './components/TargetAudience';
import { TheProblem } from './components/TheProblem';
import { WhatYouGet } from './components/WhatYouGet';

export default function App() {
  const [isConfirmationRoute, setIsConfirmationRoute] = useState(false);

  useEffect(() => {
    const path = window.location.pathname.toLowerCase();
    const search = window.location.search.toLowerCase();
    if (
      path.includes('compra-confirmada') ||
      path.includes('confirmacion') ||
      path.includes('gracias') ||
      path.includes('success') ||
      search.includes('status=success') ||
      search.includes('compra=confirmada')
    ) {
      setIsConfirmationRoute(true);
    }
  }, []);

  const scrollToCheckout = () => {
    const checkoutElem = document.getElementById('checkout');
    if (checkoutElem) {
      checkoutElem.scrollIntoView({ behavior: 'smooth' });
    }
  };

  if (isConfirmationRoute) {
    return (
      <>
        <ConfirmationPage />
        <Analytics />
      </>
    );
  }

  return (
    <div className="min-h-screen flex flex-col bg-slate-50 text-slate-900 selection:bg-blue-700 selection:text-white">
      {/* Top Bar */}
      <Header onGoToCheckout={scrollToCheckout} />

      {/* Main Landing Flow */}
      <main className="flex-1 pb-16 sm:pb-24">
        {/* 1. Hero Section with Pricing and Central Workflow */}
        <Hero onGoToCheckout={scrollToCheckout} />

        {/* 2. El Problema (The 8 critical questions) */}
        <TheProblem onGoToCheckout={scrollToCheckout} />

        {/* 3. Cómo Funciona (The 7 steps & voice mock interview) */}
        <HowItWorks onGoToCheckout={scrollToCheckout} />

        {/* 4. Demostración Práctica (Renewable Energy PM Case Study) */}
        <CaseStudyDemo />

        {/* 5. Qué Recibes (11 concrete deliverables) */}
        <WhatYouGet />

        {/* 6. Para Quién Es vs Qué NO Es */}
        <TargetAudience />

        {/* 7. Oferta Fundador + Formulario de Pago Seguro */}
        <FounderPricingCheckout />
      </main>

      {/* Sticky Bottom Purchase Bar */}
      <StickyBottomBar onGoToCheckout={scrollToCheckout} />

      {/* Footer */}
      <Footer />

      {/* Vercel Web Analytics */}
      <Analytics />
    </div>
  );
}
