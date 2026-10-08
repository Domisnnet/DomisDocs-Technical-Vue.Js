---
title: DomisPacks Lite - Next.js 15 Starter
description: Boilerplate Next.js 15 + SaaS Boilerplate
next:
  text: "💎 DomisDocs Pro - &nbsp;R$197 - Em Breve"
  link: "/packs/domispacks-pro"
prev:
  text: "Vitrine - &nbsp;Todos os Packs"
  link: "/packs/"
---

::: info 🚀 LITE: NEXT.JS 15 STARTER → &nbsp;ENTREGA DIRETA VIA `PRO_KEY`
> `Next.js 15` + SaaS Boilerplate. 
>
> Deploy otimizado em 5 minutos.
:::
&nbsp;

<h1>🚀 DomisPacks Lite - R$49</h1>

- Fix em 5 minutos para `Could not find public directory` + `404 SPA` + Starter `Next.js 15` pronto.

<h2>Referências:</h2>

> **Vitrine Pública:** &nbsp;`DomisDocs-Technical` - Documentação Open Source.
>
> **Entrega:** Direta via `PRO_KEY` + &nbsp;`npm create domis@latest` após pagamento na Kiwify.

<h2>O que esta página documenta?</h2>

- Esta página documenta o Pack Lite disponível em `packs` na Plataforma:

<h3>Stack do Lite:</h3>

- `Next.js 15` + `App Router` + `Turbopack`
- `Tailwind v4` + `shadcn/ui`
- `Firebase Hosting` Frameworks + `firebase.json` otimizado
- Headers otimizados - sem `rewrites SPA`

<h3>O que vem no Lite?</h3>

```bash
templates/domispacks-lite/
├── src/
│   ├── app/
│   ├── components/
│   ├── lib/
│   └── assets/
├── firebase.json → Frameworks - source: "." + headers
├── .firebaserc
├── next.config.ts  → otimizado Firebase
├── postcss.config.mjs  → v4 configurado
├── package.json
```

<h3><code>firebase.json</code> do Pack Lite:</h3>

```json
{
  "hosting": {
    "source": ".",
    "ignore": ["firebase.json", "**/.*", "**/node_modules/**"],
    "headers": [
      {
        "source": "**/*.@(js|css|woff2|png|jpg|jpeg|gif|svg|webp|ico)",
        "headers": [{ "key": "Cache-Control", "value": "public, max-age=31536000, immutable" }]
      },
      {
        "source": "**",
        "headers": [
          { "key": "X-Content-Type-Options", "value": "nosniff" },
          { "key": "X-Frame-Options", "value": "DENY" },
          { "key": "X-XSS-Protection", "value": "1; mode=block" },
          { "key": "Strict-Transport-Security", "value": "max-age=31536000; includeSubDomains" }
        ]
      }
    ]
  }
}
```

<h4>Resolve:</h4>

- Error: Could not find public directory
- Error: 404 on refresh - página não encontrada ao dar F5


