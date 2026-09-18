import React from 'react';
import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import UseCases from '../UseCases';

describe('Componente UseCases', () => {
  it('deve renderizar o título principal da seção', () => {
    render(<UseCases />);
    expect(screen.getByText('Como Aplicar na Sua Operação?')).toBeInTheDocument();
  });

  it('deve renderizar os 4 cards de casos de uso', () => {
    render(<UseCases />);
    expect(screen.getByText('Recuperação de Carrinho Abandonado')).toBeInTheDocument();
    expect(screen.getByText('Avisos de Lançamento')).toBeInTheDocument();
    expect(screen.getByText('Triagem Inteligente')).toBeInTheDocument();
    expect(screen.getByText('Pós-Venda e Entrega Imediata')).toBeInTheDocument();
  });

  it('não deve conter menções a Chatwoot ou Evolution', () => {
    render(<UseCases />);
    expect(screen.queryByText(/Chatwoot/i)).not.toBeInTheDocument();
    expect(screen.queryByText(/Evolution/i)).not.toBeInTheDocument();
  });

  it('não deve conter menções a CRM', () => {
    render(<UseCases />);
    expect(screen.queryByText(/CRM/i)).not.toBeInTheDocument();
  });
});
