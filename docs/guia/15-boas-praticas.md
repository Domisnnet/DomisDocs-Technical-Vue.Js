---
title: Boas Práticas
---

<h1>🧠 15. Boas Práticas:</h1>

<h3>⚡ Utilize o build de produção</h3>

> Para publicar, prefira:

```bash
ng build --configuration production
```

O build de produção aplica otimizações adequadas para publicação.

<h3>📁 Não versione <code>dist:</code></h3>

> Adicione ao `.gitignore:`

```gitignore
dist/
.firebase/
```

---

<h3>🧪 Teste antes de publicar:</h3>

> Utilize o emulador do Hosting:

```bash
firebase emulators:start --only hosting
```

---

<h3>🔬 Utilize canais de preview:</h3>

> Para criar uma publicação temporária:

```bash
firebase hosting:channel:deploy preview
```

Observação: 
> 💡 O Firebase fornecerá uma URL de preview que pode ser utilizada para validação antes do deploy em produção.

---

<h3>🌎 Utilize aliases para ambientes:</h3>

> Exemplo de `.firebaserc:`

```json
{
  "projects": {
    "development": "shadow-angular-dev",
    "staging": "shadow-angular-staging",
    "production": "shadow-angular"
  }
}
```

> Para selecionar um ambiente:

```bash
firebase use production
```

> Depois:

```bash
firebase deploy --only hosting
```

> Antes de executar um deploy, confirme sempre o projeto ativo:

```bash
firebase use
```

---

<h3>🔐 Evite publicar arquivos sensíveis:</h3>

> Nunca coloque no diretório público:

- Chaves privadas.
- Arquivos `.env` contendo segredos.
- Credenciais de service account.
- Tokens de acesso.
- Arquivos administrativos do Firebase.

Observação:
> 💡 A configuração do Firebase utilizada no front-end não deve ser confundida com credenciais privadas.
> 
> Segredos devem permanecer em ambientes protegidos, no back-end ou no pipeline de CI/CD.

---

<h3>Angular client-side × SSR:</h3>

> Este tutorial utiliza o **Firebase Hosting clássico** para uma aplicação Angular client-side/SPA.
>
> Se o projeto utiliza Angular SSR, prerenderização ou uma arquitetura full-stack, o processo de publicação pode ser diferente.

- Para aplicações Angular com necessidades de renderização no servidor e integração com GitHub, considere o **Firebase App Hosting**.

> 
| 💡 Lembrete:                                                 |
| :------------------------------------------------------------|
| Sempre use `--configuration production` no build             |
| Adicione `dist/` e `.firebase/` no `.gitignore`              |
| Teste localmente antes de publicar                           |
| Use canais de preview antes de produção                      |
| Confirme ambiente ativo com `firebase use` antes de publicar |
| Nunca publique credenciais privadas na pasta pública         |
| Para projetos com SSR, considere Firebase App Hosting        |