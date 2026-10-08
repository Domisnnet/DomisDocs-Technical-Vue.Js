---
title: Login e Associação ao Firebase
---

<h1>🔐 7. Login e Associação ao Firebase:</h1>

<h2>Autenticação:</h2>

> Para Logar Execute:

```bash
firebase login
```

- depois:

```bash
firebase projects:list
```

> O navegador será aberto para autenticação com sua conta Google.
>
> Depois do login, liste os projetos disponíveis:
>
> O projeto criado no Firebase Console deverá aparecer na lista.

- Exemplo:

```text
Project Display Name    Project ID
shadow-angular          shadow-angular
```

<h3>🔗 Associar projeto:</h3>

> Selecione shadow-angular e use alias default. Confirme com:

```bash
firebase use --add
```

---

<h3>📂 Entrar na pasta do projeto:</h3>

> Navegue até a pasta raiz do projeto Angular.

<h4>Windows:</h4>

```powershell
cd "C:\Projects\Shadow-Flip-Angular"
```

<h4>macOS ou Linux:</h4>

```bash
cd ~/Projects/Shadow-Flip-Angular
```

> Confirme se está na pasta correta.

<h4>Windows:</h4>

```powershell
dir
```

<h4>macOS ou Linux:</h4>

```bash
ls
```

> A pasta deverá conter arquivos ou diretórios semelhantes a:

```bash
angular.json
package.json
src/
```

> 💡 Execute os comandos do Firebase a partir da raiz do projeto Angular.