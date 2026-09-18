import React, { useState } from 'react';
import { MessageCircle, X } from 'lucide-react';
import { WHATSAPP_LINK } from '../config';
import { trackClick } from '../utils/tracking';
import '../estilos/FloatingWhatsApp.css';

interface FloatingWhatsAppProps {
  tooltipText?: React.ReactNode;
  customLink?: string;
}

const FloatingWhatsApp: React.FC<FloatingWhatsAppProps> = ({ tooltipText, customLink }) => {
  const [isOpen, setIsOpen] = useState(true);

  const handleClick = () => {
    trackClick('floating_whatsapp');
  };

  const link = customLink || WHATSAPP_LINK;

  return (
    <div className="floating-whatsapp-container" data-testid="floating-whatsapp-container">
      {isOpen && (
        <div className="floating-whatsapp-tooltip" data-testid="floating-whatsapp-tooltip">
          <div className="tooltip-header">
            <span className="tooltip-badge">Online Agora</span>
            <button 
              className="tooltip-close" 
              onClick={() => setIsOpen(false)}
              aria-label="Fechar balão de mensagem"
              data-testid="floating-whatsapp-close"
            >
              <X size={14} />
            </button>
          </div>
          <p className="tooltip-text">
            {tooltipText || (
              <>
                Dúvidas sobre a <strong>API Oficial</strong>? Fale diretamente comigo no WhatsApp 👋
              </>
            )}
          </p>
        </div>
      )}

      <a
        href={link}
        target="_blank"
        rel="noopener noreferrer"
        className="floating-whatsapp-btn"
        onClick={handleClick}
        aria-label="Conversar no WhatsApp"
        data-testid="floating-whatsapp-btn"
      >
        <span className="pulse-ring"></span>
        <MessageCircle size={30} className="whatsapp-icon" />
      </a>
    </div>
  );
};

export default FloatingWhatsApp;
