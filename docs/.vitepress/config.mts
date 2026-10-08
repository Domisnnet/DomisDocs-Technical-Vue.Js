// https://vitepress.dev/reference/site-config
import { defineConfig } from 'vitepress'

export default defineConfig({
  title: "DomisPacks",
  description: "Plataforma de Documentação Técnica — DomisDev | Guia: Angular 20 + Firebase Hosting",
  head: [ ['link', { rel: 'icon', href: '/favicon.svg', type: 'image/svg+xml' }] ],
  lang: 'pt-BR',
  base: '/',
  themeConfig: {
    outline: { level: [2, 3], label: 'Nesta página' },
    logo: '/images/premium-512.png',
    nav: [
      { text: 'Início', link: '/' },
      { text: '📖 Documentação Técnica', link: '/guia/' },
      { text: '🛒 DomisPacks', link: '/packs/' },
      {
        text: '🔗 Links',
        items: [
          { text: 'Repositório Oficial', link: 'https://github.com/Domisnnet/DomisDocs-Technical' }
        ]
      }
    ],
    sidebar: {
      '/guia/': [
        {
          text: '🚀 Início do Guia',
          items: [
            { text: '1. Deploy — Apresentação', link: '/guia/01-deploy-angular-firebase-hosting' },
            { text: '2. Objetivo', link: '/guia/02-objetivo' },
            { text: '3. Como Funciona', link: '/guia/03-como-funciona' },
            { text: '4. Tecnologias', link: '/guia/04-tecnologias-utilizadas' },
            { text: '5. Exemplo Prático', link: '/guia/05-exemplo-utilizado' }
          ]
        },
        {
          text: '🛠 Passo a Passo',
          items: [
            { text: '6. Instalar Firebase CLI', link: '/guia/06-instalar-firebase-cli' },
            { text: '7. Login e Projeto', link: '/guia/07-login-e-associacao' },
            { text: '8. Build e index.html', link: '/guia/08-build-e-localizacao' },
            { text: '9. Configurar Hosting', link: '/guia/09-configurar-hosting' },
            { text: '10. Testar Localmente', link: '/guia/10-validar-e-testar' },
            { text: '11. Fazer o Deploy', link: '/guia/11-fazer-o-deploy' },
            { text: '12. Próximos Deploys', link: '/guia/12-proximos-deploys' },
            { text: '13. Estrutura do Projeto', link: '/guia/13-estrutura-do-projeto' }
          ]
        },
        {
          text: '🧠 Referência',
          items: [
            { text: '14. Troubleshooting', link: '/guia/14-troubleshooting' },
            { text: '15. Boas Práticas', link: '/guia/15-boas-praticas' },
            { text: '16. Contribuindo', link: '/guia/16-contribuindo' },
            { text: '17. FAQ', link: '/guia/17-faq' },
            { text: '18. Checklist Final', link: '/guia/18-checklist-final' },
            { text: '19. Referências Oficiais', link: '/guia/19-referencias-oficiais' },
            { text: '20. Regra Mais Importante', link: '/guia/20-regra-mais-importante' },
            { text: '21. Créditos e Perfil', link: '/guia/21-creditos-licenca-perfil' }
          ]
        }
      ],
      '/packs/': [
        {
          text: '🛒 DomisPacks Premium',
          items: [
            { text: 'Vitrine Tecnica', link: '/packs/' },
            { text: 'DomisPacks Lite', link: '/packs/domispacks-lite' },
            { text: 'DomisPacks Pro', link: '/packs/domispacks-pro' }
          ]
        }
      ]
    },
    socialLinks: [ { icon: 'github', link: 'https://github.com/Domisnnet/DomisDocs-Technical' } ],
    footer: {
      message: 'Plataforma de Documentação Técnica',
      copyright: '© 2026 DomisDocs | Todos os Direitos Reservados.'
    },
    search: { provider: 'local' },
    docFooter: { prev: 'Página anterior', next: 'Próxima página' }
  }
})