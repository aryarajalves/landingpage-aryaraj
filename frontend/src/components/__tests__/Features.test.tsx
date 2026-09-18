import React from 'react';
import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import Features from '../Features';

describe('Componente Features', () => {
  it('deve renderizar a seção de infraestrutura profissional com o título correto', () => {
    render(<Features />);
    expect(screen.getByText('Infraestrutura Profissional para WhatsApp')).toBeInTheDocument();
  });

  it('deve renderizar o subtítulo editado sem a menção a celulares físicos', () => {
    render(<Features />);
    expect(screen.getByText(/Estruture o atendimento da sua marca com a segurança/i)).toBeInTheDocument();
    expect(screen.queryByText(/Saia dos celulares físicos/i)).not.toBeInTheDocument();
  });

  it('não deve mais conter a funcionalidade de Distribuição Inteligente (Filas)', () => {
    render(<Features />);
    expect(screen.queryByText('Distribuição Inteligente (Filas)')).not.toBeInTheDocument();
    expect(screen.queryByText(/Direcione o cliente automaticamente para o setor correto/i)).not.toBeInTheDocument();
  });

  it('deve renderizar as outras funcionalidades esperadas da API Oficial', () => {
    render(<Features />);
    expect(screen.getByText('Múltiplos Atendentes no Mesmo Número')).toBeInTheDocument();
    expect(screen.getByText('Painel de Conversas Completo')).toBeInTheDocument();
    expect(screen.getByText('Templates com Botões Clicáveis')).toBeInTheDocument();
    expect(screen.getByText('Disparos e Agendamentos Visuais')).toBeInTheDocument();
  });
});
