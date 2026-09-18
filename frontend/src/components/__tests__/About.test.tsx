import React from 'react';
import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import About from '../About';

describe('Componente About', () => {
  it('deve renderizar a seção quem sou eu com o título correto', () => {
    render(<About />);
    expect(screen.getByTestId('about-title')).toHaveTextContent('Quem é Aryaraj?');
  });

  it('deve exibir os detalhes do perfil profissional de Aryaraj', () => {
    render(<About />);
    expect(screen.getByText(/Fortaleza \/ Ceará/)).toBeInTheDocument();
    expect(screen.getByText(/tenho 28 anos/)).toBeInTheDocument();
    expect(screen.getByText(/programação começou em 2017/)).toBeInTheDocument();
    expect(screen.getByText(/marketing digital, aprendendo a planejar/)).toBeInTheDocument();
    expect(screen.getByText(/gerenciado múltiplos 6 dígitos em disparos/i)).toBeInTheDocument();
  });
});
