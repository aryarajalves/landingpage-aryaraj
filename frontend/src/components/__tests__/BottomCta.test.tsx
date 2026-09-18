import React from 'react';
import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import BottomCta from '../BottomCta';
import { WHATSAPP_LINK } from '../../config';

describe('Componente BottomCta', () => {
  it('deve renderizar a chamada de ação final com o título correto', () => {
    render(<BottomCta />);
    expect(screen.getByText(/Pronto para blindar seu número e/i)).toBeInTheDocument();
    expect(screen.getByText(/escalar suas vendas/i)).toBeInTheDocument();
  });

  it('deve conter o link do WhatsApp apontando para o número e mensagem corretos', () => {
    render(<BottomCta />);
    const button = screen.getByRole('link', { name: /Falar com Aryaraj no WhatsApp/i });
    expect(button).toBeInTheDocument();
    expect(button).toHaveAttribute('href', WHATSAPP_LINK);
    expect(button).toHaveAttribute('target', '_blank');
  });

  it('deve conter o banner de escassez e exclusividade com o texto de agenda limitada', () => {
    render(<BottomCta />);
    expect(screen.getByText(/Aviso de Agenda:/i)).toBeInTheDocument();
    expect(screen.getByText(/aceitamos apenas 10 novos setups/i)).toBeInTheDocument();
  });
});
