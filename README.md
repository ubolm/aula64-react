# Aula64 React

Sitio web de Aula64 construido con React, React Router y Vite.

Dominio final previsto:

```text
https://www.aula64.com.ar
```

## Cómo abrir el proyecto

```bash
npm install
npm run dev
```

Vite normalmente abre el sitio en:

```text
http://localhost:5173
```

## Scripts

```bash
npm run dev
npm run build
npm run preview
```

## Rutas principales

- `/`
- `/chesscity`
- `/clases`
- `/sobre-nosotros`
- `/contacto`
- `/condiciones-de-uso`
- `/politica-de-privacidad`

## Estructura

```text
src/
  components/
    Header.jsx
    Footer.jsx
    ScrollToTop.jsx
  pages/
    Inicio.jsx
    ChessCity.jsx
    Clases.jsx
    SobreNosotros.jsx
    Contacto.jsx
    CondicionesUso.jsx
    PoliticaPrivacidad.jsx
  styles/
    global.css
public/
  img/
  _redirects
  robots.txt
  sitemap.xml
  site.webmanifest
```

## Estado actual

- Páginas principales simplificadas y convertidas a JSX real.
- Redes sociales reales en el footer.
- Imágenes activas optimizadas en WebP.
- Dependencias fijadas a versiones concretas.
- SEO básico agregado en `index.html`.
- `robots.txt`, `sitemap.xml`, `site.webmanifest`, `_redirects` y `vercel.json` incluidos.
- Redirecciones SPA listas para Netlify y Vercel.

## Notas de despliegue

Para Netlify, `public/_redirects` permite que rutas como `/clases` funcionen al entrar directo.

Para Vercel, `vercel.json` aplica la misma idea mediante rewrites.

Si se usa otro hosting estático, configurar fallback de todas las rutas a `index.html`.

## Publicación recomendada

1. Subir el proyecto a un repositorio de GitHub.
2. Conectar el repositorio en Vercel o Netlify.
3. Usar estos comandos de despliegue:

```text
Build command: npm run build
Output directory: dist
```

4. Configurar el dominio final:

```text
www.aula64.com.ar
```

5. Cuando el proveedor indique los DNS, cargarlos en el panel del dominio.

## CI/CD

El proyecto incluye un flujo de GitHub Actions en `.github/workflows/ci.yml`.

Cada cambio enviado a `main` o cada pull request ejecuta:

```bash
npm ci
npm run build
```

Si Vercel o Netlify están conectados al repositorio, el deploy queda automatizado desde GitHub.

## Notas legales

Las páginas legales son orientativas para una web educativa. Si Aula64 incorpora pagos online, cuentas de usuario, formularios avanzados, newsletter, analítica publicitaria o plataforma privada, conviene revisarlas legalmente.
