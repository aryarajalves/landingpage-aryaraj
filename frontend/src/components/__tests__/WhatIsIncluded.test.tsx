import React from 'react';
import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import WhatIsIncluded from '../WhatIsIncluded';

describe('Componente WhatIsIncluded', () => {
  it('deve renderizar a seção com o título correto', () => {
    render(<WhatIsIncluded />);
    expect(screen.getByText('O Que Você Recebe na Entrega?')).toBeInTheDocument();
  });

  it('deve renderizar os 4 entregáveis do serviço', () => {
    render(<WhatIsIncluded />);
    expect(screen.getByText('Painel Multi-Atendimento')).toBeInTheDocument();
    expect(screen.getByText('Integração com Plataformas de Vendas')).toBeInTheDocument();
    expect(screen.getByText('Servidor VPS Dedicado')).toBeInTheDocument();
    expect(screen.getByText('Treinamento Completo')).toBeInTheDocument();
  });

  it('não deve conter menções a Chatwoot ou Evolution', () => {
    render(<WhatIsIncluded />);
    expect(screen.queryByText(/Chatwoot/i)).not.toBeInTheDocument();
    expect(screen.queryByText(/Evolution/i)).not.toBeInTheDocument();
  });

  it('não deve conter menções a CRM', () => {
    render(<WhatIsIncluded />);
    expect(screen.queryByText(/CRM/i)).not.toBeInTheDocument();
  });
});
