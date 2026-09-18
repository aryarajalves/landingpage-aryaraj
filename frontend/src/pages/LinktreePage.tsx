import React, { useEffect } from 'react';
import '../estilos/LinktreePage.css';
import { MessageSquareCode, ArrowRight, ShieldCheck, Bot, Smartphone, Handshake } from 'lucide-react';
import { trackClick } from '../utils/tracking';
import Footer from '../components/Footer';

interface LinktreePageProps {
  onNavigate?: (path: string) => void;
}

const LinktreePage: React.FC<LinktreePageProps> = ({ onNavigate }) => {
  useEffect(() => {
    document.title = 'Serviços';
  }, []);

  const handleNavigateToApiOficial = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    trackClick('linktree_btn_apioficial');
    if (onNavigate) {
      onNavigate('/apioficial');
    } else {
      window.history.pushState(null, '', '/apioficial');
      window.dispatchEvent(new PopStateEvent('popstate'));
    }
  };

  return (
    <div className="linktree-container" data-testid="linktree-page">
      {/* Decorative Glows */}
      <div className="glow-container">
        <div className="glow-purple"></div>
        <div className="glow-cyan"></div>
        <div className="glow-green"></div>
      </div>

      <div className="linktree-card">
        {/* Brand Icon / Avatar */}
        <div className="linktree-avatar">
          <MessageSquareCode size={40} />
        </div>

        {/* Título & Descrição solicitados */}
        <h1 className="linktree-title">
          Aryaraj <span className="highlight">Serviços</span>
        </h1>
        <p className="linktree-desc">
          Desenvolvemos Tecnologia para o seu projeto de infoproduto, conheça nossos serviços pelos botões abaixo:
        </p>

        {/* Links / Botões */}
        <div className="linktree-links">
          {/* 1. API Oficial do WhatsApp */}
          <a
            href="/apioficial"
            className="linktree-btn linktree-btn-main"
            onClick={handleNavigateToApiOficial}
            data-testid="linktree-btn-apioficial"
          >
            <div className="linktree-btn-content">
              <div className="linktree-btn-icon">
                <ShieldCheck size={24} />
              </div>
              <div className="linktree-btn-text">
                <span className="linktree-btn-title">API Oficial do WhatsApp</span>
                <span className="linktree-btn-sub">Infraestrutura em nuvem, multi-atendentes e anti-ban</span>
              </div>
            </div>
            <ArrowRight size={20} />
          </a>

          {/* 2. Implementação de IA no WhatsApp (Ativo) */}
          <a
            href="/agente-whatsapp"
            className="linktree-btn"
            onClick={(e) => {
              e.preventDefault();
              trackClick('linktree_btn_ia');
              if (onNavigate) {
                onNavigate('/agente-whatsapp');
              } else {
                window.history.pushState(null, '', '/agente-whatsapp');
                window.dispatchEvent(new PopStateEvent('popstate'));
              }
            }}
            data-testid="linktree-btn-ia"
          >
            <div className="linktree-btn-content">
              <div className="linktree-btn-icon" style={{ color: '#7c3aed' }}>
                <Bot size={24} />
              </div>
              <div className="linktree-btn-text">
                <span className="linktree-btn-title">Implementação de IA no WhatsApp</span>
                <span className="linktree-btn-sub">Agentes inteligentes, qualificação e vendas 24/7</span>
              </div>
            </div>
            <ArrowRight size={20} />
          </a>

          {/* 3. Criação de Aplicativos para Infoproduto (Ativo) */}
          <a
            href="/aplicativos"
            className="linktree-btn"
            onClick={(e) => {
              e.preventDefault();
              trackClick('linktree_btn_apps');
              if (onNavigate) {
                onNavigate('/aplicativos');
              } else {
                window.history.pushState(null, '', '/aplicativos');
                window.dispatchEvent(new PopStateEvent('popstate'));
              }
            }}
            data-testid="linktree-btn-apps"
          >
            <div className="linktree-btn-content">
              <div className="linktree-btn-icon" style={{ color: '#0284c7' }}>
                <Smartphone size={24} />
              </div>
              <div className="linktree-btn-text">
                <span className="linktree-btn-title">Criação de Aplicativos</span>
                <span className="linktree-btn-sub">App próprio sob medida que resolve a dor da sua audiência</span>
              </div>
            </div>
            <ArrowRight size={20} />
          </a>

          {/* 4. Co-Produção e Suporte Técnico Especializado (Ativo) */}
          <a
            href="/coproducao"
            className="linktree-btn"
            onClick={(e) => {
              e.preventDefault();
              trackClick('linktree_btn_coproducao');
              if (onNavigate) {
                 onNavigate('/coproducao');
              } else {
                window.history.pushState(null, '', '/coproducao');
                window.dispatchEvent(new PopStateEvent('popstate'));
              }
            }}
            data-testid="linktree-btn-coproducao"
          >
            <div className="linktree-btn-content">
              <div className="linktree-btn-icon" style={{ color: '#4f46e5' }}>
                <Handshake size={24} />
              </div>
              <div className="linktree-btn-text">
                <span className="linktree-btn-title">Co-Produção Tecnológica</span>
                <span className="linktree-btn-sub">Apoio completo de Aryaraj e equipe técnica no seu projeto</span>
              </div>
            </div>
            <ArrowRight size={20} />
          </a>
        </div>
      </div>

      {/* Rodapé Oficial Padronizado */}
      <Footer />
    </div>
  );
};

export default LinktreePage;
