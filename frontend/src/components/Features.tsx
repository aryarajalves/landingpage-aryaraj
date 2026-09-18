import React from 'react';
import '../estilos/Features.css';
import { Users, Link, GitMerge, FileText, CheckCircle2 } from 'lucide-react';

interface FeatureCard {
  icon: React.ReactNode;
  title: string;
  desc: string;
}

export default function Features() {
  const listFeatures: FeatureCard[] = [
    {
      icon: <Users size={28} style={{ color: 'var(--color-cyan)' }} />,
      title: "Múltiplos Atendentes no Mesmo Número",
      desc: "Centralize seu atendimento comercial e suporte. Permita que toda a sua equipe atenda simultaneamente usando uma única conta do WhatsApp."
    },
    {
      icon: <Link size={28} style={{ color: '#10b981' }} />,
      title: "Painel de Conversas Completo",
      desc: "Você ganha acesso a uma plataforma dedicada onde poderá acompanhar em tempo real todo o processo de conversas entre seus contatos e a API Oficial do WhatsApp."
    },
    {
      icon: <FileText size={28} style={{ color: 'var(--color-cyan)' }} />,
      title: "Templates com Botões Clicáveis",
      desc: "Envie mensagens interativas com botões de chamada de ação ('CTA') e respostas rápidas que aumentam a taxa de clique e conversão."
    },
    {
      icon: <CheckCircle2 size={28} style={{ color: 'var(--color-violet)' }} />,
      title: "Disparos e Agendamentos Visuais",
      desc: "Você ganha acesso a uma plataforma completa para organizar, automatizar e agendar todos os seus disparos de mensagens em massa de forma 100% visual."
    }
  ];

  return (
    <section className="section" id="beneficios">
      <div className="container">
        <h2 className="section-title">Infraestrutura Profissional para WhatsApp</h2>
        <p className="section-subtitle">
          Estruture o atendimento da sua marca com a segurança, estabilidade e recursos exclusivos da API Oficial Cloud da Meta.
        </p>

        <div className="feat-grid">
          {listFeatures.map((feat, index) => (
            <div key={index} className="glass feat-card" id={`feature-card-${index}`}>
              <div className="feat-icon-wrapper">
                {feat.icon}
              </div>
              <h3 className="feat-card-title">{feat.title}</h3>
              <p className="feat-card-desc">{feat.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
