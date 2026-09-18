import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { describe, it, expect, vi } from 'vitest';
import Hero from '../Hero';
import * as tracking from '../../utils/tracking';

describe('Componente Hero', () => {
  it('deve renderizar o título principal do Hero', () => {
    render(<Hero />);
    expect(screen.getByText(/Escale seus/i)).toBeInTheDocument();
    expect(screen.getByText(/INFO PRODUTOS/i)).toBeInTheDocument();
    expect(screen.getByText(/com a Api Oficial do WhatsApp/i)).toBeInTheDocument();
  });

  it('deve conter o botão principal que redireciona para a seção de entregáveis (#entregaveis)', () => {
    const trackSpy = vi.spyOn(tracking, 'trackClick').mockImplementation(() => {});
    
    // Mock scrollIntoView
    const scrollMock = vi.fn();
    const fakeElement = document.createElement('div');
    fakeElement.id = 'entregaveis';
    fakeElement.scrollIntoView = scrollMock;
    document.body.appendChild(fakeElement);

    render(<Hero />);
    const button = screen.getByRole('link', { name: /Ativar Minha API Oficial/i });
    expect(button).toBeInTheDocument();
    expect(button).toHaveAttribute('href', '#entregaveis');

    fireEvent.click(button);
    expect(trackSpy).toHaveBeenCalledWith('hero_cta_to_entregaveis');
    expect(scrollMock).toHaveBeenCalledWith({ behavior: 'smooth' });

    document.body.removeChild(fakeElement);
    trackSpy.mockRestore();
  });

  it('deve conter o banner de escassez de agenda com o texto correto', () => {
    render(<Hero />);
    expect(screen.getByText(/Aviso de Agenda:/i)).toBeInTheDocument();
    expect(screen.getByText(/realizado pessoalmente por Aryaraj/i)).toBeInTheDocument();
    expect(screen.getByText(/aceitamos apenas 10 novos setups/i)).toBeInTheDocument();
  });

  it('deve renderizar o template inicial com vídeo e convite para aula ao vivo no celular', () => {
    render(<Hero />);
    expect(screen.getByText(/Disparo de Lançamento/i)).toBeInTheDocument();
    expect(screen.getByText(/AULA EXCLUSIVA: Como Escalar Infoprodutos em 2026/i)).toBeInTheDocument();
    expect(screen.getByText(/A nossa aula ao vivo e gratuita já começou!/i)).toBeInTheDocument();
    expect(screen.getByText(/Entrar na Aula Ao Vivo 🔴/i)).toBeInTheDocument();
  });

  it('deve alternar para outros templates (recuperação de carrinho) ao clicar no botão de avançar', () => {
    const trackSpy = vi.spyOn(tracking, 'trackClick').mockImplementation(() => {});
    render(<Hero />);

    const nextBtn = screen.getByRole('button', { name: /Próximo template/i });
    expect(nextBtn).toBeInTheDocument();

    fireEvent.click(nextBtn);
    expect(trackSpy).toHaveBeenCalledWith('hero_phone_next_template');

    // Verifica que mudou para o template de carrinho abandonado
    expect(screen.getByText(/Recuperação de Carrinho/i)).toBeInTheDocument();
    expect(screen.getByText(/quase garantiu sua vaga na formação/i)).toBeInTheDocument();
    expect(screen.getByText(/Finalizar Minha Inscrição 🛒/i)).toBeInTheDocument();

    // Avança mais um para PIX pendente
    fireEvent.click(nextBtn);
    expect(screen.getByText(/Recuperação de PIX/i)).toBeInTheDocument();
    expect(screen.getByText(/Copiar Chave PIX ⚡/i)).toBeInTheDocument();

    // Clica no botão anterior para voltar para carrinho
    const prevBtn = screen.getByRole('button', { name: /Template anterior/i });
    fireEvent.click(prevBtn);
    expect(trackSpy).toHaveBeenCalledWith('hero_phone_prev_template');
    expect(screen.getByText(/Recuperação de Carrinho/i)).toBeInTheDocument();

    trackSpy.mockRestore();
  });
});
