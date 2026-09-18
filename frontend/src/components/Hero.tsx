import React, { useState } from 'react';
import '../estilos/Hero.css';
import { 
  MessageSquareCode, 
  CheckCircle2, 
  Bot as BotIcon,
  ChevronLeft,
  ChevronRight,
  Play,
  ShoppingCart,
  QrCode,
  Sparkles,
  ExternalLink,
  Video
} from 'lucide-react';
import { trackClick } from '../utils/tracking';
import { WHATSAPP_LINK } from '../config';

interface TemplateItem {
  id: string;
  badge: string;
  badgeColor: string;
  title: string;
  time: string;
  hasVideo?: boolean;
  videoTitle?: string;
  videoDuration?: string;
  bodyText: string;
  ctaText: string;
  secondaryCta?: string;
}

export default function Hero() {
  const whatsappLink = WHATSAPP_LINK;

  const templates: TemplateItem[] = [
    {
      id: 'live_class',
      badge: 'Disparo de Lançamento',
      badgeColor: '#0284c7',
      title: 'Aula Ao Vivo • Começando Agora!',
      time: '19:58',
      hasVideo: true,
      videoTitle: 'AULA EXCLUSIVA: Como Escalar Infoprodutos em 2026',
      videoDuration: '01:24',
      bodyText: 'Fala, tudo bem? A nossa aula ao vivo e gratuita já começou! Liberei a sala exclusiva agora. Assista a este recado rápido e clique no botão abaixo para entrar antes que atinja a lotação máxima:',
      ctaText: 'Entrar na Aula Ao Vivo 🔴',
      secondaryCta: 'Salvar Link da Gravação'
    },
    {
      id: 'abandoned_cart',
      badge: 'Recuperação de Carrinho',
      badgeColor: '#f59e0b',
      title: 'Recuperação Automática • Carrinho',
      time: '15:12',
      hasVideo: false,
      bodyText: 'Olá! Notei que você quase garantiu sua vaga na formação, mas não concluiu o pagamento. Aconteceu algum imprevisto no checkout?',
      ctaText: 'Finalizar Minha Inscrição 🛒',
      secondaryCta: 'Falar com Atendente Humano'
    },
    {
      id: 'pix_pending',
      badge: 'Recuperação de PIX',
      badgeColor: '#10b981',
      title: 'PIX Gerado • Vaga Reservada',
      time: '11:45',
      hasVideo: false,
      bodyText: 'Seu código PIX foi gerado com sucesso! Sua vaga está reservada pelos próximos 30 minutos. Quer que eu reenvie a chave copia e cola por aqui?',
      ctaText: 'Copiar Chave PIX ⚡',
      secondaryCta: 'Tirar Dúvida sobre o Acesso'
    }
  ];

  const [currentTemplateIndex, setCurrentTemplateIndex] = useState(0);

  const prevTemplate = () => {
    trackClick('hero_phone_prev_template');
    setCurrentTemplateIndex(prev => (prev === 0 ? templates.length - 1 : prev - 1));
  };

  const nextTemplate = () => {
    trackClick('hero_phone_next_template');
    setCurrentTemplateIndex(prev => (prev === templates.length - 1 ? 0 : prev + 1));
  };

  const currentTemplate = templates[currentTemplateIndex];

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

        {/* WhatsApp Official Template Phone Simulator with Carousel Controls */}
        <div className="phone-outer-wrapper">
          {/* Navigation arrow Left */}
          <button 
            type="button"
            className="phone-nav-btn phone-nav-prev"
            onClick={prevTemplate}
            aria-label="Template anterior"
            title="Template anterior"
          >
            <ChevronLeft size={22} />
          </button>

          <div className="phone-wrapper" id="phone-simulator">
            {/* Phone Notch / Speaker bar */}
            <div className="phone-notch">
              <div className="phone-camera" />
              <div className="phone-speaker" />
            </div>

            <div className="phone-header">
              <div className="phone-header-avatar">
                <BotIcon size={20} style={{ color: '#030712' }} />
              </div>
              <div className="phone-header-info">
                <div className="phone-header-title-row">
                  <h4 className="phone-header-name">Disparo API Oficial</h4>
                  <span className="phone-official-badge">
                    <CheckCircle2 size={11} /> Verificado
                  </span>
                </div>
                <p className="phone-header-status">Conta Comercial Oficial da Meta</p>
              </div>
            </div>

            <div className="chat-body" id="chat-body">
              {/* Template Category Tag */}
              <div className="template-badge-wrapper">
                <span 
                  className="template-type-badge" 
                  style={{ backgroundColor: `${currentTemplate.badgeColor}20`, color: currentTemplate.badgeColor, borderColor: `${currentTemplate.badgeColor}50` }}
                >
                  <Sparkles size={11} /> {currentTemplate.badge}
                </span>
              </div>

              {/* Meta WhatsApp Template Message Bubble */}
              <div className="whatsapp-template-card">
                {/* Header Video if present */}
                {currentTemplate.hasVideo && (
                  <div className="template-media-box">
                    <div className="template-video-preview">
                      <div className="video-play-btn">
                        <Play size={20} fill="#ffffff" />
                      </div>
                      <div className="video-info-overlay">
                        <span className="video-badge-tag"><Video size={12} /> VÍDEO</span>
                        <span className="video-duration">{currentTemplate.videoDuration || '01:00'}</span>
                      </div>
                    </div>
                    {currentTemplate.videoTitle && (
                      <div className="template-video-title">
                        {currentTemplate.videoTitle}
                      </div>
                    )}
                  </div>
                )}

                {/* Template Body */}
                <div className="template-card-body">
                  <p className="template-text">{currentTemplate.bodyText}</p>
                  <div className="template-footer-time">
                    <span>{currentTemplate.time}</span>
                  </div>
                </div>

                {/* Template Action Buttons (WhatsApp CTA) */}
                <div className="template-actions-container">
                  <div className="template-action-btn primary-action">
                    {currentTemplate.id === 'abandoned_cart' && <ShoppingCart size={14} />}
                    {currentTemplate.id === 'pix_pending' && <QrCode size={14} />}
                    {currentTemplate.id === 'live_class' && <ExternalLink size={14} />}
                    <span>{currentTemplate.ctaText}</span>
                  </div>
                  {currentTemplate.secondaryCta && (
                    <div className="template-action-btn secondary-action">
                      <span>{currentTemplate.secondaryCta}</span>
                    </div>
                  )}
                </div>
              </div>

              {/* Template Indicator Dots */}
              <div className="phone-dots-indicator">
                {templates.map((tpl, idx) => (
                  <button
                    key={tpl.id}
                    type="button"
                    className={`indicator-dot ${idx === currentTemplateIndex ? 'active' : ''}`}
                    onClick={() => {
                      trackClick(`hero_phone_dot_${tpl.id}`);
                      setCurrentTemplateIndex(idx);
                    }}
                    aria-label={`Ir para template ${tpl.badge}`}
                  />
                ))}
              </div>
            </div>
          </div>

          {/* Navigation arrow Right */}
          <button 
            type="button"
            className="phone-nav-btn phone-nav-next"
            onClick={nextTemplate}
            aria-label="Próximo template"
            title="Próximo template"
          >
            <ChevronRight size={22} />
          </button>
        </div>
      </div>
    </section>
  );
}
