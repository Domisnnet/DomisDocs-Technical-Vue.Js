---
title: DomisPacks Pro - Produção Completa - R$197 - Em Desenvolvimento
description: SaaS Boilerplate Next.Js 15 + Stripe + Rules + CI/CD + Dashboard - R$197 Em Desenvolvimento
next:
  text: 'Vitrine - &nbsp;Todos os Packs'
  link: '/packs/'
prev:
  text: '🚀 DomisPacks Lite - &nbsp;R$49'
  link: '/packs/domispacks-lite'
---

::: info 💎 PRO: SAAS COMPLETO NEXT.JS 15 → &nbsp;R$197 - EM DESENVOLVIMENTO - ENTREGA DIRETA VIA PRO_KEY
SaaS Boilerplate completo. Deploy seguro com regras validadas, CI/CD, SSR e Stripe Checkout. Inclui tudo do Lite + produção real. Status: Em desenvolvimento final - getSignedUrl 5min + POST only.
:::

<h1>💎 DomisPacks Pro - R$197 - EM DESENVOLVIMENTO</h1>

> Do `npx create domis@latest` ao deploy em produção com regras seguras, CI/CD, SSR e Stripe. 
>
> O que empresas cobram R$2.000 para configurar.

<h2>Referências:</h2>

> **Vitrine Pública:** `DomisDocs-Technical` - Documentação Open Source.
>
> **Entrega:** Direta via PRO_KEY + `npm create domis@latest` após pagamento na Kiwify. Status: Em breve - R$197.

<h2>Lite vs Pro - Referência Documental - CONGELADO R$197:</h2>

| O que você precisa em produção | Lite R$49 | Pro R$197 Em Breve |
| :--- | :---: | :--- |
| Fix public directory + 404 SPA | ✅ | ✅ |
| Cache 1 ano + Compressão | ✅ | ✅ |
| Next.Js 15 + Tailwind v4 + shadcn | ✅ Starter | ✅ SaaS Completo |
| firestore.rules seguro (prod) | ❌ | ✅ avançada |
| storage.rules seguro (prod) | ❌ | ✅ avançada |
| GitHub Actions - Auto Deploy | ❌ | ✅ |
| Cloud Functions - kiwifyWebhook, verifyProKey, ping | ❌ | ✅ Node 22 - getSignedUrl 5min - POST only |
| Stripe Checkout + Webhook + Customer Portal | ❌ | ✅ |
| Headers de Segurança HSTS, CSP | ✅ | ✅ |
| Dashboard SaaS Premium | ❌ | ✅ |

<h2>O que vem no Pro:</h2>

```bash
templates/domispacks-pro/
├── src/
│   ├── app/
│   ├── components/
│   ├── lib/
│   └── assets/
├── firebase.json → Frameworks source: "." + headers - sem rewrites SPA
├── .firebaserc  → validado
├── firestore.rules  → segura prod avançada - sem if true
├── storage.rules → segura prod avançada - 5MB + MIME
├── next.config.ts  → otimizado Firebase
├── postcss.config.mjs  → v4 configurado
├── package.json
├── .github/workflows/deploy.yml → CI/CD Auto Deploy
└── functions/ → Node 22 - Webhook Kiwify + verifyProKey POST only + getSignedUrl 5min
```
> No Pack: Pro, são mais pastas disponíveis - `Dashboard Premium` , `lib Stripe` , etc.

<h3>Dashboard:</h3>

O Pro entrega o Dashboard SaaS com:
- Sidebar: Visão Geral, Analytics, Projetos, Equipe, Assinatura, Configurações ,etc
- Header: Search + Bell + Avatar
- Cards: Projetos Ativos, Segurança 100%, Componentes 48, Plano
- Stack UI: Next.Js 15 + Tailwind v4 + lucide-react + shadcn/ui

<h2>Instalação:</h2>

<h3>Fluxo de Uso:</h3>

- Cliente roda :

```bash
npm create domis@latest
```

<h3>CLI faz :</h3>

```
✔ DomisPacks Technical v1.0.55
✔ Qual pack você quer acelerar hoje?
```

<h4>Você escolhe os Packs:</h4>

```
✔ 🔥 DomisPacks Lite — Next.Js 15 + SaaS
```

<h4>O CLI valida a key, baixa o ZIP e monta a pasta:</h4>

