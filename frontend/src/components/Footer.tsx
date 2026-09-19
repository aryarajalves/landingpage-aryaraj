import React from 'react';
import '../estilos/Footer.css';

interface FooterProps {
  onNavigate?: (path: string) => void;
}

export default function Footer({ onNavigate }: FooterProps) {
  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, path: string) => {
    e.preventDefault();
    if (onNavigate) {
      onNavigate(path);
    } else {
      window.history.pushState(null, '', path);
      window.dispatchEvent(new PopStateEvent('popstate'));
    }
  };

  return (
    <footer className="footer">
      <div className="footer-links">
        <a
          href="/politica-privacidade"
          onClick={(e) => handleLinkClick(e, '/politica-privacidade')}
          className="footer-link"
          id="footer-privacy-link"
        >
          Política de Privacidade
        </a>
        <a
          href="/termos-uso"
          onClick={(e) => handleLinkClick(e, '/termos-uso')}
          className="footer-link"
          id="footer-terms-link"
        >
          Termos de Uso
        </a>
      </div>
      <div className="footer-info">
        60.204.548 ARYARAJ ALVES FERNANDES - CNPJ 60.204.548/0001-85
      </div>
      <div className="footer-copy">
        &copy; 2026 Aryaraj Automações. Todos os direitos reservados.
      </div>
    </footer>
  );
}
