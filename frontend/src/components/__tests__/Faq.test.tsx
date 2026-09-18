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

  it('deve conter a pergunta sobre CNPJ esclarecendo que não é obrigatório para iniciar mas amplia limites de disparos', () => {
    render(<Faq />);
    expect(screen.getByText('Preciso de um CNPJ para utilizar a API Oficial?')).toBeInTheDocument();
    
    // Abre a pergunta sobre CNPJ (índice 2)
    const cnpjBtn = screen.getByTestId('faq-btn-2');
    fireEvent.click(cnpjBtn);

    expect(screen.getByText(/Para iniciar não é obrigatório ter um CNPJ/i)).toBeInTheDocument();
    expect(screen.getByText(/de extrema importância que você tenha/i)).toBeInTheDocument();
    expect(screen.getByText(/aumentar expressivamente o seu limite de disparos diários de templates/i)).toBeInTheDocument();
    expect(screen.getByText(/verificação oficial da sua BM/i)).toBeInTheDocument();
  });
});
