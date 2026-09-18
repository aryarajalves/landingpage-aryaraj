import React from 'react';
import '../estilos/UseCases.css';
import { ShoppingCart, Sparkles, Users, CheckSquare } from 'lucide-react';

interface UseCaseCard {
  icon: React.ReactNode;
  title: string;
  desc: string;
}

export default function UseCases() {
  const cases: UseCaseCard[] = [
    {
      icon: <ShoppingCart size={28} style={{ color: 'var(--color-cyan)' }} />,
      title: "Recuperação de Carrinho Abandonado",
      desc: "Disparo de mensagem automática interativa (com botões de checkout rápido) assim que o cliente abandona a compra na Kiwify, Hotmart ou outra plataforma."
    },
    {
      icon: <Sparkles size={28} style={{ color: 'var(--color-violet)' }} />,
      title: "Avisos de Lançamento",
      desc: "Envio em massa e agendado de avisos de lives, aulas e ofertas direto no privado dos leads em tempo recorde, contornando a baixa taxa de entrega e leitura dos grupos."
    },
    {
      icon: <Users size={28} style={{ color: '#10b981' }} />,
      title: "Triagem Inteligente",
      desc: "Menus com botões para filtrar leads frios dos leads quentes. O lead seleciona a opção e é direcionado automaticamente para o atendente correto."
    },
    {
      icon: <CheckSquare size={28} style={{ color: 'var(--color-cyan)' }} />,
      title: "Pós-Venda e Entrega Imediata",
      desc: "Confirmação de compra aprovada, entrega automática de links de acesso à área de membros e suporte inicial pós-venda sem esforço manual."
    }
  ];

  return (
    <section className="section usecases-section" id="casos-de-uso">
      <div className="container">
        <h2 className="section-title">Como Aplicar na Sua Operação?</h2>
        <p className="section-subtitle">
          Veja cenários reais onde a API Oficial de WhatsApp acelera suas vendas, recupera faturamento perdido e otimiza seu suporte.
        </p>

        <div className="cases-grid" id="cases-items-list">
          {cases.map((c, index) => (
            <div key={index} className={`glass case-card case-card-${index}`} id={`case-card-${index}`}>
              <div className="case-icon-box">
                {c.icon}
              </div>
              <h3 className="case-card-title">{c.title}</h3>
              <p className="case-card-desc">{c.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
