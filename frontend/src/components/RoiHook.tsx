import React from 'react';
import '../estilos/RoiHook.css';
import { TrendingUp, Server, DollarSign, CheckCircle2 } from 'lucide-react';
import { WHATSAPP_LINK } from '../config';

export default function RoiHook() {
  const whatsappLink = WHATSAPP_LINK;

  return (
    <section className="section roi-section" id="roi-hook">
      <div className="container">
        <div className="glass roi-box" id="roi-container-box">
          <div className="roi-header">
            <h2 className="roi-title">
              ManyChat vs Servidor VPS: <span className="text-gradient">Quanto Custa Escalar?</span>
            </h2>
            <p className="section-subtitle roi-subtitle">
              Entenda a diferença brutal de custos ao longo de um ano. Pare de pagar assinaturas abusivas em dólar e conquiste soberania total sobre sua base de leads.
            </p>
          </div>

          <div className="roi-grid">
            {/* ManyChat Cost Column */}
            <div className="roi-col" id="roi-col-manychat">
              <div className="roi-col-title-box">
                <TrendingUp size={24} style={{ color: '#ef4444' }} />
                <h3 className="roi-col-title roi-col-title-danger">ManyChat (Mensalidade por Leads)</h3>
              </div>
              <p className="roi-col-desc">
                Cobranças crescentes em dólar calculadas pelo volume total de contatos importados, mesmo os inativos:
              </p>
              <div className="roi-card-list">
                <div className="roi-card-item">
                  <span>Lista de 10.000 contatos</span>
                  <span className="roi-card-price-danger">~$65/mês (R$ 3.900/ano)</span>
                </div>
                <div className="roi-card-item">
                  <span>Lista de 25.000 contatos</span>
                  <span className="roi-card-price-danger">~$145/mês (R$ 8.700/ano)</span>
                </div>
                <div className="roi-card-item">
                  <span>Lista de 50.000 contatos</span>
                  <span className="roi-card-price-danger">~$255/mês (R$ 15.300/ano)</span>
                </div>
              </div>
              <p className="roi-footnote">
                *Valores aproximados baseados na cotação do dólar e tabelas oficiais do ManyChat.
              </p>
            </div>

            {/* VPS Server Column */}
            <div className="roi-col" id="roi-col-vps">
              <div className="roi-col-title-box">
                <Server size={24} style={{ color: 'var(--color-cyan)' }} />
                <h3 className="roi-col-title">Setup Aryaraj (VPS Dedicada)</h3>
              </div>
              <p className="roi-col-desc">
                Autonomia absoluta com hospedagem direta no seu próprio servidor Hostinger, sem limites artificiais:
              </p>
              <div className="roi-card-list">
                <div className="roi-card-item roi-card-item-vps">
                  <div className="roi-card-row">
                    <CheckCircle2 size={16} style={{ color: 'var(--color-cyan)' }} />
                    <span>Contatos Ilimitados</span>
                  </div>
                  <span className="roi-card-price-accent">R$ 0 adicionais</span>
                </div>
                <div className="roi-card-item roi-card-item-vps">
                  <div className="roi-card-row">
                    <CheckCircle2 size={16} style={{ color: 'var(--color-cyan)' }} />
                    <span>Atendentes Ilimitados</span>
                  </div>
                  <span className="roi-card-price-accent">Sem custo por usuário</span>
                </div>
                <div className="roi-card-item roi-card-item-vps">
                  <div className="roi-card-row">
                    <CheckCircle2 size={16} style={{ color: 'var(--color-cyan)' }} />
                    <span>Hospedagem Fixa VPS</span>
                  </div>
                  <span className="roi-card-price-accent">~R$ 100 a R$ 150/mês</span>
                </div>
              </div>
              <p className="roi-footnote">
                *Você paga apenas o consumo real do servidor e as tarifas oficiais de mensagens direto para a Meta.
              </p>
            </div>
          </div>

          <div className="roi-savings-banner" id="roi-savings-indicator">
            <DollarSign size={32} style={{ color: 'var(--color-cyan)' }} />
            <h4 className="roi-savings-title">
              Economia Estimada de mais de R$ 15.000 por ano
            </h4>
            <p className="roi-savings-desc">
              Para operações com 50.000 contatos, o setup próprio elimina faturas abusivas de software. O investimento na implementação se paga logo nos primeiros meses de uso.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
