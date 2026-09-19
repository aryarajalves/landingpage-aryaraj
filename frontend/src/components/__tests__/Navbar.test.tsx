import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { describe, it, expect, vi } from 'vitest';
import Navbar from '../Navbar';
import { WHATSAPP_LINK } from '../../config';

describe('Componente Navbar', () => {
  it('deve renderizar a marca com Aryaraj API e o subtítulo oficial', () => {
    render(<Navbar />);
    expect(screen.getByText('Aryaraj')).toBeInTheDocument();
    expect(screen.getByText('API')).toBeInTheDocument();
    expect(screen.getByText('Oficial Meta & Automações')).toBeInTheDocument();
  });

  it('deve renderizar todas as etapas principais da landing page na navegação', () => {
    render(<Navbar />);
    const expectedStages = [
      'Início',
      'Benefícios',
      'Casos de Uso',
      'Comparativo',
      'Tarifas Meta',
      'Economia',
      'Processo',
      'Sobre',
      'Dúvidas'
    ];

    expectedStages.forEach(stage => {
      const stageLinks = screen.getAllByText(stage);
      expect(stageLinks.length).toBeGreaterThan(0);
    });
  });

  it('deve conter o botão do WhatsApp com o link correto para o número configurado', () => {
    render(<Navbar />);
    const whatsappBtn = screen.getByRole('link', { name: /WhatsApp/i });
    expect(whatsappBtn).toBeInTheDocument();
    expect(whatsappBtn).toHaveAttribute('href', WHATSAPP_LINK);
    expect(whatsappBtn).toHaveAttribute('target', '_blank');
  });

  it('deve alternar o menu mobile ao clicar no botão de toggle', () => {
    render(<Navbar />);
    const toggleBtn = screen.getByTestId('mobile-menu-btn');
    expect(toggleBtn).toBeInTheDocument();

    // Dropdown inicialmente fechado
    expect(screen.queryByTestId('mobile-menu-dropdown')).not.toBeInTheDocument();

    // Abre o menu
    fireEvent.click(toggleBtn);
    expect(screen.getByTestId('mobile-menu-dropdown')).toBeInTheDocument();

    // Fecha o menu
    fireEvent.click(toggleBtn);
    expect(screen.queryByTestId('mobile-menu-dropdown')).not.toBeInTheDocument();
  });

  it('deve exibir o botão de voltar na barra superior à esquerda da marca e retornar no histórico', () => {
    Object.defineProperty(window.history, 'length', { value: 3, configurable: true });
    const backSpy = vi.spyOn(window.history, 'back').mockImplementation(() => {});
    render(<Navbar />);
    const backBtn = screen.getByTestId('btn-nav-back-home');
    expect(backBtn).toBeInTheDocument();
    expect(backBtn).toHaveAttribute('href', '/');
    expect(backBtn).toHaveTextContent('Voltar');

    fireEvent.click(backBtn);
    expect(backSpy).toHaveBeenCalled();
    backSpy.mockRestore();
  });
});
