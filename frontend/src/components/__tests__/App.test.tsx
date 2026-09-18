import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { describe, it, expect, beforeEach, afterEach, vi } from 'vitest';
import App from '../../App';
import * as tracking from '../../utils/tracking';

describe('Componente Principal App e Roteamento', () => {
  const originalLocation = window.location;

  beforeEach(() => {
    delete (window as any).location;
  });

  afterEach(() => {
    window.location = originalLocation;
  });

  it('deve renderizar a página Linktree na raiz (/) com título, descrição e botão para /apioficial', () => {
    window.location = {
      ...originalLocation,
      pathname: '/',
    } as any;

    render(<App />);
    expect(screen.getByTestId('linktree-page')).toBeInTheDocument();
    expect(document.title).toBe('Serviços');
    expect(screen.getAllByText(/Aryaraj/i).length).toBeGreaterThan(0);
    expect(screen.getAllByText(/Serviços/i).length).toBeGreaterThan(0);
    expect(screen.getByText(/Desenvolvemos Tecnologia para o seu projeto de infoproduto/i)).toBeInTheDocument();
    
    const apiBtn = screen.getByTestId('linktree-btn-apioficial');
    expect(apiBtn).toBeInTheDocument();
    expect(apiBtn).toHaveAttribute('href', '/apioficial');

    // Botão ativo de IA
    const iaBtn = screen.getByTestId('linktree-btn-ia');
    expect(iaBtn).toBeInTheDocument();
    expect(iaBtn).toHaveAttribute('href', '/agente-whatsapp');
    expect(screen.getByText(/Implementação de IA no WhatsApp/i)).toBeInTheDocument();

    // Botões em breve (1 restante agora: co-produção)
    const appsBtn = screen.getByTestId('linktree-btn-apps');
    expect(appsBtn).toBeInTheDocument();
    expect(appsBtn).toHaveAttribute('href', '/aplicativos');
    expect(screen.getByText(/Criação de Aplicativos/i)).toBeInTheDocument();

    // Botão de Co-Produção Tecnológica (agora ativo)
    const coproducaoBtn = screen.getByTestId('linktree-btn-coproducao');
    expect(coproducaoBtn).toBeInTheDocument();
    expect(coproducaoBtn).toHaveAttribute('href', '/coproducao');
    expect(screen.getByText(/Co-Produção Tecnológica/i)).toBeInTheDocument();

    // Rodapé oficial no Linktree
    expect(screen.getByText(/60\.204\.548 ARYARAJ ALVES FERNANDES - CNPJ 60\.204\.548\/0001-85/i)).toBeInTheDocument();
    expect(screen.getByText(/Política de Privacidade/i)).toBeInTheDocument();
    expect(screen.getByText(/Termos de Uso/i)).toBeInTheDocument();
  });

  it('deve navegar para a página de Aplicativos ao clicar no botão correspondente do Linktree', () => {
    const trackSpy = vi.spyOn(tracking, 'trackClick').mockImplementation(() => {});
    window.location = {
      ...originalLocation,
      pathname: '/',
    } as any;

    const { container } = render(<App />);
    const appsBtn = screen.getByTestId('linktree-btn-apps');
    fireEvent.click(appsBtn);

    expect(trackSpy).toHaveBeenCalledWith('linktree_btn_apps');
    expect(container.querySelector('.app-page')).toBeInTheDocument();
    trackSpy.mockRestore();
  });

  it('deve navegar para a página da API Oficial ao clicar no botão do Linktree', () => {
    const trackSpy = vi.spyOn(tracking, 'trackClick').mockImplementation(() => {});
    window.location = {
      ...originalLocation,
      pathname: '/',
    } as any;

    const { container } = render(<App />);
    const apiBtn = screen.getByTestId('linktree-btn-apioficial');
    fireEvent.click(apiBtn);

    expect(trackSpy).toHaveBeenCalledWith('linktree_btn_apioficial');
    expect(container.querySelector('.page-api-oficial')).toBeInTheDocument();
    trackSpy.mockRestore();
  });

  it('deve navegar para a página de IA no WhatsApp ao clicar no botão correspondente do Linktree', () => {
    const trackSpy = vi.spyOn(tracking, 'trackClick').mockImplementation(() => {});
    window.location = {
      ...originalLocation,
      pathname: '/',
    } as any;

    const { container } = render(<App />);
    const iaBtn = screen.getByTestId('linktree-btn-ia');
    fireEvent.click(iaBtn);

    expect(trackSpy).toHaveBeenCalledWith('linktree_btn_ia');
    expect(container.querySelector('.ia-page')).toBeInTheDocument();
    trackSpy.mockRestore();
  });

  it('deve renderizar diretamente a página de IA no slug (/agente-whatsapp)', () => {
    window.location = {
      ...originalLocation,
      pathname: '/agente-whatsapp',
    } as any;

    const { container } = render(<App />);
    expect(container.querySelector('.ia-page')).toBeInTheDocument();
    expect(screen.getByText(/Aryaraj AI/i)).toBeInTheDocument();
  });

  it('deve renderizar também via alias (/iawhatsapp)', () => {
    window.location = {
      ...originalLocation,
      pathname: '/iawhatsapp',
    } as any;

    const { container } = render(<App />);
    expect(container.querySelector('.ia-page')).toBeInTheDocument();
    expect(screen.getByText(/Aryaraj AI/i)).toBeInTheDocument();
  });

  it('deve renderizar diretamente a página de Aplicativos no slug (/aplicativos)', () => {
    window.location = {
      ...originalLocation,
      pathname: '/aplicativos',
    } as any;

    const { container } = render(<App />);
    expect(container.querySelector('.app-page')).toBeInTheDocument();
    expect(screen.getByText(/Aryaraj Apps/i)).toBeInTheDocument();
  });

  it('deve renderizar a página de Aplicativos também via alias (/apps-infoproduto)', () => {
    window.location = {
      ...originalLocation,
      pathname: '/apps-infoproduto',
    } as any;

    const { container } = render(<App />);
    expect(container.querySelector('.app-page')).toBeInTheDocument();
    expect(screen.getByText(/Aryaraj Apps/i)).toBeInTheDocument();
  });

  it('deve navegar para a página de Co-Produção Tecnológica ao clicar no botão correspondente do Linktree', () => {
    const trackSpy = vi.spyOn(tracking, 'trackClick').mockImplementation(() => {});
    window.location = {
      ...originalLocation,
      pathname: '/',
    } as any;

    const { container } = render(<App />);
    const coBtn = screen.getByTestId('linktree-btn-coproducao');
    fireEvent.click(coBtn);

    expect(trackSpy).toHaveBeenCalledWith('linktree_btn_coproducao');
    expect(container.querySelector('.co-page')).toBeInTheDocument();
    trackSpy.mockRestore();
  });

  it('deve renderizar diretamente a página de Co-Produção no slug (/coproducao)', () => {
    window.location = {
      ...originalLocation,
      pathname: '/coproducao',
    } as any;

    const { container } = render(<App />);
    expect(container.querySelector('.co-page')).toBeInTheDocument();
    expect(screen.getByText(/Aryaraj Tech/i)).toBeInTheDocument();
  });

  it('deve renderizar a página de Co-Produção também via alias (/co-producao)', () => {
    window.location = {
      ...originalLocation,
      pathname: '/co-producao',
    } as any;

    const { container } = render(<App />);
    expect(container.querySelector('.co-page')).toBeInTheDocument();
    expect(screen.getByText(/Aryaraj Tech/i)).toBeInTheDocument();
  });

  it('deve renderizar diretamente a página da API Oficial no slug (/apioficial)', () => {
    window.location = {
      ...originalLocation,
      pathname: '/apioficial',
    } as any;

    const { container } = render(<App />);
    expect(container.querySelector('.page-api-oficial')).toBeInTheDocument();
    expect(screen.getAllByText(/Aryaraj/i).length).toBeGreaterThan(0);
  });

  it('deve renderizar a página 404 para rotas inexistentes com link para /apioficial', () => {
    window.location = {
      ...originalLocation,
      pathname: '/rota-inexistente-123',
    } as any;

    render(<App />);
    expect(screen.getByTestId('not-found-container')).toBeInTheDocument();
    expect(screen.getByText('404')).toBeInTheDocument();
    expect(screen.getByText('Página não encontrada')).toBeInTheDocument();
    expect(screen.getByRole('link', { name: /Ir para a API Oficial/i })).toHaveAttribute('href', '/apioficial');
  });

  it('deve renderizar o login administrativo na rota (/admin)', () => {
    window.location = {
      ...originalLocation,
      pathname: '/admin',
    } as any;

    render(<App />);
    expect(screen.getByText(/Acesso Restrito/i)).toBeInTheDocument();
    expect(screen.getByRole('button', { name: /Entrar no Painel/i })).toBeInTheDocument();
  });
});
