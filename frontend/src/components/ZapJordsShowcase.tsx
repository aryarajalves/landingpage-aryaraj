import React, { useState } from 'react';
import '../estilos/ZapJordsShowcase.css';
import { 
  MessageSquare, 
  Send, 
  FileText, 
  GitFork, 
  Webhook, 
  CheckCircle2, 
  ShieldCheck, 
  Sparkles,
  Layers
} from 'lucide-react';
import { trackClick } from '../utils/tracking';

interface ShowcaseTab {
  id: string;
  label: string;
  badge: string;
  title: string;
  description: string;
  image: string;
  icon: React.ReactNode;
  highlights: string[];
}

export default function ZapJordsShowcase() {
  const tabs: ShowcaseTab[] = [
    {
      id: 'atendimento',
      label: 'Painel de Atendimento',
      badge: 'Multi-Atendentes',
      title: 'Central Unificada de Atendimento e Suporte',
      description: 'Centralize conversas com múltiplos operadores usando o mesmo número oficial. Veja em tempo real status de janela de 24h, tags do lead, contagem de mensagens do usuário/agente e transbordo humano sem atritos.',
      image: '/zapjords_atendimento.png',
      icon: <MessageSquare size={18} />,
      highlights: [
        'Multi-operadores simultâneos no mesmo número oficial',
        'Filtros inteligentes: Janela 24h, Urgentes, Não Lidas e Funil Ativo',
        'Integração direta com AgentFlow para transbordo automático'
      ]
    },
    {
      id: 'historico',
      label: 'Disparos em Massa',
      badge: 'Alta Escala',
      title: 'Histórico e Telemetria em Tempo Real de Disparos',
      description: 'Monitore campanhas de disparos em massa em tempo real. Acompanhe taxas de entrega, leituras, respostas, economia com disparos gratuitos dentro da janela e custos exatos da Meta por disparo com transparência total.',
      image: '/zapjords_historico.png',
      icon: <Send size={18} />,
      highlights: [
        'Disparo com cadência inteligente e sem risco de banimento',
        'Controle de disparos grátis e custos exatos por lote',
        'Métricas de cliques e interações por funil em tempo real'
      ]
    },
    {
      id: 'templates',
      label: 'Criação de Templates',
      badge: 'Aprovação Meta',
      title: 'Gerenciador e Editor de Templates Homologados',
      description: 'Crie e envie templates de Marketing, Utilidade ou Autenticação diretamente para aprovação da Meta. Suporte completo para cabeçalhos com vídeo, imagem, documentos, variáveis dinâmicas e botões de CTA.',
      image: '/zapjords_templates.png',
      icon: <FileText size={18} />,
      highlights: [
        'Suporte a mídia rica (Vídeo, Imagem, Documento e Botões)',
        'Validador de variáveis no padrão oficial Meta {{1}}, {{2}}',
        'Status de aprovação em tempo real (Approved / Em Análise)'
      ]
    },
    {
      id: 'funis',
      label: 'Construtor de Funis',
      badge: 'Visual No-Code',
      title: 'Automações e Funis de Conversação Visuais',
      description: 'Crie jornadas automáticas de conversão com nosso editor visual estilo nó. Configure gatilhos de primeira mensagem, palavras-chave, segmentações locais no CRM e etiquetagem inteligente de leads.',
      image: '/zapjords_funis.png',
      icon: <GitFork size={18} />,
      highlights: [
        'Editor de fluxos visual tipo no-code com nós conectados',
        'Rotas condicionais por palavras-chave e intenção do lead',
        'Ações de CRM: segmentação, etiquetas e integração com RabbitMQ'
      ]
    },
    {
      id: 'webhooks',
      label: 'Integrações Webhook',
      badge: 'Hotmart & Kiwify',
      title: 'Conexão Instantânea com Plataformas de Checkout',
      description: 'Conecte Hotmart, Kiwify, Eduzz, ZapGroup e plataformas externas via webhooks. Dispare mensagens automáticas de carrinho abandonado, PIX pendente e boas-vindas com delay inteligente.',
      image: '/zapjords_webhooks.png',
      icon: <Webhook size={18} />,
      highlights: [
        'Disparos imediatos ou programados pós-evento de venda',
        'Totalmente compatível com Hotmart, Kiwify, Eduzz e ZapGroup',
        'Histórico individual de eventos recebidos e taxa de conversão'
      ]
    }
  ];

  const [activeTabId, setActiveTabId] = useState<string>('atendimento');

  const activeTab = tabs.find(t => t.id === activeTabId) || tabs[0];

  const handleTabChange = (tabId: string) => {
    trackClick(`zapjords_showcase_tab_${tabId}`);
    setActiveTabId(tabId);
  };

  return (
    <section className="section zapjords-showcase-section" id="ferramenta-por-dentro">
      <div className="container">
        <div className="showcase-header">
          <div className="showcase-badge" data-testid="zapjords-badge">
            <Sparkles size={16} />
            <span>Ferramenta Própria • Tecnologia Exclusiva</span>
          </div>
          <h2 className="showcase-title">
            Conheça a <span className="text-gradient">ZapJords</span> Por Dentro
          </h2>
          <p className="showcase-subtitle">
            Veja as telas reais da nossa plataforma oficial de disparo em massa, atendimento e automações. 
            Uma infraestrutura robusta, visual e sem dependência de plataformas de terceiros caras.
          </p>
        </div>

        {/* Abas de Navegação */}
        <div className="showcase-tabs-nav" role="tablist">
          {tabs.map((tab) => {
            const isActive = tab.id === activeTab.id;
            return (
              <button
                key={tab.id}
                role="tab"
                aria-selected={isActive}
                className={`showcase-tab-btn ${isActive ? 'active' : ''}`}
                onClick={() => handleTabChange(tab.id)}
                data-testid={`zapjords-tab-${tab.id}`}
              >
                {tab.icon}
                <span>{tab.label}</span>
              </button>
            );
          })}
        </div>

        {/* Card de Exibição da Tela Ativa */}
        <div className="showcase-display-card" data-testid="zapjords-display-card">
          <div className="showcase-screen-meta">
            <div className="showcase-meta-top">
              <span className="showcase-tag-badge">
                <Layers size={13} /> {activeTab.badge}
              </span>
              <span className="showcase-verified-badge">
                <ShieldCheck size={14} /> Homologado API Oficial Meta
              </span>
            </div>
            <h3 className="showcase-screen-title">{activeTab.title}</h3>
            <p className="showcase-screen-desc">{activeTab.description}</p>
            
            <div className="showcase-highlights-list">
              {activeTab.highlights.map((highlight, idx) => (
                <div key={idx} className="showcase-highlight-item">
                  <CheckCircle2 size={16} className="highlight-check-icon" />
                  <span>{highlight}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Imagem Real do Sistema com Moldura Estilo App */}
          <div className="showcase-screen-frame">
            <div className="screen-frame-topbar">
              <div className="frame-dot red" />
              <div className="frame-dot yellow" />
              <div className="frame-dot green" />
              <div className="frame-url-bar">
                <span>zapjords.aryaraj.com.br/{activeTab.id}</span>
              </div>
            </div>
            <div className="screen-image-wrapper">
              <img 
                src={activeTab.image} 
                alt={`Tela do ZapJords: ${activeTab.title}`}
                className="screen-real-image"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