<h2>Instalação - Referência Documental:</h2>

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
✔ 🔥 DomisPacks Lite — Next.js 15 + SaaS
```

<h4>O CLI valida a key, baixa o ZIP e monta a pasta:</h4>

- Cola a `PRO_KEY`
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

<h2>FAQ - Lite</h2>

::: details Funciona no `Next.js 15` com `App Router` ❓
Sim. Validado no `Next.js 15` com `App Router` + `Turbopack`&nbsp;. O `firebase.json` já vem com source: "." para Frameworks.
:::

::: details Como recebo o acesso ❓
Você paga na Kiwify e recebe sua `PRO_KEY` por e-mail na hora , junto com o acesso a Plataforma da Kiwify.
:::

::: details O que acontece depois que eu pagar ❓
- 1. Kiwify envia `PRO_KEY` na hora
- 2. Você roda `npm create domis@latest`
- 3. Digita a `PRO_KEY` e o template é baixado
:::

::: details Qual a diferença para o Pro ❓
- Lite = `Next.js 15` Starter + deploy otimizado: `firebase.json` + `rewrites`. 
- Pro = Lite + `firestore.rules` + `storage.rules` + `CI/CD` + `Stripe` + `Kiwify Webhook` + `Dashboard SaaS`
:::

<h2>Comparativo:</h2>

| Recurso                                   | Lite R$49         |
| :---------------------------------------- | :---------------- |
| Fix public directory + 404 SPA            | ✅                |
| `Next.js 15` + `Tailwind v4` + `shadcn/ui`| ✅ Starter        |
| `firestore.rules` seguro                  | ❌                |
| `storage.rules`                           | ❌                |
| `GitHub Actions`                          | ❌                |
| `Functions` + `Stripe`                    | ❌                |

<h2>💬 O que quem comprou está dizendo:</h2>

<div 
  style="margin: 32px 0; 
  padding: 28px; 
  background: rgba(255,255,255,0.03); 
  border-radius: 16px; 
  border: 1px solid rgba(38,255,0,0.15);"
>
  <div style="
    display: flex; 
    gap: 16px; 
    align-items: flex-start;"
  >
    <div style="
      display: flex; 
      align-items: center; 
      justify-content: center;
      width: 48px; 
      height: 48px; 
      border-radius: 50%; 
      background: linear-gradient(135deg, #26FF00, #00D4FF);  
      font-weight: 800; 
      color: #000; 
      flex-shrink: 0;">R</div
    >
    <div style="flex: 1;">
      <div style="
        display: flex; 
        align-items: center; 
        gap: 8px; 
        margin-bottom: 8px; 
        flex-wrap: wrap;"
      >
        <span style="font-weight: 700; font-size: 16px; color: #fff;">Rafael M.</span>
        <span style="font-size: 13px; opacity: 0.6;">· Dev Front-end · São Paulo</span>
        <span style="margin-left: auto; color: #FFD700;">★★★★★</span>
      </div>
      <p style="
        font-size: 15px; 
        line-height: 1.6; 
        margin: 12px 0; 
        font-style: italic; 
        color: #e5e7eb;"
      >
        "Tava há 2 dias travado no erro <code>Could not find public directory</code> no Next.js 15. Tentei de tudo no Stack Overflow. Comprei o Lite por R$49 achando que era gambiarra, mas é o <code>firebase.json</code> certo mesmo. Copiei, dei <code>npm run build</code> e <code>firebase deploy --only hosting</code> e subiu de primeira. Valeu cada centavo."
      </p>
      <div style="
        display: flex; 
        gap: 12px; 
        margin-top: 12px; 
        font-size: 12px; 
        opacity: 0.5; 
        flex-wrap: wrap;"
      >
        <span>✅ Compra verificada na Kiwify</span>
        <span>·</span>
        <span>📅 Há 3 dias</span>
      </div>
    </div>
  </div>
</div>

<h2>🛒 Comprar DomisPacks Lite - R$49</h2>

<div style="
  margin: 24px 0; 
  padding: 28px; 
  background: linear-gradient(135deg, #0a0a1a, #1a1a0a); 
  border-radius: 20px; 
  border: 2px solid #FFD700; 
  text-align: center; 
  box-shadow: 0 8px 32px rgba(255,215,0,0.3);"
>
  <h3 style="
    color: #ffffff !important; 
    font-size: 24px; 
    font-weight: 900; 
    margin-bottom: 8px;"
  > 🔥 DOMISPACKS LITE - R$49</h3>
  <p style="
    color: #FFD700 !important; 
    font-size: 16px; 
    font-weight: 700; 
    margin: 8px 0;"
  > Fix Next.js 15 + Tailwind v4 + shadcn em 5 minutos</p>
  <p style="
    color: #e5e7eb !important; 
    font-size: 14px; 
    margin: 12px 0;"
  >
    ✅ CLI <code>npm create domis@latest</code> + PRO_KEY<br/>
    ✅ 6 meses de updates<br/>
    ✅ Licença Comercial Privada v1.03
  </p>
  <a href="https://pay.kiwify.com.br/heAmetM" target="_blank" style="
    display: inline-block; 
    margin: 16px 0; 
    padding: 16px 32px; 
    background: linear-gradient(90deg, #FFD700, #FFA500); 
    color: #000000 !important; 
    font-weight: 900; 
    font-size: 18px; 
    border-radius: 12px; 
    text-decoration: none; 
    box-shadow: 0 4px 16px rgba(255,215,0,0.4);"
  > 🚀 QUERO MEU ACESSO AGORA - R$49</a>
  <p style="
    color: #26FF00 !important; 
    font-size: 12px; 
    margin-top: 16px; 
    font-weight: 700;"
  > ⚡️ Entrega automática via PRO_KEY por e-mail após pagamento</p>
</div>
&nbsp;

::: tip Quer produção completa?
Conheça o Pro R$197 - EM BREVE com `Rules` + `CI/CD` + `Stripe` + `Dashboard.` 
> Veja em [DomisPacks Pro →](/packs/domispacks-pro)
:::

<h2>🛡 Garantia</h2>

> Todos os packs têm `7 dias de garantia incondicional` via Kiwify.