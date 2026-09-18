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

  it('deve renderizar as novas perguntas sobre integracao de vendas, ZapJords e prazo de ate 7 dias uteis', () => {
    render(<Faq />);
    
    // Pergunta 4: Integração de vendas
    expect(screen.getByText(/Consigo integrar com a minha plataforma de vendas/i)).toBeInTheDocument();
    const salesBtn = screen.getByTestId('faq-btn-4');
    fireEvent.click(salesBtn);
    expect(screen.getByText(/Fornecemos integração via Webhooks e endpoints prontos/i)).toBeInTheDocument();

    // Pergunta 5: ZapJords e programação
    expect(screen.getByText(/Preciso saber programar para usar a ZapJords/i)).toBeInTheDocument();
    const codeBtn = screen.getByTestId('faq-btn-5');
    fireEvent.click(codeBtn);
    expect(screen.getByText(/Não precisa saber nada de programação/i)).toBeInTheDocument();

    // Pergunta 6: Prazo de até 7 dias úteis
    expect(screen.getByText(/Quanto tempo leva para a infraestrutura estar 100% ativa/i)).toBeInTheDocument();
    const timeBtn = screen.getByTestId('faq-btn-6');
    fireEvent.click(timeBtn);
    expect(screen.getByText(/em um prazo de até 7 dias úteis/i)).toBeInTheDocument();
  });
});
