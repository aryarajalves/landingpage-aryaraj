import React, { useEffect } from 'react';
import '../estilos/LegalPages.css';
import { ArrowLeft } from 'lucide-react';

interface TermosUsoPageProps {
  onNavigate?: (path: string) => void;
}

const TermosUsoPage: React.FC<TermosUsoPageProps> = ({ onNavigate }) => {
  useEffect(() => {
    document.title = 'Termos de Serviço - Aryaraj Automações';
    window.scrollTo(0, 0);
  }, []);

  const handleBackHome = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    if (onNavigate) {
      onNavigate('/');
    } else {
      window.history.pushState(null, '', '/');
      window.dispatchEvent(new PopStateEvent('popstate'));
    }
  };

  return (
    <div className="legal-wrapper" data-testid="termos-uso-page">
      <a href="/" onClick={handleBackHome} className="legal-btn-back" data-testid="btn-voltar-home">
        <ArrowLeft size={18} />
        <span>Voltar para a Home</span>
      </a>

      <div className="legal-card">
        <h1 className="legal-title">Termos de Serviço</h1>

        <h2 className="legal-section-title">1. Termos</h2>
        <p className="legal-paragraph">
          Ao acessar ao site Api Oficial Aryaraj, concorda em cumprir estes termos de serviço, todas as leis e regulamentos aplicáveis e concorda que é responsável pelo cumprimento de todas as leis locais aplicáveis. Se você não concordar com algum desses termos, está proibido de usar ou acessar este site. Os materiais contidos neste site são protegidos pelas leis de direitos autorais e marcas comerciais aplicáveis.
        </p>

        <h2 className="legal-section-title">2. Uso de Licença</h2>
        <p className="legal-paragraph">
          É concedida permissão para baixar temporariamente uma cópia dos materiais (informações ou software) no site Api Oficial Aryaraj, apenas para visualização transitória pessoal e não comercial. Esta é a concessão de uma licença, não uma transferência de título e, sob esta licença, você não pode:
        </p>
        <ul className="legal-list">
          <li className="legal-list-item">modificar ou copiar os materiais;</li>
          <li className="legal-list-item">usar os materiais para qualquer finalidade comercial ou para exibição pública (comercial ou não comercial);</li>
          <li className="legal-list-item">tentar descompilar ou fazer engenharia reversa de qualquer software contido no site Api Oficial Aryaraj;</li>
          <li className="legal-list-item">remover quaisquer direitos autorais ou outras notações de propriedade dos materiais; ou</li>
          <li className="legal-list-item">transferir os materiais para outra pessoa ou 'espelhe' os materiais em qualquer outro servidor.</li>
        </ul>
        <p className="legal-paragraph">
          Esta licença será automaticamente rescindida se você violar alguma dessas restrições e poderá ser rescindida por Api Oficial Aryaraj a qualquer momento. Ao encerrar a visualização desses materiais ou após o término desta licença, você deve apagar todos os materiais baixados em sua posse, seja em formato eletrónico ou impresso.
        </p>

        <h2 className="legal-section-title">3. Isenção de responsabilidade</h2>
        <p className="legal-paragraph">
          Os materiais no site da Api Oficial Aryaraj são fornecidos 'como estão'. Api Oficial Aryaraj não oferece garantias, expressas ou implícitas, e, por este meio, isenta e nega todas as outras garantias, incluindo, sem limitação, garantias implícitas ou condições de comercialização, adequação a um fim específico ou não violação de propriedade intelectual ou outra violação de direitos.
        </p>
        <p className="legal-paragraph">
          Além disso, o Api Oficial Aryaraj não garante ou faz qualquer representação relativa à precisão, aos resultados prováveis ou à confiabilidade do uso dos materiais em seu site ou de outra forma relacionado a esses materiais ou em sites vinculados a este site.
        </p>

        <h2 className="legal-section-title">4. Limitações</h2>
        <p className="legal-paragraph">
          Em nenhum caso o Api Oficial Aryaraj ou seus fornecedores serão responsáveis por quaisquer danos (incluindo, sem limitação, danos por perda de dados ou lucro ou devido a interrupção dos negócios) decorrentes do uso ou da incapacidade de usar os materiais em Api Oficial Aryaraj, mesmo que Api Oficial Aryaraj ou um representante autorizado da Api Oficial Aryaraj tenha sido notificado oralmente ou por escrito da possibilidade de tais danos. Como algumas jurisdições não permitem limitações em garantias implícitas, ou limitações de responsabilidade por danos conseqüentes ou incidentais, essas limitações podem não se aplicar a você.
        </p>

        <h2 className="legal-section-title">5. Precisão dos materiais</h2>
        <p className="legal-paragraph">
          Os materiais exibidos no site da Api Oficial Aryaraj podem incluir erros técnicos, tipográficos ou fotográficos. Api Oficial Aryaraj não garante que qualquer material em seu site seja preciso, completo ou atual. Api Oficial Aryaraj pode fazer alterações nos materiais contidos em seu site a qualquer momento, sem aviso prévio. No entanto, Api Oficial Aryaraj não se compromete a atualizar os materiais.
        </p>

        <h2 className="legal-section-title">6. Links</h2>
        <p className="legal-paragraph">
          O Api Oficial Aryaraj não analisou todos os sites vinculados ao seu site e não é responsável pelo conteúdo de nenhum site vinculado. A inclusão de qualquer link não implica endosso por Api Oficial Aryaraj do site. O uso de qualquer site vinculado é por conta e risco do usuário.
        </p>

        <h2 className="legal-section-title">Modificações</h2>
        <p className="legal-paragraph">
          O Api Oficial Aryaraj pode revisar estes termos de serviço do site a qualquer momento, sem aviso prévio. Ao usar este site, você concorda em ficar vinculado à versão atual desses termos de serviço.
        </p>

        <h2 className="legal-section-title">Lei aplicável</h2>
        <p className="legal-paragraph">
          Estes termos e condições são regidos e interpretados de acordo com as leis do Api Oficial Aryaraj e você se submete irrevogavelmente à jurisdição exclusiva dos tribunais naquele estado ou localidade.
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

export default TermosUsoPage;
