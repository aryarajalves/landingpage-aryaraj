import React from 'react';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import IntegrationsBar from '../components/IntegrationsBar';
import Features from '../components/Features';
import UseCases from '../components/UseCases';
import WhatIsIncluded from '../components/WhatIsIncluded';
import ZapJordsShowcase from '../components/ZapJordsShowcase';
import ComparisonTable from '../components/ComparisonTable';
import PricingMeta from '../components/PricingMeta';
import RoiHook from '../components/RoiHook';
import DeliveryProcess from '../components/DeliveryProcess';
import About from '../components/About';
import Faq from '../components/Faq';
import Guarantee from '../components/Guarantee';
import BottomCta from '../components/BottomCta';
import Footer from '../components/Footer';
import FloatingWhatsApp from '../components/FloatingWhatsApp';

const ApiOficialPage: React.FC = () => {
  React.useEffect(() => {
    if (window.location.hash) {
      const id = window.location.hash.replace('#', '');
      const element = document.getElementById(id);
      if (element) {
        setTimeout(() => {
          element.scrollIntoView({ behavior: 'smooth' });
        }, 100);
      }
    }
  }, []);

  return (
    <div className="page-api-oficial" style={{ position: 'relative', minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
      {/* Elementos Decorativos de Fundo */}
      <div className="glow-container">
        <div className="glow-purple"></div>
        <div className="glow-cyan"></div>
        <div className="glow-green"></div>
      </div>

      {/* Cabeçalho de Navegação */}
      <Navbar />

      <main style={{ flex: 1 }}>
        <Hero />
        <IntegrationsBar />
        <Features />
        <UseCases />
        <WhatIsIncluded />
        <ZapJordsShowcase />
        <ComparisonTable />
        <PricingMeta />
        <RoiHook />
        <DeliveryProcess />
        <About />
        <Faq />
        <Guarantee />
      </main>

      <BottomCta />
      <Footer />

      {/* Botão Flutuante do WhatsApp */}
      <FloatingWhatsApp />
    </div>
  );
};

export default ApiOficialPage;
