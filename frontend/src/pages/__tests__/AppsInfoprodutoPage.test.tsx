import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import AppsInfoprodutoPage from '../AppsInfoprodutoPage';

describe('AppsInfoprodutoPage Component', () => {
  it('deve renderizar o título principal e elementos do Hero com foco em diagnóstico', () => {
    render(<AppsInfoprodutoPage />);

    expect(screen.getByTestId('apps-infoproduto-page')).toBeInTheDocument();
    expect(screen.getByText(/Criamos o/i)).toBeInTheDocument();
    expect(screen.getByText(/Aplicativo Perfeito/i)).toBeInTheDocument();
    expect(screen.getAllByText(/para o seu Infoproduto/i).length).toBeGreaterThan(0);
    expect(screen.getByText(/Analisamos a fundo o seu negócio e a sua audiência/i)).toBeInTheDocument();
    expect(screen.getByTestId('app-hero-cta-button')).toBeInTheDocument();
  });

  it('deve exibir o card de mockup evidenciando Dor Identificada e Solução no App', () => {
    render(<AppsInfoprodutoPage />);

    expect(screen.getByText(/Dor Identificada/i)).toBeInTheDocument();
    expect(screen.getByText(/Solução no App/i)).toBeInTheDocument();
    expect(screen.getByText(/Impacto Financeiro/i)).toBeInTheDocument();
  });

  it('deve exibir os pilares de diagnóstico, IA integrada e resolução de dores', () => {
    render(<AppsInfoprodutoPage />);

    expect(screen.getByTestId('app-benefit-analysis')).toBeInTheDocument();
    expect(screen.getByText(/Análise de Negócio e Audiência/i)).toBeInTheDocument();

    expect(screen.getByTestId('app-benefit-ai')).toBeInTheDocument();
    expect(screen.getByText(/Poder da IA Integrada/i)).toBeInTheDocument();

    expect(screen.getByTestId('app-benefit-pain')).toBeInTheDocument();
    expect(screen.getByText(/Resolução de Dores Críticas/i)).toBeInTheDocument();

    expect(screen.getByTestId('app-benefit-revenue')).toBeInTheDocument();
    expect(screen.getByText(/Nova Linha de Receita Recorrente/i)).toBeInTheDocument();

    // Verificação de texto da Era da IA e cursos obsoletos
    expect(screen.getByText(/era da Inteligência Artificial/i)).toBeInTheDocument();
    expect(screen.getAllByText(/obsoletos/i).length).toBeGreaterThan(0);
    expect(screen.getByText(/integrar uma IA exclusiva/i)).toBeInTheDocument();
  });

  it('deve exibir os tipos de aplicativos desenvolvidos', () => {
    render(<AppsInfoprodutoPage />);

    expect(screen.getByText(/Tipos de Aplicativos que Desenvolvemos/i)).toBeInTheDocument();
    expect(screen.getByText(/Apps de Ferramentas & Cálculos/i)).toBeInTheDocument();
    expect(screen.getByText(/Áreas de Membros Gamificadas/i)).toBeInTheDocument();
    expect(screen.getByText(/Sistemas de Gestão & Rotina/i)).toBeInTheDocument();
  });

  it('deve conter a seção Sobre Aryaraj e as Perguntas Frequentes (FAQ) em formato accordion iniciando fechado', () => {
    render(<AppsInfoprodutoPage />);

    // Seção Sobre
    expect(screen.getByText(/Quem está por trás do seu projeto\?/i)).toBeInTheDocument();
    expect(screen.getByText(/Perguntas Frequentes sobre Aplicativos/i)).toBeInTheDocument();
    expect(screen.getByText(/Como você sabe qual produto vai funcionar para a minha audiência\?/i)).toBeInTheDocument();
    expect(screen.getByText(/Eu preciso ter conhecimento de tecnologia ou programação\?/i)).toBeInTheDocument();
    expect(screen.getByText(/Como o app se integra com as minhas vendas/i)).toBeInTheDocument();

    // Todos iniciam fechados (sem active)
    const firstItem = screen.getByTestId('app-faq-item-0');
    expect(firstItem).not.toHaveClass('active');

    // Clica para abrir
    const firstBtn = screen.getByTestId('app-faq-btn-0');
    fireEvent.click(firstBtn);
    expect(firstItem).toHaveClass('active');

    // Clica para fechar
    fireEvent.click(firstBtn);
    expect(firstItem).not.toHaveClass('active');
  });

  it('deve renderizar o botão flutuante de WhatsApp com chamada para Aplicativo', () => {
    render(<AppsInfoprodutoPage />);

    expect(screen.getByText(/Quer criar um/i)).toBeInTheDocument();
    expect(screen.getAllByText(/Aplicativo/i).length).toBeGreaterThan(0);
  });

  it('deve conter o rodapé oficial padronizado com CNPJ e links legais', () => {
    render(<AppsInfoprodutoPage />);

    expect(screen.getByText(/60\.204\.548 ARYARAJ ALVES FERNANDES - CNPJ 60\.204\.548\/0001-85/i)).toBeInTheDocument();
    expect(screen.getByText(/Política de Privacidade/i)).toBeInTheDocument();
    expect(screen.getByText(/Termos de Uso/i)).toBeInTheDocument();
  });

  it('deve conter o botão de voltar para a página inicial na barra superior à esquerda da marca', () => {
    render(<AppsInfoprodutoPage />);
    const backBtn = screen.getByTestId('btn-app-back-home');
    expect(backBtn).toBeInTheDocument();
    expect(backBtn).toHaveAttribute('href', '/');
    expect(backBtn).toHaveTextContent('Início');

    fireEvent.click(backBtn);
    expect(window.location.pathname).toBe('/');
  });
});
