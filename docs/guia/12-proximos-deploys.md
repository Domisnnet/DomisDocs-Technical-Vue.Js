---
title: Próximos Deploys
---

<h1>🔁 12. Próximos Deploys</h1>

> Depois que a configuração inicial estiver pronta, os próximos deploys ficam muito mais simples.

- Execute:

```bash
ng build --configuration production
firebase deploy --only hosting
```

- Ou utilize:

```bash
npm run build
firebase deploy --only hosting
```

<h3>Automatizando pelo <code>package.json:</code></h3>

> Você também pode criar um script:

```json
{
  "scripts": {
    "build:production": "ng build --configuration production",
    "deploy:hosting": "npm run build:production && firebase deploy --only hosting"
  }
}
```

- Depois, execute:

```bash
npm run deploy:hosting
```

<h3>Deploy de todos os recursos Firebase:</h3>

> O comando:

```bash
firebase deploy
```

> pode publicar outros recursos Firebase configurados no projeto.
>
> Para publicar somente o site, prefira:

```bash
firebase deploy --only hosting
```

- Depois basta rodar:

```bash
npm run deploy:hosting
```