import React from 'react';
import '../estilos/BottomCta.css';
import { MessageSquare } from 'lucide-react';
import { trackClick } from '../utils/tracking';
import { WHATSAPP_LINK } from '../config';

export default function BottomCta() {
  const whatsappLink = WHATSAPP_LINK;

  return (
    <section className="section bottom-cta-section" id="contato">
      <div className="container">
        <div className="glass cta-container" id="bottom-cta-box">
          <h2 className="cta-title">
            Pronto para blindar seu número e <span className="text-gradient">escalar suas vendas</span>?
          </h2>
          <p className="cta-subtitle">
            Fale com Aryaraj no WhatsApp e estruture seu atendimento na API Oficial da Meta.
          </p>

          <a
            href={whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-whatsapp cta-btn"
            id="bottom-cta-button"
            onClick={() => trackClick('bottom_cta')}
          >
            <MessageSquare size={20} />
            <span>Falar com Aryaraj no WhatsApp</span>
          </a>

          <div className="scarcity-banner" id="bottom-cta-scarcity-banner">
            <span className="scarcity-text">
              <strong>🚨 Aviso de Agenda:</strong> Como cada infraestrutura de servidor, homologação junto à Meta e treinamento de equipe é realizado pessoalmente por Aryaraj para garantir suporte e qualidade premium, aceitamos apenas 10 novos setups de empresas por mês.
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
