import React, { useEffect, useState } from 'react';
import '../estilos/CoproducaoPage.css';
import '../estilos/Faq.css';
import { 
  Handshake, 
  Code2, 
  Cpu, 
  ShieldCheck, 
  Rocket, 
  CheckCircle2, 
  Users, 
  Layers, 
  TrendingUp,
  MessageCircle,
  HelpCircle,
  ChevronDown,
  Send,
  Bot,
  Video,
  ArrowLeft
} from 'lucide-react';
import { WHATSAPP_LINK } from '../config';
import { trackClick } from '../utils/tracking';
import FloatingWhatsApp from '../components/FloatingWhatsApp';
import About from '../components/About';
import Footer from '../components/Footer';
import ZapJordsShowcase from '../components/ZapJordsShowcase';

interface CoFaqItem {
  question: string;
  answer: string;
}

const CoproducaoPage: React.FC = () => {
  const whatsappUrl = `${WHATSAPP_LINK}&text=Olá%20Aryaraj!%20Quero%20conversar%20sobre%20uma%20parceria%20de%20co-produção%20tecnológica%20para%20o%20meu%20projeto.`;

  // FAQ inicia fechado
  const [activeFaqIndex, setActiveFaqIndex] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setActiveFaqIndex(activeFaqIndex === index ? null : index);
  };

  const faqItems: CoFaqItem[] = [
    {
      question: "Como funciona o modelo de Co-Produção Tecnológica?",
      answer: "Nesse modelo, nós entramos como o seu braço técnico oficial. Cuidamos de 100% da arquitetura, desenvolvimento de softwares, integrações de APIs, IA e sustentação da infraestrutura, enquanto você foca na produção de conteúdo, audiência, estratégia e vendas."
    },
    {
      question: "Para quem é indicada a Co-Produção Tecnológica?",
      answer: "É indicada para infoprodutores, especialistas e empresas digitais que já possuem audiência ou tráfego validado e desejam lançar SaaS, aplicativos, ferramentas próprias ou automações complexas com IA sem a dor de cabeça de contratar e gerenciar desenvolvedores internamente."
    },
    {
      question: "Qual é o modelo de remuneração da parceria?",
      answer: "Geralmente trabalhamos em um modelo alinhado ao sucesso do projeto (setup inicial + participação percentual no faturamento/recorrência ou modelo híbrido acordado previamente), garantindo que ambos os lados tenham o mesmo interesse no crescimento."
    },
    {
      question: "Quem fica responsável pela manutenção e evolução contínua?",
      answer: "A equipe de Aryaraj se encarrega de toda a sustentação contínua: correções, novas funcionalidades, escalabilidade dos servidores, segurança de dados e monitoramento 24/7."
    }
  ];

  useEffect(() => {
    document.title = 'Co-Produção Tecnológica';
  }, []);

  const handleBackToHome = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    trackClick('co_nav_back_home');
    window.history.pushState(null, '', '/');
    window.dispatchEvent(new PopStateEvent('popstate'));
  };

  return (
    <div className="co-page" data-testid="coproducao-page">
      {/* Navbar */}
      <header className="co-navbar">
        <div className="container co-nav-container">
          <div className="co-nav-left-group">
            <a
              href="/"
              onClick={handleBackToHome}
              className="btn-co-back"
              data-testid="btn-co-back-home"
              title="Voltar para a página inicial"
            >
              <ArrowLeft size={18} />
              <span className="btn-co-back-text">Início</span>
            </a>

            <a href="/" className="co-brand" onClick={() => trackClick('co_nav_logo')}>
              <div className="co-brand-icon-box">
                <Handshake size={22} />
              </div>
              <div className="co-brand-text">
                <h3>Aryaraj Tech</h3>
                <span>Co-Produção Tecnológica</span>
              </div>
            </a>
          </div>

          <nav className="co-nav-links">
            <a href="#como-funciona" className="co-nav-link">Como Funciona</a>
            <a href="#entregas" className="co-nav-link">O que Assumimos</a>
            <a href="#sobre" className="co-nav-link">Sobre</a>
            <a href="#faq" className="co-nav-link">Dúvidas</a>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="co-hero-section">
        <div className="container co-hero-grid">
          <div>
            <div className="co-badge">
              <Code2 size={16} />
              <span>Parceria Estratégica & Engenharia</span>
            </div>
            <h1 className="co-hero-title">
              Seu Braço Técnico e <span className="text-gradient-indigo">Co-Produtor de Tecnologia</span>
            </h1>
            <p className="co-hero-desc">
              Você domina a audiência, o método e as vendas. <strong>Nós assumimos 100% da tecnologia</strong>: desenvolvimento de aplicativos, integrações de APIs, agentes de IA e infraestrutura robusta para escalar o seu ecossistema digital.
            </p>

            <div className="co-hero-ctas">
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-co-primary"
                onClick={() => trackClick('co_hero_cta')}
                data-testid="co-hero-cta-button"
              >
                <Handshake size={20} />
                <span>Quero Avaliar Parceria Tecnológica</span>
              </a>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', color: '#44403c', fontSize: '0.94rem' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <CheckCircle2 size={18} style={{ color: '#4f46e5' }} />
                <span>Sem dor de cabeça com contratação ou gestão de programadores freelancers</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <CheckCircle2 size={18} style={{ color: '#4f46e5' }} />
                <span>Arquitetura de software escalável com inteligência artificial e automação de ponta</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <CheckCircle2 size={18} style={{ color: '#4f46e5' }} />
                <span>Comprometimento direto com o crescimento e a receita do seu infoproduto</span>
              </div>
            </div>
          </div>

          {/* Card Mockup de Parceria */}
          <div>
            <div className="co-mockup-card">
              <div className="co-mockup-top">
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                  <Handshake size={18} />
                  <span style={{ fontSize: '0.85rem', fontWeight: 700 }}>Divisão Perfeita de Papéis</span>
                </div>
                <span style={{ fontSize: '0.7rem', background: 'rgba(255,255,255,0.2)', padding: '2px 8px', borderRadius: '9999px' }}>PARCERIA TECH</span>
              </div>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                <div className="co-feature-box">
                  <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '6px' }}>
                    <Users size={16} style={{ color: '#0284c7' }} />
                    <span style={{ fontWeight: 700, fontSize: '0.85rem', color: '#0f172a' }}>Seu Papel (Especialista)</span>
                  </div>
                  <p style={{ margin: 0, fontSize: '0.75rem', color: '#64748b', lineHeight: '1.4' }}>
                    Audiência, posicionamento, estratégia de tráfego, criação do método e autoridade no nicho.
                  </p>
                </div>

                <div className="co-feature-box" style={{ background: '#f5f3ff', borderColor: '#ddd6fe' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '6px' }}>
                    <Cpu size={16} style={{ color: '#7c3aed' }} />
                    <span style={{ fontWeight: 700, fontSize: '0.85rem', color: '#5b21b6' }}>Nosso Papel (Tech Partner)</span>
                  </div>
                  <p style={{ margin: 0, fontSize: '0.75rem', color: '#6d28d9', lineHeight: '1.4' }}>
                    Engenharia de software, desenvolvimento de apps, IA sob medida, APIs e sustentação contínua.
                  </p>
                </div>

                <div className="co-feature-box" style={{ background: '#f0fdf4', borderColor: '#bbf7d0' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '6px' }}>
                    <TrendingUp size={16} style={{ color: '#16a34a' }} />
                    <span style={{ fontWeight: 700, fontSize: '0.85rem', color: '#166534' }}>O Resultado</span>
                  </div>
                  <p style={{ margin: 0, fontSize: '0.75rem', color: '#15803d', lineHeight: '1.4' }}>
                    LTV multiplicado, menor churn e produtos digitais modernos com margem altamente lucrativa.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Seção: Como Funciona */}
      <section className="co-cta-section" id="como-funciona" style={{ background: '#ffffff' }}>
        <div className="container">
          <div style={{ textAlign: 'center', maxWidth: '780px', margin: '0 auto 48px' }}>
            <h2 style={{ fontSize: '2.3rem', fontWeight: 800, color: '#1e1b4b', marginBottom: '14px' }}>
              Por Que Ter um Co-Produtor Tecnológico?
            </h2>
            <p style={{ fontSize: '1.08rem', color: '#4b5563', lineHeight: '1.6' }}>
              No mercado atual, quem depende apenas de cursos gravados enfrenta pirataria e queda nas taxas de conversão. 
              Para se diferenciar e criar um verdadeiro ativo, você precisa de <strong>tecnologia proprietária</strong>: aplicativos exclusivos, inteligência artificial aplicada e sistemas que os seus clientes usam todos os dias.
            </p>
          </div>

          <div className="co-cards-grid">
            <div className="co-card" data-testid="co-benefit-engineering">
              <div className="co-card-icon">
                <Code2 size={26} />
              </div>
              <h3 className="co-card-title">Engenharia Completa</h3>
              <p className="co-card-desc">
                Esqueça códigos mal feitos ou freelancers que somem no meio do projeto. Nós desenhamos, codificamos e mantemos sua plataforma com rigor técnico profissional.
              </p>
            </div>

            <div className="co-card" data-testid="co-benefit-ai">
              <div className="co-card-icon" style={{ color: '#7c3aed', background: '#f5f3ff' }}>
                <Cpu size={26} />
              </div>
              <h3 className="co-card-title">Inteligência Artificial Integrada</h3>
              <p className="co-card-desc">
                Implementamos agentes inteligentes treinados especificamente no seu método para atendimento, qualificação, vendas ou auxílio prático dos seus alunos dentro do app.
              </p>
            </div>

            <div className="co-card" data-testid="co-benefit-scale">
              <div className="co-card-icon" style={{ color: '#059669', background: '#ecfdf5' }}>
                <ShieldCheck size={26} />
              </div>
              <h3 className="co-card-title">Segurança & Escalabilidade</h3>
              <p className="co-card-desc">
                Servidores na nuvem, banco de dados protegido, backups diários e tolerância a picos de tráfego em lançamentos de grande porte com quedas minimizadas.
              </p>
            </div>

            <div className="co-card" data-testid="co-benefit-speed">
              <div className="co-card-icon" style={{ color: '#0284c7', background: '#f0f9ff' }}>
                <Rocket size={26} />
              </div>
              <h3 className="co-card-title">Velocidade de Execução</h3>
              <p className="co-card-desc">
                Transforme ideias em produtos ativos e funcionais no mercado em semanas, mantendo sua empresa sempre à frente da concorrência com lançamentos inovadores.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Seção: O Que Assumimos no Seu Projeto + Ferramentas Inclusas */}
      <section id="entregas" style={{ padding: '80px 0', background: '#f8fafc' }}>
        <div className="container">
          <div style={{ textAlign: 'center', maxWidth: '820px', margin: '0 auto 40px' }}>
            <h2 style={{ fontSize: '2.2rem', fontWeight: 800, color: '#111827', marginBottom: '14px' }}>
              Ecossistema Completo de Ferramentas Já Inclusas
            </h2>
            <p style={{ fontSize: '1.08rem', color: '#4b5563', lineHeight: '1.6' }}>
              Para vender e escalar seu infoproduto hoje, você precisaria assinar dezenas de plataformas caras. 
              Na nossa parceria, você <strong>não precisa contratar cada uma dessas ferramentas por fora</strong>. Nós fornecemos um ecossistema proprietário robusto para toda a sua operação:
            </p>
          </div>

          {/* Banner de Economia Real */}
          <div 
            style={{
              background: 'linear-gradient(135deg, #eef2ff 0%, #e0e7ff 100%)',
              border: '1px solid #c7d2fe',
              borderRadius: '20px',
              padding: '24px 30px',
              maxWidth: '820px',
              margin: '0 auto 46px',
              display: 'flex',
              alignItems: 'center',
              gap: '20px',
              boxShadow: '0 8px 24px rgba(79, 70, 229, 0.08)'
            }}
            data-testid="co-savings-banner"
          >
            <div style={{
              width: '56px',
              height: '56px',
              borderRadius: '16px',
              background: '#4f46e5',
              color: '#ffffff',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              flexShrink: 0
            }}>
              <TrendingUp size={28} />
            </div>
            <div>
              <h4 style={{ margin: '0 0 6px', fontSize: '1.2rem', color: '#1e1b4b', fontWeight: 800 }}>
                Economize de R$ 2.000 a R$ 5.000 por mês só em ferramentas
              </h4>
              <p style={{ margin: 0, fontSize: '0.94rem', color: '#4338ca', lineHeight: '1.5' }}>
                Só de iniciar a parceria técnica, o custo de múltiplos planos de ManyChat, DevZap, plataformas de webinar e hosting é eliminado, fazendo a parceria se pagar logo de início.
              </p>
            </div>
          </div>

          <div className="co-cards-grid">
            {/* ZapJords */}
            <div className="co-card" data-testid="tool-zapjords">
              <div className="co-card-icon" style={{ color: '#059669', background: '#ecfdf5' }}>
                <Send size={24} />
              </div>
              <h4 style={{ margin: '0 0 10px', fontSize: '1.15rem', color: '#111827' }}>ZapJords (Disparo Oficial)</h4>
              <p style={{ margin: 0, color: '#4b5563', fontSize: '0.92rem', lineHeight: '1.55' }}>
                Disparos em massa na API Oficial com o mesmo intuito de plataformas como o <strong>ManyChat</strong>, com estabilidade em nuvem e sem mensalidades abusivas por volume de contatos.
              </p>
            </div>

            {/* AgentFlow */}
            <div className="co-card" data-testid="tool-agentflow">
              <div className="co-card-icon" style={{ color: '#7c3aed', background: '#f5f3ff' }}>
                <Bot size={24} />
              </div>
              <h4 style={{ margin: '0 0 10px', fontSize: '1.15rem', color: '#111827' }}>AgentFlow (Agentes de IA)</h4>
              <p style={{ margin: 0, color: '#4b5563', fontSize: '0.92rem', lineHeight: '1.55' }}>
                Nossa ferramenta de integração de agentes inteligentes no WhatsApp. Qualifica leads, responde dúvidas profundas e vende 24 horas por dia integrado à API Oficial.
              </p>
            </div>

            {/* ZapGroup */}
            <div className="co-card" data-testid="tool-zapgroup">
              <div className="co-card-icon" style={{ color: '#0284c7', background: '#f0f9ff' }}>
                <Users size={24} />
              </div>
              <h4 style={{ margin: '0 0 10px', fontSize: '1.15rem', color: '#111827' }}>ZapGroup (Gestão de Grupos)</h4>
              <p style={{ margin: 0, color: '#4b5563', fontSize: '0.92rem', lineHeight: '1.55' }}>
                Gerenciador completo de grupos de WhatsApp para lançamentos e comunidades. Você <strong>nem precisa contratar o DevZap</strong> para automatizar entradas, redirecionamentos e mensagens.
              </p>
            </div>

            {/* Vtubr & Hotwebinar Similares */}
            <div className="co-card" data-testid="tool-webinars-video">
              <div className="co-card-icon" style={{ color: '#d97706', background: '#fffbeb' }}>
                <Video size={24} />
              </div>
              <h4 style={{ margin: '0 0 10px', fontSize: '1.15rem', color: '#111827' }}>Soluções Tipo Vtubr & Hotwebinar</h4>
              <p style={{ margin: 0, color: '#4b5563', fontSize: '0.92rem', lineHeight: '1.55' }}>
                Estamos desenvolvendo soluções próprias similares ao <strong>Vtubr</strong> e <strong>Hotwebinar</strong> para transmissões ao vivo simuladas, vídeos de alta retenção e funis perpétuos de alta conversão.
              </p>
            </div>

            {/* Aplicativos Customizados */}
            <div className="co-card" data-testid="tool-custom-apps">
              <div className="co-card-icon" style={{ color: '#4f46e5', background: '#eef2ff' }}>
                <Layers size={24} />
              </div>
              <h4 style={{ margin: '0 0 10px', fontSize: '1.15rem', color: '#111827' }}>Aplicativos Sob Medida</h4>
              <p style={{ margin: 0, color: '#4b5563', fontSize: '0.92rem', lineHeight: '1.55' }}>
                Plataformas Web & Mobile gamificadas, calculadoras do nicho, diários de rotina e sistemas exclusivos com IA integrada para aumentar o LTV dos seus clientes.
              </p>
            </div>

            {/* Integração de Checkout & Webhooks */}
            <div className="co-card" data-testid="tool-checkouts">
              <div className="co-card-icon" style={{ color: '#059669', background: '#ecfdf5' }}>
                <ShieldCheck size={24} />
              </div>
              <h4 style={{ margin: '0 0 10px', fontSize: '1.15rem', color: '#111827' }}>Integrações com Checkouts</h4>
              <p style={{ margin: 0, color: '#4b5563', fontSize: '0.92rem', lineHeight: '1.55' }}>
                Conexão transparente com Kiwify, Hotmart, Eduzz e gateways de pagamento para liberação e revogação imediata de acessos e disparos em tempo real via Webhooks.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Demonstração Real da Ferramenta ZapJords Por Dentro */}
      <ZapJordsShowcase />

      {/* Quem está por trás */}
      <div id="sobre">
        <About />
      </div>

      {/* FAQ */}
      <section id="faq" style={{ padding: '70px 0', background: '#fdfbf7' }}>
        <div className="container" style={{ maxWidth: '800px' }}>
          <div style={{ textAlign: 'center', marginBottom: '40px' }}>
            <h2 style={{ fontSize: '2.2rem', fontWeight: 800, color: '#111827', marginBottom: '12px' }}>
              Perguntas Frequentes sobre Co-Produção
            </h2>
            <p style={{ color: '#4b5563', fontSize: '1.05rem' }}>
              Entenda como estruturamos parcerias estratégicas e duradouras.
            </p>
          </div>

          <div className="faq-list">
            {faqItems.map((item, index) => (
              <div
                key={index}
                className={`faq-item ${activeFaqIndex === index ? 'active' : ''}`}
                data-testid={`co-faq-item-${index}`}
              >
                <button
                  className="faq-header"
                  onClick={() => toggleFaq(index)}
                  data-testid={`co-faq-btn-${index}`}
                >
                  <div className="faq-header-inner">
                    <HelpCircle size={20} style={{ color: activeFaqIndex === index ? '#4f46e5' : 'var(--text-secondary)', flexShrink: 0 }} />
                    <span>{item.question}</span>
                  </div>
                  <ChevronDown size={20} className="faq-icon-chevron" />
                </button>
                <div className="faq-body" data-testid={`co-faq-body-${index}`}>
                  <p className="faq-answer">{item.answer}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Final */}
      <section className="co-cta-section">
        <div className="container">
          <div className="co-cta-box">
            <h2 style={{ fontSize: '2.2rem', fontWeight: 800, margin: '0 0 16px', color: '#111827' }}>
              Tem uma audiência ou infoproduto e quer acelerar com tecnologia?
            </h2>
            <p style={{ color: '#4b5563', fontSize: '1.05rem', margin: '0 auto 30px', maxWidth: '620px', lineHeight: '1.6' }}>
              Entre em contato direto comigo pelo WhatsApp para avaliarmos a viabilidade de uma co-produção tecnológica para o seu negócio.
            </p>
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-co-primary"
              style={{ fontSize: '1.05rem', padding: '16px 36px' }}
              onClick={() => trackClick('co_bottom_cta')}
            >
              <MessageCircle size={22} />
              <span>Conversar com Aryaraj no WhatsApp</span>
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
            Quer um parceiro de <strong>Tecnologia</strong> para seu projeto? Fale comigo 🤝
          </>
        }
      />
    </div>
  );
};

export default CoproducaoPage;
