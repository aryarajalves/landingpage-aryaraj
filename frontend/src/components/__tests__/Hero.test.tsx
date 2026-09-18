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
});
