import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { describe, it, expect, vi } from 'vitest';
import ZapJordsShowcase from '../ZapJordsShowcase';
import * as tracking from '../../utils/tracking';

describe('Componente ZapJordsShowcase', () => {
  it('deve renderizar o título principal e o badge da ZapJords', () => {
    render(<ZapJordsShowcase />);
    expect(screen.getByText(/Conheça a/i)).toBeInTheDocument();
    expect(screen.getAllByText(/ZapJords/i).length).toBeGreaterThanOrEqual(1);
    expect(screen.getByText(/Por Dentro/i)).toBeInTheDocument();
    expect(screen.getByTestId('zapjords-badge')).toBeInTheDocument();
  });

  it('deve renderizar a aba inicial do Painel de Atendimento com seus destaques', () => {
    render(<ZapJordsShowcase />);
    expect(screen.getByText('Central Unificada de Atendimento e Suporte')).toBeInTheDocument();
    expect(screen.getByText(/Multi-operadores simultâneos no mesmo número oficial/i)).toBeInTheDocument();
    
    const img = screen.getByRole('img');
    expect(img).toHaveAttribute('src', '/zapjords_atendimento.png');
  });

  it('deve alternar para a aba de Disparos em Massa e atualizar a imagem e texto', () => {
    const trackSpy = vi.spyOn(tracking, 'trackClick').mockImplementation(() => {});
    render(<ZapJordsShowcase />);

    const historicoTab = screen.getByTestId('zapjords-tab-historico');
    fireEvent.click(historicoTab);

    expect(trackSpy).toHaveBeenCalledWith('zapjords_showcase_tab_historico');
    expect(screen.getByText('Histórico e Telemetria em Tempo Real de Disparos')).toBeInTheDocument();
    expect(screen.getByText(/Disparo com cadência inteligente e sem risco de banimento/i)).toBeInTheDocument();
    
    const img = screen.getByRole('img');
    expect(img).toHaveAttribute('src', '/zapjords_historico.png');

    trackSpy.mockRestore();
  });

  it('deve alternar para a aba de Construtor de Funis e Integrações Webhook', () => {
    render(<ZapJordsShowcase />);

    // Clicar em Funis
    const funisTab = screen.getByTestId('zapjords-tab-funis');
    fireEvent.click(funisTab);
    expect(screen.getByText('Automações e Funis de Conversação Visuais')).toBeInTheDocument();
    expect(screen.getByRole('img')).toHaveAttribute('src', '/zapjords_funis.png');

    // Clicar em Webhooks
    const webhooksTab = screen.getByTestId('zapjords-tab-webhooks');
    fireEvent.click(webhooksTab);
    expect(screen.getByText('Conexão Instantânea com Plataformas de Checkout')).toBeInTheDocument();
    expect(screen.getByRole('img')).toHaveAttribute('src', '/zapjords_webhooks.png');
  });
});
