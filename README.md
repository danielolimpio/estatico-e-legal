# Site Pronto Agora

Crie um site 100% estático (SSG - Static Site Generation), NÃO uma SPA.

Requisitos obrigatórios:

Estrutura de pastas físicas no servidor para cada rota:
/sobre-nos/index.html
/blog/index.html
/blog/posts/como-lidar-com-ciumes/index.html
etc.
Cada index.html deve conter:
<title> único (≤60 caracteres)
<meta name="description"> único (≤155 caracteres)
<link rel="canonical" href="URL_COMPLETA/">
Conteúdo textual visível no HTML bruto (sem depender de JavaScript)
<html lang="pt-BR">
Links internos reais no HTML:
<a href="/sobre-nos/">Sobre Nós</a> (não gerenciado apenas por router)
Arquivos de SEO:
robots.txt com Allow: /
sitemap.xml com todas as URLs
NÃO use React Router puro ou client-side rendering.
O site deve ser entregue como HTML estático completo, pronto para crawlers (Screaming Frog, Googlebot) sem JS."

Quero uma landing page desse site 100% em português, utilize a mesma identidade visual para criar, quero as mesmas fontes, cores, estilo, porém quero um modelo não tão extenso na rolagem, quero um conteúdo mais resumido e dinâmico, quero que esse site seja construido com as mesma caracteristicas do modelo, linhas, elementos, clone todos detalhes.

This project was built with [Lovable](https://lovable.dev).

**Live app**: https://estatico-e-legal.lovable.app

## Build with Lovable

Continue developing this project in the [Lovable editor](https://lovable.dev/projects/930adfdb-853f-4480-997c-c513a27131ee).

- **Ship faster**: describe what you want to build and Lovable handles the code.
- **Stay in sync**: every change made in Lovable is committed straight to this repository.
- **Full ownership**: this code is yours. Push to `main` on GitHub and your changes sync back into Lovable, ready for your next prompt.

## Development

Prefer working locally? You need Node.js and npm — [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating).

```sh
git clone <this-repository-url>
cd <repository-name>
npm i
npm run dev
```
