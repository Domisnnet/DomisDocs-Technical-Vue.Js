---
layout: home
hero:
  name: "DomisDocs :"
  text: Plataforma de Documentação Técnica + SaaS Boilerplate.
  tagline: Do Deploy Angular 20 ao SaaS Next 15 completo - Firebase Hosting, Functions, Stripe e automação Kiwify.
  actions:
    - theme: brand
      text: "🚀 Documentação Técnica"
      link: /guia/
    - theme: brand
      text: "🛒 DomisPacks"
      link: /packs/
features:
    - icon: 🚀
      title: Deploy Angular 20 + Firebase
      details: Guia completo do zero ao publicado - build, rotas SPA, rewrites e checklist de produção.
    - icon: ⚡
      title: SaaS Next 15 + Tailwind v4
      details: Boilerplate com App Router, shadcn/ui, Tailwind v4 e estrutura pronta para SaaS.
    - icon: 💳
      title: Stripe Checkout Pronto
      details: Integração de pagamento, webhooks e liberação automática de acesso Pro.
    - icon: 🔥
      title: Bônus Firebase Killer
      details: Hosting + Functions + Firestore - arquitetura que substitui backend caro.
    - icon: 🤖
      title: Automação Kiwify + GitHub
      details: Webhook kiwifyWebhook gera PRO_KEY e convida automaticamente para o repo privado DomisPacks-Pro.
    - icon: 🧠
      title: Troubleshooting e Boas Práticas
      details: Erros reais de deploy (public, functions timeout, Node 22) resolvidos e documentados.
---

<style>
:root {
  --vp-home-hero-name-color: transparent;
  --vp-home-hero-name-background: -webkit-linear-gradient(120deg, #60A5FA 10%, #8B5CF6 50%, #6D28D9 90%);
}

.VPHomeHero .name {
  font-size: 76px !important;
  line-height: 0.9 !important;
  font-weight: 800 !important;
  letter-spacing: -0.03em !important;
  background: -webkit-linear-gradient(120deg, #60A5FA 10%, #8B5CF6 50%, #6D28D9 90%) !important;
  -webkit-background-clip: text !important;
  -webkit-text-fill-color: transparent !important;
  background-clip: text !important;
}

.VPHomeHero .text {
  font-size: 42px !important;
  line-height: 1.1 !important;
  font-weight: 600 !important;
  margin-top: 16px !important;
}

.VPHomeHero .VPButton.brand {
  background: linear-gradient(135deg, #26FF00, #00D4FF) !important;
  color: #000 !important;
  font-weight: 700 !important;
  border: none !important;
  box-shadow: 0 4px 14px 0 rgba(38, 255, 0, 0.39) !important;
}

.VPHomeHero .VPButton.alt {
  background: #2D2D2D !important;
  color: #fff !important;
  border: 2px solid #3a3a3a !important;
}

@media (max-width: 960px) {
  .VPHomeHero .name { font-size: 48px !important; }
  .VPHomeHero .text { font-size: 28px !important; }
}
</style>
