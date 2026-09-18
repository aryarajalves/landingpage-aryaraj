import React from 'react';
import '../estilos/DeliveryProcess.css';
import { ClipboardCheck, Settings, ShieldAlert, GraduationCap } from 'lucide-react';

interface ProcessStep {
  number: string;
  icon: React.ReactNode;
  title: string;
  desc: string;
}

export default function DeliveryProcess() {
  const steps: ProcessStep[] = [
    {
      number: "01",
      icon: <ClipboardCheck size={28} style={{ color: 'var(--color-cyan)' }} />,
      title: "Alinhamento e Acesso",
      desc: "Alinhamos os pré-requisitos: compartilhamento seguro da sua BM (Business Manager) do Facebook e contratação da VPS Hostinger onde instalaremos as ferramentas."
    },
    {
      number: "02",
      icon: <Settings size={28} style={{ color: 'var(--color-violet)' }} />,
      title: "Configuração da Infraestrutura",
      desc: "Configuramos o aplicativo de desenvolvedor da Meta, vinculamos o número de WhatsApp escolhido e instalamos os sistemas e APIs diretamente no seu servidor."
    },
    {
      number: "03",
      icon: <ShieldAlert size={28} style={{ color: 'var(--color-cyan)' }} />,
      title: "Verificação e Liberação",
      desc: "Guiamos você no processo de verificação de empresa (BM) junto à Meta para liberar o limite de disparos diários e garantir segurança operacional."
    },
    {
      number: "04",
      icon: <GraduationCap size={28} style={{ color: 'var(--color-violet)' }} />,
      title: "Plataforma & Treinamento",
      desc: "Você recebe uma plataforma completa para realizar e agendar seus disparos diários de mensagens. Realizamos um treinamento prático com você para te ensinar a operar os disparos de forma estratégica."
    }
  ];

  return (
    <section className="section delivery-section" id="processo">
      <div className="container">
        <h2 className="section-title">Como Funciona a Implementação?</h2>
        <p className="section-subtitle">
          Um processo estruturado de ponta a ponta para que você tenha sua API Oficial rodando com máxima rapidez e segurança.
        </p>

        <div className="timeline-grid" id="timeline-steps">
          {steps.map((step, index) => (
            <div key={index} className="glass timeline-card" id={`step-card-${index}`}>
              <span className="step-number">{step.number}</span>
              <div className="step-icon-box">
                {step.icon}
              </div>
              <h3 className="step-title">{step.title}</h3>
              <p className="step-desc">{step.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
