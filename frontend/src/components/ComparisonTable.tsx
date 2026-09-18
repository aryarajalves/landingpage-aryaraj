import React from 'react';
import '../estilos/ComparisonTable.css';
import { ShieldCheck, ShieldAlert, Check, X, AlertTriangle, ArrowRight } from 'lucide-react';
import { trackClick } from '../utils/tracking';
import { WHATSAPP_LINK } from '../config';

export default function ComparisonTable() {
  const whatsappLink = WHATSAPP_LINK;

  return (
    <section className="section comparison-section" id="comparativo">
      <div className="container">
        <h2 className="section-title">O Fim das Contas Bloqueadas</h2>
        <p className="section-subtitle">
          Entenda a diferença crucial entre a API Oficial aprovada pela Meta e as ferramentas amadoras baseadas em conexões piratas de QR Code.
        </p>

        <div className="comp-grid">
          {/* Unofficial API */}
          <div className="glass comp-card comp-card-unoff" id="card-unofficial">
            <div className="comp-header">
              <ShieldAlert size={40} style={{ color: '#ef4444' }} />
              <div>
                <h3 className="comp-header-title-danger">APIs Paralelas / Piratas</h3>
                <p className="comp-header-subtitle-danger">(Leitura de QR Code)</p>
              </div>
            </div>

            <ul className="comp-list">
              <li className="comp-item">
                <X size={20} style={{ color: '#ef4444', flexShrink: 0, marginTop: '2px' }} />
                <div>
                  <p className="comp-item-text-title">Alto Risco de Banimento</p>
                  <p className="comp-item-desc">Algoritmo do WhatsApp detecta automação via QR Code e bloqueia seu chip.</p>
                </div>
              </li>
              <li className="comp-item">
                <X size={20} style={{ color: '#ef4444', flexShrink: 0, marginTop: '2px' }} />
                <div>
                  <p className="comp-item-text-title">Instabilidade Constante</p>
                  <p className="comp-item-desc">Sempre que o WhatsApp Web atualiza, seu atendimento cai e para de funcionar.</p>
                </div>
              </li>
              <li className="comp-item">
                <X size={20} style={{ color: '#ef4444', flexShrink: 0, marginTop: '2px' }} />
                <div>
                  <p className="comp-item-text-title">Velocidade Reduzida</p>
                  <p className="comp-item-desc">Mensagens demoram para ser enviadas e filas de conversas travam o suporte.</p>
                </div>
              </li>
            </ul>
            <div className="comp-danger-footer">
              <AlertTriangle size={18} />
              <span>Gera prejuízo operacional e perda de leads</span>
            </div>
          </div>

          {/* Official API */}
          <div className="glass comp-card comp-card-off" id="card-official">
            <div className="badge-premium">RECOMENDADO</div>
            <div className="comp-header">
              <ShieldCheck size={40} style={{ color: 'var(--color-cyan)' }} />
              <div>
                <h3 className="comp-header-title-safe">API Oficial (WhatsApp Cloud)</h3>
                <p className="comp-header-subtitle-safe">(Homologação Direta Meta)</p>
              </div>
            </div>

            <ul className="comp-list">
              <li className="comp-item">
                <Check size={20} style={{ color: 'var(--color-cyan)', flexShrink: 0, marginTop: '2px' }} />
                <div>
                  <p className="comp-item-text-title-accent">Segurança e Risco Mínimo</p>
                  <p className="comp-item-desc">Uso de servidores homologados pela Meta. O risco de bloqueio cai drasticamente se seguir as políticas de opt-in.</p>
                </div>
              </li>
              <li className="comp-item">
                <Check size={20} style={{ color: 'var(--color-cyan)', flexShrink: 0, marginTop: '2px' }} />
                <div>
                  <p className="comp-item-text-title">Estabilidade Máxima de Conexão</p>
                  <p className="comp-item-desc">Hospedagem em nuvem direto na infraestrutura da Meta. Livre de desconexões de pareamento ou bateria do celular.</p>
                </div>
              </li>
              <li className="comp-item">
                <Check size={20} style={{ color: 'var(--color-cyan)', flexShrink: 0, marginTop: '2px' }} />
                <div>
                  <p className="comp-item-text-title">Mensagens em Massa Autorizadas</p>
                  <p className="comp-item-desc">Faça campanhas ativas para contatos que autorizaram o recebimento sem cair o servidor.</p>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
