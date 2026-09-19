import React, { useState, useEffect } from 'react';
import '../estilos/Navbar.css';
import { 
  Sparkles, 
  Zap, 
  Layers, 
  ShieldCheck, 
  Tag, 
  DollarSign, 
  ClipboardCheck, 
  Award, 
  HelpCircle, 
  MessageCircle, 
  Menu, 
  X,
  MessageSquareCode,
  ArrowLeft
} from 'lucide-react';
import { WHATSAPP_LINK } from '../config';

interface NavItem {
  id: string;
  label: string;
  href: string;
  icon: React.ReactNode;
}

const NAV_ITEMS: NavItem[] = [
  {
    id: 'inicio',
    label: 'Início',
    href: '#inicio',
    icon: <Sparkles className="nav-item-icon" size={16} />,
  },
  {
    id: 'beneficios',
    label: 'Benefícios',
    href: '#beneficios',
    icon: <Zap className="nav-item-icon" size={16} />,
  },
  {
    id: 'casos-de-uso',
    label: 'Casos de Uso',
    href: '#casos-de-uso',
    icon: <Layers className="nav-item-icon" size={16} />,
  },
  {
    id: 'comparativo',
    label: 'Comparativo',
    href: '#comparativo',
    icon: <ShieldCheck className="nav-item-icon" size={16} />,
  },
  {
    id: 'tarifas-meta',
    label: 'Tarifas Meta',
    href: '#tarifas-meta',
    icon: <Tag className="nav-item-icon" size={16} />,
  },
  {
    id: 'roi-hook',
    label: 'Economia',
    href: '#roi-hook',
    icon: <DollarSign className="nav-item-icon" size={16} />,
  },
  {
    id: 'processo',
    label: 'Processo',
    href: '#processo',
    icon: <ClipboardCheck className="nav-item-icon" size={16} />,
  },
  {
    id: 'sobre',
    label: 'Sobre',
    href: '#sobre',
    icon: <Award className="nav-item-icon" size={16} />,
  },
  {
    id: 'faq',
    label: 'Dúvidas',
    href: '#faq',
    icon: <HelpCircle className="nav-item-icon" size={16} />,
  },
];

export default function Navbar() {
  const [activeSection, setActiveSection] = useState<string>('inicio');
  const [mobileMenuOpen, setMobileMenuOpen] = useState<boolean>(false);

  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const targetId = href.replace('#', '');
    const element = document.getElementById(targetId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      window.history.pushState(null, '', href);
      setActiveSection(targetId);
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 140;
      for (const item of [...NAV_ITEMS].reverse()) {
        const targetId = item.href.replace('#', '');
        const element = document.getElementById(targetId);
        if (element && element.offsetTop <= scrollPosition) {
          setActiveSection(targetId);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleBackToHome = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    window.history.pushState(null, '', '/');
    window.dispatchEvent(new PopStateEvent('popstate'));
  };

  return (
    <header className="navbar-header" id="main-header">
      <div className="navbar-container">
        {/* Left Action / Voltar para a Home */}
        <div className="nav-left-group">
          <a
            href="/"
            onClick={handleBackToHome}
            className="btn-nav-back"
            data-testid="btn-nav-back-home"
            title="Voltar para a página inicial"
          >
            <ArrowLeft size={18} />
            <span className="btn-nav-back-text">Início</span>
          </a>

          {/* Brand / Logo */}
          <a 
            href="#inicio" 
            onClick={(e) => scrollToSection(e, '#inicio')} 
            className="nav-brand" 
            id="nav-logo"
          >
            <div className="nav-brand-icon-wrapper">
              <MessageSquareCode size={24} className="nav-brand-icon" />
            </div>
            <div className="nav-brand-texts">
              <span className="nav-brand-title">
                Aryaraj <span className="nav-brand-highlight">API</span>
              </span>
              <span className="nav-brand-subtitle">Oficial Meta & Automações</span>
            </div>
          </a>
        </div>

        {/* Desktop Navigation Links */}
        <nav className="nav-links-desktop" aria-label="Navegação principal">
          {NAV_ITEMS.map((item) => {
            const isActive = activeSection === item.id;
            return (
              <a
                key={item.id}
                href={item.href}
                onClick={(e) => scrollToSection(e, item.href)}
                className={`nav-link-pill ${isActive ? 'active' : ''}`}
                data-testid={`nav-item-${item.id}`}
              >
                {item.icon}
                <span>{item.label}</span>
              </a>
            );
          })}
        </nav>

        {/* Action Button & Mobile Toggle */}
        <div className="nav-right-actions">
          <a
            href={WHATSAPP_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-nav-whatsapp"
            id="navbar-whatsapp-cta"
          >
            <MessageCircle size={18} />
            <span>WhatsApp</span>
          </a>

          <button
            type="button"
            className="mobile-menu-toggle"
            onClick={() => setMobileMenuOpen(prev => !prev)}
            aria-label={mobileMenuOpen ? "Fechar menu" : "Abrir menu"}
            data-testid="mobile-menu-btn"
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="mobile-menu-dropdown" data-testid="mobile-menu-dropdown">
          <div className="mobile-menu-inner">
            {NAV_ITEMS.map((item) => {
              const isActive = activeSection === item.id;
              return (
                <a
                  key={item.id}
                  href={item.href}
                  onClick={(e) => scrollToSection(e, item.href)}
                  className={`mobile-nav-link ${isActive ? 'active' : ''}`}
                >
                  {item.icon}
                  <span>{item.label}</span>
                </a>
              );
            })}
            <div className="mobile-menu-footer">
              <a
                href="/"
                onClick={(e) => {
                  e.preventDefault();
                  setMobileMenuOpen(false);
                  handleBackToHome(e);
                }}
                className="mobile-nav-link"
                style={{ marginBottom: '8px', color: '#b45309', fontWeight: 600, background: '#fef3c7' }}
              >
                <ArrowLeft size={16} />
                <span>Voltar aos Serviços (Início)</span>
              </a>
              <a
                href={WHATSAPP_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-nav-whatsapp btn-nav-whatsapp-mobile"
                onClick={() => setMobileMenuOpen(false)}
              >
                <MessageCircle size={18} />
                <span>Conversar no WhatsApp</span>
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
