import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import CoproducaoPage from '../CoproducaoPage';

describe('CoproducaoPage Component', () => {
  it('deve renderizar o título principal e elementos do Hero com foco em Co-Produção Tecnológica', () => {
    render(<CoproducaoPage />);

    expect(screen.getByTestId('coproducao-page')).toBeInTheDocument();
    expect(screen.getByText(/Seu Braço Técnico e/i)).toBeInTheDocument();
    expect(screen.getByText(/Co-Produtor de Tecnologia/i)).toBeInTheDocument();
    expect(screen.getByText(/Nós assumimos 100% da tecnologia/i)).toBeInTheDocument();
    expect(screen.getByTestId('co-hero-cta-button')).toBeInTheDocument();
  });

  it('deve exibir o mockup comparativo de papéis entre Especialista e Tech Partner', () => {
    render(<CoproducaoPage />);

    expect(screen.getByText(/Divisão Perfeita de Papéis/i)).toBeInTheDocument();
    expect(screen.getByText(/Seu Papel \(Especialista\)/i)).toBeInTheDocument();
    expect(screen.getByText(/Nosso Papel \(Tech Partner\)/i)).toBeInTheDocument();
    expect(screen.getByText(/O Resultado/i)).toBeInTheDocument();
  });

  it('deve exibir os 4 pilares de benefícios da parceria tecnológica', () => {
    render(<CoproducaoPage />);

    expect(screen.getByTestId('co-benefit-engineering')).toBeInTheDocument();
    expect(screen.getByText(/Engenharia Completa/i)).toBeInTheDocument();

    expect(screen.getByTestId('co-benefit-ai')).toBeInTheDocument();
    expect(screen.getByText(/Inteligência Artificial Integrada/i)).toBeInTheDocument();

    expect(screen.getByTestId('co-benefit-scale')).toBeInTheDocument();
    expect(screen.getByText(/Segurança & Escalabilidade/i)).toBeInTheDocument();
    expect(screen.getByText(/com quedas minimizadas/i)).toBeInTheDocument();

    expect(screen.getByTestId('co-benefit-speed')).toBeInTheDocument();
    expect(screen.getByText(/Velocidade de Execução/i)).toBeInTheDocument();
  });

  it('deve exibir o ecossistema de ferramentas inclusas e a economia de 2 a 5 mil reais por mês', () => {
    render(<CoproducaoPage />);

    expect(screen.getByText(/Ecossistema Completo de Ferramentas Já Inclusas/i)).toBeInTheDocument();
    expect(screen.getByTestId('co-savings-banner')).toBeInTheDocument();
    expect(screen.getByText(/Economize de R\$ 2\.000 a R\$ 5\.000/i)).toBeInTheDocument();

    // ZapJords / ManyChat
    expect(screen.getByTestId('tool-zapjords')).toBeInTheDocument();
    expect(screen.getByText(/ZapJords \(Disparo Oficial\)/i)).toBeInTheDocument();
    expect(screen.getAllByText(/ManyChat/i).length).toBeGreaterThan(0);

    // AgentFlow
    expect(screen.getByTestId('tool-agentflow')).toBeInTheDocument();
    expect(screen.getByText(/AgentFlow \(Agentes de IA\)/i)).toBeInTheDocument();

    // ZapGroup / DevZap
    expect(screen.getByTestId('tool-zapgroup')).toBeInTheDocument();
    expect(screen.getByText(/ZapGroup \(Gestão de Grupos\)/i)).toBeInTheDocument();
    expect(screen.getAllByText(/DevZap/i).length).toBeGreaterThan(0);

    // Vtubr / Hotwebinar
    expect(screen.getByTestId('tool-webinars-video')).toBeInTheDocument();
    expect(screen.getByText(/Soluções Tipo Vtubr & Hotwebinar/i)).toBeInTheDocument();
    expect(screen.getAllByText(/Vtubr/i).length).toBeGreaterThan(0);
    expect(screen.getAllByText(/Hotwebinar/i).length).toBeGreaterThan(0);

    // Aplicativos & Checkouts
    expect(screen.getByTestId('tool-custom-apps')).toBeInTheDocument();
    expect(screen.getByTestId('tool-checkouts')).toBeInTheDocument();
  });

  it('deve conter a seção Sobre e as Perguntas Frequentes (FAQ) em formato accordion iniciando fechado', () => {
    render(<CoproducaoPage />);

    // Seção Sobre
    expect(screen.getByText(/Quem está por trás do seu projeto\?/i)).toBeInTheDocument();
    expect(screen.getByText(/Perguntas Frequentes sobre Co-Produção/i)).toBeInTheDocument();
    expect(screen.getByText(/Como funciona o modelo de Co-Produção Tecnológica\?/i)).toBeInTheDocument();
    expect(screen.getByText(/Para quem é indicada a Co-Produção Tecnológica\?/i)).toBeInTheDocument();
    expect(screen.getByText(/Qual é o modelo de remuneração da parceria\?/i)).toBeInTheDocument();

    // Accordion fechado inicialmente
    const firstItem = screen.getByTestId('co-faq-item-0');
    expect(firstItem).not.toHaveClass('active');

    // Clicar para abrir
    const firstBtn = screen.getByTestId('co-faq-btn-0');
    fireEvent.click(firstBtn);
    expect(firstItem).toHaveClass('active');

    // Clicar para fechar
    fireEvent.click(firstBtn);
    expect(firstItem).not.toHaveClass('active');
  });

  it('deve renderizar o botão flutuante de WhatsApp com chamada para parceria de Tecnologia', () => {
    render(<CoproducaoPage />);

    expect(screen.getByText(/Quer um parceiro de/i)).toBeInTheDocument();
    expect(screen.getAllByText(/Tecnologia/i).length).toBeGreaterThan(0);
  });
});
