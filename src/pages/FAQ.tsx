import ProductPage from '@/components/ProductPage';
import faqHero from '@/assets/exchange-aurum-foundation-plataforma-trading.webp';

const FAQ = () => (
  <ProductPage
    slug="faq"
    title="▲ FAQ Aurum Foundation: 25+ Respostas Oficiais"
    description="▲ FAQ Aurum Foundation: Aurum Foundation é confiável? Como funciona o sistema? Veja 25+ respostas oficiais sobre cadastro, Zeus AI, staking, exchange e cartão cripto."
    keywords="FAQ Aurum Foundation, Aurum Foundation é confiável, como funciona o sistema Aurum, perguntas frequentes Aurum, dúvidas Aurum Foundation, suporte Aurum, cadastro Aurum Foundation, taxas Aurum Foundation, saque Aurum Foundation"
    h1="Perguntas Frequentes sobre a Aurum Foundation"
    subtitle="Respostas oficiais e diretas sobre o ecossistema Aurum Foundation: confiabilidade, produtos, cadastro, taxas e suporte."
    intro={`Se você chegou aqui pesquisando "Aurum Foundation é confiável?", "Como funciona o sistema?" ou simplesmente quer entender melhor o ecossistema antes de criar sua conta, reunimos as principais dúvidas em um só lugar. As respostas abaixo são baseadas na documentação oficial, nos Termos de Uso e na experiência real dos usuários do backoffice Aurum Foundation.`}
    heroImage={faqHero}
    heroImageAlt="FAQ Aurum Foundation: plataforma de trading e produtos cripto integrados"
    sections={[
      {
        h2: 'Aurum Foundation é confiável?',
        paragraphs: [
          'Sim. A Aurum Foundation é uma organização com sede internacional em Hong Kong, 3 licenças internacionais ativas e operação global em português, inglês e espanhol. O ecossistema reúne exchange, neobank, robôs de IA (Zeus AI, Ex-Ai, Ex-Ai Pro), cartões Visa cripto e Agentes de IA em uma única conta.',
          'A confiabilidade também passa pela transparência: cada usuário acompanha saldo, operações e histórico diretamente no backoffice oficial, sem intermediários. Mesmo assim, é importante lembrar que investimentos em criptomoedas têm risco de mercado e nenhum resultado passado garante retorno futuro. Leia a análise completa em /aurum-foundation-e-confiavel/.',
        ],
      },
      {
        h2: 'Como funciona o sistema Aurum Foundation?',
        paragraphs: [
          'O sistema Aurum Foundation funciona como um ecossistema integrado: você cria uma conta única no backoffice oficial e acessa todos os produtos — Zeus AI, exchange, staking, flash loans e cartões — sem precisar migrar saldo entre plataformas diferentes.',
          'Após o cadastro e o KYC, o usuário pode depositar cripto, configurar estratégias automatizadas no Zeus AI, negociar pares na exchange, participar de staking com prazos definidos e solicitar o Cartão Aurum para gastos no dia a dia. Tudo é gerenciado por um painel único com relatórios em tempo real. Saiba mais em /plataforma/.',
        ],
      },
      {
        h2: 'Cadastro, conta e KYC',
        paragraphs: [
          'O cadastro na Aurum Foundation é gratuito e pode ser feito em poucos minutos pelo backoffice oficial. Durante o registro, você informa e-mail, cria uma senha forte e ativa a autenticação em dois fatores (2FA).',
          'O KYC (Know Your Customer) é exigido para liberar limites maiores, saques em fiat e emissão de cartões físicos. O processo é padrão do mercado financeiro e segue as normas de AML (Anti-Money Laundering). Em geral, a verificação é aprovada em até 48 horas úteis.',
        ],
      },
      {
        h2: 'Zeus AI e Aurum Bot',
        paragraphs: [
          'O Zeus AI é o robô de trading da Aurum Foundation que opera 24 horas por dia, 7 dias por semana, usando inteligência artificial proprietária. Ele analisa múltiplos pares de criptomoedas, identifica oportunidades e executa operações de forma automatizada dentro dos limites configurados pelo usuário.',
          'O Aurum Bot é o nome comum dado ao Zeus AI e aos agentes de IA do ecossistema. A ativação é feita dentro do backoffice, onde você escolhe o plano, define o capital alocado e ajusta o perfil de risco. Não há promessa de lucro garantido: o desempenho depende das condições de mercado. Veja detalhes em /aurum-bot/ e /zeus-ai/.',
        ],
      },
      {
        h2: 'Staking, Exchange e Flash Loans',
        paragraphs: [
          'O Aurum Staking permite receber recompensas por manter criptomoedas travadas por um período definido. Os prazos, taxas e rentabilidades são apresentados antes da confirmação, e o usuário pode acompanhar tudo no painel. Entenda os riscos em /staking/.',
          'A Aurum Exchange oferece 100+ pares de cripto com liquidez global, execução rápida e taxas competitivas. Já os Flash Loans são empréstimos DeFi liquidados em um único bloco, usados principalmente para arbitragem e operações avançadas. Saiba mais em /exchange/ e /flash-loans/.',
        ],
      },
      {
        h2: 'Cartão Aurum e gastos no dia a dia',
        paragraphs: [
          'O Cartão Aurum converte criptomoedas em moeda local automaticamente, permitindo compras em 180+ países. Existem diferentes níveis (Nova, Imperium, World Elite e Infinity), cada um com limites, cashback e benefícios próprios.',
          'A solicitação é feita pelo backoffice, após KYC aprovado. O cartão pode ser virtual ou físico, e as tarifas são informadas antes da contratação. Veja os detalhes em /cartao-aurum/ e /cartoes/.',
        ],
      },
      {
        h2: 'Segurança, saques e taxas',
        paragraphs: [
          'A segurança da Aurum Foundation inclui criptografia AES-256, cold storage para a maior parte dos ativos, autenticação 2FA, whitelist de saques, biometria e monitoramento antifraude 24/7. Detalhes técnicos estão em /seguranca/.',
          'Os saques seguem as regras de cada produto. Staking e outros planos podem ter prazos de carência. As taxas variam por produto e nível de cliente, sempre informadas no painel antes da confirmação. Não cobramos taxa de cadastro nem mensalidade básica para o NeoBank.',
        ],
      },
      {
        h2: 'Suporte e canais oficiais',
        paragraphs: [
          'O suporte da Aurum Foundation está disponível 24/7 pelo painel logado, WhatsApp +55 12 98251-9116 e Telegram oficial. Para dúvidas técnicas, a documentação completa está em /docs/.',
          'Importante: use apenas os canais oficiais listados em /contato/ e /suporte/. Existem perfis e links falsos usando o nome Aurum para captar contatos. Nunca compartilhe senhas, códigos 2FA ou chaves privativas com terceiros.',
        ],
      },
    ]}
    features={[
      'Cadastro gratuito e KYC simples',
      'Ecossistema integrado em uma conta',
      'Zeus AI operando 24/7',
      'Cartão Aurum aceito em 180+ países',
      'Cold storage e criptografia AES-256',
      'Suporte 24/7 pelos canais oficiais',
    ]}
    faqs={[
      { q: 'Aurum Foundation é confiável?', a: 'Sim. A Aurum Foundation opera com 3 licenças internacionais, sede em Hong Kong, KYC/AML obrigatório, criptografia AES-256, cold storage e backoffice com relatórios em tempo real. Mesmo assim, investir em criptomoedas envolve risco de mercado. Análise completa: /aurum-foundation-e-confiavel/.' },
      { q: 'Como funciona o sistema Aurum Foundation?', a: 'Você cria uma conta única no backoffice oficial, completa o KYC e acessa exchange, Zeus AI, staking, flash loans e cartões cripto em um só painel. Os saldos e operações são gerenciados de forma integrada, sem precisar transferir entre plataformas. Mais detalhes: /plataforma/.' },
      { q: 'Como abrir conta na Aurum Foundation?', a: 'Acesse o backoffice oficial em backoffice.aurum.foundation, clique em criar conta, preencha seus dados, confirme o e-mail, ative o 2FA e finalize o KYC para liberar todos os produtos.' },
      { q: 'Quais países são atendidos?', a: 'A Aurum Foundation opera globalmente, exceto em jurisdições com restrições regulatórias explícitas. O suporte pode confirmar a disponibilidade para o seu país.' },
      { q: 'Existe valor mínimo para começar?', a: 'Não há valor mínimo para criar a conta. Cada produto tem seus próprios mínimos operacionais, informados no painel antes da confirmação.' },
      { q: 'Aurum Foundation é segura?', a: 'A plataforma usa criptografia AES-256, cold storage, 2FA, whitelist de saques, biometria e auditorias contínuas. Veja as 7 camadas de proteção em /seguranca/.' },
      { q: 'O que é o Zeus AI?', a: 'Zeus AI é o robô de trading da Aurum Foundation que opera 24/7 com inteligência artificial proprietária. Ele analisa o mercado e executa operações dentro dos limites definidos pelo usuário. Saiba mais em /zeus-ai/.' },
      { q: 'O que é o Aurum Bot?', a: 'Aurum Bot é o nome popular do Zeus AI e dos agentes de IA do ecossistema Aurum. A ativação e configuração são feitas no backoffice. Detalhes em /aurum-bot/.' },
      { q: 'Como funciona o staking na Aurum?', a: 'Você trava criptomoedas por um período definido e recebe recompensas. Prazos, taxas e rentabilidade são mostrados antes da confirmação. Leia mais em /staking/.' },
      { q: 'Como funciona a exchange Aurum?', a: 'A Aurum Exchange permite negociar 100+ pares de cripto com liquidez global, execução rápida e taxas competitivas. Acesse /exchange/ para comparar.' },
      { q: 'Como solicitar o Cartão Aurum?', a: 'Após o KYC aprovado, acesse a área de cartões no backoffice, escolha o nível (Nova, Imperium, World Elite, Infinity) e solicite o cartão virtual ou físico. Veja /cartao-aurum/ e /cartoes/.' },
      { q: 'O Cartão Aurum funciona no Brasil?', a: 'Sim. O cartão é aceito em 180+ países, incluindo o Brasil, e converte cripto automaticamente para a moeda local no momento da compra.' },
      { q: 'Quais as taxas da Aurum Foundation?', a: 'Não há taxa de cadastro nem mensalidade básica do NeoBank. Taxas de exchange, cartão, staking e bots variam por produto e nível de cliente, sempre informadas no painel.' },
      { q: 'Como fazer saque na Aurum Foundation?', a: 'Os saques são feitos pelo backoffice, seguindo as regras de cada produto. Produtos como staking podem ter prazos de carência. Sempre ative o 2FA e a whitelist de endereços.' },
      { q: 'A Aurum Foundation garante lucro?', a: 'Não. Nenhum produto da Aurum Foundation garante lucro. Resultados variam conforme o mercado e o produto escolhido. Desconfie de promessas de retorno fixo.' },
      { q: 'Aurum Foundation é golpe?', a: 'Não. A Aurum Foundation é uma empresa registrada com produtos ativos e backoffice próprio. O que existe são perfis e links falsos usando o nome Aurum; use apenas os canais oficiais.' },
      { q: 'Como saber se o site é oficial?', a: 'Os domínios oficiais são aurumfoundation.world e backoffice.aurum.foundation. Qualquer outro endereço deve ser verificado com o suporte em /contato/.' },
      { q: 'Onde fica o suporte da Aurum Foundation?', a: 'O suporte está disponível 24/7 pelo painel logado, WhatsApp +55 12 98251-9116 e Telegram oficial. Veja /suporte/ e /contato/.' },
      { q: 'Como funciona o KYC na Aurum?', a: 'O KYC exige documento de identidade válido, comprovante de residência e, em alguns casos, selfie. A verificação costuma ser aprovada em até 48 horas úteis.' },
      { q: 'Posso usar a Aurum Foundation no celular?', a: 'Sim. O backoffice e o app Aurum Foundation são responsivos e funcionam em iOS e Android. A experiência é otimizada para mobile.' },
      { q: 'Onde leio os Termos de Uso e Privacidade?', a: 'Os documentos oficiais estão disponíveis em /termos/ e /privacidade/. Recomendamos a leitura antes de usar qualquer produto do ecossistema.' },
      { q: 'Aurum Foundation tem aplicativo?', a: 'Sim. O ecossistema Aurum Foundation pode ser acessado pelo app, que reúne conta, cartão, exchange e robôs de IA. Veja a seção App na página inicial.' },
      { q: 'Como funciona o programa de indicadores?', a: 'A Aurum Foundation oferece programa de indicação com bonificações. As regras atuais estão disponíveis no backoffice, na área "Indicar".' },
      { q: 'O que são os Agentes de IA da Aurum?', a: 'Os Agentes de IA são assistentes especializados do ecossistema Aurum que ajudam em análise de mercado, automação de estratégias e suporte a decisões de investimento.' },
    ]}
    relatedLinks={[
      { href: '/aurum-foundation-e-confiavel/', label: 'Aurum Foundation é confiável?', description: 'Análise completa sobre licenças, segurança, reputação e riscos.' },
      { href: '/plataforma/', label: 'Plataforma Aurum Foundation', description: 'Entenda como funciona o ecossistema em uma única conta.' },
      { href: '/zeus-ai/', label: 'Zeus AI da Aurum Foundation', description: 'Robô de trading 24/7 com inteligência artificial proprietária.' },
      { href: '/aurum-bot/', label: 'Aurum Bot', description: 'Tudo sobre o robô e os agentes de IA do ecossistema Aurum.' },
      { href: '/staking/', label: 'Aurum Staking', description: 'Renda passiva em cripto com custódia institucional.' },
      { href: '/cartao-aurum/', label: 'Cartão Aurum', description: 'Gaste cripto em 180+ países com conversão automática.' },
      { href: '/seguranca/', label: 'Segurança Aurum Foundation', description: 'As 7 camadas de proteção dos ativos e dados dos usuários.' },
      { href: '/contato/', label: 'Contato Aurum Foundation', description: 'Canais oficiais de atendimento, WhatsApp e suporte 24/7.' },
    ]}
  />
);

export default FAQ;
