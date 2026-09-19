import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { describe, it, expect, vi } from 'vitest';
import Footer from '../Footer';

describe('Componente Footer', () => {
  it('deve renderizar os links de política de privacidade e termos de uso com URLs relativas e sem target blank', () => {
    render(<Footer />);
    
    const privacyLink = screen.getByText('Política de Privacidade');
    expect(privacyLink).toBeInTheDocument();
    expect(privacyLink).toHaveAttribute('href', '/politica-privacidade');
    expect(privacyLink).not.toHaveAttribute('target');
    
    const termsLink = screen.getByText('Termos de Uso');
    expect(termsLink).toBeInTheDocument();
    expect(termsLink).toHaveAttribute('href', '/termos-uso');
    expect(termsLink).not.toHaveAttribute('target');
  });

  it('deve chamar a função onNavigate quando clicado nos links', () => {
    const handleNavigate = vi.fn();
    render(<Footer onNavigate={handleNavigate} />);

    const privacyLink = screen.getByText('Política de Privacidade');
    fireEvent.click(privacyLink);
    expect(handleNavigate).toHaveBeenCalledWith('/politica-privacidade');

    const termsLink = screen.getByText('Termos de Uso');
    fireEvent.click(termsLink);
    expect(handleNavigate).toHaveBeenCalledWith('/termos-uso');
  });

  it('deve conter o texto de copyright da Aryaraj Automações e dados da empresa', () => {
    render(<Footer />);
    expect(screen.getByText(/Aryaraj Automações\. Todos os direitos reservados\./i)).toBeInTheDocument();
    expect(screen.getByText(/60\.204\.548 ARYARAJ ALVES FERNANDES - CNPJ/i)).toBeInTheDocument();
  });
});
