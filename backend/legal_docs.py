def get_html_layout(title: str, content_html: str) -> str:
    """
    Retorna o esqueleto HTML estruturado com uma identidade visual premium (tema escuro),
    incluindo fontes do Google Fonts (Outfit e Inter), gradientes de fundo,
    efeito de glassmorphism e botão para retornar à página principal da Landing Page.
    """
    return f"""<!DOCTYPE html>
<html lang="pt-BR">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>{title} - Aryaraj Automações</title>
    <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&family=Outfit:wght@400;500;600;700;800&display=swap" rel="stylesheet">
    <style>
        :root {{
            --bg-primary: #030712;
            --bg-secondary: #0b0f19;
            --bg-card: rgba(17, 24, 39, 0.7);
            --text-primary: #f3f4f6;
            --text-secondary: #9ca3af;
            --color-cyan: #06b6d4;
            --color-violet: #8b5cf6;
            --border-color: rgba(255, 255, 255, 0.08);
            --grad-primary: linear-gradient(135deg, var(--color-cyan) 0%, var(--color-violet) 100%);
            --font-sans: 'Inter', system-ui, -apple-system, sans-serif;
            --font-title: 'Outfit', sans-serif;
        }}
        * {{
            box-sizing: border-box;
            margin: 0;
            padding: 0;
        }}
        body {{
            background-color: var(--bg-primary);
            color: var(--text-primary);
            font-family: var(--font-sans);
            min-height: 100vh;
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            padding: 40px 20px;
            position: relative;
            overflow-x: hidden;
        }}
        /* Background Glows */
        .glow {{
            position: absolute;
            width: 400px;
            height: 400px;
            border-radius: 50%;
            filter: blur(120px);
            z-index: -1;
            pointer-events: none;
            opacity: 0.15;
        }}
        .glow-purple {{
            top: -100px;
            left: -100px;
            background: var(--color-violet);
        }}
        .glow-cyan {{
            bottom: -100px;
            right: -100px;
            background: var(--color-cyan);
        }}
        .container {{
            width: 100%;
            max-width: 800px;
            background: var(--bg-card);
            backdrop-filter: blur(16px);
            -webkit-backdrop-filter: blur(16px);
            border: 1px solid var(--border-color);
            border-radius: 24px;
            padding: 40px;
            box-shadow: 0 20px 40px rgba(0, 0, 0, 0.5);
        }}
        h1 {{
            font-family: var(--font-title);
            font-size: 2.25rem;
            font-weight: 800;
            margin-bottom: 24px;
            background: var(--grad-primary);
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
            background-clip: text;
        }}
        h2, h3 {{
            font-family: var(--font-title);
            font-size: 1.35rem;
            font-weight: 700;
            margin-top: 28px;
            margin-bottom: 12px;
            color: var(--text-primary);
        }}
        p {{
            line-height: 1.7;
            color: var(--text-secondary);
            margin-bottom: 16px;
            font-size: 1rem;
        }}
        ul {{
            margin-left: 20px;
            margin-bottom: 20px;
            color: var(--text-secondary);
        }}
        li {{
            margin-bottom: 8px;
            line-height: 1.6;
        }}
        .btn-back {{
            display: inline-flex;
            align-items: center;
            padding: 12px 24px;
            border-radius: 9999px;
            background: rgba(255, 255, 255, 0.03);
            border: 1px solid var(--border-color);
            color: var(--text-primary);
            font-weight: 600;
            text-decoration: none;
            margin-bottom: 30px;
            transition: all 0.3s ease;
            gap: 8px;
        }}
        .btn-back:hover {{
            background: rgba(255, 255, 255, 0.08);
            border-color: rgba(255, 255, 255, 0.2);
            transform: translateY(-2px);
        }}
        .footer-brand {{
            margin-top: 40px;
            text-align: center;
            font-size: 0.85rem;
            color: var(--text-secondary);
            border-top: 1px solid var(--border-color);
            padding-top: 20px;
        }}
    </style>
</head>
<body>
    <div class="glow glow-purple"></div>
    <div class="glow glow-cyan"></div>
    
    <a href="/" class="btn-back">
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="19" y1="12" x2="5" y2="12"></line><polyline points="12 19 5 12 12 5"></polyline></svg>
        Voltar para a Home
    </a>

    <div class="container">
        {content_html}
        
        <div class="footer-brand" style="line-height: 1.6;">
            <div style="font-size: 0.8rem; margin-bottom: 8px; color: var(--text-secondary);">
                60.204.548 ARYARAJ ALVES FERNANDES - CNPJ 60.204.548/0001-85
            </div>
            <div>
                &copy; 2026 Aryaraj Automações. Todos os direitos reservados.
            </div>
        </div>
    </div>
</body>
</html>
"""

