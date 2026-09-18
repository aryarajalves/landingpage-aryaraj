import React, { useState, useEffect } from 'react';
import '../estilos/Hero.css';
import { MessageSquareCode, ArrowRight, CheckCircle2, Bot as BotIcon } from 'lucide-react';
import { trackClick } from '../utils/tracking';
import { WHATSAPP_LINK } from '../config';

interface ChatMessage {
  id: number;
  sender: 'client' | 'agent';
  text: string;
  timestamp: string;
}

export default function Hero() {
  const whatsappLink = WHATSAPP_LINK;

  const demoConversation: ChatMessage[] = [
    { id: 1, sender: 'client', text: 'Olá! Quero centralizar o WhatsApp da minha empresa. Consigo ter 5 atendentes usando o mesmo número?', timestamp: '14:32' },
    { id: 2, sender: 'agent', text: 'Olá! Sim, com a API Oficial você pode ter dezenas de atendentes simultâneos usando o mesmo número, com relatórios e sem quedas de servidor. 😊', timestamp: '14:32' },
    { id: 3, sender: 'client', text: 'Perfeito! E meu número corre risco de banimento igual às outras ferramentas de QR Code?', timestamp: '14:33' },
    { id: 4, sender: 'agent', text: 'Com a API Oficial e seguindo as políticas de opt-in, o risco de bloqueio é drasticamente reduzido (mais de 95% mais seguro), pois operamos nos servidores da própria Meta.', timestamp: '14:33' },
    { id: 5, sender: 'client', text: 'Excelente! Como fazemos a ativação?', timestamp: '14:34' },
    { id: 6, sender: 'agent', text: 'Cuidamos de tudo! Clique no botão abaixo para iniciarmos seu setup no Facebook Business: 📅 [Falar com Especialista]', timestamp: '14:34' },
  ];

  const [visibleMessages, setVisibleMessages] = useState<ChatMessage[]>([
    demoConversation[0],
    demoConversation[1]
  ]);
  const [currentIdx, setCurrentIdx] = useState(2);

  useEffect(() => {
    if (currentIdx < demoConversation.length) {
      const timer = setTimeout(() => {
        setVisibleMessages(prev => [...prev, demoConversation[currentIdx]]);
        setCurrentIdx(prev => prev + 1);
      }, 2500);

      return () => clearTimeout(timer);
    } else {
      const restartTimer = setTimeout(() => {
        setVisibleMessages([demoConversation[0], demoConversation[1]]);
        setCurrentIdx(2);
      }, 8000);
      return () => clearTimeout(restartTimer);
    }
  }, [currentIdx]);

  return (
    <section className="section hero-section" id="inicio">
      <div className="container hero-layout">
        <div>
          <div className="hero-badge" id="hero-badge">
            <CheckCircle2 size={16} />
            <span>Infraestrutura Homologada Meta • Risco de Banimento Mínimo</span>
          </div>
          <h1 className="hero-title">
            Escale seus <span className="text-gradient">INFO PRODUTOS</span> com a Api Oficial do WhatsApp
          </h1>
          <p className="hero-desc">
            Já pensou em conseguir disparar para uma lista de 5 mil contatos sem precisar ficar refém do banimento? Com a API Oficial, você pode realizar lançamentos meteóricos e faturar alto sem depender exclusivamente de tráfego pago constante.
          </p>

          <div className="hero-ctas">
            <a 
              href="#entregaveis" 
              className="btn btn-whatsapp" 
              id="hero-cta-whatsapp" 
              onClick={(e) => {
                e.preventDefault();
                trackClick('hero_cta_to_entregaveis');
                const element = document.getElementById('entregaveis');
                if (element) {
                  element.scrollIntoView({ behavior: 'smooth' });
                  window.history.pushState(null, '', '#entregaveis');
                }
              }}
            >
              <MessageSquareCode size={20} />
              <span>Ativar Minha API Oficial</span>
            </a>
          </div>

          <div className="scarcity-banner" id="hero-scarcity-banner">
            <span className="scarcity-text">
              <strong>🚨 Aviso de Agenda:</strong> Como cada infraestrutura de servidor, homologação junto à Meta e treinamento de equipe é realizado pessoalmente por Aryaraj para garantir suporte e qualidade premium, aceitamos apenas 10 novos setups de empresas por mês.
            </span>
          </div>

          <div className="hero-bullets">
            <div className="bullet-item">
              <CheckCircle2 size={18} style={{ color: 'var(--color-cyan)' }} />
              <span>Sem depender de aparelhos celulares físicos conectados à internet</span>
            </div>
            <div className="bullet-item">
              <CheckCircle2 size={18} style={{ color: 'var(--color-cyan)' }} />
              <span>Livre de desconexões constantes comuns em integrações por QR Code</span>
            </div>
          </div>
        </div>

        {/* Dynamic Chat Simulator */}
        <div className="phone-outer-wrapper">
          <div className="phone-wrapper" id="phone-simulator">
            <div className="phone-header">
              <div className="phone-header-avatar">
                <BotIcon size={20} style={{ color: '#030712' }} />
              </div>
              <div>
                <h4 className="phone-header-name">Suporte Centralizado</h4>
                <p className="phone-header-status">Atendimento Oficial</p>
              </div>
            </div>

            <div className="chat-body" id="chat-body">
              {visibleMessages.map((msg) => (
                <div
                  key={msg.id}
                  className={`message-bubble ${msg.sender === 'client' ? 'message-client' : 'message-agent'}`}
                >
                  <p>{msg.text}</p>
                  <span className="message-time">{msg.timestamp}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
