---
title: Troubleshooting
---

<h1>🛠️ 14. Troubleshooting</h1>

<h3>❌ Firebase CLI não reconhecido:</h3>

→ Instale ou reinstale o Firebase CLI:

```bash
npm install -g firebase-tools
```

> Depois, reinicie o terminal e valide:

```bash
firebase --version
```

> Se o problema persistir:

```bash
npm prefix -g
```

<h3>❌ Página Não Encontrada - 404:</h3>

> → Verifique:

- Se o build foi executado.
- Se o `index.html` existe.
- Se `hosting.public` aponta para a pasta correta.
- Se o `firebase.json` correto está sendo utilizado.
- Se o deploy foi executado depois da alteração.
- Se o projeto Firebase ativo é o correto.

> Localize o arquivo:

```powershell
Get-ChildItem . -Filter index.html -Recurse | Select-Object FullName
```

Se o resultado for:

```text
  dist\shadow-flip-angular\browser\index.html
```

o `firebase.json` deve utilizar:

```json
"public": "dist/shadow-flip-angular/browser"
```
<h3><code>Could not detect project root:</code></h3>

> Execute os comandos dentro da pasta que contém:

```text
angular.json
package.json
src/
```

<h3>❌ Erro 404 ao atualizar rota interna:</h3>

> → Confirme se o `firebase.json` possui:

```json
"rewrites": [
  {
    "source": "**",
    "destination": "/index.html"
  }
]
```

Depois, gere o build novamente:

```bash
ng build --configuration production
```

e faça um novo deploy:

```bash
firebase deploy --only hosting
```

→ Falta regra de `rewrites` no `firebase.json`. Adicione e publique novamente.

> 💡 O rewrite permite que o Firebase entregue o `index.html` para URLs que serão interpretadas pelo Angular Router.

<h3>❌ Alterações não aparecem:</h3>

→ Tente:

- Atualizar com `Ctrl + F5`.
- Abrir uma janela anônima.
- Limpar o cache do navegador.
- Confirmar se o deploy foi concluído.
- Confirmar a URL do projeto Firebase.
- Verificar se o build foi executado antes do deploy.

<h3>Arquivos estáticos não carregam:</h3>

Confirme:

- Se os arquivos estão dentro de `src/assets/ ou outro caminho de pasta que você use.`
- Se o caminho utilizado no código está correto.
- Se os assets estão configurados no `angular.json.`
- Se o caminho respeita letras maiúsculas e minúsculas.
- Se os arquivos foram incluídos no build.

Exemplo:

```html:
  <img src="../public/images/firebase_badge.svg" width="90" alt="Badge do Firebase">
```

> A imagem deve aparecer como no exemplo Abaixo: 

<p align="center">
  <img src="../public/images/firebase_badge.svg" width="120" alt="Badge do Firebase">
</p>