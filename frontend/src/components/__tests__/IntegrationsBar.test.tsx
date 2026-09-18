import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import IntegrationsBar from '../IntegrationsBar';

describe('IntegrationsBar Component', () => {
  it('renderiza a barra de integrações com o título descritivo', () => {
    render(<IntegrationsBar />);
    
    expect(screen.getByTestId('integrations-list')).toBeInTheDocument();
    expect(screen.getByText(/100% Compatível/i)).toBeInTheDocument();
  });

  it('renderiza todas as plataformas cadastradas', () => {
    render(<IntegrationsBar />);

    expect(screen.getByTestId('integration-kiwify')).toBeInTheDocument();
    expect(screen.getByTestId('integration-hotmart')).toBeInTheDocument();
    expect(screen.getByTestId('integration-eduzz')).toBeInTheDocument();
    expect(screen.getByTestId('integration-activecampaign')).toBeInTheDocument();
    expect(screen.getByTestId('integration-typebot')).toBeInTheDocument();
    expect(screen.getByTestId('integration-n8n---webhooks')).toBeInTheDocument();
    expect(screen.getByTestId('integration-hostinger-vps')).toBeInTheDocument();
    expect(screen.getByTestId('integration-meta-cloud-api')).toBeInTheDocument();
  });

  it('exibe categorias ou funções em cada card', () => {
    render(<IntegrationsBar />);

    expect(screen.getByText(/Vendas & Checkout/i)).toBeInTheDocument();
    expect(screen.getByText(/Chatbots & Funis/i)).toBeInTheDocument();
    expect(screen.getByText(/Automação Avançada/i)).toBeInTheDocument();
    expect(screen.getByText(/Homologação Oficial/i)).toBeInTheDocument();
  });
});
