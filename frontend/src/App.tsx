import React, { useEffect, useState } from 'react';
import LinktreePage from './pages/LinktreePage';
import ApiOficialPage from './pages/ApiOficialPage';
import IaWhatsAppPage from './pages/IaWhatsAppPage';
import AppsInfoprodutoPage from './pages/AppsInfoprodutoPage';
import CoproducaoPage from './pages/CoproducaoPage';
import AdminPanel from './components/AdminPanel';
import { API_URL } from './config';

function App() {
  const [currentPath, setCurrentPath] = useState<string>(() => {
    return window.location.pathname.toLowerCase();
  });

  // Ouve mudanças de histórico/navegação popstate
  useEffect(() => {
    const handleLocationChange = () => {
      setCurrentPath(window.location.pathname.toLowerCase());
    };

    window.addEventListener('popstate', handleLocationChange);
    return () => window.removeEventListener('popstate', handleLocationChange);
  }, []);

  const navigate = (path: string) => {
    window.history.pushState(null, '', path);
    setCurrentPath(path.toLowerCase());
  };

  const isAdmin = currentPath === '/admin' || currentPath.startsWith('/admin/');

  // Registro de visita
  useEffect(() => {
    if (isAdmin) return;

    const trackVisit = async () => {
      try {
        await fetch(`${API_URL}/api/track/visit`, { method: 'POST' });
      } catch (error) {
        console.error("Falha ao registrar visita de rastreamento:", error);
      }
    };

    trackVisit();
  }, [isAdmin, currentPath]);

  // Rota Administrativa
  if (isAdmin) {
    return <AdminPanel />;
  }

  // Rota Inicial (/) -> Linktree solicitada
  if (currentPath === '/' || currentPath === '') {
    return <LinktreePage onNavigate={navigate} />;
  }

  // Slug da API Oficial (/apioficial)
  const isApiOficial = 
    currentPath === '/apioficial' || 
    currentPath === '/apioficial/';

  if (isApiOficial) {
    return <ApiOficialPage />;
  }

  // Slug da Implementação de IA no WhatsApp (/agente-whatsapp com alias /iawhatsapp)
  const isIaWhatsApp = 
    currentPath === '/agente-whatsapp' || 
    currentPath === '/agente-whatsapp/' ||
    currentPath === '/iawhatsapp' || 
    currentPath === '/iawhatsapp/';

  if (isIaWhatsApp) {
    return <IaWhatsAppPage />;
  }

  // Slug da Criação de Aplicativos para Infoproduto (/aplicativos com alias /apps-infoproduto)
  const isAppsInfoproduto = 
    currentPath === '/aplicativos' || 
    currentPath === '/aplicativos/' ||
    currentPath === '/apps-infoproduto' || 
    currentPath === '/apps-infoproduto/';

  if (isAppsInfoproduto) {
    return <AppsInfoprodutoPage />;
  }

  // Slug da Co-Produção Tecnológica (/coproducao com alias /co-producao)
  const isCoproducao = 
    currentPath === '/coproducao' || 
    currentPath === '/coproducao/' ||
    currentPath === '/co-producao' || 
    currentPath === '/co-producao/';

  if (isCoproducao) {
    return <CoproducaoPage />;
  }

  // Página 404 amigável para rotas não encontradas
  return (
    <div 
      data-testid="not-found-container"
      style={{
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        background: '#fcfbf7',
        color: '#1f2937',
        fontFamily: 'system-ui, sans-serif',
        padding: '24px',
        textAlign: 'center'
      }}
    >
      <div style={{
        background: '#ffffff',
        padding: '40px',
        borderRadius: '20px',
        boxShadow: '0 10px 30px rgba(0,0,0,0.06)',
        border: '1px solid #f3f4f6',
        maxWidth: '460px',
        width: '100%'
      }}>
        <h1 style={{ fontSize: '3rem', margin: '0 0 10px', color: '#f59e0b' }}>404</h1>
        <h2 style={{ fontSize: '1.4rem', margin: '0 0 16px', color: '#111827' }}>Página não encontrada</h2>
        <p style={{ color: '#6b7280', marginBottom: '24px', lineHeight: '1.5' }}>
          O endereço que você tentou acessar não existe ou foi movido.
        </p>
        <a
          href="/apioficial"
          style={{
            display: 'inline-block',
            background: 'linear-gradient(135deg, #059669 0%, #047857 100%)',
            color: '#ffffff',
            padding: '12px 24px',
            borderRadius: '9999px',
            textDecoration: 'none',
            fontWeight: 600,
            fontSize: '0.95rem',
            boxShadow: '0 4px 14px rgba(5, 150, 105, 0.3)'
          }}
        >
          Ir para a API Oficial
        </a>
      </div>
    </div>
  );
}

export default App;
