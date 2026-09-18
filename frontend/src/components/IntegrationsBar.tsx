import React from 'react';
import '../estilos/IntegrationsBar.css';
import { 
  Zap, 
  ShoppingCart, 
  Workflow, 
  Server, 
  Bot, 
  Mail, 
  ShieldCheck,
  CreditCard
} from 'lucide-react';

interface Platform {
  name: string;
  category: string;
  icon: React.ReactNode;
}

const PLATFORMS: Platform[] = [
  {
    name: 'Kiwify',
    category: 'Vendas & Checkout',
    icon: <ShoppingCart size={20} className="integration-icon text-emerald" />
  },
  {
    name: 'Hotmart',
    category: 'Infoprodutos',
    icon: <Zap size={20} className="integration-icon text-amber" />
  },
  {
    name: 'Eduzz',
    category: 'Pagamentos',
    icon: <CreditCard size={20} className="integration-icon text-amber" />
  },
  {
    name: 'ActiveCampaign',
    category: 'CRM & E-mail',
    icon: <Mail size={20} className="integration-icon text-cyan" />
  },
  {
    name: 'Typebot',
    category: 'Chatbots & Funis',
    icon: <Bot size={20} className="integration-icon text-violet" />
  },
  {
    name: 'n8n & Webhooks',
    category: 'Automação Avançada',
    icon: <Workflow size={20} className="integration-icon text-amber" />
  },
  {
    name: 'Hostinger VPS',
    category: 'Servidor Próprio',
    icon: <Server size={20} className="integration-icon text-cyan" />
  },
  {
    name: 'Meta Cloud API',
    category: 'Homologação Oficial',
    icon: <ShieldCheck size={20} className="integration-icon text-emerald" />
  }
];

export default function IntegrationsBar() {
  return (
    <section className="integrations-section" id="integracoes" aria-label="Integrações compatíveis">
      <div className="container">
        <div className="integrations-wrapper">
          <p className="integrations-label">
            ⚡ <strong>100% Compatível</strong> com as principais ferramentas e esteiras de infoprodutos:
          </p>
          
          <div className="integrations-grid" data-testid="integrations-list">
            {PLATFORMS.map((platform) => (
              <div key={platform.name} className="integration-pill" data-testid={`integration-${platform.name.toLowerCase().replace(/[^a-z0-9]/g, '-')}`}>
                <div className="integration-icon-wrap">
                  {platform.icon}
                </div>
                <div className="integration-info">
                  <span className="integration-name">{platform.name}</span>
                  <span className="integration-category">{platform.category}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
