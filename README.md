![GitHub repo size](https://img.shields.io/github/repo-size/Domisnnet/DomisDocs-Technical-Vue.Js?style=for-the-badge)
![GitHub stars](https://img.shields.io/github/stars/Domisnnet/DomisDocs-Technical-Vue.Js?style=for-the-badge)
![GitHub last commit](https://img.shields.io/github/last-commit/Domisnnet/DomisDocs-Technical-Vue.Js?style=for-the-badge)

<h1 id="domisdocs">🚀 DomisDocs : Documentação Técnica + DomisPacks</h1>

![Status](https://img.shields.io/badge/Status-Documentação_Pública-4CAF50?style=flat-square)
![Angular](https://img.shields.io/badge/Angular-20-DD0031?style=flat-square&logo=angular&logoColor=white)
![Next.Js](https://img.shields.io/badge/Next.js-15-black?style=flat-square&logo=next.js&logoColor=white)
![Tailwind V4](https://img.shields.io/badge/Tailwind-v4-38BDF8?style=flat-square&logo=tailwindcss&logoColor=white)
![Firebase](https://img.shields.io/badge/Firebase-Hosting-FFCA28?style=flat-square&logo=firebase&logoColor=black)
![Node.Js](https://img.shields.io/badge/Node.Js-20.19%2B-339933?style=flat-square&logo=node.Js&logoColor=white)
[![Licença](https://img.shields.io/badge/License-Private_Commercial_v1.3-red.svg)](https://github.com/Domisnnet/DomisDocs-Technical-Vue.Js/blob/main/LICENSE)
![DomisDocs](https://raw.githubusercontent.com/Domisnnet/DomisDocs-Technical-Vue.Js/main/docs/public/images/domisdocs.png)

> **Plataforma de Documentação Técnica + Vitrine SaaS.**
> Este repositório é PÚBLICO e contém apenas a documentação gratuita e a vitrine dos produtos.
> Os códigos dos Packs ficam no repo privado.

**Projeto de referência:** Shadow-Flip-Angular & `Next.Js 15`
**Nível:** Intermediário → Avançado

---

<h2>📚 Tabela de Conteúdo</h2>

| 💻 O Projeto | 🛠 Técnico | 🤝 Comercial |
| :---: | :---: | :---: |
| [![1. Sobre](https://img.shields.io/badge/1%20-%20Sobre-4CAF50)](#sobre-o-projeto) | [![5. Destaques](https://img.shields.io/badge/5%20-%20Destaques-607D8B)](#destaques-tecnicos) | [![9. Código](https://img.shields.io/badge/9%20-%20Código-795548)](#codigo-fonte) |
| [![2. Techs](https://img.shields.io/badge/2%20-%20Techs-2196F3)](#tecnologias-utilizadas) | [![6. Deploy](https://img.shields.io/badge/6%20-%20Deploy-009688)](#fluxo-de-deploy) | [![10. Créditos](https://img.shields.io/badge/10%20-%20Créditos-607D8B)](#créditos) |
| [![3. Acessar](https://img.shields.io/badge/3%20-%20Acessar-FF9800)](#como-acessar) | [![7. Contribuir](https://img.shields.io/badge/7%20-%20Contribuir-3F51B5)](#como-contribuir) | [![11. Licença](https://img.shields.io/badge/11%20-%20Licença-E91E63)](#licenca) |
| [![4. Funções](https://img.shields.io/badge/4%20-%20Funções-9C27B0)](#funcionalidades) | [![8. FAQ](https://img.shields.io/badge/8%20-%20FAQ-FFC107)](#faq) | [![12. Perfil](https://img.shields.io/badge/12%20-%20Perfil-212121)](#perfil-do-github)


---

<h2 id="sobre-o-projeto">1. 🚀 Sobre o Projeto</h2>

Esta plataforma resolve o deploy em 2 camadas isoladas:

| Camada | O que é | Onde está | Acesso |
| :--- | :--- | :--- | :--- |
| **DomisDocs** | Documentação gratuita Angular 20 + Firebase Hosting | `/docs` deste repo | ✅ Público |
| **DomisPacks Lite** | Boilerplate Next.Js 15 + Tailwind v4 + Firebase | Repo Privado via CLI | 🔒 PRO_KEY Lite |
| **DomisPacks Pro** | Boilerplate Completo + Stripe + Rules + SSR + CI/CD | Repo Privado via CLI | 🔒 PRO_KEY Pro |

> ⚠ **Este README é uma vitrine sem código.**
> O `firebase.json` killer, `apphosting.yaml`,
> `firestore.rules` e `functions/` só existem
> nos repositórios privados.

---

<h2 id="tecnologias-utilizadas">2. ⚙ Tecnologias da Vitrine</h2>

| Camada | Tecnologias | Descrição |
| :--- | :--- | :---  |
| **DomisPacks Free** | `Angular 20` + `VitePress` | Guia SPA documentado                      |
| **DomisPacks Lite** | `Next.Js 15` + `Tailwind v4` + `shadcn/ui` | `App Router` base limpa   |
| **DomisPacks Pro**  | `Stripe` + `Firebase Functions` + `SSR` | Lite + Checkout e `Functions`|

---

<h2 id="como-acessar">3. 🚀 Como Acessar</h2>

Para conhecer a Plataforma clique abaixo:

<div align="left">
  <a href="https://domisdocs-6a896.web.app/" target="_blank">
    <img alt="Botão Acessar" src="https://raw.githubusercontent.com/Domisnnet/DomisDocs-Technical/main/docs/public/images/botao.webp" height="70" width="70" />
  </a>
</div>

---

<h2 id="funcionalidades">4. 🧩 Funcionalidades Documentadas</h2>

| Funcionalidade | Descrição |
| :--- | :--- |
| ⚡ Build Angular | `ng build --configuration production`|
| 📁 Pasta Correta | `dist/nome-do-projeto/browser/`      |
| 🔄 SPA | `rewrites` para não dar 404 no F5              |
| 📦 Packs | `Next.Js 15` + `Tailwind v4`                 |
| 🚀 Deploy | `firebase deploy --only hosting`            |

---

<h2 id="destaques-tecnicos">5. 💻 Destaques Técnicos</h2>

**O Problema:** Angular 20 gera em `dist/.../browser/` e Next.Js 15 gera em `.next`. Misturar os dois `firebase.json` quebra o deploy.

**A Solução:** Cada stack tem seu `firebase.json` validado isolado no seu repo privado. Zero confusão.

---

<h2 id="fluxo-de-deploy">6. 📦 Fluxo de Deploy</h2>

1. Verificar versões:

```bash
node --version
ng version
firebase --version
```

2. Autenticar e selecionar projeto:

```bash
firebase login
firebase use --add
```

3. Gerar build de produção:

```bash
ng build --configuration production
```

4. Configurar Hosting - 1ª vez:

```bash
firebase init hosting
```

5. Publicar:

```bash
firebase deploy --only hosting
```

> Para próximas publicações:
> **ng build --configuration production && firebase deploy --only hosting**

---

<h2 id="como-contribuir">7. 🤝 Como Contribuir</h2>

| Fase | Ação | Link / Comando |
| :--- | :--- | :--- |
| **01** | **Fork** | [![Fork](https://img.shields.io/badge/-Fazer%20Fork-blue?style=flat-square&logo=github)](https://github.com/Domisnnet/DomisDocs-Technical-Vue.Js/fork) |
| **02** | **Branch** | `git checkout -b feature/Melhoria` |
| **03** | **Commit** | `git commit -m 'docs: atualizado'` |
| **04** | **Push** | `git push origin feature/Melhoria` |
| **05** | **PR** | [![Abrir PR](https://img.shields.io/badge/-Abrir%20PR-green?style=flat-square&logo=git)](https://github.com/Domisnnet/DomisDocs-Technical-Vue.Js/compare) |

<h3>🐛 Encontrou um problema?</h3>

[![Issues Abertas](https://img.shields.io/github/issues/Domisnnet/DomisDocs-Technical-Vue.Js?style=flat-square&color=red&logo=github)](https://github.com/Domisnnet/DomisDocs-Technical-Vue.Js/issues)
[![Reportar Erro](https://img.shields.io/badge/Reportar-Erro-critical?style=flat-square&logo=github)](https://github.com/Domisnnet/DomisDocs-Technical-Vue.Js/issues/new)


---

<h2 id="faq">8. 🧠 Perguntas Frequentes</h2>

<details>
<summary><strong>Por que rodar ng build antes ❓</strong></summary>
O Firebase Hosting só hospeda arquivos estáticos. O build compila os códigos para dentro de <code>dist/</code>, que é a pasta enviada ao servidor.
</details>

<details>
<summary><strong>Por que a pasta browser existe ❓</strong></summary>
É a estrutura padrão do Angular 20 para SPA. Confirme sempre o caminho do <code>index.html.</code>
</details>

<details>
<summary><strong>Para que serve o rewrites ❓</strong></summary>
Encaminha todas as URLs para o <code>index.html</code>, permitindo o Angular Router sem erro 404.
</details>

<details>
<summary><strong>Qual a diferença entre Lite e Pro ❓</strong></summary>
- Lite: Next.Js 15 + Tailwind v4 + shadcn - base limpa.
- Pro: Tudo do Lite + Stripe Checkout + Firebase Functions + liberação automática via Kiwify.
</details>

<details>
<summary><strong>O que são os DomisPacks ❓</strong></summary>
São: <code>Framework Packs</code> que sobem os pacotes em <code>Next.Js 15 + Tailwind v4</code> do repo privado.
</details>

---

<h2 id="codigo-fonte">9. 💻 Código Fonte</h2>

Explore a documentação no Repositório Oficial:

![VitePress](https://img.shields.io/badge/VitePress-Vue_3-4FC08D?style=for-the-badge&logo=vue.Js&logoColor=fff)
[![Repositório](https://img.shields.io/badge/Repositório-Domisnnet%2FDomisDocs--Technical--Vue.Js-4FC08D?style=for-the-badge&logo=github&labelColor=0d1117)](https://github.com/Domisnnet/DomisDocs-Technical-Vue.Js)

> **Packs Privados são acessados via:** &nbsp; `npm create domis@latest` **+ PRO_KEY.**

---

<h2 id="créditos">10. 📝 Créditos</h2>

| Atribuição | Responsável | Descrição |
| :--- | :--- | :--- |
| **Documentação** | **DomisDev** | Guia elaborado e testado |
| **Infraestrutura** | **Firebase** | Hospedagem e cloud |
| **Framework Docs** | **Angular** | Plataforma SPA |
| **Framework Packs** | **Next.Js 15 + Tailwind v4** | Stack dos Packs Lite e Pro |
| **Referência** | **Shadow-Flip-Angular** | Projeto real de exemplo |

---

<h2 id="licenca">11. 📄 Licença</h2>

Este repositório público contém:
*   **Documentação  - /docs :** &nbsp;MIT
*   **Packs - meu-app/ gerado via CLI :** &nbsp; [![Private Commercial](https://img.shields.io/badge/License-Private_Commercial_v1.3-red?style=flat-square)](https://github.com/Domisnnet/DomisDocs-Technical-Vue.Js/blob/main/LICENSE)

> **Uso pessoal, intransferível e não exclusivo.**
> Pode usar em projetos próprios e de clientes.
>
> **PROIBIDO:** Redistribuir, revender, compartilhar
> ou publicar o boilerplate como template/curso/pack
> concorrente. PRO_KEY pessoal e intransferível.
> Violação = revogação sem reembolso.

---

<h2 id="perfil-do-github">12. 👨💻 Perfil do GitHub</h2>

Quer saber mais sobre o **DomisDev?**

<a href="https://github.com/Domisnnet">
  <img src="https://raw.githubusercontent.com/Domisnnet/DomisDocs-Technical-Vue.Js/main/docs/public/images/DomisDev.png" width="90" style="border-radius: 50%" alt="DomisDev GitHub">
</a>

&nbsp;
<p align="center">
  <a href="#domisdocs">
    <img src="https://img.shields.io/badge/⬆%20VOLTAR%20AO%20TOPO-26FF00?style=flat&labelColor=111827&color=0A0F1C" alt="Voltar ao topo">
  </a>
</p>
