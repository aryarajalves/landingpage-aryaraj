import React from 'react';
import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import RoiHook from '../RoiHook';

describe('Componente RoiHook', () => {
  it('deve renderizar o título principal do comparativo', () => {
    render(<RoiHook />);
    expect(screen.getByText(/ManyChat vs Servidor VPS/i)).toBeInTheDocument();
  });

  it('deve exibir custos comparativos do ManyChat', () => {
    render(<RoiHook />);
    expect(screen.getByText(/ManyChat \(Mensalidade por Leads\)/i)).toBeInTheDocument();
    expect(screen.getByText(/Lista de 10.000 contatos/i)).toBeInTheDocument();
    expect(screen.getByText(/Lista de 25.000 contatos/i)).toBeInTheDocument();
    expect(screen.getByText(/Lista de 50.000 contatos/i)).toBeInTheDocument();
  });

  it('deve exibir os diferenciais da VPS Dedicada (Setup Aryaraj)', () => {
    render(<RoiHook />);
    expect(screen.getByText(/Setup Aryaraj \(VPS Dedicada\)/i)).toBeInTheDocument();
    expect(screen.getByText(/Contatos Ilimitados/i)).toBeInTheDocument();
    expect(screen.getByText(/Atendentes Ilimitados/i)).toBeInTheDocument();
    expect(screen.getByText(/Hospedagem Fixa VPS/i)).toBeInTheDocument();
  });

  it('não deve conter menções a Chatwoot ou Evolution', () => {
    render(<RoiHook />);
    expect(screen.queryByText(/Chatwoot/i)).not.toBeInTheDocument();
    expect(screen.queryByText(/Evolution/i)).not.toBeInTheDocument();
  });

  it('não deve conter menções a CRM', () => {
    render(<RoiHook />);
    expect(screen.queryByText(/CRM/i)).not.toBeInTheDocument();
  });
});
