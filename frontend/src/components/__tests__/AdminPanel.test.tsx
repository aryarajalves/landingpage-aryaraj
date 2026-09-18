import React from 'react';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import { describe, it, expect, vi, beforeEach, afterEach } from 'vitest';
import AdminPanel from '../AdminPanel';

describe('Componente AdminPanel', () => {
  beforeEach(() => {
    // Limpa sessionStorage antes de cada teste
    sessionStorage.clear();
    // Reseta mocks de fetch
    vi.stubGlobal('fetch', vi.fn());
  });

  afterEach(() => {
    vi.unstubAllGlobals();
  });

  it('deve renderizar o formulário de login por padrão se não houver token no sessionStorage', () => {
    render(<AdminPanel />);
    expect(screen.getByRole('heading', { name: /Acesso Restrito/i })).toBeInTheDocument();
    expect(screen.getByPlaceholderText(/Nome de usuário/i)).toBeInTheDocument();
    expect(screen.getByPlaceholderText(/Senha secreta/i)).toBeInTheDocument();
    expect(screen.getByRole('button', { name: /Entrar no Painel/i })).toBeInTheDocument();
  });

  it('deve alternar a visibilidade da senha ao clicar no botão de olho', () => {
    render(<AdminPanel />);
    const passwordInput = screen.getByPlaceholderText(/Senha secreta/i);
    const toggleButton = screen.getByTitle(/Mostrar senha/i);

    // Deve iniciar como "password"
    expect(passwordInput).toHaveAttribute('type', 'password');

    // Clica para mostrar
    fireEvent.click(toggleButton);
    expect(passwordInput).toHaveAttribute('type', 'text');

    // Clica para esconder de novo
    fireEvent.click(toggleButton);
    expect(passwordInput).toHaveAttribute('type', 'password');
  });

  it('deve exibir mensagem de erro quando o login falhar', async () => {
    const mockFetch = vi.fn().mockResolvedValue({
      ok: false,
      status: 401,
      json: async () => ({ detail: 'Usuário ou senha incorretos.' }),
    });
    vi.stubGlobal('fetch', mockFetch);

    render(<AdminPanel />);

    fireEvent.change(screen.getByPlaceholderText(/Nome de usuário/i), { target: { value: 'wrong_user' } });
    fireEvent.change(screen.getByPlaceholderText(/Senha secreta/i), { target: { value: 'wrong_pass' } });
    fireEvent.click(screen.getByRole('button', { name: /Entrar no Painel/i }));

    await waitFor(() => {
      expect(screen.getByText(/Usuário ou senha incorretos./i)).toBeInTheDocument();
    });
  });

  it('deve logar com sucesso, salvar o token no sessionStorage e carregar o dashboard', async () => {
    const mockStatsResponse = {
      visits: [{ label: '2026-06-16', value: 10 }],
      clicks: [{ label: '2026-06-16', value: 2 }],
      button_distribution: { hero_cta: 2 },
      totals: { visits: 10, clicks: 2 }
    };

    const mockFetch = vi.fn()
      .mockResolvedValueOnce({
        ok: true,
        status: 200,
        json: async () => ({ access_token: 'fake_jwt_token' }),
      })
      .mockResolvedValueOnce({
        ok: true,
        status: 200,
        json: async () => mockStatsResponse,
      });

    vi.stubGlobal('fetch', mockFetch);

    render(<AdminPanel />);

    fireEvent.change(screen.getByPlaceholderText(/Nome de usuário/i), { target: { value: 'admin' } });
    fireEvent.change(screen.getByPlaceholderText(/Senha secreta/i), { target: { value: 'admin123' } });
    fireEvent.click(screen.getByRole('button', { name: /Entrar no Painel/i }));

    await waitFor(() => {
      expect(sessionStorage.getItem('admin_token')).toBe('fake_jwt_token');
      expect(screen.getByText(/Estatísticas de Acesso/i)).toBeInTheDocument();
      // Valida se as estatísticas foram carregadas
      expect(screen.getByText(/^Visualizações$/i)).toBeInTheDocument();
      expect(screen.getByText(/Cliques no WhatsApp/i)).toBeInTheDocument();
      expect(screen.getByText(/Taxa de Conversão/i)).toBeInTheDocument();
      // Valida a conversão
      expect(screen.getByText('20.0%')).toBeInTheDocument(); // 2 cliques / 10 visitas = 20.0%
    });
  });

  it('deve permitir alterar o período do filtro de estatísticas', async () => {
    sessionStorage.setItem('admin_token', 'fake_jwt_token');

    const mockStatsResponse = {
      visits: [{ label: 'Semana 1', value: 50 }],
      clicks: [{ label: 'Semana 1', value: 10 }],
      button_distribution: { hero_cta: 10 },
      totals: { visits: 50, clicks: 10 }
    };

    const mockFetch = vi.fn().mockResolvedValue({
      ok: true,
      status: 200,
      json: async () => mockStatsResponse,
    });
    vi.stubGlobal('fetch', mockFetch);

    render(<AdminPanel />);

    await waitFor(() => {
      expect(screen.getByText(/Estatísticas de Acesso/i)).toBeInTheDocument();
    });

    // Clica no botão "Semanal"
    const weekBtn = screen.getByRole('button', { name: /Semanal/i });
    fireEvent.click(weekBtn);

    await waitFor(() => {
      expect(mockFetch).toHaveBeenCalledWith(expect.stringContaining('period=week'), expect.any(Object));
    });
  });

  it('deve realizar logout com sucesso e limpar o sessionStorage', async () => {
    sessionStorage.setItem('admin_token', 'fake_jwt_token');

    const mockStatsResponse = {
      visits: [],
      clicks: [],
      button_distribution: {},
      totals: { visits: 0, clicks: 0 }
    };

    const mockFetch = vi.fn().mockResolvedValue({
      ok: true,
      status: 200,
      json: async () => mockStatsResponse,
    });
    vi.stubGlobal('fetch', mockFetch);

    render(<AdminPanel />);

    await waitFor(() => {
      expect(screen.getByText(/Estatísticas de Acesso/i)).toBeInTheDocument();
    });

    const logoutBtn = screen.getByRole('button', { name: /Sair do Painel/i });
    fireEvent.click(logoutBtn);

    // Deve abrir o popup de confirmação
    expect(screen.getByText(/Tem certeza que deseja sair do painel administrativo/i)).toBeInTheDocument();

    // Clica em Cancelar para fechar o popup
    const cancelBtn = screen.getByRole('button', { name: /Cancelar/i });
    fireEvent.click(cancelBtn);

    // Deve sumir o popup e continuar logado
    expect(screen.queryByText(/Tem certeza que deseja sair do painel administrativo/i)).toBeNull();
    expect(sessionStorage.getItem('admin_token')).toBe('fake_jwt_token');

    // Clica novamente para abrir o popup
    fireEvent.click(logoutBtn);

    // Clica no botão "Sair" do modal de confirmação
    const confirmBtn = screen.getByRole('button', { name: /^Sair$/i });
    fireEvent.click(confirmBtn);

    await waitFor(() => {
      expect(sessionStorage.getItem('admin_token')).toBeNull();
      expect(screen.getByRole('heading', { name: /Acesso Restrito/i })).toBeInTheDocument();
    });
  });
});
