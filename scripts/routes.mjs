// Fonte única de rotas indexáveis do site.
// Consumida por: scripts/prerender.mjs, scripts/generate-sitemap.mjs,
// scripts/validate-seo.mjs. Mantenha sincronizada com src/App.tsx.

export const SITE = 'https://aurumfoundation.world';

/**
 * @typedef {Object} RouteEntry
 * @property {string} slug          Slug sem barras (ex.: 'aurum'). '' = home.
 * @property {string} title         <title> único da rota.
 * @property {string} description   <meta name="description"> único da rota.
 * @property {'website'|'article'} [ogType]
 * @property {'always'|'hourly'|'daily'|'weekly'|'monthly'|'yearly'|'never'} [changefreq]
 * @property {string} [priority]
 */

/** @type {RouteEntry[]} */
export const routes = [
  {
    slug: '',
    title: '▲ Aurum Foundation: 8 Produtos Cripto com IA 24/7',
    description: '▲ Aurum Foundation: Zeus AI opera 24/7, staking, exchange, flash loans e Cartão Aurum. +10M em ativos e 3 licenças. Crie sua conta grátis.',
    ogType: 'website',
    changefreq: 'daily',
    priority: '1.0',
  },
  { slug: 'aurum', title: '▲ Aurum: os 8 Produtos do Ecossistema Aurum', description: '▲ Aurum é o ecossistema da Aurum Foundation: Zeus AI, staking, exchange, flash loans e Cartão Aurum. Veja os 8 produtos e como começar em 3 passos.', ogType: 'article', changefreq: 'weekly', priority: '0.95' },
  { slug: 'plataforma', title: '▲ Plataforma Aurum: 1 Conta, 8 Produtos Cripto', description: '▲ Plataforma Aurum Foundation: 1 conta única para exchange, neobank, bots de IA e cartões cripto. Backoffice com relatórios em tempo real.', ogType: 'article', changefreq: 'weekly', priority: '0.9' },
  { slug: 'zeus-ai', title: '▲ Zeus AI: Robô de Trading Cripto 24/7 com IA', description: '▲ Zeus AI: robô de trading da Aurum Foundation que opera 24/7 com IA proprietária. Veja como funciona, riscos ▼ e como ativar em minutos.', ogType: 'article', changefreq: 'weekly', priority: '0.9' },
  { slug: 'staking', title: '▲ Aurum Staking: Renda Passiva em Cripto 24/7', description: '▲ Aurum Staking: rendimento passivo em cripto com custódia institucional. Compare prazos, entenda os riscos ▼ e comece com poucos cliques.', ogType: 'article', changefreq: 'weekly', priority: '0.9' },
  { slug: 'flash-loans', title: '▲ Flash Loans Aurum: Empréstimo DeFi em 1 Bloco', description: '▲ Flash Loans Aurum Foundation: empréstimos DeFi liquidados em 1 bloco para arbitragem. Requisitos, custos ▼ e exemplos práticos.', ogType: 'article', changefreq: 'weekly', priority: '0.9' },
  { slug: 'cartao-aurum', title: '▲ Cartão Aurum: Cripto em 180+ Países', description: '▲ Cartão Aurum: gaste cripto em 180+ países com conversão automática. Limites, tarifas ▼, benefícios e como solicitar o seu.', ogType: 'article', changefreq: 'weekly', priority: '0.9' },
  { slug: 'cartoes', title: '▲ Cartões Aurum: 4 Níveis e Benefícios Globais', description: '▲ Cartões Aurum: 4 níveis (Nova, Imperium, World Elite e Infinity). Compare limites, cashback e taxas ▼ antes de escolher o seu.', ogType: 'article', changefreq: 'weekly', priority: '0.9' },
  { slug: 'exchange', title: '▲ Aurum Exchange: 100+ Pares Cripto e Liquidez', description: '▲ Aurum Exchange: negocie 100+ pares cripto com liquidez global, taxas competitivas ▼ e segurança institucional da Aurum Foundation.', ogType: 'article', changefreq: 'weekly', priority: '0.9' },
  { slug: 'seguranca', title: '▲ Segurança Aurum: AES-256 e Cold Storage', description: '▲ Segurança Aurum Foundation: criptografia AES-256, cold storage, KYC/AML e auditorias contínuas. Veja as 7 camadas de proteção.', ogType: 'article', changefreq: 'monthly', priority: '0.7' },
  { slug: 'sobre-nos', title: '▲ Sobre a Aurum Foundation: 3 Licenças Globais', description: '▲ Aurum Foundation: 3 licenças internacionais, sede em Hong Kong e operação global. Conheça a missão, o time e o ecossistema completo.', ogType: 'article', changefreq: 'monthly', priority: '0.8' },
  { slug: 'carreiras', title: '▲ Carreiras Aurum Foundation: Vagas Globais', description: '▲ Carreiras na Aurum Foundation: vagas em engenharia, produto, marketing e operações. Trabalho remoto, time global e cultura de alta performance.', ogType: 'article', changefreq: 'weekly', priority: '0.6' },
  { slug: 'imprensa', title: '▲ Aurum Foundation na Mídia: Forbes e mais', description: '▲ Imprensa Aurum Foundation: cobertura na Forbes, Cointelegraph, Bitcoin.com e Entrepreneur. Kit de mídia, logos e contatos oficiais.', ogType: 'article', changefreq: 'monthly', priority: '0.6' },
  { slug: 'contato', title: '▲ Contato Aurum Foundation: Suporte Oficial 24/7', description: '▲ Fale com a Aurum Foundation: WhatsApp, e-mail e Telegram oficiais. Atendimento 24/7 para clientes, parceiros e imprensa.', ogType: 'article', changefreq: 'monthly', priority: '0.7' },
  { slug: 'blog', title: '▲ Blog Aurum Foundation: Cripto, IA e Mercado', description: '▲ Blog Aurum Foundation: análises de mercado ▲▼, novidades de produto e tutoriais sobre IA, staking, exchange e cartões cripto.', ogType: 'article', changefreq: 'weekly', priority: '0.7' },
  { slug: 'docs', title: '▲ Documentação Aurum Foundation: Guias e API', description: '▲ Documentação oficial Aurum Foundation: guias passo a passo, referência de API e boas práticas para usar todo o ecossistema Aurum.', ogType: 'article', changefreq: 'weekly', priority: '0.6' },
  { slug: 'faq', title: '▲ FAQ Aurum Foundation: 20+ Dúvidas Respondidas', description: '▲ FAQ Aurum Foundation: 20+ respostas sobre cadastro, login, Zeus AI, staking, exchange, Cartão Aurum, taxas ▼ e segurança.', ogType: 'article', changefreq: 'monthly', priority: '0.7' },
  { slug: 'suporte', title: '▲ Suporte Aurum Foundation: Atendimento 24/7', description: '▲ Suporte Aurum Foundation: ajuda com cadastro, login, saques, cartões e produtos cripto. Canais oficiais e resposta rápida 24/7.', ogType: 'article', changefreq: 'monthly', priority: '0.6' },
  { slug: 'termos', title: 'Termos de Uso | Aurum Foundation', description: 'Termos de Uso da Aurum Foundation: condições de uso da plataforma cripto e dos produtos do ecossistema Aurum.', ogType: 'article', changefreq: 'yearly', priority: '0.4' },
  { slug: 'privacidade', title: 'Política de Privacidade | Aurum Foundation', description: 'Política de Privacidade da Aurum Foundation: como tratamos dados pessoais conforme LGPD e padrões internacionais.', ogType: 'article', changefreq: 'yearly', priority: '0.4' },
  { slug: 'cookies', title: 'Política de Cookies | Aurum Foundation', description: 'Política de Cookies Aurum Foundation: como utilizamos cookies para melhorar sua experiência.', ogType: 'article', changefreq: 'yearly', priority: '0.4' },
];

/** URL canônica (sempre com barra final). */
export const canonicalUrl = (slug) => (slug ? `${SITE}/${slug}/` : `${SITE}/`);
