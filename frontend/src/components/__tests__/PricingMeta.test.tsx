import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import PricingMeta from '../PricingMeta';

describe('Componente PricingMeta', () => {
  it('deve renderizar o título principal das tarifas da Meta', () => {
    render(<PricingMeta />);
    expect(screen.getByText('Como Funcionam as Tarifas da Meta?')).toBeInTheDocument();
  });

  it('deve alternar entre as abas e mostrar os dados corretos', () => {
    render(<PricingMeta />);
    
    // Inicia na aba de janela de 24h
    expect(screen.getByText('A Janela Reativa de 24 Horas')).toBeInTheDocument();
    expect(screen.queryByRole('heading', { name: 'Mensagens Ativas (Templates)' })).not.toBeInTheDocument();
    
    // Clica na aba de templates
    const tabTemplatesBtn = screen.getByTestId('tab-btn-templates');
    fireEvent.click(tabTemplatesBtn);
    
    // Deve exibir as informações de templates
    expect(screen.getByRole('heading', { name: 'Mensagens Ativas (Templates)' })).toBeInTheDocument();
    expect(screen.queryByText('A Janela Reativa de 24 Horas')).not.toBeInTheDocument();
    
    // Deve renderizar os cards de marketing e utilidade
    expect(screen.getByTestId('card-utility')).toBeInTheDocument();
    expect(screen.getByTestId('card-marketing')).toBeInTheDocument();
  });
});
