import React from 'react';
import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import Guarantee from '../Guarantee';

describe('Componente Guarantee', () => {
  it('deve renderizar a seção de garantia com o título correto', () => {
    render(<Guarantee />);
    expect(screen.getByText('Garantia de Homologação: Risco Zero')).toBeInTheDocument();
  });

  it('deve exibir o texto de garantia com reembolso de 100%', () => {
    render(<Guarantee />);
    expect(screen.getByText(/devolvemos 100% do valor do seu setup/i)).toBeInTheDocument();
    expect(screen.getByText(/Sem letras miúdas. Seu risco é zero./i)).toBeInTheDocument();
  });

  it('não deve conter termos proibidos (Chatwoot, Evolution, CRM)', () => {
    render(<Guarantee />);
    const htmlContent = document.body.innerHTML;
    expect(htmlContent).not.toContain('Chatwoot');
    expect(htmlContent).not.toContain('Evolution');
    expect(htmlContent).not.toContain('CRM');
  });
});