def get_privacy_policy_html() -> str:
    """
    Formata e retorna o texto completo da Política de Privacidade do 'Api Oficial Aryaraj'
    envolto no layout HTML premium padrão.
    """
    content = """
    <h1>Política de Privacidade</h1>
    <p>A sua privacidade é importante para nós. É política do Api Oficial Aryaraj respeitar a sua privacidade em relação a qualquer informação sua que possamos coletar no site Api Oficial Aryaraj, e outros sites que possuímos e operamos.</p>
    <p>Solicitamos informações pessoais apenas quando realmente precisamos delas para lhe fornecer um serviço. Fazemo-lo por meios justos e legais, com o seu conhecimento e consentimento. Também informamos por que estamos coletando e como será usado.</p>
    <p>Apenas retemos as informações coletadas pelo tempo necessário para fornecer o serviço solicitado. Quando armazenamos dados, protegemos dentro de meios comercialmente aceitáveis para evitar perdas e roubos, bem como acesso, divulgação, cópia, uso ou modificação não autorizados.</p>
    <p>Não compartilhamos informações de identificação pessoal publicamente ou com terceiros, exceto quando exigido por lei.</p>
    <p>O nosso site pode ter links para sites externos que não são operados por nós. Esteja ciente de que não temos controle sobre o conteúdo e práticas desses sites e não podemos aceitar responsabilidade por suas respectivas políticas de privacidade.</p>
    <p>Você é livre para recusar a nossa solicitação de informações pessoais, entendendo que talvez não possamos fornecer alguns dos serviços desejados.</p>
    <p>O uso continuado de nosso site será considerado como aceitação de nossas práticas em torno de privacidade e informações pessoais. Se você tiver alguma dúvida sobre como lidamos com dados do usuário e informações pessoais, entre em contacto connosco.</p>
    <p>O serviço Google AdSense que usamos para veicular publicidade usa um cookie DoubleClick para veicular anúncios mais relevantes em toda a Web e limitar o número de vezes que um determinado anúncio é exibido para você.</p>
    <p>Para mais informações sobre o Google AdSense, consulte as FAQs oficiais sobre privacidade do Google AdSense.</p>
    <p>Utilizamos anúncios para compensar os custos de funcionamento deste site e fornecer financiamento para futuros desenvolvimentos. Os cookies de publicidade comportamental usados por este site foram projetados para garantir que você forneça os anúncios mais relevantes sempre que possível, rastreando anonimamente seus interesses e apresentando coisas semelhantes que possam ser do seu interesse.</p>
    <p>Vários parceiros anunciam em nosso nome e os cookies de rastreamento de afiliados simplesmente nos permitem ver se nossos clientes acessaram o site através de um dos sites de nossos parceiros, para que possamos creditá-los adequadamente e, quando aplicável, permitir que nossos parceiros afiliados ofereçam qualquer promoção que pode fornecê-lo para fazer uma compra.</p>

    <h2>Compromisso do Usuário</h2>
    <p>O usuário se compromete a fazer uso adequado dos conteúdos e da informação que o Api Oficial Aryaraj oferece no site e com caráter enunciativo, mas não limitativo:</p>
    <ul>
        <li><strong>A)</strong> Não se envolver em atividades que sejam ilegais ou contrárias à boa fé a à ordem pública;</li>
        <li><strong>B)</strong> Não difundir propaganda ou conteúdo de natureza racista, xenofóbica, jogos de sorte ou azar, qualquer tipo de pornografia ilegal, de apologia ao terrorismo ou contra os direitos humanos;</li>
        <li><strong>C)</strong> Não causar danos aos sistemas físicos (hardwares) e lógicos (softwares) do Api Oficial Aryaraj, de seus fornecedores ou terceiros, para introduzir ou disseminar vírus informáticos ou quaisquer outros sistemas de hardware ou software que sejam capazes de causar danos anteriormente mencionados.</li>
    </ul>

    <h2>Mais informações</h2>
    <p>Esperemos que esteja esclarecido e, como mencionado anteriormente, se houver algo que você não tem certeza se precisa ou não, geralmente é mais seguro deixar os cookies ativados, caso interaja com um dos recursos que você usa em nosso site.</p>
    <p>Esta política é efetiva a partir de <strong>16 June 2026 20:47</strong>.</p>
    """
    return get_html_layout("Política de Privacidade", content)

