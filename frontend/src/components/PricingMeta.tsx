import React, { useState } from 'react';
import '../estilos/PricingMeta.css';
import { Clock, MessageSquare, Sparkles, Check } from 'lucide-react';

export default function PricingMeta() {
  const [activeTab, setActiveTab] = useState<'window' | 'templates'>('window');

  return (
    <section className="section pricing-section" id="tarifas-meta">
      <div className="container">
        <h2 className="section-title">Como Funcionam as Tarifas da Meta?</h2>
        <p className="section-subtitle">
          Entenda as regras oficiais de cobrança do WhatsApp Cloud API. Sem taxas surpresas, com transparência total de acordo com a política de conversações da Meta.
        </p>

        <div className="pricing-tabs">
          <button
            className={`pricing-tab-btn ${activeTab === 'window' ? 'active' : ''}`}
            onClick={() => setActiveTab('window')}
            data-testid="tab-btn-window"
          >
            Janela de Atendimento (24h)
          </button>
          <button
            className={`pricing-tab-btn ${activeTab === 'templates' ? 'active' : ''}`}
            onClick={() => setActiveTab('templates')}
            data-testid="tab-btn-templates"
          >
            Mensagens Ativas (Templates)
          </button>
        </div>

        <div className="glass pricing-content-box" data-testid="pricing-content">
          {activeTab === 'window' ? (
            <div className="pricing-grid">
              <div>
                <div className="pricing-header-row">
                  <Clock size={36} style={{ color: 'var(--color-cyan)' }} />
                  <h3 className="pricing-header-title">A Janela Reativa de 24 Horas</h3>
                </div>
                <p className="pricing-desc">
                  Sempre que um cliente envia uma mensagem para a sua empresa, abre-se uma <strong>Janela de Atendimento de 24 horas</strong>.
                </p>
                <p className="pricing-desc">
                  Dentro desse período, qualquer mensagem livre que você ou sua equipe enviar em resposta é considerada reativa e <strong>não possui custos adicionais por mensagem avulsa</strong>.
                </p>
                <div className="pricing-checklist">
                  <div className="pricing-check-row">
                    <Check size={18} style={{ color: 'var(--color-cyan)' }} />
                    <span className="pricing-check-label">Atendimento à vontade com suporte de texto e mídia</span>
                  </div>
                </div>
              </div>

              <div className="pricing-example-box">
                <MessageSquare size={48} style={{ color: 'var(--color-cyan)', marginBottom: '16px' }} />
                <h4 className="pricing-example-title">Exemplo Prático</h4>
                <p className="pricing-example-desc">
                  O lead pergunta o preço às 10h. Você responde às 10h05 e conversa o dia todo. Toda essa interação entra na mesma tarifa única de conversão de suporte da Meta (cerca de R$ 0,05 a R$ 0,07 por conversa inteira).
                </p>
              </div>
            </div>
          ) : (
            <div className="pricing-grid">
              <div>
                <div className="pricing-header-row">
                  <Sparkles size={36} style={{ color: 'var(--color-violet)' }} />
                  <h3 className="pricing-header-title">Mensagens Ativas (Templates)</h3>
                </div>
                <p className="pricing-desc">
                  Se você precisar iniciar o contato com um lead (fora da janela de 24 horas ou como primeiro envio), a Meta exige o uso de um <strong>Template Aprovado (HSM)</strong>.
                </p>
                <p className="pricing-desc">
                  Esses templates são pré-aprovados pela Meta para evitar spam e garantir a qualidade das mensagens enviadas. Eles se dividem em duas principais finalidades comerciais tarifadas diferentemente:
                </p>
              </div>

              <div className="template-cards-container">
                {/* Utility Card */}
                <div className="template-cost-card" data-testid="card-utility">
                  <h4 className="template-cost-title">1. Templates de Utilidade (Utility)</h4>
                  <p className="template-cost-desc">
                    Atualizações de pedidos, cobranças, lembretes de agendamento e alertas importantes de transação.
                  </p>
                  <span className="meta-cost-badge meta-cost-badge-utility" data-testid="utility-price">
                    Tarifa Meta: R$ 0,07 por envio
                  </span>
                </div>

                {/* Marketing Card */}
                <div className="template-cost-card" data-testid="card-marketing">
                  <h4 className="template-cost-title">2. Templates de Marketing</h4>
                  <p className="template-cost-desc">
                    Envio de promoções, anúncios de novos produtos, cupons de desconto e campanhas de reengajamento comercial.
                  </p>
                  <span className="meta-cost-badge meta-cost-badge-marketing" data-testid="marketing-price">
                    Tarifa Meta: R$ 0,35 por envio
                  </span>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
