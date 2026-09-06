# Presentación Climate Week Medellín 2026

Versión preparada para **GitHub Pages** y para incrustarse por URL en **Google Sites**.

## Publicación en GitHub Pages
Sube a la raíz del repositorio:

- `index.html`
- `.nojekyll`
- `favicon.svg`
- `favicon-32.png`
- `apple-touch-icon.png`
- carpeta `img/` completa

En GitHub: **Settings → Pages → Deploy from a branch → main / root**.

## Incrustación en Google Sites
En Google Sites: **Insertar → Incorporar → URL** y pega la URL pública de GitHub Pages.

La versión incluye una capa responsive específica para iframe:

- toma la altura real del bloque de Google Sites;
- evita alturas mínimas que provoquen recortes;
- permite scroll interno solo cuando una diapositiva lo necesita;
- adapta tarjetas, videos, imágenes y controles a escritorio, tablet y móvil;
- oculta el botón de pantalla completa dentro del iframe;
- abre los enlaces externos en una pestaña nueva;
- incluye favicon de hoja en SVG y PNG.

Recomendación visual: en Google Sites asigna al bloque embebido una altura amplia (aprox. 650–800 px en escritorio) para que la mayoría de diapositivas se vean sin scroll. El código sigue funcionando si el bloque es más bajo.
