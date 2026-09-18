import React from 'react';
import '../estilos/WhatIsIncluded.css';
import { LayoutDashboard, Cable, Server, Users } from 'lucide-react';

interface IncludedItem {
  icon: React.ReactNode;
  title: string;
  desc: string;
}

export default function WhatIsIncluded() {
  const items: IncludedItem[] = [
    {
      icon: <LayoutDashboard size={28} style={{ color: 'var(--color-cyan)' }} />,
      title: "Painel Multi-Atendimento",
      desc: "Plataforma completa para centralizar seu suporte. Permita que dezenas de atendentes conversem simultaneamente usando o mesmo número oficial."
    },
    {
      icon: <Cable size={28} style={{ color: 'var(--color-violet)' }} />,
      title: "Integração com Plataformas de Vendas",
      desc: "Conexão direta da sua API com plataformas de vendas (Kiwify, Hotmart, etc.) para registrar leads e disparar webhooks de forma automática."
    },
    {
      icon: <Server size={28} style={{ color: 'var(--color-cyan)' }} />,
      title: "Servidor VPS Dedicado",
      desc: "Instalação e otimização de toda a estrutura no seu próprio servidor Hostinger. Garanta total soberania dos dados da sua empresa, sem custos ocultos de terceiros."
    },
    {
      icon: <Users size={28} style={{ color: 'var(--color-violet)' }} />,
      title: "Treinamento Completo",
      desc: "Treinamento passo a passo com você e sua equipe ensinando como fazer disparos, gerenciar contatos, agendar mensagens e acompanhar métricas de conversão."
    }
  ];

  return (
    <section className="section included-section" id="entregaveis">
      <div className="container">
        <h2 className="section-title">O Que Você Recebe na Entrega?</h2>
        <p className="section-subtitle">
          Tudo configurado do absoluto zero para que você tenha autonomia total da sua operação, sem precisar ser programador.
        </p>

        <div className="included-grid" id="included-items-list">
          {items.map((item, index) => (
            <div key={index} className="glass included-card" id={`included-card-${index}`}>
              <div className="included-icon-box">
                {item.icon}
              </div>
              <h3 className="included-card-title">{item.title}</h3>
              <p className="included-card-desc">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