- Cola a PRO_KEY
- Define o nome do projeto

> Ou:

```
✔ 🔥 DomisDocs PRO — Stripe + Rules
```

- Cola a PRO_KEY
- Define o nome do projeto

<h3>Depois:</h3>

```
✔ Baixando...
```

<h5>Crie um nome para o projeto</h5>

```bash
👉 cd + nome do projeto
```

<h5>Instale as dependências</h5>

```bash
👉 npm install
```
<h5>Para testar localmente via Localhost: </h5>

```bash
👉 npm run dev
```

<h5>Para fazer o Deploy do projeto</h5>

```bash
👉 firebase deploy --only hosting
```

<h5>Para fazer o Deploy das functions</h5>

```bash
👉 firebase deploy --only functions
```

> Ou tudo:

```bash
👉 firebase deploy
```

<h2>Regras Seguras - Documentação:</h2>

O Pro segue Firebase Security Checklist Oficial:

```bash
- Nenhum allow read, write: if true
- request.auth != null em tudo privado
- request.auth.uid == resource.data.ownerId
- request.resource.size < 5MB no Storage
- Validação MIME type
```

Teste local:

```bash
firebase emulators:start --only firestore,storage
```

<h2>FAQ:</h2>

::: details Preciso do Lite antes ❓
Não. O Pro já inclui tudo do Lite. Lite é porta de entrada. Se vai para produção com cliente, vá direto de Pro R$197.
:::

::: details Funciona com Angular Universal SSR ❓
Sim. A pasta functions/ já vem com adapter Angular Universal. No README_PRO.md tem ng add @angular/ssr. No Next.Js 15 SSR já vem configurado.
:::

::: details As Rules são seguras mesmo ❓
Sim. Seguem checklist oficial Firebase. Nenhum if true. Teste com emulators antes. O Pro já vem com avançada.
:::

::: details Cliente já tem projeto Firebase ❓
Perfeito. O Pro não cria projeto novo, só injeta .rules e firebase.json otimizado com source: "." + headers. Roda firebase deploy e pronto.
:::

<h2>💎 Comprar DomisPacks Pro - R$197 - EM DESENVOLVIMENTO</h2>

<div style="
  margin: 24px 0; 
  padding: 28px; 
  background: linear-gradient(135deg, #1a0a1a, #0a1a0a); 
  border-radius: 20px; 
  border: 2px solid #555; 
  text-align: center; 
  box-shadow: 0 8px 32px rgba(255,255,255,0.05); 
  opacity: 0.7;"
>
  <h3 style="
    color: #ffffff !important; 
    font-size: 24px; 
    font-weight: 900; 
    margin-bottom: 8px;"
  > 💎 DOMISPACKS PRO - R$197 - EM DESENVOLVIMENTO</h3>
  <p style="
    color: #9ca3af !important; 
    font-size: 16px; 
    font-weight: 700; 
    margin: 8px 0;"
  > Produção Completa - Em breve</p>
  <p style="
    color: #e5e7eb !important; 
    font-size: 14px; 
    margin: 12px 0;"
  >
    ✅ Tudo do Lite + Rules avançadas + Hosting Frameworks + CI/CD + SSR<br/>
    ✅ Template Enterprise pronto pra cliente + Dashboard Premium<br/>
    ✅ 6 meses updates + getSignedUrl 5min + POST only
  </p>
  <button disabled style="
    display: inline-block; 
    margin: 16px 0; 
    padding: 16px 32px; 
    background: #333; 
    color: #888 !important; 
    font-weight: 900; 
    font-size: 18px; 
    border-radius: 12px; 
    border: none; 
    cursor: not-allowed;"
  > 🔒 PRO EM BREVE - R$197 - AGUARDE</button>
  <p style="
    color: #9ca3af !important; 
    font-size: 12px; 
    margin-top: 12px;"
  > 📦 Botão desabilitado até finalizar <code>Stripe</code> + <code>Functions Node 22</code> - getSignedUrl 5min
  </p>
</div>

::: tip Já comprou o Lite?
> Envie comprovante do Lite e ganhe cupom de R$49 OFF. Paga só a diferença para o Pro R$197.
:::

<h2>🛡 Garantia</h2>

> Todos os packs têm **7 dias de garantia incondicional** via Kiwify.
