import React, { useState } from 'react';
import '../estilos/IaWhatsAppPage.css';
import '../estilos/Faq.css';
import { 
  Bot, 
  MessageSquareCode, 
  Users, 
  Repeat, 
  Filter, 
  ArrowRight, 
  CheckCircle2, 
  Building2, 
  Package, 
  ShieldCheck,
  MessageCircle,
  HelpCircle,
  Clock,
  ChevronDown,
  ArrowLeft
} from 'lucide-react';
import { WHATSAPP_LINK } from '../config';
import { trackClick } from '../utils/tracking';
import FloatingWhatsApp from '../components/FloatingWhatsApp';
import About from '../components/About';
import Footer from '../components/Footer';

interface FaqItem {
  question: string;
  answer: React.ReactNode;
}

const IaWhatsAppPage: React.FC = () => {
  const whatsappUrl = `${WHATSAPP_LINK}&text=Olá%20Aryaraj!%20Quero%20implementar%20uma%20IA%20no%20meu%20WhatsApp.`;

  // Todos iniciam fechados (null) conforme solicitado
  const [activeFaqIndex, setActiveFaqIndex] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setActiveFaqIndex(activeFaqIndex === index ? null : index);
  };

  const faqItems: FaqItem[] = [
    {
      question: "A IA pode alucinar ou inventar informações se não souber a resposta?",
      answer: (
        <>
          Não. Nós configuramos travas rígidas de segurança para que o agente responda <strong>apenas com base no material homologado</strong> do seu negócio. Quando a IA não tem certeza de alguma informação, ela possui uma ferramenta programada para ser transparente com o lead, afirmando educadamente que não possui aquele dado no momento e que irá consultar a equipe interna. Ao mesmo tempo, essa dúvida é enviada para um <strong>Painel de Perguntas Não Respondidas</strong>, permitindo que você visualize exatamente as lacunas que a IA ainda não domina e alimente novos treinamentos para deixá-la cada vez mais afiada.
        </>
      )
    },
    {
      question: "Por que a estrutura é focada 100% na API Oficial do WhatsApp?",
      answer: (
        <>
          Nossa estrutura foi desenvolvida <strong>100% com a API Oficial da Meta (Cloud API)</strong> porque o nosso foco principal é <strong>escala real para os projetos que fazemos parte</strong>. Projetos de alto impacto recebem dezenas ou centenas de novos leads todos os dias através de anúncios e tráfego pago. Tentar rodar alto volume em conexões não oficiais (QR Code) gera quedas frequentes, atrasos nas respostas e banimentos de chips — fazendo você perder vendas no meio de um lançamento ou campanha. Com a API Oficial, o sistema suporta picos massivos de mensagens simultâneas com estabilidade absoluta, alta taxa de entrega e o <strong>mínimo risco de perder o seu número</strong>, respeitando as boas práticas e diretrizes da Meta.
        </>
      )
    },
    {
      question: "A IA consegue entender áudios que os leads enviam no WhatsApp?",
      answer: (
        <>
          Sim! Sabemos que muitos clientes preferem enviar áudios em vez de digitar. O nosso sistema transcreve instantaneamente as mensagens de voz recebidas, interpreta todo o contexto e a dúvida do lead, permitindo que a IA compreenda exatamente o que ele precisa e responda com agilidade.
        </>
      )
    },
    {
      question: "Quanto custa manter a IA rodando depois de implementada?",
      answer: (
        <>
          O custo operacional é extremamente baixo. Nós utilizamos a tecnologia do <strong>GPT-5 mini</strong>, um dos modelos mais avançados, rápidos e econômicos do mercado. O custo médio por atendimento completo gira em torno de frações de centavos por lead, e o retorno em vendas recuperadas e conversões cobre o custo operacional com extrema folga.
        </>
      )
    },
    {
      question: "Como funciona a integração com plataformas de vendas (Kiwify, Hotmart, Eduzz, etc.)?",
      answer: (
        <>
          Não é a IA que responde de primeira nessas situações. Nós conectamos a sua plataforma de vendas através de <strong>Webhooks</strong> diretamente à nossa <strong>plataforma de automação da API Oficial</strong>. Assim que o cliente gera um Pix, abandona o carrinho, tem o cartão recusado ou a compra aprovada, a plataforma de automação recebe esses dados imediatamente e dispara um template oficial específico para notificar ou recuperar esse cliente no momento certo.
        </>
      )
    },
    {
      question: "Minha equipe humana consegue ver as conversas e intervir a qualquer momento?",
      answer: (
        <>
          Sim, com total controle. Sua equipe tem acesso a um painel em tempo real para acompanhar todos os atendimentos. Se em qualquer momento um atendente humano desejar intervir ou assumir o chat, ele pode pausar a atuação do agente e continuar a conversa manualmente.
        </>
      )
    },
    {
      question: "Quanto tempo demora para a implementação ficar pronta e rodando?",
      answer: (
        <>
          O prazo de entrega é de <strong>em até 21 dias úteis</strong>. Esse prazo pode ser bem mais rápido na prática: tudo vai depender de quão rápido você consegue nos fornecer as informações, materiais, regras do produto e acessos necessários para realizarmos o treinamento e a homologação.
        </>
      )
    },
    {
      question: "Qual número ou chip devo usar para a implementação?",
      answer: (
        <>
          Para essa estrutura, utilizamos um <strong>número totalmente novo</strong>. É fundamental que esse chip <strong>não esteja conectado em nenhum aplicativo de WhatsApp (padrão ou Business)</strong>, pois faremos a conexão e o registro diretamente na API Oficial do WhatsApp da Meta.
        </>
      )
    }
  ];

  React.useEffect(() => {
    document.title = 'Agente IA';
  }, []);

  const handleBackToHome = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    trackClick('ia_nav_back_home');
    window.history.pushState(null, '', '/');
    window.dispatchEvent(new PopStateEvent('popstate'));
  };

  return (
    <div className="ia-page" data-testid="ia-whatsapp-page">
      {/* Navbar Minimalista */}
      <header className="ia-navbar">
        <div className="container ia-nav-container">
          <div className="ia-nav-left-group">
            <a
              href="/"
              onClick={handleBackToHome}
              className="btn-ia-back"
              data-testid="btn-ia-back-home"
              title="Voltar para a página inicial"
            >
              <ArrowLeft size={18} />
              <span className="btn-ia-back-text">Início</span>
            </a>

            <a href="/" className="ia-brand" onClick={() => trackClick('ia_nav_logo')}>
              <div className="ia-brand-icon-box">
                <Bot size={22} />
              </div>
              <div className="ia-brand-text">
                <h3>Aryaraj AI</h3>
                <span>Agentes de WhatsApp</span>
              </div>
            </a>
          </div>

          <nav className="ia-nav-links">
            <a href="#como-funciona" className="ia-nav-link">Como Funciona</a>
            <a href="#recursos" className="ia-nav-link">Recursos</a>
            <a href="#onboarding" className="ia-nav-link">Implementação</a>
            <a href="#sobre" className="ia-nav-link">Sobre</a>
            <a href="#faq" className="ia-nav-link">Dúvidas</a>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="ia-hero-section">
        <div className="container ia-hero-grid">
          <div>
            <div className="ia-badge">
              <Bot size={16} />
              <span>Agentes com Inteligência Artificial Generativa</span>
            </div>
            <h1 className="ia-hero-title">
              Atenda, Qualifique e Venda no WhatsApp com <span className="text-gradient-purple">IA Treinada no seu Produto</span>
            </h1>
            <p className="ia-hero-desc">
              Chega de respostas robóticas que espantam seus leads. Criamos e treinamos um agente inteligente que conhece a fundo as regras do seu negócio, tira dúvidas instantâneas, recupera quem não comprou e sabe a hora exata de chamar um atendente humano.
            </p>

            <div className="ia-hero-ctas">
              <a
                href="#onboarding"
                className="btn-ia-primary"
                onClick={() => trackClick('ia_hero_cta')}
                data-testid="ia-hero-cta"
              >
                <MessageSquareCode size={20} />
                <span>Quero Minha IA no WhatsApp</span>
              </a>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', color: '#44403c', fontSize: '0.92rem' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <CheckCircle2 size={18} style={{ color: '#059669' }} />
                <span>Infraestrutura 100% na API Oficial da Meta: aguenta escala massiva de leads sem bloqueios</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <CheckCircle2 size={18} style={{ color: '#059669' }} />
                <span>Treinamento profundo com base no catálogo e conteúdo do seu infoproduto</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <CheckCircle2 size={18} style={{ color: '#059669' }} />
                <span>Painel de Dúvidas: veja o que a IA ainda não sabe para treiná-la continuamente</span>
              </div>
            </div>
          </div>

          {/* Simulador de Chat com IA */}
          <div>
            <div className="ia-phone-card" id="ia-chat-simulator">
              <div className="ia-phone-header">
                <div className="ia-phone-avatar">
                  <Bot size={20} />
                </div>
                <div>
                  <h4 style={{ margin: 0, color: '#ffffff', fontSize: '0.92rem' }}>Agente Especialista</h4>
                  <span style={{ fontSize: '0.7rem', color: '#a7f3d0' }}>Inteligência Artificial Ativa</span>
                </div>
              </div>

              <div className="ia-phone-chat-body">
                <div className="ia-bubble ia-bubble-lead">
                  <p>Oi, esse curso ensina para quem tá começando do zero ou precisa já ter experiência?</p>
                  <span className="ia-bubble-time">14:02</span>
                </div>

                <div className="ia-bubble ia-bubble-agent">
                  <p>Olá! Ele foi feito exatamente para quem está começando do absoluto zero! O Módulo 1 te guia no passo a passo básico. Qual é o seu objetivo principal hoje?</p>
                  <span className="ia-bubble-time">14:02</span>
                </div>

                {/* Qualificação do lead */}
                <div className="ia-bubble ia-bubble-lead">
                  <p>Trabalho com CLT e quero fazer uma renda extra de R$ 3.000 no digital.</p>
                  <span className="ia-bubble-time">14:03</span>
                </div>

                <div className="ia-system-badge">
                  🧠 IA: Lead Qualificado • Perfil: Renda Extra / CLT
                </div>

                <div className="ia-bubble ia-bubble-agent">
                  <p>Perfeito! Mais de 60% dos nossos alunos começaram conciliando com a CLT. Você prefere pagamento à vista com desconto ou parcelar no cartão?</p>
                  <span className="ia-bubble-time">14:03</span>
                </div>

                {/* Pergunta fora do escopo ou sem dado cadastrado */}
                <div className="ia-bubble ia-bubble-lead">
                  <p>Vocês aceitam pagamento via fatura corporativa com emissão de nota com retenção especial?</p>
                  <span className="ia-bubble-time">14:04</span>
                </div>

                <div className="ia-system-badge" style={{ background: '#f5f3ff', borderColor: '#ddd6fe', color: '#6d28d9' }}>
                  📊 Dúvida enviada ao Painel para Treinamento
                </div>

                <div className="ia-bubble ia-bubble-agent">
                  <p>Não tenho essa confirmação exata agora no meu material, mas vou consultar nossa equipe imediatamente para te responder com 100% de precisão. Gostaria de falar com um especialista humano agora mesmo?</p>
                  <span className="ia-bubble-time">14:04</span>
                </div>

                <div className="ia-bubble ia-bubble-lead">
                  <p>Sim, por favor! Quero falar com alguém da equipe.</p>
                  <span className="ia-bubble-time">14:05</span>
                </div>

                <div className="ia-system-badge" style={{ background: '#fef3c7', borderColor: '#fde68a', color: '#92400e' }}>
                  🤝 Transbordo Humano Acionado com Sucesso
                </div>

                <div className="ia-bubble ia-bubble-agent">
                  <p>Com certeza! Já estou transferindo nossa conversa agora com todo o histórico para nosso atendente humano. Aguarde só um instante! 👋</p>
                  <span className="ia-bubble-time">14:05</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Seção dos Pilares de IA */}
      <section className="ia-features-section" id="recursos">
        <div className="container">
          <div className="ia-section-header">
            <h2 className="ia-section-title">O que o Agente Inteligente Faz na Prática</h2>
            <p className="ia-section-subtitle">
              Muito além de um chatbot padrão de botões: uma IA com raciocínio contextual projetada para converter dúvidas em vendas.
            </p>
          </div>

          <div className="ia-cards-grid">
            {/* Pilar 1: Treinamento Personalizado */}
            <div className="ia-card" data-testid="card-treinamento">
              <div className="ia-card-icon">
                <Package size={26} />
              </div>
              <h3 className="ia-card-title">Treinamento Especializado</h3>
              <p className="ia-card-desc">
                Alimentamos o agente com todo o material do seu produto: página de vendas, vídeos, FAQs, módulos e objeções comuns para ele responder qualquer pergunta com precisão cirúrgica.
              </p>
            </div>

            {/* Pilar 2: Transbordo Humano Inteligente */}
            <div className="ia-card" data-testid="card-transbordo">
              <div className="ia-card-icon" style={{ color: '#059669', background: '#ecfdf5' }}>
                <Users size={26} />
              </div>
              <h3 className="ia-card-title">Transbordo Humano Imediato</h3>
              <p className="ia-card-desc">
                O agente detecta quando o lead não deseja falar com uma IA ou faz perguntas fora do escopo, transferindo a conversa sem atrito para sua equipe humana no mesmo número.
              </p>
            </div>

            {/* Pilar 3: Follow-Up Automático */}
            <div className="ia-card" data-testid="card-followup">
              <div className="ia-card-icon" style={{ color: '#d97706', background: '#fef3c7' }}>
                <Repeat size={26} />
              </div>
              <h3 className="ia-card-title">Sistema de Follow-Up Ativo</h3>
              <p className="ia-card-desc">
                O lead demonstrou interesse mas não concluiu a compra? O sistema agenda e dispara mensagens persuasivas e personalizadas de recuperação para reengajar o cliente no momento certo.
              </p>
            </div>

            {/* Pilar 4: Qualificação de Leads */}
            <div className="ia-card" data-testid="card-qualificacao">
              <div className="ia-card-icon" style={{ color: '#0284c7', background: '#f0f9ff' }}>
                <Filter size={26} />
              </div>
              <h3 className="ia-card-title">Qualificação da Conversa</h3>
              <p className="ia-card-desc">
                Durante a conversa natural, a IA identifica o que o usuário deseja, se possui poder aquisitivo, qual seu trabalho/ocupação e segmenta os leads mais quentes para fechar com prioridade.
              </p>
            </div>

            {/* Pilar 5: Estrutura 100% API Oficial e Escala */}
            <div className="ia-card" data-testid="card-apioficial">
              <div className="ia-card-icon" style={{ color: '#059669', background: '#ecfdf5' }}>
                <ShieldCheck size={26} />
              </div>
              <h3 className="ia-card-title">100% API Oficial da Meta</h3>
              <p className="ia-card-desc">
                Projetado para quem investe em tráfego e precisa escalar sem perder vendas. Agüenta centenas de leads chegando todo dia simultaneamente, com estabilidade máxima e o mínimo risco de bloqueio.
              </p>
            </div>

            {/* Pilar 6: Painel de Aprendizado & Perguntas Não Respondidas */}
            <div className="ia-card" data-testid="card-painel-treinamento">
              <div className="ia-card-icon" style={{ color: '#7c3aed', background: '#f5f3ff' }}>
                <HelpCircle size={26} />
              </div>
              <h3 className="ia-card-title">Painel de Aprendizado Contínuo</h3>
              <p className="ia-card-desc">
                Se a IA não souber uma informação, ela avisa com transparência que vai consultar o time. A dúvida cai direto em um painel para você ver exatamente o que faltou e treiná-la com novos dados.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Seção de Onboarding & Informações da Empresa */}
      <section className="ia-onboarding-section" id="onboarding">
        <div className="container">
          <div className="ia-section-header">
            <h2 className="ia-section-title">Como Implementamos no Seu Negócio</h2>
            <p className="ia-section-subtitle">
              Para garantir uma inteligência afiada e segura, seguimos um processo estruturado de coleta e homologação:
            </p>
          </div>

          <div className="ia-steps-grid">
            <div className="ia-step-card">
              <span className="ia-step-number">Etapa 1</span>
              <Building2 size={24} style={{ color: '#d97706', marginBottom: '12px' }} />
              <h4 style={{ margin: '0 0 8px', color: '#1f2937' }}>Mapeamento da Empresa</h4>
              <p style={{ margin: 0, fontSize: '0.9rem', color: '#6b7280', lineHeight: '1.5' }}>
                Coletamos a história da sua marca, valores, tom de voz (formal, descontraído ou consultivo) e regras de atendimento.
              </p>
            </div>

            <div className="ia-step-card">
              <span className="ia-step-number">Etapa 2</span>
              <Package size={24} style={{ color: '#7c3aed', marginBottom: '12px' }} />
              <h4 style={{ margin: '0 0 8px', color: '#1f2937' }}>Catálogo de Infoprodutos</h4>
              <p style={{ margin: 0, fontSize: '0.9rem', color: '#6b7280', lineHeight: '1.5' }}>
                Estruturamos detalhes dos produtos, preços, links de checkout, bônus, garantias e quebra das 10 principais objeções.
              </p>
            </div>

            <div className="ia-step-card">
              <span className="ia-step-number">Etapa 3</span>
              <Bot size={24} style={{ color: '#059669', marginBottom: '12px' }} />
              <h4 style={{ margin: '0 0 8px', color: '#1f2937' }}>Treinamento & Homologação</h4>
              <p style={{ margin: 0, fontSize: '0.9rem', color: '#6b7280', lineHeight: '1.5' }}>
                Realizamos testes intensivos de estresse simulando clientes difíceis para garantir que a IA responda sempre de forma impecável.
              </p>
            </div>

            <div className="ia-step-card">
              <span className="ia-step-number">Etapa 4</span>
              <Clock size={24} style={{ color: '#0284c7', marginBottom: '12px' }} />
              <h4 style={{ margin: '0 0 8px', color: '#1f2937' }}>Ativação 24/7 & Métricas</h4>
              <p style={{ margin: 0, fontSize: '0.9rem', color: '#6b7280', lineHeight: '1.5' }}>
                Colocamos o agente em produção no seu número do WhatsApp para atender, qualificar e vender no piloto automático.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Quem está por trás do seu projeto? (História de Aryaraj) */}
      <About />

      {/* FAQ Resumido */}
      <section className="section" id="faq" style={{ padding: '70px 0', background: '#fdfbf7' }}>
        <div className="container" style={{ maxWidth: '800px' }}>
          <div className="ia-section-header">
            <h2 className="ia-section-title">Perguntas Frequentes</h2>
            <p className="ia-section-subtitle">Tire suas dúvidas sobre a implementação de agentes inteligentes.</p>
          </div>

          <div className="faq-list">
            {faqItems.map((item, index) => (
              <div
                key={index}
                className={`faq-item ${activeFaqIndex === index ? 'active' : ''}`}
                data-testid={`faq-item-${index}`}
              >
                <button
                  className="faq-header"
                  onClick={() => toggleFaq(index)}
                  data-testid={`faq-btn-${index}`}
                >
                  <div className="faq-header-inner">
                    <HelpCircle size={20} style={{ color: activeFaqIndex === index ? '#7c3aed' : 'var(--text-secondary)', flexShrink: 0 }} />
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

      {/* CTA Final */}
      <section className="ia-cta-section">
        <div className="container">
          <div className="ia-cta-box">
            <h2 style={{ fontSize: '2.2rem', fontWeight: 800, margin: '0 0 16px', color: '#111827' }}>
              Pronto para transformar seu WhatsApp em uma máquina de vendas com IA?
            </h2>
            <p style={{ color: '#4b5563', fontSize: '1.05rem', margin: '0 auto 30px', maxWidth: '600px', lineHeight: '1.6' }}>
              Fale diretamente com Aryaraj para realizarmos o diagnóstico da sua empresa e planejar o treinamento do seu novo agente.
            </p>
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-ia-primary"
              style={{ fontSize: '1.05rem', padding: '16px 36px' }}
              onClick={() => trackClick('ia_bottom_cta')}
            >
              <MessageCircle size={22} />
              <span>Solicitar Diagnóstico no WhatsApp</span>
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
            Dúvidas sobre o <strong>Agente de IA</strong>? Fale diretamente comigo no WhatsApp 🤖
          </>
        }
      />
    </div>
  );
};

export default IaWhatsAppPage;
