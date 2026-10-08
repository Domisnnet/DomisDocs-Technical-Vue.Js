---
title: Build e Localização do index.html
---

<h1>🏗️ 8. Build e Localização do <code>index.html:</code></h1>

<h2>Gerar build de produção:</h2>

> Antes de configurar o diretório público do Hosting, gere o build da aplicação.

- Execute:

```bash
ng build --configuration production
```

<h3>🔎 Descobrir caminho correto do <code>index.html:</code></h3>

- Execute na raiz do projeto:

<h4>Windows:</h4>

```powershell
Get-ChildItem . -Filter index.html -Recurse | Select-Object FullName
```
<h4>macOS / Linux:</h4>

```bash
find . -name "index.html"
```

- Exemplo:

```text
C:\Projects\Shadow-Flip-Angular\dist\shadow-flip-angular\browser\index.html
```

- Nesse caso, a pasta correta para o Firebase Hosting será:

```text
dist/shadow-flip-angular/browser
```

✅ → pasta pública = `dist/shadow-flip-angular/browser`

❌ → NÃO coloque o caminho completo do arquivo!

> 💡 A propriedade `public` recebe **a pasta**, não o caminho completo do arquivo.