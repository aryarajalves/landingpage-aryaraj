import React from 'react';
import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import Footer from '../Footer';
import { API_URL } from '../../config';

describe('Componente Footer', () => {
  it('deve renderizar os links de política de privacidade e termos de uso com as URLs e target corretos', () => {
    render(<Footer />);
    
    const privacyLink = screen.getByText('Política de Privacidade');
    expect(privacyLink).toBeInTheDocument();
    expect(privacyLink).toHaveAttribute('href', `${API_URL}/politica-privacidade`);
    expect(privacyLink).toHaveAttribute('target', '_blank');
    
    const termsLink = screen.getByText('Termos de Uso');
    expect(termsLink).toBeInTheDocument();
    expect(termsLink).toHaveAttribute('href', `${API_URL}/termos-uso`);
    expect(termsLink).toHaveAttribute('target', '_blank');
  });

  it('deve conter o texto de copyright da Aryaraj Automações e dados da empresa', () => {
    render(<Footer />);
    expect(screen.getByText(/Aryaraj Automações\. Todos os direitos reservados\./i)).toBeInTheDocument();
    expect(screen.getByText(/60\.204\.548 ARYARAJ ALVES FERNANDES - CNPJ/i)).toBeInTheDocument();
  });
});
