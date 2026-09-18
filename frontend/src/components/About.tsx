import React from 'react';
import '../estilos/About.css';
import { Award, Zap, Code, TrendingUp } from 'lucide-react';

export default function About() {
  return (
    <section className="section about-section" id="sobre">
      <div className="container">
        <h2 className="section-title">Quem está por trás do seu projeto?</h2>
        <p className="section-subtitle">
          Entenda a trajetória de quem uniu código e marketing para criar estruturas de escala no WhatsApp.
        </p>

        <div className="glass about-layout about-layout-inner">
          {/* Visual Profile Block */}
          <div className="glass about-visual">
            <div className="about-avatar-glow">
              <img src="/avatar.jpg" alt="Aryaraj" />
            </div>
            <div className="about-profile-info">
              <h3 className="about-profile-name">Aryaraj</h3>
              <p className="about-profile-role">Especialista em Automações de API</p>
              <p className="about-profile-location">Fortaleza - CE (Atendimento Nacional)</p>
            </div>

            <div className="about-badges">
              <div className="about-badge-item">
                <Code size={14} style={{ color: 'var(--color-cyan)' }} />
                <span>Dev desde 2017</span>
              </div>
              <div className="about-badge-item">
                <Award size={14} style={{ color: '#10b981' }} />
                <span>+6 Dígitos Gerenciados</span>
              </div>
            </div>
          </div>

          {/* Text Content Block */}
          <div className="about-text-content">
            <h3 className="about-title" data-testid="about-title">Quem é Aryaraj?</h3>
            <p className="about-highlight-sentence">
              "Olá, me chamo Aryaraj, tenho 28 anos e sou natural de Fortaleza / Ceará. Minha missão hoje é unir programação e marketing digital para criar engrenagens de vendas automáticas."
            </p>
            <p className="about-p">
              Minha jornada na programação começou em 2017 e, em 2020, expandi meus conhecimentos para o marketing digital, aprendendo a planejar campanhas e criar copys. Em 2023, uni essas duas frentes e foquei totalmente no desenvolvimento de automações avançadas.
            </p>
            <p className="about-p">
              Ao integrar programação e marketing digital, passei a desenvolver soluções de alta performance para empresas em todo o Brasil, tendo gerenciado múltiplos 6 dígitos em disparos de mensagens estruturadas através da API Oficial do WhatsApp.
            </p>
            <p className="about-p about-footer-row">
              <Zap size={20} style={{ color: 'var(--color-cyan)', flexShrink: 0 }} />
              <span>Garantia de conformidade, agilidade técnica e expertise de funil de vendas.</span>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
