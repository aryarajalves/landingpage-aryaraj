import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import Faq from '../Faq';

describe('Componente Faq', () => {
  it('deve renderizar a seção de FAQ com o título e subtítulo corretos', () => {
    render(<Faq />);
    expect(screen.getByText('Perguntas Frequentes')).toBeInTheDocument();
    expect(screen.getByText(/Esclareça suas principais dúvidas/i)).toBeInTheDocument();
  });

  it('deve alternar a visibilidade da resposta ao clicar na pergunta do acordeão', () => {
    render(<Faq />);
    
    // Pega a primeira pergunta e o container do item
    const button = screen.getByTestId('faq-btn-0');
    const itemContainer = screen.getByTestId('faq-item-0');
    
    // Inicialmente não deve conter a classe 'active'
    expect(itemContainer.className).not.toContain('active');
    
    // Clica para abrir
    fireEvent.click(button);
    expect(itemContainer.className).toContain('active');
    
    // Clica novamente para fechar
    fireEvent.click(button);
    expect(itemContainer.className).not.toContain('active');
  });
});
