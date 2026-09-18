import React from 'react';
import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import DeliveryProcess from '../DeliveryProcess';

describe('Componente DeliveryProcess', () => {
  it('deve renderizar a seção de processo de entrega com o título correto', () => {
    render(<DeliveryProcess />);
    expect(screen.getByText('Como Funciona a Implementação?')).toBeInTheDocument();
  });

  it('deve exibir os 4 passos do fluxo de entrega', () => {
    render(<DeliveryProcess />);
    expect(screen.getByText('Alinhamento e Acesso')).toBeInTheDocument();
    expect(screen.getByText('Configuração da Infraestrutura')).toBeInTheDocument();
    expect(screen.getByText('Verificação e Liberação')).toBeInTheDocument();
    expect(screen.getByText('Plataforma & Treinamento')).toBeInTheDocument();
  });
});
