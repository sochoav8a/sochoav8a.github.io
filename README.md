# Sochoav8a Dev - Sitio Astro

Este es un sitio web estático construido con [Astro](https://astro.build) y configurado para desplegarse automáticamente en GitHub Pages.

## 🚀 Estructura del proyecto

```text
/
├── public/
│   └── favicon.svg
├── src/
│   └── pages/
│       └── index.astro
├── docs/              # Carpeta generada para GitHub Pages
├── .github/
│   └── workflows/
│       └── deploy-astro.yml
└── package.json
```

## 🧞 Comandos disponibles

| Comando                   | Acción                                           |
| :------------------------ | :----------------------------------------------- |
| `npm install`             | Instala las dependencias                        |
| `npm run dev`             | Inicia el servidor de desarrollo local en `localhost:4321` |
| `npm run build`           | Construye el sitio para producción en `./dist/` |
| `npm run preview`         | Vista previa del sitio construido localmente     |
| `npm run predeploy`       | Copia `dist/` a `docs/` para GitHub Pages       |

## 📦 Despliegue en GitHub Pages

### Opción 1: Carpeta docs/ (Recomendado para simplicidad)

1. Ejecuta `npm run build && npm run predeploy`
2. Haz commit y push: `git add . && git commit -m "Update site" && git push`
3. En GitHub → Settings → Pages, selecciona:
   - **Branch:** `main`
   - **Folder:** `/docs`

### Opción 2: GitHub Actions (Automatizado)

1. Ejecuta `npm run build && git add . && git commit -m "Update site" && git push`
2. En GitHub → Settings → Pages, selecciona:
   - **Branch:** `gh-pages`
   - **Folder:** `/ (root)`
3. GitHub Actions se encargará automáticamente del despliegue

## 🔧 Configuración

- **Base URL:** `/sochoav8a-dev/` (configurado en `astro.config.mjs`)
- **Sitio público:** `https://sochoav8a.github.io/sochoav8a-dev/`

## 📝 Notas importantes

- El archivo `astro.config.mjs` incluye la configuración `base: '/sochoav8a-dev/'` necesaria para GitHub Pages
- La carpeta `docs/` se genera automáticamente y contiene el sitio construido
- El workflow de GitHub Actions está configurado para desplegar automáticamente en cada push a `main`

```sh
npm create astro@latest -- --template minimal
```

[![Open in StackBlitz](https://developer.stackblitz.com/img/open_in_stackblitz.svg)](https://stackblitz.com/github/withastro/astro/tree/latest/examples/minimal)
[![Open with CodeSandbox](https://assets.codesandbox.io/github/button-edit-lime.svg)](https://codesandbox.io/p/sandbox/github/withastro/astro/tree/latest/examples/minimal)
[![Open in GitHub Codespaces](https://github.com/codespaces/badge.svg)](https://codespaces.new/withastro/astro?devcontainer_path=.devcontainer/minimal/devcontainer.json)

> 🧑‍🚀 **Seasoned astronaut?** Delete this file. Have fun!

## 🚀 Project Structure

Inside of your Astro project, you'll see the following folders and files:

```text
/
├── public/
├── src/
│   └── pages/
│       └── index.astro
└── package.json
```

Astro looks for `.astro` or `.md` files in the `src/pages/` directory. Each page is exposed as a route based on its file name.

There's nothing special about `src/components/`, but that's where we like to put any Astro/React/Vue/Svelte/Preact components.

Any static assets, like images, can be placed in the `public/` directory.

## 🧞 Commands

All commands are run from the root of the project, from a terminal:

| Command                   | Action                                           |
| :------------------------ | :----------------------------------------------- |
| `npm install`             | Installs dependencies                            |
| `npm run dev`             | Starts local dev server at `localhost:4321`      |
| `npm run build`           | Build your production site to `./dist/`          |
| `npm run preview`         | Preview your build locally, before deploying     |
| `npm run astro ...`       | Run CLI commands like `astro add`, `astro check` |
| `npm run astro -- --help` | Get help using the Astro CLI                     |

## 👀 Want to learn more?

Feel free to check [our documentation](https://docs.astro.build) or jump into our [Discord server](https://astro.build/chat).
