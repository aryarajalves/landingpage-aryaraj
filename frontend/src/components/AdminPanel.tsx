import React, { useState, useEffect } from 'react';
import { TrendingUp, MousePointerClick, Eye, EyeOff, LogOut, Lock, User, RefreshCw } from 'lucide-react';
import { API_URL } from '../config';
import '../estilos/AdminPanel.css';

interface StatItem {
  label: string;
  value: number;
}

interface StatsData {
  visits: StatItem[];
  clicks: StatItem[];
  button_distribution: Record<string, number>;
  totals: {
    visits: number;
    clicks: number;
  };
}

export default function AdminPanel() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [loginError, setLoginError] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [statsPeriod, setStatsPeriod] = useState<'day' | 'week' | 'month' | 'year'>('day');
  const [statsData, setStatsData] = useState<StatsData | null>(null);
  const [refreshKey, setRefreshKey] = useState(0);
  const [showLogoutConfirm, setShowLogoutConfirm] = useState(false);

  // Verifica se já existe um token válido no sessionStorage
  useEffect(() => {
    const token = sessionStorage.getItem('admin_token');
    if (token) {
      setIsLoggedIn(true);
    }
  }, []);

  // Busca estatísticas do backend
  useEffect(() => {
    if (!isLoggedIn) return;

    const fetchStats = async () => {
      setIsLoading(true);
      const token = sessionStorage.getItem('admin_token');
      try {
        const response = await fetch(`${API_URL}/api/admin/stats?period=${statsPeriod}`, {
          headers: {
            'Authorization': `Bearer ${token}`
          }
        });
        if (response.status === 401) {
          sessionStorage.removeItem('admin_token');
          setIsLoggedIn(false);
          return;
        }
        if (response.ok) {
          const data = await response.json();
          setStatsData(data);
        }
      } catch (error) {
        console.error("Erro ao carregar estatísticas:", error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchStats();
  }, [isLoggedIn, statsPeriod, refreshKey]);

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoginError('');
    setIsLoading(true);

    try {
      const response = await fetch(`${API_URL}/api/admin/login`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ username, password })
      });

      if (response.ok) {
        const data = await response.json();
        sessionStorage.setItem('admin_token', data.access_token);
        setIsLoggedIn(true);
      } else {
        const errorData = await response.json();
        setLoginError(errorData.detail || 'Falha na autenticação.');
      }
    } catch (error) {
      setLoginError('Erro de conexão com o servidor.');
    } finally {
      setIsLoading(false);
    }
  };

  const handleLogout = () => {
    sessionStorage.removeItem('admin_token');
    setIsLoggedIn(false);
    setStatsData(null);
  };

  // Calcula taxa de conversão (cliques/visitas)
  const calculateConversionRate = (clicks: number, visits: number) => {
    if (!visits) return '0.0%';
    return `${((clicks / visits) * 100).toFixed(1)}%`;
  };

  if (!isLoggedIn) {
    return (
      <div className="admin-login-wrapper">
        <div className="login-card" id="admin-login-box">
          <h2 className="login-title">Acesso Restrito</h2>
          <p className="login-subtitle">Aryaraj Automações Admin Panel</p>

          {loginError && <div className="error-msg" id="login-error-message">{loginError}</div>}

          <form onSubmit={handleLogin} id="login-form">
            <div className="input-group">
              <label className="input-label">Usuário</label>
              <div className="input-field-wrapper">
                <User size={18} className="input-field-icon" />
                <input
                  type="text"
                  className="input-field"
                  placeholder="Nome de usuário"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  required
                  id="login-username-input"
                />
              </div>
            </div>

            <div className="input-group">
              <label className="input-label">Senha</label>
              <div className="input-field-wrapper">
                <Lock size={18} className="input-field-icon" />
                <input
                  type={showPassword ? "text" : "password"}
                  className="input-field"
                  placeholder="Senha secreta"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                  id="login-password-input"
                />
                <button
                  type="button"
                  className="toggle-password-btn"
                  onClick={() => setShowPassword(!showPassword)}
                  id="toggle-password-visibility"
                  title={showPassword ? "Esconder senha" : "Mostrar senha"}
                >
                  {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                </button>
              </div>
            </div>

            <button type="submit" className="login-btn" disabled={isLoading} id="login-submit-button">
              {isLoading ? 'Conectando...' : 'Entrar no Painel'}
            </button>
          </form>
        </div>
      </div>
    );
  }

  // Estatísticas calculadas sobre a amostragem filtrada
  const currentPeriodVisits = statsData?.visits.reduce((acc, v) => acc + Number(v.value), 0) || 0;
  const currentPeriodClicks = statsData?.clicks.reduce((acc, c) => acc + Number(c.value), 0) || 0;

  return (
    <div className="admin-panel-wrapper">

      {/* Navegação Principal */}
      <nav className="admin-nav">
        <div className="container nav-flex">
          <h1 className="nav-title">
            <span className="text-gradient">Aryaraj API</span> Panel
          </h1>
          <button className="logout-btn" onClick={() => setShowLogoutConfirm(true)} id="logout-button">
            <LogOut size={16} />
            <span>Sair do Painel</span>
          </button>
        </div>
      </nav>

      <div className="container">
        {/* Cabeçalho do Dashboard */}
        <div className="dashboard-header">
          <div>
            <h2 className="dashboard-header-title">Estatísticas de Acesso</h2>
            <p className="dashboard-header-subtitle">Mensure visitas e interações com a página.</p>
          </div>

          <div className="period-selector" id="stats-period-selector">
            <button
              className={`period-btn ${statsPeriod === 'day' ? 'active' : ''}`}
              onClick={() => setStatsPeriod('day')}
              id="period-btn-day"
            >
              Diário
            </button>
            <button
              className={`period-btn ${statsPeriod === 'week' ? 'active' : ''}`}
              onClick={() => setStatsPeriod('week')}
              id="period-btn-week"
            >
              Semanal
            </button>
            <button
              className={`period-btn ${statsPeriod === 'month' ? 'active' : ''}`}
              onClick={() => setStatsPeriod('month')}
              id="period-btn-month"
            >
              Mensal
            </button>
            <button
              className={`period-btn ${statsPeriod === 'year' ? 'active' : ''}`}
              onClick={() => setStatsPeriod('year')}
              id="period-btn-year"
            >
              Anual
            </button>
          </div>
        </div>

        {/* Resumos Estatísticos */}
        <div className="stats-summary" id="stats-cards-summary">
          {/* Card 1: Visitas */}
          <div className="glass stat-card">
            <div className="stat-icon-wrapper stat-icon-wrapper--cyan">
              <Eye size={26} className="stat-icon--cyan" />
            </div>
            <div className="stat-meta">
              <span className="stat-label">Visualizações</span>
              <h3 className="stat-value" id="total-visits-metric">
                {statsPeriod === 'day' ? currentPeriodVisits : (statsData?.totals.visits || 0)}
              </h3>
              <p className="stat-sub">Total histórico: {statsData?.totals.visits || 0}</p>
            </div>
          </div>

          {/* Card 2: Cliques */}
          <div className="glass stat-card">
            <div className="stat-icon-wrapper stat-icon-wrapper--violet">
              <MousePointerClick size={26} className="stat-icon--violet" />
            </div>
            <div className="stat-meta">
              <span className="stat-label">Cliques no WhatsApp</span>
              <h3 className="stat-value" id="total-clicks-metric">
                {statsPeriod === 'day' ? currentPeriodClicks : (statsData?.totals.clicks || 0)}
              </h3>
              <p className="stat-sub">Total histórico: {statsData?.totals.clicks || 0}</p>
            </div>
          </div>

          {/* Card 3: Taxa de Conversão */}
          <div className="glass stat-card">
            <div className="stat-icon-wrapper stat-icon-wrapper--green">
              <TrendingUp size={26} className="stat-icon--green" />
            </div>
            <div className="stat-meta">
              <span className="stat-label">Taxa de Conversão</span>
              <h3 className="stat-value stat-value--green" id="conversion-rate-metric">
                {statsPeriod === 'day'
                  ? calculateConversionRate(currentPeriodClicks, currentPeriodVisits)
                  : calculateConversionRate(statsData?.totals.clicks || 0, statsData?.totals.visits || 0)
                }
              </h3>
              <p className="stat-sub">Cliques em relação às visitas</p>
            </div>
          </div>
        </div>

        {/* Grade de Detalhes Analíticos */}
        <div className="dashboard-grid">
          {/* Gráfico do Histórico */}
          <div className="glass chart-box" id="stats-timeline-chart">
            <div className="chart-title">
              <span>Histórico de Tráfego do Período</span>
              <button className="refresh-btn" onClick={() => setRefreshKey(prev => prev + 1)} title="Recarregar dados">
                <RefreshCw size={18} className={isLoading ? 'animate-spin' : ''} />
              </button>
            </div>

            {/* Visualizador de Gráfico customizado SVG/HTML */}
            <div className="chart-visual-wrapper">
              {statsData && statsData.visits.length > 0 ? (
                statsData.visits.map((item, index) => {
                  const clickItem = statsData.clicks.find(c => c.label === item.label);
                  const clickValue = clickItem ? Number(clickItem.value) : 0;
                  const visitValue = Number(item.value);

                  // Encontra o maior valor da amostra para escala de 100%
                  const maxVal = Math.max(
                    ...statsData.visits.map(v => Number(v.value)),
                    ...statsData.clicks.map(c => Number(c.value)),
                    1 // Evita divisão por zero
                  );

                  const visitHeightPercent = `${(visitValue / maxVal) * 90}%`;
                  const clickHeightPercent = `${(clickValue / maxVal) * 90}%`;

                  return (
                    <div key={index} className="chart-bar-container">
                      <div className="chart-bar-inner">
                        {/* Barra de Visitas (Cyan) */}
                        <div
                          className="chart-bar chart-bar--cyan"
                          style={{ height: visitHeightPercent }}
                        >
                          <div className="chart-tooltip">
                            Visitas: {visitValue}
                          </div>
                        </div>

                        {/* Barra de Cliques (Violet) */}
                        <div
                          className="chart-bar chart-bar--violet"
                          style={{ height: clickHeightPercent }}
                        >
                          <div className="chart-tooltip">
                            Cliques: {clickValue}
                          </div>
                        </div>
                      </div>
                      <span className="chart-bar-label">{item.label}</span>
                    </div>
                  );
                })
              ) : (
                <div className="chart-empty-state">
                  {isLoading ? 'Carregando dados estatísticos...' : 'Nenhuma métrica registrada neste período.'}
                </div>
              )}
            </div>

            {/* Legenda do Gráfico */}
            <div className="chart-legend">
              <div className="chart-legend-item">
                <div className="chart-legend-dot chart-legend-dot--cyan"></div>
                <span className="chart-legend-label">Visualizações de Página</span>
              </div>
              <div className="chart-legend-item">
                <div className="chart-legend-dot chart-legend-dot--violet"></div>
                <span className="chart-legend-label">Cliques de Conversão</span>
              </div>
            </div>
          </div>

          {/* Distribuição por Botões */}
          <div className="glass distribution-box" id="stats-buttons-distribution">
            <h3 className="chart-title">Cliques por Botão</h3>

            {statsData && Object.keys(statsData.button_distribution).length > 0 ? (
              Object.entries(statsData.button_distribution).map(([btnId, count]) => {
                const totalClicks = statsData.totals.clicks || 1;
                const percent = `${((count / totalClicks) * 100).toFixed(0)}%`;

                // Nomes amigáveis para os botões
                let friendlyName = btnId;
                if (btnId === 'hero_cta') friendlyName = 'Botão Hero Principal';
                else if (btnId === 'bottom_cta') friendlyName = 'CTA de Contato Final';
                else if (btnId === 'pricing_cta') friendlyName = 'Tabela Comparativa';

                return (
                  <div key={btnId} className="dist-item">
                    <div className="dist-header">
                      <span className="dist-btn-name">{friendlyName}</span>
                      <span className="dist-btn-count">{count} ({percent})</span>
                    </div>
                    <div className="dist-progress-bar">
                      <div
                        className="dist-progress-fill"
                        style={{ width: percent }}
                      ></div>
                    </div>
                  </div>
                );
              })
            ) : (
              <div className="dist-empty-state">
                Nenhum clique em botões registrado ainda.
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Popup de Confirmação de Logout */}
      {showLogoutConfirm && (
        <div className="modal-backdrop" id="logout-modal-backdrop">
          <div className="glass modal-content" id="logout-modal-content">
            <h3 className="modal-title">Confirmar Saída</h3>
            <p className="modal-desc">Tem certeza que deseja sair do painel administrativo?</p>
            <div className="modal-actions">
              <button
                type="button"
                className="modal-btn-cancel"
                onClick={() => setShowLogoutConfirm(false)}
                id="logout-cancel-button"
              >
                Cancelar
              </button>
              <button
                type="button"
                className="modal-btn-confirm"
                onClick={handleLogout}
                id="logout-confirm-button"
              >
                Sair
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