def get_termos_uso_html() -> str:
    """
    Formata e retorna o texto completo dos Termos de Serviço do 'Api Oficial Aryaraj'
    envolto no layout HTML premium padrão.
    """
    content = """
    <h1>Termos de Serviço</h1>
    <h2>1. Termos</h2>
    <p>Ao acessar ao site Api Oficial Aryaraj, concorda em cumprir estes termos de serviço, todas as leis e regulamentos aplicáveis e concorda que é responsável pelo cumprimento de todas as leis locais aplicáveis. Se você não concordar com algum desses termos, está proibido de usar ou acessar este site. Os materiais contidos neste site são protegidos pelas leis de direitos autorais e marcas comerciais aplicáveis.</p>

    <h2>2. Uso de Licença</h2>
    <p>É concedida permissão para baixar temporariamente uma cópia dos materiais (informações ou software) no site Api Oficial Aryaraj, apenas para visualização transitória pessoal e não comercial. Esta é a concessão de uma licença, não uma transferência de título e, sob esta licença, você não pode:</p>
    <ul>
        <li>modificar ou copiar os materiais;</li>
        <li>usar os materiais para qualquer finalidade comercial ou para exibição pública (comercial ou não comercial);</li>
        <li>tentar descompilar ou fazer engenharia reversa de qualquer software contido no site Api Oficial Aryaraj;</li>
        <li>remover quaisquer direitos autorais ou outras notações de propriedade dos materiais; ou</li>
        <li>transferir os materiais para outra pessoa ou 'espelhe' os materiais em qualquer outro servidor.</li>
    </ul>
    <p>Esta licença será automaticamente rescindida se você violar alguma dessas restrições e poderá ser rescindida por Api Oficial Aryaraj a qualquer momento. Ao encerrar a visualização desses materiais ou após o término desta licença, você deve apagar todos os materiais baixados em sua posse, seja em formato eletrónico ou impresso.</p>

    <h2>3. Isenção de responsabilidade</h2>
    <p>Os materiais no site da Api Oficial Aryaraj são fornecidos 'como estão'. Api Oficial Aryaraj não oferece garantias, expressas ou implícitas, e, por este meio, isenta e nega todas as outras garantias, incluindo, sem limitação, garantias implícitas ou condições de comercialização, adequação a um fim específico ou não violação de propriedade intelectual ou outra violação de direitos.</p>
    <p>Além disso, o Api Oficial Aryaraj não garante ou faz qualquer representação relativa à precisão, aos resultados prováveis ou à confiabilidade do uso dos materiais em seu site ou de outra forma relacionado a esses materiais ou em sites vinculados a este site.</p>

    <h2>4. Limitações</h2>
    <p>Em nenhum caso o Api Oficial Aryaraj ou seus fornecedores serão responsáveis por quaisquer danos (incluindo, sem limitação, danos por perda de dados ou lucro ou devido a interrupção dos negócios) decorrentes do uso ou da incapacidade de usar os materiais em Api Oficial Aryaraj, mesmo que Api Oficial Aryaraj ou um representante autorizado da Api Oficial Aryaraj tenha sido notificado oralmente ou por escrito da possibilidade de tais danos. Como algumas jurisdições não permitem limitações em garantias implícitas, ou limitações de responsabilidade por danos conseqüentes ou incidentais, essas limitações podem não se aplicar a você.</p>

    <h2>5. Precisão dos materiais</h2>
    <p>Os materiais exibidos no site da Api Oficial Aryaraj podem incluir erros técnicos, tipográficos ou fotográficos. Api Oficial Aryaraj não garante que qualquer material em seu site seja preciso, completo ou atual. Api Oficial Aryaraj pode fazer alterações nos materiais contidos em seu site a qualquer momento, sem aviso prévio. No entanto, Api Oficial Aryaraj não se compromete a atualizar os materiais.</p>

    <h2>6. Links</h2>
    <p>O Api Oficial Aryaraj não analisou todos os sites vinculados ao seu site e não é responsável pelo conteúdo de nenhum site vinculado. A inclusão de qualquer link não implica endosso por Api Oficial Aryaraj do site. O uso de qualquer site vinculado é por conta e risco do usuário.</p>

    <h2>Modificações</h2>
    <p>O Api Oficial Aryaraj pode revisar estes termos de serviço do site a qualquer momento, sem aviso prévio. Ao usar este site, você concorda em ficar vinculado à versão atual desses termos de serviço.</p>

    <h2>Lei aplicável</h2>
    <p>Estes termos e condições são regidos e interpretados de acordo com as leis do Api Oficial Aryaraj e você se submete irrevogavelmente à jurisdição exclusiva dos tribunais naquele estado ou localidade.</p>
    """
    return get_html_layout("Termos de Serviço", content)
