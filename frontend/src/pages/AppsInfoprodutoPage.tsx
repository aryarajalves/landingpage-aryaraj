import React, { useEffect, useState } from 'react';
import '../estilos/AppsInfoprodutoPage.css';
import '../estilos/Faq.css';
import { 
  Smartphone, 
  Search, 
  Target, 
  CheckCircle2, 
  Sparkles, 
  Layers, 
  ShieldCheck, 
  Users, 
  TrendingUp,
  MessageCircle,
  BarChart3,
  HelpCircle,
  ChevronDown,
  ArrowLeft
} from 'lucide-react';
import { WHATSAPP_LINK } from '../config';
import { trackClick } from '../utils/tracking';
import FloatingWhatsApp from '../components/FloatingWhatsApp';
import About from '../components/About';
import Footer from '../components/Footer';

interface AppFaqItem {
  question: string;
  answer: string;
}

const AppsInfoprodutoPage: React.FC = () => {
  const whatsappUrl = `${WHATSAPP_LINK}&text=Olá%20Aryaraj!%20Quero%20analisar%20meu%20infoproduto%20para%20criar%20um%20aplicativo%20exclusivo.`;

  // Todos iniciam fechados (null) conforme o padrão do design
  const [activeFaqIndex, setActiveFaqIndex] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setActiveFaqIndex(activeFaqIndex === index ? null : index);
  };

  const faqItems: AppFaqItem[] = [
    {
      question: "Como você sabe qual produto vai funcionar para a minha audiência?",
      answer: "Nós realizamos uma imersão no seu modelo de negócio e nas dores dos seus clientes atuais. Avaliamos onde os alunos mais têm dificuldade prática e desenhamos um protótipo focado em resolver exatamente essa trava, gerando utilidade real no dia a dia."
    },
    {
      question: "Eu preciso ter conhecimento de tecnologia ou programação?",
      answer: "Não. Você entra com a autoridade do seu nicho, a audiência e o conhecimento do seu método. A equipe de Aryaraj cuida de 100% da parte técnica, arquitetura, servidores, banco de dados e design do aplicativo."
    },
    {
      question: "Como o app se integra com as minhas vendas (Kiwify, Hotmart, Eduzz)?",
      answer: "Integramos via Webhooks com qualquer plataforma de checkout. Assim que o cliente compra na sua página, o acesso dele no aplicativo é liberado automaticamente por e-mail ou WhatsApp."
    }
  ];

  useEffect(() => {
    document.title = 'Aplicativos para Infoproduto';
  }, []);

  const handleBackToHome = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    trackClick('app_nav_back_home');
    window.history.pushState(null, '', '/');
    window.dispatchEvent(new PopStateEvent('popstate'));
  };

  return (
    <div className="app-page" data-testid="apps-infoproduto-page">
      {/* Navbar */}
      <header className="app-navbar">
        <div className="container app-nav-container">
          <div className="app-nav-left-group">
            <a
              href="/"
              onClick={handleBackToHome}
              className="btn-app-back"
              data-testid="btn-app-back-home"
              title="Voltar para a página inicial"
            >
              <ArrowLeft size={18} />
              <span className="btn-app-back-text">Início</span>
            </a>

            <a href="/" className="app-brand" onClick={() => trackClick('app_nav_logo')}>
              <div className="app-brand-icon-box">
                <Smartphone size={22} />
              </div>
              <div className="app-brand-text">
                <h3>Aryaraj Apps</h3>
                <span>Tecnologia para Infoprodutos</span>
              </div>
            </a>
          </div>

          <nav className="app-nav-links">
            <a href="#diagnostico" className="app-nav-link">Diagnóstico</a>
            <a href="#solucoes" className="app-nav-link">O que Criamos</a>
            <a href="#sobre" className="app-nav-link">Sobre</a>
            <a href="#faq" className="app-nav-link">Dúvidas</a>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="app-hero-section">
        <div className="container app-hero-grid">
          <div>
            <div className="app-badge">
              <Sparkles size={16} />
              <span>Engenharia de Software Sob Medida</span>
            </div>
            <h1 className="app-hero-title">
              Criamos o <span className="text-gradient-cyan">Aplicativo Perfeito</span> para o seu Infoproduto
            </h1>
            <p className="app-hero-desc">
              Não criamos apenas um app por criar. <strong>Analisamos a fundo o seu negócio e a sua audiência</strong> para descobrir qual dor latente eles enfrentam e qual tipo de ferramenta ou produto eles <strong>realmente desejam usar e pagar todos os meses</strong>.
            </p>

            <div className="app-hero-ctas">
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-app-primary"
                onClick={() => trackClick('app_hero_cta')}
                data-testid="app-hero-cta-button"
              >
                <Search size={20} />
                <span>Quero Analisar Meu Infoproduto</span>
              </a>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', color: '#44403c', fontSize: '0.94rem' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <CheckCircle2 size={18} style={{ color: '#0284c7' }} />
                <span>Diagnóstico estratégico: identificamos a dor real que seus alunos ou seguidores têm</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <CheckCircle2 size={18} style={{ color: '#0284c7' }} />
                <span>Preparado para a Era da IA: integre inteligência artificial no app para acelerar o resultado do aluno</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <CheckCircle2 size={18} style={{ color: '#0284c7' }} />
                <span>Produto desejável e de alto valor percebido para aumentar o LTV do seu projeto</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <CheckCircle2 size={18} style={{ color: '#0284c7' }} />
                <span>Aplicativo próprio, rápido, moderno e 100% alinhado à sua marca</span>
              </div>
            </div>
          </div>

          {/* Card Mockup de App */}
          <div>
            <div className="app-mockup-card">
              <div className="app-mockup-top">
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                  <Smartphone size={18} />
                  <span style={{ fontSize: '0.85rem', fontWeight: 700 }}>Seu App Exclusivo</span>
                </div>
                <span style={{ fontSize: '0.7rem', background: 'rgba(255,255,255,0.2)', padding: '2px 8px', borderRadius: '9999px' }}>PRODUTO ATIVO</span>
              </div>

              <div className="app-mockup-body">
                <div className="app-feature-box">
                  <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '6px' }}>
                    <Target size={16} style={{ color: '#0284c7' }} />
                    <span style={{ fontWeight: 700, fontSize: '0.85rem', color: '#0f172a' }}>Dor Identificada</span>
                  </div>
                  <p style={{ margin: 0, fontSize: '0.75rem', color: '#64748b', lineHeight: '1.4' }}>
                    Alunos com dificuldade em aplicar na prática o conteúdo das aulas de forma diária.
                  </p>
                </div>

                <div className="app-feature-box" style={{ background: '#f0fdf4', borderColor: '#bbf7d0' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '6px' }}>
                    <CheckCircle2 size={16} style={{ color: '#16a34a' }} />
                    <span style={{ fontWeight: 700, fontSize: '0.85rem', color: '#166534' }}>Solução no App</span>
                  </div>
                  <p style={{ margin: 0, fontSize: '0.75rem', color: '#15803d', lineHeight: '1.4' }}>
                    Calculadora, rotinas automáticas ou diário gamificado para gerar resultado palpável.
                  </p>
                </div>

                <div className="app-feature-box" style={{ background: '#fdf4ff', borderColor: '#f0abfc' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '6px' }}>
                    <Sparkles size={16} style={{ color: '#a855f7' }} />
                    <span style={{ fontWeight: 700, fontSize: '0.85rem', color: '#7e22ce' }}>IA Integrada</span>
                  </div>
                  <p style={{ margin: 0, fontSize: '0.75rem', color: '#86198f', lineHeight: '1.4' }}>
                    Inteligência Artificial treinada no seu método para tirar dúvidas e resolver a dor na hora.
                  </p>
                </div>

                <div className="app-feature-box" style={{ background: '#f8fafc' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '6px' }}>
                    <TrendingUp size={16} style={{ color: '#0284c7' }} />
                    <span style={{ fontWeight: 700, fontSize: '0.85rem', color: '#0f172a' }}>Impacto Financeiro</span>
                  </div>
                  <p style={{ margin: 0, fontSize: '0.75rem', color: '#475569', lineHeight: '1.4' }}>
                    Nova esteira de recorrência mensal (SaaS) ou produto de upsell de alto ticket.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Seção: O Ponto Chave - Diagnóstico da Audiência */}
      <section className="app-analysis-section" id="diagnostico">
        <div className="container">
          <div style={{ textAlign: 'center', maxWidth: '820px', margin: '0 auto 40px' }}>
            <h2 style={{ fontSize: '2.3rem', fontWeight: 800, color: '#14532d', marginBottom: '14px' }}>
              Por Que Criar um App Sob Medida para o Seu Infoproduto?
            </h2>
            <p style={{ fontSize: '1.08rem', color: '#166534', lineHeight: '1.6' }}>
              Estamos na <strong>era da Inteligência Artificial</strong>, e cursos puramente gravados estão se tornando cada vez mais obsoletos. Os alunos não querem mais assistir a dezenas de horas de aula para tentar descobrir a solução sozinhos: eles querem <strong>velocidade e resultado prático</strong>.
            </p>
            <p style={{ fontSize: '1.02rem', color: '#15803d', lineHeight: '1.6', marginTop: '10px' }}>
              Ter um aplicativo próprio transforma seu conhecimento em ferramenta diária e te dá o poder de <strong>integrar uma IA exclusiva</strong>, permitindo que o seu cliente ideal resolva aquela dor específica de uma maneira muito mais <strong>rápida, fácil e personalizada</strong>.
            </p>
          </div>

          <div className="app-cards-grid">
            <div className="app-card" data-testid="app-benefit-analysis">
              <div className="app-card-icon">
                <Search size={26} />
              </div>
              <h3 className="app-card-title">Análise de Negócio e Audiência</h3>
              <p className="app-card-desc">
                Mapeamos as perguntas frequentes dos seus alunos, onde eles travam e qual ferramenta complementar facilitaria a vida deles para que você venda algo que eles já desejam comprar.
              </p>
            </div>

            <div className="app-card" data-testid="app-benefit-ai">
              <div className="app-card-icon" style={{ color: '#7c3aed', background: '#f5f3ff' }}>
                <Sparkles size={26} />
              </div>
              <h3 className="app-card-title">Poder da IA Integrada</h3>
              <p className="app-card-desc">
                Em vez de cursos obsoletos, ofereça um assistente com IA dentro do app treinado no seu método, guiando o usuário passo a passo e eliminando as dores em segundos.
              </p>
            </div>

            <div className="app-card" data-testid="app-benefit-pain">
              <div className="app-card-icon" style={{ color: '#059669', background: '#ecfdf5' }}>
                <Target size={26} />
              </div>
              <h3 className="app-card-title">Resolução de Dores Críticas</h3>
              <p className="app-card-desc">
                Seja um app de cálculos, controle de rotinas, automação de tarefas, planilhas inteligentes ou comunidade exclusiva: desenvolvemos exatamente a mecânica que soluciona o problema.
              </p>
            </div>

            <div className="app-card" data-testid="app-benefit-revenue">
              <div className="app-card-icon" style={{ color: '#0284c7', background: '#f0f9ff' }}>
                <TrendingUp size={26} />
              </div>
              <h3 className="app-card-title">Nova Linha de Receita Recorrente</h3>
              <p className="app-card-desc">
                Crie um modelo de assinatura mensal ou adicione o app como um upsell irresistível na sua esteira de produtos, blindando seu faturamento contra a sazonalidade de lançamentos.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Seção: Exemplos de Aplicativos que Criamos */}
      <section id="solucoes" style={{ padding: '80px 0', background: '#ffffff' }}>
        <div className="container">
          <div style={{ textAlign: 'center', maxWidth: '720px', margin: '0 auto 50px' }}>
            <h2 style={{ fontSize: '2.2rem', fontWeight: 800, color: '#111827', marginBottom: '14px' }}>
              Tipos de Aplicativos que Desenvolvemos
            </h2>
            <p style={{ fontSize: '1.05rem', color: '#4b5563', lineHeight: '1.6' }}>
              Formatos flexíveis e modernos prontos para rodar no navegador e no smartphone:
            </p>
          </div>

          <div className="app-cards-grid">
            <div className="app-card">
              <div className="app-card-icon">
                <BarChart3 size={24} />
              </div>
              <h4 style={{ margin: '0 0 10px', fontSize: '1.15rem', color: '#111827' }}>Apps de Ferramentas & Cálculos</h4>
              <p style={{ margin: 0, color: '#4b5563', fontSize: '0.92rem', lineHeight: '1.55' }}>
                Calculadoras financeiras, geradores de contratos, simuladores de metas, análise de dados e ferramentas práticas que seu aluno consulta diariamente.
              </p>
            </div>

            <div className="app-card">
              <div className="app-card-icon" style={{ color: '#7c3aed', background: '#f5f3ff' }}>
                <Layers size={24} />
              </div>
              <h4 style={{ margin: '0 0 10px', fontSize: '1.15rem', color: '#111827' }}>Áreas de Membros Gamificadas</h4>
              <p style={{ margin: 0, color: '#4b5563', fontSize: '0.92rem', lineHeight: '1.55' }}>
                Plataforma própria com trilha de aprendizado, checklists de tarefas diárias, ranking de pontuação e comunidade integrada exclusiva.
              </p>
            </div>

            <div className="app-card">
              <div className="app-card-icon" style={{ color: '#059669', background: '#ecfdf5' }}>
                <ShieldCheck size={24} />
              </div>
              <h4 style={{ margin: '0 0 10px', fontSize: '1.15rem', color: '#111827' }}>Sistemas de Gestão & Rotina</h4>
              <p style={{ margin: 0, color: '#4b5563', fontSize: '0.92rem', lineHeight: '1.55' }}>
                Diários de bordo, acompanhamento de hábitos, controle de treinos/dietas, agendamentos e controle operacional para clientes do seu método.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Quem está por trás do seu projeto? */}
      <div id="sobre">
        <About />
      </div>

      {/* FAQ */}
      <section id="faq" style={{ padding: '70px 0', background: '#fdfbf7' }}>
        <div className="container" style={{ maxWidth: '800px' }}>
          <div style={{ textAlign: 'center', marginBottom: '40px' }}>
            <h2 style={{ fontSize: '2.2rem', fontWeight: 800, color: '#111827', marginBottom: '12px' }}>
              Perguntas Frequentes sobre Aplicativos
            </h2>
            <p style={{ color: '#4b5563', fontSize: '1.05rem' }}>
              Tire suas dúvidas sobre o processo de criação de aplicativos para infoprodutos.
            </p>
          </div>

          <div className="faq-list">
            {faqItems.map((item, index) => (
              <div
                key={index}
                className={`faq-item ${activeFaqIndex === index ? 'active' : ''}`}
                data-testid={`app-faq-item-${index}`}
              >
                <button
                  className="faq-header"
                  onClick={() => toggleFaq(index)}
                  data-testid={`app-faq-btn-${index}`}
                >
                  <div className="faq-header-inner">
                    <HelpCircle size={20} style={{ color: activeFaqIndex === index ? '#0284c7' : 'var(--text-secondary)', flexShrink: 0 }} />
                    <span>{item.question}</span>
                  </div>
                  <ChevronDown size={20} className="faq-icon-chevron" />
                </button>
                <div className="faq-body" data-testid={`app-faq-body-${index}`}>
                  <p className="faq-answer">{item.answer}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Final */}
      <section className="app-cta-section">
        <div className="container">
          <div className="app-cta-box">
            <h2 style={{ fontSize: '2.2rem', fontWeight: 800, margin: '0 0 16px', color: '#111827' }}>
              Quer descobrir qual aplicativo sua audiência compraria de olhos fechados?
            </h2>
            <p style={{ color: '#4b5563', fontSize: '1.05rem', margin: '0 auto 30px', maxWidth: '600px', lineHeight: '1.6' }}>
              Entre em contato diretamente comigo no WhatsApp para agendarmos uma sessão de diagnóstico do seu infoproduto.
            </p>
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-app-primary"
              style={{ fontSize: '1.05rem', padding: '16px 36px' }}
              onClick={() => trackClick('app_bottom_cta')}
            >
              <MessageCircle size={22} />
              <span>Solicitar Análise de Infoproduto</span>
            </a>
          </div>
        </div>
      </section>

      {/* Rodapé Oficial Padronizado */}
      <Footer />

      {/* Floating CTA WhatsApp */}
      <FloatingWhatsApp 
        customLink={whatsappUrl}
        tooltipText={
          <>
            Quer criar um <strong>Aplicativo</strong> para o seu negócio? Fale comigo no WhatsApp 📱
          </>
        }
      />
    </div>
  );
};

export default AppsInfoprodutoPage;
