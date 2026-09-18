import React, { useState } from 'react';
import '../estilos/Faq.css';
import { ChevronDown, HelpCircle } from 'lucide-react';

interface FaqItem {
  question: string;
  answer: string;
}

export default function Faq() {
  const faqData: FaqItem[] = [
    {
      question: "A API Oficial protege contra 100% dos banimentos?",
      answer: "Não existe risco zero absoluto. Se você enviar mensagens indesejadas (spam) para listas frias e os destinatários bloquearem/denunciarem seu número, a Meta poderá sim suspender ou banir sua conta por violar as políticas. Contudo, ao usar a API Oficial e seguir as boas práticas de opt-in, as chances de bloqueio são mínimas (reduzidas em mais de 95% se comparadas aos sistemas piratas de QR Code que são detectados automaticamente pelo robô da Meta)."
    },
    {
      question: "Quais são as taxas cobradas pela Meta por conversação?",
      answer: "A Meta cobra por conversações iniciadas. A janela de atendimento dura 24 horas a partir da última mensagem recebida do cliente. Respostas reativas dentro desta janela não geram custos extras. Para iniciar conversas ativas fora da janela, você utiliza Templates Aprovados, divididos em: Marketing (mensagens promocionais com custo fixo de R$ 0,35 por envio) e Utilidade (cobranças, alertas e atualizações com custo reduzido de R$ 0,07 por envio)."
    },
    {
      question: "Preciso de um CNPJ para utilizar a API Oficial?",
      answer: "Sim. A Meta exige um CNPJ ativo para verificar a conta comercial da empresa (Facebook Business Manager). Essa verificação garante a legitimidade do número. Vale destacar que toda conta nova começa com um limite inicial de disparos diários estabelecido pela Meta (geralmente de 250 a 1.000 conversas ativas por dia), o qual aumenta gradativamente conforme a conta é aquecida e a empresa segue as boas práticas."
    },
    {
      question: "Como funciona a entrega do serviço de homologação?",
      answer: "Nossa equipe fará toda a instalação e configuração da API Oficial para a sua empresa, mas precisaremos da sua cooperação com alguns itens fundamentais para a entrega: (1) compartilhamento de acesso à sua BM (Business Manager); (2) disponibilização de 1 número de WhatsApp exclusivo para a API; (3) contratação de 1 servidor na Hostinger para hospedarmos as ferramentas necessárias; e (4) realização da verificação de empresa da sua BM (Meta), garantindo que o limite de disparos diários seja ampliado para que você realize seus lançamentos com segurança."
    }
  ];

  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const toggleAccordion = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className="section" id="faq">
      <div className="container">
        <h2 className="section-title">Perguntas Frequentes</h2>
        <p className="section-subtitle">
          Esclareça suas principais dúvidas sobre o funcionamento da infraestrutura oficial do WhatsApp Cloud API.
        </p>

        <div className="faq-list">
          {faqData.map((item, index) => (
            <div
              key={index}
              className={`faq-item ${activeIndex === index ? 'active' : ''}`}
              data-testid={`faq-item-${index}`}
            >
              <button
                className="faq-header"
                onClick={() => toggleAccordion(index)}
                data-testid={`faq-btn-${index}`}
              >
                <div className="faq-header-inner">
                  <HelpCircle size={20} style={{ color: activeIndex === index ? 'var(--color-cyan)' : 'var(--text-secondary)', flexShrink: 0 }} />
                  <span>{item.question}</span>
                </div>
                <ChevronDown size={20} className="faq-icon-chevron" />
              </button>
              <div className="faq-body" data-testid={`faq-body-${index}`}>
                <p className="faq-answer">{item.answer}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
