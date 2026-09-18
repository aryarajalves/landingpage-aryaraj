import React from 'react';
import '../estilos/Footer.css';
import { API_URL } from '../config';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-links">
        <a
          href={`${API_URL}/politica-privacidade`}
          target="_blank"
          rel="noopener noreferrer"
          className="footer-link"
          id="footer-privacy-link"
        >
          Política de Privacidade
        </a>
        <a
          href={`${API_URL}/termos-uso`}
          target="_blank"
          rel="noopener noreferrer"
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
