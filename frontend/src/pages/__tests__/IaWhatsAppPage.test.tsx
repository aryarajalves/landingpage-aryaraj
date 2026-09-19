import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { describe, it, expect, vi } from 'vitest';
import IaWhatsAppPage from '../IaWhatsAppPage';

describe('IaWhatsAppPage Component', () => {
  it('deve renderizar o título principal e elementos do Hero com redirecionamento para onboarding', () => {
    render(<IaWhatsAppPage />);

    expect(screen.getByTestId('ia-whatsapp-page')).toBeInTheDocument();
    expect(screen.getByText(/Atenda, Qualifique e Venda no WhatsApp/i)).toBeInTheDocument();
    expect(screen.getByText(/IA Treinada no seu Produto/i)).toBeInTheDocument();

    const heroCta = screen.getByTestId('ia-hero-cta');
    expect(heroCta).toBeInTheDocument();
    expect(heroCta).toHaveAttribute('href', '#onboarding');
  });

  it('deve exibir os pilares estratégicos incluindo API Oficial e Painel de Aprendizado', () => {
    render(<IaWhatsAppPage />);

    expect(screen.getByTestId('card-treinamento')).toBeInTheDocument();
    expect(screen.getByText(/Treinamento Especializado/i)).toBeInTheDocument();

    expect(screen.getByTestId('card-transbordo')).toBeInTheDocument();
    expect(screen.getByText(/Transbordo Humano Imediato/i)).toBeInTheDocument();

    expect(screen.getByTestId('card-followup')).toBeInTheDocument();
    expect(screen.getByText(/Sistema de Follow-Up Ativo/i)).toBeInTheDocument();

    expect(screen.getByTestId('card-qualificacao')).toBeInTheDocument();
    expect(screen.getByText(/Qualificação da Conversa/i)).toBeInTheDocument();

    expect(screen.getByTestId('card-apioficial')).toBeInTheDocument();
    expect(screen.getByText(/100% API Oficial da Meta/i)).toBeInTheDocument();

    expect(screen.getByTestId('card-painel-treinamento')).toBeInTheDocument();
    expect(screen.getByText(/Painel de Aprendizado Contínuo/i)).toBeInTheDocument();
  });

  it('deve exibir as etapas de implementação e coleta de dados da empresa', () => {
    render(<IaWhatsAppPage />);

    expect(screen.getByText(/Mapeamento da Empresa/i)).toBeInTheDocument();
    expect(screen.getByText(/Catálogo de Infoprodutos/i)).toBeInTheDocument();
    expect(screen.getByText(/Treinamento & Homologação/i)).toBeInTheDocument();
  });

  it('deve renderizar o simulador de chat com IA evidenciando qualificação, envio ao painel e transbordo humano', () => {
    render(<IaWhatsAppPage />);

    expect(screen.getByText(/Lead Qualificado • Perfil: Renda Extra \/ CLT/i)).toBeInTheDocument();
    expect(screen.getByText(/Dúvida enviada ao Painel para Treinamento/i)).toBeInTheDocument();
    expect(screen.getByText(/Transbordo Humano Acionado com Sucesso/i)).toBeInTheDocument();
  });

  it('deve responder às dúvidas frequentes no FAQ em formato accordion iniciando fechado', () => {
    render(<IaWhatsAppPage />);

    // Todas as perguntas presentes
    expect(screen.getByText(/Por que a estrutura é focada 100% na API Oficial do WhatsApp\?/i)).toBeInTheDocument();
    expect(screen.getByText(/A IA pode alucinar ou inventar informações se não souber a resposta\?/i)).toBeInTheDocument();
    expect(screen.getByText(/A IA consegue entender áudios que os leads enviam no WhatsApp\?/i)).toBeInTheDocument();
    expect(screen.getByText(/Quanto custa manter a IA rodando depois de implementada\?/i)).toBeInTheDocument();
    expect(screen.getByText(/Como funciona a integração com plataformas de vendas/i)).toBeInTheDocument();
    expect(screen.getByText(/Minha equipe humana consegue ver as conversas e intervir a qualquer momento\?/i)).toBeInTheDocument();
    expect(screen.getByText(/Quanto tempo demora para a implementação ficar pronta e rodando\?/i)).toBeInTheDocument();
    expect(screen.getByText(/Qual número ou chip devo usar para a implementação\?/i)).toBeInTheDocument();

    // Todos iniciam fechados (sem a classe active)
    const firstFaqItem = screen.getByTestId('faq-item-0');
    expect(firstFaqItem).not.toHaveClass('active');

    // Ao clicar no botão, abre o item
    const firstFaqBtn = screen.getByTestId('faq-btn-0');
    fireEvent.click(firstFaqBtn);
    expect(firstFaqItem).toHaveClass('active');
    expect(screen.getByText(/Painel de Perguntas Não Respondidas/i)).toBeInTheDocument();

    // Ao clicar novamente, fecha o item
    fireEvent.click(firstFaqBtn);
    expect(firstFaqItem).not.toHaveClass('active');
  });

  it('deve exibir o botão flutuante com chamada específica para Agente de IA', () => {
    render(<IaWhatsAppPage />);

    expect(screen.getByText(/Dúvidas sobre o/i)).toBeInTheDocument();
    expect(screen.getByText(/Agente de IA/i)).toBeInTheDocument();
  });

  it('deve renderizar a seção Sobre com a história de Aryaraj antes do FAQ', () => {
    render(<IaWhatsAppPage />);

    expect(screen.getByText(/Quem está por trás do seu projeto\?/i)).toBeInTheDocument();
    expect(screen.getByTestId('about-title')).toHaveTextContent('Quem é Aryaraj?');
    expect(screen.getByText(/Olá, me chamo Aryaraj, tenho 28 anos e sou natural de Fortaleza/i)).toBeInTheDocument();
  });

  it('deve conter o rodapé oficial padronizado com CNPJ e links legais', () => {
    render(<IaWhatsAppPage />);

    expect(screen.getByText(/60\.204\.548 ARYARAJ ALVES FERNANDES - CNPJ 60\.204\.548\/0001-85/i)).toBeInTheDocument();
    expect(screen.getByText(/Política de Privacidade/i)).toBeInTheDocument();
    expect(screen.getByText(/Termos de Uso/i)).toBeInTheDocument();
  });

  it('deve conter o botão de voltar na barra superior à esquerda da marca e retornar no histórico', () => {
    Object.defineProperty(window.history, 'length', { value: 3, configurable: true });
    const backSpy = vi.spyOn(window.history, 'back').mockImplementation(() => {});
    render(<IaWhatsAppPage />);
    const backBtn = screen.getByTestId('btn-ia-back-home');
    expect(backBtn).toBeInTheDocument();
    expect(backBtn).toHaveAttribute('href', '/');
    expect(backBtn).toHaveTextContent('Voltar');

    fireEvent.click(backBtn);
    expect(backSpy).toHaveBeenCalled();
    backSpy.mockRestore();
  });
});
