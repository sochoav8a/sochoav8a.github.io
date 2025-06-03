# Santiago Ochoa — Portfolio

Portfolio personal construido con **Astro v4** y **Tailwind CSS**, desplegado automáticamente en GitHub Pages.

> **Live Site:** [https://sochoav8a.github.io/](https://sochoav8a.github.io/)

## 🚀 Características

- **Diseño moderno** con gradientes y animaciones suaves
- **Totalmente responsivo** para todos los dispositivos
- **Optimizado para rendimiento** con Astro
- **Despliegue automático** con GitHub Actions
- **SEO optimizado** con meta tags completos

## 🛠️ Stack Tecnológico

- **Framework:** Astro v4
- **Styling:** Tailwind CSS
- **Animations:** CSS personalizado
- **Deployment:** GitHub Pages + GitHub Actions
- **Package Manager:** npm

## 📁 Estructura del Proyecto

```text
/
├── public/
│   └── favicon.svg
├── src/
│   ├── components/
│   │   ├── Header.astro      # Navegación principal
│   │   ├── Hero.astro        # Sección hero con headline
│   │   ├── About.astro       # Información personal
│   │   ├── Projects.astro    # Showcase de proyectos
│   │   ├── Skills.astro      # Habilidades técnicas
│   │   ├── Contact.astro     # Formulario de contacto
│   │   └── Footer.astro      # Pie de página
│   ├── layouts/
│   │   └── Layout.astro      # Layout principal
│   └── pages/
│       └── index.astro       # Página principal
├── .github/workflows/
│   └── deploy-astro.yml      # GitHub Actions workflow
├── astro.config.mjs          # Configuración de Astro
├── tailwind.config.mjs       # Configuración de Tailwind
└── package.json
```

## 🧞 Comandos Disponibles

| Comando                   | Acción                                           |
| :------------------------ | :----------------------------------------------- |
| `npm install`             | Instala las dependencias                        |
| `npm run dev`             | Inicia el servidor de desarrollo local          |
| `npm run build`           | Construye el sitio para producción              |
| `npm run preview`         | Vista previa del sitio construido localmente    |

## 🎨 Secciones del Portfolio

### Hero Section
- **Headline:** "Santiago Ochoa — Developer & Data Wizard"
- Gradiente animado y call-to-action buttons
- Indicador de scroll animado

### About
- Información personal y background profesional
- Cards con especialidades (Full-Stack, Data Science, Problem Solving)
- Link a CV/Resume

### Projects
- Showcase de 4 proyectos principales
- Tech stack tags para cada proyecto
- Links a GitHub y demos en vivo

### Skills
- 4 categorías: Frontend, Backend, Data Science & ML, DevOps & Cloud
- Barras de progreso animadas
- Grid de herramientas adicionales

### Contact
- Información de contacto con iconos
- Formulario de contacto funcional
- Links a redes sociales

## 🚀 Despliegue

El sitio se despliega automáticamente en GitHub Pages usando GitHub Actions:

1. **Push a main** → Trigger del workflow
2. **Build automático** → Astro construye el sitio
3. **Deploy a Pages** → Disponible en la URL

### Manual Deploy
```bash
npm run build
git add .
git commit -m "Update portfolio"
git push
```

## 🔧 Configuración

### Variables de Entorno
- **Site URL:** Configurado en `astro.config.mjs`
- **Form Action:** Actualizar en `Contact.astro` para formulario funcional

### Personalización
- **Colores:** Modificar en `tailwind.config.mjs`
- **Contenido:** Editar directamente en los componentes
- **Proyectos:** Actualizar array en `Projects.astro`
- **Skills:** Modificar arrays en `Skills.astro`

## 📱 Responsivo

- **Mobile First:** Diseño optimizado para móviles
- **Breakpoints:** sm, md, lg, xl
- **Navigation:** Menú hamburguesa en mobile
- **Grid Layouts:** Adaptables según el dispositivo

## ⚡ Performance

- **Astro Islands:** Hidratación selectiva
- **CSS-in-JS:** Styles scopeados automáticamente
- **Asset Optimization:** Imágenes y recursos optimizados
- **Lighthouse Score:** 90+ en todas las métricas

## 🤝 Contribuir

Este es un proyecto personal, pero si encuentras bugs o tienes sugerencias:

1. Fork el proyecto
2. Crea tu feature branch
3. Commit tus cambios
4. Push a la branch
5. Abre un Pull Request

## 📄 Licencia

Este proyecto está bajo la Licencia MIT. Ve el archivo `LICENSE` para más detalles.

---

**Construido con ❤️ por Santiago Ochoa**

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
