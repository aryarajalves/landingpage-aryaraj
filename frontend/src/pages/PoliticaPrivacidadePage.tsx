import React, { useEffect } from 'react';
import '../estilos/LegalPages.css';
import { ArrowLeft } from 'lucide-react';

interface PoliticaPrivacidadePageProps {
  onNavigate?: (path: string) => void;
}

const PoliticaPrivacidadePage: React.FC<PoliticaPrivacidadePageProps> = ({ onNavigate }) => {
  useEffect(() => {
    document.title = 'Política de Privacidade - Aryaraj Automações';
    window.scrollTo(0, 0);
  }, []);

  const handleBack = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    if (window.history.length > 1) {
      window.history.back();
    } else if (onNavigate) {
      onNavigate('/');
    } else {
      window.history.pushState(null, '', '/');
      window.dispatchEvent(new PopStateEvent('popstate'));
    }
  };

  return (
    <div className="legal-wrapper" data-testid="politica-privacidade-page">
      <a href="/" onClick={handleBack} className="legal-btn-back" data-testid="btn-voltar-home">
        <ArrowLeft size={18} />
        <span>Voltar</span>
      </a>

      <div className="legal-card">
        <h1 className="legal-title">Política de Privacidade</h1>

        <p className="legal-paragraph">
          A sua privacidade é importante para nós. É política do Api Oficial Aryaraj respeitar a sua privacidade em relação a qualquer informação sua que possamos coletar no site Api Oficial Aryaraj, e outros sites que possuímos e operamos.
        </p>
        <p className="legal-paragraph">
          Solicitamos informações pessoais apenas quando realmente precisamos delas para lhe fornecer um serviço. Fazemo-lo por meios justos e legais, com o seu conhecimento e consentimento. Também informamos por que estamos coletando e como será usado.
        </p>
        <p className="legal-paragraph">
          Apenas retemos as informações coletadas pelo tempo necessário para fornecer o serviço solicitado. Quando armazenamos dados, protegemos dentro de meios comercialmente aceitáveis para evitar perdas e roubos, bem como acesso, divulgação, cópia, uso ou modificação não autorizados.
        </p>
        <p className="legal-paragraph">
          Não compartilhamos informações de identificação pessoal publicamente ou com terceiros, exceto quando exigido por lei.
        </p>
        <p className="legal-paragraph">
          O nosso site pode ter links para sites externos que não são operados por nós. Esteja ciente de que não temos controle sobre o conteúdo e práticas desses sites e não podemos aceitar responsabilidade por suas respectivas políticas de privacidade.
        </p>
        <p className="legal-paragraph">
          Você é livre para recusar a nossa solicitação de informações pessoais, entendendo que talvez não possamos fornecer alguns dos serviços desejados.
        </p>
        <p className="legal-paragraph">
          O uso continuado de nosso site será considerado como aceitação de nossas práticas em torno de privacidade e informações pessoais. Se você tiver alguma dúvida sobre como lidamos com dados do usuário e informações pessoais, entre em contacto connosco.
        </p>
        <p className="legal-paragraph">
          O serviço Google AdSense que usamos para veicular publicidade usa um cookie DoubleClick para veicular anúncios mais relevantes em toda a Web e limitar o número de vezes que um determinado anúncio é exibido para você.
        </p>
        <p className="legal-paragraph">
          Para mais informações sobre o Google AdSense, consulte as FAQs oficiais sobre privacidade do Google AdSense.
        </p>
        <p className="legal-paragraph">
          Utilizamos anúncios para compensar os custos de funcionamento deste site e fornecer financiamento para futuros desenvolvimentos. Os cookies de publicidade comportamental usados por este site foram projetados para garantir que você forneça os anúncios mais relevantes sempre que possível, rastreando anonimamente seus interesses e apresentando coisas semelhantes que possam ser do seu interesse.
        </p>
        <p className="legal-paragraph">
          Vários parceiros anunciam em nosso nome e os cookies de rastreamento de afiliados simplesmente nos permitem ver se nossos clientes acessaram o site através de um dos sites de nossos parceiros, para que possamos creditá-los adequadamente e, quando aplicável, permitir que nossos parceiros afiliados ofereçam qualquer promoção que pode fornecê-lo para fazer uma compra.
        </p>

        <h2 className="legal-section-title">Compromisso do Usuário</h2>
        <p className="legal-paragraph">
          O usuário se compromete a fazer uso adequado dos conteúdos e da informação que o Api Oficial Aryaraj oferece no site e com caráter enunciativo, mas não limitativo:
        </p>
        <ul className="legal-list">
          <li className="legal-list-item">
            <strong>A)</strong> Não se envolver em atividades que sejam ilegais ou contrárias à boa fé e à ordem pública;
          </li>
          <li className="legal-list-item">
            <strong>B)</strong> Não difundir propaganda ou conteúdo de natureza racista, xenofóbica, jogos de sorte ou azar, qualquer tipo de pornografia ilegal, de apologia ao terrorismo ou contra os direitos humanos;
          </li>
          <li className="legal-list-item">
            <strong>C)</strong> Não causar danos aos sistemas físicos (hardwares) e lógicos (softwares) do Api Oficial Aryaraj, de seus fornecedores ou terceiros, para introduzir ou disseminar vírus informáticos ou quaisquer outros sistemas de hardware ou software que sejam capazes de causar danos anteriormente mencionados.
          </li>
        </ul>

        <h2 className="legal-section-title">Mais informações</h2>
        <p className="legal-paragraph">
          Esperemos que esteja esclarecido e, como mencionado anteriormente, se houver algo que você não tem certeza se precisa ou não, geralmente é mais seguro deixar os cookies ativados, caso interaja com um dos recursos que você usa em nosso site.
        </p>
        <p className="legal-paragraph">
          Esta política é efetiva a partir de <strong>16 June 2026 20:47</strong>.
        </p>

        <div className="legal-footer-brand">
          <div style={{ fontSize: '0.8rem', marginBottom: '8px' }}>
            60.204.548 ARYARAJ ALVES FERNANDES - CNPJ 60.204.548/0001-85
          </div>
          <div>
            &copy; 2026 Aryaraj Automações. Todos os direitos reservados.
          </div>
        </div>
      </div>
    </div>
  );
};

export default PoliticaPrivacidadePage;
